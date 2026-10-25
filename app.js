(function(){'use strict';
var D=window.TV_DATA,S=D.slides,N=S.length,ISS=window.TV_ISSUES||[];
var state={view:'slide',cur:0},$=function(i){return document.getElementById(i)};
function h(t,a){var e=document.createElement(t);a=a||{};for(var k in a){if(k==='class')e.className=a[k];else if(k.slice(0,2)==='on')e.addEventListener(k.slice(2),a[k]);else e.setAttribute(k,a[k])}
 for(var i=2;i<arguments.length;i++){var c=arguments[i];if(c==null||c===false)continue;if(Array.isArray(c))c.forEach(function(x){c2(e,x)});else c2(e,c)}return e}
function c2(e,c){if(Array.isArray(c)){c.forEach(function(x){if(x!=null&&x!==false)c2(e,x)});return}e.appendChild(typeof c==='object'?c:document.createTextNode(String(c)))}
function card(cls){var a=[].slice.call(arguments,1);return h.apply(null,['div',{class:'card '+cls}].concat(a))}
function ul(a){return h('ul',{},a.map(function(x){return h('li',{},x)}))}
// term registry: first establishment of each concept, in slide/beat order
var terms={},order=[];S.forEach(function(s,si){s.teachingBeats.forEach(function(b,bi){b.establish.forEach(function(t){if(!terms[t.id]){terms[t.id]={id:t.id,term:t.term,def:t.definition,slide:s.number,beat:bi+1};order.push(t.id)}})})});
var stageOf={};D.learningPath.forEach(function(p){p.slides.forEach(function(n){stageOf[n]=p})});
var VIEWS=[['slide','Presentation'],['bench','Benchmark (optional)'],['qa','Likely questions'],['corr','Deck corrections'],['ref','Reference & notebook'],['issues','JSON issues']];
var KEYS={b:'bench',q:'qa',c:'corr',r:'ref',i:'issues',p:'slide'};
function go(view,cur){if(cur!=null)state.cur=Math.max(0,Math.min(N-1,cur));state.view=view;
 var hs=view==='slide'?'#/slide/'+(state.cur+1):'#/'+view;if(location.hash!==hs){try{history.replaceState(null,'',hs)}catch(x){}}render(true)}
function fromHash(){var m=/^#\/slide\/(\d+)$/.exec(location.hash);if(m){state.view='slide';state.cur=Math.max(0,Math.min(N-1,+m[1]-1))}else{var v=location.hash.replace('#/','');if(VIEWS.some(function(x){return x[0]===v}))state.view=v}}
function dl(items){return h('dl',{class:'defs'},items.map(function(t){return [h('dt',{},t.term||t.id),h('dd',{},t.definition||t.def)]}))}
function evidenceItem(e){var dated=/benchmark|test-run/.test(e.type);return h('li',{},h('span',{class:'tag'},e.type),e.claim,h('br'),h('small',{class:'muted'},'Reference: ',h('code',{},e.reference)),dated?h('br'):null,dated?h('small',{},'Dated example: a recorded result from the stated run, not a guaranteed or general result.'):null)}
function slideView(){var s=S[state.cur],st=stageOf[s.number],m=h('div',{});
 var pct=Math.round((s.number/N)*100);
 m.appendChild(card('',h('span',{class:'tag'},st.stage),h('span',{class:'tag'},'Slide '+s.number+' of '+N),h('h2',{id:'stitle'},s.title),
  h('div',{class:'prog',role:'progressbar','aria-valuemin':1,'aria-valuemax':N,'aria-valuenow':s.number,'aria-label':'Slide progress'},h('i',{style:'width:'+pct+'%'})),
  h('p',{},h('b',{},'Role in the argument: '),s.roleInArgument),h('p',{class:'muted'},h('b',{},'Why this stage: '),st.reason),ctl(true)));
 m.appendChild(h('details',{class:'card warn'},h('summary',{},'Project guardrail (always applies)'),h('p',{},D.projectFrame.nonNegotiableDistinction)));
 m.appendChild(card('',h('h3',{},'Prerequisites — already established'),s.prerequisites.length?h('div',{class:'chips'},s.prerequisites.map(function(id){var t=terms[id];return h('details',{},h('summary',{},t?t.term:id),t?h('p',{},t.def,h('br'),h('small',{class:'muted'},'Established on slide '+t.slide)):h('p',{},'No definition found in JSON.'))})):h('span',{class:'muted'},'None: this slide starts the path.')));
 s.teachingBeats.forEach(function(b,i){var tot=s.teachingBeats.length,bi=i+1;
  var flag=ISS.filter(function(x){return x.beat===bi&&x.slides.indexOf(s.number)>-1});
  m.appendChild(h('section',{'aria-label':'Beat '+bi},
   b.establish.length?card('defs',h('h3',{},'Newly established in beat '+bi+' (read before speaking)'),dl(b.establish)):h('p',{class:'muted'},'Beat '+bi+': no new terms.'),
   card('say',h('span',{class:'tag'},'Spoken · beat '+bi+' of '+tot),flag.length?h('span',{class:'tag'},'Stage direction in JSON'):null,h('p',{},b.say))))});
 m.appendChild(card('note',h('h3',{},'Presenter only — not spoken'),h('p',{},h('b',{},'Visual focus: '),s.visualFocus),
  h('h3',{},'Evidence & implementation references'),s.evidence.length?h('ul',{},s.evidence.map(evidenceItem)):h('p',{class:'muted'},'No evidence items supplied for this slide.')));
 m.appendChild(card('warn',h('h3',{},'Accuracy caveats'),ul(s.accuracyCaveats)));
 var cs=D.deckCorrections.filter(function(c){return c.slide===s.number});
 if(cs.length)m.appendChild(card('note',h('h3',{},'Deck correction for this slide (the supplied PDF deck still has this problem — do not speak as already fixed)'),cs.map(function(c){return h('p',{},h('b',{},'Issue: '),c.issue,h('br'),h('b',{},'Action: '),c.action)})));
 var is=ISS.filter(function(x){return x.slides.indexOf(s.number)>-1});
 if(is.length)m.appendChild(card('',h('h3',{},'Flagged in the JSON (app review, not canonical content)'),ul(is.map(function(x){return x.kind+': '+x.text}))));
 var nx=S[state.cur+1];
 m.appendChild(card('bridge',h('h3',{},'Transition — why the next slide follows'),h('p',{},h('b',{},'Reasoning: '),s.bridgeToNext.reasoning),
  h('div',{class:'card say'},h('span',{class:'tag'},'Spoken transition'),h('p',{},s.bridgeToNext.spokenTransition)),h('p',{class:'muted'},nx?'Next: slide '+nx.number+' — '+nx.title:'This is the final slide.')));
 m.appendChild(ctl(false));return m}
function ctl(top){var p=state.cur>0,n=state.cur<N-1;
 var prev=h('button',{class:'btn',onclick:function(){go('slide',state.cur-1)}},'← Previous');
 var definitions=h('button',{class:'btn',onclick:openDefs},'Definitions so far (D)');
 var next=h('button',{class:'btn pri',onclick:function(){go('slide',state.cur+1)}},'Next →');
 prev.disabled=!p;next.disabled=!n;
 return h('div',{class:'ctl'},prev,definitions,next)}
function openDefs(){var d=$('defs'),q=$('dq');q.value='';fillDefs();d.showModal()}
function fillDefs(){var f=$('dq').value.toLowerCase(),cur=S[state.cur].number,o=$('deflist');o.textContent='';
 order.map(function(i){return terms[i]}).filter(function(t){return t.slide<=cur&&(t.term+' '+t.def).toLowerCase().indexOf(f)>-1}).forEach(function(t){o.appendChild(h('div',{class:'card defs'},h('b',{},t.term),h('p',{},t.def),h('small',{class:'muted'},'Slide '+t.slide+', beat '+t.beat)))})}
function benchView(){var B=D.optionalBenchmarkDemonstration,P=B.protocol,m=h('div',{});
 m.appendChild(card('warn',h('span',{class:'tag'},'Optional'),h('h2',{},'Benchmark demonstration'),h('p',{},h('b',{},'Position: '),B.position),h('p',{},h('b',{},'Status: '),B.status),h('p',{},h('b',{},'Purpose: '),B.purpose),
  h('p',{},h('b',{},'All timings below are dated examples from the run on '+P.environment.date+'. They are not guaranteed or general results, and they are not part of the 25-slide path.'))));
 m.appendChild(card('',h('h3',{},'Protocol'),h('p',{},h('b',{},'Command: '),h('code',{},P.command)),h('p',{},h('b',{},'Method: '),P.method),h('p',{},h('b',{},'Measures: '),P.measures),h('p',{},h('b',{},'Does not measure:')),ul(P.doesNotMeasure),
  h('p',{},h('b',{},'Environment: '),'Date '+P.environment.date+' · Python '+P.environment.python+' · '+P.environment.os+' · '+P.environment.cpu)));
 m.appendChild(card('say',h('span',{class:'tag'},'Spoken · opening'),h('p',{},B.openingScript)));
 [['n32','Measurements at n=32 (median ms)'],['n5000','Measurements at n=5000 unless the workload states another size (median ms)']].forEach(function(g){
  m.appendChild(card('',h('h3',{},g[1]),h('div',{class:'wrap'},h('table',{},h('thead',{},h('tr',{},['Comparison','Workload','Median elapsed (ms)'].map(function(x){return h('th',{},x)}))),
   h('tbody',{},B.measurementsMs[g[0]].map(function(r){var names=r.comparison.split(' vs '),med=Array.isArray(r.medians)?r.medians.map(function(v,i){return (names[i]||'#'+(i+1))+': '+v}):Object.keys(r.medians).map(function(k){return k+': '+r.medians[k]});
    return h('tr',{},h('td',{},r.comparison),h('td',{},r.workload),h('td',{},ul(med)))}))))))});
 m.appendChild(card('note',h('h3',{},'Interpretation'),ul(B.interpretation)));
 m.appendChild(card('',h('h3',{},'Comparator rationale'),h('div',{class:'wrap'},h('table',{},h('thead',{},h('tr',{},['Task','Comparison','Why comparable','Limitation'].map(function(x){return h('th',{},x)}))),
  h('tbody',{},B.comparatorRationale.map(function(r){return h('tr',{},[r.task,r.comparison,r.whyComparable,r.limitation].map(function(x){return h('td',{},x)}))}))))));
 m.appendChild(card('say',h('span',{class:'tag'},'Spoken · results'),B.script.map(function(x){return h('p',{},x)})));
 m.appendChild(card('warn',h('h3',{},'Guardrails'),ul(B.guardrails)));return m}
function qaView(){var m=h('div',{}),q=h('input',{type:'search',placeholder:'Search questions and answers','aria-label':'Search questions and answers'}),list=h('div',{}),cnt=h('p',{class:'muted',role:'status'});
 function f(){var v=q.value.toLowerCase(),n=0;list.textContent='';D.likelyQuestions.forEach(function(x){if((x.question+' '+x.answer).toLowerCase().indexOf(v)<0)return;n++;list.appendChild(h('details',{class:'card qa',open:v?'':null},h('summary',{},x.question),h('p',{},x.answer)))});cnt.textContent=n+' of '+D.likelyQuestions.length+' shown'}
 q.addEventListener('input',f);m.appendChild(card('',h('h2',{},'Likely questions'),q,cnt));m.appendChild(list);f();return m}
function corrView(){return h('div',{},card('note',h('h2',{},'Deck corrections'),h('p',{},'Corrections the supplied deck ('+D.authority.currentDeck+') needs. These are not claims to speak as already fixed.')),
 D.deckCorrections.map(function(c){return card('',h('span',{class:'tag'},'Slide '+c.slide),h('p',{},h('b',{},'Issue: '),c.issue),h('p',{},h('b',{},'Action: '),c.action),h('button',{class:'btn',onclick:function(){go('slide',c.slide-1)}},'Open slide '+c.slide))}))}
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
 m.appendChild(card('',h('h2',{},'Content integrity checks (run in your browser now)'),ul(c.map(function(x){return (x[0]?'PASS — ':'FAIL — ')+x[1]}))));
 m.appendChild(card('warn',h('h2',{},'Issues found in the supplied JSON'),h('p',{},'The JSON content is rendered unchanged. These are the app builder’s flags (granularity gaps, structural questions, inconsistencies), listed separately. They are not part of the canonical script.'),
  h('p',{},h('b',{},'Not verified: '),'the project repository was not available, so no code, tests or measurements were checked.')));
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
