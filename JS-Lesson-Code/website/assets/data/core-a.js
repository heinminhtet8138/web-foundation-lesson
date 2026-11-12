/* ============================================================
   core-a.js — အခန်း ၁ (သင်ခန်းစာ ၁–၆)
   ============================================================ */
window.JSL = window.JSL || {};
JSL.lessons = JSL.lessons || [];

/* ------------------------------------------------------------
   01 — Hello JavaScript
   ------------------------------------------------------------ */
JSL.lessons.push({
  id: "core-01",
  chapter: "core",
  order: 1,
  num: "01",
  title: "Hello JavaScript — ပထမဆုံး ကုဒ်",
  subtitle: "JavaScript ဆိုတာ ဘာလဲ၊ ဘယ်နေရာမှာ ရေးပြီး ဘယ်လို အလုပ်လုပ်လဲ",
  minutes: 10,
  level: "အခြေခံ",
  tags: ["console.log", "script", "DOM"],
  fileName: "01-hello-js.html",
  source: "../01-core/01-hello-js.html",
  intro: [
    "JavaScript ဆိုတာ ဝဘ်စာမျက်နှာကို အသက်ဝင်လာအောင် လုပ်ပေးတဲ့ ဘာသာစကားပါ။ HTML က အကြောင်းအရာကို ဖွဲ့စည်းတယ်၊ CSS က အလှအပကို ဖန်တီးတယ်။ JavaScript ကတော့ နှိပ်လိုက်တဲ့အခါ တစ်ခုခု ဖြစ်လာအောင်၊ ဒေတာ တွက်ချက်အောင်၊ စာမျက်နှာကို ပြောင်းလဲအောင် လုပ်ပေးတယ်။",
    "ဒီသင်ခန်းစာမှာ ကုဒ်ရေးတဲ့ နေရာ၊ ရလဒ်ကြည့်တဲ့ Console နဲ့ စာမျက်နှာပေါ်မှာ စာသားပြခြင်းကို စတင်လေ့လာပါမယ်။ ဒီအဆင့်က နောက်သင်ခန်းစာအားလုံးရဲ့ အခြေခံဖြစ်ပါတယ်။"
  ],
  goals: [
    "`<script>` ကို HTML ရဲ့ ဘယ်နေရာမှာ ထည့်ရမလဲ သိမယ်။",
    "`console.log()` နဲ့ ရလဒ်ကို Console မှာ ကြည့်နိုင်မယ်။",
    "`getElementById()` နဲ့ element ကို ရှာပြီး စာသား ပြောင်းနိုင်မယ်။",
    "`document.write()` ကို ဘာကြောင့် မသုံးသင့်လဲ နားလည်မယ်။"
  ],
  diagram: {
    type: "flow",
    title: "Browser ထဲမှာ JavaScript အလုပ်လုပ်ပုံ",
    nodes: [
      { t: "HTML ဖိုင် ဖွင့်တယ်", sub: "browser က အပေါ်ကနေ အောက်ကို တစ်ကြောင်းချင်း ဖတ်တယ်", tone: 6 },
      { t: "DOM ဆောက်တယ်", sub: "HTML tag တွေကို element အစုအဖွဲ့ (DOM Tree) အဖြစ် ပြောင်းတယ်", tone: 1 },
      { t: "<script> ကို ရောက်တဲ့အခါ JS run တယ်", sub: "console.log နဲ့ DOM ပြင်တာတွေ ဒီမှာ ဖြစ်တယ်", tone: 3 },
      { t: "ရလဒ် ပေါ်လာတယ်", sub: "Console မှာ စာသား၊ စာမျက်နှာမှာ ပြောင်းလဲမှု", tone: 2 }
    ],
    caption: "JavaScript က HTML နဲ့ DOM ဆောက်ပြီးမှ အလုပ်လုပ်တယ်။ ဒါကြောင့် script ကို body ရဲ့ အောက်ဆုံးမှာ ထားတာက အစပိုင်းအတွက် အလွယ်ဆုံးပါ။"
  },
  sections: [
    {
      h: "script ကို ဘယ်နေရာမှာ ထည့်မလဲ",
      p: "JavaScript ကို HTML ထဲမှာ `<script>` tag နဲ့ ရေးနိုင်ပါတယ်။ Browser က HTML ကို အပေါ်ကနေ အောက်ကို ဖတ်တာဖြစ်လို့ script ကို `<body>` ရဲ့ အောက်ဆုံးမှာ ထားရင် အပေါ်က element တွေ အားလုံး အဆင်သင့် ဖြစ်နေပါပြီ။",
      code: `<!DOCTYPE html>
<html lang="my">
<body>

  <h1 id="title">01 — Hello JavaScript</h1>
  <p id="output"></p>

  <!-- HTML အားလုံး ဖတ်ပြီးမှ script ကို run မယ် -->
  <script>
    // ဒီနေရာမှာ JavaScript ရေးမယ်
  </script>

</body>
</html>`,
      lang: "html",
      file: "01-hello-js.html",
      lines: [
        { n: 5, t: "`h1` နဲ့ `p` မှာ id ရှိတယ်။ နောက်မှ JavaScript က ဒီ id နဲ့ ရှာမယ်။" },
        { n: "7-9", t: "Browser က ဒီနေရာကို ရောက်တဲ့အခါမှ script ထဲက ကုဒ်ကို run တယ်။ အပေါ်က element တွေ ရှိပြီးသားဖြစ်တယ်။" }
      ],
      tip: {
        type: "info",
        title: "script ကို head ထဲ ထည့်ချင်ရင်",
        text: "`<head>` ထဲမှာ ထည့်ရင် `defer` ကို ထည့်ပါ — `<script src=\"app.js\" defer></script>`။ ဒါမှ HTML ဖတ်ပြီးမှ JS run မယ်။"
      }
    },
    {
      h: "console.log — ရလဒ်ကို ကြည့်ခြင်း",
      p: "`console.log()` က ကုဒ်ရဲ့ ရလဒ်ကို browser ရဲ့ Console မှာ ပြတယ်။ စာမျက်နှာပေါ်မှာ မပေါ်ဘူး၊ ဒါပေမယ့် ကုဒ် အလုပ်လုပ်မလုပ် စမ်းဖို့ အကောင်းဆုံး နည်းလမ်းပါ။ Windows မှာ `F12`၊ Mac မှာ `Cmd + Option + J` နှိပ်ပြီး ဖွင့်နိုင်တယ်။",
      code: `console.log("Hello JavaScript");

console.log(2 + 3);      // 5
console.log(10 * 4);     // 40

console.log("ကျွန်တော်" + " " + "JavaScript လေ့လာနေတယ်");`,
      lang: "js",
      lines: [
        { n: 1, t: "စာသားတစ်ကြောင်း ထုတ်ပြမယ်။ စာသားကို double quote `\" \"` ဒါမှမဟုတ် single quote `' '` ထဲ ထည့်ရတယ်။" },
        { n: "3-4", t: "`console.log` ထဲမှာ တွက်ချက်မှုကို တိုက်ရိုက် ထည့်လို့ရတယ်။ ရလဒ်က `5` နဲ့ `40`။" },
        { n: 6, t: "`+` နဲ့ စာသားတွေကို ဆက်တယ်။ စာသားနဲ့ စာသား ဆက်တာကို concatenation လို့ ခေါ်တယ်။" }
      ]
    },
    {
      h: "စာမျက်နှာပေါ်မှာ ပြချင်ရင် — DOM ကို ပြင်ခြင်း",
      p: "စာမျက်နှာပေါ်က element ကို ပြင်ချင်ရင် အဆင့် နှစ်ဆင့် ရှိတယ်။ ပထမ — element ကို ရှာမယ်။ ဒုတိယ — ရှာတွေ့တဲ့ element ရဲ့ စာသားကို ပြောင်းမယ်။",
      code: `// ၁။ id="output" ရှိတဲ့ element ကို ရှာ
let output = document.getElementById("output");

// ၂။ ရှာတွေ့တဲ့ element ရဲ့ စာသားကို ပြောင်း
output.textContent = "မင်္ဂလာပါ။ JavaScript စပြီ။";`,
      lang: "js",
      lines: [
        { n: 2, t: "`document` က စာမျက်နှာ တစ်ခုလုံးကို ကိုယ်စားပြုတယ်။ `getElementById(\"output\")` က `id=\"output\"` ပါတဲ့ element ကို ရှာတယ်။" },
        { n: 5, t: "`textContent` က element ရဲ့ အတွင်းက စာသားကို ဖတ်/ရေး လုပ်တယ်။ ဒီနေရာမှာ စာသားအသစ် ထည့်လိုက်တယ်။" }
      ],
      tip: {
        type: "key",
        title: "အမြဲတမ်း မှတ်ထားပါ",
        text: "element ကို အရင်ရှာ၊ ပြီးမှ ပြင်ပါ။ မရှိတဲ့ element ကို ပြင်ဖို့ ကြိုးစားရင် `null` နဲ့ တွေ့ပြီး error ဖြစ်တယ်။"
      }
    },
    {
      h: "document.write ကို မသုံးပါနဲ့",
      p: "အရင်က သင်ခန်းစာတွေမှာ `document.write()` ကို သုံးတတ်ကြတယ်။ ဒါပေမယ့် စာမျက်နှာ ဖွင့်ပြီးမှ ခေါ်ရင် စာမျက်နှာ တစ်ခုလုံးကို ဖျက်ပစ်နိုင်တယ်။ ဒါကြောင့် စာသားပြချင်ရင် `textContent` ကို သုံးပါ။",
      code: `// ❌ မလုပ်သင့်
// document.write("Hello");

// ✅ လုပ်သင့်
document.getElementById("output").textContent = "Hello";`,
      lang: "js",
      lines: [
        { n: 2, t: "မူလ စာမျက်နှာကို ဖျက်ပစ်နိုင်လို့ မသုံးသင့်ပါ။" },
        { n: 5, t: "element ကို ရှာပြီး စာသား ပြောင်းတာက လုံခြုံပြီး ထိန်းချုပ်ရ လွယ်တယ်။" }
      ]
    }
  ],
  pitfalls: [
    { t: "Console မှာ ဘာမှ မပေါ်ဘူး", d: "Console panel ကို မဖွင့်ထားလို့ ဖြစ်နိုင်တယ်။ `F12` (Windows) သို့မဟုတ် `Cmd + Option + J` (Mac) နှိပ်ပါ။" },
    { t: "Cannot read properties of null", d: "`getElementById` က မတွေ့ရင် `null` ပြန်တယ်။ script က element မဆောက်ခင် အရင် run နေနိုင်တယ်။ script ကို body အောက်ဆုံးမှာ ထားပါ။" },
    { t: "document.write သုံးမိတယ်", d: "စာမျက်နှာ တစ်ခုလုံး ပျက်နိုင်တယ်။ စာသားအတွက် `textContent`၊ HTML အတွက် `innerHTML` ကို သုံးပါ။" }
  ],
  recap: [
    "`<script>` ကို `<body>` ရဲ့ အောက်ဆုံးမှာ ထားရင် HTML element တွေ အဆင်သင့် ဖြစ်နေတယ်။",
    "`console.log()` က ရလဒ်ကို Console မှာ ပြတယ်။ စမ်းသပ်ဖို့ အကောင်းဆုံး။",
    "DOM ကို ပြင်ဖို့ — element ရှာ၊ ပြီးမှ `textContent` ပြောင်း။",
    "`document.write()` ကို မသုံးပါနဲ့။"
  ],
  exercise: {
    title: "ကိုယ်တိုင် စမ်းကြည့်ပါ",
    steps: [
      "`output` ထဲက စာသားကို သင့်နာမည်နဲ့ အစားထိုးပါ။",
      "`console.log(7 * 8);` ကို ထပ်ထည့်ပြီး Console မှာ `56` ရမရ စစ်ပါ။",
      "`<p id=\"extra\"></p>` အသစ်တစ်ခု ထည့်ပြီး JavaScript ကနေ စာသား ထည့်ကြည့်ပါ။"
    ],
    hint: "Console ကို ဖွင့်ထားပြီး ကုဒ်တစ်ကြောင်း ပြောင်းတိုင်း refresh လုပ်ပါ။"
  }
});

/* ------------------------------------------------------------
   02 — Variables
   ------------------------------------------------------------ */
JSL.lessons.push({
  id: "core-02",
  chapter: "core",
  order: 2,
  num: "02",
  title: "Variable — တန်ဖိုး သိမ်းတဲ့ သေတ္တာ",
  subtitle: "let, const, var နဲ့ scope (နယ်ပယ်) ကို နားလည်ခြင်း",
  minutes: 12,
  level: "အခြေခံ",
  tags: ["let", "const", "scope"],
  fileName: "02-variables.html",
  source: "../01-core/02-variables.html",
  intro: [
    "Variable ဆိုတာ တန်ဖိုးတစ်ခုကို နာမည်ပေးပြီး သိမ်းထားတဲ့ သေတ္တာလိုပါပဲ။ နာမည်၊ အသက်၊ ဈေးနှုန်း စတဲ့ ဒေတာတွေကို variable ထဲ ထည့်ထားရင် နောက်ပိုင်းမှာ ပြန်သုံးနိုင်တယ်။",
    "ဒီသင်ခန်းစာမှာ ပြောင်းလဲနိုင်တဲ့ `let`၊ မပြောင်းရတဲ့ `const` နဲ့ ရှေးဟောင်း `var` ရဲ့ ကွာခြားချက်ကို လေ့လာပါမယ်။ Scope ဆိုတဲ့ နယ်ပယ်အကြောင်းလည်း ပါမယ်။"
  ],
  goals: [
    "`let` နဲ့ တန်ဖိုး ပြောင်းနည်းကို သိမယ်။",
    "`const` ကို ဘယ်အချိန် သုံးရမလဲ နားလည်မယ်။",
    "Block scope ဆိုတာ ဘာလဲ၊ `var` နဲ့ ဘာကွာလဲ သိမယ်။",
    "နာမည် ပေးတဲ့ စည်းမျဉ်းနဲ့ camelCase ကို လိုက်နာနိုင်မယ်။"
  ],
  diagram: {
    type: "compare",
    title: "let နှင့် const — ဘယ်ဟာကို သုံးမလဲ",
    left: {
      title: "let — ပြောင်းလဲနိုင်တယ်",
      sub: "တန်ဖိုး ထပ်ပြောင်းမယ်ဆိုရင်",
      tone: 6,
      items: ["ပြန်ပြီး တန်ဖိုး ထည့်လို့ရ", "Block scope ရှိ", "အများအားဖြင့် loop နဲ့ တွက်ချက်မှုအတွက်"]
    },
    right: {
      title: "const — မပြောင်းရဘူး",
      sub: "တစ်ခါ သတ်မှတ်ပြီး မပြောင်းရင်",
      tone: 2,
      items: ["တန်ဖိုး ပြန်မထည့်ရ", "Block scope ရှိ", "Array/Object ကို သိမ်းရင် အတွင်းပိုင်း ပြင်လို့ရ"]
    },
    caption: "မူလအားဖြင့် `const` ကို ဦးစားပေးပါ။ တန်ဖိုး ပြောင်းဖို့ လိုမှ `let` ကို သုံးပါ။ `var` ကို အသစ်ရေးတဲ့ ကုဒ်မှာ မသုံးပါနဲ့။"
  },
  sections: [
    {
      h: "let — ပြောင်းလဲနိုင်တဲ့ တန်ဖိုး",
      p: "`let` နဲ့ ကြေညာထားတဲ့ variable ရဲ့ တန်ဖိုးကို နောက်မှာ ပြောင်းလို့ရတယ်။ အသက် တိုးတာ၊ နာမည် ပြောင်းတာမျိုးအတွက် သုံးတယ်။",
      code: `let name = "Aung Aung";
let age = 20;

console.log(name);   // Aung Aung
console.log(age);    // 20

// တန်ဖိုး ပြောင်း
name = "Su Su";
age = age + 1;

console.log(name);   // Su Su
console.log(age);    // 21`,
      lang: "js",
      lines: [
        { n: "1-2", t: "`let` နဲ့ variable နှစ်ခု ကြေညာတယ်။ `=` က ညာဘက်က တန်ဖိုးကို ဘယ်ဘက်က variable ထဲ ထည့်တယ်။" },
        { n: "4-5", t: "သိမ်းထားတဲ့ တန်ဖိုးကို ပြန်ဖတ်ပြီး ထုတ်ပြတယ်။" },
        { n: "8-9", t: "`=` ကို ပြန်သုံးပြီး တန်ဖိုး အသစ် ထည့်တယ်။ `age + 1` က အရင် တန်ဖိုး 20 ကို ယူပြီး 1 တိုးတယ်။" }
      ]
    },
    {
      h: "const — တစ်ခါ သတ်မှတ်ပြီး မပြောင်းရ",
      p: "`const` က constant ရဲ့ အတိုကောက်ပါ။ တစ်ခါ တန်ဖိုး ပေးပြီးရင် နောက်တစ်ခါ ပြန်မပေးရဘူး။ ပြန်ပေးဖို့ ကြိုးစားရင် error ဖြစ်တယ်။",
      code: `const PI = 3.14;
console.log(PI);

// ❌ ဒါက error ဖြစ်မယ်
// PI = 3.15;
// TypeError: Assignment to constant variable.`,
      lang: "js",
      lines: [
        { n: 1, t: "`const` နဲ့ ကြေညာတဲ့အခါ တန်ဖိုးကို တစ်ခါတည်း ပေးရတယ်။ နောက်မှ ပေးလို့ မရဘူး။" },
        { n: "4-5", t: "ပြန်ပြောင်းဖို့ ကြိုးစားရင် error ဖြစ်တယ်။ ဒါက မတော်တဆ ပြောင်းမိခြင်းကို ကာကွယ်ပေးတယ်။" }
      ],
      tip: {
        type: "warn",
        title: "const နဲ့ object/array",
        text: "`const user = { name: \"Aung\" };` ဆိုရင် `user = {}` လို့ ပြန်မပေးရဘူး။ ဒါပေမယ့် `user.name = \"Su\"` လို့ အတွင်းက တန်ဖိုးကို ပြင်လို့ ရတယ်။"
      }
    },
    {
      h: "var နဲ့ scope — ဘာကွာလဲ",
      p: "`var` က အရင်ခေတ် နည်းလမ်းပါ။ `let`/`const` က `{ }` block အတွင်းမှာပဲ ရနိုင်တယ်။ `var` ကတော့ block အပြင်မှာပါ ရနိုင်တယ်။ ဒါကြောင့် မထင်မှတ်တဲ့ bug တွေ ဖြစ်နိုင်တယ်။",
      code: `if (true) {
  let insideLet = "block ထဲမှာပဲ ရတယ်";
  var insideVar = "block အပြင်မှာလည်း ရတယ်";

  console.log(insideLet);
}

// console.log(insideLet);   // ❌ ReferenceError
console.log(insideVar);      // ✅ ရတယ်`,
      lang: "js",
      lines: [
        { n: 2, t: "`let` က ဒီ `{ }` block အတွင်းမှာပဲ ရတယ်။ အပြင်မှာ မရဘူး။" },
        { n: 3, t: "`var` က block အပြင်ကို ထွက်သွားတယ်။ function တစ်ခုလုံးမှာ ရနိုင်တယ်။" },
        { n: "9-10", t: "`let` ကို အပြင်ကနေ ခေါ်ရင် error။ `var` ကို ခေါ်လို့ ရတယ်။" }
      ],
      tip: {
        type: "info",
        title: "ဒီနေ့ခေတ် စံ",
        text: "အသစ်ရေးတဲ့ ကုဒ်မှာ `let` နဲ့ `const` ကိုပဲ သုံးပါ။ `var` ကို ရှေးကုဒ် ဖတ်တဲ့အခါ နားလည်ထားရုံပါ။"
      }
    },
    {
      h: "နာမည် ပေးတဲ့ စည်းမျဉ်း",
      p: "Variable နာမည်ကို အင်္ဂလိပ်စာလုံး၊ ဂဏန်း၊ `_`၊ `$` နဲ့ ပေးနိုင်တယ်။ ဒါပေမယ့် ဂဏန်းနဲ့ မစရဘူး။ နှစ်လုံးဆွဲပြီး ရေးတဲ့အခါ ပထမစာလုံး သေးပြီး နောက်စာလုံး ကြီးတဲ့ camelCase ကို သုံးပါ။",
      code: `// ✅ ကောင်းတဲ့ နာမည်များ
let userName = "camelCase ကို သုံးပါ";
let totalPrice = 15000;
let isLogin = false;

console.log(userName, totalPrice, isLogin);

// ❌ မရတဲ့ နာမည်များ
// let 1name = "ဂဏန်းနဲ့ မစရ";
// let my-name = "- မပါရ";
// let let = "keyword ကို မသုံးရ";`,
      lang: "js",
      lines: [
        { n: "2-4", t: "နာမည်က အဓိပ္ပာယ် ရှိရမယ်။ `userName` က ဘာကို သိမ်းထားလဲ ချက်ချင်း သိတယ်။" },
        { n: "9-11", t: "ဂဏန်းနဲ့ စတာ၊ `-` ပါတာ၊ keyword ဖြစ်တဲ့ `let` ကို နာမည်အဖြစ် သုံးတာတွေ မရဘူး။" }
      ]
    }
  ],
  pitfalls: [
    { t: "const ကို ပြန်ပြောင်းမိတယ်", d: "`Assignment to constant variable` error ဆိုရင် တန်ဖိုး ပြောင်းဖို့ လိုတာလား စဉ်းစားပါ။ လိုရင် `let` ကို ပြောင်းသုံးပါ။" },
    { t: "Block အပြင်မှာ let ကို ခေါ်မိတယ်", d: "`let`/`const` က `{ }` အတွင်းမှာပဲ ရတယ်။ အပြင်မှာ လိုရင် အပေါ်မှာ ကြေညာပါ။" },
    { t: "နာမည် ထပ်ကြေညာမိတယ်", d: "တူတဲ့ scope မှာ `let name` ကို နှစ်ခါ ရေးရင် error ဖြစ်တယ်။ နာမည် မတူအောင် ပေးပါ။" }
  ],
  recap: [
    "`let` — ပြောင်းလဲနိုင်တဲ့ တန်ဖိုး။ `const` — မပြောင်းရတဲ့ တန်ဖိုး။",
    "`let`/`const` က block scope၊ `var` က function scope။",
    "နာမည်ကို camelCase နဲ့ ပေးပြီး အဓိပ္ပာယ် ရှိအောင် ပေးပါ။",
    "မူလအားဖြင့် `const` ကို ဦးစားပေးပါ။"
  ],
  exercise: {
    title: "ကိုယ်တိုင် ရေးကြည့်ပါ",
    steps: [
      "`let city = \"Yangon\";` နဲ့ `const country = \"Myanmar\";` ကို ကြေညာပါ။",
      "`city` ကို \"Mandalay\" ပြောင်းပြီး `country` ကို ပြောင်းကြည့်ပါ — ဘာဖြစ်လဲ ကြည့်ပါ။",
      "`let price = 1500; let qty = 3;` နဲ့ စုစုပေါင်းကို တွက်ပြီး Console မှာ ပြပါ။"
    ],
    hint: "`country = \"...\"` က error ပေးမယ်။ ဒါက const ရဲ့ အလုပ်ပါ။"
  }
});

/* ------------------------------------------------------------
   03 — Data Types
   ------------------------------------------------------------ */
JSL.lessons.push({
  id: "core-03",
  chapter: "core",
  order: 3,
  num: "03",
  title: "Data Type — တန်ဖိုး အမျိုးအစားများ",
  subtitle: "string, number, boolean, null, undefined, array, object နဲ့ typeof",
  minutes: 13,
  level: "အခြေခံ",
  tags: ["typeof", "null", "array", "object"],
  fileName: "03-data-types.html",
  source: "../01-core/03-data-types.html",
  intro: [
    "JavaScript မှာ တန်ဖိုးတိုင်းဟာ အမျိုးအစား တစ်ခု ရှိတယ်။ စာသားက string၊ ဂဏန်းက number၊ မှန်/မှားက boolean။ ဒီအမျိုးအစားတွေ မှန်ကန်အောင် ခွဲခြားနိုင်ရင် bug တွေ လျော့နည်းလာမယ်။",
    "ဒီသင်ခန်းစာမှာ အခြေခံ အမျိုးအစား ၇ မျိုး၊ array နဲ့ object၊ `typeof` နဲ့ စစ်ခြင်း၊ `==` နဲ့ `===` ရဲ့ ကွာခြားချက်ကို လေ့လာပါမယ်။"
  ],
  goals: [
    "String, number, boolean, null, undefined ကို ခွဲခြားနိုင်မယ်။",
    "Array နဲ့ object ရဲ့ ဖွဲ့စည်းပုံကို နားလည်မယ်။",
    "`typeof` နဲ့ အမျိုးအစား စစ်နိုင်မယ်။",
    "`==` နဲ့ `===` ကို ဘယ်အချိန် သုံးရမလဲ သိမယ်။"
  ],
  diagram: {
    type: "grid",
    title: "JavaScript ရဲ့ တန်ဖိုး အမျိုးအစားများ",
    cols: 3,
    items: [
      { t: "String", sub: "\"Aung Aung\"", tone: 6, mono: true },
      { t: "Number", sub: "20, 1500.5, -10", tone: 1, mono: true },
      { t: "Boolean", sub: "true / false", tone: 2, mono: true },
      { t: "null", sub: "တမင်တကာ တန်ဖိုးမရှိ", tone: 4, mono: true },
      { t: "undefined", sub: "တန်ဖိုး မပေးရသေး", tone: 5, mono: true },
      { t: "Array", sub: "[\"apple\", \"banana\"]", tone: 3, mono: true },
      { t: "Object", sub: "{ name: \"Aung\", age: 20 }", tone: 7, mono: true }
    ],
    caption: "ပထမ ၅ မျိုးက primitive (အခြေခံ)။ Array နဲ့ object က တန်ဖိုး အများကို စုစည်းထားတဲ့ object အမျိုးအစား ဖြစ်တယ်။"
  },
  sections: [
    {
      h: "String, Number, Boolean",
      p: "စာသားကို quote အတွင်း ထည့်ရတယ်။ ဂဏန်းကို quote မပါဘဲ ရေးတယ်။ မှန်/မှားကို `true` နဲ့ `false` နဲ့ ရေးတယ်။ Backtick (` `) ကို သုံးရင် စာသားထဲမှာ variable ထည့်လို့ရတယ်။",
      code: `let name = "Aung Aung";
let city = 'Yangon';
let text = \`backtick လည်း ရတယ်\`;

let age = 20;
let price = 1500.5;

let isStudent = true;
let isLogin = false;

console.log(name, city, text);
console.log(age, price);
console.log(isStudent, isLogin);`,
      lang: "js",
      lines: [
        { n: "1-3", t: "Double quote၊ single quote၊ backtick သုံးမျိုးလုံး string အတွက် ရတယ်။" },
        { n: "5-6", t: "Number ကို quote မပါဘဲ ရေးတယ်။ ဒသမ ပါလည်း ရတယ်။" },
        { n: "8-9", t: "Boolean မှာ `true` နဲ့ `false` ဆိုပြီး တန်ဖိုး နှစ်ခုပဲ ရှိတယ်။" }
      ]
    },
    {
      h: "null နဲ့ undefined — မတူဘူး",
      p: "`null` က ကိုယ်တိုင် တမင်တကာ \"တန်ဖိုး မရှိ\" လို့ သတ်မှတ်တာ။ `undefined` က တန်ဖိုး မပေးရသေးလို့ စနစ်က ပေးထားတဲ့ အခြေအနေ။",
      code: `// တမင်တကာ တန်ဖိုး မရှိ
let selectedUser = null;
console.log(selectedUser);   // null

// ကြေညာပြီး တန်ဖိုး မပေးရသေး
let phone;
console.log(phone);          // undefined`,
      lang: "js",
      lines: [
        { n: 2, t: "`null` က \"ရွေးထားတဲ့ user မရှိဘူး\" ဆိုတဲ့ အခြေအနေကို ကိုယ်တိုင် သတ်မှတ်တာ။" },
        { n: 6, t: "`let phone;` လို့ ကြေညာပြီး တန်ဖိုး မပေးရင် `undefined` ဖြစ်နေတယ်။" }
      ],
      tip: {
        type: "warn",
        title: "typeof null က object",
        text: "ဒါက JavaScript ရဲ့ ရှေးဟောင်း bug ပါ။ `typeof null` က `\"object\"` ပြန်တယ်။ null ဟုတ်မဟုတ် စစ်ချင်ရင် `value === null` ကို သုံးပါ။"
      }
    },
    {
      h: "Array နဲ့ Object",
      p: "Array က တန်ဖိုးတွေကို အစဉ်လိုက် သိမ်းတယ်။ နံပါတ် (index) နဲ့ ခေါ်တယ်။ Object ကတော့ နာမည် (key) နဲ့ တန်ဖိုး (value) ကို တွဲသိမ်းတယ်။",
      code: `let fruits = ["apple", "banana", "mango"];

console.log(fruits);         // ["apple", "banana", "mango"]
console.log(fruits[0]);      // apple
console.log(fruits.length);  // 3

let student = {
  name: "Aung Aung",
  age: 20,
  isStudent: true
};

console.log(student.name);   // Aung Aung
console.log(student.age);    // 20`,
      lang: "js",
      lines: [
        { n: 1, t: "Array ကို `[ ]` ထဲမှာ တန်ဖိုးတွေ ထည့်ပြီး ရေးတယ်။ ပထမ တန်ဖိုးရဲ့ index က `0`။" },
        { n: 4, t: "`fruits[0]` က ပထမ တန်ဖိုး၊ `length` က အရေအတွက်။" },
        { n: "7-11", t: "Object ကို `{ }` ထဲမှာ `key: value` အတွဲတွေ ရေးတယ်။" },
        { n: "13-14", t: "Object ရဲ့ တန်ဖိုးကို `object.key` နဲ့ ဖတ်တယ်။" }
      ]
    },
    {
      h: "typeof နဲ့ အမျိုးအစား စစ်ခြင်း",
      p: "`typeof` က တန်ဖိုးရဲ့ အမျိုးအစားကို string အနေနဲ့ ပြန်တယ်။ Array ဟုတ်မဟုတ် စစ်ချင်ရင်တော့ `Array.isArray()` ကို သုံးရတယ်။",
      code: `console.log(typeof "hello");     // string
console.log(typeof 20);          // number
console.log(typeof true);        // boolean
console.log(typeof undefined);   // undefined
console.log(typeof null);        // object  (bug!)

console.log(Array.isArray(fruits));   // true
console.log(Array.isArray(student));  // false`,
      lang: "js",
      lines: [
        { n: "1-4", t: "အခြေခံ အမျိုးအစားတွေကို မှန်ကန်စွာ ပြန်တယ်။" },
        { n: 5, t: "`null` က `object` လို့ ပြန်တာ မှားတဲ့ ရလဒ်ပါ။ ဒါကို မှတ်ထားပါ။" },
        { n: "7-8", t: "Array က object မျိုးစုဖြစ်လို့ `typeof` နဲ့ မခွဲနိုင်ဘူး။ `Array.isArray()` ကို သုံးပါ။" }
      ]
    },
    {
      h: "== နဲ့ === — အရေးကြီးဆုံး ကွာခြားချက်",
      p: "`==` က တန်ဖိုးပဲ စစ်တယ်။ လိုအပ်ရင် အမျိုးအစား ပြောင်းပြီး စစ်တယ်။ `===` က တန်ဖိုးရော အမျိုးအစားပါ စစ်တယ်။ ဒါကြောင့် `===` ကို သုံးတာက ပိုလုံခြုံတယ်။",
      code: `console.log("20" == 20);    // true  (တန်ဖိုးပဲ စစ်)
console.log("20" === 20);   // false (အမျိုးအစားပါ စစ်)

console.log(0 == false);    // true
console.log(0 === false);   // false

console.log(null == undefined);   // true
console.log(null === undefined);  // false`,
      lang: "js",
      lines: [
        { n: "1-2", t: "`\"20\"` က string၊ `20` က number။ `==` က string ကို number ပြောင်းပြီး စစ်တယ်။ `===` က မတူဘူးလို့ ပြန်တယ်။" },
        { n: "4-5", t: "`0` နဲ့ `false` ကိုလည်း `==` က အတူတူလို့ ဆိုတယ်။ ဒါက မထင်မှတ်တဲ့ bug ဖြစ်နိုင်တယ်။" },
        { n: "7-8", t: "`null` နဲ့ `undefined` ကို `==` က အတူတူလို့ ဆိုတယ်။ `===` ကတော့ မတူဘူး။" }
      ],
      tip: {
        type: "key",
        title: "စည်းမျဉ်း",
        text: "အမြဲတမ်း `===` နဲ့ `!==` ကို သုံးပါ။ `==` ကို သုံးဖို့ အထူး အကြောင်းပြချက် ရှိမှသာ သုံးပါ။"
      }
    }
  ],
  pitfalls: [
    { t: "\"20\" နဲ့ 20 ကို အတူတူလို့ ထင်တယ်", d: "တစ်ခုက string၊ တစ်ခုက number။ `===` နဲ့ စစ်ရင် `false` ရမယ်။ input ကနေ ရတဲ့ တန်ဖိုးက string ဖြစ်တတ်တယ်။" },
    { t: "typeof null ကို ယုံတယ်", d: "`typeof null` က `object` ပြန်တယ်။ null စစ်ဖို့ `value === null` ကို သုံးပါ။" },
    { t: "Array ကို typeof နဲ့ စစ်တယ်", d: "`typeof []` က `object` ပြန်တယ်။ `Array.isArray(value)` ကို သုံးပါ။" }
  ],
  recap: [
    "အခြေခံ အမျိုးအစားများ — string, number, boolean, null, undefined။",
    "Array က index နဲ့၊ object က key နဲ့ တန်ဖိုး သိမ်းတယ်။",
    "`typeof` နဲ့ စစ်နိုင်ပေမယ့် `null` နဲ့ array အတွက် သီးသန့် နည်းလမ်း ရှိတယ်။",
    "တန်ဖိုး နှိုင်းယှဉ်ဖို့ `===` ကို သုံးပါ။"
  ],
  exercise: {
    title: "ကိုယ်တိုင် စစ်ကြည့်ပါ",
    steps: [
      "`let score = 85;` နဲ့ `let scoreText = \"85\";` ကို ကြေညာပါ။",
      "နှစ်ခုကို `==` နဲ့ စစ်ပါ၊ ပြီးမှ `===` နဲ့ စစ်ပါ။ ရလဒ် ကွာခြားချက်ကို ရှင်းပါ။",
      "`let user = { name: \"Su\", age: 22 };` ဆောက်ပြီး `typeof user` နဲ့ `Array.isArray(user)` ကို စမ်းပါ။"
    ],
    hint: "Console မှာ ရလဒ်တွေကို မှတ်ထားပြီး ဘာကြောင့် ကွာလဲ စဉ်းစားပါ။"
  }
});

/* ------------------------------------------------------------
   04 — Operators
   ------------------------------------------------------------ */
JSL.lessons.push({
  id: "core-04",
  chapter: "core",
  order: 4,
  num: "04",
  title: "Operator — တွက်ချက်တဲ့ သင်္ကေတများ",
  subtitle: "ဂဏန်း၊ စာသား၊ နှိုင်းယှဉ်မှု၊ လော့ဂျစ်နဲ့ အတိုကောက် ရေးနည်းများ",
  minutes: 12,
  level: "အခြေခံ",
  tags: ["arithmetic", "comparison", "logic"],
  fileName: "04-operators.html",
  source: "../01-core/04-operators.html",
  intro: [
    "Operator ဆိုတာ တန်ဖိုးတွေကို တွက်ချက်တဲ့ သင်္ကေတတွေပါ။ `+` နဲ့ ပေါင်းတာ၊ `>` နဲ့ နှိုင်းယှဉ်တာ၊ `&&` နဲ့ အခြေအနေ နှစ်ခု တွဲစစ်တာတွေ အားလုံး operator ပါ။",
    "သင်္ချာနဲ့ တူတဲ့ အပိုင်းတွေ ရှိသလို JavaScript မှာ ထူးခြားတဲ့ အပိုင်းတွေလည်း ရှိတယ်။ အထူးသဖြင့် string နဲ့ number ရောနေတဲ့အခါ သတိထားရတယ်။"
  ],
  goals: [
    "ဂဏန်း တွက်ချက်မှု operator တွေကို သုံးနိုင်မယ်။",
    "`+` က string နဲ့ တွေ့ရင် ဘာဖြစ်လဲ နားလည်မယ်။",
    "`===` နဲ့ နှိုင်းယှဉ်တာကို ကျွမ်းကျင်မယ်။",
    "`&&`, `||`, `!` နဲ့ အခြေအနေ တွဲစစ်နိုင်မယ်။"
  ],
  diagram: {
    type: "grid",
    title: "Operator အမျိုးအစားများ",
    cols: 4,
    items: [
      { t: "ဂဏန်း", sub: "+  −  *  /  %  **", tone: 6, mono: true },
      { t: "နှိုင်းယှဉ်", sub: "===  !==  >  <  >=  <=", tone: 1, mono: true },
      { t: "လော့ဂျစ်", sub: "&&   ||   !", tone: 3, mono: true },
      { t: "အတိုကောက်", sub: "+=  -=  *=  ++  --", tone: 2, mono: true }
    ],
    caption: "အမျိုးအစား တစ်ခုချင်းစီကို ခွဲပြီး လေ့လာရင် မှတ်ရ လွယ်တယ်။"
  },
  sections: [
    {
      h: "ဂဏန်း တွက်ချက်မှု",
      p: "သင်္ချာလို အခြေခံ တွက်ချက်မှုတွေ လုပ်နိုင်တယ်။ `%` က အကြွင်းကို ပြန်တယ်။ `**` က ထပ်ကိန်း (power) ဖြစ်တယ်။",
      code: `let a = 10;
let b = 3;

console.log(a + b);    // 13
console.log(a - b);    // 7
console.log(a * b);    // 30
console.log(a / b);    // 3.3333...
console.log(a % b);    // 1   (အကြွင်း)
console.log(a ** b);   // 1000 (10 ကို ၃ ခါ မြှောက်)`,
      lang: "js",
      lines: [
        { n: "1-2", t: "`a` နဲ့ `b` မှာ ဂဏန်း နှစ်ခု သိမ်းထားတယ်။" },
        { n: "4-7", t: "ပေါင်း၊ နှုတ်၊ မြှောက်၊ စား — သင်္ချာလို အတူတူပါ။" },
        { n: 8, t: "`%` က စားပြီး ကျန်တဲ့ အကြွင်းကို ပြန်တယ်။ 10 ကို 3 နဲ့ စားရင် 1 ကျန်တယ်။" },
        { n: 9, t: "`**` က ထပ်ကိန်း။ `10 ** 3` က 10 × 10 × 10 = 1000။" }
      ]
    },
    {
      h: "+ နဲ့ string — ထူးခြားတဲ့ အပြုအမူ",
      p: "`+` က ဂဏန်း နှစ်ခုဆိုရင် ပေါင်းတယ်။ တစ်ခုက string ဖြစ်နေရင်တော့ နှစ်ခုလုံးကို စာသားအဖြစ် ဆက်တယ်။ ဒါက အစပိုင်းမှာ အမှား များတဲ့ နေရာပါ။",
      code: `console.log("Aung" + " " + "Aung");   // Aung Aung

console.log("5" + 2);   // "52"  (စာသား ဖြစ်သွားတယ်)
console.log("5" - 2);   // 3     (ဂဏန်း ဖြစ်သွားတယ်)

console.log(5 + 2);     // 7
console.log("5" + "2"); // "52"`,
      lang: "js",
      lines: [
        { n: 1, t: "String နှစ်ခုကို `+` နဲ့ ဆက်တယ်။" },
        { n: 3, t: "String တစ်ခု ပါနေရင် `+` က စာသား ဆက်တဲ့ အလုပ်ကို လုပ်တယ်။ `\"52\"` ရတယ်။" },
        { n: 4, t: "`-` ကတော့ string ကို number ပြောင်းပြီး နှုတ်တယ်။ ဒါကြောင့် `3` ရတယ်။" },
        { n: "6-7", t: "နှစ်ခုလုံး number ဆိုရင် ပေါင်းတယ်။ နှစ်ခုလုံး string ဆိုရင် ဆက်တယ်။" }
      ],
      tip: {
        type: "warn",
        title: "input ကနေ ရတဲ့ တန်ဖိုး",
        text: "`input.value` က အမြဲ string ပြန်တယ်။ တွက်ချက်ခင် `Number(value)` နဲ့ ပြောင်းပါ။"
      }
    },
    {
      h: "နှိုင်းယှဉ်ခြင်း",
      p: "နှိုင်းယှဉ်မှုရဲ့ ရလဒ်က အမြဲ boolean (true/false) ဖြစ်တယ်။ `===` က တန်ဖိုးရော အမျိုးအစားပါ စစ်တယ်။",
      code: `console.log(10 == "10");    // true
console.log(10 === "10");   // false  ✅ ဒါကို သုံးပါ

console.log(10 != 5);       // true
console.log(10 !== "10");   // true

console.log(10 > 5);        // true
console.log(10 < 5);        // false
console.log(10 >= 10);      // true
console.log(10 <= 9);       // false`,
      lang: "js",
      lines: [
        { n: "1-2", t: "`==` က အမျိုးအစား ပြောင်းပြီး စစ်တယ်။ `===` က တိတိကျကျ စစ်တယ်။" },
        { n: "4-5", t: "`!=` နဲ့ `!==` က မတူဘူးလား မေးတာ။ `!==` က ပိုတိတိကျကျ။" },
        { n: "7-10", t: "ကြီး၊ ငယ်၊ ကြီး/ညီ၊ ငယ်/ညီ တွေက သင်္ချာလို အတူတူ။" }
      ]
    },
    {
      h: "အတိုကောက် ရေးနည်းနဲ့ လော့ဂျစ်",
      p: "`x += 2` ဆိုတာ `x = x + 2` ပါ။ `x++` က 1 တိုးတယ်။ `&&` က နှစ်ခုလုံး မှန်ရမယ်၊ `||` က တစ်ခု မှန်ရင် ရတယ်၊ `!` က မှန်ကို မှား၊ မှားကို မှန် ပြောင်းတယ်။",
      code: `let x = 5;

x += 2;   // 7
x -= 1;   // 6
x *= 2;   // 12
x /= 3;   // 4
x %= 3;   // 1
x++;      // 2
x--;      // 1
console.log(x);

let age = 20;
let isStudent = true;

console.log(age >= 18 && isStudent);   // true
console.log(age < 18 || age > 60);     // false
console.log(!true);                    // false`,
      lang: "js",
      lines: [
        { n: "3-8", t: "`+=`, `-=`, `*=`, `/=`, `%=` တွေက တွက်ပြီး ပြန်သိမ်းတဲ့ အတိုကောက်တွေ။" },
        { n: "9-10", t: "`x++` က 1 တိုး၊ `x--` က 1 လျှော့။" },
        { n: 15, t: "`&&` က နှစ်ခုလုံး မှန်မှ true။ အသက် ၁၈ ပြည့်ပြီး ကျောင်းသား ဖြစ်ရမယ်။" },
        { n: 16, t: "`||` က တစ်ခု မှန်ရင် true။ အသက် ၁၈ မပြည့် ဒါမှမဟုတ် ၆၀ ကျော်။" }
      ]
    }
  ],
  pitfalls: [
    { t: "string နဲ့ number ကို ပေါင်းမိတယ်", d: "`\"5\" + 2` က `\"52\"` ဖြစ်တယ်။ တွက်ချက်ခင် `Number()` နဲ့ ပြောင်းပါ။" },
    { t: "= နဲ့ === ရောနေတယ်", d: "`if (x = 5)` က နှိုင်းယှဉ်တာ မဟုတ်ဘဲ တန်ဖိုး ထည့်တာပါ။ နှိုင်းယှဉ်ဖို့ `===` ကို သုံးပါ။" },
    { t: "== ကို သုံးမိတယ်", d: "`\"0\" == false` က true ဖြစ်တယ်။ မထင်မှတ်တဲ့ ရလဒ်တွေ ရနိုင်လို့ `===` ကို သုံးပါ။" }
  ],
  recap: [
    "ဂဏန်း operator — `+ - * / % **`။",
    "`+` မှာ string ပါရင် စာသား ဆက်တယ်။ ဒါကို သတိထားပါ။",
    "နှိုင်းယှဉ်မှုအတွက် `===` နဲ့ `!==` ကို သုံးပါ။",
    "`&&` = နှစ်ခုလုံး၊ `||` = တစ်ခု၊ `!` = ပြောင်းပြန်။"
  ],
  exercise: {
    title: "တွက်ချက်မှု လေ့ကျင့်ခန်း",
    steps: [
      "`let price = 2500; let qty = 4;` နဲ့ စုစုပေါင်းကို တွက်ပါ။",
      "`let discount = 10;` ဆိုတဲ့ ၁၀% လျှော့ဈေးကို တွက်ပြီး နောက်ဆုံး ကျသင့်ငွေကို ပြပါ။",
      "`age = 17` နဲ့ `hasPermission = true` ကို သုံးပြီး ၁၈ ပြည့်ခြင်း သို့မဟုတ် ခွင့်ပြုချက် ရှိခြင်း ရှိမရှိ စစ်ပါ။"
    ],
    hint: "လျှော့ဈေးက `price * qty * (1 - discount / 100)` နဲ့ တွက်နိုင်တယ်။"
  }
});

/* ------------------------------------------------------------
   05 — Conditions
   ------------------------------------------------------------ */
JSL.lessons.push({
  id: "core-05",
  chapter: "core",
  order: 5,
  num: "05",
  title: "Condition — အခြေအနေ စစ်ခြင်း",
  subtitle: "if / else, else if, ternary, switch နဲ့ truthy/falsy",
  minutes: 15,
  level: "အခြေခံ",
  tags: ["if", "switch", "ternary", "truthy"],
  fileName: "05-conditions.html",
  source: "../01-core/05-conditions.html",
  intro: [
    "Program တစ်ခုမှာ \"ဒီအခြေအနေ မှန်ရင် ဒါလုပ်၊ မမှန်ရင် ဟိုဟာလုပ်\" ဆိုတဲ့ ဆုံးဖြတ်ချက်တွေ အမြဲ ရှိတယ်။ အဲဒါကို condition နဲ့ ရေးတယ်။",
    "ဒီသင်ခန်းစာမှာ `if`, `if/else`, `else if`, ternary operator နဲ့ `switch` ကို လေ့လာပါမယ်။ နောက်ဆုံးမှာ truthy/falsy ဆိုတဲ့ အရေးကြီးတဲ့ အယူအဆ ပါမယ်။"
  ],
  goals: [
    "`if` နဲ့ အခြေအနေ တစ်ခု စစ်နိုင်မယ်။",
    "`if/else` နဲ့ နှစ်လမ်း ခွဲနိုင်မယ်။",
    "`else if` နဲ့ အဆင့်ဆင့် စစ်နိုင်မယ်။",
    "`switch` နဲ့ တိတိကျကျ တန်ဖိုး စစ်နိုင်မယ်။",
    "truthy/falsy ကို နားလည်မယ်။"
  ],
  diagram: {
    type: "branch",
    title: "if / else ရဲ့ စီးဆင်းမှု",
    condition: "score >= 50 ?",
    conditionSub: "အမှတ် ၅၀ နဲ့ အထက် ဖြစ်ရဲ့လား",
    yes: { t: "အောင်", sub: "အတန်း အောင်" },
    no: { t: "ကျ", sub: "ပြန်ဖြေရမယ်" },
    end: "နောက်စာကြောင်း ဆက်လုပ်",
    caption: "အခြေအနေ မှန်ရင် ဘယ်ဘက်၊ မှားရင် ညာဘက် လမ်းကြောင်းကို သွားတယ်။ နှစ်လမ်းလုံး ပြီးရင် အောက်ကို ဆက်တယ်။"
  },
  sections: [
    {
      h: "if — မှန်ရင် လုပ်",
      p: "`if` ရဲ့ နောက်မှာ ကွင်းစကွင်းပိတ် `( )` ထဲမှာ အခြေအနေ ရေးတယ်။ အဲဒီအခြေအနေ မှန်ရင် `{ }` ထဲက ကုဒ်ကို run တယ်။",
      code: `let age = 20;

if (age >= 18) {
  console.log("အရွယ်ရောက်ပြီ");
}`,
      lang: "js",
      lines: [
        { n: 1, t: "အသက်ကို variable ထဲ သိမ်းတယ်။" },
        { n: 3, t: "`age >= 18` က true ဖြစ်ရင် `{ }` ထဲကို ဝင်တယ်။" },
        { n: 4, t: "အခြေအနေ မှန်မှသာ ဒီစာကြောင်း run တယ်။" }
      ]
    },
    {
      h: "if / else နဲ့ else if",
      p: "`if` မမှန်ရင် `else` ကို ဝင်တယ်။ အခြေအနေ အများကြီး ရှိရင် `else if` ကို ဆက်တွဲရေးတယ်။ အပေါ်ကနေ အောက်ကို တစ်ခုချင်း စစ်ပြီး ပထမဆုံး မှန်တာကို ယူတယ်။",
      code: `let score = 45;

if (score >= 50) {
  console.log("အောင်");
} else {
  console.log("ကျ");
}

function grade(mark) {
  if (mark >= 80) {
    return "A";
  } else if (mark >= 60) {
    return "B";
  } else if (mark >= 40) {
    return "C";
  } else {
    return "F";
  }
}

console.log(grade(85));   // A
console.log(grade(65));   // B
console.log(grade(45));   // C
console.log(grade(20));   // F`,
      lang: "js",
      lines: [
        { n: "3-7", t: "အမှတ် ၅၀ နဲ့ အထက်ဆိုရင် \"အောင်\"၊ မဟုတ်ရင် \"ကျ\"။" },
        { n: "10-20", t: "`grade` function က အမှတ်ကို အဆင့်လိုက် စစ်တယ်။ ပထမဆုံး မှန်တဲ့ အခြေအနေမှာ ရပ်ပြီး ပြန်ပေးတယ်။" },
        { n: "22-25", t: "အမှတ် မတူတဲ့ ဥပမာတွေ စမ်းထားတယ်။ ၈၅ → A၊ ၆၅ → B စသဖြင့်။" }
      ],
      tip: {
        type: "info",
        title: "အစီအစဉ် အရေးကြီးတယ်",
        text: "`mark >= 40` ကို အပေါ်မှာ ထားရင် ၈၅ ကလည်း ၄၀ ကျော်လို့ C ဖြစ်သွားမယ်။ အကြီးဆုံး အခြေအနေကို အရင်စစ်ပါ။"
      }
    },
    {
      h: "Ternary (? :) — တိုတိုရေး",
      p: "အခြေအနေ တစ်ခုတည်းအတွက် `if/else` ကို တစ်ကြောင်းတည်း ရေးချင်ရင် ternary ကို သုံးတယ်။ ဖတ်ရ ခက်လာနိုင်လို့ ရှည်တဲ့ အခြေအနေတွေမှာ `if/else` ကို ပြန်သုံးပါ။",
      code: `let isLogin = true;

console.log(isLogin ? "ကြိုဆိုပါတယ်" : "အရင် login လုပ်ပါ");

let n = 7;
console.log(n % 2 === 0 ? "စုံ" : "မ");`,
      lang: "js",
      lines: [
        { n: 3, t: "`အခြေအနေ ? မှန်ရင်ရလဒ် : မှားရင်ရလဒ်` ဆိုတဲ့ ပုံစံ။" },
        { n: "5-6", t: "`n % 2 === 0` က စုံဂဏန်း ဟုတ်မဟုတ် စစ်တယ်။ 7 က မ ဖြစ်လို့ \"မ\" ရတယ်။" }
      ]
    },
    {
      h: "switch — တိတိကျကျ တန်ဖိုး စစ်",
      p: "`switch` က တန်ဖိုးတစ်ခုကို case တွေနဲ့ တိုက်စစ်တယ်။ case တစ်ခုနဲ့ ကိုက်ရင် အဲဒီကနေ စပြီး အောက်ကို ဆက်ဆင်းတယ်။ ဒါကြောင့် ရပ်ချင်တဲ့ နေရာမှာ `break` ထည့်ရတယ်။",
      code: `let day = 3;

switch (day) {
  case 1:
    console.log("တနင်္လာ");
    break;
  case 2:
    console.log("အင်္ဂါ");
    break;
  case 3:
    console.log("ဗုဒ္ဓဟူး");
    break;
  default:
    console.log("အခြား ရက်");
}

// ⚠️ break မထည့်ရင် အောက်က case တွေ ဆက်ဆက်သွားတယ်`,
      lang: "js",
      lines: [
        { n: 3, t: "`day` ရဲ့ တန်ဖိုးကို case တွေနဲ့ စစ်တယ်။" },
        { n: "4-13", t: "case တစ်ခုချင်းစီမှာ တူတဲ့ တန်ဖိုးဆိုရင် အဲဒီကုဒ် run တယ်။ `break` က switch ကနေ ထွက်တယ်။" },
        { n: "14-15", t: "`default` က ဘယ် case မှ မကိုက်ရင် run တယ်။" },
        { n: 18, t: "`break` မပါရင် နောက် case ကုဒ်တွေပါ ဆက် run တယ်။ ဒါကို fall-through လို့ ခေါ်တယ်။" }
      ]
    },
    {
      h: "Truthy နဲ့ Falsy",
      p: "JavaScript မှာ `if` ထဲကို boolean မဟုတ်တဲ့ တန်ဖိုး ထည့်လည်း ရတယ်။ `false`, `0`, `\"\"`, `null`, `undefined`, `NaN` တို့က အလိုအလျောက် မှား (falsy) အဖြစ် သတ်မှတ်ခံတယ်။ ကျန်တာအားလုံး မှန် (truthy) ဖြစ်တယ်။",
      code: `let name = "";

if (name) {
  console.log("နာမည် ရှိတယ်");
} else {
  console.log("နာမည် မရှိဘူး");
}

// Falsy တန်ဖိုးများ
// false, 0, "", null, undefined, NaN

// && နဲ့ object ရှိမရှိ စစ်ခြင်း
let user = { name: "Aung", isAdmin: true };

if (user && user.isAdmin) {
  console.log("Admin ဖြစ်တယ်");
}`,
      lang: "js",
      lines: [
        { n: "1-6", t: "`name` က string ဗလာ `\"\"` ဖြစ်နေတယ်။ ဒါက falsy ဖြစ်လို့ `else` ကို ဝင်တယ်။" },
        { n: "9-10", t: "မှားအဖြစ် သတ်မှတ်ခံတဲ့ တန်ဖိုး ၆ ခု။ ဒါတွေကို မှတ်ထားပါ။" },
        { n: "13-17", t: "`user` ရှိမရှိ အရင်စစ်၊ ရှိမှ `isAdmin` ကို စစ်တယ်။ `null` ဖြစ်နေရင် error မဖြစ်အောင် ကာကွယ်တယ်။" }
      ]
    }
  ],
  pitfalls: [
    { t: "if ထဲမှာ = သုံးမိတယ်", d: "`if (x = 5)` က x ထဲ 5 ထည့်တာပါ။ နှိုင်းယှဉ်ဖို့ `if (x === 5)` ကို သုံးပါ။" },
    { t: "switch မှာ break မေ့တယ်", d: "break မပါရင် နောက် case တွေပါ run သွားတယ်။ case တိုင်းမှာ break ထည့်ပါ။" },
    { t: "အခြေအနေ အစီအစဉ် မှားတယ်", d: "`mark >= 40` ကို `mark >= 80` ရဲ့ အပေါ်မှာ ထားရင် အားလုံး C ဖြစ်သွားမယ်။ ကျဉ်းတဲ့ အခြေအနေကို အရင်စစ်ပါ။" },
    { t: "0 နဲ့ \"\" ကို မှန်တယ်လို့ ထင်တယ်", d: "ဒါတွေက falsy ပါ။ `if (count)` က count က 0 ဆိုရင် false ဖြစ်တယ်။ `count !== 0` လို့ တိတိကျကျ စစ်ပါ။" }
  ],
  recap: [
    "`if` က အခြေအနေ တစ်ခု၊ `else` က မမှန်ရင်၊ `else if` က အဆင့်ဆင့်။",
    "Ternary က တိုတဲ့ if/else။ `switch` က တိတိကျကျ တန်ဖိုး စစ်တာ။",
    "`switch` မှာ `break` မမေ့ပါနဲ့။",
    "Falsy ၆ ခု — `false, 0, \"\", null, undefined, NaN`။"
  ],
  exercise: {
    title: "အဆင့် စစ်တဲ့ ကုဒ် ရေးပါ",
    steps: [
      "အမှတ် 0–100 ကို လက်ခံတဲ့ `grade(mark)` function ရေးပါ။ 80+ → A၊ 60+ → B၊ 40+ → C၊ ကျန် → F။",
      "အသက်နဲ့ ကျောင်းသား ဟုတ်မဟုတ် နှစ်ခုကို စစ်ပြီး လျှော့ဈေး ရမရ ဆုံးဖြတ်ပါ။",
      "ရက်သတ္တပတ် နံပါတ် (1–7) ကို `switch` နဲ့ မြန်မာရက်နာမည် ပြပါ။"
    ],
    hint: "အစီအစဉ်ကို အကြီးဆုံးကနေ အငယ်ဆုံးသို့ စစ်ပါ။"
  }
});

/* ------------------------------------------------------------
   06 — Loops
   ------------------------------------------------------------ */
JSL.lessons.push({
  id: "core-06",
  chapter: "core",
  order: 6,
  num: "06",
  title: "Loop — ထပ်ခါ ထပ်ခါ လုပ်ခြင်း",
  subtitle: "for, while, do...while, for...of, for...in နဲ့ break/continue",
  minutes: 16,
  level: "အခြေခံ",
  tags: ["for", "while", "break", "continue"],
  fileName: "06-loops.html",
  source: "../01-core/06-loops.html",
  intro: [
    "တူတဲ့ အလုပ်ကို အကြိမ်များစွာ လုပ်ရတဲ့အခါ ကုဒ်ကို ထပ်ချည်းတလဲလဲ ရေးတာက မကောင်းဘူး။ Loop က အဲဒီအလုပ်ကို ကွန်ပျူတာကို ထပ်လုပ်ခိုင်းတာ။",
    "ဒီသင်ခန်းစာမှာ အကြိမ်ရေ သိတဲ့အခါ သုံးတဲ့ `for`၊ အခြေအနေပေါ် မူတည်တဲ့ `while`၊ array နဲ့ object အတွက် `for...of` / `for...in`၊ ပြီးတော့ `break` နဲ့ `continue` ကို လေ့လာပါမယ်။"
  ],
  goals: [
    "`for` loop ရဲ့ အစ၊ အခြေအနေ၊ တိုးခြင်း သုံးပိုင်းကို နားလည်မယ်။",
    "`while` နဲ့ `do...while` ကို ခွဲခြားနိုင်မယ်။",
    "Array အတွက် `for...of`၊ object အတွက် `for...in` ကို သုံးနိုင်မယ်။",
    "`break` နဲ့ `continue` ကို သုံးနိုင်မယ်။"
  ],
  diagram: {
    type: "cycle",
    title: "for loop တစ်ပတ် လည်ပုံ",
    loopLabel: "ပြန်ထပ်",
    steps: [
      { t: "၁။ အစ တန်ဖိုး သတ်မှတ်", sub: "let i = 1", tone: 6, mono: true },
      { t: "၂။ အခြေအနေ စစ်", sub: "i <= 5 မှန်ရင် ဆက်၊ မှားရင် ထွက်", tone: 3 },
      { t: "၃။ ကုဒ် run", sub: "console.log(i)", tone: 1, mono: true },
      { t: "၄။ တန်ဖိုး တိုး", sub: "i++", tone: 2, mono: true }
    ],
    caption: "အခြေအနေ မှားတဲ့အထိ ၂ → ၃ → ၄ → ၂ ... လို့ ပြန်လည်တယ်။ i++ မေ့ရင် အဆုံးမဲ့ loop ဖြစ်တယ်။"
  },
  sections: [
    {
      h: "for — အကြိမ်ရေ သိတဲ့အခါ",
      p: "`for` ရဲ့ ကွင်းထဲမှာ အပိုင်း သုံးပိုင်း ရှိတယ် — အစ၊ အခြေအနေ၊ တိုးခြင်း။ တစ်ပတ်လည်တိုင်း အခြေအနေကို စစ်တယ်။ မှန်နေသရွေ့ ဆက်လည်တယ်။",
      code: `for (let i = 1; i <= 5; i++) {
  console.log("အကြိမ် " + i);
}

// နောက်ပြန် ရေတွက်
for (let i = 5; i >= 1; i--) {
  console.log(i);
}`,
      lang: "js",
      lines: [
        { n: 1, t: "`let i = 1` က အစ၊ `i <= 5` က အခြေအနေ၊ `i++` က တစ်ပတ်လည်တိုင်း 1 တိုး။" },
        { n: 2, t: "အခြေအနေ မှန်နေသရွေ့ ဒီစာကြောင်းကို ထပ်လုပ်တယ်။" },
        { n: "5-7", t: "`i--` နဲ့ နောက်ပြန် ရေတွက်နိုင်တယ်။ အခြေအနေက `i >= 1` ဖြစ်တယ်။" }
      ]
    },
    {
      h: "while နဲ့ do...while",
      p: "`while` က အခြေအနေ မှန်နေသရွေ့ ထပ်လုပ်တယ်။ ဘယ်တော့ ရပ်မလဲ မသေချာရင် သုံးတယ်။ `do...while` ကတော့ အနည်းဆုံး တစ်ခါ လုပ်ပြီးမှ အခြေအနေ စစ်တယ်။",
      code: `let count = 1;

while (count <= 3) {
  console.log("while " + count);
  count++;   // ⚠️ မတိုးရင် အဆုံးမဲ့ loop
}

let x = 10;

do {
  console.log("do while " + x);
  x++;
} while (x < 5);

// အခြေအနေ မမှန်ပေမယ့် တစ်ခါ ရပြီး ပြီးသွားတယ်`,
      lang: "js",
      lines: [
        { n: "3-6", t: "`count` က ၃ ထက် မကြီးသရွေ့ ထပ်လုပ်တယ်။ တစ်ပတ်လည်တိုင်း `count++` မဖြစ်မနေ လုပ်ရမယ်။" },
        { n: "8-12", t: "`x` က 10 ဖြစ်နေတယ်။ အခြေအနေ `x < 5` က မှားပေမယ့် `do` က အနည်းဆုံး တစ်ခါ run တယ်။" },
        { n: 15, t: "ဒါက do...while ရဲ့ ထူးခြားချက် — အရင် လုပ်၊ နောက်မှ စစ်။" }
      ]
    },
    {
      h: "for...of နဲ့ for...in",
      p: "Array ထဲက တန်ဖိုးတစ်ခုချင်းကို လိုချင်ရင် `for...of` ကို သုံးတယ်။ Object ရဲ့ key တစ်ခုချင်းကို လိုချင်ရင် `for...in` ကို သုံးတယ်။",
      code: `let fruits = ["apple", "banana", "mango"];

for (let fruit of fruits) {
  console.log(fruit);
}

let student = {
  name: "Aung Aung",
  age: 20,
  city: "Yangon"
};

for (let key in student) {
  console.log(key + " : " + student[key]);
}`,
      lang: "js",
      lines: [
        { n: "3-5", t: "`of` က array ရဲ့ တန်ဖိုးတွေကို တစ်ခုချင်း ယူတယ် — apple, banana, mango။" },
        { n: "7-11", t: "Object မှာ key-value အတွဲတွေ ရှိတယ်။" },
        { n: "13-15", t: "`in` က key တွေကို ယူတယ်။ တန်ဖိုးကို `student[key]` နဲ့ ယူရတယ်။" }
      ],
      tip: {
        type: "warn",
        title: "for...in ကို array နဲ့ မသုံးပါနဲ့",
        text: "Array မှာ `for...in` သုံးရင် index ကို string အနေနဲ့ ရနိုင်ပြီး အစီအစဉ် မမှန်နိုင်ဘူး။ Array အတွက် `for...of` ဒါမှမဟုတ် `forEach` ကို သုံးပါ။"
      }
    },
    {
      h: "break နဲ့ continue",
      p: "`break` က loop ကို ချက်ချင်း ရပ်တယ်။ `continue` က ဒီတစ်ပတ်ကို ကျော်ပြီး နောက်တစ်ပတ် ဆက်တယ်။",
      code: `for (let i = 1; i <= 10; i++) {
  if (i === 4) {
    break;
  }
  console.log("break " + i);   // 1 2 3
}

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log("continue " + i);   // 1 2 4 5
}`,
      lang: "js",
      lines: [
        { n: "1-6", t: "`i` က 4 ဖြစ်တာနဲ့ `break` က loop တစ်ခုလုံးကို ရပ်တယ်။ ဒါကြောင့် 1 2 3 ပဲ ရတယ်။" },
        { n: "8-13", t: "`i` က 3 ဖြစ်ရင် `continue` က ဒီတစ်ပတ်ကို ကျော်တယ်။ ဒါကြောင့် 3 မပါဘဲ 1 2 4 5 ရတယ်။" }
      ]
    },
    {
      h: "Loop ထဲမှာ ပေါင်းခြင်းနဲ့ nested loop",
      p: "Loop ကို တွက်ချက်မှုနဲ့ တွဲသုံးတာ အများဆုံးပါ။ အောက်က ဥပမာက 1 ကနေ 10 အထိ ပေါင်းတယ်။ Nested loop က loop ထဲမှာ loop ထပ်ထည့်တာ။",
      code: `let total = 0;

for (let i = 1; i <= 10; i++) {
  total += i;
}

console.log("1 ကနေ 10 အထိ ပေါင်း = " + total);   // 55

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(i + " x " + j + " = " + i * j);
  }
}`,
      lang: "js",
      lines: [
        { n: "1-5", t: "`total` ကို 0 ကနေ စပြီး တစ်ပတ်လည်တိုင်း `i` ကို ပေါင်းထည့်တယ်။" },
        { n: 7, t: "ရလဒ်က 55။ ဒါက loop နဲ့ ပေါင်းတဲ့ ပုံစံ။" },
        { n: "9-13", t: "ပြင်ပ loop တစ်ပတ်လည်တိုင်း အတွင်း loop က ၃ ခါ လည်တယ်။ စုစုပေါင်း ၉ ကြိမ်။" }
      ]
    }
  ],
  pitfalls: [
    { t: "အဆုံးမဲ့ loop (infinite loop)", d: "`while` မှာ တိုးတဲ့ ကုဒ် မေ့ရင် ရပ်တော့မှာ မဟုတ်ဘူး။ Browser ကို ပိတ်ရနိုင်တယ်။ `count++` ကို မမေ့ပါနဲ့။" },
    { t: "i <= 5 နဲ့ i < 5 ရောနေတယ်", d: "`< 5` ဆိုရင် 0–4 (၅ ကြိမ်)၊ `<= 5` ဆိုရင် 1–5။ ဘယ်အကြိမ်အထိ လိုချင်လဲ သေချာစဉ်းစားပါ။" },
    { t: "Array မှာ for...in သုံးတယ်", d: "index ကို string အဖြစ် ရနိုင်တယ်။ Array အတွက် `for...of` ကို သုံးပါ။" }
  ],
  recap: [
    "`for` — အကြိမ်ရေ သိတဲ့အခါ။ အစ၊ အခြေအနေ၊ တိုးခြင်း သုံးပိုင်း။",
    "`while` — အခြေအနေ မှန်နေသရွေ့။ `do...while` — အနည်းဆုံး တစ်ခါ။",
    "`for...of` — array တန်ဖိုး၊ `for...in` — object key။",
    "`break` က ရပ်၊ `continue` က ဒီတစ်ပတ် ကျော်။"
  ],
  exercise: {
    title: "Loop လေ့ကျင့်ခန်း",
    steps: [
      "1 ကနေ 20 အထိ စုံဂဏန်းတွေကိုပဲ Console မှာ ပြပါ။",
      "မြှောက်စား ဇယား ၇ ပုဒ်စဉ် (7 × 1 မှ 7 × 12 အထိ) ကို loop နဲ့ ရေးပါ။",
      "Array `[5, 12, 8, 20, 3]` ထဲက အကြီးဆုံး ဂဏန်းကို loop နဲ့ ရှာပါ။"
    ],
    hint: "အကြီးဆုံး ရှာဖို့ `let max = 0;` ကနေ စပြီး တစ်ခုချင်း နှိုင်းယှဉ်ပါ။"
  }
});
