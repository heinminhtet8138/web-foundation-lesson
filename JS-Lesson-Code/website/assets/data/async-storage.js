/* ============================================================
   async-storage.js — အခန်း ၄ (Storage) နှင့် အခန်း ၅ (Async)
   သင်ခန်းစာ ၄ ခု — localStorage, timers, Promise, fetch
   ============================================================ */
window.JSL = window.JSL || {};
JSL.lessons = JSL.lessons || [];

/* ------------------------------------------------------------
   Storage 01 — localStorage
   ------------------------------------------------------------ */
JSL.lessons.push({
  id: "storage-01",
  chapter: "storage",
  order: 1,
  num: "01",
  title: "localStorage — Browser ထဲမှာ ဒေတာ သိမ်းခြင်း",
  subtitle: "စာမျက်နှာ ပိတ်လည်း မပျက်တဲ့ ဒေတာ၊ JSON နဲ့ object သိမ်းနည်းနှင့် sessionStorage နှင့် နှိုင်းယှဉ်ချက်",
  minutes: 14,
  level: "အခြေခံ",
  tags: ["localStorage", "sessionStorage", "JSON", "key-value"],
  fileName: "01-localstorage.html",
  source: "../04-storage/01-localstorage.html",
  intro: [
    "Website တစ်ခုကို refresh လုပ်တိုင်း ဒေတာ ပျောက်သွားရင် အသုံးပြုရ တော်တော် ခက်ပါတယ်။ ဥပမာ — ဈေးဝယ်တောင်းထဲ ထည့်ထားတာ၊ dark mode ရွေးထားတာ၊ ကျောင်းသား စာရင်း ထည့်ထားတာတွေ မပျောက်စေချင်ပါဘူး။",
    "`localStorage` က browser ထဲမှာ key-value အနေနဲ့ ဒေတာ သိမ်းပေးတယ်။ Browser ပိတ်လိုက်လည်း ဒေတာ ကျန်နေတယ်။ ဒါပေမယ့် တန်ဖိုးက string ပဲ သိမ်းနိုင်တာမို့ object နဲ့ array တွေကို `JSON.stringify()` နဲ့ အရင် ပြောင်းရပါတယ်။"
  ],
  goals: [
    "`setItem`, `getItem`, `removeItem`, `clear` တို့ရဲ့ တာဝန်ကို ခွဲခြားသိမယ်။",
    "Object နဲ့ array ကို `JSON.stringify()` / `JSON.parse()` နဲ့ သိမ်း/ဖတ် နိုင်မယ်။",
    "မရှိတဲ့ key အတွက် fallback ပြန်ပေးတဲ့ helper function ရေးနိုင်မယ်။",
    "`localStorage` နဲ့ `sessionStorage` ဘယ်အခါ သုံးမလဲ ရွေးနိုင်မယ်။"
  ],
  diagram: {
    type: "kv",
    title: "localStorage က key — value အတွဲတွေ သိမ်းတယ်",
    items: [
      { k: "\"username\"", v: "\"Aung Aung\"" },
      { k: "\"user\"", v: "{\"name\":\"Su Su\",\"age\":22}" },
      { k: "\"students\"", v: "[{\"id\":1,\"name\":\"Aung\"}, …]" },
      { k: "\"cart\"", v: "[{\"id\":1,\"qty\":2}]" },
      { k: "\"age\"", v: "\"20\"  ← ဂဏန်း သိမ်းလည်း string ဖြစ်နေ" }
    ],
    caption: "key တစ်ခုစီမှာ value တစ်ခုပဲ ရှိတယ်။ ဒါပေမယ့် value က JSON string ဖြစ်နိုင်တာမို့ object/array တစ်ခုလုံးကို သိမ်းထားနိုင်တယ်။"
  },
  sections: [
    {
      h: "အခြေခံ ၄ မျိုး — သိမ်း၊ ဖတ်၊ ဖျက်၊ ရှင်း",
      p: "`localStorage` မှာ အသုံးအများဆုံး method လေးခု ရှိတယ်။ `setItem(key, value)` က သိမ်း၊ `getItem(key)` က ဖတ်၊ `removeItem(key)` က key တစ်ခုကို ဖျက်၊ `clear()` က site တစ်ခုလုံးရဲ့ key အားလုံးကို ဖျက်တယ်။",
      code: `// ၁။ သိမ်း — key နဲ့ value (string)
localStorage.setItem("username", "Aung Aung");

// ၂။ ဖတ် — မရှိရင် null ပြန်တယ်
let name = localStorage.getItem("username");
console.log(name);                       // "Aung Aung"

console.log(localStorage.getItem("no-such-key"));  // null

// ၃။ key တစ်ခုကို ဖျက်
localStorage.removeItem("username");

// ၄။ ဒီ site ရဲ့ key အားလုံးကို ဖျက်
// localStorage.clear();`,
      lang: "js",
      file: "01-localstorage.html",
      lines: [
        { n: 2, t: "`setItem` က key မရှိရင် အသစ်ဆောက်တယ်၊ ရှိပြီးသားဆိုရင် တန်ဖိုး အစားထိုးတယ်။" },
        { n: 5, t: "`getItem` က သိမ်းထားတဲ့ string ကို ပြန်ပေးတယ်။ key မရှိရင် error မပစ်ဘဲ `null` ပြန်တယ်။" },
        { n: "9-10", t: "`removeItem` က ရွေးထားတဲ့ key တစ်ခုပဲ ဖျက်တယ်။ `clear()` နဲ့ မရောပါနဲ့ — `clear()` က အားလုံး ဖျက်တယ်။" }
      ],
      tip: {
        type: "warn",
        title: "clear() ကို သတိထားပါ",
        text: "`localStorage.clear()` က argument မယူဘူး။ `clear(\"username\")` လို့ ရေးလည်း `username` ပဲ မဟုတ်ဘဲ **ဒီ site ရဲ့ key အားလုံး** ပျက်သွားမယ်။ key တစ်ခုပဲ ဖျက်ချင်ရင် `removeItem()` ကို သုံးပါ။"
      }
    },
    {
      h: "Object နှင့် Array သိမ်းခြင်း — JSON",
      p: "`localStorage` က string ပဲ သိမ်းတယ်။ Object ကို တိုက်ရိုက် ထည့်ရင် `[object Object]` ဆိုတဲ့ စာသား ဖြစ်သွားမယ်။ ဒါကြောင့် သိမ်းချင်တဲ့အခါ `JSON.stringify()` နဲ့ string ပြောင်းပြီး ဖတ်တဲ့အခါ `JSON.parse()` နဲ့ ပြန်ဖြည်ရတယ်။",
      code: `let user = {
  name: "Su Su",
  age: 22,
  city: "Yangon"
};

// သိမ်းချင်တဲ့အခါ — object → JSON string
localStorage.setItem("user", JSON.stringify(user));

// ဖတ်တဲ့အခါ — JSON string → object
let savedUser = JSON.parse(localStorage.getItem("user"));

console.log(savedUser.name);   // "Su Su"
console.log(savedUser.age);    // 22  (ဂဏန်း အမှန်အတိုင်း ပြန်ရတယ်)`,
      lang: "js",
      file: "01-localstorage.html",
      lines: [
        { n: "8-9", t: "`JSON.stringify(user)` က object ကို `{\"name\":\"Su Su\",...}` ဆိုတဲ့ string ဖြစ်စေတယ်။" },
        { n: 12, t: "`getItem` က string ပြန်တယ်။ `JSON.parse` က အဲဒီ string ကို object ပြန်ဖြစ်စေတယ်။" },
        { n: "14-15", t: "ပြန်ရလာတဲ့ object ရဲ့ property တွေကို ပုံမှန် object လိုပဲ သုံးနိုင်တယ်။" }
      ],
      tip: {
        type: "key",
        title: "သိမ်းတိုင်း stringify၊ ဖတ်တိုင်း parse",
        text: "Object/array အတွက် `JSON.stringify()` နဲ့ `JSON.parse()` ကို အမြဲ တွဲသုံးပါ။ တစ်ဖက်တစ်လမ်း မေ့ကျန်ခဲ့ရင် ဒေတာ ပျက်တယ် ဒါမှမဟုတ် error ဖြစ်တယ်။"
      }
    },
    {
      h: "မရှိတဲ့ key အတွက် fallback ပေးတဲ့ helper",
      p: "ပထမဆုံး ဝင်လာတဲ့ အသုံးပြုသူမှာ သိမ်းထားတာ မရှိသေးဘူး။ အဲဒီအခါ `null` ပြန်လာမယ်။ `JSON.parse(null)` က `null` ပြန်တာမို့ array လိုချင်ရင် ကိုယ်တိုင် စစ်ဖို့ လိုတယ်။ အောက်က helper နှစ်ခုက ဒီပြဿနာကို ဖြေရှင်းပေးတယ်။",
      code: `function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function loadData(key, fallback) {
  let text = localStorage.getItem(key);

  // မရှိသေးရင် ကိုယ်ပေးထားတဲ့ fallback ပြန်
  if (text === null) {
    return fallback;
  }

  return JSON.parse(text);
}

saveData("cart", [{ id: 1, qty: 2 }]);

let cart = loadData("cart", []);
let emptyCart = loadData("nothing", []);

console.log(cart);        // [{ id: 1, qty: 2 }]
console.log(emptyCart);   // []`,
      lang: "js",
      file: "01-localstorage.html",
      lines: [
        { n: "1-3", t: "`saveData` က stringify လုပ်တာကို တစ်နေရာတည်း စုထားတယ်။ နောက်တိုင်း မရေးရတော့ဘူး။" },
        { n: "5-13", t: "`loadData` က key မရှိရင် `fallback` ပြန်တယ်။ ရှိရင် parse လုပ်ပြီး ပြန်တယ်။" },
        { n: "18-19", t: "လက်တွေ့ သုံးတဲ့အခါ ဒီ helper နှစ်ခုပဲ ခေါ်ရတာမို့ ကုဒ် ရှင်းသွားတယ်။" }
      ]
    },
    {
      h: "localStorage နှင့် sessionStorage",
      p: "နှစ်ခုလုံးက key-value storage ပဲ။ ကွာတာက ဒေတာ ဘယ်လောက်ကြာ ကျန်မလဲ ဆိုတာပါ။ `localStorage` က browser ပိတ်လည်း ကျန်တယ်။ `sessionStorage` က အဲဒီ tab ပိတ်တာနဲ့ ပျက်တယ်။ ဒါကြောင့် အမြဲတမ်း သိမ်းစရာ မလိုတဲ့ ဒေတာ (ဥပမာ ယာယီ form ဖြည့်ထားတာ) အတွက် `sessionStorage` က ပိုသင့်တော်တယ်။",
      diagram: {
        type: "info",
        title: "ဘယ်ဟာ ဘယ်အခါ သုံးမလဲ",
        left: {
          title: "localStorage",
          sub: "ကြာရှည် သိမ်း",
          tone: 6,
          items: ["Browser ပိတ်လည်း ကျန်", "Tab အားလုံး မျှဝေ", "Theme, cart, progress", "အသုံးပြုသူ ဖျက်မှ ပျက်"]
        },
        right: {
          title: "sessionStorage",
          sub: "Tab တစ်ခုအတွင်း",
          tone: 2,
          items: ["Tab ပိတ်တာနဲ့ ပျက်", "Tab တစ်ခုနဲ့ တစ်ခု မမျှ", "ယာယီ form, wizard", "လုံခြုံရေး ပိုနည်းနည်း ကောင်း"]
        }
      },
      code: `// localStorage — ရေရှည်
localStorage.setItem("theme", "dark");

// sessionStorage — ဒီ tab အတွင်းပဲ
sessionStorage.setItem("draft", "မပြီးသေးတဲ့ စာသား");

// API အတူတူပဲ
sessionStorage.getItem("draft");
sessionStorage.removeItem("draft");`,
      lang: "js",
      file: "01-localstorage.html",
      lines: [
        { n: 2, t: "Theme လို ရွေးချယ်မှုကို ရေရှည် သိမ်းချင်တာမို့ `localStorage` သုံးတယ်။" },
        { n: 5, t: "မပြီးသေးတဲ့ စာသားကို tab ပိတ်ရင် ဖျက်ချင်တာမို့ `sessionStorage` သုံးတယ်။" },
        { n: "8-10", t: "Method နာမည်တွေ အတူတူပါပဲ။ ဒါကြောင့် လိုအပ်ရင် နေရာလဲ လွယ်တယ်။" }
      ],
      tip: {
        type: "info",
        title: "ဒေတာ ပမာဏ ကန့်သတ်ချက်",
        text: "Browser အလိုက် ကွာပေမယ့် များသောအားဖြင့် site တစ်ခုကို 5MB လောက် သိမ်းနိုင်တယ်။ ဓာတ်ပုံ၊ ဗီဒီယို ကြီးကြီးတွေ မသိမ်းပါနဲ့။ ဒေတာ များလာရင် `QuotaExceededError` တက်နိုင်တယ်။"
      }
    }
  ],
  pitfalls: [
    { t: "Object ကို တိုက်ရိုက် သိမ်းမိတယ်", d: "`localStorage.setItem(\"user\", user)` ရေးရင် `[object Object]` ဆိုတဲ့ စာသား ဖြစ်သွားမယ်။ `JSON.stringify(user)` ကို သုံးပါ။" },
    { t: "ဂဏန်း ပြန်ဖတ်တဲ့အခါ string ဖြစ်နေတယ်", d: "`localStorage` က string ပဲ သိမ်းတယ်။ `Number(value)` ဒါမှမဟုတ် `JSON.parse` နဲ့ ဂဏန်း ပြန်ပြောင်းပါ။" },
    { t: "JSON.parse(null) က null ပြန်တယ်", d: "ပထမဆုံး ဝင်လာတဲ့အခါ key မရှိသေးလို့ `null` ရနိုင်တယ်။ `if (text === null) return fallback;` လို စစ်ပါ။" },
    { t: "clear() နဲ့ key အားလုံး ပျက်သွားတယ်", d: "`clear()` က argument မယူဘူး။ key တစ်ခုပဲ ဖျက်ချင်ရင် `removeItem(key)` ကို သုံးပါ။" }
  ],
  recap: [
    "`localStorage` က key-value အနေနဲ့ သိမ်းတယ်၊ တန်ဖိုးက string ပဲ။",
    "Object/array အတွက် သိမ်းတိုင်း `JSON.stringify()`၊ ဖတ်တိုင်း `JSON.parse()`။",
    "မရှိတဲ့ key အတွက် fallback ပေးတဲ့ helper ရေးထားရင် ကုဒ် ပိုလုံခြုံတယ်။",
    "ရေရှည် သိမ်းရန် `localStorage`၊ tab တစ်ခုအတွင်းပဲ ဆိုရင် `sessionStorage`။"
  ],
  exercise: {
    title: "ကိုယ်တိုင် စမ်းကြည့်ပါ",
    steps: [
      "နာမည်တစ်ခု ရိုက်ထည့်ပြီး `localStorage` မှာ သိမ်းပါ။ Page ကို refresh လုပ်ပြီး ပြန်ဖတ်ကြည့်ပါ။",
      "ကျောင်းသား ၃ ယောက်ရဲ့ array ကို သိမ်းပြီး ပြန်ဖတ်တဲ့အခါ `length` ကို ပြပါ။",
      "`loadData(\"nothing\", [])` က `[]` ပြန်မပြန် စမ်းပါ။ ပြီးရင် fallback ကို `\"မရှိပါ\"` လို့ ပြောင်းကြည့်ပါ။",
      "DevTools → Application → Local Storage မှာ key တွေ ဘယ်လို ပေါ်နေလဲ ကြည့်ပါ။"
    ],
    hint: "DevTools ကို `F12` (Windows) သို့မဟုတ် `Cmd + Option + I` (Mac) နဲ့ ဖွင့်ပြီး Application tab ကို ရွေးပါ။"
  }
});

/* ------------------------------------------------------------
   Async 01 — setTimeout & setInterval
   ------------------------------------------------------------ */
JSL.lessons.push({
  id: "async-01",
  chapter: "async",
  order: 1,
  num: "01",
  title: "setTimeout နှင့် setInterval — အချိန်နဲ့ အလုပ်လုပ်ခြင်း",
  subtitle: "JavaScript က ဘာကြောင့် မစောင့်ဘဲ ဆက်သွားလဲ၊ timer ကို ဘယ်လို ရပ်မလဲ",
  minutes: 13,
  level: "အခြေခံ",
  tags: ["setTimeout", "setInterval", "clearTimeout", "async"],
  fileName: "01-timers.html",
  source: "../05-async/01-timers.html",
  intro: [
    "JavaScript က အလုပ်တစ်ခုကို အချိန်အတိုင်း အတိအကျ လုပ်စေချင်တဲ့အခါ `setTimeout` နဲ့ `setInterval` ကို သုံးတယ်။ `setTimeout` က တစ်ခါပဲ လုပ်တယ်။ `setInterval` က အချိန်တိုင်း ထပ်ခါ ထပ်ခါ လုပ်တယ်။",
    "အရေးကြီးဆုံး အချက်က — timer က ကုဒ်ကို **မစောင့်စေဘူး**။ `setTimeout(..., 2000)` လို့ ရေးလိုက်တာနဲ့ နောက်စာကြောင်းတွေ ချက်ချင်း ဆက် run တယ်။ ၂ စက္ကန့် ပြည့်မှ callback ကို ပြန်ခေါ်တယ်။"
  ],
  goals: [
    "`setTimeout` က နောက်ကုဒ်ကို ဘာကြောင့် မရပ်စေတာလဲ ရှင်းပြနိုင်မယ်။",
    "`clearTimeout` / `clearInterval` နဲ့ timer ကို ရပ်နိုင်မယ်။",
    "`setInterval` နဲ့ နာရီနှင့် countdown ရေးနိုင်မယ်။",
    "Timer အဟောင်းတွေ စုပုံမနေအောင် ရှင်းနိုင်မယ်။"
  ],
  diagram: {
    type: "timeline",
    title: "setTimeout က စောင့်မနေဘူး — ဖြစ်ပေါ်တဲ့ အစီအစဉ်",
    items: [
      { t: "0ms", title: "show(\"စတယ်\")", sub: "ပထမ စာကြောင်း ချက်ချင်း run", tone: 6 },
      { t: "0ms", title: "setTimeout မှတ်ထားတယ်", sub: "callback ကို 2000ms နောက်မှ ခေါ်ဖို့ တန်းစီ", tone: 3 },
      { t: "0ms", title: "show(\"ဒါက အရင် run\")", sub: "setTimeout ကို မစောင့်ဘဲ ဆက်သွား", tone: 2 },
      { t: "2000ms", title: "callback run", sub: "အခုမှ \"၂ စက္ကန့် နောက်\" ပေါ်လာ", tone: 4 }
    ],
    caption: "Timer က အလုပ်ကို နောက်ဆွဲထားတယ်၊ ဒါပေမယ့် လက်ရှိ ကုဒ်ကို မရပ်ဘူး။ ဒါကို asynchronous လို့ ခေါ်တယ်။"
  },
  sections: [
    {
      h: "setTimeout — တစ်ခါပဲ လုပ်ခြင်း",
      p: "`setTimeout(callback, ms)` မှာ ပထမ argument က လုပ်ချင်တဲ့ function၊ ဒုတိယ argument က ဘယ်လောက် မီလီစက္ကန့် စောင့်မလဲ။ ၁ စက္ကန့် = 1000 မီလီစက္ကန့်။",
      code: `console.log("စတယ်");

setTimeout(() => {
  console.log("၂ စက္ကန့် နောက်");
}, 2000);

console.log("ဒါက setTimeout မတိုင်ခင် run");

// Console အစီအစဉ်:
// စတယ်
// ဒါက setTimeout မတိုင်ခင် run
// ၂ စက္ကန့် နောက်`,
      lang: "js",
      file: "01-timers.html",
      lines: [
        { n: 1, t: "ပထမ စာကြောင်း ချက်ချင်း run တယ်။" },
        { n: "3-5", t: "`setTimeout` က callback ကို 2000ms နောက်မှ ခေါ်ဖို့ မှတ်ထားတယ်။ ဒါပေမယ့် ဒီနေရာမှာ မရပ်ဘူး။" },
        { n: 7, t: "နောက်စာကြောင်းက `setTimeout` မပြီးခင် ချက်ချင်း run တယ်။" }
      ],
      tip: {
        type: "key",
        title: "Function ကို ပေးပါ၊ ခေါ်မပစ်ပါနဲ့",
        text: "`setTimeout(show(), 1000)` လို့ ရေးရင် `show()` က ချက်ချင်း run သွားပြီး `setTimeout` ကို ဘာမှ ပြန်မပေးဘူး။ `setTimeout(show, 1000)` ဒါမှမဟုတ် `setTimeout(() => show(), 1000)` လို့ ရေးပါ။"
      }
    },
    {
      h: "Timer ကို ရပ်ခြင်း — clearTimeout",
      p: "`setTimeout` က timer id တစ်ခု ပြန်ပေးတယ်။ အဲဒီ id ကို သိမ်းထားပြီး မလိုချင်တော့ရင် `clearTimeout(id)` နဲ့ ရပ်နိုင်တယ်။ ဥပမာ — အသုံးပြုသူက \"မလုပ်တော့\" နှိပ်လိုက်တဲ့အခါ။",
      code: `let timerId = setTimeout(() => {
  console.log("ဒါက မပေါ်ရဘူး");
}, 5000);

// ၅ စက္ကန့် မတိုင်ခင် ရပ်လိုက်တယ်
clearTimeout(timerId);
console.log("timer ရပ်ပြီး");`,
      lang: "js",
      file: "01-timers.html",
      lines: [
        { n: "1-3", t: "`timerId` မှာ timer ရဲ့ id ကို သိမ်းထားတယ်။" },
        { n: 6, t: "`clearTimeout(timerId)` က အဲဒီ timer ကို ပယ်ဖျက်တယ်။ callback မခေါ်တော့ဘူး။" }
      ],
      tip: {
        type: "info",
        title: "id ကို သိမ်းထားဖို့ လိုတယ်",
        text: "`let id = setTimeout(...)` လို့ id ကို မသိမ်းထားရင် နောက်မှ ရပ်ချင်တဲ့အခါ ဘယ် timer ကို ရပ်ရမလဲ မသိတော့ဘူး။"
      }
    },
    {
      h: "setInterval — ထပ်ခါ ထပ်ခါ လုပ်ခြင်း",
      p: "`setInterval(callback, ms)` က `ms` တိုင်း callback ကို ထပ်ခေါ်တယ်။ နာရီ၊ countdown၊ polling စတဲ့ နေရာမှာ သုံးတယ်။ ရပ်ချင်ရင် `clearInterval(id)` ကို သုံးရတယ်။",
      code: `let seconds = 10;
let countdownEl = document.getElementById("countdown");
let intervalId = null;

function tick() {
  seconds--;
  countdownEl.textContent = seconds;

  if (seconds <= 0) {
    clearInterval(intervalId);   // ကုန်ရင် ရပ်
    console.log("အချိန် ကုန်ပြီ");
  }
}

intervalId = setInterval(tick, 1000);`,
      lang: "js",
      file: "01-timers.html",
      lines: [
        { n: "5-7", t: "တစ်စက္ကန့်တိုင်း `tick` ကို ခေါ်တယ်။ `seconds` ကို ၁ လျှော့ပြီး စာမျက်နှာမှာ ပြတယ်။" },
        { n: "9-12", t: "၀ ရောက်ရင် `clearInterval` နဲ့ ရပ်တယ်။ ဒါမှ timer က ဆက်မလုပ်တော့ဘူး။" },
        { n: 15, t: "`setInterval` က id ပြန်တယ်။ အဲဒီ id ကို ရပ်ဖို့ သိမ်းထားရတယ်။" }
      ],
      tip: {
        type: "warn",
        title: "အဟောင်း မရပ်ဘဲ အသစ် မစပါနဲ့",
        text: "Button နှိပ်တိုင်း `setInterval` အသစ် ဆောက်ရင် timer တွေ တစ်ခုထက်ပိုပြီး တစ်ချိန်တည်း run နေမယ်။ အသစ် မစခင် `if (intervalId !== null) clearInterval(intervalId);` လို စစ်ပါ။"
      }
    },
    {
      h: "နာရီနှင့် လက်တွေ့ toast",
      p: "နာရီအတွက် `setInterval(updateClock, 1000)` ကို သုံးတယ်။ Toast message အတွက်တော့ `setTimeout` နဲ့ element ကို ပြန်ဖျက်တယ်။ ဒီနှစ်ခုက timer ရဲ့ အသုံးအများဆုံး ပုံစံတွေပါ။",
      code: `function updateClock() {
  let now = new Date();

  let h = String(now.getHours()).padStart(2, "0");
  let m = String(now.getMinutes()).padStart(2, "0");
  let s = String(now.getSeconds()).padStart(2, "0");

  clockEl.textContent = h + ":" + m + ":" + s;
}

updateClock();                          // ချက်ချင်း တစ်ခါ
let clockId = setInterval(updateClock, 1000);

// Toast — ခဏပြတဲ့ စာသား
function showToast(text, ms = 2000) {
  let toast = document.createElement("div");
  toast.textContent = text;
  document.body.append(toast);

  setTimeout(() => {
    toast.remove();                     // ပြန်ဖျက်
  }, ms);
}

showToast("ဒီစာသားက ၂ စက္ကန့်နောက် ပျောက်မယ်");`,
      lang: "js",
      file: "01-timers.html",
      lines: [
        { n: "1-8", t: "`padStart(2, \"0\")` က ၉ ကို `09` ဖြစ်စေတယ်။ နာရီကို `09:05:03` ပုံစံ ရစေတယ်။" },
        { n: "10-11", t: "စာမျက်နှာ ဖွင့်တာနဲ့ တစ်ခါ ခေါ်ပြီး ပြီးမှ interval စတယ်။ ဒါမှ ၁ စက္ကန့် စောင့်စရာ မလိုဘူး။" },
        { n: "16-25", t: "Toast ကို ဆောက်ပြီး `setTimeout` နဲ့ အချိန်ပြည့်ရင် `remove()` လုပ်တယ်။ မဖျက်ရင် element တွေ စုပုံလာမယ်။" }
      ]
    }
  ],
  pitfalls: [
    { t: "Callback ကို ချက်ချင်း ခေါ်မိတယ်", d: "`setTimeout(show(), 1000)` မဟုတ်၊ `setTimeout(show, 1000)` ဒါမှမဟုတ် `setTimeout(() => show(), 1000)` ရေးပါ။" },
    { t: "Interval ကို မရပ်မိတယ်", d: "`clearInterval` မခေါ်ရင် timer က စာမျက်နှာ ပိတ်တဲ့အထိ ဆက် run နေမယ်။ id ကို သိမ်းပြီး ရပ်ပါ။" },
    { t: "setTimeout က အတိအကျ ၂ စက္ကန့် မဟုတ်ဘူး", d: "အခြား ကုဒ်တွေ အလုပ်များနေရင် callback က နည်းနည်း နောက်ကျနိုင်တယ်။ `setTimeout` က အနည်းဆုံး စောင့်ချိန်သာ အာမခံတယ်။" },
    { t: "Interval ထဲမှာ state အဟောင်း သုံးမိတယ်", d: "Callback က run တဲ့အချိန်မှာ လက်ရှိ တန်ဖိုးကို ဖတ်ပါ။ မိတ္တူ သိမ်းထားတဲ့ တန်ဖိုး မဟုတ်ဘဲ လိုအပ်ရင် object/property ကို သုံးပါ။" }
  ],
  recap: [
    "`setTimeout` က တစ်ခါ၊ `setInterval` က ထပ်ခါ လုပ်တယ်။",
    "Timer က ကုဒ်ကို မရပ်စေဘူး — နောက်စာကြောင်းတွေ ဆက် run တယ်။",
    "ရပ်ချင်ရင် id ကို သိမ်းထားပြီး `clearTimeout` / `clearInterval` ခေါ်ပါ။",
    "Toast လို element တွေကို အချိန်ပြည့်ရင် ပြန်ဖျက်ပါ။"
  ],
  exercise: {
    title: "ကိုယ်တိုင် စမ်းကြည့်ပါ",
    steps: [
      "`setTimeout` ကို ၃ စက္ကန့်ပြောင်းပြီး Console မှာ အစီအစဉ် ဘယ်လို ပြောင်းလဲလဲ ကြည့်ပါ။",
      "Countdown ကို ၁၀ ကနေ စပြီး ၀ ရောက်ရင် \"ပြီးပြီ\" လို့ ပြပါ။",
      "\"စတင်\" နဲ့ \"ရပ်\" button နှစ်ခု ဆောက်ပြီး interval ကို ရပ်/ပြန်စ လုပ်ပါ။",
      "Toast တစ်ခု ဆောက်ပြီး ၃ စက္ကန့်နောက် အလိုအလျောက် ပျောက်အောင် လုပ်ပါ။"
    ],
    hint: "Button နှိပ်တိုင်း interval အသစ် မဆောက်ခင် အဟောင်းကို `clearInterval` လုပ်ဖို့ မမေ့ပါနဲ့။"
  }
});

/* ------------------------------------------------------------
   Async 02 — Promise & async/await
   ------------------------------------------------------------ */
JSL.lessons.push({
  id: "async-02",
  chapter: "async",
  order: 2,
  num: "02",
  title: "Promise နှင့် async/await",
  subtitle: "အောင်မြင်/မအောင်မြင် ဖြစ်နိုင်တဲ့ အလုပ်တွေကို စနစ်တကျ စောင့်ခြင်း",
  minutes: 18,
  level: "အလယ်အလတ်",
  tags: ["Promise", "async", "await", "try/catch", "Promise.all"],
  fileName: "02-promise-async.html",
  source: "../05-async/02-promise-async.html",
  intro: [
    "ဆာဗာကနေ ဒေတာ ယူတာ၊ ဖိုင်ဖတ်တာ၊ timer စောင့်တာ — ဒီအလုပ်တွေက အချိန်ယူတယ်။ ပြီးတဲ့အခါ အောင်မြင်နိုင်တယ်၊ ဒါမှမဟုတ် မအောင်မြင်နိုင်ဘူး။ ဒီလို \"နောက်မှ ရလဒ် ပြန်ပေးမယ့်\" အလုပ်ကို ကိုယ်စားပြုတာက **Promise** ပါ။",
    "Promise ကို `.then()` / `.catch()` နဲ့ ကိုင်တွယ်နိုင်တယ်။ ပိုဖတ်ကောင်းအောင် `async` function ထဲမှာ `await` သုံးပြီး ရိုးရိုး ကုဒ်လို ရေးနိုင်တယ်။ ဒီသင်ခန်းစာမှာ အဲဒီနှစ်မျိုးလုံးကို လေ့လာပါမယ်။"
  ],
  goals: [
    "Promise ရဲ့ အခြေအနေ ၃ မျိုး (pending, fulfilled, rejected) ကို နားလည်မယ်။",
    "`then` / `catch` / `finally` ကို သုံးနိုင်မယ်။",
    "`async` / `await` နဲ့ `try/catch` ရေးနိုင်မယ်။",
    "`Promise.all` နဲ့ `Promise.allSettled` ကို ခွဲခြားသုံးနိုင်မယ်။"
  ],
  diagram: {
    type: "branch",
    title: "Promise ရဲ့ အခြေအနေ",
    condition: "Promise တစ်ခု စတယ်",
    conditionSub: "အလုပ် လုပ်နေဆဲ (pending)",
    yes: { t: "Fulfilled", sub: "resolve(value) ခေါ်တယ် → .then() က run" },
    no: { t: "Rejected", sub: "reject(error) ခေါ်တယ် → .catch() က run" },
    end: "finally() က အောင်မြင်လည်း ခေါ်၊ မအောင်မြင်လည်း ခေါ်",
    caption: "Promise က အခြေအနေ တစ်ခုပဲ ရောက်နိုင်တယ်။ တစ်ခါ fulfilled ဖြစ်ရင် ပြန် rejected မဖြစ်တော့ဘူး။"
  },
  sections: [
    {
      h: "Promise ဆောက်ခြင်း",
      p: "`new Promise((resolve, reject) => { ... })` မှာ အလုပ် ပြီးရင် `resolve(value)` ကို ခေါ်တယ်။ မအောင်မြင်ရင် `reject(error)` ကို ခေါ်တယ်။ အောက်က ဥပမာမှာ ၁ စက္ကန့် စောင့်ပြီး ဒေတာ ပြန်ပေးတယ်။",
      code: `function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let ok = true;

      if (ok) {
        resolve("ဒေတာ ရပြီ");        // အောင်မြင်
      } else {
        reject("ဒေတာ မရဘူး");      // အမှား
      }
    }, 1000);
  });
}`,
      lang: "js",
      file: "02-promise-async.html",
      lines: [
        { n: "1-2", t: "`getData` က Promise တစ်ခု ပြန်တယ်။ Function က ချက်ချင်း ပြန်ပေမယ့် ရလဒ်က ၁ စက္ကန့်နောက်မှ ရမယ်။" },
        { n: "6-10", t: "အောင်မြင်ရင် `resolve`၊ မအောင်မြင်ရင် `reject`။ တစ်ခုပဲ ခေါ်ရတယ်။" }
      ],
      tip: {
        type: "key",
        title: "resolve / reject က function နှစ်ခု",
        text: "Promise ဆောက်တဲ့ callback က `resolve` နဲ့ `reject` ကို parameter အနေနဲ့ လက်ခံတယ်။ သူတို့ကို ခေါ်တဲ့အခါမှ Promise က အခြေအနေ ပြောင်းတယ်။"
      }
    },
    {
      h: "then / catch / finally",
      p: "Promise ရဲ့ ရလဒ်ကို `.then()` နဲ့ ယူတယ်။ အမှားကို `.catch()` က ဖမ်းတယ်။ `.finally()` က အောင်မြင်လည်း ခေါ်၊ မအောင်မြင်လည်း ခေါ်တာမို့ loading ပိတ်တာလို အလုပ်အတွက် သုံးတယ်။",
      code: `getData()
  .then((data) => {
    console.log("then:", data);
  })
  .catch((error) => {
    console.log("catch:", error);
  })
  .finally(() => {
    console.log("finally: အမြဲ run");
  });`,
      lang: "js",
      file: "02-promise-async.html",
      lines: [
        { n: "2-4", t: "`resolve` လုပ်လိုက်တဲ့ တန်ဖိုးက `data` ဆိုတဲ့ parameter ထဲ ဝင်လာတယ်။" },
        { n: "5-7", t: "`reject` ဖြစ်ရင် ဒီကို ရောက်တယ်။ error ကို ဒီနေရာမှာ ကိုင်တွယ်နိုင်တယ်။" },
        { n: "8-10", t: "ဘယ်လို ပြီးဆုံးလည် မဟုတ်ဘဲ `finally` က အမြဲ run တယ်။" }
      ],
      tip: {
        type: "info",
        title: "catch ကို မမေ့ပါနဲ့",
        text: "`catch` မပါရင် Promise ကျရင် unhandled rejection ဖြစ်ပြီး Console မှာ error ပြနေမယ်။ အသုံးပြုသူကို အသိပေးချင်ရင်လည်း `catch` ထဲမှာ ရေးပါ။"
      }
    },
    {
      h: "async / await — ပိုဖတ်ကောင်းတဲ့ ပုံစံ",
      p: "`async` function ထဲမှာ `await` က Promise ပြီးတဲ့အထိ စောင့်တယ်။ ဒါပေမယ့် ဒီ function ကို ခေါ်တဲ့ အပြင်ကုဒ်ကို မရပ်ဘူး။ အမှားကို ဖမ်းချင်ရင် `try/catch` ထဲ ထည့်ရတယ်။",
      code: `async function run() {
  try {
    console.log("စောင့်နေတယ်...");

    let data = await getData();   // ဒီမှာ စောင့်တယ်

    console.log("await:", data);
  } catch (error) {
    console.log("error:", error);
  }
}

run();
console.log("run() ခေါ်ပြီးနောက် — ဒါက အရင် ပေါ်တယ်");`,
      lang: "js",
      file: "02-promise-async.html",
      lines: [
        { n: 1, t: "`async` ပါမှ function ထဲမှာ `await` သုံးလို့ ရတယ်။" },
        { n: 5, t: "`await getData()` က Promise ပြီးတဲ့အထိ ဒီ function ကို ရပ်ထားတယ်။ ဒါပေမယ့် browser တစ်ခုလုံးကို မရပ်ဘူး။" },
        { n: "7-9", t: "`reject` ဖြစ်ရင် `catch` က ဖမ်းတယ်။ `try/catch` က async error အတွက် အဓိက နည်းလမ်းပါ။" },
        { n: 13, t: "`run()` က Promise ပြန်တယ်။ သူ့ကို မစောင့်ဘဲ နောက်စာကြောင်း ဆက် run တယ်။" }
      ]
    },
    {
      h: "Promise.all နှင့် Promise.allSettled",
      p: "အလုပ် သုံးခုကို တစ်ချိန်တည်း လုပ်ပြီး အားလုံး ပြီးမှ ဆက်ချင်ရင် `Promise.all` ကို သုံးတယ်။ တစ်ခု ကျရင် `all` က ချက်ချင်း reject ဖြစ်တယ်။ တစ်ခု ကျလည်း ကျန်တာ အားလုံးရဲ့ ရလဒ် လိုချင်ရင် `Promise.allSettled` ကို သုံးတယ်။",
      code: `function delay(ms, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

async function runAll() {
  let results = await Promise.all([
    delay(500, "A"),
    delay(300, "B"),
    delay(100, "C")
  ]);

  console.log(results);   // ["A", "B", "C"]
}

async function runSettled() {
  let results = await Promise.allSettled([
    Promise.resolve("ok"),
    Promise.reject("fail"),
    Promise.resolve("ok2")
  ]);

  results.forEach((r) => {
    console.log(r.status, r.value ?? r.reason);
  });
}`,
      lang: "js",
      file: "02-promise-async.html",
      lines: [
        { n: "6-12", t: "`Promise.all` က အလုပ်သုံးခုကို တစ်ချိန်တည်း စပြီး အားလုံး ပြီးတဲ့အထိ စောင့်တယ်။ အစီအစဉ်က ထည့်ထားတဲ့ အစီအစဉ်အတိုင်း ပြန်လာတယ်။" },
        { n: "16-24", t: "`allSettled` က တစ်ခု fail ဖြစ်လည်း ကျန်တာ အားလုံးရဲ့ status ကို ပြန်ပေးတယ်။" },
        { n: 23, t: "`r.value ?? r.reason` က အောင်မြင်ရင် value၊ မအောင်မြင်ရင် reason ကို ယူတယ်။" }
      ],
      tip: {
        type: "info",
        title: "ဘယ်ဟာ သုံးမလဲ",
        text: "အားလုံး အောင်မြင်မှ ဆက်လုပ်ချင်ရင် `Promise.all`။ တစ်ခု ကျလည်း ကျန်တာတွေ ပြချင်ရင် `Promise.allSettled`။"
      }
    }
  ],
  pitfalls: [
    { t: "await ကို async မဟုတ်တဲ့ function ထဲ သုံးတယ်", d: "`await` ကို `async function` ထဲမှာပဲ သုံးရတယ် (module ထဲမှာ top-level သုံးလို့ ရတယ်)။ Function ကို `async` ဖြစ်အောင် ပြင်ပါ။" },
    { t: "catch မထည့်ထားဘူး", d: "`reject` ဖြစ်ရင် error ကို မဖမ်းမိဘဲ unhandled rejection ဖြစ်တယ်။ `try/catch` ဒါမှမဟုတ် `.catch()` ထည့်ပါ။" },
    { t: "Promise.all မှာ တစ်ခု ကျရင် အားလုံး ရပ်တယ်", d: "`all` က fail-fast ပါ။ တစ်ခု reject ဖြစ်တာနဲ့ ချက်ချင်း catch ကို ရောက်တယ်။ ကျန်တာတွေ လိုချင်ရင် `allSettled` သုံးပါ။" },
    { t: "async function က Promise ပြန်တာကို မေ့နေတယ်", d: "`async` function က ရလဒ်ကို Promise အနေနဲ့ ပြန်တယ်။ သူ့ရလဒ်ကို ချက်ချင်း သုံးချင်ရင် `await` ဒါမှမဟုတ် `.then()` လိုတယ်။" }
  ],
  recap: [
    "Promise က pending → fulfilled / rejected ဆိုတဲ့ အခြေအနေ ရှိတယ်။",
    "`then` က အောင်မြင်တဲ့ ရလဒ်၊ `catch` က အမှား၊ `finally` က အမြဲ run။",
    "`async` / `await` က Promise ကို ရိုးရိုး ကုဒ်လို ဖတ်နိုင်အောင် ကူညီတယ်။",
    "`Promise.all` က အားလုံး အောင်မြင်မှ၊ `allSettled` က တစ်ခု ကျလည်း ရလဒ် အားလုံး ပေးတယ်။"
  ],
  exercise: {
    title: "ကိုယ်တိုင် စမ်းကြည့်ပါ",
    steps: [
      "`getData` ထဲက `ok` ကို `false` ပြောင်းပြီး `catch` က ဘယ်လို ဖမ်းလဲ ကြည့်ပါ။",
      "`delay` သုံးခုကို `Promise.all` နဲ့ စပြီး ရလဒ် အစီအစဉ် စစ်ပါ။",
      "တစ်ခုကို `reject` ပြောင်းပြီး `allSettled` ရဲ့ status တွေ ကြည့်ပါ။",
      "`checkAge(age)` ကို ကိုယ်တိုင် ရေးပြီး ၁၈ နှစ် အောက်ဆိုရင် error ပြပါ။"
    ],
    hint: "`console.log` ကို callback တစ်ခုစီမှာ ထည့်ပြီး ဘယ်အစီအစဉ် ပေါ်လဲ ကြည့်ရင် async အလုပ်လုပ်ပုံ ပိုရှင်းလာမယ်။"
  }
});

/* ------------------------------------------------------------
   Async 03 — fetch
   ------------------------------------------------------------ */
JSL.lessons.push({
  id: "async-03",
  chapter: "async",
  order: 3,
  num: "03",
  title: "fetch — ဆာဗာကနေ ဒေတာ ယူခြင်း",
  subtitle: "API ခေါ်ခြင်း၊ response.ok စစ်ခြင်း၊ POST ပို့ခြင်းနှင့် loading/error ကို မှန်ကန်စွာ ပြခြင်း",
  minutes: 16,
  level: "အလယ်အလတ်",
  tags: ["fetch", "API", "JSON", "async/await", "HTTP"],
  fileName: "03-fetch.html",
  source: "../05-async/03-fetch.html",
  intro: [
    "`fetch()` က browser ကနေ ဆာဗာကို ခေါ်ပြီး ဒေတာ ယူတဲ့ နည်းလမ်းပါ။ ဥပမာ — အသုံးပြုသူ စာရင်း၊ သတင်း၊ ရာသီဥတု စတဲ့ ဒေတာတွေကို API ကနေ ယူနိုင်တယ်။",
    "`fetch` က Promise ပြန်တယ်။ ဒါကြောင့် `await` နဲ့ စောင့်နိုင်တယ်။ ဒါပေမယ့် 404/500 ဖြစ်ရင် `fetch` က error မပစ်ဘူး။ `response.ok` ကို ကိုယ်တိုင် စစ်ရမယ်။ ဒါက အများဆုံး လွဲတတ်တဲ့ နေရာပါ။"
  ],
  goals: [
    "`fetch()` နဲ့ GET request လုပ်နိုင်မယ်။",
    "`response.ok` နဲ့ HTTP error ကို စစ်နိုင်မယ်။",
    "`response.json()` ကို `await` လုပ်ရတဲ့ အကြောင်း နားလည်မယ်။",
    "POST request နဲ့ ဒေတာ ပို့နိုင်မယ်။",
    "loading / success / error သုံးမျိုး ပြပုံကို သိမယ်။"
  ],
  diagram: {
    type: "sequence",
    title: "fetch ခေါ်တဲ့အခါ ဖြစ်ပေါ်တဲ့ အစီအစဉ်",
    actors: [
      { t: "Browser", sub: "ကျွန်တော်တို့ရဲ့ ကုဒ်", tone: 6 },
      { t: "Server / API", sub: "ဒေတာ သိမ်းရာ", tone: 2 }
    ],
    steps: [
      { t: "fetch(API) — GET request ပို့", sub: "Promise တစ်ခု ချက်ချင်း ပြန်တယ်", from: "left" },
      { t: "ဆာဗာ ကိုင်တွယ်ပြီး ပြန်ပို့", sub: "status 200 / 404 / 500", from: "right" },
      { t: "response.ok စစ်", sub: "false ဆိုရင် throw new Error", from: "left" },
      { t: "await response.json()", sub: "body ကို object/array ပြောင်း", from: "left" },
      { t: "ရလဒ်ကို စာမျက်နှာမှာ ပြ", sub: "loading ကို ပိတ်၊ error ရှိရင် ပြ", from: "left" }
    ],
    caption: "fetch က request ပို့ပြီး Promise ပြန်တယ်။ ဆာဗာ ပြန်လာတဲ့ status ကို စစ်ပြီးမှ JSON ကို ဖတ်ရတယ်။"
  },
  sections: [
    {
      h: "fetch အခြေခံ — GET နှင့် response.ok",
      p: "အရိုးရှင်းဆုံး အသုံးပြုပုံက `let response = await fetch(url);` ပါ။ ပြီးရင် `response.ok` ကို စစ်တယ်။ `ok` က status 200–299 အတွင်း ဆိုရင် `true` ဖြစ်တယ်။ ပြီးမှ `await response.json()` နဲ့ body ကို ဖတ်တယ်။",
      code: `const API = "https://jsonplaceholder.typicode.com/users";

async function loadUsers() {
  try {
    let response = await fetch(API);

    // ⚠️ 404 / 500 ဆိုရင် fetch က error မပစ်ဘူး
    if (!response.ok) {
      throw new Error("HTTP " + response.status);
    }

    let users = await response.json();
    console.log(users.length);
  } catch (error) {
    console.log("error:", error.message);
  }
}`,
      lang: "js",
      file: "03-fetch.html",
      lines: [
        { n: 5, t: "`fetch` က response object ကို ပြန်တယ်။ Network မရရင် ဒီနေရာမှာ catch ကို ရောက်တယ်။" },
        { n: "8-10", t: "HTTP 404/500 ကို `response.ok` နဲ့ စစ်ပြီး ကိုယ်တိုင် error ပစ်တယ်။" },
        { n: 12, t: "`response.json()` ကလည်း Promise ပြန်တာမို့ `await` လိုတယ်။" }
      ],
      tip: {
        type: "warn",
        title: "fetch က 404 အတွက် error မပစ်ဘူး",
        text: "ဆာဗာ မတွေ့ရင် (404) ဒါမှမဟုတ် ဆာဗာ error (500) ဖြစ်ရင် `fetch` က resolve ဖြစ်နေတုန်းပဲ။ `response.ok` ကို မစစ်ရင် ဒေတာ မရှိဘဲ ဆက်လုပ်မိမယ်။"
      }
    },
    {
      h: "loading / success / error — အမြဲ လုပ်သင့်တဲ့ အစီအစဉ်",
      p: "အသုံးပြုသူက button နှိပ်လိုက်ရင် ဘာမှ မပြတဲ့အချိန် ရှိနိုင်တယ်။ ဒါကြောင့် အရင် loading ပြ၊ ပြီးမှ ရလဒ် ဒါမှမဟုတ် error ပြဖို့ လိုတယ်။ အောက်က အစီအစဉ်ကို အမြဲ လိုက်နာပါ။",
      code: `async function loadUsers() {
  status.textContent = "ဖတ်နေတယ်...";
  list.innerHTML = "";

  try {
    let response = await fetch(API);

    if (!response.ok) {
      throw new Error("HTTP " + response.status);
    }

    let users = await response.json();

    status.textContent = "✅ အသုံးပြုသူ " + users.length + " ယောက်";

    users.forEach((user) => {
      let card = document.createElement("div");
      card.textContent = user.name + " — " + user.email;
      list.append(card);
    });
  } catch (error) {
    status.textContent = "❌ " + error.message;
  }
}`,
      lang: "js",
      file: "03-fetch.html",
      lines: [
        { n: "2-3", t: "စတာနဲ့ loading ပြပြီး ရလဒ် အဟောင်းကို ရှင်းတယ်။" },
        { n: "6-14", t: "fetch → ok စစ် → json ဖတ်။ ဒီအစီအစဉ်ကို မပြောင်းပါနဲ့။" },
        { n: "16-21", t: "ရလဒ်ကို element အသစ်တွေ ဆောက်ပြီး ပြတယ်။ `textContent` ကို သုံးတာက ပိုလုံခြုံတယ်။" },
        { n: "22-24", t: "ဘယ်အမှားမဆို catch မှာ အသုံးပြုသူ မြင်နိုင်တဲ့ စာသား ပြပါ။" }
      ]
    },
    {
      h: "POST — ဒေတာ ပို့ခြင်း",
      p: "ဒေတာ ယူတာက GET။ ဒေတာ အသစ် ထည့်တာက POST။ `fetch` ရဲ့ ဒုတိယ argument မှာ `method`, `headers`, `body` ကို သတ်မှတ်ရတယ်။ Body က JSON ဖြစ်ရင် `JSON.stringify()` နဲ့ ပြောင်းပြီး `Content-Type` ကို ကြေညာရတယ်။",
      code: `async function createUser(user) {
  try {
    let response = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });

    if (!response.ok) {
      throw new Error("HTTP " + response.status);
    }

    let data = await response.json();
    console.log("ပို့ပြီး id:", data.id);
  } catch (error) {
    console.log("POST error:", error.message);
  }
}

createUser({ name: "Aung Aung", email: "aung@example.com" });`,
      lang: "js",
      file: "03-fetch.html",
      lines: [
        { n: 3, t: "`method: \"POST\"` က ဒေတာ ပို့တဲ့ request ဖြစ်စေတယ်။" },
        { n: "4-6", t: "ဆာဗာကို body က JSON ဖြစ်ကြောင်း ပြောတယ်။ ဒါမပါရင် ဆာဗာက မှားဖတ်နိုင်တယ်။" },
        { n: 7, t: "Object ကို `JSON.stringify()` နဲ့ string ပြောင်းပြီးမှ ပို့တယ်။" },
        { n: 14, t: "ဆာဗာ ပြန်ပေးတဲ့ ရလဒ်ကို ဖတ်တယ်။ POST အားလုံး response body ပြန်တာ မဟုတ်ပေမယ့် ဒီ API က ပြန်တယ်။" }
      ]
    },
    {
      h: "Query string နှင့် encodeURIComponent",
      p: "ရှာဖွေချင်တဲ့ စာသားကို URL ရဲ့ အဆုံးမှာ `?name=...` အနေနဲ့ ထည့်နိုင်တယ်။ စာသားထဲမှာ နေရာလွတ်၊ `&`, `?` စတဲ့ သင်္ကေတ ပါရင် URL ပျက်နိုင်တာမို့ `encodeURIComponent()` နဲ့ ပြောင်းရတယ်။",
      code: `async function searchUsers(keyword) {
  let url = API + "?name=" + encodeURIComponent(keyword);

  let response = await fetch(url);

  if (!response.ok) {
    throw new Error("HTTP " + response.status);
  }

  let users = await response.json();
  console.log("ရှာတွေ့:", users.length);
}`,
      lang: "js",
      file: "03-fetch.html",
      lines: [
        { n: 2, t: "`encodeURIComponent` က \"Aung Aung\" ကို \"Aung%20Aung\" ဖြစ်စေတယ်။ URL ထဲ လုံခြုံစွာ ထည့်နိုင်တယ်။" },
        { n: "4-8", t: "GET request အတွက် `ok` စစ်တာကို မမေ့ပါနဲ့။" }
      ],
      tip: {
        type: "info",
        title: "fetch ကို Live Server နဲ့ ဖွင့်ပါ",
        text: "`file://` နဲ့ ဖွင့်ရင် CORS ဒါမှမဟုတ် origin ပြဿနာ တက်နိုင်တယ်။ VS Code Live Server ဒါမှမဟုတ် `python3 -m http.server` နဲ့ ဖွင့်ပါ။"
      }
    }
  ],
  pitfalls: [
    { t: "404 ကို error မဟုတ်ဘဲ ဆက်လုပ်မိတယ်", d: "`fetch` က HTTP error အတွက် reject မလုပ်ဘူး။ `if (!response.ok) throw new Error(...)` ကို ထည့်ပါ။" },
    { t: "response.json() ကို await မလုပ်ဘူး", d: "`response.json()` က Promise ပြန်တယ်။ `let data = await response.json();` လို့ ရေးပါ။" },
    { t: "CORS error တက်တယ်", d: "ဆာဗာက ခွင့်မပြုထားရင် browser က ပိတ်တယ်။ ကိုယ့်ဆာဗာ ဖြစ်ရင် CORS header ထည့်ပါ။ API ရွေးတဲ့အခါ CORS ခွင့်ပြုတဲ့ API ကို သုံးပါ။" },
    { t: "Network error နဲ့ HTTP error မခွဲဘူး", d: "Network မရရင် `fetch` က reject ဖြစ်တယ်။ 404/500 ရင် resolve ဖြစ်တယ်။ နှစ်မျိုးလုံးကို `try/catch` + `response.ok` နဲ့ ကိုင်တွယ်ပါ။" }
  ],
  recap: [
    "`fetch(url)` က Promise ပြန်တယ်၊ `await` နဲ့ စောင့်နိုင်တယ်။",
    "HTTP error အတွက် `response.ok` ကို ကိုယ်တိုင် စစ်ရတယ်။",
    "`response.json()` ကလည်း Promise မို့ `await` လိုတယ်။",
    "POST အတွက် `method`, `headers`, `body` သတ်မှတ်ပါ။",
    "loading → fetch → ok → json → ပြ → error ဆိုရင် catch ဆိုတဲ့ အစီအစဉ်ကို လိုက်နာပါ။"
  ],
  exercise: {
    title: "ကိုယ်တိုင် စမ်းကြည့်ပါ",
    steps: [
      "`jsonplaceholder.typicode.com/users` ကနေ ဒေတာ ယူပြီး နာမည်တွေ စာရင်း ပြပါ။",
      "URL ကို မှားပြီး ရိုက်ကြည့်ပါ — `response.ok` က ဘယ်လို ဖမ်းလဲ ကြည့်ပါ။",
      "`searchUsers(\"Leanne\")` ကို ခေါ်ပြီး ရလဒ် ပြပါ။",
      "POST နဲ့ အသုံးပြုသူ အသစ် ပို့ပြီး ဆာဗာ ပြန်ပေးတဲ့ id ကို ပြပါ။"
    ],
    hint: "Network tab ကို ဖွင့်ထားပြီး request ရဲ့ status နဲ့ response body ကို ကြည့်ရင် အမှား ရှာရ ပိုလွယ်တယ်။"
  }
});
