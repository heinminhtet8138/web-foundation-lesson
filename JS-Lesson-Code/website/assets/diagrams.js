/* ============================================================
   diagrams.js — သင်ခန်းစာ diagram များ (SVG)
   အားလုံးကို ကိုယ်တိုင် SVG နဲ့ ဆွဲထားတယ်။ ပြင်ပ library မလိုပါ။
   ============================================================ */
(function () {
  "use strict";

  var JSL = window.JSL = window.JSL || {};
  var uid = 0;

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function splitLines(s) {
    return String(s == null ? "" : s).split("\n");
  }

  function multiText(x, y, arr, cls, lh, anchor) {
    var a = anchor || "middle";
    var out = '<text x="' + x + '" y="' + y + '" class="' + cls + '" text-anchor="' + a + '">';
    arr.forEach(function (line, i) {
      out += '<tspan x="' + x + '" dy="' + (i === 0 ? 0 : lh) + '">' + esc(line) + "</tspan>";
    });
    return out + "</text>";
  }

  function node(x, y, w, h, o) {
    o = o || {};
    var tone = o.tone || 1;
    var tLines = splitLines(o.t || "");
    var sLines = o.sub ? splitLines(o.sub) : [];
    var lhT = 16, lhS = 13.5;
    var total = tLines.length * lhT + (sLines.length ? 3 + sLines.length * lhS : 0);
    var start = y + (h - total) / 2 + 12;
    var anchor = o.align === "left" ? "start" : "middle";
    var tx = o.align === "left" ? x + 14 : x + w / 2;

    var out = '<g class="tone-' + tone + '">';
    out += '<rect class="dg-node" x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + (o.rx || 10) + '"/>';
    out += multiText(tx, start, tLines, "dg-t" + (o.mono ? " dg-mono" : ""), lhT, anchor);
    if (sLines.length) {
      out += multiText(tx, start + (tLines.length - 1) * lhT + 3 + lhS, sLines, "dg-s" + (o.mono ? " dg-mono" : ""), lhS, anchor);
    }
    return out + "</g>";
  }

  function arrowLine(x1, y1, x2, y2, id, opts) {
    opts = opts || {};
    var dash = opts.dash ? ' stroke-dasharray="4 4"' : "";
    return '<line class="dg-line" x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '"' +
      dash + ' marker-end="url(#' + id + '-a)"/>';
  }

  function arrowPath(d, id, opts) {
    opts = opts || {};
    var dash = opts.dash ? ' stroke-dasharray="4 4"' : "";
    return '<path class="dg-line" d="' + d + '"' + dash + ' marker-end="url(#' + id + '-a)"/>';
  }

  function svgWrap(w, h, label, inner) {
    var id = "dg" + (++uid);
    return '<svg class="dg" viewBox="0 0 ' + w + " " + h + '" role="img" aria-label="' + esc(label || "diagram") + '" preserveAspectRatio="xMidYMid meet">' +
      '<defs><marker id="' + id + '-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5.6" markerHeight="5.6" orient="auto-start-reverse">' +
      '<path class="dg-arrowhead" d="M0,0 L10,5 L0,10 z"/></marker></defs>' +
      inner(id) + "</svg>";
  }

  /* ---------------- flow ---------------- */
  function renderFlow(spec) {
    var nodes = spec.nodes || [];
    var gap = 26, w = 480, x = 170;
    var y = 14, h = 0;
    var parts = [];
    nodes.forEach(function (n) {
      var bh = n.sub ? 70 : 52;
      parts.push({ x: x, y: y, w: w, h: bh, n: n });
      y += bh + gap;
    });
    h = y - gap + 18;
    var inner = "";
    for (var i = 0; i < parts.length - 1; i++) {
      var a = parts[i], b = parts[i + 1];
      inner += arrowLine(a.x + a.w / 2, a.y + a.h, b.x + b.w / 2, b.y - 4, "{ID}");
      if (spec.arrows && spec.arrows[i]) {
        inner += '<text x="' + (a.x + a.w / 2 + 10) + '" y="' + (a.y + a.h + gap / 2 + 4) + '" class="dg-label" text-anchor="start">' + esc(spec.arrows[i]) + "</text>";
      }
    }
    parts.forEach(function (p) {
      inner += node(p.x, p.y, p.w, p.h, { t: p.n.t, sub: p.n.sub, tone: p.n.tone || 1, mono: p.n.mono, align: p.n.align });
    });
    return svgWrap(820, h, spec.title || "အဆင့်ဆင့် လုပ်ငန်းစဉ်", function (id) {
      return inner.replace(/\{ID\}/g, id);
    });
  }

  /* ---------------- pipeline ---------------- */
  function renderPipeline(spec) {
    var items = spec.items || [];
    var n = items.length;
    var pad = 26, gap = 24;
    var w = (820 - pad * 2 - gap * (n - 1)) / n;
    var y = 30, h = 64;
    var inner = "";
    items.forEach(function (it, i) {
      var x = pad + i * (w + gap);
      var o = typeof it === "string" ? { t: it } : it;
      if (i < n - 1) {
        inner += arrowLine(x + w, y + h / 2, x + w + gap - 4, y + h / 2, "{ID}");
      }
      inner += node(x, y, w, h, { t: o.t, sub: o.sub, tone: o.tone || ((i % 3) + 1), mono: o.mono });
    });
    return svgWrap(820, 124, spec.title || "အဆင့်ဆင့် စီးဆင်းမှု", function (id) {
      return inner.replace(/\{ID\}/g, id);
    });
  }

  /* ---------------- branch ---------------- */
  function renderBranch(spec) {
    var yes = spec.yes || { t: "မှန်" };
    var no = spec.no || { t: "မှား" };
    var inner = "";
    inner += node(230, 16, 360, 64, { t: spec.condition || "အခြေအနေ", sub: spec.conditionSub, tone: 3 });
    inner += arrowLine(410, 80, 410, 108, "{ID}");
    inner += '<text x="418" y="100" class="dg-label">စစ်ဆေး</text>';
    inner += arrowLine(410, 108, 205, 142, "{ID}");
    inner += arrowLine(410, 108, 615, 142, "{ID}");
    inner += '<text x="270" y="128" class="dg-label">မှန် (true)</text>';
    inner += '<text x="500" y="128" class="dg-label">မှား (false)</text>';
    inner += node(50, 148, 310, 78, { t: yes.t, sub: yes.sub, tone: 2 });
    inner += node(460, 148, 310, 78, { t: no.t, sub: no.sub, tone: 4 });
    inner += arrowLine(205, 226, 205, 258, "{ID}");
    inner += arrowLine(615, 226, 615, 258, "{ID}");
    inner += '<path class="dg-line" d="M205 258 H655 V282" marker-end="url(#{ID}-a)"/>';
    inner += node(200, 286, 420, 54, { t: spec.end || "ဆက်လုပ်", tone: 1 });
    return svgWrap(820, 360, spec.title || "အခြေအနေ ခွဲခြားမှု", function (id) {
      return inner.replace(/\{ID\}/g, id);
    });
  }

  /* ---------------- tree ---------------- */
  function renderTree(spec) {
    var root = spec.root;
    if (!root) return svgWrap(820, 100, "tree", function () { return ""; });

    var leaf = 0, maxDepth = 0;
    function measure(n, depth) {
      maxDepth = Math.max(maxDepth, depth);
      if (!n.children || !n.children.length) {
        n._x = leaf++;
        return n._x;
      }
      var xs = n.children.map(function (c) { return measure(c, depth + 1); });
      n._x = (Math.min.apply(null, xs) + Math.max.apply(null, xs)) / 2;
      return n._x;
    }
    measure(root, 0);

    var nodeW = 150, gap = 14;
    var totalW = Math.max(leaf, 1) * nodeW + (Math.max(leaf, 1) - 1) * gap;
    var startX = (820 - totalW) / 2 + nodeW / 2;
    var stepX = nodeW + gap, stepY = 92;
    var h = 34 + (maxDepth + 1) * stepY;

    function place(n, depth) {
      n._px = startX + n._x * stepX;
      n._py = 18 + depth * stepY;
      if (n.children) n.children.forEach(function (c) { place(c, depth + 1); });
    }
    place(root, 0);

    var edges = "", boxes = "";
    function draw(n) {
      if (n.children) {
        n.children.forEach(function (c) {
          var y1 = n._py + 52, y2 = c._py;
          var mid = y1 + (y2 - y1) / 2;
          edges += '<path class="dg-line" d="M' + n._px + " " + y1 + " V" + mid + " H" + c._px + " V" + (y2 - 4) + '" marker-end="url(#{ID}-a)"/>';
          draw(c);
        });
      }
      boxes += node(n._px - nodeW / 2, n._py, nodeW, 52, { t: n.t, sub: n.sub, tone: n.tone || 1, mono: n.mono });
    }
    draw(root);
    return svgWrap(820, h, spec.title || "အဆင့်ဆင့် ဖွဲ့စည်းပုံ", function (id) {
      return (edges + boxes).replace(/\{ID\}/g, id);
    });
  }

  /* ---------------- boxes (array) ---------------- */
  function renderBoxes(spec) {
    var items = spec.items || [];
    var n = items.length;
    var w = Math.min(120, (780 - (n - 1) * 18) / n);
    var gap = 18;
    var total = n * w + (n - 1) * gap;
    var x0 = (820 - total) / 2;
    var y = 56;
    var inner = "";
    items.forEach(function (it, i) {
      var o = typeof it === "object" ? it : { v: it };
      var x = x0 + i * (w + gap);
      inner += node(x, y, w, 66, { t: o.v, sub: o.sub, tone: o.tone || 6, mono: true });
      inner += '<text x="' + (x + w / 2) + '" y="' + (y + 88) + '" class="dg-label">index ' + i + "</text>";
      if (o.note) inner += '<text x="' + (x + w / 2) + '" y="' + (y - 12) + '" class="dg-label">' + esc(o.note) + "</text>";
    });
    if (spec.note) inner += '<text x="410" y="' + (y + 118) + '" class="dg-label" text-anchor="middle">' + esc(spec.note) + "</text>";
    return svgWrap(820, 205, spec.title || "array အက္ခရာ တစ်ခုချင်း", function (id) {
      return inner.replace(/\{ID\}/g, id);
    });
  }

  /* ---------------- key-value ---------------- */
  function renderKV(spec) {
    var items = spec.items || [];
    var rows = items.length;
    var w = 560, x = 130, y = 20, rh = 40;
    var inner = '<rect class="dg-panel" x="' + x + '" y="' + y + '" width="' + w + '" height="' + (rows * rh + 8) + '" rx="12"/>';
    items.forEach(function (it, i) {
      var ry = y + 4 + i * rh;
      if (i > 0) inner += '<line x1="' + x + '" y1="' + ry + '" x2="' + (x + w) + '" y2="' + ry + '" stroke="var(--line)" stroke-width="1"/>';
      inner += '<text x="' + (x + 20) + '" y="' + (ry + 26) + '" class="dg-t dg-mono" text-anchor="start">' + esc(it.k) + "</text>";
      inner += '<text x="' + (x + w - 20) + '" y="' + (ry + 26) + '" class="dg-s" text-anchor="end">' + esc(it.v) + "</text>";
    });
    return svgWrap(820, rows * rh + 58, spec.title || "key — value အတွဲ", function () {
      return inner;
    });
  }

  /* ---------------- compare ---------------- */
  function renderCompare(spec) {
    var left = spec.left || {}, right = spec.right || {};
    var maxItems = Math.max((left.items || []).length, (right.items || []).length, 1);
    var panelH = 100 + maxItems * 30;
    var h = 34 + panelH;

    function panel(p, x, tone) {
      var s = '<g class="tone-' + tone + '">';
      s += '<rect class="dg-node" x="' + x + '" y="12" width="376" height="' + panelH + '" rx="12"/>';
      s += '</g>';
      s += '<text x="' + (x + 18) + '" y="42" class="dg-t" text-anchor="start">' + esc(p.title || "") + "</text>";
      if (p.sub) s += '<text x="' + (x + 18) + '" y="62" class="dg-s" text-anchor="start">' + esc(p.sub) + "</text>";
      return s;
    }
    function items(list, x, colr) {
      var s = "";
      (list || []).forEach(function (it, i) {
        var yy = 92 + i * 30;
        s += '<circle cx="' + (x + 23) + '" cy="' + (yy - 4) + '" r="3" fill="' + colr + '"/>';
        s += '<text x="' + (x + 34) + '" y="' + yy + '" class="dg-s" text-anchor="start">' + esc(it) + "</text>";
      });
      return s;
    }
    var inner = panel(left, 24, left.tone || 6) + panel(right, 420, right.tone || 2);
    inner += items(left.items, 24, "#6366f1");
    inner += items(right.items, 420, "#10b981");
    return svgWrap(820, h, spec.title || "နှိုင်းယှဉ်ချက်", function () {
      return inner;
    });
  }

  /* ---------------- timeline ---------------- */
  function renderTimeline(spec) {
    var items = spec.items || [];
    var rowH = 74;
    var h = 30 + items.length * rowH;
    var inner = '<line x1="120" y1="26" x2="120" y2="' + (h - 26) + '" class="dg-line" stroke-dasharray="3 4"/>';
    items.forEach(function (it, i) {
      var y = 24 + i * rowH;
      inner += '<text x="100" y="' + (y + 20) + '" class="dg-label" text-anchor="end">' + esc(it.t || "") + "</text>";
      inner += '<g class="tone-' + (it.tone || 1) + '"><circle cx="120" cy="' + (y + 15) + '" r="8" fill="var(--surface)" stroke="currentColor" stroke-width="2"/><circle cx="120" cy="' + (y + 15) + '" r="3.2" fill="currentColor"/></g>';
      inner += node(146, y, 644, 58, { t: it.title, sub: it.sub, tone: it.tone || 1, align: "left", mono: it.mono });
    });
    return svgWrap(820, h, spec.title || "အချိန် အစီအစဉ်", function () {
      return inner;
    });
  }

  /* ---------------- cycle ---------------- */
  function renderCycle(spec) {
    var steps = spec.steps || [];
    var x = 200, w = 450, bh = 60, gap = 34;
    var y = 20, h = 0;
    var inner = "";
    steps.forEach(function (s, i) {
      inner += node(x, y, w, bh, { t: s.t, sub: s.sub, tone: s.tone || ((i % 3) + 1) });
      if (i < steps.length - 1) {
        inner += arrowLine(x + w / 2, y + bh, x + w / 2, y + bh + gap - 4, "{ID}");
      }
      y += bh + gap;
    });
    h = y - gap + 24;
    var topY = 20 + bh / 2;
    var botY = 20 + (steps.length - 1) * (bh + gap) + bh / 2;
    var backX = 128;
    inner += '<path class="dg-line" d="M' + x + " " + botY + " H" + backX + " V" + topY + '" marker-end="url(#{ID}-a)"/>';
    inner += '<text x="' + (backX - 8) + '" y="' + ((topY + botY) / 2) + '" class="dg-label" text-anchor="middle" transform="rotate(-90 ' + (backX - 8) + " " + ((topY + botY) / 2) + ')">' + esc(spec.loopLabel || "ပြန်ထပ်") + "</text>";
    return svgWrap(820, h, spec.title || "ထပ်ခါ လုပ်ငန်းစဉ်", function (id) {
      return inner.replace(/\{ID\}/g, id);
    });
  }

  /* ---------------- layers ---------------- */
  function renderLayers(spec) {
    var layers = spec.layers || [];
    var x = 130, w = 560, bh = 62, gap = 18;
    var y = 16;
    var h = 16 + layers.length * (bh + gap) + 8;
    var inner = "";
    layers.forEach(function (l, i) {
      inner += node(x, y, w, bh, { t: l.t, sub: l.sub, tone: l.tone || ((i % 3) + 1) });
      if (i < layers.length - 1) {
        inner += arrowLine(x + w / 2, y + bh, x + w / 2, y + bh + gap - 3, "{ID}");
      }
      y += bh + gap;
    });
    if (spec.bidirectional) {
      inner += '<path class="dg-line" d="M' + (x + w - 40) + " " + (16 + bh + gap - 26) + " V" + (16 + bh + 8) + '" marker-end="url(#{ID}-a)"/>';
    }
    return svgWrap(820, h, spec.title || "အလွှာများ", function (id) {
      return inner.replace(/\{ID\}/g, id);
    });
  }

  /* ---------------- sequence ---------------- */
  function renderSequence(spec) {
    var actors = spec.actors || [
      { t: "Browser", sub: "ကျွန်တော်တို့ရဲ့ ကုဒ်" },
      { t: "Server", sub: "ဒေတာ သိမ်းရာ" }
    ];
    var steps = spec.steps || [];
    var rowH = 76;
    var h = 96 + steps.length * rowH + 24;
    var inner = "";
    inner += node(60, 14, 240, 58, { t: actors[0].t, sub: actors[0].sub, tone: actors[0].tone || 6 });
    inner += node(520, 14, 240, 58, { t: actors[1].t, sub: actors[1].sub, tone: actors[1].tone || 2 });
    inner += '<line x1="180" y1="72" x2="180" y2="' + (h - 24) + '" class="dg-line" stroke-dasharray="4 5"/>';
    inner += '<line x1="640" y1="72" x2="640" y2="' + (h - 24) + '" class="dg-line" stroke-dasharray="4 5"/>';

    steps.forEach(function (s, i) {
      var y = 110 + i * rowH;
      var fromLeft = s.from !== "right";
      var x1 = fromLeft ? 180 : 640;
      var x2 = fromLeft ? 640 : 180;
      inner += '<circle cx="' + (fromLeft ? 156 : 664) + '" cy="' + y + '" r="9" fill="var(--surface)" stroke="var(--line-strong)"/>';
      inner += '<text x="' + (fromLeft ? 156 : 664) + '" y="' + (y + 3.5) + '" class="dg-label" text-anchor="middle">' + (i + 1) + "</text>";
      inner += arrowLine(x1, y, x2 - (fromLeft ? 8 : -8), y, "{ID}");
      var labelX = 410;
      inner += multiText(labelX, y - 12, splitLines(s.t || ""), "dg-t", 15, "middle");
      if (s.sub) inner += multiText(labelX, y - 12 + splitLines(s.t || "").length * 15 + 2, splitLines(s.sub), "dg-s", 13, "middle");
    });
    return svgWrap(820, h, spec.title || "ဆက်သွယ်မှု အစီအစဉ်", function (id) {
      return inner.replace(/\{ID\}/g, id);
    });
  }

  /* ---------------- grid ---------------- */
  function renderGrid(spec) {
    var items = spec.items || [];
    var cols = spec.cols || 3;
    var gap = 18, w = (820 - 24 - gap * (cols - 1)) / cols, bh = 84;
    var rows = Math.ceil(items.length / cols);
    var h = 24 + rows * bh + (rows - 1) * gap + 12;
    var inner = "";
    items.forEach(function (it, i) {
      var r = Math.floor(i / cols), c = i % cols;
      var x = 12 + c * (w + gap), y = 18 + r * (bh + gap);
      inner += node(x, y, w, bh, { t: it.t, sub: it.sub, tone: it.tone || ((i % 3) + 1), mono: it.mono });
    });
    return svgWrap(820, h, spec.title || "အမျိုးအစားများ", function () {
      return inner;
    });
  }

  /* ---------------- bubble ---------------- */
  function renderBubble(spec) {
    var inner = "";
    inner += '<g class="tone-5"><rect class="dg-node" x="50" y="20" width="720" height="286" rx="16"/></g>';
    inner += '<text x="70" y="44" class="dg-s" text-anchor="start">document / body</text>';
    inner += '<g class="tone-6"><rect class="dg-node" x="150" y="70" width="520" height="186" rx="13"/></g>';
    inner += '<text x="170" y="94" class="dg-s" text-anchor="start">#outer (listener ရှိ)</text>';
    inner += '<g class="tone-3"><rect class="dg-node" x="290" y="126" width="240" height="76" rx="10"/></g>';
    inner += '<text x="410" y="158" class="dg-t" text-anchor="middle">#inner Button</text>';
    inner += '<text x="410" y="178" class="dg-s" text-anchor="middle">ဒီနေရာကို နှိပ်လိုက်တယ်</text>';

    inner += '<path class="dg-line" d="M110 240 V60" marker-end="url(#{ID}-a)"/>';
    inner += '<path class="dg-line" d="M130 232 V76" marker-end="url(#{ID}-a)"/>';
    inner += '<text x="118" y="160" class="dg-label" text-anchor="middle" transform="rotate(-90 118 160)">event က အပေါ်ကို တက်</text>';
    inner += '<text x="410" y="332" class="dg-label" text-anchor="middle">' + esc(spec.note || "target = နှိပ်ခံရတဲ့ element၊ currentTarget = listener တပ်ထားတဲ့ element") + "</text>";
    return svgWrap(820, 350, spec.title || "Event Bubbling", function (id) {
      return inner.replace(/\{ID\}/g, id);
    });
  }

  /* ---------------- file tree ---------------- */
  function renderFiles(spec) {
    var files = spec.files || [];
    var rowH = 34;
    var h = 36 + files.length * rowH + 10;
    var inner = '<g class="tone-5"><rect class="dg-node" x="60" y="12" width="700" height="' + (files.length * rowH + 16) + '" rx="12"/></g>';
    files.forEach(function (f, i) {
      var y = 36 + i * rowH;
      var indent = (f.depth || 0) * 22;
      if (indent) {
        inner += '<line x1="' + (80 + indent - 10) + '" y1="' + (y - 12) + '" x2="' + (80 + indent - 10) + '" y2="' + y + '" stroke="var(--line-strong)" stroke-width="1"/>';
        inner += '<line x1="' + (80 + indent - 10) + '" y1="' + y + '" x2="' + (88 + indent - 4) + '" y2="' + y + '" stroke="var(--line-strong)" stroke-width="1"/>';
      }
      inner += '<text x="' + (92 + indent) + '" y="' + (y + 4) + '" class="' + (f.dir ? "dg-t" : "dg-mono") + '" text-anchor="start" fill="' + (f.dir ? "var(--ink)" : "var(--brand-dark)") + '">' + esc(f.name) + "</text>";
      if (f.note) inner += '<text x="740" y="' + (y + 4) + '" class="dg-s" text-anchor="end">' + esc(f.note) + "</text>";
    });
    return svgWrap(820, h, spec.title || "ဖိုင် ဖွဲ့စည်းပုံ", function () {
      return inner;
    });
  }

  var renderers = {
    flow: renderFlow,
    pipeline: renderPipeline,
    branch: renderBranch,
    tree: renderTree,
    boxes: renderBoxes,
    kv: renderKV,
    compare: renderCompare,
    timeline: renderTimeline,
    cycle: renderCycle,
    layers: renderLayers,
    sequence: renderSequence,
    grid: renderGrid,
    bubble: renderBubble,
    files: renderFiles
  };

  JSL.diagram = function (spec) {
    if (!spec || !renderers[spec.type]) return "";
    var body = renderers[spec.type](spec);
    var title = spec.title || "နမူနာ Diagram";
    return '<figure class="diagram-card">' +
      '<div class="diagram-head">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="8.5" y="14" width="7" height="7" rx="1.5"/><path d="M6.5 10v4h5.5M17.5 10v4H12"/></svg>' +
      '<span class="dtitle">' + esc(title) + '</span>' +
      '<span style="margin-left:auto;font-weight:500">ပုံဖြင့် ရှင်းလင်းချက်</span>' +
      "</div>" +
      '<div class="diagram-body">' + body + "</div>" +
      (spec.caption ? "<figcaption>" + esc(spec.caption) + "</figcaption>" : "") +
      "</figure>";
  };

  JSL._esc = esc;
})();
