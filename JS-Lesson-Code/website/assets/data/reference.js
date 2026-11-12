/* ============================================================
   reference.js — အမြန်ကိုးကား (cheatsheet) နှင့် ဝေါဟာရ အဘိဓာန်
   ============================================================ */
window.JSL = window.JSL || {};

JSL.cheatsheet = [
  {
    title: "Variable နှင့် Data Type",
    items: [
      { code: "let name = \"Aung\";", desc: "ပြောင်းလဲနိုင်တဲ့ variable။ နောက်မှ တန်ဖိုး အသစ် ထည့်နိုင်တယ်။" },
      { code: "const PI = 3.14;", desc: "ပြန်မပြောင်းလဲသင့်တဲ့ တန်ဖိုး။ Object/array ကို ပြင်လို့ ရပေမယ့် variable ကို ပြန်မခွဲနိုင်ဘူး။" },
      { code: "typeof value", desc: "တန်ဖိုးရဲ့ အမျိုးအစားကို string အနေနဲ့ ပြန်တယ် — `\"string\"`, `\"number\"`, `\"object\"` စသဖြင့်။" },
      { code: "Number(\"42\")", desc: "String ကို ဂဏန်း ပြောင်းတယ်။ မရရင် `NaN` ပြန်တယ်။" },
      { code: "String(42)", desc: "ဂဏန်းကို string ပြောင်းတယ်။" },
      { code: "Boolean(0)", desc: "တန်ဖိုးကို true/false ပြောင်းတယ်။ `0`, `\"\"`, `null`, `undefined`, `NaN` က false။" },
      { code: "null vs undefined", desc: "`null` က ကိုယ်တိုင် \"တန်ဖိုး မရှိ\" လို့ သတ်မှတ်တာ။ `undefined` က တန်ဖိုး မပေးရသေးတာ။" }
    ]
  },
  {
    title: "Operator နှင့် အခြေအနေ",
    items: [
      { code: "a === b", desc: "တန်ဖိုးနဲ့ အမျိုးအစား နှစ်ခုလုံး တူမတူ စစ်တယ်။ အများဆုံး သုံးသင့်တဲ့ နှိုင်းယှဉ်ချက်။" },
      { code: "a == b", desc: "အမျိုးအစား မစစ်ဘဲ နှိုင်းယှဉ်တယ်။ `\"5\" == 5` က true ဖြစ်တာမို့ မသုံးသင့်ပါ။" },
      { code: "a && b", desc: "နှစ်ခုလုံး true မှ true။ ပထမ false ရင် ဒုတိယကို မစစ်တော့ဘူး။" },
      { code: "a || b", desc: "တစ်ခုခု true ရင် true။ Default value ပေးတဲ့ နေရာမှာ သုံးတယ်။" },
      { code: "value ?? fallback", desc: "`value` က `null` / `undefined` ဖြစ်မှ fallback ကို သုံးတယ်။ `0` နဲ့ `\"\"` ကို ထိန်းထားတယ်။" },
      { code: "if (score >= 50) { ... } else { ... }", desc: "အခြေအနေ မှန်/မှား အလိုက် ကုဒ် ခွဲ run တယ်။" },
      { code: "switch (key) { case \"a\": ... break; }", desc: "တန်ဖိုး တစ်ခုကို ရွေးချယ်မှု များစွာ ခွဲတဲ့အခါ သုံးတယ်။ `break` မမေ့ပါနဲ့။" }
    ]
  },
  {
    title: "Loop နှင့် Function",
    items: [
      { code: "for (let i = 0; i < 5; i++) { ... }", desc: "အရေအတွက် သတ်မှတ်ပြီး ထပ်လုပ်တယ်။" },
      { code: "for (const item of array) { ... }", desc: "Array ရဲ့ တန်ဖိုး တစ်ခုချင်းကို လှည့်တယ်။" },
      { code: "for (const key in object) { ... }", desc: "Object ရဲ့ key တွေကို လှည့်တယ်။ Array အတွက် `of` ကို သုံးပါ။" },
      { code: "array.forEach((item, i) => { ... })", desc: "Array တစ်ခုချင်းအတွက် function ကို ခေါ်တယ်။ ရလဒ် array အသစ် မပြန်ဘူး။" },
      { code: "function add(a, b) { return a + b; }", desc: "အမည်ရ function ကြေညာတယ်။ ခေါ်တဲ့အခါ ရလဒ် ပြန်တယ်။" },
      { code: "const add = (a, b) => a + b;", desc: "Arrow function။ ကုဒ် တိုပြီး `this` ကို မဖမ်းဘူး။" },
      { code: "function greet(name = \"ဧည့်သည်\") { ... }", desc: "Default parameter။ တန်ဖိုး မပေးရင် ဒီတန်ဖိုးကို သုံးတယ်။" }
    ]
  },
  {
    title: "Array နှင့် Object",
    items: [
      { code: "array.push(item)", desc: "အဆုံးမှာ တစ်ခု ထည့်တယ်။ `pop()` က အဆုံးက ဖယ်တယ်။" },
      { code: "array.unshift(item) / shift()", desc: "အစမှာ ထည့်/ဖယ် လုပ်တယ်။" },
      { code: "array.map((x) => x * 2)", desc: "တစ်ခုချင်းကို ပြောင်းပြီး array အသစ် ပြန်တယ်။" },
      { code: "array.filter((x) => x > 10)", desc: "အခြေအနေ မှန်တဲ့ အရာတွေပဲ array အသစ် အနေနဲ့ ပြန်တယ်။" },
      { code: "array.find((x) => x.id === id)", desc: "ပထမဆုံး တွေ့တဲ့ အရာကို ပြန်တယ်။ မတွေ့ရင် `undefined`။" },
      { code: "array.reduce((sum, x) => sum + x, 0)", desc: "Array တစ်ခုလုံးကို တန်ဖိုး တစ်ခုတည်း ဖြစ်အောင် စုတယ်။" },
      { code: "array.includes(value)", desc: "တန်ဖိုး ပါ/မပါ စစ်တယ်။" },
      { code: "object.key / object[\"key\"]", desc: "Object ရဲ့ တန်ဖိုးကို ဖတ်တယ်။ ပြင်ချင်ရင် တူညီတဲ့ နည်းနဲ့ ထည့်တယ်။" },
      { code: "{ ...obj, newKey: value }", desc: "Object ကို မူမပျက်ဘဲ ကော်ပီ အသစ် ဆောက်တယ်။" }
    ]
  },
  {
    title: "DOM",
    items: [
      { code: "document.getElementById(\"id\")", desc: "id နဲ့ element ရှာတယ်။ မတွေ့ရင် `null`။" },
      { code: "document.querySelector(\".card\")", desc: "CSS selector နဲ့ ပထမဆုံး element ရှာတယ်။" },
      { code: "document.querySelectorAll(\".card\")", desc: "ကိုက်ညီတဲ့ element အားလုံးကို NodeList အနေနဲ့ ရတယ်။" },
      { code: "el.textContent = \"စာသား\"", desc: "စာသား ထည့်/ဖတ်တယ်။ HTML ကို မဖွင့်ဘူး။ ပိုလုံခြုံတယ်။" },
      { code: "el.innerHTML = \"<b>Bold</b>\"", desc: "HTML အနေနဲ့ ထည့်တယ်။ အသုံးပြုသူ ထည့်တဲ့ စာသားနဲ့ မသုံးသင့်ပါ။" },
      { code: "el.classList.add(\"active\")", desc: "Class ထည့်တယ်။ `remove`, `toggle`, `contains` လည်း ရှိတယ်။" },
      { code: "el.style.color = \"red\"", desc: "Inline style ပြောင်းတယ်။ CSS property က camelCase ဖြစ်တယ်။" },
      { code: "document.createElement(\"div\")", desc: "Element အသစ် ဆောက်တယ်။ `append()` နဲ့ DOM ထဲ ထည့်ရတယ်။" },
      { code: "el.remove()", desc: "Element ကို DOM ကနေ ဖျက်တယ်။" }
    ]
  },
  {
    title: "Event",
    items: [
      { code: "el.addEventListener(\"click\", handler)", desc: "Event တစ်ခုအတွက် function တပ်တယ်။ Event တစ်ခုမှာ listener များစွာ တပ်နိုင်တယ်။" },
      { code: "event.preventDefault()", desc: "Browser ရဲ့ မူလ အပြုအမူ (form submit, link သွားတာ) ကို တားတယ်။" },
      { code: "event.target", desc: "Event ဖြစ်စေတဲ့ အတွင်းဆုံး element။" },
      { code: "event.currentTarget", desc: "Listener တပ်ထားတဲ့ element။" },
      { code: "event.target.closest(\".btn\")", desc: "အနီးဆုံး ကိုက်ညီတဲ့ မိခင် element ကို ရှာတယ်။ Delegation အတွက် အဓိက။" },
      { code: "el.addEventListener(\"keydown\", (e) => { if (e.key === \"Enter\") ... })", desc: "Keyboard ကို ဖမ်းတယ်။ `e.key` က နှိပ်လိုက်တဲ့ key။" },
      { code: "el.addEventListener(\"submit\", handler)", desc: "Form submit ဖြစ်တဲ့အခါ ခေါ်တယ်။ `preventDefault()` နဲ့ page reload ကို တားပါ။" }
    ]
  },
  {
    title: "Storage",
    items: [
      { code: "localStorage.setItem(\"key\", \"value\")", desc: "String တန်ဖိုး သိမ်းတယ်။ Browser ပိတ်လည်း ကျန်တယ်။" },
      { code: "localStorage.getItem(\"key\")", desc: "တန်ဖိုး ဖတ်တယ်။ မရှိရင် `null`။" },
      { code: "localStorage.removeItem(\"key\")", desc: "Key တစ်ခုကို ဖျက်တယ်။" },
      { code: "localStorage.clear()", desc: "ဒီ site ရဲ့ key အားလုံးကို ဖျက်တယ်။ Argument မယူဘူး။" },
      { code: "JSON.stringify(object)", desc: "Object/array ကို string ပြောင်းတယ်။ သိမ်းခင် သုံးတယ်။" },
      { code: "JSON.parse(text)", desc: "String ကို object/array ပြန်ပြောင်းတယ်။ ဖတ်ပြီးမှ သုံးတယ်။" },
      { code: "sessionStorage", desc: "Tab ပိတ်တာနဲ့ ပျက်တဲ့ storage။ API က `localStorage` နဲ့ အတူတူ။" }
    ]
  },
  {
    title: "Async",
    items: [
      { code: "setTimeout(fn, 1000)", desc: "၁ စက္ကန့်နောက် တစ်ခါ ခေါ်တယ်။ နောက်ကုဒ်ကို မရပ်ဘူး။" },
      { code: "setInterval(fn, 1000)", desc: "၁ စက္ကန့်တိုင်း ထပ်ခေါ်တယ်။ `clearInterval(id)` နဲ့ ရပ်တယ်။" },
      { code: "new Promise((resolve, reject) => { ... })", desc: "အောင်မြင်/မအောင်မြင် ဖြစ်နိုင်တဲ့ အလုပ်ကို ကိုယ်စားပြုတယ်။" },
      { code: "promise.then(fn).catch(fn).finally(fn)", desc: "ရလဒ်၊ အမှား၊ အမြဲ run တဲ့ အလုပ်ကို ကိုင်တွယ်တယ်။" },
      { code: "async function load() { await fetch(url); }", desc: "`await` က Promise ပြီးတဲ့အထိ စောင့်တယ်။ `async` function ထဲမှာပဲ ရတယ်။" },
      { code: "try { await work(); } catch (e) { ... }", desc: "Async အမှားကို ဖမ်းတယ်။" },
      { code: "await Promise.all([a, b])", desc: "အားလုံး ပြီးတဲ့အထိ စောင့်တယ်။ တစ်ခု fail ရင် ချက်ချင်း reject။" },
      { code: "await Promise.allSettled([a, b])", desc: "တစ်ခု fail လည်း ကျန်တာ အားလုံးရဲ့ status ကို ပြန်တယ်။" },
      { code: "const res = await fetch(url); if (!res.ok) throw ...", desc: "fetch က 404/500 အတွက် error မပစ်ဘူး။ `res.ok` ကို ကိုယ်တိုင် စစ်ရတယ်။" }
    ]
  },
  {
    title: "Animation",
    items: [
      { code: "transition: transform 0.3s ease;", desc: "Property တစ်ခု ပြောင်းတဲ့အခါ ကြာချိန် ၀.၃ စက္ကန့် ချောချောပြောင်းတယ်။" },
      { code: "el.classList.toggle(\"big\")", desc: "Class ရှိ/မရှိ လှန်တယ်။ CSS က animation ကို လုပ်တယ်။" },
      { code: "@keyframes spin { from { ... } to { ... } }", desc: "အဆင့်များစွာ ပါတဲ့ animation ကို သတ်မှတ်တယ်။" },
      { code: "animation: spin 1s linear infinite;", desc: "Animation နာမည်၊ ကြာချိန်၊ အရှိန်၊ ထပ်ခါ လုပ်မလား။" },
      { code: "el.animate(keyframes, options)", desc: "WAAPI နဲ့ animation object ဆောက်တယ်။" },
      { code: "anim.pause() / play() / reverse() / cancel()", desc: "WAAPI animation ကို ထိန်းချုပ်တယ်။" },
      { code: "anim.finished.then(fn)", desc: "Animation ပြီးတာကို Promise အနေနဲ့ စောင့်တယ်။" },
      { code: "el.getAnimations()", desc: "Element ပေါ်မှာ run နေတဲ့ animation အားလုံးကို ရတယ်။" }
    ]
  }
];

JSL.glossary = [
  { term: "DOM", desc: "HTML ကို Browser က element အစုအဖွဲ့ (tree) အဖြစ် ဖန်တီးထားတဲ့ ပုံစံ။ JavaScript က ဒီ tree ကို ပြင်တယ်။", code: "document.querySelector()" },
  { term: "Element", desc: "HTML tag တစ်ခုကို ကိုယ်စားပြုတဲ့ object။", code: "<div>, <p>, <button>" },
  { term: "Node", desc: "DOM tree ရဲ့ အစိတ်အပိုင်း တစ်ခု။ Element, text, comment အားလုံး node ဖြစ်တယ်။", code: "element.childNodes" },
  { term: "Selector", desc: "Element ကို ရှာဖို့ သုံးတဲ့ ပုံစံ။ CSS selector နဲ့ တူတယ်။", code: ".card, #id, div > p" },
  { term: "Event", desc: "အသုံးပြုသူ ဒါမှမဟုတ် browser က လုပ်လိုက်တဲ့ အချက် — click, input, submit စသဖြင့်။", code: "addEventListener()" },
  { term: "Listener", desc: "Event ဖြစ်တဲ့အခါ run မယ့် function။", code: "el.addEventListener(\"click\", fn)" },
  { term: "Callback", desc: "နောက်မှ ခေါ်ဖို့ function တစ်ခုကို argument အနေနဲ့ ပေးတာ။", code: "setTimeout(fn, 1000)" },
  { term: "Event Delegation", desc: "Child တစ်ခုချင်းစီမှာ listener မတပ်ဘဲ မိခင် container တစ်ခုတည်းမှာ တပ်ပြီး event.target နဲ့ ခွဲတဲ့ နည်းလမ်း။", code: "event.target.closest()" },
  { term: "Bubbling", desc: "Event က နှိပ်ခံရတဲ့ element ကနေ အပေါ်က မိခင်တွေဆီ တက်သွားတဲ့ အပြုအမူ။", code: "event.stopPropagation()" },
  { term: "State", desc: "App ရဲ့ လက်ရှိ အခြေအနေ။ Variable တွေမှာ သိမ်းထားပြီး ပြောင်းတိုင်း စာမျက်နှာကို ပြန်ပြတယ်။", code: "let count = 0;" },
  { term: "Render", desc: "State ကို ကြည့်ပြီး စာမျက်နှာပေါ်မှာ ပြန်ပြတဲ့ အလုပ်။", code: "function render() { ... }" },
  { term: "JSON", desc: "ဒေတာကို string အနေနဲ့ ဖလှယ်တဲ့ ပုံစံ။ Storage နဲ့ API တွေမှာ သုံးတယ်။", code: "JSON.stringify() / parse()" },
  { term: "API", desc: "App တစ်ခုက တခြား service နဲ့ စကားပြောဖို့ သတ်မှတ်ထားတဲ့ နည်းလမ်း။", code: "fetch(url)" },
  { term: "HTTP Status", desc: "ဆာဗာ ပြန်ပေးတဲ့ ကုဒ်။ 200 = အောင်မြင်၊ 404 = မတွေ့၊ 500 = ဆာဗာ error။", code: "response.status" },
  { term: "Promise", desc: "နောက်မှ ရလဒ် ပြန်ပေးမယ့် အလုပ်ကို ကိုယ်စားပြုတဲ့ object။", code: "new Promise()" },
  { term: "Async", desc: "အလုပ်တစ်ခု ပြီးတဲ့အထိ မစောင့်ဘဲ ဆက်လုပ်နိုင်တဲ့ အပြုအမူ။", code: "async / await" },
  { term: "Await", desc: "Promise ပြီးတဲ့အထိ စောင့်တဲ့ keyword။ `async` function ထဲမှာ သုံးရတယ်။", code: "await fetch(url)" },
  { term: "Transition", desc: "CSS တန်ဖိုး နှစ်ခုကြားကို ချောချောပြောင်းတဲ့ effect။", code: "transition: width 0.3s" },
  { term: "Keyframes", desc: "Animation ရဲ့ အဆင့်တွေကို သတ်မှတ်တဲ့ CSS rule။", code: "@keyframes name { ... }" },
  { term: "WAAPI", desc: "Web Animations API — JavaScript ကနေ animation ကို ဖန်တီး/ထိန်းချုပ်တဲ့ API။", code: "element.animate()" },
  { term: "CRUD", desc: "Create, Read, Update, Delete — ဒေတာ စီမံခန့်ခွဲမှု အခြေခံ လေးခု။", code: "push / render / assign / filter" },
  { term: "Reflow", desc: "Browser က layout ကို ပြန်တွက်တဲ့ အလုပ်။ အများကြီး ဖြစ်ရင် နှေးတယ်။", code: "width, height ပြောင်းတာ" },
  { term: "Repaint", desc: "Browser က အရောင်/အလင်းအမှောင် ကို ပြန်ဆွဲတဲ့ အလုပ်။", code: "color, background ပြောင်းတာ" },
  { term: "Debounce", desc: "အများကြီး ဖြစ်နေတဲ့ event ကို နောက်ဆုံး တစ်ခါပဲ လုပ်အောင် စောင့်တဲ့ နည်းစနစ်။", code: "clearTimeout + setTimeout" },
  { term: "Throttle", desc: "Event ကို အချိန် တစ်ခုအတွင်း တစ်ခါပဲ လုပ်အောင် ကန့်သတ်တဲ့ နည်းစနစ်။", code: "scroll / resize" }
];
