const github='https://github.com/AuronSavant';
const projects=[
 ['FoodDB Kitchen','Ingredients, meals, and a visual way to explore what to cook.','food','live','https://fooddb-kitchen.pages.dev'],
 ['SeriesRatings','Explore episode ratings and the shape of a series.','chart','live','https://seriesratings.pages.dev'],
 ['Steam Atlas','Game rankings, genres, and discoveries from Steam data.','game','live','https://steam-atlas-explorer.pages.dev'],
 ['Itch Atlas','An explorer for indie games and itch.io rankings.','game','live','https://itch-atlas.pages.dev'],
 ['Songbook','A place for songs, artists, ratings, and discoveries.','music','live','https://songbook-aurons.pages.dev'],
 ['Offbeat','A music companion with YouTube connections.','music','live','https://offbeat-aurons.pages.dev'],
 ['PaperAid','Read research papers and unpack their methods and results.','paper','lab'],
 ['PaperTracker','Research discovery, discipline browsing, and a paper watchlist.','paper','lab'],
 ['ConceptMap','A garden for concepts and the connections between them.','map','lab'],
 ['MarketComparer','Compare shopping prices and build a cheaper basket.','chart','lab'],
 ['Healthcare Transparency','Explore and compare hospital pricing data.','chart','lab'],
 ['OECDMasterPass','Explore economic data, regression, and places.','chart','lab'],
 ['Maps','Maps, geography, and visual explorations.','map','lab'],
 ['Maps Atlas','Another thread in the mapping workshop.','map','lab'],
 ['Europa Homes','A European property explorer with maps and saved prices.','map','lab'],
 ['NutriOptimize','A nutrition project in the workshop.','food','lab'],
 ['API SaaS Maker','Research and prototypes for API-based tools.','code','lab'],
 ['Pixiv Analyzer','Artwork tags, popularity trends, and monthly counts.','chart','lab'],
 ['WikiLens','Explore Wikipedia across languages, people, and lineages.','paper','lab'],
 ['MAL Lens','Explore unusual MyAnimeList rankings.','chart','side'],
 ['Manga Workbench','Japanese manga translation, lettering, and editable pages.','paper','side'],
 ['Imgur Resizer','Image tiles, cropping, and BBCode for MAL layouts.','code','side'],
 ['Yohaku','A Japanese word adventure where words become actions.','japan','side'],
 ['Arcane Expanded','New battle modes and classes for an arena game.','game','side'],
 ['BookRank / SteamGames','A separate catalog and ranking experiment.','paper','side'],
 ['Nazeka Chrome','A Chrome port of the Japanese popup dictionary.','japan','extra',github+'/nazeka-chrome'],
 ['EpubMerge','Merge EPUB books with a table of contents for each one.','paper','extra',github+'/EpubMerge'],
 ['KanjiUlt','Kanji by frequency, connected to compound words.','japan','extra',github+'/KanjiUlt'],
 ['GeoEcon Regression','An experiment exploring geography and economic data.','chart','extra',github+'/GeoEcon-Regression'],
 ['Songfinder','A song-finding project in the workshop.','music','extra']
].map(([name,description,kind,group,url],i)=>({name,description,kind,group,url:url||github,live:group==='live',i}));
const colors={food:['#dde0c6','#798264'],chart:['#e3cebb','#a4654d'],game:['#d6d9ce','#657469'],music:['#dbccce','#965c61'],paper:['#ddd6c5','#8e795a'],map:['#cbd8d0','#60817a'],code:['#d1d6dc','#667485'],japan:['#ead0bc','#a4624d']};
function art(kind,i){const [bg,ink]=colors[kind];let shapes='';
 if(kind==='chart') shapes='<path d="M43 99H225M43 99V25" opacity=".4"/><path d="M55 81L85 72L113 83L143 47L175 57L212 28" stroke-width="3"/><g fill="'+ink+'"><circle cx="85" cy="72" r="4"/><circle cx="143" cy="47" r="4"/><circle cx="212" cy="28" r="4"/></g>';
 if(kind==='music') shapes='<circle cx="125" cy="64" r="47" fill="'+ink+'" stroke="none"/><g stroke="'+bg+'" opacity=".4"><circle cx="125" cy="64" r="35"/><circle cx="125" cy="64" r="29"/><circle cx="125" cy="64" r="22"/></g><circle cx="125" cy="64" r="10" fill="'+bg+'"/><path d="M192 28V81Q173 70 175 88Q190 99 192 81M192 28L214 23V71Q197 61 197 78Q213 91 214 71" stroke-width="2"/>';
 if(kind==='paper') shapes='<g transform="rotate(-8 125 60)"><rect x="78" y="18" width="80" height="92" fill="'+bg+'"/><rect x="91" y="10" width="80" height="94" fill="#f7efdf"/><path d="M104 32H157M104 43H147M104 58H157M104 69H152M104 80H139" opacity=".6"/><path d="M168 97L190 68L196 73L174 102Z" fill="'+ink+'"/></g>';
 if(kind==='map') shapes='<path d="M39 33L94 22L154 39L212 22V96L154 112L94 95L39 108Z" fill="'+bg+'"/><path d="M94 22V95M154 39V112" opacity=".4"/><path d="M51 73Q102 38 133 71T198 55" stroke-dasharray="4 5"/><path d="M139 49C115 17 164 16 139 49Z" fill="'+ink+'"/><circle cx="139" cy="32" r="4" stroke="'+bg+'"/>';
 if(kind==='code') shapes='<rect x="49" y="20" width="157" height="88" rx="5" fill="#f3ede2"/><path d="M49 37H206" opacity=".5"/><circle cx="60" cy="29" r="2"/><circle cx="70" cy="29" r="2"/><circle cx="80" cy="29" r="2"/><path d="M103 54L83 72L103 90M149 54L169 72L149 90M139 49L117 96" stroke-width="3"/>';
 if(kind==='japan') shapes='<circle cx="132" cy="65" r="46" fill="#f5e9d5" stroke="none"/><text x="132" y="82" text-anchor="middle" fill="'+ink+'" stroke="none" font-family="serif" font-size="48">'+(i%2?'余白':'言葉')+'</text><path d="M52 97Q78 82 66 50M205 29Q188 44 208 58" opacity=".5"/>';
 if(kind==='game') shapes='<path d="M96 41H161Q178 41 190 86Q192 105 175 98L153 81H103L81 98Q62 105 67 83Q78 41 96 41Z" fill="#f3eddf" stroke-width="2"/><path d="M95 52V75M84 63H106" stroke-width="4"/><circle cx="157" cy="58" r="4" fill="'+ink+'"/><circle cx="169" cy="70" r="4" fill="'+ink+'"/>';
 if(kind==='food') shapes='<ellipse cx="126" cy="69" rx="49" ry="41" fill="#f5efdd"/><ellipse cx="126" cy="69" rx="37" ry="30" opacity=".4"/><path d="M101 77Q87 44 117 49Q139 35 149 61Q172 87 136 91Z" fill="'+ink+'" opacity=".65"/><path d="M54 29V99M46 29V48Q54 57 62 48V29M198 27V99M198 27Q215 61 198 62" stroke-width="2"/>';
 return `<svg viewBox="0 0 260 126" aria-hidden="true"><g fill="none" stroke="${ink}" stroke-width="1.5">${shapes}</g></svg>`;
}
function card(p,x,y,compact=false){const a=document.createElement('a');a.className=`project paper ${p.live?'live':''} ${compact?'compact':''}`;a.href=p.url;a.target='_blank';a.rel='noopener noreferrer';a.style.cssText=`left:${x}px;top:${y}px;--tilt:${[-3,2,-1,3,-2,1][p.i%6]}deg;--art-bg:${colors[p.kind][0]}`;a.innerHTML=`<span class="tape"></span><div class="project-art"><span class="number">${String(p.i+1).padStart(2,'0')} /</span>${art(p.kind,p.i)}</div><h3>${p.name}</h3><p>${p.description}</p><div class="card-footer"><span class="status">${p.live?'Live on the web':p.url===github?'In the workshop':'Public repository'}</span><span>${p.live?'Open project':p.url===github?'GitHub':'View source'} ↗</span></div>`;return a;}
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
const dialog=document.querySelector('#index'),toggle=document.querySelector('#list-toggle'),search=document.querySelector('#search');function renderIndex(){const q=search.value.toLowerCase();const found=projects.filter(p=>(p.name+' '+p.description).toLowerCase().includes(q));document.querySelector('#project-list').replaceChildren(...found.map(p=>{const a=document.createElement('a');a.className='index-link';a.href=p.url;a.target='_blank';a.rel='noopener noreferrer';a.innerHTML=`<strong>${p.name} ↗</strong><small>${p.live?'LIVE APP':p.url===github?'GITHUB PROFILE':'PUBLIC REPO'}</small><p>${p.description}</p>`;return a;}));document.querySelector('#no-results').hidden=!!found.length;}
toggle.onclick=()=>{dialog.showModal();toggle.setAttribute('aria-expanded','true');search.focus();};document.querySelector('#close-index').onclick=()=>dialog.close();dialog.addEventListener('close',()=>toggle.setAttribute('aria-expanded','false'));dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});search.oninput=renderIndex;window.addEventListener('resize',home);renderIndex();home();
// When keyboard navigation enters a card, bring it into the viewport.
board.addEventListener('focusin',e=>{const a=e.target.closest('.project,.about,.coffee');if(a){focus(parseFloat(a.style.left)+a.offsetWidth/2,parseFloat(a.style.top)+a.offsetHeight/2,Math.max(scale,.65));}});
