import { r as w } from "./vendor-router-CtvkFGlM.js";
var Ie = { exports: {} },
  It = {};
var ls;
function jo() {
  if (ls) return It;
  ls = 1;
  var t = Symbol.for("react.transitional.element"),
    e = Symbol.for("react.fragment");
  function n(s, i, o) {
    var r = null;
    if (
      (o !== void 0 && (r = "" + o),
      i.key !== void 0 && (r = "" + i.key),
      "key" in i)
    ) {
      o = {};
      for (var a in i) a !== "key" && (o[a] = i[a]);
    } else o = i;
    return (
      (i = o.ref),
      { $$typeof: t, type: s, key: r, ref: i !== void 0 ? i : null, props: o }
    );
  }
  return (It.Fragment = e), (It.jsx = n), (It.jsxs = n), It;
}
var us;
function No() {
  return us || ((us = 1), (Ie.exports = jo())), Ie.exports;
}
var it = No();
const bn = w.createContext({});
function lt(t) {
  const e = w.useRef(null);
  return e.current === null && (e.current = t()), e.current;
}
const Wo = typeof window < "u",
  Ve = Wo ? w.useLayoutEffect : w.useEffect,
  Ce = w.createContext(null);
function Vn(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function bt(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
const Q = (t, e, n) => (n > e ? e : n < t ? t : n);
let $t = () => {};
const ft = {},
  Wi = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
function Ui(t) {
  return typeof t == "object" && t !== null;
}
const Hi = (t) => /^0[^.\s]+$/u.test(t);
function Ki(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const K = (t) => t,
  Uo = (t, e) => (n) => e(t(n)),
  qt = (...t) => t.reduce(Uo),
  xt = (t, e, n) => {
    const s = e - t;
    return s === 0 ? 1 : (n - t) / s;
  };
class Cn {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return Vn(this.subscriptions, e), () => bt(this.subscriptions, e);
  }
  notify(e, n, s) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](e, n, s);
      else
        for (let o = 0; o < i; o++) {
          const r = this.subscriptions[o];
          r && r(e, n, s);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const $ = (t) => t * 1e3,
  G = (t) => t / 1e3;
function En(t, e) {
  return e ? t * (1e3 / e) : 0;
}
const Ho = (t, e, n) => {
    const s = e - t;
    return ((((n - t) % s) + s) % s) + t;
  },
  $i = (t, e, n) =>
    (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t,
  Ko = 1e-7,
  $o = 12;
function zo(t, e, n, s, i) {
  let o,
    r,
    a = 0;
  do (r = e + (n - e) / 2), (o = $i(r, s, i) - t), o > 0 ? (n = r) : (e = r);
  while (Math.abs(o) > Ko && ++a < $o);
  return r;
}
function Zt(t, e, n, s) {
  if (t === e && n === s) return K;
  const i = (o) => zo(o, 0, 1, t, n);
  return (o) => (o === 0 || o === 1 ? o : $i(i(o), e, s));
}
const zi = (t) => (e) => (e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2),
  Gi = (t) => (e) => 1 - t(1 - e),
  _i = Zt(0.33, 1.53, 0.69, 0.99),
  Mn = Gi(_i),
  Xi = zi(Mn),
  Yi = (t) =>
    t >= 1
      ? 1
      : (t *= 2) < 1
        ? 0.5 * Mn(t)
        : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
  Dn = (t) => 1 - Math.sin(Math.acos(t)),
  qi = Gi(Dn),
  Zi = zi(Dn),
  Go = Zt(0.42, 0, 1, 1),
  _o = Zt(0, 0, 0.58, 1),
  Ji = Zt(0.42, 0, 0.58, 1),
  Qi = (t) => Array.isArray(t) && typeof t[0] != "number";
function tr(t, e) {
  return Qi(t) ? t[Ho(0, t.length, e)] : t;
}
const er = (t) => Array.isArray(t) && typeof t[0] == "number",
  Xo = {
    linear: K,
    easeIn: Go,
    easeInOut: Ji,
    easeOut: _o,
    circIn: Dn,
    circInOut: Zi,
    circOut: qi,
    backIn: Mn,
    backInOut: Xi,
    backOut: _i,
    anticipate: Yi,
  },
  Yo = (t) => typeof t == "string",
  cs = (t) => {
    if (er(t)) {
      $t(t.length === 4);
      const [e, n, s, i] = t;
      return Zt(e, n, s, i);
    } else if (Yo(t)) return Xo[t];
    return t;
  },
  se = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
function qo(t, e) {
  let n = new Set(),
    s = new Set(),
    i = !1,
    o = !1;
  const r = new WeakSet();
  let a = { delta: 0, timestamp: 0, isProcessing: !1 };
  function u(l) {
    r.has(l) && (c.schedule(l), t()), l(a);
  }
  const c = {
    schedule: (l, f = !1, h = !1) => {
      const p = h && i ? n : s;
      return f && r.add(l), p.add(l), l;
    },
    cancel: (l) => {
      s.delete(l), r.delete(l);
    },
    process: (l) => {
      if (((a = l), i)) {
        o = !0;
        return;
      }
      i = !0;
      const f = n;
      (n = s),
        (s = f),
        n.forEach(u),
        n.clear(),
        (i = !1),
        o && ((o = !1), c.process(l));
    },
  };
  return c;
}
const Zo = 40;
function nr(t, e) {
  let n = !1,
    s = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = () => (n = !0),
    r = se.reduce((x, T) => ((x[T] = qo(o)), x), {}),
    {
      setup: a,
      read: u,
      resolveKeyframes: c,
      preUpdate: l,
      update: f,
      preRender: h,
      render: d,
      postRender: p,
    } = r,
    g = () => {
      const x = ft.useManualTiming,
        T = x ? i.timestamp : performance.now();
      (n = !1),
        x ||
          (i.delta = s ? 1e3 / 60 : Math.max(Math.min(T - i.timestamp, Zo), 1)),
        (i.timestamp = T),
        (i.isProcessing = !0),
        a.process(i),
        u.process(i),
        c.process(i),
        l.process(i),
        f.process(i),
        h.process(i),
        d.process(i),
        p.process(i),
        (i.isProcessing = !1),
        n && e && ((s = !1), t(g));
    },
    m = () => {
      (n = !0), (s = !0), i.isProcessing || t(g);
    };
  return {
    schedule: se.reduce((x, T) => {
      const A = r[T];
      return (x[T] = (M, R = !1, V = !1) => (n || m(), A.schedule(M, R, V))), x;
    }, {}),
    cancel: (x) => {
      for (let T = 0; T < se.length; T++) r[se[T]].cancel(x);
    },
    state: i,
    steps: r,
  };
}
const {
  schedule: E,
  cancel: X,
  state: j,
  steps: Be,
} = nr(typeof requestAnimationFrame < "u" ? requestAnimationFrame : K, !0);
let ce;
function Jo() {
  ce = void 0;
}
const W = {
    now: () => (
      ce === void 0 &&
        W.set(
          j.isProcessing || ft.useManualTiming
            ? j.timestamp
            : performance.now(),
        ),
      ce
    ),
    set: (t) => {
      (ce = t), queueMicrotask(Jo);
    },
  },
  sr = (t) => (e) => typeof e == "string" && e.startsWith(t),
  ir = sr("--"),
  Qo = sr("var(--"),
  Rn = (t) => (Qo(t) ? ta.test(t.split("/*")[0].trim()) : !1),
  ta =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function fs(t) {
  return typeof t != "string" ? !1 : t.split("/*")[0].includes("var(--");
}
const Et = {
    test: (t) => typeof t == "number",
    parse: parseFloat,
    transform: (t) => t,
  },
  zt = { ...Et, transform: (t) => Q(0, 1, t) },
  ie = { ...Et, default: 1 },
  jt = (t) => Math.round(t * 1e5) / 1e5,
  Ln = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function ea(t) {
  return t == null;
}
const na =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  kn = (t, e) => (n) =>
    !!(
      (typeof n == "string" && na.test(n) && n.startsWith(t)) ||
      (e && !ea(n) && Object.prototype.hasOwnProperty.call(n, e))
    ),
  rr = (t, e, n) => (s) => {
    if (typeof s != "string") return s;
    const [i, o, r, a] = s.match(Ln);
    return {
      [t]: parseFloat(i),
      [e]: parseFloat(o),
      [n]: parseFloat(r),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  sa = (t) => Q(0, 255, t),
  Fe = { ...Et, transform: (t) => Math.round(sa(t)) },
  mt = {
    test: kn("rgb", "red"),
    parse: rr("red", "green", "blue"),
    transform: ({ red: t, green: e, blue: n, alpha: s = 1 }) =>
      "rgba(" +
      Fe.transform(t) +
      ", " +
      Fe.transform(e) +
      ", " +
      Fe.transform(n) +
      ", " +
      jt(zt.transform(s)) +
      ")",
  };
function ia(t) {
  let e = "",
    n = "",
    s = "",
    i = "";
  return (
    t.length > 5
      ? ((e = t.substring(1, 3)),
        (n = t.substring(3, 5)),
        (s = t.substring(5, 7)),
        (i = t.substring(7, 9)))
      : ((e = t.substring(1, 2)),
        (n = t.substring(2, 3)),
        (s = t.substring(3, 4)),
        (i = t.substring(4, 5)),
        (e += e),
        (n += n),
        (s += s),
        (i += i)),
    {
      red: parseInt(e, 16),
      green: parseInt(n, 16),
      blue: parseInt(s, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const Je = { test: kn("#"), parse: ia, transform: mt.transform },
  Jt = (t) => ({
    test: (e) =>
      typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
    parse: parseFloat,
    transform: (e) => `${e}${t}`,
  }),
  ut = Jt("deg"),
  rt = Jt("%"),
  S = Jt("px"),
  ra = Jt("vh"),
  oa = Jt("vw"),
  hs = {
    ...rt,
    parse: (t) => rt.parse(t) / 100,
    transform: (t) => rt.transform(t * 100),
  },
  St = {
    test: kn("hsl", "hue"),
    parse: rr("hue", "saturation", "lightness"),
    transform: ({ hue: t, saturation: e, lightness: n, alpha: s = 1 }) =>
      "hsla(" +
      Math.round(t) +
      ", " +
      rt.transform(jt(e)) +
      ", " +
      rt.transform(jt(n)) +
      ", " +
      jt(zt.transform(s)) +
      ")",
  },
  F = {
    test: (t) => mt.test(t) || Je.test(t) || St.test(t),
    parse: (t) =>
      mt.test(t) ? mt.parse(t) : St.test(t) ? St.parse(t) : Je.parse(t),
    transform: (t) =>
      typeof t == "string"
        ? t
        : t.hasOwnProperty("red")
          ? mt.transform(t)
          : St.transform(t),
    getAnimatableNone: (t) => {
      const e = F.parse(t);
      return (e.alpha = 0), F.transform(e);
    },
  },
  aa =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function la(t) {
  return (
    isNaN(t) &&
    typeof t == "string" &&
    (t.match(Ln)?.length || 0) + (t.match(aa)?.length || 0) > 0
  );
}
const or = "number",
  ar = "color",
  ua = "var",
  ca = "var(",
  ds = "${}",
  fa =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Vt(t) {
  const e = t.toString(),
    n = [],
    s = { color: [], number: [], var: [] },
    i = [];
  let o = 0;
  const a = e
    .replace(
      fa,
      (u) => (
        F.test(u)
          ? (s.color.push(o), i.push(ar), n.push(F.parse(u)))
          : u.startsWith(ca)
            ? (s.var.push(o), i.push(ua), n.push(u))
            : (s.number.push(o), i.push(or), n.push(parseFloat(u))),
        ++o,
        ds
      ),
    )
    .split(ds);
  return { values: n, split: a, indexes: s, types: i };
}
function ha(t) {
  return Vt(t).values;
}
function lr({ split: t, types: e }) {
  const n = t.length;
  return (s) => {
    let i = "";
    for (let o = 0; o < n; o++)
      if (((i += t[o]), s[o] !== void 0)) {
        const r = e[o];
        r === or
          ? (i += jt(s[o]))
          : r === ar
            ? (i += F.transform(s[o]))
            : (i += s[o]);
      }
    return i;
  };
}
function da(t) {
  return lr(Vt(t));
}
const pa = (t) =>
    typeof t == "number" ? 0 : F.test(t) ? F.getAnimatableNone(t) : t,
  ma = (t, e) =>
    typeof t == "number" ? (e?.trim().endsWith("/") ? t : 0) : pa(t);
function ga(t) {
  const e = Vt(t);
  return lr(e)(e.values.map((s, i) => ma(s, e.split[i])));
}
const J = { test: la, parse: ha, createTransformer: da, getAnimatableNone: ga };
function Oe(t, e, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? t + (e - t) * 6 * n
      : n < 1 / 2
        ? e
        : n < 2 / 3
          ? t + (e - t) * (2 / 3 - n) * 6
          : t
  );
}
function ya({ hue: t, saturation: e, lightness: n, alpha: s }) {
  (t /= 360), (e /= 100), (n /= 100);
  let i = 0,
    o = 0,
    r = 0;
  if (!e) i = o = r = n;
  else {
    const a = n < 0.5 ? n * (1 + e) : n + e - n * e,
      u = 2 * n - a;
    (i = Oe(u, a, t + 1 / 3)), (o = Oe(u, a, t)), (r = Oe(u, a, t - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(r * 255),
    alpha: s,
  };
}
function ve(t, e) {
  return (n) => (n > 0 ? e : t);
}
const L = (t, e, n) => t + (e - t) * n,
  je = (t, e, n) => {
    const s = t * t,
      i = n * (e * e - s) + s;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  va = [Je, mt, St],
  xa = (t) => va.find((e) => e.test(t));
function ps(t) {
  const e = xa(t);
  if (!e) return !1;
  let n = e.parse(t);
  return e === St && (n = ya(n)), n;
}
const ms = (t, e) => {
    const n = ps(t),
      s = ps(e);
    if (!n || !s) return ve(t, e);
    const i = { ...n };
    return (o) => (
      (i.red = je(n.red, s.red, o)),
      (i.green = je(n.green, s.green, o)),
      (i.blue = je(n.blue, s.blue, o)),
      (i.alpha = L(n.alpha, s.alpha, o)),
      mt.transform(i)
    );
  },
  Qe = new Set(["none", "hidden"]);
function Ta(t, e) {
  return Qe.has(t) ? (n) => (n <= 0 ? t : e) : (n) => (n >= 1 ? e : t);
}
function wa(t, e) {
  return (n) => L(t, e, n);
}
function In(t) {
  return typeof t == "number"
    ? wa
    : typeof t == "string"
      ? Rn(t)
        ? ve
        : F.test(t)
          ? ms
          : Aa
      : Array.isArray(t)
        ? ur
        : typeof t == "object"
          ? F.test(t)
            ? ms
            : Sa
          : ve;
}
function ur(t, e) {
  const n = [...t],
    s = n.length,
    i = t.map((o, r) => In(o)(o, e[r]));
  return (o) => {
    for (let r = 0; r < s; r++) n[r] = i[r](o);
    return n;
  };
}
function Sa(t, e) {
  const n = { ...t, ...e },
    s = {};
  for (const i in n)
    t[i] !== void 0 && e[i] !== void 0 && (s[i] = In(t[i])(t[i], e[i]));
  return (i) => {
    for (const o in s) n[o] = s[o](i);
    return n;
  };
}
function Pa(t, e) {
  const n = [],
    s = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < e.values.length; i++) {
    const o = e.types[i],
      r = t.indexes[o][s[o]],
      a = t.values[r] ?? 0;
    (n[i] = a), s[o]++;
  }
  return n;
}
const Aa = (t, e) => {
  const n = J.createTransformer(e),
    s = Vt(t),
    i = Vt(e);
  return s.indexes.var.length === i.indexes.var.length &&
    s.indexes.color.length === i.indexes.color.length &&
    s.indexes.number.length >= i.indexes.number.length
    ? (Qe.has(t) && !i.values.length) || (Qe.has(e) && !s.values.length)
      ? Ta(t, e)
      : qt(ur(Pa(s, i), i.values), n)
    : ve(t, e);
};
function cr(t, e, n) {
  return typeof t == "number" && typeof e == "number" && typeof n == "number"
    ? L(t, e, n)
    : In(t)(t, e);
}
const ba = (t) => {
    const e = ({ timestamp: n }) => t(n);
    return {
      start: (n = !0) => E.update(e, n),
      stop: () => X(e),
      now: () => (j.isProcessing ? j.timestamp : W.now()),
    };
  },
  fr = (t, e, n = 10) => {
    let s = "";
    const i = Math.max(Math.round(e / n), 2);
    for (let o = 0; o < i; o++)
      s += Math.round(t(o / (i - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${s.substring(0, s.length - 2)})`;
  },
  xe = 2e4;
function Bn(t) {
  let e = 0;
  const n = 50;
  let s = t.next(e);
  for (; !s.done && e < xe; ) (e += n), (s = t.next(e));
  return e >= xe ? 1 / 0 : e;
}
function hr(t, e = 100, n) {
  const s = n({ ...t, keyframes: [0, e] }),
    i = Math.min(Bn(s), xe);
  return {
    type: "keyframes",
    ease: (o) => s.next(i * o).value / e,
    duration: G(i),
  };
}
const k = {
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  duration: 800,
  bounce: 0.3,
  visualDuration: 0.3,
  restSpeed: { granular: 0.01, default: 2 },
  restDelta: { granular: 0.005, default: 0.5 },
  minDuration: 0.01,
  maxDuration: 10,
  minDamping: 0.05,
  maxDamping: 1,
};
function tn(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const Va = 12;
function Ca(t, e, n) {
  let s = n;
  for (let i = 1; i < Va; i++) s = s - t(s) / e(s);
  return s;
}
const Ne = 0.001;
function Ea({
  duration: t = k.duration,
  bounce: e = k.bounce,
  velocity: n = k.velocity,
  mass: s = k.mass,
}) {
  let i,
    o,
    r = 1 - e;
  (r = Q(k.minDamping, k.maxDamping, r)),
    (t = Q(k.minDuration, k.maxDuration, G(t))),
    r < 1
      ? ((i = (c) => {
          const l = c * r,
            f = l * t,
            h = l - n,
            d = tn(c, r),
            p = Math.exp(-f);
          return Ne - (h / d) * p;
        }),
        (o = (c) => {
          const f = c * r * t,
            h = f * n + n,
            d = Math.pow(r, 2) * Math.pow(c, 2) * t,
            p = Math.exp(-f),
            g = tn(Math.pow(c, 2), r);
          return ((-i(c) + Ne > 0 ? -1 : 1) * ((h - d) * p)) / g;
        }))
      : ((i = (c) => {
          const l = Math.exp(-c * t),
            f = (c - n) * t + 1;
          return -Ne + l * f;
        }),
        (o = (c) => {
          const l = Math.exp(-c * t),
            f = (n - c) * (t * t);
          return l * f;
        }));
  const a = 5 / t,
    u = Ca(i, o, a);
  if (((t = $(t)), isNaN(u)))
    return { stiffness: k.stiffness, damping: k.damping, duration: t };
  {
    const c = Math.pow(u, 2) * s;
    return { stiffness: c, damping: r * 2 * Math.sqrt(s * c), duration: t };
  }
}
const Ma = ["duration", "bounce"],
  Da = ["stiffness", "damping", "mass"];
function gs(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function Ra(t) {
  let e = {
    velocity: k.velocity,
    stiffness: k.stiffness,
    damping: k.damping,
    mass: k.mass,
    isResolvedFromDuration: !1,
    ...t,
  };
  if (!gs(t, Da) && gs(t, Ma))
    if (((e.velocity = 0), t.visualDuration)) {
      const n = t.visualDuration,
        s = (2 * Math.PI) / (n * 1.2),
        i = s * s,
        o = 2 * Q(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(i);
      e = { ...e, mass: k.mass, stiffness: i, damping: o };
    } else {
      const n = Ea({ ...t, velocity: 0 });
      (e = { ...e, ...n, mass: k.mass }), (e.isResolvedFromDuration = !0);
    }
  return e;
}
function Gt(t = k.visualDuration, e = k.bounce) {
  const n =
    typeof t != "object"
      ? { visualDuration: t, keyframes: [0, 1], bounce: e }
      : t;
  let { restSpeed: s, restDelta: i } = n;
  const o = n.keyframes[0],
    r = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: o },
    {
      stiffness: u,
      damping: c,
      mass: l,
      duration: f,
      velocity: h,
      isResolvedFromDuration: d,
    } = Ra({ ...n, velocity: -G(n.velocity || 0) }),
    p = h || 0,
    g = c / (2 * Math.sqrt(u * l)),
    m = r - o,
    y = G(Math.sqrt(u / l)),
    v = Math.abs(m) < 5;
  s || (s = v ? k.restSpeed.granular : k.restSpeed.default),
    i || (i = v ? k.restDelta.granular : k.restDelta.default);
  let x, T, A, M, R, V;
  if (g < 1)
    (A = tn(y, g)),
      (M = (p + g * y * m) / A),
      (x = (P) => {
        const C = Math.exp(-g * y * P);
        return r - C * (M * Math.sin(A * P) + m * Math.cos(A * P));
      }),
      (R = g * y * M + m * A),
      (V = g * y * m - M * A),
      (T = (P) =>
        Math.exp(-g * y * P) * (R * Math.sin(A * P) + V * Math.cos(A * P)));
  else if (g === 1) {
    x = (C) => r - Math.exp(-y * C) * (m + (p + y * m) * C);
    const P = p + y * m;
    T = (C) => Math.exp(-y * C) * (y * P * C - p);
  } else {
    const P = y * Math.sqrt(g * g - 1);
    x = (Y) => {
      const tt = Math.exp(-g * y * Y),
        z = Math.min(P * Y, 300);
      return (
        r - (tt * ((p + g * y * m) * Math.sinh(z) + P * m * Math.cosh(z))) / P
      );
    };
    const C = (p + g * y * m) / P,
      I = g * y * C - m * P,
      H = g * y * m - C * P;
    T = (Y) => {
      const tt = Math.exp(-g * y * Y),
        z = Math.min(P * Y, 300);
      return tt * (I * Math.sinh(z) + H * Math.cosh(z));
    };
  }
  const b = {
    calculatedDuration: (d && f) || null,
    velocity: (P) => $(T(P)),
    next: (P) => {
      if (!d && g < 1) {
        const I = Math.exp(-g * y * P),
          H = Math.sin(A * P),
          Y = Math.cos(A * P),
          tt = r - I * (M * H + m * Y),
          z = $(I * (R * H + V * Y));
        return (
          (a.done = Math.abs(z) <= s && Math.abs(r - tt) <= i),
          (a.value = a.done ? r : tt),
          a
        );
      }
      const C = x(P);
      if (d) a.done = P >= f;
      else {
        const I = $(T(P));
        a.done = Math.abs(I) <= s && Math.abs(r - C) <= i;
      }
      return (a.value = a.done ? r : C), a;
    },
    toString: () => {
      const P = Math.min(Bn(b), xe),
        C = fr((I) => b.next(P * I).value, P, 30);
      return P + "ms " + C;
    },
    toTransition: () => {},
  };
  return b;
}
Gt.applyToOptions = (t) => {
  const e = hr(t, 100, Gt);
  return (
    (t.ease = e.ease), (t.duration = $(e.duration)), (t.type = "keyframes"), t
  );
};
const La = 5;
function dr(t, e, n) {
  const s = Math.max(e - La, 0);
  return En(n - t(s), e - s);
}
function en({
  keyframes: t,
  velocity: e = 0,
  power: n = 0.8,
  timeConstant: s = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: r,
  min: a,
  max: u,
  restDelta: c = 0.5,
  restSpeed: l,
}) {
  const f = t[0],
    h = { done: !1, value: f },
    d = (V) => (a !== void 0 && V < a) || (u !== void 0 && V > u),
    p = (V) =>
      a === void 0
        ? u
        : u === void 0 || Math.abs(a - V) < Math.abs(u - V)
          ? a
          : u;
  let g = n * e;
  const m = f + g,
    y = r === void 0 ? m : r(m);
  y !== m && (g = y - f);
  const v = (V) => -g * Math.exp(-V / s),
    x = (V) => y + v(V),
    T = (V) => {
      const b = v(V),
        P = x(V);
      (h.done = Math.abs(b) <= c), (h.value = h.done ? y : P);
    };
  let A, M;
  const R = (V) => {
    d(h.value) &&
      ((A = V),
      (M = Gt({
        keyframes: [h.value, p(h.value)],
        velocity: dr(x, V, h.value),
        damping: i,
        stiffness: o,
        restDelta: c,
        restSpeed: l,
      })));
  };
  return (
    R(0),
    {
      calculatedDuration: null,
      next: (V) => {
        let b = !1;
        return (
          !M && A === void 0 && ((b = !0), T(V), R(V)),
          A !== void 0 && V >= A ? M.next(V - A) : (!b && T(V), h)
        );
      },
    }
  );
}
function ka(t, e, n) {
  const s = [],
    i = n || ft.mix || cr,
    o = t.length - 1;
  for (let r = 0; r < o; r++) {
    let a = i(t[r], t[r + 1]);
    if (e) {
      const u = Array.isArray(e) ? e[r] || K : e;
      a = qt(u, a);
    }
    s.push(a);
  }
  return s;
}
function Fn(t, e, { clamp: n = !0, ease: s, mixer: i } = {}) {
  const o = t.length;
  if (($t(o === e.length), o === 1)) return () => e[0];
  if (o === 2 && e[0] === e[1]) return () => e[1];
  const r = t[0] === t[1];
  t[0] > t[o - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
  const a = ka(e, s, i),
    u = a.length,
    c = (l) => {
      if (r && l < t[0]) return e[0];
      let f = 0;
      if (u > 1) for (; f < t.length - 2 && !(l < t[f + 1]); f++);
      const h = xt(t[f], t[f + 1], l);
      return a[f](h);
    };
  return n ? (l) => c(Q(t[0], t[o - 1], l)) : c;
}
function pr(t, e) {
  const n = t[t.length - 1];
  for (let s = 1; s <= e; s++) {
    const i = xt(0, e, s);
    t.push(L(n, 1, i));
  }
}
function On(t) {
  const e = [0];
  return pr(e, t.length - 1), e;
}
function Ia(t, e) {
  return t.map((n) => n * e);
}
function Ba(t, e) {
  return t.map(() => e || Ji).splice(0, t.length - 1);
}
function Nt({
  duration: t = 300,
  keyframes: e,
  times: n,
  ease: s = "easeInOut",
}) {
  const i = Qi(s) ? s.map(cs) : cs(s),
    o = { done: !1, value: e[0] },
    r = Ia(n && n.length === e.length ? n : On(e), t),
    a = Fn(r, e, { ease: Array.isArray(i) ? i : Ba(e, i) });
  return {
    calculatedDuration: t,
    next: (u) => ((o.value = a(u)), (o.done = u >= t), o),
  };
}
const Fa = (t) => t !== null;
function Ee(t, { repeat: e, repeatType: n = "loop" }, s, i = 1) {
  const o = t.filter(Fa),
    a = i < 0 || (e && n !== "loop" && e % 2 === 1) ? 0 : o.length - 1;
  return !a || s === void 0 ? o[a] : s;
}
const Oa = { decay: en, inertia: en, tween: Nt, keyframes: Nt, spring: Gt };
function mr(t) {
  typeof t.type == "string" && (t.type = Oa[t.type]);
}
class jn {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((e) => {
      this.resolve = e;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(e, n) {
    return this.finished.then(e, n);
  }
}
const ja = (t) => t / 100;
class Te extends jn {
  constructor(e) {
    super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.delayState = { done: !1, value: void 0 }),
      (this.stop = () => {
        const { motionValue: n } = this.options;
        n && n.updatedAt !== W.now() && this.tick(W.now()),
          (this.isStopped = !0),
          this.state !== "idle" && (this.teardown(), this.options.onStop?.());
      }),
      (this.options = e),
      this.initAnimation(),
      this.play(),
      e.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: e } = this;
    mr(e);
    const {
      type: n = Nt,
      repeat: s = 0,
      repeatDelay: i = 0,
      repeatType: o,
      velocity: r = 0,
    } = e;
    let { keyframes: a } = e;
    const u = n || Nt;
    u !== Nt &&
      typeof a[0] != "number" &&
      ((this.mixKeyframes = qt(ja, cr(a[0], a[1]))), (a = [0, 100]));
    const c = u({ ...e, keyframes: a });
    o === "mirror" &&
      (this.mirroredGenerator = u({
        ...e,
        keyframes: [...a].reverse(),
        velocity: -r,
      })),
      c.calculatedDuration === null && (c.calculatedDuration = Bn(c));
    const { calculatedDuration: l } = c;
    (this.calculatedDuration = l),
      (this.resolvedDuration = l + i),
      (this.totalDuration = this.resolvedDuration * (s + 1) - i),
      (this.generator = c);
  }
  updateTime(e) {
    const n = Math.round(e - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = n);
  }
  tick(e, n = !1) {
    const {
      generator: s,
      totalDuration: i,
      mixKeyframes: o,
      mirroredGenerator: r,
      resolvedDuration: a,
      calculatedDuration: u,
    } = this;
    if (this.startTime === null) return s.next(0);
    const {
      delay: c = 0,
      keyframes: l,
      repeat: f,
      repeatType: h,
      repeatDelay: d,
      type: p,
      onUpdate: g,
      finalKeyframe: m,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, e))
      : this.speed < 0 &&
        (this.startTime = Math.min(e - i / this.speed, this.startTime)),
      n ? (this.currentTime = e) : this.updateTime(e);
    const y = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1),
      v = this.playbackSpeed >= 0 ? y < 0 : y > i;
    (this.currentTime = Math.max(y, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = i);
    let x = this.currentTime,
      T = s;
    if (f) {
      const V = Math.min(this.currentTime, i) / a;
      let b = Math.floor(V),
        P = V % 1;
      !P && V >= 1 && (P = 1),
        P === 1 && b--,
        (b = Math.min(b, f + 1)),
        b % 2 &&
          (h === "reverse"
            ? ((P = 1 - P), d && (P -= d / a))
            : h === "mirror" && (T = r)),
        (x = Q(0, 1, P) * a);
    }
    let A;
    v
      ? ((this.delayState.value = l[0]), (A = this.delayState))
      : (A = T.next(x)),
      o && !v && (A.value = o(A.value));
    let { done: M } = A;
    !v &&
      u !== null &&
      (M =
        this.playbackSpeed >= 0
          ? this.currentTime >= i
          : this.currentTime <= 0);
    const R =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && M));
    return (
      R && p !== en && (A.value = Ee(l, this.options, m, this.speed)),
      g && g(A.value),
      R && this.finish(),
      A
    );
  }
  then(e, n) {
    return this.finished.then(e, n);
  }
  get duration() {
    return G(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: e = 0 } = this.options || {};
    return this.duration + G(e);
  }
  get time() {
    return G(this.currentTime);
  }
  set time(e) {
    (e = $(e)),
      (this.currentTime = e),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = e)
        : this.driver &&
          (this.startTime = this.driver.now() - e / this.playbackSpeed),
      this.driver
        ? this.driver.start(!1)
        : ((this.startTime = 0),
          (this.state = "paused"),
          (this.holdTime = e),
          this.tick(e));
  }
  getGeneratorVelocity() {
    const e = this.currentTime;
    if (e <= 0) return this.options.velocity || 0;
    if (this.generator.velocity) return this.generator.velocity(e);
    const n = this.generator.next(e).value;
    return dr((s) => this.generator.next(s).value, e, n);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(e) {
    const n = this.playbackSpeed !== e;
    n && this.driver && this.updateTime(W.now()),
      (this.playbackSpeed = e),
      n && this.driver && (this.time = G(this.currentTime));
  }
  play() {
    if (this.isStopped) return;
    const { driver: e = ba, startTime: n } = this.options;
    this.driver || (this.driver = e((i) => this.tick(i))),
      this.options.onPlay?.();
    const s = this.driver.now();
    this.state === "finished"
      ? (this.updateFinished(), (this.startTime = s))
      : this.holdTime !== null
        ? (this.startTime = s - this.holdTime)
        : this.startTime || (this.startTime = n ?? s),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    (this.state = "paused"),
      this.updateTime(W.now()),
      (this.holdTime = this.currentTime);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      this.options.onComplete?.();
  }
  cancel() {
    (this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      this.options.onCancel?.();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null);
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(e) {
    return (this.startTime = 0), this.tick(e, !0);
  }
  attachTimeline(e) {
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      this.driver?.stop(),
      e.observe(this)
    );
  }
}
function Na(t) {
  for (let e = 1; e < t.length; e++) t[e] ?? (t[e] = t[e - 1]);
}
const gt = (t) => (t * 180) / Math.PI,
  nn = (t) => {
    const e = gt(Math.atan2(t[1], t[0]));
    return sn(e);
  },
  Wa = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
    rotate: nn,
    rotateZ: nn,
    skewX: (t) => gt(Math.atan(t[1])),
    skewY: (t) => gt(Math.atan(t[2])),
    skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2,
  },
  sn = (t) => ((t = t % 360), t < 0 && (t += 360), t),
  ys = nn,
  vs = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
  xs = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
  Ua = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: vs,
    scaleY: xs,
    scale: (t) => (vs(t) + xs(t)) / 2,
    rotateX: (t) => sn(gt(Math.atan2(t[6], t[5]))),
    rotateY: (t) => sn(gt(Math.atan2(-t[2], t[0]))),
    rotateZ: ys,
    rotate: ys,
    skewX: (t) => gt(Math.atan(t[4])),
    skewY: (t) => gt(Math.atan(t[1])),
    skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2,
  };
function rn(t) {
  return t.includes("scale") ? 1 : 0;
}
function on(t, e) {
  if (!t || t === "none") return rn(e);
  const n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let s, i;
  if (n) (s = Ua), (i = n);
  else {
    const a = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    (s = Wa), (i = a);
  }
  if (!i) return rn(e);
  const o = s[e],
    r = i[1].split(",").map(Ka);
  return typeof o == "function" ? o(r) : r[o];
}
const Ha = (t, e) => {
  const { transform: n = "none" } = getComputedStyle(t);
  return on(n, e);
};
function Ka(t) {
  return parseFloat(t.trim());
}
const Mt = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Dt = new Set(Mt),
  Ts = (t) => t === Et || t === S,
  $a = new Set(["x", "y", "z"]),
  za = Mt.filter((t) => !$a.has(t));
function Ga(t) {
  const e = [];
  return (
    za.forEach((n) => {
      const s = t.getValue(n);
      s !== void 0 &&
        (e.push([n, s.get()]), s.set(n.startsWith("scale") ? 1 : 0));
    }),
    e
  );
}
const ct = {
  width: (
    { x: t },
    { paddingLeft: e = "0", paddingRight: n = "0", boxSizing: s },
  ) => {
    const i = t.max - t.min;
    return s === "border-box" ? i : i - parseFloat(e) - parseFloat(n);
  },
  height: (
    { y: t },
    { paddingTop: e = "0", paddingBottom: n = "0", boxSizing: s },
  ) => {
    const i = t.max - t.min;
    return s === "border-box" ? i : i - parseFloat(e) - parseFloat(n);
  },
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  x: (t, { transform: e }) => on(e, "x"),
  y: (t, { transform: e }) => on(e, "y"),
};
ct.translateX = ct.x;
ct.translateY = ct.y;
const yt = new Set();
let an = !1,
  ln = !1,
  un = !1;
function gr() {
  if (ln) {
    const t = Array.from(yt).filter((s) => s.needsMeasurement),
      e = new Set(t.map((s) => s.element)),
      n = new Map();
    e.forEach((s) => {
      const i = Ga(s);
      i.length && (n.set(s, i), s.render());
    }),
      t.forEach((s) => s.measureInitialState()),
      e.forEach((s) => {
        s.render();
        const i = n.get(s);
        i &&
          i.forEach(([o, r]) => {
            s.getValue(o)?.set(r);
          });
      }),
      t.forEach((s) => s.measureEndState()),
      t.forEach((s) => {
        s.suspendedScrollY !== void 0 && window.scrollTo(0, s.suspendedScrollY);
      });
  }
  (ln = !1), (an = !1), yt.forEach((t) => t.complete(un)), yt.clear();
}
function yr() {
  yt.forEach((t) => {
    t.readKeyframes(), t.needsMeasurement && (ln = !0);
  });
}
function _a() {
  (un = !0), yr(), gr(), (un = !1);
}
class Nn {
  constructor(e, n, s, i, o, r = !1) {
    (this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...e]),
      (this.onComplete = n),
      (this.name = s),
      (this.motionValue = i),
      (this.element = o),
      (this.isAsync = r);
  }
  scheduleResolve() {
    (this.state = "scheduled"),
      this.isAsync
        ? (yt.add(this), an || ((an = !0), E.read(yr), E.resolveKeyframes(gr)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: e,
      name: n,
      element: s,
      motionValue: i,
    } = this;
    if (e[0] === null) {
      const o = i?.get(),
        r = e[e.length - 1];
      if (o !== void 0) e[0] = o;
      else if (s && n) {
        const a = s.readValue(n, r);
        a != null && (e[0] = a);
      }
      e[0] === void 0 && (e[0] = r), i && o === void 0 && i.set(e[0]);
    }
    Na(e);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(e = !1) {
    (this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e),
      yt.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (yt.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const Xa = (t) => t.startsWith("--");
function vr(t, e, n) {
  Xa(e) ? t.style.setProperty(e, n) : (t.style[e] = n);
}
const Ya = {};
function Wn(t, e) {
  const n = Ki(t);
  return () => Ya[e] ?? n();
}
const Un = Wn(() => window.ScrollTimeline !== void 0, "scrollTimeline"),
  xr = Wn(() => window.ViewTimeline !== void 0, "viewTimeline"),
  Tr = Wn(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  Ft = ([t, e, n, s]) => `cubic-bezier(${t}, ${e}, ${n}, ${s})`,
  ws = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Ft([0, 0.65, 0.55, 1]),
    circOut: Ft([0.55, 0, 1, 0.45]),
    backIn: Ft([0.31, 0.01, 0.66, -0.59]),
    backOut: Ft([0.33, 1.53, 0.69, 0.99]),
  };
function wr(t, e) {
  if (t)
    return typeof t == "function"
      ? Tr()
        ? fr(t, e)
        : "ease-out"
      : er(t)
        ? Ft(t)
        : Array.isArray(t)
          ? t.map((n) => wr(n, e) || ws.easeOut)
          : ws[t];
}
function qa(
  t,
  e,
  n,
  {
    delay: s = 0,
    duration: i = 300,
    repeat: o = 0,
    repeatType: r = "loop",
    ease: a = "easeOut",
    times: u,
  } = {},
  c = void 0,
) {
  const l = { [e]: n };
  u && (l.offset = u);
  const f = wr(a, i);
  Array.isArray(f) && (l.easing = f);
  const h = {
    delay: s,
    duration: i,
    easing: Array.isArray(f) ? "linear" : f,
    fill: "both",
    iterations: o + 1,
    direction: r === "reverse" ? "alternate" : "normal",
  };
  return c && (h.pseudoElement = c), t.animate(l, h);
}
function Hn(t) {
  return typeof t == "function" && "applyToOptions" in t;
}
function Za({ type: t, ...e }) {
  return Hn(t) && Tr()
    ? t.applyToOptions(e)
    : (e.duration ?? (e.duration = 300), e.ease ?? (e.ease = "easeOut"), e);
}
class Sr extends jn {
  constructor(e) {
    if (
      (super(),
      (this.finishedTime = null),
      (this.isStopped = !1),
      (this.manualStartTime = null),
      !e)
    )
      return;
    const {
      element: n,
      name: s,
      keyframes: i,
      pseudoElement: o,
      allowFlatten: r = !1,
      finalKeyframe: a,
      onComplete: u,
    } = e;
    (this.isPseudoElement = !!o),
      (this.allowFlatten = r),
      (this.options = e),
      $t(typeof e.type != "string");
    const c = Za(e);
    (this.animation = qa(n, s, i, c, o)),
      c.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !o)) {
          const l = Ee(i, this.options, a, this.speed);
          this.updateMotionValue && this.updateMotionValue(l),
            vr(n, s, l),
            this.animation.cancel();
        }
        u?.(), this.notifyFinished();
      });
  }
  play() {
    this.isStopped ||
      ((this.manualStartTime = null),
      this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: e } = this;
    e === "idle" ||
      e === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    const e = this.options?.element;
    !this.isPseudoElement && e?.isConnected && this.animation.commitStyles?.();
  }
  get duration() {
    const e = this.animation.effect?.getComputedTiming?.().duration || 0;
    return G(Number(e));
  }
  get iterationDuration() {
    const { delay: e = 0 } = this.options || {};
    return this.duration + G(e);
  }
  get time() {
    return G(Number(this.animation.currentTime) || 0);
  }
  set time(e) {
    const n = this.finishedTime !== null;
    (this.manualStartTime = null),
      (this.finishedTime = null),
      (this.animation.currentTime = $(e)),
      n && this.animation.pause();
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(e) {
    e < 0 && (this.finishedTime = null), (this.animation.playbackRate = e);
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(e) {
    this.manualStartTime = this.animation.startTime = e;
  }
  attachTimeline({ timeline: e, rangeStart: n, rangeEnd: s, observe: i }) {
    return (
      this.allowFlatten &&
        this.animation.effect?.updateTiming({ easing: "linear" }),
      (this.animation.onfinish = null),
      e && Un()
        ? ((this.animation.timeline = e),
          n && (this.animation.rangeStart = n),
          s && (this.animation.rangeEnd = s),
          K)
        : i(this)
    );
  }
}
const Pr = { anticipate: Yi, backInOut: Xi, circInOut: Zi };
function Ja(t) {
  return t in Pr;
}
function Qa(t) {
  typeof t.ease == "string" && Ja(t.ease) && (t.ease = Pr[t.ease]);
}
const We = 10;
class tl extends Sr {
  constructor(e) {
    Qa(e),
      mr(e),
      super(e),
      e.startTime !== void 0 &&
        e.autoplay !== !1 &&
        (this.startTime = e.startTime),
      (this.options = e);
  }
  updateMotionValue(e) {
    const {
      motionValue: n,
      onUpdate: s,
      onComplete: i,
      element: o,
      ...r
    } = this.options;
    if (!n) return;
    if (e !== void 0) {
      n.set(e);
      return;
    }
    const a = new Te({ ...r, autoplay: !1 }),
      u = Math.max(We, W.now() - this.startTime),
      c = Q(0, We, u - We),
      l = a.sample(u).value,
      { name: f } = this.options;
    o && f && vr(o, f, l),
      n.setWithVelocity(a.sample(Math.max(0, u - c)).value, l, c),
      a.stop();
  }
}
const Ss = (t, e) =>
  e === "zIndex"
    ? !1
    : !!(
        typeof t == "number" ||
        Array.isArray(t) ||
        (typeof t == "string" &&
          (J.test(t) || t === "0") &&
          !t.startsWith("url("))
      );
function el(t) {
  const e = t[0];
  if (t.length === 1) return !0;
  for (let n = 0; n < t.length; n++) if (t[n] !== e) return !0;
}
function nl(t, e, n, s) {
  const i = t[0];
  if (i === null) return !1;
  if (e === "display" || e === "visibility") return !0;
  const o = t[t.length - 1],
    r = Ss(i, e),
    a = Ss(o, e);
  return !r || !a ? !1 : el(t) || ((n === "spring" || Hn(n)) && s);
}
function cn(t) {
  (t.duration = 0), (t.type = "keyframes");
}
const Ar = new Set(["opacity", "clipPath", "filter", "transform"]),
  sl = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function il(t) {
  for (let e = 0; e < t.length; e++)
    if (typeof t[e] == "string" && sl.test(t[e])) return !0;
  return !1;
}
const rl = new Set([
    "color",
    "backgroundColor",
    "outlineColor",
    "fill",
    "stroke",
    "borderColor",
    "borderTopColor",
    "borderRightColor",
    "borderBottomColor",
    "borderLeftColor",
  ]),
  ol = Ki(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function al(t) {
  const {
    motionValue: e,
    name: n,
    repeatDelay: s,
    repeatType: i,
    damping: o,
    type: r,
    keyframes: a,
  } = t;
  if (!(e?.owner?.current instanceof HTMLElement)) return !1;
  const { onUpdate: c, transformTemplate: l } = e.owner.getProps();
  return (
    ol() &&
    n &&
    (Ar.has(n) || (rl.has(n) && il(a))) &&
    (n !== "transform" || !l) &&
    !c &&
    !s &&
    i !== "mirror" &&
    o !== 0 &&
    r !== "inertia"
  );
}
const ll = 40;
class ul extends jn {
  constructor({
    autoplay: e = !0,
    delay: n = 0,
    type: s = "keyframes",
    repeat: i = 0,
    repeatDelay: o = 0,
    repeatType: r = "loop",
    keyframes: a,
    name: u,
    motionValue: c,
    element: l,
    ...f
  }) {
    super(),
      (this.stop = () => {
        this._animation && (this._animation.stop(), this.stopTimeline?.()),
          this.keyframeResolver?.cancel();
      }),
      (this.createdAt = W.now());
    const h = {
        autoplay: e,
        delay: n,
        type: s,
        repeat: i,
        repeatDelay: o,
        repeatType: r,
        name: u,
        motionValue: c,
        element: l,
        ...f,
      },
      d = l?.KeyframeResolver || Nn;
    (this.keyframeResolver = new d(
      a,
      (p, g, m) => this.onKeyframesResolved(p, g, h, !m),
      u,
      c,
      l,
    )),
      this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(e, n, s, i) {
    this.keyframeResolver = void 0;
    const {
      name: o,
      type: r,
      velocity: a,
      delay: u,
      isHandoff: c,
      onUpdate: l,
    } = s;
    this.resolvedAt = W.now();
    let f = !0;
    nl(e, o, r, a) ||
      ((f = !1),
      (ft.instantAnimations || !u) && l?.(Ee(e, s, n)),
      (e[0] = e[e.length - 1]),
      cn(s),
      (s.repeat = 0));
    const d = {
        startTime: i
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > ll
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: n,
        ...s,
        keyframes: e,
      },
      p = f && !c && al(d),
      g = d.motionValue?.owner?.current;
    let m;
    if (p)
      try {
        m = new tl({ ...d, element: g });
      } catch {
        m = new Te(d);
      }
    else m = new Te(d);
    m.finished
      .then(() => {
        this.notifyFinished();
      })
      .catch(K),
      this.pendingTimeline &&
        ((this.stopTimeline = m.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = m);
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(e, n) {
    return this.finished.finally(e).then(() => {});
  }
  get animation() {
    return (
      this._animation || (this.keyframeResolver?.resume(), _a()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(e) {
    this.animation.time = e;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(e) {
    this.animation.speed = e;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(e) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(e))
        : (this.pendingTimeline = e),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
  }
}
class cl {
  constructor(e) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = e.filter(Boolean));
  }
  get finished() {
    return Promise.all(this.animations.map((e) => e.finished));
  }
  getAll(e) {
    return this.animations[0][e];
  }
  setAll(e, n) {
    for (let s = 0; s < this.animations.length; s++) this.animations[s][e] = n;
  }
  attachTimeline(e) {
    const n = this.animations.map((s) => s.attachTimeline(e));
    return () => {
      n.forEach((s, i) => {
        s && s(), this.animations[i].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(e) {
    this.setAll("time", e);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(e) {
    this.setAll("speed", e);
  }
  get state() {
    return this.getAll("state");
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    return Ps(this.animations, "duration");
  }
  get iterationDuration() {
    return Ps(this.animations, "iterationDuration");
  }
  runAll(e) {
    this.animations.forEach((n) => n[e]());
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
function Ps(t, e) {
  let n = 0;
  for (let s = 0; s < t.length; s++) {
    const i = t[s][e];
    i !== null && i > n && (n = i);
  }
  return n;
}
class fl extends cl {
  then(e, n) {
    return this.finished.finally(e).then(() => {});
  }
}
function br(t, e, n, s = 0, i = 1) {
  const o = Array.from(t)
      .sort((c, l) => c.sortNodePosition(l))
      .indexOf(e),
    r = t.size,
    a = (r - 1) * s;
  return typeof n == "function" ? n(o, r) : i === 1 ? o * s : a - o * s;
}
const hl = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function dl(t) {
  const e = hl.exec(t);
  if (!e) return [,];
  const [, n, s, i] = e;
  return [`--${n ?? s}`, i];
}
function Vr(t, e, n = 1) {
  const [s, i] = dl(t);
  if (!s) return;
  const o = window.getComputedStyle(e).getPropertyValue(s);
  if (o) {
    const r = o.trim();
    return Wi(r) ? parseFloat(r) : r;
  }
  return Rn(i) ? Vr(i, e, n + 1) : i;
}
const pl = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  ml = (t) => ({
    type: "spring",
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  gl = { type: "keyframes", duration: 0.8 },
  yl = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  vl = (t, { keyframes: e }) =>
    e.length > 2
      ? gl
      : Dt.has(t)
        ? t.startsWith("scale")
          ? ml(e[1])
          : pl
        : yl;
function Kn(t, e) {
  if (t?.inherit && e) {
    const { inherit: n, ...s } = t;
    return { ...e, ...s };
  }
  return t;
}
function $n(t, e) {
  const n = t?.[e] ?? t?.default ?? t;
  return n !== t ? Kn(n, t) : n;
}
const xl = new Set([
  "when",
  "delay",
  "delayChildren",
  "staggerChildren",
  "staggerDirection",
  "repeat",
  "repeatType",
  "repeatDelay",
  "from",
  "elapsed",
]);
function Tl(t) {
  for (const e in t) if (!xl.has(e)) return !0;
  return !1;
}
const zn =
  (t, e, n, s = {}, i, o) =>
  (r) => {
    const a = $n(s, t) || {},
      u = a.delay || s.delay || 0;
    let { elapsed: c = 0 } = s;
    c = c - $(u);
    const l = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: e.getVelocity(),
      ...a,
      delay: -c,
      onUpdate: (h) => {
        e.set(h), a.onUpdate && a.onUpdate(h);
      },
      onComplete: () => {
        r(), a.onComplete && a.onComplete();
      },
      name: t,
      motionValue: e,
      element: o ? void 0 : i,
    };
    Tl(a) || Object.assign(l, vl(t, l)),
      l.duration && (l.duration = $(l.duration)),
      l.repeatDelay && (l.repeatDelay = $(l.repeatDelay)),
      l.from !== void 0 && (l.keyframes[0] = l.from);
    let f = !1;
    if (
      ((l.type === !1 || (l.duration === 0 && !l.repeatDelay)) &&
        (cn(l), l.delay === 0 && (f = !0)),
      (ft.instantAnimations || ft.skipAnimations || i?.shouldSkipAnimations) &&
        ((f = !0), cn(l), (l.delay = 0)),
      (l.allowFlatten = !a.type && !a.ease),
      f && !o && e.get() !== void 0)
    ) {
      const h = Ee(l.keyframes, a);
      if (h !== void 0) {
        E.update(() => {
          l.onUpdate(h), l.onComplete();
        });
        return;
      }
    }
    return a.isSync ? new Te(l) : new ul(l);
  };
function As(t) {
  const e = [{}, {}];
  return (
    t?.values.forEach((n, s) => {
      (e[0][s] = n.get()), (e[1][s] = n.getVelocity());
    }),
    e
  );
}
function Gn(t, e, n, s) {
  if (typeof e == "function") {
    const [i, o] = As(s);
    e = e(n !== void 0 ? n : t.custom, i, o);
  }
  if (
    (typeof e == "string" && (e = t.variants && t.variants[e]),
    typeof e == "function")
  ) {
    const [i, o] = As(s);
    e = e(n !== void 0 ? n : t.custom, i, o);
  }
  return e;
}
function vt(t, e, n) {
  const s = t.getProps();
  return Gn(s, e, n !== void 0 ? n : s.custom, t);
}
const Cr = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...Mt,
  ]),
  bs = 30,
  wl = (t) => !isNaN(parseFloat(t)),
  Wt = { current: void 0 };
class Sl {
  constructor(e, n = {}) {
    (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (s) => {
        const i = W.now();
        if (
          (this.updatedAt !== i && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(s),
          this.current !== this.prev &&
            (this.events.change?.notify(this.current), this.dependents))
        )
          for (const o of this.dependents) o.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(e),
      (this.owner = n.owner);
  }
  setCurrent(e) {
    (this.current = e),
      (this.updatedAt = W.now()),
      this.canTrackVelocity === null &&
        e !== void 0 &&
        (this.canTrackVelocity = wl(this.current));
  }
  setPrevFrameValue(e = this.current) {
    (this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(e) {
    return this.on("change", e);
  }
  on(e, n) {
    this.events[e] || (this.events[e] = new Cn());
    const s = this.events[e].add(n);
    return e === "change"
      ? () => {
          s(),
            E.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : s;
  }
  clearListeners() {
    for (const e in this.events) this.events[e].clear();
  }
  attach(e, n) {
    (this.passiveEffect = e), (this.stopPassiveEffect = n);
  }
  set(e) {
    this.passiveEffect
      ? this.passiveEffect(e, this.updateAndNotify)
      : this.updateAndNotify(e);
  }
  setWithVelocity(e, n, s) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = e),
      (this.prevUpdatedAt = this.updatedAt - s);
  }
  jump(e, n = !0) {
    this.updateAndNotify(e),
      (this.prev = e),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(e) {
    this.dependents || (this.dependents = new Set()), this.dependents.add(e);
  }
  removeDependent(e) {
    this.dependents && this.dependents.delete(e);
  }
  get() {
    return Wt.current && Wt.current.push(this), this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const e = W.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      e - this.updatedAt > bs
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, bs);
    return En(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(e) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = e(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.dependents?.clear(),
      this.events.destroy?.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function _(t, e) {
  return new Sl(t, e);
}
const fn = (t) => Array.isArray(t);
function Pl(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, _(n));
}
function Al(t) {
  return fn(t) ? t[t.length - 1] || 0 : t;
}
function bl(t, e) {
  const n = vt(t, e);
  let { transitionEnd: s = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...s };
  for (const r in o) {
    const a = Al(o[r]);
    Pl(t, r, a);
  }
}
const O = (t) => !!(t && t.getVelocity);
function Vl(t) {
  return !!(O(t) && t.add);
}
function hn(t, e) {
  const n = t.getValue("willChange");
  if (Vl(n)) return n.add(e);
  if (!n && ft.WillChange) {
    const s = new ft.WillChange("auto");
    t.addValue("willChange", s), s.add(e);
  }
}
function _n(t) {
  return t.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`);
}
const Cl = "framerAppearId",
  Er = "data-" + _n(Cl);
function Mr(t) {
  return t.props[Er];
}
function El({ protectedKeys: t, needsAnimating: e }, n) {
  const s = t.hasOwnProperty(n) && e[n] !== !0;
  return (e[n] = !1), s;
}
function Xn(t, e, { delay: n = 0, transitionOverride: s, type: i } = {}) {
  let { transition: o, transitionEnd: r, ...a } = e;
  const u = t.getDefaultTransition();
  o = o ? Kn(o, u) : u;
  const c = o?.reduceMotion;
  s && (o = s);
  const l = [],
    f = i && t.animationState && t.animationState.getState()[i];
  for (const h in a) {
    const d = t.getValue(h, t.latestValues[h] ?? null),
      p = a[h];
    if (p === void 0 || (f && El(f, h))) continue;
    const g = { delay: n, ...$n(o || {}, h) },
      m = d.get();
    if (
      m !== void 0 &&
      !d.isAnimating() &&
      !Array.isArray(p) &&
      p === m &&
      !g.velocity
    ) {
      E.update(() => d.set(p));
      continue;
    }
    let y = !1;
    if (window.MotionHandoffAnimation) {
      const T = Mr(t);
      if (T) {
        const A = window.MotionHandoffAnimation(T, h, E);
        A !== null && ((g.startTime = A), (y = !0));
      }
    }
    hn(t, h);
    const v = c ?? t.shouldReduceMotion;
    d.start(zn(h, d, p, v && Cr.has(h) ? { type: !1 } : g, t, y));
    const x = d.animation;
    x && l.push(x);
  }
  if (r) {
    const h = () =>
      E.update(() => {
        r && bl(t, r);
      });
    l.length ? Promise.all(l).then(h) : h();
  }
  return l;
}
function dn(t, e, n = {}) {
  const s = vt(t, e, n.type === "exit" ? t.presenceContext?.custom : void 0);
  let { transition: i = t.getDefaultTransition() || {} } = s || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = s ? () => Promise.all(Xn(t, s, n)) : () => Promise.resolve(),
    r =
      t.variantChildren && t.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: l,
              staggerDirection: f,
            } = i;
            return Ml(t, e, u, c, l, f, n);
          }
        : () => Promise.resolve(),
    { when: a } = i;
  if (a) {
    const [u, c] = a === "beforeChildren" ? [o, r] : [r, o];
    return u().then(() => c());
  } else return Promise.all([o(), r(n.delay)]);
}
function Ml(t, e, n = 0, s = 0, i = 0, o = 1, r) {
  const a = [];
  for (const u of t.variantChildren)
    u.notify("AnimationStart", e),
      a.push(
        dn(u, e, {
          ...r,
          delay:
            n +
            (typeof s == "function" ? 0 : s) +
            br(t.variantChildren, u, s, i, o),
        }).then(() => u.notify("AnimationComplete", e)),
      );
  return Promise.all(a);
}
function Dl(t, e, n = {}) {
  t.notify("AnimationStart", e);
  let s;
  if (Array.isArray(e)) {
    const i = e.map((o) => dn(t, o, n));
    s = Promise.all(i);
  } else if (typeof e == "string") s = dn(t, e, n);
  else {
    const i = typeof e == "function" ? vt(t, e, n.custom) : e;
    s = Promise.all(Xn(t, i, n));
  }
  return s.then(() => {
    t.notify("AnimationComplete", e);
  });
}
const Rl = { test: (t) => t === "auto", parse: (t) => t },
  Dr = (t) => (e) => e.test(t),
  Rr = [Et, S, rt, ut, oa, ra, Rl],
  Vs = (t) => Rr.find(Dr(t));
function Ll(t) {
  return typeof t == "number"
    ? t === 0
    : t !== null
      ? t === "none" || t === "0" || Hi(t)
      : !0;
}
const kl = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Il(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow") return t;
  const [s] = n.match(Ln) || [];
  if (!s) return t;
  const i = n.replace(s, "");
  let o = kl.has(e) ? 1 : 0;
  return s !== n && (o *= 100), e + "(" + o + i + ")";
}
const Bl = /\b([a-z-]*)\(.*?\)/gu,
  pn = {
    ...J,
    getAnimatableNone: (t) => {
      const e = t.match(Bl);
      return e ? e.map(Il).join(" ") : t;
    },
  },
  mn = {
    ...J,
    getAnimatableNone: (t) => {
      const e = J.parse(t);
      return J.createTransformer(t)(
        e.map((s) =>
          typeof s == "number"
            ? 0
            : typeof s == "object"
              ? { ...s, alpha: 1 }
              : s,
        ),
      );
    },
  },
  Cs = { ...Et, transform: Math.round },
  Fl = {
    rotate: ut,
    rotateX: ut,
    rotateY: ut,
    rotateZ: ut,
    scale: ie,
    scaleX: ie,
    scaleY: ie,
    scaleZ: ie,
    skew: ut,
    skewX: ut,
    skewY: ut,
    distance: S,
    translateX: S,
    translateY: S,
    translateZ: S,
    x: S,
    y: S,
    z: S,
    perspective: S,
    transformPerspective: S,
    opacity: zt,
    originX: hs,
    originY: hs,
    originZ: S,
  },
  Yn = {
    borderWidth: S,
    borderTopWidth: S,
    borderRightWidth: S,
    borderBottomWidth: S,
    borderLeftWidth: S,
    borderRadius: S,
    borderTopLeftRadius: S,
    borderTopRightRadius: S,
    borderBottomRightRadius: S,
    borderBottomLeftRadius: S,
    width: S,
    maxWidth: S,
    height: S,
    maxHeight: S,
    top: S,
    right: S,
    bottom: S,
    left: S,
    inset: S,
    insetBlock: S,
    insetBlockStart: S,
    insetBlockEnd: S,
    insetInline: S,
    insetInlineStart: S,
    insetInlineEnd: S,
    padding: S,
    paddingTop: S,
    paddingRight: S,
    paddingBottom: S,
    paddingLeft: S,
    paddingBlock: S,
    paddingBlockStart: S,
    paddingBlockEnd: S,
    paddingInline: S,
    paddingInlineStart: S,
    paddingInlineEnd: S,
    margin: S,
    marginTop: S,
    marginRight: S,
    marginBottom: S,
    marginLeft: S,
    marginBlock: S,
    marginBlockStart: S,
    marginBlockEnd: S,
    marginInline: S,
    marginInlineStart: S,
    marginInlineEnd: S,
    fontSize: S,
    backgroundPositionX: S,
    backgroundPositionY: S,
    ...Fl,
    zIndex: Cs,
    fillOpacity: zt,
    strokeOpacity: zt,
    numOctaves: Cs,
  },
  Ol = {
    ...Yn,
    color: F,
    backgroundColor: F,
    outlineColor: F,
    fill: F,
    stroke: F,
    borderColor: F,
    borderTopColor: F,
    borderRightColor: F,
    borderBottomColor: F,
    borderLeftColor: F,
    filter: pn,
    WebkitFilter: pn,
    mask: mn,
    WebkitMask: mn,
  },
  Lr = (t) => Ol[t],
  jl = new Set([pn, mn]);
function kr(t, e) {
  let n = Lr(t);
  return (
    jl.has(n) || (n = J), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
  );
}
const Nl = new Set(["auto", "none", "0"]);
function Wl(t, e, n) {
  let s = 0,
    i;
  for (; s < t.length && !i; ) {
    const o = t[s];
    typeof o == "string" && !Nl.has(o) && Vt(o).values.length && (i = t[s]),
      s++;
  }
  if (i && n) for (const o of e) t[o] = kr(n, i);
}
class Ul extends Nn {
  constructor(e, n, s, i, o) {
    super(e, n, s, i, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, element: n, name: s } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < e.length; l++) {
      let f = e[l];
      if (typeof f == "string" && ((f = f.trim()), Rn(f))) {
        const h = Vr(f, n.current);
        h !== void 0 && (e[l] = h),
          l === e.length - 1 && (this.finalKeyframe = f);
      }
    }
    if ((this.resolveNoneKeyframes(), !Cr.has(s) || e.length !== 2)) return;
    const [i, o] = e,
      r = Vs(i),
      a = Vs(o),
      u = fs(i),
      c = fs(o);
    if (u !== c && ct[s]) {
      this.needsMeasurement = !0;
      return;
    }
    if (r !== a)
      if (Ts(r) && Ts(a))
        for (let l = 0; l < e.length; l++) {
          const f = e[l];
          typeof f == "string" && (e[l] = parseFloat(f));
        }
      else ct[s] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: e, name: n } = this,
      s = [];
    for (let i = 0; i < e.length; i++) (e[i] === null || Ll(e[i])) && s.push(i);
    s.length && Wl(e, s, n);
  }
  measureInitialState() {
    const { element: e, unresolvedKeyframes: n, name: s } = this;
    if (!e || !e.current) return;
    s === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = ct[s](
        e.measureViewportBox(),
        window.getComputedStyle(e.current),
      )),
      (n[0] = this.measuredOrigin);
    const i = n[n.length - 1];
    i !== void 0 && e.getValue(s, i).jump(i, !1);
  }
  measureEndState() {
    const { element: e, name: n, unresolvedKeyframes: s } = this;
    if (!e || !e.current) return;
    const i = e.getValue(n);
    i && i.jump(this.measuredOrigin, !1);
    const o = s.length - 1,
      r = s[o];
    (s[o] = ct[n](e.measureViewportBox(), window.getComputedStyle(e.current))),
      r !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = r),
      this.removedTransforms?.length &&
        this.removedTransforms.forEach(([a, u]) => {
          e.getValue(a).set(u);
        }),
      this.resolveNoneKeyframes();
  }
}
function Me(t, e, n) {
  if (t == null) return [];
  if (t instanceof EventTarget) return [t];
  if (typeof t == "string") {
    let s = document;
    e && (s = e.current);
    const i = n?.[t] ?? s.querySelectorAll(t);
    return i ? Array.from(i) : [];
  }
  return Array.from(t).filter((s) => s != null);
}
const Ir = (t, e) => (e && typeof t == "number" ? e.transform(t) : t);
function Ut(t) {
  return Ui(t) && "offsetHeight" in t && !("ownerSVGElement" in t);
}
const { schedule: qn } = nr(queueMicrotask, !1),
  Z = { x: !1, y: !1 };
function Br() {
  return Z.x || Z.y;
}
function Hl(t) {
  return t === "x" || t === "y"
    ? Z[t]
      ? null
      : ((Z[t] = !0),
        () => {
          Z[t] = !1;
        })
    : Z.x || Z.y
      ? null
      : ((Z.x = Z.y = !0),
        () => {
          Z.x = Z.y = !1;
        });
}
function Fr(t, e) {
  const n = Me(t),
    s = new AbortController(),
    i = { passive: !0, ...e, signal: s.signal };
  return [n, i, () => s.abort()];
}
function Kl(t) {
  return !(t.pointerType === "touch" || Br());
}
function $l(t, e, n = {}) {
  const [s, i, o] = Fr(t, n);
  return (
    s.forEach((r) => {
      let a = !1,
        u = !1,
        c;
      const l = () => {
          r.removeEventListener("pointerleave", p);
        },
        f = (m) => {
          c && (c(m), (c = void 0)), l();
        },
        h = (m) => {
          (a = !1),
            window.removeEventListener("pointerup", h),
            window.removeEventListener("pointercancel", h),
            u && ((u = !1), f(m));
        },
        d = () => {
          (a = !0),
            window.addEventListener("pointerup", h, i),
            window.addEventListener("pointercancel", h, i);
        },
        p = (m) => {
          if (m.pointerType !== "touch") {
            if (a) {
              u = !0;
              return;
            }
            f(m);
          }
        },
        g = (m) => {
          if (!Kl(m)) return;
          u = !1;
          const y = e(r, m);
          typeof y == "function" &&
            ((c = y), r.addEventListener("pointerleave", p, i));
        };
      r.addEventListener("pointerenter", g, i),
        r.addEventListener("pointerdown", d, i);
    }),
    o
  );
}
const Or = (t, e) => (e ? (t === e ? !0 : Or(t, e.parentElement)) : !1),
  Zn = (t) =>
    t.pointerType === "mouse"
      ? typeof t.button != "number" || t.button <= 0
      : t.isPrimary !== !1,
  zl = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function Gl(t) {
  return zl.has(t.tagName) || t.isContentEditable === !0;
}
const _l = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function Xl(t) {
  return _l.has(t.tagName) || t.isContentEditable === !0;
}
const fe = new WeakSet();
function Es(t) {
  return (e) => {
    e.key === "Enter" && t(e);
  };
}
function Ue(t, e) {
  t.dispatchEvent(
    new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 }),
  );
}
const Yl = (t, e) => {
  const n = t.currentTarget;
  if (!n) return;
  const s = Es(() => {
    if (fe.has(n)) return;
    Ue(n, "down");
    const i = Es(() => {
        Ue(n, "up");
      }),
      o = () => Ue(n, "cancel");
    n.addEventListener("keyup", i, e), n.addEventListener("blur", o, e);
  });
  n.addEventListener("keydown", s, e),
    n.addEventListener("blur", () => n.removeEventListener("keydown", s), e);
};
function Ms(t) {
  return Zn(t) && !Br();
}
const Ds = new WeakSet();
function ql(t, e, n = {}) {
  const [s, i, o] = Fr(t, n),
    r = (a) => {
      const u = a.currentTarget;
      if (!Ms(a) || Ds.has(a)) return;
      fe.add(u), n.stopPropagation && Ds.add(a);
      const c = e(u, a),
        l = (d, p) => {
          window.removeEventListener("pointerup", f),
            window.removeEventListener("pointercancel", h),
            fe.has(u) && fe.delete(u),
            Ms(d) && typeof c == "function" && c(d, { success: p });
        },
        f = (d) => {
          l(
            d,
            u === window ||
              u === document ||
              n.useGlobalTarget ||
              Or(u, d.target),
          );
        },
        h = (d) => {
          l(d, !1);
        };
      window.addEventListener("pointerup", f, i),
        window.addEventListener("pointercancel", h, i);
    };
  return (
    s.forEach((a) => {
      (n.useGlobalTarget ? window : a).addEventListener("pointerdown", r, i),
        Ut(a) &&
          (a.addEventListener("focus", (c) => Yl(c, i)),
          !Gl(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0));
    }),
    o
  );
}
function De(t) {
  return Ui(t) && "ownerSVGElement" in t;
}
const he = new WeakMap();
let de;
const jr = (t, e, n) => (s, i) =>
    i && i[0]
      ? i[0][t + "Size"]
      : De(s) && "getBBox" in s
        ? s.getBBox()[e]
        : s[n],
  Zl = jr("inline", "width", "offsetWidth"),
  Jl = jr("block", "height", "offsetHeight");
function Ql({ target: t, borderBoxSize: e }) {
  he.get(t)?.forEach((n) => {
    n(t, {
      get width() {
        return Zl(t, e);
      },
      get height() {
        return Jl(t, e);
      },
    });
  });
}
function tu(t) {
  t.forEach(Ql);
}
function eu() {
  typeof ResizeObserver > "u" || (de = new ResizeObserver(tu));
}
function nu(t, e) {
  de || eu();
  const n = Me(t);
  return (
    n.forEach((s) => {
      let i = he.get(s);
      i || ((i = new Set()), he.set(s, i)), i.add(e), de?.observe(s);
    }),
    () => {
      n.forEach((s) => {
        const i = he.get(s);
        i?.delete(e), i?.size || de?.unobserve(s);
      });
    }
  );
}
const pe = new Set();
let Pt;
function su() {
  (Pt = () => {
    const t = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      },
    };
    pe.forEach((e) => e(t));
  }),
    window.addEventListener("resize", Pt);
}
function iu(t) {
  return (
    pe.add(t),
    Pt || su(),
    () => {
      pe.delete(t),
        !pe.size &&
          typeof Pt == "function" &&
          (window.removeEventListener("resize", Pt), (Pt = void 0));
    }
  );
}
function gn(t, e) {
  return typeof t == "function" ? iu(t) : nu(t, e);
}
function Nr(t, e) {
  let n;
  const s = () => {
    const { currentTime: i } = e,
      r = (i === null ? 0 : i.value) / 100;
    n !== r && t(r), (n = r);
  };
  return E.preUpdate(s, !0), () => X(s);
}
function Wr(t) {
  return De(t) && t.tagName === "svg";
}
function ru(...t) {
  const e = !Array.isArray(t[0]),
    n = e ? 0 : -1,
    s = t[0 + n],
    i = t[1 + n],
    o = t[2 + n],
    r = t[3 + n],
    a = Fn(i, o, r);
  return e ? a(s) : a;
}
const ou = [...Rr, F, J],
  au = (t) => ou.find(Dr(t)),
  Rs = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  At = () => ({ x: Rs(), y: Rs() }),
  Ls = () => ({ min: 0, max: 0 }),
  B = () => ({ x: Ls(), y: Ls() }),
  _t = new WeakMap();
function Re(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
function Xt(t) {
  return typeof t == "string" || Array.isArray(t);
}
const Jn = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Qn = ["initial", ...Jn];
function Le(t) {
  return Re(t.animate) || Qn.some((e) => Xt(t[e]));
}
function Ur(t) {
  return !!(Le(t) || t.variants);
}
function lu(t, e, n) {
  for (const s in e) {
    const i = e[s],
      o = n[s];
    if (O(i)) t.addValue(s, i);
    else if (O(o)) t.addValue(s, _(i, { owner: t }));
    else if (o !== i)
      if (t.hasValue(s)) {
        const r = t.getValue(s);
        r.liveStyle === !0 ? r.jump(i) : r.hasAnimated || r.set(i);
      } else {
        const r = t.getStaticValue(s);
        t.addValue(s, _(r !== void 0 ? r : i, { owner: t }));
      }
  }
  for (const s in n) e[s] === void 0 && t.removeValue(s);
  return e;
}
const yn = { current: null },
  Hr = { current: !1 },
  uu = typeof window < "u";
function cu() {
  if (((Hr.current = !0), !!uu))
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"),
        e = () => (yn.current = t.matches);
      t.addEventListener("change", e), e();
    } else yn.current = !1;
}
const ks = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
let we = {};
function Kr(t) {
  we = t;
}
function fu() {
  return we;
}
class $r {
  scrapeMotionValuesFromProps(e, n, s) {
    return {};
  }
  constructor(
    {
      parent: e,
      props: n,
      presenceContext: s,
      reducedMotionConfig: i,
      skipAnimations: o,
      blockInitialAnimation: r,
      visualState: a,
    },
    u = {},
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.shouldSkipAnimations = !1),
      (this.values = new Map()),
      (this.KeyframeResolver = Nn),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.hasBeenMounted = !1),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const d = W.now();
        this.renderScheduledAt < d &&
          ((this.renderScheduledAt = d), E.render(this.render, !1, !0));
      });
    const { latestValues: c, renderState: l } = a;
    (this.latestValues = c),
      (this.baseTarget = { ...c }),
      (this.initialValues = n.initial ? { ...c } : {}),
      (this.renderState = l),
      (this.parent = e),
      (this.props = n),
      (this.presenceContext = s),
      (this.depth = e ? e.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.skipAnimationsConfig = o),
      (this.options = u),
      (this.blockInitialAnimation = !!r),
      (this.isControllingVariants = Le(n)),
      (this.isVariantNode = Ur(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(e && e.current));
    const { willChange: f, ...h } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this,
    );
    for (const d in h) {
      const p = h[d];
      c[d] !== void 0 && O(p) && p.set(c[d]);
    }
  }
  mount(e) {
    if (this.hasBeenMounted)
      for (const n in this.initialValues)
        this.values.get(n)?.jump(this.initialValues[n]),
          (this.latestValues[n] = this.initialValues[n]);
    (this.current = e),
      _t.set(e, this),
      this.projection && !this.projection.instance && this.projection.mount(e),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, s) => this.bindToMotionValue(s, n)),
      this.reducedMotionConfig === "never"
        ? (this.shouldReduceMotion = !1)
        : this.reducedMotionConfig === "always"
          ? (this.shouldReduceMotion = !0)
          : (Hr.current || cu(), (this.shouldReduceMotion = yn.current)),
      (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
      this.parent?.addChild(this),
      this.update(this.props, this.presenceContext),
      (this.hasBeenMounted = !0);
  }
  unmount() {
    this.projection && this.projection.unmount(),
      X(this.notifyUpdate),
      X(this.render),
      this.valueSubscriptions.forEach((e) => e()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent?.removeChild(this);
    for (const e in this.events) this.events[e].clear();
    for (const e in this.features) {
      const n = this.features[e];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  addChild(e) {
    this.children.add(e),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(e);
  }
  removeChild(e) {
    this.children.delete(e),
      this.enteringChildren && this.enteringChildren.delete(e);
  }
  bindToMotionValue(e, n) {
    if (
      (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(),
      n.accelerate && Ar.has(e) && this.current instanceof HTMLElement)
    ) {
      const {
          factory: r,
          keyframes: a,
          times: u,
          ease: c,
          duration: l,
        } = n.accelerate,
        f = new Sr({
          element: this.current,
          name: e,
          keyframes: a,
          times: u,
          ease: c,
          duration: $(l),
        }),
        h = r(f);
      this.valueSubscriptions.set(e, () => {
        h(), f.cancel();
      });
      return;
    }
    const s = Dt.has(e);
    s && this.onBindTransform && this.onBindTransform();
    const i = n.on("change", (r) => {
      (this.latestValues[e] = r),
        this.props.onUpdate && E.preRender(this.notifyUpdate),
        s && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender();
    });
    let o;
    typeof window < "u" &&
      window.MotionCheckAppearSync &&
      (o = window.MotionCheckAppearSync(this, e, n)),
      this.valueSubscriptions.set(e, () => {
        i(), o && o(), n.owner && n.stop();
      });
  }
  sortNodePosition(e) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== e.type
      ? 0
      : this.sortInstanceNodePosition(this.current, e.current);
  }
  updateFeatures() {
    let e = "animation";
    for (e in we) {
      const n = we[e];
      if (!n) continue;
      const { isEnabled: s, Feature: i } = n;
      if (
        (!this.features[e] &&
          i &&
          s(this.props) &&
          (this.features[e] = new i(this)),
        this.features[e])
      ) {
        const o = this.features[e];
        o.isMounted ? o.update() : (o.mount(), (o.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : B();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, n) {
    this.latestValues[e] = n;
  }
  update(e, n) {
    (e.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = e),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let s = 0; s < ks.length; s++) {
      const i = ks[s];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const o = "on" + i,
        r = e[o];
      r && (this.propEventSubscriptions[i] = this.on(i, r));
    }
    (this.prevMotionValues = lu(
      this,
      this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(e) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(e),
        () => n.variantChildren.delete(e)
      );
  }
  addValue(e, n) {
    const s = this.values.get(e);
    n !== s &&
      (s && this.removeValue(e),
      this.bindToMotionValue(e, n),
      this.values.set(e, n),
      (this.latestValues[e] = n.get()));
  }
  removeValue(e) {
    this.values.delete(e);
    const n = this.valueSubscriptions.get(e);
    n && (n(), this.valueSubscriptions.delete(e)),
      delete this.latestValues[e],
      this.removeValueFromRenderState(e, this.renderState);
  }
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, n) {
    if (this.props.values && this.props.values[e]) return this.props.values[e];
    let s = this.values.get(e);
    return (
      s === void 0 &&
        n !== void 0 &&
        ((s = _(n === null ? void 0 : n, { owner: this })),
        this.addValue(e, s)),
      s
    );
  }
  readValue(e, n) {
    let s =
      this.latestValues[e] !== void 0 || !this.current
        ? this.latestValues[e]
        : (this.getBaseTargetFromProps(this.props, e) ??
          this.readValueFromInstance(this.current, e, this.options));
    return (
      s != null &&
        (typeof s == "string" && (Wi(s) || Hi(s))
          ? (s = parseFloat(s))
          : !au(s) && J.test(n) && (s = kr(e, n)),
        this.setBaseTarget(e, O(s) ? s.get() : s)),
      O(s) ? s.get() : s
    );
  }
  setBaseTarget(e, n) {
    this.baseTarget[e] = n;
  }
  getBaseTarget(e) {
    const { initial: n } = this.props;
    let s;
    if (typeof n == "string" || typeof n == "object") {
      const o = Gn(this.props, n, this.presenceContext?.custom);
      o && (s = o[e]);
    }
    if (n && s !== void 0) return s;
    const i = this.getBaseTargetFromProps(this.props, e);
    return i !== void 0 && !O(i)
      ? i
      : this.initialValues[e] !== void 0 && s === void 0
        ? void 0
        : this.baseTarget[e];
  }
  on(e, n) {
    return this.events[e] || (this.events[e] = new Cn()), this.events[e].add(n);
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n);
  }
  scheduleRenderMicrotask() {
    qn.render(this.render);
  }
}
class zr extends $r {
  constructor() {
    super(...arguments), (this.KeyframeResolver = Ul);
  }
  sortInstanceNodePosition(e, n) {
    return e.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, n) {
    const s = e.style;
    return s ? s[n] : void 0;
  }
  removeValueFromRenderState(e, { vars: n, style: s }) {
    delete n[e], delete s[e];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: e } = this.props;
    O(e) &&
      (this.childSubscription = e.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
class ht {
  constructor(e) {
    (this.isMounted = !1), (this.node = e);
  }
  update() {}
}
function Gr({ top: t, left: e, right: n, bottom: s }) {
  return { x: { min: e, max: n }, y: { min: t, max: s } };
}
function hu({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function du(t, e) {
  if (!e) return t;
  const n = e({ x: t.left, y: t.top }),
    s = e({ x: t.right, y: t.bottom });
  return { top: n.y, left: n.x, bottom: s.y, right: s.x };
}
function He(t) {
  return t === void 0 || t === 1;
}
function vn({ scale: t, scaleX: e, scaleY: n }) {
  return !He(t) || !He(e) || !He(n);
}
function pt(t) {
  return (
    vn(t) ||
    _r(t) ||
    t.z ||
    t.rotate ||
    t.rotateX ||
    t.rotateY ||
    t.skewX ||
    t.skewY
  );
}
function _r(t) {
  return Is(t.x) || Is(t.y);
}
function Is(t) {
  return t && t !== "0%";
}
function Se(t, e, n) {
  const s = t - n,
    i = e * s;
  return n + i;
}
function Bs(t, e, n, s, i) {
  return i !== void 0 && (t = Se(t, i, s)), Se(t, n, s) + e;
}
function xn(t, e = 0, n = 1, s, i) {
  (t.min = Bs(t.min, e, n, s, i)), (t.max = Bs(t.max, e, n, s, i));
}
function Xr(t, { x: e, y: n }) {
  xn(t.x, e.translate, e.scale, e.originPoint),
    xn(t.y, n.translate, n.scale, n.originPoint);
}
const Fs = 0.999999999999,
  Os = 1.0000000000001;
function pu(t, e, n, s = !1) {
  const i = n.length;
  if (!i) return;
  e.x = e.y = 1;
  let o, r;
  for (let a = 0; a < i; a++) {
    (o = n[a]), (r = o.projectionDelta);
    const { visualElement: u } = o.options;
    (u && u.props.style && u.props.style.display === "contents") ||
      (s &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        (st(t.x, -o.scroll.offset.x), st(t.y, -o.scroll.offset.y)),
      r && ((e.x *= r.x.scale), (e.y *= r.y.scale), Xr(t, r)),
      s && pt(o.latestValues) && me(t, o.latestValues, o.layout?.layoutBox));
  }
  e.x < Os && e.x > Fs && (e.x = 1), e.y < Os && e.y > Fs && (e.y = 1);
}
function st(t, e) {
  (t.min += e), (t.max += e);
}
function js(t, e, n, s, i = 0.5) {
  const o = L(t.min, t.max, i);
  xn(t, e, n, o, s);
}
function Ns(t, e) {
  return typeof t == "string" ? (parseFloat(t) / 100) * (e.max - e.min) : t;
}
function me(t, e, n) {
  const s = n ?? t;
  js(t.x, Ns(e.x, s.x), e.scaleX, e.scale, e.originX),
    js(t.y, Ns(e.y, s.y), e.scaleY, e.scale, e.originY);
}
function Yr(t, e) {
  return Gr(du(t.getBoundingClientRect(), e));
}
function mu(t, e, n) {
  const s = Yr(t, n),
    { scroll: i } = e;
  return i && (st(s.x, i.offset.x), st(s.y, i.offset.y)), s;
}
const gu = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  yu = Mt.length;
function vu(t, e, n) {
  let s = "",
    i = !0;
  for (let o = 0; o < yu; o++) {
    const r = Mt[o],
      a = t[r];
    if (a === void 0) continue;
    let u = !0;
    if (typeof a == "number") u = a === (r.startsWith("scale") ? 1 : 0);
    else {
      const c = parseFloat(a);
      u = r.startsWith("scale") ? c === 1 : c === 0;
    }
    if (!u || n) {
      const c = Ir(a, Yn[r]);
      if (!u) {
        i = !1;
        const l = gu[r] || r;
        s += `${l}(${c}) `;
      }
      n && (e[r] = c);
    }
  }
  return (s = s.trim()), n ? (s = n(e, i ? "" : s)) : i && (s = "none"), s;
}
function ts(t, e, n) {
  const { style: s, vars: i, transformOrigin: o } = t;
  let r = !1,
    a = !1;
  for (const u in e) {
    const c = e[u];
    if (Dt.has(u)) {
      r = !0;
      continue;
    } else if (ir(u)) {
      i[u] = c;
      continue;
    } else {
      const l = Ir(c, Yn[u]);
      u.startsWith("origin") ? ((a = !0), (o[u] = l)) : (s[u] = l);
    }
  }
  if (
    (e.transform ||
      (r || n
        ? (s.transform = vu(e, t.transform, n))
        : s.transform && (s.transform = "none")),
    a)
  ) {
    const { originX: u = "50%", originY: c = "50%", originZ: l = 0 } = o;
    s.transformOrigin = `${u} ${c} ${l}`;
  }
}
function qr(t, { style: e, vars: n }, s, i) {
  const o = t.style;
  let r;
  for (r in e) o[r] = e[r];
  i?.applyProjectionStyles(o, s);
  for (r in n) o.setProperty(r, n[r]);
}
function Ws(t, e) {
  return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
}
const Bt = {
    correct: (t, e) => {
      if (!e.target) return t;
      if (typeof t == "string")
        if (S.test(t)) t = parseFloat(t);
        else return t;
      const n = Ws(t, e.target.x),
        s = Ws(t, e.target.y);
      return `${n}% ${s}%`;
    },
  },
  xu = {
    correct: (t, { treeScale: e, projectionDelta: n }) => {
      const s = t,
        i = J.parse(t);
      if (i.length > 5) return s;
      const o = J.createTransformer(t),
        r = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * e.x,
        u = n.y.scale * e.y;
      (i[0 + r] /= a), (i[1 + r] /= u);
      const c = L(a, u, 0.5);
      return (
        typeof i[2 + r] == "number" && (i[2 + r] /= c),
        typeof i[3 + r] == "number" && (i[3 + r] /= c),
        o(i)
      );
    },
  },
  Tn = {
    borderRadius: {
      ...Bt,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: Bt,
    borderTopRightRadius: Bt,
    borderBottomLeftRadius: Bt,
    borderBottomRightRadius: Bt,
    boxShadow: xu,
  };
function Zr(t, { layout: e, layoutId: n }) {
  return (
    Dt.has(t) ||
    t.startsWith("origin") ||
    ((e || n !== void 0) && (!!Tn[t] || t === "opacity"))
  );
}
function es(t, e, n) {
  const s = t.style,
    i = e?.style,
    o = {};
  if (!s) return o;
  for (const r in s)
    (O(s[r]) ||
      (i && O(i[r])) ||
      Zr(r, t) ||
      n?.getValue(r)?.liveStyle !== void 0) &&
      (o[r] = s[r]);
  return o;
}
function Tu(t) {
  return window.getComputedStyle(t);
}
class Jr extends zr {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = qr);
  }
  readValueFromInstance(e, n) {
    if (Dt.has(n)) return this.projection?.isProjecting ? rn(n) : Ha(e, n);
    {
      const s = Tu(e),
        i = (ir(n) ? s.getPropertyValue(n) : s[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return Yr(e, n);
  }
  build(e, n, s) {
    ts(e, n, s.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, n, s) {
    return es(e, n, s);
  }
}
function wu(t, e) {
  return t in e;
}
class Su extends $r {
  constructor() {
    super(...arguments), (this.type = "object");
  }
  readValueFromInstance(e, n) {
    if (wu(n, e)) {
      const s = e[n];
      if (typeof s == "string" || typeof s == "number") return s;
    }
  }
  getBaseTargetFromProps() {}
  removeValueFromRenderState(e, n) {
    delete n.output[e];
  }
  measureInstanceViewportBox() {
    return B();
  }
  build(e, n) {
    Object.assign(e.output, n);
  }
  renderInstance(e, { output: n }) {
    Object.assign(e, n);
  }
  sortInstanceNodePosition() {
    return 0;
  }
}
const Pu = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  Au = { offset: "strokeDashoffset", array: "strokeDasharray" };
function bu(t, e, n = 1, s = 0, i = !0) {
  t.pathLength = 1;
  const o = i ? Pu : Au;
  (t[o.offset] = `${-s}`), (t[o.array] = `${e} ${n}`);
}
const Vu = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function Qr(
  t,
  {
    attrX: e,
    attrY: n,
    attrScale: s,
    pathLength: i,
    pathSpacing: o = 1,
    pathOffset: r = 0,
    ...a
  },
  u,
  c,
  l,
) {
  if ((ts(t, a, c), u)) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  (t.attrs = t.style), (t.style = {});
  const { attrs: f, style: h } = t;
  f.transform && ((h.transform = f.transform), delete f.transform),
    (h.transform || f.transformOrigin) &&
      ((h.transformOrigin = f.transformOrigin ?? "50% 50%"),
      delete f.transformOrigin),
    h.transform &&
      ((h.transformBox = l?.transformBox ?? "fill-box"), delete f.transformBox);
  for (const d of Vu) f[d] !== void 0 && ((h[d] = f[d]), delete f[d]);
  e !== void 0 && (f.x = e),
    n !== void 0 && (f.y = n),
    s !== void 0 && (f.scale = s),
    i !== void 0 && bu(f, i, o, r, !1);
}
const to = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
  ]),
  eo = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function Cu(t, e, n, s) {
  qr(t, e, void 0, s);
  for (const i in e.attrs) t.setAttribute(to.has(i) ? i : _n(i), e.attrs[i]);
}
function no(t, e, n) {
  const s = es(t, e, n);
  for (const i in t)
    if (O(t[i]) || O(e[i])) {
      const o =
        Mt.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      s[o] = t[i];
    }
  return s;
}
class so extends zr {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = B);
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    if (Dt.has(n)) {
      const s = Lr(n);
      return (s && s.default) || 0;
    }
    return (n = to.has(n) ? n : _n(n)), e.getAttribute(n);
  }
  scrapeMotionValuesFromProps(e, n, s) {
    return no(e, n, s);
  }
  build(e, n, s) {
    Qr(e, n, this.isSVGTag, s.transformTemplate, s.style);
  }
  renderInstance(e, n, s, i) {
    Cu(e, n, s, i);
  }
  mount(e) {
    (this.isSVGTag = eo(e.tagName)), super.mount(e);
  }
}
const Eu = Qn.length;
function io(t) {
  if (!t) return;
  if (!t.isControllingVariants) {
    const n = t.parent ? io(t.parent) || {} : {};
    return t.props.initial !== void 0 && (n.initial = t.props.initial), n;
  }
  const e = {};
  for (let n = 0; n < Eu; n++) {
    const s = Qn[n],
      i = t.props[s];
    (Xt(i) || i === !1) && (e[s] = i);
  }
  return e;
}
function ro(t, e) {
  if (!Array.isArray(e)) return !1;
  const n = e.length;
  if (n !== t.length) return !1;
  for (let s = 0; s < n; s++) if (e[s] !== t[s]) return !1;
  return !0;
}
const Mu = [...Jn].reverse(),
  Du = Jn.length;
function Ru(t) {
  return (e) =>
    Promise.all(e.map(({ animation: n, options: s }) => Dl(t, n, s)));
}
function Lu(t) {
  let e = Ru(t),
    n = Us(),
    s = !0,
    i = !1;
  const o = (c) => (l, f) => {
    const h = vt(t, f, c === "exit" ? t.presenceContext?.custom : void 0);
    if (h) {
      const { transition: d, transitionEnd: p, ...g } = h;
      l = { ...l, ...g, ...p };
    }
    return l;
  };
  function r(c) {
    e = c(t);
  }
  function a(c) {
    const { props: l } = t,
      f = io(t.parent) || {},
      h = [],
      d = new Set();
    let p = {},
      g = 1 / 0;
    for (let y = 0; y < Du; y++) {
      const v = Mu[y],
        x = n[v],
        T = l[v] !== void 0 ? l[v] : f[v],
        A = Xt(T),
        M = v === c ? x.isActive : null;
      M === !1 && (g = y);
      let R = T === f[v] && T !== l[v] && A;
      if (
        (R && (s || i) && t.manuallyAnimateOnMount && (R = !1),
        (x.protectedKeys = { ...p }),
        (!x.isActive && M === null) ||
          (!T && !x.prevProp) ||
          Re(T) ||
          typeof T == "boolean")
      )
        continue;
      if (v === "exit" && x.isActive && M !== !0) {
        x.prevResolvedValues && (p = { ...p, ...x.prevResolvedValues });
        continue;
      }
      const V = ku(x.prevProp, T);
      let b = V || (v === c && x.isActive && !R && A) || (y > g && A),
        P = !1;
      const C = Array.isArray(T) ? T : [T];
      let I = C.reduce(o(v), {});
      M === !1 && (I = {});
      const { prevResolvedValues: H = {} } = x,
        Y = { ...H, ...I },
        tt = (D) => {
          (b = !0),
            d.has(D) && ((P = !0), d.delete(D)),
            (x.needsAnimating[D] = !0);
          const N = t.getValue(D);
          N && (N.liveStyle = !1);
        };
      for (const D in Y) {
        const N = I[D],
          et = H[D];
        if (p.hasOwnProperty(D)) continue;
        let at = !1;
        fn(N) && fn(et) ? (at = !ro(N, et)) : (at = N !== et),
          at
            ? N != null
              ? tt(D)
              : d.add(D)
            : N !== void 0 && d.has(D)
              ? tt(D)
              : (x.protectedKeys[D] = !0);
      }
      (x.prevProp = T),
        (x.prevResolvedValues = I),
        x.isActive && (p = { ...p, ...I }),
        (s || i) && t.blockInitialAnimation && (b = !1);
      const z = R && V;
      b &&
        (!z || P) &&
        h.push(
          ...C.map((D) => {
            const N = { type: v };
            if (
              typeof D == "string" &&
              (s || i) &&
              !z &&
              t.manuallyAnimateOnMount &&
              t.parent
            ) {
              const { parent: et } = t,
                at = vt(et, D);
              if (et.enteringChildren && at) {
                const { delayChildren: te } = at.transition || {};
                N.delay = br(et.enteringChildren, t, te);
              }
            }
            return { animation: D, options: N };
          }),
        );
    }
    if (d.size) {
      const y = {};
      if (typeof l.initial != "boolean") {
        const v = vt(t, Array.isArray(l.initial) ? l.initial[0] : l.initial);
        v && v.transition && (y.transition = v.transition);
      }
      d.forEach((v) => {
        const x = t.getBaseTarget(v),
          T = t.getValue(v);
        T && (T.liveStyle = !0), (y[v] = x ?? null);
      }),
        h.push({ animation: y });
    }
    let m = !!h.length;
    return (
      s &&
        (l.initial === !1 || l.initial === l.animate) &&
        !t.manuallyAnimateOnMount &&
        (m = !1),
      (s = !1),
      (i = !1),
      m ? e(h) : Promise.resolve()
    );
  }
  function u(c, l) {
    if (n[c].isActive === l) return Promise.resolve();
    t.variantChildren?.forEach((h) => h.animationState?.setActive(c, l)),
      (n[c].isActive = l);
    const f = a(c);
    for (const h in n) n[h].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: a,
    setActive: u,
    setAnimateFunction: r,
    getState: () => n,
    reset: () => {
      (n = Us()), (i = !0);
    },
  };
}
function ku(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !ro(e, t) : !1;
}
function dt(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Us() {
  return {
    animate: dt(!0),
    whileInView: dt(),
    whileHover: dt(),
    whileTap: dt(),
    whileDrag: dt(),
    whileFocus: dt(),
    exit: dt(),
  };
}
function wn(t, e) {
  (t.min = e.min), (t.max = e.max);
}
function q(t, e) {
  wn(t.x, e.x), wn(t.y, e.y);
}
function Hs(t, e) {
  (t.translate = e.translate),
    (t.scale = e.scale),
    (t.originPoint = e.originPoint),
    (t.origin = e.origin);
}
const oo = 1e-4,
  Iu = 1 - oo,
  Bu = 1 + oo,
  ao = 0.01,
  Fu = 0 - ao,
  Ou = 0 + ao;
function U(t) {
  return t.max - t.min;
}
function ju(t, e, n) {
  return Math.abs(t - e) <= n;
}
function Ks(t, e, n, s = 0.5) {
  (t.origin = s),
    (t.originPoint = L(e.min, e.max, t.origin)),
    (t.scale = U(n) / U(e)),
    (t.translate = L(n.min, n.max, t.origin) - t.originPoint),
    ((t.scale >= Iu && t.scale <= Bu) || isNaN(t.scale)) && (t.scale = 1),
    ((t.translate >= Fu && t.translate <= Ou) || isNaN(t.translate)) &&
      (t.translate = 0);
}
function Ht(t, e, n, s) {
  Ks(t.x, e.x, n.x, s ? s.originX : void 0),
    Ks(t.y, e.y, n.y, s ? s.originY : void 0);
}
function $s(t, e, n, s = 0) {
  const i = s ? L(n.min, n.max, s) : n.min;
  (t.min = i + e.min), (t.max = t.min + U(e));
}
function Nu(t, e, n, s) {
  $s(t.x, e.x, n.x, s?.x), $s(t.y, e.y, n.y, s?.y);
}
function zs(t, e, n, s = 0) {
  const i = s ? L(n.min, n.max, s) : n.min;
  (t.min = e.min - i), (t.max = t.min + U(e));
}
function Pe(t, e, n, s) {
  zs(t.x, e.x, n.x, s?.x), zs(t.y, e.y, n.y, s?.y);
}
function Gs(t, e, n, s, i) {
  return (
    (t -= e), (t = Se(t, 1 / n, s)), i !== void 0 && (t = Se(t, 1 / i, s)), t
  );
}
function Wu(t, e = 0, n = 1, s = 0.5, i, o = t, r = t) {
  if (
    (rt.test(e) &&
      ((e = parseFloat(e)), (e = L(r.min, r.max, e / 100) - r.min)),
    typeof e != "number")
  )
    return;
  let a = L(o.min, o.max, s);
  t === o && (a -= e),
    (t.min = Gs(t.min, e, n, a, i)),
    (t.max = Gs(t.max, e, n, a, i));
}
function _s(t, e, [n, s, i], o, r) {
  Wu(t, e[n], e[s], e[i], e.scale, o, r);
}
const Uu = ["x", "scaleX", "originX"],
  Hu = ["y", "scaleY", "originY"];
function Xs(t, e, n, s) {
  _s(t.x, e, Uu, n ? n.x : void 0, s ? s.x : void 0),
    _s(t.y, e, Hu, n ? n.y : void 0, s ? s.y : void 0);
}
function Ys(t) {
  return t.translate === 0 && t.scale === 1;
}
function lo(t) {
  return Ys(t.x) && Ys(t.y);
}
function qs(t, e) {
  return t.min === e.min && t.max === e.max;
}
function Ku(t, e) {
  return qs(t.x, e.x) && qs(t.y, e.y);
}
function Zs(t, e) {
  return (
    Math.round(t.min) === Math.round(e.min) &&
    Math.round(t.max) === Math.round(e.max)
  );
}
function uo(t, e) {
  return Zs(t.x, e.x) && Zs(t.y, e.y);
}
function Js(t) {
  return U(t.x) / U(t.y);
}
function Qs(t, e) {
  return (
    t.translate === e.translate &&
    t.scale === e.scale &&
    t.originPoint === e.originPoint
  );
}
function nt(t) {
  return [t("x"), t("y")];
}
function $u(t, e, n) {
  let s = "";
  const i = t.x.translate / e.x,
    o = t.y.translate / e.y,
    r = n?.z || 0;
  if (
    ((i || o || r) && (s = `translate3d(${i}px, ${o}px, ${r}px) `),
    (e.x !== 1 || e.y !== 1) && (s += `scale(${1 / e.x}, ${1 / e.y}) `),
    n)
  ) {
    const {
      transformPerspective: c,
      rotate: l,
      rotateX: f,
      rotateY: h,
      skewX: d,
      skewY: p,
    } = n;
    c && (s = `perspective(${c}px) ${s}`),
      l && (s += `rotate(${l}deg) `),
      f && (s += `rotateX(${f}deg) `),
      h && (s += `rotateY(${h}deg) `),
      d && (s += `skewX(${d}deg) `),
      p && (s += `skewY(${p}deg) `);
  }
  const a = t.x.scale * e.x,
    u = t.y.scale * e.y;
  return (a !== 1 || u !== 1) && (s += `scale(${a}, ${u})`), s || "none";
}
const co = [
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
  ],
  zu = co.length,
  ti = (t) => (typeof t == "string" ? parseFloat(t) : t),
  ei = (t) => typeof t == "number" || S.test(t);
function Gu(t, e, n, s, i, o) {
  i
    ? ((t.opacity = L(0, n.opacity ?? 1, _u(s))),
      (t.opacityExit = L(e.opacity ?? 1, 0, Xu(s))))
    : o && (t.opacity = L(e.opacity ?? 1, n.opacity ?? 1, s));
  for (let r = 0; r < zu; r++) {
    const a = co[r];
    let u = ni(e, a),
      c = ni(n, a);
    if (u === void 0 && c === void 0) continue;
    u || (u = 0),
      c || (c = 0),
      u === 0 || c === 0 || ei(u) === ei(c)
        ? ((t[a] = Math.max(L(ti(u), ti(c), s), 0)),
          (rt.test(c) || rt.test(u)) && (t[a] += "%"))
        : (t[a] = c);
  }
  (e.rotate || n.rotate) && (t.rotate = L(e.rotate || 0, n.rotate || 0, s));
}
function ni(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const _u = fo(0, 0.5, qi),
  Xu = fo(0.5, 0.95, K);
function fo(t, e, n) {
  return (s) => (s < t ? 0 : s > e ? 1 : n(xt(t, e, s)));
}
function ho(t, e, n) {
  const s = O(t) ? t : _(t);
  return s.start(zn("", s, e, n)), s.animation;
}
function Yt(t, e, n, s = { passive: !0 }) {
  return t.addEventListener(e, n, s), () => t.removeEventListener(e, n);
}
const Yu = (t, e) => t.depth - e.depth;
class qu {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(e) {
    Vn(this.children, e), (this.isDirty = !0);
  }
  remove(e) {
    bt(this.children, e), (this.isDirty = !0);
  }
  forEach(e) {
    this.isDirty && this.children.sort(Yu),
      (this.isDirty = !1),
      this.children.forEach(e);
  }
}
function Zu(t, e) {
  const n = W.now(),
    s = ({ timestamp: i }) => {
      const o = i - n;
      o >= e && (X(s), t(o - e));
    };
  return E.setup(s, !0), () => X(s);
}
function ge(t) {
  return O(t) ? t.get() : t;
}
class Ju {
  constructor() {
    this.members = [];
  }
  add(e) {
    Vn(this.members, e);
    for (let n = this.members.length - 1; n >= 0; n--) {
      const s = this.members[n];
      if (s === e || s === this.lead || s === this.prevLead) continue;
      const i = s.instance;
      (!i || i.isConnected === !1) &&
        !s.snapshot &&
        (bt(this.members, s), s.unmount());
    }
    e.scheduleRender();
  }
  remove(e) {
    if (
      (bt(this.members, e),
      e === this.prevLead && (this.prevLead = void 0),
      e === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(e) {
    for (let n = this.members.indexOf(e) - 1; n >= 0; n--) {
      const s = this.members[n];
      if (s.isPresent !== !1 && s.instance?.isConnected !== !1)
        return this.promote(s), !0;
    }
    return !1;
  }
  promote(e, n) {
    const s = this.lead;
    if (e !== s && ((this.prevLead = s), (this.lead = e), e.show(), s)) {
      s.updateSnapshot(), e.scheduleRender();
      const { layoutDependency: i } = s.options,
        { layoutDependency: o } = e.options;
      (i === void 0 || i !== o) &&
        ((e.resumeFrom = s),
        n && (s.preserveOpacity = !0),
        s.snapshot &&
          ((e.snapshot = s.snapshot),
          (e.snapshot.latestValues = s.animationValues || s.latestValues)),
        e.root?.isUpdating && (e.isLayoutDirty = !0)),
        e.options.crossfade === !1 && s.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      e.options.onExitComplete?.(), e.resumingFrom?.options.onExitComplete?.();
    });
  }
  scheduleRender() {
    this.members.forEach((e) => e.instance && e.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    this.lead?.snapshot && (this.lead.snapshot = void 0);
  }
}
const ye = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
  Ke = ["", "X", "Y", "Z"],
  Qu = 1e3;
let tc = 0;
function $e(t, e, n, s) {
  const { latestValues: i } = e;
  i[t] && ((n[t] = i[t]), e.setStaticValue(t, 0), s && (s[t] = 0));
}
function po(t) {
  if (((t.hasCheckedOptimisedAppear = !0), t.root === t)) return;
  const { visualElement: e } = t.options;
  if (!e) return;
  const n = Mr(e);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: o } = t.options;
    window.MotionCancelOptimisedAnimation(n, "transform", E, !(i || o));
  }
  const { parent: s } = t;
  s && !s.hasCheckedOptimisedAppear && po(s);
}
function mo({
  attachResizeListener: t,
  defaultParent: e,
  measureScroll: n,
  checkIsScrollRoot: s,
  resetTransform: i,
}) {
  return class {
    constructor(r = {}, a = e?.()) {
      (this.id = tc++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            this.nodes.forEach(sc),
            this.nodes.forEach(uc),
            this.nodes.forEach(cc),
            this.nodes.forEach(ic);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = r),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let u = 0; u < this.path.length; u++)
        this.path[u].shouldResetTransform = !0;
      this.root === this && (this.nodes = new qu());
    }
    addEventListener(r, a) {
      return (
        this.eventHandlers.has(r) || this.eventHandlers.set(r, new Cn()),
        this.eventHandlers.get(r).add(a)
      );
    }
    notifyListeners(r, ...a) {
      const u = this.eventHandlers.get(r);
      u && u.notify(...a);
    }
    hasListeners(r) {
      return this.eventHandlers.has(r);
    }
    mount(r) {
      if (this.instance) return;
      (this.isSVG = De(r) && !Wr(r)), (this.instance = r);
      const { layoutId: a, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(r),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (u || a) && (this.isLayoutDirty = !0),
        t)
      ) {
        let l,
          f = 0;
        const h = () => (this.root.updateBlockedByResize = !1);
        E.read(() => {
          f = window.innerWidth;
        }),
          t(r, () => {
            const d = window.innerWidth;
            d !== f &&
              ((f = d),
              (this.root.updateBlockedByResize = !0),
              l && l(),
              (l = Zu(h, 250)),
              ye.hasAnimatedSinceResize &&
                ((ye.hasAnimatedSinceResize = !1), this.nodes.forEach(ri)));
          });
      }
      a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          c &&
          (a || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: l,
              hasLayoutChanged: f,
              hasRelativeLayoutChanged: h,
              layout: d,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const p =
                  this.options.transition || c.getDefaultTransition() || mc,
                { onLayoutAnimationStart: g, onLayoutAnimationComplete: m } =
                  c.getProps(),
                y = !this.targetLayout || !uo(this.targetLayout, d),
                v = !f && h;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                v ||
                (f && (y || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const x = { ...$n(p, "layout"), onPlay: g, onComplete: m };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((x.delay = 0), (x.type = !1)),
                  this.startAnimation(x),
                  this.setAnimationOrigin(l, v);
              } else
                f || ri(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = d;
            },
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const r = this.getStack();
      r && r.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        X(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(fc),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: r } = this.options;
      return r && r.getProps().transformTemplate;
    }
    willUpdate(r = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          po(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let l = 0; l < this.path.length; l++) {
        const f = this.path[l];
        (f.shouldResetTransform = !0),
          (typeof f.latestValues.x == "string" ||
            typeof f.latestValues.y == "string") &&
            (f.isLayoutDirty = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: a, layout: u } = this.options;
      if (a === void 0 && !u) return;
      const c = this.getTransformTemplate();
      (this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        r && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        const u = this.updateBlockedByResize;
        this.unblockUpdate(),
          (this.updateBlockedByResize = !1),
          this.clearAllSnapshots(),
          u && this.nodes.forEach(oc),
          this.nodes.forEach(si);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(ii);
        return;
      }
      (this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(ac),
            this.nodes.forEach(lc),
            this.nodes.forEach(ec),
            this.nodes.forEach(nc))
          : this.nodes.forEach(ii),
        this.clearAllSnapshots();
      const a = W.now();
      (j.delta = Q(0, 1e3 / 60, a - j.timestamp)),
        (j.timestamp = a),
        (j.isProcessing = !0),
        Be.update.process(j),
        Be.preRender.process(j),
        Be.render.process(j),
        (j.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), qn.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(rc), this.sharedNodes.forEach(hc);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        E.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      E.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !U(this.snapshot.measuredBox.x) &&
          !U(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let u = 0; u < this.path.length; u++) this.path[u].updateScroll();
      const r = this.layout;
      (this.layout = this.measure(!1)),
        this.layoutVersion++,
        this.layoutCorrected || (this.layoutCorrected = B()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          r ? r.layoutBox : void 0,
        );
    }
    updateScroll(r = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === r &&
          (a = !1),
        a && this.instance)
      ) {
        const u = s(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: r,
          isRoot: u,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : u,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const r =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !lo(this.projectionDelta),
        u = this.getTransformTemplate(),
        c = u ? u(this.latestValues, "") : void 0,
        l = c !== this.prevTransformTemplateValue;
      r &&
        this.instance &&
        (a || pt(this.latestValues) || l) &&
        (i(this.instance, c),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(r = !0) {
      const a = this.measurePageBox();
      let u = this.removeElementScroll(a);
      return (
        r && (u = this.removeTransform(u)),
        gc(u),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: u,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: r } = this.options;
      if (!r) return B();
      const a = r.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(yc))) {
        const { scroll: c } = this.root;
        c && (st(a.x, c.offset.x), st(a.y, c.offset.y));
      }
      return a;
    }
    removeElementScroll(r) {
      const a = B();
      if ((q(a, r), this.scroll?.wasRoot)) return a;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: l, options: f } = c;
        c !== this.root &&
          l &&
          f.layoutScroll &&
          (l.wasRoot && q(a, r), st(a.x, l.offset.x), st(a.y, l.offset.y));
      }
      return a;
    }
    applyTransform(r, a = !1, u) {
      const c = u || B();
      q(c, r);
      for (let l = 0; l < this.path.length; l++) {
        const f = this.path[l];
        !a &&
          f.options.layoutScroll &&
          f.scroll &&
          f !== f.root &&
          (st(c.x, -f.scroll.offset.x), st(c.y, -f.scroll.offset.y)),
          pt(f.latestValues) && me(c, f.latestValues, f.layout?.layoutBox);
      }
      return (
        pt(this.latestValues) &&
          me(c, this.latestValues, this.layout?.layoutBox),
        c
      );
    }
    removeTransform(r) {
      const a = B();
      q(a, r);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        if (!pt(c.latestValues)) continue;
        let l;
        c.instance &&
          (vn(c.latestValues) && c.updateSnapshot(),
          (l = B()),
          q(l, c.measurePageBox())),
          Xs(a, c.latestValues, c.snapshot?.layoutBox, l);
      }
      return pt(this.latestValues) && Xs(a, this.latestValues), a;
    }
    setTargetDelta(r) {
      (this.targetDelta = r),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(r) {
      this.options = {
        ...this.options,
        ...r,
        crossfade: r.crossfade !== void 0 ? r.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== j.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(r = !1) {
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== a;
      if (
        !(
          r ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          this.parent?.isProjectionDirty ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: l, layoutId: f } = this.options;
      if (!this.layout || !(l || f)) return;
      this.resolvedRelativeTargetAt = j.timestamp;
      const h = this.getClosestProjectingParent();
      h &&
        this.linkedParentVersion !== h.layoutVersion &&
        !h.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
          !this.relativeTarget &&
          (this.options.layoutAnchor !== !1 && h && h.layout
            ? this.createRelativeTarget(
                h,
                this.layout.layoutBox,
                h.layout.layoutBox,
              )
            : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = B()), (this.targetWithTransforms = B())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              Nu(
                this.target,
                this.relativeTarget,
                this.relativeParent.target,
                this.options.layoutAnchor || void 0,
              ))
            : this.targetDelta
              ? (this.resumingFrom
                  ? this.applyTransform(this.layout.layoutBox, !1, this.target)
                  : q(this.target, this.layout.layoutBox),
                Xr(this.target, this.targetDelta))
              : q(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            this.options.layoutAnchor !== !1 &&
            h &&
            !!h.resumingFrom == !!this.resumingFrom &&
            !h.options.layoutScroll &&
            h.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(h, this.target, h.target)
              : (this.relativeParent = this.relativeTarget = void 0)));
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          vn(this.parent.latestValues) ||
          _r(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(r, a, u) {
      (this.relativeParent = r),
        (this.linkedParentVersion = r.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = B()),
        (this.relativeTargetOrigin = B()),
        Pe(
          this.relativeTargetOrigin,
          a,
          u,
          this.options.layoutAnchor || void 0,
        ),
        q(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      const r = this.getLead(),
        a = !!this.resumingFrom || this !== r;
      let u = !0;
      if (
        ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (u = !1),
        a &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === j.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: l } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || l))
      )
        return;
      q(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        h = this.treeScale.y;
      pu(this.layoutCorrected, this.treeScale, this.path, a),
        r.layout &&
          !r.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((r.target = r.layout.layoutBox), (r.targetWithTransforms = B()));
      const { target: d } = r;
      if (!d) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Hs(this.prevProjectionDelta.x, this.projectionDelta.x),
          Hs(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Ht(this.projectionDelta, this.layoutCorrected, d, this.latestValues),
        (this.treeScale.x !== f ||
          this.treeScale.y !== h ||
          !Qs(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Qs(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", d));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(r = !0) {
      if ((this.options.visualElement?.scheduleRender(), r)) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = At()),
        (this.projectionDelta = At()),
        (this.projectionDeltaWithTransform = At());
    }
    setAnimationOrigin(r, a = !1) {
      const u = this.snapshot,
        c = u ? u.latestValues : {},
        l = { ...this.latestValues },
        f = At();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const h = B(),
        d = u ? u.source : void 0,
        p = this.layout ? this.layout.source : void 0,
        g = d !== p,
        m = this.getStack(),
        y = !m || m.members.length <= 1,
        v = !!(g && !y && this.options.crossfade === !0 && !this.path.some(pc));
      this.animationProgress = 0;
      let x;
      (this.mixTargetDelta = (T) => {
        const A = T / 1e3;
        oi(f.x, r.x, A),
          oi(f.y, r.y, A),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Pe(
              h,
              this.layout.layoutBox,
              this.relativeParent.layout.layoutBox,
              this.options.layoutAnchor || void 0,
            ),
            dc(this.relativeTarget, this.relativeTargetOrigin, h, A),
            x && Ku(this.relativeTarget, x) && (this.isProjectionDirty = !1),
            x || (x = B()),
            q(x, this.relativeTarget)),
          g &&
            ((this.animationValues = l), Gu(l, c, this.latestValues, A, v, y)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = A);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(r) {
      this.notifyListeners("animationStart"),
        this.currentAnimation?.stop(),
        this.resumingFrom?.currentAnimation?.stop(),
        this.pendingAnimation &&
          (X(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = E.update(() => {
          (ye.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = _(0)),
            this.motionValue.jump(0, !1),
            (this.currentAnimation = ho(this.motionValue, [0, 1e3], {
              ...r,
              velocity: 0,
              isSync: !0,
              onUpdate: (a) => {
                this.mixTargetDelta(a), r.onUpdate && r.onUpdate(a);
              },
              onStop: () => {},
              onComplete: () => {
                r.onComplete && r.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const r = this.getStack();
      r && r.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Qu),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const r = this.getLead();
      let {
        targetWithTransforms: a,
        target: u,
        layout: c,
        latestValues: l,
      } = r;
      if (!(!a || !u || !c)) {
        if (
          this !== r &&
          this.layout &&
          c &&
          go(this.options.animationType, this.layout.layoutBox, c.layoutBox)
        ) {
          u = this.target || B();
          const f = U(this.layout.layoutBox.x);
          (u.x.min = r.target.x.min), (u.x.max = u.x.min + f);
          const h = U(this.layout.layoutBox.y);
          (u.y.min = r.target.y.min), (u.y.max = u.y.min + h);
        }
        q(a, u),
          me(a, l),
          Ht(this.projectionDeltaWithTransform, this.layoutCorrected, a, l);
      }
    }
    registerSharedNode(r, a) {
      this.sharedNodes.has(r) || this.sharedNodes.set(r, new Ju()),
        this.sharedNodes.get(r).add(a);
      const c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity:
          c && c.shouldPreserveFollowOpacity
            ? c.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const r = this.getStack();
      return r ? r.lead === this : !0;
    }
    getLead() {
      const { layoutId: r } = this.options;
      return r ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: r } = this.options;
      return r ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: r } = this.options;
      if (r) return this.root.sharedNodes.get(r);
    }
    promote({ needsReset: r, transition: a, preserveFollowOpacity: u } = {}) {
      const c = this.getStack();
      c && c.promote(this, u),
        r && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const r = this.getStack();
      return r ? r.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: r } = this.options;
      if (!r) return;
      let a = !1;
      const { latestValues: u } = r;
      if (
        ((u.z ||
          u.rotate ||
          u.rotateX ||
          u.rotateY ||
          u.rotateZ ||
          u.skewX ||
          u.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const c = {};
      u.z && $e("z", r, c, this.animationValues);
      for (let l = 0; l < Ke.length; l++)
        $e(`rotate${Ke[l]}`, r, c, this.animationValues),
          $e(`skew${Ke[l]}`, r, c, this.animationValues);
      r.render();
      for (const l in c)
        r.setStaticValue(l, c[l]),
          this.animationValues && (this.animationValues[l] = c[l]);
      r.scheduleRender();
    }
    applyProjectionStyles(r, a) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        r.visibility = "hidden";
        return;
      }
      const u = this.getTransformTemplate();
      if (this.needsReset) {
        (this.needsReset = !1),
          (r.visibility = ""),
          (r.opacity = ""),
          (r.pointerEvents = ge(a?.pointerEvents) || ""),
          (r.transform = u ? u(this.latestValues, "") : "none");
        return;
      }
      const c = this.getLead();
      if (!this.projectionDelta || !this.layout || !c.target) {
        this.options.layoutId &&
          ((r.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
          (r.pointerEvents = ge(a?.pointerEvents) || "")),
          this.hasProjected &&
            !pt(this.latestValues) &&
            ((r.transform = u ? u({}, "") : "none"), (this.hasProjected = !1));
        return;
      }
      r.visibility = "";
      const l = c.animationValues || c.latestValues;
      this.applyTransformsToTarget();
      let f = $u(this.projectionDeltaWithTransform, this.treeScale, l);
      u && (f = u(l, f)), (r.transform = f);
      const { x: h, y: d } = this.projectionDelta;
      (r.transformOrigin = `${h.origin * 100}% ${d.origin * 100}% 0`),
        c.animationValues
          ? (r.opacity =
              c === this
                ? (l.opacity ?? this.latestValues.opacity ?? 1)
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : l.opacityExit)
          : (r.opacity =
              c === this
                ? l.opacity !== void 0
                  ? l.opacity
                  : ""
                : l.opacityExit !== void 0
                  ? l.opacityExit
                  : 0);
      for (const p in Tn) {
        if (l[p] === void 0) continue;
        const { correct: g, applyTo: m, isCSSVariable: y } = Tn[p],
          v = f === "none" ? l[p] : g(l[p], c);
        if (m) {
          const x = m.length;
          for (let T = 0; T < x; T++) r[m[T]] = v;
        } else
          y ? (this.options.visualElement.renderState.vars[p] = v) : (r[p] = v);
      }
      this.options.layoutId &&
        (r.pointerEvents = c === this ? ge(a?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((r) => r.currentAnimation?.stop()),
        this.root.nodes.forEach(si),
        this.root.sharedNodes.clear();
    }
  };
}
function ec(t) {
  t.updateLayout();
}
function nc(t) {
  const e = t.resumeFrom?.snapshot || t.snapshot;
  if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
    const { layoutBox: n, measuredBox: s } = t.layout,
      { animationType: i } = t.options,
      o = e.source !== t.layout.source;
    if (i === "size")
      nt((l) => {
        const f = o ? e.measuredBox[l] : e.layoutBox[l],
          h = U(f);
        (f.min = n[l].min), (f.max = f.min + h);
      });
    else if (i === "x" || i === "y") {
      const l = i === "x" ? "y" : "x";
      wn(o ? e.measuredBox[l] : e.layoutBox[l], n[l]);
    } else
      go(i, e.layoutBox, n) &&
        nt((l) => {
          const f = o ? e.measuredBox[l] : e.layoutBox[l],
            h = U(n[l]);
          (f.max = f.min + h),
            t.relativeTarget &&
              !t.currentAnimation &&
              ((t.isProjectionDirty = !0),
              (t.relativeTarget[l].max = t.relativeTarget[l].min + h));
        });
    const r = At();
    Ht(r, n, e.layoutBox);
    const a = At();
    o ? Ht(a, t.applyTransform(s, !0), e.measuredBox) : Ht(a, n, e.layoutBox);
    const u = !lo(r);
    let c = !1;
    if (!t.resumeFrom) {
      const l = t.getClosestProjectingParent();
      if (l && !l.resumeFrom) {
        const { snapshot: f, layout: h } = l;
        if (f && h) {
          const d = t.options.layoutAnchor || void 0,
            p = B();
          Pe(p, e.layoutBox, f.layoutBox, d);
          const g = B();
          Pe(g, n, h.layoutBox, d),
            uo(p, g) || (c = !0),
            l.options.layoutRoot &&
              ((t.relativeTarget = g),
              (t.relativeTargetOrigin = p),
              (t.relativeParent = l));
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: n,
      snapshot: e,
      delta: a,
      layoutDelta: r,
      hasLayoutChanged: u,
      hasRelativeLayoutChanged: c,
    });
  } else if (t.isLead()) {
    const { onExitComplete: n } = t.options;
    n && n();
  }
  t.options.transition = void 0;
}
function sc(t) {
  t.parent &&
    (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
    t.isSharedProjectionDirty ||
      (t.isSharedProjectionDirty = !!(
        t.isProjectionDirty ||
        t.parent.isProjectionDirty ||
        t.parent.isSharedProjectionDirty
      )),
    t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function ic(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function rc(t) {
  t.clearSnapshot();
}
function si(t) {
  t.clearMeasurements();
}
function oc(t) {
  (t.isLayoutDirty = !0), t.updateLayout();
}
function ii(t) {
  t.isLayoutDirty = !1;
}
function ac(t) {
  t.isAnimationBlocked &&
    t.layout &&
    !t.isLayoutDirty &&
    ((t.snapshot = t.layout), (t.isLayoutDirty = !0));
}
function lc(t) {
  const { visualElement: e } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
    t.resetTransform();
}
function ri(t) {
  t.finishAnimation(),
    (t.targetDelta = t.relativeTarget = t.target = void 0),
    (t.isProjectionDirty = !0);
}
function uc(t) {
  t.resolveTargetDelta();
}
function cc(t) {
  t.calcProjection();
}
function fc(t) {
  t.resetSkewAndRotation();
}
function hc(t) {
  t.removeLeadSnapshot();
}
function oi(t, e, n) {
  (t.translate = L(e.translate, 0, n)),
    (t.scale = L(e.scale, 1, n)),
    (t.origin = e.origin),
    (t.originPoint = e.originPoint);
}
function ai(t, e, n, s) {
  (t.min = L(e.min, n.min, s)), (t.max = L(e.max, n.max, s));
}
function dc(t, e, n, s) {
  ai(t.x, e.x, n.x, s), ai(t.y, e.y, n.y, s);
}
function pc(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const mc = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  li = (t) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(t),
  ui = li("applewebkit/") && !li("chrome/") ? Math.round : K;
function ci(t) {
  (t.min = ui(t.min)), (t.max = ui(t.max));
}
function gc(t) {
  ci(t.x), ci(t.y);
}
function go(t, e, n) {
  return (
    t === "position" || (t === "preserve-aspect" && !ju(Js(e), Js(n), 0.2))
  );
}
function yc(t) {
  return t !== t.root && t.scroll?.wasRoot;
}
const vc = mo({
    attachResizeListener: (t, e) => Yt(t, "resize", e),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
      y: document.documentElement.scrollTop || document.body?.scrollTop || 0,
    }),
    checkIsScrollRoot: () => !0,
  }),
  ze = { current: void 0 },
  yo = mo({
    measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
    defaultParent: () => {
      if (!ze.current) {
        const t = new vc({});
        t.mount(window), t.setOptions({ layoutScroll: !0 }), (ze.current = t);
      }
      return ze.current;
    },
    resetTransform: (t, e) => {
      t.style.transform = e !== void 0 ? e : "none";
    },
    checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed",
  }),
  Ct = w.createContext({
    transformPagePoint: (t) => t,
    isStatic: !1,
    reducedMotion: "never",
  });
function fi(t, e) {
  if (typeof t == "function") return t(e);
  t != null && (t.current = e);
}
function xc(...t) {
  return (e) => {
    let n = !1;
    const s = t.map((i) => {
      const o = fi(i, e);
      return !n && typeof o == "function" && (n = !0), o;
    });
    if (n)
      return () => {
        for (let i = 0; i < s.length; i++) {
          const o = s[i];
          typeof o == "function" ? o() : fi(t[i], null);
        }
      };
  };
}
function Tc(...t) {
  return w.useCallback(xc(...t), t);
}
class wc extends w.Component {
  getSnapshotBeforeUpdate(e) {
    const n = this.props.childRef.current;
    if (
      Ut(n) &&
      e.isPresent &&
      !this.props.isPresent &&
      this.props.pop !== !1
    ) {
      const s = n.offsetParent,
        i = (Ut(s) && s.offsetWidth) || 0,
        o = (Ut(s) && s.offsetHeight) || 0,
        r = getComputedStyle(n),
        a = this.props.sizeRef.current;
      (a.height = parseFloat(r.height)),
        (a.width = parseFloat(r.width)),
        (a.top = n.offsetTop),
        (a.left = n.offsetLeft),
        (a.right = i - a.width - a.left),
        (a.bottom = o - a.height - a.top);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function Sc({
  children: t,
  isPresent: e,
  anchorX: n,
  anchorY: s,
  root: i,
  pop: o,
}) {
  const r = w.useId(),
    a = w.useRef(null),
    u = w.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0, bottom: 0 }),
    { nonce: c } = w.useContext(Ct),
    l = t.props?.ref ?? t?.ref,
    f = Tc(a, l);
  return (
    w.useInsertionEffect(() => {
      const {
        width: h,
        height: d,
        top: p,
        left: g,
        right: m,
        bottom: y,
      } = u.current;
      if (e || o === !1 || !a.current || !h || !d) return;
      const v = n === "left" ? `left: ${g}` : `right: ${m}`,
        x = s === "bottom" ? `bottom: ${y}` : `top: ${p}`;
      a.current.dataset.motionPopId = r;
      const T = document.createElement("style");
      c && (T.nonce = c);
      const A = i ?? document.head;
      return (
        A.appendChild(T),
        T.sheet &&
          T.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${h}px !important;
            height: ${d}px !important;
            ${v}px !important;
            ${x}px !important;
          }
        `),
        () => {
          a.current?.removeAttribute("data-motion-pop-id"),
            A.contains(T) && A.removeChild(T);
        }
      );
    }, [e]),
    it.jsx(wc, {
      isPresent: e,
      childRef: a,
      sizeRef: u,
      pop: o,
      children: o === !1 ? t : w.cloneElement(t, { ref: f }),
    })
  );
}
const Pc = ({
  children: t,
  initial: e,
  isPresent: n,
  onExitComplete: s,
  custom: i,
  presenceAffectsLayout: o,
  mode: r,
  anchorX: a,
  anchorY: u,
  root: c,
}) => {
  const l = lt(Ac),
    f = w.useId();
  let h = !0,
    d = w.useMemo(
      () => (
        (h = !1),
        {
          id: f,
          initial: e,
          isPresent: n,
          custom: i,
          onExitComplete: (p) => {
            l.set(p, !0);
            for (const g of l.values()) if (!g) return;
            s && s();
          },
          register: (p) => (l.set(p, !1), () => l.delete(p)),
        }
      ),
      [n, l, s],
    );
  return (
    o && h && (d = { ...d }),
    w.useMemo(() => {
      l.forEach((p, g) => l.set(g, !1));
    }, [n]),
    w.useEffect(() => {
      !n && !l.size && s && s();
    }, [n]),
    (t = it.jsx(Sc, {
      pop: r === "popLayout",
      isPresent: n,
      anchorX: a,
      anchorY: u,
      root: c,
      children: t,
    })),
    it.jsx(Ce.Provider, { value: d, children: t })
  );
};
function Ac() {
  return new Map();
}
function vo(t = !0) {
  const e = w.useContext(Ce);
  if (e === null) return [!0, null];
  const { isPresent: n, onExitComplete: s, register: i } = e,
    o = w.useId();
  w.useEffect(() => {
    if (t) return i(o);
  }, [t]);
  const r = w.useCallback(() => t && s && s(o), [o, s, t]);
  return !n && s ? [!1, r] : [!0];
}
const re = (t) => t.key || "";
function hi(t) {
  const e = [];
  return (
    w.Children.forEach(t, (n) => {
      w.isValidElement(n) && e.push(n);
    }),
    e
  );
}
const Ah = ({
    children: t,
    custom: e,
    initial: n = !0,
    onExitComplete: s,
    presenceAffectsLayout: i = !0,
    mode: o = "sync",
    propagate: r = !1,
    anchorX: a = "left",
    anchorY: u = "top",
    root: c,
  }) => {
    const [l, f] = vo(r),
      h = w.useMemo(() => hi(t), [t]),
      d = r && !l ? [] : h.map(re),
      p = w.useRef(!0),
      g = w.useRef(h),
      m = lt(() => new Map()),
      y = w.useRef(new Set()),
      [v, x] = w.useState(h),
      [T, A] = w.useState(h);
    Ve(() => {
      (p.current = !1), (g.current = h);
      for (let V = 0; V < T.length; V++) {
        const b = re(T[V]);
        d.includes(b)
          ? (m.delete(b), y.current.delete(b))
          : m.get(b) !== !0 && m.set(b, !1);
      }
    }, [T, d.length, d.join("-")]);
    const M = [];
    if (h !== v) {
      let V = [...h];
      for (let b = 0; b < T.length; b++) {
        const P = T[b],
          C = re(P);
        d.includes(C) || (V.splice(b, 0, P), M.push(P));
      }
      return o === "wait" && M.length && (V = M), A(hi(V)), x(h), null;
    }
    const { forceRender: R } = w.useContext(bn);
    return it.jsx(it.Fragment, {
      children: T.map((V) => {
        const b = re(V),
          P = r && !l ? !1 : h === T || d.includes(b),
          C = () => {
            if (y.current.has(b)) return;
            if (m.has(b)) y.current.add(b), m.set(b, !0);
            else return;
            let I = !0;
            m.forEach((H) => {
              H || (I = !1);
            }),
              I && (R?.(), A(g.current), r && f?.(), s && s());
          };
        return it.jsx(
          Pc,
          {
            isPresent: P,
            initial: !p.current || n ? void 0 : !1,
            custom: e,
            presenceAffectsLayout: i,
            mode: o,
            root: c,
            onExitComplete: P ? void 0 : C,
            anchorX: a,
            anchorY: u,
            children: V,
          },
          b,
        );
      }),
    });
  },
  xo = w.createContext({ strict: !1 }),
  di = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  };
let pi = !1;
function bc() {
  if (pi) return;
  const t = {};
  for (const e in di) t[e] = { isEnabled: (n) => di[e].some((s) => !!n[s]) };
  Kr(t), (pi = !0);
}
function To() {
  return bc(), fu();
}
function Vc(t) {
  const e = To();
  for (const n in t) e[n] = { ...e[n], ...t[n] };
  Kr(e);
}
const Cc = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "propagate",
  "ignoreStrict",
  "viewport",
]);
function Ae(t) {
  return (
    t.startsWith("while") ||
    (t.startsWith("drag") && t !== "draggable") ||
    t.startsWith("layout") ||
    t.startsWith("onTap") ||
    t.startsWith("onPan") ||
    t.startsWith("onLayout") ||
    Cc.has(t)
  );
}
let wo = (t) => !Ae(t);
function So(t) {
  typeof t == "function" && (wo = (e) => (e.startsWith("on") ? !Ae(e) : t(e)));
}
try {
  So(require("@emotion/is-prop-valid").default);
} catch {}
function Ec(t, e, n) {
  const s = {};
  for (const i in t)
    (i === "values" && typeof t.values == "object") ||
      O(t[i]) ||
      ((wo(i) ||
        (n === !0 && Ae(i)) ||
        (!e && !Ae(i)) ||
        (t.draggable && i.startsWith("onDrag"))) &&
        (s[i] = t[i]));
  return s;
}
function bh({ children: t, isValidProp: e, ...n }) {
  e && So(e);
  const s = w.useContext(Ct);
  (n = { ...s, ...n }),
    (n.transition = Kn(n.transition, s.transition)),
    (n.isStatic = lt(() => n.isStatic));
  const i = w.useMemo(
    () => n,
    [
      JSON.stringify(n.transition),
      n.transformPagePoint,
      n.reducedMotion,
      n.skipAnimations,
    ],
  );
  return it.jsx(Ct.Provider, { value: i, children: t });
}
const ke = w.createContext({});
function Mc(t, e) {
  if (Le(t)) {
    const { initial: n, animate: s } = t;
    return {
      initial: n === !1 || Xt(n) ? n : void 0,
      animate: Xt(s) ? s : void 0,
    };
  }
  return t.inherit !== !1 ? e : {};
}
function Dc(t) {
  const { initial: e, animate: n } = Mc(t, w.useContext(ke));
  return w.useMemo(() => ({ initial: e, animate: n }), [mi(e), mi(n)]);
}
function mi(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const ns = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Po(t, e, n) {
  for (const s in e) !O(e[s]) && !Zr(s, n) && (t[s] = e[s]);
}
function Rc({ transformTemplate: t }, e) {
  return w.useMemo(() => {
    const n = ns();
    return ts(n, e, t), Object.assign({}, n.vars, n.style);
  }, [e]);
}
function Lc(t, e) {
  const n = t.style || {},
    s = {};
  return Po(s, n, t), Object.assign(s, Rc(t, e)), s;
}
function kc(t, e) {
  const n = {},
    s = Lc(t, e);
  return (
    t.drag &&
      t.dragListener !== !1 &&
      ((n.draggable = !1),
      (s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none"),
      (s.touchAction =
        t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`)),
    t.tabIndex === void 0 &&
      (t.onTap || t.onTapStart || t.whileTap) &&
      (n.tabIndex = 0),
    (n.style = s),
    n
  );
}
const Ao = () => ({ ...ns(), attrs: {} });
function Ic(t, e, n, s) {
  const i = w.useMemo(() => {
    const o = Ao();
    return (
      Qr(o, e, eo(s), t.transformTemplate, t.style),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [e]);
  if (t.style) {
    const o = {};
    Po(o, t.style, t), (i.style = { ...o, ...i.style });
  }
  return i;
}
const Bc = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function ss(t) {
  return typeof t != "string" || t.includes("-")
    ? !1
    : !!(Bc.indexOf(t) > -1 || /[A-Z]/u.test(t));
}
function Fc(t, e, n, { latestValues: s }, i, o = !1, r) {
  const u = ((r ?? ss(t)) ? Ic : kc)(e, s, i, t),
    c = Ec(e, typeof t == "string", o),
    l = t !== w.Fragment ? { ...c, ...u, ref: n } : {},
    { children: f } = e,
    h = w.useMemo(() => (O(f) ? f.get() : f), [f]);
  return w.createElement(t, { ...l, children: h });
}
function Oc({ scrapeMotionValuesFromProps: t, createRenderState: e }, n, s, i) {
  return { latestValues: jc(n, s, i, t), renderState: e() };
}
function jc(t, e, n, s) {
  const i = {},
    o = s(t, {});
  for (const h in o) i[h] = ge(o[h]);
  let { initial: r, animate: a } = t;
  const u = Le(t),
    c = Ur(t);
  e &&
    c &&
    !u &&
    t.inherit !== !1 &&
    (r === void 0 && (r = e.initial), a === void 0 && (a = e.animate));
  let l = n ? n.initial === !1 : !1;
  l = l || r === !1;
  const f = l ? a : r;
  if (f && typeof f != "boolean" && !Re(f)) {
    const h = Array.isArray(f) ? f : [f];
    for (let d = 0; d < h.length; d++) {
      const p = Gn(t, h[d]);
      if (p) {
        const { transitionEnd: g, transition: m, ...y } = p;
        for (const v in y) {
          let x = y[v];
          if (Array.isArray(x)) {
            const T = l ? x.length - 1 : 0;
            x = x[T];
          }
          x !== null && (i[v] = x);
        }
        for (const v in g) i[v] = g[v];
      }
    }
  }
  return i;
}
const bo = (t) => (e, n) => {
    const s = w.useContext(ke),
      i = w.useContext(Ce),
      o = () => Oc(t, e, s, i);
    return n ? o() : lt(o);
  },
  Nc = bo({ scrapeMotionValuesFromProps: es, createRenderState: ns }),
  Wc = bo({ scrapeMotionValuesFromProps: no, createRenderState: Ao }),
  Uc = Symbol.for("motionComponentSymbol");
function Hc(t, e, n) {
  const s = w.useRef(n);
  w.useInsertionEffect(() => {
    s.current = n;
  });
  const i = w.useRef(null);
  return w.useCallback(
    (o) => {
      o && t.onMount?.(o);
      const r = s.current;
      if (typeof r == "function")
        if (o) {
          const a = r(o);
          typeof a == "function" && (i.current = a);
        } else i.current ? (i.current(), (i.current = null)) : r(o);
      else r && (r.current = o);
      e && (o ? e.mount(o) : e.unmount());
    },
    [e],
  );
}
const Vo = w.createContext({});
function wt(t) {
  return (
    t &&
    typeof t == "object" &&
    Object.prototype.hasOwnProperty.call(t, "current")
  );
}
function Kc(t, e, n, s, i, o) {
  const { visualElement: r } = w.useContext(ke),
    a = w.useContext(xo),
    u = w.useContext(Ce),
    c = w.useContext(Ct),
    l = c.reducedMotion,
    f = c.skipAnimations,
    h = w.useRef(null),
    d = w.useRef(!1);
  (s = s || a.renderer),
    !h.current &&
      s &&
      ((h.current = s(t, {
        visualState: e,
        parent: r,
        props: n,
        presenceContext: u,
        blockInitialAnimation: u ? u.initial === !1 : !1,
        reducedMotionConfig: l,
        skipAnimations: f,
        isSVG: o,
      })),
      d.current && h.current && (h.current.manuallyAnimateOnMount = !0));
  const p = h.current,
    g = w.useContext(Vo);
  p &&
    !p.projection &&
    i &&
    (p.type === "html" || p.type === "svg") &&
    $c(h.current, n, i, g);
  const m = w.useRef(!1);
  w.useInsertionEffect(() => {
    p && m.current && p.update(n, u);
  });
  const y = n[Er],
    v = w.useRef(
      !!y &&
        typeof window < "u" &&
        !window.MotionHandoffIsComplete?.(y) &&
        window.MotionHasOptimisedAnimation?.(y),
    );
  return (
    Ve(() => {
      (d.current = !0),
        p &&
          ((m.current = !0),
          (window.MotionIsMounted = !0),
          p.updateFeatures(),
          p.scheduleRenderMicrotask(),
          v.current && p.animationState && p.animationState.animateChanges());
    }),
    w.useEffect(() => {
      p &&
        (!v.current && p.animationState && p.animationState.animateChanges(),
        v.current &&
          (queueMicrotask(() => {
            window.MotionHandoffMarkAsComplete?.(y);
          }),
          (v.current = !1)),
        (p.enteringChildren = void 0));
    }),
    p
  );
}
function $c(t, e, n, s) {
  const {
    layoutId: i,
    layout: o,
    drag: r,
    dragConstraints: a,
    layoutScroll: u,
    layoutRoot: c,
    layoutAnchor: l,
    layoutCrossfade: f,
  } = e;
  (t.projection = new n(
    t.latestValues,
    e["data-framer-portal-id"] ? void 0 : Co(t.parent),
  )),
    t.projection.setOptions({
      layoutId: i,
      layout: o,
      alwaysMeasureLayout: !!r || (a && wt(a)),
      visualElement: t,
      animationType: typeof o == "string" ? o : "both",
      initialPromotionConfig: s,
      crossfade: f,
      layoutScroll: u,
      layoutRoot: c,
      layoutAnchor: l,
    });
}
function Co(t) {
  if (t) return t.options.allowProjection !== !1 ? t.projection : Co(t.parent);
}
function Ge(t, { forwardMotionProps: e = !1, type: n } = {}, s, i) {
  s && Vc(s);
  const o = n ? n === "svg" : ss(t),
    r = o ? Wc : Nc;
  function a(c, l) {
    let f;
    const h = { ...w.useContext(Ct), ...c, layoutId: zc(c) },
      { isStatic: d } = h,
      p = Dc(c),
      g = r(c, d);
    if (!d && typeof window < "u") {
      Gc();
      const m = _c(h);
      (f = m.MeasureLayout),
        (p.visualElement = Kc(t, g, h, i, m.ProjectionNode, o));
    }
    return it.jsxs(ke.Provider, {
      value: p,
      children: [
        f && p.visualElement
          ? it.jsx(f, { visualElement: p.visualElement, ...h })
          : null,
        Fc(t, c, Hc(g, p.visualElement, l), g, d, e, o),
      ],
    });
  }
  a.displayName = `motion.${typeof t == "string" ? t : `create(${t.displayName ?? t.name ?? ""})`}`;
  const u = w.forwardRef(a);
  return (u[Uc] = t), u;
}
function zc({ layoutId: t }) {
  const e = w.useContext(bn).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function Gc(t, e) {
  w.useContext(xo).strict;
}
function _c(t) {
  const e = To(),
    { drag: n, layout: s } = e;
  if (!n && !s) return {};
  const i = { ...n, ...s };
  return {
    MeasureLayout:
      n?.isEnabled(t) || s?.isEnabled(t) ? i.MeasureLayout : void 0,
    ProjectionNode: i.ProjectionNode,
  };
}
function Xc(t, e) {
  if (typeof Proxy > "u") return Ge;
  const n = new Map(),
    s = (o, r) => Ge(o, r, t, e),
    i = (o, r) => s(o, r);
  return new Proxy(i, {
    get: (o, r) =>
      r === "create"
        ? s
        : (n.has(r) || n.set(r, Ge(r, void 0, t, e)), n.get(r)),
  });
}
const Yc = (t, e) =>
  (e.isSVG ?? ss(t))
    ? new so(e)
    : new Jr(e, { allowProjection: t !== w.Fragment });
class qc extends ht {
  constructor(e) {
    super(e), e.animationState || (e.animationState = Lu(e));
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps();
    Re(e) && (this.unmountControls = e.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: e } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    e !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    this.node.animationState.reset(), this.unmountControls?.();
  }
}
let Zc = 0;
class Jc extends ht {
  constructor() {
    super(...arguments), (this.id = Zc++), (this.isExitComplete = !1);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: e, onExitComplete: n } = this.node.presenceContext,
      { isPresent: s } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || e === s) return;
    if (e && s === !1) {
      if (this.isExitComplete) {
        const { initial: o, custom: r } = this.node.getProps();
        if (typeof o == "string") {
          const a = vt(this.node, o, r);
          if (a) {
            const { transition: u, transitionEnd: c, ...l } = a;
            for (const f in l) this.node.getValue(f)?.jump(l[f]);
          }
        }
        this.node.animationState.reset(),
          this.node.animationState.animateChanges();
      } else this.node.animationState.setActive("exit", !1);
      this.isExitComplete = !1;
      return;
    }
    const i = this.node.animationState.setActive("exit", !e);
    n &&
      !e &&
      i.then(() => {
        (this.isExitComplete = !0), n(this.id);
      });
  }
  mount() {
    const { register: e, onExitComplete: n } = this.node.presenceContext || {};
    n && n(this.id), e && (this.unmount = e(this.id));
  }
  unmount() {}
}
const Qc = { animation: { Feature: qc }, exit: { Feature: Jc } };
function Qt(t) {
  return { point: { x: t.pageX, y: t.pageY } };
}
const tf = (t) => (e) => Zn(e) && t(e, Qt(e));
function Kt(t, e, n, s) {
  return Yt(t, e, tf(n), s);
}
const Eo = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
  gi = (t, e) => Math.abs(t - e);
function ef(t, e) {
  const n = gi(t.x, e.x),
    s = gi(t.y, e.y);
  return Math.sqrt(n ** 2 + s ** 2);
}
const yi = new Set(["auto", "scroll"]);
class Mo {
  constructor(
    e,
    n,
    {
      transformPagePoint: s,
      contextWindow: i = window,
      dragSnapToOrigin: o = !1,
      distanceThreshold: r = 3,
      element: a,
    } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.lastRawMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.scrollPositions = new Map()),
      (this.removeScrollListeners = null),
      (this.onElementScroll = (d) => {
        this.handleScroll(d.target);
      }),
      (this.onWindowScroll = () => {
        this.handleScroll(window);
      }),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        this.lastRawMoveEventInfo &&
          (this.lastMoveEventInfo = oe(
            this.lastRawMoveEventInfo,
            this.transformPagePoint,
          ));
        const d = _e(this.lastMoveEventInfo, this.history),
          p = this.startEvent !== null,
          g = ef(d.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!p && !g) return;
        const { point: m } = d,
          { timestamp: y } = j;
        this.history.push({ ...m, timestamp: y });
        const { onStart: v, onMove: x } = this.handlers;
        p ||
          (v && v(this.lastMoveEvent, d),
          (this.startEvent = this.lastMoveEvent)),
          x && x(this.lastMoveEvent, d);
      }),
      (this.handlePointerMove = (d, p) => {
        (this.lastMoveEvent = d),
          (this.lastRawMoveEventInfo = p),
          (this.lastMoveEventInfo = oe(p, this.transformPagePoint)),
          E.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (d, p) => {
        this.end();
        const { onEnd: g, onSessionEnd: m, resumeAnimation: y } = this.handlers;
        if (
          ((this.dragSnapToOrigin || !this.startEvent) && y && y(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const v = _e(
          d.type === "pointercancel"
            ? this.lastMoveEventInfo
            : oe(p, this.transformPagePoint),
          this.history,
        );
        this.startEvent && g && g(d, v), m && m(d, v);
      }),
      !Zn(e))
    )
      return;
    (this.dragSnapToOrigin = o),
      (this.handlers = n),
      (this.transformPagePoint = s),
      (this.distanceThreshold = r),
      (this.contextWindow = i || window);
    const u = Qt(e),
      c = oe(u, this.transformPagePoint),
      { point: l } = c,
      { timestamp: f } = j;
    this.history = [{ ...l, timestamp: f }];
    const { onSessionStart: h } = n;
    h && h(e, _e(c, this.history)),
      (this.removeListeners = qt(
        Kt(this.contextWindow, "pointermove", this.handlePointerMove),
        Kt(this.contextWindow, "pointerup", this.handlePointerUp),
        Kt(this.contextWindow, "pointercancel", this.handlePointerUp),
      )),
      a && this.startScrollTracking(a);
  }
  startScrollTracking(e) {
    let n = e.parentElement;
    for (; n; ) {
      const s = getComputedStyle(n);
      (yi.has(s.overflowX) || yi.has(s.overflowY)) &&
        this.scrollPositions.set(n, { x: n.scrollLeft, y: n.scrollTop }),
        (n = n.parentElement);
    }
    this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }),
      window.addEventListener("scroll", this.onElementScroll, { capture: !0 }),
      window.addEventListener("scroll", this.onWindowScroll),
      (this.removeScrollListeners = () => {
        window.removeEventListener("scroll", this.onElementScroll, {
          capture: !0,
        }),
          window.removeEventListener("scroll", this.onWindowScroll);
      });
  }
  handleScroll(e) {
    const n = this.scrollPositions.get(e);
    if (!n) return;
    const s = e === window,
      i = s
        ? { x: window.scrollX, y: window.scrollY }
        : { x: e.scrollLeft, y: e.scrollTop },
      o = { x: i.x - n.x, y: i.y - n.y };
    (o.x === 0 && o.y === 0) ||
      (s
        ? this.lastMoveEventInfo &&
          ((this.lastMoveEventInfo.point.x += o.x),
          (this.lastMoveEventInfo.point.y += o.y))
        : this.history.length > 0 &&
          ((this.history[0].x -= o.x), (this.history[0].y -= o.y)),
      this.scrollPositions.set(e, i),
      E.update(this.updatePoint, !0));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(),
      this.removeScrollListeners && this.removeScrollListeners(),
      this.scrollPositions.clear(),
      X(this.updatePoint);
  }
}
function oe(t, e) {
  return e ? { point: e(t.point) } : t;
}
function vi(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function _e({ point: t }, e) {
  return {
    point: t,
    delta: vi(t, Do(e)),
    offset: vi(t, nf(e)),
    velocity: sf(e, 0.1),
  };
}
function nf(t) {
  return t[0];
}
function Do(t) {
  return t[t.length - 1];
}
function sf(t, e) {
  if (t.length < 2) return { x: 0, y: 0 };
  let n = t.length - 1,
    s = null;
  const i = Do(t);
  for (; n >= 0 && ((s = t[n]), !(i.timestamp - s.timestamp > $(e))); ) n--;
  if (!s) return { x: 0, y: 0 };
  s === t[0] &&
    t.length > 2 &&
    i.timestamp - s.timestamp > $(e) * 2 &&
    (s = t[1]);
  const o = G(i.timestamp - s.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const r = { x: (i.x - s.x) / o, y: (i.y - s.y) / o };
  return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r;
}
function rf(t, { min: e, max: n }, s) {
  return (
    e !== void 0 && t < e
      ? (t = s ? L(e, t, s.min) : Math.max(t, e))
      : n !== void 0 && t > n && (t = s ? L(n, t, s.max) : Math.min(t, n)),
    t
  );
}
function xi(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0,
  };
}
function of(t, { top: e, left: n, bottom: s, right: i }) {
  return { x: xi(t.x, n, i), y: xi(t.y, e, s) };
}
function Ti(t, e) {
  let n = e.min - t.min,
    s = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([n, s] = [s, n]), { min: n, max: s };
}
function af(t, e) {
  return { x: Ti(t.x, e.x), y: Ti(t.y, e.y) };
}
function lf(t, e) {
  let n = 0.5;
  const s = U(t),
    i = U(e);
  return (
    i > s
      ? (n = xt(e.min, e.max - s, t.min))
      : s > i && (n = xt(t.min, t.max - i, e.min)),
    Q(0, 1, n)
  );
}
function uf(t, e) {
  const n = {};
  return (
    e.min !== void 0 && (n.min = e.min - t.min),
    e.max !== void 0 && (n.max = e.max - t.min),
    n
  );
}
const Sn = 0.35;
function cf(t = Sn) {
  return (
    t === !1 ? (t = 0) : t === !0 && (t = Sn),
    { x: wi(t, "left", "right"), y: wi(t, "top", "bottom") }
  );
}
function wi(t, e, n) {
  return { min: Si(t, e), max: Si(t, n) };
}
function Si(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
const ff = new WeakMap();
class hf {
  constructor(e) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = B()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = e);
  }
  start(e, { snapToCursor: n = !1, distanceThreshold: s } = {}) {
    const { presenceContext: i } = this.visualElement;
    if (i && i.isPresent === !1) return;
    const o = (f) => {
        n && this.snapToCursor(Qt(f).point), this.stopAnimation();
      },
      r = (f, h) => {
        const { drag: d, dragPropagation: p, onDragStart: g } = this.getProps();
        if (
          d &&
          !p &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = Hl(d)),
          !this.openDragLock)
        )
          return;
        (this.latestPointerEvent = f),
          (this.latestPanInfo = h),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          nt((y) => {
            let v = this.getAxisMotionValue(y).get() || 0;
            if (rt.test(v)) {
              const { projection: x } = this.visualElement;
              if (x && x.layout) {
                const T = x.layout.layoutBox[y];
                T && (v = U(T) * (parseFloat(v) / 100));
              }
            }
            this.originPoint[y] = v;
          }),
          g && E.update(() => g(f, h), !1, !0),
          hn(this.visualElement, "transform");
        const { animationState: m } = this.visualElement;
        m && m.setActive("whileDrag", !0);
      },
      a = (f, h) => {
        (this.latestPointerEvent = f), (this.latestPanInfo = h);
        const {
          dragPropagation: d,
          dragDirectionLock: p,
          onDirectionLock: g,
          onDrag: m,
        } = this.getProps();
        if (!d && !this.openDragLock) return;
        const { offset: y } = h;
        if (p && this.currentDirection === null) {
          (this.currentDirection = pf(y)),
            this.currentDirection !== null && g && g(this.currentDirection);
          return;
        }
        this.updateAxis("x", h.point, y),
          this.updateAxis("y", h.point, y),
          this.visualElement.render(),
          m && E.update(() => m(f, h), !1, !0);
      },
      u = (f, h) => {
        (this.latestPointerEvent = f),
          (this.latestPanInfo = h),
          this.stop(f, h),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null);
      },
      c = () => {
        const { dragSnapToOrigin: f } = this.getProps();
        (f || this.constraints) && this.startAnimation({ x: 0, y: 0 });
      },
      { dragSnapToOrigin: l } = this.getProps();
    this.panSession = new Mo(
      e,
      {
        onSessionStart: o,
        onStart: r,
        onMove: a,
        onSessionEnd: u,
        resumeAnimation: c,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: l,
        distanceThreshold: s,
        contextWindow: Eo(this.visualElement),
        element: this.visualElement.current,
      },
    );
  }
  stop(e, n) {
    const s = e || this.latestPointerEvent,
      i = n || this.latestPanInfo,
      o = this.isDragging;
    if ((this.cancel(), !o || !i || !s)) return;
    const { velocity: r } = i;
    this.startAnimation(r);
    const { onDragEnd: a } = this.getProps();
    a && E.postRender(() => a(s, i));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: e, animationState: n } = this.visualElement;
    e && (e.isAnimationBlocked = !1), this.endPanSession();
    const { dragPropagation: s } = this.getProps();
    !s &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  endPanSession() {
    this.panSession && this.panSession.end(), (this.panSession = void 0);
  }
  updateAxis(e, n, s) {
    const { drag: i } = this.getProps();
    if (!s || !ae(e, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(e);
    let r = this.originPoint[e] + s[e];
    this.constraints &&
      this.constraints[e] &&
      (r = rf(r, this.constraints[e], this.elastic[e])),
      o.set(r);
  }
  resolveConstraints() {
    const { dragConstraints: e, dragElastic: n } = this.getProps(),
      s =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : this.visualElement.projection?.layout,
      i = this.constraints;
    e && wt(e)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : e && s
        ? (this.constraints = of(s.layoutBox, e))
        : (this.constraints = !1),
      (this.elastic = cf(n)),
      i !== this.constraints &&
        !wt(e) &&
        s &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        nt((o) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = uf(s.layoutBox[o], this.constraints[o]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
    if (!e || !wt(e)) return !1;
    const s = e.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = mu(s, i.root, this.visualElement.getTransformPagePoint());
    let r = af(i.layout.layoutBox, o);
    if (n) {
      const a = n(hu(r));
      (this.hasMutatedConstraints = !!a), a && (r = Gr(a));
    }
    return r;
  }
  startAnimation(e) {
    const {
        drag: n,
        dragMomentum: s,
        dragElastic: i,
        dragTransition: o,
        dragSnapToOrigin: r,
        onDragTransitionEnd: a,
      } = this.getProps(),
      u = this.constraints || {},
      c = nt((l) => {
        if (!ae(l, n, this.currentDirection)) return;
        let f = (u && u[l]) || {};
        (r === !0 || r === l) && (f = { min: 0, max: 0 });
        const h = i ? 200 : 1e6,
          d = i ? 40 : 1e7,
          p = {
            type: "inertia",
            velocity: s ? e[l] : 0,
            bounceStiffness: h,
            bounceDamping: d,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...f,
          };
        return this.startAxisValueAnimation(l, p);
      });
    return Promise.all(c).then(a);
  }
  startAxisValueAnimation(e, n) {
    const s = this.getAxisMotionValue(e);
    return (
      hn(this.visualElement, e), s.start(zn(e, s, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    nt((e) => this.getAxisMotionValue(e).stop());
  }
  getAxisMotionValue(e) {
    const n = `_drag${e.toUpperCase()}`,
      s = this.visualElement.getProps(),
      i = s[n];
    return (
      i ||
      this.visualElement.getValue(e, (s.initial ? s.initial[e] : void 0) || 0)
    );
  }
  snapToCursor(e) {
    nt((n) => {
      const { drag: s } = this.getProps();
      if (!ae(n, s, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: r, max: a } = i.layout.layoutBox[n],
          u = o.get() || 0;
        o.set(e[n] - L(r, a, 0.5) + u);
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: e, dragConstraints: n } = this.getProps(),
      { projection: s } = this.visualElement;
    if (!wt(n) || !s || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    nt((r) => {
      const a = this.getAxisMotionValue(r);
      if (a && this.constraints !== !1) {
        const u = a.get();
        i[r] = lf({ min: u, max: u }, this.constraints[r]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = o ? o({}, "") : "none"),
      s.root && s.root.updateScroll(),
      s.updateLayout(),
      (this.constraints = !1),
      this.resolveConstraints(),
      nt((r) => {
        if (!ae(r, e, null)) return;
        const a = this.getAxisMotionValue(r),
          { min: u, max: c } = this.constraints[r];
        a.set(L(u, c, i[r]));
      }),
      this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current) return;
    ff.set(this.visualElement, this);
    const e = this.visualElement.current,
      n = Kt(e, "pointerdown", (c) => {
        const { drag: l, dragListener: f = !0 } = this.getProps(),
          h = c.target,
          d = h !== e && Xl(h);
        l && f && !d && this.start(c);
      });
    let s;
    const i = () => {
        const { dragConstraints: c } = this.getProps();
        wt(c) &&
          c.current &&
          ((this.constraints = this.resolveRefConstraints()),
          s ||
            (s = df(e, c.current, () =>
              this.scalePositionWithinConstraints(),
            )));
      },
      { projection: o } = this.visualElement,
      r = o.addEventListener("measure", i);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()),
      E.read(i);
    const a = Yt(window, "resize", () => this.scalePositionWithinConstraints()),
      u = o.addEventListener(
        "didUpdate",
        ({ delta: c, hasLayoutChanged: l }) => {
          this.isDragging &&
            l &&
            (nt((f) => {
              const h = this.getAxisMotionValue(f);
              h &&
                ((this.originPoint[f] += c[f].translate),
                h.set(h.get() + c[f].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      a(), n(), r(), u && u(), s && s();
    };
  }
  getProps() {
    const e = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: s = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: r = Sn,
        dragMomentum: a = !0,
      } = e;
    return {
      ...e,
      drag: n,
      dragDirectionLock: s,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: r,
      dragMomentum: a,
    };
  }
}
function Pi(t) {
  let e = !0;
  return () => {
    if (e) {
      e = !1;
      return;
    }
    t();
  };
}
function df(t, e, n) {
  const s = gn(t, Pi(n)),
    i = gn(e, Pi(n));
  return () => {
    s(), i();
  };
}
function ae(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t);
}
function pf(t, e = 10) {
  let n = null;
  return Math.abs(t.y) > e ? (n = "y") : Math.abs(t.x) > e && (n = "x"), n;
}
class mf extends ht {
  constructor(e) {
    super(e),
      (this.removeGroupControls = K),
      (this.removeListeners = K),
      (this.controls = new hf(e));
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    e && (this.removeGroupControls = e.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || K);
  }
  update() {
    const { dragControls: e } = this.node.getProps(),
      { dragControls: n } = this.node.prevProps || {};
    e !== n &&
      (this.removeGroupControls(),
      e && (this.removeGroupControls = e.subscribe(this.controls)));
  }
  unmount() {
    this.removeGroupControls(),
      this.removeListeners(),
      this.controls.isDragging || this.controls.endPanSession();
  }
}
const Xe = (t) => (e, n) => {
  t && E.update(() => t(e, n), !1, !0);
};
class gf extends ht {
  constructor() {
    super(...arguments), (this.removePointerDownListener = K);
  }
  onPointerDown(e) {
    this.session = new Mo(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Eo(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: e,
      onPanStart: n,
      onPan: s,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: Xe(e),
      onStart: Xe(n),
      onMove: Xe(s),
      onEnd: (o, r) => {
        delete this.session, i && E.postRender(() => i(o, r));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Kt(this.node.current, "pointerdown", (e) =>
      this.onPointerDown(e),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
let Ye = !1;
class yf extends w.Component {
  componentDidMount() {
    const {
        visualElement: e,
        layoutGroup: n,
        switchLayoutGroup: s,
        layoutId: i,
      } = this.props,
      { projection: o } = e;
    o &&
      (n.group && n.group.add(o),
      s && s.register && i && s.register(o),
      Ye && o.root.didUpdate(),
      o.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }),
      o.setOptions({
        ...o.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove(),
      })),
      (ye.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(e) {
    const {
        layoutDependency: n,
        visualElement: s,
        drag: i,
        isPresent: o,
      } = this.props,
      { projection: r } = s;
    return (
      r &&
        ((r.isPresent = o),
        e.layoutDependency !== n &&
          r.setOptions({ ...r.options, layoutDependency: n }),
        (Ye = !0),
        i || e.layoutDependency !== n || n === void 0 || e.isPresent !== o
          ? r.willUpdate()
          : this.safeToRemove(),
        e.isPresent !== o &&
          (o
            ? r.promote()
            : r.relegate() ||
              E.postRender(() => {
                const a = r.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { visualElement: e, layoutAnchor: n } = this.props,
      { projection: s } = e;
    s &&
      ((s.options.layoutAnchor = n),
      s.root.didUpdate(),
      qn.postRender(() => {
        !s.currentAnimation && s.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: e,
        layoutGroup: n,
        switchLayoutGroup: s,
      } = this.props,
      { projection: i } = e;
    (Ye = !0),
      i &&
        (i.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(i),
        s && s.deregister && s.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: e } = this.props;
    e && e();
  }
  render() {
    return null;
  }
}
function Ro(t) {
  const [e, n] = vo(),
    s = w.useContext(bn);
  return it.jsx(yf, {
    ...t,
    layoutGroup: s,
    switchLayoutGroup: w.useContext(Vo),
    isPresent: e,
    safeToRemove: n,
  });
}
const vf = {
  pan: { Feature: gf },
  drag: { Feature: mf, ProjectionNode: yo, MeasureLayout: Ro },
};
function Ai(t, e, n) {
  const { props: s } = t;
  t.animationState &&
    s.whileHover &&
    t.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n,
    o = s[i];
  o && E.postRender(() => o(e, Qt(e)));
}
class xf extends ht {
  mount() {
    const { current: e } = this.node;
    e &&
      (this.unmount = $l(
        e,
        (n, s) => (Ai(this.node, s, "Start"), (i) => Ai(this.node, i, "End")),
      ));
  }
  unmount() {}
}
class Tf extends ht {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let e = !1;
    try {
      e = this.node.current.matches(":focus-visible");
    } catch {
      e = !0;
    }
    !e ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = qt(
      Yt(this.node.current, "focus", () => this.onFocus()),
      Yt(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function bi(t, e, n) {
  const { props: s } = t;
  if (t.current instanceof HTMLButtonElement && t.current.disabled) return;
  t.animationState &&
    s.whileTap &&
    t.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n),
    o = s[i];
  o && E.postRender(() => o(e, Qt(e)));
}
class wf extends ht {
  mount() {
    const { current: e } = this.node;
    if (!e) return;
    const { globalTapTarget: n, propagate: s } = this.node.props;
    this.unmount = ql(
      e,
      (i, o) => (
        bi(this.node, o, "Start"),
        (r, { success: a }) => bi(this.node, r, a ? "End" : "Cancel")
      ),
      { useGlobalTarget: n, stopPropagation: s?.tap === !1 },
    );
  }
  unmount() {}
}
const Pn = new WeakMap(),
  qe = new WeakMap(),
  Sf = (t) => {
    const e = Pn.get(t.target);
    e && e(t);
  },
  Pf = (t) => {
    t.forEach(Sf);
  };
function Af({ root: t, ...e }) {
  const n = t || document;
  qe.has(n) || qe.set(n, {});
  const s = qe.get(n),
    i = JSON.stringify(e);
  return s[i] || (s[i] = new IntersectionObserver(Pf, { root: t, ...e })), s[i];
}
function bf(t, e, n) {
  const s = Af(e);
  return (
    Pn.set(t, n),
    s.observe(t),
    () => {
      Pn.delete(t), s.unobserve(t);
    }
  );
}
const Vf = { some: 0, all: 1 };
class Cf extends ht {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.stopObserver?.();
    const { viewport: e = {} } = this.node.getProps(),
      { root: n, margin: s, amount: i = "some", once: o } = e,
      r = {
        root: n ? n.current : void 0,
        rootMargin: s,
        threshold: typeof i == "number" ? i : Vf[i],
      },
      a = (u) => {
        const { isIntersecting: c } = u;
        if (
          this.isInView === c ||
          ((this.isInView = c), o && !c && this.hasEnteredView)
        )
          return;
        c && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", c);
        const { onViewportEnter: l, onViewportLeave: f } = this.node.getProps(),
          h = c ? l : f;
        h && h(u);
      };
    this.stopObserver = bf(this.node.current, r, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: e, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Ef(e, n)) && this.startObserver();
  }
  unmount() {
    this.stopObserver?.(), (this.hasEnteredView = !1), (this.isInView = !1);
  }
}
function Ef({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (n) => t[n] !== e[n];
}
const Mf = {
    inView: { Feature: Cf },
    tap: { Feature: wf },
    focus: { Feature: Tf },
    hover: { Feature: xf },
  },
  Df = { layout: { ProjectionNode: yo, MeasureLayout: Ro } },
  Rf = { ...Qc, ...Mf, ...vf, ...Df },
  Vh = Xc(Rf, Yc);
function be(t) {
  return typeof window > "u" ? !1 : t ? xr() : Un();
}
const Lf = 50,
  Vi = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
  }),
  kf = () => ({ time: 0, x: Vi(), y: Vi() }),
  If = {
    x: { length: "Width", position: "Left" },
    y: { length: "Height", position: "Top" },
  };
function Ci(t, e, n, s) {
  const i = n[e],
    { length: o, position: r } = If[e],
    a = i.current,
    u = n.time;
  (i.current = Math.abs(t[`scroll${r}`])),
    (i.scrollLength = t[`scroll${o}`] - t[`client${o}`]),
    (i.offset.length = 0),
    (i.offset[0] = 0),
    (i.offset[1] = i.scrollLength),
    (i.progress = xt(0, i.scrollLength, i.current));
  const c = s - u;
  i.velocity = c > Lf ? 0 : En(i.current - a, c);
}
function Bf(t, e, n) {
  Ci(t, "x", e, n), Ci(t, "y", e, n), (e.time = n);
}
function Ff(t, e) {
  const n = { x: 0, y: 0 };
  let s = t;
  for (; s && s !== e; )
    if (Ut(s))
      (n.x += s.offsetLeft), (n.y += s.offsetTop), (s = s.offsetParent);
    else if (s.tagName === "svg") {
      const i = s.getBoundingClientRect();
      s = s.parentElement;
      const o = s.getBoundingClientRect();
      (n.x += i.left - o.left), (n.y += i.top - o.top);
    } else if (s instanceof SVGGraphicsElement) {
      const { x: i, y: o } = s.getBBox();
      (n.x += i), (n.y += o);
      let r = null,
        a = s.parentNode;
      for (; !r; ) a.tagName === "svg" && (r = a), (a = s.parentNode);
      s = r;
    } else break;
  return n;
}
const An = { start: 0, center: 0.5, end: 1 };
function Ei(t, e, n = 0) {
  let s = 0;
  if ((t in An && (t = An[t]), typeof t == "string")) {
    const i = parseFloat(t);
    t.endsWith("px")
      ? (s = i)
      : t.endsWith("%")
        ? (t = i / 100)
        : t.endsWith("vw")
          ? (s = (i / 100) * document.documentElement.clientWidth)
          : t.endsWith("vh")
            ? (s = (i / 100) * document.documentElement.clientHeight)
            : (t = i);
  }
  return typeof t == "number" && (s = e * t), n + s;
}
const Of = [0, 0];
function jf(t, e, n, s) {
  let i = Array.isArray(t) ? t : Of,
    o = 0,
    r = 0;
  return (
    typeof t == "number"
      ? (i = [t, t])
      : typeof t == "string" &&
        ((t = t.trim()),
        t.includes(" ") ? (i = t.split(" ")) : (i = [t, An[t] ? t : "0"])),
    (o = Ei(i[0], n, s)),
    (r = Ei(i[1], e)),
    o - r
  );
}
const Ot = {
    Enter: [
      [0, 1],
      [1, 1],
    ],
    Exit: [
      [0, 0],
      [1, 0],
    ],
    Any: [
      [1, 0],
      [0, 1],
    ],
    All: [
      [0, 0],
      [1, 1],
    ],
  },
  Nf = { x: 0, y: 0 };
function Wf(t) {
  return "getBBox" in t && t.tagName !== "svg"
    ? t.getBBox()
    : { width: t.clientWidth, height: t.clientHeight };
}
function Uf(t, e, n) {
  const { offset: s = Ot.All } = n,
    { target: i = t, axis: o = "y" } = n,
    r = o === "y" ? "height" : "width",
    a = i !== t ? Ff(i, t) : Nf,
    u = i === t ? { width: t.scrollWidth, height: t.scrollHeight } : Wf(i),
    c = { width: t.clientWidth, height: t.clientHeight };
  e[o].offset.length = 0;
  let l = !e[o].interpolate;
  const f = s.length;
  for (let h = 0; h < f; h++) {
    const d = jf(s[h], c[r], u[r], a[o]);
    !l && d !== e[o].interpolatorOffsets[h] && (l = !0), (e[o].offset[h] = d);
  }
  l &&
    ((e[o].interpolate = Fn(e[o].offset, On(s), { clamp: !1 })),
    (e[o].interpolatorOffsets = [...e[o].offset])),
    (e[o].progress = Q(0, 1, e[o].interpolate(e[o].current)));
}
function Hf(t, e = t, n) {
  if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), e !== t)) {
    let s = e;
    for (; s && s !== t; )
      (n.x.targetOffset += s.offsetLeft),
        (n.y.targetOffset += s.offsetTop),
        (s = s.offsetParent);
  }
  (n.x.targetLength = e === t ? e.scrollWidth : e.clientWidth),
    (n.y.targetLength = e === t ? e.scrollHeight : e.clientHeight),
    (n.x.containerLength = t.clientWidth),
    (n.y.containerLength = t.clientHeight);
}
function Kf(t, e, n, s = {}) {
  return {
    measure: (i) => {
      Hf(t, s.target, n), Bf(t, n, i), (s.offset || s.target) && Uf(t, n, s);
    },
    notify: () => e(n),
  };
}
const Tt = new WeakMap(),
  Mi = new WeakMap(),
  Ze = new WeakMap(),
  Di = new WeakMap(),
  le = new WeakMap(),
  Ri = (t) => (t === document.scrollingElement ? window : t);
function Lo(
  t,
  {
    container: e = document.scrollingElement,
    trackContentSize: n = !1,
    ...s
  } = {},
) {
  if (!e) return K;
  let i = Ze.get(e);
  i || ((i = new Set()), Ze.set(e, i));
  const o = kf(),
    r = Kf(e, t, o, s);
  if ((i.add(r), !Tt.has(e))) {
    const u = () => {
        for (const h of i) h.measure(j.timestamp);
        E.preUpdate(c);
      },
      c = () => {
        for (const h of i) h.notify();
      },
      l = () => E.read(u);
    Tt.set(e, l);
    const f = Ri(e);
    window.addEventListener("resize", l),
      e !== document.documentElement && Mi.set(e, gn(e, l)),
      f.addEventListener("scroll", l),
      l();
  }
  if (n && !le.has(e)) {
    const u = Tt.get(e),
      c = { width: e.scrollWidth, height: e.scrollHeight };
    Di.set(e, c);
    const l = () => {
        const h = e.scrollWidth,
          d = e.scrollHeight;
        (c.width !== h || c.height !== d) &&
          (u(), (c.width = h), (c.height = d));
      },
      f = E.read(l, !0);
    le.set(e, f);
  }
  const a = Tt.get(e);
  return (
    E.read(a, !1, !0),
    () => {
      X(a);
      const u = Ze.get(e);
      if (!u || (u.delete(r), u.size)) return;
      const c = Tt.get(e);
      Tt.delete(e),
        c &&
          (Ri(e).removeEventListener("scroll", c),
          Mi.get(e)?.(),
          window.removeEventListener("resize", c));
      const l = le.get(e);
      l && (X(l), le.delete(e)), Di.delete(e);
    }
  );
}
const $f = [
    [Ot.Enter, "entry"],
    [Ot.Exit, "exit"],
    [Ot.Any, "cover"],
    [Ot.All, "contain"],
  ],
  Li = { start: 0, end: 1 };
function zf(t) {
  const e = t.trim().split(/\s+/);
  if (e.length !== 2) return;
  const n = Li[e[0]],
    s = Li[e[1]];
  if (!(n === void 0 || s === void 0)) return [n, s];
}
function Gf(t) {
  if (t.length !== 2) return;
  const e = [];
  for (const n of t)
    if (Array.isArray(n)) e.push(n);
    else if (typeof n == "string") {
      const s = zf(n);
      if (!s) return;
      e.push(s);
    } else return;
  return e;
}
function _f(t, e) {
  const n = Gf(t);
  if (!n) return !1;
  for (let s = 0; s < 2; s++) {
    const i = n[s],
      o = e[s];
    if (i[0] !== o[0] || i[1] !== o[1]) return !1;
  }
  return !0;
}
function is(t) {
  if (!t) return { rangeStart: "contain 0%", rangeEnd: "contain 100%" };
  for (const [e, n] of $f)
    if (_f(t, e)) return { rangeStart: `${n} 0%`, rangeEnd: `${n} 100%` };
}
const ki = new Map();
function Ii(t) {
  const e = { value: 0 },
    n = Lo((s) => {
      e.value = s[t.axis].progress * 100;
    }, t);
  return { currentTime: e, cancel: n };
}
function ko({ source: t, container: e, ...n }) {
  const { axis: s } = n;
  t && (e = t);
  let i = ki.get(e);
  i || ((i = new Map()), ki.set(e, i));
  const o = n.target ?? "self";
  let r = i.get(o);
  r || ((r = {}), i.set(o, r));
  const a = s + (n.offset ?? []).join(",");
  return (
    r[a] ||
      (n.target && be(n.target)
        ? is(n.offset)
          ? (r[a] = new ViewTimeline({ subject: n.target, axis: s }))
          : (r[a] = Ii({ container: e, ...n }))
        : be()
          ? (r[a] = new ScrollTimeline({ source: e, axis: s }))
          : (r[a] = Ii({ container: e, ...n }))),
    r[a]
  );
}
function Xf(t, e) {
  const n = ko(e),
    s = e.target ? is(e.offset) : void 0,
    i = e.target ? be(e.target) && !!s : be();
  return t.attachTimeline({
    timeline: i ? n : void 0,
    ...(s && i && { rangeStart: s.rangeStart, rangeEnd: s.rangeEnd }),
    observe: (o) => (
      o.pause(),
      Nr((r) => {
        o.time = o.iterationDuration * r;
      }, n)
    ),
  });
}
function Yf(t) {
  return t.length === 2;
}
function qf(t, e) {
  return Yf(t)
    ? Lo((n) => {
        t(n[e.axis].progress, n);
      }, e)
    : Nr(t, ko(e));
}
function Io(
  t,
  { axis: e = "y", container: n = document.scrollingElement, ...s } = {},
) {
  if (!n) return K;
  const i = { axis: e, container: n, ...s };
  return typeof t == "function" ? qf(t, i) : Xf(t, i);
}
const Zf = () => ({
    scrollX: _(0),
    scrollY: _(0),
    scrollXProgress: _(0),
    scrollYProgress: _(0),
  }),
  ue = (t) => (t ? !t.current : !1);
function Bi(t, e, n, s) {
  return {
    factory: (i) =>
      Io(i, {
        ...e,
        axis: t,
        container: n?.current || void 0,
        target: s?.current || void 0,
      }),
    times: [0, 1],
    keyframes: [0, 1],
    ease: (i) => i,
    duration: 1,
  };
}
function Jf(t, e) {
  return typeof window > "u" ? !1 : t ? xr() && !!is(e) : Un();
}
function Ch({ container: t, target: e, ...n } = {}) {
  const s = lt(Zf);
  Jf(e, n.offset) &&
    ((s.scrollXProgress.accelerate = Bi("x", n, t, e)),
    (s.scrollYProgress.accelerate = Bi("y", n, t, e)));
  const i = w.useRef(null),
    o = w.useRef(!1),
    r = w.useCallback(
      () => (
        (i.current = Io(
          (a, { x: u, y: c }) => {
            s.scrollX.set(u.current),
              s.scrollXProgress.set(u.progress),
              s.scrollY.set(c.current),
              s.scrollYProgress.set(c.progress);
          },
          {
            ...n,
            container: t?.current || void 0,
            target: e?.current || void 0,
          },
        )),
        () => {
          i.current?.();
        }
      ),
      [t, e, JSON.stringify(n.offset)],
    );
  return (
    Ve(() => {
      if (((o.current = !1), ue(t) || ue(e))) {
        o.current = !0;
        return;
      } else return r();
    }, [r]),
    w.useEffect(() => {
      if (o.current) return $t(!ue(t)), $t(!ue(e)), r();
    }, [r]),
    s
  );
}
function Qf(t) {
  const e = lt(() => _(t)),
    { isStatic: n } = w.useContext(Ct);
  if (n) {
    const [, s] = w.useState(t);
    w.useEffect(() => e.on("change", s), []);
  }
  return e;
}
function Bo(t, e) {
  const n = Qf(e()),
    s = () => n.set(e());
  return (
    s(),
    Ve(() => {
      const i = () => E.preRender(s, !1, !0),
        o = t.map((r) => r.on("change", i));
      return () => {
        o.forEach((r) => r()), X(s);
      };
    }),
    n
  );
}
function th(t) {
  (Wt.current = []), t();
  const e = Bo(Wt.current, t);
  return (Wt.current = void 0), e;
}
function eh(t, e, n, s) {
  if (typeof t == "function") return th(t);
  if (n !== void 0 && !Array.isArray(n) && typeof e != "function")
    return nh(t, e, n, s);
  const r = typeof e == "function" ? e : ru(e, n, s),
    a = Array.isArray(t) ? Fi(t, r) : Fi([t], ([c]) => r(c)),
    u = Array.isArray(t) ? void 0 : t.accelerate;
  return (
    u &&
      !u.isTransformed &&
      typeof e != "function" &&
      Array.isArray(n) &&
      s?.clamp !== !1 &&
      (a.accelerate = { ...u, times: e, keyframes: n, isTransformed: !0 }),
    a
  );
}
function Fi(t, e) {
  const n = lt(() => []);
  return Bo(t, () => {
    n.length = 0;
    const s = t.length;
    for (let i = 0; i < s; i++) n[i] = t[i].get();
    return e(n);
  });
}
function nh(t, e, n, s) {
  const i = lt(() => Object.keys(n)),
    o = lt(() => ({}));
  for (const r of i) o[r] = eh(t, e, n[r], s);
  return o;
}
function rs(t) {
  return typeof t == "object" && !Array.isArray(t);
}
function Fo(t, e, n, s) {
  return t == null
    ? []
    : typeof t == "string" && rs(e)
      ? Me(t, n, s)
      : t instanceof NodeList
        ? Array.from(t)
        : Array.isArray(t)
          ? t.filter((i) => i != null)
          : [t];
}
function sh(t, e, n) {
  return t * (e + 1);
}
function Oi(t, e, n, s) {
  return typeof e == "number"
    ? e
    : e.startsWith("-") || e.startsWith("+")
      ? Math.max(0, t + parseFloat(e))
      : e === "<"
        ? n
        : e.startsWith("<")
          ? Math.max(0, n + parseFloat(e.slice(1)))
          : (s.get(e) ?? t);
}
function ih(t, e, n) {
  for (let s = 0; s < t.length; s++) {
    const i = t[s];
    i.at > e && i.at < n && (bt(t, i), s--);
  }
}
function rh(t, e, n, s, i, o) {
  ih(t, i, o);
  for (let r = 0; r < e.length; r++)
    t.push({ value: e[r], at: L(i, o, s[r]), easing: tr(n, r) });
}
function oh(t, e) {
  for (let n = 0; n < t.length; n++) t[n] = t[n] / (e + 1);
}
function ah(t, e) {
  return t.at === e.at
    ? t.value === null
      ? 1
      : e.value === null
        ? -1
        : 0
    : t.at - e.at;
}
const lh = "easeInOut";
function uh(t, { defaultTransition: e = {}, ...n } = {}, s, i) {
  const o = e.duration || 0.3,
    r = new Map(),
    a = new Map(),
    u = {},
    c = new Map();
  let l = 0,
    f = 0,
    h = 0;
  for (let d = 0; d < t.length; d++) {
    const p = t[d];
    if (typeof p == "string") {
      c.set(p, f);
      continue;
    } else if (!Array.isArray(p)) {
      c.set(p.name, Oi(f, p.at, l, c));
      continue;
    }
    let [g, m, y = {}] = p;
    y.at !== void 0 && (f = Oi(f, y.at, l, c));
    let v = 0;
    const x = (T, A, M, R = 0, V = 0) => {
      const b = ch(T),
        {
          delay: P = 0,
          times: C = On(b),
          type: I = e.type || "keyframes",
          repeat: H,
          repeatType: Y,
          repeatDelay: tt = 0,
          ...z
        } = A;
      let { ease: ot = e.ease || "easeOut", duration: D } = A;
      const N = typeof P == "function" ? P(R, V) : P,
        et = b.length,
        at = Hn(I) ? I : i?.[I || "keyframes"];
      if (et <= 2 && at) {
        let Rt = 100;
        if (et === 2 && dh(b)) {
          const Lt = b[1] - b[0];
          Rt = Math.abs(Lt);
        }
        const ee = { ...e, ...z };
        D !== void 0 && (ee.duration = $(D));
        const ne = hr(ee, Rt, at);
        (ot = ne.ease), (D = ne.duration);
      }
      D ?? (D = o);
      const te = f + N;
      C.length === 1 && C[0] === 0 && (C[1] = 1);
      const os = C.length - b.length;
      if ((os > 0 && pr(C, os), b.length === 1 && b.unshift(null), H)) {
        D = sh(D, H);
        const Rt = [...b],
          ee = [...C];
        ot = Array.isArray(ot) ? [...ot] : [ot];
        const ne = [...ot];
        for (let Lt = 0; Lt < H; Lt++) {
          b.push(...Rt);
          for (let kt = 0; kt < Rt.length; kt++)
            C.push(ee[kt] + (Lt + 1)),
              ot.push(kt === 0 ? "linear" : tr(ne, kt - 1));
        }
        oh(C, H);
      }
      const as = te + D;
      rh(M, b, ot, C, te, as), (v = Math.max(N + D, v)), (h = Math.max(as, h));
    };
    if (O(g)) {
      const T = ji(g, a);
      x(m, y, Ni("default", T));
    } else {
      const T = Fo(g, m, s, u),
        A = T.length;
      for (let M = 0; M < A; M++) {
        (m = m), (y = y);
        const R = T[M],
          V = ji(R, a);
        for (const b in m) x(m[b], fh(y, b), Ni(b, V), M, A);
      }
    }
    (l = f), (f += v);
  }
  return (
    a.forEach((d, p) => {
      for (const g in d) {
        const m = d[g];
        m.sort(ah);
        const y = [],
          v = [],
          x = [];
        for (let R = 0; R < m.length; R++) {
          const { at: V, value: b, easing: P } = m[R];
          y.push(b), v.push(xt(0, h, V)), x.push(P || "easeOut");
        }
        v[0] !== 0 && (v.unshift(0), y.unshift(y[0]), x.unshift(lh)),
          v[v.length - 1] !== 1 && (v.push(1), y.push(null)),
          r.has(p) || r.set(p, { keyframes: {}, transition: {} });
        const T = r.get(p);
        T.keyframes[g] = y;
        const { type: A, ...M } = e;
        T.transition[g] = { ...M, duration: h, ease: x, times: v, ...n };
      }
    }),
    r
  );
}
function ji(t, e) {
  return !e.has(t) && e.set(t, {}), e.get(t);
}
function Ni(t, e) {
  return e[t] || (e[t] = []), e[t];
}
function ch(t) {
  return Array.isArray(t) ? t : [t];
}
function fh(t, e) {
  return t && t[e] ? { ...t, ...t[e] } : { ...t };
}
const hh = (t) => typeof t == "number",
  dh = (t) => t.every(hh);
function ph(t) {
  const e = {
      presenceContext: null,
      props: {},
      visualState: {
        renderState: {
          transform: {},
          transformOrigin: {},
          style: {},
          vars: {},
          attrs: {},
        },
        latestValues: {},
      },
    },
    n = De(t) && !Wr(t) ? new so(e) : new Jr(e);
  n.mount(t), _t.set(t, n);
}
function mh(t) {
  const e = {
      presenceContext: null,
      props: {},
      visualState: { renderState: { output: {} }, latestValues: {} },
    },
    n = new Su(e);
  n.mount(t), _t.set(t, n);
}
function gh(t, e) {
  return O(t) || typeof t == "number" || (typeof t == "string" && !rs(e));
}
function Oo(t, e, n, s) {
  const i = [];
  if (gh(t, e)) i.push(ho(t, (rs(e) && e.default) || e, n && (n.default || n)));
  else {
    if (t == null) return i;
    const o = Fo(t, e, s),
      r = o.length;
    for (let a = 0; a < r; a++) {
      const u = o[a],
        c = u instanceof Element ? ph : mh;
      _t.has(u) || c(u);
      const l = _t.get(u),
        f = { ...n };
      "delay" in f && typeof f.delay == "function" && (f.delay = f.delay(a, r)),
        i.push(...Xn(l, { ...e, transition: f }, {}));
    }
  }
  return i;
}
function yh(t, e, n) {
  const s = [],
    i = t.map((r) => {
      if (Array.isArray(r) && typeof r[0] == "function") {
        const a = r[0],
          u = _(0);
        return (
          u.on("change", a),
          r.length === 1
            ? [u, [0, 1]]
            : r.length === 2
              ? [u, [0, 1], r[1]]
              : [u, r[1], r[2]]
        );
      }
      return r;
    });
  return (
    uh(i, e, n, { spring: Gt }).forEach(
      ({ keyframes: r, transition: a }, u) => {
        s.push(...Oo(u, r, a));
      },
    ),
    s
  );
}
function vh(t) {
  return Array.isArray(t) && t.some(Array.isArray);
}
function xh(t = {}) {
  const { scope: e, reduceMotion: n } = t;
  function s(i, o, r) {
    let a = [],
      u;
    if (vh(i)) {
      const { onComplete: l, ...f } = o || {};
      typeof l == "function" && (u = l),
        (a = yh(i, n !== void 0 ? { reduceMotion: n, ...f } : f, e));
    } else {
      const { onComplete: l, ...f } = r || {};
      typeof l == "function" && (u = l),
        (a = Oo(i, o, n !== void 0 ? { reduceMotion: n, ...f } : f, e));
    }
    const c = new fl(a);
    return (
      u && c.finished.then(u),
      e &&
        (e.animations.push(c),
        c.finished.then(() => {
          bt(e.animations, c);
        })),
      c
    );
  }
  return s;
}
const Eh = xh(),
  Th = { some: 0, all: 1 };
function wh(t, e, { root: n, margin: s, amount: i = "some" } = {}) {
  const o = Me(t),
    r = new WeakMap(),
    a = (c) => {
      c.forEach((l) => {
        const f = r.get(l.target);
        if (l.isIntersecting !== !!f)
          if (l.isIntersecting) {
            const h = e(l.target, l);
            typeof h == "function" ? r.set(l.target, h) : u.unobserve(l.target);
          } else typeof f == "function" && (f(l), r.delete(l.target));
      });
    },
    u = new IntersectionObserver(a, {
      root: n,
      rootMargin: s,
      threshold: typeof i == "number" ? i : Th[i],
    });
  return o.forEach((c) => u.observe(c)), () => u.disconnect();
}
function Mh(
  t,
  { root: e, margin: n, amount: s, once: i = !1, initial: o = !1 } = {},
) {
  const [r, a] = w.useState(o);
  return (
    w.useEffect(() => {
      if (!t.current || (i && r)) return;
      const u = () => (a(!0), i ? void 0 : () => a(!1)),
        c = { root: (e && e.current) || void 0, margin: n, amount: s };
      return wh(t.current, u, c);
    }, [e, t, n, i, s]),
    r
  );
}
export {
  Ah as A,
  bh as M,
  eh as a,
  Qf as b,
  Mh as c,
  Eh as d,
  it as j,
  Vh as m,
  Ch as u,
};
