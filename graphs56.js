// Shared formulas keep diagrams and numerical checks aligned.
export const factorModel={supply:l=>10+l,mrc:l=>10+2*l,mrp:l=>70-l};
export const welfareModel={mpb:q=>100-q,mpc:q=>20+q};
export const naturalMonopolyModel={demand:q=>100-q,mr:q=>100-2*q,mc:q=>20,atc:q=>20+800/q};
const make=(id,level,topic,model,prompt,fields,expected,explanation,zh)=>({id,level,topic,unit:Number(topic[0]),model,prompt,fields,expected,explanation,zh,target:100});
const laborAxes={x:['Labor','Output','Wage'],y:['Wage / revenue per worker','Labor','Output price']};
const welfareAxes={x:['Quantity','Price / marginal value'],y:['Price / marginal value','Quantity']};
export const finalGraphs=[
make('g56-labor-axes',1,'5.1','labor-market','Label the market for labor services.',laborAxes,{x:'Labor',y:'Wage / revenue per worker'},'Labor is horizontal; wage is vertical. Firms demand labor and workers supply it.','横轴劳动，纵轴工资。'),
make('g56-derived-demand',3,'5.2','labor-market','Output price rises while productivity is fixed in a competitive output market.',{curve:['Labor demand','Labor supply'],direction:['Right','Left'],price:['Up','Down'],quantity:['Up','Down']},{curve:'Labor demand',direction:'Right',price:'Up',quantity:'Up'},'Higher output price raises MRP and labor demand. Wage and employment rise.','产品价格上涨使 MRP 与劳动需求提高，工资就业都上升。'),
make('g56-labor-supply',3,'5.2','labor-market','More qualified workers become available in this market; labor demand is unchanged.',{curve:['Labor demand','Labor supply'],direction:['Right','Left'],price:['Up','Down'],quantity:['Up','Down']},{curve:'Labor supply',direction:'Right',price:'Down',quantity:'Up'},'Greater labor supply lowers wage and increases employment in the standard market model.','劳动供给增加，工资下降，就业增加。'),
make('g56-wage-taker',2,'5.3','labor-firm','Identify the horizontal line facing this wage-taking firm.',{curve:['Labor supply = wage = MRC','Market labor demand','MRP','Total labor cost']},{curve:'Labor supply = wage = MRC'},'The individual competitive employer can hire at the given wage, so marginal labor cost equals that wage.','竞争雇主接受工资，因此 MRC 等于工资。'),
make('g56-hiring-build',4,'5.3','labor-firm','Build the hiring decision for MRP = 80 − L and market wage $40.',{...laborAxes,curves:['MRP + horizontal MRC','Output D + MC'],label:['L* = 40 at MRP = wage','L* = 80 at MRP = 0'],outcome:['Hire where MRP = MRC','Hire where average product is highest']},{x:'Labor',y:'Wage / revenue per worker',curves:'MRP + horizontal MRC',label:'L* = 40 at MRP = wage',outcome:'Hire where MRP = MRC'},'80 − L = 40 gives L = 40. Further workers add less revenue than their wage cost.','MRP=工资求得 L=40。'),
make('g56-monopsony-mrc',2,'5.4','factor-monopsony','Identify curve A above upward-sloping labor supply.',{curve:['MRC','MRP','Output demand','Average product']},{curve:'MRC'},'A uniform-wage monopsonist raises pay for existing workers to hire more, so MRC exceeds supply wage.','统一工资下增雇需给原有工人加薪，MRC 高于供给工资。'),
make('g56-monopsony-build',4,'5.4','factor-monopsony','For supply w = 10 + L and MRP = 70 − L, select the monopsony outcome.',{...laborAxes,curves:['Supply + MRC + MRP','Horizontal supply only'],label:['Lm = 20; wm = 30','Lm = 20; wm = 50','Lc = 30; wc = 40'],outcome:['Wage read from supply at Lm','Wage read from MRC at Lm']},{x:'Labor',y:'Wage / revenue per worker',curves:'Supply + MRC + MRP',label:'Lm = 20; wm = 30',outcome:'Wage read from supply at Lm'},'MRP = MRC gives Lm = 20. Supply at Lm gives wage 30; the MRC value 50 is not the wage.','交点求人数 20，供给求工资 30。'),
make('g56-social-optimum',4,'6.1','social-welfare','Build the social optimum for MSB = 100 − Q and MSC = 20 + Q.',{...welfareAxes,curves:['MSB + MSC','MPB only'],label:['Q* = 40 at MSB = MSC','Q* = 30 below intersection'],outcome:['Maximum social surplus','Guaranteed equal incomes']},{x:'Quantity',y:'Price / marginal value',curves:'MSB + MSC',label:'Q* = 40 at MSB = MSC',outcome:'Maximum social surplus'},'MSB = MSC gives Q* = 40. Maximizing surplus is distinct from equalizing incomes.','社会最优 Q=40，效率不等于收入相等。'),
make('g56-social-dwl',2,'6.1','social-shortfall','The market produces 30 while Q* is 40. What does the shaded triangle measure?',{curve:['Deadweight loss from underproduction','Tax revenue','Total consumer surplus','Total production cost']},{curve:'Deadweight loss from underproduction'},'Between Q=30 and 40, MSB exceeds MSC. The unproduced units have unrealized gains totaling the triangle area.','30 到 40 之间遗漏了社会收益超过成本的交易。'),
make('g56-negative-production',2,'6.2','external-negative-production','Pollution creates an external production cost. Identify the dashed upper cost curve.',{curve:['MSC = MPC + external cost','MSB = MPB','MPC only','Demand with no external effect']},{curve:'MSC = MPC + external cost'},'Social cost includes the uncompensated production damage; private output 40 exceeds efficient output 30.','MSC 高于 MPC，私人产量 40 超过社会最优 30。'),
make('g56-positive-consumption',2,'6.2','external-positive-consumption','Consumption benefits third parties. Identify the dashed benefit curve above MPB.',{curve:['MSB','MSC','MPC','MRC']},{curve:'MSB'},'MSB exceeds MPB by the external benefit. Private output 40 is below efficient output 50.','正消费外部性使 MSB 高于 MPB，私人数量不足。'),
make('g56-negative-consumption',2,'6.2','external-negative-consumption','Consumption harms third parties. The dashed benefit curve lies below MPB. It is:',{curve:['MSB','MSC','Supply of labor','MRC']},{curve:'MSB'},'MSB is lower than MPB because consumption creates external harm. Private quantity exceeds efficient quantity.','负消费外部性使社会收益低于私人收益。'),
make('g56-positive-production',2,'6.2','external-positive-production','Production benefits third parties. The dashed cost curve below MPC represents:',{curve:['MSC','MSB','MPB','MRP']},{curve:'MSC'},'External production benefits lower net social cost relative to private cost. Efficient output exceeds private output.','正生产外部性使净社会成本低于私人成本。'),
make('g56-corrective-tax',3,'6.2','external-negative-production','External damage is $20 per unit. Which policy moves private output from 40 to the efficient 30?',{direction:['Tax of $20 per unit','Subsidy of $20 per unit'],quantity:['Down to Q* = 30','Up to 50'],outcome:['Private marginal cost including tax equals MSC','MSC becomes zero']},{direction:'Tax of $20 per unit',quantity:'Down to Q* = 30',outcome:'Private marginal cost including tax equals MSC'},'The tax internalizes external damage. The private decision then reflects the social cost curve.','单位税将外部损害内部化。'),
make('g56-public-classification',2,'6.3','goods-grid','Use rivalry and exclusion to classify an open-access fishery.',{curve:['Common resource','Pure public good','Private good','Club good']},{curve:'Common resource'},'Fish are rival because one catch leaves fewer for others; open access means nonexcludability.','公海鱼类具有竞争性和非排他性。'),
make('g56-public-benefit',2,'6.3','public-benefit','The green line adds A’s and B’s marginal benefits for the same public-good quantity. It is:',{curve:['Social marginal benefit from vertical summation','Horizontal addition of private-good quantities','Marginal resource cost','A Lorenz curve']},{curve:'Social marginal benefit from vertical summation'},'Everyone consumes the same public-good quantity, so add willingness to pay at each quantity.','公共物品同一数量处纵向加总支付意愿。'),
make('g56-monopoly-tax',3,'6.4','policy-monopoly-tax','A $20 per-unit tax is imposed on a monopoly with D = 100 − Q and MC = 20.',{direction:['MC rises to 40','MC remains 20'],quantity:['Falls from 40 to 30','Rises from 40 to 50'],price:['Buyer price rises from 60 to 70','Buyer price rises from 60 to 80']},{direction:'MC rises to 40',quantity:'Falls from 40 to 30',price:'Buyer price rises from 60 to 70'},'MR = MC + tax gives Q=30; demand gives price 70. The buyer-price increase is smaller than the $20 tax in this example.','税后 Q=30，售价70，价格只上涨10。'),
make('g56-lump-sum',3,'6.4','policy-lump-sum','A fixed tax rises by $400. The monopoly continues operating.',{curve:['ATC rises; MC unchanged','MC rises; ATC unchanged'],quantity:['Q remains 40','Q falls to 30'],outcome:['Profit falls by $400','Profit is unchanged']},{curve:'ATC rises; MC unchanged',quantity:'Q remains 40',outcome:'Profit falls by $400'},'The fixed tax changes ATC and profit but not MR or MC; the operating firm keeps the same output.','一次性税改变 ATC 和利润，不改变继续经营时的最优产量。'),
make('g56-natural-regulation',4,'6.4','natural-regulation','A natural monopoly has D = 100 − Q, MC = 20, ATC = 20 + 800/Q. Select efficient regulation.',{...welfareAxes,curves:['D + MC + ATC','Supply of labor only'],label:['Q = 80; P = 20','Q = 40; P = 60'],outcome:['Fixed subsidy $800 covers the loss','No subsidy because P exceeds ATC']},{x:'Quantity',y:'Price / marginal value',curves:'D + MC + ATC',label:'Q = 80; P = 20',outcome:'Fixed subsidy $800 covers the loss'},'At Q=80, P=MC=20 but ATC=30. Loss is (30−20)×80=$800; a fixed subsidy preserves the marginal condition.','边际成本定价产量80，亏损800需固定补贴。'),
make('g56-minimum-wage',3,'6.4','factor-minimum-wage','In the monopsony example, set minimum wage to the competitive wage of $40.',{price:['Wage rises from 30 to 40','Wage falls from 30 to 20'],quantity:['Employment rises from 20 to 30','Employment falls from 20 to 10'],outcome:['Moderate floor corrects hiring restriction','Any higher floor always increases employment']},{price:'Wage rises from 30 to 40',quantity:'Employment rises from 20 to 30',outcome:'Moderate floor corrects hiring restriction'},'At wage 40, 30 workers are supplied and MRP at 30 is 40. Employment rises to the competitive benchmark. A higher floor can reduce employment.','工资40时供需人数均30；过高最低工资并非总提高就业。'),
make('g56-lorenz',2,'6.5','lorenz-interpretation','Read the provided noncrossing Lorenz curves. Which distribution is more unequal?',{curve:['B, farther below equality','A, nearer equality','Both are equal','Neither can be ranked here']},{curve:'B, farther below equality'},'Curve B gives lower cumulative income shares to the poorest population groups and lies farther below equality. No drawing or Gini calculation is required.','B 更偏离平等线，表示更不平等；此题只要求解释。'),
make('g56-lorenz-equality',2,'6.5','lorenz-interpretation','What does the diagonal in this provided diagram represent?',{curve:['Perfect equality of the measured distribution','Maximum inequality','The demand for labor','Zero income for everyone']},{curve:'Perfect equality of the measured distribution'},'On the diagonal, each cumulative population share receives the same cumulative income share, such as 40% receiving 40%.','平等线上人口累计份额与收入累计份额相同。')
];
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function finalGraphSVG(model,config={}){
 const models=['labor-market','labor-firm','factor-monopsony','factor-minimum-wage','social-welfare','social-shortfall','external-negative-production','external-positive-production','external-negative-consumption','external-positive-consumption','goods-grid','public-benefit','policy-monopoly-tax','policy-lump-sum','natural-regulation','lorenz-interpretation'];
 if(!models.includes(model))return null;
 const sx=q=>55+2.85*q,sy=p=>292-2.35*p;const blue='#416b9b',green='#49796a',gold='#bc8732',red='#ad645b';
 const txt=(q,p,s)=>`<text x="${sx(q)}" y="${sy(p)}">${esc(s)}</text>`;
 const line=(q1,p1,q2,p2,color=green,dash='')=>`<path d="M${sx(q1)} ${sy(p1)}L${sx(q2)} ${sy(p2)}" fill="none" stroke="${color}" stroke-width="2.4" ${dash?`stroke-dasharray="${dash}"`:''}/>`;
 const path=(fn,color,start=0,end=95,dash='')=>`<path d="${Array.from({length:181},(_,i)=>{const q=start+(end-start)*i/180;return `${i?'L':'M'}${sx(q)} ${sy(fn(q))}`;}).join(' ')}" fill="none" stroke="${color}" stroke-width="2.5" clip-path="url(#final-plot)" ${dash?`stroke-dasharray="${dash}"`:''}/>`;
 const point=(q,p,label)=>`<circle cx="${sx(q)}" cy="${sy(p)}" r="3.5" fill="#103e42"/>${txt(q+2,p+3,label)}`;
 const guides=(q,p,label)=>line(q,0,q,p,'#9aadaa','4 4')+line(0,p,q,p,'#9aadaa','4 4')+txt(q-4,-8,label);
 const tri=(coords,color=gold)=>`<polygon points="${coords.map(([q,p])=>`${sx(q)},${sy(p)}`).join(' ')}" fill="${color}" opacity=".2"/>`;
 let body='',name='',desc='',x='Quantity',y='Price / marginal value';
 if(model==='goods-grid'){
  name='Rivalry and excludability classification';desc='Private: rival and excludable. Club: nonrival and excludable. Common: rival and nonexcludable. Public: nonrival and nonexcludable.';
  body=`<text x="12" y="26">Classify consumption characteristics</text><text x="148" y="78">Rival</text><text x="273" y="78">Nonrival</text><rect x="110" y="92" width="275" height="156" fill="#f4f7f4" stroke="#829693"/><path d="M247 92V248 M110 170H385" stroke="#829693"/><text x="8" y="131">Excludable</text><text x="8" y="199">Non-</text><text x="8" y="216">excludable</text><text x="139" y="135">Private</text><text x="282" y="135">Club</text><text x="132" y="206">Common</text><text x="282" y="206">Public</text><text x="12" y="291">Provider identity does not define the category.</text>`;
  return `<svg class="econ-graph" viewBox="0 0 400 350" role="img" aria-label="${name}"><title>${name}</title><desc>${desc}</desc><g style="font-size:12px">${body}</g></svg>`;
 }
 if(model.startsWith('labor')||model.startsWith('factor')){
  x='Labor';y='Wage / revenue per worker';
  if(model==='labor-market'){
   name='Competitive labor market';desc='Labor demand slopes downward and labor supply slopes upward; the wage equates quantities demanded and supplied.';
   body=line(0,80,80,0,blue)+line(0,20,75,95,green)+txt(67,16,'Dₗ')+txt(69,92,'Sₗ')+guides(30,50,'L₀')+point(30,50,'E₀');
   if(config.curve&&config.direction){
    const delta=config.direction==='Right'?20:-20,d=config.curve==='Labor demand',p=d?50+delta/2:50-delta/2,l=30+delta/2;
    body+=d?line(0,80+delta,80+delta,0,gold,'6 4'):line(0,20-delta,75,95-delta,gold,'6 4');
    body+=point(l,p,'E₁')+txt(d?63:58,d?80+delta-63:20-delta+58,d?'Dₗ₁':'Sₗ₁');
   }
  }else if(model==='labor-firm'){
   name='Competitive employer hiring decision';desc='MRP = 80 − L intersects wage = MRC = 40 at L 40.';
   body=line(0,80,80,0,blue)+line(0,40,95,40,green)+txt(63,20,'MRP')+txt(48,44,'w = MRC = Sₗ')+guides(40,40,'L*')+point(40,40,'');
  }else{
   const floor=model==='factor-minimum-wage';name=floor?'Monopsony with a moderate minimum wage':'Uniform-wage monopsony';desc='Supply w = 10 + L, MRC = 10 + 2L, MRP = 70 − L. Unregulated Lm 20 and wm 30; competitive benchmark Lc 30 and wc 40.';
   body=path(factorModel.supply,green,0,75)+path(factorModel.mrc,red,0,44)+path(factorModel.mrp,blue,0,70)+txt(66,79,'Sₗ')+txt(42,94,config.identify?'A':'MRC')+txt(60,13,'MRP')+guides(20,30,'Lm')+line(20,30,20,50,'#9aadaa','4 4')+point(20,50,'')+point(20,30,'wm')+point(30,40,'C');
   if(floor)body+=line(0,40,30,40,gold)+line(30,40,30,70,gold,'4 3')+txt(1,44,'wmin = 40')+line(30,0,30,40,gold,'4 3')+txt(28,-8,'Lc');
  }
 }else if(model==='lorenz-interpretation'){
  name='Interpretation of two noncrossing Lorenz curves';desc='Population is ranked from poorest to richest. Curve B lies below curve A, and both are below the diagonal of equality.';x='Population (%)';y='Income (%)';
  body=line(0,0,100,100,'#9aadaa','5 4')+path(q=>q*q/100,blue,0,100)+path(q=>q*q*q/10000,green,0,100)+txt(19,35,'Equality')+txt(68,52,'A')+txt(76,37,'B')+txt(92,-8,'100')+txt(-12,98,'100');
 }else if(model==='public-benefit'){
  name='Vertical summation of public-good marginal benefits';desc='A: MB = max(40 − Q,0); B: MB = max(30 − Q,0). Social MB is their vertical sum. At Q=20 social MB is 30 and equals MC.';
  body=path(q=>Math.max(40-q,0),blue,0,60)+path(q=>Math.max(30-q,0),red,0,60)+path(q=>Math.max(40-q,0)+Math.max(30-q,0),green,0,60)+line(0,30,90,30,gold)+txt(2,73,'SMB = MBa + MBb')+txt(31,13,'MBa')+txt(17,8,'MBb')+txt(82,33,'MC')+guides(20,30,'Q*');
 }else if(model.startsWith('policy')||model==='natural-regulation'){
  const n=naturalMonopolyModel;name=model==='natural-regulation'?'Natural monopoly regulation':model==='policy-lump-sum'?'Lump-sum tax on a monopoly':'Per-unit tax on a monopoly';desc='Demand P=100−Q, MR=100−2Q and base MC=20.';
  body=path(n.demand,blue,0,100)+line(0,20,100,20,green)+txt(92,12,'D')+txt(92,23,'MC');
  if(model==='natural-regulation'){
   body+=path(n.atc,gold,10,99)+txt(85,34,'ATC')+guides(80,20,'Q*')+point(80,20,'')+line(80,20,80,30,gold,'4 3');
   body+=`<rect x="${sx(0)}" y="${sy(30)}" width="${80*2.85}" height="${10*2.35}" fill="${gold}" opacity=".15"/>`+txt(33,25,'Loss = $800');
   desc+=' ATC=20+800/Q. At efficient Q=80, price 20 is below ATC 30; fixed subsidy 800 covers the loss.';
  }else{
   body+=path(n.mr,red,0,50)+txt(43,11,'MR')+guides(40,60,'Q₀')+point(40,60,'P₀');
   if(model==='policy-monopoly-tax'){
    const active=config.direction==='MC rises to 40';
    if(active)body+=line(0,40,95,40,gold,'6 3')+txt(65,44,'MC + tax')+guides(30,70,'Q₁')+point(30,70,'P₁');
   }else{
    body+=path(q=>20+400/q,gold,6,99)+txt(78,29,'ATC₀');
    if(config.curve==='ATC rises; MC unchanged')body+=path(q=>20+800/q,red,10,99,'6 3')+txt(55,40,'ATC₁');
   }
  }
 }else{
  const ext=model.startsWith('external'),negative=model.includes('negative'),production=model.includes('production');
  const mpb=welfareModel.mpb,mpc=welfareModel.mpc;
  const msb=q=>mpb(q)+(ext&&!production?(negative?-20:20):0),msc=q=>mpc(q)+(ext&&production?(negative?20:-20):0);
  const star=ext?(negative?30:50):40;
  name=ext?model.replaceAll('-',' '):'Social marginal benefit and cost';desc=`Private equilibrium is 40. Socially efficient quantity is ${star}, where MSB equals MSC.`;
  body=path(mpb,blue,0,100)+path(mpc,green,0,78)+txt(81,23,ext?'MPB':'MSB')+txt(66,89,ext?'MPC':'MSC');
  if(ext){
   body+=production?path(msc,red,0,98,'6 3')+txt(43,msc(43)+4,'MSC'):path(msb,red,0,100,'6 3')+txt(65,msb(65)+4,'MSB');
   body+=tri([[40,msb(40)],[40,msc(40)],[star,msb(star)]])+guides(40,60,'Qm')+line(star,0,star,msb(star),'#9aadaa','4 4')+txt(star-4,-16,'Q*')+point(star,msb(star),'');
   if(model==='external-negative-production'&&config.direction==='Tax of $20 per unit')body+=txt(8,89,'MPC + tax = MSC');
  }else{
   body+=guides(40,60,'Q*')+point(40,60,'E*');
   if(model==='social-shortfall')body+=tri([[30,70],[30,50],[40,60]])+line(30,0,30,70,'#9aadaa','4 4')+txt(26,-16,'30');
  }
 }
 if(config.curves==='none')body='';
 // Component construction is a guided selector; axes remain live as answers change.
 return `<svg class="econ-graph" viewBox="0 0 400 360" role="img" aria-label="${esc(name)}"><title>${esc(name)}</title><desc>${esc(desc)}</desc><defs><clipPath id="final-plot"><rect x="55" y="30" width="292" height="264"/></clipPath></defs><path d="M55 30V292H355" fill="none" stroke="#829693"/><text x="12" y="22" style="font-size:13px">${esc(config.y||(config.show===false?'?':y))}</text><text x="238" y="348" style="font-size:13px">${esc(config.x||(config.show===false?'?':x))}</text><g style="font-size:12px">${body}</g></svg>`;
}
