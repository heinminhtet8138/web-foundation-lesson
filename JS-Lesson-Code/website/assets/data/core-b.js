/* ============================================================
   core-b.js — အခန်း ၁ (သင်ခန်းစာ ၇–၁၂)
   ============================================================ */
window.JSL = window.JSL || {};
JSL.lessons = JSL.lessons || [];

/* ------------------------------------------------------------
   07 — Functions
   ------------------------------------------------------------ */
JSL.lessons.push({
  id: "core-07",
  chapter: "core",
  order: 7,
  num: "07",
  title: "Function — လုပ်ငန်း တစ်ခုကို ခေါ်သုံးခြင်း",
  subtitle: "parameter, return, arrow function, callback နဲ့ scope",
  minutes: 16,
  level: "အခြေခံ",
  tags: ["function", "return", "arrow", "callback"],
  fileName: "07-functions.html",
  source: "../01-core/07-functions.html",
  intro: [
    "Function ဆိုတာ တစ်ခုခုကို လုပ်ပေးတဲ့ ကုဒ်အပိုင်းအစကို နာမည်ပေးပြီး သိမ်းထားတာပါ။ တစ်ခါရေးထားရင် နေရာအများကြီးမှာ ထပ်ခေါ်သုံးနိုင်တယ်။ ကုဒ်က ပိုတိုပြီး ဖတ်ရလွယ်လာတယ်။",
    "ဒီသင်ခန်းစာမှာ function ကြေညာတာ၊ parameter လက်ခံတာ၊ `return` နဲ့ ရလဒ် ပြန်ပေးတာ၊ arrow function၊ callback နဲ့ scope တွေကို လေ့လာပါမယ်။"
  ],
  goals: [
    "Function ကြေညာပြီး ခေါ်သုံးနိုင်မယ်။",
    "Parameter နဲ့ argument ရဲ့ ကွာခြားချက် သိမယ်။",
    "`return` ရဲ့ အလုပ်ကို နားလည်မယ်။",
    "Arrow function နဲ့ callback ကို သုံးနိုင်မယ်။"
  ],
  diagram: {
    type: "flow",
    title: "Function တစ်ခု အလုပ်လုပ်ပုံ",
    nodes: [
      { t: "Argument ပေးပြီး ခေါ်တယ်", sub: "add(5, 3)", tone: 6, mono: true },
      { t: "Function ထဲ ဝင်တယ်", sub: "a = 5, b = 3 ဖြစ်သွားတယ်", tone: 3 },
      { t: "ကုဒ်ကို run တယ်", sub: "return a + b;", tone: 1, mono: true },
      { t: "ရလဒ် ပြန်ရတယ်", sub: "8 — ခေါ်တဲ့ နေရာကို ပြန်ပေးတယ်", tone: 2 }
    ],
    caption: "Function က ကုဒ်ကို သိမ်းထားတဲ့ စက်လိုပါပဲ။ ကုန်ကြမ်း (argument) ထည့်ပြီး ခေါ်လိုက်ရင် ရလဒ် (return value) ထွက်လာတယ်။"
  },
  sections: [
    {
      h: "Function ကြေညာခြင်းနဲ့ ခေါ်ခြင်း",
      p: "`function` keyword နဲ့ နာမည် ပေးပြီး ကြေညာတယ်။ ကြေညာရုံနဲ့ မမ run ဘူး။ နာမည်ခေါ်ပြီး ခေါ်မှ run တယ်။",
      code: `function greet() {
  console.log("မင်္ဂလာပါ");
}

greet();   // ခေါ်သုံး
greet();

function sayHello(name) {
  console.log("မင်္ဂလာပါ " + name);
}

sayHello("Aung Aung");
sayHello("Su Su");`,
      lang: "js",
      lines: [
        { n: "1-3", t: "`greet` ဆိုတဲ့ function ကို ကြေညာတယ်။ ဒီအဆင့်မှာ ကုဒ် မ run သေးဘူး။" },
        { n: "5-6", t: "`greet()` လို့ ခေါ်တိုင်း ထဲက ကုဒ် run တယ်။ နှစ်ခါ ခေါ်ထားလို့ နှစ်ခါ ပေါ်တယ်။" },
        { n: "8-14", t: "`name` က parameter — ခေါ်တဲ့အခါ ပေးလိုက်တဲ့ တန်ဖိုးကို လက်ခံတယ်။" }
      ]
    },
    {
      h: "Parameter နဲ့ return",
      p: "Parameter က function က လက်ခံတဲ့ တန်ဖိုး။ Argument က ခေါ်တဲ့အခါ တကယ် ပေးလိုက်တဲ့ တန်ဖိုး။ `return` က ရလဒ်ကို ခေါ်တဲ့ နေရာကို ပြန်ပေးတယ်။ `return` ပြီးတာနဲ့ function က ရပ်တယ်။",
      code: `function add(a, b) {
  return a + b;
}

let result = add(5, 3);
console.log(result);        // 8
console.log(add(10, 20));   // 30

function test() {
  return "ဒါက ပြန်ပေးတယ်";
  console.log("ဒီစာကြောင်း မရောက်ဘူး");
}

console.log(test());`,
      lang: "js",
      lines: [
        { n: "1-3", t: "`a` နဲ့ `b` က parameter။ `return` က ပေါင်းပြီး ရလဒ်ကို ပြန်ပေးတယ်။" },
        { n: 5, t: "`add(5, 3)` က 8 ကို ပြန်တယ်။ အဲဒါကို `result` ထဲ သိမ်းတယ်။" },
        { n: "9-12", t: "`return` ပြီးတာနဲ့ function က ရပ်တယ်။ အောက်က `console.log` ကို မရောက်ဘူး။" }
      ]
    },
    {
      h: "Default parameter နဲ့ Arrow function",
      p: "Parameter မပေးရင် သုံးမယ့် default တန်ဖိုး သတ်မှတ်နိုင်တယ်။ Arrow function က `=>` နဲ့ ရေးတဲ့ တိုတဲ့ function ပါ။ တစ်ကြောင်းတည်းဆိုရင် `return` ကို ချန်လို့ရတယ်။",
      code: `function welcome(name = "ဧည့်သည်") {
  return "ကြိုဆိုပါတယ် " + name;
}

console.log(welcome());          // ကြိုဆိုပါတယ် ဧည့်သည်
console.log(welcome("Aung"));    // ကြိုဆိုပါတယ် Aung

const multiply = (a, b) => {
  return a * b;
};

const square = (n) => n * n;
const double = n => n * 2;

console.log(multiply(4, 5));   // 20
console.log(square(6));        // 36
console.log(double(7));        // 14`,
      lang: "js",
      lines: [
        { n: "1-3", t: "`name` မပေးရင် \"ဧည့်သည်\" ကို သုံးမယ်။" },
        { n: "8-11", t: "Arrow function ရဲ့ ပုံစံ — `(parameter) => { return ... }`။" },
        { n: "13-14", t: "တစ်ကြောင်းတည်းဆိုရင် `return` မလိုဘူး။ Parameter တစ်ခုတည်းဆိုရင် ကွင်းမလိုဘူး။" }
      ]
    },
    {
      h: "Callback — function ကို ပေးပို့ခြင်း",
      p: "Function ကို တန်ဖိုးတစ်ခုလို ပေးပို့လို့ရတယ်။ ဒါကို callback လို့ ခေါ်တယ်။ နောက်ပိုင်း `forEach`, `map`, event listener တွေမှာ အများကြီး တွေ့ရမယ်။",
      code: `function calculate(a, b, operation) {
  return operation(a, b);
}

console.log(calculate(10, 5, add));              // 15
console.log(calculate(10, 5, (x, y) => x - y));  // 5
console.log(calculate(10, 5, (x, y) => x * y));  // 50`,
      lang: "js",
      lines: [
        { n: "1-3", t: "`operation` က function တစ်ခု ဖြစ်မယ်။ ခေါ်တဲ့အခါ ဘယ် function ပေးလဲဆိုတာ မူတည်တယ်။" },
        { n: 5, t: "အပေါ်မှာ ကြေညာထားတဲ့ `add` function ကို ပေးလိုက်တယ်။" },
        { n: "6-7", t: "Arrow function ကို တိုက်ရိုက် ပေးလိုက်တယ်။ ဒါက callback ရဲ့ ပုံမှန် အသုံးပြုပုံ။" }
      ]
    },
    {
      h: "Closure နဲ့ Scope",
      p: "Function ထဲမှာ ကြေညာထားတဲ့ variable က အပြင်မှာ မရဘူး။ ဒါပေမယ့် function တစ်ခုက အပြင်က variable ကို မြင်နိုင်တယ်။ အတွင်းက function က အပြင်က variable ကို မှတ်ထားနိုင်တာကို closure လို့ ခေါ်တယ်။",
      code: `function makeCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = makeCounter();
console.log(counter());   // 1
console.log(counter());   // 2
console.log(counter());   // 3

let globalVar = "အပြင်က";

function showScope() {
  let localVar = "function ထဲက";
  console.log(globalVar);   // ✅ ရတယ်
  console.log(localVar);    // ✅ ရတယ်
}

showScope();
// console.log(localVar);     // ❌ မရဘူး`,
      lang: "js",
      lines: [
        { n: "1-8", t: "အတွင်း function က `count` ကို မှတ်ထားတယ်။ `makeCounter()` ပြီးသွားလည်း count က ရှိနေတယ်။" },
        { n: "10-13", t: "ခေါ်တိုင်း 1, 2, 3 လို့ တိုးသွားတယ်။ ဒါက closure ရဲ့ ဥပမာ။" },
        { n: "15-24", t: "Global variable ကို function ထဲက မြင်နိုင်တယ်။ အတွင်းက `localVar` ကို အပြင်က မမြင်ဘူး။" }
      ]
    }
  ],
  pitfalls: [
    { t: "return မထည့်မိတယ်", d: "`return` မပါရင် function က `undefined` ပြန်တယ်။ ရလဒ် လိုချင်ရင် `return` ထည့်ပါ။" },
    { t: "Parameter နဲ့ argument ရောနေတယ်", d: "ကြေညာတဲ့အခါ ရေးတာက parameter၊ ခေါ်တဲ့အခါ ပေးတာက argument။ နှစ်ခုက နေရာမတူဘူး။" },
    { t: "Function ကို ခေါ်ဖို့ မေ့တယ်", d: "`greet` လို့ ရေးရင် function ကိုယ်တိုင်ကို ညွှန်တယ်၊ `greet()` လို့ ရေးမှ run တယ်။" }
  ],
  recap: [
    "Function က ကုဒ်ကို နာမည်ပေးပြီး သိမ်းထားတာ။ ခေါ်မှ run တယ်။",
    "Parameter က လက်ခံတဲ့ နေရာ၊ argument က တကယ် ပေးတဲ့ တန်ဖိုး။",
    "`return` က ရလဒ် ပြန်ပေးပြီး function ကို ရပ်တယ်။",
    "Arrow function က တိုတဲ့ function။ Callback က function ကို တန်ဖိုးအနေနဲ့ ပေးတာ။"
  ],
  exercise: {
    title: "Function ရေးကြည့်ပါ",
    steps: [
      "`area(width, height)` ဆိုတဲ့ function ရေးပြီး စတုဂံ ဧရိယာ ပြန်ပေးပါ။",
      "`isEven(n)` ဆိုတဲ့ arrow function ရေးပြီး စုံဂဏန်း ဟုတ်မဟုတ် true/false ပြန်ပါ။",
      "`calculate(a, b, operation)` ကို သုံးပြီး ပေါင်း၊ နှုတ်၊ မြှောက် သုံးမျိုး စမ်းပါ။"
    ],
    hint: "`return n % 2 === 0;` က isEven အတွက် အတိုဆုံး နည်းလမ်းပါ။"
  }
});

/* ------------------------------------------------------------
   08 — Arrays
   ------------------------------------------------------------ */
JSL.lessons.push({
  id: "core-08",
  chapter: "core",
  order: 8,
  num: "08",
  title: "Array — တန်ဖိုး အစုအဝေး",
  subtitle: "ထည့်/ဖျက်၊ ရှာ၊ slice/splice နဲ့ map/filter/reduce",
  minutes: 18,
  level: "အခြေခံ",
  tags: ["push", "map", "filter", "reduce"],
  fileName: "08-arrays.html",
  source: "../01-core/08-arrays.html",
  intro: [
    "Array ဆိုတာ တန်ဖိုး အများကို အစဉ်လိုက် သိမ်းထားတဲ့ စာရင်းပါ။ ကျောင်းသား စာရင်း၊ ဈေးဝယ်တောင်းထဲက ပစ္စည်းတွေ၊ API ကနေ ရလာတဲ့ ဒေတာတွေကို array အနေနဲ့ သိမ်းတယ်။",
    "ဒီသင်ခန်းစာက JavaScript မှာ အသုံးအများဆုံး အပိုင်းဖြစ်တယ်။ `map`, `filter`, `reduce` တို့ကို နားလည်ရင် နောက်ပိုင်း project တွေ အများကြီး လွယ်လာမယ်။"
  ],
  goals: [
    "Array ဆောက်ပြီး index နဲ့ ဖတ်နိုင်မယ်။",
    "`push`, `pop`, `shift`, `unshift` ကို သုံးနိုင်မယ်။",
    "`slice` နဲ့ `splice` ကို ခွဲခြားနိုင်မယ်။",
    "`map`, `filter`, `find`, `reduce` ကို နားလည်မယ်။"
  ],
  diagram: {
    type: "boxes",
    title: "Array ရဲ့ index ဖွဲ့စည်းပုံ",
    items: ["apple", "banana", "mango"],
    note: "fruits.length = 3 — အရေအတွက်ကို ပြန်တယ်",
    caption: "Index က 0 ကနေ စတယ်။ ဒါကြောင့် နောက်ဆုံး တန်ဖိုးရဲ့ index က length − 1 ဖြစ်တယ်။"
  },
  sections: [
    {
      h: "Array ဆောက်ခြင်းနဲ့ ဖတ်ခြင်း",
      p: "Array ကို `[ ]` ထဲမှာ တန်ဖိုးတွေ ထည့်ပြီး ရေးတယ်။ ပထမ တန်ဖိုးရဲ့ index က 0 ဖြစ်တယ်။ `length` က အရေအတွက်ကို ပြန်တယ်။",
      code: `let fruits = ["apple", "banana", "mango"];

console.log(fruits);
console.log(fruits[0]);       // apple
console.log(fruits[2]);       // mango
console.log(fruits.length);   // 3
console.log(fruits[fruits.length - 1]);   // နောက်ဆုံး တန်ဖိုး`,
      lang: "js",
      lines: [
        { n: 1, t: "String ၃ ခုကို array ထဲ ထည့်ထားတယ်။" },
        { n: "3-5", t: "Index 0, 1, 2 နဲ့ ဖတ်တယ်။ `fruits[0]` က apple။" },
        { n: 6, t: "`length` က 3 ပြန်တယ်။" },
        { n: 7, t: "နောက်ဆုံး တန်ဖိုးကို `length - 1` နဲ့ ယူနိုင်တယ်။" }
      ]
    },
    {
      h: "ထည့်ခြင်းနဲ့ ဖျက်ခြင်း",
      p: "`push` က အနောက်မှာ ထည့်၊ `pop` က အနောက်က ဖျက်။ `unshift` က အရှေ့မှာ ထည့်၊ `shift` က အရှေ့က ဖျက်။ ဒီ method တွေက မူလ array ကို ပြောင်းတယ်။",
      code: `let fruits = ["apple", "banana", "mango"];

fruits.push("orange");      // အနောက်မှာ ထည့်
console.log(fruits);

fruits.pop();               // အနောက်က ဖျက်
console.log(fruits);

fruits.unshift("kiwi");     // အရှေ့မှာ ထည့်
console.log(fruits);

fruits.shift();             // အရှေ့က ဖျက်
console.log(fruits);`,
      lang: "js",
      lines: [
        { n: 3, t: "`push` က နောက်ဆုံးမှာ \"orange\" ထည့်တယ်။" },
        { n: 6, t: "`pop` က နောက်ဆုံး တန်ဖိုးကို ဖျက်ပြီး ပြန်ပေးတယ်။" },
        { n: "9-12", t: "`unshift` က အရှေ့မှာ ထည့်၊ `shift` က အရှေ့က ဖျက်တယ်။" }
      ]
    },
    {
      h: "slice နဲ့ splice — မတူဘူး",
      p: "`slice(start, end)` က မူလ array ကို မပျက်ဘဲ အပိုင်းတစ်ခု ယူတယ်။ `splice(start, count)` က မူလ array ကို တကယ် ပြင်တယ်။ ဒီကွာခြားချက်က အလွန် အရေးကြီးတယ်။",
      code: `let numbers = [10, 20, 30, 40];

// slice — မူရင်း မပျက်
console.log(numbers.slice(1, 3));    // [20, 30]
console.log(numbers);                // [10, 20, 30, 40]

// splice — မူရင်းကို ပြင်
let removed = numbers.splice(1, 2);  // index 1 ကနေ ၂ ခု ဖျက်
console.log(removed);                // [20, 30]
console.log(numbers);                // [10, 40]`,
      lang: "js",
      lines: [
        { n: 4, t: "`slice(1, 3)` က index 1 ကနေ 3 မရောက်ခင်အထိ ယူတယ်။ index 3 မပါဘူး။" },
        { n: 5, t: "မူလ `numbers` က မပြောင်းဘူး။" },
        { n: 8, t: "`splice(1, 2)` က index 1 ကနေ ၂ ခု ဖျက်တယ်။ ဖျက်လိုက်တဲ့ တန်ဖိုးတွေကို ပြန်ပေးတယ်။" },
        { n: 10, t: "မူလ array က ပြောင်းသွားပြီ — [10, 40]။" }
      ]
    },
    {
      h: "forEach, map, filter",
      p: "`forEach` က တစ်ခုချင်း လုပ်ပြီး ဘာမှ မပြန်ဘူး။ `map` က တစ်ခုချင်း ပြောင်းပြီး array အသစ် ပြန်တယ်။ `filter` က အခြေအနေ မှန်တာတွေပဲ ယူပြီး array အသစ် ပြန်တယ်။",
      code: `let names = ["Aung", "Su", "Kyaw"];

names.forEach(function (name, index) {
  console.log(index + " : " + name);
});

names.forEach((name) => console.log(name));

let prices = [1000, 2000, 3000];
let withTax = prices.map((price) => price * 1.05);
console.log(withTax);

let nums = [5, 12, 8, 20, 3];
let big = nums.filter((n) => n >= 10);
console.log(big);   // [12, 20]`,
      lang: "js",
      lines: [
        { n: "3-5", t: "`forEach` က တန်ဖိုးနဲ့ index ကို လက်ခံတယ်။ ရလဒ် array မပြန်ဘူး။" },
        { n: "9-11", t: "`map` က တန်ဖိုးတိုင်းကို 1.05 နဲ့ မြှောက်ပြီး array အသစ် ပြန်တယ်။ မူလ array မပျက်ဘူး။" },
        { n: "13-15", t: "`filter` က 10 နဲ့ အထက်ဖြစ်တဲ့ [12, 20] ကိုပဲ ယူတယ်။" }
      ]
    },
    {
      h: "find နဲ့ reduce",
      p: "`find` က ပထမဆုံး တွေ့တဲ့ တန်ဖိုးကို ပြန်တယ်။ မတွေ့ရင် `undefined`။ `reduce` က array တစ်ခုလုံးကို တန်ဖိုးတစ်ခုတည်း ဖြစ်အောင် ပေါင်းတယ်။",
      code: `let users = [
  { id: 1, name: "Aung" },
  { id: 2, name: "Su" }
];

let user = users.find((u) => u.id === 2);
console.log(user);   // { id: 2, name: "Su" }

let sum = [1, 2, 3, 4].reduce((total, n) => total + n, 0);
console.log(sum);    // 10

let cart = [
  { name: "Laptop", price: 2000, qty: 2 },
  { name: "Mouse", price: 50, qty: 3 }
];

let cartTotal = cart.reduce((total, item) => {
  return total + item.price * item.qty;
}, 0);

console.log(cartTotal);   // 4150`,
      lang: "js",
      lines: [
        { n: "6-7", t: "`find` က id 2 ဖြစ်တဲ့ object ကို ပြန်တယ်။ တွေ့တာနဲ့ ရပ်တယ်။" },
        { n: 9, t: "`reduce` ရဲ့ ပထမ argument က accumulator၊ ဒုတိယက လက်ရှိ တန်ဖိုး။ `0` က အစ တန်ဖိုး။" },
        { n: "15-17", t: "ဈေးဝယ်တောင်းရဲ့ စုစုပေါင်းကို reduce နဲ့ တွက်တယ်။ 2000×2 + 50×3 = 4150။" }
      ],
      tip: {
        type: "key",
        title: "ဘယ်ဟာ သုံးမလဲ",
        text: "ရိုးရိုး လှည့်ကြည့်ရုံ — `forEach`။ ပြောင်းပြီး array အသစ် — `map`။ ရွေးထုတ် — `filter`။ တစ်ခုတည်း ရှာ — `find`။ ပေါင်းပြီး တန်ဖိုးတစ်ခု — `reduce`။"
      }
    },
    {
      h: "sort, join နဲ့ split",
      p: "`sort` က array ကို စီတယ်။ ဂဏန်းတွေမှာ function ပေးရတယ်။ `join` က array ကို string ဖြစ်အောင် ဆက်တယ်။ `split` က string ကို array ဖြစ်အောင် ခွဲတယ်။",
      code: `let letters = ["c", "a", "b"];
letters.sort();
console.log(letters);              // ["a", "b", "c"]
console.log(letters.join(", "));   // a, b, c

let scores = [40, 100, 1, 25];
scores.sort((a, b) => a - b);
console.log(scores);               // [1, 25, 40, 100]

let text = "apple,banana,mango";
console.log(text.split(","));      // ["apple", "banana", "mango"]`,
      lang: "js",
      lines: [
        { n: "2-4", t: "စာသားတွေကို အက္ခရာ အစဉ်လိုက် စီတယ်။ `join` က ကော်မာနဲ့ ဆက်တယ်။" },
        { n: "6-8", t: "ဂဏန်းတွေမှာ `sort()` က စာသားလို စီတတ်တယ်။ `(a, b) => a - b` ပေးမှ ဂဏန်းအလိုက် မှန်မယ်။" },
        { n: "10-11", t: "`split(\",\")` က ကော်မာနဲ့ ခွဲပြီး array ဖြစ်တယ်။" }
      ]
    }
  ],
  pitfalls: [
    { t: "splice က မူရင်းကို ပြင်တယ်", d: "`slice` က မပျက်ဘူး၊ `splice` က ပျက်တယ်။ မူရင်း မလိုချင်ရင် `slice` ကို သုံးပါ။" },
    { t: "ဂဏန်း sort မှားတယ်", d: "`[10, 2, 1].sort()` က `[1, 10, 2]` ဖြစ်တယ်။ ဂဏန်းအတွက် `sort((a, b) => a - b)` ကို သုံးပါ။" },
    { t: "map နဲ့ forEach ရောနေတယ်", d: "ရလဒ် array လိုရင် `map`၊ ရိုးရိုး လှည့်ရုံပဲဆိုရင် `forEach`။ `forEach` က ဘာမှ မပြန်ဘူး။" },
    { t: "indexOf က -1 ပြန်တာကို မစစ်ဘူး", d: "မတွေ့ရင် `indexOf` က `-1` ပြန်တယ်။ `if (index !== -1)` လို့ စစ်ပါ။" }
  ],
  recap: [
    "Array index က 0 ကနေ စတယ်။ `length - 1` က နောက်ဆုံး index။",
    "`push/pop` က အနောက်၊ `unshift/shift` က အရှေ့။",
    "`slice` က မပျက်၊ `splice` က မူရင်းကို ပြင်။",
    "`map` ပြောင်း၊ `filter` ရွေး၊ `find` ရှာ၊ `reduce` ပေါင်း။"
  ],
  exercise: {
    title: "Array လေ့ကျင့်ခန်း",
    steps: [
      "`[1200, 2500, 800, 5000]` ထဲက 2000 ကျော်တာတွေကို `filter` နဲ့ ရွေးပါ။",
      "ရွေးထားတဲ့ ဈေးနှုန်းတွေကို `map` နဲ့ 10% တိုးပါ။",
      "ရလဒ်တွေကို `reduce` နဲ့ ပေါင်းပြီး စုစုပေါင်း ပြပါ။",
      "`\"aung,su,kyaw\"` ကို `split` နဲ့ ခွဲပြီး ပထမဆုံး နာမည်ကို ပြပါ။"
    ],
    hint: "`filter` → `map` → `reduce` ကို ဆက်တွဲရေးနိုင်တယ်။"
  }
});

/* ------------------------------------------------------------
   09 — Objects
   ------------------------------------------------------------ */
JSL.lessons.push({
  id: "core-09",
  chapter: "core",
  order: 9,
  num: "09",
  title: "Object — အမည်တပ်ထားတဲ့ တန်ဖိုးများ",
  subtitle: "key-value, method, this, destructuring နဲ့ JSON",
  minutes: 18,
  level: "အခြေခံ",
  tags: ["object", "this", "destructuring", "JSON"],
  fileName: "09-objects.html",
  source: "../01-core/09-objects.html",
  intro: [
    "Object ဆိုတာ တန်ဖိုးတွေကို နာမည် (key) နဲ့ တွဲပြီး သိမ်းတဲ့ နည်းလမ်းပါ။ ကျောင်းသားတစ်ယောက်ရဲ့ နာမည်၊ အသက်၊ မြို့ စတဲ့ အချက်အလက်တွေကို object တစ်ခုတည်းမှာ စုထားနိုင်တယ်။",
    "ဒီသင်ခန်းစာမှာ object ဖန်တီး/ဖတ်/ပြင်တာ၊ method နဲ့ `this`၊ nested object၊ destructuring၊ spread နဲ့ JSON အကြောင်း လေ့လာပါမယ်။"
  ],
  goals: [
    "Object ဆောက်ပြီး dot/bracket နဲ့ ဖတ်နိုင်မယ်။",
    "တန်ဖိုး ပြင်ခြင်း၊ အသစ်ထည့်ခြင်း၊ ဖျက်ခြင်း လုပ်နိုင်မယ်။",
    "Method နဲ့ `this` ကို နားလည်မယ်။",
    "Destructuring နဲ့ spread ကို သုံးနိုင်မယ်။",
    "JSON နဲ့ အပြန်အလှန် ပြောင်းနိုင်မယ်။"
  ],
  diagram: {
    type: "kv",
    title: "Object = key + value အတွဲများ",
    items: [
      { k: "name", v: "\"Aung Aung\"" },
      { k: "age", v: "20" },
      { k: "city", v: "\"Yangon\"" },
      { k: "isStudent", v: "true" }
    ],
    caption: "Key က နာမည်၊ value က တန်ဖိုး။ `student.name` ဒါမှမဟုတ် `student[\"name\"]` နဲ့ ဖတ်နိုင်တယ်။"
  },
  sections: [
    {
      h: "Object ဆောက်ခြင်း၊ ဖတ်ခြင်း၊ ပြင်ခြင်း",
      p: "Object ကို `{ }` ထဲမှာ `key: value` အတွဲတွေ ရေးတယ်။ Dot notation နဲ့ဖတ်တာ များတယ်။ Key မှာ ကွက်လပ် ပါရင် bracket notation ကို သုံးရတယ်။",
      code: `let student = {
  name: "Aung Aung",
  age: 20,
  city: "Yangon",
  isStudent: true
};

console.log(student.name);        // dot notation
console.log(student["age"]);      // bracket notation

student.age = 21;
student.phone = "09777214558";
console.log(student);

delete student.isStudent;
console.log(student);`,
      lang: "js",
      lines: [
        { n: "1-6", t: "Key-value ၅ ခု ပါတဲ့ object ဆောက်တယ်။" },
        { n: "8-9", t: "Dot နဲ့ bracket — နှစ်မျိုးလုံး ရတယ်။" },
        { n: "11-12", t: "တန်ဖိုး ပြင်ခြင်း၊ key အသစ် ထည့်ခြင်း။" },
        { n: 14, t: "`delete` နဲ့ key ကို ဖျက်တယ်။" }
      ]
    },
    {
      h: "Method နဲ့ this",
      p: "Object ထဲမှာ function ထည့်ရင် အဲဒါကို method လို့ ခေါ်တယ်။ Method ထဲက `this` က အဲဒီ object ကို ညွှန်တယ်။ ဒါကြောင့် `this.name` က ကိုယ့် object ရဲ့ name ကို ရတယ်။",
      code: `let user = {
  name: "Su Su",

  greet: function () {
    console.log("မင်္ဂလာပါ " + this.name);
  },

  sayHi() {
    console.log("Hi " + this.name);
  }
};

user.greet();
user.sayHi();`,
      lang: "js",
      lines: [
        { n: "4-6", t: "`greet` က function တစ်ခု ဖြစ်တဲ့ key။ Method လို့ ခေါ်တယ်။" },
        { n: 5, t: "`this.name` က `user` object ရဲ့ `name` ကို ယူတယ်။" },
        { n: "8-10", t: "Method ကို အတိုရေးနည်း။ `sayHi() { }` က `sayHi: function () { }` နဲ့ အတူတူ။" }
      ],
      tip: {
        type: "warn",
        title: "this က ခေါ်ပုံပေါ် မူတည်တယ်",
        text: "`user.greet()` လို့ ခေါ်ရင် `this` က user။ Function ကို ခွဲထုတ်ပြီး `let fn = user.greet; fn();` လို့ ခေါ်ရင် `this` က ပြောင်းသွားနိုင်တယ်။"
      }
    },
    {
      h: "Nested object နဲ့ Object.keys/values/entries",
      p: "Object ထဲမှာ object ဒါမှမဟုတ် array ထပ်ထည့်နိုင်တယ်။ `Object.keys()` က key တွေ၊ `Object.values()` က တန်ဖိုးတွေ၊ `Object.entries()` က `[key, value]` အတွဲတွေ ပြန်တယ်။",
      code: `let order = {
  id: 101,
  customer: {
    name: "Kyaw Kyaw",
    phone: "09977123456"
  },
  items: ["Laptop", "Mouse"]
};

console.log(order.customer.name);   // Kyaw Kyaw
console.log(order.items[0]);        // Laptop

let car = { brand: "Toyota", year: 2020, color: "white" };

console.log(Object.keys(car));      // ["brand", "year", "color"]
console.log(Object.values(car));    // ["Toyota", 2020, "white"]
console.log(Object.entries(car));   // [["brand", "Toyota"], ...]`,
      lang: "js",
      lines: [
        { n: "3-6", t: "`customer` က object ထဲက object။ နှစ်ဆင့် ဆက်ပြီး ဖတ်ရတယ်။" },
        { n: 7, t: "`items` က array။ Index နဲ့ ဖတ်တယ်။" },
        { n: "9-10", t: "Nested တန်ဖိုးတွေကို dot နဲ့ ဆက်ဖတ်တယ်။" },
        { n: "14-16", t: "Object ရဲ့ key၊ value၊ entry တွေကို array အနေနဲ့ ယူတယ်။" }
      ]
    },
    {
      h: "Destructuring နဲ့ Spread",
      p: "Destructuring က object/array ထဲက တန်ဖိုးတွေကို variable အဖြစ် ဆွဲထုတ်တာ။ Spread (`...`) က object/array ကို ကူးယူပြီး အသစ် ဆောက်တာ။",
      code: `let student = { name: "Aung", age: 20 };

let { name, age } = student;
console.log(name, age);

let { name: studentName } = student;
console.log(studentName);

let [first, second] = ["a", "b", "c"];
console.log(first, second);

let base = { a: 1, b: 2 };
let copy = { ...base, c: 3 };
console.log(copy);          // { a: 1, b: 2, c: 3 }

let arr1 = [1, 2];
let arr2 = [...arr1, 3, 4];
console.log(arr2);          // [1, 2, 3, 4]`,
      lang: "js",
      lines: [
        { n: "3-4", t: "`{ name, age }` က student ရဲ့ တန်ဖိုးတွေကို တူတဲ့ နာမည်နဲ့ variable ဖြစ်စေတယ်။" },
        { n: "6-7", t: "နာမည် ပြောင်းချင်ရင် `name: studentName` လို ရေးတယ်။" },
        { n: "9-10", t: "Array ကို အစဉ်လိုက် ဆွဲထုတ်တယ်။" },
        { n: "12-19", t: "Spread က object/array ကို ကူးယူပြီး တန်ဖိုး အသစ် ထပ်ထည့်တယ်။ မူရင်း မပျက်ဘူး။" }
      ]
    },
    {
      h: "Object ရဲ့ Array နဲ့ JSON",
      p: "လက်တွေ့မှာ object တွေကို array ထဲ ထည့်ပြီး သိမ်းတာ အများဆုံးပါ။ API ကနေ ရလာတဲ့ ဒေတာတွေက ဒီပုံစံ ဖြစ်တယ်။ `JSON.stringify` က object ကို string ပြောင်းတယ်၊ `JSON.parse` က ပြန်ပြောင်းတယ်။",
      code: `let products = [
  { id: 1, name: "Laptop", price: 2000 },
  { id: 2, name: "Mouse", price: 50 }
];

products.forEach((p) => {
  console.log(p.name + " - " + p.price);
});

let cheap = products.filter((p) => p.price < 100);
console.log(cheap);   // Mouse ပါတဲ့ array

let jsonText = JSON.stringify(products[0]);
console.log(jsonText);   // '{"id":1,"name":"Laptop","price":2000}'

let backToObject = JSON.parse(jsonText);
console.log(backToObject.name);   // Laptop`,
      lang: "js",
      lines: [
        { n: "1-4", t: "Object တွေကို array ထဲ ထည့်ထားတယ်။ ဒါက အသုံးအများဆုံး ဒေတာ ပုံစံ။" },
        { n: "6-8", t: "Array ကို လှည့်ပြီး object ရဲ့ တန်ဖိုးတွေ ဖတ်တယ်။" },
        { n: "10-11", t: "Filter နဲ့ ဈေးနည်းတဲ့ ပစ္စည်းတွေ ရွေးတယ်။" },
        { n: "13-17", t: "Object ကို JSON string ပြောင်းပြီး ပြန်ဖတ်တယ်။ localStorage မှာ သိမ်းဖို့ ဒါကို သုံးတယ်။" }
      ],
      tip: {
        type: "info",
        title: "JSON ဆိုတာ ဘာလဲ",
        text: "JSON က ဒေတာ ဖလှယ်ဖို့ သုံးတဲ့ စာသား ပုံစံ။ JavaScript object နဲ့ ဆင်တူပေမယ့် key ကို double quote ထဲ ထည့်ရတယ်။ Function တွေ မပါဘူး။"
      }
    }
  ],
  pitfalls: [
    { t: "Object ကို = နဲ့ ကူးရင် reference ကူးတယ်", d: "`let b = a;` လုပ်ရင် object တစ်ခုတည်းကို နှစ်ယောက် ညွှန်နေတယ်။ b ကို ပြင်ရင် a ပါ ပြောင်းတယ်။ ကူးချင်ရင် `{ ...a }` ကို သုံးပါ။" },
    { t: "JSON.stringify က function မပါဘူး", d: "Object ထဲက function နဲ့ `undefined` ကို JSON မှာ ထည့်လို့ မရဘူး။" },
    { t: "this ကို arrow function နဲ့ သုံးတယ်", d: "Method အတွက် arrow function သုံးရင် `this` က object ကို မညွှန်တော့ဘူး။ ရိုးရိုး method ကို သုံးပါ။" }
  ],
  recap: [
    "Object က key-value အတွဲတွေ။ Dot/bracket နဲ့ ဖတ်တယ်။",
    "Method ထဲက `this` က အဲဒီ object ကို ညွှန်တယ်။",
    "Destructuring က တန်ဖိုး ဆွဲထုတ်၊ spread က ကူးယူ။",
    "JSON.stringify/parse က localStorage နဲ့ API အတွက် အရေးကြီးတယ်။"
  ],
  exercise: {
    title: "Object လေ့ကျင့်ခန်း",
    steps: [
      "သင့်အကြောင်း `{ name, age, city, skills: [...] }` object ဆောက်ပါ။",
      "`greet()` method ထည့်ပြီး `this.name` ကို သုံးပါ။",
      "Object ကို `JSON.stringify` ပြီး Console မှာ ပြပါ။ ပြန် parse လုပ်ပြီး name ကို ဖတ်ပါ။",
      "Spread နဲ့ object ကို ကူးပြီး `city` ကို ပြောင်းပါ။ မူရင်း မပျက်တာ စစ်ပါ။"
    ],
    hint: "`let copy = { ...original, city: \"Mandalay\" };` က မူရင်း မပျက်ဘူး။"
  }
});

/* ------------------------------------------------------------
   10 — Strings & Numbers
   ------------------------------------------------------------ */
JSL.lessons.push({
  id: "core-10",
  chapter: "core",
  order: 10,
  num: "10",
  title: "String နှင့် Number ကို ကျွမ်းကျင်အောင်",
  subtitle: "template literal, string method, Math နဲ့ အမျိုးအစား ပြောင်းခြင်း",
  minutes: 15,
  level: "အခြေခံ",
  tags: ["template literal", "string", "Math", "Number"],
  fileName: "10-strings-numbers.html",
  source: "../01-core/10-strings-numbers.html",
  intro: [
    "စာသားနဲ့ ဂဏန်းတွေက အသုံးအများဆုံး ဒေတာ နှစ်မျိုးပါ။ နာမည် ပြင်ဆင်တာ၊ ဈေးနှုန်း ပြသရာ၊ ကျပန်းဂဏန်း ထုတ်တာ စသဖြင့် နေရာတိုင်းမှာ သုံးတယ်။",
    "ဒီသင်ခန်းစာမှာ template literal၊ အသုံးဝင်တဲ့ string method တွေ၊ `Math`၊ string ↔ number ပြောင်းခြင်းနဲ့ ငွေကြေး ပြသခြင်းကို လေ့လာပါမယ်။"
  ],
  goals: [
    "Template literal နဲ့ variable ကို စာသားထဲ ထည့်နိုင်မယ်။",
    "`trim`, `slice`, `replace`, `includes` စတဲ့ method တွေ သုံးနိုင်မယ်။",
    "`Math.round/floor/ceil/random` ကို နားလည်မယ်။",
    "String နဲ့ Number ကို လိုအပ်သလို ပြောင်းနိုင်မယ်။"
  ],
  diagram: {
    type: "pipeline",
    title: "String ကို အဆင့်ဆင့် ပြင်ဆင်ခြင်း",
    items: [
      { t: "\"  aung aung  \"", sub: "မူလ စာသား", tone: 5, mono: true },
      { t: ".trim()", sub: "အစ/အဆုံး ကွက်လပ် ဖျက်", tone: 6, mono: true },
      { t: ".charAt(0).toUpperCase()", sub: "ပထမစာလုံး ကြီးအောင်", tone: 3, mono: true },
      { t: "\"Aung aung\"", sub: "ရလဒ်", tone: 2, mono: true }
    ],
    caption: "Method တွေကို ဆက်တွဲ (chain) ရေးနိုင်တယ်။ တစ်ခုရဲ့ ရလဒ်က နောက်တစ်ခုရဲ့ input ဖြစ်တယ်။"
  },
  sections: [
    {
      h: "Template Literal",
      p: "Backtick (` `) ထဲမှာ `${ }` သုံးပြီး variable ဒါမှမဟုတ် တွက်ချက်မှုကို စာသားထဲ တိုက်ရိုက် ထည့်နိုင်တယ်။ စာကြောင်း အများလည်း ရတယ်။",
      code: `let name = "Aung Aung";
let age = 20;

console.log(\`နာမည်: \${name}၊ အသက်: \${age}\`);
console.log(\`\${name} က နောက် ၅ နှစ်ဆို \${age + 5} နှစ်\`);

console.log(\`စာကြောင်း ၁
စာကြောင်း ၂\`);`,
      lang: "js",
      lines: [
        { n: 4, t: "`${name}` နေရာမှာ variable ရဲ့ တန်ဖိုး ဝင်သွားတယ်။" },
        { n: 5, t: "`${age + 5}` လို တွက်ချက်မှုလည်း ထည့်နိုင်တယ်။" },
        { n: "7-8", t: "Backtick ထဲမှာ စာကြောင်း ခွဲရင် အဲဒီအတိုင်း အောက်ကို ဆင်းတယ်။" }
      ]
    },
    {
      h: "အသုံးဝင်တဲ့ String Method များ",
      p: "စာသားရဲ့ အရှည်၊ အစ/အဆုံး ကွက်လပ် ဖျက်တာ၊ အကြီး/အသေး ပြောင်းတာ၊ ရှာတာ၊ ဖြတ်ယူတာ၊ အစားထိုးတာ စသဖြင့် လုပ်နိုင်တယ်။ String က မပြောင်းလဲနိုင်တဲ့ (immutable) တန်ဖိုးဖြစ်တယ်။ Method တွေက ရလဒ်အသစ် ပြန်တယ်။",
      code: `let text = "  Hello JavaScript  ";

console.log(text.length);                 // 20
console.log(text.trim());                 // "Hello JavaScript"
console.log(text.trim().toUpperCase());   // "HELLO JAVASCRIPT"
console.log(text.trim().toLowerCase());   // "hello javascript"

let word = "JavaScript";

console.log(word.charAt(0));           // J
console.log(word.indexOf("Script"));   // 4
console.log(word.includes("Java"));    // true
console.log(word.startsWith("Java"));  // true
console.log(word.endsWith("Script"));  // true
console.log(word.slice(0, 4));         // Java
console.log(word.replace("Java", "Type"));   // TypeScript
console.log("a,b,c".split(","));       // ["a", "b", "c"]
console.log("ha".repeat(3));           // hahaha`,
      lang: "js",
      lines: [
        { n: 3, t: "`length` က ကွက်လပ်တွေပါ တွက်တယ်။ 20 ရတယ်။" },
        { n: "4-6", t: "`trim()` က အစ/အဆုံး ကွက်လပ် ဖျက်တယ်။ ပြီးမှ အကြီး/အသေး ပြောင်းတယ်။" },
        { n: "10-16", t: "ရှာတာ၊ စစ်တာ၊ ဖြတ်ယူတာ၊ အစားထိုးတာ — အသုံးများတဲ့ method တွေ။" },
        { n: "17-18", t: "`split` က string ကို array ဖြစ်အောင် ခွဲ၊ `repeat` က ထပ်ခါ ရေးတယ်။" }
      ]
    },
    {
      h: "Number နဲ့ Math",
      p: "`toFixed` က ဒသမ နေရာ သတ်မှတ်တယ်။ `Math.round` က အနီးဆုံး ကိန်းပြည့်၊ `floor` က အောက်ကို၊ `ceil` က အပေါ်ကို ယူတယ်။ `Math.random()` က 0 နဲ့ 1 ကြား ကျပန်း ကိန်းကို ပြန်တယ်။",
      code: `let num = 12.3456;

console.log(num.toFixed(2));     // "12.35" (string)
console.log(Math.round(num));    // 12
console.log(Math.floor(num));    // 12
console.log(Math.ceil(num));     // 13
console.log(Math.max(10, 5, 30));   // 30
console.log(Math.min(10, 5, 30));   // 5
console.log(Math.abs(-7));          // 7

let random = Math.floor(Math.random() * 10) + 1;
console.log(random);   // 1 ကနေ 10 ကြား`,
      lang: "js",
      lines: [
        { n: 3, t: "`toFixed(2)` က ဒသမ ၂ နေရာ ထားပြီး string ပြန်တယ်။" },
        { n: "4-6", t: "`round` က အနီးဆုံး၊ `floor` က အောက်၊ `ceil` က အပေါ်ကို ယူတယ်။" },
        { n: "7-9", t: "အကြီးဆုံး၊ အငယ်ဆုံး၊ အနုတ်ကို အတိုး ပြောင်းတာ။" },
        { n: "11-12", t: "0–0.999... ကို 10 နဲ့ မြှောက်ပြီး floor လုပ်ရင် 0–9၊ 1 ပေါင်းရင် 1–10။" }
      ]
    },
    {
      h: "String ↔ Number ပြောင်းခြင်း",
      p: "Input ကနေ ရတဲ့ တန်ဖိုးက string ဖြစ်တယ်။ တွက်ချက်ဖို့ `Number()` နဲ့ ပြောင်းရတယ်။ `parseInt` က ကိန်းပြည့်၊ `parseFloat` က ဒသမ ပါတာ ယူတယ်။ ပြောင်းလို့ မရရင် `NaN` ရတယ်။",
      code: `let str = "123";

console.log(typeof str);            // string
console.log(Number(str));           // 123
console.log(parseInt("123px"));     // 123
console.log(parseFloat("12.5kg"));  // 12.5

console.log(Number("abc"));         // NaN
console.log(Number.isNaN(Number("abc")));   // true

let n = 456;
console.log(String(n));             // "456"
console.log(n.toString());          // "456"`,
      lang: "js",
      lines: [
        { n: "4-6", t: "`Number` က တစ်ခုလုံးကို ဂဏန်းအဖြစ် ပြောင်းတယ်။ `parseInt`/`parseFloat` က ဂဏန်း စတဲ့အပိုင်းကို ယူတယ်။" },
        { n: "8-9", t: "ဂဏန်း မဟုတ်ရင် `NaN` ရတယ်။ `Number.isNaN()` နဲ့ စစ်နိုင်တယ်။" },
        { n: "11-13", t: "ဂဏန်းကို စာသား ပြောင်းဖို့ `String(n)` ဒါမှမဟုတ် `.toString()`။" }
      ],
      tip: {
        type: "warn",
        title: "Number(\"\") က 0 ဖြစ်တယ်",
        text: "ဗလာ string ကို `Number(\"\")` လုပ်ရင် `0` ရတယ်။ Form စစ်တဲ့အခါ အရင် `value === \"\"` ကို စစ်ပါ။"
      }
    },
    {
      h: "ငွေကြေး ပြသခြင်း",
      p: "ဂဏန်းကြီးတွေကို ဖတ်ရလွယ်အောင် ကော်မာနဲ့ ပြချင်တယ်။ `toLocaleString()` က browser ရဲ့ locale အလိုက် ပြပေးတယ်။ `Intl.NumberFormat` နဲ့ ပိုတိတိကျကျ သတ်မှတ်နိုင်တယ်။",
      code: `let price = 2300000;

console.log(price.toLocaleString());   // 2,300,000

let formatter = new Intl.NumberFormat("en-US");
console.log(formatter.format(price));  // 2,300,000

let mmk = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "MMK",
  maximumFractionDigits: 0
});

console.log(mmk.format(price));`,
      lang: "js",
      lines: [
        { n: 3, t: "`toLocaleString()` က ဂဏန်းကို ကော်မာနဲ့ ပြတယ်။" },
        { n: "5-6", t: "`Intl.NumberFormat` က ဖော်မတ် သတ်မှတ်ချက်ကို သိမ်းထားပြီး ထပ်သုံးနိုင်တယ်။" },
        { n: "8-12", t: "ငွေကြေး ပုံစံနဲ့ ပြချင်ရင် style နဲ့ currency ကို သတ်မှတ်တယ်။" }
      ]
    }
  ],
  pitfalls: [
    { t: "string ကို ပြင်လို့ရတယ်လို့ ထင်တယ်", d: "`word[0] = \"X\"` က အလုပ်မလုပ်ဘူး။ String က immutable ပါ။ `replace` ဒါမှမဟုတ် စာသားအသစ် ဆောက်ပါ။" },
    { t: "toFixed က string ပြန်တယ်", d: "`num.toFixed(2)` က `\"12.35\"` ပြန်တယ်။ ထပ်တွက်ချင်ရင် `Number(...)` နဲ့ ပြန်ပြောင်းပါ။" },
    { t: "Math.random က 1 ပါဝင်တယ်လို့ ထင်တယ်", d: "`Math.random()` က 0 ပါဝင်ပြီး 1 မပါဘူး။ 1–10 အတွက် `Math.floor(... * 10) + 1` ကို သုံးပါ။" }
  ],
  recap: [
    "Template literal — backtick နဲ့ `${}`။",
    "`trim`, `slice`, `replace`, `includes`, `split` တို့က အသုံးများတယ်။",
    "`Math.round/floor/ceil/random` နဲ့ ဂဏန်း ထိန်းနိုင်တယ်။",
    "Input က string ဖြစ်လို့ တွက်ချက်ခင် `Number()` ပြောင်းပါ။"
  ],
  exercise: {
    title: "စာသား ပြင်ဆင်ခြင်း",
    steps: [
      "`\"  aung aung  \"` ကို trim လုပ်ပြီး ပထမစာလုံး ကြီးအောင် ပြင်ပါ။",
      "ဈေးနှုန်း `2300000` ကို `2,300,000 MMK` ပုံစံ ပြပါ။",
      "1 ကနေ 6 အထိ ကျပန်း ကိန်းပြည့် (အန်စာတုံး) ထုတ်ပါ။",
      "`\"apple,banana,mango\"` ကို ခွဲပြီး တစ်ခုချင်း Console မှာ ပြပါ။"
    ],
    hint: "ပထမစာလုံး ကြီးဖို့ `clean.charAt(0).toUpperCase() + clean.slice(1)` ကို သုံးပါ။"
  }
});

/* ------------------------------------------------------------
   11 — Error Handling
   ------------------------------------------------------------ */
JSL.lessons.push({
  id: "core-11",
  chapter: "core",
  order: 11,
  num: "11",
  title: "Error Handling — အမှား ကိုင်တွယ်ခြင်း",
  subtitle: "try / catch / finally, throw နဲ့ လက်တွေ့ form စစ်ဆေးခြင်း",
  minutes: 15,
  level: "အလယ်အလတ်",
  tags: ["try", "catch", "throw", "validation"],
  fileName: "11-error-handling.html",
  source: "../01-core/11-error-handling.html",
  intro: [
    "ကုဒ် run တဲ့အခါ အမှား ဖြစ်နိုင်တယ်။ အမှားကို မကိုင်တွယ်ရင် program တစ်ခုလုံး ရပ်သွားနိုင်တယ်။ `try/catch` က အမှားကို ဖမ်းပြီး ဆက်လုပ်နိုင်အောင် ကူညီတယ်။",
    "ဒီသင်ခန်းစာမှာ အမှား ဖမ်းခြင်း၊ ကိုယ်တိုင် အမှား ပစ်ခြင်း၊ နောက်ဆုံးမှာ မဖြစ်မနေ run ရမယ့် `finally` နဲ့ form စစ်ဆေးတဲ့ ပုံစံကို လေ့လာပါမယ်။"
  ],
  goals: [
    "`try/catch` နဲ့ အမှား ဖမ်းနိုင်မယ်။",
    "`finally` က ဘယ်အချိန် run လဲ သိမယ်။",
    "`throw new Error()` နဲ့ ကိုယ်တိုင် အမှား ပစ်နိုင်မယ်။",
    "`error.message` နဲ့ အသုံးပြုသူကို ရှင်းပြနိုင်မယ်။"
  ],
  diagram: {
    type: "branch",
    title: "try / catch / finally ရဲ့ စီးဆင်းမှု",
    condition: "try ထဲက ကုဒ် run",
    conditionSub: "အမှား ဖြစ်လား",
    yes: { t: "catch (error)", sub: "အမှားကို ဖမ်းပြီး ကိုင်တွယ်" },
    no: { t: "ဆက်လုပ်", sub: "ပုံမှန်အတိုင်း" },
    end: "finally — ဘယ်လိုပဲဖြစ်ဖြစ် run",
    caption: "`finally` က အမှား ဖြစ်ဖြစ် မဖြစ်ဖြစ် အမြဲ run တယ်။ ဖွင့်ထားတဲ့ resource ပြန်ပိတ်တာမျိုးအတွက် သုံးတယ်။"
  },
  sections: [
    {
      h: "try / catch — အမှား ဖမ်းခြင်း",
      p: "အမှား ဖြစ်နိုင်တဲ့ ကုဒ်ကို `try` ထဲ ထည့်တယ်။ အမှား ဖြစ်ရင် `catch` ကို ရောက်တယ်။ `catch` က error object ကို လက်ခံတယ်။ အမှား ဖြစ်ပေမယ့် အောက်က ကုဒ်တွေ ဆက် run နိုင်တယ်။",
      code: `try {
  console.log("စမ်းမယ်");

  // မရှိတဲ့ function ကို ခေါ်
  notExistFunction();
} catch (error) {
  console.log("အမှား ဖြစ်သွားတယ်");
  console.log(error.message);
}

console.log("ဆက်လုပ်");`,
      lang: "js",
      lines: [
        { n: "1-6", t: "`try` ထဲမှာ အမှား ဖြစ်နိုင်တဲ့ ကုဒ် ထည့်ထားတယ်။ `notExistFunction` က မရှိဘူး။" },
        { n: "7-10", t: "အမှား ဖြစ်တာနဲ့ `catch` ကို ရောက်တယ်။ `error.message` မှာ အမှား အကြောင်း ပါတယ်။" },
        { n: 12, t: "`try/catch` ပြီးရင် အောက်က ကုဒ်က ဆက် run တယ်။ Program မရပ်ဘူး။" }
      ]
    },
    {
      h: "finally — အမြဲ run",
      p: "`finally` က အမှား ဖြစ်ဖြစ် မဖြစ်ဖြစ် အမြဲ run တယ်။ ဒါကြောင့် loading ပိတ်တာ၊ ဖိုင် ပိတ်တာမျိုးအတွက် သုံးတယ်။",
      code: `try {
  console.log("ဒေတာ ဖတ်မယ်");
} catch (error) {
  console.log("အမှား");
} finally {
  console.log("ပြီးဆုံး (အမြဲ run)");
}`,
      lang: "js",
      lines: [
        { n: "1-3", t: "ပုံမှန် ကုဒ်။ ဒီဥပမာမှာ အမှား မဖြစ်ဘူး။" },
        { n: "6-8", t: "`finally` က အမှား ဖြစ်သည်ဖြစ်စေ မဖြစ်သည်ဖြစ်စေ run တယ်။" }
      ]
    },
    {
      h: "throw — ကိုယ်တိုင် အမှား ပစ်ခြင်း",
      p: "စည်းကမ်း မကိုက်တဲ့ ဒေတာ ရောက်လာရင် ကိုယ်တိုင် အမှား ပစ်နိုင်တယ်။ `throw new Error(\"စာသား\")` ကို သုံးတယ်။ ပစ်လိုက်တဲ့ အမှားကို `catch` က ဖမ်းတယ်။",
      code: `function checkAge(age) {
  if (age < 0) {
    throw new Error("အသက်က အနုတ် မဖြစ်ရဘူး");
  }

  if (age < 18) {
    throw new Error("အသက် ၁၈ မပြည့်သေးဘူး");
  }

  return "ကြိုဆိုပါတယ်";
}

try {
  console.log(checkAge(20));
} catch (error) {
  console.log(error.message);
}

try {
  console.log(checkAge(15));
} catch (error) {
  console.log(error.message);   // အသက် ၁၈ မပြည့်သေးဘူး
}`,
      lang: "js",
      lines: [
        { n: "1-10", t: "`checkAge` က မမှန်တဲ့ အသက်ဆိုရင် `throw` နဲ့ အမှား ပစ်တယ်။ မှန်ရင် \"ကြိုဆိုပါတယ်\" ပြန်တယ်။" },
        { n: "12-16", t: "အသက် 20 က မှန်လို့ ရလဒ် ရတယ်။" },
        { n: "18-22", t: "အသက် 15 က မမှန်လို့ `catch` က `error.message` ကို ပြတယ်။" }
      ]
    },
    {
      h: "JSON.parse ရဲ့ အမှား",
      p: "`JSON.parse` က မမှန်တဲ့ JSON စာသား ရောက်ရင် အမှား ပစ်တယ်။ API ဒါမှမဟုတ် localStorage ကနေ ရလာတဲ့ ဒေတာကို parse လုပ်တိုင်း `try/catch` ထဲ ထည့်တာ ကောင်းတယ်။",
      code: `try {
  let data = JSON.parse("ဒါက JSON မဟုတ်ဘူး");
  console.log(data);
} catch (error) {
  console.log("JSON ဖတ်လို့ မရဘူး");
}`,
      lang: "js",
      lines: [
        { n: 2, t: "မမှန်တဲ့ JSON ကို parse လုပ်ရင် SyntaxError ဖြစ်တယ်။" },
        { n: "4-5", t: "အမှားကို ဖမ်းပြီး အသုံးပြုသူကို နားလည်လွယ်တဲ့ စာသား ပြတယ်။" }
      ]
    },
    {
      h: "လက်တွေ့ — Form စစ်ဆေးခြင်း",
      p: "အသုံးပြုသူ ထည့်တဲ့ ဒေတာကို function တစ်ခုထဲမှာ စစ်ပြီး မမှန်ရင် အမှား ပစ်တာ ကောင်းတဲ့ ပုံစံပါ။ ခေါ်တဲ့ နေရာမှာ `try/catch` နဲ့ ဖမ်းပြီး ပြမယ်။",
      code: `function validateUser(user) {
  if (!user.name || user.name.trim() === "") {
    throw new Error("နာမည် ထည့်ပါ");
  }

  if (!user.email || !user.email.includes("@")) {
    throw new Error("အီးမေးလ် မှန်ကန်အောင် ထည့်ပါ");
  }

  return "အောင်မြင်တယ်";
}

let users = [
  { name: "", email: "a@mail.com" },
  { name: "Aung", email: "aungmail.com" },
  { name: "Aung", email: "aung@mail.com" }
];

users.forEach((user) => {
  try {
    console.log(validateUser(user));
  } catch (error) {
    console.log("❌ " + error.message);
  }
});`,
      lang: "js",
      lines: [
        { n: "1-11", t: "နာမည် ဗလာ ဒါမှမဟုတ် email မှာ @ မပါရင် အမှား ပစ်တယ်။" },
        { n: "13-17", t: "မှန်/မမှန် ဒေတာ သုံးမျိုး စမ်းဖို့ array ဆောက်တယ်။" },
        { n: "19-25", t: "တစ်ခုချင်း စစ်ပြီး အမှား ဖြစ်ရင် ဖမ်းကာ ပြတယ်။ တစ်ခု မှားလည်း ကျန်တာ ဆက် run တယ်။" }
      ]
    },
    {
      h: "Error Object ထဲမှာ ဘာတွေ ပါလဲ",
      p: "Error object မှာ `name` (အမှား အမျိုးအစား) နဲ့ `message` (အကြောင်း) ပါတယ်။ `instanceof` နဲ့ အမှား အမျိုးအစားကို စစ်နိုင်တယ်။",
      code: `try {
  null.name;
} catch (error) {
  console.log(error.name);                    // TypeError
  console.log(error.message);                 // Cannot read properties of null
  console.log(error instanceof TypeError);    // true
}`,
      lang: "js",
      lines: [
        { n: 2, t: "`null` ရဲ့ property ကို ဖတ်ဖို့ ကြိုးစားရင် TypeError ဖြစ်တယ်။" },
        { n: "4-6", t: "`name` က အမှား အမျိုးအစား၊ `message` က အသေးစိတ်၊ `instanceof` က အမျိုးအစား ဟုတ်မဟုတ်။" }
      ]
    }
  ],
  pitfalls: [
    { t: "အမှားကို ဖမ်းပြီး ဘာမှ မလုပ်ဘူး", d: "`catch (e) {}` လို ဗလာ ထားရင် အမှန်တကယ် ဘာမှားနေလဲ သိမှာ မဟုတ်ဘူး။ အနည်းဆုံး `console.error(e)` လုပ်ပါ။" },
    { t: "throw ကို string နဲ့ ပစ်တယ်", d: "`throw \"error\"` ထက် `throw new Error(\"error\")` က ပိုကောင်းတယ်။ Stack trace နဲ့ အချက်အလက် ပါလာတယ်။" },
    { t: "try ထဲမှာ ကုဒ် အများကြီး ထည့်တယ်", d: "အမှား ဖြစ်နိုင်တဲ့ ကုဒ်ကို ပဲ `try` ထဲ ထည့်ပါ။ ကျန်တာကို အပြင်မှာ ထားပါ။" }
  ],
  recap: [
    "`try` ထဲမှာ အမှား ဖြစ်နိုင်တဲ့ ကုဒ်၊ `catch` မှာ ကိုင်တွယ်မှု။",
    "`finally` က အမြဲ run တယ်။",
    "`throw new Error()` နဲ့ ကိုယ်တိုင် အမှား ပစ်နိုင်တယ်။",
    "`error.message` က အသုံးပြုသူကို ပြဖို့၊ `console.error` က developer အတွက်။"
  ],
  exercise: {
    title: "Form စစ်ဆေးမှု ရေးပါ",
    steps: [
      "`validatePassword(password)` ရေးပါ။ ၈ လုံးအောက်ဆိုရင် `throw new Error(...)` လုပ်ပါ။",
      "Password ထဲမှာ ဂဏန်း မပါရင် အမှား ပစ်ပါ။",
      "မှန်/မမှန် ဥပမာ သုံးခုကို `try/catch` နဲ့ စမ်းပါ။",
      "`finally` ထဲမှာ \"စစ်ဆေးမှု ပြီး\" လို့ ပြပါ။"
    ],
    hint: "ဂဏန်း ပါမပါ စစ်ဖို့ `/[0-9]/.test(password)` ကို သုံးနိုင်တယ်။"
  }
});

/* ------------------------------------------------------------
   12 — Classes
   ------------------------------------------------------------ */
JSL.lessons.push({
  id: "core-12",
  chapter: "core",
  order: 12,
  num: "12",
  title: "Class — အရာဝတ္ထု ပုံစံခွက်",
  subtitle: "constructor, method, getter/setter, inheritance နဲ့ static",
  minutes: 20,
  level: "အလယ်အလတ်",
  tags: ["class", "constructor", "extends", "static"],
  fileName: "12-classes.html",
  source: "../01-core/12-classes.html",
  intro: [
    "Class ဆိုတာ တူတဲ့ ပုံစံ ရှိတဲ့ object တွေ ဆောက်ဖို့ ပုံစံခွက် (blueprint) ပါ။ ဥပမာ ကျောင်းသား တစ်ယောက်ချင်းစီမှာ နာမည်၊ အသက်၊ အတန်း ရှိတယ်။ Class က အဲဒီပုံစံကို သတ်မှတ်ပြီး object တွေ ဆောက်ပေးတယ်။",
    "ဒီသင်ခန်းစာမှာ `class`, `constructor`, method၊ getter/setter၊ inheritance နဲ့ static method တွေကို လေ့လာပါမယ်။ နောက်ဆုံးမှာ ဈေးဝယ်တောင်း class ကို ရေးပြပါမယ်။"
  ],
  goals: [
    "`class` နဲ့ `new` ကို သုံးနိုင်မယ်။",
    "`constructor` ရဲ့ အလုပ်ကို နားလည်မယ်။",
    "Getter/setter နဲ့ inheritance ကို သုံးနိုင်မယ်။",
    "`static` method ကို ဘယ်အချိန် သုံးရမလဲ သိမယ်။"
  ],
  diagram: {
    type: "flow",
    title: "Class ကနေ Object ဆောက်ပုံ",
    nodes: [
      { t: "Class (ပုံစံခွက်)", sub: "class Student { ... }", tone: 6, mono: true },
      { t: "new Student(\"Aung\", 20)", sub: "ဒေတာ ပေးပြီး ခေါ်တယ်", tone: 3, mono: true },
      { t: "constructor run တယ်", sub: "this.name = name; this.age = age;", tone: 1, mono: true },
      { t: "Object (instance) ရတယ်", sub: "{ name: \"Aung\", age: 20 } + methods", tone: 2 }
    ],
    caption: "Class က ကိုယ်တိုင် object မဟုတ်ဘူး။ `new` နဲ့ ခေါ်မှ object တစ်ခု ထွက်လာတယ်။ Class တစ်ခုကနေ object များစွာ ဆောက်နိုင်တယ်။"
  },
  sections: [
    {
      h: "Class အခြေခံနဲ့ constructor",
      p: "`class` keyword နဲ့ နာမည် ပေးတယ်။ `constructor` က object ဆောက်တဲ့အခါ တစ်ခါ run တယ်။ `this` က အဲဒီ object ကို ညွှန်တယ်။ Object ဆောက်ဖို့ `new` ကို သုံးတယ်။",
      code: `class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return \`ကျွန်တော့်နာမည် \${this.name}၊ အသက် \${this.age}\`;
  }
}

let s1 = new Student("Aung Aung", 20);
let s2 = new Student("Su Su", 22);

console.log(s1.name);          // Aung Aung
console.log(s1.introduce());
console.log(s2.introduce());`,
      lang: "js",
      lines: [
        { n: "2-5", t: "`constructor` က `new` လုပ်တဲ့အခါ run ပြီး တန်ဖိုးတွေကို `this` ပေါ် သတ်မှတ်တယ်။" },
        { n: "7-9", t: "Method က class ထဲမှာ ရေးတယ်။ `this.name` က လက်ရှိ object ရဲ့ name။" },
        { n: "11-12", t: "Class တစ်ခုကနေ object နှစ်ခု ဆောက်တယ်။ တစ်ခုစီမှာ ကိုယ်ပိုင် ဒေတာ ရှိတယ်။" }
      ]
    },
    {
      h: "Method နဲ့ Default Value",
      p: "Class ထဲက method တွေက object ရဲ့ ဒေတာကို သုံးပြီး တွက်ချက်နိုင်တယ်။ Constructor မှာ default တန်ဖိုး ပေးလို့ရတယ်။",
      code: `class Product {
  constructor(name, price, qty = 1) {
    this.name = name;
    this.price = price;
    this.qty = qty;
  }

  total() {
    return this.price * this.qty;
  }

  addQty(n) {
    this.qty += n;
  }
}

let laptop = new Product("Laptop", 2000000, 2);
console.log(laptop.total());    // 4000000

laptop.addQty(1);
console.log(laptop.total());    // 6000000`,
      lang: "js",
      lines: [
        { n: "2", t: "`qty` မပေးရင် 1 ကို သုံးမယ့် default parameter။" },
        { n: "8-10", t: "`total()` က ဈေးနှုန်းနဲ့ အရေအတွက်ကို မြှောက်တယ်။" },
        { n: "12-14", t: "`addQty()` က object ရဲ့ `qty` ကို တိုးတယ်။ Method က object ရဲ့ ဒေတာကို ပြင်နိုင်တယ်။" },
        { n: "17-20", t: "Object ဆောက်ပြီး method ခေါ်တိုင်း လက်ရှိ တန်ဖိုးနဲ့ တွက်တယ်။" }
      ]
    },
    {
      h: "Getter နဲ့ Setter",
      p: "`get` နဲ့ ရေးထားတဲ့ method ကို property လို ဖတ်နိုင်တယ်။ `set` နဲ့ ရေးထားတာကို property လို ထည့်နိုင်တယ်။ အတွင်းပိုင်း ဒေတာကို ထိန်းချုပ်ချင်တဲ့အခါ သုံးတယ်။",
      code: `class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  set fullName(value) {
    let parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
}

let p = new Person("Aung", "Aung");
console.log(p.fullName);       // Aung Aung

p.fullName = "Su Su";
console.log(p.firstName);      // Su
console.log(p.lastName);       // Su`,
      lang: "js",
      lines: [
        { n: "7-9", t: "`get fullName()` ကို `p.fullName` လို့ ကွင်းမပါဘဲ ဖတ်တယ်။" },
        { n: "11-15", t: "`set fullName(value)` ကို `p.fullName = \"Su Su\"` လို့ ထည့်တယ်။" },
        { n: "18-22", t: "Getter/setter က property လို ပေါ်ပေမယ့် အတွင်းမှာ function run နေတယ်။" }
      ]
    },
    {
      h: "Inheritance — extends နဲ့ super",
      p: "Class တစ်ခုက နောက်တစ်ခုရဲ့ လုပ်ဆောင်ချက်တွေကို အမွေယူနိုင်တယ်။ `extends` နဲ့ ယူပြီး `super()` နဲ့ parent constructor ကို ခေါ်တယ်။ Method ကို ပြန်ရေးရင် override လုပ်တယ်။",
      code: `class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return this.name + " အသံ မြည်တယ်";
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);           // parent constructor ကို ခေါ်
    this.breed = breed;
  }

  speak() {
    return this.name + " က ဝုတ် ဝုတ် လုပ်တယ်";
  }

  info() {
    return this.breed + " မျိုး";
  }
}

let dog = new Dog("Bobby", "Poodle");

console.log(dog.speak());    // override လုပ်ထား
console.log(dog.info());
console.log(dog instanceof Dog);      // true
console.log(dog instanceof Animal);   // true`,
      lang: "js",
      lines: [
        { n: "1-10", t: "Parent class `Animal` မှာ name နဲ့ `speak()` ရှိတယ်။" },
        { n: "12-15", t: "`extends Animal` က အမွေယူတယ်။ `super(name)` က parent constructor ကို ခေါ်တယ်။" },
        { n: "17-19", t: "`speak()` ကို ပြန်ရေးထားတယ်။ ဒါက override။" },
        { n: "29-32", t: "`instanceof` နဲ့ Dog ရော Animal ရော ဖြစ်နေတာ စစ်နိုင်တယ်။" }
      ]
    },
    {
      h: "Static နဲ့ လက်တွေ့ Cart",
      p: "`static` method က object မဆောက်ဘဲ class နာမည်နဲ့ တိုက်ရိုက် ခေါ်တယ်။ Utility function တွေအတွက် သုံးတယ်။ နောက်ဆုံး ဥပမာက class နဲ့ ဈေးဝယ်တောင်း စီမံတာ။",
      code: `class MathHelper {
  static add(a, b) {
    return a + b;
  }

  static square(n) {
    return n * n;
  }
}

console.log(MathHelper.add(3, 4));     // 7
console.log(MathHelper.square(5));     // 25

class Cart {
  constructor() {
    this.items = [];
  }

  add(product) {
    this.items.push(product);
  }

  total() {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }

  count() {
    return this.items.length;
  }
}

let cart = new Cart();
cart.add({ name: "Laptop", price: 2000000 });
cart.add({ name: "Mouse", price: 50000 });

console.log(cart.count());    // 2
console.log(cart.total());    // 2050000`,
      lang: "js",
      lines: [
        { n: "1-10", t: "`static` method တွေကို object မဆောက်ဘဲ `MathHelper.add(...)` လို့ ခေါ်တယ်။" },
        { n: "13-17", t: "`Cart` class က items array ကို ကိုယ်ပိုင် သိမ်းထားတယ်။" },
        { n: "19-29", t: "`add` က ပစ္စည်း ထည့်၊ `total` က reduce နဲ့ ပေါင်း၊ `count` က အရေအတွက်။" },
        { n: "31-37", t: "Cart object ဆောက်ပြီး ပစ္စည်း နှစ်ခု ထည့်တယ်။ ရလဒ်က 2 နဲ့ 2,050,000။" }
      ]
    }
  ],
  pitfalls: [
    { t: "new မသုံးဘဲ class ခေါ်တယ်", d: "`Student()` လို့ ခေါ်ရင် error ဖြစ်တယ်။ Object ဆောက်ဖို့ `new Student()` ကို သုံးပါ။" },
    { t: "super() ကို မေ့တယ်", d: "`extends` လုပ်ထားတဲ့ class ရဲ့ constructor မှာ `this` မသုံးခင် `super()` ကို ခေါ်ရတယ်။" },
    { t: "this ကို မှားယွင်း သုံးတယ်", d: "Method ကို ခွဲထုတ်ခေါ်ရင် `this` ပျောက်နိုင်တယ်။ Arrow function ဒါမှမဟုတ် `bind` အကြောင်း နောက်မှာ ဆက်လေ့လာပါ။" }
  ],
  recap: [
    "Class က ပုံစံခွက်၊ `new` က object ဆောက်တာ။",
    "`constructor` က object ဆောက်တဲ့အခါ တစ်ခါ run တယ်။",
    "`get`/`set` က property လို ဖတ်/ရေး။ `extends`/`super` က အမွေယူ။",
    "`static` က object မလိုဘဲ class နာမည်နဲ့ ခေါ်တယ်။"
  ],
  exercise: {
    title: "Class နှစ်ခု ရေးပါ",
    steps: [
      "`Book` class ဆောက်ပါ — title, price နဲ့ `discount(percent)` method ပါစေ။",
      "`Ebook extends Book` ဆောက်ပြီး `fileSize` ထပ်ထည့်ပါ။",
      "`Cart` class မှာ `remove(name)` method ထပ်ထည့်ပါ။",
      "Object တွေ ဆောက်ပြီး method တွေ ခေါ်စမ်းပါ။"
    ],
    hint: "`remove` မှာ `this.items = this.items.filter(item => item.name !== name);` ကို သုံးနိုင်တယ်။"
  }
});
