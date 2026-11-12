/* ============================================================
   practice.js — အခန်း ၇ (လက်တွေ့ Project ၆ ခု)
   ============================================================ */
window.JSL = window.JSL || {};
JSL.lessons = JSL.lessons || [];

/* ------------------------------------------------------------
   Practice 01 — မြှောက်စား လေ့ကျင့်ခန်း
   ------------------------------------------------------------ */
JSL.lessons.push({
  id: "practice-01",
  chapter: "practice",
  order: 1,
  num: "01",
  title: "မြှောက်စား ဇယား လေ့ကျင့်ခန်း",
  subtitle: "Input စစ်ဆေးခြင်း၊ loop နဲ့ table ဆောက်ခြင်း၊ DOM မှာ ပြခြင်း",
  minutes: 12,
  level: "အခြေခံ",
  tags: ["input", "validate", "loop", "createElement", "table"],
  fileName: "01-multiplication.html",
  source: "../practice/01-multiplication.html",
  intro: [
    "ဒီ project က အခြေခံ သင်ခန်းစာတွေကို ပေါင်းစပ်ထားတယ်။ အသုံးပြုသူ ရိုက်ထည့်တဲ့ ဂဏန်းကို စစ်ဆေးမယ်၊ ၁ ကနေ ၁၂ အထိ မြှောက်စား ဇယား ဆောက်မယ်၊ ပြီးမှ စာမျက်နှာပေါ်မှာ ပြမယ်။",
    "ဒီပုံစံကို \"validate → build → render\" လို့ မှတ်ထားနိုင်တယ်။ နောက် project တွေမှာလည်း အလားတူ အဆင့်တွေ ပြန်ပါလာမယ်။"
  ],
  goals: [
    "Input တန်ဖိုးကို စစ်ဆေးတဲ့ function ရေးနိုင်မယ်။",
    "`for` loop နဲ့ table row တွေ ဆောက်နိုင်မယ်။",
    "`createElement` နဲ့ DOM ကို လုံခြုံစွာ ဆောက်နိုင်မယ်။",
    "Enter key နဲ့ click event နှစ်မျိုးလုံး ကိုင်တွယ်နိုင်မယ်။"
  ],
  diagram: {
    type: "flow",
    title: "Project ရဲ့ အလုပ်လုပ်ပုံ — validate → build → render",
    nodes: [
      { t: "အသုံးပြုသူ ဂဏန်း ရိုက်တယ်", sub: "input.value က string အနေနဲ့ ရ", tone: 6 },
      { t: "validate(value)", sub: "ဗလာ၊ NaN၊ ၁–၂၀ အတွင်း ဟုတ်မဟုတ် စစ်", tone: 3 },
      { t: "createTable(num)", sub: "loop ၁–၁၂ နဲ့ row တစ်ခုချင်း ဆောက်", tone: 4 },
      { t: "render()", sub: "အဟောင်း ရှင်းပြီး table အသစ် ထည့်", tone: 2 }
    ],
    caption: "အမှား ရှိရင် ဇယား မဆောက်ဘဲ ရပ်တယ်။ ဒါက အသုံးပြုသူကို အမှား ပြဖို့နဲ့ မလိုအပ်တဲ့ အလုပ် မလုပ်ဖို့ ကူညီတယ်။"
  },
  sections: [
    {
      h: "၁။ Input ကို စစ်ဆေးခြင်း",
      p: "Input က ဘယ်တော့မှ ဂဏန်း မဟုတ်ဘဲ string ပြန်တယ်။ ဒါကြောင့် `Number()` နဲ့ ပြောင်းပြီး `Number.isNaN()` နဲ့ စစ်တယ်။ ဒီ function က အမှား ရှိရင် စာသား၊ မရှိရင် ဗလာ string ပြန်တယ်။",
      code: `function validate(value) {
  if (value === "") {
    return "ဂဏန်း ထည့်ပါ";
  }

  let num = Number(value);

  if (Number.isNaN(num)) {
    return "ဂဏန်း မှန်ကန်အောင် ထည့်ပါ";
  }

  if (num < 1 || num > 20) {
    return "၁ ကနေ ၂၀ အတွင်း ထည့်ပါ";
  }

  return "";
}`,
      lang: "js",
      file: "01-multiplication.html",
      lines: [
        { n: "2-4", t: "ဗလာ input ကို အရင် စစ်တယ်။ `Number(\"\")` က ၀ ဖြစ်တာမို့ ဒီစစ်ဆေးမှု မပါရင် မှားနိုင်တယ်။" },
        { n: "6-10", t: "`Number.isNaN` က ဂဏန်း မဟုတ်တာကို ဖမ်းတယ်။" },
        { n: "12-14", t: "ကန့်သတ်ချက် ၁–၂၀ ကို စစ်တယ်။" },
        { n: 16, t: "အားလုံး မှန်ရင် ဗလာ string ပြန်တယ်။ ဒါက \"အမှား မရှိ\" ဆိုတဲ့ အဓိပ္ပာယ်။" }
      ]
    },
    {
      h: "၂။ Loop နဲ့ Table ဆောက်ခြင်း",
      p: "`createElement` နဲ့ element တစ်ခုချင်း ဆောက်ပြီး `append` နဲ့ ဆက်တယ်။ `innerHTML` ထဲ စာသား ထည့်တာထက် `textContent` ကို သုံးတာက ပိုလုံခြုံတယ်။",
      code: `function createTable(num) {
  let table = document.createElement("table");

  let head = document.createElement("tr");

  let th1 = document.createElement("th");
  th1.textContent = "ပုဒ်";

  let th2 = document.createElement("th");
  th2.textContent = "တွက်ချက်မှု";

  let th3 = document.createElement("th");
  th3.textContent = "ရလဒ်";

  head.append(th1, th2, th3);
  table.append(head);

  for (let i = 1; i <= 12; i++) {
    let row = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.textContent = i;

    let td2 = document.createElement("td");
    td2.textContent = num + " × " + i;

    let td3 = document.createElement("td");
    td3.textContent = num * i;

    row.append(td1, td2, td3);
    table.append(row);
  }

  return table;
}`,
      lang: "js",
      file: "01-multiplication.html",
      lines: [
        { n: "2-17", t: "Header row ကို ဆောက်တယ်။ `append` က element များစွာကို တစ်ခါတည်း ထည့်နိုင်တယ်။" },
        { n: "19-33", t: "`for` loop က ၁ ကနေ ၁၂ အထိ လှည့်ပြီး row တစ်ခုစီ ဆောက်တယ်။" },
        { n: 28, t: "`num * i` က ဂဏန်း နှစ်ခုကို မြှောက်တယ်။ `textContent` က ရလဒ်ကို string အဖြစ် ပြပေးတယ်။" },
        { n: 35, t: "ဆောက်ထားတဲ့ table ကို ပြန်ပေးတယ်။ ဒါမှ ခေါ်တဲ့ နေရာက ထည့်နိုင်မယ်။" }
      ],
      tip: {
        type: "key",
        title: "Element ဆောက်ပြီး ပြန်ပေးပါ",
        text: "`createTable` က table ကို တိုက်ရိုက် စာမျက်နှာမှာ မထည့်ဘဲ ပြန်ပေးတယ်။ ဒါက function ကို ပြန်သုံးလို့ ရစေတယ်။ ထည့်တာကို `render()` က လုပ်တယ်။"
      }
    },
    {
      h: "၃။ ပြခြင်းနှင့် Event များ",
      p: "`render()` က အဟောင်း ရလဒ်ကို ရှင်းပြီး အမှား မရှိမှ table အသစ် ထည့်တယ်။ Button နဲ့ Enter key နှစ်မျိုးလုံးအတွက် တူညီတဲ့ `render` ကို ခေါ်တယ်။",
      code: `function render() {
  let error = validate(input.value);

  errorEl.textContent = error;
  resultEl.innerHTML = "";

  if (error !== "") {
    return;
  }

  let num = Number(input.value);
  resultEl.append(createTable(num));
}

runBtn.addEventListener("click", render);

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    render();
  }
});

render();   // စာမျက်နှာ ဖွင့်တာနဲ့ တစ်ခါ`,
      lang: "js",
      file: "01-multiplication.html",
      lines: [
        { n: "2-5", t: "အမှား စာသား ပြပြီး ရလဒ် အဟောင်းကို ရှင်းတယ်။" },
        { n: "7-9", t: "အမှား ရှိရင် ဒီနေရာမှာ ရပ်တယ်။ ဇယား မဆောက်ဘူး။" },
        { n: "11-12", t: "မှန်ရင် table ဆောက်ပြီး ထည့်တယ်။" },
        { n: "14-22", t: "Click နဲ့ Enter နှစ်မျိုးလုံး တူညီတဲ့ function ကို ခေါ်တယ်။" }
      ]
    }
  ],
  pitfalls: [
    { t: "Input က string ပြန်တာကို မေ့နေတယ်", d: "`input.value` က string ပါ။ မြှောက်ခင် `Number(input.value)` လို့ ပြောင်းပါ။" },
    { t: "ဗလာ input ကို ၀ လို့ သတ်မှတ်မိတယ်", d: "`Number(\"\")` က ၀ ဖြစ်တယ်။ အရင် `value === \"\"` ကို စစ်ပါ။" },
    { t: "Result အဟောင်း မရှင်းဘူး", d: "Button နှိပ်တိုင်း `resultEl.innerHTML = \"\"` လို ရှင်းပါ။ မရှင်းရင် ဇယား တွေ ထပ်ပေါင်းလာမယ်။" },
    { t: "innerHTML ထဲ ကိုယ်ရိုက်ထည့်တဲ့ စာသား ထည့်တယ်", d: "အသုံးပြုသူ ရိုက်တဲ့ စာသားကို `innerHTML` မှာ မထည့်ပါနဲ့။ `textContent` ကို သုံးပါ။" }
  ],
  recap: [
    "Input က string ပြန်တာမို့ ဂဏန်းအဖြစ် ပြောင်းပြီး စစ်ရတယ်။",
    "`for` loop နဲ့ row တွေ ဆောက်ပြီး `append` နဲ့ ဆက်တယ်။",
    "`render()` က အဟောင်း ရှင်းပြီး အသစ် ထည့်တယ်။",
    "Click နဲ့ Enter နှစ်မျိုးလုံးအတွက် တူညီတဲ့ function ကို ခေါ်တယ်။"
  ],
  exercise: {
    title: "ကိုယ်တိုင် စမ်းကြည့်ပါ",
    steps: [
      "ဇယားကို ၁၂ အထိ မဟုတ်ဘဲ ၂၀ အထိ ပြပါ။",
      "ဂဏန်း ၁–၂၀ အစား ၁–၅၀ အတွင်း ခွင့်ပြုပါ။",
      "ရလဒ် ဇယားမှာ အနီရောင် နောက်ခံ ထည့်ပါ။",
      "Input ထဲ စာသား ရိုက်ရင် ဘယ်လို အမှား ပြလဲ စမ်းပါ။"
    ],
    hint: "`createTable` ထဲက loop ရဲ့ အပေါ်ဆုံး ကန့်သတ်ချက်ကို ပြောင်းရုံပါပဲ။"
  }
});

/* ------------------------------------------------------------
   Practice 02 — ခန့်မှန်း ဂိမ်း
   ------------------------------------------------------------ */
JSL.lessons.push({
  id: "practice-02",
  chapter: "practice",
  order: 2,
  num: "02",
  title: "ခန့်မှန်း ဂိမ်း (၁–၁၀၀)",
  subtitle: "ကျပန်း ဂဏန်း၊ အခြေအနေ စစ်ဆေးခြင်း၊ ကြိုးစားချက် မှတ်တမ်းနှင့် ဂိမ်း ပြန်စခြင်း",
  minutes: 14,
  level: "အခြေခံ",
  tags: ["Math.random", "game", "state", "if/else"],
  fileName: "02-guess-game.html",
  source: "../practice/02-guess-game.html",
  intro: [
    "ဂိမ်းတစ်ခု ရေးတဲ့အခါ အရေးကြီးဆုံးက **state** ကို စနစ်တကျ ထိန်းထားတာပါ။ ဒီဂိမ်းမှာ အဖြေ (`secret`)， ကြိုးစားချက် (`attempts`)， မှတ်တမ်း (`history`)， ဂိမ်း ပြီး/မပြီး (`isOver`) ဆိုတဲ့ state လေးခု ရှိတယ်။",
    "အသုံးပြုသူ ခန့်မှန်းတိုင်း state ကို ပြောင်းပြီး စာမျက်နှာမှာ ပြန်ပြတယ်။ ဒီပုံစံကို \"state ပြောင်း → render\" လို့ မှတ်ထားပါ။"
  ],
  goals: [
    "`Math.random()` နဲ့ ၁–၁၀၀ အတွင်း ကျပန်း ဂဏန်း ရနိုင်မယ်။",
    "ဂိမ်း state ကို variable တွေနဲ့ ထိန်းနိုင်မယ်။",
    "အမှား/အမှန် အခြေအနေတွေကို `if/else` နဲ့ ခွဲနိုင်မယ်။",
    "ဂိမ်း ပြီးရင် ပြန်မ run အောင် ကာကွယ်နိုင်မယ်။"
  ],
  diagram: {
    type: "branch",
    title: "ခန့်မှန်းတိုင်း ဖြစ်ပေါ်တဲ့ ဆုံးဖြတ်ချက်",
    condition: "guess နဲ့ secret ကို နှိုင်းယှဉ်",
    conditionSub: "အရင်ဆုံး ဂိမ်း ပြီးနေပြီလား စစ်",
    yes: { t: "guess === secret", sub: "အောင်ပွဲ — isOver = true" },
    no: { t: "guess < secret / > secret", sub: "ပိုကြီး/ပိုသေး အရိပ်အမြွက် ပြ" },
    end: "ကြိုးစားချက် ၇ ချက် ပြည့်ရင် ရှုံး — အဖြေကို ပြ",
    caption: "အမှားတွေထဲမှာ အဖြေကို ပြောင်းပြန် ရေးမိတာ အများဆုံးပါ။ `guess < secret` ဆိုရင် \"ပိုကြီးတဲ့ ဂဏန်း\" လို့ ပြရမယ်။"
  },
  sections: [
    {
      h: "၁။ ဂိမ်း State နှင့် ကျပန်း ဂဏန်း",
      p: "`Math.random()` က ၀ ကနေ ၁ အောက် ကျပန်း ဒသမ ဂဏန်း ပြန်တယ်။ `Math.floor(Math.random() * 100) + 1` က ၁ ကနေ ၁၀၀ အထိ ကိန်းပြည့် ရစေတယ်။",
      code: `let secret = 0;
let attempts = 0;
let history = [];
let isOver = false;

function startGame() {
  secret = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  history = [];
  isOver = false;

  guessInput.value = "";
  hintEl.textContent = "စပြီ။ ခန့်မှန်းပါ။";
  hintEl.className = "hint";
  attemptsEl.textContent = "0";
  historyEl.textContent = "-";

  console.log("အဖြေ:", secret);   // စမ်းသပ်ရ လွယ်အောင်
}`,
      lang: "js",
      file: "02-guess-game.html",
      lines: [
        { n: "1-4", t: "ဂိမ်းရဲ့ state လေးခုကို အပေါ်ဆုံးမှာ ကြေညာထားတယ်။ Function တွေက ဒီတန်ဖိုးတွေကို ပြင်တယ်။" },
        { n: 7, t: "`Math.random() * 100` က ၀–၉၉.၉၉ ရတယ်။ `floor` နဲ့ ကိန်းပြည့်ပြီး `+ 1` က ၁–၁၀၀ ဖြစ်စေတယ်။" },
        { n: "9-14", t: "ဂိမ်း အသစ် စတိုင်း state နဲ့ စာမျက်နှာ အားလုံးကို ပြန်သတ်မှတ်တယ်။" },
        { n: 16, t: "စမ်းသပ်ရ လွယ်အောင် အဖြေကို Console မှာ ပြတယ်။ တကယ့် ဂိမ်းမှာ မပြပါနဲ့။" }
      ],
      tip: {
        type: "info",
        title: "Math.random() က ၁ မပါဘူး",
        text: "`Math.random()` က ၀ ပါနိုင်၊ ၁ မပါဘူး။ ဒါကြောင့် `* 100` လုပ်ရင် ၁၀၀ မရနိုင်ဘူး။ `+ 1` ထည့်မှ ၁၀၀ ပါလာမယ်။"
      }
    },
    {
      h: "၂။ ခန့်မှန်းချက်ကို စစ်ဆေးခြင်း",
      p: "အရင်ဆုံး ဂိမ်း ပြီးနေပြီလား၊ input ဗလာ ဟုတ်မဟုတ်၊ ၁–၁၀၀ အတွင်း ဟုတ်မဟုတ် စစ်တယ်။ ပြီးမှ ကြိုးစားချက် တိုးပြီး အဖြေနဲ့ နှိုင်းယှဉ်တယ်။",
      code: `function checkGuess() {
  if (isOver) {
    hintEl.textContent = "ဂိမ်း ပြီးသွားပြီ။ \\"အသစ် စ\\" ကို နှိပ်ပါ။";
    return;
  }

  let value = guessInput.value;

  if (value === "") {
    hintEl.textContent = "ဂဏန်း ထည့်ပါ";
    return;
  }

  let guess = Number(value);

  if (guess < 1 || guess > 100) {
    hintEl.textContent = "၁ ကနေ ၁၀၀ အတွင်း ထည့်ပါ";
    return;
  }

  attempts++;
  attemptsEl.textContent = attempts;

  history.push(guess);
  historyEl.textContent = history.join(", ");

  if (guess === secret) {
    hintEl.textContent = "🎉 မှန်တယ်! " + attempts + " ချက်နဲ့ ရပြီ";
    hintEl.className = "hint win";
    isOver = true;
    return;
  }

  if (guess < secret) {
    hintEl.textContent = "ပိုကြီးတဲ့ ဂဏန်း ဖြစ်တယ် ⬆️";
  } else {
    hintEl.textContent = "ပိုသေးတဲ့ ဂဏန်း ဖြစ်တယ် ⬇️";
  }

  if (attempts >= 7) {
    hintEl.textContent = "😢 မရတော့ဘူး။ အဖြေက " + secret;
    hintEl.className = "hint lose";
    isOver = true;
  }
}`,
      lang: "js",
      file: "02-guess-game.html",
      lines: [
        { n: "2-5", t: "ဂိမ်း ပြီးနေရင် ဒီ function က ဘာမှ မလုပ်ဘဲ ပြန်ထွက်တယ်။" },
        { n: "7-21", t: "Input စစ်ဆေးမှုတွေ။ မှားရင် ဒီနေရာမှာ ရပ်တယ်။" },
        { n: "23-26", t: "မှန်ရင် ကြိုးစားချက် တိုးပြီး မှတ်တမ်းထဲ ထည့်တယ်။" },
        { n: "28-33", t: "အဖြေ မှန်ရင် အောင်ပွဲ ပြပြီး ဂိမ်း ရပ်တယ်။" },
        { n: "35-43", t: "မမှန်ရင် ပိုကြီး/ပိုသေး အရိပ်အမြွက် ပြတယ်။ ၇ ချက် ပြည့်ရင် ရှုံးတယ်။" }
      ],
      tip: {
        type: "warn",
        title: "နှိုင်းယှဉ်ချက် ပြောင်းပြန် မရေးပါနဲ့",
        text: "`guess < secret` ဆိုတာ ခန့်မှန်းချက်က အဖြေထက် သေးတယ်။ ဒါကြောင့် \"ပိုကြီးတဲ့ ဂဏန်း\" လို့ ပြရမယ်။ ပြောင်းပြန် ရေးမိတာ အများဆုံး အမှားပါ။"
      }
    },
    {
      h: "၃။ Event နှင့် ဂိမ်း ပြန်စခြင်း",
      p: "Button နှစ်ခုက `checkGuess` နဲ့ `startGame` ကို ခေါ်တယ်။ Enter key ကိုလည်း ပံ့ပိုးထားတယ်။ စာမျက်နှာ ဖွင့်တာနဲ့ `startGame()` ကို တစ်ခါ ခေါ်တယ်။",
      code: `document.getElementById("check").addEventListener("click", checkGuess);
document.getElementById("reset").addEventListener("click", startGame);

guessInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkGuess();
  }
});

startGame();`,
      lang: "js",
      file: "02-guess-game.html",
      lines: [
        { n: 1, t: "\"ခန့်မှန်း\" button က စစ်ဆေးတဲ့ function ကို ခေါ်တယ်။" },
        { n: 2, t: "\"အသစ် စ\" button က state အားလုံးကို ပြန်သတ်မှတ်တယ်။" },
        { n: "4-8", t: "Enter နှိပ်ရင်လည်း စစ်ဆေးတယ်။ အသုံးပြုသူ အတွက် အဆင်ပြေစေတယ်။" },
        { n: 10, t: "စာမျက်နှာ ဖွင့်တာနဲ့ ဂိမ်း အသစ် စတယ်။" }
      ]
    }
  ],
  pitfalls: [
    { t: "ဂိမ်း ပြီးသွားပြီးမှ ထပ်ခန့်မှန်းလို့ရနေတယ်", d: "`isOver` ကို စစ်ပြီး ပြီးရင် `return` လုပ်ပါ။" },
    { t: "အဖြေကို Console မှာ ပြထားတယ်", d: "စမ်းသပ်တဲ့အခါ ကောင်းပေမယ့် တကယ် ကစားတဲ့အခါ `console.log` ကို ဖျက်ပါ။" },
    { t: "ကြိုးစားချက် မှတ်တမ်း မရှင်းဘူး", d: "`startGame()` မှာ `history = []` နဲ့ `attempts = 0` ကို ပြန်သတ်မှတ်ပါ။" },
    { t: "Input ကို string အတိုင်း နှိုင်းယှဉ်တယ်", d: "`\"5\" === 5` က false ဖြစ်တယ်။ `Number(value)` နဲ့ ပြောင်းပြီးမှ နှိုင်းယှဉ်ပါ။" }
  ],
  recap: [
    "ဂိမ်း state ကို variable တွေနဲ့ ထိန်းထားတယ်။",
    "`Math.random()` နဲ့ ၁–၁၀၀ ကျပန်း ဂဏန်း ရနိုင်တယ်။",
    "အဖြေ မှန်/မမှန်၊ ပြီး/မပြီး ကို `if` နဲ့ စစ်တယ်။",
    "ဂိမ်း ပြန်စတိုင်း state နဲ့ စာမျက်နှာ အားလုံး ပြန်သတ်မှတ်ရတယ်။"
  ],
  exercise: {
    title: "ကိုယ်တိုင် စမ်းကြည့်ပါ",
    steps: [
      "ကြိုးစားချက် ကန့်သတ်ချက်ကို ၇ ကနေ ၅ ပြောင်းပါ။",
      "မှတ်တမ်းကို ကော်မာနဲ့ မဟုတ်ဘဲ မြှားနဲ့ ခြားပြပါ။",
      "ဂိမ်း အောင်ရင် အစိမ်းရောင်၊ ရှုံးရင် အနီရောင် ပြပါ။",
      "အခက် အဆင့် သုံးဆင့် (အလွယ် ၁–၅၀၊ အခက် ၁–၁၀၀) ထည့်ပါ။"
    ],
    hint: "CSS class ကို `hintEl.className = \"hint win\"` လို ပြောင်းပြီး အရောင် သတ်မှတ်နိုင်တယ်။"
  }
});

/* ------------------------------------------------------------
   Practice 03 — ဂဏန်းတွက်စက်
   ------------------------------------------------------------ */
JSL.lessons.push({
  id: "practice-03",
  chapter: "practice",
  order: 3,
  num: "03",
  title: "ဂဏန်းတွက်စက်",
  subtitle: "State machine ပုံစံ၊ operator ကိုင်တွယ်ခြင်း၊ Event Delegation နှင့် Keyboard",
  minutes: 18,
  level: "အလယ်အလတ်",
  tags: ["calculator", "state", "switch", "delegation", "keyboard"],
  fileName: "03-calculator.html",
  source: "../practice/03-calculator.html",
  intro: [
    "ဂဏန်းတွက်စက်က ရိုးရိုး ပေါင်း/နှုတ် လုပ်တာထက် state ကို မှန်ကန်စွာ ထိန်းဖို့ လိုတယ်။ လက်ရှိ ရိုက်နေတဲ့ ဂဏန်း (`current`)， အရင်ဂဏန်း (`previous`)， operator (`operator`) နဲ့ တွက်ပြီးသားလား (`justCalculated`) ဆိုတဲ့ အခြေအနေ လေးခု ရှိတယ်။",
    "ဒီ project က \"state machine\" ရဲ့ အသေးစား ဥပမာပါ။ Button တစ်ခုစီမှာ listener မတပ်ဘဲ container တစ်ခုတည်းမှာ တပ်တဲ့ Event Delegation ကိုလည်း လေ့ကျင့်မယ်။"
  ],
  goals: [
    "ဂဏန်းတွက်စက် state ကို variable တွေနဲ့ ထိန်းနိုင်မယ်။",
    "`switch` နဲ့ operator လေးမျိုး ကိုင်တွယ်နိုင်မယ်။",
    "Event Delegation နဲ့ button တွေကို ကိုင်တွယ်နိုင်မယ်။",
    "Keyboard input ကို ပံ့ပိုးနိုင်မယ်။",
    "၀ နဲ့ စားတာလို အမှား အခြေအနေတွေ ကာကွယ်နိုင်မယ်။"
  ],
  diagram: {
    type: "cycle",
    title: "ဂဏန်းတွက်စက် ရဲ့ အလုပ်လုပ်ပုံ",
    steps: [
      { t: "ဂဏန်း ရိုက်တယ်", sub: "current ကို ဆက်တွဲ သို့မဟုတ် အစားထိုး", tone: 6 },
      { t: "Operator နှိပ်တယ်", sub: "previous = current, operator = op", tone: 3 },
      { t: "ဂဏန်း ဒုတိယ ရိုက်တယ်", sub: "current အသစ် ဖြစ်လာတယ်", tone: 4 },
      { t: "\"=\" နှိပ်တယ်", sub: "switch နဲ့ တွက်၊ ရလဒ်ကို current မှာ ထား", tone: 2 }
    ],
    loopLabel: "ထပ်တွက်",
    caption: "တစ်ဆင့်ချင်း state ပြောင်းတယ်။ တွက်ပြီးရင် ရလဒ်ကို ဆက်အသုံးချနိုင်တာမို့ ပြန်လည် စတင်နိုင်တယ်။"
  },
  sections: [
    {
      h: "၁။ State နှင့် ဂဏန်း ထည့်ခြင်း",
      p: "`current` က လက်ရှိ ပြသနေတဲ့ ဂဏန်း string ဖြစ်တယ်။ \"0\" ဖြစ်နေရင် ဂဏန်း အသစ် ရိုက်တာနဲ့ အစားထိုးတယ်။ မဟုတ်ရင် ဆက်တွဲတယ်။ ဒသမ (`.`) ကို တစ်ခါပဲ ခွင့်ပြုတယ်။",
      code: `let current = "0";
let previous = null;
let operator = null;
let justCalculated = false;

function inputNumber(num) {
  errorEl.textContent = "";

  if (justCalculated) {
    current = "0";
    justCalculated = false;
  }

  if (num === ".") {
    if (current.includes(".")) {
      return;
    }

    current += ".";
    render();
    return;
  }

  if (current === "0") {
    current = num;
  } else {
    current += num;
  }

  render();
}`,
      lang: "js",
      file: "03-calculator.html",
      lines: [
        { n: "1-4", t: "State လေးခု။ `current` က string ဖြစ်တာမို့ ဂဏန်းတွေ ဆက်တွဲရ လွယ်တယ်။" },
        { n: "9-12", t: "တွက်ပြီးသားဆိုရင် ဂဏန်း အသစ် ရိုက်တာနဲ့ အစပြန်စတယ်။" },
        { n: "14-22", t: "ဒသမ တစ်ခုပဲ ပါအောင် ကာကွယ်တယ်။" },
        { n: "24-30", t: "\"0\" ဖြစ်နေရင် အစားထိုး၊ မဟုတ်ရင် ဆက်တွဲတယ်။" }
      ]
    },
    {
      h: "၂။ Operator နှင့် တွက်ချက်ခြင်း",
      p: "Operator နှိပ်တဲ့အခါ လက်ရှိ ဂဏန်းကို `previous` မှာ သိမ်းပြီး operator ကို မှတ်တယ်။ \"=\" နှိပ်တဲ့အခါ `switch` နဲ့ တွက်တယ်။ ၀ နဲ့ စားရင် အမှား ပြပြီး ရပ်တယ်။",
      code: `function inputOperator(op) {
  errorEl.textContent = "";

  if (operator !== null && !justCalculated) {
    calculate();
  }

  previous = Number(current);
  operator = op;
  justCalculated = false;
  current = "0";
}

function calculate() {
  if (operator === null || previous === null) {
    return;
  }

  let a = previous;
  let b = Number(current);
  let result = 0;

  switch (operator) {
    case "+": result = a + b; break;
    case "-": result = a - b; break;
    case "*": result = a * b; break;
    case "/":
      if (b === 0) {
        errorEl.textContent = "၀ နဲ့ စားလို့ မရဘူး";
        return;
      }
      result = a / b;
      break;
    default:
      return;
  }

  current = String(Math.round(result * 1e10) / 1e10);
  previous = null;
  operator = null;
  justCalculated = true;

  render();
}`,
      lang: "js",
      file: "03-calculator.html",
      lines: [
        { n: "4-6", t: "Operator ရှိပြီး ဂဏန်း အသစ် မရိုက်ရသေးရင် အရင် တွက်တယ်။ ဒါက \"၂ + ၃ +\" လို ဆက်တွက်တာကို ကူညီတယ်။" },
        { n: "8-11", t: "`previous` မှာ လက်ရှိ ဂဏန်း သိမ်းပြီး operator ကို မှတ်တယ်။" },
        { n: "18-34", t: "`switch` က operator အလိုက် တွက်တယ်။ ၀ နဲ့ စားရင် error ပြပြီး ပြန်ထွက်တယ်။" },
        { n: 36, t: "ဒသမ အများကြီး မပြအောင် ကိုယ်တိုင် ဝိုင်းတယ်။" }
      ],
      tip: {
        type: "key",
        title: "ဂဏန်း အားလုံးကို string နဲ့ ထိန်းပါ",
        text: "`current` ကို string ထားရင် \"0\" ကို အစားထိုးတာ၊ ဒသမ စစ်တာ၊ backspace လုပ်တာ လွယ်တယ်။ တွက်ချက်တဲ့အခါမှ `Number()` နဲ့ ပြောင်းပါ။"
      }
    },
    {
      h: "၃။ Event Delegation နှင့် Keyboard",
      p: "Button တစ်ခုချင်းစီမှာ listener မတပ်ဘဲ `.keys` container မှာ တစ်ခုတည်း တပ်တယ်။ `event.target.closest(\"button\")` နဲ့ နှိပ်ခံရတဲ့ button ကို ရှာပြီး `data-key` ကို ဖတ်တယ်။ Keyboard အတွက်လည်း တူညီတဲ့ `handleKey` ကို ခေါ်တယ်။",
      code: `document.querySelector(".keys").addEventListener("click", (event) => {
  let btn = event.target.closest("button");
  if (!btn) return;

  if (btn.id === "clear") {
    clearAll();
    return;
  }

  if (btn.id === "back") {
    backspace();
    return;
  }

  let key = btn.dataset.key;
  if (key === undefined) return;

  handleKey(key);
});

function handleKey(key) {
  if ("0123456789.".includes(key)) {
    inputNumber(key);
    return;
  }

  if (["+", "-", "*", "/"].includes(key)) {
    inputOperator(key);
    return;
  }

  if (key === "=") {
    calculate();
  }
}

document.addEventListener("keydown", (event) => {
  let key = event.key;

  if ("0123456789.+-*/".includes(key) && key.length === 1) {
    handleKey(key);
    return;
  }

  if (key === "Enter") calculate();
  if (key === "Escape") clearAll();
  if (key === "Backspace") backspace();
});`,
      lang: "js",
      file: "03-calculator.html",
      lines: [
        { n: "1-19", t: "Container တစ်ခုတည်းမှာ listener တပ်ပြီး button ကို `closest` နဲ့ ရှာတယ်။ Button အသစ် ထည့်လည်း listener မထပ်တပ်ရဘူး။" },
        { n: "22-37", t: "Key တစ်ခုကို ဘယ် function ကို ပို့မလဲ ဆုံးဖြတ်တယ်။" },
        { n: "39-50", t: "Keyboard ကလည်း တူညီတဲ့ `handleKey` ကို ခေါ်တာမို့ အပြုအမူ တူညီတယ်။" }
      ],
      tip: {
        type: "info",
        title: "closest က အပေါ်ကို ရှာတယ်",
        text: "`event.target` က နှိပ်ခံရတဲ့ အတွင်းဆုံး element ဖြစ်နိုင်တယ်။ `closest(\"button\")` က အပေါ်ဘက်ကို တက်ပြီး အနီးဆုံး button ကို ရှာတယ်။"
      }
    }
  ],
  pitfalls: [
    { t: "တွက်ပြီးရင် ဂဏန်း အသစ် ဆက်တွဲနေတယ်", d: "`justCalculated` ကို စစ်ပြီး ဂဏန်း အသစ် ရိုက်တာနဲ့ `current` ကို အစားထိုးပါ။" },
    { t: "၀ နဲ့ စားလို့ ရနေတယ်", d: "`b === 0` ကို စစ်ပြီး အမှား ပြပါ။ JavaScript မှာ `1 / 0` က `Infinity` ဖြစ်တယ်။" },
    { t: "ဒသမ နှစ်ခု ရိုက်လို့ရနေတယ်", d: "`current.includes(\".\")` နဲ့ စစ်ပါ။" },
    { t: "Button တစ်ခုစီမှာ listener အများကြီး တပ်တယ်", d: "Event Delegation ကို သုံးပါ။ Container တစ်ခုတည်းမှာ တပ်ပြီး `closest` နဲ့ ရှာပါ။" }
  ],
  recap: [
    "ဂဏန်းတွက်စက်က state လေးခုနဲ့ အလုပ်လုပ်တယ်။",
    "ဂဏန်းတွေကို string နဲ့ ထိန်းပြီး တွက်ချက်တဲ့အခါမှ ဂဏန်း ပြောင်းတယ်။",
    "`switch` က operator အလိုက် တွက်တယ်။ ၀ နဲ့ စားတာကို ကာကွယ်တယ်။",
    "Delegation နဲ့ keyboard က တူညီတဲ့ `handleKey` ကို ခေါ်တယ်။"
  ],
  exercise: {
    title: "ကိုယ်တိုင် စမ်းကြည့်ပါ",
    steps: [
      "`%` (modulo) operator ထည့်ပါ။",
      "အမှတ်တမ်း (history) ကို သိမ်းပြီး နောက်ဆုံး တွက်ချက်မှု ၅ ခု ပြပါ။",
      "`+/-` (အပေါင်း/အနုတ် လဲ) button ထည့်ပါ။",
      "Keyboard မှာ `c` နှိပ်ရင် clear ဖြစ်အောင် ထည့်ပါ။"
    ],
    hint: "Operator အသစ် ထည့်ရင် `handleKey`, `inputOperator` နဲ့ `switch` သုံးနေရာလုံး ပြင်ဖို့ လိုတယ်။"
  }
});

/* ------------------------------------------------------------
   Practice 04 — ကျောင်းသား CRUD
   ------------------------------------------------------------ */
JSL.lessons.push({
  id: "practice-04",
  chapter: "practice",
  order: 4,
  num: "04",
  title: "ကျောင်းသား မှတ်ပုံတင် (CRUD)",
  subtitle: "Create, Read, Update, Delete — localStorage နှင့် table ကို တွဲသုံးခြင်း",
  minutes: 20,
  level: "အလယ်အလတ်",
  tags: ["CRUD", "localStorage", "form", "table", "delegation"],
  fileName: "04-student-registration.html",
  source: "../practice/04-student-registration.html",
  intro: [
    "CRUD ဆိုတာ Create (ထည့်)၊ Read (ဖတ်/ပြ)၊ Update (ပြင်)၊ Delete (ဖျက်) ဆိုတဲ့ အခြေခံ လုပ်ဆောင်ချက် လေးခုပါ။ ဒေတာ သိမ်းတဲ့ app တိုင်းမှာ ဒီလေးခု ပါတယ်။",
    "ဒီ project မှာ ကျောင်းသား စာရင်းကို `localStorage` မှာ သိမ်းမယ်။ Form နဲ့ ထည့်/ပြင်မယ်။ Table မှာ ပြမယ်။ ဖျက်တဲ့အခါ အတည်ပြုမယ်။ `editingId` တစ်ခုတည်းနဲ့ ထည့်နေတာလား၊ ပြင်နေတာလား ခွဲခြားတယ်။"
  ],
  goals: [
    "Array ကို `localStorage` မှာ သိမ်း/ဖတ် နိုင်မယ်။",
    "Form ကို စစ်ဆေးပြီး ဒေတာ ထည့်နိုင်မယ်။",
    "`editingId` နဲ့ ထည့်ခြင်း/ပြင်ခြင်းကို ခွဲနိုင်မယ်။",
    "Table မှာ Event Delegation နဲ့ ပြင်/ဖျက် လုပ်နိုင်မယ်။",
    "Render လုပ်တိုင်း စာမျက်နှာနဲ့ storage ကို တူညီအောင် ထိန်းနိုင်မယ်။"
  ],
  diagram: {
    type: "cycle",
    title: "CRUD ရဲ့ လည်ပတ်မှု",
    steps: [
      { t: "Create — Form ဖြည့်ပြီး ထည့်", sub: "students.push(newStudent); saveStudents();", tone: 6 },
      { t: "Read — Table မှာ ပြ", sub: "render() က array ကို row တွေ ဖြစ်စေ", tone: 3 },
      { t: "Update — \"ပြင်\" နှိပ်", sub: "editingId = id; form မှာ တန်ဖိုး ပြန်ဖြည့်", tone: 4 },
      { t: "Delete — \"ဖျက်\" နှိပ်", sub: "confirm ပြီး filter နဲ့ ဖယ်", tone: 2 }
    ],
    loopLabel: "ဒေတာ ပြောင်းတိုင်း ပြန် render",
    caption: "ဒေတာ (array) က အမှန်တရား။ စာမျက်နှာ (table) က အဲဒီဒေတာရဲ့ ပုံရိပ်။ ဒေတာ ပြောင်းတိုင်း render ပြန်လုပ်ရတယ်။"
  },
  sections: [
    {
      h: "၁။ ဒေတာ သိမ်းခြင်းနှင့် ပြခြင်း",
      p: "`students` array ကို အပေါ်ဆုံးမှာ ဖတ်ထားတယ်။ ပြောင်းတိုင်း `saveStudents()` ကို ခေါ်ပြီး `localStorage` ကို update လုပ်တယ်။ `render()` က array ကို table row တွေ ဖြစ်စေတယ်။",
      code: `const STORAGE_KEY = "students";
let students = loadStudents();
let editingId = null;

function loadStudents() {
  let text = localStorage.getItem(STORAGE_KEY);
  if (text === null) return [];
  return JSON.parse(text);
}

function saveStudents() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
}

function render() {
  tbody.innerHTML = "";
  countEl.textContent = students.length;

  if (students.length === 0) {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.colSpan = 6;
    td.textContent = "ကျောင်းသား မရှိသေးပါ";
    tr.append(td);
    tbody.append(tr);
    return;
  }

  let fragment = document.createDocumentFragment();

  students.forEach((student, index) => {
    let tr = document.createElement("tr");
    // ... cell တွေ ဆောက် ...
    fragment.append(tr);
  });

  tbody.append(fragment);
}`,
      lang: "js",
      file: "04-student-registration.html",
      lines: [
        { n: "2", t: "စာမျက်နှာ ဖွင့်တာနဲ့ storage ကနေ ဒေတာ ဖတ်တယ်။" },
        { n: "4-8", t: "Key မရှိရင် ဗလာ array ပြန်တယ်။ ရှိရင် `JSON.parse` လုပ်တယ်။" },
        { n: "10-12", t: "ဒေတာ ပြောင်းတိုင်း ဒီ function ကို ခေါ်ရမယ်။" },
        { n: "14-20", t: "အဟောင်း row တွေ ရှင်းပြီး အရေအတွက် ပြတယ်။" },
        { n: "30-34", t: "`DocumentFragment` ထဲ စုပြီး တစ်ခါတည်း ထည့်တာက ပိုမြန်တယ်။" }
      ],
      tip: {
        type: "key",
        title: "ဒေတာ ပြောင်းတိုင်း save + render",
        text: "Array ကို ပြင်ပြီးတိုင်း `saveStudents()` နဲ့ `render()` ကို တွဲခေါ်ပါ။ တစ်ခု မေ့ကျန်ရင် စာမျက်နှာနဲ့ storage မတူတော့ဘူး။"
      }
    },
    {
      h: "၂။ ထည့်ခြင်းနှင့် ပြင်ခြင်း",
      p: "Form submit ဖြစ်တဲ့အခါ အရင် စစ်ဆေးတယ်။ `editingId` မရှိရင် အသစ် ထည့်တယ်။ ရှိရင် အဲဒီ id ရှိတဲ့ ကျောင်းသားကို ပြင်တယ်။ ပြီးရင် form ကို ပြန်ရှင်းတယ်။",
      code: `form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!validate()) return;

  let data = {
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
    phone: phoneInput.value.trim(),
    year: yearInput.value
  };

  if (editingId === null) {
    students.push({ id: Date.now(), ...data });
    messageEl.textContent = "ထည့်ပြီး";
  } else {
    let student = students.find((s) => s.id === editingId);
    Object.assign(student, data);
    messageEl.textContent = "ပြင်ပြီး";
  }

  saveStudents();
  render();
  resetForm();
});

function resetForm() {
  form.reset();
  editingId = null;
  formTitle.textContent = "ကျောင်းသား အသစ် ထည့်";
  submitBtn.textContent = "ထည့်ပါ";
  cancelBtn.classList.add("hidden");
}`,
      lang: "js",
      file: "04-student-registration.html",
      lines: [
        { n: 1-2, t: "Form ရဲ့ default submit (page reload) ကို တားတယ်။" },
        { n: 4, t: "စစ်ဆေးမှု မအောင်ရင် ဒီနေရာမှာ ရပ်တယ်။" },
        { n: "6-11", t: "Input တန်ဖိုးတွေကို object အဖြစ် စုတယ်။ `trim()` က မလိုအပ်တဲ့ နေရာလွတ် ဖယ်တယ်။" },
        { n: "13-20", t: "`editingId` မရှိရင် အသစ်၊ ရှိရင် ရှိပြီးသား object ကို ပြင်တယ်။" },
        { n: "22-24", t: "ပြောင်းလဲမှုကို သိမ်း၊ ပြ၊ form ရှင်းတယ်။" }
      ],
      tip: {
        type: "info",
        title: "id အတွက် Date.now()",
        text: "`Date.now()` က လက်ရှိ အချိန်ကို မီလီစစက္ကန့်နဲ့ ပြန်တယ်။ ဒေတာ အသစ်တိုင်း မတူတဲ့ id ရဖို့ လွယ်တဲ့ နည်းလမ်းပါ။ တကယ့် app ကြီးတွေမှာ UUID ကို သုံးတယ်။"
      }
    },
    {
      h: "၃။ ပြင်ခြင်း စတင်ခြင်းနှင့် ဖျက်ခြင်း",
      p: "Table ထဲက \"ပြင်\" နှိပ်ရင် အဲဒီကျောင်းသားရဲ့ ဒေတာကို form ထဲ ပြန်ဖြည့်ပြီး `editingId` ကို သတ်မှတ်တယ်။ \"ဖျက်\" နှိပ်ရင် `confirm()` နဲ့ အတည်ပြုပြီး `filter` နဲ့ ဖယ်တယ်။",
      code: `function startEdit(id) {
  let student = students.find((s) => s.id === id);
  if (!student) return;

  editingId = id;

  nameInput.value = student.name;
  emailInput.value = student.email;
  phoneInput.value = student.phone;
  yearInput.value = student.year;

  formTitle.textContent = "ကျောင်းသား ပြင်မယ်";
  submitBtn.textContent = "သိမ်းမယ်";
  cancelBtn.classList.remove("hidden");

  nameInput.focus();
}

function deleteStudent(id) {
  let ok = confirm("ဖျက်မှာ သေချာလား?");
  if (!ok) return;

  students = students.filter((s) => s.id !== id);

  if (editingId === id) {
    resetForm();
  }

  saveStudents();
  render();
}

tbody.addEventListener("click", (event) => {
  let editBtn = event.target.closest(".edit-btn");
  let delBtn = event.target.closest(".delete-btn");

  if (editBtn) {
    startEdit(Number(editBtn.dataset.id));
    return;
  }

  if (delBtn) {
    deleteStudent(Number(delBtn.dataset.id));
  }
});`,
      lang: "js",
      file: "04-student-registration.html",
      lines: [
        { n: "1-15", t: "`editingId` သတ်မှတ်ပြီး ဒေတာကို form ထဲ ပြန်ဖြည့်တယ်။ Button စာသားတွေလည်း ပြောင်းတယ်။" },
        { n: "18-29", t: "အတည်ပြုပြီးမှ `filter` နဲ့ ဖယ်တယ်။ ဖျက်နေတဲ့ဟာကို ပြင်နေရင် form ပြန်ရှင်းတယ်။" },
        { n: "31-42", t: "Table တစ်ခုတည်းမှာ listener တပ်ပြီး button ကို `closest` နဲ့ ရှာတယ်။" }
      ],
      tip: {
        type: "warn",
        title: "ဖျက်ခြင်းကို အတည်ပြုပါ",
        text: "`confirm()` မပါဘဲ ဖျက်ရင် မတော်တဆ နှိပ်မိတာနဲ့ ဒေတာ ပျက်နိုင်တယ်။ အနည်းဆုံး အတည်ပြုချက် တစ်ဆင့် ထည့်ပါ။"
      }
    }
  ],
  pitfalls: [
    { t: "Page reload ဖြစ်သွားတယ်", d: "Form submit event မှာ `event.preventDefault()` ကို ခေါ်ပါ။" },
    { t: "ပြင်ပြီးရင် form မရှင်းဘူး", d: "သိမ်းပြီးတိုင်း `resetForm()` ကို ခေါ်ပါ။ `editingId` ကို `null` ပြန်ထားပါ။" },
    { t: "id က string နဲ့ ဂဏန်း မတူဘူး", d: "`dataset.id` က string ပြန်တယ်။ `Number()` နဲ့ ပြောင်းပြီးမှ `find` / `filter` လုပ်ပါ။" },
    { t: "Storage နဲ့ စာမျက်နှာ မတူဘူး", d: "ဒေတာ ပြောင်းတိုင်း `saveStudents()` နဲ့ `render()` ကို အတူတူ ခေါ်ပါ။" }
  ],
  recap: [
    "CRUD က Create, Read, Update, Delete လေးခု။",
    "`editingId` က ထည့်နေတာလား ပြင်နေတာလား ခွဲပေးတယ်။",
    "ဒေတာ ပြောင်းတိုင်း `saveStudents()` + `render()` ခေါ်တယ်။",
    "Table မှာ Event Delegation သုံးပြီး button တွေ ကိုင်တွယ်တယ်။",
    "ဖျက်ခြင်းကို `confirm()` နဲ့ အတည်ပြုတယ်။"
  ],
  exercise: {
    title: "ကိုယ်တိုင် စမ်းကြည့်ပါ",
    steps: [
      "အီးမေးလ် ထပ်နေတဲ့ ကျောင်းသား မထည့်နိုင်အောင် စစ်ပါ။",
      "နာမည်နဲ့ ရှာနိုင်တဲ့ search box ထည့်ပါ။",
      "ကျောင်းသား အရေအတွက်ကို year အလိုက် ခွဲပြပါ။",
      "ဖျက်တဲ့အခါ `confirm()` အစား modal ကို သုံးပါ။"
    ],
    hint: "Search အတွက် `students.filter((s) => s.name.includes(keyword))` လို စစ်ပြီး ရလဒ်ကို render လုပ်ပါ။"
  }
});

/* ------------------------------------------------------------
   Practice 05 — IT Shop
   ------------------------------------------------------------ */
JSL.lessons.push({
  id: "practice-05",
  chapter: "practice",
  order: 5,
  num: "05",
  title: "IT Shop — ဈေးဝယ်ခြင်းတောင်း",
  subtitle: "မျက်နှာနှစ်ခု၊ localStorage cart၊ badge၊ အရေအတွက် ပြောင်းခြင်းနှင့် မှာယူခြင်း",
  minutes: 25,
  level: "အခက်ဆုံး",
  tags: ["e-commerce", "cart", "localStorage", "delegation", "multi-page"],
  fileName: "05-it-shop/index.html",
  sources: [
    { label: "index.html — ပစ္စည်း စာမျက်နှာ", href: "../practice/05-it-shop/index.html" },
    { label: "checkout.html — တောင်း စာမျက်နှာ", href: "../practice/05-it-shop/checkout.html" },
    { label: "script.js — အဓိက ကုဒ်", href: "../practice/05-it-shop/script.js" },
    { label: "style.css — အလှအပ", href: "../practice/05-it-shop/style.css" }
  ],
  intro: [
    "ဒီ project က အခန်း ၁–၆ က သင်ထားတာတွေကို ပေါင်းစပ်ထားတယ်။ ပစ္စည်း စာမျက်နှာနဲ့ checkout စာမျက်နှာ နှစ်ခု ရှိတယ်။ နှစ်ခုလုံးက `script.js` တစ်ဖိုင်တည်းကို သုံးတယ်။",
    "Cart ကို `localStorage` မှာ array အနေနဲ့ သိမ်းတယ်။ ပစ္စည်း ထည့်တိုင်း၊ အရေအတွက် ပြောင်းတိုင်း၊ ဖျက်တိုင်း storage ကို update လုပ်ပြီး badge နဲ့ table ကို ပြန်ပြတယ်။"
  ],
  goals: [
    "မျက်နှာတစ်ခုထက်ပိုတဲ့ site မှာ ကုဒ် မျှဝေသုံးနိုင်မယ်။",
    "Cart ကို array အနေနဲ့ ဒီဇိုင်း ဆွဲနိုင်မယ်။",
    "`localStorage` နဲ့ cart ကို ရေရှည် သိမ်းနိုင်မယ်။",
    "Event Delegation နဲ့ ပစ္စည်း ထည့်/အရေအတွက် ပြောင်း/ဖျက် လုပ်နိုင်မယ်။",
    "မရှိတဲ့ element ကို မထိအောင် null စစ်နိုင်မယ်။"
  ],
  diagram: {
    type: "files",
    title: "Project ရဲ့ ဖိုင် ဖွဲ့စည်းပုံ",
    files: [
      { name: "05-it-shop/", dir: true, depth: 0 },
      { name: "index.html", depth: 1, note: "ပစ္စည်း စာရင်း" },
      { name: "checkout.html", depth: 1, note: "တောင်း + မှာယူ" },
      { name: "script.js", depth: 1, note: "နှစ်မျက်နှာလုံး သုံး" },
      { name: "style.css", depth: 1, note: "အလှအပ" },
      { name: "images/", dir: true, depth: 1, note: "ပစ္စည်း ပုံများ" }
    ],
    caption: "HTML နှစ်ခုက script.js တစ်ခုတည်းကို ချိတ်ထားတယ်။ ဒါကြောင့် မျက်နှာတစ်ခုမှာ မရှိတဲ့ element ကို မထိအောင် စစ်ရတယ်။"
  },
  sections: [
    {
      h: "၁။ Cart ရဲ့ ဒေတာ ပုံစံ",
      p: "Cart က object တွေရဲ့ array ပါ။ Object တစ်ခုစီမှာ `id`, `name`, `price`, `qty` ရှိတယ်။ `getCart()` က storage ကနေ ဖတ်ပြီး မရှိရင် ဗလာ array ပြန်တယ်။ `saveCart()` က ပြန်သိမ်းတယ်။",
      diagram: {
        type: "boxes",
        title: "Cart array ထဲက object တစ်ခု",
        items: [
          { v: "\"1\"", sub: "id", note: "string" },
          { v: "\"Laptop 1\"", sub: "name" },
          { v: "2300000", sub: "price", note: "number" },
          { v: "2", sub: "qty", note: "number" }
        ],
        note: "id က data-* ကနေ string အနေနဲ့ ရတယ်။ price ကို Number() နဲ့ ပြောင်းထားတယ်။"
      },
      code: `const CART_KEY = "it-shop-cart";
const priceFormat = new Intl.NumberFormat("en-US");

function getCart() {
  let text = localStorage.getItem(CART_KEY);
  return text ? JSON.parse(text) : [];
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function cartCount(cart) {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function updateBadge() {
  let badge = document.querySelector("#item-count");
  if (badge === null) return;

  let cart = getCart();
  badge.textContent = cartCount(cart);
}`,
      lang: "js",
      file: "05-it-shop/script.js",
      lines: [
        { n: "1", t: "Storage key ကို constant အနေနဲ့ ထားတာက စာလုံး မှားတာ ကာကွယ်တယ်။" },
        { n: "4-7", t: "`text` မရှိရင် `[]` ပြန်တယ်။ ရှိရင် parse လုပ်တယ်။" },
        { n: "9-11", t: "Cart ကို JSON string အဖြစ် သိမ်းတယ်။" },
        { n: "13-15", t: "`reduce` က qty တွေကို ပေါင်းပြီး စုစုပေါင်း အရေအတွက် ရတယ်။" },
        { n: "17-23", t: "Badge မရှိတဲ့ စာမျက်နှာမှာ error မတက်အောင် `null` စစ်တယ်။" }
      ],
      tip: {
        type: "key",
        title: "getCart / saveCart ကို အလယ်မှာ ထားပါ",
        text: "Storage ကို တိုက်ရိုက် ခေါ်တာကို တစ်နေရာတည်း စုထားရင် နောက်မှ sessionStorage ပြောင်းချင်တာလို အခြေအနေမှာ တစ်နေရာတည်း ပြင်ရုံပါပဲ။"
      }
    },
    {
      h: "၂။ ပစ္စည်း ထည့်ခြင်းနှင့် Badge",
      p: "ပစ္စည်း ထည့်တဲ့ button တိုင်းမှာ `data-id`, `data-name`, `data-price` ရှိတယ်။ Grid မှာ listener တစ်ခုတည်း တပ်ပြီး `closest(\".add-to-cart\")` နဲ့ button ကို ရှာတယ်။ id တူတဲ့ ပစ္စည်း ရှိပြီးသားဆိုရင် qty တိုးတယ်။",
      code: `let grid = document.querySelector("#product-grid");

if (grid !== null) {
  grid.addEventListener("click", (event) => {
    let btn = event.target.closest(".add-to-cart");
    if (!btn) return;

    let id = btn.dataset.id;
    let name = btn.dataset.name;
    let price = Number(btn.dataset.price);

    addToCart(id, name, price);
  });
}

function addToCart(id, name, price) {
  let cart = getCart();
  let existing = cart.find((item) => item.id === id);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id, name, price, qty: 1 });
  }

  saveCart(cart);
  updateBadge();
  showToast(name + " ကို တောင်းထဲ ထည့်ပြီး");
}`,
      lang: "js",
      file: "05-it-shop/script.js",
      lines: [
        { n: "3-14", t: "Grid တစ်ခုတည်းမှာ listener တပ်တယ်။ Button တစ်ခုချင်းစီအတွက် မလိုဘူး။" },
        { n: 10, t: "`dataset.price` က string ပြန်တာမို့ `Number()` နဲ့ ပြောင်းတယ်။" },
        { n: "17-25", t: "id တူတာ ရှိရင် qty တိုး၊ မရှိရင် object အသစ် ထည့်တယ်။" },
        { n: "27-29", t: "သိမ်း၊ badge ပြ၊ toast ပြ။ ဒီသုံးခုကို အတူတူ ခေါ်တယ်။" }
      ]
    },
    {
      h: "၃။ Checkout — အရေအတွက် ပြောင်းခြင်းနှင့် ဖျက်ခြင်း",
      p: "Checkout မှာ cart ကို table အနေနဲ့ ပြတယ်။ `+`/`−` နှိပ်တိုင်း `changeQty` ကို ခေါ်တယ်။ qty က ၀ ဖြစ်ရင် cart ထဲက ဖယ်တယ်။ \"ဖျက်\" နှိပ်ရင် `filter` နဲ့ ဖယ်တယ်။",
      code: `function changeQty(id, delta) {
  let cart = getCart();
  let item = cart.find((entry) => entry.id === id);

  if (!item) return;

  item.qty += delta;

  if (item.qty <= 0) {
    cart = cart.filter((entry) => entry.id !== id);
  }

  saveCart(cart);
  updateBadge();
  renderCart();
}

let cartBody = document.querySelector("#cart-body");

if (cartBody !== null) {
  cartBody.addEventListener("click", (event) => {
    let plusBtn = event.target.closest(".plus");
    let minusBtn = event.target.closest(".minus");
    let removeBtn = event.target.closest(".remove");

    if (plusBtn) return changeQty(plusBtn.dataset.id, 1);
    if (minusBtn) return changeQty(minusBtn.dataset.id, -1);
    if (removeBtn) removeItem(removeBtn.dataset.id);
  });
}`,
      lang: "js",
      file: "05-it-shop/script.js",
      lines: [
        { n: "2-4", t: "Cart ကို ဖတ်ပြီး id နဲ့ item ကို ရှာတယ်။" },
        { n: "8-10", t: "qty က ၀ ဒါမှမဟုတ် အနုတ် ဖြစ်ရင် array ကနေ ဖယ်တယ်။" },
        { n: "12-14", t: "ပြောင်းလဲမှုကို သိမ်း၊ badge နဲ့ table ကို ပြန်ပြတယ်။" },
        { n: "19-29", t: "Table တစ်ခုတည်းမှာ listener တပ်ပြီး `+`, `−`, ဖျက် သုံးမျိုးကို ခွဲတယ်။" }
      ],
      tip: {
        type: "warn",
        title: "localStorage.clear() ကို မသုံးပါနဲ့",
        text: "မှာယူပြီးရင် cart ကိုပဲ ဖျက်ချင်တယ်။ `localStorage.clear()` က site ရဲ့ key အားလုံးကို ဖျက်တယ်။ `localStorage.removeItem(CART_KEY)` ကို သုံးပါ။"
      }
    },
    {
      h: "၄။ မှာယူခြင်းနှင့် Null Guard",
      p: "Checkout မှာ \"မှာယူမယ်\" နှိပ်ရင် cart ဗလာ ဟုတ်မဟုတ် စစ်တယ်။ `confirm()` နဲ့ အတည်ပြုပြီး cart ကို ဖျက်တယ်။ Script ကို မျက်နှာ နှစ်ခုလုံး သုံးတာမို့ မရှိတဲ့ element ကို မထိအောင် `if (el !== null)` စစ်ရတယ်။",
      code: `let orderBtn = document.querySelector("#order-btn");

if (orderBtn !== null) {
  orderBtn.addEventListener("click", () => {
    let cart = getCart();

    if (cart.length === 0) {
      showToast("တောင်းထဲမှာ ပစ္စည်း မရှိပါ");
      return;
    }

    let ok = confirm("မှာယူမှာ သေချာလား?");
    if (!ok) return;

    localStorage.removeItem(CART_KEY);

    updateBadge();
    renderCart();

    let message = document.querySelector("#order-message");
    if (message) {
      message.textContent = "✅ မှာယူပြီးပါပြီ။ ကျေးဇူးတင်ပါတယ်!";
    }

    showToast("မှာယူပြီးပါပြီ");
  });
}

updateBadge();
renderCart();`,
      lang: "js",
      file: "05-it-shop/script.js",
      lines: [
        { n: "3-6", t: "Button မရှိတဲ့ index.html မှာ listener မတပ်ဖို့ စစ်တယ်။" },
        { n: "8-11", t: "Cart ဗလာရင် မှာယူလို့ မရဘူး။" },
        { n: "13-14", t: "အတည်ပြုချက် မရရင် ရပ်တယ်။" },
        { n: 16, t: "Cart key ကိုပဲ ဖျက်တယ်။ `clear()` မဟုတ်ဘူး။" },
        { n: "18-27", t: "Badge/table ပြန်ပြ၊ အောင်မြင်စာ ပြတယ်။" },
        { n: "30-31", t: "မျက်နှာ ဖွင့်တိုင်း badge နဲ့ cart ကို အစပြန်ပြတယ်။" }
      ],
      tip: {
        type: "info",
        title: "Multi-page script ရဲ့ အဓိက စည်းမျဉ်း",
        text: "မျက်နှာတစ်ခုမှာ မရှိတဲ့ element ကို ခေါ်ရင် `null` ရတယ်။ `addEventListener` ကို `null` မှာ ခေါ်ရင် error တက်တယ်။ ဒါကြောင့် element ကို အရင်ရှာ၊ `null` မဟုတ်မှ listener တပ်ပါ။"
      }
    }
  ],
  pitfalls: [
    { t: "မရှိတဲ့ element မှာ listener တပ်တယ်", d: "`index.html` မှာ cart table မရှိဘူး။ `let tbody = document.querySelector(\"#cart-body\"); if (tbody === null) return;` လို စစ်ပါ။" },
    { t: "dataset က string ပြန်တာကို မေ့နေတယ်", d: "`data-price` က string။ `Number(btn.dataset.price)` လို့ ပြောင်းပါ။" },
    { t: "localStorage.clear() သုံးမိတယ်", d: "တခြား key တွေပါ ပျက်မယ်။ `removeItem(CART_KEY)` ကို သုံးပါ။" },
    { t: "Badge က စာမျက်နှာ နှစ်ခုမှာ မတူဘူး", d: "Storage ပြောင်းတိုင်း `updateBadge()` ကို ခေါ်ပါ။ မျက်နှာ ဖွင့်တိုင်းလည်း တစ်ခါ ခေါ်ပါ။" },
    { t: "Cart ထဲမှာ qty ၀ ပါနေတယ်", d: "`qty <= 0` ဖြစ်ရင် `filter` နဲ့ ဖယ်ပါ။" }
  ],
  recap: [
    "Cart ကို object array အနေနဲ့ `localStorage` မှာ သိမ်းတယ်။",
    "`getCart` / `saveCart` ကို တစ်နေရာတည်း စုထားတယ်။",
    "Grid နဲ့ table နှစ်ခုလုံးမှာ Event Delegation သုံးတယ်။",
    "မျက်နှာ နှစ်ခု သုံးတဲ့ script မှာ element မရှိရင် `null` စစ်ရတယ်။",
    "မှာယူပြီးရင် cart key ကိုပဲ `removeItem` လုပ်တယ်။"
  ],
  exercise: {
    title: "ကိုယ်တိုင် စမ်းကြည့်ပါ",
    steps: [
      "ပစ္စည်း အသစ် တစ်ခု ထည့်ပြီး badge နဲ့ cart မှာ မှန်မှန် ပေါ်လား စမ်းပါ။",
      "`+` ကို နှိပ်ပြီး qty ၂ ဖြစ်တာနဲ့ စုစုပေါင်း ဈေးနှုန်း မှန်မှန် တွက်လား စစ်ပါ။",
      "`−` ကို ဆက်နှိပ်ပြီး qty ၀ ဖြစ်ရင် item ပျောက်တာ ကြည့်ပါ။",
      "Page refresh လုပ်ပြီး cart ကျန်သေးလား စမ်းပါ။",
      "မှာယူပြီးရင် တခြား localStorage key တွေ မပျက်အောင် စမ်းပါ။"
    ],
    hint: "DevTools → Application → Local Storage မှာ `it-shop-cart` ရဲ့ တန်ဖိုးကို တိုက်ရိုက် ကြည့်နိုင်တယ်။"
  }
});

/* ------------------------------------------------------------
   Practice 06 — မင်းငါ့ကို ချစ်လား?
   ------------------------------------------------------------ */
JSL.lessons.push({
  id: "practice-06",
  chapter: "practice",
  order: 6,
  num: "06",
  title: "မင်းငါ့ကို ချစ်လား? — Fun Project",
  subtitle: "နှလုံးသား animation၊ လျှောက်ပြေးတဲ့ button နှင့် အဆင့်ဆင့် အောင်ပွဲ",
  minutes: 15,
  level: "ပျော်စရာ",
  tags: ["fun", "animation", "Math.random", "mouseenter", "setTimeout"],
  fileName: "06-fun-project.html",
  source: "../practice/06-fun-project.html",
  intro: [
    "ဒီ project က ပျော်စရာ လုပ်ထားပေမယ့် နောက်ကွယ်မှာ အသုံးဝင်တဲ့ နည်းစနစ်တွေ ပါတယ်။ နှလုံးသားတွေကို ကျပန်း အနေအထား၊ အရွယ်၊ အမြန်နဲ့ ဆောက်တယ်။ \"မချစ်ဘူး\" button က နှိပ်မရအောင် လျှောက်ပြေးတယ်။ \"ချစ်တယ်\" ကို ငါးချက် နှိပ်ရင် အောင်ပွဲ ပြတယ်။",
    "ဒီမှာ အဓိက သတိထားရမှာက **element တွေ စုပုံမနေအောင် ဖျက်တာ** နဲ့ **button ကို မျက်နှာပြင်အတွင်းမှာပဲ ရွှေ့တာ** ပါ။"
  ],
  goals: [
    "`Math.random()` နဲ့ ကျပန်း animation တန်ဖိုး ဖန်တီးနိုင်မယ်။",
    "`setTimeout` / `setInterval` နဲ့ အချိန်နဲ့ element ဆောက်နိုင်မယ်။",
    "`getBoundingClientRect()` နဲ့ element ရဲ့ အရွယ်ကို ယူနိုင်မယ်။",
    "`mouseenter` / `touchstart` event ကို ကိုင်တွယ်နိုင်မယ်။",
    "အသုံးပြုပြီးတဲ့ element တွေ ဖျက်နိုင်မယ်။"
  ],
  diagram: {
    type: "timeline",
    title: "ဂိမ်း ရဲ့ အချိန် အစီအစဉ်",
    items: [
      { t: "0s", title: "နှလုံးသားတွေ စဆောက်", sub: "setInterval(createHeart, 400) + အစ ၈ ခု", tone: 6 },
      { t: "0–5s", title: "\"မချစ်ဘူး\" ကို မီရင် လျှောက်ပြေး", sub: "mouseenter / touchstart → runAway()", tone: 3 },
      { t: "5s", title: "\"ချစ်တယ်\" ၅ ချက် ပြည့်", sub: "button ကြီးလာပြီး အောင်ပွဲ ပြ", tone: 4 },
      { t: "7s", title: "နှလုံးသား အဟောင်း ဖျက်", sub: "setTimeout(() => heart.remove(), 7000)", tone: 2 }
    ],
    caption: "နှလုံးသား တစ်ခုစီက ၇ စက္ကန့် အသက်ရှင်တယ်။ မဖျက်ရင် DOM ထဲမှာ အမြဲ တိုးလာမယ်။"
  },
  sections: [
    {
      h: "၁။ နှလုံးသား ဆောက်ခြင်း",
      p: "`createHeart()` က div တစ်ခု ဆောက်ပြီး emoji ကျပန်း၊ ဘယ်ညာ အနေအထား ကျပန်း၊ အရွယ် ကျပန်း၊ animation ကြာချိန် ကျပန်း သတ်မှတ်တယ်။ ပြီးရင် ၇ စက္ကန့်နောက် ဖျက်တယ်။",
      code: `const hearts = document.getElementById("hearts");
const emojis = ["❤️", "💖", "💝", "💕", "💗"];

function createHeart() {
  let heart = document.createElement("div");
  heart.className = "heart";

  let index = Math.floor(Math.random() * emojis.length);
  heart.textContent = emojis[index];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (Math.random() * 20 + 15) + "px";
  heart.style.animationDuration = (Math.random() * 3 + 4) + "s";

  hearts.append(heart);

  setTimeout(() => heart.remove(), 7000);
}

setInterval(createHeart, 400);

for (let i = 0; i < 8; i++) {
  setTimeout(createHeart, i * 120);
}`,
      lang: "js",
      file: "06-fun-project.html",
      lines: [
        { n: "4-5", t: "Element တစ်ခု ဆောက်ပြီး class ပေးတယ်။ CSS က animation ကို လုပ်မယ်။" },
        { n: "7-8", t: "Emoji array ထဲက ကျပန်း တစ်ခု ရွေးတယ်။" },
        { n: "10-12", t: "`left`, `fontSize`, `animationDuration` ကို ကျပန်း သတ်မှတ်တယ်။ `vw` က viewport width ရဲ့ ရာခိုင်နှုန်း။" },
        { n: "14-16", t: "နှလုံးသား ကို ထည့်ပြီး ၇ စက္ကန့်နောက် ဖျက်တယ်။" },
        { n: "19-23", t: "၀.၄ စက္ကန့်တိုင်း အသစ် ဆောက်ပြီး အစမှာ ၈ ခု ချက်ချင်း ဆောက်တယ်။" }
      ],
      tip: {
        type: "warn",
        title: "Element တွေ မဖျက်ရင် စုပုံလာမယ်",
        text: "`setInterval` က အမြဲ ဆောက်နေတယ်။ `heart.remove()` မပါရင် မိနစ်အနည်းငယ်အတွင်း element ရာနဲ့ချီ ဖြစ်လာပြီး စာမျက်နှာ လေးလာမယ်။"
      }
    },
    {
      h: "၂။ လျှောက်ပြေးတဲ့ Button",
      p: "`getBoundingClientRect()` က button ရဲ့ အကျယ်/အမြင့်ကို ယူတယ်။ မျက်နှာပြင် အရွယ်ထဲမှာ ကျပန်း x, y ရွေးပြီး `position: fixed` နဲ့ ရွှေ့တယ်။ Mouse နဲ့ touch နှစ်မျိုးလုံးအတွက် လုပ်တယ်။",
      code: `function runAway() {
  let rect = noBtn.getBoundingClientRect();

  let maxX = window.innerWidth - rect.width - 20;
  let maxY = window.innerHeight - rect.height - 20;

  let x = Math.random() * Math.max(maxX, 0);
  let y = Math.random() * Math.max(maxY, 0);

  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
  noBtn.style.margin = "0";
  noBtn.style.zIndex = "50";
}

noBtn.addEventListener("mouseenter", runAway);
noBtn.addEventListener("click", runAway);

noBtn.addEventListener("touchstart", (event) => {
  event.preventDefault();
  runAway();
}, { passive: false });`,
      lang: "js",
      file: "06-fun-project.html",
      lines: [
        { n: "2-5", t: "Button အရွယ်ကို ယူပြီး မျက်နှာပြင် ဘောင်အတွင်း ရွှေ့နိုင်တဲ့ အများဆုံး x, y ကို တွက်တယ်။" },
        { n: "7-8", t: "`Math.max(maxX, 0)` က မျက်နှာပြင် အလွန်သေးရင် အနုတ် မဖြစ်အောင် ကာကွယ်တယ်။" },
        { n: "10-14", t: "`fixed` က viewport နဲ့ တွဲထားတာမို့ scroll လုပ်လည်း အနေအထား မပြောင်းဘူး။" },
        { n: "17-23", t: "Mouse ဝင်တာနဲ့ နှိပ်တာ နှစ်မျိုးလုံး လျှောက်ပြေးတယ်။ Touch အတွက် `preventDefault` ပါတယ်။" }
      ],
      tip: {
        type: "info",
        title: "getBoundingClientRect က အရွယ်နှင့် အနေအထား",
        text: "`rect.width`, `rect.height` က အပြင်အလျား/အမြင့်။ `rect.left`, `rect.top` က viewport ကနေ အကွာအဝေး။ Button ကို မျက်နှာပြင် ပြင်ပ မရောက်အောင် ဒီတန်ဖိုးတွေ သုံးတယ်။"
      }
    },
    {
      h: "၃။ \"ချစ်တယ်\" ငါးချက်နှင့် အောင်ပွဲ",
      p: "`clickCount` ကို တိုးပြီး အဆင့်ဆင့် ပြောင်းတယ်။ ၂ ချက်မှာ \"မချစ်ဘူး\" ကို ဖျောက်တယ်။ ၅ ချက်မှာ button ကို ကြီးစေပြီး အောင်ပွဲ စာမျက်နှာ ပြတယ်။",
      code: `let clickCount = 0;

yesBtn.addEventListener("click", () => {
  clickCount++;

  if (clickCount < 5) {
    let scale = 1 + clickCount * 0.6;
    yesBtn.style.transform = "scale(" + scale + ")";

    if (clickCount >= 2) {
      noBtn.classList.add("hidden");
      question.style.opacity = String(1 - clickCount * 0.15);
    }

    return;
  }

  if (clickCount === 5) {
    yesBtn.style.position = "fixed";
    yesBtn.style.top = "50%";
    yesBtn.style.left = "50%";
    yesBtn.style.transform = "translate(-50%, -50%) scale(5)";
    yesBtn.style.zIndex = "100";

    setTimeout(() => {
      card.classList.add("fade-out");

      setTimeout(() => {
        yesBtn.remove();
        success.classList.remove("hidden");

        for (let i = 0; i < 60; i++) {
          setTimeout(createHeart, i * 40);
        }
      }, 400);
    }, 200);
  }
});`,
      lang: "js",
      file: "06-fun-project.html",
      lines: [
        { n: "4-14", t: "၅ ချက် မပြည့်ခင် button ကို တဖြည်းဖြည်း ကြီးစေတယ်။ ၂ ချက်မှာ \"မချစ်ဘူး\" ကို ဖျောက်တယ်။" },
        { n: "17-22", t: "၅ ချက်မှာ button ကို မျက်နှာပြင် အလယ် ရွှေ့ပြီး ကြီးစေတယ်။" },
        { n: "24-34", t: "Card ကို ဖျောက်ပြီး ၄၀၀ms နောက် အောင်ပွဲ ပြတယ်။ နှလုံးသား ၆၀ ခု ဆောက်တယ်။" }
      ],
      tip: {
        type: "key",
        title: "အခြေအနေ တစ်ခုတည်းနဲ့ အဆင့်တွေ ခွဲပါ",
        text: "`clickCount` ကို အခြေအနေ အနေနဲ့ သုံးပြီး `if (clickCount < 5)` နဲ့ `=== 5` ကို ခွဲတယ်။ ဒါက animation အဆင့်တွေ ရှင်းရှင်းလင်းလင်း ဖြစ်စေတယ်။"
      }
    }
  ],
  pitfalls: [
    { t: "နှလုံးသား တွေ စုပုံလာတယ်", d: "`setTimeout(() => heart.remove(), 7000)` ကို မမေ့ပါနဲ့။" },
    { t: "Button က မျက်နှာပြင် ပြင်ပ ရောက်သွားတယ်", d: "`maxX`, `maxY` ကို button အရွယ်နဲ့ အနားသတ် ၂၀px နုတ်ပြီး တွက်ပါ။" },
    { t: "Mobile မှာ လျှောက်မပြေးဘူး", d: "`mouseenter` က mobile မှာ မရဘူး။ `touchstart` ကို ထည့်ပြီး `preventDefault()` ကို ခေါ်ပါ။" },
    { t: "အောင်ပွဲ နှစ်ခါ ပေါ်တယ်", d: "`clickCount === 5` ကို တိတိကျကျ စစ်ပါ။ `>= 5` ဆိုရင် ထပ်ခေါ်တိုင်း ထပ်ပေါ်နိုင်တယ်။" }
  ],
  recap: [
    "`Math.random()` နဲ့ အနေအထား၊ အရွယ်၊ အမြန်ကို ကျပန်း ဖန်တီးနိုင်တယ်။",
    "Element တွေကို အချိန်ပြည့်ရင် `remove()` လုပ်ပါ။",
    "`getBoundingClientRect()` နဲ့ မျက်နှာပြင် ဘောင်အတွင်း ရွှေ့နိုင်တယ်။",
    "Mobile အတွက် `touchstart` ကို သီးခြား ထည့်ပါ။",
    "အဆင့်တွေကို `clickCount` နဲ့ ခွဲပါ။"
  ],
  exercise: {
    title: "ကိုယ်တိုင် စမ်းကြည့်ပါ",
    steps: [
      "နှလုံးသား အရေအတွက် ပိုများအောင် `setInterval` ကို ၂၀၀ms ပြောင်းပါ။",
      "\"မချစ်ဘူး\" button က လျှောက်ပြေးတဲ့ အမြန်ကို ပိုမြန်အောင် ပြောင်းပါ။",
      "\"ချစ်တယ်\" ကို ၃ ချက်နဲ့ အောင်ပွဲ ဖြစ်အောင် ပြောင်းပါ။",
      "အောင်ပွဲ စာမျက်နှာမှာ နောက်တစ်ခါ ကစားနိုင်တဲ့ button ထည့်ပါ။"
    ],
    hint: "နောက်တစ်ခါ ကစားရန် page ကို `location.reload()` လုပ်တာ အလွယ်ဆုံးပါ။"
  }
});
