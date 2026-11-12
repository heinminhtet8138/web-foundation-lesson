/* ============================================================
   app.js — routing, rendering, search, progress, theme
   ============================================================ */
(function () {
  "use strict";

  var JSL = window.JSL = window.JSL || {};

  /* ---------------- icons ---------------- */
  var IC = {
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
    left: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>',
    right: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    level: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>',
    file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/></svg>',
    external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>',
    copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
    list: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/></svg>',
    bulb: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1V18h6v-1.2c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2Z"/></svg>',
    code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/></svg>',
    layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/></svg>',
    alert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4M12 17h.01"/></svg>',
    target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>',
    spark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"/><path d="M19 17v4M17 19h4"/></svg>',
    save: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z"/><path d="M17 21v-8H7v8M7 3v5h8"/></svg>',
    pen: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>',
    logo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6 2 12l6 6M16 6l6 6-6 6"/></svg>'
  };

  /* ---------------- state ---------------- */
  var state = {
    lessons: [],
    byId: {},
    chapters: [],
    total: 0,
    done: [],
    searchIndex: [],
    activeLesson: null,
    diagramCount: 0
  };

  var search = { open: false, items: [], active: 0 };
  var toastTimer = null;

  /* ---------------- tiny helpers ---------------- */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function pad(n) { return String(n).padStart(2, "0"); }
  function fmt(text) {
    return esc(text)
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/\n/g, "<br>");
  }
  function paras(p) {
    if (!p) return "";
    var arr = Array.isArray(p) ? p : [p];
    return arr.map(function (t) { return "<p>" + fmt(t) + "</p>"; }).join("");
  }
  function chapterOf(id) {
    return state.chapters.filter(function (c) { return c.id === id; })[0] || null;
  }
  function chapterIndex(id) {
    for (var i = 0; i < state.chapters.length; i++) if (state.chapters[i].id === id) return i;
    return 99;
  }
  function lessonNo(l) { return l.num || pad(l.order || 1); }

  function storageGet(key, fallback) {
    try {
      var v = localStorage.getItem(key);
      return v === null ? fallback : JSON.parse(v);
    } catch (e) { return fallback; }
  }
  function storageSet(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {}
  }

  function toast(msg) {
    var el = $("#toast");
    if (!el) return;
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove("show"); }, 2200);
  }

  /* ---------------- syntax highlight ---------------- */
  function tokenizeJS(code) {
    var re = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|(`(?:\\[\s\S]|[^\\`])*`|"(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*')|\b(const|let|var|function|return|if|else|for|while|do|switch|case|break|continue|new|class|extends|super|this|try|catch|finally|throw|typeof|instanceof|async|await|static|get|set|default|of|in|null|undefined|true|false|NaN|Infinity|delete|void|yield)\b|(\b\d+(?:\.\d+)?\b)|([A-Za-z_$][\w$]*)(?=\s*\()|(\b[A-Z][A-Za-z0-9_$]*\b)/g;
    var out = [], last = 0, m;
    while ((m = re.exec(code)) !== null) {
      if (m.index > last) out.push({ t: "", s: code.slice(last, m.index) });
      var type = m[1] ? "com" : m[2] ? "str" : m[3] ? "kw" : m[4] ? "num" : m[5] ? "fn" : m[6] ? "cls" : "";
      out.push({ t: type, s: m[0] });
      last = m.index + m[0].length;
    }
    if (last < code.length) out.push({ t: "", s: code.slice(last) });
    return out;
  }

  function tokenizeHTML(code) {
    var re = /<!--[\s\S]*?-->|<\/?[A-Za-z][^>]*>|[^<]+/g;
    var out = [], m;
    while ((m = re.exec(code)) !== null) {
      var s = m[0];
      if (s.slice(0, 4) === "<!--") { out.push({ t: "com", s: s }); continue; }
      if (s.charAt(0) !== "<") { out.push({ t: "", s: s }); continue; }

      var tm = s.match(/^(<\/?)([A-Za-z][\w-]*)([\s\S]*?)(\/?>)$/);
      if (!tm) { out.push({ t: "tag", s: s }); continue; }
      out.push({ t: "punc", s: tm[1] });
      out.push({ t: "tag", s: tm[2] });
      var rest = tm[3];
      var ar = /(\s+)|([^\s=]+)(\s*=\s*)("[^"]*"|'[^']*'|[^\s>]+)|([^\s]+)/g, am;
      while ((am = ar.exec(rest)) !== null) {
        if (am[1]) out.push({ t: "", s: am[1] });
        else if (am[2]) {
          out.push({ t: "attr", s: am[2] });
          out.push({ t: "punc", s: am[3] });
          out.push({ t: "str", s: am[4] });
        } else out.push({ t: "", s: am[5] });
      }
      out.push({ t: "punc", s: tm[4] });
    }
    return out;
  }

  function tokenizeCSS(code) {
    var re = /(\/\*[\s\S]*?\*\/)|(@[\w-]+)|("[^"]*"|'[^']*')|(#[0-9a-fA-F]{3,8}\b)|(\b\d+(?:\.\d+)?(?:px|rem|em|%|s|ms|vh|vw|deg|fr)?\b)|([A-Za-z-]+)(?=\s*:)|([.#]?[A-Za-z][\w-]*)(?=\s*[{,])/g;
    var out = [], last = 0, m;
    while ((m = re.exec(code)) !== null) {
      if (m.index > last) out.push({ t: "", s: code.slice(last, m.index) });
      var type = m[1] ? "com" : m[2] ? "kw" : (m[3] || m[4]) ? "str" : m[5] ? "num" : m[6] ? "attr" : "tag";
      out.push({ t: type, s: m[0] });
      last = m.index + m[0].length;
    }
    if (last < code.length) out.push({ t: "", s: code.slice(last) });
    return out;
  }

  function highlightLines(code, lang) {
    var toks;
    if (lang === "html") toks = tokenizeHTML(code);
    else if (lang === "css") toks = tokenizeCSS(code);
    else toks = tokenizeJS(code);

    var lines = [], cur = "";
    toks.forEach(function (tok) {
      var parts = tok.s.split("\n");
      parts.forEach(function (part, i) {
        if (part) {
          cur += tok.t ? '<span class="tok-' + tok.t + '">' + esc(part) + "</span>" : esc(part);
        }
        if (i < parts.length - 1) { lines.push(cur); cur = ""; }
      });
    });
    lines.push(cur);
    return lines;
  }

  function codeCard(code, lang, file, cid) {
    lang = lang || "js";
    var lines = highlightLines(String(code || "").replace(/\t/g, "  "), lang);
    var rows = lines.map(function (html, i) {
      return '<span class="cl" data-line="' + (i + 1) + '"><span class="ln">' + (i + 1) + '</span><span class="lc">' + (html || "") + "</span></span>";
    }).join("");
    return '<div class="code-card" id="code-' + cid + '">' +
      '<div class="code-head"><span class="dots"><span></span><span></span><span></span></span>' +
      '<span class="code-file">' + esc(file || "script.js") + "</span>" +
      '<span class="code-lang">' + esc(lang) + "</span>" +
      '<button class="copy-btn" data-copy type="button" aria-label="ကုဒ် ကူးယူ">' + IC.copy + "<span>ကူးမယ်</span></button></div>" +
      '<div class="code-body"><pre class="code-pre"><code>' + rows + "</code></pre></div>" +
      "</div>";
  }

  function lineNotes(lines, cid) {
    if (!lines || !lines.length) return "";
    var rows = lines.map(function (ln) {
      return '<button class="line-note" type="button" data-code="' + cid + '" data-line="' + esc(ln.n) + '">' +
        '<span class="ln-badge">' + esc(ln.n) + "</span>" +
        '<span class="txt">' + fmt(ln.t) + "</span></button>";
    }).join("");
    return '<div class="line-notes"><div class="line-notes-head">' + IC.list +
      "<span>ကုဒ် မျဉ်းကြောင်း တစ်ကြောင်းချင်း ရှင်းလင်းချက် — နှိပ်ကြည့်ပါ</span></div>" + rows + "</div>";
  }

  function callout(tip) {
    if (!tip) return "";
    if (typeof tip === "string") tip = { text: tip };
    var type = tip.type || "tip";
    var ico = type === "warn" ? IC.alert : type === "info" ? IC.bulb : type === "key" ? IC.target : IC.bulb;
    return '<div class="callout ' + type + '"><span class="ico">' + ico + "</span><div>" +
      (tip.title ? '<span class="ttl">' + esc(tip.title) + "</span>" : "") +
      "<p>" + fmt(tip.text) + "</p></div></div>";
  }

  /* ---------------- data init ---------------- */
  function initData() {
    state.chapters = (JSL.chapters || []).slice();
    state.lessons = (JSL.lessons || []).slice();
    state.lessons.sort(function (a, b) {
      return chapterIndex(a.chapter) - chapterIndex(b.chapter) || (a.order || 0) - (b.order || 0);
    });
    state.byId = {};
    state.lessons.forEach(function (l) { state.byId[l.id] = l; });
    state.total = state.lessons.length || JSL.totalLessons || 0;
    state.done = storageGet("jsl-progress", []);
    if (!Array.isArray(state.done)) state.done = [];

    state.searchIndex = state.lessons.map(function (l) {
      var ch = chapterOf(l.chapter);
      var parts = [l.title, l.subtitle || "", l.intro || "", (l.tags || []).join(" "), ch ? ch.title : ""];
      (l.sections || []).forEach(function (s) {
        parts.push(s.h || "");
        parts.push((Array.isArray(s.p) ? s.p.join(" ") : (s.p || "")));
        parts.push(s.code || "");
        if (s.tip) parts.push(typeof s.tip === "string" ? s.tip : (s.tip.text || ""));
      });
      return { id: l.id, hay: parts.join(" ").toLowerCase() };
    });

    state.diagramCount = 0;
    state.lessons.forEach(function (l) {
      if (l.diagram) state.diagramCount++;
      (l.sections || []).forEach(function (s) { if (s.diagram) state.diagramCount++; });
    });

    state.activeLesson = null;
  }

  function isDone(id) { return state.done.indexOf(id) !== -1; }

  function markDone(id, done) {
    var i = state.done.indexOf(id);
    if (done && i === -1) state.done.push(id);
    if (!done && i !== -1) state.done.splice(i, 1);
    storageSet("jsl-progress", state.done);
    updateProgressUI();
    refreshCompleteButtons(id);
  }

  /* ---------------- progress ---------------- */
  function updateProgressUI() {
    var total = state.total || 1;
    var done = state.done.filter(function (id) { return !!state.byId[id]; }).length;
    var pct = Math.round((done / total) * 100);

    var hp = $("#progress-text");
    if (hp) hp.textContent = done + "/" + total;
    var ring = $("#ring-fill");
    if (ring) ring.style.strokeDashoffset = String(94.2 * (1 - done / total));

    var spt = $("#side-progress-text");
    if (spt) spt.textContent = pct + "%";
    var spb = $("#side-progress-bar");
    if (spb) spb.style.width = pct + "%";
    var spn = $("#side-progress-note");
    if (spn) spn.textContent = "သင်ခန်းစာ " + done + " / " + total + " ပြီးပါပြီ";

    $$("[data-lesson-row]").forEach(function (el) {
      el.classList.toggle("is-done", isDone(el.getAttribute("data-lesson-row")));
    });
    $$(".side-lesson[data-id]").forEach(function (el) {
      el.classList.toggle("is-done", isDone(el.getAttribute("data-id")));
    });
  }

  function refreshCompleteButtons(id) {
    $$('[data-complete="' + id + '"]').forEach(function (btn) {
      var done = isDone(id);
      btn.classList.toggle("is-done", done);
      btn.innerHTML = IC.check + "<span>" + (done ? "ပြီးစီးပြီ — ပြန်ဖျက်မယ်" : "ဒီသင်ခန်းစာ ပြီးပြီလို့ မှတ်မယ်") + "</span>";
    });
  }

  /* ---------------- sidebar ---------------- */
  function renderSidebar() {
    var host = $("#side-chapters");
    if (!host) return;

    var activeId = state.activeLesson ? state.activeLesson.id : null;
    var activeCh = state.activeLesson ? state.activeLesson.chapter : null;

    host.innerHTML = state.chapters.map(function (ch) {
      var lessons = state.lessons.filter(function (l) { return l.chapter === ch.id; });
      var done = lessons.filter(function (l) { return isDone(l.id); }).length;
      var open = activeCh === ch.id;
      var rows = lessons.map(function (l) {
        return '<a class="side-lesson' + (l.id === activeId ? " active" : "") + (isDone(l.id) ? " is-done" : "") + '" data-id="' + l.id + '" href="#/lesson/' + l.id + '">' +
          "<span>" + esc(l.title) + "</span>" +
          '<span class="done-dot">' + IC.check + "</span></a>";
      }).join("");

      return '<div class="side-chapter' + (open ? " open current" : "") + '" data-ch="' + ch.id + '">' +
        '<button class="side-chapter-head" type="button" aria-expanded="' + open + '">' +
        '<span class="ch-no">' + esc(ch.no) + "</span>" +
        '<span class="ch-name">' + esc(ch.title) + "</span>" +
        '<span style="font-size:9px;color:var(--muted)">' + done + "/" + lessons.length + "</span>" +
        '<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>' +
        "</button>" +
        '<div class="side-lessons">' + rows + "</div></div>";
    }).join("");
  }

  function markSideLinks(route, id) {
    $$(".side-link").forEach(function (a) {
      var r = a.getAttribute("data-route");
      a.classList.toggle("active", r === route);
    });
    if (route === "lesson") {
      $$(".side-lesson").forEach(function (a) {
        a.classList.toggle("active", a.getAttribute("data-id") === id);
      });
    }
  }

  /* ---------------- home ---------------- */
  function heroCode() {
    return '<div class="hero-visual">' +
      '<div class="hero-glow"></div>' +
      '<div class="code-window">' +
      '<div class="code-window-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>' +
      '<span class="file">student.js</span></div>' +
      '<pre><code><span class="tok-com">// မြန်မာလို ရှင်းပြထားတဲ့ ကုဒ်</span>\n' +
      '<span class="tok-kw">const</span> student = {\n' +
      '  name: <span class="tok-str">"Aung Aung"</span>,\n' +
      '  score: <span class="tok-num">85</span>\n' +
      '};\n\n' +
      '<span class="tok-kw">if</span> (student.score &gt;= <span class="tok-num">80</span>) {\n' +
      '  <span class="tok-fn">console.log</span>(<span class="tok-str">`\\${student.name} အောင်!`</span>);\n' +
      '}\n' +
      '<span class="tok-com">// → Aung Aung အောင်!</span></code></pre>' +
      "</div>" +
      '<div class="float-note"><span class="pulse-dot"></span><span>မျဉ်းကြောင်း တစ်ကြောင်းချင်း ရှင်းပြထားတယ်</span></div>' +
      "</div>";
  }

  function chapterCard(ch) {
    var lessons = state.lessons.filter(function (l) { return l.chapter === ch.id; });
    var done = lessons.filter(function (l) { return isDone(l.id); }).length;
    var pct = lessons.length ? Math.round((done / lessons.length) * 100) : 0;
    return '<a class="chapter-card" href="#/chapter/' + ch.id + '" style="--ch-color:' + ch.color + '">' +
      '<span class="chapter-icon">' + esc(ch.icon) + "</span>" +
      '<span class="chapter-body">' +
      "<h3>" + esc(ch.title) + "</h3>" +
      '<span class="en">' + esc(ch.en) + "</span>" +
      "<p>" + esc(ch.desc) + "</p>" +
      '<span class="chapter-meta"><span>' + lessons.length + " ခု</span>" +
      '<span class="bar"><span style="width:' + pct + '%"></span></span>' +
      "<span>" + pct + "%</span></span>" +
      "</span></a>";
  }

  function renderHome() {
    state.activeLesson = null;
    var doneCount = state.done.filter(function (id) { return !!state.byId[id]; }).length;
    var pct = state.total ? Math.round((doneCount / state.total) * 100) : 0;
    var next = state.lessons.filter(function (l) { return !isDone(l.id); })[0] || state.lessons[0];
    var practice = state.lessons.filter(function (l) { return l.chapter === "practice"; });

    document.title = "JS ပညာရေး — မြန်မာလို JavaScript သင်ခန်းစာများ";

    var html = '<div class="page-wide fade-up">' +
      '<section class="hero">' +
      '<div class="hero-copy">' +
      '<span class="eyebrow">' + IC.spark + " ကျောင်းသားများအတွက် မြန်မာလို ရှင်းလင်းချက်</span>" +
      '<h1>ကုဒ်တွေကို ဖတ်ရုံမဟုတ်ဘဲ<br><span class="grad">ဘယ်လိုအလုပ်လုပ်လဲ</span> နားလည်အောင်</h1>' +
      '<p class="hero-lead">JavaScript သင်ခန်းစာ ၂၇ ခုနဲ့ လက်တွေ့ project ၆ ခုကို မြန်မာလို အဆင့်ဆင့် ရှင်းပြထားပါတယ်။ ကုဒ်တစ်ကြောင်းချင်းစီရဲ့ အဓိပ္ပာယ်၊ diagram နဲ့ အမှားများတတ်တဲ့ နေရာတွေကို ဖတ်ပြီးတာနဲ့ နားလည်နိုင်ပါတယ်။</p>' +
      '<div class="hero-actions">' +
      '<a class="btn" href="#/lesson/' + (next ? next.id : "core-01") + '">' +
      (doneCount > 0 ? "ဆက်လေ့လာမယ်" : "စတင်လေ့လာမယ်") + IC.right + "</a>" +
      '<a class="btn secondary" href="#/cheatsheet">' + IC.book + " အမြန်ကိုးကား</a>" +
      "</div>" +
      '<div class="hero-stats">' +
      '<div class="hero-stat"><strong>' + state.total + "</strong><span>သင်ခန်းစာ</span></div>" +
      '<div class="hero-stat"><strong>' + state.chapters.length + "</strong><span>အခန်း</span></div>" +
      '<div class="hero-stat"><strong>' + state.diagramCount + "</strong><span>diagram</span></div>" +
      '<div class="hero-stat"><strong>' + pct + "%</strong><span>ပြီးစီးမှု</span></div>" +
      "</div></div>" + heroCode() + "</section>" +

      '<section class="home-section">' +
      '<div class="home-head"><div><h2>သင်ရိုး အခန်းများ</h2><p>အခြေခံကနေ စပြီး လက်တွေ့ project အထိ အစဉ်လိုက် လေ့လာပါ။</p></div>' +
      '<a href="#/chapter/core" class="btn ghost small">အခန်း ၁ ကနေ စမယ် ' + IC.right + "</a></div>" +
      '<div class="chapter-grid">' + state.chapters.map(chapterCard).join("") + "</div></section>" +

      '<section class="home-section">' +
      '<div class="home-head"><div><h2>ဘယ်လို ဖတ်ရမလဲ</h2><p>ဒီ site က ဖတ်ပြီး နားလည်အောင် တည်ဆောက်ထားတယ်။</p></div></div>' +
      '<div class="guide-grid">' +
      '<div class="guide-card"><div class="step">၁</div><h3>ရှင်းလင်းချက်ကို အရင်ဖတ်</h3><p>သင်ခန်းစာတစ်ခုရဲ့ အစမှာ ဘာကြောင့် ဒီအကြောင်းကို သင်ရမလဲ၊ ဘယ်နေရာမှာ သုံးလဲဆိုတာ ရှင်းပြထားတယ်။</p></div>' +
      '<div class="guide-card"><div class="step">၂</div><h3>ကုဒ်နဲ့ diagram တွဲကြည့်</h3><p>ကုဒ်ရဲ့ ဘေးမှာ မျဉ်းကြောင်းနံပါတ်နဲ့ ရှင်းလင်းချက် ရှိတယ်။ နှိပ်လိုက်ရင် သက်ဆိုင်တဲ့ ကုဒ်လိုင်း လင်းလာမယ်။</p></div>' +
      '<div class="guide-card"><div class="step">၃</div><h3>အမှားနဲ့ လေ့ကျင့်ခန်း လုပ်</h3><p>အဆုံးမှာ အမှားများတတ်တဲ့ အချက်တွေ၊ အနှစ်ချုပ်နဲ့ လေ့ကျင့်ခန်း ပါတယ်။ ကိုယ်တိုင် ပြန်ရေးကြည့်ပါ။</p></div>' +
      "</div></section>" +

      '<section class="home-section">' +
      '<div class="home-head"><div><h2>ဒီ site မှာ ဘာတွေ ပါလဲ</h2><p>စာမေးပွဲအတွက်မဟုတ်ဘဲ တကယ်တတ်အောင် ဖတ်နိုင်တဲ့ပုံစံ။</p></div></div>' +
      '<div class="feature-row">' +
      '<div class="feature-card">' + IC.code + "<h3>ကုဒ် မျဉ်းကြောင်းအလိုက်</h3><p>ကုဒ်တိုင်းရဲ့ ဘေးမှာ ဘာလုပ်နေလဲဆိုတဲ့ မြန်မာလို ရှင်းလင်းချက်။</p></div>" +
      '<div class="feature-card">' + IC.layers + "<h3>Diagram များ</h3><p>အခြေအနေ ခွဲခြားမှု၊ DOM သစ်ပင်၊ event စီးဆင်းမှုကို ပုံနဲ့ မြင်နိုင်တယ်။</p></div>" +
      '<div class="feature-card">' + IC.alert + "<h3>အမှား သတိပေးချက်</h3><p>အစပိုင်း ကျောင်းသားတွေ မကြာခဏ လွဲမှားတဲ့ နေရာတွေကို ကြိုပြထားတယ်။</p></div>" +
      '<div class="feature-card">' + IC.target + "<h3>လက်တွေ့ လေ့ကျင့်ခန်း</h3><p>သင်ခန်းစာတိုင်းရဲ့ အဆုံးမှာ ကိုယ်တိုင်ရေးကြည့်ဖို့ အလုပ်တွေ ပါတယ်။</p></div>" +
      "</div></section>" +

      '<section class="home-section">' +
      '<div class="home-head"><div><h2>လက်တွေ့ Project များ</h2><p>သင်ယူထားတာတွေကို ပေါင်းစပ်အသုံးချတဲ့ နေရာ။</p></div>' +
      '<a class="btn ghost small" href="#/chapter/practice">အားလုံး ကြည့်မယ် ' + IC.right + "</a></div>" +
      '<div class="practice-strip">' + practice.map(function (l) {
        return '<a class="practice-card" href="#/lesson/' + l.id + '"><span class="num">PROJECT ' + lessonNo(l) + "</span><h3>" + esc(l.title) + "</h3><p>" + esc(l.subtitle || "") + '</p><span class="go">ဖတ်မယ် →</span></a>';
      }).join("") + "</div></section>" +

      '<footer class="site-footer"><span>© ' + new Date().getFullYear() + " JS ပညာရေး — မြန်မာလို ရှင်းလင်းချက်ဖြင့်</span>" +
      '<span>HTML · CSS · Tailwind · JavaScript ဖြင့် ဆောက်ထားသည်</span></footer>' +
      "</div>";

    $("#app").innerHTML = html;
    markSideLinks("home");
  }

  /* ---------------- chapter page ---------------- */
  function renderChapter(chId) {
    var ch = chapterOf(chId);
    if (!ch) { renderNotFound(); return; }
    state.activeLesson = null;

    var lessons = state.lessons.filter(function (l) { return l.chapter === ch.id; });
    var done = lessons.filter(function (l) { return isDone(l.id); }).length;

    document.title = ch.title + " — JS ပညာရေး";

    var rows = lessons.map(function (l) {
      return '<a class="lesson-row' + (isDone(l.id) ? " is-done" : "") + '" data-lesson-row="' + l.id + '" href="#/lesson/' + l.id + '">' +
        '<span class="num">' + esc(lessonNo(l)) + "</span>" +
        '<span class="body"><h3>' + esc(l.title) + "</h3><p>" + esc(l.subtitle || "") + "</p></span>" +
        '<span class="meta"><span class="min">' + IC.clock + " " + (l.minutes || 10) + " မိနစ်</span>" +
        '<span class="done-badge">' + IC.check + "</span></span></a>";
    }).join("");

    $("#app").innerHTML = '<div class="page-wrap fade-up">' +
      '<a class="back-link" href="#/">' + IC.left + " ပင်မစာမျက်နှာ</a>" +
      '<div class="page-head"><span class="eyebrow" style="background:' + ch.color + '18;color:' + ch.color + '">အခန်း ' + ch.no + "</span>" +
      "<h1>" + esc(ch.title) + "</h1><p>" + esc(ch.desc) + "</p>" +
      '<div class="meta-row" style="margin-top:14px"><span class="meta-chip">' + IC.list + " သင်ခန်းစာ " + lessons.length + " ခု</span>" +
      '<span class="meta-chip">' + IC.check + " ပြီးစီး " + done + " ခု</span>" +
      '<span class="meta-chip tag">' + esc(ch.en) + "</span></div></div>" +
      '<div class="lesson-list">' + rows + "</div>" +
      '<footer class="site-footer"><a href="#/">← ပင်မ</a><span>အခန်း ' + ch.no + " / " + ch.title + "</span></footer></div>";

    renderSidebar();
    markSideLinks("chapter");
    updateProgressUI();
  }

  /* ---------------- lesson page ---------------- */
  function renderLesson(id) {
    var l = state.byId[id];
    if (!l) { renderNotFound(); return; }
    state.activeLesson = l;
    var ch = chapterOf(l.chapter);
    var idx = state.lessons.indexOf(l);
    var prev = state.lessons[idx - 1];
    var next = state.lessons[idx + 1];
    var done = isDone(l.id);

    document.title = l.title + " — JS ပညာရေး";

    var sections = (l.sections || []).map(function (s, i) {
      var cid = l.id + "-s" + (i + 1);
      return '<section class="lesson-section" id="section-' + (i + 1) + '">' +
        '<h2><span class="sec-num">' + (i + 1) + "</span><span>" + esc(s.h) + "</span></h2>" +
        '<div class="prose-my">' + paras(s.p) + "</div>" +
        (s.diagram ? JSL.diagram(s.diagram) : "") +
        (s.code ? codeCard(s.code, s.lang || "js", s.file || defaultFile(l), cid) : "") +
        (s.lines ? lineNotes(s.lines, cid) : "") +
        callout(s.tip) +
        "</section>";
    }).join("");

    var pitfalls = (l.pitfalls || []).map(function (p) {
      var o = typeof p === "string" ? { t: p } : p;
      return '<div class="pitfall"><span class="x">!</span><div><h3>' + esc(o.t || "သတိထားပါ") + "</h3><p>" + fmt(o.d || "") + "</p></div></div>";
    }).join("");

    var recap = (l.recap || []).map(function (r) {
      return '<li><span class="tick">' + IC.check + "</span><span>" + fmt(r) + "</span></li>";
    }).join("");

    var ex = l.exercise;
    var exHtml = ex ? '<div class="exercise-card"><h3>' + IC.pen + " ကိုယ်တိုင် လေ့ကျင့်ကြည့်ပါ</h3>" +
      (ex.title ? "<p style='margin:0 0 4px;font-size:12.5px'>" + fmt(ex.title) + "</p>" : "") +
      '<ol>' + (ex.steps || []).map(function (s) { return "<li>" + fmt(s) + "</li>"; }).join("") + "</ol>" +
      (ex.hint ? '<p class="hint"><strong>အရိပ်အမြွက်:</strong> ' + fmt(ex.hint) + "</p>" : "") +
      "</div>" : "";

    var src = l.sources && l.sources.length ? l.sources : (l.source ? [{ label: "မူရင်းကုဒ် ဖိုင်ဖွင့်", href: l.source }] : []);
    var srcHtml = src.map(function (s) {
      return '<a class="source-link" href="' + esc(s.href) + '" target="_blank" rel="noopener">' + IC.external + esc(s.label || "မူရင်းကုဒ်") + "</a>";
    }).join("");

    var tags = (l.tags || []).map(function (t) { return '<span class="meta-chip tag">#' + esc(t) + "</span>"; }).join("");

    var pager = '<div class="pager">' +
      (prev ? '<a class="pager-link" href="#/lesson/' + prev.id + '">' + IC.left +
        '<span><span class="dir">ယခင်</span><span class="ttl">' + esc(prev.title) + "</span></span></a>" :
        '<span class="pager-empty"></span>') +
      (next ? '<a class="pager-link next" href="#/lesson/' + next.id + '"><span><span class="dir">နောက်တစ်ခု</span><span class="ttl">' + esc(next.title) + "</span></span>" + IC.right + "</a>" :
        '<span class="pager-empty"></span>') +
      "</div>";

    var html = '<div class="page-wrap fade-up">' +
      '<div class="breadcrumb"><a href="#/">ပင်မ</a>' + IC.right +
      '<a href="#/chapter/' + l.chapter + '">' + esc(ch ? ch.title : "") + "</a>" + IC.right +
      "<span>" + esc(l.title) + "</span></div>" +

      '<header class="lesson-head">' +
      '<span class="eyebrow" style="background:' + (ch ? ch.color + "18" : "") + ";color:" + (ch ? ch.color : "") + '">အခန်း ' + (ch ? ch.no : "") + " · သင်ခန်းစာ " + lessonNo(l) + "</span>" +
      "<h1>" + esc(l.title) + "</h1>" +
      '<p class="en-title">' + esc(l.subtitle || "") + "</p>" +
      '<div class="meta-row">' +
      '<span class="meta-chip">' + IC.clock + " " + (l.minutes || 10) + " မိနစ်</span>" +
      '<span class="meta-chip">' + IC.level + " " + esc(l.level || "အခြေခံ") + "</span>" +
      '<span class="meta-chip">' + IC.code + " " + (l.sections || []).length + " ပိုင်း</span>" +
      tags + "</div></header>" +

      '<div class="intro-card"><div class="prose-my" style="font-size:13.5px">' + paras(l.intro) + "</div></div>" +

      (l.goals && l.goals.length ? '<div class="goals-card"><h2>' + IC.target + " ဒီသင်ခန်းစာမှာ ဘာတွေ သင်မလဲ</h2><ul class=\"goals-list\">" +
        l.goals.map(function (g) { return "<li>" + fmt(g) + "</li>"; }).join("") + "</ul></div>" : "") +

      (l.diagram ? JSL.diagram(l.diagram) : "") +

      sections +

      (pitfalls ? '<section class="lesson-section"><h2><span class="sec-num">!</span><span>အမှား များတတ်တဲ့ နေရာများ</span></h2><div class="pitfall-grid">' + pitfalls + "</div></section>" : "") +

      (recap ? '<section class="lesson-section"><h2><span class="sec-num">✓</span><span>အနှစ်ချုပ်</span></h2><div class="recap-card"><ul>' + recap + "</ul></div>" + exHtml + "</section>" : exHtml) +

      '<footer class="lesson-footer">' +
      '<div class="complete-row">' +
      '<button type="button" class="complete-btn' + (done ? " is-done" : "") + '" data-complete="' + l.id + '">' +
      IC.check + "<span>" + (done ? "ပြီးစီးပြီ — ပြန်ဖျက်မယ်" : "ဒီသင်ခန်းစာ ပြီးပြီလို့ မှတ်မယ်") + "</span></button>" +
      srcHtml + "</div>" + pager + "</footer>" +
      '<footer class="site-footer"><a href="#/">← ပင်မစာမျက်နှာ</a><span>အခန်း ' + (ch ? ch.no : "") + " · " + esc(l.title) + "</span></footer>" +
      "</div>";

    $("#app").innerHTML = html;
    state.activeLesson = l;
    renderSidebar();
    markSideLinks("lesson", l.id);
    updateProgressUI();
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  function defaultFile(l) {
    var ch = chapterOf(l.chapter);
    if (l.chapter === "practice") return l.fileName || "practice/script.js";
    return (ch ? ch.source : "") + "/" + (l.fileName || "script.js");
  }

  /* ---------------- cheatsheet ---------------- */
  function renderCheatsheet() {
    state.activeLesson = null;
    document.title = "အမြန်ကိုးကား — JS ပညာရေး";

    var groups = JSL.cheatsheet || [];
    var glossary = JSL.glossary || [];

    var cards = groups.map(function (g) {
      var items = (g.items || []).map(function (it) {
        return '<div class="cheat-item"><code>' + esc(it.code) + "</code><p>" + fmt(it.desc) + "</p></div>";
      }).join("");
      return '<div class="cheat-card"><h2><span class="dotc"></span>' + esc(g.title) + "</h2>" + items + "</div>";
    }).join("");

    var rows = glossary.map(function (g) {
      return "<tr><td>" + esc(g.term) + "</td><td>" + fmt(g.desc) + "</td><td><code>" + esc(g.code || "") + "</code></td></tr>";
    }).join("");

    $("#app").innerHTML = '<div class="page-wide fade-up">' +
      '<a class="back-link" href="#/">' + IC.left + " ပင်မစာမျက်နှာ</a>" +
      '<div class="page-head"><span class="eyebrow">' + IC.book + " အမြန်ကိုးကား</span><h1>JavaScript အမြန် ကိုးကား</h1>" +
      "<p>သင်ခန်းစာတွေ ဖတ်နေရင်း လိုအပ်တဲ့ syntax ကို မြန်မြန် ရှာနိုင်အောင် စုစည်းထားတယ်။</p></div>" +
      '<div class="cheat-grid">' + cards + "</div>" +
      (glossary.length ? '<div class="home-head"><div><h2>ဝေါဟာရ အဘိဓာန်</h2><p>အင်္ဂလိပ်စကားလုံးတွေရဲ့ မြန်မာလို အဓိပ္ပာယ်။</p></div></div>' +
        '<div style="overflow-x:auto;border:1px solid var(--line);border-radius:13px;background:var(--surface);margin-bottom:30px">' +
        '<table class="glossary"><thead><tr><th>ဝေါဟာရ</th><th>အဓိပ္ပာယ်</th><th>ဥပမာ</th></tr></thead><tbody>' + rows + "</tbody></table></div>" : "") +
      '<footer class="site-footer"><a href="#/">← ပင်မ</a><span>အမြန်ကိုးကား</span></footer></div>';

    markSideLinks("cheatsheet");
    renderSidebar();
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  /* ---------------- 404 ---------------- */
  function renderNotFound() {
    state.activeLesson = null;
    document.title = "မတွေ့ပါ — JS ပညာရေး";
    $("#app").innerHTML = '<div class="page-wrap"><div style="padding:80px 10px;text-align:center">' +
      '<div style="font-size:56px;font-weight:800;color:var(--brand)">404</div>' +
      "<h1 style='font-size:22px'>ဒီစာမျက်နှာကို မတွေ့ပါ</h1>" +
      '<p style="color:var(--muted);font-size:12.5px">လိပ်စာ မှားနေနိုင်တယ်။ ပင်မစာမျက်နှာကနေ ပြန်စကြည့်ပါ။</p>' +
      '<a class="btn" href="#/" style="margin-top:12px">ပင်မသို့ ပြန်မယ်</a></div></div>';
    markSideLinks("");
  }

  /* ---------------- router ---------------- */
  function route() {
    var hash = location.hash.replace(/^#\/?/, "");
    var parts = hash.split("/").filter(Boolean);

    closeSidebar();
    closeSearch(false);

    if (parts.length === 0) renderHome();
    else if (parts[0] === "lesson" && parts[1]) renderLesson(decodeURIComponent(parts[1]));
    else if (parts[0] === "chapter" && parts[1]) renderChapter(decodeURIComponent(parts[1]));
    else if (parts[0] === "cheatsheet") renderCheatsheet();
    else renderNotFound();

    updateProgressUI();
    updateReadingProgress();
  }

  /* ---------------- search ---------------- */
  function openSearch() {
    var modal = $("#search-modal");
    if (!modal) return;
    modal.hidden = false;
    search.open = true;
    var input = $("#search-input");
    input.value = "";
    renderSearchResults("");
    setTimeout(function () { input.focus(); }, 30);
  }

  function closeSearch(focus) {
    var modal = $("#search-modal");
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    search.open = false;
    if (focus !== false) {
      var trigger = $("#search-open");
      if (trigger) trigger.focus();
    }
  }

  function searchLessons(q) {
    q = q.trim().toLowerCase();
    if (!q) return state.lessons.slice();
    var terms = q.split(/\s+/);
    return state.lessons.filter(function (l) {
      var row = state.searchIndex.filter(function (r) { return r.id === l.id; })[0];
      if (!row) return false;
      return terms.every(function (t) { return row.hay.indexOf(t) !== -1; });
    });
  }

  function renderSearchResults(q) {
    var host = $("#search-results");
    if (!host) return;
    var results = searchLessons(q);
    search.items = results.slice(0, 12);
    search.active = 0;

    if (!results.length) {
      host.innerHTML = '<div class="search-empty">“' + esc(q) + "” နဲ့ ကိုက်ညီတဲ့ သင်ခန်းစာ မတွေ့ပါ။<br>ဥပမာ — loop, event, localStorage, fetch စသဖြင့် စမ်းပါ။</div>";
      return;
    }

    var rows = search.items.map(function (l, i) {
      var ch = chapterOf(l.chapter);
      return '<div class="search-result' + (i === 0 ? " active" : "") + '" data-lesson="' + l.id + '">' +
        '<span class="sr-num">' + esc(lessonNo(l)) + "</span>" +
        '<span class="sr-body"><span class="sr-title">' + esc(l.title) + "</span>" +
        '<span class="sr-sub">' + esc(l.subtitle || "") + "</span></span>" +
        '<span class="sr-ch">' + esc(ch ? ch.title : "") + "</span></div>";
    }).join("");

    host.innerHTML = (q ? "" : '<div class="search-group-label">သင်ခန်းစာ အားလုံး</div>') + rows +
      (results.length > 12 ? '<div class="search-empty" style="padding:14px">နောက်ထပ် ' + (results.length - 12) + " ခု ရှိပါတယ်။ စာလုံး ပိုရိုက်ပြီး ရှာပါ။</div>" : "");
  }

  function moveSearchActive(delta) {
    if (!search.items.length) return;
    search.active = (search.active + delta + search.items.length) % search.items.length;
    $$(".search-result").forEach(function (el, i) {
      el.classList.toggle("active", i === search.active);
      if (i === search.active) {
        var r = el.getBoundingClientRect();
        var host = $("#search-results").getBoundingClientRect();
        if (r.top < host.top || r.bottom > host.bottom) el.scrollIntoView({ block: "nearest" });
      }
    });
  }

  function chooseSearch(i) {
    var l = search.items[i];
    if (!l) return;
    closeSearch(false);
    location.hash = "#/lesson/" + l.id;
  }

  /* ---------------- sidebar / mobile ---------------- */
  function openSidebar() {
    var sb = $("#sidebar");
    var ov = $("#sidebar-overlay");
    if (!sb) return;
    sb.classList.add("open");
    if (ov) ov.hidden = false;
    document.body.style.overflow = "hidden";
  }
  function closeSidebar() {
    var sb = $("#sidebar");
    var ov = $("#sidebar-overlay");
    if (!sb) return;
    sb.classList.remove("open");
    if (ov) ov.hidden = true;
    document.body.style.overflow = "";
  }

  /* ---------------- progress bar ---------------- */
  function updateReadingProgress() {
    var el = $("#reading-progress");
    if (!el) return;
    var h = document.documentElement.scrollHeight - window.innerHeight;
    var pct = h > 0 ? (window.scrollY / h) * 100 : 0;
    el.style.width = Math.max(0, Math.min(100, pct)) + "%";
  }

  /* ---------------- theme ---------------- */
  function setTheme(mode) {
    document.documentElement.classList.toggle("dark", mode === "dark");
    try { localStorage.setItem("jsl-theme", mode); } catch (e) {}
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", mode === "dark" ? "#070b16" : "#4f46e5");
  }

  /* ---------------- copy ---------------- */
  function copyCode(btn) {
    var card = btn.closest(".code-card");
    if (!card) return;
    var text = $$(".lc", card).map(function (el) { return el.textContent; }).join("\n");
    function done() {
      var label = btn.querySelector("span");
      if (label) label.textContent = "ကူးပြီး";
      setTimeout(function () { if (label) label.textContent = "ကူးမယ်"; }, 1600);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, fallback);
    } else fallback();

    function fallback() {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); done(); } catch (e) { toast("ကူးယူလို့ မရပါ"); }
      ta.remove();
    }
  }

  function highlightCode(cid, range) {
    var card = document.getElementById("code-" + cid);
    if (!card) return;
    $$(".cl", card).forEach(function (el) { el.classList.remove("hl"); });
    var from = range[0], to = range[1];
    var first = null;
    $$(".cl", card).forEach(function (el) {
      var n = Number(el.getAttribute("data-line"));
      if (n >= from && n <= to) {
        el.classList.add("hl");
        if (!first) first = el;
      }
    });
    if (first) first.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }

  /* ---------------- global handlers ---------------- */
  function bind() {
    window.addEventListener("hashchange", route);
    window.addEventListener("scroll", updateReadingProgress, { passive: true });
    window.addEventListener("resize", updateReadingProgress);

    $("#menu-btn").addEventListener("click", openSidebar);
    $("#sidebar-overlay").addEventListener("click", closeSidebar);
    $("#search-open").addEventListener("click", openSearch);
    $("#theme-btn").addEventListener("click", function () {
      setTheme(document.documentElement.classList.contains("dark") ? "light" : "dark");
    });

    var modal = $("#search-modal");
    modal.addEventListener("click", function (e) {
      if (e.target.closest("[data-close-search]")) closeSearch();
    });

    $("#search-input").addEventListener("input", function (e) {
      renderSearchResults(e.target.value);
    });

    $("#search-results").addEventListener("click", function (e) {
      var row = e.target.closest(".search-result");
      if (!row) return;
      closeSearch(false);
      location.hash = "#/lesson/" + row.getAttribute("data-lesson");
    });

    $("#search-results").addEventListener("mousemove", function (e) {
      var row = e.target.closest(".search-result");
      if (!row) return;
      var rows = $$(".search-result");
      search.active = rows.indexOf(row);
      rows.forEach(function (r, i) { r.classList.toggle("active", i === search.active); });
    });

    document.addEventListener("keydown", function (e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (search.open) closeSearch(); else openSearch();
        return;
      }
      if (e.key === "/" && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)) {
        e.preventDefault();
        openSearch();
        return;
      }
      if (e.key === "Escape") {
        if (search.open) closeSearch();
        else closeSidebar();
        return;
      }
      if (search.open) {
        if (e.key === "ArrowDown") { e.preventDefault(); moveSearchActive(1); }
        else if (e.key === "ArrowUp") { e.preventDefault(); moveSearchActive(-1); }
        else if (e.key === "Enter") { e.preventDefault(); chooseSearch(search.active); }
      }
    });

    document.addEventListener("click", function (e) {
      var copyBtn = e.target.closest("[data-copy]");
      if (copyBtn) { copyCode(copyBtn); return; }

      var doneBtn = e.target.closest("[data-complete]");
      if (doneBtn) {
        var id = doneBtn.getAttribute("data-complete");
        markDone(id, !isDone(id));
        var txt = doneBtn.querySelector("span");
        toast(isDone(id) ? "သင်ခန်းစာ ပြီးစီးအဖြစ် မှတ်ပြီးပါပြီ" : "ပြီးစီးမှု ပြန်ဖျက်ပြီးပါပြီ");
        if (txt) txt.textContent = isDone(id) ? "ပြီးစီးပြီ — ပြန်ဖျက်မယ်" : "ဒီသင်ခန်းစာ ပြီးပြီလို့ မှတ်မယ်";
        return;
      }

      var note = e.target.closest(".line-note");
      if (note) {
        var cid = note.getAttribute("data-code");
        var raw = note.getAttribute("data-line");
        var parts = raw.split("-").map(Number);
        highlightCode(cid, [parts[0], parts[1] || parts[0]]);
        return;
      }

      var chHead = e.target.closest(".side-chapter-head");
      if (chHead) {
        var chapter = chHead.parentElement;
        chapter.classList.toggle("open");
        chHead.setAttribute("aria-expanded", chapter.classList.contains("open") ? "true" : "false");
      }
    });
  }

  /* ---------------- init ---------------- */
  function init() {
    initData();
    bind();
    if (!location.hash) location.hash = "#/";
    route();
    updateProgressUI();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
