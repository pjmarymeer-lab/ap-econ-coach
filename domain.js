export const dateKey=(d=new Date())=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
export function mastery(attempts){if(!attempts.length)return 0;const accuracy=attempts.filter(a=>a.correct).length/attempts.length*100;const recent=attempts.slice(-5);const recentAccuracy=recent.filter(a=>a.correct).length/recent.length*100;const days=new Set(attempts.filter(a=>a.correct).map(a=>a.day)).size;const timed=attempts.filter(a=>Number.isFinite(a.seconds)&&a.seconds>=0);const speed=timed.length?timed.reduce((s,a)=>{const ratio=a.seconds/(a.target||75);return s+(ratio<=1?100:ratio<=2?100-(ratio-1)*50:30);},0)/timed.length:null;const weights=speed===null?.9:1;return Math.round((accuracy*.5+recentAccuracy*.2+Math.min(days/4,1)*100*.2+(speed??0)*.1)/weights);}
export const masteryLabel=score=>score>=80?'Mastered':score>=60?'Familiar':score>=40?'Learning':'New';
export function recordAttempt(state,attempt){if(state.attempts.some(a=>a.id===attempt.id))return state;return {...state,attempts:[...state.attempts,attempt]};}
export const entityAttempts=(s,type,id)=>s.attempts.filter(a=>a.type===type&&a.entityId===id);
export const entityMastery=(s,type,id)=>mastery(entityAttempts(s,type,id));
export function readiness(state){const weights={vocabulary:.2,concept:.25,graph:.3,question:.25};const scores={};for(const type of Object.keys(weights)){const ids=[...new Set(state.attempts.filter(a=>a.type===type).map(a=>a.entityId))];scores[type]=ids.length?Math.round(ids.reduce((s,id)=>s+entityMastery(state,type,id),0)/ids.length):0;}return {scores,total:Math.round(Object.entries(weights).reduce((s,[k,w])=>s+scores[k]*w,0)),sample:state.attempts.length};}
export function streak(attempts,today=dateKey()){const days=new Set(attempts.map(a=>a.day));let d=new Date(today+'T12:00:00');if(!days.has(today))d.setDate(d.getDate()-1);let count=0;while(days.has(dateKey(d))){count++;d.setDate(d.getDate()-1);}return count;}
const hash=s=>[...s].reduce((n,c)=>(n*31+c.charCodeAt(0))>>>0,7);
export function makePlan(state,pools,day=dateKey()){
 if(state.plans[day])return state.plans[day];
 const schedule=['weak','recent','review','weak','recent','maintain','weak','review','recent','weak'];let slot=0;const plan=[];const recentTopic=state.attempts.at(-1)?.topic||'1.1';
 for(const [type,count] of [['vocabulary',5],['concept',1],['graph',3],['question',5]]){
  const selected=new Set();for(let i=0;i<count;i++){
   const mode=schedule[slot++%schedule.length];const pool=pools[type].filter(e=>!selected.has(e.id));
   const studied=pool.filter(e=>entityAttempts(state,type,e.id).length);let candidates=[];
   if(mode==='weak')candidates=studied.filter(e=>entityMastery(state,type,e.id)<60).sort((a,b)=>entityMastery(state,type,a.id)-entityMastery(state,type,b.id));
   if(mode==='recent')candidates=pool.filter(e=>e.topic===recentTopic);
   if(mode==='review')candidates=studied.filter(e=>{const last=entityAttempts(state,type,e.id).at(-1);return day>last.day&&new Date(day+'T12:00:00')-new Date(last.day+'T12:00:00')>=(entityMastery(state,type,e.id)>=80?4:1)*86400000;});
   if(mode==='maintain'&&state.attempts.length)candidates=[...pool].sort((a,b)=>hash(day+a.id)-hash(day+b.id));
   const e=candidates[0]||pool[0];if(!e)continue;selected.add(e.id);plan.push({id:`${day}-${type}-${e.id}`,type,entityId:e.id,topic:e.topic,mode});
  }
 }return plan;
}
export const planDone=(state,item)=>state.attempts.some(a=>a.dailyId===item.id);
export function similarQuestion(questions,q){return questions.find(x=>x.id!==q.id&&x.topic===q.topic&&x.skill===q.skill)||questions.find(x=>x.id!==q.id&&x.topic===q.topic)||null;}
