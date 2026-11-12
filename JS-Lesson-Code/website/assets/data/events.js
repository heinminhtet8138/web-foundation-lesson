/* ============================================================
   events.js — အခန်း ၃ (သင်ခန်းစာ ၁–၄)
   ============================================================ */
window.JSL = window.JSL || {};
JSL.lessons = JSL.lessons || [];

/* ------------------------------------------------------------
   EVENTS 01 — addEventListener
   ------------------------------------------------------------ */
JSL.lessons.push({
  id: "events-01",
  chapter: "events",
  order: 1,
  num: "01",
  title: "addEventListener — Event ဖမ်းခြင်း",
  subtitle: "click, input, change, submit, keydown စတဲ့ event တွေကို နားထောင်ခြင်း",
  minutes: 20,
  level: "အခြေခံ",
  tags: ["addEventListener", "click", "submit", "input"],
  fileName: "01-addeventlistener.html",
  source: "../03-events/01-addeventlistener.html",
  intro: [
    "Event ဆိုတာ သုံးသူ လုပ်လိုက်တဲ့ အလုပ် ဒါမှမဟုတ် browser က ဖြစ်ပေါ်စေတဲ့ အခြေအနေပါ။ Button နှိပ်တာ၊ စာရိုက်တာ၊ မြို့ရွေးတာ၊ form ပို့တာ၊ ကီးနှိပ်တာ အားလုံး event ပါ။",
    "`addEventListener()` က \"ဒီ element မှာ ဒီ event ဖြစ်လာရင် ဒီ function ကို ခေါ်ပါ\" လို့ မှာထားတာပါ။ ဒီသင်ခန်းစာမှာ အသုံးအများဆုံး event တွေနဲ့ listener ဖျက်တဲ့ နည်းလမ်းကို လေ့လာပါမယ်။"
  ],
  goals: [
    "`addEventListener()` နဲ့ event ဖမ်းနိုင်မယ်။",
    "Element တစ်ခုမှာ listener နှစ်ခု တပ်နိုင်တာ နားလည်မယ်။",
    "`removeEventListener()` အတွက် function အမည် လိုတာ သိမယ်။",
    "`submit` မှာ `preventDefault()` ဘာကြောင့် လိုတာ နားလည်မယ်။"
  ],
  diagram: {
    type: "flow",
    title: "Event တစ်ခု ဖြစ်လာတဲ့အခါ အလုပ်လုပ်ပုံ",
    nodes: [
      { t: "သုံးသူက Button နှိပ်တယ်", sub: "browser က event တစ်ခု ဆောက်တယ်", tone: 6 },
      { t: "Event က element ဆီ ရောက်တယ်", sub: "click event ဖြစ်တယ်", tone: 1 },
      { t: "Listener ကို ခေါ်တယ်", sub: "addEventListener နဲ့ မှာထားတဲ့ function", tone: 3 },
      { t: "သင့်ကုဒ် run တယ်", sub: "UI ပြင်၊ ဒေတာ သိမ်း၊ စာသား ပြ", tone: 2 }
    ],
    arrows: ["နှိပ်", "ဖြစ်", "ခေါ်", "run"],
    caption: "Listener မရှိရင် event ဖြစ်ပေမယ့် ဘာမှ ဆက်မဖြစ်ဘူး။ သင့်ကုဒ်က listener ကတဆင့် အလုပ်လုပ်တယ်။"
  },
  sections: [
    {
      h: "click event — အခြေခံဆုံး",
      p: "Button နှိပ်တာကို ဖမ်းချင်ရင် `addEventListener(\"click\", handler)` ကို သုံးတယ်။ Handler က function ဖြစ်ရမယ်။ Function ကို ကိုယ်တိုင် ခေါ်စရာ မလိုဘူး — event ဖြစ်တဲ့အခါ browser က ခေါ်ပေးတယ်။",
      code: `let btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function () {
  console.log("နှိပ်လိုက်တယ်");
});

btn1.addEventListener("click", () => {
  console.log("ဒုတိယ listener လည်း အလုပ်လုပ်တယ်");
});`,
      lang: "js",
      file: "01-addeventlistener.html",
      lines: [
        { n: 3, t: "`click` event ဖြစ်တိုင်း ဒီ function ကို ခေါ်မယ်။ Function ကို ကိုယ်တိုင် ခေါ်တာ မဟုတ်ဘူး။" },
        { n: "7-9", t: "Listener ဒုတိယတစ်ခု တပ်တယ်။ Button နှိပ်ရင် listener နှစ်ခုစလုံး အစဉ်လိုက် run တယ်။" }
      ],
      tip: {
        type: "key",
        title: "onclick နဲ့ မတူဘူး",
        text: "`btn.onclick = fn` က listener တစ်ခုပဲ ထားနိုင်တယ်။ နောက်တစ်ခု သတ်မှတ်ရင် အဟောင်း အစားထိုး ခံရတယ်။ `addEventListener` က အများကြီး တပ်နိုင်တယ်။"
      }
    },
    {
      h: "removeEventListener — listener ဖျက်ခြင်း",
      p: "Listener ကို ဖျက်ချင်ရင် တပ်တဲ့ function နဲ့ တူတူပဲ ပြန်ပေးရတယ်။ ဒါကြောင့် function ကို အမည်တပ်ထားဖို့ လိုတယ်။ Anonymous function နဲ့ တပ်ထားရင် ဖျက်လို့ မရဘူး။",
      code: `function onBtn2Click() {
  console.log("btn2 နှိပ်တယ်");
}

let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", onBtn2Click);

// ၃ စက္ကန့်နောက် listener ဖျက်
setTimeout(() => {
  btn2.removeEventListener("click", onBtn2Click);
  console.log("listener ဖျက်ပြီး");
}, 3000);`,
      lang: "js",
      file: "01-addeventlistener.html",
      lines: [
        { n: "1-3", t: "အမည်တပ်ထားတဲ့ function။ နောက်မှ ဖျက်ဖို့ ဒီအမည်ကို သုံးမယ်။" },
        { n: 6, t: "Function ကို ခေါ်တာ မဟုတ်ဘူး၊ reference ကို ပေးတာ။ ဒါကြောင့် `onBtn2Click()` လို့ ကွင်းမပါ ရေးတယ်။" },
        { n: "9-12", t: "၃ စက္ကန့် နောက်မှာ တူတူ function reference နဲ့ ဖျက်တယ်။ ဖျက်ပြီးနောက် နှိပ်ရင် ဘာမှ မဖြစ်တော့ဘူး။" }
      ],
      tip: {
        type: "warn",
        title: "Function reference တူရမယ်",
        text: "`removeEventListener(\"click\", () => {...})` လို့ ရေးရင် အလုပ်မလုပ်ဘူး။ အသစ် ဆောက်လိုက်တဲ့ function က တပ်ထားတဲ့ function နဲ့ မတူလို့ပါ။"
      }
    },
    {
      h: "input နှင့် change",
      p: "`input` က စာရိုက်တိုင်း (စာလုံးတစ်လုံး ထည့်တိုင်း) ဖြစ်တယ်။ `change` က တန်ဖိုး ပြောင်းပြီး အတည်ပြုတဲ့အခါ (input ကနေ ထွက်တာ၊ select ရွေးတာ) ဖြစ်တယ်။ ရိုက်နေတုန်း ချက်ချင်း တုံ့ပြန်ချင်ရင် `input`၊ ရွေးပြီးမှ အလုပ်လုပ်ချင်ရင် `change` ကို သုံးတယ်။",
      diagram: {
        type: "timeline",
        title: "input နှင့် change ဖြစ်တဲ့ အချိန်",
        items: [
          { t: "စ", title: "Input box ကို နှိပ်တယ်", sub: "ဒီအခါ event မဖြစ်သေးဘူး", tone: 6 },
          { t: "ရိုက်", title: "စာလုံး တစ်လုံး ရိုက်တယ်", sub: "input event ဖြစ်တယ် — ရိုက်တိုင်း ဖြစ်တယ်", tone: 1 },
          { t: "ဆက်", title: "ဆက်ရိုက်နေတယ်", sub: "input event တစ်ခုပြီးတစ်ခု ဖြစ်နေတယ်", tone: 1 },
          { t: "ထွက်", title: "Box ကနေ ထွက်တယ်", sub: "အခုမှ change event ဖြစ်တယ်", tone: 2 }
        ]
      },
      code: `let nameInput = document.getElementById("name-input");

nameInput.addEventListener("input", (event) => {
  console.log("ရိုက်နေတယ်: " + event.target.value);
});

let city = document.getElementById("city");

city.addEventListener("change", (event) => {
  console.log("မြို့ ရွေးတယ်: " + event.target.value);
});`,
      lang: "js",
      file: "01-addeventlistener.html",
      lines: [
        { n: "3-5", t: "စာလုံး တစ်လုံး ရိုက်တိုင်း `event.target.value` မှာ လက်ရှိ စာသား တစ်ခုလုံး ရတယ်။" },
        { n: "7-11", t: "Select ကို ရွေးပြီးမှ `change` ဖြစ်တယ်။ `event.target.value` က ရွေးထားတဲ့ option ရဲ့ value ပါ။" }
      ]
    },
    {
      h: "submit — form ပို့ခြင်း",
      p: "Form တစ်ခု ပို့တဲ့အခါ `submit` event ဖြစ်တယ်။ Browser ရဲ့ မူလ အပြုအမူက စာမျက်နှာကို reload လုပ်တယ်။ JavaScript နဲ့ ကိုယ်တိုင် ထိန်းချုပ်ချင်ရင် `event.preventDefault()` ကို ခေါ်ရတယ်။",
      code: `let form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();   // reload မဖြစ်အောင်

  let email = document.getElementById("email").value;
  console.log("ပို့မယ့် အီးမေးလ်: " + email);
});`,
      lang: "js",
      file: "01-addeventlistener.html",
      lines: [
        { n: 3, t: "Form ပို့တိုင်း ဒီ function ကို ခေါ်တယ်။ Button ကို နှိပ်တာ၊ Enter နှိပ်တာ နှစ်မျိုးလုံး ပါတယ်။" },
        { n: 4, t: "မူလ reload ကို ရပ်တယ်။ ဒါ မပါရင် စာမျက်နှာ ပြန်တင်ပြီး သင့် output ပျက်သွားမယ်။" },
        { n: 6, t: "Input ရဲ့ တန်ဖိုးကို `value` နဲ့ ဖတ်တယ်။" }
      ]
    },
    {
      h: "Mouse နှင့် Keyboard event",
      p: "`mouseenter`/`mouseleave` က အကွက်ထဲ ဝင်/ထွက်တာကို ဖမ်းတယ်။ `keydown` က ကီးနှိပ်တာကို ဖမ်းတယ်။ `document` မှာ တပ်ထားရင် စာမျက်နှာ တစ်ခုလုံးရဲ့ ကီးနှိပ်မှုကို ဖမ်းနိုင်တယ်။",
      code: `let hoverBox = document.getElementById("hover-box");

hoverBox.addEventListener("mouseenter", () => {
  hoverBox.style.background = "#dbeafe";
});

hoverBox.addEventListener("mouseleave", () => {
  hoverBox.style.background = "";
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    console.log("Escape နှိပ်တယ်");
  }
});`,
      lang: "js",
      file: "01-addeventlistener.html",
      lines: [
        { n: "3-5", t: "Mouse အကွက်ထဲ ဝင်တာနဲ့ နောက်ခံ အရောင် ပြောင်းတယ်။" },
        { n: "7-9", t: "ထွက်သွားရင် နောက်ခံကို မူလအတိုင်း ပြန်ထားတယ်။" },
        { n: "11-15", t: "ကီးနှိပ်တိုင်း `event.key` ကို စစ်တယ်။ Escape ဖြစ်ရင်ပဲ အလုပ်လုပ်တယ်။" }
      ]
    },
    {
      h: "load — စာမျက်နှာ အပြည့် ရောက်ခြင်း",
      p: "`window` ရဲ့ `load` event က ပုံတွေ၊ CSS တွေပါ အားလုံး ရောက်ပြီးမှ ဖြစ်တယ်။ Script ကို head ထဲမှာ ထည့်ထားရင် ဒီ event ကို သုံးပြီး DOM အဆင်သင့် ဖြစ်တဲ့အခါမှ အလုပ်လုပ်စေနိုင်တယ်။",
      code: `window.addEventListener("load", () => {
  console.log("စာမျက်နှာ အပြည့် ရောက်ပြီ");
});`,
      lang: "js",
      file: "01-addeventlistener.html",
      lines: [
        { n: 1, t: "`window` က browser ရဲ့ တကယ့် window object ပါ။ စာမျက်နှာ တစ်ခုလုံး ရောက်မှ ဒီ function run တယ်။" }
      ],
      tip: {
        type: "info",
        title: "DOMContentLoaded နဲ့ ဘာကွာလဲ",
        text: "`DOMContentLoaded` က HTML ဖတ်ပြီးတာနဲ့ ဖြစ်တယ်၊ ပုံတွေ မလိုဘူး။ `load` ကတော့ ပုံတွေပါ ရောက်မှ ဖြစ်တယ်။ DOM ကို ပြင်ချင်ရင် `DOMContentLoaded` က ပိုမြန်တယ်။"
      }
    }
  ],
  pitfalls: [
    { t: "removeEventListener မရဘူး", d: "Anonymous function နဲ့ တပ်ထားရင် ဖျက်လို့ မရဘူး။ Function ကို အမည်တပ်ပြီး တူတူ reference ကို ပေးပါ။" },
    { t: "submit မှာ reload ဖြစ်နေတယ်", d: "`event.preventDefault()` ကို listener ရဲ့ အစမှာ ခေါ်ပါ။" },
    { t: "input event ကို change နဲ့ ရောတယ်", d: "ရိုက်တိုင်း တုံ့ပြန်ချင်ရင် `input`၊ ရွေးပြီး အတည်ပြုမှ လုပ်ချင်ရင် `change` ကို သုံးပါ။" }
  ],
  recap: [
    "`addEventListener(\"event\", handler)` နဲ့ event ဖမ်းတယ်။",
    "Element တစ်ခုမှာ listener အများကြီး တပ်နိုင်တယ်။",
    "ဖျက်ချင်ရင် function reference တူတူ လိုတယ်။",
    "Form မှာ `preventDefault()` မပါရင် reload ဖြစ်တယ်။"
  ],
  exercise: {
    title: "ကိုယ်တိုင် စမ်းကြည့်ပါ",
    steps: [
      "Button တစ်ခု ထည့်ပြီး နှိပ်တိုင်း `console.log` နဲ့ ရေတွက်တဲ့ နံပါတ် ထုတ်ပါ။",
      "Input တစ်ခုမှာ `input` event တပ်ပြီး ရိုက်ထားတဲ့ စာသားကို အောက်မှာ ပြပါ။",
      "Form တစ်ခု ဆောက်ပြီး `submit` မှာ `preventDefault()` ခေါ်ကာ တန်ဖိုးကို Console မှာ ထုတ်ပါ။",
      "`keydown` နဲ့ Enter နှိပ်တာကို ဖမ်းပါ။"
    ],
    hint: "Event မဖြစ်ရင် listener တပ်ထားတဲ့ element နဲ့ event နာမည် မှန်မမှန် အရင် စစ်ပါ။"
  }
});

/* ------------------------------------------------------------
   EVENTS 02 — Event Object
   ------------------------------------------------------------ */
JSL.lessons.push({
  id: "events-02",
  chapter: "events",
  order: 2,
  num: "02",
  title: "Event Object — event အကြောင်း အချက်အလက်",
  subtitle: "target, currentTarget, key, clientX/clientY, preventDefault နှင့် stopPropagation",
  minutes: 20,
  level: "အလယ်အလတ်",
  tags: ["event.target", "preventDefault", "bubbling", "keydown"],
  fileName: "02-event-object.html",
  source: "../03-events/02-event-object.html",
  intro: [
    "Event ဖြစ်တဲ့အခါ browser က listener function ကို event object တစ်ခု ပေးတယ်။ အဲဒီ object ထဲမှာ ဘယ် element ကို နှိပ်လဲ၊ ဘယ်ကီး နှိပ်လဲ၊ ဘယ်နေရာမှာ နှိပ်လဲ စတဲ့ အချက်အလက်တွေ ပါတယ်။",
    "ဒီသင်ခန်းစာမှာ event object ရဲ့ အသုံးအများဆုံး property တွေနဲ့ event bubbling၊ မူလ အပြုအမူ ရပ်တဲ့ `preventDefault()` ကို လေ့လာပါမယ်။"
  ],
  goals: [
    "`event.target` နဲ့ `event.currentTarget` ကွာခြားချက်ကို နားလည်မယ်။",
    "`preventDefault()` နဲ့ မူလ အပြုအမူ ရပ်နိုင်မယ်။",
    "`event.key`, `event.clientX/clientY`, `event.type` ကို သုံးနိုင်မယ်။",
    "Event bubbling နဲ့ `stopPropagation()` ကို နားလည်မယ်။"
  ],
  diagram: {
    type: "bubble",
    title: "Event Bubbling — အတွင်းကနေ အပြင်ကို တက်ခြင်း",
    note: "inner ကို နှိပ်ရင် inner → #outer → body → document အစဉ်လိုက် listener တွေ ခေါ်ခံရတယ်။"
  },
  sections: [
    {
      h: "target နှင့် currentTarget",
      p: "`event.target` က အမှန်တကယ် နှိပ်ခံရတဲ့ element ပါ။ `event.currentTarget` က listener တပ်ထားတဲ့ element ပါ။ မိခင် element မှာ listener တပ်ထားရင် ကလေးကို နှိပ်လည်း မိခင်ရဲ့ listener က run တယ်။ အဲဒီအခါ `target` က ကလေး၊ `currentTarget` က မိခင် ဖြစ်တယ်။",
      code: `let outer = document.getElementById("outer");

outer.addEventListener("click", (event) => {
  console.log("currentTarget: " + event.currentTarget.id);
  console.log("target: " + event.target.tagName);
});

let inner = document.getElementById("inner");

inner.addEventListener("click", (event) => {
  console.log("--- inner နှိပ် ---");
  console.log("type: " + event.type);
});`,
      lang: "js",
      file: "02-event-object.html",
      lines: [
        { n: "3-6", t: "`#outer` မှာ listener တပ်ထားတယ်။ `#inner` ကို နှိပ်လည်း ဒီ listener run တယ်။" },
        { n: 4, t: "`currentTarget` က အမြဲ `outer` ဖြစ်တယ်၊ listener တပ်ထားတဲ့ နေရာမို့။" },
        { n: 5, t: "`target` ကတော့ အမှန်တကယ် နှိပ်ခံရတဲ့ element။ `inner` ကို နှိပ်ရင် `BUTTON` ဖြစ်တယ်။" },
        { n: "8-12", t: "`inner` မှာ သီးခြား listener တပ်ထားတယ်။ နှစ်ခုစလုံး run မယ် — event တက်လာလို့ပါ။" }
      ],
      tip: {
        type: "key",
        title: "မှတ်ရ လွယ်တဲ့ ပုံစံ",
        text: "`target` = နှိပ်ခံရတဲ့သူ။ `currentTarget` = နားထောင်နေတဲ့သူ။ Event တက်လာတဲ့အခါ နှစ်ခု မတူနိုင်ဘူး။"
      }
    },
    {
      h: "preventDefault — မူလ အပြုအမူ ရပ်ခြင်း",
      p: "Link နှိပ်ရင် စာမျက်နှာ ပြောင်းတာ၊ form ပို့ရင် reload ဖြစ်တာတွေက browser ရဲ့ မူလ အပြုအမူပါ။ `event.preventDefault()` က အဲဒါကို ရပ်တယ်။ ဒါပေမယ့် event တက်တာကို မရပ်ဘူး။",
      code: `let form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let value = document.getElementById("text").value;
  console.log("ပို့တဲ့ တန်ဖိုး: " + value);
});

let link = document.getElementById("link");

link.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("link ကို ရပ်ထားတယ်");
});`,
      lang: "js",
      file: "02-event-object.html",
      lines: [
        { n: 4, t: "Form ရဲ့ မူလ reload ကို ရပ်တယ်။ ဒါမှ ကိုယ်တိုင် စစ်ဆေးပြီး ဒေတာ သိမ်းနိုင်မယ်။" },
        { n: "11-13", t: "Link နှိပ်တိုင်း စာမျက်နှာ မပြောင်းအောင် ရပ်တယ်။ ကိုယ်တိုင် modal ဖွင့်တာမျိုးမှာ သုံးတယ်။" }
      ],
      tip: {
        type: "warn",
        title: "preventDefault နဲ့ return false မတူဘူး",
        text: "`return false` က jQuery မှာ အလုပ်လုပ်တယ်။ သာမန် `addEventListener` မှာ မလုပ်ဘူး။ `event.preventDefault()` ကို တိုက်ရိုက် ခေါ်ပါ။"
      }
    },
    {
      h: "key, clientX/clientY, type",
      p: "`keydown` မှာ `event.key` က နှိပ်လိုက်တဲ့ ကီးရဲ့ နာမည် ဖြစ်တယ် — `\"Enter\"`, `\"Escape\"`, `\"a\"` စသဖြင့်။ Mouse event တွေမှာ `clientX`/`clientY` က viewport အတွင်း နှိပ်တဲ့ နေရာ ဖြစ်တယ်။ `event.type` က event နာမည် ဖြစ်တယ်။",
      code: `let text = document.getElementById("text");

text.addEventListener("keydown", (event) => {
  console.log("key: " + event.key);

  if (event.key === "Enter") {
    console.log("Enter နှိပ်တယ်");
  }
});

let area = document.getElementById("area");

area.addEventListener("click", (event) => {
  console.log(\`X: \${event.clientX}၊ Y: \${event.clientY}\`);
});

console.log("event type: " + event.type);`,
      lang: "js",
      file: "02-event-object.html",
      lines: [
        { n: "3-8", t: "ကီးနှိပ်တိုင်း နာမည် ထုတ်တယ်။ Enter ဖြစ်ရင် ထပ်ပြီး အလုပ် လုပ်တယ်။" },
        { n: "13-15", t: "Template literal နဲ့ နှိပ်တဲ့ နေရာ X, Y ကို ထုတ်တယ်။ `clientX` က ဘယ်ဘက်ကနေ၊ `clientY` က အပေါ်ကနေ တွက်တယ်။" },
        { n: 17, t: "`event.type` က `click`, `keydown` စတဲ့ event နာမည်ကို ပြန်တယ်။" }
      ]
    },
    {
      h: "target ကို သုံးပြီး ကိုယ့်ကိုယ်ကို ပြင်ခြင်း",
      p: "`event.target` က နှိပ်ခံရတဲ့ element ဖြစ်တာမို့ သူ့ style နဲ့ စာသားကို တိုက်ရိုက် ပြင်နိုင်တယ်။ Listener တစ်ခုတည်းနဲ့ element အများကြီး ကို ကိုင်တွယ်တဲ့ အခါ အသုံးဝင်တယ်။",
      code: `let box = document.createElement("button");
box.textContent = "ကိုယ့်ကိုယ်ကို ပြင်";
document.body.append(box);

box.addEventListener("click", (event) => {
  event.target.style.background = "#fde68a";
  event.target.textContent = "နှိပ်ပြီး";
});`,
      lang: "js",
      file: "02-event-object.html",
      lines: [
        { n: "1-3", t: "Button အသစ် ဆောက်ပြီး body ထဲ ထည့်တယ်။" },
        { n: "5-8", t: "နှိပ်လိုက်တဲ့ element ကိုယ်တိုင်ရဲ့ style နဲ့ စာသားကို ပြင်တယ်။ `box` လို့ တိုက်ရိုက် ရေးလည်း ရပေမယ့် `target` က ပိုယေဘုယျ ကျတယ်။" }
      ]
    },
    {
      h: "Event Bubbling နှင့် stopPropagation",
      p: "ကလေး element ကို နှိပ်တဲ့အခါ event က မိခင်၊ အဘိုး စသဖြင့် အပေါ်ကို တက်သွားတယ်။ ဒါကို bubbling လို့ ခေါ်တယ်။ `event.stopPropagation()` က အပေါ်ကို မတက်အောင် ရပ်တယ်။ ဒါပေမယ့် အလွယ်တကူ debug ရခက်နိုင်လို့ သတိထား သုံးသင့်တယ်။",
      code: `inner.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("အပေါ်ကို မတက်တော့ဘူး");
});

document.getElementById("area").addEventListener("dblclick", (event) => {
  console.log("dblclick target: " + event.target.id);
  console.log("button: " + event.button);
});`,
      lang: "js",
      file: "02-event-object.html",
      lines: [
        { n: 1-4, t: "`inner` ကို နှိပ်ရင် event က `#outer` ဆီ မတက်တော့ဘူး။ `#outer` ရဲ့ listener မ run ဘူး။" },
        { n: "6-9", t: "Double click မှာ `event.button` က ဘယ် mouse button လဲ ပြတယ်။ 0 က ဘယ်ဘက် button ပါ။" }
      ],
      tip: {
        type: "warn",
        title: "stopPropagation ကို အလွယ်တကူ မသုံးပါနဲ့",
        text: "Bubbling ကို မတော်တဆ ရပ်လိုက်ရင် အပေါ်က listener တွေ အလုပ်မလုပ်တော့ဘူး။ ဖြစ်နိုင်ရင် `target` ကို စစ်ပြီး လုပ်တာက ပိုကောင်းတယ်။"
      }
    }
  ],
  pitfalls: [
    { t: "target နဲ့ currentTarget ရောတယ်", d: "`target` က နှိပ်ခံရတဲ့သူ၊ `currentTarget` က listener တပ်ထားတဲ့သူ။ Parent မှာ တပ်ရင် နှစ်ခု မတူနိုင်ဘူး။" },
    { t: "preventDefault မခေါ်မိလို့ reload ဖြစ်တယ်", d: "Form submit listener ရဲ့ အစမှာ `event.preventDefault()` ကို ခေါ်ပါ။" },
    { t: "event.button ကို keydown မှာ ဖတ်တယ်", d: "`button` က mouse event အတွက်ပါ။ ကီးအတွက် `event.key` ကို သုံးပါ။" }
  ],
  recap: [
    "`event.target` က နှိပ်ခံရတဲ့ element၊ `currentTarget` က listener တပ်ထားတဲ့ element။",
    "`preventDefault()` က browser ရဲ့ မူလ အပြုအမူကို ရပ်တယ်။",
    "`event.key` က ကီးနာမည်၊ `clientX/Y` က နှိပ်တဲ့ နေရာ။",
    "Event က ကလေးကနေ မိခင်ဆီ တက်တယ် — `stopPropagation()` နဲ့ ရပ်နိုင်တယ်။"
  ],
  exercise: {
    title: "ကိုယ်တိုင် စမ်းကြည့်ပါ",
    steps: [
      "အကွက်တစ်ခုထဲမှာ button ထည့်ပြီး နှစ်ခုစလုံးမှာ click listener တပ်ပါ။ နှိပ်တဲ့အခါ `target` နဲ့ `currentTarget` ကို နှိုင်းယှဉ်ပါ။",
      "Link တစ်ခုမှာ `preventDefault()` ခေါ်ပြီး စာမျက်နှာ မပြောင်းအောင် လုပ်ပါ။",
      "`keydown` နဲ့ နှိပ်လိုက်တဲ့ ကီးကို စာမျက်နှာပေါ် ပြပါ။",
      "Button ရဲ့ click မှာ `stopPropagation()` ထည့်ပြီး မိခင် listener ရပ်သွားတာ ကြည့်ပါ။"
    ],
    hint: "Event object ကို `console.log(event)` နဲ့ တစ်ခါတည်း ကြည့်ရင် property အားလုံး မြင်နိုင်တယ်။"
  }
});

/* ------------------------------------------------------------
   EVENTS 03 — Event Delegation
   ------------------------------------------------------------ */
JSL.lessons.push({
  id: "events-03",
  chapter: "events",
  order: 3,
  num: "03",
  title: "Event Delegation — Listener တစ်ခုတည်းနဲ့ အများကို ကိုင်တွယ်ခြင်း",
  subtitle: "Bubbling ကို အသုံးချပြီး dynamically ဆောက်တဲ့ element တွေကို စီမံခြင်း",
  minutes: 22,
  level: "အလယ်အလတ်",
  tags: ["delegation", "closest", "dataset", "bubbling"],
  fileName: "03-delegation.html",
  source: "../03-events/03-delegation.html",
  intro: [
    "List တစ်ခုမှာ item တွေ အသစ် ထည့်တိုင်း button တစ်ခုချင်းစီအတွက် listener တပ်ရတာ ပင်ပန်းတယ်။ ပြီးတော့ အသစ် ထည့်တဲ့ button တွေမှာ listener မပါဘူး။",
    "Event delegation က ဒီပြဿနာကို ဖြေရှင်းတယ်။ Button တွေမှာ တစ်ခုချင်း listener မတပ်ဘဲ မိခင် element တစ်ခုတည်းမှာ တပ်ပြီး event bubbling ကို အသုံးချတယ်။ ဒီသင်ခန်းစာမှာ ဒီနည်းလမ်းကို အသေးစိတ် လေ့လာပါမယ်။"
  ],
  goals: [
    "Dynamically ဆောက်တဲ့ element တွေမှာ listener မတပ်ရတဲ့ ပြဿနာကို နားလည်မယ်။",
    "`event.target.closest()` နဲ့ နှိပ်ခံရတဲ့ button ကို ရှာနိုင်မယ်။",
    "မိခင် element တစ်ခုတည်းမှာ delegation listener တပ်နိုင်မယ်။",
    "`data-*` နဲ့ index/id ကို သိမ်းပြီး အသုံးချနိုင်မယ်။"
  ],
  diagram: {
    type: "compare",
    title: "တစ်ခုချင်း listener နှင့် Delegation",
    left: {
      title: "တစ်ခုချင်း တပ်ခြင်း",
      sub: "Button တိုင်းမှာ listener",
      tone: 4,
      items: [
        "Button ၁၀၀ ဆို listener ၁၀၀",
        "အသစ် ထည့်တိုင်း ပြန်တပ်ရတယ်",
        "ဖျက်တဲ့အခါ listener ပျက်တယ်",
        "Memory ပိုကုန်တယ်"
      ]
    },
    right: {
      title: "Delegation",
      sub: "မိခင်မှာ listener တစ်ခုပဲ",
      tone: 2,
      items: [
        "Button ဘယ်လောက်များများ listener တစ်ခုပဲ",
        "အသစ် ထည့်တာနဲ့ အလိုအလျောက် အလုပ်လုပ်တယ်",
        "Render ပြန်လုပ်လည်း listener မပျက်ဘူး",
        "ကုဒ် ပိုရှင်းတယ်"
      ]
    },
    caption: "Delegation ရဲ့ အခြေခံ — event က မိခင်ဆီ တက်လာတယ်။ မိခင်က `event.target` ကို ကြည့်ပြီး ဘယ်ကလေးကို နှိပ်လဲ ဆုံးဖြတ်တယ်။"
  },
  sections: [
    {
      h: "ပြဿနာ — အသစ် ဆောက်တဲ့ button တွေ",
      p: "JavaScript က item တွေကို ဆောက်တဲ့အခါ အစောပိုင်းမှာ listener တပ်ထားတဲ့ button တွေသာ အလုပ်လုပ်တယ်။ နောက်မှ ထည့်တဲ့ button တွေမှာ listener မပါဘူး။ `querySelectorAll` ကို render တိုင်း ပြန်ခေါ်ပြီး တပ်ရတာက မလွယ်ဘူး။",
      code: `let fruits = ["Apple", "Banana", "Mango"];

function render() {
  list.innerHTML = "";

  fruits.forEach((fruit, index) => {
    let li = document.createElement("li");
    li.textContent = fruit + " ";

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "ဖျက်";
    deleteBtn.dataset.index = index;

    li.append(deleteBtn);
    list.append(li);
  });
}

render();`,
      lang: "js",
      file: "03-delegation.html",
      lines: [
        { n: "1", t: "ဒေတာ array — အမှန်တကယ်တော့ ဒါကို API ကနေ ရနိုင်တယ်။" },
        { n: "4", t: "Render တိုင်း အဟောင်း အားလုံး ရှင်းတယ်။ ဒါကြောင့် အဟောင်း button တွေရဲ့ listener တွေလည်း ပျက်သွားတယ်။" },
        { n: "9-10", t: "Item တစ်ခုစီအတွက် ဖျက်တဲ့ button ဆောက်တယ်။" },
        { n: 11, t: "`data-index` မှာ index ကို သိမ်းထားတယ်။ နောက် delegation listener က ဒါကို ဖတ်မယ်။" }
      ]
    },
    {
      h: "Delegation listener — မိခင်မှာ တစ်ခုတည်း",
      p: "မိခင် `ul` မှာ listener တစ်ခုတည်း တပ်တယ်။ Button ကို နှိပ်ရင် event က `ul` ဆီ တက်လာတယ်။ `event.target` က button ဖြစ်နိုင်တယ်၊ ဒါမှမဟုတ် button ထဲက စာသား node ဖြစ်နိုင်တယ်။ ဒါကြောင့် `closest(\"button\")` နဲ့ အနီးဆုံး button ကို ရှာတယ်။",
      diagram: {
        type: "bubble",
        title: "Button နှိပ်တာက ul ဆီ တက်လာပုံ",
        note: "list (ul) မှာ listener ရှိတယ်။ event.target က button ဖြစ်နိုင်တယ်။ closest(\"button\") က သေချာတဲ့ button ကို ပြန်တယ်။"
      },
      code: `list.addEventListener("click", (event) => {
  let btn = event.target.closest("button");

  if (!btn) {
    return;
  }

  let index = Number(btn.dataset.index);

  console.log("ဖျက်မယ်: " + fruits[index]);

  fruits.splice(index, 1);
  render();
});`,
      lang: "js",
      file: "03-delegation.html",
      lines: [
        { n: 1, t: "Listener က `ul` မှာ တစ်ခုတည်း။ Button တွေ ဘယ်လောက် ရှိရှိ ဒါက အလုပ်လုပ်တယ်။" },
        { n: 2, t: "နှိပ်ခံရတဲ့ နေရာက button ဒါမှမဟုတ် button ရဲ့ ကလေး ဖြစ်ရင် အနီးဆုံး button ကို ရတယ်။" },
        { n: "4-6", t: "Button မဟုတ်ရင် ဘာမှ မလုပ်ဘဲ ထွက်တယ်။ List ရဲ့ နေရာအလွတ်ကို နှိပ်ရင် ဒီလို ဖြစ်တယ်။" },
        { n: 8, t: "`dataset.index` က စာသား ဖြစ်တာမို့ `Number()` နဲ့ နံပါတ် ပြောင်းတယ်။" },
        { n: "12-13", t: "Array ထဲက ဖျက်ပြီး စာရင်းကို ပြန်ဆောက်တယ်။" }
      ],
      tip: {
        type: "key",
        title: "closest က delegation ရဲ့ တွဲဖက်",
        text: "`event.target` က နှိပ်တဲ့ အတိအကျ နေရာ ဖြစ်တာမို့ button မဟုတ်နိုင်ဘူး။ `closest(\"button\")` က အပေါ်ကို တက်ရှာပြီး သေချာတဲ့ button ကို ပေးတယ်။"
      }
    },
    {
      h: "အသစ် ထည့်တဲ့အခါ listener ထပ် မတပ်ရ",
      p: "Delegation ရဲ့ အကြီးမားဆုံး အားသာချက်က ဒါပါ။ အသစ် ထည့်တဲ့ button တွေအတွက် listener ထပ် မတပ်ရဘူး။ မိခင်ရဲ့ listener က အသစ်ရော အဟောင်းပါ အားလုံးအတွက် အလုပ်လုပ်တယ်။",
      code: `let addBtn = document.getElementById("add-btn");

addBtn.addEventListener("click", () => {
  fruits.push("Fruit " + (fruits.length + 1));
  render();
});`,
      lang: "js",
      file: "03-delegation.html",
      lines: [
        { n: "3-6", t: "ဒေတာ array ထဲ ထည့်ပြီး ပြန် render တယ်။ အသစ် ဆောက်တဲ့ button အတွက် listener တပ်တာ မပါဘူး။" },
        { n: 4, t: "နာမည် အသစ် ဆောက်တယ်။ `fruits.length + 1` က နံပါတ် ဆက်တယ်။" }
      ]
    },
    {
      h: "List item ကို ရွေးခြင်း",
      p: "Listener တစ်ခုတည်းနဲ့ အလုပ်နှစ်မျိုး လုပ်နိုင်တယ်။ Button နှိပ်ရင် ဖျက်တာ၊ ကျန်တဲ့ နေရာ နှိပ်ရင် ရွေးတာ။ `closest` နဲ့ ဘယ်အလုပ်လဲ ခွဲခြားတယ်။",
      code: `list.addEventListener("click", (event) => {
  let li = event.target.closest("li");

  if (li && !event.target.closest("button")) {
    console.log("ရွေးတယ်: " + li.textContent.trim());
    li.style.background = "#fde68a";
  }
});`,
      lang: "js",
      file: "03-delegation.html",
      lines: [
        { n: 2, t: "နှိပ်တဲ့ နေရာရဲ့ အနီးဆုံး `li` ကို ရှာတယ်။" },
        { n: 4, t: "`li` ရှိပြီး button မဟုတ်မှ ရွေးတဲ့ အလုပ်ကို လုပ်တယ်။ ဒါမှ button နှိပ်တာနဲ့ မရောဘူး။" },
        { n: "5-6", t: "ရွေးထားတဲ့ item ကို မြင်သာအောင် နောက်ခံ အရောင် ပြောင်းတယ်။" }
      ]
    },
    {
      h: "Table မှာ Delegation",
      p: "Table ရဲ့ row တွေ အသစ် ထည့်တိုင်း edit button တွေအတွက် listener မတပ်ရဘဲ table တစ်ခုလုံးမှာ တစ်ခုတည်း တပ်နိုင်တယ်။ Row ဘယ်လောက် များများ listener တစ်ခုပဲ။",
      code: `table.addEventListener("click", (event) => {
  let btn = event.target.closest(".edit");

  if (!btn) {
    return;
  }

  console.log("ပြင်မယ့် id: " + btn.dataset.id);
});`,
      lang: "js",
      file: "03-delegation.html",
      lines: [
        { n: 1, t: "Table တစ်ခုလုံးမှာ listener တစ်ခုတည်း။ Row တစ်ခုချင်း မတပ်ဘူး။" },
        { n: 2, t: "နှိပ်တဲ့ နေရာက `.edit` button ရဲ့ အတွင်း ဖြစ်ရင် button ကို ရတယ်။" },
        { n: "4-6", t: "Button မဟုတ်ရင် ထွက်တယ်။" },
        { n: 8, t: "`data-id` ကို ဖတ်ပြီး ဘယ် row ကို ပြင်မလဲ သိတယ်။" }
      ],
      tip: {
        type: "info",
        title: "Listener တစ်ခုတည်းက ဘာကြောင့် လုံလဲ",
        text: "Event က အပေါ်ကို တက်တယ်။ ကလေး ဘယ်လောက် ထည့်ထည့်၊ မိခင်ဆီ ရောက်တယ်။ မိခင်က target ကို ကြည့်ပြီး ဘယ်ကလေး ဖြစ်လဲ ဆုံးဖြတ်တယ်။"
      }
    }
  ],
  pitfalls: [
    { t: "event.target ကို button လို့ ထင်တယ်", d: "Button ထဲက စာသား/icon ကို နှိပ်ရင် target က ကလေး element ဖြစ်နိုင်တယ်။ `closest(\"button\")` ကို သုံးပါ။" },
    { t: "index ကို မသိမ်းထားဘူး", d: "Render တိုင်း item အသစ် ဆောက်တာမို့ `data-index` ဒါမှမဟုတ် id ကို button မှာ သိမ်းထားပါ။" },
    { t: "Delegation မှာ stopPropagation သုံးတယ်", d: "Delegation က event တက်တာကို မှီခိုတယ်။ `stopPropagation()` ခေါ်ရင် မိခင် listener ဆီ မရောက်နိုင်ဘူး။" }
  ],
  recap: [
    "Delegation က မိခင်မှာ listener တစ်ခုတည်း တပ်တယ်။",
    "`event.target.closest()` နဲ့ နှိပ်ခံရတဲ့ button ကို ရှာတယ်။",
    "`data-*` မှာ index/id သိမ်းထားရင် ဘယ် item လဲ သိနိုင်တယ်။",
    "အသစ် ထည့်တဲ့ element တွေအတွက် listener ထပ် မလိုဘူး။"
  ],
  exercise: {
    title: "ကိုယ်တိုင် စမ်းကြည့်ပါ",
    steps: [
      "List တစ်ခုနဲ့ item တွေ ဆောက်ပါ။ မိခင်မှာ listener တစ်ခုတည်း တပ်ပါ။",
      "Item တစ်ခုစီမှာ ဖျက်တဲ့ button ထည့်ပြီး `data-index` သိမ်းပါ။",
      "Button နှိပ်ရင် array ထဲက item ကို ဖျက်ပြီး ပြန် render လုပ်ပါ။",
      "အသစ် ထည့်တဲ့ button ကို နှိပ်ပြီး item အသစ် ထည့်ပါ — listener မတပ်ဘဲ အလုပ်လုပ်တာ ကြည့်ပါ။"
    ],
    hint: "`event.target` က အတိအကျ နှိပ်တဲ့ နေရာ။ ကိုယ်လိုချင်တဲ့ element ကို `closest` နဲ့ ရှာပါ။"
  }
});

/* ------------------------------------------------------------
   EVENTS 04 — Forms & Validation
   ------------------------------------------------------------ */
JSL.lessons.push({
  id: "events-04",
  chapter: "events",
  order: 4,
  num: "04",
  title: "Form နှင့် စစ်ဆေးခြင်း",
  subtitle: "submit, value, checkbox, error message နဲ့ လက်တွေ့ validation ပုံစံ",
  minutes: 25,
  level: "အလယ်အလတ်",
  tags: ["form", "validation", "submit", "reset"],
  fileName: "04-forms-validation.html",
  source: "../03-events/04-forms-validation.html",
  intro: [
    "Form ဆိုတာ သုံးသူဆီက ဒေတာ ယူတဲ့ အဓိက နေရာပါ။ နာမည်၊ အီးမေးလ်၊ အသက်၊ ရွေးချယ်မှု စတာတွေ မှန်မမှန် စစ်ဆေးပြီးမှ လက်ခံရတယ်။",
    "ဒီသင်ခန်းစာမှာ form ဒေတာ ဖတ်တာ၊ error message ပြတာ၊ validation လုပ်တာ၊ အောင်မြင်ရင် ဒေတာ သိမ်းပြီး form ရှင်းတာ အားလုံးကို တစ်စုတစ်စည်း လေ့လာပါမယ်။"
  ],
  goals: [
    "Form ရဲ့ တန်ဖိုးတွေကို မှန်ကန်တဲ့ property နဲ့ ဖတ်နိုင်မယ်။",
    "Error message တွေကို နေရာချပြီး ပြ/ရှင်း လုပ်နိုင်မယ်။",
    "Field တစ်ခုချင်းစီကို စစ်ဆေးတဲ့ `validate()` function ရေးနိုင်မယ်။",
    "အောင်မြင်ရင် ဒေတာ သိမ်း၊ `reset()` နဲ့ form ရှင်းနိုင်မယ်။"
  ],
  diagram: {
    type: "branch",
    title: "Form ပို့တဲ့အခါ ဖြစ်တဲ့ လမ်းကြောင်း",
    condition: "validate() က true ပြန်လား?",
    conditionSub: "Field အားလုံး မှန်ကန်ရင်",
    yes: { t: "မှန်တယ်", sub: "ဒေတာ သိမ်း → အောင်မြင်တဲ့ message → form.reset()" },
    no: { t: "မှားတယ်", sub: "Error message တွေ ပေါ် → ဘာမှ မသိမ်းဘူး" },
    end: "သုံးသူက ပြင်ပြီး ပြန်ပို့နိုင်တယ်",
    caption: "`submit` listener က အရင် `preventDefault()` ခေါ်တယ်။ ပြီးမှ ကိုယ်တိုင် စစ်ဆေးတယ်။"
  },
  sections: [
    {
      h: "Form ဒေတာ ဖတ်ခြင်း",
      p: "Text input က `value`၊ checkbox က `checked`၊ select က `value` နဲ့ ဖတ်တယ်။ စာသားတွေမှာ မလိုအပ်တဲ့ space မပါအောင် `.trim()` ကို သုံးတယ်။ နံပါတ် လိုချင်ရင် `Number()` နဲ့ ပြောင်းတယ်။",
      code: `let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let age = Number(document.getElementById("age").value);
let course = document.getElementById("course").value;
let agree = document.getElementById("agree").checked;

console.log(name, email, age, course, agree);`,
      lang: "js",
      file: "04-forms-validation.html",
      lines: [
        { n: 1, t: "နာမည် ဖတ်ပြီး ရှေ့/နောက်က space တွေ ဖျက်တယ်။ `\" Aung \"` က `\"Aung\"` ဖြစ်တယ်။" },
        { n: 3, t: "Input က စာသား ပြန်တယ်။ `Number()` နဲ့ နံပါတ် ပြောင်းတယ်။" },
        { n: 4, t: "Select ရဲ့ ရွေးထားတဲ့ option ရဲ့ `value` ကို ရတယ်။" },
        { n: 5, t: "Checkbox က `value` မဟုတ်ဘူး၊ `checked` က `true`/`false` ပြန်တယ်။" }
      ],
      tip: {
        type: "warn",
        title: "input value က အမြဲ စာသား",
        text: "`<input type=\"number\">` ဖြစ်တောင် `.value` က string ပြန်တယ်။ တွက်ချက်မှု မလုပ်ခင် `Number()` ပြောင်းပါ။ မဟုတ်ရင် `\"2\" + 3` က `\"23\"` ဖြစ်တယ်။"
      }
    },
    {
      h: "Error ပြတဲ့ function နှင့် ရှင်းတဲ့ function",
      p: "Field တစ်ခုစီအတွက် error ပြမယ့် `span` ရှိတယ်။ `setError(id, text)` က error စာသား ထည့်ပြီး အနီရောင် လုပ်တယ်။ `clearErrors()` က အားလုံးကို ရှင်းတယ်။ Function ခွဲထားတာက ကုဒ် ထပ်နေတာကို ရှောင်နိုင်တယ်။",
      code: `function setError(id, text) {
  let errorSpan = document.getElementById(id + "-error");
  errorSpan.textContent = text;
  errorSpan.style.color = "red";
}

function clearErrors() {
  ["name", "email", "age", "course", "agree"].forEach((id) => {
    document.getElementById(id + "-error").textContent = "";
  });

  message.textContent = "";
}`,
      lang: "js",
      file: "04-forms-validation.html",
      lines: [
        { n: "1-5", t: "Field id ကို ယူပြီး `-error` ကို ပေါင်းကာ error span ကို ရှာတယ်။ စာသား ထည့်ပြီး အနီရောင် လုပ်တယ်။" },
        { n: "7-11", t: "Field အားလုံးရဲ့ error စာသားကို ရှင်းတယ်။ ဒါက စစ်ဆေးမှု တစ်ကြိမ်စီမှာ အဟောင်း error တွေ မကျန်အောင် လုပ်တယ်။" },
        { n: 13, t: "အပေါ်ဆုံး အောင်မြင်မှု/မအောင်မြင် message ကိုလည်း ရှင်းတယ်။" }
      ]
    },
    {
      h: "validate — Field တစ်ခုချင်း စစ်ခြင်း",
      p: "`validate()` က `clearErrors()` နဲ့ စတယ်။ ပြီးရင် field တစ်ခုချင်းစီကို စစ်တယ်။ မမှန်ရင် error ပြ၊ `isValid = false` လုပ်တယ်။ အားလုံး မှန်မှ `true` ပြန်တယ်။",
      code: `function validate() {
  clearErrors();
  let isValid = true;

  let name = document.getElementById("name").value.trim();

  if (name === "") {
    setError("name", "နာမည် ထည့်ပါ");
    isValid = false;
  } else if (name.length < 3) {
    setError("name", "အနည်းဆုံး ၃ လုံး ထည့်ပါ");
    isValid = false;
  }

  let email = document.getElementById("email").value.trim();

  if (email === "") {
    setError("email", "အီးမေးလ် ထည့်ပါ");
    isValid = false;
  } else if (!email.includes("@")) {
    setError("email", "@ ပါရမယ်");
    isValid = false;
  }

  let age = Number(document.getElementById("age").value);

  if (document.getElementById("age").value === "") {
    setError("age", "အသက် ထည့်ပါ");
    isValid = false;
  } else if (age < 1 || age > 100) {
    setError("age", "အသက် ၁ ကနေ ၁၀၀ အတွင်း ထည့်ပါ");
    isValid = false;
  }

  if (document.getElementById("course").value === "") {
    setError("course", "သင်တန်း ရွေးပါ");
    isValid = false;
  }

  if (!document.getElementById("agree").checked) {
    setError("agree", "လက်ခံဖို့ လိုတယ်");
    isValid = false;
  }

  return isValid;
}`,
      lang: "js",
      file: "04-forms-validation.html",
      lines: [
        { n: "2-3", t: "အဟောင်း error တွေ ရှင်းပြီး `isValid` ကို true ကနေ စတယ်။" },
        { n: "7-11", t: "နာမည် ဗလာ ဖြစ်ရင် error။ မဟုတ်ဘဲ ၃ လုံးအောက် ဆိုရင်လည်း error။ `else if` က တစ်ခုပဲ ပြမယ်။" },
        { n: "22-24", t: "အသက် input က ဗလာ ဖြစ်နေရင် `Number(\"\")` က 0 ဖြစ်တာမို့ input တန်ဖိုးကို တိုက်ရိုက် စစ်တယ်။" },
        { n: "26-28", t: "အသက် ၁ မှ ၁၀၀ အတွင်း မဟုတ်ရင် error။" },
        { n: "34-37", t: "Course မရွေးရင်၊ checkbox မလက်ခံရင် error။" },
        { n: 39, t: "အားလုံး မှန်မှ `true` ပြန်တယ်။" }
      ],
      tip: {
        type: "info",
        title: "Error အားလုံး ပြချင်ရင်",
        text: "ဒီကုဒ်က အားလုံးကို စစ်တယ်၊ ဒါပေမယ့် error က field တစ်ခုစီမှာ သီးခြား ပြတယ်။ ဒါက သုံးသူကို အားလုံး တစ်ခါတည်း ပြင်ခွင့် ပေးတယ်။"
      }
    },
    {
      h: "submit မှာ စစ်ဆေးခြင်း",
      p: "Submit listener က အရင် `preventDefault()` ခေါ်တယ်။ ပြီးမှ `validate()` ကို ခေါ်တယ်။ မမှန်ရင် message ပြပြီး ထွက်တယ်။ မှန်ရင် ဒေတာ object ဆောက်၊ သိမ်း၊ အောင်မြင်တဲ့ message ပြ၊ `form.reset()` နဲ့ form ရှင်းတယ်။",
      code: `form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!validate()) {
    message.textContent = "❌ ပြင်ရန် ရှိတယ်";
    message.style.color = "red";
    return;
  }

  let data = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    age: Number(document.getElementById("age").value),
    course: document.getElementById("course").value
  };

  console.log(JSON.stringify(data));

  message.textContent = "✅ မှတ်ပုံတင်ပြီး";
  message.style.color = "green";

  form.reset();
});`,
      lang: "js",
      file: "04-forms-validation.html",
      lines: [
        { n: 2, t: "Reload မဖြစ်အောင် ရပ်တယ်။" },
        { n: "4-8", t: "မမှန်ရင် error message ပြပြီး `return` နဲ့ ထွက်တယ်။ ဒါကြောင့် အောက်က ဒေတာ သိမ်းတဲ့ ကုဒ် မ run ဘူး။" },
        { n: "10-15", t: "Field တန်ဖိုးတွေကို object တစ်ခုအဖြစ် စုတယ်။ `age` ကို နံပါတ် ပြောင်းထားတယ်။" },
        { n: 17, t: "ဒေတာကို JSON စာသားအဖြစ် ပြောင်းပြီး Console မှာ ထုတ်တယ်။" },
        { n: 22, t: "Form ကို ရှင်းတယ်။ Input အားလုံး မူလ အခြေအနေ ပြန်ရောက်တယ်။" }
      ]
    },
    {
      h: "ရိုက်နေတုန်း error ဖျောက်ခြင်း",
      p: "သုံးသူက error ပြထားတဲ့ field ကို ပြင်နေတဲ့အခါ error ကို ချက်ချင်း ဖျောက်ပေးတာ ကောင်းတယ်။ `input` event ကို field တွေမှာ တပ်ပြီး error စာသားကို ရှင်းတယ်။",
      code: `["name", "email", "age"].forEach((id) => {
  document.getElementById(id).addEventListener("input", () => {
    document.getElementById(id + "-error").textContent = "";
  });
});

document.getElementById("course").addEventListener("change", (event) => {
  console.log("ရွေးတဲ့ သင်တန်း: " + event.target.value);
});`,
      lang: "js",
      file: "04-forms-validation.html",
      lines: [
        { n: "1-5", t: "Field သုံးခုမှာ `input` listener တပ်တယ်။ ရိုက်တိုင်း သက်ဆိုင်ရာ error စာသား ရှင်းသွားတယ်။" },
        { n: "7-9", t: "Course ရွေးတာနဲ့ ရွေးထားတဲ့ တန်ဖိုးကို ထုတ်တယ်။" }
      ],
      tip: {
        type: "tip",
        title: "Enter နဲ့ ပို့ခြင်း",
        text: "`form.requestSubmit()` က form ကို submit လုပ်သလို အလုပ်လုပ်တယ်။ `keydown` မှာ Enter ဖြစ်ရင် ဒါကို ခေါ်နိုင်တယ်။ `form.submit()` က listener တွေကို မခေါ်ဘူး၊ ဒါကြောင့် `requestSubmit()` က ပိုကောင်းတယ်။"
      }
    }
  ],
  pitfalls: [
    { t: "validate မခေါ်ဘဲ ဒေတာ သိမ်းတယ်", d: "Submit listener မှာ `validate()` ကို အရင် ခေါ်ပြီး false ရင် `return` လုပ်ပါ။" },
    { t: "checkbox ကို value နဲ့ ဖတ်တယ်", d: "Checkbox ရဲ့ ရွေးထားမှုက `checked` မှာ ရှိတယ်။ `value` က HTML မှာ သတ်မှတ်ထားတဲ့ တန်ဖိုးပါ။" },
    { t: "Number မပြောင်းဘဲ တွက်တယ်", d: "Input value က string ပြန်တယ်။ `Number(...)` မပြောင်းရင် `\"20\" + 1` က `\"201\"` ဖြစ်တယ်။" },
    { t: "Error message ကို alert နဲ့ပဲ ပြတယ်", d: "`alert` က ရပ်တန့်စေတယ်။ Inline error span က ပိုကောင်းပြီး ဘယ် field မှားလဲ ရှင်းရှင်း သိနိုင်တယ်။" }
  ],
  recap: [
    "Form ဒေတာကို `value`, `checked` နဲ့ ဖတ်ပြီး စာသားတွေကို `.trim()` လုပ်တယ်။",
    "`validate()` က field တစ်ခုချင်းစီ စစ်ပြီး `true`/`false` ပြန်တယ်။",
    "Submit မှာ `preventDefault()` ခေါ်ပြီးမှ ကိုယ်တိုင် စစ်တယ်။",
    "အောင်မြင်ရင် ဒေတာ သိမ်း၊ message ပြ၊ `form.reset()` လုပ်တယ်။"
  ],
  exercise: {
    title: "ကိုယ်တိုင် စမ်းကြည့်ပါ",
    steps: [
      "နာမည်နဲ့ အီးမေးလ် အတွက် form တစ်ခု ဆောက်ပါ။",
      "ဗလာ ဖြစ်နေရင် error ပြတဲ့ `validate()` function ရေးပါ။",
      "Submit မှာ `preventDefault()` ခေါ်ပြီး မှန်ရင် `console.log` နဲ့ ဒေတာ ထုတ်ပါ။",
      "Error ပြထားတဲ့ field ကို ရိုက်တာနဲ့ error ပျောက်အောင် `input` listener တပ်ပါ။"
    ],
    hint: "Field တစ်ခုစီမှာ error ပြမယ့် `span` သီးခြား ထားပါ။ ဒါမှ ဘယ်နေရာ မှားလဲ ရှင်းရှင်း မြင်နိုင်မယ်။"
  }
});
