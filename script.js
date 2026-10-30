(function(){
var N="918667815844";
var M={
 general:"Hello TMMS Learnings and Study Point, I would like to enquire about tuition admissions. Please share the available classes, subjects, timings, and fees.",
 admission:"Hello TMMS Learnings and Study Point, I am interested in tuition admissions. Please share the available classes, subjects, timings, fees, and admission process.",
 directions:"Hello TMMS Learnings and Study Point, could you please share the Google Maps location and directions to your tuition centre?",
 fab:"Hello TMMS Learnings and Study Point, I would like to know more about tuition admissions."
};
function wa(msg){return "https://wa.me/"+N+"?text="+encodeURIComponent(msg)}
var I={
 book:'<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 21V5M9 7h6"/>',
 calc:'<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16h.01"/>',
 flask:'<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3"/><path d="M7.500 15h9"/>',
 lang:'<path d="M4 5h9M8.500 3v2M6 5c0 4 3 7 6 8M11 5c0 3-2 6-6 8M13 21l4-10 4 10M14.500 18h5"/>',
 globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
 pen:'<path d="M4 20l4-1 11-11-3-3L5 16zM14 6l3 3"/>',
 grad:'<path d="M2 9l10-5 10 5-10 5zM6 11v5c3 2.500 9 2.500 12 0v-5"/>',
 bulb:'<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10c1 1 1 2 1 3h6c0-1 0-2 1-3a6 6 0 0 0-4-10z"/>',
 repeat:'<path d="M17 2l4 4-4 4M3 11V9a3 3 0 0 1 3-3h15M7 22l-4-4 4-4M21 13v2a3 3 0 0 1-3 3H3"/>',
 user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.500-6 8-6s8 2 8 6"/>',
 chart:'<path d="M3 3v18h18M7 15l4-4 3 3 5-6"/>',
 heart:'<path d="M12 21s-8-5-8-11a4.500 4.500 0 0 1 8-2.500A4.500 4.500 0 0 1 20 10c0 6-8 11-8 11z"/>'
};
function svg(k){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+I[k]+'</svg>'}
function btn(msg,label,aria){return '<a class="btn btn-wa btn-sm" href="'+wa(msg)+'" target="_blank" rel="noopener" aria-label="'+aria+'"><svg aria-hidden="true"><use href="#wa"/></svg>'+label+'</a>'}

var cls=[["6th","Strengthen the basics as school learning becomes more structured."],["7th","Build understanding across subjects and steady study routines."],["8th","Support concept clarity as syllabus depth increases."],["9th","Prepare a solid academic base for the senior school years."],["10th","Focused learning support for an important school year."],["11th","Help students settle into higher secondary studies."],["12th","Guidance and support for the final school year."]];
var g=document.getElementById("classGrid");
cls.forEach(function(c){
 var m="Hello TMMS Learnings and Study Point, I would like to enquire about tuition availability for "+c[0]+" Standard. Please share the subjects, timings, and fees.";
 g.insertAdjacentHTML("beforeend",'<article class="card rv"><div class="ico">'+svg("book")+'</div><h3>'+c[0]+' Standard</h3><p>'+c[1]+'</p></article>');
});

var sub=[["Mathematics","calc","Understand concepts, methods and problem-solving step by step."],["Science","flask","Explore ideas in physics, chemistry and biology with clarity."],["English","lang","Develop reading, writing and grammar confidence."],["Social Science","globe","Make history, geography, civics and economics easier to follow."],["Tamil","pen","Strengthen language skills, reading and written expression."]];
var s=document.getElementById("subjGrid");
sub.forEach(function(c){
 var m="Hello TMMS Learnings and Study Point, I would like to enquire about "+c[0]+" tuition. Please share the standards, timings, and fees.";
 s.insertAdjacentHTML("beforeend",'<article class="card rv"><div class="ico">'+svg(c[1])+'</div><h3>'+c[0]+'</h3><p>'+c[2]+'</p></article>');
});

var ft=[["grad","Experienced &amp; Dedicated Faculty","A dedicated team supporting students through the school year."],["bulb","Concept Clarity &amp; Regular Practice","Understand concepts clearly and build steady study habits."],["user","Small Batches for Individual Attention","Smaller batches help students get the attention they need."],["chart","Continuous Assessment &amp; Performance Tracking","Regular assessment to understand how each student is progressing."],["heart","Safe &amp; Supportive Learning Environment","A focused, welcoming place for students to learn."]];
var f=document.getElementById("featGrid");
ft.forEach(function(c){f.insertAdjacentHTML("beforeend",'<article class="card rv"><div class="ico">'+svg(c[0])+'</div><h3>'+c[1]+'</h3><p style="margin:0">'+c[2]+'</p></article>')});

var C="Please contact us through WhatsApp for the latest information.";
var fq=[["Which classes are available?","We offer tuition for school students from 6th to 12th Standard. Please message us on WhatsApp to confirm current availability."],["Which subjects are taught?","Mathematics, Science, English, Social Science and Tamil. Please confirm subject availability for your child’s standard on WhatsApp."],["Do you offer exam preparation?","Yes. We support students with preparation for school and board exams through concept clarity, regular practice and revision."],["Is there a tuition centre in Neelangarai for 10th and 12th Standard?","TMMS Learnings and Study Point is a tuition centre in Neelangarai, Chennai for school students from 6th to 12th Standard, including 10th and 12th exam preparation."],["Which school boards are supported?","We support students from all boards. Please message us your child’s board and standard to confirm."],["What are the class timings?",C],["What are the tuition fees?",C],["How can I enquire about admissions?","Tap any “Enquire on WhatsApp” button on this page. WhatsApp will open with a message ready for you to review and send. You can also message us at +91 86678 15844."],["Where is TMMS Learnings and Study Point located?","6th Cross Street, Bharathiyar Nagar, Neelangarai, Chennai – 600115."]];
var q=document.getElementById("faqList");
fq.forEach(function(x,i){
 var wab="";
 q.insertAdjacentHTML("beforeend",'<details><summary>'+x[0]+'</summary><div class="ans"><p>'+x[1]+'</p>'+wab+'</div></details>');
});


document.querySelectorAll("[data-wa]").forEach(function(a){a.href=wa(M[a.dataset.wa]||M.general)});
document.getElementById("yr").textContent=new Date().getFullYear();
(function(){
var rm2=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(rm2)return;
var SY=["π","∑","√","∞","x²","+","÷","A+","%","Δ","∠","="];
document.querySelectorAll(".hero,#results,#exams,#faq").forEach(function(sec){var d=document.createElement("div");d.className="sym";d.setAttribute("aria-hidden","true");var n=sec.classList.contains("hero")?16:9,h="";for(var i=0;i<n;i++){h+='<span style="left:'+(Math.random()*94).toFixed(1)+'%;top:'+(Math.random()*88).toFixed(1)+'%;font-size:'+(1.3+Math.random()*2.2).toFixed(2)+'rem;--t:'+(7+Math.random()*8).toFixed(1)+'s;--dl:-'+(Math.random()*10).toFixed(1)+'s">'+SY[Math.floor(Math.random()*SY.length)]+'</span>'}d.innerHTML=h;sec.insertBefore(d,sec.firstChild)});
var cv=document.getElementById("bg"),cx=cv.getContext("2d"),W,H,P=[],dpr=Math.min(window.devicePixelRatio||1,2),run=true;
function rs(){W=window.innerWidth;H=window.innerHeight;cv.width=W*dpr;cv.height=H*dpr;cx.setTransform(dpr,0,0,dpr,0,0);var c=Math.min(55,Math.round(W/20));P=[];for(var i=0;i<c;i++)P.push({x:Math.random()*W,y:Math.random()*H,r:.8+Math.random()*1.8,vx:(Math.random()-.5)*.25,vy:-.1-Math.random()*.3,p:Math.random()*6.28})}
rs();window.addEventListener("resize",rs);
document.addEventListener("visibilitychange",function(){run=!document.hidden;if(run)fr()});
function fr(){if(!run)return;cx.clearRect(0,0,W,H);for(var i=0;i<P.length;i++){var a=P[i];a.x+=a.vx;a.y+=a.vy;a.p+=.03;if(a.y<-5){a.y=H+5;a.x=Math.random()*W}if(a.x<-5)a.x=W+5;if(a.x>W+5)a.x=-5;cx.globalAlpha=.25+.35*Math.abs(Math.sin(a.p));cx.fillStyle="#F5B91B";cx.beginPath();cx.arc(a.x,a.y,a.r,0,6.283);cx.fill();for(var j=i+1;j<P.length;j++){var b=P[j],dx=a.x-b.x,dy=a.y-b.y,dd=dx*dx+dy*dy;if(dd<12100){cx.globalAlpha=.12*(1-dd/12100);cx.strokeStyle="#F5B91B";cx.lineWidth=.6;cx.beginPath();cx.moveTo(a.x,a.y);cx.lineTo(b.x,b.y);cx.stroke()}}}requestAnimationFrame(fr)}
fr();
})();

var b=document.getElementById("burger"),n=document.getElementById("nav");
function setMenu(o){n.classList.toggle("open",o);b.setAttribute("aria-expanded",o);b.setAttribute("aria-label",o?"Close menu":"Open menu")}
b.addEventListener("click",function(){setMenu(!n.classList.contains("open"))});
n.addEventListener("click",function(e){if(e.target.tagName==="A")setMenu(false)});
document.addEventListener("keydown",function(e){if(e.key==="Escape")setMenu(false)});
document.addEventListener("click",function(e){if(n.classList.contains("open")&&!n.contains(e.target)&&!b.contains(e.target))setMenu(false)});
window.addEventListener("scroll",function(){if(n.classList.contains("open"))setMenu(false)},{passive:true});

var els=document.querySelectorAll(".rv");
if("IntersectionObserver" in window){var o=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");o.unobserve(e.target)}})},{threshold:.12});els.forEach(function(e){o.observe(e)})}else{els.forEach(function(e){e.classList.add("in")})}

document.querySelectorAll(".cards").forEach(function(c){Array.prototype.forEach.call(c.children,function(k,i){k.style.transitionDelay=(i*70)+"ms";setTimeout(function(){k.style.transitionDelay=""},2600)})});
var rm=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function cnt(el){var t=+el.dataset.count;if(rm){el.textContent=t;return}var s=null;function st(ts){if(!s)s=ts;var k=Math.min((ts-s)/1400,1);el.textContent=Math.round(t*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(st)}requestAnimationFrame(st)}
var co=("IntersectionObserver" in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){cnt(e.target);co.unobserve(e.target)}})},{threshold:.5}):null;
document.querySelectorAll("[data-count]").forEach(function(e){co?co.observe(e):(e.textContent=e.dataset.count)});
var pg=document.getElementById("prog"),hd=document.querySelector("header");
function sc(){var d=document.documentElement,m=d.scrollHeight-d.clientHeight;pg.style.width=(m>0?window.scrollY/m*100:0)+"%";hd.classList.toggle("sc2",window.scrollY>10)}
window.addEventListener("scroll",sc,{passive:true});sc();
var dl=document.getElementById("dlg");
document.getElementById("proofBtn").addEventListener("click",function(){if(dl.showModal)dl.showModal()});
document.getElementById("dx").addEventListener("click",function(){dl.close()});
dl.addEventListener("click",function(e){if(e.target===dl)dl.close()});

/* Add real feedback/names when available: {s:"10th",m:476,t:500,n:"Student name",f:"Feedback text"} */
var RES=[{s:"10th",m:476,t:500},{s:"12th",m:535,t:600},{s:"10th",m:465,t:500},{s:"12th",m:519,t:600},{s:"10th",m:445,t:500},{s:"12th",m:497,t:600},{s:"10th",m:379,t:500},{s:"12th",m:489,t:600}];
var QI='<svg class="q" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 7H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5V9a2 2 0 0 0-2-2zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5V9a2 2 0 0 0-2-2z"/></svg>';
function tcard(r,d){return '<article class="card tc'+(d?' dup" aria-hidden="true':'')+'">'+QI+'<div class="score">'+r.m+'<small>/'+r.t+'</small></div><div class="bar2"><i style="--w:'+(r.m*100/r.t).toFixed(1)+'%"></i></div><p class="std">'+r.s.toUpperCase()+' STANDARD</p>'+(r.f?'<p class="fb">“'+r.f+'”</p>':'')+(r.n?'<span class="nm">'+r.n+'</span>':'')+'</article>'}
var tk=document.getElementById("track");tk.innerHTML=RES.map(function(r){return tcard(r,0)}).join("")+RES.map(function(r){return tcard(r,1)}).join("");
})();
(function(){var L=document.querySelectorAll(".nav a[href^='#']"),m={};L.forEach(function(a){var id=a.getAttribute("href").slice(1);if(id!=="home")m[id]=a});
if(!("IntersectionObserver" in window))return;
var o=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){L.forEach(function(a){a.classList.remove("active")});var a=m[e.target.id];if(a)a.classList.add("active")}})},{rootMargin:"-45% 0px -50% 0px"});
Object.keys(m).forEach(function(id){var s=document.getElementById(id);if(s)o.observe(s)})})();
