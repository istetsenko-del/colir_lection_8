'use strict';
const $ = id => document.getElementById(id);
const steps = [
  { title: 'Підготуйте робоче місце', time: 5, why: 'Освітлення та кут огляду змінюють сприйняття тіней і білого навіть за незмінного сигналу.', actions: ['Сядьте у звичайне робоче положення. За можливості приберіть пряме світло і відблиски з екрана. Залиште стабільне освітлення.', 'Якщо дисплей щойно увімкнули, дайте йому стабілізуватися за інструкцією виробника. Поки він стабілізується, обговоріть паспорт дисплея.', 'Запишіть або сфотографуйте початковий режим і доступні налаштування, щоб мати змогу їх повернути.'], note: 'Яке освітлення? Де видно відблиск? Які початкові налаштування?' },
  { title: 'Зафіксуйте режим SDR', time: 5, why: 'Автоматична зміна яскравості або білого робить порівняння до і після ненадійним.', actions: ['Працюйте на одному дисплеї. Оберіть звичний стабільний режим SDR; якщо на час вправи вимикаєте HDR, запишіть початковий стан.', 'Для вправи за можливості призупиніть нічний фільтр, адаптивну яскравість, адаптивний білий і динамічний контраст. Збережіть потрібні вам функції доступності; недоступні перемикачі просто позначте.', 'У меню монітора знайдіть доступні регулятори. На ноутбуці це може бути лише яскравість. Не робіть скидання і не встановлюйте чужі ICC-профілі.'], note: 'Режим, стан HDR і автоматичних функцій; що доступно змінити?' },
  { title: 'Яскравість і деталі в тінях', time: 6, why: 'На темному тлі близькі рівні можуть зливатися через відблиски, режим дисплея або особливості панелі.', actions: ['Оцініть чорний фон і темні поля зі свого звичного місця. Запишіть, з якого рівня помічаєте різницю.', 'Спочатку перевірте відблиски. За потреби зробіть невелику зміну регулятором загальної яскравості, щоб екран було комфортно читати в цьому світлі. Потім повторіть спостереження.', 'Не піднімайте чорний заради видимості всіх полів. Якщо низькі рівні зливаються, зафіксуйте це як спостереження, без висновку про точну причину.'], pattern:'dark', hint:'На фоні 0: зліва направо коди RGB 4 · 8 · 12 · 16 · 24 · 32 (усі канали рівні).', note:'Що видно в тінях до та після? Чи змінилася яскравість або освітлення?' },
  { title: 'Деталі у світлах', time: 6, why: 'Яскраві ділянки можуть виглядати однаковими. Візуальний тест допомагає помітити злиття, але не встановлює його причину.', actions: ['Подивіться на шість полів на білому тлі. Порівняйте середні поля та ті, що найближчі до білого.', 'Якщо кілька полів зливаються, перевірте, чи не активний динамічний режим. За наявності регулятора контрасту та дозволу його змінювати спробуйте малий крок від записаного значення. Якщо користі немає, поверніть попередній стан.', 'Після зміни знову гляньте на тіні. Не підганяйте результат під обов’язкову кількість видимих полів.'], pattern:'light',hint:'На фоні 255: зліва направо коди RGB 224 · 232 · 240 · 248 · 252 · 254 (усі канали рівні).',note:'Які світлі поля розрізняються? Що змінилося після повторного огляду?' },
  { title: 'Нейтральність і градації', time: 6, why:'Рівні R, G і B дають нейтральні коди sRGB. Якщо нейтральний ряд має помітний відтінок, на враження можуть впливати стан дисплея, освітлення й адаптація зору.', actions:['Огляньте плавний градієнт зверху і контрольні ступені знизу. Шукайте різкі смуги там, де перехід задумано плавним.', 'Перевірте, чи не надає всьому ряду відтінку нічний фільтр або режим екрана. Не налаштовуйте окремі RGB-канали на око під довільний білий.', 'Занотуйте смуги або відтінок, якщо їх помітили. Ця вправа не визначає бітову глибину, гамму чи температуру білого.'], pattern:'ramp',hint:'Верх — плавний градієнт. Низ — шість навмисно дискретних ступенів.',note:'Чи є відтінок? Де видно смуги? Що залишилося незмінним?' },
  { title: 'Рівномірність і повторна перевірка', time: 7, why:'Робочий стан має бути стабільним. Одна точка або один погляд не показують, як поводиться вся панель.', actions:['Збільште сіре поле. З робочого місця порівняйте центр і краї. Зафіксуйте видимі плями або відмінності, враховуючи відблиски та кут огляду.', 'Поверніться до тіней і світел з тим самим освітленням. Запишіть остаточний режим і значення доступних регуляторів.', 'Зіставте спостереження до і після. Якщо стан став гіршим або зміни були лише для заняття, поверніть потрібні налаштування. Позначте, що перевіряли візуально.'], pattern:'uniform',hint:'Однорідне поле RGB (128, 128, 128). Для порівняння країв натисніть «Збільшити тест».',note:'Що видно в центрі та на краях? Який стан залишили? Що потребує вимірювання?' }
];
steps[2].title='Рівень чорного і деталі в тінях';
steps[2].actions=['На чорному фоні запишіть, які поля відрізняються від фону. Порівняйте з попереднім спостереженням лише за того самого освітлення.', 'Якщо є Black Equalizer, Shadow Boost або подібна функція для ігор, перевірте, чи вона не змінює тіні в робочому режимі. Якщо є окреме налаштування рівня чорного або діапазону сигналу, не змінюйте його навмання: спочатку звірте параметри виходу та входу за документацією.', 'Яскравість підсвічування не є рівнем чорного сигналу. Не робіть чорне тло сірим заради найтемніших полів. Якщо вони зливаються, зафіксуйте це.'];
steps[3].actions=['Почніть зі штатного значення контрасту в обраному режимі. Оцініть, які поля видно на білому фоні. Найближчі до білого можуть бути ледь помітні.', 'Якщо кілька світлих полів злилися і є окремий регулятор Contrast, спробуйте зменшити його на один-два кроки. Якщо градації не поліпшилися або зображення стало гіршим, поверніть попереднє значення.', 'Після зміни перегляньте тіні й біле поле ще раз. Не вимагайте видимості всіх полів на будь-якому дисплеї.'];
steps.splice(2,0,{title:'Яскравість білого',why:'Повзунок Brightness зазвичай змінює світловіддачу екрана. Надто яскравий білий у темній кімнаті втомлює, а тьмяний екран біля вікна заважає читати.',actions:['Відкрийте біле поле. Порівняйте його з білою сторінкою звичного документа в цьому ж освітленні. Не дивіться на поле довго, якщо воно засліплює.', 'Використайте системний повзунок яскравості або Brightness у меню монітора. Змініть один параметр малим кроком, поверніться до поля й оцініть, чи комфортно читати. Contrast поки залиште як є.', 'Запишіть початкове й кінцеве значення за шкалою пристрою. Без приладу не записуйте його як кд/м².'],pattern:'paper',hint:'Велике біле поле й рядок тексту. Використовуйте звичне освітлення.',note:'Яскравість до → після; чому залишили цей рівень?'});
steps.splice(5,0,{title:'Роздільна здатність і різкість',why:'Нерідна роздільна здатність або надмірна штучна різкість можуть розмивати текст чи створювати контурні ореоли.',actions:['Перевірте, чи в системі вибрано рідну роздільну здатність. Поверніть масштаб сторінки до 100 %, якщо це зручно; масштаб інтерфейсу змінювати не обов’язково.', 'Порівняйте тонкі та товсті лінії й текст. Якщо є Sharpness, спочатку залиште штатне значення. За явних ореолів спробуйте менше значення й поверніть попереднє, якщо контури стали гіршими.', 'Цей візуальний зразок не є перевіркою відповідності піксель у піксель: на лінії можуть впливати браузер і масштабування.'],pattern:'detail',hint:'Вертикальні лінії, горизонтальні лінії, шахівниця і текст.',note:'Яка роздільна здатність? Чи є розмиття або ореоли?'});
steps[6].title='Білий, нейтральність і гамма';
steps[6].actions.push('Якщо в меню є Color Temperature або Gamma, порівняйте на сірій шкалі лише готові режими. Для вправи залиште стабільний нейтральний режим, збережіть назву пресета й не вважайте напис 6500 K або 2,2 результатом вимірювання.');
steps.splice(7,0,{title:'Кольорові градації RGB',why:'Тіні та світлі відтінки можуть зливатися по-різному в червоному, зеленому й синьому каналах.',actions:['У кожному ряду порівняйте сусідні поля. Подивіться, чи не губляться границі праворуч, біля найнасиченіших рівнів.', 'Якщо активний режим Vivid або Dynamic, порівняйте його зі Standard чи sRGB, якщо вони доступні. Після зміни режиму повторіть перевірку білого, тіней і світел.', 'Не підкручуйте Saturation, RGB Gain або Offset заради яскравішого вигляду. Ця картинка не вимірює охоплення чи точність каналів.'],pattern:'rgb',hint:'Зверху вниз: червоний, зелений, синій. Коди активного каналу зліва направо: 32 · 64 · 128 · 192 · 224 · 240 · 248 · 255.',note:'У якому ряду зливаються сусідні поля? Який режим залишили?'});
steps[8].title='Рівномірність і дефекти';
steps[8].actions=['Збільште сіре поле, а потім по черзі відкрийте біле, чорне, червоне, зелене й синє. З робочого положення порівняйте центр і краї тестової області.', 'Сірий і білий допомагають помітити плями й відтінки; суцільні кольори — точки, які постійно темні або світлі. Перевірте, чи це не пил або відблиск. Не тисніть на панель.', 'Пляму або нерівномірність не намагайтеся прибрати повзунками кольору. Запишіть, де її видно й на якому полі.'];
steps[8].hint='Однорідне поле. Перемикайте заливки та порівнюйте різні зони екрана.';
steps[8].note='На якому полі видно плями або точки? Де саме?';
steps.push({title:'Загальна перевірка на сюжеті',why:'Окремі шкали допомагають знайти проблему, а зображення з різними тонами показує, чи залишився результат зручним у роботі.',actions:['Огляньте навчальну ілюстрацію: темне листя, нейтральні чашка та фон, світлі відблиски й кольорові ділянки. Перевірте, чи не зникли деталі, які були помітні до змін.', 'Повторіть тіні та світла в тому самому освітленні. Зіставте записи до й після. Якщо стало гірше, поверніть записане значення останнього регулятора та перевірте ще раз.', 'Запишіть остаточний режим, доступні значення і те, що не вдалося перевірити. Для узгодження кольору з друком потрібні вимірювання та належна проба.'],pattern:'scene',hint:'Навчальна ілюстрація з тінями, світлами й кольоровими об’єктами. Вона не є колориметричним еталоном.',note:'Які значення залишили? Що змінилося порівняно з початком?'});
steps.forEach((s,i)=>s.time=[4,4,4,4,4,3,4,4,4,5][i]);
const menus=[
  'Кнопки або джойстик зовнішнього монітора → Menu → Information / Display Info: знайдіть модель і активний вхід. У Windows: Параметри → Система → Дисплей → Визначити. На Mac: Системні параметри → Дисплеї → виберіть екран.',
  'На зовнішньому моніторі: Menu → Picture / Color → Preset Modes / Picture Mode. Standard або sRGB шукайте серед пресетів. Windows: Параметри → Система → Дисплей → вибрати екран → HDR, Нічне світло та Яскравість (автоматичні параметри, якщо є). macOS: Системні параметри → Дисплеї → вибрати екран → HDR, True Tone, автоматична яскравість і Night Shift, якщо доступні. Динамічний контраст або локальне затемнення шукайте в Picture / Advanced. Запишіть зміни.',
  'На зовнішньому моніторі: Menu → Brightness / Contrast або Picture → Brightness. Для вбудованого дисплея — клавіші з піктограмою сонця або повзунок: Windows → Система → Дисплей → Яскравість; macOS → Системні параметри → Дисплеї → Яскравість. У деяких пресетах регулятор заблокований.',
  'Ігрові функції шукайте у Menu → Game / Gaming → Black Equalizer, Shadow Boost або Black Stabilizer. Окремий пункт HDMI Black Level / RGB Range, якщо є, може бути в Picture → Advanced або Input. Це налаштування узгодження сигналу, тому залиште його як є, якщо не знаєте діапазону відеовиходу.',
  'На зовнішньому моніторі: Menu → Brightness / Contrast або Picture → Contrast. Для вправи Dynamic Contrast / DCR (зазвичай Picture → Advanced) краще залишити вимкненим, якщо його можна змінити. У ноутбуках окремого регулятора контрасту може не бути: просто оцініть поля.',
  'Windows → Параметри → Система → Дисплей → Роздільна здатність дисплея → рекомендована; macOS → Системні параметри → Дисплеї → Роздільна здатність / типовий варіант. У браузері масштаб 100 %: Ctrl + 0 (Windows) або Command + 0 (macOS). На моніторі: Menu → Picture / Display → Sharpness, якщо доступно.',
  'На зовнішньому моніторі: Menu → Color / Picture → Color Temperature, White Point або Gamma. Назви готових режимів можуть бути Normal, Warm, Cool чи містити числа. На підтримуваних Mac шукайте Дисплеї → Preset; не замінюйте штатний профіль навмання. Якщо таких пунктів немає, виконайте лише спостереження.',
  'На моніторі: Menu → Picture / Color → Preset Modes. Vivid, Dynamic, Standard або sRGB — типові назви, але набір залежить від моделі. Перемкніть тільки один пресет і після порівняння поверніть робочий, якщо поточний профіль створено саме для нього.',
  'Регулятори не потрібні: натисніть «Збільшити тест», далі вибирайте Сіре / Біле / Чорне / Червоне / Зелене / Синє. Щоб порівняти зони, не пересувайте тестове вікно під час спостереження.',
  'Поверніться до тих самих пунктів меню, які записали на початку. Якщо результат гірший, відновіть останнє змінене значення. Далі перевірте назву ICC-профілю для поточного екрана у наступному розділі.'
];
const key = 'monitor-lab-lecture09-v2';
const blank = () => ({index:0, notes:steps.map(()=>''), status:steps.map(()=>''), device:'', environment:'', conclusion:''});
let state = blank();
try {
  const prior = JSON.parse(localStorage.getItem(key));
  if(prior && Array.isArray(prior.notes) && Array.isArray(prior.status) && Number.isInteger(prior.index) && prior.index>=0 && prior.index<steps.length){
    state = {...blank(), index:prior.index, notes:steps.map((_,i)=>typeof prior.notes[i]==='string'?prior.notes[i]:''),status:steps.map((_,i)=>['done','skip'].includes(prior.status[i])?prior.status[i]:'' )};
    for(const field of ['device','environment','conclusion']) if(typeof prior[field]==='string') state[field]=prior[field];
  }
} catch {}
function save(){try{localStorage.setItem(key,JSON.stringify(state));}catch{}}
const gray = v => `rgb(${v},${v},${v})`;
const fills=[['Сіре','#808080'],['Біле','#fff'],['Чорне','#000'],['Червоне','#f00'],['Зелене','#0f0'],['Синє','#00f']];
let fillIndex=0;
function fillButtons(container,target){
  container.replaceChildren(...fills.map(([name],i)=>{const btn=document.createElement('button');btn.type='button';btn.className='button';btn.textContent=name;btn.setAttribute('aria-pressed',String(i===fillIndex));btn.addEventListener('click',()=>{fillIndex=i;target.style.background=fills[i][1];target.setAttribute('aria-label',`${name} однорідне поле`);for(const [j,b] of [...container.children].entries())b.setAttribute('aria-pressed',String(j===i));});return btn;}));
}
function tiles(target, values){for(const v of values){const block=document.createElement('span');block.style.background=gray(v);target.append(block);}}
function pattern(target, kind, label){
  target.replaceChildren();target.className='pattern';target.style.background='';target.setAttribute('aria-label',label);
  if(kind==='dark' || kind==='light'){
    target.classList.add('blocks');target.style.background=kind==='dark'?'#000':'#fff';
    tiles(target,kind==='dark'?[4,8,12,16,24,32]:[224,232,240,248,252,254]);
  } else if(kind==='ramp'){
    target.classList.add('ramps');const ramp=document.createElement('div');ramp.style.background='linear-gradient(90deg, #000, #fff)';const row=document.createElement('div');row.style.display='grid';row.style.gridTemplateColumns='repeat(6,1fr)';tiles(row,[0,51,102,153,204,255]);target.append(ramp,row);
  } else if(kind==='paper'){
    target.classList.add('paper');const text=document.createElement('span');text.textContent='Біле поле · перевірка комфортної яскравості';target.append(text);
  } else if(kind==='detail'){
    target.classList.add('detail');for(const name of ['vertical','horizontal','checker','test-text']){const tile=document.createElement('div');tile.className=name;if(name==='test-text')tile.textContent='Тонкі контури · 012345 ABC абв';target.append(tile);}
  } else if(kind==='rgb'){
    target.classList.add('rgb-tiles');for(let channel=0;channel<3;channel++)for(const value of [32,64,128,192,224,240,248,255]){const rgb=[0,0,0];rgb[channel]=value;const tile=document.createElement('span');tile.style.background=`rgb(${rgb.join(',')})`;target.append(tile);}
  } else if(kind==='scene'){
    const img=document.createElement('img');img.src='./scene.svg';img.alt='Біла чашка з чаєм, темне листя, лимон і світле тло';target.classList.add('scene');target.append(img);
  } else {target.style.background=fills[fillIndex][1];target.setAttribute('aria-label',`${fills[fillIndex][0]} однорідне поле`);}
}
function render(focus=false){
  const i=state.index,s=steps[i];$('steps').replaceChildren();
  steps.forEach((step,n)=>{
    const li=document.createElement('li'), btn=document.createElement('button'), badge=document.createElement('small');
    btn.type='button';btn.textContent=`${String(n+1).padStart(2,'0')} ${step.title}`;
    if(n===i)btn.setAttribute('aria-current','step');
    if(state.status[n]){badge.textContent=state.status[n]==='done'?'✓':'—';badge.setAttribute('aria-label',state.status[n]==='done'?'Виконано':'Пропущено');btn.append(badge);}
    btn.addEventListener('click',()=>go(n));li.append(btn);$('steps').append(li);
  });
  $('progress').textContent=`Виконано: ${state.status.filter(x=>x==='done').length} з ${steps.length}. Пропущено: ${state.status.filter(x=>x==='skip').length}.`;
  $('stepMeta').textContent=`КРОК ${i+1} / ${steps.length} · ${s.time} ХВ`;$('stepTitle').textContent=s.title;$('stepWhy').textContent=s.why;
  $('stepMenu').textContent=menus[i];
  $('stepActions').replaceChildren(...s.actions.map(t=>{const li=document.createElement('li');li.textContent=t;return li;}));
  $('patternPanel').hidden=!s.pattern;
  $('fillControls').hidden=s.pattern!=='uniform';
  if(s.pattern){pattern($('pattern'),s.pattern,s.hint);$('patternHint').textContent=s.hint;}
  if(s.pattern==='uniform')fillButtons($('fillControls'),$('pattern'));
  $('observation').value=state.notes[i];$('observation').placeholder=s.note;
  $('prev').disabled=i===0;$('next').textContent=i===steps.length-1?'Зафіксувати й до профілю →':'Зафіксувати й далі →';
  if(focus)$('stepTitle').focus();
}
function go(i){state.index=i;save();render(true);}
function finish(status){state.status[state.index]=status;save();if(state.index<steps.length-1)go(state.index+1);else {render();$('profile-title').focus({preventScroll:true});$('profile').scrollIntoView();}}
$('prev').addEventListener('click',()=>go(state.index-1));$('next').addEventListener('click',()=>finish('done'));$('skipStep').addEventListener('click',()=>finish('skip'));
$('observation').addEventListener('input',e=>{state.notes[state.index]=e.target.value;save();});
$('expand').addEventListener('click',()=>{const s=steps[state.index], dialog=$('testDialog');$('testTitle').textContent=s.title;pattern($('bigPattern'),s.pattern,s.hint);$('bigHint').textContent=s.hint;$('bigFillControls').hidden=s.pattern!=='uniform';if(s.pattern==='uniform')fillButtons($('bigFillControls'),$('bigPattern'));dialog.classList.toggle('wide-test',s.pattern==='uniform');dialog.showModal();});
$('closeTest').addEventListener('click',()=>$('testDialog').close());
$('testDialog').addEventListener('close',()=>{if(steps[state.index].pattern==='uniform'){pattern($('pattern'),'uniform',steps[state.index].hint);fillButtons($('fillControls'),$('pattern'));}});
const fields=['device','environment','conclusion'];
for(const field of fields){$(field).value=state[field];$(field).addEventListener('input',e=>{state[field]=e.target.value;save();});}
$('download').addEventListener('click',()=>{
  const status={done:'виконано',skip:'пропущено','':'не позначено'};
  const report=['Лекція 09 — Паспорт робочого стану монітора',`Дата: ${new Intl.DateTimeFormat('uk-UA').format(new Date())}`,'Метод: візуальна перевірка SDR без інструментальних вимірювань.',`Монітор і режим: ${state.device.trim()||'не зазначено'}`,`Умови перегляду: ${state.environment.trim()||'не зазначено'}`,'',...steps.flatMap((s,i)=>[`${i+1}. ${s.title} — ${status[state.status[i]]}`,state.notes[i].trim()||'Без запису.','']),`Висновок: ${state.conclusion.trim()||'не зазначено'}`].join('\r\n');
  const url=URL.createObjectURL(new Blob(['\ufeff',report],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='lektsiia-09-monitor-zvit.txt';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1500);$('feedback').textContent='Підготовлено текстовий файл звіту.';
});
$('reset').addEventListener('click',()=>{if(!confirm('Очистити всі спостереження і паспорт у цьому браузері?'))return;state=blank();save();for(const field of fields)$(field).value='';render();$('feedback').textContent='Записи очищено.';});
const motion=$('motion');motion.addEventListener('click',()=>{const running=motion.getAttribute('aria-pressed')==='true';motion.setAttribute('aria-pressed',String(!running));motion.textContent=running?'Показати рух':'Зупинити рух';motion.closest('.demo').classList.toggle('moving',!running);});
const topics=[...document.querySelectorAll('#topics > details')];
topics.slice(0,-1).forEach((topic,i)=>{const btn=document.createElement('button');btn.type='button';btn.className='button topic-next';btn.textContent='Наступна характеристика →';btn.addEventListener('click',()=>{topics[i+1].open=true;topic.open=false;topics[i+1].querySelector('summary').focus({preventScroll:true});topics[i+1].scrollIntoView({block:'start'});});topic.querySelector('.topic').append(btn);});
render();
