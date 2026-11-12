/* ============================================================
   curriculum.js — အခန်းများ၏ အစီအစဉ်
   ============================================================ */
window.JSL = window.JSL || {};

JSL.chapters = [
  {
    id: "core",
    no: "01",
    title: "JavaScript အခြေခံ",
    en: "Core JavaScript",
    icon: "{ }",
    color: "#6366f1",
    desc: "variable, data type, operator, condition, loop, function, array, object, class အစရှိတဲ့ အခြေခံအုတ်မြစ်များ။",
    source: "01-core"
  },
  {
    id: "dom",
    no: "02",
    title: "DOM နှင့် စာမျက်နှာ ထိန်းချုပ်ခြင်း",
    en: "Document Object Model",
    icon: "</>",
    color: "#0ea5e9",
    desc: "HTML element ရှာခြင်း၊ စာသားနှင့် attribute ပြင်ခြင်း၊ element အသစ် ဆောက်ခြင်း၊ သွားလာခြင်း။",
    source: "02-dom"
  },
  {
    id: "events",
    no: "03",
    title: "Event နှင့် အပြန်အလှန် ဆက်သွယ်ခြင်း",
    en: "Events",
    icon: "↯",
    color: "#f59e0b",
    desc: "click, input, submit စတဲ့ event တွေကို ဖမ်းခြင်း၊ event object နှင့် delegation နည်းလမ်းများ။",
    source: "03-events"
  },
  {
    id: "storage",
    no: "04",
    title: "ဒေတာ သိမ်းဆည်းခြင်း",
    en: "Web Storage",
    icon: "▤",
    color: "#10b981",
    desc: "browser ထဲမှာ ဒေတာ သိမ်းခြင်း၊ localStorage နှင့် sessionStorage ကို JSON နဲ့ တွဲသုံးခြင်း။",
    source: "04-storage"
  },
  {
    id: "async",
    no: "05",
    title: "Async JavaScript",
    en: "Timers, Promise & Fetch",
    icon: "◷",
    color: "#8b5cf6",
    desc: "setTimeout, setInterval, Promise, async/await နှင့် ဆာဗာကနေ ဒေတာ ယူခြင်း။",
    source: "05-async"
  },
  {
    id: "animation",
    no: "06",
    title: "Animation နှင့် လှုပ်ရှားမှု",
    en: "Motion & Effects",
    icon: "✦",
    color: "#f43f5e",
    desc: "CSS transition, keyframes နှင့် Web Animations API ကို JavaScript နဲ့ ထိန်းချုပ်ခြင်း။",
    source: "06-animation"
  },
  {
    id: "practice",
    no: "07",
    title: "လက်တွေ့ Project များ",
    en: "Practice Projects",
    icon: "◆",
    color: "#f97316",
    desc: "သင်ယူထားတာတွေကို ပေါင်းစပ်ပြီး ဂိမ်း၊ ဂဏန်းတွက်စက်၊ CRUD နှင့် ဈေးဝယ်စနစ် ဆောက်ခြင်း။",
    source: "practice"
  }
];

JSL.lessons = JSL.lessons || [];

JSL.totalLessons = 33;
