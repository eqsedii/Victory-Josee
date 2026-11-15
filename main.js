(function(){
var $=function(s,r){return (r||document).querySelector(s)},$$=function(s,r){return [].slice.call((r||document).querySelectorAll(s))};
var WA='254798830636';
// MODE TECHS KENYA contact number, international format without + (e.g. 2547XXXXXXXX)
var DEV='';

// loader (first visit per session)
var ld=$('#loader');
if(ld){var t0=Date.now();window.addEventListener('load',function(){setTimeout(function(){ld.classList.add('gone');try{sessionStorage.setItem('seen','1')}catch(e){}},Math.max(0,1400-(Date.now()-t0)))})}

// mobile menu
var b=$('.burger'),n=$('nav');
if(b)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});

// reveal on scroll
var io='IntersectionObserver' in window?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.15}):null;
$$('.rv').forEach(function(el,i){el.style.transitionDelay=(i%4)*90+'ms';io?io.observe(el):el.classList.add('in')});

// typing words
var ty=$('.type');
if(ty){var w=['TVs','speakers','amplifiers','decoders','CCTV cameras','kettles'],wi=0,ci=0,del=false;
(function tick(){var s=w[wi];ty.textContent=s.slice(0,ci);
if(!del&&ci<s.length){ci++;setTimeout(tick,90)}
else if(!del){del=true;setTimeout(tick,1300)}
else if(ci>0){ci--;setTimeout(tick,45)}
else{del=false;wi=(wi+1)%w.length;setTimeout(tick,250)}})()}

// repair tracker loop
var st=$$('.steps li');
if(st.length){var k=0;(function go(){st.forEach(function(l,i){l.className=i<k?'done':i===k?'now':''});k=(k+1)%(st.length+1);setTimeout(go,1500)})()}

// tilt on cards (fine pointers only)
if(window.matchMedia&&matchMedia('(hover:hover)').matches){$$('.card').forEach(function(c){
c.addEventListener('mousemove',function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform='translateY(-6px) perspective(700px) rotateY('+x*6+'deg) rotateX('+-y*6+'deg)'});
c.addEventListener('mouseleave',function(){c.style.transform=''})})}

// gallery lightbox
var lb=$('#lb');
if(lb){$$('.mason figure').forEach(function(f){f.addEventListener('click',function(){lb.firstElementChild.src=$('img',f).src;lb.classList.add('on')})});
lb.addEventListener('click',function(){lb.classList.remove('on')});
document.addEventListener('keydown',function(e){if(e.key==='Escape')lb.classList.remove('on')})}

// quote form -> WhatsApp
var f=$('#quote');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var d=new FormData(f);
var m='Hello Victory Electronics, I need help.%0AName: '+enc(d.get('name'))+'%0ADevice: '+enc(d.get('device'))+'%0AProblem: '+enc(d.get('issue'))+'%0AService: '+enc(d.get('type'));
window.open('https://wa.me/'+WA+'?text='+m,'_blank','noopener')});
function enc(v){return encodeURIComponent(v||'-')}
var dl=$('#devlink'),dm=$('#devm');
if(dl&&dm){dl.addEventListener('click',function(){if(!DEV)return;$('#devcall').href='tel:+'+DEV;$('#devwa').href='https://wa.me/'+DEV+'?text='+encodeURIComponent('Hello MODE TECHS KENYA, I saw your work on the Victory Electronics website.');dm.classList.add('on')});
dm.addEventListener('click',function(e){if(e.target===dm||e.target.id==='devx')dm.classList.remove('on')});
document.addEventListener('keydown',function(e){if(e.key==='Escape')dm.classList.remove('on')})}
var y=$('#yr');if(y)y.textContent=new Date().getFullYear();
})();
