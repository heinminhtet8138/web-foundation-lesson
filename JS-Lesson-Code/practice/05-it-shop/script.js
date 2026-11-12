/* ============================================================
   IT Shop — ဈေးဝယ်ခြင်းတောင်း (Vanilla JavaScript)
   👨‍🏫 ဆရာမှတ်ချက်:
   ဒီဖိုင်ကို index.html နဲ့ checkout.html နှစ်ခုလုံး သုံးတယ်။
   ဒါကြောင့် "ဒီစာမျက်နှာမှာ မရှိတဲ့ element" တွေကို သုံးတဲ့အခါ
   အရင် null ဟုတ်မဟုတ် စစ်ရမယ်။
   ============================================================ */

// 🧑‍🎓 မှတ်ချက်: localStorage မှာ သိမ်းမယ့် key အမည်
const CART_KEY = "it-shop-cart";

// 🧑‍🎓 မှတ်ချက်: ဂဏန်းကို "2,300,000" ပုံစံ ပြဖို့
const priceFormat = new Intl.NumberFormat("en-US");

/* ------------------------------------------------------------
   ၁။ localStorage ဖတ် / သိမ်း
   ------------------------------------------------------------ */

// cart ကို array အဖြစ် ပြန်ပေးတယ်။ မရှိသေးရင် ဗလာ array ပေးတယ်။
function getCart() {
  let text = localStorage.getItem(CART_KEY);

  // 🧑‍🎓 မှတ်ချက်: JSON.parse(null) က null ပြန်တယ်။
  // ဒါကြောင့် မရှိသေးရင် [] ပြန်ဖို့ စစ်ရတယ်။
  return text ? JSON.parse(text) : [];
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

/* ------------------------------------------------------------
   ၂။ Badge (တောင်းထဲက ပစ္စည်း အရေအတွက်)
   ------------------------------------------------------------ */

function cartCount(cart) {
  // 🧑‍🎓 မှတ်ချက်: qty တွေကို ပေါင်းတယ်။ reduce က စုစုပေါင်းအတွက် အကောင်းဆုံး။
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function updateBadge() {
  let badge = document.querySelector("#item-count");
  if (badge === null) return;   // ဒီစာမျက်နှာမှာ badge မရှိရင် ဘာမှ မလုပ်

  let cart = getCart();
  badge.textContent = cartCount(cart);
}

/* ------------------------------------------------------------
   ၃။ Toast (ခဏပြတဲ့ အသိပေးစာ)
   ------------------------------------------------------------ */

let toastTimer = null;

function showToast(text) {
  let toast = document.querySelector("#toast");
  if (toast === null) return;

  toast.textContent = text;
  toast.classList.add("show");

  // 🧑‍🎓 မှတ်ချက်: toast အဟောင်း timer ရှိနေရင် ရပ်ပြီး အသစ် ပြန်စတယ်။
  if (toastTimer !== null) clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 1800);
}

/* ------------------------------------------------------------
   ၄။ Cart ထဲ ထည့်ခြင်း
   ------------------------------------------------------------ */

function addToCart(id, name, price) {
  let cart = getCart();

  // 🧑‍🎓 မှတ်ချက်: id တူတဲ့ ပစ္စည်း ရှိပြီးသားလား ရှာတယ်။
  let existing = cart.find((item) => item.id === id);

  if (existing) {
    // ရှိပြီးသားဆိုရင် အရေအတွက် ၁ တိုး
    existing.qty++;
  } else {
    // မရှိသေးရင် အသစ် ထည့်
    cart.push({
      id: id,
      name: name,
      price: price,
      qty: 1
    });
  }

  saveCart(cart);
  updateBadge();
  showToast(`${name} ကို တောင်းထဲ ထည့်ပြီး`);
}

/* ------------------------------------------------------------
   ၅။ Cart ကို စာမျက်နှာပေါ် ပြခြင်း
   ------------------------------------------------------------ */

function renderCart() {
  let tbody = document.querySelector("#cart-body");
  if (tbody === null) return;   // index.html မှာ cart table မရှိဘူး

  let cart = getCart();
  let totalDisplay = document.querySelector("#cart-total");

  tbody.innerHTML = "";

  // ---- ဗလာ ဖြစ်နေရင် ----
  if (cart.length === 0) {
    let tr = document.createElement("tr");

    let td = document.createElement("td");
    td.colSpan = 6;
    td.className = "empty";
    td.textContent = "တောင်းထဲမှာ ပစ္စည်း မရှိသေးပါ";

    tr.append(td);
    tbody.append(tr);

    if (totalDisplay) totalDisplay.textContent = "0";
    return;
  }

  // ---- ပစ္စည်း တစ်ခုချင်း ----
  let fragment = document.createDocumentFragment();
  let total = 0;

  cart.forEach((item, index) => {
    let amount = item.price * item.qty;
    total += amount;

    let tr = document.createElement("tr");

    // စဉ်
    let noTd = document.createElement("td");
    noTd.textContent = index + 1;

    // ပစ္စည်း အမည်
    let nameTd = document.createElement("td");
    nameTd.textContent = item.name;

    // ဈေးနှုန်း
    let priceTd = document.createElement("td");
    priceTd.textContent = priceFormat.format(item.price);

    // အရေအတွက် (− qty +)
    let qtyTd = document.createElement("td");

    let minusBtn = document.createElement("button");
    minusBtn.className = "qty-btn minus";
    minusBtn.dataset.id = item.id;
    minusBtn.textContent = "−";

    let qtySpan = document.createElement("span");
    qtySpan.className = "qty-value";
    qtySpan.textContent = item.qty;

    let plusBtn = document.createElement("button");
    plusBtn.className = "qty-btn plus";
    plusBtn.dataset.id = item.id;
    plusBtn.textContent = "+";

    qtyTd.append(minusBtn, qtySpan, plusBtn);

    // စုစုပေါင်း
    let amountTd = document.createElement("td");
    amountTd.textContent = priceFormat.format(amount);

    // ဖျက်
    let removeTd = document.createElement("td");

    let removeBtn = document.createElement("button");
    removeBtn.className = "btn danger remove";
    removeBtn.dataset.id = item.id;
    removeBtn.textContent = "ဖျက်";

    removeTd.append(removeBtn);

    tr.append(noTd, nameTd, priceTd, qtyTd, amountTd, removeTd);
    fragment.append(tr);
  });

  tbody.append(fragment);

  if (totalDisplay) {
    totalDisplay.textContent = priceFormat.format(total);
  }
}

/* ------------------------------------------------------------
   ၆။ အရေအတွက် ပြောင်းခြင်း / ဖျက်ခြင်း
   ------------------------------------------------------------ */

function changeQty(id, delta) {
  let cart = getCart();
  let item = cart.find((entry) => entry.id === id);

  if (!item) return;

  item.qty += delta;

  // 🧑‍🎓 မှတ်ချက်: ၀ ဖြစ်သွားရင် တောင်းထဲက ဖျက်ပစ်တယ်။
  if (item.qty <= 0) {
    cart = cart.filter((entry) => entry.id !== id);
  }

  saveCart(cart);
  updateBadge();
  renderCart();
}

function removeItem(id) {
  let cart = getCart();
  cart = cart.filter((item) => item.id !== id);

  saveCart(cart);
  updateBadge();
  renderCart();
  showToast("ပစ္စည်း ဖျက်ပြီး");
}

/* ------------------------------------------------------------
   ၇။ Event တွေ တပ်ခြင်း
   ------------------------------------------------------------ */

// ---- (က) index.html — ပစ္စည်း ထည့်တဲ့ button ----
// 👨‍🏫 ဆရာမှတ်ချက်: ဒါက Event Delegation ပါ။
// Button တစ်ခုချင်းမှာ listener မတပ်ဘဲ grid တစ်ခုတည်းမှာ တပ်တယ်။
let grid = document.querySelector("#product-grid");

if (grid !== null) {
  grid.addEventListener("click", (event) => {
    let btn = event.target.closest(".add-to-cart");
    if (!btn) return;

    let id = btn.dataset.id;
    let name = btn.dataset.name;
    let price = Number(btn.dataset.price);   // dataset က string ပြန်တယ်

    addToCart(id, name, price);
  });
}

// ---- (ခ) checkout.html — qty +/− နဲ့ ဖျက်တဲ့ button ----
let cartBody = document.querySelector("#cart-body");

if (cartBody !== null) {
  cartBody.addEventListener("click", (event) => {
    let plusBtn = event.target.closest(".plus");
    let minusBtn = event.target.closest(".minus");
    let removeBtn = event.target.closest(".remove");

    if (plusBtn) {
      changeQty(plusBtn.dataset.id, 1);
      return;
    }

    if (minusBtn) {
      changeQty(minusBtn.dataset.id, -1);
      return;
    }

    if (removeBtn) {
      removeItem(removeBtn.dataset.id);
    }
  });
}

// ---- (ဂ) checkout.html — မှာယူတဲ့ button ----
let orderBtn = document.querySelector("#order-btn");

if (orderBtn !== null) {
  orderBtn.addEventListener("click", () => {
    let cart = getCart();

    if (cart.length === 0) {
      showToast("တောင်းထဲမှာ ပစ္စည်း မရှိပါ");
      return;
    }

    let ok = confirm("မှာယူမှာ သေချာလား?");
    if (!ok) return;

    // 👨‍🏫 ဆရာမှတ်ချက်: အရင် jQuery code မှာ localStorage.clear('shops') လို့ ရေးထားတဲ့ bug ရှိတယ်။
    // clear() က argument မယူဘူး၊ site တစ်ခုလုံးကို ဖျက်တယ်။
    // ဒီမှာ removeItem() နဲ့ cart ကိုပဲ ဖျက်တယ်။
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

/* ------------------------------------------------------------
   ၈။ စာမျက်နှာ ဖွင့်တာနဲ့ တစ်ခါ run
   ------------------------------------------------------------ */

updateBadge();
renderCart();
