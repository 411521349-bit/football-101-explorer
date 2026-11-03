/* Football 101 – app */
const $=id=>document.getElementById(id);
const NS="http://www.w3.org/2000/svg";
function el(t,a,p){const e=document.createElementNS(NS,t);for(const k in a)e.setAttribute(k,a[k]);if(p)p.appendChild(e);return e}
function esc(s){return String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]))}
function press(box,btn){[...box.querySelectorAll("button")].forEach(b=>b.setAttribute("aria-pressed",b===btn))}
function flag(code,cls){const iso=ISO[code]||code;if(!iso)return"";return '<img class="flag'+(cls?" "+cls:"")+'" src="https://flagcdn.com/w80/'+iso+'.png" alt="" loading="lazy" onerror="this.style.visibility=\'hidden\'">'}

/* ---------- Trophy art (reference photos and original SVG icons) ---------- */
let _gid=0;
function shade(hex,amt){const n=parseInt(hex.slice(1),16);let r=n>>16,g=(n>>8)&255,b=n&255;const t=amt<0?0:255,p=Math.abs(amt);r=Math.round((t-r)*p+r);g=Math.round((t-g)*p+g);b=Math.round((t-b)*p+b);return"#"+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1)}
const TROPHY_ART={globe:"world-cup",goblet:"champions-league",chalice:"euro",tall:"afcon",medal:"club-world-cup",plate:"asian-cup",ball:"ballon-dor-tight",best:"the-best",kopa:"kopa",glove:"yashin",boot:"golden-boot"};
function trophy(kind,col,stripes){
  if(TROPHY_ART[kind])return '<img class="trophy" src="assets/trophies/'+TROPHY_ART[kind]+'.png?v=assets-20261104" alt="" aria-hidden="true">';
  const id="m"+(++_gid),M="url(#"+id+")",S="url(#"+id+"s)";
  const defs='<defs><linearGradient id="'+id+'" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="'+shade(col,-.35)+'"/><stop offset=".35" stop-color="'+shade(col,.45)+'"/><stop offset=".55" stop-color="'+col+'"/><stop offset="1" stop-color="'+shade(col,-.45)+'"/></linearGradient><radialGradient id="'+id+'s" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="'+shade(col,.6)+'"/><stop offset=".5" stop-color="'+col+'"/><stop offset="1" stop-color="'+shade(col,-.5)+'"/></radialGradient></defs>';
  const base='<path d="M24 50h16l2 4H22z" fill="'+M+'"/><rect x="18" y="54" width="28" height="7" rx="2" fill="#2a2018"/><rect x="18" y="54" width="28" height="2" fill="#ffffff" opacity=".12"/>';
  const k={
   globe:'<circle cx="32" cy="18" r="13" fill="'+S+'"/><path d="M19 18h26M32 5c-7 8-7 18 0 26M32 5c7 8 7 18 0 26M21 11h22M21 25h22" fill="none" stroke="#000" stroke-width=".9" opacity=".25"/><path d="M24 29q8 5 16 0l-4 6-2 15h-4l-2-15z" fill="'+M+'"/><path d="M27 36h10" stroke="#000" opacity=".2"/>'+base,
   goblet:'<path d="M20 6h24l-1 14q-2 12-11 13-9-1-11-13z" fill="'+M+'"/><path d="M20 6h24" stroke="'+shade(col,.6)+'" stroke-width="2"/><path d="M32 12l2 4.5 5 .4-3.8 3.2 1.2 4.9L32 22.3 27.6 25l1.2-4.9L25 16.9l5-.4z" fill="#fff" opacity=".7"/><path d="M29 33h6l1 17h-8z" fill="'+M+'"/><ellipse cx="32" cy="41" rx="5" ry="1.8" fill="'+shade(col,.4)+'"/>'+base,
   chalice:'<path d="M18 10h28q0 16-14 20Q18 26 18 10z" fill="'+M+'"/><ellipse cx="32" cy="10" rx="14" ry="3" fill="'+shade(col,.5)+'"/><ellipse cx="32" cy="10" rx="10" ry="1.8" fill="'+shade(col,-.4)+'"/><path d="M30 30h4v8h-4z" fill="'+M+'"/><circle cx="32" cy="40" r="3.5" fill="'+S+'"/><path d="M30 43h4l2 7h-8z" fill="'+M+'"/>'+base,
   cup:'<path d="M20 10h24v12a12 12 0 0 1-24 0z" fill="'+M+'"/><path d="M20 13h-6q-1 10 8 12M44 13h6q1 10-8 12" fill="none" stroke="'+M+'" stroke-width="3"/><rect x="18" y="8" width="28" height="3" rx="1.5" fill="'+shade(col,.5)+'"/><path d="M29 34h6v16h-6z" fill="'+M+'"/>'+base,
   tall:'<circle cx="32" cy="12" r="8" fill="'+S+'"/><path d="M20 20h24q-2 8-8 10l-1 20h-6l-1-20q-6-2-8-10z" fill="'+M+'"/><g fill="'+S+'"><circle cx="22" cy="20" r="2.5"/><circle cx="27" cy="20" r="2.5"/><circle cx="32" cy="20" r="2.5"/><circle cx="37" cy="20" r="2.5"/><circle cx="42" cy="20" r="2.5"/></g>'+base,
   plate:'<circle cx="32" cy="24" r="18" fill="'+M+'"/><circle cx="32" cy="24" r="13" fill="'+S+'"/><circle cx="32" cy="24" r="13" fill="none" stroke="#000" opacity=".2"/><path d="M32 16l2.4 5 5.6.5-4.2 3.6 1.3 5.4L32 27.6l-5.1 2.9 1.3-5.4L24 21.5l5.6-.5z" fill="#fff" opacity=".8"/><path d="M28 42h8l1 8h-10z" fill="'+M+'"/>'+base,
   medal:'<path d="M22 2h8l2 14 2-14h8l-6 18h-8z" fill="#2b5fa8"/><path d="M32 16l5 6 7 1-3 7 3 7-7 1-5 6-5-6-7-1 3-7-3-7 7-1z" fill="'+M+'"/><circle cx="32" cy="30" r="8" fill="'+S+'"/><path d="M28 46h8v4h-8z" fill="'+M+'"/>'+base,
   shield:'<path d="M32 4l20 7v14c0 14-9 22-20 27C21 47 12 39 12 25V11z" fill="'+M+'"/><clipPath id="'+id+'c"><path d="M32 9l15 5v11c0 10-6 17-15 21-9-4-15-11-15-21V14z"/></clipPath><g clip-path="url(#'+id+'c)">'+((stripes||["#fff"]).map((c,i,a)=>'<rect x="'+(17+i*30/a.length)+'" y="8" width="'+(30/a.length+.5)+'" height="40" fill="'+c+'"/>').join(""))+'</g><path d="M32 9l15 5v11c0 10-6 17-15 21-9-4-15-11-15-21V14z" fill="none" stroke="#000" opacity=".3"/><circle cx="32" cy="26" r="8" fill="'+S+'" stroke="#000" stroke-opacity=".3"/><path d="M32 21l1.6 3.4 3.7.4-2.8 2.4.9 3.6L32 29l-3.4 1.8.9-3.6-2.8-2.4 3.7-.4z" fill="#fff"/>',
   ball:'<circle cx="32" cy="24" r="18" fill="'+S+'"/><path d="M32 16l7 5-2.7 8h-8.6L25 21z" fill="#000" opacity=".22"/><path d="M32 6v10M39 21l9-3M36.3 29l5 8M27.7 29l-5 8M25 21l-9-3" stroke="#000" stroke-width="1.4" opacity=".22"/><path d="M26 42h12l2 8H24z" fill="'+M+'"/>'+base,
   star:'<path d="M22 2h8l2 14 2-14h8l-6 18h-8z" fill="#2b5fa8"/><circle cx="32" cy="32" r="15" fill="'+S+'"/><circle cx="32" cy="32" r="12" fill="none" stroke="#fff" stroke-opacity=".35"/><path d="M32 23l2.8 6 6.5.6-4.9 4.3 1.5 6.4L32 37l-5.9 3.3 1.5-6.4-4.9-4.3 6.5-.6z" fill="#fff" opacity=".9"/>',
   boot:'<path d="M8 38V18q0-4 4-4h10l3 10q15 1 27 7 6 3 4 9H11q-3 0-3-2z" fill="'+M+'"/><path d="M13 19h8M13 23h9M13 27h10" stroke="#000" stroke-width="1.4" opacity=".25"/><path d="M12 40v5M22 40v5M34 40v5M46 40v5" stroke="'+shade(col,-.3)+'" stroke-width="3" stroke-linecap="round"/><rect x="10" y="48" width="44" height="8" rx="2" fill="#2a2018"/>',
   glove:'<rect x="19" y="20" width="26" height="24" rx="8" fill="'+M+'"/><rect x="19" y="5" width="6" height="20" rx="3" fill="'+M+'"/><rect x="26" y="3" width="6" height="21" rx="3" fill="'+M+'"/><rect x="33" y="4" width="6" height="21" rx="3" fill="'+M+'"/><rect x="40" y="8" width="5" height="17" rx="2.5" fill="'+M+'"/><rect x="9" y="22" width="13" height="6" rx="3" transform="rotate(30 16 25)" fill="'+M+'"/><rect x="20" y="42" width="24" height="8" rx="2" fill="#2a2018"/><path d="M22 46h20" stroke="'+col+'" stroke-width="2"/>'};
  return '<svg class="trophy" viewBox="0 0 64 64" aria-hidden="true">'+defs+(k[kind]||k.cup)+'</svg>';
}
const COMP_BADGES={copa:"copa-america",wwc:"womens-world-cup",pl:"premier-league",liga:"la-liga",seriea:"serie-a",bundes:"bundesliga",ligue1:"ligue-1",portugal:"primeira-liga",ered:"eredivisie",brasileirao:"brasileirao",mls:"mls.svg",spl:"saudi-pro-league",j1:"j1-league"};
const LEAGUE_BADGE_IDS={"Premier League":"pl","La Liga":"liga","Serie A":"seriea","Bundesliga":"bundes","Ligue 1":"ligue1","Primeira Liga":"portugal","Eredivisie":"ered","Brasileirão Série A":"brasileirao","MLS":"mls","Saudi Pro League":"spl","J1 League":"j1"};
function leagueBadge(name,cls="league-badge-mini"){const badge=COMP_BADGES[LEAGUE_BADGE_IDS[name]];return badge?'<img class="'+cls+'" src="assets/competition-badges/'+(badge.endsWith(".svg")?badge:badge+'.png')+'?v=assets-20261104" alt="" aria-hidden="true">':''}
function compArtwork(c){const badge=COMP_BADGES[c.id];return badge?'<img class="trophy comp-logo" src="assets/competition-badges/'+(badge.endsWith(".svg")?badge:badge+'.png')+'?v=assets-20261104'+'" alt="" aria-hidden="true">':trophy(c.icon,c.col,c.stripes)}
const AWARD_HOLDER_PHOTOS={
 bdo:{"Lionel Messi":"messi-ballon-dor.jpg"},
 bdof:{"Aitana Bonmatí":"aitana-bonmati.png","Alexia Putellas":"alexia-putellas.png"},
 shoe:{"Lionel Messi":"messi-golden-shoe-kiss.png"},
 best:{"Lionel Messi":"messi-the-best-portrait.png"},
 kopa:{"Lamine Yamal":"lamine-yamal-kopa.jpg"},
 yashin:{"Emiliano Martínez":"emiliano-martinez-yashin.png","Gianluigi Donnarumma":"donnarumma-yashin.jpg"}
};
function awardHolderAvatar(awardId,name,col){const file=(AWARD_HOLDER_PHOTOS[awardId]||{})[name];return file?'<img class="avatar award-holder-photo" src="assets/award-photos/'+file+'" alt="'+esc(name)+'">':avatar(name,col)}
function hashStr(t){let h=0;for(const ch of String(t))h=(h*31+ch.charCodeAt(0))>>>0;return h}
const JDET=["none","shoulders","sidepanel","chestline","sleevestripe","pinstripes","yoke"],JCOL=["v","crew","polo"];
function jersey(c1,c2,size,pat,name,v){
  const sz=size||52,id="j"+(++_gid),B="M21 6L11 10 3 21l8 7 4-4v30h30V24l4 4 8-7-8-11L39 6q-9 7-18 0z";
  const h=hashStr(name||c1+c2),det=v&&v.d!=null?JDET[v.d]:JDET[h%JDET.length],col=v&&v.c!=null?JCOL[v.c]:JCOL[(h>>3)%3];
  const P={stripes:'<rect x="17" y="0" width="5" height="60" fill="'+c2+'"/><rect x="27.5" y="0" width="5" height="60" fill="'+c2+'"/><rect x="38" y="0" width="5" height="60" fill="'+c2+'"/>',
   hoops:'<rect x="0" y="15" width="60" height="6" fill="'+c2+'"/><rect x="0" y="27" width="60" height="6" fill="'+c2+'"/><rect x="0" y="39" width="60" height="6" fill="'+c2+'"/><rect x="0" y="51" width="60" height="6" fill="'+c2+'"/>',
   halves:'<rect x="30" y="0" width="30" height="60" fill="'+c2+'"/>',
   sash:'<path d="M12 6h10l26 42v10h-9L12 16z" fill="'+c2+'"/>',
   band:'<rect x="0" y="23" width="60" height="9" fill="'+c2+'"/>',
   vband:'<rect x="24.5" y="0" width="11" height="60" fill="'+c2+'"/><rect x="24.5" y="0" width="1.5" height="60" fill="#fff" opacity=".8"/><rect x="34" y="0" width="1.5" height="60" fill="#fff" opacity=".8"/>',
   diag:'<path d="M60 4L4 60h56z" fill="'+c2+'"/>',
   sleeves:'<path d="M15 11L11 10 3 21l8 7 4-4zM45 11l4-1 8 11-8 7-4-4z" fill="'+c2+'"/>'};
  const D={none:'',shoulders:'<path d="M11 10l10-4q9 7 18 0l10 4-3 5H14z" fill="'+c2+'" opacity=".9"/>',
   sidepanel:'<rect x="15" y="22" width="3.5" height="34" fill="'+c2+'"/><rect x="41.5" y="22" width="3.5" height="34" fill="'+c2+'"/>',
   chestline:'<rect x="0" y="21" width="60" height="2.6" fill="'+c2+'"/>',
   sleevestripe:'<path d="M6 17l9 8M54 17l-9 8" stroke="'+c2+'" stroke-width="2.2"/>',
   pinstripes:[18,22,26,30,34,38,42].map(x=>'<rect x="'+x+'" y="0" width=".9" height="60" fill="'+c2+'" opacity=".55"/>').join(""),
   yoke:'<path d="M15 14h30v4H15z" fill="'+c2+'"/>'};
  const plain=!pat||pat==="plain";
  const cuff=pat==="sleeves"?c1:c2,cc=pat==="vband"?"#fff":c2;
  const C={v:'<path d="M21 6q9 7 18 0l-2-.8L30 12l-7-6.8z" fill="'+cc+'" stroke="#0b2226" stroke-width=".8" stroke-linejoin="round"/>',
   crew:'<path d="M21 6q9 7 18 0" fill="none" stroke="'+cc+'" stroke-width="3.2"/><path d="M21 6q9 7 18 0" fill="none" stroke="#0b2226" stroke-width=".7" transform="translate(0 1.8)"/>',
   polo:'<path d="M21 6l9 4 9-4-2 6-7-1.6-7 1.6z" fill="'+cc+'" stroke="#0b2226" stroke-width=".8" stroke-linejoin="round"/><path d="M30 10v8" stroke="#0b2226" stroke-width=".8"/><circle cx="30" cy="13" r=".8" fill="#0b2226"/><circle cx="30" cy="16" r=".8" fill="#0b2226"/>'};
  return '<svg width="'+sz+'" height="'+sz+'" viewBox="0 0 60 60" aria-hidden="true"><defs><clipPath id="'+id+'"><path d="'+B+'"/></clipPath><linearGradient id="'+id+'g" x1="0" x2="1"><stop offset="0" stop-color="#fff" stop-opacity=".18"/><stop offset=".45" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".28"/></linearGradient></defs>'+
   '<g clip-path="url(#'+id+')"><rect width="60" height="60" fill="'+c1+'"/>'+(P[pat]||"")+(plain||det==="sleevestripe"||det==="shoulders"?D[det]:"")+
   '<path d="M15 24v30M45 24v30" stroke="#000" stroke-opacity=".18" stroke-width="1"/><path d="M22 30q8 3 16 0M20 42q10 3 20 0" stroke="#000" stroke-opacity=".08" fill="none"/>'+
   '<path d="M3 21l8 7 1.6-1.6-8-7.2zM57 21l-8 7-1.6-1.6 8-7.2z" fill="'+cuff+'"/>'+
   '<rect x="15" y="51" width="30" height="3" fill="'+c2+'" opacity=".9"/>'+
   '<rect width="60" height="60" fill="url(#'+id+'g)"/></g>'+C[col]+
   '<circle cx="37" cy="19" r="2.6" fill="#fff" opacity=".55"/><circle cx="37" cy="19" r="2.6" fill="none" stroke="#000" stroke-opacity=".25"/>'+
   '<path d="'+B+'" fill="none" stroke="#0b2226" stroke-width="1.4" stroke-linejoin="round"/></svg>';
}
/* give every club in a league a distinct look: bump detail/collar until the signature is unique */
const JVAR={};
(function(){
  for(const l in LEAGUE_CLUBS){const seen=new Set();LEAGUE_CLUBS[l].forEach(c=>{
    const h=hashStr(c[0]);let d=h%JDET.length,co=(h>>3)%3,plain=c[4]==="plain";
    for(let i=0;i<21;i++){const sig=c[2]+c[3]+c[4]+(plain?d:"")+co;if(!seen.has(sig)){seen.add(sig);break}if(plain&&i%3!==2)d=(d+1)%JDET.length;else co=(co+1)%3}
    JVAR[c[0]]={d,c:co}})}
})();
function avatar(name,col){
  const p=name.replace(/\(.*\)/,"").trim().split(/\s+/);const ini=(p[0][0]+(p.length>1?p[p.length-1][0]:"")).toUpperCase();
  return '<svg class="avatar" viewBox="0 0 140 140" aria-hidden="true"><defs><linearGradient id="av'+ini+'" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="'+col+'"/><stop offset="1" stop-color="#0b2226"/></linearGradient></defs><circle cx="70" cy="70" r="66" fill="url(#av'+ini+')" stroke="'+col+'" stroke-width="4"/><circle cx="70" cy="52" r="20" fill="#0b2226" opacity=".55"/><path d="M28 120q4-36 42-38 38 2 42 38" fill="#0b2226" opacity=".55"/><text x="70" y="114" text-anchor="middle" font-family="Barlow Condensed,sans-serif" font-weight="700" font-size="26" fill="#fff">'+ini+'</text></svg>';
}

/* ---------- Router ---------- */
const PAGES=["home","first","formations","rules","clubs","nations","standings","squads","competitions","awards","transfers","glossary","quiz"];
const TITLES={home:"Football 101: Read the Game",first:"Your first match",formations:"Formations",rules:"Rules",clubs:"Clubs",nations:"National teams",standings:"League tables",competitions:"Competitions",awards:"Player awards",squads:"Squads",transfers:"Transfer market",glossary:"Fan glossary",quiz:"Quiz"};
const inits={};
function route(){
  let id=(location.hash||"#home").slice(1);if(!PAGES.includes(id))id="home";
  document.querySelectorAll(".page").forEach(p=>p.classList.toggle("on",p.id==="pg-"+id));
  document.querySelectorAll("nav a.nl").forEach(a=>{const on=a.getAttribute("href")==="#"+id;a.classList.toggle("act",on);if(on){a.setAttribute("aria-current","page");a.scrollIntoView({block:"nearest",inline:"center"})}else a.removeAttribute("aria-current")});
  document.title=id==="home"?TITLES.home:TITLES[id]+" · Football 101";
  if(inits[id]&&!inits[id].done){inits[id].done=true;inits[id]()}
  scrollTo({top:0});
  if(id==="squads"&&window.squadSelect){if(SQ_PENDING){window.squadSelect(SQ_PENDING);SQ_PENDING=null}else{SQ_BACK=null;const b=$("sqBack");if(b)b.hidden=true}}
}
addEventListener("hashchange",route);

/* ---------- Home ---------- */
(function(){
  const T=[["2026 World Cup","Spain","es"],["Champions League 2026","Paris Saint-Germain","fr"],["Ballon d'Or 2026","Harry Kane","gb-eng"],["Premier League","Arsenal","gb-eng"],["La Liga","Barcelona","es"],["Serie A","Inter Milan","it"],["Bundesliga","Bayern Munich","de"],["Ligue 1","Paris Saint-Germain","fr"],["Euro 2024","Spain","es"],["Copa América 2024","Argentina","ar"],["Club World Cup 2025","Chelsea","gb-eng"],["The Best 2025","Ousmane Dembélé","fr"]];
  $("ticker").innerHTML=T.map(t=>'<div class="tick">'+flag(t[2])+'<small>'+t[0]+'</small><b>'+t[1]+'</b></div>').join("");
  const ic=(svg)=>'<span class="ic">'+svg+'</span>';
  const TL=[
   ["first","Your first match","How a match works, minute by minute",ic('<svg width="30" height="30" viewBox="0 0 24 24"><circle cx="12" cy="13" r="8" fill="none" stroke="#ff7a1a" stroke-width="2"/><path d="M12 9v4l3 2M10 2h4" stroke="#ff7a1a" stroke-width="2" stroke-linecap="round" fill="none"/></svg>')],
   ["formations","Formations","17 shapes, from 4-4-2 to the 1880s pyramid",ic('<svg width="30" height="30" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="3" fill="#22763f"/><g fill="#fff"><circle cx="12" cy="19" r="1.6"/><circle cx="6" cy="15" r="1.6"/><circle cx="10" cy="15" r="1.6"/><circle cx="14" cy="15" r="1.6"/><circle cx="18" cy="15" r="1.6"/><circle cx="8" cy="10" r="1.6"/><circle cx="12" cy="10" r="1.6"/><circle cx="16" cy="10" r="1.6"/><circle cx="7" cy="5" r="1.6"/><circle cx="12" cy="5" r="1.6"/><circle cx="17" cy="5" r="1.6"/></g></svg>')],
   ["rules","Rules","Cards, offside lab and referee signals",ic('<svg width="30" height="30" viewBox="0 0 24 24"><rect x="4" y="4" width="10" height="15" rx="1.5" fill="#ffd60a" transform="rotate(-10 9 11)"/><rect x="10" y="5" width="10" height="15" rx="1.5" fill="#e5383b" transform="rotate(8 15 12)"/></svg>')],
   ["clubs","Clubs","67 clubs by continent and league",ic(jersey("#ff7a1a","#ffffff",32))],
   ["nations","National teams","39 teams by confederation",ic('<svg width="30" height="30" viewBox="0 0 24 24"><path d="M5 3v19" stroke="#e9efe6" stroke-width="2"/><path d="M6 4h13l-3 4 3 4H6z" fill="#6fb7ff"/></svg>')],
   ["standings","League tables","13 leagues in Europe and around the world, updated weekly",ic('<svg width="30" height="30" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2" fill="none" stroke="#7ee2a0" stroke-width="2"/><path d="M3 9h18M3 14h18M9 4v16" stroke="#7ee2a0" stroke-width="2"/></svg>')],
   ["squads","Squads","Every player, number and captain at 24 big clubs",ic(jersey("#1d428a","#f5c542",32,"stripes"))],
   ["competitions","Competitions","Brackets, records and top scorers in 15 competitions",ic(trophy("cup","#f5c542").replace('class="trophy"','width="34" height="34"'))],
   ["awards","Player awards","Ballon d'Or, Golden Shoe, Kopa and more",ic(trophy("star","#f5c542").replace('class="trophy"','width="34" height="34"'))],
   ["transfers","Transfer market","Record fees, biggest deals and most valuable players",ic('<svg width="30" height="30" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#f5c542"/><path d="M15 8.5c-.6-1-1.7-1.5-3-1.5-1.8 0-3 .9-3 2.3 0 3.2 6 1.6 6 4.9 0 1.4-1.3 2.3-3 2.3-1.4 0-2.6-.6-3.2-1.6M12 5v2M12 17v2" stroke="#1a1005" stroke-width="2" fill="none" stroke-linecap="round"/></svg>')],
   ["glossary","Fan glossary","32 words fans use",ic('<svg width="30" height="30" viewBox="0 0 24 24"><path d="M4 4h7a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2H4zM20 4h-5a2 2 0 0 0-2 2v14a2 2 0 0 1 2-2h5z" fill="#7ee2a0"/></svg>')],
   ["quiz","Quiz","12 questions to test yourself",ic('<svg width="30" height="30" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#c39bff"/><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6V14" stroke="#1a1005" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="12" cy="17.5" r="1.2" fill="#1a1005"/></svg>')]];
  $("tiles").innerHTML=TL.map(t=>'<a class="tile" href="#'+t[0]+'">'+t[3]+'<div><b>'+t[1]+'</b><span>'+t[2]+'</span></div></a>').join("");
  const F=["The 2026 World Cup was the first with 48 teams and three host countries.","Real Madrid have won the European Cup / Champions League a record 15 times.","Lionel Messi has won the Ballon d'Or eight times, more than anyone else.","The Football Association, founded in England in 1863, is the oldest in the world.","Brazil is the only country to have played at every men's World Cup.","Lev Yashin (1963) is the only goalkeeper ever to win the Ballon d'Or.","Arsenal went the whole 2003-04 Premier League season without losing.","Since 2025, a goalkeeper who holds the ball for more than eight seconds gives away a corner.","The Copa América, first played in 1916, is the oldest international tournament still running.","Spain have won the Euros four times, more than any other country.","Uruguay hosted and won the very first World Cup in 1930.","In 2022 Morocco became the first African team to reach a World Cup semi-final."];
  let fi=Math.floor(Math.random()*F.length);
  const show=()=>{$("fact").textContent="Did you know? "+F[fi]};show();
  $("nextFact").onclick=()=>{fi=(fi+1)%F.length;show()};
})();

/* ---------- First match ---------- */
(function(){
  const P=[["Kick-off","#2e6f80",4,"Kick-off: one team kicks the ball from the centre spot. A coin toss decides who kicks off and which end each team attacks."],
   ["First half","var(--grass2)",22,"First half: 45 minutes. The clock keeps running, so the referee adds time at the end for injuries, substitutions and VAR checks."],
   ["Half-time","#5d6f6d",8,"Half-time: a 15-minute break. Teams swap ends and coaches change tactics."],
   ["Second half","var(--grass1)",22,"Second half: another 45 minutes. Most substitutions happen now; top competitions allow up to five per team."],
   ["Added time","#a35a1a",6,"Added time: the fourth official holds up a board with the minimum minutes added. Late goals here are often dramatic."],
   ["Extra time","#7a4fa0",14,"Extra time: only in knockout matches level after 90 minutes. Two halves of 15 minutes."],
   ["Penalties","#b03a4a",10,"Penalty shootout: five penalties each, then sudden death if still level."]];
  const bar=$("tbar");
  P.forEach((p,i)=>{const d=document.createElement("div");d.textContent=p[0];d.style.background=p[1];d.style.flex=p[2];d.tabIndex=0;d.setAttribute("role","button");
   const go=()=>{[...bar.children].forEach(x=>x.setAttribute("aria-pressed",x===d));$("tnote").textContent=p[3]};
   d.onclick=go;d.onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();go()}};bar.appendChild(d);if(i===1)go()});
})();

/* ---------- Pitch ---------- */
function drawPitch(svg){
  svg.innerHTML="";
  for(let i=0;i<10;i++)el("rect",{x:0,y:i*42,width:300,height:42,fill:i%2?"var(--grass1)":"var(--grass2)"},svg);
  const L={stroke:"#e9efe6","stroke-width":2,fill:"none",opacity:.85};
  el("rect",{x:8,y:8,width:284,height:404,...L},svg);el("line",{x1:8,y1:210,x2:292,y2:210,...L},svg);
  el("circle",{cx:150,cy:210,r:36,...L},svg);el("circle",{cx:150,cy:210,r:2.5,fill:"#e9efe6"},svg);
  el("rect",{x:75,y:8,width:150,height:60,...L},svg);el("rect",{x:75,y:352,width:150,height:60,...L},svg);
  el("rect",{x:115,y:8,width:70,height:22,...L},svg);el("rect",{x:115,y:390,width:70,height:22,...L},svg);
  el("path",{d:"M120 68 A36 36 0 0 0 180 68",...L},svg);el("path",{d:"M120 352 A36 36 0 0 1 180 352",...L},svg);
}

/* ---------- Formations ---------- */
(function(){
  const pitch=$("pitch"),box=$("formBtns");
  const groups={};Object.entries(FORMS).forEach(([n,f])=>{(groups[f.g]=groups[f.g]||[]).push(n)});
  box.innerHTML=Object.entries(groups).map(([g,ns])=>'<small>'+g+'</small><div class="btns">'+ns.map(n=>'<button data-f="'+esc(n)+'" aria-pressed="false">'+n+'</button>').join("")+'</div>').join("");
  function showRole(c){const r=ROLES[c];$("roleName").textContent=r[0];$("roleTags").innerHTML='<span class="tag">'+r[1]+'</span><span class="tag">'+c+'</span>';$("roleText").textContent=r[2]}
  function setForm(n){
    box.querySelectorAll("button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.f===n));
    const f=FORMS[n];$("formName").textContent=n;$("formDesc").textContent=f.d;$("formS").textContent=f.s;$("formW").textContent=f.w;$("formF").textContent=f.f;
    drawPitch(pitch);
    [["GK",50,92],...f.p].forEach(([c,x,y])=>{
      const g=el("g",{class:"dot",tabindex:0,role:"button","aria-label":ROLES[c][0]},pitch);
      el("circle",{cx:x*2.84+8,cy:y*4.04+4,r:15,fill:c==="GK"?"var(--ball)":"#14383f"},g);
      const t=el("text",{x:x*2.84+8,y:y*4.04+8.5,"text-anchor":"middle","font-size":c.length>2?10:12,"font-weight":700,fill:c==="GK"?"#1a1005":"#e9efe6"},g);t.textContent=c;
      const pick=()=>{pitch.querySelectorAll(".dot").forEach(d=>d.classList.remove("sel"));g.classList.add("sel");showRole(c)};
      g.addEventListener("click",pick);g.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();pick()}});
    });
    showRole("GK");
  }
  box.addEventListener("click",e=>{const b=e.target.closest("button");if(b)setForm(b.dataset.f)});
  setForm("4-3-3");
})();

/* ---------- Rules: tabs ---------- */
(function(){
  const tabs=$("ruleTabs");
  tabs.addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;
    tabs.querySelectorAll("button").forEach(x=>x.setAttribute("aria-selected",x===b));
    document.querySelectorAll(".rpanel").forEach(p=>p.classList.toggle("on",p.id===b.dataset.p))});
})();

/* ---------- Rules: cards ---------- */
(function(){
  const cardSvg=(c,x,y,r,w,h)=>'<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="3" fill="'+(c==="Y"?"var(--yellow)":"var(--red)")+'" transform="rotate('+r+' '+(x+w/2)+' '+(y+h/2)+')" stroke="#0003"/>';
  const tiles=[["Yellow card","A caution. The player stays on.",'<svg width="56" height="64" viewBox="0 0 56 64">'+cardSvg("Y",14,6,-6,28,40)+'</svg>',0],
    ["Red card","Sent off. The team plays with one player fewer.",'<svg width="56" height="64" viewBox="0 0 56 64">'+cardSvg("R",14,6,6,28,40)+'</svg>',7],
    ["Two yellows = red","A second caution in the same match means a red card.",'<svg width="96" height="64" viewBox="0 0 96 64">'+cardSvg("Y",4,14,-8,18,28)+cardSvg("Y",20,14,6,18,28)+'<text x="50" y="35" fill="#e9efe6" font-size="18" font-weight="700" text-anchor="middle">=</text>'+cardSvg("R",62,10,4,22,34)+'</svg>',5]];
  $("cardTiles").innerHTML=tiles.map(t=>'<button class="ctile" data-i="'+t[3]+'">'+t[2]+'<div><b>'+t[0]+'</b><span>'+t[1]+'</span></div></button>').join("");
  const sc=$("scen");
  sc.innerHTML=CARDS.map((c,i)=>'<button data-i="'+i+'" aria-pressed="false"><span class="chip" style="background:'+(c[1]==="Y"?"var(--yellow)":c[1]==="R"?"var(--red)":"linear-gradient(90deg,var(--yellow) 50%,var(--red) 50%)")+'"></span>'+c[0]+'</button>').join("");
  const arm=(card,rot,dx)=>'<g class="raise" style="transform-origin:120px 260px"><g transform="translate('+dx+' 0) rotate('+rot+' 120 260)"><rect x="104" y="150" width="32" height="120" rx="14" fill="#1b1b1b"/><rect x="104" y="150" width="32" height="10" fill="#c6ff00"/><rect x="95" y="38" width="62" height="88" rx="6" fill="'+(card==="Y"?"#ffd60a":"#e5383b")+'" stroke="#0004" stroke-width="2"/><circle cx="120" cy="140" r="20" fill="#e0b48a"/><rect x="100" y="112" width="12" height="30" rx="6" fill="#e0b48a"/><rect x="113" y="108" width="12" height="32" rx="6" fill="#e0b48a"/><rect x="126" y="112" width="12" height="30" rx="6" fill="#e0b48a"/></g></g>';
  let timer;
  function show(i){
    clearTimeout(timer);const c=CARDS[i];sc.querySelectorAll("button").forEach(b=>b.setAttribute("aria-pressed",+b.dataset.i===i));
    const st=$("stage"),v=$("cVerdict");$("cWhy").textContent=c[2];
    const wrap=s=>'<svg viewBox="0 0 240 280">'+s+'</svg>';
    if(c[1]==="YR"){st.innerHTML=wrap(arm("Y",-4,0));v.textContent="Yellow card…";v.className="cverdict y";
      timer=setTimeout(()=>{st.innerHTML=wrap('<g opacity=".6">'+arm("Y",-14,-30)+'</g>'+arm("R",6,10));v.textContent="…second yellow: red card!";v.className="cverdict r"},900)}
    else{st.innerHTML=wrap(arm(c[1],c[1]==="Y"?-4:4,0));v.textContent=c[1]==="Y"?"Yellow card":"Red card";v.className="cverdict "+(c[1]==="Y"?"y":"r")}
  }
  sc.addEventListener("click",e=>{const b=e.target.closest("button");if(b)show(+b.dataset.i)});
  $("cardTiles").addEventListener("click",e=>{const b=e.target.closest("button");if(b)show(+b.dataset.i)});
  show(0);
})();

/* ---------- Rules: offside lab ---------- */
(function(){
  const os=$("offsvg"),att=$("att"),pas=$("pas"),rs=$("restart");
  const DEF=80,Y=p=>410-p*4;
  function draw(){
    const a=+att.value,b=+pas.value,mode=rs.value;
    $("attV").textContent=a+"%";$("pasV").textContent=b+"%";
    drawPitch(os);
    const line=(p,c,lab)=>{el("line",{x1:8,x2:292,y1:Y(p),y2:Y(p),stroke:c,"stroke-width":2,"stroke-dasharray":"6 4"},os);const t=el("text",{x:14,y:Y(p)-5,"font-size":11,fill:c},os);t.textContent=lab};
    line(DEF,"#6fb7ff","second-last defender");line(b,"#ff7a1a","ball");
    const ctr=(x,p,col,txt)=>{el("circle",{cx:x,cy:Y(p),r:12,fill:col,stroke:"#e9efe6","stroke-width":2},os);if(txt){const t=el("text",{x,y:Y(p)+4,"text-anchor":"middle","font-size":11,"font-weight":700,fill:"#0e2a2f"},os);t.textContent=txt}};
    [90,150,210].forEach(x=>ctr(x,DEF,"var(--opp)"));ctr(150,95,"var(--opp)","GK");ctr(110,b,"#f3f6ee","P");
    el("circle",{cx:134,cy:Y(b)-2,r:5,fill:"#ff7a1a"},os);ctr(235,a,"#f3f6ee","A");
    const offPos=a>50&&a>b&&a>DEF,free=mode!=="open",v=$("verdict"),w=$("why"),names={throw:"throw-in",goalkick:"goal kick",corner:"corner kick"};
    if(free){v.textContent="Onside";v.className="verdict on-v";w.textContent="You can't be offside directly from a "+names[mode]+(offPos?", even though the attacker is ahead of the defenders.":".")}
    else if(offPos){v.textContent="Offside";v.className="verdict off-v";w.textContent="When the pass is played, the attacker is in the opponent's half and closer to the goal line than both the ball and the second-last defender."}
    else{v.textContent="Onside";v.className="verdict on-v";w.textContent=a<=50?"The attacker is in their own half, so offside cannot apply.":a<=b?"The attacker is level with or behind the ball.":"The attacker is level with or behind the second-last defender. Level counts as onside."}
  }
  [att,pas,rs].forEach(e=>e.addEventListener("input",draw));draw();
})();

/* ---------- Rules: referee signals ---------- */
(function(){
  const SK="#e3b58f",SH="#1d2b2f",TR="#c6ff00";
  const SL=[56,60],SR=[84,60],DL=[50,104],DR=[90,104],MOUTH=[66,46];
  const P={adv:{L:[18,84],R:[122,84]},dfk:{L:MOUTH,R:[130,60]},ifk:{L:MOUTH,R:[88,8]},pen:{R:[124,100]},gk:{L:MOUTH,R:[128,74]},ck:{L:MOUTH,R:[122,22]},yc:{R:[88,16],card:"#ffd60a"},rc:{R:[88,16],card:"#e5383b"}};
  const props={pen:'<ellipse cx="128" cy="152" rx="5" ry="2.5" fill="#fff"/>',gk:'<path d="M112 136h26v20M112 136v20" stroke="#fff" stroke-width="2.5" fill="none"/><path d="M114 138l22 16M136 138l-22 16" stroke="#fff" stroke-width=".6" opacity=".5"/>',ck:'<path d="M130 40V8" stroke="#fff" stroke-width="2"/><path d="M130 8l12 5-12 5z" fill="#ff7a1a"/>',dfk:'<path d="M134 54l6 6-6 6" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round"/>',ifk:'',adv:'<path d="M8 74l-6 10 6 2M132 74l6 10-6 2" stroke="#fff" stroke-width="2" fill="none" opacity=".7"/>',yc:'',rc:''};
  function arm(s,h){const m=[s[0]+(h[0]-s[0])*.4,s[1]+(h[1]-s[1])*.4];
    return '<path d="M'+s+'L'+m+'" stroke="'+SH+'" stroke-width="12" stroke-linecap="round"/><path d="M'+m+'L'+h+'" stroke="'+SK+'" stroke-width="8" stroke-linecap="round"/><path d="M'+(m[0]-.01)+','+m[1]+'L'+m+'" stroke="'+TR+'" stroke-width="12"/><circle cx="'+h[0]+'" cy="'+h[1]+'" r="5.5" fill="'+SK+'"/>'}
  function fig(pose){
    const p=P[pose],L=p.L||DL,R=p.R||DR;
    const card=p.card?'<rect x="80" y="-4" width="17" height="24" rx="2" fill="'+p.card+'" stroke="#0004" transform="rotate(6 88 8)"/>':'';
    const whistle=L===MOUTH?'<rect x="62" y="44" width="9" height="4" rx="2" fill="#bbb"/>':'';
    return '<svg viewBox="0 -8 140 172" aria-hidden="true"><defs><linearGradient id="gr'+pose+'" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1d6b3a"/><stop offset="1" stop-color="#14532c"/></linearGradient></defs><rect x="0" y="-8" width="140" height="172" rx="12" fill="url(#gr'+pose+')"/><ellipse cx="70" cy="158" rx="30" ry="4" fill="#000" opacity=".25"/>'+props[pose]+
     '<path d="M60 112l-3 34M80 112l3 34" stroke="'+SK+'" stroke-width="9" stroke-linecap="round"/>'+
     '<path d="M57 130l-1 16M83 130l1 16" stroke="#111" stroke-width="10" stroke-linecap="round"/><path d="M56.5 131h0M83.5 131h0" stroke="'+TR+'" stroke-width="10"/>'+
     '<path d="M50 152h12M78 152h12" stroke="#0a0a0a" stroke-width="6" stroke-linecap="round"/>'+
     '<path d="M54 98h32l2 18H74l-4-6-4 6H52z" fill="#0d0d0d"/>'+
     '<path d="M56 58q14-6 28 0l4 42H52z" fill="'+SH+'"/><path d="M63 55l7 8 7-8" fill="none" stroke="'+TR+'" stroke-width="2.5"/><path d="M57 72h4M60 74v8" stroke="'+TR+'" stroke-width="1.6" opacity=".7"/>'+
     '<path d="M66 50h8v7h-8z" fill="'+SK+'"/>'+
     arm(SL,L)+arm(SR,R)+card+
     '<circle cx="70" cy="38" r="12" fill="'+SK+'"/><path d="M58 36q1-14 12-14t12 14q-3-6-12-7-9 1-12 7z" fill="#2b1d12"/><circle cx="58" cy="39" r="2.5" fill="'+SK+'"/><circle cx="82" cy="39" r="2.5" fill="'+SK+'"/><circle cx="66" cy="39" r="1.2" fill="#222"/><circle cx="74" cy="39" r="1.2" fill="#222"/>'+whistle+
     '</svg>';
  }
  const box=$("sigs");
  box.innerHTML=SIGNALS.map((s,i)=>'<button class="sig" data-i="'+i+'" aria-pressed="false">'+fig(s[1])+'<b>'+s[0]+'</b></button>').join("");
  const show=i=>{box.querySelectorAll("button").forEach(b=>b.setAttribute("aria-pressed",+b.dataset.i===i));$("sigNote").innerHTML="<b>"+SIGNALS[i][0]+":</b> "+SIGNALS[i][2]};
  box.addEventListener("click",e=>{const b=e.target.closest("button");if(b)show(+b.dataset.i)});show(0);
})();

/* ---------- Rules: accordion ---------- */
(function(){
  const box=$("ruleCats");
  Object.keys(RULES).forEach((c,i)=>{const b=document.createElement("button");b.textContent=c;b.onclick=()=>{press(box,b);$("ruleList").innerHTML=RULES[c].map(r=>"<details><summary>"+r[0]+(r[2]?'<span class="new">NEW</span>':"")+"</summary><p>"+r[1]+"</p></details>").join("")};box.appendChild(b);if(!i)b.click()});
})();

/* ---------- World map (loaded from CDN; page works without it) ---------- */
let worldP=null;
function loadWorld(){
  if(worldP)return worldP;
  worldP=(async()=>{
    for(let i=0;i<30&&!(window.d3&&window.topojson);i++)await new Promise(r=>setTimeout(r,100));
    if(!(window.d3&&window.topojson))return null;
    try{
      const t=await (await fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")).json();
      const fs=topojson.feature(t,t.objects.countries).features.filter(f=>f.id!=="010");
      fs.forEach(f=>f.cont=contOf(f));return fs;
    }catch(e){return null}
  })();
  return worldP;
}
const OV={europe:["643","792","268","051","031","196","352"],asia:["682","887","512","784","634","414","368","400","376","760","422","364","275","048"],oceania:["598","090","548","242","540"],namerica:["304"]};
function contOf(f){
  for(const k in OV)if(OV[k].includes(f.id))return k;
  const [lon,lat]=d3.geoCentroid(f);
  if(lon<-25)return lat>=7.5?"namerica":"samerica";
  if(lon>110&&lat<-9)return"oceania";
  if(lon<60&&lat>=35)return"europe";
  if(lon>=-20&&lon<52&&lat<35&&lat>-36)return"africa";
  return"asia";
}
async function drawMap(holder,reg,hits){
  const w=await loadWorld();if(!w)return;
  const box=reg?reg.box:[-170,-56,180,78],mid=(box[0]+box[2])/2;
  const proj=d3.geoNaturalEarth1().rotate([reg?-mid:0,0]).fitExtent([[6,6],[194,90]],{type:"MultiPoint",coordinates:[[box[0],box[1]],[box[2],box[3]],[box[0],box[3]],[box[2],box[1]],[mid,box[1]],[mid,box[3]]]});
  const path=d3.geoPath(proj);
  holder.innerHTML='<svg viewBox="0 0 200 96" preserveAspectRatio="xMidYMid slice" aria-hidden="true">'+w.map(f=>{
    const inR=reg?f.cont===reg.id:true,hit=hits&&hits.has(f.id);
    return '<path class="land'+(hit?" hit":inR?" in":"")+'" d="'+path(f)+'"/>'}).join("")+'</svg>';
}
function regionCards(holder,counts,hits,onPick){
  const all={id:"all",name:"Whole world",conf:"All",c:"#e9efe6"};
  const list=[all,...REGIONS];
  holder.innerHTML=list.map(r=>'<button class="reg" data-r="'+r.id+'" aria-pressed="'+(r.id==="all")+'" style="--rc:'+r.c+'"><div class="map"><span class="ph">'+r.conf+'</span></div><div class="lbl"><b>'+r.name+'</b><small>'+r.conf+' · '+(counts[r.id]||0)+'</small></div></button>').join("");
  holder.querySelectorAll(".reg").forEach(b=>{const r=REGIONS.find(x=>x.id===b.dataset.r);drawMap(b.querySelector(".map"),r,hits)});
  holder.addEventListener("click",e=>{const b=e.target.closest(".reg");if(!b)return;press(holder,b);onPick(b.dataset.r)});
}
const NUM={"England":"826","Scotland":"826","Spain":"724","Italy":"380","Germany":"276","France":"250","Monaco":"250","Portugal":"620","Netherlands":"528","Turkey":"792","Serbia":"688","Argentina":"032","Brazil":"076","Uruguay":"858","United States":"840","Mexico":"484","Saudi Arabia":"682","Japan":"392","South Korea":"410","UAE":"784","Egypt":"818","South Africa":"710","Morocco":"504","Tunisia":"788","DR Congo":"180","New Zealand":"554"};

/* ---------- Clubs ---------- */
inits.clubs=function(){
  const st={r:"all",l:"all",q:""};
  const counts={all:CLUBS.length};CLUBS.forEach(c=>counts[c[1]]=(counts[c[1]]||0)+1);
  const hits=new Set(CLUBS.map(c=>NUM[c[3]]).filter(Boolean));
  regionCards($("clubRegions"),counts,hits,r=>{st.r=r;st.l="all";leagues();render()});
  function leagues(){
    const ls=[...new Set(CLUBS.filter(c=>st.r==="all"||c[1]===st.r).map(c=>c[2]))];
    $("clubLeagues").innerHTML='<button aria-pressed="'+(st.l==="all")+'" data-l="all">All leagues</button>'+ls.map(l=>{const c=CLUBS.find(x=>x[2]===l);return '<button aria-pressed="'+(st.l===l)+'" data-l="'+esc(l)+'">'+(leagueBadge(l)||flag(c[3]))+' '+esc(l)+'</button>'}).join("");
  }
  $("clubLeagues").addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;st.l=b.dataset.l;press($("clubLeagues"),b);render()});
  $("clubSearch").addEventListener("input",e=>{st.q=e.target.value.trim().toLowerCase();render()});
  const ALIAS={"Barcelona":"FC Barcelona","Roma":"AS Roma","Marseille":"Olympique de Marseille","Lyon":"Olympique Lyonnais","Monaco":"AS Monaco","Braga":"SC Braga","FC Porto":"FC Porto"};
  const featured=n=>CLUBS.find(c=>c[0]===n||c[0]===ALIAS[n]);
  function render(){
    const big=st.l!=="all"&&LEAGUE_CLUBS[st.l];
    const L=CLUBS.filter(c=>(st.r==="all"||c[1]===st.r)&&(st.l==="all"||c[2]===st.l)&&(!st.q||[c[0],c[3],c[4],c[7],c[2]].join(" ").toLowerCase().includes(st.q)));
    if(big){
      const all=big.filter(c=>!st.q||(c[0]+" "+c[1]).toLowerCase().includes(st.q));
      $("clubCount").textContent=all.length+" of "+big.length+" clubs in the "+({"Brazil":"Brazilian Série A","MLS":"MLS"}[st.l]||st.l)+" "+(["Brazil","MLS"].includes(st.l)?"2026":LEAGUE_SEASON)+". Clubs marked ★ have a fact card: select them to open it.";
      $("clubGrid").innerHTML="";
      $("leagueAll").innerHTML='<div class="lgrid">'+all.map(c=>{const f=featured(c[0]);const head=teamIcon(c[0],"clubs",46)+'<div><b>'+esc(c[0])+(f?' <span class="star">★</span>':'')+'</b><small>'+esc(c[1])+(c[5]?' <span class="promo">Promoted</span>':'')+'</small></div>'+(sqKey(c[0])?'<a class="sqlink" href="#squads" data-sq="'+esc(sqKey(c[0]))+'" data-back="clubs">Squad ›</a>':'');
        return f?'<details class="lclub fx"><summary>'+head+'</summary><div class="fxbody"><dl><dt>Nickname</dt><dd>'+esc(f[7])+'</dd><dt>Founded</dt><dd>'+f[5]+'</dd><dt>Home</dt><dd>'+esc(f[6])+'</dd></dl><p>'+esc(f[9])+'</p></div></details>':'<div class="lclub">'+head+'</div>'}).join("")+'</div>';
      return;
    }
    $("clubCount").textContent="Showing "+L.length+" of "+CLUBS.length+" featured clubs";
    $("clubGrid").innerHTML=L.length?L.map(c=>'<article class="team"><span class="lg">'+esc(c[2])+'</span><div class="head">'+teamIcon(c[0],"clubs",60)+'<div><h3>'+esc(c[0])+'</h3><div class="meta">'+flag(c[3])+esc(c[4])+', '+esc(c[3])+'</div></div></div><dl><dt>Nickname</dt><dd>'+esc(c[7])+'</dd><dt>Founded</dt><dd>'+c[5]+'</dd><dt>Home</dt><dd>'+esc(c[6])+'</dd></dl><p class="know">'+esc(c[9])+'</p></article>').join(""):'<p class="empty">No clubs match. Try another search or continent.</p>';
    $("leagueAll").innerHTML='<p class="anote">Tip: pick a league above (the seven big European leagues, Brazil, MLS, the Saudi Pro League or the J1 League) to see every club in it this season.</p>';
  }
  leagues();render();
};

/* ---------- Nations ---------- */
inits.nations=function(){
  const st={r:"all",q:"",s:"az"};
  const counts={all:NATIONS.length};NATIONS.forEach(n=>counts[n[1]]=(counts[n[1]]||0)+1);
  const hits=new Set(NATIONS.map(n=>n[7]));
  regionCards($("natRegions"),counts,hits,r=>{st.r=r;render()});
  $("natSearch").addEventListener("input",e=>{st.q=e.target.value.trim().toLowerCase();render()});
  $("natSort").addEventListener("change",e=>{st.s=e.target.value;render()});
  function render(){
    let L=NATIONS.filter(n=>(st.r==="all"||n[1]===st.r)&&(!st.q||(n[0]+" "+n[2]).toLowerCase().includes(st.q)));
    L=L.slice().sort(st.s==="wc"?(a,b)=>b[3]-a[3]||a[0].localeCompare(b[0]):st.s==="ct"?(a,b)=>b[5]-a[5]||a[0].localeCompare(b[0]):(a,b)=>a[0].localeCompare(b[0]));
    $("natCount").textContent="Showing "+L.length+" of "+NATIONS.length+" national teams";
    $("natGrid").innerHTML=L.length?L.map(n=>{const reg=REGIONS.find(r=>r.id===n[1]);return '<article class="team"><span class="lg">'+reg.conf+'</span><div class="head">'+flag(n[0],"lg")+'<div><h3>'+esc(n[0])+'</h3><div class="meta">'+esc(n[2])+'</div></div></div><div class="ttl"><div><small>World Cups</small><b>'+n[3]+'</b> <span class="stars">'+"★".repeat(n[3])+'</span></div><div><small>'+esc(n[4])+'</small><b>'+n[5]+'</b></div></div><p class="know">'+esc(n[6])+'</p></article>'}).join(""):'<p class="empty">No teams found.</p>';
  }
  render();
};


/* ---------- Open a club's squad from anywhere ---------- */
function sqKey(n){if(typeof SQUADS==="undefined")return null;if(SQUADS[n])return n;if(SQUADS["FC "+n])return "FC "+n;const k=Object.keys(SQUADS).find(k=>k.replace(/^FC /,"")===n.replace(/^FC /,""));return k||null}
let SQ_PENDING=null,SQ_BACK=null;
function openSquad(n,back){const k=sqKey(n);if(!k)return;SQ_PENDING=k;SQ_BACK=back||null;if(location.hash==="#squads"&&window.squadSelect){window.squadSelect(k)}else location.hash="#squads"}
document.addEventListener("click",e=>{const t=e.target.closest("[data-sq]");if(!t)return;e.preventDefault();openSquad(t.dataset.sq,t.dataset.back)});

/* ---------- Standings ---------- */
inits.standings=function(){
  const S=window.STANDINGS;if(!S){$("stMeta").textContent="League tables could not be loaded.";return}
  const tabs=$("stTabs"),names=Object.keys(S.leagues);
  const head='<thead><tr><th title="Position">Pos</th><th>Club</th><th title="Played">Played</th><th title="Won">Won</th><th title="Drawn">Drawn</th><th title="Lost">Lost</th><th title="Goals for">GF</th><th title="Goals against">GA</th><th title="Goal difference">GD</th><th>Points</th></tr></thead>';
  const body=(rows,L)=>{const n=rows.length;return '<tbody>'+rows.map((r,i)=>{const z=i<L.top?"top":L.rel&&i>=n-L.rel?"rel":"";const d=r[5]-r[6];const k=sqKey(r[0]);return '<tr class="'+z+(k?' clk':'')+'"'+(k?' data-sq="'+esc(k)+'" data-back="standings" tabindex="0" title="See the '+esc(r[0])+' squad"':'')+'><td>'+(i+1)+'</td><td><span class="nm">'+teamIcon(r[0],"clubs",26)+esc(r[0])+(k?'<span class="sqhint">Squad ›</span>':'')+'</span></td><td>'+r[1]+'</td><td>'+r[2]+'</td><td>'+r[3]+'</td><td>'+r[4]+'</td><td>'+r[5]+'</td><td>'+r[6]+'</td><td>'+(d>0?"+"+d:d)+'</td><td><b>'+r[7]+'</b></td></tr>'}).join("")+'</tbody>'};
  function show(l){
    const L=S.leagues[l];
    tabs.querySelectorAll("button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.l===l));
    $("stTopKey").textContent=L.topLabel||"Champions League places";
    $("stRelKey").style.display=L.rel?"":"none";
    if(L.pending){$("stMeta").textContent="Page data updated "+S.updated;$("stOut").innerHTML='<p class="empty">'+esc(L.pending)+'</p>';return}
    $("stMeta").textContent="Correct as of "+L.asOf+" · source: "+L.source+" · page data updated "+S.updated;
    const sets=L.groups&&Object.keys(L.groups).length?Object.entries(L.groups):[["",L.rows]];
    $("stOut").innerHTML=sets.map(([g,rows])=>(g?'<p class="sub">'+esc(g)+'</p>':'')+'<div class="stwrap"><table class="sttable">'+head+body(rows,L)+'</table></div>').join("");
  }
  const fl=l=>{const L=S.leagues[l],c=COMPS.find(x=>x.name===l),badge=c&&COMP_BADGES[c.id];if(badge)return '<img class="league-badge-mini" src="assets/competition-badges/'+(badge.endsWith(".svg")?badge:badge+'.png')+'?v=ball-crop-20261104'+'" alt="" aria-hidden="true"> ';if(L.flag)return flag(L.flag)+" ";return c&&c.flag?flag(c.flag)+" ":""};
  const EU=names.filter(l=>!S.leagues[l].flag),WO=names.filter(l=>S.leagues[l].flag);
  tabs.innerHTML='<span class="tabg">Europe</span>'+EU.map(l=>'<button data-l="'+esc(l)+'">'+fl(l)+esc(l)+'</button>').join("")+'<span class="tabg">Rest of the world</span>'+WO.map(l=>'<button data-l="'+esc(l)+'">'+fl(l)+esc(l)+'</button>').join("");
  tabs.addEventListener("click",e=>{const b=e.target.closest("button");if(b)show(b.dataset.l)});
  show(names[0]);
};

/* ---------- Competitions ---------- */
inits.competitions=function(){
  const G=[["International tournaments",["wc","euro","copa","asian","afcon","wwc"]],["Club competitions",["ucl","cwc"]],["Domestic leagues",["pl","liga","seriea","bundes","ligue1","portugal","ered","brasileirao","mls","spl","j1"]]];
  $("compList").innerHTML=G.map(([g,ids])=>'<p class="cgroup">'+g+'</p><div class="cgrid">'+ids.map(id=>{const c=COMPS.find(x=>x.id===id);return '<button class="comp" data-c="'+id+'" style="--cc:'+c.col+'">'+compArtwork(c)+'<b>'+(c.flag?flag(c.flag)+" ":"")+c.name+'</b><small>Since '+c.since+'</small><div class="hold"><span>Holder: </span>'+esc(c.holder.length>40?c.holder.split(":")[0]:c.holder)+'</div></button>'}).join("")+'</div>').join("");
  $("compList").addEventListener("click",e=>{const b=e.target.closest(".comp");if(b)openComp(b.dataset.c)});
};
function teamIcon(name,kind,size){
  const sz=size||22;
  if(kind==="nations")return flag(name);
  const badge=CLUB_BADGE_IDS[name];
  if(badge)return '<img class="club-badge" src="assets/club-badges/'+badge+'.png" alt="" width="'+sz+'" height="'+sz+'" loading="lazy">';
  const c=CLUBS.find(x=>x[0]===name||x[0].replace("FC ","")===name||x[0]==="FC "+name);
  if(c)return jersey(c[8][0],c[8][1],sz,PATTERN[c[0]],c[0]);
  for(const l in LEAGUE_CLUBS){const k=LEAGUE_CLUBS[l].find(x=>x[0]===name);if(k)return jersey(k[2],k[3],sz,k[4],k[0],JVAR[k[0]])}
  const e=EXTRA_KITS[name];if(e)return jersey(e[0],e[1],sz,e[2],name);
  return ISO[name]?flag(name):"";
}
function matchRow(round,a,b,score,w,note,kind){
  const cls=i=>w===-1?"d":w===i?"w":"l";
  return '<div class="match"><span class="rnd">'+round+'</span><div class="tm '+cls(0)+'">'+teamIcon(a,kind)+'<span>'+esc(a)+'</span></div><div class="sc">'+score+'</div><div class="tm r '+cls(1)+'"><span>'+esc(b)+'</span>'+teamIcon(b,kind)+'</div>'+(note?'<small class="mnote">'+esc(note)+'</small>':'')+'</div>';
}
function bracketHtml(e,kind){
  const fin=e.final||(e.rows&&e.rows.filter(r=>r[0]==="Final").map(r=>[r[1],r[2],r[3],r[4],r[5]])[0]);
  if(!e.semis||!fin)return"";
  const box=(m,lab)=>'<div class="bk"><span class="bl">'+lab+'</span>'+[0,1].map(i=>'<div class="bt '+(m[3]===i?"w":"l")+'">'+teamIcon(m[i],kind)+'<span>'+esc(m[i])+'</span></div>').join("")+'<small><b>'+m[2]+'</b>'+(m[4]?' · '+esc(m[4]):'')+'</small></div>';
  return '<p class="sub">The final four</p><div class="bracket"><div class="bcol">'+box(e.semis[0],"Semi-final 1")+box(e.semis[1],"Semi-final 2")+'</div><div class="blink" aria-hidden="true"></div><div class="bcol fin">'+box(fin,"Final")+'<div class="champ-b">🏆 '+esc(fin[fin[3]===1?1:0])+'</div></div></div>';
}
function koHtml(e,kind){
  const rs=e.ko,fin=rs[rs.length-1].m[0],champ=fin[fin[3]];
  const card=m=>{const onPath=m[0]===champ||m[1]===champ;return '<div class="km'+(onPath?" path":"")+'">'+[0,1].map(i=>'<div class="kt '+(m[3]===i?"w":"l")+'">'+teamIcon(m[i],kind)+'<span>'+esc(m[i])+'</span></div>').join("")+'<div class="ks"><b>'+m[2]+'</b>'+(m[4]?' '+esc(m[4]):'')+'</div></div>'};
  return '<p class="sub">Knockout stage, '+esc(rs[0].name)+' to the final · the champion\'s path is outlined in gold</p><div class="kbr">'+rs.map(r=>'<div class="kcol"><div class="kh">'+esc(r.name)+'</div><div class="kms">'+r.m.map(card).join("")+'</div></div>').join("")+'<div class="kcol kchamp"><div class="kh">Champion</div><div class="kms"><div class="cbig">🏆<b>'+teamIcon(champ,kind)+esc(champ)+'</b></div></div></div></div>';
}
function editionHtml(e,kind,id){
  return editionBody(e,kind)+statsHtml(id,e.year);
}
function editionBody(e,kind){
  if(e.ko){let h=koHtml(e,kind);if(e.note)h+='<p class="anote">'+esc(e.note)+'</p>';const tm=t=>Array.isArray(t)?flag(t[1])+esc(t[0]):teamIcon(t,kind)+esc(t);
    if(e.groups)h+='<p class="sub">Groups in '+e.year+'</p><div class="groups">'+Object.entries(e.groups).map(([g,ts])=>'<div class="grp"><b>Group '+g+'</b>'+ts.map(t=>'<div>'+tm(t)+'</div>').join("")+'</div>').join("")+'</div>';
    else if(e.teams)h+='<p class="sub">Teams in '+e.year+' ('+e.teams.length+')</p><div class="chips">'+e.teams.map(t=>'<span class="chipx">'+tm(t)+'</span>').join("")+'</div>';
    return h}
  let h=bracketHtml(e,kind)+'<p class="sub">'+e.title+'</p>';
  if(!e.rows&&!e.table&&e.semis)h=bracketHtml(e,kind)+'<p class="anote">'+esc(e.title)+'</p>';
  if(e.rows)h+='<div class="road">'+e.rows.map(x=>matchRow(x[0],x[1],x[2],x[3],x[4],x[5],kind)).join("")+'</div>';
  if(e.table)h+='<table class="ltable"><thead><tr><th>#</th><th>Club</th><th>W</th><th>D</th><th>L</th><th>Pts</th></tr></thead><tbody>'+e.table.map((t,i)=>'<tr'+(i?'':' class="champ"')+'><td>'+(i+1)+'</td><td><span class="nm">'+teamIcon(t[0],"clubs")+esc(t[0])+(i?'':' <b class="ct">Champions</b>')+'</span></td><td>'+t[1]+'</td><td>'+t[2]+'</td><td>'+t[3]+'</td><td><b>'+t[4]+'</b></td></tr>').join("")+'</tbody></table>';
  if(e.note)h+='<p class="anote">'+esc(e.note)+'</p>';
  const tm=t=>Array.isArray(t)?flag(t[1])+esc(t[0]):teamIcon(t,kind)+esc(t);
  if(e.groups)h+='<p class="sub">Groups in '+e.year+'</p><div class="groups">'+Object.entries(e.groups).map(([g,ts])=>'<div class="grp"><b>Group '+g+'</b>'+ts.map(t=>'<div>'+tm(t)+'</div>').join("")+'</div>').join("")+'</div>';
  else if(e.teams)h+='<p class="sub">Teams in '+e.year+' ('+e.teams.length+')</p><div class="chips">'+e.teams.map(t=>'<span class="chipx">'+tm(t)+'</span>').join("")+'</div>';
  return h;
}
function roadHtml(id,kind){
  const eds=ROADS[id];if(!eds)return"";
  const chips='<div class="years" role="group" aria-label="Choose a year"><span>Choose a year:</span>'+eds.map((e,i)=>'<button data-y="'+i+'" aria-pressed="'+(i===0)+'">'+e.year+'</button>').join("")+'</div>';
  return '<div class="roadbox" data-id="'+id+'" data-kind="'+kind+'">'+chips+'<div class="roadin">'+editionHtml(eds[0],kind,id)+'</div></div>';
}
document.addEventListener("click",e=>{
  const b=e.target.closest(".years button");if(!b)return;
  const box=b.closest(".roadbox"),ed=ROADS[box.dataset.id][+b.dataset.y];
  box.querySelectorAll(".years button").forEach(x=>x.setAttribute("aria-pressed",x===b));
  box.querySelector(".roadin").innerHTML=editionHtml(ed,box.dataset.kind,box.dataset.id);
});
function openComp(id){
  const c=COMPS.find(x=>x.id===id),d=$("dlg"),max=c.titles[0][1];
  let latest="";
  if(c.groups)latest='<div class="groups">'+Object.entries(c.groups).map(([g,ts])=>'<div class="grp"><b>Group '+g+'</b>'+ts.map(t=>'<div>'+flag(t)+esc(t)+'</div>').join("")+'</div>').join("")+'</div>';
  else if(c.kind==="nations")latest='<div class="chips">'+c.list.map(t=>'<span class="chipx">'+flag(t)+esc(t)+'</span>').join("")+'</div>';
  else if(c.kind==="clubs")latest='<div class="chips">'+c.list.map(t=>'<span class="chipx">'+flag(t[1])+esc(t[0])+'</span>').join("")+'</div>';
  else if(c.list&&c.list.length)latest='<div class="chips">'+c.list.map(t=>{const j=teamIcon(t,"clubs");return '<span class="chipx'+(j?"":" noflag")+'">'+j+esc(t)+'</span>'}).join("")+'</div>';
  else latest=c.latestLabel?'<p class="count">'+esc(c.latestLabel)+'</p>':"";
  let rank=0,prev=null;
  const board='<div class="board" style="--cc:'+c.col+'">'+c.titles.map((t,i)=>{if(t[1]!==prev){rank=i+1;prev=t[1]}return '<div class="brow"><span class="rk'+(rank===1?" g":"")+'">'+rank+'</span><span class="nm">'+teamIcon(t[0],c.kind==="nations"?"nations":"clubs")+esc(t[0])+'</span><span class="bar" style="width:'+(t[1]/max*100)+'%"></span><span class="n">'+t[1]+'</span></div>'}).join("")+'</div>';
  let finals="";
  if(id==="wc")finals='<p class="sub">Every World Cup final (winner in green)</p><div class="road">'+WC.slice().reverse().map(w=>matchRow(w[0],w[2],w[4],w[3],0,w[5]+" · Host: "+w[1],"nations")).join("")+'</div>';
  d.style.setProperty("--cc",c.col);
  d.innerHTML='<div class="dlg-head">'+compArtwork(c)+'<div><p class="kicker" style="margin:0">Since '+c.since+'</p><h2 id="dlgTitle">'+c.name+'</h2></div><button class="x" aria-label="Close">✕</button></div><div class="dlg-body"><p style="color:var(--mute);margin:6px 0 0">'+c.about+'</p><div class="facts"><div><small>Holder</small><b>'+esc(c.holder)+'</b></div><div><small>Next</small><b>'+esc(c.next)+'</b></div></div>'+roadHtml(id,c.kind==="nations"?"nations":"clubs")+seasonsHtml(id)+'<p class="sub">'+(c.titlesLabel||"Most titles")+'</p>'+board+finals+'</div>';
  d.querySelector(".x").onclick=()=>d.close();
  d.showModal();d.scrollTop=0;
}
$("dlg").addEventListener("click",e=>{if(e.target.id==="dlg")e.target.close()});


/* ---------- Player stats inside competitions ---------- */
const CNAME={};for(const k in ISO)if(!CNAME[ISO[k]])CNAME[ISO[k]]=k;
Object.assign(CNAME,{"bf":"Burkina Faso","cf":"Central African Rep.","il":"Israel","id":"Indonesia","cw":"Curaçao","ro":"Romania","au":"Australia","eg":"Egypt","si":"Slovenia","at":"Austria","ba":"Bosnia","cd":"DR Congo","ml":"Mali","sk":"Slovakia","cz":"Czech Republic","gb-nir":"Northern Ireland","gb-eng":"England","gb-sct":"Scotland","gb-wls":"Wales","gb-nir":"Northern Ireland","xk":"Kosovo","gq":"Equatorial Guinea","ae":"UAE","ir":"Iran","me":"Montenegro","ve":"Venezuela","ge":"Georgia","sk":"Slovakia","bg":"Bulgaria","ru":"Russia","ua":"Ukraine","pe":"Peru","do":"Dominican Republic","lu":"Luxembourg","mz":"Mozambique","am":"Armenia","uz":"Uzbekistan","dz":"Algeria","gh":"Ghana","gn":"Guinea","ci":"Ivory Coast","sn":"Senegal","ec":"Ecuador","ie":"Ireland"});
const cname=c=>CNAME[c]||c.toUpperCase();
function rankRows(rows){let r=0,prev=null;return rows.map((x,i)=>{if(x[3]!==prev){r=i+1;prev=x[3]}return r})}
function statList(title,unit,rows,extra){
  if(!rows||!rows.length)return"";const max=rows[0][3],rk=rankRows(rows);
  return '<div class="stb"><b class="stt">'+title+'</b>'+rows.map((r,i)=>'<div class="str'+(rk[i]===1?" lead1":"")+'"><span class="srk">'+rk[i]+'</span><span class="sn">'+(r[1]?flag(r[1]):"")+'<span><b>'+esc(r[0])+'</b><small>'+esc(r[2])+(extra?extra(r):"")+'</small></span></span><span class="sbar" style="width:'+(r[3]/max*100)+'%"></span><span class="sv">'+r[3]+'<small> '+unit+'</small></span></div>').join("")+'</div>';
}
function gaRows(x){
  if(!x.a)return[];const m={};
  x.s.forEach(r=>{m[r[0]]={r,g:r[3],a:null}});
  x.a.forEach(r=>{if(m[r[0]])m[r[0]].a=r[3]});
  return Object.values(m).filter(v=>v.a!=null).map(v=>[v.r[0],v.r[1],v.r[2],v.g+v.a,v.g,v.a]).sort((p,q)=>q[3]-p[3]||q[4]-p[4]);
}
function statsHtml(id,year){
  const x=STATS[id]&&STATS[id][year];if(!x)return"";
  const ga=gaRows(x);
  const best=x.best?'<div class="bestp">'+x.best.map(b=>'<div><small>'+esc(b[0])+'</small><b>'+flag(b[2])+esc(b[1])+'</b></div>').join("")+'</div>':"";
  const tie=x.s.length>1&&x.s[0][3]===x.s[1][3];
  let h='<p class="sub">Player stats, '+esc(year)+'</p>'+best+'<div class="stgrid">'+statList(tie?"Top scorers (joint winners)":"Top scorers","goals",x.s)+statList("Most assists","assists",x.a)+(ga.length?statList("Goals + assists (G/A)","G/A",ga,r=>' · '+r[4]+' G + '+r[5]+' A'):"")+statList("Most clean sheets","clean sheets",x.cs)+'</div>';
  const no=[];if(!x.a)no.push("assists");if(!x.cs)no.push("clean sheets");
  h+='<p class="stsrc">Source: '+esc(x.src||"official records")+'.'+(ga.length?' G/A is shown for players who appear in both the scorers and assists lists.':'')+(no.length?' No reliable '+no.join(" or ")+' list was found for this edition.':'')+'</p>';
  if(x.note)h+='<p class="anote">'+esc(x.note)+'</p>';
  return h;
}
function seasonsHtml(id){
  const S=STATS[id];if(!S)return"";const ys=Object.keys(S);
  const nm=rows=>{if(!rows||!rows.length)return'<span class="mute">–</span>';const t=rows[0][3],w=rows.filter(r=>r[3]===t);return w.map(r=>'<span class="nm">'+(r[1]?flag(r[1]):"")+esc(r[0])+'</span>').join("")+' <b>'+t+'</b>'};
  return '<p class="sub">Leaders in every season on this site</p><div class="stwrap"><table class="sttable seas"><thead><tr><th>Season</th><th>Top scorer (goals)</th><th>Most assists</th><th>Best G/A</th><th>Clean sheets</th></tr></thead><tbody>'+ys.map(y=>{const x=S[y],g=gaRows(x);return '<tr><td><b>'+esc(y)+'</b></td><td>'+nm(x.s)+'</td><td>'+nm(x.a)+'</td><td>'+(g.length?nm([g[0]]):'<span class="mute">–</span>')+'</td><td>'+nm(x.cs)+'</td></tr>'}).join("")+'</tbody></table></div>';
}

/* ---------- Squads ---------- */
function tvOf(n){const k=n.replace(/^FC (?=Barcelona)/,"");for(const l in TEAM_VALUES){const r=TEAM_VALUES[l].find(x=>x[0]===k||x[0]===n);if(r)return r}return null}
inits.squads=function(){
  const names=Object.keys(SQUADS);let cur=names[0],pos="all";
  const LG=n=>{for(const l in LEAGUE_CLUBS)if(LEAGUE_CLUBS[l].some(x=>x[0]===n))return l;const c=CLUBS.find(x=>x[0]===n);return c?c[2]:"Other"};
  const groups={};names.forEach(n=>{(groups[LG(n)]=groups[LG(n)]||[]).push(n)});
  const LGF={"Premier League":"gb-eng","La Liga":"es","Bundesliga":"de","Serie A":"it","Ligue 1":"fr","Primeira Liga":"pt","Eredivisie":"nl"};
  let lg=LG(cur),sqq="";
  function picker(){
    const ls=Object.keys(groups);
    $("sqLeagues").innerHTML=ls.map(l=>'<button data-l="'+esc(l)+'" aria-pressed="'+(l===lg&&!sqq)+'">'+(LGF[l]?flag(LGF[l]):"")+'<span>'+esc(l)+'</span><small>'+groups[l].length+'</small></button>').join("");
    const list=sqq?names.filter(n=>n.toLowerCase().includes(sqq)||SQUADS[n].p.some(p=>p[1].toLowerCase().includes(sqq))):groups[lg];
    $("sqClubs").innerHTML=list.length?list.map(n=>{const pl=sqq&&!n.toLowerCase().includes(sqq)?SQUADS[n].p.find(p=>p[1].toLowerCase().includes(sqq)):null;return '<button class="sqc" data-c="'+esc(n)+'" aria-pressed="'+(n===cur)+'">'+teamIcon(n,"clubs",34)+'<span><b>'+esc(n)+'</b><small>'+(pl?'Player: '+esc(pl[1]):esc(SQUADS[n].coach)+' · '+SQUADS[n].p.length+' players')+'</small></span></button>'}).join(""):'<p class="empty">No club or player matches.</p>';
  }
  $("sqLeagues").addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;lg=b.dataset.l;sqq="";$("sqFind").value="";picker()});
  $("sqFind").addEventListener("input",e=>{sqq=e.target.value.trim().toLowerCase();picker()});
  $("sqClubs").addEventListener("click",e=>{const b=e.target.closest("button");if(b){cur=b.dataset.c;lg=LG(cur);render();picker();scrollTo({top:$("sqHead").getBoundingClientRect().top+scrollY-80,behavior:"smooth"})}});
  window.squadSelect=n=>{cur=n;lg=LG(n);sqq="";$("sqFind").value="";render();picker();backBar();setTimeout(()=>{const t=($("sqBack").hidden?$("sqHead"):$("sqBack")).getBoundingClientRect().top+scrollY-80;scrollTo({top:t})},0)};
  function backBar(){const b=$("sqBack");if(SQ_BACK==="standings"){b.innerHTML='<a href="#standings">← Back to league tables</a>';b.hidden=false}else if(SQ_BACK==="clubs"){b.innerHTML='<a href="#clubs">← Back to clubs</a>';b.hidden=false}else b.hidden=true}
  if(SQ_PENDING){cur=SQ_PENDING;lg=LG(cur)}
  picker();
  $("sqPos").addEventListener("click",e=>{const b=e.target.closest("button");if(b){pos=b.dataset.p;render()}});
  const PN={GK:"Goalkeeper",DF:"Defender",MF:"Midfielder",FW:"Forward"};
  function render(){
    const q=SQUADS[cur],hasStats=true,hasA=true;
    $("sqPos").querySelectorAll("button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.p===pos));
    const ga=p=>(p[4]||0)+(p[5]||0);
    let star=null;if(hasStats){star=q.p.reduce((a,b)=>ga(b)>ga(a)?b:a);if(!ga(star))star=null}
    const nats={};q.p.forEach(p=>{if(p[3])nats[p[3]]=(nats[p[3]]||0)+1});
    const club=CLUBS.find(c=>c[0]===cur);
    const PF=n=>(window.PROFILES||{})[cur+"|"+n]||{};const vals=q.p.map(p=>PF(p[1]).value).filter(v=>v!=null),tot=vals.reduce((a,b)=>a+b,0);
    const money=v=>v>=1000?"€"+(v/1000).toFixed(2).replace(/\.?0+$/,"")+"bn":"€"+v+"m";
    $("sqHead").innerHTML='<div class="sqcard">'+teamIcon(cur,"clubs",72)+'<div><h3>'+esc(cur)+' <small>2026-27</small></h3>'+(club?'<div class="meta">'+flag(club[3])+esc(club[4])+' · '+esc(club[6])+'</div>':'')+'</div>'+
      '<div class="facts sqf"><div><small>Head coach</small><b>'+esc(q.coach)+'</b></div><div><small>Captain</small><b>'+(q.captain?'<span class="cap">C</span> '+esc(q.captain):'Not named in source')+'</b></div><div><small>Squad size</small><b>'+q.p.length+' players · '+Object.keys(nats).length+' nations</b></div><div><small>Squad market value</small><b>'+(tvOf(cur)?money(tvOf(cur)[5])+' <small class="pn">Transfermarkt · avg age '+tvOf(cur)[2]+'</small>':vals.length?money(tot)+(vals.length<q.p.length?' <small class="pn">('+vals.length+' of '+q.p.length+' players)</small>':''):'Not added yet')+'</b></div>'+(star?'<div class="starbox"><small>★ Brightest player (most G/A)</small><b>'+flag(star[3])+esc(star[1])+' · '+star[4]+'G '+(star[5]!=null?star[5]+'A':'')+'</b></div>':'')+'</div>'+
      '<div class="honours"><small>Trophies won last season (2025-26)</small>'+(q.honours.length?q.honours.map(h=>'<span class="hon">🏆 '+esc(h)+'</span>').join(""):'<span class="none">No league or European title</span>')+'</div></div>'+
      '<div class="natbar">'+Object.entries(nats).sort((a,b)=>b[1]-a[1]).map(([c,n])=>'<span title="'+esc(cname(c))+'">'+flag(c)+esc(cname(c))+' <b>'+n+'</b></span>').join("")+'</div>';
    const rows=q.p.filter(p=>pos==="all"||p[2]===pos).slice().sort((a,b)=>"GKDFMFFW".indexOf(a[2])-"GKDFMFFW".indexOf(b[2])||(a[0]??999)-(b[0]??999));
    $("sqTable").innerHTML='<thead><tr><th>No.</th><th>Player</th><th>Position</th><th>Nationality</th><th title="Transfermarkt market value">Value</th>'+(hasStats?'<th title="Goals">G</th>'+(hasA?'<th title="Assists">A</th><th title="Goals plus assists">G/A</th>':''):'')+'</tr></thead><tbody>'+rows.map(p=>{const isC=p[1]===q.captain,isS=star&&p===star;return '<tr class="pl'+(isS?" star":"")+'" data-n="'+esc(p[1])+'" tabindex="0" title="Show player profile"><td><span class="shirtno">'+(p[0]??"–")+'</span></td><td><b>'+esc(p[1])+'</b>'+(isC?' <span class="cap" title="Captain">C</span>':'')+(isS?' <span class="stari" title="Brightest player: most goals + assists">★</span>':'')+'</td><td><span class="pos p'+p[2]+'">'+p[2]+'</span> <small class="pn">'+PN[p[2]]+'</small></td><td>'+(p[3]?flag(p[3])+esc(cname(p[3])):'<span class="pn">–</span>')+'</td><td>'+(PF(p[1]).value!=null?'<b>'+money(PF(p[1]).value)+'</b>':'<span class="pn">–</span>')+'</td>'+(hasStats?'<td>'+(p[4]??0)+(p[6]?'<sup class="apx" title="Approximate: the source gave a range">≈</sup>':'')+'</td>'+(hasA?'<td>'+(p[5]??0)+'</td><td><b>'+ga(p)+'</b></td>':''):'')+'</tr>'}).join("")+'</tbody>';
    $("sqMeta").textContent="Squad as of "+q.asOf+" · source: "+q.src+(hasStats?" · goals"+(hasA?" and assists":"")+" are for 2026-27 so far, all competitions":" · this source has no goal figures yet")+(q.p.some(p=>p[6])?" · ≈ = approximate, the source gave a range":"");
  }
  const PN2={GK:"Goalkeeper",CB:"Centre-back",LB:"Left-back",RB:"Right-back",LWB:"Left wing-back",RWB:"Right wing-back",DM:"Defensive midfielder",CM:"Central midfielder",AM:"Attacking midfielder",LM:"Left midfielder",RM:"Right midfielder",LW:"Left winger",RW:"Right winger",SS:"Second striker",CF:"Centre-forward",ST:"Striker"};
  function profile(n){
    const q=SQUADS[cur],p=q.p.find(x=>x[1]===n);if(!p)return;const f=(window.PROFILES||{})[cur+"|"+n]||{},d=$("dlg");
    const row=(k,v)=>'<div><small>'+k+'</small><b>'+(v!=null&&v!==""?v:'<span class="pn">Not added yet</span>')+'</b></div>';
    const money=v=>v>=1000?"€"+(v/1000)+"bn":"€"+v+"m";
    d.style.setProperty("--cc","#f5c542");
    d.innerHTML='<div class="dlg-head">'+avatar(n,"#1a454d").replace('class="avatar"','class="avatar" width="64" height="64"')+'<div><p class="kicker" style="margin:0">'+teamIcon(cur,"clubs",18)+' '+esc(cur)+' · #'+(p[0]??"–")+'</p><h2>'+esc(n)+(p[1]===q.captain?' <span class="cap">C</span>':'')+'</h2></div><button class="x" aria-label="Close">✕</button></div><div class="dlg-body"><div class="facts">'+
      row("Age",f.age!=null?f.age+(f.born?' <small class="pn">(born '+esc(f.born)+')</small>':''):null)+
      row("Position",f.pos?esc(f.pos)+' <small class="pn">'+(PN2[f.pos]||"")+'</small>':p[2]+' <small class="pn">'+PN[p[2]]+'</small>')+
      row("Nationality",p[3]?flag(p[3])+esc(cname(p[3]))+(f.nat2?' <small class="pn">also '+esc(f.nat2.length<4?cname(f.nat2):f.nat2)+'</small>':''):null)+
      row("Preferred foot",f.foot?esc(f.foot):null)+
      row("Height",f.h?f.h+" cm":null)+row("Weight",f.w?f.w+" kg":null)+
      row("Market value",f.value!=null?money(f.value):null)+
      row("This season",(p[4]??0)+" goals · "+(p[5]??0)+" assists")+
      '</div><p class="sub">Club history</p>'+(!(f.history&&f.history.length)&&f.joinedFrom?'<ol class="hist"><li><span>Before</span>'+teamIcon(f.joinedFrom,"clubs",20)+'<b>'+esc(f.joinedFrom)+'</b></li><li><span>2026-27</span>'+teamIcon(cur,"clubs",20)+'<b>'+esc(cur)+'</b> <small class="pn">current club</small></li></ol><p class="stsrc">Full career history not added yet.</p>':'')+(f.history&&f.history.length?'<ol class="hist">'+f.history.map(h=>'<li><span>'+esc(h[0]||"Earlier")+'</span>'+teamIcon(h[1],"clubs",20)+'<b>'+esc(h[1])+'</b>'+(h[2]?' <small class="pn">'+esc(h[2])+'</small>':'')+'</li>').join("")+'</ol>':f.joinedFrom?'':'<p class="pn">Not added yet.</p>')+(f.src?'<p class="stsrc">Source: '+esc(f.src)+(f.src2?' · '+esc(f.src2):'')+(f.src3?' · '+esc(f.src3)+' (height, weight, foot'+(f.histNoYears?', previous clubs':'')+')':'')+(f.histNoYears?'. Club years not given.':'')+'</p>':'')+'</div>';
    d.querySelector(".x").onclick=()=>d.close();d.showModal();d.scrollTop=0;
  }
  $("sqTable").addEventListener("click",e=>{const r=e.target.closest("tr.pl");if(r)profile(r.dataset.n)});
  $("sqTable").addEventListener("keydown",e=>{const r=e.target.closest("tr.pl");if(r&&e.key==="Enter")profile(r.dataset.n)});
  render();
};

/* ---------- Transfers ---------- */
const NATCOL={"pt":"#c8102e","fr":"#2251a8","gb-eng":"#e8ecef","gb-wls":"#d0102b","gh":"#fcd116","ua":"#ffd500","es":"#c60b1e","br":"#fedd00","uy":"#6cb4ee","be":"#e30613","de":"#3a3a3a","ar":"#75aadb","se":"#fecc00","nl":"#ff7f00","it":"#1d5fbf","ng":"#008751","eg":"#ce1126","no":"#ba0c2f","hr":"#e4002b","pl":"#dc143c","co":"#fcd116","ma":"#c1272d","sn":"#00853f","gb-sct":"#1b3a8f","ci":"#f77f00","cm":"#007a5e","dk":"#c8102e","tr":"#e30a17","ge":"#da291c","us":"#0a3161","ec":"#ffd100","jp":"#1c2f6b","kr":"#cd2e3a"};
inits.transfers=function(){
  const tabs=$("trTabs");
  const V={
    record:()=>{const max=RECORDS[RECORDS.length-1][5];return '<p class="count">Each time a club paid more than anyone before. Fees in pounds (£ million) at the time; €222m for Neymar in 2017 is still the record.</p><ol class="rtl">'+RECORDS.slice().reverse().map((r,i)=>'<li class="'+(i===0?"now":"")+'"><span class="ry">'+r[0]+'</span><div class="rc"><b>'+flag(r[2])+esc(r[1])+'</b><small>'+teamIcon(r[3],"clubs",18)+esc(r[3])+' → '+teamIcon(r[4],"clubs",18)+esc(r[4])+'</small><span class="rbar" style="width:'+Math.max(2,r[5]/max*100)+'%"></span></div><span class="rf">£'+r[5]+'m</span></li>').join("")+'</ol>'},
    year:()=>{const max=Math.max(...YEAR_TOP.map(r=>r[5]));return '<p class="count">The most expensive signing of each calendar year since 2000 (£ million). Each bar is coloured in the main colour of the player\'s national team. Hover or tap a bar for the deal.</p><div class="ychart">'+YEAR_TOP.map(r=>'<div class="yc" tabindex="0"><span class="yv">£'+r[5]+'m</span><span class="yb natbar" style="height:'+(r[5]/max*100)+'%;--nc:'+(NATCOL[r[2]]||"#f5c542")+'"></span><span class="yl">'+r[0].slice(2)+'</span><div class="ytip">'+flag(r[2])+'<b>'+r[0]+' · '+esc(r[1])+'</b><br>'+esc(r[3])+' → '+esc(r[4])+'<br>£'+r[5]+'m</div></div>').join("")+'</div><div class="stwrap"><table class="sttable trt"><thead><tr><th>Year</th><th>Player</th><th>From</th><th>To</th><th>Fee</th></tr></thead><tbody>'+YEAR_TOP.slice().reverse().map(r=>'<tr><td>'+r[0]+'</td><td>'+flag(r[2])+'<b>'+esc(r[1])+'</b></td><td><span class="nm">'+teamIcon(r[3],"clubs")+esc(r[3])+'</span></td><td><span class="nm">'+teamIcon(r[4],"clubs")+esc(r[4])+'</span></td><td><b>£'+r[5]+'m</b></td></tr>').join("")+'</tbody></table></div>'},
    top:()=>{const yrs=[...new Set(TOP_FEES.map(r=>r[4]))].sort((a,b)=>b-a);const clubs=[...new Set(TOP_FEES.flatMap(r=>[r[2],r[3]]))].sort();
      return '<p class="count">The '+TOP_FEES.length+' biggest transfer fees ever (€ million, including add-ons where reported). Filter by year, club or position.</p><div class="toolbar"><input type="search" id="tfQ" placeholder="Search a player" aria-label="Search a player"><select id="tfY" aria-label="Year"><option value="">All years</option>'+yrs.map(y=>'<option>'+y+'</option>').join("")+'</select><select id="tfC" aria-label="Club"><option value="">All clubs (buying or selling)</option>'+clubs.map(c=>'<option>'+esc(c)+'</option>').join("")+'</select><select id="tfP" aria-label="Position"><option value="">All positions</option><option value="FW">Forwards</option><option value="MF">Midfielders</option></select></div><p class="count" id="tfN"></p><div class="stwrap"><table class="sttable trt" id="tfT"></table></div>'},
    summer:()=>{const max=SUMMER_2026[0][3];return '<p class="count">The biggest deals of the summer 2026 window, right after the World Cup (£ million). English clubs spent the most.</p><div class="vlist">'+SUMMER_2026.map((r,i)=>'<div class="vrow"><span class="rk">'+(i+1)+'</span><span class="vn"><b>'+esc(r[0])+'</b><small>'+teamIcon(r[1],"clubs",18)+esc(r[1])+' → '+teamIcon(r[2],"clubs",18)+esc(r[2])+'</small></span><span class="vbar" style="width:'+(r[3]/max*100)+'%"></span><span class="vv">£'+r[3]+'m</span></div>').join("")+'</div>'},
    squads:()=>{const L=Object.keys(TEAM_VALUES);const tot=l=>TEAM_VALUES[l].reduce((a,r)=>a+r[5],0);const m=v=>v>=1000?"€"+(v/1000).toFixed(2)+"bn":"€"+(v<10?v.toFixed(2):Math.round(v*10)/10)+"m";
      const lmax=Math.max(...L.map(tot));
      return '<p class="count">Total market value of every club squad in the seven big European leagues, 2026-27 (Transfermarkt). Pick a league.</p><div class="vlist" style="margin-bottom:14px">'+L.slice().sort((a,b)=>tot(b)-tot(a)).map((l,i)=>'<div class="vrow"><span class="rk'+(i===0?" g":"")+'">'+(i+1)+'</span><span class="vn"><b>'+leagueBadge(l,"value-league-badge")+esc(l)+'</b><small>'+TEAM_VALUES[l].length+' clubs · most valuable: '+teamIcon(TEAM_VALUES[l][0][0],"clubs",20)+esc(TEAM_VALUES[l][0][0])+'</small></span><span class="vbar" style="width:'+(tot(l)/lmax*100)+'%"></span><span class="vv">'+m(tot(l))+'</span></div>').join("")+'</div><div class="btns" id="tvTabs">'+L.map(l=>'<button data-l="'+esc(l)+'">'+esc(l)+'</button>').join("")+'</div><div id="tvOut"></div>'},
    value:()=>{const max=VALUES[0][4];return '<p class="count">Market value is an estimate of what a player is worth today, not a fee anyone has paid. Figures from Transfermarkt after the 2026 World Cup (€ million).</p><div class="vlist">'+VALUES.map((r,i)=>'<div class="vrow"><span class="rk'+(i<2?" g":"")+'">'+(i+1)+'</span><span class="vn">'+avatar(r[0],"#1a454d")+'<span><b>'+flag(r[1])+esc(r[0])+'</b><small>'+teamIcon(r[2],"clubs",18)+esc(r[2])+' · '+({FW:"Forward",MF:"Midfielder"}[r[3]])+'</small></span></span><span class="vbar" style="width:'+(r[4]/max*100)+'%"></span><span class="vv">€'+r[4]+'m</span></div>').join("")+'</div><p class="anote">Lamine Yamal and Erling Haaland share the top value of €220m. Older year-by-year value rankings are not included because no reliable source lists them for every year.</p>'}
  };
  function filt(){const q=$("tfQ").value.trim().toLowerCase(),y=$("tfY").value,c=$("tfC").value,p=$("tfP").value;
    const L=TOP_FEES.map((r,i)=>[r,i+1]).filter(([r])=>(!q||r[0].toLowerCase().includes(q))&&(!y||r[4]==y)&&(!c||r[2]===c||r[3]===c)&&(!p||r[6]===p));
    $("tfN").textContent=L.length+" of "+TOP_FEES.length+" transfers";
    $("tfT").innerHTML='<thead><tr><th>#</th><th>Player</th><th>From</th><th>To</th><th>Year</th><th>Fee</th></tr></thead><tbody>'+(L.length?L.map(([r,i])=>'<tr><td>'+i+'</td><td>'+flag(r[1])+'<b>'+esc(r[0])+'</b> <span class="pos p'+r[6]+'">'+r[6]+'</span></td><td><span class="nm">'+teamIcon(r[2],"clubs")+esc(r[2])+'</span></td><td><span class="nm">'+teamIcon(r[3],"clubs")+esc(r[3])+'</span></td><td>'+r[4]+'</td><td><b>€'+r[5]+'m</b></td></tr>').join(""):'<tr><td colspan="6" class="empty">No transfers match.</td></tr>')+'</tbody>'}
  function show(k){tabs.querySelectorAll("button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.t===k));$("trOut").innerHTML=V[k]();
    if(k==="squads"){const show=l=>{$("tvTabs").querySelectorAll("button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.l===l));const R=TEAM_VALUES[l],mx=R[0][5],m=v=>v>=1000?"€"+(v/1000).toFixed(2)+"bn":"€"+(v<10?v.toFixed(2):Math.round(v*10)/10)+"m";
      $("tvOut").innerHTML='<div class="vlist">'+R.map((r,i)=>'<div class="vrow"><span class="rk'+(i<1?" g":"")+'">'+(i+1)+'</span><span class="vn">'+teamIcon(r[0],"clubs",26)+'<span><b>'+esc(r[0])+'</b><small>'+r[1]+' players · avg age '+r[2]+' · '+r[3]+' foreign · avg '+m(r[4])+'</small></span></span><span class="vbar" style="width:'+(r[5]/mx*100)+'%"></span><span class="vv">'+m(r[5])+'</span></div>').join("")+'</div>'};
      $("tvTabs").addEventListener("click",e=>{const b=e.target.closest("button");if(b)show(b.dataset.l)});show(Object.keys(TEAM_VALUES)[0])}
    if(k==="top"){["tfQ","tfY","tfC","tfP"].forEach(i=>$(i).addEventListener("input",filt));filt()}}
  tabs.addEventListener("click",e=>{const b=e.target.closest("button");if(b)show(b.dataset.t)});
  const rec=RECORDS[RECORDS.length-1],big=TOP_FEES[0];
  $("trFacts").innerHTML=[["World record","€222m","Neymar, Barcelona → PSG, 2017"],["Most valuable now","€220m","Lamine Yamal and Erling Haaland"],["Biggest deal of 2026","£125m","Enzo Fernández, Chelsea → Man City"],["Record in 1982","£3m","Maradona, Boca → Barcelona"]].map(f=>'<div class="stat"><b>'+f[1]+'</b><span><strong>'+f[0]+'</strong><br>'+f[2]+'</span></div>').join("");
  show("record");
};

/* ---------- Awards ---------- */
inits.awards=function(){
  const box=$("awardList");
  box.innerHTML=AWARDS.map(a=>'<button class="aw" data-a="'+a.id+'" aria-pressed="false" style="--cc:'+a.col+'">'+trophy(a.icon,a.col)+'<b>'+a.name+'</b><small>Since '+a.since+'</small></button>').join("");
  box.addEventListener("click",e=>{const b=e.target.closest(".aw");if(!b)return;show(b.dataset.a);if(innerWidth<820)$("awardDetail").scrollIntoView({behavior:"smooth"})});
  function show(id){
    box.querySelectorAll(".aw").forEach(b=>b.setAttribute("aria-pressed",b.dataset.a===id));
    const a=AWARDS.find(x=>x.id===id),top=a.most.filter(m=>m[2]===a.most[0][2]),max=a.most[0][2];
    const H=HIST[id]||[],posOf=n=>{const r=H.find(h=>h[1].replace(/ \(.*\)/,"")===n);return r?r[4]:(POS[n]||"")};
    const heroCard='<div class="hero-player" style="--cc:'+a.col+'"><p class="kicker" style="color:'+a.col+'">'+(top.length>1?"Joint record holders":"Record holder")+'</p>'+
      top.map(t=>{const yrs=H.filter(h=>!h[5]&&h[1].replace(/ \(.*\)/,"")===t[0]).map(h=>h[0]);return awardHolderAvatar(id,t[0],a.col)+'<h3>'+esc(t[0])+'</h3><div class="flagrow">'+flag(t[1])+'<span class="pos">'+esc(posOf(t[0]))+'</span></div>'+(yrs.length?'<div class="yrs">'+yrs.map(y=>'<span>'+y+'</span>').join("")+'</div>':'')}).join("")+
      '<div class="big">'+max+'×</div><small style="color:var(--mute)">'+a.name+' wins</small></div>';
    let rank=0,prev=null;
    const board='<div class="board" style="--cc:'+a.col+'">'+a.most.map((m,i)=>{if(m[2]!==prev){rank=i+1;prev=m[2]}return '<div class="brow"><span class="rk'+(rank===1?" g":"")+'">'+rank+'</span><span class="nm">'+flag(m[1])+esc(m[0])+'</span><span class="bar" style="width:'+(m[2]/max*100)+'%"></span><span class="n">'+m[2]+'</span></div>'}).join("")+'</div>';
    const won=H.filter(h=>h[2]),pc={};won.forEach(h=>{const g=/Goalkeeper/.test(h[4])?"Goalkeepers":/back/.test(h[4])?"Defenders":/midfielder|Midfielder/.test(h[4])?"Midfielders":"Forwards";pc[g]=(pc[g]||0)+1});
    const posChart='<div class="poschart">'+["Forwards","Midfielders","Defenders","Goalkeepers"].filter(k=>pc[k]).map(k=>'<div style="flex:'+pc[k]+'"><b>'+pc[k]+'</b><span>'+k+'</span></div>').join("")+'</div>';
    const topN=new Set(top.map(t=>t[0]));
    const hist='<div class="htable" style="--cc:'+a.col+'"><div class="hrow hhead"><span>Year</span><span>Winner</span><span>Position</span><span>Club</span></div>'+H.slice().reverse().map(h=>h[2]?'<div class="hrow'+(topN.has(h[1].replace(/ \(.*\)/,""))?" rec":"")+'"><span class="y">'+h[0]+'</span><span class="p">'+flag(h[2])+'<b>'+esc(h[1])+'</b>'+(h[5]?'<em>'+esc(h[5])+'</em>':'')+'</span><span><i class="pos">'+esc(h[4])+'</i></span><span class="c">'+esc(h[3])+'</span></div>':'<div class="hrow none"><span class="y">'+h[0]+'</span><span>Not awarded</span><span></span><span></span></div>').join("")+'</div>';
    $("awardDetail").innerHTML='<div class="adetail">'+heroCard+'<div><h3 style="font-size:32px">'+a.name+'</h3><p style="color:var(--mute);margin:4px 0 0">'+a.about+' Awarded by '+a.by+'.</p><p class="sub">Most wins (all-time)</p>'+board+'<p class="sub">Winners by position, '+H[0][0]+' to now</p>'+posChart+'<p class="anote">'+a.note+'</p></div></div><p class="sub" style="margin-top:22px">Every winner, '+H[0][0]+' to now (record holder highlighted)</p>'+hist;
  }
  show("bdo");
};

/* ---------- Glossary ---------- */
(function(){
  const gs=$("glSearch");
  function render(){
    const q=gs.value.trim().toLowerCase(),eq=esc(q);
    const hl=s=>{const e=esc(s);if(!q)return e;const i=e.toLowerCase().indexOf(eq);return i<0?e:e.slice(0,i)+"<mark>"+e.slice(i,i+eq.length)+"</mark>"+e.slice(i+eq.length)};
    const L=GLOSSARY.filter(g=>!q||(g[0]+" "+g[1]).toLowerCase().includes(q));
    $("glCount").textContent=q?L.length+" match"+(L.length===1?"":"es"):GLOSSARY.length+" words";
    $("glossList").innerHTML=L.length?L.map(g=>'<div class="term"><b>'+hl(g[0])+'</b><p>'+hl(g[1])+'</p></div>').join(""):'<p class="empty">No words found.</p>';
  }
  gs.addEventListener("input",render);render();
})();

/* ---------- Quiz ---------- */
(function(){
  let sc=0,done=0;const qb=$("qlist");
  function build(){
    sc=0;done=0;qb.innerHTML="";$("qbar").style.width="0";$("result").className="result";
    QUIZ.forEach((q,i)=>{
      const d=document.createElement("div");d.className="q";
      d.innerHTML='<span class="cat">'+q[0]+'</span><p class="qt">'+(i+1)+". "+esc(q[1])+"</p>";
      const f=document.createElement("p");f.className="fb";f.setAttribute("aria-live","polite");
      q[2].forEach((o,j)=>{const b=document.createElement("button");b.className="opt";b.textContent=o;
        b.onclick=()=>{if(d.dataset.done)return;d.dataset.done=1;done++;const ok=j===q[3];if(ok)sc++;
          b.classList.add(ok?"right":"wrong");if(!ok)d.querySelectorAll(".opt")[q[3]].classList.add("right");
          f.textContent=(ok?"Correct. ":"Not quite. ")+q[4];$("qbar").style.width=(done/QUIZ.length*100)+"%";if(done===QUIZ.length)finish()};
        d.appendChild(b)});
      d.appendChild(f);qb.appendChild(d);
    });
  }
  function finish(){
    const r=$("result"),n=QUIZ.length;
    const msg=sc>=n-1?"World-class. You could commentate the next match.":sc>=n/2?"Solid performance. You're ready to watch with friends.":"Good start. Visit the Rules and Formations pages, then try again.";
    r.innerHTML='<div class="verdict">Your score: '+sc+' / '+n+'</div><p>'+msg+'</p><button id="retry">Try again</button>';
    r.className="result show";$("retry").onclick=()=>{build();scrollTo({top:0})};
  }
  build();
})();

route();

