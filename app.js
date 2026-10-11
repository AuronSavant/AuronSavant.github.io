(async function(){
const github='https://github.com/AuronSavant';
const response=await fetch('projects.json');
if(!response.ok)throw new Error('Could not load projects.json');
const projects=(await response.json()).map((p,i)=>({...p,i,live:p.group==='live'}));
const escapeText=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function card(p,x,y,compact=false){
 const a=document.createElement('a');
 a.className=`project paper ${p.live?'live':''} ${compact?'compact':''} ${p.screenshot?'has-screenshot':'text-card'}`;
 a.href=p.url;a.target='_blank';a.rel='noopener noreferrer';
 a.style.cssText=`left:${x}px;top:${y}px;--tilt:${[-3,2,-1,3,-2,1][p.i%6]}deg`;
 const preview=p.screenshot?`<div class="project-art"><img src="${escapeText(p.screenshot)}" alt="${escapeText(p.name)} app screenshot" loading="lazy" draggable="false"></div>`:'';
 a.innerHTML=`<span class="tape"></span>${preview}<h3>${escapeText(p.name)}</h3><p>${escapeText(p.description)}</p><div class="card-footer"><span class="status">${p.live?'Live on the web':p.url===github?'In the workshop':'Public repository'}</span><span>${p.live?'Open project':p.url===github?'GitHub':'View source'} ↗</span></div>`;
 return a;
}
projects.filter(p=>p.group==='live').forEach((p,i)=>document.querySelector('#live-cards').append(card(p,130+i%3*310,300+Math.floor(i/3)*310)));
projects.filter(p=>p.group==='lab').forEach((p,i)=>{const x=i<3?1580+i*310:1920+(i-3)%2*310;const y=i<3?300:610+Math.floor((i-3)/2)*310;document.querySelector('#lab-cards').append(card(p,x,y));});
projects.filter(p=>p.group==='side').forEach((p,i)=>document.querySelector('#side-cards').append(card(p,130+i%3*310,1470+Math.floor(i/3)*310)));
projects.filter(p=>p.group==='extra').forEach((p,i)=>document.querySelector('#side-cards').append(card(p,i<3?130+i*290:130+(i-3)*290,i<3?1000:2140,true)));
// Keep the image cluster clear of the project rows.
document.querySelector('.polaroid.wide').style.left='1550px';document.querySelector('.polaroid.wide').style.top='1460px';
document.querySelector('.sticky').style.left='785px';document.querySelector('.sticky').style.top='1245px';
const viewport=document.querySelector('#viewport'),board=document.querySelector('#board');let x=0,y=0,scale=1;let moved=false,drag=null;const pointers=new Map();let pinch=null;
function paint(){board.style.transform=`translate(${x}px,${y}px) scale(${scale})`;document.querySelector('#zoom-value').value=Math.round(scale*100)+'%';}
function focus(cx,cy,s=scale){scale=Math.max(.18,Math.min(1.65,s));x=innerWidth/2-cx*scale;y=innerHeight/2-cy*scale;paint();}
function home(){focus(1290,1050,Math.min(innerWidth>1000?.76:.92,(innerWidth-35)/450,(innerHeight-145)/580));}
function zoom(f,cx=innerWidth/2,cy=innerHeight/2){const next=Math.max(.18,Math.min(1.65,scale*f));x=cx-(cx-x)*next/scale;y=cy-(cy-y)*next/scale;scale=next;paint();}
viewport.addEventListener('pointerdown',e=>{if(e.button!==0)return;pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});moved=false;if(pointers.size===1){drag={id:e.pointerId,startX:e.clientX,startY:e.clientY,x,y};}else if(pointers.size===2){const a=[...pointers.values()];pinch={distance:Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y),cx:(a[0].x+a[1].x)/2,cy:(a[0].y+a[1].y)/2};moved=true;} });
window.addEventListener('pointermove',e=>{if(!pointers.has(e.pointerId))return;pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});if(pointers.size===2&&pinch){const a=[...pointers.values()],distance=Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y),cx=(a[0].x+a[1].x)/2,cy=(a[0].y+a[1].y)/2;zoom(distance/pinch.distance,pinch.cx,pinch.cy);x+=cx-pinch.cx;y+=cy-pinch.cy;pinch={distance,cx,cy};moved=true;paint();}else if(drag){const dx=e.clientX-drag.startX,dy=e.clientY-drag.startY;if(Math.hypot(dx,dy)>5){moved=true;viewport.classList.add('dragging');x=drag.x+dx;y=drag.y+dy;paint();}}});
function release(e){pointers.delete(e.pointerId);pinch=null;drag=null;viewport.classList.remove('dragging');if(pointers.size){const [id,p]=[...pointers][0];drag={id,startX:p.x,startY:p.y,x,y};}}
window.addEventListener('pointerup',release);window.addEventListener('pointercancel',release);window.addEventListener('blur',()=>{pointers.clear();drag=null;pinch=null;viewport.classList.remove('dragging');});
viewport.addEventListener('click',e=>{if(moved){e.preventDefault();e.stopPropagation();moved=false;}},true);viewport.addEventListener('dragstart',e=>e.preventDefault());
viewport.addEventListener('wheel',e=>{e.preventDefault();zoom(Math.exp(-e.deltaY*.0012),e.clientX,e.clientY);},{passive:false});
document.querySelector('#zoom-in').onclick=()=>zoom(1.2);document.querySelector('#zoom-out').onclick=()=>zoom(1/1.2);document.querySelector('#reset').onclick=home;document.querySelector('#overview').onclick=()=>focus(1300,1225,Math.min((innerWidth-60)/2600,(innerHeight-150)/2450));
document.querySelectorAll('[data-jump]').forEach(b=>b.onclick=()=>{const destinations={home:[1290,1050],live:[575,575],lab:[2050,870]};const [cx,cy]=destinations[b.dataset.jump];if(b.dataset.jump==='home')home();else focus(cx,cy,Math.min(.9,(innerWidth-50)/1000,(innerHeight-145)/850));});
viewport.addEventListener('keydown',e=>{if(e.target!==viewport)return;const d={ArrowLeft:[80,0],ArrowRight:[-80,0],ArrowUp:[0,80],ArrowDown:[0,-80]};if(d[e.key]){e.preventDefault();x+=d[e.key][0];y+=d[e.key][1];paint();}else if(e.key==='+'||e.key==='=')zoom(1.2);else if(e.key==='-')zoom(1/1.2);else if(e.key==='Home'){e.preventDefault();home();}});
const dialog=document.querySelector('#index'),toggle=document.querySelector('#list-toggle'),search=document.querySelector('#search');function renderIndex(){const q=search.value.toLowerCase();const found=projects.filter(p=>(p.name+' '+p.description).toLowerCase().includes(q));document.querySelector('#project-list').replaceChildren(...found.map(p=>{const a=document.createElement('a');a.className='index-link';a.href=p.url;a.target='_blank';a.rel='noopener noreferrer';a.innerHTML=`<strong>${escapeText(p.name)} ↗</strong><small>${p.live?'LIVE APP':p.url===github?'GITHUB PROFILE':'PUBLIC REPO'}</small><p>${escapeText(p.description)}</p>`;return a;}));document.querySelector('#no-results').hidden=!!found.length;}
toggle.onclick=()=>{dialog.showModal();toggle.setAttribute('aria-expanded','true');search.focus();};document.querySelector('#close-index').onclick=()=>dialog.close();dialog.addEventListener('close',()=>toggle.setAttribute('aria-expanded','false'));dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});search.oninput=renderIndex;window.addEventListener('resize',home);renderIndex();home();
document.querySelector('.brand').addEventListener('click',e=>{e.preventDefault();home();});
// Bring keyboard-focused cards into view without moving a card under the mouse.
let keyboardNavigation=false;
window.addEventListener('keydown',()=>{keyboardNavigation=true;});
window.addEventListener('pointerdown',()=>{keyboardNavigation=false;},true);
board.addEventListener('focusin',e=>{if(!keyboardNavigation)return;const a=e.target.closest('.project,.about,.coffee');if(a){focus(parseFloat(a.style.left)+a.offsetWidth/2,parseFloat(a.style.top)+a.offsetHeight/2,Math.max(scale,.65));}});

})().catch(error=>{console.error(error);document.querySelector('#help').textContent='Could not load projects. Please refresh the page.';});
