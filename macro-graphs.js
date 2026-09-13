// Normalized schematic coordinates, not empirical estimates.
export const models={
 'ma-market':{title:'Competitive product market',x:'Quantity',y:'Price',d:'D',s:'S'},
 'ma-adas':{title:'AD–AS at potential output',x:'Real GDP',y:'Price level',d:'AD',s:'SRAS',vertical:'LRAS'},
 'ma-recession':{title:'AD–AS recessionary gap',x:'Real GDP',y:'Price level',d:'AD',s:'SRAS',vertical:'LRAS',dOffset:-20},
 'ma-money':{title:'Money market: limited-reserves model',x:'Quantity of money',y:'Nominal interest rate',d:'MD',vertical:'MS'},
 'ma-loans':{title:'Loanable funds market',x:'Quantity of loanable funds',y:'Real interest rate',d:'DLF',s:'SLF'},
 'ma-forex':{title:'Foreign exchange market for dollars',x:'Quantity of dollars',y:'Euros per dollar',d:'D$',s:'S$'},
 'ma-phillips':{title:'Phillips curves',x:'Unemployment rate',y:'Inflation rate',d:'SRPC',vertical:'LRPC'},
 'ma-reserves':{title:'Reserve market with ample reserves',x:'Quantity of reserves',y:'Overnight interest rate',d:'Reserve demand',vertical:'Reserve supply',ample:true},
 'ma-ppc':{title:'Production possibilities frontier',x:'Consumer goods',y:'Capital goods',ppc:true},
 'ma-cycle':{title:'Business cycle and potential output',x:'Time',y:'Real GDP',cycle:true}
};
const tasks=[];
const topicMap={'ma-market':'1.6','ma-adas':'3.5','ma-recession':'3.5','ma-money':'4.5','ma-loans':'4.7','ma-forex':'6.3','ma-phillips':'5.2','ma-reserves':'4.6','ma-ppc':'1.2','ma-cycle':'2.7'};
function task(id,topic,model,level,prompt,fields,expected,explanation,zh){tasks.push({id:'ma-g-'+id,topic,unit:Number(topic[0]),model,level,prompt,fields,expected,explanation,zh,target:90});}
for(const [model,m] of Object.entries(models)){
 task(model+'-axes',topicMap[model],model,1,`Choose the axes for the ${m.title.toLowerCase()}.`,{x:[m.x,'Price level','Money income'].filter((x,i,a)=>a.indexOf(x)===i),y:[m.y,'Quantity of goods','Time'].filter((x,i,a)=>a.indexOf(x)===i)},{x:m.x,y:m.y},`The horizontal axis is ${m.x}; the vertical axis is ${m.y}.`,'先辨认模型，再确定横纵轴。');
}
const identify=[
 ['adas','3.1','ma-adas','Which curve slopes downward?', 'AD',['SRAS','LRAS'],'AD falls with the price level through wealth, interest-rate and exchange-rate effects.','AD通过财富、利率和汇率效应向下倾斜。'],
 ['lras','3.4','ma-adas','Which curve marks potential output?', 'LRAS',['AD','SRAS'],'LRAS is vertical at sustainable full-employment output.','LRAS位于充分就业产出。'],
 ['recession','3.5','ma-recession','The displayed equilibrium is left of LRAS. Identify the gap.','Recessionary gap',['Inflationary gap','No gap'],'Actual output is below potential output.','实际产出低于潜在产出。'],
 ['money','4.5','ma-money','Which curve is vertical in the basic money-market model?','MS',['MD','AD'],'Money supply is fixed with respect to the nominal interest rate in this model.','该模型中货币供给与名义利率无关。'],
 ['loans','4.7','ma-loans','Which curve represents savers?','SLF',['DLF','AD'],'Savers supply funds; borrowers demand them.','储蓄者提供资金。'],
 ['fx','6.3','ma-forex','Foreign purchases of US goods create which demand?','D$',['S$','Money supply'],'Foreign buyers obtain dollars to buy dollar-priced products.','境外买家需要美元支付。'],
 ['phillips','5.2','ma-phillips','Which curve is vertical at the natural unemployment rate?','LRPC',['SRPC','AD'],'Long-run unemployment returns to its natural rate; no permanent inflation trade-off exists.','长期失业回归自然失业率。'],
 ['reserves','4.6','ma-reserves','In ample reserves, supply meets which section of reserve demand?','Flat section',['Steep section','An AD curve'],'Beyond reserve scarcity, additional reserves have little effect on the overnight rate at fixed administered rates.','充裕区内继续增加准备金对利率影响很小。'],
 ['ppc','1.2','ma-ppc','Point A lies inside the frontier. It represents:','Underused resources',['Currently unattainable output','Productive efficiency'],'Inside the frontier, existing resources could produce more.','曲线内表示资源未充分利用。'],
 ['cycle','2.7','ma-cycle','The actual-output curve below potential indicates:','Negative output gap',['Positive output gap','Zero natural unemployment'],'Actual output below potential means a negative gap.','实际产出低于潜在产出构成负缺口。']
];
for(const [id,topic,model,prompt,answer,wrong,en,zh] of identify)task(id,topic,model,2,prompt,{curve:[answer,...wrong]},{curve:answer},en,zh);
const shifts=[
 ['demand','1.4','ma-market','Income rises for this normal good.','D','Right','Increase','Increase','Demand shifts right, raising equilibrium price and quantity.','正常品收入增加使需求右移。'],
 ['supply','1.5','ma-market','Input costs decrease.','S','Right','Decrease','Increase','Supply shifts right, reducing price and increasing quantity.','成本下降使供给右移。'],
 ['ad','3.6','ma-adas','Consumer confidence rises. Analyze the short run.','AD','Right','Increase','Increase','AD rises; output and the price level rise with SRAS unchanged.','短期总需求增加使产出与物价上升。'],
 ['sras','3.3','ma-adas','Energy costs rise. Analyze the short run.','SRAS','Left','Increase','Decrease','An adverse supply shock raises prices and lowers output.','不利供给冲击使物价上升、产出下降。'],
 ['fiscal','3.8','ma-adas','Government purchases fall. Analyze the short run.','AD','Left','Decrease','Decrease','Lower purchases shift AD left.','政府购买减少使AD左移。'],
 ['self','3.7','ma-recession','Wages fall during this recessionary gap.','SRAS','Right','Decrease','Increase','Lower costs move SRAS right until output returns to potential.','工资下降推动SRAS右移并恢复潜在产出。'],
 ['ms','4.6','ma-money','In the limited-reserves model, money supply increases. Treat price as the nominal rate.','MS','Right','Decrease','Increase','With MD unchanged, greater MS lowers the nominal rate.','有限准备金模型中MS增加使名义利率下降。'],
 ['saving','4.7','ma-loans','Households save more. Treat price as the real rate.','SLF','Right','Decrease','Increase','More saving supplies more funds, lowering the real rate.','储蓄增加使资金供给右移。'],
 ['crowding','5.5','ma-loans','Government borrowing rises; use the borrower-demand convention.','DLF','Right','Increase','Increase','Total funds borrowed rise, while the higher real rate crowds out private investment.','总借款增加，但较高实际利率挤出私人投资。'],
 ['export','6.4','ma-forex','Foreign demand for US exports increases.','D$','Right','Increase','Increase','Dollar demand rises, increasing euros per dollar: dollar appreciation.','美元需求增加导致美元升值。'],
 ['imports','6.4','ma-forex','US residents buy more imports from Europe.','S$','Right','Decrease','Increase','Dollar supply rises, reducing euros per dollar: dollar depreciation.','美元供给增加导致美元贬值。'],
 ['growth','5.6','ma-adas','Productive capacity increases. For this task, shift LRAS only and compare potential output.','LRAS','Right','Not determined','Increase','LRAS shifts right. Its shift alone does not determine the new short-run price level.','LRAS右移提高潜在产出；仅凭此不能确定短期物价。']
];
for(const [id,topic,model,prompt,curve,direction,price,quantity,en,zh] of shifts)task(id,topic,model,3,prompt,{curve:[...new Set([curve,models[model].d,models[model].s,models[model].vertical].filter(Boolean))],direction:['Left','Right'],price:['Increase','Decrease','Not determined'],quantity:['Increase','Decrease']},{curve,direction,price,quantity},en,zh);
for(const [id,topic,model,curves,label] of [['build-ad','3.5','ma-adas','AD + SRAS + LRAS','Full-employment equilibrium'],['build-money','4.5','ma-money','MD + MS','Nominal interest-rate equilibrium'],['build-loans','4.7','ma-loans','DLF + SLF','Real interest-rate equilibrium'],['build-fx','6.3','ma-forex','D$ + S$','Exchange-rate equilibrium']]){
 const m=models[model];task(id,topic,model,4,`Build and label the ${m.title.toLowerCase()}.`,{x:[m.x,'Time'],y:[m.y,'Quantity of goods'],curves:[curves,'No curves'],label:[label,'Zero unemployment']},{x:m.x,y:m.y,curves,label},`Use ${curves}; label ${label.toLowerCase()}.`,'按所选模型放置曲线、坐标与均衡标签。');
}
export const graphTasks=tasks;
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function graphSVG(model,config={}){
 const m=models[model];if(!m)return '';
 const X=q=>55+q*2.8,Y=p=>270-p*2;
 const text=(q,p,s,c='#204b51')=>`<text x="${X(q)}" y="${Y(p)}" fill="${c}" font-size="11">${esc(s)}</text>`;
 const curve=(fn,label,color,dashed=false)=>{const pts=Array.from({length:91},(_,q)=>`${q?'L':'M'}${X(q)},${Y(fn(q))}`).join(' ');return `<path d="${pts}" fill="none" stroke="${color}" stroke-width="2.4" ${dashed?'stroke-dasharray="5 4"':''} clip-path="url(#ma-clip)"/>`+text(76,Math.min(102,fn(76)+5),label,color);};
 const vertical=(q,label,color='#8b7162',dashed=false)=>`<path d="M${X(q)},${Y(0)} V${Y(100)}" stroke="${color}" stroke-width="2" ${dashed?'stroke-dasharray="5 4"':''}/>`+text(q+2,98,label,color);
 let body='';const visible=config.curves!=='none'&&config.curves!=='No curves';
 if(visible){
 if(m.ppc){body=curve(q=>90-0.01*q*q,'PPC','#417e6c')+`<circle cx="${X(35)}" cy="${Y(30)}" r="4" fill="#234"/>`+text(37,32,'A');}
 else if(m.cycle){body=curve(q=>35+q*.35,'Potential','#80968d',true)+curve(q=>35+q*.35+18*Math.sin(q/10),'Actual','#547a9e');}
 else {
 const d=q=>m.ample?Math.max(30,100-2*q):100+(m.dOffset||0)-q;
 const s=q=>q;
 body=curve(d,m.d,'#547a9e');if(m.s)body+=curve(s,m.s,'#417e6c');if(m.vertical)body+=vertical(m.ample?75:50,m.vertical);
 let q=m.ample?75:m.s?(100+(m.dOffset||0))/2:50,p=d(q);
 body+=`<circle cx="${X(q)}" cy="${Y(p)}" r="3.5" fill="#234"/>`+text(q+2,p+5,'E₀');
 if(config.direction&&config.curve){const delta=config.direction==='Right'?20:-20,c=config.curve;
 if(c===m.d){body+=curve(z=>d(z)+delta,m.d+'₁','#b68833',true);q=m.s?(100+(m.dOffset||0)+delta)/2:m.ample?75:50;p=d(q)+delta;}
 else if(c===m.s){body+=curve(z=>s(z)-delta,m.s+'₁','#b68833',true);q=(100+(m.dOffset||0)+delta)/2;p=d(q);}
 else if(c===m.vertical){body+=vertical((m.ample?75:50)+delta,m.vertical+'₁','#b68833',true);if(c==='LRAS')q=null;else {q=(m.ample?75:50)+delta;p=d(q);}}
 else q=null;
 if(q!==null)body+=`<circle cx="${X(q)}" cy="${Y(p)}" r="3.5" fill="#b68833"/>`+text(q+2,p-7,'E₁','#b68833');
 }
 }
 }
 const show=config.show!==false;
 return `<svg viewBox="0 0 400 330" role="img" aria-label="${esc(m.title)}"><title>${esc(m.title)}</title><desc>Solid curves show the starting model. Amber dashed curves show selected shifts. Axes use schematic scales.</desc><defs><clipPath id="ma-clip"><rect x="55" y="50" width="280" height="220"/></clipPath></defs><path d="M55 45V270H350" fill="none" stroke="#a1b3af" stroke-width="1.5"/>${body}<text x="16" y="27" font-size="12" fill="#234">${esc(config.y||(show?m.y:''))}</text><text x="200" y="308" text-anchor="middle" font-size="12" fill="#234">${esc(config.x||(show?m.x:''))}</text></svg>`;
}
