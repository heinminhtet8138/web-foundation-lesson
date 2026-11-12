/* ============================================================
   dom.js — အခန်း ၂ (သင်ခန်းစာ ၁–၅)
   ============================================================ */
window.JSL = window.JSL || {};
JSL.lessons = JSL.lessons || [];

/* ------------------------------------------------------------
   DOM 01 — Element ရှာခြင်း
   ------------------------------------------------------------ */
JSL.lessons.push({
  id: "dom-01",
  chapter: "dom",
  order: 1,
  num: "01",
  title: "Element ရှာခြင်း — Selector များ",
  subtitle: "id, class, tag နဲ့ DOM element ကို ရှာပြီး လက်တွေ့ အသုံးချခြင်း",
  minutes: 18,
  level: "အခြေခံ",
  tags: ["getElementById", "querySelector", "NodeList"],
  fileName: "01-select.html",
  source: "../02-dom/01-select.html",
  intro: [
    "JavaScript နဲ့ စာမျက်နှာကို ပြင်ချင်ရင် ပထမဆုံး လုပ်ရတာက ပြင်ချင်တဲ့ element ကို ရှာတာပါ။ HTML မှာ element တွေ အများကြီး ရှိတဲ့အတွက် \"ဘယ်ဟာကို\" ပြင်မလဲဆိုတာ တိတိကျကျ ပြောနိုင်ရမယ်။ အဲဒီအတွက် selector ကို သုံးတယ်။",
    "ဒီသင်ခန်းစာမှာ အမြန်ဆုံး နည်းလမ်းဖြစ်တဲ့ `getElementById`၊ CSS selector နဲ့ ရှာတဲ့ `querySelector`၊ အားလုံးကို ရှာတဲ့ `querySelectorAll` နဲ့ ရှာမတွေ့တဲ့အခါ ဖြစ်တတ်တဲ့ `null` ပြဿနာကို လေ့လာပါမယ်။"
  ],
  goals: [
    "`getElementById()` နဲ့ id နဲ့ ရှာနိုင်မယ်။",
    "`querySelector()` နဲ့ CSS selector သုံးပြီး ပထမဆုံး element ကို ရှာနိုင်မယ်။",
    "`querySelectorAll()` နဲ့ အားလုံးကို ရှာပြီး `forEach` နဲ့ လှည့်နိုင်မယ်။",
    "ရှာမတွေ့ရင် ဘာကြောင့် `null` ရတယ်ဆိုတာ နားလည်ပြီး စစ်ဆေးနိုင်မယ်။"
  ],
  diagram: {
    type: "tree",
    title: "HTML ကို Browser က DOM Tree အဖြစ် ဆောက်ထားပုံ",
    root: {
      t: "document",
      sub: "စာမျက်နှာ တစ်ခုလုံး",
      tone: 5,
      children: [
        {
          t: "html",
          tone: 5,
          children: [
            { t: "head", sub: "title, meta", tone: 2 },
            {
              t: "body",
              tone: 2,
              children: [
                { t: "h1#title", sub: "ခေါင်းစဉ်", tone: 1 },
                { t: "p.note", sub: "စာသား", tone: 1 },
                {
                  t: "ul#list",
                  tone: 1,
                  children: [
                    { t: "li.item", sub: "Apple", tone: 6 },
                    { t: "li.item", sub: "Banana", tone: 6 }
                  ]
                },
                { t: "div#box", sub: "span ပါ", tone: 1 }
              ]
            }
          ]
        }
      ]
    },
    caption: "Element တစ်ခုချင်းစီက သစ်ပင် အကိုင်းလို ဆက်နေတယ်။ Selector ဆိုတာ ဒီသစ်ပင် ထဲက ဘယ်အကိုင်းကို လိုချင်လဲ ပြောတဲ့ လိပ်စာပါ။"
  },
  sections: [
    {
      h: "DOM ဆိုတာ ဘာလဲ",
      p: [
        "Browser က HTML ဖိုင်ကို ဖတ်တဲ့အခါ tag တွေကို စာသားအဖြစ် ထားမထားဘူး။ တစ်ခုချင်းစီကို object အဖြစ် ပြောင်းပြီး သစ်ပင် ပုံစံ ဆက်ထားတယ်။ အဲဒီ object တွေရဲ့ အစုအဖွဲ့ကို **DOM** (Document Object Model) လို့ ခေါ်တယ်။",
        "JavaScript က အဲဒီ object တွေကို ကိုင်တွယ်တယ်။ ဒါကြောင့် `textContent` ပြောင်းလိုက်တာနဲ့ စာမျက်နှာပေါ်မှာ ချက်ချင်း ပြောင်းသွားတယ်။ ပထမဆုံး လုပ်ရမှာက လိုချင်တဲ့ object ကို ရှာတာပါ။"
      ]
    },
    {
      h: "getElementById — အမြန်ဆုံး နည်းလမ်း",
      p: "HTML မှာ `id` က စာမျက်နှာ တစ်ခုလုံးမှာ တစ်ခုပဲ ရှိရတယ်။ ဒါကြောင့် id သိရင် အမြန်ဆုံး ရှာနိုင်တယ်။ `document.getElementById(\"title\")` လို့ ရေးရုံပါပဲ။",
      code: `let title = document.getElementById("title");
console.log(title.textContent);   // DOM 01 — Element ရှာခြင်း

let missing = document.getElementById("no-such-id");
console.log(missing);             // null`,
      lang: "js",
      file: "01-select.html",
      lines: [
        { n: 1, t: "`document` က စာမျက်နှာတစ်ခုလုံးရဲ့ အရင်းအမြစ် object ပါ။ `getElementById` က သူ့ဆီမှာ `id=\"title\"` ရှိတဲ့ element ကို ရှာတယ်။" },
        { n: 2, t: "ရှာတွေ့တဲ့ element ရဲ့ အတွင်းစာသားကို ဖတ်တယ်။ Result က စာမျက်နှာပေါ်က ခေါင်းစဉ် စာသားအတိုင်း ဖြစ်တယ်။" },
        { n: "4-5", t: "မရှိတဲ့ id ကို ရှာရင် error မဟုတ်ဘူး၊ `null` ပြန်တယ်။ ဒါကို သိထားဖို့ အရေးကြီးတယ်။" }
      ],
      tip: {
        type: "key",
        title: "id က တစ်ခုပဲ ဖြစ်ရမယ်",
        text: "id တူတဲ့ element နှစ်ခု ရှိရင် browser က ပထမဆုံးတစ်ခုကိုပဲ ပြန်တယ်။ id ကို ထပ်မတူအောင် သေချာပေးပါ။"
      }
    },
    {
      h: "querySelector — CSS selector နဲ့ ရှာခြင်း",
      p: "CSS ရေးတဲ့အခါ `.note`၊ `#list`၊ `li` စသဖြင့် selector တွေ သုံးဖူးမှာပါ။ `querySelector()` က အဲဒီ selector အတိုင်း ရှာပြီး **ပထမဆုံး တွေ့တဲ့** element တစ်ခုကို ပြန်တယ်။ ရှာမတွေ့ရင် `null` ပြန်တယ်။",
      code: `let firstNote = document.querySelector(".note");
let list = document.querySelector("#list");
let firstItem = document.querySelector("li");

console.log(firstNote.textContent);   // ပထမ note
console.log(list.children.length);    // 3
console.log(firstItem.textContent);   // Apple`,
      lang: "js",
      file: "01-select.html",
      lines: [
        { n: 1, t: "`.note` က class နာမည် `note` ရှိတဲ့ element ကို ရှာတယ်။ နှစ်ခု ရှိပေမယ့် ပထမဆုံးတစ်ခုပဲ ရတယ်။" },
        { n: 2, t: "`#list` က id နာမည် `list` ရှိတဲ့ element ကို ရှာတယ်။ CSS မှာ ရေးတဲ့ ပုံစံအတိုင်း ပါပဲ။" },
        { n: 3, t: "`li` လို့ ရေးရင် tag နာမည်နဲ့ ရှာတယ်။ စာမျက်နှာမှာ ပထမဆုံး `li` ကို ပြန်တယ်။" },
        { n: "5-7", t: "ရှာတွေ့တဲ့ element တွေရဲ့ စာသားနဲ့ ကလေး အရေအတွက်ကို စစ်ကြည့်တယ်။" }
      ]
    },
    {
      h: "querySelectorAll — အားလုံးကို ရှာခြင်း",
      p: "Class တူတဲ့ element အားလုံးကို လိုချင်ရင် `querySelectorAll()` ကို သုံးတယ်။ သူက **NodeList** ဆိုတဲ့ စာရင်း တစ်ခု ပြန်တယ်။ NodeList မှာ `length` ရှိပြီး `forEach` နဲ့ လှည့်လို့ရတယ်။ ဒါပေမယ့် `map` မရှိဘူး။",
      diagram: {
        type: "grid",
        title: "querySelector နဲ့ querySelectorAll ရဲ့ ကွာခြားချက်",
        cols: 2,
        items: [
          { t: "querySelector", sub: "ပထမဆုံး တစ်ခုပဲ — Element", tone: 1 },
          { t: "querySelectorAll", sub: "အားလုံး — NodeList", tone: 2 },
          { t: "ရှာမတွေ့", sub: "null ပြန်", tone: 4 },
          { t: "ရှာမတွေ့", sub: "length 0 ရှိတဲ့ NodeList", tone: 6 }
        ]
      },
      code: `let notes = document.querySelectorAll(".note");
console.log(notes.length);          // 2

notes.forEach((el, i) => {
  console.log(i, el.textContent);
});

let items = [...document.querySelectorAll(".item")];
let names = items.map((li) => li.textContent);
console.log(names.join(", "));      // Apple, Banana, Mango`,
      lang: "js",
      file: "01-select.html",
      lines: [
        { n: 1, t: "Class `note` ရှိတဲ့ element အားလုံးကို ရှာတယ်။ Result က NodeList ဖြစ်တယ်။" },
        { n: "4-6", t: "NodeList ကို `forEach` နဲ့ လှည့်ပြီး တစ်ခုချင်းစီရဲ့ index နဲ့ စာသားကို ထုတ်တယ်။" },
        { n: 8, t: "`[...]` က NodeList ကို တကယ့် Array အဖြစ် ပြောင်းတယ်။ ဒါမှ `map`, `filter` စတာတွေ သုံးလို့ရမယ်။" },
        { n: 9, t: "Array ဖြစ်သွားတဲ့အတွက် `map` နဲ့ စာသားတွေကို ခွဲထုတ်တယ်။" }
      ],
      tip: {
        type: "warn",
        title: "NodeList မှာ map မရှိဘူး",
        text: "`document.querySelectorAll(\".item\").map(...)` လို့ ရေးရင် error ဖြစ်တယ်။ အရင် `[...document.querySelectorAll(\".item\")]` လို့ Array ပြောင်းပါ။"
      }
    },
    {
      h: "အတွင်းမှာ ရှာခြင်း နှင့် အပေါ်ကို ပြန်တက်ခြင်း",
      p: "တစ်ခါတလေ စာမျက်နှာ တစ်ခုလုံးမှာ မရှာချင်ဘူး၊ သတ်မှတ် element တစ်ခုရဲ့ အတွင်းမှာပဲ ရှာချင်တယ်။ အဲဒီအခါ ရှာပြီးသား element ပေါ်မှာ `querySelector` ကို ထပ် ခေါ်လို့ရတယ်။ ပြန်ပြီး အပေါ်ကို တက်ချင်ရင် `parentElement` ကို သုံးတယ်။",
      code: `let box = document.querySelector("#box");
let span = box.querySelector("span");
console.log(span.textContent);          // အတွင်းက span

let firstItem = document.querySelector(".item");
console.log(firstItem.parentElement.tagName);   // UL`,
      lang: "js",
      file: "01-select.html",
      lines: [
        { n: 2, t: "`#box` ရဲ့ အတွင်းမှာပဲ `span` ကို ရှာတယ်။ အပြင်က span ရှိရင်တောင် မယူဘူး။" },
        { n: 5, t: "`li` ရဲ့ အပေါ်က element က `ul` ဖြစ်တယ်။ `tagName` က အမြဲ အကြီးစာလုံး (`UL`) ပြန်တယ်။" }
      ]
    },
    {
      h: "null ကို စစ်ဆေးခြင်း",
      p: "ရှာမတွေ့ရင် `null` ရတယ်။ `null.textContent` လို့ ရေးရင် \"Cannot read properties of null\" error ဖြစ်တယ်။ ဒါကြောင့် ရှာတွေ့မတွေ့ကို အရင် စစ်ရမယ်။",
      diagram: {
        type: "branch",
        title: "null ဖြစ်နေရင် ဘာလုပ်မလဲ",
        condition: "element !== null ?",
        conditionSub: "ရှာတွေ့ပြီးသား element ရှိလား",
        yes: { t: "ဟုတ်တယ်", sub: "textContent စတာတွေ လုပ်လို့ရပြီ" },
        no: { t: "မဟုတ်ဘူး (null)", sub: "မလုပ်ဘဲ ကျော်ပါ သို့မဟုတ် error message ပြ" },
        end: "ပြီးတဲ့အခါ နောက်ကုဒ်ကို ဆက်လုပ်"
      },
      code: `let el = document.querySelector("#maybe");

if (el !== null) {
  el.textContent = "တွေ့တယ်";
} else {
  console.log("မတွေ့ပါ — null");
}`,
      lang: "js",
      lines: [
        { n: 1, t: "ရှာချင်တဲ့ element ကို ရှာတယ်။ မရှိရင် `el` က `null` ဖြစ်နေမယ်။" },
        { n: "3-7", t: "`null` မဟုတ်မှသာ အတွင်းကုဒ်ကို run တယ်။ ဒါက error မဖြစ်အောင် ကာကွယ်တဲ့ နည်းလမ်းပါ။" }
      ],
      tip: {
        type: "tip",
        title: "ပိုတိုတဲ့ နည်းလမ်း",
        text: "`if (el) { ... }` လို့ ရေးလည်း ရတယ်။ `null` က false ဖြစ်လို့ အတွင်းကုဒ် မ run ဘူး။ ဒါပေမယ့် စာဖတ်ရ ရှင်းအောင် `el !== null` လို့ ရေးတာ ကောင်းတယ်။"
      }
    }
  ],
  pitfalls: [
    { t: "Cannot read properties of null", d: "Element မရှိသေးခင် script က run နေတာဖြစ်နိုင်တယ်။ `<script>` ကို `</body>` မတိုင်ခင် အောက်ဆုံးမှာ ထားပါ သို့မဟုတ် ရှာတွေ့မတွေ့ အရင်စစ်ပါ။" },
    { t: "querySelectorAll မှာ map သုံးမိတယ်", d: "NodeList မှာ `map` မရှိဘူး။ `[...document.querySelectorAll(...)]` နဲ့ Array ပြောင်းပြီးမှ သုံးပါ။" },
    { t: "Class နဲ့ id ရောနေတယ်", d: "`querySelector(\"list\")` က tag နာမည် `list` ကို ရှာတယ်။ id အတွက် `#list`၊ class အတွက် `.list` လို့ ရေးရမယ်။" }
  ],
  recap: [
    "`getElementById()` က id နဲ့ ရှာတဲ့ အမြန်ဆုံး နည်းလမ်းပါ။",
    "`querySelector()` က ပထမဆုံး တစ်ခု၊ `querySelectorAll()` က အားလုံးကို ရှာတယ်။",
    "NodeList ကို `forEach` နဲ့ လှည့်နိုင်တယ်။ `map` လိုချင်ရင် Array ပြောင်းပါ။",
    "ရှာမတွေ့ရင် `null` ရတယ်။ မပြင်ခင် အမြဲ စစ်ပါ။"
  ],
  exercise: {
    title: "ကိုယ်တိုင် စမ်းကြည့်ပါ",
    steps: [
      "`querySelectorAll(\"li\")` နဲ့ `li` အားလုံးကို ရှာပြီး စာသားတွေကို `console.log` နဲ့ ထုတ်ပါ။",
      "`#box` ထဲက `span` ကို ရှာပြီး စာသားကို သင့်နာမည်နဲ့ ပြောင်းပါ။",
      "မရှိတဲ့ id တစ်ခုကို ရှာပြီး `null` ဖြစ်မဖြစ် `if` နဲ့ စစ်ပါ။"
    ],
    hint: "Selector မှာ `#` က id၊ `.` က class၊ ဘာမှ မပါရင် tag နာမည်ပါ။"
  }
});

/* ------------------------------------------------------------
   DOM 02 — စာသားနှင့် Attribute
   ------------------------------------------------------------ */
JSL.lessons.push({
  id: "dom-02",
  chapter: "dom",
  order: 2,
  num: "02",
  title: "စာသားနှင့် Attribute ပြင်ခြင်း",
  subtitle: "textContent, innerHTML, value, dataset နဲ့ element ရဲ့ အချက်အလက် ထိန်းချုပ်ခြင်း",
  minutes: 20,
  level: "အခြေခံ",
  tags: ["textContent", "innerHTML", "value", "dataset"],
  fileName: "02-content-attributes.html",
  source: "../02-dom/02-content-attributes.html",
  intro: [
    "Element ကို ရှာတတ်ပြီဆိုရင် နောက်တစ်ဆင့်က သူ့ရဲ့ အတွင်းအပြင်ကို ပြင်တာပါ။ စာသားကို ပြောင်းချင်တာ၊ HTML ထည့်ချင်တာ၊ input ရဲ့ တန်ဖိုး ဖတ်ချင်တာ၊ `data-*` နဲ့ သိမ်းထားတဲ့ ဒေတာ ယူချင်တာ စသဖြင့် အမျိုးမျိုး ရှိတယ်။",
    "အရေးကြီးဆုံးက ဘယ်အခါ ဘာကို သုံးရမလဲ ခွဲခြားတတ်ဖို့ပါ။ ဒီသင်ခန်းစာမှာ `textContent`, `innerHTML`, `value`, attribute နဲ့ `dataset` ကို နှိုင်းယှဉ်ပြီး လေ့လာပါမယ်။"
  ],
  goals: [
    "`textContent` နဲ့ စာသား ဖတ်/ရေး လုပ်နိုင်မယ်။",
    "`innerHTML` ရဲ့ အသုံးနဲ့ အန္တရာယ် (XSS) ကို နားလည်မယ်။",
    "Form element တွေရဲ့ တန်ဖိုးကို `value` နဲ့ ဖတ်နိုင်မယ်။",
    "`getAttribute`, `setAttribute`, `dataset` နဲ့ attribute တွေ ထိန်းချုပ်နိုင်မယ်။"
  ],
  diagram: {
    type: "compare",
    title: "textContent နဲ့ innerHTML — ဘယ်ဟာ ဘယ်အခါ",
    left: {
      title: "textContent",
      sub: "စာသားသက်သက်",
      tone: 6,
      items: [
        "HTML tag တွေကို စာသားအတိုင်း ပြတယ်",
        "User ရိုက်တဲ့ စာသားအတွက် လုံခြုံတယ်",
        "မြန်ပြီး ရိုးရှင်းတယ်",
        "Style/layout မလိုအပ်တဲ့ နေရာမှာ သုံး"
      ]
    },
    right: {
      title: "innerHTML",
      sub: "HTML ပါ ထည့်နိုင်",
      tone: 2,
      items: [
        "Tag တွေကို တကယ့် element အဖြစ် ဆောက်တယ်",
        "User စာသားနဲ့ တွဲသုံးရင် XSS အန္တရာယ် ရှိတယ်",
        "HTML ဖွဲ့စည်းပုံ ထည့်ချင်ရင် အသုံးဝင်တယ်",
        "အကြိမ်ကြိမ် ပြင်ရင် နှေးနိုင်တယ်"
      ]
    },
    caption: "စည်းကမ်း — User ဆီက လာတဲ့ စာသားအားလုံးကို `textContent` နဲ့ပဲ ထည့်ပါ။ ကိုယ်တိုင် ရေးထားတဲ့ HTML အတွက်မှ `innerHTML` ကို သုံးပါ။"
  },
  sections: [
    {
      h: "textContent — စာသား ဖတ်ခြင်း နှင့် ရေးခြင်း",
      p: "`textContent` က element ရဲ့ အတွင်းက စာသားအားလုံးကို ဖတ်တယ်။ တန်ဖိုး အသစ် ထည့်လိုက်ရင် အတွင်းက အဟောင်း အားလုံး အစားထိုး ခံရတယ်။ HTML tag ရှိရင်လည်း tag ကို စာသားအတိုင်း ပြမယ်၊ element အဖြစ် မဆောက်ဘူး။",
      code: `let text = document.getElementById("text");

console.log(text.textContent);     // မူလ စာသား

text.textContent = "ပြောင်းလိုက်ပြီ";

console.log(text.textContent);     // ပြောင်းလိုက်ပြီ`,
      lang: "js",
      file: "02-content-attributes.html",
      lines: [
        { n: 3, t: "လက်ရှိ စာသားကို ဖတ်တယ်။ စာမျက်နှာပေါ်မှာ မြင်နေတဲ့ စာသားအတိုင်းပါပဲ။" },
        { n: 5, t: "စာသား အသစ် ထည့်တယ်။ အဟောင်း စာသား တစ်ခုလုံး အစားထိုး ခံရတယ်။" }
      ],
      tip: {
        type: "info",
        title: "စာသား ထပ်ထည့်ချင်ရင်",
        text: "`text.textContent = text.textContent + \" အသစ်\";` သို့မဟုတ် `text.textContent += \" အသစ်\";` လို့ ရေးပါ။ `=` ပဲ ရေးရင် အဟောင်း ပျက်သွားမယ်။"
      }
    },
    {
      h: "innerHTML — HTML ပါ ထည့်ခြင်း",
      p: "`innerHTML` က စာသားအစား HTML ကို လက်ခံတယ်။ `\"<strong>Bold</strong>\"` ထည့်လိုက်ရင် တကယ့် bold element ဖြစ်လာတယ်။ ဒါပေမယ့် User ရိုက်ထည့်တဲ့ စာသားကို `innerHTML` ထဲ ထည့်ရင် သူက `<script>` သို့မဟုတ် event attribute ထည့်ပြီး ကုဒ် run နိုင်တယ်။ ဒါကို **XSS** လို့ ခေါ်တယ်။",
      code: `let htmlBox = document.getElementById("html-box");

htmlBox.innerHTML = "<strong>Bold</strong> စာသား";

console.log(htmlBox.innerHTML);

// ❌ User စာသားကို ဒီလို မထည့်ပါနဲ့
// htmlBox.innerHTML = userInput;

// ✅ ဒီလို ထည့်ပါ
htmlBox.textContent = userInput;`,
      lang: "js",
      file: "02-content-attributes.html",
      lines: [
        { n: 3, t: "`<strong>` tag ကို HTML အဖြစ် ဆောက်တယ်။ စာမျက်နှာမှာ Bold ဆိုတဲ့ စာသားက အထူ ဖြစ်နေမယ်။" },
        { n: 5, t: "`innerHTML` နဲ့ ဖတ်ရင် အတွင်းက HTML အားလုံးကို စာသားအဖြစ် ပြန်ရတယ်။" },
        { n: "11-12", t: "User စာသားအတွက် `textContent` ကို သုံးတာက ဘေးကင်းတယ်။ Tag ပါလာရင်လည်း စာသားအတိုင်းပဲ ပြမယ်။" }
      ],
      tip: {
        type: "warn",
        title: "XSS ဆိုတာ ဘာလဲ",
        text: "တစ်ခြားသူက `<img src=x onerror=\"...\">` လို စာသား ထည့်လိုက်ရင် သင့်စာမျက်နှာမှာ သူ့ကုဒ် run သွားနိုင်တယ်။ ဒါကြောင့် User input ကို `innerHTML` နဲ့ တိုက်ရိုက် မထည့်ပါနဲ့။"
      }
    },
    {
      h: "input ရဲ့ တန်ဖိုး — value",
      p: "`<input>`, `<textarea>`, `<select>` စတဲ့ form element တွေမှာ သုံးသူ ရိုက်ထည့်တဲ့ တန်ဖိုးကို `textContent` နဲ့ မရဘူး။ `value` နဲ့ပဲ ဖတ်ရတယ်။ ဒါက အများဆုံး မှားတတ်တဲ့ နေရာပါ။",
      diagram: {
        type: "kv",
        title: "Element အမျိုးအစားနှင့် ဖတ်ရမယ့် property",
        items: [
          { k: "<p>, <div>, <span>", v: "textContent" },
          { k: "<input>, <textarea>", v: "value" },
          { k: "<select>", v: "value" },
          { k: "<a>, <img>", v: "getAttribute / property" },
          { k: "data-*", v: "dataset" }
        ]
      },
      code: `let input = document.getElementById("name-input");

input.value = "Aung Aung";
console.log(input.value);          // Aung Aung

console.log(input.textContent);    // "" — ဘာမှ မရဘူး`,
      lang: "js",
      file: "02-content-attributes.html",
      lines: [
        { n: 3, t: "Input ထဲကို တန်ဖိုး ထည့်တယ်။ စာမျက်နှာပေါ်က input box မှာ ချက်ချင်း ပေါ်လာမယ်။" },
        { n: 4, t: "`value` နဲ့ ဖတ်ရင် ရိုက်ထည့်ထားတဲ့ စာသား ရတယ်။" },
        { n: 6, t: "`textContent` က input အတွက် အလုပ်မလုပ်ဘူး။ အမြဲ ဗလာ ပြန်တယ်။" }
      ]
    },
    {
      h: "Attribute ဖတ်ခြင်း နှင့် ပြင်ခြင်း",
      p: "`href`, `src`, `alt`, `title` စတဲ့ attribute တွေကို `getAttribute()` နဲ့ ဖတ်တယ်။ `setAttribute()` နဲ့ ပြင်တယ်။ `hasAttribute()` နဲ့ ရှိမရှိ စစ်တယ်။ `removeAttribute()` နဲ့ ဖျက်တယ်။ Property အနေနဲ့ တိုက်ရိုက် ရေးလည်း ရတယ် — ဥပမာ `link.href = \"...\"`။",
      code: `let link = document.getElementById("link");

console.log(link.getAttribute("href"));   // https://example.com

link.setAttribute("href", "https://developer.mozilla.org");
link.setAttribute("target", "_blank");

console.log(link.getAttribute("href"));
console.log(link.hasAttribute("target")); // true

link.removeAttribute("target");
console.log(link.hasAttribute("target")); // false`,
      lang: "js",
      file: "02-content-attributes.html",
      lines: [
        { n: 3, t: "လက်ရှိ `href` တန်ဖိုးကို ဖတ်တယ်။ HTML မှာ ရေးထားတဲ့အတိုင်း ရတယ်။" },
        { n: "5-6", t: "`href` ကို အသစ် ပြောင်းပြီး `target` ကို ထည့်တယ်။ နှိပ်လိုက်ရင် tab အသစ်မှာ ပွင့်မယ်။" },
        { n: "11-12", t: "`removeAttribute` နဲ့ ဖျက်ပြီးနောက် `hasAttribute` က false ပြန်တယ်။" }
      ],
      tip: {
        type: "tip",
        title: "getAttribute နဲ့ .href ဘာကွာလဲ",
        text: "`getAttribute(\"href\")` က HTML မှာ ရေးထားတဲ့ စာသားအတိုင်း ပြန်တယ်။ `link.href` က browser က တွက်ပြီး ပြင်ဆင်ထားတဲ့ ပြည့်စုံတဲ့ URL ကို ပြန်တယ်။"
      }
    },
    {
      h: "dataset — data-* attribute",
      p: "HTML မှာ `data-id=\"7\"`၊ `data-role=\"admin\"` လို ကိုယ်ပိုင် attribute တွေ ထည့်ထားနိုင်တယ်။ JavaScript က `dataset.id`၊ `dataset.role` နဲ့ ဖတ်တယ်။ `data-user-name` က `dataset.userName` ဖြစ်တယ် — ဒက်ရှ်နောက်က စာလုံးက အကြီးစာလုံး ဖြစ်သွားတယ်။",
      code: `let btn = document.getElementById("btn");

// HTML: data-id="7"  data-role="admin"
console.log(btn.dataset.id);       // 7
console.log(btn.dataset.role);     // admin

btn.dataset.id = "99";
console.log(btn.dataset.id);       // 99

console.log(btn.getAttribute("data-id")); // 99`,
      lang: "js",
      file: "02-content-attributes.html",
      lines: [
        { n: "4-5", t: "`data-id` က `dataset.id`၊ `data-role` က `dataset.role` ဖြစ်တယ်။ တန်ဖိုးတွေက စာသား (string) အမြဲ ဖြစ်တယ်။" },
        { n: 7, t: "`dataset` မှာ ပြန်ရေးရင် HTML attribute လည်း ချက်ချင်း ပြောင်းသွားတယ်။" },
        { n: 10, t: "`getAttribute` နဲ့ ဖတ်ရင်လည်း တူတူပဲ။ `dataset` က ပိုဖတ်ရ လွယ်တယ်။" }
      ]
    },
    {
      h: "className — class ကို စာသားအဖြစ်",
      p: "`className` က element ရဲ့ class အားလုံးကို စာသားတစ်ကြောင်း အဖြစ် ဖတ်/ရေး တယ်။ တစ်ခုပဲ ပြင်ချင်ရင် အဆင်ပြေပေမယ့် class အများကြီး ရှိရင် စာသား တစ်ခုလုံး အစားထိုး ခံရတဲ့ အန္တရာယ် ရှိတယ်။ နောက်သင်ခန်းစာမှာ `classList` ကို ပိုကောင်းတဲ့ နည်းလမ်းအဖြစ် လေ့လာပါမယ်။",
      code: `console.log(btn.className);   // ""

btn.className = "primary big";
console.log(btn.className);   // "primary big"`,
      lang: "js",
      file: "02-content-attributes.html",
      lines: [
        { n: 1, t: "လက်ရှိ class စာသားကို ဖတ်တယ်။ class မရှိရင် ဗလာ စာသား ရတယ်။" },
        { n: 3, t: "Class နှစ်ခုကို စာသားတစ်ကြောင်းအဖြစ် သတ်မှတ်တယ်။ အဟောင်း class ရှိရင် အားလုံး အစားထိုး ခံရမယ်။" }
      ]
    }
  ],
  pitfalls: [
    { t: "input ကို textContent နဲ့ ဖတ်တယ်", d: "Input ရဲ့ တန်ဖိုးက `value` မှာ ရှိတယ်။ `textContent` က အမြဲ ဗလာ ပြန်မယ်။" },
    { t: "innerHTML ထဲ User input ထည့်တယ်", d: "XSS အန္တရာယ် ရှိတယ်။ User စာသားအတွက် `textContent` ကို သုံးပါ။" },
    { t: "data-user-name ကို dataset.user-name လို့ ရေးတယ်", d: "`dataset.userName` လို့ camelCase နဲ့ ရေးရတယ်။ ဒက်ရှ်ကို မထည့်ရဘူး။" },
    { t: "setAttribute နဲ့ class ပြင်တယ်", d: "`setAttribute(\"class\", ...)` က class အားလုံးကို အစားထိုးတယ်။ တစ်ခုပဲ ပြင်ချင်ရင် `classList` ကို သုံးပါ။" }
  ],
  recap: [
    "စာသားအတွက် `textContent`၊ HTML အတွက် `innerHTML`။",
    "Form element ရဲ့ တန်ဖိုးက `value` မှာ ရှိတယ်။",
    "`getAttribute`/`setAttribute`/`hasAttribute`/`removeAttribute` နဲ့ attribute ထိန်းချုပ်တယ်။",
    "`data-*` ကို `dataset` နဲ့ ဖတ်တယ်၊ ဒက်ရှ်က camelCase ဖြစ်သွားတယ်။"
  ],
  exercise: {
    title: "ကိုယ်တိုင် စမ်းကြည့်ပါ",
    steps: [
      "`#text` ရဲ့ စာသားကို သင့်နာမည်နဲ့ ပြောင်းပါ။",
      "`#link` ရဲ့ `href` ကို သင်ကြိုက်တဲ့ ဝဘ်ဆိုက်နဲ့ ပြောင်းပြီး `target=\"_blank\"` ထည့်ပါ။",
      "`#btn` မှာ `data-count=\"1\"` ထည့်ပြီး JavaScript က `dataset.count` နဲ့ ဖတ်ပါ။",
      "`innerHTML` နဲ့ `<em>စာသား</em>` ထည့်ကြည့်ပြီး `textContent` နဲ့ ထည့်ကြည့်ပါ — ကွာခြားချက်ကို မှတ်ပါ။"
    ],
    hint: "`console.log` နဲ့ တန်ဖိုးကို အမြဲ စစ်ပါ။ မျှော်လင့်တာ မရရင် property နာမည် မှန်မမှန် ပြန်စစ်ပါ။"
  }
});

/* ------------------------------------------------------------
   DOM 03 — Element ဆောက်ခြင်း / ထည့်ခြင်း
   ------------------------------------------------------------ */
JSL.lessons.push({
  id: "dom-03",
  chapter: "dom",
  order: 3,
  num: "03",
  title: "Element အသစ် ဆောက်ခြင်း နှင့် ထည့်ခြင်း",
  subtitle: "createElement, append, prepend, before/after နဲ့ DocumentFragment",
  minutes: 22,
  level: "အလယ်အလတ်",
  tags: ["createElement", "append", "DocumentFragment", "remove"],
  fileName: "03-create-insert.html",
  source: "../02-dom/03-create-insert.html",
  intro: [
    "စာမျက်နှာပေါ်က element တွေကို ပြင်တာအပြင် JavaScript ကနေ element အသစ် ဆောက်ပြီး ထည့်လို့လည်း ရတယ်။ ဥပမာ စာရင်း တစ်ခုကို array ထဲက ဒေတာနဲ့ ဆောက်တာ၊ chat message အသစ် ထည့်တာ၊ table row အသစ် ထည့်တာတွေ အားလုံး ဒီနည်းနဲ့ လုပ်တယ်။",
    "ဒီသင်ခန်းစာမှာ element ဆောက်တဲ့ အဆင့်၊ ဘယ်နေရာမှာ ထည့်မလဲ ရွေးတဲ့ နည်းလမ်းတွေ၊ အများကြီးကို တစ်ခါတည်း ထည့်တဲ့ `DocumentFragment` နဲ့ ဖျက်/အစားထိုး လုပ်တာတွေကို လေ့လာပါမယ်။"
  ],
  goals: [
    "`createElement()` နဲ့ element အသစ် ဆောက်နိုင်မယ်။",
    "`append`, `prepend`, `before`, `after` နဲ့ နေရာ ရွေးထည့်နိုင်မယ်။",
    "Loop နဲ့ စာရင်း ဆောက်တဲ့ render function ရေးနိုင်မယ်။",
    "`remove()` နဲ့ `replaceWith()` ကို သုံးနိုင်မယ်။"
  ],
  diagram: {
    type: "pipeline",
    title: "Element အသစ် တစ်ခု ဆောက်ပြီး စာမျက်နှာပေါ် ပေါ်လာတဲ့ အထိ",
    items: [
      { t: "createElement", sub: "memory ထဲမှာ ဆောက်တယ်", tone: 6 },
      { t: "အချက်အလက် ထည့်", sub: "textContent / class / style", tone: 1 },
      { t: "နေရာ ရွေး", sub: "append / before …", tone: 3 },
      { t: "DOM ထဲ ဝင်", sub: "အခုမှ မြင်ရတယ်", tone: 2 }
    ],
    caption: "အရေးကြီးချက် — `createElement` လုပ်ရုံနဲ့ စာမျက်နှာပေါ် မပေါ်သေးဘူး။ `append` လုပ်ပြီးမှ DOM ထဲ ဝင်ပြီး မြင်ရတယ်။"
  },
  sections: [
    {
      h: "createElement နှင့် append",
      p: "အဆင့် သုံးဆင့် ရှိတယ်။ ၁) `document.createElement(\"li\")` နဲ့ element ဆောက်တယ်။ ၂) `li.textContent = \"...\"` နဲ့ အချက်အလက် ထည့်တယ်။ ၃) ရှိပြီးသား parent ထဲကို `append` နဲ့ ထည့်တယ်။",
      code: `let list = document.getElementById("list");

let li = document.createElement("li");
li.textContent = "Item 1";

list.append(li);`,
      lang: "js",
      file: "03-create-insert.html",
      lines: [
        { n: 1, t: "Element အသစ်တွေ ထည့်မယ့် မိခင် element ကို ရှာတယ်။" },
        { n: 3, t: "`li` element ကို memory ထဲမှာ ဆောက်တယ်။ ဒီအဆင့်မှာ စာမျက်နှာပေါ် မပေါ်သေးဘူး။" },
        { n: 4, t: "အတွင်းစာသား ထည့်တယ်။ ဒါလည်း စာမျက်နှာပေါ် မပေါ်သေးဘူး။" },
        { n: 6, t: "`append` လုပ်လိုက်တဲ့အခါမှ `li` က DOM ထဲ ဝင်ပြီး စာမျက်နှာပေါ် ပေါ်လာတယ်။" }
      ]
    },
    {
      h: "Loop နဲ့ အများ ဆောက်ခြင်း",
      p: "Array ထဲက ဒေတာတွေကို စာရင်းအဖြစ် ပြချင်ရင် `forEach` နဲ့ လှည့်ပြီး တစ်ခုချင်းစီ ဆောက်တယ်။ ဒါက ဒေတာနဲ့ UI ကို ချိတ်တဲ့ အခြေခံ ပုံစံပါ။",
      code: `let fruits = ["Apple", "Banana", "Mango"];

fruits.forEach((fruit) => {
  let item = document.createElement("li");
  item.textContent = fruit;
  list.append(item);
});

console.log(list.children.length);   // 4 (အပေါ်က Item 1 အပါ)`,
      lang: "js",
      file: "03-create-insert.html",
      lines: [
        { n: 1, t: "ပြချင်တဲ့ ဒေတာ စာရင်း။ တကယ့် project မှာ ဒီနေရာကို API ကနေ ရတဲ့ data ထည့်လေ့ ရှိတယ်။" },
        { n: "3-7", t: "Fruit တစ်ခုစီအတွက် `li` အသစ် ဆောက်၊ စာသား ထည့်၊ စာရင်းထဲ ထည့်တယ်။" },
        { n: 9, t: "ရလဒ်ကို စစ်တယ်။ အရင် ထည့်ထားတဲ့ `Item 1` နဲ့ ပေါင်းရင် ၄ ခု ရှိမယ်။" }
      ]
    },
    {
      h: "နေရာ ရွေးထည့်ခြင်း — append / prepend / before / after",
      p: "`append` က အနောက်ဆုံးမှာ ထည့်တယ်။ `prepend` က အရှေ့ဆုံးမှာ ထည့်တယ်။ `before` နဲ့ `after` က element တစ်ခုရဲ့ အပေါ်/အောက် (မောင်နှမ နေရာ) မှာ ထည့်တယ်။ ကိုယ် ထည့်ချင်တဲ့ နေရာအလိုက် ရွေးရတယ်။",
      diagram: {
        type: "grid",
        title: "ထည့်တဲ့ နေရာ အလိုက် method",
        cols: 2,
        items: [
          { t: "append", sub: "မိခင်၏ အနောက်ဆုံး ကလေး", tone: 2 },
          { t: "prepend", sub: "မိခင်၏ အရှေ့ဆုံး ကလေး", tone: 1 },
          { t: "before", sub: "ကိုယ်ရဲ့ အပေါ် မောင်နှမ", tone: 3 },
          { t: "after", sub: "ကိုယ်ရဲ့ အောက် မောင်နှမ", tone: 6 }
        ]
      },
      code: `let first = document.createElement("li");
first.textContent = "အရှေ့ဆုံး";
list.prepend(first);

let last = document.createElement("li");
last.textContent = "အနောက်ဆုံး";
list.append(last);

let middle = document.getElementById("middle");

let beforeP = document.createElement("p");
beforeP.textContent = "အပေါ်က စာသား";
middle.before(beforeP);

let afterP = document.createElement("p");
afterP.textContent = "အောက်က စာသား";
middle.after(afterP);`,
      lang: "js",
      file: "03-create-insert.html",
      lines: [
        { n: "1-3", t: "`prepend` က စာရင်းရဲ့ အရှေ့ဆုံးမှာ ထည့်တယ်။" },
        { n: "5-7", t: "`append` က စာရင်းရဲ့ အနောက်ဆုံးမှာ ထည့်တယ်။" },
        { n: "9-13", t: "`before` က `#middle` ရဲ့ အပေါ်မှာ၊ `after` က အောက်မှာ ထည့်တယ်။ ဒါတွေက ကလေး မဟုတ်ဘူး၊ မောင်နှမ နေရာပါ။" }
      ],
      tip: {
        type: "warn",
        title: "before/after က parent မလိုဘူး",
        text: "`middle.before(beforeP)` မှာ `middle` ရဲ့ parent ကို မသိလည်း ရတယ်။ Browser က အလိုအလျောက် ရှာပေးတယ်။"
      }
    },
    {
      h: "DocumentFragment — အများ တစ်ခါတည်း ထည့်ခြင်း",
      p: "Element ၁၀၀ ကို တစ်ခုချင်း `append` လုပ်ရင် browser က စာမျက်နှာကို အကြိမ် ၁၀၀ ပြင်ရတယ်။ နှေးတယ်။ `DocumentFragment` ဆိုတဲ့ ယာယီ ကွန်တိန်နာ ထဲမှာ အရင်ထည့်ပြီး နောက်ဆုံးမှ တစ်ခါတည်း ထည့်ရင် ပိုမြန်တယ်။ Fragment ကိုယ်တိုင် DOM ထဲ မဝင်ဘူး၊ သူ့ကလေးတွေပဲ ဝင်တယ်။",
      diagram: {
        type: "flow",
        title: "DocumentFragment အလုပ်လုပ်ပုံ",
        nodes: [
          { t: "Fragment ဆောက်တယ်", sub: "document.createDocumentFragment()", tone: 6 },
          { t: "ကလေးတွေ အထဲ ထည့်တယ်", sub: "DOM နဲ့ မချိတ်သေးလို့ မြန်တယ်", tone: 1 },
          { t: "Fragment ကို append", sub: "ကလေးအားလုံး တစ်ခါတည်း ရွေ့သွားတယ်", tone: 3 },
          { t: "စာမျက်နှာပေါ် ပေါ်တယ်", sub: "Fragment ကိုယ်တိုင် မဝင်ဘူး", tone: 2 }
        ]
      },
      code: `let fragment = document.createDocumentFragment();

for (let i = 1; i <= 3; i++) {
  let p = document.createElement("p");
  p.textContent = "Fragment " + i;
  fragment.append(p);
}

document.getElementById("box").append(fragment);`,
      lang: "js",
      file: "03-create-insert.html",
      lines: [
        { n: 1, t: "မြင်ရတဲ့ ကွန်တိန်နာ မဟုတ်တဲ့ ယာယီ fragment ဆောက်တယ်။" },
        { n: "3-7", t: "`p` သုံးခုကို fragment ထဲ ထည့်တယ်။ ဒီအဆင့်မှာ စာမျက်နှာပေါ် မပေါ်သေးဘူး။" },
        { n: 9, t: "Fragment ကို `#box` ထဲ ထည့်လိုက်တဲ့အခါ ကလေး သုံးခုစလုံး တစ်ခါတည်း ရွေ့သွားတယ်။" }
      ]
    },
    {
      h: "ဖျက်ခြင်း နှင့် အစားထိုးခြင်း",
      p: "`remove()` က element ကို ဖျက်တယ်။ `replaceWith()` က element တစ်ခုကို အခြားတစ်ခုနဲ့ အစားထိုးတယ်။ ဖျက်လိုက်တဲ့ element က memory ထဲမှာ ရှိနေသေးပေမယ့် DOM ထဲ မရှိတော့ဘူး။",
      code: `let removeMe = document.createElement("p");
removeMe.textContent = "ဖျက်ခံမယ်";
document.getElementById("box").append(removeMe);

removeMe.remove();

let oldP = document.createElement("p");
oldP.textContent = "အဟောင်း";
document.getElementById("box").append(oldP);

let newP = document.createElement("p");
newP.textContent = "အသစ်";
oldP.replaceWith(newP);`,
      lang: "js",
      file: "03-create-insert.html",
      lines: [
        { n: "1-5", t: "Element တစ်ခု ဆောက်၊ ထည့်၊ ပြီးမှ `remove()` နဲ့ ဖျက်တယ်။" },
        { n: "7-13", t: "`replaceWith` က `oldP` နေရာမှာ `newP` ကို အစားထိုးတယ်။ `oldP` က DOM ထဲ မရှိတော့ဘူး။" }
      ]
    },
    {
      h: "စာရင်း ပြန်ဆောက်တဲ့ render function",
      p: "ဒေတာ ပြောင်းတိုင်း စာရင်းတစ်ခုလုံးကို အသစ် ပြန်ဆောက်တဲ့ ပုံစံက အသုံးများတယ်။ အရင် `innerHTML = \"\"` နဲ့ အဟောင်း အားလုံး ရှင်းပြီး ဒေတာအသစ်နဲ့ ပြန်ဆောက်တယ်။ ဒီနည်းက ရိုးရှင်းပြီး ဒေတာနဲ့ UI အမြဲ ကိုက်ညီနေစေတယ်။",
      code: `function renderList(names) {
  list.innerHTML = "";        // အဟောင်း ရှင်း

  names.forEach((name) => {
    let item = document.createElement("li");
    item.textContent = name;
    list.append(item);
  });
}

renderList(["Kyaw", "Su", "Aung"]);
console.log(list.textContent);   // KyawSuAung`,
      lang: "js",
      file: "03-create-insert.html",
      lines: [
        { n: 2, t: "အဟောင်း `li` အားလုံးကို ဖျက်တယ်။ ဒါမှ ထပ်ခါ ခေါ်တိုင်း မပွားဘူး။" },
        { n: "4-8", t: "ဒေတာ array ထဲက တစ်ခုချင်းစီအတွက် `li` ဆောက်ပြီး ထည့်တယ်။" },
        { n: 10, t: "Function ကို ခေါ်ပြီး စာရင်း အသစ် ဆောက်တယ်။ နောက် ဒေတာ ပြောင်းရင် ဒီ function ကို ထပ် ခေါ်ရုံပါပဲ။" }
      ],
      tip: {
        type: "warn",
        title: "innerHTML = \"\" က ကလေးအားလုံး ဖျက်တယ်",
        text: "ဖျက်လိုက်တဲ့ element တွေမှာ event listener ရှိရင် အဲဒါလည်း ပျက်သွားတယ်။ Event တွေ ပါတဲ့ စာရင်းဆိုရင် အရေးကြီးတဲ့ အချက်ပါ။"
      }
    }
  ],
  pitfalls: [
    { t: "createElement လုပ်ပြီး append မလုပ်မိတယ်", d: "ဆောက်ထားတဲ့ element က memory ထဲမှာပဲ ရှိတယ်။ စာမျက်နှာပေါ် ပေါ်ချင်ရင် parent ထဲကို `append` လုပ်ရမယ်။" },
    { t: "Loop ထဲမှာ parent ကို ထပ်ရှာနေတယ်", d: "`document.getElementById` ကို loop အပြင်မှာ တစ်ခါ ရှာပြီး သိမ်းထားပါ။ ပိုမြန်တယ်။" },
    { t: "append နဲ့ innerHTML ရောမိတယ်", d: "`list.append(\"<li>...\")` က စာသားအတိုင်း ထည့်တယ်၊ element မဖြစ်ဘူး။ Element ဆောက်ချင်ရင် `createElement` သုံးပါ။" }
  ],
  recap: [
    "`createElement` က element ဆောက်တယ်၊ `append` မှ DOM ထဲ ဝင်တယ်။",
    "`append`/`prepend` က ကလေး နေရာ၊ `before`/`after` က မောင်နှမ နေရာ။",
    "အများကြီး ထည့်ရင် `DocumentFragment` က ပိုမြန်တယ်။",
    "`remove()` နဲ့ ဖျက်၊ `replaceWith()` နဲ့ အစားထိုး။"
  ],
  exercise: {
    title: "ကိုယ်တိုင် စမ်းကြည့်ပါ",
    steps: [
      "`[\"Red\", \"Green\", \"Blue\"]` array ကို `li` စာရင်းအဖြစ် ဆောက်ပါ။",
      "စာရင်းရဲ့ အရှေ့ဆုံးမှာ \"First\" ဆိုတဲ့ `li` ကို `prepend` နဲ့ ထည့်ပါ။",
      "`DocumentFragment` နဲ့ `p` ငါးခု တစ်ခါတည်း ထည့်ပါ။",
      "ဖန်တီးထားတဲ့ `li` တစ်ခုကို `remove()` နဲ့ ဖျက်ပါ။"
    ],
    hint: "Element ဆောက်တာနဲ့ ထည့်တာ မတူဘူး။ `append` မလုပ်ရင် ဘာမှ မပေါ်ဘူး။"
  }
});

/* ------------------------------------------------------------
   DOM 04 — Traversal
   ------------------------------------------------------------ */
JSL.lessons.push({
  id: "dom-04",
  chapter: "dom",
  order: 4,
  num: "04",
  title: "Element ကြား သွားလာခြင်း",
  subtitle: "parent, children, sibling နဲ့ closest ကို အသုံးချခြင်း",
  minutes: 18,
  level: "အလယ်အလတ်",
  tags: ["parentElement", "children", "sibling", "closest"],
  fileName: "04-traversal.html",
  source: "../02-dom/04-traversal.html",
  intro: [
    "တစ်ခါတလေ လိုချင်တဲ့ element ကို တိုက်ရိုက် မရှာနိုင်ဘူး။ နှိပ်လိုက်တဲ့ button ရဲ့ အပေါ်က card ကို ရှာချင်တာ၊ စာရင်းရဲ့ ကလေးတွေကို တစ်ခုချင်း လှည့်ချင်တာ မျိုးပါ။ အဲဒီအခါ DOM သစ်ပင် ပေါ်မှာ အပေါ်၊ အောက်၊ ဘေး ရွေ့ပြီး ရှာတယ်။ ဒါကို traversal လို့ ခေါ်တယ်။",
    "ဒီသင်ခန်းစာမှာ `parentElement`, `children`, `firstElementChild`, `nextElementSibling`, `closest` စတဲ့ လမ်းကြောင်း ရွေ့နည်းတွေကို လေ့လာပါမယ်။"
  ],
  goals: [
    "`parentElement` နဲ့ အပေါ်ကို တက်နိုင်မယ်။",
    "`children`, `firstElementChild`, `lastElementChild` နဲ့ ကလေးတွေ ရနိုင်မယ်။",
    "`nextElementSibling`, `previousElementSibling` နဲ့ မောင်နှမ ကြား ရွေ့နိုင်မယ်။",
    "`closest()` နဲ့ အပေါ်ကို တက် ရှာနိုင်မယ်။"
  ],
  diagram: {
    type: "tree",
    title: "Traversal အတွက် DOM ဆက်နွယ်မှု",
    root: {
      t: "div#container",
      sub: "မိခင်",
      tone: 5,
      children: [
        { t: "h2#heading", sub: "အပေါ် မောင်နှမ", tone: 1 },
        {
          t: "ul#list",
          sub: "အလယ်",
          tone: 2,
          children: [
            { t: "li.item", sub: "ပထမ", tone: 6 },
            { t: "li.item", sub: "ဒုတိယ", tone: 6 },
            { t: "li.item", sub: "တတိယ", tone: 6 }
          ]
        },
        { t: "p#footer", sub: "အောက် မောင်နှမ", tone: 3 }
      ]
    },
    caption: "အပေါ်ကို — `parentElement`။ အောက်ကို — `children`။ ဘေးကို — `nextElementSibling` / `previousElementSibling`။"
  },
  sections: [
    {
      h: "အပေါ်ကို တက်ခြင်း — parentElement",
      p: "`parentElement` က လက်ရှိ element ရဲ့ မိခင် element ကို ပြန်တယ်။ `document` ရဲ့ parent က `null` ဖြစ်တယ်။",
      code: `let list = document.getElementById("list");

console.log(list.parentElement.id);   // container
console.log(list.parentElement.tagName); // DIV`,
      lang: "js",
      file: "04-traversal.html",
      lines: [
        { n: 3, t: "`#list` ရဲ့ မိခင်က `#container` ဖြစ်တယ်။ `id` နဲ့ စစ်တယ်။" },
        { n: 4, t: "မိခင်ရဲ့ tag နာမည် ကို ယူတယ်။ `DIV` လို့ အကြီးစာလုံး ပြန်တယ်။" }
      ]
    },
    {
      h: "ကလေးများ — children, first, last",
      p: "`children` က ကလေး element တွေရဲ့ HTMLCollection ကို ပြန်တယ်။ စာသား node တွေ မပါဘူး၊ element တွေပဲ ပါတယ်။ `firstElementChild` နဲ့ `lastElementChild` က အရှေ့ဆုံးနဲ့ အနောက်ဆုံး ကလေးကို ပြန်တယ်။",
      code: `console.log(list.children.length);            // 3
console.log(list.firstElementChild.textContent); // Apple
console.log(list.lastElementChild.textContent);  // Mango`,
      lang: "js",
      file: "04-traversal.html",
      lines: [
        { n: 1, t: "ကလေး element ဘယ်နှခု ရှိလဲ စစ်တယ်။ Text node တွေ မပါဘူး။" },
        { n: 2, t: "ပထမဆုံး `li` ရဲ့ စာသား။" },
        { n: 3, t: "နောက်ဆုံး `li` ရဲ့ စာသား။" }
      ],
      tip: {
        type: "info",
        title: "children နဲ့ childNodes မတူဘူး",
        text: "`childNodes` မှာ whitespace နဲ့ comment တွေပါ ပါတယ်။ ပုံမှန်အားဖြင့် element တွေပဲ လိုချင်တာမို့ `children` ကို သုံးတာ ပိုရှင်းတယ်။"
      }
    },
    {
      h: "မောင်နှမ ကြား ရွေ့ခြင်း",
      p: "`nextElementSibling` က အောက်က မောင်နှမ၊ `previousElementSibling` က အပေါ်က မောင်နှမကို ပြန်တယ်။ မရှိရင် `null` ပြန်တယ်။ ဒါကို `while` loop နဲ့ တွဲပြီး ကလေးအားလုံးကို တစ်ခုချင်း လှည့်လို့ရတယ်။",
      diagram: {
        type: "flow",
        title: "nextElementSibling နဲ့ စာရင်း လှည့်ခြင်း",
        nodes: [
          { t: "current = firstElementChild", sub: "ပထမ li ကနေ စ", tone: 6 },
          { t: "current က null မဟုတ်လား?", sub: "မဟုတ်ရင် အတွင်းကုဒ် run", tone: 3 },
          { t: "current.textContent ကို သုံး", sub: "ဒီ element နဲ့ အလုပ် လုပ်", tone: 1 },
          { t: "current = current.nextElementSibling", sub: "အောက်ကို ရွေ့", tone: 2 }
        ],
        arrows: ["စ", "စစ်", "လုပ်", "ရွေ့"],
        caption: "နောက်ဆုံး `null` ရောက်တဲ့အခါ loop ရပ်တယ်။"
      },
      code: `let current = list.firstElementChild;

while (current !== null) {
  console.log(current.textContent);
  current = current.nextElementSibling;
}`,
      lang: "js",
      file: "04-traversal.html",
      lines: [
        { n: 1, t: "ပထမဆုံး ကလေးကနေ စတယ်။" },
        { n: 3, t: "`current` က `null` ဖြစ်နေရင် loop ရပ်မယ်။ ဒါက စာရင်း အဆုံးကို ရောက်တာ ဖြစ်တယ်။" },
        { n: 5, t: "လက်ရှိ element နဲ့ အလုပ် လုပ်တယ်။" },
        { n: 6, t: "အောက်က မောင်နှမကို ရွေ့တယ်။ မရှိတော့ရင် `null` ဖြစ်ပြီး loop ရပ်မယ်။" }
      ]
    },
    {
      h: "closest — အပေါ်ကို တက် ရှာခြင်း",
      p: "`closest(\"selector\")` က ကိုယ်တိုင် ကနေ စပြီး အပေါ်ကို တက်ရင်း ကိုက်ညီတဲ့ ပထမဆုံး element ကို ရှာတယ်။ Button နှိပ်လိုက်တဲ့အခါ သူ့ရဲ့ card ကို ရှာတာ၊ list item ရဲ့ `ul` ကို ရှာတာမျိုးမှာ အလွန် အသုံးဝင်တယ်။",
      code: `let item = list.querySelector(".item");

console.log(item.closest("ul").id);          // list
console.log(item.closest("#container").id);  // container

let deleteBtn = document.querySelector(".delete");
let card = deleteBtn.closest(".card");
console.log(card.querySelector("h3").textContent);`,
      lang: "js",
      file: "04-traversal.html",
      lines: [
        { n: 3, t: "`li` ကနေ အပေါ်ကို တက်ရင်း `ul` ကို ရှာတယ်။ ကိုယ်တိုင်က `li` မို့ `ul` မဟုတ်ဘူး၊ မိခင်မှာ တွေ့တယ်။" },
        { n: 4, t: "`#container` အထိ တက်ရှာတယ်။" },
        { n: "6-8", t: "ဖျက်တဲ့ button ကနေ သူ့ card ကို ရှာပြီး card ထဲက ခေါင်းစဉ်ကို ဖတ်တယ်။ ဒါက delegation မှာ အများကြီး သုံးတယ်။" }
      ],
      tip: {
        type: "key",
        title: "closest က ကိုယ်တိုင်ကစတယ်",
        text: "`item.closest(\".item\")` က `item` ကိုယ်တိုင်ကို ပြန်တယ်။ မိခင်ကနေ မစဘူး။ ဒါကြောင့် `closest` က ကိုယ်တိုင် ပါဝင်တဲ့ အုပ်စုကို ရှာတဲ့အခါ သတိထားပါ။"
      }
    },
    {
      h: "Element အတွင်းမှာ ရှာခြင်း",
      p: "ရှာပြီးသား element ပေါ်မှာ `querySelector`/`querySelectorAll` ကို ထပ် ခေါ်ရင် သူ့ အတွင်းမှာပဲ ရှာတယ်။ စာမျက်နှာ တစ်ခုလုံးမှာ ရှာတာထက် ပိုတိကျပြီး ပိုမြန်တယ်။",
      code: `let container = document.getElementById("container");

let insideItems = container.querySelectorAll(".item");
console.log(insideItems.length);   // 3

let card = document.querySelector(".card");
console.log(card.querySelector("h3").textContent);`,
      lang: "js",
      file: "04-traversal.html",
      lines: [
        { n: 3, t: "`#container` အတွင်းမှာပဲ `.item` တွေကို ရှာတယ်။ အပြင်က `.item` ရှိရင် မပါဘူး။" },
        { n: "6-7", t: "Card တစ်ခုရဲ့ အတွင်းက ခေါင်းစဉ်ကို ရှာတယ်။" }
      ]
    },
    {
      h: "Index ရှာခြင်း",
      p: "DOM collection တွေမှာ `indexOf` မရှိဘူး။ ဒါကြောင့် `[...list.children]` နဲ့ Array ပြောင်းပြီး `indexOf` ကို သုံးတယ်။ ဒါမှ လက်ရှိ item က ဘယ်နှခုမြောက်လဲ သိနိုင်တယ်။",
      code: `let items = [...list.children];
let index = items.indexOf(item);

console.log(index);   // 0

let names = items.map((li) => li.textContent);
console.log(names.join(" / "));`,
      lang: "js",
      file: "04-traversal.html",
      lines: [
        { n: 1, t: "`children` ကို Array အဖြစ် ပြောင်းတယ်။" },
        { n: 2, t: "`indexOf` က element ရဲ့ နေရာ (index) ကို ပြန်တယ်။ မတွေ့ရင် `-1` ပြန်တယ်။" },
        { n: 6, t: "Array ဖြစ်သွားတဲ့အတွက် `map` သုံးပြီး စာသားအားလုံး ယူတယ်။" }
      ]
    }
  ],
  pitfalls: [
    { t: "children ကို forEach လုပ်တယ်", d: "`children` က HTMLCollection ဖြစ်ပြီး `forEach` မရှိဘူး။ `[...list.children]` နဲ့ Array ပြောင်းပါ။" },
    { t: "nextSibling သုံးမိတယ်", d: "`nextSibling` က whitespace text node တွေ ပါ ပြန်တယ်။ Element ပဲ လိုချင်ရင် `nextElementSibling` ကို သုံးပါ။" },
    { t: "closest က အောက်ကို ရှာမယ် ထင်တယ်", d: "`closest` က အပေါ်ကို ပဲ တက်ရှာတယ်။ အောက်ကို ရှာချင်ရင် `querySelector` ကို သုံးပါ။" }
  ],
  recap: [
    "အပေါ်ကို `parentElement`၊ အောက်ကို `children`။",
    "အရှေ့/အနောက် ကလေးက `firstElementChild`/`lastElementChild`။",
    "ဘေးကို `nextElementSibling`/`previousElementSibling` နဲ့ ရွေ့တယ်။",
    "`closest` က ကိုယ်တိုင်ကနေ အပေါ်ကို တက်ရှာတယ်။"
  ],
  exercise: {
    title: "ကိုယ်တိုင် စမ်းကြည့်ပါ",
    steps: [
      "`#list` ရဲ့ ကလေး အားလုံးကို `children` နဲ့ ယူပြီး စာသားတွေ ထုတ်ပါ။",
      "`while` နဲ့ `nextElementSibling` ကို သုံးပြီး `li` အားလုံးကို လှည့်ပါ။",
      "`.delete` button ကနေ `closest(\".card\")` နဲ့ card ကို ရှာပါ။",
      "`[...list.children]` ကို `map` လုပ်ပြီး စာသားတွေကို array အဖြစ် ယူပါ။"
    ],
    hint: "Element နဲ့ text node ကို ခွဲဖို့ `Element` ပါတဲ့ property တွေ (`children`, `nextElementSibling`) ကို သုံးပါ။"
  }
});

/* ------------------------------------------------------------
   DOM 05 — classList & Style
   ------------------------------------------------------------ */
JSL.lessons.push({
  id: "dom-05",
  chapter: "dom",
  order: 5,
  num: "05",
  title: "classList နှင့် Style ထိန်းချုပ်ခြင်း",
  subtitle: "CSS class လှန်ခြင်း၊ inline style ပြင်ခြင်း၊ getComputedStyle",
  minutes: 20,
  level: "အလယ်အလတ်",
  tags: ["classList", "style", "getComputedStyle"],
  fileName: "05-classlist-style.html",
  source: "../02-dom/05-classlist-style.html",
  intro: [
    "Element တစ်ခုရဲ့ အပြင်အဆင်ကို JavaScript ကနေ ပြောင်းချင်တဲ့အခါ နည်းလမ်း နှစ်မျိုး ရှိတယ်။ တစ်ခုက CSS class ကို လှန်တာ၊ နောက်တစ်ခုက `style` နဲ့ တိုက်ရိုက် ပြင်တာ။ လက်တွေ့ project တွေမှာ class ကို လှန်တဲ့ နည်းလမ်းက ပိုကောင်းတယ်။",
    "ဒီသင်ခန်းစာမှာ `classList` ရဲ့ add/remove/toggle/contains/replace၊ `style` property၊ `cssText` နဲ့ `getComputedStyle` ကို လေ့လာပါမယ်။"
  ],
  goals: [
    "`classList.add/remove/toggle/contains/replace` ကို သုံးနိုင်မယ်။",
    "CSS class နဲ့ inline style ရဲ့ ကွာခြားချက်ကို နားလည်မယ်။",
    "`style` နဲ့ တစ်ခုချင်း ပြင်နိုင်မယ်။",
    "`getComputedStyle` နဲ့ တကယ် တွက်ပြီးသား တန်ဖိုးကို ဖတ်နိုင်မယ်။"
  ],
  diagram: {
    type: "compare",
    title: "classList နှင့် style — ဘယ်ဟာ ဘယ်အခါ",
    left: {
      title: "classList",
      sub: "CSS မှာ ကြိုရေးထားတဲ့ အပြင်အဆင်",
      tone: 6,
      items: [
        "CSS ကို ခွဲထားလို့ ထိန်းရလွယ်တယ်",
        "Class တစ်ခုတည်း လှန်ရုံပါပဲ",
        "Design ပြောင်းရင် CSS ပဲ ပြင်ရတယ်",
        "Animation/transition နဲ့ တွဲသုံးရ လွယ်တယ်"
      ]
    },
    right: {
      title: "style",
      sub: "Element ပေါ် တိုက်ရိုက် ရေးတဲ့ အပြင်အဆင်",
      tone: 4,
      items: [
        "တန်ဖိုး တစ်ခုချင်း တိုက်ရိုက် ပြင်နိုင်တယ်",
        "CSS specificity က ပိုမြင့်တယ်",
        "နေရာတိုင်း ကိုယ်တိုင် ရေးရတယ်",
        "အများကြီး ရေးရင် ထိန်းရ ခက်တယ်"
      ]
    },
    caption: "လက်တွေ့ စည်းကမ်း — အခြေအနေ ပြောင်းတာကို class နဲ့ လုပ်ပါ။ တွက်ချက်ထားတဲ့ တန်ဖိုး (ဥပမာ drag နေတဲ့ position) အတွက်မှ `style` ကို သုံးပါ။"
  },
  sections: [
    {
      h: "classList.add နှင့် remove",
      p: "`classList` က class တွေကို တစ်ခုချင်း ထိန်းချုပ်တဲ့ object ပါ။ `add()` က class ထည့်တယ်၊ `remove()` က ဖျက်တယ်။ ရှိပြီးသား class ကို ထပ် add လုပ်ရင် မပွားဘူး။",
      code: `let box1 = document.getElementById("box1");

box1.classList.add("active");
console.log(box1.className);    // "box active"

box1.classList.remove("active");
console.log(box1.className);    // "box"`,
      lang: "js",
      file: "05-classlist-style.html",
      lines: [
        { n: 1, t: "ပြင်ချင်တဲ့ element ကို ရှာတယ်။ သူ့မှာ `box` class ရှိပြီးသားပါ။" },
        { n: 3, t: "`active` class ထည့်တယ်။ CSS မှာ `.active` ရဲ့ အပြင်အဆင် ရှိရင် ချက်ချင်း လိုက်နာမယ်။" },
        { n: 6, t: "`active` ကို ဖျက်တယ်။ `box` ကတော့ ကျန်နေတယ်။" }
      ]
    },
    {
      h: "toggle, contains, replace",
      p: "`toggle()` က class ရှိရင် ဖျက်၊ မရှိရင် ထည့်တယ်။ နှိပ်တိုင်း ပြောင်းတဲ့ button တွေအတွက် အကောင်းဆုံးပါ။ `contains()` က ရှိမရှိ စစ်တယ်။ `replace()` က class အဟောင်းကို အသစ်နဲ့ အစားထိုးတယ်။",
      diagram: {
        type: "cycle",
        title: "toggle လုပ်တိုင်း ဖြစ်တဲ့ အခြေအနေ",
        steps: [
          { t: "class မရှိ", sub: "ဒီအခြေအနေမှာ toggle ခေါ်ရင် →", tone: 6 },
          { t: "class ရှိလာ", sub: "အပြင်အဆင် ပြောင်း", tone: 2 },
          { t: "toggle ထပ်ခေါ်", sub: "class ရှိနေလို့ →", tone: 1 },
          { t: "class ပြန်ဖျက်", sub: "မူလ အခြေအနေ", tone: 4 }
        ],
        loopLabel: "နှိပ်တိုင်း ပြန်ထပ်"
      },
      code: `box1.classList.toggle("big");
console.log(box1.className);    // "box big"

box1.classList.toggle("big");
console.log(box1.className);    // "box"

console.log(box3.classList.contains("hidden"));  // true

box2.classList.replace("box", "active");`,
      lang: "js",
      file: "05-classlist-style.html",
      lines: [
        { n: "1-2", t: "`big` မရှိသေးလို့ toggle က ထည့်တယ်။ စာလုံး အရွယ် ကြီးလာမယ်။" },
        { n: "4-5", t: "ဒုတိယ အကြိမ် toggle မှာ `big` ရှိနေပြီမို့ ဖျက်တယ်။" },
        { n: 7, t: "`contains` က class ရှိမရှိ `true`/`false` ပြန်တယ်။" },
        { n: 9, t: "`box` class ကို `active` နဲ့ အစားထိုးတယ်။" }
      ]
    },
    {
      h: "style — တိုက်ရိုက် ပြင်ခြင်း",
      p: "`element.style` က inline style ကို ကိုယ်စားပြုတယ်။ CSS property နာမည်ကို camelCase နဲ့ ရေးရတယ် — `background-color` က `backgroundColor` ဖြစ်တယ်။ တန်ဖိုးတွေကို string အဖြစ် ရေးရတယ်။",
      code: `let box2 = document.getElementById("box2");

box2.style.color = "white";
box2.style.backgroundColor = "#3b82f6";
box2.style.padding = "20px";
box2.style.borderRadius = "10px";

console.log(box2.style.color);   // white`,
      lang: "js",
      file: "05-classlist-style.html",
      lines: [
        { n: "3-6", t: "CSS property တစ်ခုချင်းစီကို တိုက်ရိုက် သတ်မှတ်တယ်။ ဒက်ရှ် ပါတဲ့ နာမည်တွေက camelCase ဖြစ်သွားတယ်။" },
        { n: 8, t: "`style` ကနေ ပြန်ဖတ်ရင် inline style ထဲမှာ ရှိတဲ့ တန်ဖိုးကို ရတယ်။" }
      ],
      tip: {
        type: "warn",
        title: "အရောင် နာမည် စာလုံးပေါင်း",
        text: "`backgroundColor` လို့ ရေးရမယ်။ `background-color` လို့ ရေးရင် JavaScript မှာ error ဖြစ်မယ်။ ဒါပေမယ့် `style[\"background-color\"]` လို့ ရေးလည်း ရတယ်။"
      }
    },
    {
      h: "cssText — တစ်ခါတည်း အများ",
      p: "`style.cssText` ကို သုံးရင် CSS တစ်ကြောင်းလုံးကို တစ်ခါတည်း သတ်မှတ်နိုင်တယ်။ ဒါပေမယ့် **အဟောင်း style အားလုံးကို အစားထိုး** တယ်။ ထပ်ထည့်ချင်တာလား၊ အစားထိုးချင်တာလား သတိထားပါ။",
      code: `box2.style.cssText = "color: white; background: #16a34a; padding: 20px; border-radius: 10px;";

box2.style.removeProperty("border-radius");
// သို့မဟုတ်
box2.style.borderRadius = "";`,
      lang: "js",
      file: "05-classlist-style.html",
      lines: [
        { n: 1, t: "Style လိုင်း တစ်ခုလုံးကို အသစ် သတ်မှတ်တယ်။ အရင် `style` တန်ဖိုးတွေ အားလုံး ပျက်သွားတယ်။" },
        { n: 3, t: "Property တစ်ခုကို ဖျက်ချင်ရင် `removeProperty` ကို သုံးတယ်။" },
        { n: 5, t: "ဗလာ string ထည့်လည်း အလုပ်လုပ်တယ်။ ဒါက ပိုတိုတဲ့ နည်းပါ။" }
      ]
    },
    {
      h: "getComputedStyle — တကယ့် တန်ဖိုး",
      p: "`element.style` က inline style ပဲ ပြတယ်။ CSS ဖိုင်ကနေ ရတဲ့ တန်ဖိုးတွေ မပါဘူး။ တကယ် တွက်ပြီးသား၊ စာမျက်နှာပေါ် အသုံးချနေတဲ့ တန်ဖိုးကို ဖတ်ချင်ရင် `getComputedStyle(element)` ကို သုံးတယ်။",
      code: `let styles = getComputedStyle(box2);

console.log(styles.padding);   // 20px
console.log(styles.color);     // rgb(255, 255, 255)
console.log(styles.display);   // block`,
      lang: "js",
      file: "05-classlist-style.html",
      lines: [
        { n: 1, t: "`box2` ရဲ့ တကယ် တွက်ပြီးသား style object ကို ယူတယ်။" },
        { n: 3, t: "Padding က တကယ် အသုံးချနေတဲ့ တန်ဖိုး။ CSS ဖိုင်က ရလည်း ဒီမှာ ပါတယ်။" },
        { n: 4, t: "အရောင်ကို `rgb(...)` ပုံစံအဖြစ် ပြန်တယ်။ `white` လို့ မပြန်ဘူး။" }
      ]
    },
    {
      h: "လက်တွေ့ ပုံစံ — class ကို လှန်ခြင်း",
      p: "အခြေအနေတွေကို CSS class အဖြစ် ကြိုရေးထားပြီး JavaScript က class ကို လှန်ရုံ လုပ်တာက အကောင်းဆုံး နည်းလမ်းပါ။ Design ပြောင်းချင်ရင် CSS ပဲ ပြင်ရတယ်၊ JavaScript ကို မထိရဘူး။",
      code: `document.getElementById("toggle-btn").addEventListener("click", () => {
  box1.classList.toggle("active");
  box1.classList.toggle("big");
});

function showError(element, message) {
  element.textContent = message;
  element.classList.add("active");
}

function clearError(element) {
  element.textContent = "";
  element.classList.remove("active");
}`,
      lang: "js",
      file: "05-classlist-style.html",
      lines: [
        { n: "1-4", t: "Button နှိပ်တိုင်း class နှစ်ခုကို လှန်တယ်။ CSS မှာ `.active`၊ `.big` ရဲ့ အပြင်အဆင် ရှိရင် အလိုအလျောက် ပြောင်းမယ်။" },
        { n: "6-9", t: "Error ပြချင်ရင် စာသား ထည့်ပြီး `active` class ထည့်တယ်။" },
        { n: "11-14", t: "ရှင်းချင်ရင် စာသား ဖျက်ပြီး class ဖျက်တယ်။ ဒီ function နှစ်ခုက error UI အတွက် ပြန်သုံးလို့ရတယ်။" }
      ],
      tip: {
        type: "key",
        title: "Class-first စည်းကမ်း",
        text: "`element.style.color = \"red\"` လို နေရာတိုင်း ရေးမယ့်အစား CSS မှာ `.error { color: red; }` ရေးပြီး `classList.add(\"error\")` လုပ်ပါ။ ကုဒ် ပိုရှင်းပြီး ပြင်ရ လွယ်တယ်။"
      }
    }
  ],
  pitfalls: [
    { t: "className ကို တိုက်ရိုက် ပြင်တယ်", d: "`el.className = \"active\"` က အဟောင်း class အားလုံး ဖျက်တယ်။ တစ်ခုပဲ ပြင်ချင်ရင် `classList.add/remove/toggle` ကို သုံးပါ။" },
    { t: "style.background-color လို့ ရေးတယ်", d: "JavaScript မှာ `style.backgroundColor` လို့ camelCase ရေးရတယ်။" },
    { t: "getComputedStyle ကို element မပါဘဲ ခေါ်တယ်", d: "`getComputedStyle(box)` လို element ကို ထည့်ရမယ်။ `box.getComputedStyle()` မဟုတ်ဘူး။" }
  ],
  recap: [
    "`classList.add/remove/toggle/contains/replace` နဲ့ class ကို ထိန်းချုပ်တယ်။",
    "`toggle` က ရှိရင် ဖျက်၊ မရှိရင် ထည့်တယ်။",
    "`style.property` က inline style ကို တိုက်ရိုက် ပြင်တယ်။",
    "`getComputedStyle` က တကယ် အသုံးချနေတဲ့ တန်ဖိုးကို ဖတ်တယ်။"
  ],
  exercise: {
    title: "ကိုယ်တိုင် စမ်းကြည့်ပါ",
    steps: [
      "CSS မှာ `.highlight { background: yellow; }` ရေးပြီး `#box1` ကို `classList.add(\"highlight\")` လုပ်ပါ။",
      "Button တစ်ခု ထည့်ပြီး နှိပ်တိုင်း `#box1` ရဲ့ `active` class ကို `toggle` လုပ်ပါ။",
      "`#box2` ရဲ့ အရောင်၊ padding နဲ့ border-radius ကို `style` နဲ့ ပြင်ပါ။",
      "`getComputedStyle(box2).backgroundColor` ကို `console.log` နဲ့ စစ်ပါ။"
    ],
    hint: "Class နဲ့ လုပ်လို့ရတာကို style နဲ့ မလုပ်ပါနဲ့။ Style က တစ်ခုချင်း တန်ဖိုး အတွက်ပါ။"
  }
});
