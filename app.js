/* Football 101 – app */
const $=id=>document.getElementById(id);
const NS="http://www.w3.org/2000/svg";
function el(t,a,p){const e=document.createElementNS(NS,t);for(const k in a)e.setAttribute(k,a[k]);if(p)p.appendChild(e);return e}
function esc(s){return String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]))}
function press(box,btn){[...box.querySelectorAll("button")].forEach(b=>b.setAttribute("aria-pressed",b===btn))}
function flag(code,cls){const iso=ISO[code]||code;if(!iso)return"";return '<img class="flag'+(cls?" "+cls:"")+'" src="https://flagcdn.com/w80/'+iso+'.png" alt="" loading="lazy" onerror="this.style.visibility=\'hidden\'">'}

/* ---------- Illustrations (original, generic designs) ---------- */
let _gid=0;
function shade(hex,amt){const n=parseInt(hex.slice(1),16);let r=n>>16,g=(n>>8)&255,b=n&255;const t=amt<0?0:255,p=Math.abs(amt);r=Math.round((t-r)*p+r);g=Math.round((t-g)*p+g);b=Math.round((t-b)*p+b);return"#"+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1)}
function trophy(kind,col,stripes){
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
const PAGES=["home","first","formations","rules","clubs","nations","standings","competitions","awards","glossary","quiz"];
const TITLES={home:"Football 101: Read the Game",first:"Your first match",formations:"Formations",rules:"Rules",clubs:"Clubs",nations:"National teams",standings:"League tables",competitions:"Competitions",awards:"Player awards",glossary:"Fan glossary",quiz:"Quiz"};
const inits={};
function route(){
  let id=(location.hash||"#home").slice(1);if(!PAGES.includes(id))id="home";
  document.querySelectorAll(".page").forEach(p=>p.classList.toggle("on",p.id==="pg-"+id));
  document.querySelectorAll("nav a.nl").forEach(a=>{const on=a.getAttribute("href")==="#"+id;a.classList.toggle("act",on);if(on){a.setAttribute("aria-current","page");a.scrollIntoView({block:"nearest",inline:"center"})}else a.removeAttribute("aria-current")});
  document.title=id==="home"?TITLES.home:TITLES[id]+" · Football 101";
  if(inits[id]&&!inits[id].done){inits[id].done=true;inits[id]()}
  scrollTo({top:0});
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
   ["standings","League tables","Live 2026-27 tables, updated weekly",ic('<svg width="30" height="30" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2" fill="none" stroke="#7ee2a0" stroke-width="2"/><path d="M3 9h18M3 14h18M9 4v16" stroke="#7ee2a0" stroke-width="2"/></svg>')],
   ["competitions","Competitions","Records and latest teams in 15 competitions",ic(trophy("cup","#f5c542").replace('class="trophy"','width="34" height="34"'))],
   ["awards","Player awards","Ballon d'Or, Golden Shoe, Kopa and more",ic(trophy("star","#f5c542").replace('class="trophy"','width="34" height="34"'))],
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
    $("clubLeagues").innerHTML='<button aria-pressed="'+(st.l==="all")+'" data-l="all">All leagues</button>'+ls.map(l=>{const c=CLUBS.find(x=>x[2]===l);return '<button aria-pressed="'+(st.l===l)+'" data-l="'+esc(l)+'">'+flag(c[3])+' '+esc(l)+'</button>'}).join("");
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
      $("clubCount").textContent=all.length+" of "+big.length+" clubs in the "+st.l+" "+LEAGUE_SEASON+". Clubs marked ★ have a fact card: select them to open it.";
      $("clubGrid").innerHTML="";
      $("leagueAll").innerHTML='<div class="lgrid">'+all.map(c=>{const f=featured(c[0]);const head=jersey(c[2],c[3],46,c[4],c[0],JVAR[c[0]])+'<div><b>'+esc(c[0])+(f?' <span class="star">★</span>':'')+'</b><small>'+esc(c[1])+(c[5]?' <span class="promo">Promoted</span>':'')+'</small></div>';
        return f?'<details class="lclub fx"><summary>'+head+'</summary><div class="fxbody"><dl><dt>Nickname</dt><dd>'+esc(f[7])+'</dd><dt>Founded</dt><dd>'+f[5]+'</dd><dt>Home</dt><dd>'+esc(f[6])+'</dd></dl><p>'+esc(f[9])+'</p></div></details>':'<div class="lclub">'+head+'</div>'}).join("")+'</div>';
      return;
    }
    $("clubCount").textContent="Showing "+L.length+" of "+CLUBS.length+" featured clubs";
    $("clubGrid").innerHTML=L.length?L.map(c=>'<article class="team"><span class="lg">'+esc(c[2])+'</span><div class="head">'+jersey(c[8][0],c[8][1],60,PATTERN[c[0]],c[0])+'<div><h3>'+esc(c[0])+'</h3><div class="meta">'+flag(c[3])+esc(c[4])+', '+esc(c[3])+'</div></div></div><dl><dt>Nickname</dt><dd>'+esc(c[7])+'</dd><dt>Founded</dt><dd>'+c[5]+'</dd><dt>Home</dt><dd>'+esc(c[6])+'</dd></dl><p class="know">'+esc(c[9])+'</p></article>').join(""):'<p class="empty">No clubs match. Try another search or continent.</p>';
    $("leagueAll").innerHTML=(st.r==="all"||st.r==="europe")?'<p class="anote">Tip: pick the Premier League, La Liga, Serie A, Bundesliga, Ligue 1, Primeira Liga or Eredivisie above to see every club in it this season.</p>':'';
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


/* ---------- Standings ---------- */
inits.standings=function(){
  const S=window.STANDINGS;if(!S){$("stMeta").textContent="League tables could not be loaded.";return}
  const tabs=$("stTabs"),names=Object.keys(S.leagues);
  const kit=n=>{for(const l in LEAGUE_CLUBS){const c=LEAGUE_CLUBS[l].find(x=>x[0]===n);if(c)return jersey(c[2],c[3],26,c[4],c[0],JVAR[c[0]])}return""};
  function show(l){
    const L=S.leagues[l],n=L.rows.length;
    tabs.querySelectorAll("button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.l===l));
    $("stMeta").textContent="Correct as of "+L.asOf+" · source: "+L.source+" · page data updated "+S.updated;
    $("stTable").innerHTML='<thead><tr><th>#</th><th>Club</th><th>P</th><th>W</th><th>D</th><th>L</th><th>GD</th><th>Pts</th></tr></thead><tbody>'+L.rows.map((r,i)=>{const z=i<L.top?"top":i>=n-L.rel?"rel":"";const gd=r[5]>0?"+"+r[5]:r[5];return '<tr class="'+z+'"><td>'+(i+1)+'</td><td><span class="nm">'+kit(r[0])+esc(r[0])+'</span></td><td>'+r[1]+'</td><td>'+r[2]+'</td><td>'+r[3]+'</td><td>'+r[4]+'</td><td>'+gd+'</td><td><b>'+r[6]+'</b></td></tr>'}).join("")+'</tbody>';
  }
  tabs.innerHTML=names.map(l=>{const c=COMPS.find(x=>x.name===l);return '<button data-l="'+esc(l)+'">'+(c&&c.flag?flag(c.flag)+" ":"")+esc(l)+'</button>'}).join("");
  tabs.addEventListener("click",e=>{const b=e.target.closest("button");if(b)show(b.dataset.l)});
  show(names[0]);
};

/* ---------- Competitions ---------- */
inits.competitions=function(){
  const G=[["International tournaments",["wc","euro","copa","asian","afcon","wwc"]],["Club competitions",["ucl","cwc"]],["Domestic leagues",["pl","liga","seriea","bundes","ligue1","portugal","ered"]]];
  $("compList").innerHTML=G.map(([g,ids])=>'<p class="cgroup">'+g+'</p><div class="cgrid">'+ids.map(id=>{const c=COMPS.find(x=>x.id===id);return '<button class="comp" data-c="'+id+'" style="--cc:'+c.col+'">'+trophy(c.icon,c.col,c.stripes)+'<b>'+(c.flag?flag(c.flag)+" ":"")+c.name+'</b><small>Since '+c.since+'</small><div class="hold"><span>Holder: </span>'+esc(c.holder.length>40?c.holder.split(":")[0]:c.holder)+'</div></button>'}).join("")+'</div>').join("");
  $("compList").addEventListener("click",e=>{const b=e.target.closest(".comp");if(b)openComp(b.dataset.c)});
};
function teamIcon(name,kind){
  if(kind==="nations")return flag(name);
  const c=CLUBS.find(x=>x[0]===name||x[0].replace("FC ","")===name||x[0]==="FC "+name);
  return c?jersey(c[8][0],c[8][1],22,PATTERN[c[0]],c[0]):(ISO[name]?flag(name):"");
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
function editionHtml(e,kind){
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
  return '<div class="roadbox" data-id="'+id+'" data-kind="'+kind+'">'+chips+'<div class="roadin">'+editionHtml(eds[0],kind)+'</div></div>';
}
document.addEventListener("click",e=>{
  const b=e.target.closest(".years button");if(!b)return;
  const box=b.closest(".roadbox"),ed=ROADS[box.dataset.id][+b.dataset.y];
  box.querySelectorAll(".years button").forEach(x=>x.setAttribute("aria-pressed",x===b));
  box.querySelector(".roadin").innerHTML=editionHtml(ed,box.dataset.kind);
});
function openComp(id){
  const c=COMPS.find(x=>x.id===id),d=$("dlg"),max=c.titles[0][1];
  let latest="";
  if(c.groups)latest='<div class="groups">'+Object.entries(c.groups).map(([g,ts])=>'<div class="grp"><b>Group '+g+'</b>'+ts.map(t=>'<div>'+flag(t)+esc(t)+'</div>').join("")+'</div>').join("")+'</div>';
  else if(c.kind==="nations")latest='<div class="chips">'+c.list.map(t=>'<span class="chipx">'+flag(t)+esc(t)+'</span>').join("")+'</div>';
  else if(c.kind==="clubs")latest='<div class="chips">'+c.list.map(t=>'<span class="chipx">'+flag(t[1])+esc(t[0])+'</span>').join("")+'</div>';
  else latest='<div class="chips">'+c.list.map(t=>{const j=teamIcon(t,"clubs");return '<span class="chipx'+(j?"":" noflag")+'">'+j+esc(t)+'</span>'}).join("")+'</div>';
  let rank=0,prev=null;
  const board='<div class="board" style="--cc:'+c.col+'">'+c.titles.map((t,i)=>{if(t[1]!==prev){rank=i+1;prev=t[1]}return '<div class="brow"><span class="rk'+(rank===1?" g":"")+'">'+rank+'</span><span class="nm">'+teamIcon(t[0],c.kind==="nations"?"nations":"clubs")+esc(t[0])+'</span><span class="bar" style="width:'+(t[1]/max*100)+'%"></span><span class="n">'+t[1]+'</span></div>'}).join("")+'</div>';
  let finals="";
  if(id==="wc")finals='<p class="sub">Every World Cup final (winner in green)</p><div class="road">'+WC.slice().reverse().map(w=>matchRow(w[0],w[2],w[4],w[3],0,w[5]+" · Host: "+w[1],"nations")).join("")+'</div>';
  d.style.setProperty("--cc",c.col);
  d.innerHTML='<div class="dlg-head">'+trophy(c.icon,c.col,c.stripes).replace('class="trophy"','width="64" height="64"')+'<div><p class="kicker" style="margin:0">Since '+c.since+'</p><h2 id="dlgTitle">'+c.name+'</h2></div><button class="x" aria-label="Close">✕</button></div><div class="dlg-body"><p style="color:var(--mute);margin:6px 0 0">'+c.about+'</p><div class="facts"><div><small>Holder</small><b>'+esc(c.holder)+'</b></div><div><small>Next</small><b>'+esc(c.next)+'</b></div></div>'+roadHtml(id,c.kind==="nations"?"nations":"clubs")+'<p class="sub">'+(c.titlesLabel||"Most titles")+'</p>'+board+finals+'</div>';
  d.querySelector(".x").onclick=()=>d.close();
  d.showModal();d.scrollTop=0;
}
$("dlg").addEventListener("click",e=>{if(e.target.id==="dlg")e.target.close()});

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
      top.map(t=>{const yrs=H.filter(h=>!h[5]&&h[1].replace(/ \(.*\)/,"")===t[0]).map(h=>h[0]);return avatar(t[0],a.col)+'<h3>'+esc(t[0])+'</h3><div class="flagrow">'+flag(t[1])+'<span class="pos">'+esc(posOf(t[0]))+'</span></div>'+(yrs.length?'<div class="yrs">'+yrs.map(y=>'<span>'+y+'</span>').join("")+'</div>':'')}).join("")+
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
