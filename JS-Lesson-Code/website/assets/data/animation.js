/* ============================================================
   animation.js — အခန်း ၆ (Animation)
   သင်ခန်းစာ ၂ ခု — CSS transition/keyframes နှင့် WAAPI
   ============================================================ */
window.JSL = window.JSL || {};
JSL.lessons = JSL.lessons || [];

/* ------------------------------------------------------------
   Animation 01 — CSS Transition & Keyframes
   ------------------------------------------------------------ */
JSL.lessons.push({
  id: "animation-01",
  chapter: "animation",
  order: 1,
  num: "01",
  title: "CSS Transition နှင့် Keyframes",
  subtitle: "Class တစ်ခု လှန်ရုံနဲ့ ချောမွေ့တဲ့ လှုပ်ရှားမှု ဖန်တီးခြင်း",
  minutes: 15,
  level: "အခြေခံ",
  tags: ["transition", "keyframes", "transform", "transitionend"],
  fileName: "01-css-transition.html",
  source: "../06-animation/01-css-transition.html",
  intro: [
    "Animation လုပ်ဖို့ JavaScript နဲ့ တစ်မီလီစက္ကန့်ချင်း တန်ဖိုး ပြောင်းစရာ မလိုပါဘူး။ CSS မှာ `transition` ဒါမှမဟုတ် `@keyframes` ရေးထားပြီး JavaScript က class တစ်ခု လှန်ပေးရုံပါပဲ။",
    "ဒီနည်းက ကုဒ် နည်းပြီး performance ကောင်းတယ်။ ဒါပေမယ့် `display: none` ကနေ `block` ပြောင်းတာလို အခြေအနေ ရုတ်တရက် ပြောင်းတဲ့အခါ transition မလုပ်တာမျိုး ရှိတယ်။ အဲဒီလို အမှားတွေကိုပါ ဒီသင်ခန်းစာမှာ ဖြေရှင်းပါမယ်။"
  ],
  goals: [
    "`transition` ရဲ့ property, duration, easing ကို သတ်မှတ်နိုင်မယ်။",
    "JavaScript က class လှန်ပြီး animation ဖန်တီးနိုင်မယ်။",
    "`@keyframes` နဲ့ ထပ်ခါထပ်ခါ လှုပ်ရှားမှု ရေးနိုင်မယ်။",
    "`transitionend` / `animationiteration` event ကို သုံးနိုင်မယ်။",
    "Transition မလုပ်တဲ့ အကြောင်းရင်းတွေကို ရှာနိုင်မယ်။"
  ],
  diagram: {
    type: "flow",
    title: "Class လှန်ခြင်းက transition ကို ဘယ်လို စေ့ဆော်လဲ",
    nodes: [
      { t: "Element မှာ transition ရေးထားတယ်", sub: "ဥပမာ — transition: width 0.4s ease;", tone: 6 },
      { t: "JavaScript က class ထည့်/ဖျက်တယ်", sub: "box.classList.toggle(\"big\")", tone: 3 },
      { t: "CSS တန်ဖိုး ပြောင်းတယ်", sub: "width 100px → 200px", tone: 4 },
      { t: "Browser က အလယ်တန်ဖိုးတွေ တွက်ပြီး ချောချောပြောင်း", sub: "transition က အဲဒီကာလကို ဖြည့်ပေးတယ်", tone: 2 },
      { t: "transitionend event ထွက်တယ်", sub: "ပြီးသွားတဲ့အခါ နောက်အလုပ် လုပ်နိုင်တယ်", tone: 1 }
    ],
    caption: "JavaScript က class ပြောင်းတာ၊ CSS က လှုပ်ရှားမှုကို လုပ်တာ။ တာဝန် ခွဲထားတာမို့ ကုဒ် ရှင်းတယ်။"
  },
  sections: [
    {
      h: "Transition အခြေခံ — class လှန်ရုံ",
      p: "`transition` မှာ ဘယ် property ပြောင်းလဲမှုကို ဘယ်လောက်ကြာအောင် ဘယ်လို အရှိန်နဲ့ ပြမလဲ သတ်မှတ်တယ်။ CSS မှာ သတ်မှတ်ထားပြီး JavaScript က class ထည့်တာနဲ့ အလုပ်လုပ်တယ်။",
      code: `/* CSS */
.box {
  width: 100px;
  height: 100px;
  background: #3b82f6;
  transition: width 0.4s ease, background 0.4s ease;
}

.box.big {
  width: 200px;
  background: #16a34a;
}

/* JavaScript */
let box = document.querySelector(".box");
box.classList.toggle("big");`,
      lang: "css",
      file: "01-css-transition.html",
      lines: [
        { n: 5, t: "`transition` က ဘယ် property တွေ ပြောင်းရင် ဘယ်လောက်ကြာအောင် ပြမလဲ သတ်မှတ်တယ်။" },
        { n: "8-11", t: "`.big` class ဝင်လာရင် width နဲ့ background တန်ဖိုး ပြောင်းတယ်။" },
        { n: 14, t: "JavaScript က class ကို လှန်ရုံပဲ လုပ်တယ်။ တန်ဖိုး တွက်တာ browser ရဲ့ တာဝန်။" }
      ],
      tip: {
        type: "key",
        title: "transition က အစနဲ့ အဆုံး ရှိမှ အလုပ်လုပ်တယ်",
        text: "Transition က \"လက်ရှိ တန်ဖိုး\" နဲ့ \"တန်ဖိုးအသစ်\" ကြားကို ဖြည့်ပေးတယ်။ ဒါကြောင့် element က DOM ထဲ ရှိပြီး တန်ဖိုး နှစ်ခုလုံး ရှိဖို့ လိုတယ်။"
      }
    },
    {
      h: "ကြာချိန်၊ အရှိန်နှင့် Bounce",
      p: "`transition-duration` က ကြာချိန်၊ `transition-timing-function` က အရှိန်ပြောင်းပုံ။ `ease` က စတင်/အဆုံးမှာ နှေးတယ်။ `linear` က တူညီတဲ့ အရှိန်။ `cubic-bezier()` နဲ့ ကိုယ်ပိုင် အရှိန် ဖန်တီးနိုင်တယ်။",
      code: `.box.slow {
  transition-duration: 1.2s;
}

/* နည်းနည်း ခုန်ပြီး ရောက်တဲ့ ခံစားမှု */
.box.bounce {
  transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* Hover နဲ့ လက်တွေ့ စမ်း */
.hover-btn {
  transition: background 0.2s ease, transform 0.2s ease;
}

.hover-btn:hover {
  background: #e11d48;
  transform: translateY(-3px);
}`,
      lang: "css",
      file: "01-css-transition.html",
      lines: [
        { n: "1-3", t: "`1.2s` က ၁.၂ စက္ကန့်။ နှေးတဲ့ လှုပ်ရှားမှု ဖြစ်စေတယ်။" },
        { n: "6-8", t: "`cubic-bezier` ရဲ့ ဒုတိယ တန်ဖိုး ၁ ထက် ကြီးတာက နောက်ကို ဆွဲပြီး ခုန်တဲ့ ခံစားမှု ဖြစ်စေတယ်။" },
        { n: "11-19", t: "`transform: translateY(-3px)` က အပေါ်ကို ၃px မြှင့်တယ်။ `transform` က transition အတွက် ကောင်းတဲ့ property ပါ။" }
      ]
    },
    {
      h: "@keyframes — ထပ်ခါထပ်ခါ လှုပ်ရှားမှု",
      p: "Transition က အစ/အဆုံး နှစ်ခုပဲ ရှိတယ်။ အလယ်မှာ အဆင့်များစွာ လိုချင်ရင် `@keyframes` ကို သုံးတယ်။ Spinner နဲ့ pulse က အသုံးအများဆုံး ဥပမာတွေပါ။",
      code: `@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

.spinner {
  width: 60px;
  height: 60px;
  border: 6px solid #e5e7eb;
  border-top-color: #3b82f6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50%      { transform: scale(1.15); }
}

.pulse {
  animation: pulse 1s ease-in-out infinite;
}`,
      lang: "css",
      file: "01-css-transition.html",
      lines: [
        { n: "1-4", t: "`from` နဲ့ `to` က ၀% နဲ့ ၁၀၀% ကို ကိုယ်စားပြုတယ်။" },
        { n: 12, t: "`animation: spin 1s linear infinite` က animation နာမည်၊ ကြာချိန်၊ အရှိန်၊ ထပ်ခါ လုပ်မလား သတ်မှတ်တယ်။" },
        { n: "15-19", t: "`0%` နဲ့ `100%` တူညီအောင် ထားတာမို့ pulse က ချောချော ပြန်စတယ်။" }
      ],
      tip: {
        type: "info",
        title: "Performance အတွက် transform နှင့် opacity",
        text: "`width`, `height`, `top`, `left` ပြောင်းတာက layout ကို ပြန်တွက်စေတယ်။ `transform` နဲ့ `opacity` က ပိုမြန်တယ်။ လှုပ်ရှားမှု များတဲ့ နေရာမှာ ဒီနှစ်ခုကို ဦးစားပေးပါ။"
      }
    },
    {
      h: "Toast နှင့် transitionend",
      p: "Toast ကို ချက်ချင်း ဖျောက်လိုက်ရင် transition မမြင်ရဘူး။ Class ထည့်ပြီး ခဏစောင့်မှ ဖျက်ရတယ်။ Animation ပြီးတာကို သိချင်ရင် `transitionend` event ကို နားထောင်နိုင်တယ်။",
      code: `let toast = document.querySelector(".toast");

// ပြ
toast.classList.add("show");

// ခဏနောက် ပြန်ဖျောက်
setTimeout(() => {
  toast.classList.remove("show");
}, 2000);

// transition ပြီးတာ သိချင်ရင်
toast.addEventListener("transitionend", () => {
  console.log("ဖျောက်တာ ပြီးပြီ");
});

// keyframes ရဲ့ iteration တစ်ပတ် ပြီးတိုင်း
let spinner = document.querySelector(".spinner");
spinner.addEventListener("animationiteration", () => {
  console.log("တစ်ပတ် ပြီး");
});`,
      lang: "js",
      file: "01-css-transition.html",
      lines: [
        { n: "4, 7-9", t: "`show` class ထည့်တာနဲ့ opacity/transform transition စတယ်။ ၂ စက္ကန့်နောက် ပြန်ဖျက်တယ်။" },
        { n: "12-14", t: "`transitionend` က transition တစ်ခု ပြီးတိုင်း ခေါ်တယ်။ မလိုအပ်တဲ့ event တွေ ပါနိုင်တာမို့ `event.propertyName` ကို စစ်တာက ပိုကောင်းတယ်။" },
        { n: "17-20", t: "`animationiteration` က keyframes animation တစ်ပတ် ပြီးတိုင်း ခေါ်တယ်။" }
      ],
      tip: {
        type: "warn",
        title: "display: none နဲ့ transition မလုပ်ဘူး",
        text: "`display: none` က element ကို layout ထဲက ဖျက်တယ်။ `block` ပြန်လုပ်တဲ့ အချိန်မှာ transition အတွက် အစ တန်ဖိုး မရှိတော့ဘူး။ `visibility` + `opacity` ဒါမှမဟုတ် `requestAnimationFrame` ကို သုံးပါ။"
      }
    }
  ],
  pitfalls: [
    { t: "Transition မလုပ်ဘူး", d: "`transition` ရေးထားတဲ့ element က DOM ထဲ ရှိရမယ်။ `display: none` ကနေ ပြန်ပြတဲ့အခါ အစတန်ဖိုး မရှိတာမို့ transition မလုပ်ဘူး။" },
    { t: "Class ထည့်တာနဲ့ တစ်ချိန်တည်း တန်ဖိုး ပြောင်းတယ်", d: "Element အသစ် ဆောက်ပြီး ချက်ချင်း class ထည့်ရင် browser က အစတန်ဖိုးကို မမှတ်လိုက်ဘူး။ `requestAnimationFrame` ဒါမှမဟုတ် အနည်းငယ် စောင့်ပြီးမှ ထည့်ပါ။" },
    { t: "Transition မလုပ်နိုင်တဲ့ property သုံးတယ်", d: "`display`, `position` စတဲ့ property တွေက transition မလုပ်ဘူး။ `transform`, `opacity`, `color`, `width` စတာတွေ သုံးပါ။" },
    { t: "transitionend က event အများကြီး ခေါ်တယ်", d: "Property တစ်ခုစီအတွက် event ခေါ်တာမို့ `event.propertyName` ကို စစ်ပါ။ ဒါမှမဟုတ် `{ once: true }` ကို သုံးပါ။" }
  ],
  recap: [
    "`transition` က တန်ဖိုး နှစ်ခုကြားကို ချောချောပြောင်းပေးတယ်။",
    "JavaScript က class လှန်တာ၊ CSS က လှုပ်ရှားမှုကို လုပ်တာ။",
    "အဆင့်များစွာ လိုချင်ရင် `@keyframes` နဲ့ `animation` ကို သုံးပါ။",
    "Transition မလုပ်ရင် `display`, timing, property အမျိုးအစားကို စစ်ပါ။",
    "ပြီးတာကို သိချင်ရင် `transitionend` / `animationiteration` ကို နားထောင်ပါ။"
  ],
  exercise: {
    title: "ကိုယ်တိုင် စမ်းကြည့်ပါ",
    steps: [
      "Button တစ်ခု နှိပ်ရင် box က အလျား ၂ ဆ ဖြစ်အောင် class နဲ့ လုပ်ပါ။",
      "`transition-duration` ကို 0.2s, 0.6s, 1.2s ပြောင်းပြီး ကွာခြားချက် ကြည့်ပါ။",
      "`@keyframes` နဲ့ box ကို ဘယ်-ညာ လှုပ်တဲ့ animation ရေးပါ။",
      "Toast တစ်ခု ဆောက်ပြီး class ထည့်/ဖျက်နဲ့ ပြ/ဖျောက် လုပ်ပါ။"
    ],
    hint: "DevTools → Elements မှာ class ကို လက်တွေ့ ထည့်/ဖျက်ကြည့်ရင် transition အလုပ်လုပ်ပုံကို မြန်မြန် စမ်းနိုင်တယ်။"
  }
});

/* ------------------------------------------------------------
   Animation 02 — Web Animations API
   ------------------------------------------------------------ */
JSL.lessons.push({
  id: "animation-02",
  chapter: "animation",
  order: 2,
  num: "02",
  title: "Web Animations API (WAAPI)",
  subtitle: "JavaScript ထဲကနေ animation ကို ဖန်တီး၊ ရပ်၊ ပြန်၊ အရှိန်ပြောင်း ထိန်းချုပ်ခြင်း",
  minutes: 14,
  level: "အလယ်အလတ်",
  tags: ["WAAPI", "element.animate", "keyframes", "finished"],
  fileName: "02-waapi.html",
  source: "../06-animation/02-waapi.html",
  intro: [
    "CSS animation က ရေးရ လွယ်ပေမယ့် JavaScript ကနေ \"ခဏရပ်\"၊ \"ပြန်စ\"၊ \"အရှိန် နှစ်ဆ\" လုပ်ချင်တဲ့အခါ ခက်တယ်။ Web Animations API (WAAPI) က animation ကို object အနေနဲ့ ဖန်တီးပြီး `pause()`, `play()`, `reverse()`, `playbackRate` စတဲ့ control တွေ ပေးတယ်။",
    "ဒါပေမယ့် ရိုးရိုး animation တွေအတွက် CSS က ပိုတိုပြီး ဖတ်ရလွယ်တယ်။ WAAPI ကို လိုအပ်တဲ့အခါမှ သုံးပါ။"
  ],
  goals: [
    "`element.animate(keyframes, options)` ကို သုံးနိုင်မယ်။",
    "`duration`, `iterations`, `easing`, `fill` တို့ရဲ့ အဓိပ္ပာယ် သိမယ်။",
    "`finished` Promise နဲ့ animation ပြီးတာကို စောင့်နိုင်မယ်။",
    "`pause`, `play`, `reverse`, `cancel` နဲ့ ထိန်းချုပ်နိုင်မယ်။",
    "CSS နဲ့ WAAPI ကို ဘယ်အခါ ရွေးမလဲ ဆုံးဖြတ်နိုင်မယ်။"
  ],
  diagram: {
    type: "compare",
    title: "CSS Animation နှင့် WAAPI",
    left: {
      title: "CSS transition / keyframes",
      sub: "Style sheet မှာ ရေး",
      tone: 6,
      items: ["ရေးရ လွယ်၊ ကုဒ် တို", "Performance ကောင်း", "Class လှန်ရုံနဲ့ ရ", "JS ကနေ ထိန်းရ ခက်", "ရိုးရိုး effect အတွက် သင့်"]
    },
    right: {
      title: "WAAPI",
      sub: "JavaScript မှာ ရေး",
      tone: 2,
      items: ["pause / play / reverse ရ", "playbackRate ပြောင်းရ", "finished Promise ရ", "နည်းနည်း ရှည်", "Dynamic / interactive အတွက် သင့်"]
    },
    caption: "ရိုးရိုး hover, fade, slide ဆိုရင် CSS။ ဂိမ်း၊ player၊ interaction များတဲ့ နေရာဆိုရင် WAAPI။"
  },
  sections: [
    {
      h: "element.animate() — အခြေခံ",
      p: "`element.animate(keyframes, options)` က animation object တစ်ခု ပြန်တယ်။ `keyframes` က တန်ဖိုး အဆင့်ဆင့် array၊ `options` က ကြာချိန်၊ ထပ်ခါ အရေအတွက်၊ အရှိန်၊ ပြီးရင် ဘယ်တန်ဖိုး ထားမလဲ သတ်မှတ်တယ်။",
      code: `let box = document.getElementById("box");

let animation = box.animate(
  [
    { transform: "translateX(0)" },
    { transform: "translateX(300px)" }
  ],
  {
    duration: 1000,          // မီလီစက္ကန့်
    iterations: 1,
    easing: "ease-in-out",
    fill: "forwards"         // ပြီးရင် နောက်ဆုံး အနေအထား ထား
  }
);

// finished က Promise ပြန်တယ်
animation.finished.then(() => {
  console.log("ရွှေ့ပြီး");
});`,
      lang: "js",
      file: "02-waapi.html",
      lines: [
        { n: "3-9", t: "Keyframes က အစနဲ့ အဆုံး အနေအထား နှစ်ခု။ အလယ် အဆင့်တွေ ထပ်ထည့်နိုင်တယ်။" },
        { n: "10-16", t: "`duration` က ၁ စက္ကန့်၊ `fill: \"forwards\"` က ပြီးရင် နောက်ဆုံး အနေအထားမှာ ရပ်ထားတယ်။" },
        { n: "19-21", t: "`finished` က Promise မို့ `.then()` နဲ့ animation ပြီးတဲ့အခါ နောက်အလုပ် လုပ်နိုင်တယ်။" }
      ],
      tip: {
        type: "key",
        title: "fill ကို မေ့ရင် ပြန်ခုန်သွားမယ်",
        text: "`fill` မထည့်ရင် animation ပြီးတာနဲ့ element က မူလ အနေအထားကို ချက်ချင်း ပြန်သွားတယ်။ နောက်ဆုံး အနေအထားမှာ ထားချင်ရင် `fill: \"forwards\"` ထည့်ပါ။"
      }
    },
    {
      h: "အလယ် အဆင့်များနှင့် offset",
      p: "Keyframes ထဲမှာ `offset` ထည့်ပြီး အချိန်ရဲ့ ဘယ်ရာခိုင်နှုန်းမှာ ဘယ်တန်ဖိုး ရှိမလဲ သတ်မှတ်နိုင်တယ်။ `offset: 0.5` ဆိုတာ ထက်ဝက်မှာ ဆိုတဲ့ အဓိပ္ပာယ်။",
      code: `function fadeBox() {
  box.animate(
    [
      { opacity: 1, offset: 0 },
      { opacity: 0.2, offset: 0.5 },
      { opacity: 1, offset: 1 }
    ],
    {
      duration: 1200,
      easing: "linear"
    }
  );
}

function shakeBox() {
  box.animate(
    [
      { transform: "translateX(0)" },
      { transform: "translateX(-12px)" },
      { transform: "translateX(12px)" },
      { transform: "translateX(-8px)" },
      { transform: "translateX(8px)" },
      { transform: "translateX(0)" }
    ],
    { duration: 400, iterations: 2 }
  );
}`,
      lang: "js",
      file: "02-waapi.html",
      lines: [
        { n: "3-7", t: "`offset` က ၀ မှ ၁ အတွင်း။ ၀.၅ မှာ opacity ၀.၂ ဖြစ်တယ်။" },
        { n: "16-24", t: "ဘယ်-ညာ ရွှေ့တဲ့ အဆင့်တွေ ထည့်ပြီး လှုပ်တဲ့ ခံစားမှု ဖန်တီးတယ်။" },
        { n: 24, t: "`iterations: 2` က နှစ်ခါ ထပ်လုပ်တယ်။" }
      ]
    },
    {
      h: "ရပ်ခြင်း၊ ပြန်စခြင်း၊ အရှိန်ပြောင်းခြင်း",
      p: "WAAPI ရဲ့ အားသာချက်က animation ကို object အနေနဲ့ ထိန်းချုပ်နိုင်တာပါ။ `pause()`, `play()`, `reverse()`, `cancel()` နဲ့ `playbackRate` ကို ပြောင်းနိုင်တယ်။ Element တစ်ခုမှာ animation ဘယ်နှခုမဆို run နေနိုင်တာမို့ အားလုံးကို ရပ်ချင်ရင် `getAnimations()` ကို သုံးတယ်။",
      code: `let current = null;

function startMove() {
  current = box.animate(
    [
      { transform: "translateX(0) rotate(0deg)" },
      { transform: "translateX(300px) rotate(180deg)" }
    ],
    {
      duration: 2000,
      iterations: Infinity,
      direction: "alternate"
    }
  );
}

// အားလုံး ရပ်
box.getAnimations().forEach((animation) => {
  animation.cancel();
});

// တစ်ခုတည်းကို ထိန်းချုပ်
current.pause();
current.play();
current.reverse();
current.playbackRate = 0.5;   // နှေးအောင်
current.playbackRate = 2;     // မြန်အောင်`,
      lang: "js",
      file: "02-waapi.html",
      lines: [
        { n: "4-14", t: "`iterations: Infinity` နဲ့ `direction: \"alternate\"` က ဘယ်-ညာ ပြန်လှုပ်နေတဲ့ animation ဖြစ်စေတယ်။" },
        { n: "17-19", t: "`getAnimations()` က element ပေါ်မှာ run နေတဲ့ animation အားလုံးကို ပြန်တယ်။ `cancel()` က ဖျက်တယ်။" },
        { n: "22-26", t: "`pause` / `play` / `reverse` က အခြေအနေ ထိန်းချုပ်တယ်။ `playbackRate` က အရှိန် ပြောင်းတယ်။" }
      ],
      tip: {
        type: "warn",
        title: "cancel နှင့် pause မတူဘူး",
        text: "`pause()` က ရပ်ထားတယ်၊ ပြန်ဖွင့်လို့ ရတယ်။ `cancel()` က animation ကို ပယ်ဖျက်ပြီး effect ကို ဖယ်ရှားတယ်။ `fill: \"forwards\"` ရှိရင် cancel လုပ်တာနဲ့ နောက်ဆုံး အနေအထား ပျောက်နိုင်တယ်။"
      }
    },
    {
      h: "CSS နှင့် WAAPI — ဘယ်အခါ သုံးမလဲ",
      p: "CSS က ရိုးရိုး effect တွေအတွက် အကောင်းဆုံး။ WAAPI က JavaScript နဲ့ တွဲပြီး အခြေအနေ ထိန်းချုပ်ရတဲ့ animation တွေအတွက် သင့်တယ်။ ဥပမာ — ဂိမ်းဇာတ်ကောင်၊ music player ရဲ့ visualizer၊ drag လုပ်နေစဉ် animation။",
      diagram: {
        type: "pipeline",
        title: "WAAPI animation တစ်ခုရဲ့ ဘဝစက်ဝန်း",
        items: [
          { t: "animate()", sub: "animation object ရ" },
          { t: "run", sub: "duration အတွင်း" },
          { t: "finished", sub: "Promise resolve" },
          { t: "fill / cancel", sub: "နောက်ဆုံး အနေအထား" }
        ]
      },
      code: `// ရိုးရိုး effect → CSS
// .box { transition: transform 0.3s ease; }
// .box.big { transform: scale(1.2); }

// JS ကနေ ထိန်းချုပ်ချင်တဲ့ effect → WAAPI
let anim = box.animate(
  [{ transform: "scale(1)" }, { transform: "scale(1.5)" }],
  { duration: 1000, iterations: Infinity, direction: "alternate" }
);

anim.pause();          // ခဏရပ်
anim.play();           // ပြန်စ
anim.reverse();        // ပြောင်းပြန်
anim.playbackRate = 2; // နှစ်ဆ မြန်`,
      lang: "js",
      file: "02-waapi.html",
      lines: [
        { n: "1-3", t: "ရိုးရိုး class အခြေခံ effect ဆိုရင် CSS က ပိုတိုတယ်။" },
        { n: "6-9", t: "JavaScript က ထိန်းချုပ်ရမယ့် animation ဆိုရင် `animate()` ကို သုံးတယ်။" },
        { n: "11-14", t: "ဒီ method တွေက WAAPI ရဲ့ အဓိက အားသာချက် ဖြစ်တယ်။" }
      ]
    }
  ],
  pitfalls: [
    { t: "fill မထည့်လို့ animation ပြီးရင် ပြန်ခုန်တယ်", d: "နောက်ဆုံး အနေအထားမှာ ထားချင်ရင် `fill: \"forwards\"` ထည့်ပါ။" },
    { t: "Infinite animation ရဲ့ finished ကို စောင့်တယ်", d: "`iterations: Infinity` ဆိုရင် `finished` က ဘယ်တော့မှ resolve မဖြစ်ဘူး။ ရပ်ချင်ရင် `cancel()` ဒါမှမဟုတ် `pause()` ကို သုံးပါ။" },
    { t: "Animation အဟောင်းတွေ စုပုံနေတယ်", d: "Button နှိပ်တိုင်း `animate()` အသစ် ဆောက်ရင် animation object တွေ များလာမယ်။ လိုအပ်ရင် အဟောင်းကို `cancel()` လုပ်ပါ။" },
    { t: "CSS နဲ့ WAAPI ကို တစ်ချိန်တည်း ထိန်းမိတယ်", d: "တူညီတဲ့ property ကို နှစ်နေရာက ပြောင်းရင် ရလဒ် မတည်ငြိမ်နိုင်ဘူး။ တစ်နည်းတည်း ရွေးပါ။" }
  ],
  recap: [
    "`element.animate(keyframes, options)` က animation object ပြန်တယ်။",
    "`duration`, `iterations`, `easing`, `fill` က အဓိက option တွေ။",
    "`finished` က Promise မို့ animation ပြီးတာကို စောင့်နိုင်တယ်။",
    "`pause`, `play`, `reverse`, `cancel`, `playbackRate` နဲ့ ထိန်းချုပ်နိုင်တယ်။",
    "ရိုးရိုး effect အတွက် CSS၊ interactive effect အတွက် WAAPI။"
  ],
  exercise: {
    title: "ကိုယ်တိုင် စမ်းကြည့်ပါ",
    steps: [
      "Box တစ်ခုကို ဘယ်ကနေ ညာ ၃၀၀px ရွှေ့တဲ့ animation ရေးပါ။",
      "`fill: \"forwards\"` ထည့်တဲ့အခါနဲ့ မထည့်တဲ့အခါ ကွာခြားချက် ကြည့်ပါ။",
      "`pause` နဲ့ `play` button နှစ်ခု ဆောက်ပြီး animation ကို ထိန်းပါ။",
      "`playbackRate` ကို 0.5 နဲ့ 2 ပြောင်းပြီး အရှိန် ကွာခြားချက် ကြည့်ပါ။",
      "`getAnimations()` နဲ့ animation အားလုံးကို ရပ်တဲ့ button တစ်ခု ဆောက်ပါ။"
    ],
    hint: "Animation object ကို variable မှာ သိမ်းထားမှ နောက်မှ `pause()` / `play()` ခေါ်နိုင်မယ်။"
  }
});
