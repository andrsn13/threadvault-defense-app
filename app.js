(function(){'use strict';
var D=window.TV_DATA,S=D.slides,N=S.length,ISS=window.TV_ISSUES||[];
var state={view:'slide',cur:0},$=function(i){return document.getElementById(i)};
function h(t,a){var e=document.createElement(t);a=a||{};for(var k in a){if(a[k]==null)continue;if(k==='class')e.className=a[k];else if(k.slice(0,2)==='on')e.addEventListener(k.slice(2),a[k]);else e.setAttribute(k,a[k])}
 for(var i=2;i<arguments.length;i++){var c=arguments[i];if(c==null||c===false)continue;if(Array.isArray(c))c.forEach(function(x){c2(e,x)});else c2(e,c)}return e}
function c2(e,c){if(Array.isArray(c)){c.forEach(function(x){if(x!=null&&x!==false)c2(e,x)});return}e.appendChild(typeof c==='object'?c:document.createTextNode(String(c)))}
function card(cls){var a=[].slice.call(arguments,1);return h.apply(null,['div',{class:'card '+cls}].concat(a))}
function ul(a){return h('ul',{},a.map(function(x){return h('li',{},x)}))}
// term registry: first establishment of each concept, in slide/beat order
var terms={},order=[];S.forEach(function(s,si){s.teachingBeats.forEach(function(b,bi){b.establish.forEach(function(t){if(!terms[t.id]){terms[t.id]={id:t.id,term:t.term,def:t.definition,slide:s.number,beat:bi+1};order.push(t.id)}})})});
var stageOf={};D.learningPath.forEach(function(p){p.slides.forEach(function(n){stageOf[n]=p})});
var VIEWS=[['slide','Slides'],['bench','Benchmark'],['qa','Q&A'],['corr','Deck fixes'],['ref','Reference'],['issues','Issues']];
var KEYS={b:'bench',q:'qa',c:'corr',r:'ref',i:'issues',p:'slide'};
function go(view,cur){if(cur!=null)state.cur=Math.max(0,Math.min(N-1,cur));state.view=view;
 var hs=view==='slide'?'#/slide/'+(state.cur+1):'#/'+view;if(location.hash!==hs){try{history.replaceState(null,'',hs)}catch(x){}}render(true)}
function fromHash(){var m=/^#\/slide\/(\d+)$/.exec(location.hash);if(m){state.view='slide';state.cur=Math.max(0,Math.min(N-1,+m[1]-1))}else{var v=location.hash.replace('#/','');if(VIEWS.some(function(x){return x[0]===v}))state.view=v}}
function dl(items){return h('dl',{class:'defs'},items.map(function(t){return [h('dt',{},t.term||t.id),h('dd',{},t.definition||t.def)]}))}
function evidenceItem(e){var d=/benchmark|test-run/.test(e.type);return h('li',{},h('span',{class:'tag'},e.type),d?h('span',{class:'tag',title:'Recorded result from the stated run; not a guarantee.'},'dated example'):null,e.claim,h('br'),h('small',{class:'muted'},h('code',{},e.reference)))}
function slideView(){var s=S[state.cur],st=stageOf[s.number],m=h('div',{});
 var pct=Math.round((s.number/N)*100);
 m.appendChild(card('',h('span',{class:'tag',title:st.reason},st.stage),h('span',{class:'tag'},s.number+' / '+N),h('h2',{id:'stitle'},s.title),
  h('div',{class:'prog',role:'progressbar','aria-valuemin':1,'aria-valuemax':N,'aria-valuenow':s.number,'aria-label':'Slide progress'},h('i',{style:'width:'+pct+'%'})),
  h('p',{class:'muted'},s.roleInArgument),ctl(true)));
  if(s.prerequisites.length)m.appendChild(card('',h('h3',{},'Builds on'),h('div',{class:'chips'},s.prerequisites.map(function(id){var t=terms[id];return h('details',{},h('summary',{},t?t.term:id),t?h('p',{},t.def,h('br'),h('small',{class:'muted'},'Established on slide '+t.slide)):h('p',{},'No definition found in JSON.'))}))));
 s.teachingBeats.forEach(function(b,i){var tot=s.teachingBeats.length,bi=i+1;
  var flag=ISS.filter(function(x){return x.beat===bi&&x.slides.indexOf(s.number)>-1});
  m.appendChild(h('section',{'aria-label':'Beat '+bi},
   b.establish.length?card('defs',h('h3',{},'New terms · beat '+bi),dl(b.establish)):null,
   card('say',h('span',{class:'tag'},'Say '+bi+'/'+tot),flag.length?h('span',{class:'tag'},'Stage direction — don’t read aloud'):null,h('p',{},b.say))))});
 m.appendChild(card('warn',h('h3',{},'Don’t claim'),ul(s.accuracyCaveats)));
m.appendChild(card('note',h('h3',{},'Show'),h('p',{},s.visualFocus),h('h3',{},'Evidence'),s.evidence.length?h('ul',{},s.evidence.map(evidenceItem)):h('p',{class:'muted'},'None supplied.')));
var cs=D.deckCorrections.filter(function(c){return c.slide===s.number});
 if(cs.length)m.appendChild(card('note',h('h3',{},'Deck still needs fixing — don’t speak as fixed'),cs.map(function(c){return h('p',{},h('b',{},'Issue: '),c.issue,h('br'),h('b',{},'Action: '),c.action)})));
 var is=ISS.filter(function(x){return x.slides.indexOf(s.number)>-1});
 if(is.length)m.appendChild(h('details',{class:'card'},h('summary',{},'Script flags ('+is.length+')'),ul(is.map(function(x){return x.kind+': '+x.text}))));
 var nx=S[state.cur+1];
 m.appendChild(card('bridge',h('h3',{},'Why the next slide follows'),h('p',{},s.bridgeToNext.reasoning),
  h('div',{class:'card say'},h('span',{class:'tag'},'Say'),h('p',{},s.bridgeToNext.spokenTransition)),h('p',{class:'muted'},nx?'Next: '+nx.number+'. '+nx.title:'Final slide.')));
 m.appendChild(ctl(false));return m}
function ctl(top){var p=state.cur>0,n=state.cur<N-1;
 return h('div',{class:'ctl'},h('button',{class:'btn',disabled:p?null:'',onclick:function(){go('slide',state.cur-1)}},'← Previous'),
  h('button',{class:'btn',onclick:openDefs},'Terms (D)'),
  h('button',{class:'btn pri',disabled:n?null:'',onclick:function(){go('slide',state.cur+1)}},'Next →'))}
function openDefs(){var d=$('defs'),q=$('dq');q.value='';fillDefs();d.showModal()}
function fillDefs(){var f=$('dq').value.toLowerCase(),cur=S[state.cur].number,o=$('deflist');o.textContent='';
 order.map(function(i){return terms[i]}).filter(function(t){return t.slide<=cur&&(t.term+' '+t.def).toLowerCase().indexOf(f)>-1}).forEach(function(t){o.appendChild(h('div',{class:'card defs'},h('b',{},t.term),h('p',{},t.def),h('small',{class:'muted'},'Slide '+t.slide+', beat '+t.beat)))})}
function benchView(){var B=D.optionalBenchmarkDemonstration,P=B.protocol,m=h('div',{});
 m.appendChild(card('warn',h('span',{class:'tag'},'Optional · outside the 25 slides'),h('h2',{},'Benchmark'),h('p',{},h('b',{},'When: '),B.position),h('p',{},B.status),h('p',{},B.purpose),
  h('p',{},h('b',{},'Dated examples from the '+P.environment.date+' run. Not guaranteed results.'))));
 m.appendChild(card('',h('h3',{},'Protocol'),h('p',{},h('b',{},'Command: '),h('code',{},P.command)),h('p',{},h('b',{},'Method: '),P.method),h('p',{},h('b',{},'Measures: '),P.measures),h('p',{},h('b',{},'Does not measure:')),ul(P.doesNotMeasure),
  h('p',{},h('b',{},'Environment: '),'Date '+P.environment.date+' · Python '+P.environment.python+' · '+P.environment.os+' · '+P.environment.cpu)));
 m.appendChild(card('say',h('span',{class:'tag'},'Say · opening'),h('p',{},B.openingScript)));
 [['n32','n=32 · median ms'],['n5000','n=5000 unless the workload states another n · median ms']].forEach(function(g){
  m.appendChild(card('',h('h3',{},g[1]),h('div',{class:'wrap'},h('table',{},h('thead',{},h('tr',{},['Comparison','Workload','Median ms'].map(function(x){return h('th',{},x)}))),
   h('tbody',{},B.measurementsMs[g[0]].map(function(r){var names=r.comparison.split(' vs '),med=Array.isArray(r.medians)?r.medians.map(function(v,i){return (names[i]||'#'+(i+1))+': '+v}):Object.keys(r.medians).map(function(k){return k+': '+r.medians[k]});
    return h('tr',{},h('td',{},r.comparison),h('td',{},r.workload),h('td',{},ul(med)))}))))))});
 m.appendChild(card('note',h('h3',{},'Interpretation'),ul(B.interpretation)));
 m.appendChild(card('',h('h3',{},'Comparator rationale'),h('div',{class:'wrap'},h('table',{},h('thead',{},h('tr',{},['Task','Comparison','Why comparable','Limitation'].map(function(x){return h('th',{},x)}))),
  h('tbody',{},B.comparatorRationale.map(function(r){return h('tr',{},[r.task,r.comparison,r.whyComparable,r.limitation].map(function(x){return h('td',{},x)}))}))))));
 m.appendChild(card('say',h('span',{class:'tag'},'Say · results'),B.script.map(function(x){return h('p',{},x)})));
 m.appendChild(card('warn',h('h3',{},'Guardrails'),ul(B.guardrails)));return m}
function qaView(){var m=h('div',{}),q=h('input',{type:'search',placeholder:'Search questions and answers','aria-label':'Search questions and answers'}),list=h('div',{}),cnt=h('p',{class:'muted',role:'status'});
 function f(){var v=q.value.toLowerCase(),n=0;list.textContent='';D.likelyQuestions.forEach(function(x){if((x.question+' '+x.answer).toLowerCase().indexOf(v)<0)return;n++;list.appendChild(h('details',{class:'card qa',open:v?'':null},h('summary',{},x.question),h('p',{},x.answer)))});cnt.textContent=n+' of '+D.likelyQuestions.length+' shown'}
 q.addEventListener('input',f);m.appendChild(card('',h('h2',{},'Likely questions'),q,cnt));m.appendChild(list);f();return m}
function corrView(){return h('div',{},card('note',h('h2',{},'Deck corrections'),h('p',{},'Fixes needed in '+D.authority.currentDeck+'. Not claims to speak as done.')),
 D.deckCorrections.map(function(c){return card('',h('span',{class:'tag'},'Slide '+c.slide),h('p',{},h('b',{},'Issue: '),c.issue),h('p',{},h('b',{},'Action: '),c.action),h('button',{class:'btn',onclick:function(){go('slide',c.slide-1)}},'Go to slide '+c.slide))}))}
function refView(){var F=D.projectFrame,A=D.authority,Nb=D.notebookDistinction,m=h('div',{});
 m.appendChild(card('warn',h('h2',{},'Notebook distinction'),h('p',{},Nb.claim),h('p',{},h('b',{},'Reference: '),h('code',{},Nb.reference)),h('p',{},h('b',{},'Instruction: '),Nb.instruction)));
 m.appendChild(card('',h('h2',{},'Project frame'),h('p',{},F.description),h('h3',{},'Included'),ul(F.scope.included),h('h3',{},'Excluded'),ul(F.scope.excluded),h('h3',{},'Required live implementations'),ul(F.requiredLiveImplementations.map(function(r){return r.name+' — '+r.workflow})),h('p',{},h('b',{},'Non-negotiable distinction: '),F.nonNegotiableDistinction)));
 m.appendChild(card('',h('h2',{},'Audience & teaching principle'),h('p',{},D.audience.assumedKnowledge),h('p',{},D.audience.teachingPrinciple),h('h3',{},'Authority'),h('p',{},A.intendedRole),h('p',{},A.sourceOfTruth),h('h3',{},'Content policy'),ul(A.contentPolicy),h('h3',{},'Granularity invariant'),h('p',{},A.granularityInvariant.rule),ul(A.granularityInvariant.checkBeforeRendering)));
 m.appendChild(card('',h('h2',{},'Learning path'),ul(D.learningPath.map(function(p){return p.stage+' (slides '+p.slides.join(', ')+'): '+p.reason}))));
 m.appendChild(card('',h('h2',{},'Source references'),h('div',{class:'wrap'},h('table',{},h('thead',{},h('tr',{},h('th',{},'Path'),h('th',{},'Role'))),h('tbody',{},D.sourceReferences.map(function(r){return h('tr',{},h('td',{},h('code',{},r.path)),h('td',{},r.role))}))))));return m}
function checks(){var r=[],seen={},ok=true,est={};
 function add(p,t){r.push([p,t]);if(!p)ok=false}
 add(N===25,'Slide count is '+N+' (expected 25)');add(S.every(function(s,i){return s.number===i+1}),'Slide numbers run 1–'+N+' in order');
 var ids=S.map(function(s){return s.id});add(new Set(ids).size===N,'Slide ids are unique');
 var bad=[];S.forEach(function(s){s.prerequisites.forEach(function(p){if(!est[p])bad.push('slide '+s.number+' needs "'+p+'"')});s.teachingBeats.forEach(function(b){b.establish.forEach(function(t){est[t.id]=1})})});
 add(!bad.length,bad.length?'Prerequisites not established earlier: '+bad.join('; '):'Every listed prerequisite is established on an earlier slide');
 add(S.every(function(s){return s.teachingBeats.length&&s.bridgeToNext&&s.bridgeToNext.reasoning&&s.bridgeToNext.spokenTransition}),'Every slide has beats, a reasoning bridge and a spoken transition');
 var all=[];D.learningPath.forEach(function(p){all=all.concat(p.slides)});add(all.length===N&&all.every(function(n,i){return n===i+1}),'Learning-path stages cover slides 1–'+N+' in order');
 add(order.length>0,order.length+' concepts are defined on first use');return r}
function issuesView(){var m=h('div',{}),c=checks();
 m.appendChild(card('',h('h2',{},'Integrity checks'),ul(c.map(function(x){return (x[0]?'PASS — ':'FAIL — ')+x[1]}))));
 m.appendChild(card('warn',h('h2',{},'Flags on the script'),h('p',{},'The script is shown unchanged. These flags are mine, not part of it.'),
  h('p',{},h('b',{},'Unverified: '),'no repository access, so nothing was checked against code, tests or measurements.')));
 ['granularity','structure','inconsistency','scope'].forEach(function(k){var a=ISS.filter(function(x){return x.kind===k});if(a.length)m.appendChild(card('',h('h3',{},k[0].toUpperCase()+k.slice(1)),h('ul',{},a.map(function(x){return h('li',{},(x.slides.length?'Slide'+(x.slides.length>1?'s ':' ')+x.slides.join(', ')+': ':'')+x.text)}))))});return m}
function nav(){var n=$('nav');n.textContent='';VIEWS.forEach(function(v){var b=h('button',{onclick:function(){go(v[0])}},v[1]);if(state.view===v[0])b.setAttribute('aria-current','page');n.appendChild(b)})}
function side(){var o=$('slides');o.textContent='';var last='';S.forEach(function(s,i){var st=stageOf[s.number].stage;if(st!==last){o.appendChild(h('li',{class:'st'},st.replace(/-/g,' ')));last=st}
 var b=h('button',{onclick:function(){go('slide',i)}},s.number+'. '+s.title);if(state.view==='slide'&&i===state.cur)b.setAttribute('aria-current','true');o.appendChild(h('li',{},b))})}
function render(focus){var m=$('main');m.textContent='';var v={slide:slideView,bench:benchView,qa:qaView,corr:corrView,ref:refView,issues:issuesView}[state.view];m.appendChild(v());
 nav();side();$('back').hidden=state.view==='slide';$('backn').textContent=state.cur+1;
 document.title=(state.view==='slide'?'Slide '+(state.cur+1)+': '+S[state.cur].title:VIEWS.filter(function(x){return x[0]===state.view})[0][1])+' — ThreadVault Defense';
 if(focus){window.scrollTo(0,0);m.focus()}}
$('back').addEventListener('click',function(){go('slide')});$('dq').addEventListener('input',fillDefs);
document.addEventListener('keydown',function(e){if(e.ctrlKey||e.metaKey||e.altKey)return;var t=e.target.tagName;if(t==='INPUT'||t==='TEXTAREA'||document.querySelector('dialog[open]'))return;var k=e.key,s=state.view==='slide';
 if(k==='ArrowRight'||k==='PageDown'){if(s&&state.cur<N-1){go('slide',state.cur+1);e.preventDefault()}}
 else if(k==='ArrowLeft'||k==='PageUp'){if(s&&state.cur>0){go('slide',state.cur-1);e.preventDefault()}}
 else if(k==='Home'&&s){go('slide',0);e.preventDefault()}else if(k==='End'&&s){go('slide',N-1);e.preventDefault()}
 else if(k==='Escape'){if(!s)go('slide')}else if(k==='?')$('help').showModal();
 else if(k.toLowerCase()==='d'&&s)openDefs();else if(KEYS[k.toLowerCase()])go(KEYS[k.toLowerCase()])});
window.addEventListener('hashchange',function(){fromHash();render(true)});
fromHash();render(false);window.TV_APP={state:state,go:go,terms:terms,checks:checks};})();
