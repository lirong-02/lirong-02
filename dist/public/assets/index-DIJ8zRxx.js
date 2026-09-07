const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./index-CPCRazQQ.js",
      "./vendor-motion-DryeDRHM.js",
      "./vendor-router-CtvkFGlM.js",
      "./vendor-icons-CqqOs0Bq.js",
      "./vendor-react-D4U8S3aY.js",
      "./vendor-lenis-CpJfINCX.js",
      "./index-BXdM8uZt.js",
      "./index-DnGIfiMC.js",
      "./index-f4JpbCrd.js",
      "./blog-Ceh5psEM.js",
      "./post-DUZCc_DG.js",
    ]),
) => i.map((i) => d[i]);
import {
  j as f,
  m as $,
  A as ll,
  u as nb,
  a as al,
  b as ab,
  c as mg,
  d as lb,
  M as ib,
} from "./vendor-motion-DryeDRHM.js";
import {
  a as rb,
  s as ob,
  r as x,
  R as hg,
  g as gg,
  b as ra,
  c as ub,
  S as sb,
  d as Wa,
} from "./vendor-router-CtvkFGlM.js";
import { r as pg } from "./vendor-react-D4U8S3aY.js";
import {
  X as ec,
  L as vg,
  C as tc,
  a as bg,
  M as ci,
  Q as cb,
  D as ia,
  b as fb,
  S as yg,
  c as db,
  d as mb,
  e as hb,
  f as gb,
  P as xg,
  A as pb,
  G as vb,
  g as bb,
  U as yb,
  B as Sg,
  E as fi,
  h as ih,
  i as xb,
  j as Sb,
  k as wb,
  l as Eb,
  m as Nb,
  n as jb,
} from "./vendor-icons-CqqOs0Bq.js";
import { L as Ab } from "./vendor-lenis-CpJfINCX.js";
(function () {
  const u = document.createElement("link").relList;
  if (u && u.supports && u.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) o(c);
  new MutationObserver((c) => {
    for (const d of c)
      if (d.type === "childList")
        for (const h of d.addedNodes)
          h.tagName === "LINK" && h.rel === "modulepreload" && o(h);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(c) {
    const d = {};
    return (
      c.integrity && (d.integrity = c.integrity),
      c.referrerPolicy && (d.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (d.credentials = "include")
        : c.crossOrigin === "anonymous"
          ? (d.credentials = "omit")
          : (d.credentials = "same-origin"),
      d
    );
  }
  function o(c) {
    if (c.ep) return;
    c.ep = !0;
    const d = s(c);
    fetch(c.href, d);
  }
})();
var os = { exports: {} },
  ai = {},
  us = { exports: {} },
  ss = {};
var rh;
function Tb() {
  return (
    rh ||
      ((rh = 1),
      (function (l) {
        function u(R, K) {
          var ie = R.length;
          R.push(K);
          e: for (; 0 < ie; ) {
            var ye = (ie - 1) >>> 1,
              J = R[ye];
            if (0 < c(J, K)) (R[ye] = K), (R[ie] = J), (ie = ye);
            else break e;
          }
        }
        function s(R) {
          return R.length === 0 ? null : R[0];
        }
        function o(R) {
          if (R.length === 0) return null;
          var K = R[0],
            ie = R.pop();
          if (ie !== K) {
            R[0] = ie;
            e: for (var ye = 0, J = R.length, Ue = J >>> 1; ye < Ue; ) {
              var we = 2 * (ye + 1) - 1,
                ge = R[we],
                Re = we + 1,
                Se = R[Re];
              if (0 > c(ge, ie))
                Re < J && 0 > c(Se, ge)
                  ? ((R[ye] = Se), (R[Re] = ie), (ye = Re))
                  : ((R[ye] = ge), (R[we] = ie), (ye = we));
              else if (Re < J && 0 > c(Se, ie))
                (R[ye] = Se), (R[Re] = ie), (ye = Re);
              else break e;
            }
          }
          return K;
        }
        function c(R, K) {
          var ie = R.sortIndex - K.sortIndex;
          return ie !== 0 ? ie : R.id - K.id;
        }
        if (
          ((l.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var d = performance;
          l.unstable_now = function () {
            return d.now();
          };
        } else {
          var h = Date,
            p = h.now();
          l.unstable_now = function () {
            return h.now() - p;
          };
        }
        var v = [],
          w = [],
          S = 1,
          T = null,
          M = 3,
          A = !1,
          H = !1,
          z = !1,
          O = !1,
          q = typeof setTimeout == "function" ? setTimeout : null,
          Q = typeof clearTimeout == "function" ? clearTimeout : null,
          Y = typeof setImmediate < "u" ? setImmediate : null;
        function V(R) {
          for (var K = s(w); K !== null; ) {
            if (K.callback === null) o(w);
            else if (K.startTime <= R)
              o(w), (K.sortIndex = K.expirationTime), u(v, K);
            else break;
            K = s(w);
          }
        }
        function W(R) {
          if (((z = !1), V(R), !H))
            if (s(v) !== null) (H = !0), X || ((X = !0), F());
            else {
              var K = s(w);
              K !== null && De(W, K.startTime - R);
            }
        }
        var X = !1,
          G = -1,
          U = 5,
          Z = -1;
        function ne() {
          return O ? !0 : !(l.unstable_now() - Z < U);
        }
        function I() {
          if (((O = !1), X)) {
            var R = l.unstable_now();
            Z = R;
            var K = !0;
            try {
              e: {
                (H = !1), z && ((z = !1), Q(G), (G = -1)), (A = !0);
                var ie = M;
                try {
                  t: {
                    for (
                      V(R), T = s(v);
                      T !== null && !(T.expirationTime > R && ne());
                    ) {
                      var ye = T.callback;
                      if (typeof ye == "function") {
                        (T.callback = null), (M = T.priorityLevel);
                        var J = ye(T.expirationTime <= R);
                        if (((R = l.unstable_now()), typeof J == "function")) {
                          (T.callback = J), V(R), (K = !0);
                          break t;
                        }
                        T === s(v) && o(v), V(R);
                      } else o(v);
                      T = s(v);
                    }
                    if (T !== null) K = !0;
                    else {
                      var Ue = s(w);
                      Ue !== null && De(W, Ue.startTime - R), (K = !1);
                    }
                  }
                  break e;
                } finally {
                  (T = null), (M = ie), (A = !1);
                }
                K = void 0;
              }
            } finally {
              K ? F() : (X = !1);
            }
          }
        }
        var F;
        if (typeof Y == "function")
          F = function () {
            Y(I);
          };
        else if (typeof MessageChannel < "u") {
          var ae = new MessageChannel(),
            oe = ae.port2;
          (ae.port1.onmessage = I),
            (F = function () {
              oe.postMessage(null);
            });
        } else
          F = function () {
            q(I, 0);
          };
        function De(R, K) {
          G = q(function () {
            R(l.unstable_now());
          }, K);
        }
        (l.unstable_IdlePriority = 5),
          (l.unstable_ImmediatePriority = 1),
          (l.unstable_LowPriority = 4),
          (l.unstable_NormalPriority = 3),
          (l.unstable_Profiling = null),
          (l.unstable_UserBlockingPriority = 2),
          (l.unstable_cancelCallback = function (R) {
            R.callback = null;
          }),
          (l.unstable_forceFrameRate = function (R) {
            0 > R || 125 < R
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (U = 0 < R ? Math.floor(1e3 / R) : 5);
          }),
          (l.unstable_getCurrentPriorityLevel = function () {
            return M;
          }),
          (l.unstable_next = function (R) {
            switch (M) {
              case 1:
              case 2:
              case 3:
                var K = 3;
                break;
              default:
                K = M;
            }
            var ie = M;
            M = K;
            try {
              return R();
            } finally {
              M = ie;
            }
          }),
          (l.unstable_requestPaint = function () {
            O = !0;
          }),
          (l.unstable_runWithPriority = function (R, K) {
            switch (R) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                R = 3;
            }
            var ie = M;
            M = R;
            try {
              return K();
            } finally {
              M = ie;
            }
          }),
          (l.unstable_scheduleCallback = function (R, K, ie) {
            var ye = l.unstable_now();
            switch (
              (typeof ie == "object" && ie !== null
                ? ((ie = ie.delay),
                  (ie = typeof ie == "number" && 0 < ie ? ye + ie : ye))
                : (ie = ye),
              R)
            ) {
              case 1:
                var J = -1;
                break;
              case 2:
                J = 250;
                break;
              case 5:
                J = 1073741823;
                break;
              case 4:
                J = 1e4;
                break;
              default:
                J = 5e3;
            }
            return (
              (J = ie + J),
              (R = {
                id: S++,
                callback: K,
                priorityLevel: R,
                startTime: ie,
                expirationTime: J,
                sortIndex: -1,
              }),
              ie > ye
                ? ((R.sortIndex = ie),
                  u(w, R),
                  s(v) === null &&
                    R === s(w) &&
                    (z ? (Q(G), (G = -1)) : (z = !0), De(W, ie - ye)))
                : ((R.sortIndex = J),
                  u(v, R),
                  H || A || ((H = !0), X || ((X = !0), F()))),
              R
            );
          }),
          (l.unstable_shouldYield = ne),
          (l.unstable_wrapCallback = function (R) {
            var K = M;
            return function () {
              var ie = M;
              M = K;
              try {
                return R.apply(this, arguments);
              } finally {
                M = ie;
              }
            };
          });
      })(ss)),
    ss
  );
}
var oh;
function Cb() {
  return oh || ((oh = 1), (us.exports = Tb())), us.exports;
}
var uh;
function Mb() {
  if (uh) return ai;
  uh = 1;
  var l = Cb(),
    u = rb(),
    s = pg();
  function o(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function c(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function d(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function h(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function p(e) {
    if (d(e) !== e) throw Error(o(188));
  }
  function v(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = d(e)), t === null)) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var n = e, a = t; ; ) {
      var i = n.return;
      if (i === null) break;
      var r = i.alternate;
      if (r === null) {
        if (((a = i.return), a !== null)) {
          n = a;
          continue;
        }
        break;
      }
      if (i.child === r.child) {
        for (r = i.child; r; ) {
          if (r === n) return p(i), e;
          if (r === a) return p(i), t;
          r = r.sibling;
        }
        throw Error(o(188));
      }
      if (n.return !== a.return) (n = i), (a = r);
      else {
        for (var m = !1, g = i.child; g; ) {
          if (g === n) {
            (m = !0), (n = i), (a = r);
            break;
          }
          if (g === a) {
            (m = !0), (a = i), (n = r);
            break;
          }
          g = g.sibling;
        }
        if (!m) {
          for (g = r.child; g; ) {
            if (g === n) {
              (m = !0), (n = r), (a = i);
              break;
            }
            if (g === a) {
              (m = !0), (a = r), (n = i);
              break;
            }
            g = g.sibling;
          }
          if (!m) throw Error(o(189));
        }
      }
      if (n.alternate !== a) throw Error(o(190));
    }
    if (n.tag !== 3) throw Error(o(188));
    return n.stateNode.current === n ? e : t;
  }
  function w(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = w(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var S = Object.assign,
    T = Symbol.for("react.element"),
    M = Symbol.for("react.transitional.element"),
    A = Symbol.for("react.portal"),
    H = Symbol.for("react.fragment"),
    z = Symbol.for("react.strict_mode"),
    O = Symbol.for("react.profiler"),
    q = Symbol.for("react.provider"),
    Q = Symbol.for("react.consumer"),
    Y = Symbol.for("react.context"),
    V = Symbol.for("react.forward_ref"),
    W = Symbol.for("react.suspense"),
    X = Symbol.for("react.suspense_list"),
    G = Symbol.for("react.memo"),
    U = Symbol.for("react.lazy"),
    Z = Symbol.for("react.activity"),
    ne = Symbol.for("react.memo_cache_sentinel"),
    I = Symbol.iterator;
  function F(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (I && e[I]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var ae = Symbol.for("react.client.reference");
  function oe(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === ae ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case H:
        return "Fragment";
      case O:
        return "Profiler";
      case z:
        return "StrictMode";
      case W:
        return "Suspense";
      case X:
        return "SuspenseList";
      case Z:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case A:
          return "Portal";
        case Y:
          return (e.displayName || "Context") + ".Provider";
        case Q:
          return (e._context.displayName || "Context") + ".Consumer";
        case V:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case G:
          return (
            (t = e.displayName || null), t !== null ? t : oe(e.type) || "Memo"
          );
        case U:
          (t = e._payload), (e = e._init);
          try {
            return oe(e(t));
          } catch {}
      }
    return null;
  }
  var De = Array.isArray,
    R = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    K = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    ie = { pending: !1, data: null, method: null, action: null },
    ye = [],
    J = -1;
  function Ue(e) {
    return { current: e };
  }
  function we(e) {
    0 > J || ((e.current = ye[J]), (ye[J] = null), J--);
  }
  function ge(e, t) {
    J++, (ye[J] = e.current), (e.current = t);
  }
  var Re = Ue(null),
    Se = Ue(null),
    Ce = Ue(null),
    Ye = Ue(null);
  function We(e, t) {
    switch ((ge(Ce, t), ge(Se, e), ge(Re, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Om(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          (t = Om(t)), (e = Um(t, e));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    we(Re), ge(Re, e);
  }
  function ve() {
    we(Re), we(Se), we(Ce);
  }
  function Rt(e) {
    e.memoizedState !== null && ge(Ye, e);
    var t = Re.current,
      n = Um(t, e.type);
    t !== n && (ge(Se, e), ge(Re, n));
  }
  function Vt(e) {
    Se.current === e && (we(Re), we(Se)),
      Ye.current === e && (we(Ye), (Il._currentValue = ie));
  }
  var rn = Object.prototype.hasOwnProperty,
    Ln = l.unstable_scheduleCallback,
    on = l.unstable_cancelCallback,
    U0 = l.unstable_shouldYield,
    _0 = l.unstable_requestPaint,
    Ot = l.unstable_now,
    B0 = l.unstable_getCurrentPriorityLevel,
    dc = l.unstable_ImmediatePriority,
    mc = l.unstable_UserBlockingPriority,
    pi = l.unstable_NormalPriority,
    k0 = l.unstable_LowPriority,
    hc = l.unstable_IdlePriority,
    L0 = l.log,
    H0 = l.unstable_setDisableYieldValue,
    rl = null,
    st = null;
  function un(e) {
    if (
      (typeof L0 == "function" && H0(e),
      st && typeof st.setStrictMode == "function")
    )
      try {
        st.setStrictMode(rl, e);
      } catch {}
  }
  var ct = Math.clz32 ? Math.clz32 : G0,
    q0 = Math.log,
    V0 = Math.LN2;
  function G0(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((q0(e) / V0) | 0)) | 0;
  }
  var vi = 256,
    bi = 4194304;
  function Hn(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function yi(e, t, n) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var i = 0,
      r = e.suspendedLanes,
      m = e.pingedLanes;
    e = e.warmLanes;
    var g = a & 134217727;
    return (
      g !== 0
        ? ((a = g & ~r),
          a !== 0
            ? (i = Hn(a))
            : ((m &= g),
              m !== 0
                ? (i = Hn(m))
                : n || ((n = g & ~e), n !== 0 && (i = Hn(n)))))
        : ((g = a & ~r),
          g !== 0
            ? (i = Hn(g))
            : m !== 0
              ? (i = Hn(m))
              : n || ((n = a & ~e), n !== 0 && (i = Hn(n)))),
      i === 0
        ? 0
        : t !== 0 &&
            t !== i &&
            (t & r) === 0 &&
            ((r = i & -i),
            (n = t & -t),
            r >= n || (r === 32 && (n & 4194048) !== 0))
          ? t
          : i
    );
  }
  function ol(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Y0(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function gc() {
    var e = vi;
    return (vi <<= 1), (vi & 4194048) === 0 && (vi = 256), e;
  }
  function pc() {
    var e = bi;
    return (bi <<= 1), (bi & 62914560) === 0 && (bi = 4194304), e;
  }
  function $r(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function ul(e, t) {
    (e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function X0(e, t, n, a, i, r) {
    var m = e.pendingLanes;
    (e.pendingLanes = n),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= n),
      (e.entangledLanes &= n),
      (e.errorRecoveryDisabledLanes &= n),
      (e.shellSuspendCounter = 0);
    var g = e.entanglements,
      b = e.expirationTimes,
      j = e.hiddenUpdates;
    for (n = m & ~n; 0 < n; ) {
      var _ = 31 - ct(n),
        L = 1 << _;
      (g[_] = 0), (b[_] = -1);
      var C = j[_];
      if (C !== null)
        for (j[_] = null, _ = 0; _ < C.length; _++) {
          var D = C[_];
          D !== null && (D.lane &= -536870913);
        }
      n &= ~L;
    }
    a !== 0 && vc(e, a, 0),
      r !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= r & ~(m & ~t));
  }
  function vc(e, t, n) {
    (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
    var a = 31 - ct(t);
    (e.entangledLanes |= t),
      (e.entanglements[a] = e.entanglements[a] | 1073741824 | (n & 4194090));
  }
  function bc(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var a = 31 - ct(n),
        i = 1 << a;
      (i & t) | (e[a] & t) && (e[a] |= t), (n &= ~i);
    }
  }
  function Fr(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Wr(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function yc() {
    var e = K.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Pm(e.type));
  }
  function Q0(e, t) {
    var n = K.p;
    try {
      return (K.p = e), t();
    } finally {
      K.p = n;
    }
  }
  var sn = Math.random().toString(36).slice(2),
    tt = "__reactFiber$" + sn,
    lt = "__reactProps$" + sn,
    da = "__reactContainer$" + sn,
    Ir = "__reactEvents$" + sn,
    Z0 = "__reactListeners$" + sn,
    K0 = "__reactHandles$" + sn,
    xc = "__reactResources$" + sn,
    sl = "__reactMarker$" + sn;
  function Pr(e) {
    delete e[tt], delete e[lt], delete e[Ir], delete e[Z0], delete e[K0];
  }
  function ma(e) {
    var t = e[tt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[da] || n[tt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Lm(e); e !== null; ) {
            if ((n = e[tt])) return n;
            e = Lm(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function ha(e) {
    if ((e = e[tt] || e[da])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function cl(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(o(33));
  }
  function ga(e) {
    var t = e[xc];
    return (
      t ||
        (t = e[xc] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Ke(e) {
    e[sl] = !0;
  }
  var Sc = new Set(),
    wc = {};
  function qn(e, t) {
    pa(e, t), pa(e + "Capture", t);
  }
  function pa(e, t) {
    for (wc[e] = t, e = 0; e < t.length; e++) Sc.add(t[e]);
  }
  var J0 = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Ec = {},
    Nc = {};
  function $0(e) {
    return rn.call(Nc, e)
      ? !0
      : rn.call(Ec, e)
        ? !1
        : J0.test(e)
          ? (Nc[e] = !0)
          : ((Ec[e] = !0), !1);
  }
  function xi(e, t, n) {
    if ($0(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + n);
      }
  }
  function Si(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + n);
    }
  }
  function Gt(e, t, n, a) {
    if (a === null) e.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, "" + a);
    }
  }
  var eo, jc;
  function va(e) {
    if (eo === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        (eo = (t && t[1]) || ""),
          (jc =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
                ? "@unknown:0:0"
                : "");
      }
    return (
      `
` +
      eo +
      e +
      jc
    );
  }
  var to = !1;
  function no(e, t) {
    if (!e || to) return "";
    to = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var L = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(L.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(L, []);
                } catch (D) {
                  var C = D;
                }
                Reflect.construct(e, [], L);
              } else {
                try {
                  L.call();
                } catch (D) {
                  C = D;
                }
                e.call(L.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (D) {
                C = D;
              }
              (L = e()) &&
                typeof L.catch == "function" &&
                L.catch(function () {});
            }
          } catch (D) {
            if (D && C && typeof D.stack == "string") return [D.stack, C.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var i = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name",
      );
      i &&
        i.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var r = a.DetermineComponentFrameRoot(),
        m = r[0],
        g = r[1];
      if (m && g) {
        var b = m.split(`
`),
          j = g.split(`
`);
        for (
          i = a = 0;
          a < b.length && !b[a].includes("DetermineComponentFrameRoot");
        )
          a++;
        for (; i < j.length && !j[i].includes("DetermineComponentFrameRoot"); )
          i++;
        if (a === b.length || i === j.length)
          for (
            a = b.length - 1, i = j.length - 1;
            1 <= a && 0 <= i && b[a] !== j[i];
          )
            i--;
        for (; 1 <= a && 0 <= i; a--, i--)
          if (b[a] !== j[i]) {
            if (a !== 1 || i !== 1)
              do
                if ((a--, i--, 0 > i || b[a] !== j[i])) {
                  var _ =
                    `
` + b[a].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      _.includes("<anonymous>") &&
                      (_ = _.replace("<anonymous>", e.displayName)),
                    _
                  );
                }
              while (1 <= a && 0 <= i);
            break;
          }
      }
    } finally {
      (to = !1), (Error.prepareStackTrace = n);
    }
    return (n = e ? e.displayName || e.name : "") ? va(n) : "";
  }
  function F0(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return va(e.type);
      case 16:
        return va("Lazy");
      case 13:
        return va("Suspense");
      case 19:
        return va("SuspenseList");
      case 0:
      case 15:
        return no(e.type, !1);
      case 11:
        return no(e.type.render, !1);
      case 1:
        return no(e.type, !0);
      case 31:
        return va("Activity");
      default:
        return "";
    }
  }
  function Ac(e) {
    try {
      var t = "";
      do (t += F0(e)), (e = e.return);
      while (e);
      return t;
    } catch (n) {
      return (
        `
Error generating stack: ` +
        n.message +
        `
` +
        n.stack
      );
    }
  }
  function bt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Tc(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function W0(e) {
    var t = Tc(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      a = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var i = n.get,
        r = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return i.call(this);
          },
          set: function (m) {
            (a = "" + m), r.call(this, m);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (m) {
            a = "" + m;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function wi(e) {
    e._valueTracker || (e._valueTracker = W0(e));
  }
  function Cc(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      a = "";
    return (
      e && (a = Tc(e) ? (e.checked ? "true" : "false") : e.value),
      (e = a),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Ei(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var I0 = /[\n"\\]/g;
  function yt(e) {
    return e.replace(I0, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function ao(e, t, n, a, i, r, m, g) {
    (e.name = ""),
      m != null &&
      typeof m != "function" &&
      typeof m != "symbol" &&
      typeof m != "boolean"
        ? (e.type = m)
        : e.removeAttribute("type"),
      t != null
        ? m === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + bt(t))
          : e.value !== "" + bt(t) && (e.value = "" + bt(t))
        : (m !== "submit" && m !== "reset") || e.removeAttribute("value"),
      t != null
        ? lo(e, m, bt(t))
        : n != null
          ? lo(e, m, bt(n))
          : a != null && e.removeAttribute("value"),
      i == null && r != null && (e.defaultChecked = !!r),
      i != null &&
        (e.checked = i && typeof i != "function" && typeof i != "symbol"),
      g != null &&
      typeof g != "function" &&
      typeof g != "symbol" &&
      typeof g != "boolean"
        ? (e.name = "" + bt(g))
        : e.removeAttribute("name");
  }
  function Mc(e, t, n, a, i, r, m, g) {
    if (
      (r != null &&
        typeof r != "function" &&
        typeof r != "symbol" &&
        typeof r != "boolean" &&
        (e.type = r),
      t != null || n != null)
    ) {
      if (!((r !== "submit" && r !== "reset") || t != null)) return;
      (n = n != null ? "" + bt(n) : ""),
        (t = t != null ? "" + bt(t) : n),
        g || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (a = a ?? i),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (e.checked = g ? e.checked : !!a),
      (e.defaultChecked = !!a),
      m != null &&
        typeof m != "function" &&
        typeof m != "symbol" &&
        typeof m != "boolean" &&
        (e.name = m);
  }
  function lo(e, t, n) {
    (t === "number" && Ei(e.ownerDocument) === e) ||
      e.defaultValue === "" + n ||
      (e.defaultValue = "" + n);
  }
  function ba(e, t, n, a) {
    if (((e = e.options), t)) {
      t = {};
      for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
      for (n = 0; n < e.length; n++)
        (i = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== i && (e[n].selected = i),
          i && a && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + bt(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          (e[i].selected = !0), a && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function zc(e, t, n) {
    if (
      t != null &&
      ((t = "" + bt(t)), t !== e.value && (e.value = t), n == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + bt(n) : "";
  }
  function Dc(e, t, n, a) {
    if (t == null) {
      if (a != null) {
        if (n != null) throw Error(o(92));
        if (De(a)) {
          if (1 < a.length) throw Error(o(93));
          a = a[0];
        }
        n = a;
      }
      n == null && (n = ""), (t = n);
    }
    (n = bt(t)),
      (e.defaultValue = n),
      (a = e.textContent),
      a === n && a !== "" && a !== null && (e.value = a);
  }
  function ya(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var P0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Rc(e, t, n) {
    var a = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? a
        ? e.setProperty(t, "")
        : t === "float"
          ? (e.cssFloat = "")
          : (e[t] = "")
      : a
        ? e.setProperty(t, n)
        : typeof n != "number" || n === 0 || P0.has(t)
          ? t === "float"
            ? (e.cssFloat = n)
            : (e[t] = ("" + n).trim())
          : (e[t] = n + "px");
  }
  function Oc(e, t, n) {
    if (t != null && typeof t != "object") throw Error(o(62));
    if (((e = e.style), n != null)) {
      for (var a in n)
        !n.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? e.setProperty(a, "")
            : a === "float"
              ? (e.cssFloat = "")
              : (e[a] = ""));
      for (var i in t)
        (a = t[i]), t.hasOwnProperty(i) && n[i] !== a && Rc(e, i, a);
    } else for (var r in t) t.hasOwnProperty(r) && Rc(e, r, t[r]);
  }
  function io(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var ep = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    tp =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ni(e) {
    return tp.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var ro = null;
  function oo(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var xa = null,
    Sa = null;
  function Uc(e) {
    var t = ha(e);
    if (t && (e = t.stateNode)) {
      var n = e[lt] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (ao(
              e,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name,
            ),
            (t = n.name),
            n.type === "radio" && t != null)
          ) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + yt("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var a = n[t];
              if (a !== e && a.form === e.form) {
                var i = a[lt] || null;
                if (!i) throw Error(o(90));
                ao(
                  a,
                  i.value,
                  i.defaultValue,
                  i.defaultValue,
                  i.checked,
                  i.defaultChecked,
                  i.type,
                  i.name,
                );
              }
            }
            for (t = 0; t < n.length; t++)
              (a = n[t]), a.form === e.form && Cc(a);
          }
          break e;
        case "textarea":
          zc(e, n.value, n.defaultValue);
          break e;
        case "select":
          (t = n.value), t != null && ba(e, !!n.multiple, t, !1);
      }
    }
  }
  var uo = !1;
  function _c(e, t, n) {
    if (uo) return e(t, n);
    uo = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (
        ((uo = !1),
        (xa !== null || Sa !== null) &&
          (sr(), xa && ((t = xa), (e = Sa), (Sa = xa = null), Uc(t), e)))
      )
        for (t = 0; t < e.length; t++) Uc(e[t]);
    }
  }
  function fl(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var a = n[lt] || null;
    if (a === null) return null;
    n = a[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) ||
          ((e = e.type),
          (a = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !a);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(o(231, t, typeof n));
    return n;
  }
  var Yt = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    so = !1;
  if (Yt)
    try {
      var dl = {};
      Object.defineProperty(dl, "passive", {
        get: function () {
          so = !0;
        },
      }),
        window.addEventListener("test", dl, dl),
        window.removeEventListener("test", dl, dl);
    } catch {
      so = !1;
    }
  var cn = null,
    co = null,
    ji = null;
  function Bc() {
    if (ji) return ji;
    var e,
      t = co,
      n = t.length,
      a,
      i = "value" in cn ? cn.value : cn.textContent,
      r = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var m = n - e;
    for (a = 1; a <= m && t[n - a] === i[r - a]; a++);
    return (ji = i.slice(e, 1 < a ? 1 - a : void 0));
  }
  function Ai(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Ti() {
    return !0;
  }
  function kc() {
    return !1;
  }
  function it(e) {
    function t(n, a, i, r, m) {
      (this._reactName = n),
        (this._targetInst = i),
        (this.type = a),
        (this.nativeEvent = r),
        (this.target = m),
        (this.currentTarget = null);
      for (var g in e)
        e.hasOwnProperty(g) && ((n = e[g]), (this[g] = n ? n(r) : r[g]));
      return (
        (this.isDefaultPrevented = (
          r.defaultPrevented != null
            ? r.defaultPrevented
            : r.returnValue === !1
        )
          ? Ti
          : kc),
        (this.isPropagationStopped = kc),
        this
      );
    }
    return (
      S(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Ti));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Ti));
        },
        persist: function () {},
        isPersistent: Ti,
      }),
      t
    );
  }
  var Vn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ci = it(Vn),
    ml = S({}, Vn, { view: 0, detail: 0 }),
    np = it(ml),
    fo,
    mo,
    hl,
    Mi = S({}, ml, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: go,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== hl &&
              (hl && e.type === "mousemove"
                ? ((fo = e.screenX - hl.screenX), (mo = e.screenY - hl.screenY))
                : (mo = fo = 0),
              (hl = e)),
            fo);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : mo;
      },
    }),
    Lc = it(Mi),
    ap = S({}, Mi, { dataTransfer: 0 }),
    lp = it(ap),
    ip = S({}, ml, { relatedTarget: 0 }),
    ho = it(ip),
    rp = S({}, Vn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    op = it(rp),
    up = S({}, Vn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    sp = it(up),
    cp = S({}, Vn, { data: 0 }),
    Hc = it(cp),
    fp = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    dp = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    mp = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function hp(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = mp[e])
        ? !!t[e]
        : !1;
  }
  function go() {
    return hp;
  }
  var gp = S({}, ml, {
      key: function (e) {
        if (e.key) {
          var t = fp[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Ai(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? dp[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: go,
      charCode: function (e) {
        return e.type === "keypress" ? Ai(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Ai(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    pp = it(gp),
    vp = S({}, Mi, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    qc = it(vp),
    bp = S({}, ml, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: go,
    }),
    yp = it(bp),
    xp = S({}, Vn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Sp = it(xp),
    wp = S({}, Mi, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Ep = it(wp),
    Np = S({}, Vn, { newState: 0, oldState: 0 }),
    jp = it(Np),
    Ap = [9, 13, 27, 32],
    po = Yt && "CompositionEvent" in window,
    gl = null;
  Yt && "documentMode" in document && (gl = document.documentMode);
  var Tp = Yt && "TextEvent" in window && !gl,
    Vc = Yt && (!po || (gl && 8 < gl && 11 >= gl)),
    Gc = " ",
    Yc = !1;
  function Xc(e, t) {
    switch (e) {
      case "keyup":
        return Ap.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Qc(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var wa = !1;
  function Cp(e, t) {
    switch (e) {
      case "compositionend":
        return Qc(t);
      case "keypress":
        return t.which !== 32 ? null : ((Yc = !0), Gc);
      case "textInput":
        return (e = t.data), e === Gc && Yc ? null : e;
      default:
        return null;
    }
  }
  function Mp(e, t) {
    if (wa)
      return e === "compositionend" || (!po && Xc(e, t))
        ? ((e = Bc()), (ji = co = cn = null), (wa = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Vc && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var zp = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Zc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!zp[e.type] : t === "textarea";
  }
  function Kc(e, t, n, a) {
    xa ? (Sa ? Sa.push(a) : (Sa = [a])) : (xa = a),
      (t = gr(t, "onChange")),
      0 < t.length &&
        ((n = new Ci("onChange", "change", null, n, a)),
        e.push({ event: n, listeners: t }));
  }
  var pl = null,
    vl = null;
  function Dp(e) {
    Cm(e, 0);
  }
  function zi(e) {
    var t = cl(e);
    if (Cc(t)) return e;
  }
  function Jc(e, t) {
    if (e === "change") return t;
  }
  var $c = !1;
  if (Yt) {
    var vo;
    if (Yt) {
      var bo = "oninput" in document;
      if (!bo) {
        var Fc = document.createElement("div");
        Fc.setAttribute("oninput", "return;"),
          (bo = typeof Fc.oninput == "function");
      }
      vo = bo;
    } else vo = !1;
    $c = vo && (!document.documentMode || 9 < document.documentMode);
  }
  function Wc() {
    pl && (pl.detachEvent("onpropertychange", Ic), (vl = pl = null));
  }
  function Ic(e) {
    if (e.propertyName === "value" && zi(vl)) {
      var t = [];
      Kc(t, vl, e, oo(e)), _c(Dp, t);
    }
  }
  function Rp(e, t, n) {
    e === "focusin"
      ? (Wc(), (pl = t), (vl = n), pl.attachEvent("onpropertychange", Ic))
      : e === "focusout" && Wc();
  }
  function Op(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return zi(vl);
  }
  function Up(e, t) {
    if (e === "click") return zi(t);
  }
  function _p(e, t) {
    if (e === "input" || e === "change") return zi(t);
  }
  function Bp(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var ft = typeof Object.is == "function" ? Object.is : Bp;
  function bl(e, t) {
    if (ft(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      a = Object.keys(t);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var i = n[a];
      if (!rn.call(t, i) || !ft(e[i], t[i])) return !1;
    }
    return !0;
  }
  function Pc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function ef(e, t) {
    var n = Pc(e);
    e = 0;
    for (var a; n; ) {
      if (n.nodeType === 3) {
        if (((a = e + n.textContent.length), e <= t && a >= t))
          return { node: n, offset: t - e };
        e = a;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Pc(n);
    }
  }
  function tf(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? tf(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function nf(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = Ei(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Ei(e.document);
    }
    return t;
  }
  function yo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var kp = Yt && "documentMode" in document && 11 >= document.documentMode,
    Ea = null,
    xo = null,
    yl = null,
    So = !1;
  function af(e, t, n) {
    var a =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    So ||
      Ea == null ||
      Ea !== Ei(a) ||
      ((a = Ea),
      "selectionStart" in a && yo(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (yl && bl(yl, a)) ||
        ((yl = a),
        (a = gr(xo, "onSelect")),
        0 < a.length &&
          ((t = new Ci("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: a }),
          (t.target = Ea))));
  }
  function Gn(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var Na = {
      animationend: Gn("Animation", "AnimationEnd"),
      animationiteration: Gn("Animation", "AnimationIteration"),
      animationstart: Gn("Animation", "AnimationStart"),
      transitionrun: Gn("Transition", "TransitionRun"),
      transitionstart: Gn("Transition", "TransitionStart"),
      transitioncancel: Gn("Transition", "TransitionCancel"),
      transitionend: Gn("Transition", "TransitionEnd"),
    },
    wo = {},
    lf = {};
  Yt &&
    ((lf = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Na.animationend.animation,
      delete Na.animationiteration.animation,
      delete Na.animationstart.animation),
    "TransitionEvent" in window || delete Na.transitionend.transition);
  function Yn(e) {
    if (wo[e]) return wo[e];
    if (!Na[e]) return e;
    var t = Na[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in lf) return (wo[e] = t[n]);
    return e;
  }
  var rf = Yn("animationend"),
    of = Yn("animationiteration"),
    uf = Yn("animationstart"),
    Lp = Yn("transitionrun"),
    Hp = Yn("transitionstart"),
    qp = Yn("transitioncancel"),
    sf = Yn("transitionend"),
    cf = new Map(),
    Eo =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Eo.push("scrollEnd");
  function Ct(e, t) {
    cf.set(e, t), qn(t, [e]);
  }
  var ff = new WeakMap();
  function xt(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = ff.get(e);
      return n !== void 0
        ? n
        : ((t = { value: e, source: t, stack: Ac(t) }), ff.set(e, t), t);
    }
    return { value: e, source: t, stack: Ac(t) };
  }
  var St = [],
    ja = 0,
    No = 0;
  function Di() {
    for (var e = ja, t = (No = ja = 0); t < e; ) {
      var n = St[t];
      St[t++] = null;
      var a = St[t];
      St[t++] = null;
      var i = St[t];
      St[t++] = null;
      var r = St[t];
      if (((St[t++] = null), a !== null && i !== null)) {
        var m = a.pending;
        m === null ? (i.next = i) : ((i.next = m.next), (m.next = i)),
          (a.pending = i);
      }
      r !== 0 && df(n, i, r);
    }
  }
  function Ri(e, t, n, a) {
    (St[ja++] = e),
      (St[ja++] = t),
      (St[ja++] = n),
      (St[ja++] = a),
      (No |= a),
      (e.lanes |= a),
      (e = e.alternate),
      e !== null && (e.lanes |= a);
  }
  function jo(e, t, n, a) {
    return Ri(e, t, n, a), Oi(e);
  }
  function Aa(e, t) {
    return Ri(e, null, null, t), Oi(e);
  }
  function df(e, t, n) {
    e.lanes |= n;
    var a = e.alternate;
    a !== null && (a.lanes |= n);
    for (var i = !1, r = e.return; r !== null; )
      (r.childLanes |= n),
        (a = r.alternate),
        a !== null && (a.childLanes |= n),
        r.tag === 22 &&
          ((e = r.stateNode), e === null || e._visibility & 1 || (i = !0)),
        (e = r),
        (r = r.return);
    return e.tag === 3
      ? ((r = e.stateNode),
        i &&
          t !== null &&
          ((i = 31 - ct(n)),
          (e = r.hiddenUpdates),
          (a = e[i]),
          a === null ? (e[i] = [t]) : a.push(t),
          (t.lane = n | 536870912)),
        r)
      : null;
  }
  function Oi(e) {
    if (50 < Xl) throw ((Xl = 0), (Du = null), Error(o(185)));
    for (var t = e.return; t !== null; ) (e = t), (t = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var Ta = {};
  function Vp(e, t, n, a) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function dt(e, t, n, a) {
    return new Vp(e, t, n, a);
  }
  function Ao(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Xt(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = dt(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 65011712),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      (n.refCleanup = e.refCleanup),
      n
    );
  }
  function mf(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return (
      n === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = n.childLanes),
          (e.lanes = n.lanes),
          (e.child = n.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = n.memoizedProps),
          (e.memoizedState = n.memoizedState),
          (e.updateQueue = n.updateQueue),
          (e.type = n.type),
          (t = n.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function Ui(e, t, n, a, i, r) {
    var m = 0;
    if (((a = e), typeof e == "function")) Ao(e) && (m = 1);
    else if (typeof e == "string")
      m = Yv(e, n, Re.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      e: switch (e) {
        case Z:
          return (e = dt(31, n, t, i)), (e.elementType = Z), (e.lanes = r), e;
        case H:
          return Xn(n.children, i, r, t);
        case z:
          (m = 8), (i |= 24);
          break;
        case O:
          return (
            (e = dt(12, n, t, i | 2)), (e.elementType = O), (e.lanes = r), e
          );
        case W:
          return (e = dt(13, n, t, i)), (e.elementType = W), (e.lanes = r), e;
        case X:
          return (e = dt(19, n, t, i)), (e.elementType = X), (e.lanes = r), e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case q:
              case Y:
                m = 10;
                break e;
              case Q:
                m = 9;
                break e;
              case V:
                m = 11;
                break e;
              case G:
                m = 14;
                break e;
              case U:
                (m = 16), (a = null);
                break e;
            }
          (m = 29),
            (n = Error(o(130, e === null ? "null" : typeof e, ""))),
            (a = null);
      }
    return (
      (t = dt(m, n, t, i)), (t.elementType = e), (t.type = a), (t.lanes = r), t
    );
  }
  function Xn(e, t, n, a) {
    return (e = dt(7, e, a, t)), (e.lanes = n), e;
  }
  function To(e, t, n) {
    return (e = dt(6, e, null, t)), (e.lanes = n), e;
  }
  function Co(e, t, n) {
    return (
      (t = dt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var Ca = [],
    Ma = 0,
    _i = null,
    Bi = 0,
    wt = [],
    Et = 0,
    Qn = null,
    Qt = 1,
    Zt = "";
  function Zn(e, t) {
    (Ca[Ma++] = Bi), (Ca[Ma++] = _i), (_i = e), (Bi = t);
  }
  function hf(e, t, n) {
    (wt[Et++] = Qt), (wt[Et++] = Zt), (wt[Et++] = Qn), (Qn = e);
    var a = Qt;
    e = Zt;
    var i = 32 - ct(a) - 1;
    (a &= ~(1 << i)), (n += 1);
    var r = 32 - ct(t) + i;
    if (30 < r) {
      var m = i - (i % 5);
      (r = (a & ((1 << m) - 1)).toString(32)),
        (a >>= m),
        (i -= m),
        (Qt = (1 << (32 - ct(t) + i)) | (n << i) | a),
        (Zt = r + e);
    } else (Qt = (1 << r) | (n << i) | a), (Zt = e);
  }
  function Mo(e) {
    e.return !== null && (Zn(e, 1), hf(e, 1, 0));
  }
  function zo(e) {
    for (; e === _i; )
      (_i = Ca[--Ma]), (Ca[Ma] = null), (Bi = Ca[--Ma]), (Ca[Ma] = null);
    for (; e === Qn; )
      (Qn = wt[--Et]),
        (wt[Et] = null),
        (Zt = wt[--Et]),
        (wt[Et] = null),
        (Qt = wt[--Et]),
        (wt[Et] = null);
  }
  var at = null,
    ke = null,
    xe = !1,
    Kn = null,
    Ut = !1,
    Do = Error(o(519));
  function Jn(e) {
    var t = Error(o(418, ""));
    throw (wl(xt(t, e)), Do);
  }
  function gf(e) {
    var t = e.stateNode,
      n = e.type,
      a = e.memoizedProps;
    switch (((t[tt] = e), (t[lt] = a), n)) {
      case "dialog":
        he("cancel", t), he("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        he("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Zl.length; n++) he(Zl[n], t);
        break;
      case "source":
        he("error", t);
        break;
      case "img":
      case "image":
      case "link":
        he("error", t), he("load", t);
        break;
      case "details":
        he("toggle", t);
        break;
      case "input":
        he("invalid", t),
          Mc(
            t,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0,
          ),
          wi(t);
        break;
      case "select":
        he("invalid", t);
        break;
      case "textarea":
        he("invalid", t), Dc(t, a.value, a.defaultValue, a.children), wi(t);
    }
    (n = a.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      t.textContent === "" + n ||
      a.suppressHydrationWarning === !0 ||
      Rm(t.textContent, n)
        ? (a.popover != null && (he("beforetoggle", t), he("toggle", t)),
          a.onScroll != null && he("scroll", t),
          a.onScrollEnd != null && he("scrollend", t),
          a.onClick != null && (t.onclick = pr),
          (t = !0))
        : (t = !1),
      t || Jn(e);
  }
  function pf(e) {
    for (at = e.return; at; )
      switch (at.tag) {
        case 5:
        case 13:
          Ut = !1;
          return;
        case 27:
        case 3:
          Ut = !0;
          return;
        default:
          at = at.return;
      }
  }
  function xl(e) {
    if (e !== at) return !1;
    if (!xe) return pf(e), (xe = !0), !1;
    var t = e.tag,
      n;
    if (
      ((n = t !== 3 && t !== 27) &&
        ((n = t === 5) &&
          ((n = e.type),
          (n =
            !(n !== "form" && n !== "button") || Ku(e.type, e.memoizedProps))),
        (n = !n)),
      n && ke && Jn(e),
      pf(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (((n = e.data), n === "/$")) {
              if (t === 0) {
                ke = zt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          e = e.nextSibling;
        }
        ke = null;
      }
    } else
      t === 27
        ? ((t = ke), An(e.type) ? ((e = Wu), (Wu = null), (ke = e)) : (ke = t))
        : (ke = at ? zt(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Sl() {
    (ke = at = null), (xe = !1);
  }
  function vf() {
    var e = Kn;
    return (
      e !== null &&
        (ut === null ? (ut = e) : ut.push.apply(ut, e), (Kn = null)),
      e
    );
  }
  function wl(e) {
    Kn === null ? (Kn = [e]) : Kn.push(e);
  }
  var Ro = Ue(null),
    $n = null,
    Kt = null;
  function fn(e, t, n) {
    ge(Ro, t._currentValue), (t._currentValue = n);
  }
  function Jt(e) {
    (e._currentValue = Ro.current), we(Ro);
  }
  function Oo(e, t, n) {
    for (; e !== null; ) {
      var a = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Uo(e, t, n, a) {
    var i = e.child;
    for (i !== null && (i.return = e); i !== null; ) {
      var r = i.dependencies;
      if (r !== null) {
        var m = i.child;
        r = r.firstContext;
        e: for (; r !== null; ) {
          var g = r;
          r = i;
          for (var b = 0; b < t.length; b++)
            if (g.context === t[b]) {
              (r.lanes |= n),
                (g = r.alternate),
                g !== null && (g.lanes |= n),
                Oo(r.return, n, e),
                a || (m = null);
              break e;
            }
          r = g.next;
        }
      } else if (i.tag === 18) {
        if (((m = i.return), m === null)) throw Error(o(341));
        (m.lanes |= n),
          (r = m.alternate),
          r !== null && (r.lanes |= n),
          Oo(m, n, e),
          (m = null);
      } else m = i.child;
      if (m !== null) m.return = i;
      else
        for (m = i; m !== null; ) {
          if (m === e) {
            m = null;
            break;
          }
          if (((i = m.sibling), i !== null)) {
            (i.return = m.return), (m = i);
            break;
          }
          m = m.return;
        }
      i = m;
    }
  }
  function El(e, t, n, a) {
    e = null;
    for (var i = t, r = !1; i !== null; ) {
      if (!r) {
        if ((i.flags & 524288) !== 0) r = !0;
        else if ((i.flags & 262144) !== 0) break;
      }
      if (i.tag === 10) {
        var m = i.alternate;
        if (m === null) throw Error(o(387));
        if (((m = m.memoizedProps), m !== null)) {
          var g = i.type;
          ft(i.pendingProps.value, m.value) ||
            (e !== null ? e.push(g) : (e = [g]));
        }
      } else if (i === Ye.current) {
        if (((m = i.alternate), m === null)) throw Error(o(387));
        m.memoizedState.memoizedState !== i.memoizedState.memoizedState &&
          (e !== null ? e.push(Il) : (e = [Il]));
      }
      i = i.return;
    }
    e !== null && Uo(t, e, n, a), (t.flags |= 262144);
  }
  function ki(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!ft(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Fn(e) {
    ($n = e),
      (Kt = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null);
  }
  function nt(e) {
    return bf($n, e);
  }
  function Li(e, t) {
    return $n === null && Fn(e), bf(e, t);
  }
  function bf(e, t) {
    var n = t._currentValue;
    if (((t = { context: t, memoizedValue: n, next: null }), Kt === null)) {
      if (e === null) throw Error(o(308));
      (Kt = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288);
    } else Kt = Kt.next = t;
    return n;
  }
  var Gp =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (n, a) {
                  e.push(a);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                e.forEach(function (n) {
                  return n();
                });
            };
          },
    Yp = l.unstable_scheduleCallback,
    Xp = l.unstable_NormalPriority,
    Xe = {
      $$typeof: Y,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function _o() {
    return { controller: new Gp(), data: new Map(), refCount: 0 };
  }
  function Nl(e) {
    e.refCount--,
      e.refCount === 0 &&
        Yp(Xp, function () {
          e.controller.abort();
        });
  }
  var jl = null,
    Bo = 0,
    za = 0,
    Da = null;
  function Qp(e, t) {
    if (jl === null) {
      var n = (jl = []);
      (Bo = 0),
        (za = Lu()),
        (Da = {
          status: "pending",
          value: void 0,
          then: function (a) {
            n.push(a);
          },
        });
    }
    return Bo++, t.then(yf, yf), t;
  }
  function yf() {
    if (--Bo === 0 && jl !== null) {
      Da !== null && (Da.status = "fulfilled");
      var e = jl;
      (jl = null), (za = 0), (Da = null);
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Zp(e, t) {
    var n = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (i) {
          n.push(i);
        },
      };
    return (
      e.then(
        function () {
          (a.status = "fulfilled"), (a.value = t);
          for (var i = 0; i < n.length; i++) (0, n[i])(t);
        },
        function (i) {
          for (a.status = "rejected", a.reason = i, i = 0; i < n.length; i++)
            (0, n[i])(void 0);
        },
      ),
      a
    );
  }
  var xf = R.S;
  R.S = function (e, t) {
    typeof t == "object" &&
      t !== null &&
      typeof t.then == "function" &&
      Qp(e, t),
      xf !== null && xf(e, t);
  };
  var Wn = Ue(null);
  function ko() {
    var e = Wn.current;
    return e !== null ? e : ze.pooledCache;
  }
  function Hi(e, t) {
    t === null ? ge(Wn, Wn.current) : ge(Wn, t.pool);
  }
  function Sf() {
    var e = ko();
    return e === null ? null : { parent: Xe._currentValue, pool: e };
  }
  var Al = Error(o(460)),
    wf = Error(o(474)),
    qi = Error(o(542)),
    Lo = { then: function () {} };
  function Ef(e) {
    return (e = e.status), e === "fulfilled" || e === "rejected";
  }
  function Vi() {}
  function Nf(e, t, n) {
    switch (
      ((n = e[n]),
      n === void 0 ? e.push(t) : n !== t && (t.then(Vi, Vi), (t = n)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), Af(e), e);
      default:
        if (typeof t.status == "string") t.then(Vi, Vi);
        else {
          if (((e = ze), e !== null && 100 < e.shellSuspendCounter))
            throw Error(o(482));
          (e = t),
            (e.status = "pending"),
            e.then(
              function (a) {
                if (t.status === "pending") {
                  var i = t;
                  (i.status = "fulfilled"), (i.value = a);
                }
              },
              function (a) {
                if (t.status === "pending") {
                  var i = t;
                  (i.status = "rejected"), (i.reason = a);
                }
              },
            );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), Af(e), e);
        }
        throw ((Tl = t), Al);
    }
  }
  var Tl = null;
  function jf() {
    if (Tl === null) throw Error(o(459));
    var e = Tl;
    return (Tl = null), e;
  }
  function Af(e) {
    if (e === Al || e === qi) throw Error(o(483));
  }
  var dn = !1;
  function Ho(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function qo(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        });
  }
  function mn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function hn(e, t, n) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (Ee & 2) !== 0)) {
      var i = a.pending;
      return (
        i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
        (a.pending = t),
        (t = Oi(e)),
        df(e, null, n),
        t
      );
    }
    return Ri(e, a, t, n), Oi(e);
  }
  function Cl(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194048) !== 0))
    ) {
      var a = t.lanes;
      (a &= e.pendingLanes), (n |= a), (t.lanes = n), bc(e, n);
    }
  }
  function Vo(e, t) {
    var n = e.updateQueue,
      a = e.alternate;
    if (a !== null && ((a = a.updateQueue), n === a)) {
      var i = null,
        r = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var m = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          r === null ? (i = r = m) : (r = r.next = m), (n = n.next);
        } while (n !== null);
        r === null ? (i = r = t) : (r = r.next = t);
      } else i = r = t;
      (n = {
        baseState: a.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: r,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  var Go = !1;
  function Ml() {
    if (Go) {
      var e = Da;
      if (e !== null) throw e;
    }
  }
  function zl(e, t, n, a) {
    Go = !1;
    var i = e.updateQueue;
    dn = !1;
    var r = i.firstBaseUpdate,
      m = i.lastBaseUpdate,
      g = i.shared.pending;
    if (g !== null) {
      i.shared.pending = null;
      var b = g,
        j = b.next;
      (b.next = null), m === null ? (r = j) : (m.next = j), (m = b);
      var _ = e.alternate;
      _ !== null &&
        ((_ = _.updateQueue),
        (g = _.lastBaseUpdate),
        g !== m &&
          (g === null ? (_.firstBaseUpdate = j) : (g.next = j),
          (_.lastBaseUpdate = b)));
    }
    if (r !== null) {
      var L = i.baseState;
      (m = 0), (_ = j = b = null), (g = r);
      do {
        var C = g.lane & -536870913,
          D = C !== g.lane;
        if (D ? (pe & C) === C : (a & C) === C) {
          C !== 0 && C === za && (Go = !0),
            _ !== null &&
              (_ = _.next =
                {
                  lane: 0,
                  tag: g.tag,
                  payload: g.payload,
                  callback: null,
                  next: null,
                });
          e: {
            var se = e,
              re = g;
            C = t;
            var Te = n;
            switch (re.tag) {
              case 1:
                if (((se = re.payload), typeof se == "function")) {
                  L = se.call(Te, L, C);
                  break e;
                }
                L = se;
                break e;
              case 3:
                se.flags = (se.flags & -65537) | 128;
              case 0:
                if (
                  ((se = re.payload),
                  (C = typeof se == "function" ? se.call(Te, L, C) : se),
                  C == null)
                )
                  break e;
                L = S({}, L, C);
                break e;
              case 2:
                dn = !0;
            }
          }
          (C = g.callback),
            C !== null &&
              ((e.flags |= 64),
              D && (e.flags |= 8192),
              (D = i.callbacks),
              D === null ? (i.callbacks = [C]) : D.push(C));
        } else
          (D = {
            lane: C,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null,
          }),
            _ === null ? ((j = _ = D), (b = L)) : (_ = _.next = D),
            (m |= C);
        if (((g = g.next), g === null)) {
          if (((g = i.shared.pending), g === null)) break;
          (D = g),
            (g = D.next),
            (D.next = null),
            (i.lastBaseUpdate = D),
            (i.shared.pending = null);
        }
      } while (!0);
      _ === null && (b = L),
        (i.baseState = b),
        (i.firstBaseUpdate = j),
        (i.lastBaseUpdate = _),
        r === null && (i.shared.lanes = 0),
        (wn |= m),
        (e.lanes = m),
        (e.memoizedState = L);
    }
  }
  function Tf(e, t) {
    if (typeof e != "function") throw Error(o(191, e));
    e.call(t);
  }
  function Cf(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++) Tf(n[e], t);
  }
  var Ra = Ue(null),
    Gi = Ue(0);
  function Mf(e, t) {
    (e = tn), ge(Gi, e), ge(Ra, t), (tn = e | t.baseLanes);
  }
  function Yo() {
    ge(Gi, tn), ge(Ra, Ra.current);
  }
  function Xo() {
    (tn = Gi.current), we(Ra), we(Gi);
  }
  var gn = 0,
    ce = null,
    je = null,
    Ve = null,
    Yi = !1,
    Oa = !1,
    In = !1,
    Xi = 0,
    Dl = 0,
    Ua = null,
    Kp = 0;
  function He() {
    throw Error(o(321));
  }
  function Qo(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!ft(e[n], t[n])) return !1;
    return !0;
  }
  function Zo(e, t, n, a, i, r) {
    return (
      (gn = r),
      (ce = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (R.H = e === null || e.memoizedState === null ? dd : md),
      (In = !1),
      (r = n(a, i)),
      (In = !1),
      Oa && (r = Df(t, n, a, i)),
      zf(e),
      r
    );
  }
  function zf(e) {
    R.H = Fi;
    var t = je !== null && je.next !== null;
    if (((gn = 0), (Ve = je = ce = null), (Yi = !1), (Dl = 0), (Ua = null), t))
      throw Error(o(300));
    e === null ||
      Je ||
      ((e = e.dependencies), e !== null && ki(e) && (Je = !0));
  }
  function Df(e, t, n, a) {
    ce = e;
    var i = 0;
    do {
      if ((Oa && (Ua = null), (Dl = 0), (Oa = !1), 25 <= i))
        throw Error(o(301));
      if (((i += 1), (Ve = je = null), e.updateQueue != null)) {
        var r = e.updateQueue;
        (r.lastEffect = null),
          (r.events = null),
          (r.stores = null),
          r.memoCache != null && (r.memoCache.index = 0);
      }
      (R.H = ev), (r = t(n, a));
    } while (Oa);
    return r;
  }
  function Jp() {
    var e = R.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? Rl(t) : t),
      (e = e.useState()[0]),
      (je !== null ? je.memoizedState : null) !== e && (ce.flags |= 1024),
      t
    );
  }
  function Ko() {
    var e = Xi !== 0;
    return (Xi = 0), e;
  }
  function Jo(e, t, n) {
    (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n);
  }
  function $o(e) {
    if (Yi) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), (e = e.next);
      }
      Yi = !1;
    }
    (gn = 0), (Ve = je = ce = null), (Oa = !1), (Dl = Xi = 0), (Ua = null);
  }
  function rt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Ve === null ? (ce.memoizedState = Ve = e) : (Ve = Ve.next = e), Ve;
  }
  function Ge() {
    if (je === null) {
      var e = ce.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = je.next;
    var t = Ve === null ? ce.memoizedState : Ve.next;
    if (t !== null) (Ve = t), (je = e);
    else {
      if (e === null)
        throw ce.alternate === null ? Error(o(467)) : Error(o(310));
      (je = e),
        (e = {
          memoizedState: je.memoizedState,
          baseState: je.baseState,
          baseQueue: je.baseQueue,
          queue: je.queue,
          next: null,
        }),
        Ve === null ? (ce.memoizedState = Ve = e) : (Ve = Ve.next = e);
    }
    return Ve;
  }
  function Fo() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Rl(e) {
    var t = Dl;
    return (
      (Dl += 1),
      Ua === null && (Ua = []),
      (e = Nf(Ua, e, t)),
      (t = ce),
      (Ve === null ? t.memoizedState : Ve.next) === null &&
        ((t = t.alternate),
        (R.H = t === null || t.memoizedState === null ? dd : md)),
      e
    );
  }
  function Qi(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Rl(e);
      if (e.$$typeof === Y) return nt(e);
    }
    throw Error(o(438, String(e)));
  }
  function Wo(e) {
    var t = null,
      n = ce.updateQueue;
    if ((n !== null && (t = n.memoCache), t == null)) {
      var a = ce.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (t = {
              data: a.data.map(function (i) {
                return i.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      n === null && ((n = Fo()), (ce.updateQueue = n)),
      (n.memoCache = t),
      (n = t.data[t.index]),
      n === void 0)
    )
      for (n = t.data[t.index] = Array(e), a = 0; a < e; a++) n[a] = ne;
    return t.index++, n;
  }
  function $t(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Zi(e) {
    var t = Ge();
    return Io(t, je, e);
  }
  function Io(e, t, n) {
    var a = e.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = n;
    var i = e.baseQueue,
      r = a.pending;
    if (r !== null) {
      if (i !== null) {
        var m = i.next;
        (i.next = r.next), (r.next = m);
      }
      (t.baseQueue = i = r), (a.pending = null);
    }
    if (((r = e.baseState), i === null)) e.memoizedState = r;
    else {
      t = i.next;
      var g = (m = null),
        b = null,
        j = t,
        _ = !1;
      do {
        var L = j.lane & -536870913;
        if (L !== j.lane ? (pe & L) === L : (gn & L) === L) {
          var C = j.revertLane;
          if (C === 0)
            b !== null &&
              (b = b.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: j.action,
                  hasEagerState: j.hasEagerState,
                  eagerState: j.eagerState,
                  next: null,
                }),
              L === za && (_ = !0);
          else if ((gn & C) === C) {
            (j = j.next), C === za && (_ = !0);
            continue;
          } else
            (L = {
              lane: 0,
              revertLane: j.revertLane,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null,
            }),
              b === null ? ((g = b = L), (m = r)) : (b = b.next = L),
              (ce.lanes |= C),
              (wn |= C);
          (L = j.action),
            In && n(r, L),
            (r = j.hasEagerState ? j.eagerState : n(r, L));
        } else
          (C = {
            lane: L,
            revertLane: j.revertLane,
            action: j.action,
            hasEagerState: j.hasEagerState,
            eagerState: j.eagerState,
            next: null,
          }),
            b === null ? ((g = b = C), (m = r)) : (b = b.next = C),
            (ce.lanes |= L),
            (wn |= L);
        j = j.next;
      } while (j !== null && j !== t);
      if (
        (b === null ? (m = r) : (b.next = g),
        !ft(r, e.memoizedState) && ((Je = !0), _ && ((n = Da), n !== null)))
      )
        throw n;
      (e.memoizedState = r),
        (e.baseState = m),
        (e.baseQueue = b),
        (a.lastRenderedState = r);
    }
    return i === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function Po(e) {
    var t = Ge(),
      n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var a = n.dispatch,
      i = n.pending,
      r = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var m = (i = i.next);
      do (r = e(r, m.action)), (m = m.next);
      while (m !== i);
      ft(r, t.memoizedState) || (Je = !0),
        (t.memoizedState = r),
        t.baseQueue === null && (t.baseState = r),
        (n.lastRenderedState = r);
    }
    return [r, a];
  }
  function Rf(e, t, n) {
    var a = ce,
      i = Ge(),
      r = xe;
    if (r) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else n = t();
    var m = !ft((je || i).memoizedState, n);
    m && ((i.memoizedState = n), (Je = !0)), (i = i.queue);
    var g = _f.bind(null, a, i, e);
    if (
      (Ol(2048, 8, g, [e]),
      i.getSnapshot !== t || m || (Ve !== null && Ve.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        _a(9, Ki(), Uf.bind(null, a, i, n, t), null),
        ze === null)
      )
        throw Error(o(349));
      r || (gn & 124) !== 0 || Of(a, t, n);
    }
    return n;
  }
  function Of(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = ce.updateQueue),
      t === null
        ? ((t = Fo()), (ce.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function Uf(e, t, n, a) {
    (t.value = n), (t.getSnapshot = a), Bf(t) && kf(e);
  }
  function _f(e, t, n) {
    return n(function () {
      Bf(t) && kf(e);
    });
  }
  function Bf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !ft(e, n);
    } catch {
      return !0;
    }
  }
  function kf(e) {
    var t = Aa(e, 2);
    t !== null && vt(t, e, 2);
  }
  function eu(e) {
    var t = rt();
    if (typeof e == "function") {
      var n = e;
      if (((e = n()), In)) {
        un(!0);
        try {
          n();
        } finally {
          un(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $t,
        lastRenderedState: e,
      }),
      t
    );
  }
  function Lf(e, t, n, a) {
    return (e.baseState = n), Io(e, je, typeof a == "function" ? a : $t);
  }
  function $p(e, t, n, a, i) {
    if ($i(e)) throw Error(o(485));
    if (((e = t.action), e !== null)) {
      var r = {
        payload: i,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (m) {
          r.listeners.push(m);
        },
      };
      R.T !== null ? n(!0) : (r.isTransition = !1),
        a(r),
        (n = t.pending),
        n === null
          ? ((r.next = t.pending = r), Hf(t, r))
          : ((r.next = n.next), (t.pending = n.next = r));
    }
  }
  function Hf(e, t) {
    var n = t.action,
      a = t.payload,
      i = e.state;
    if (t.isTransition) {
      var r = R.T,
        m = {};
      R.T = m;
      try {
        var g = n(i, a),
          b = R.S;
        b !== null && b(m, g), qf(e, t, g);
      } catch (j) {
        tu(e, t, j);
      } finally {
        R.T = r;
      }
    } else
      try {
        (r = n(i, a)), qf(e, t, r);
      } catch (j) {
        tu(e, t, j);
      }
  }
  function qf(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (a) {
            Vf(e, t, a);
          },
          function (a) {
            return tu(e, t, a);
          },
        )
      : Vf(e, t, n);
  }
  function Vf(e, t, n) {
    (t.status = "fulfilled"),
      (t.value = n),
      Gf(t),
      (e.state = n),
      (t = e.pending),
      t !== null &&
        ((n = t.next),
        n === t ? (e.pending = null) : ((n = n.next), (t.next = n), Hf(e, n)));
  }
  function tu(e, t, n) {
    var a = e.pending;
    if (((e.pending = null), a !== null)) {
      a = a.next;
      do (t.status = "rejected"), (t.reason = n), Gf(t), (t = t.next);
      while (t !== a);
    }
    e.action = null;
  }
  function Gf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Yf(e, t) {
    return t;
  }
  function Xf(e, t) {
    if (xe) {
      var n = ze.formState;
      if (n !== null) {
        e: {
          var a = ce;
          if (xe) {
            if (ke) {
              t: {
                for (var i = ke, r = Ut; i.nodeType !== 8; ) {
                  if (!r) {
                    i = null;
                    break t;
                  }
                  if (((i = zt(i.nextSibling)), i === null)) {
                    i = null;
                    break t;
                  }
                }
                (r = i.data), (i = r === "F!" || r === "F" ? i : null);
              }
              if (i) {
                (ke = zt(i.nextSibling)), (a = i.data === "F!");
                break e;
              }
            }
            Jn(a);
          }
          a = !1;
        }
        a && (t = n[0]);
      }
    }
    return (
      (n = rt()),
      (n.memoizedState = n.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yf,
        lastRenderedState: t,
      }),
      (n.queue = a),
      (n = sd.bind(null, ce, a)),
      (a.dispatch = n),
      (a = eu(!1)),
      (r = ru.bind(null, ce, !1, a.queue)),
      (a = rt()),
      (i = { state: t, dispatch: null, action: e, pending: null }),
      (a.queue = i),
      (n = $p.bind(null, ce, i, r, n)),
      (i.dispatch = n),
      (a.memoizedState = e),
      [t, n, !1]
    );
  }
  function Qf(e) {
    var t = Ge();
    return Zf(t, je, e);
  }
  function Zf(e, t, n) {
    if (
      ((t = Io(e, t, Yf)[0]),
      (e = Zi($t)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var a = Rl(t);
      } catch (m) {
        throw m === Al ? qi : m;
      }
    else a = t;
    t = Ge();
    var i = t.queue,
      r = i.dispatch;
    return (
      n !== t.memoizedState &&
        ((ce.flags |= 2048), _a(9, Ki(), Fp.bind(null, i, n), null)),
      [a, r, e]
    );
  }
  function Fp(e, t) {
    e.action = t;
  }
  function Kf(e) {
    var t = Ge(),
      n = je;
    if (n !== null) return Zf(t, n, e);
    Ge(), (t = t.memoizedState), (n = Ge());
    var a = n.queue.dispatch;
    return (n.memoizedState = e), [t, a, !1];
  }
  function _a(e, t, n, a) {
    return (
      (e = { tag: e, create: n, deps: a, inst: t, next: null }),
      (t = ce.updateQueue),
      t === null && ((t = Fo()), (ce.updateQueue = t)),
      (n = t.lastEffect),
      n === null
        ? (t.lastEffect = e.next = e)
        : ((a = n.next), (n.next = e), (e.next = a), (t.lastEffect = e)),
      e
    );
  }
  function Ki() {
    return { destroy: void 0, resource: void 0 };
  }
  function Jf() {
    return Ge().memoizedState;
  }
  function Ji(e, t, n, a) {
    var i = rt();
    (a = a === void 0 ? null : a),
      (ce.flags |= e),
      (i.memoizedState = _a(1 | t, Ki(), n, a));
  }
  function Ol(e, t, n, a) {
    var i = Ge();
    a = a === void 0 ? null : a;
    var r = i.memoizedState.inst;
    je !== null && a !== null && Qo(a, je.memoizedState.deps)
      ? (i.memoizedState = _a(t, r, n, a))
      : ((ce.flags |= e), (i.memoizedState = _a(1 | t, r, n, a)));
  }
  function $f(e, t) {
    Ji(8390656, 8, e, t);
  }
  function Ff(e, t) {
    Ol(2048, 8, e, t);
  }
  function Wf(e, t) {
    return Ol(4, 2, e, t);
  }
  function If(e, t) {
    return Ol(4, 4, e, t);
  }
  function Pf(e, t) {
    if (typeof t == "function") {
      e = e();
      var n = t(e);
      return function () {
        typeof n == "function" ? n() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function ed(e, t, n) {
    (n = n != null ? n.concat([e]) : null), Ol(4, 4, Pf.bind(null, t, e), n);
  }
  function nu() {}
  function td(e, t) {
    var n = Ge();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    return t !== null && Qo(t, a[1]) ? a[0] : ((n.memoizedState = [e, t]), e);
  }
  function nd(e, t) {
    var n = Ge();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    if (t !== null && Qo(t, a[1])) return a[0];
    if (((a = e()), In)) {
      un(!0);
      try {
        e();
      } finally {
        un(!1);
      }
    }
    return (n.memoizedState = [a, t]), a;
  }
  function au(e, t, n) {
    return n === void 0 || (gn & 1073741824) !== 0
      ? (e.memoizedState = t)
      : ((e.memoizedState = n), (e = im()), (ce.lanes |= e), (wn |= e), n);
  }
  function ad(e, t, n, a) {
    return ft(n, t)
      ? n
      : Ra.current !== null
        ? ((e = au(e, n, a)), ft(e, t) || (Je = !0), e)
        : (gn & 42) === 0
          ? ((Je = !0), (e.memoizedState = n))
          : ((e = im()), (ce.lanes |= e), (wn |= e), t);
  }
  function ld(e, t, n, a, i) {
    var r = K.p;
    K.p = r !== 0 && 8 > r ? r : 8;
    var m = R.T,
      g = {};
    (R.T = g), ru(e, !1, t, n);
    try {
      var b = i(),
        j = R.S;
      if (
        (j !== null && j(g, b),
        b !== null && typeof b == "object" && typeof b.then == "function")
      ) {
        var _ = Zp(b, a);
        Ul(e, t, _, pt(e));
      } else Ul(e, t, a, pt(e));
    } catch (L) {
      Ul(e, t, { then: function () {}, status: "rejected", reason: L }, pt());
    } finally {
      (K.p = r), (R.T = m);
    }
  }
  function Wp() {}
  function lu(e, t, n, a) {
    if (e.tag !== 5) throw Error(o(476));
    var i = id(e).queue;
    ld(
      e,
      i,
      t,
      ie,
      n === null
        ? Wp
        : function () {
            return rd(e), n(a);
          },
    );
  }
  function id(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: ie,
      baseState: ie,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $t,
        lastRenderedState: ie,
      },
      next: null,
    };
    var n = {};
    return (
      (t.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: $t,
          lastRenderedState: n,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function rd(e) {
    var t = id(e).next.queue;
    Ul(e, t, {}, pt());
  }
  function iu() {
    return nt(Il);
  }
  function od() {
    return Ge().memoizedState;
  }
  function ud() {
    return Ge().memoizedState;
  }
  function Ip(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = pt();
          e = mn(n);
          var a = hn(t, e, n);
          a !== null && (vt(a, t, n), Cl(a, t, n)),
            (t = { cache: _o() }),
            (e.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function Pp(e, t, n) {
    var a = pt();
    (n = {
      lane: a,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      $i(e)
        ? cd(t, n)
        : ((n = jo(e, t, n, a)), n !== null && (vt(n, e, a), fd(n, t, a)));
  }
  function sd(e, t, n) {
    var a = pt();
    Ul(e, t, n, a);
  }
  function Ul(e, t, n, a) {
    var i = {
      lane: a,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if ($i(e)) cd(t, i);
    else {
      var r = e.alternate;
      if (
        e.lanes === 0 &&
        (r === null || r.lanes === 0) &&
        ((r = t.lastRenderedReducer), r !== null)
      )
        try {
          var m = t.lastRenderedState,
            g = r(m, n);
          if (((i.hasEagerState = !0), (i.eagerState = g), ft(g, m)))
            return Ri(e, t, i, 0), ze === null && Di(), !1;
        } catch {}
      if (((n = jo(e, t, i, a)), n !== null))
        return vt(n, e, a), fd(n, t, a), !0;
    }
    return !1;
  }
  function ru(e, t, n, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: Lu(),
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      $i(e))
    ) {
      if (t) throw Error(o(479));
    } else (t = jo(e, n, a, 2)), t !== null && vt(t, e, 2);
  }
  function $i(e) {
    var t = e.alternate;
    return e === ce || (t !== null && t === ce);
  }
  function cd(e, t) {
    Oa = Yi = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function fd(e, t, n) {
    if ((n & 4194048) !== 0) {
      var a = t.lanes;
      (a &= e.pendingLanes), (n |= a), (t.lanes = n), bc(e, n);
    }
  }
  var Fi = {
      readContext: nt,
      use: Qi,
      useCallback: He,
      useContext: He,
      useEffect: He,
      useImperativeHandle: He,
      useLayoutEffect: He,
      useInsertionEffect: He,
      useMemo: He,
      useReducer: He,
      useRef: He,
      useState: He,
      useDebugValue: He,
      useDeferredValue: He,
      useTransition: He,
      useSyncExternalStore: He,
      useId: He,
      useHostTransitionStatus: He,
      useFormState: He,
      useActionState: He,
      useOptimistic: He,
      useMemoCache: He,
      useCacheRefresh: He,
    },
    dd = {
      readContext: nt,
      use: Qi,
      useCallback: function (e, t) {
        return (rt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: nt,
      useEffect: $f,
      useImperativeHandle: function (e, t, n) {
        (n = n != null ? n.concat([e]) : null),
          Ji(4194308, 4, Pf.bind(null, t, e), n);
      },
      useLayoutEffect: function (e, t) {
        return Ji(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        Ji(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = rt();
        t = t === void 0 ? null : t;
        var a = e();
        if (In) {
          un(!0);
          try {
            e();
          } finally {
            un(!1);
          }
        }
        return (n.memoizedState = [a, t]), a;
      },
      useReducer: function (e, t, n) {
        var a = rt();
        if (n !== void 0) {
          var i = n(t);
          if (In) {
            un(!0);
            try {
              n(t);
            } finally {
              un(!1);
            }
          }
        } else i = t;
        return (
          (a.memoizedState = a.baseState = i),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: i,
          }),
          (a.queue = e),
          (e = e.dispatch = Pp.bind(null, ce, e)),
          [a.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = rt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: function (e) {
        e = eu(e);
        var t = e.queue,
          n = sd.bind(null, ce, t);
        return (t.dispatch = n), [e.memoizedState, n];
      },
      useDebugValue: nu,
      useDeferredValue: function (e, t) {
        var n = rt();
        return au(n, e, t);
      },
      useTransition: function () {
        var e = eu(!1);
        return (
          (e = ld.bind(null, ce, e.queue, !0, !1)),
          (rt().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, n) {
        var a = ce,
          i = rt();
        if (xe) {
          if (n === void 0) throw Error(o(407));
          n = n();
        } else {
          if (((n = t()), ze === null)) throw Error(o(349));
          (pe & 124) !== 0 || Of(a, t, n);
        }
        i.memoizedState = n;
        var r = { value: n, getSnapshot: t };
        return (
          (i.queue = r),
          $f(_f.bind(null, a, r, e), [e]),
          (a.flags |= 2048),
          _a(9, Ki(), Uf.bind(null, a, r, n, t), null),
          n
        );
      },
      useId: function () {
        var e = rt(),
          t = ze.identifierPrefix;
        if (xe) {
          var n = Zt,
            a = Qt;
          (n = (a & ~(1 << (32 - ct(a) - 1))).toString(32) + n),
            (t = "«" + t + "R" + n),
            (n = Xi++),
            0 < n && (t += "H" + n.toString(32)),
            (t += "»");
        } else (n = Kp++), (t = "«" + t + "r" + n.toString(32) + "»");
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: iu,
      useFormState: Xf,
      useActionState: Xf,
      useOptimistic: function (e) {
        var t = rt();
        t.memoizedState = t.baseState = e;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = n),
          (t = ru.bind(null, ce, !0, n)),
          (n.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: Wo,
      useCacheRefresh: function () {
        return (rt().memoizedState = Ip.bind(null, ce));
      },
    },
    md = {
      readContext: nt,
      use: Qi,
      useCallback: td,
      useContext: nt,
      useEffect: Ff,
      useImperativeHandle: ed,
      useInsertionEffect: Wf,
      useLayoutEffect: If,
      useMemo: nd,
      useReducer: Zi,
      useRef: Jf,
      useState: function () {
        return Zi($t);
      },
      useDebugValue: nu,
      useDeferredValue: function (e, t) {
        var n = Ge();
        return ad(n, je.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Zi($t)[0],
          t = Ge().memoizedState;
        return [typeof e == "boolean" ? e : Rl(e), t];
      },
      useSyncExternalStore: Rf,
      useId: od,
      useHostTransitionStatus: iu,
      useFormState: Qf,
      useActionState: Qf,
      useOptimistic: function (e, t) {
        var n = Ge();
        return Lf(n, je, e, t);
      },
      useMemoCache: Wo,
      useCacheRefresh: ud,
    },
    ev = {
      readContext: nt,
      use: Qi,
      useCallback: td,
      useContext: nt,
      useEffect: Ff,
      useImperativeHandle: ed,
      useInsertionEffect: Wf,
      useLayoutEffect: If,
      useMemo: nd,
      useReducer: Po,
      useRef: Jf,
      useState: function () {
        return Po($t);
      },
      useDebugValue: nu,
      useDeferredValue: function (e, t) {
        var n = Ge();
        return je === null ? au(n, e, t) : ad(n, je.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Po($t)[0],
          t = Ge().memoizedState;
        return [typeof e == "boolean" ? e : Rl(e), t];
      },
      useSyncExternalStore: Rf,
      useId: od,
      useHostTransitionStatus: iu,
      useFormState: Kf,
      useActionState: Kf,
      useOptimistic: function (e, t) {
        var n = Ge();
        return je !== null
          ? Lf(n, je, e, t)
          : ((n.baseState = e), [e, n.queue.dispatch]);
      },
      useMemoCache: Wo,
      useCacheRefresh: ud,
    },
    Ba = null,
    _l = 0;
  function Wi(e) {
    var t = _l;
    return (_l += 1), Ba === null && (Ba = []), Nf(Ba, e, t);
  }
  function Bl(e, t) {
    (t = t.props.ref), (e.ref = t !== void 0 ? t : null);
  }
  function Ii(e, t) {
    throw t.$$typeof === T
      ? Error(o(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          o(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e,
          ),
        ));
  }
  function hd(e) {
    var t = e._init;
    return t(e._payload);
  }
  function gd(e) {
    function t(E, y) {
      if (e) {
        var N = E.deletions;
        N === null ? ((E.deletions = [y]), (E.flags |= 16)) : N.push(y);
      }
    }
    function n(E, y) {
      if (!e) return null;
      for (; y !== null; ) t(E, y), (y = y.sibling);
      return null;
    }
    function a(E) {
      for (var y = new Map(); E !== null; )
        E.key !== null ? y.set(E.key, E) : y.set(E.index, E), (E = E.sibling);
      return y;
    }
    function i(E, y) {
      return (E = Xt(E, y)), (E.index = 0), (E.sibling = null), E;
    }
    function r(E, y, N) {
      return (
        (E.index = N),
        e
          ? ((N = E.alternate),
            N !== null
              ? ((N = N.index), N < y ? ((E.flags |= 67108866), y) : N)
              : ((E.flags |= 67108866), y))
          : ((E.flags |= 1048576), y)
      );
    }
    function m(E) {
      return e && E.alternate === null && (E.flags |= 67108866), E;
    }
    function g(E, y, N, B) {
      return y === null || y.tag !== 6
        ? ((y = To(N, E.mode, B)), (y.return = E), y)
        : ((y = i(y, N)), (y.return = E), y);
    }
    function b(E, y, N, B) {
      var P = N.type;
      return P === H
        ? _(E, y, N.props.children, B, N.key)
        : y !== null &&
            (y.elementType === P ||
              (typeof P == "object" &&
                P !== null &&
                P.$$typeof === U &&
                hd(P) === y.type))
          ? ((y = i(y, N.props)), Bl(y, N), (y.return = E), y)
          : ((y = Ui(N.type, N.key, N.props, null, E.mode, B)),
            Bl(y, N),
            (y.return = E),
            y);
    }
    function j(E, y, N, B) {
      return y === null ||
        y.tag !== 4 ||
        y.stateNode.containerInfo !== N.containerInfo ||
        y.stateNode.implementation !== N.implementation
        ? ((y = Co(N, E.mode, B)), (y.return = E), y)
        : ((y = i(y, N.children || [])), (y.return = E), y);
    }
    function _(E, y, N, B, P) {
      return y === null || y.tag !== 7
        ? ((y = Xn(N, E.mode, B, P)), (y.return = E), y)
        : ((y = i(y, N)), (y.return = E), y);
    }
    function L(E, y, N) {
      if (
        (typeof y == "string" && y !== "") ||
        typeof y == "number" ||
        typeof y == "bigint"
      )
        return (y = To("" + y, E.mode, N)), (y.return = E), y;
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case M:
            return (
              (N = Ui(y.type, y.key, y.props, null, E.mode, N)),
              Bl(N, y),
              (N.return = E),
              N
            );
          case A:
            return (y = Co(y, E.mode, N)), (y.return = E), y;
          case U:
            var B = y._init;
            return (y = B(y._payload)), L(E, y, N);
        }
        if (De(y) || F(y))
          return (y = Xn(y, E.mode, N, null)), (y.return = E), y;
        if (typeof y.then == "function") return L(E, Wi(y), N);
        if (y.$$typeof === Y) return L(E, Li(E, y), N);
        Ii(E, y);
      }
      return null;
    }
    function C(E, y, N, B) {
      var P = y !== null ? y.key : null;
      if (
        (typeof N == "string" && N !== "") ||
        typeof N == "number" ||
        typeof N == "bigint"
      )
        return P !== null ? null : g(E, y, "" + N, B);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case M:
            return N.key === P ? b(E, y, N, B) : null;
          case A:
            return N.key === P ? j(E, y, N, B) : null;
          case U:
            return (P = N._init), (N = P(N._payload)), C(E, y, N, B);
        }
        if (De(N) || F(N)) return P !== null ? null : _(E, y, N, B, null);
        if (typeof N.then == "function") return C(E, y, Wi(N), B);
        if (N.$$typeof === Y) return C(E, y, Li(E, N), B);
        Ii(E, N);
      }
      return null;
    }
    function D(E, y, N, B, P) {
      if (
        (typeof B == "string" && B !== "") ||
        typeof B == "number" ||
        typeof B == "bigint"
      )
        return (E = E.get(N) || null), g(y, E, "" + B, P);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case M:
            return (
              (E = E.get(B.key === null ? N : B.key) || null), b(y, E, B, P)
            );
          case A:
            return (
              (E = E.get(B.key === null ? N : B.key) || null), j(y, E, B, P)
            );
          case U:
            var de = B._init;
            return (B = de(B._payload)), D(E, y, N, B, P);
        }
        if (De(B) || F(B)) return (E = E.get(N) || null), _(y, E, B, P, null);
        if (typeof B.then == "function") return D(E, y, N, Wi(B), P);
        if (B.$$typeof === Y) return D(E, y, N, Li(y, B), P);
        Ii(y, B);
      }
      return null;
    }
    function se(E, y, N, B) {
      for (
        var P = null, de = null, le = y, ue = (y = 0), Fe = null;
        le !== null && ue < N.length;
        ue++
      ) {
        le.index > ue ? ((Fe = le), (le = null)) : (Fe = le.sibling);
        var be = C(E, le, N[ue], B);
        if (be === null) {
          le === null && (le = Fe);
          break;
        }
        e && le && be.alternate === null && t(E, le),
          (y = r(be, y, ue)),
          de === null ? (P = be) : (de.sibling = be),
          (de = be),
          (le = Fe);
      }
      if (ue === N.length) return n(E, le), xe && Zn(E, ue), P;
      if (le === null) {
        for (; ue < N.length; ue++)
          (le = L(E, N[ue], B)),
            le !== null &&
              ((y = r(le, y, ue)),
              de === null ? (P = le) : (de.sibling = le),
              (de = le));
        return xe && Zn(E, ue), P;
      }
      for (le = a(le); ue < N.length; ue++)
        (Fe = D(le, E, ue, N[ue], B)),
          Fe !== null &&
            (e &&
              Fe.alternate !== null &&
              le.delete(Fe.key === null ? ue : Fe.key),
            (y = r(Fe, y, ue)),
            de === null ? (P = Fe) : (de.sibling = Fe),
            (de = Fe));
      return (
        e &&
          le.forEach(function (Dn) {
            return t(E, Dn);
          }),
        xe && Zn(E, ue),
        P
      );
    }
    function re(E, y, N, B) {
      if (N == null) throw Error(o(151));
      for (
        var P = null, de = null, le = y, ue = (y = 0), Fe = null, be = N.next();
        le !== null && !be.done;
        ue++, be = N.next()
      ) {
        le.index > ue ? ((Fe = le), (le = null)) : (Fe = le.sibling);
        var Dn = C(E, le, be.value, B);
        if (Dn === null) {
          le === null && (le = Fe);
          break;
        }
        e && le && Dn.alternate === null && t(E, le),
          (y = r(Dn, y, ue)),
          de === null ? (P = Dn) : (de.sibling = Dn),
          (de = Dn),
          (le = Fe);
      }
      if (be.done) return n(E, le), xe && Zn(E, ue), P;
      if (le === null) {
        for (; !be.done; ue++, be = N.next())
          (be = L(E, be.value, B)),
            be !== null &&
              ((y = r(be, y, ue)),
              de === null ? (P = be) : (de.sibling = be),
              (de = be));
        return xe && Zn(E, ue), P;
      }
      for (le = a(le); !be.done; ue++, be = N.next())
        (be = D(le, E, ue, be.value, B)),
          be !== null &&
            (e &&
              be.alternate !== null &&
              le.delete(be.key === null ? ue : be.key),
            (y = r(be, y, ue)),
            de === null ? (P = be) : (de.sibling = be),
            (de = be));
      return (
        e &&
          le.forEach(function (tb) {
            return t(E, tb);
          }),
        xe && Zn(E, ue),
        P
      );
    }
    function Te(E, y, N, B) {
      if (
        (typeof N == "object" &&
          N !== null &&
          N.type === H &&
          N.key === null &&
          (N = N.props.children),
        typeof N == "object" && N !== null)
      ) {
        switch (N.$$typeof) {
          case M:
            e: {
              for (var P = N.key; y !== null; ) {
                if (y.key === P) {
                  if (((P = N.type), P === H)) {
                    if (y.tag === 7) {
                      n(E, y.sibling),
                        (B = i(y, N.props.children)),
                        (B.return = E),
                        (E = B);
                      break e;
                    }
                  } else if (
                    y.elementType === P ||
                    (typeof P == "object" &&
                      P !== null &&
                      P.$$typeof === U &&
                      hd(P) === y.type)
                  ) {
                    n(E, y.sibling),
                      (B = i(y, N.props)),
                      Bl(B, N),
                      (B.return = E),
                      (E = B);
                    break e;
                  }
                  n(E, y);
                  break;
                } else t(E, y);
                y = y.sibling;
              }
              N.type === H
                ? ((B = Xn(N.props.children, E.mode, B, N.key)),
                  (B.return = E),
                  (E = B))
                : ((B = Ui(N.type, N.key, N.props, null, E.mode, B)),
                  Bl(B, N),
                  (B.return = E),
                  (E = B));
            }
            return m(E);
          case A:
            e: {
              for (P = N.key; y !== null; ) {
                if (y.key === P)
                  if (
                    y.tag === 4 &&
                    y.stateNode.containerInfo === N.containerInfo &&
                    y.stateNode.implementation === N.implementation
                  ) {
                    n(E, y.sibling),
                      (B = i(y, N.children || [])),
                      (B.return = E),
                      (E = B);
                    break e;
                  } else {
                    n(E, y);
                    break;
                  }
                else t(E, y);
                y = y.sibling;
              }
              (B = Co(N, E.mode, B)), (B.return = E), (E = B);
            }
            return m(E);
          case U:
            return (P = N._init), (N = P(N._payload)), Te(E, y, N, B);
        }
        if (De(N)) return se(E, y, N, B);
        if (F(N)) {
          if (((P = F(N)), typeof P != "function")) throw Error(o(150));
          return (N = P.call(N)), re(E, y, N, B);
        }
        if (typeof N.then == "function") return Te(E, y, Wi(N), B);
        if (N.$$typeof === Y) return Te(E, y, Li(E, N), B);
        Ii(E, N);
      }
      return (typeof N == "string" && N !== "") ||
        typeof N == "number" ||
        typeof N == "bigint"
        ? ((N = "" + N),
          y !== null && y.tag === 6
            ? (n(E, y.sibling), (B = i(y, N)), (B.return = E), (E = B))
            : (n(E, y), (B = To(N, E.mode, B)), (B.return = E), (E = B)),
          m(E))
        : n(E, y);
    }
    return function (E, y, N, B) {
      try {
        _l = 0;
        var P = Te(E, y, N, B);
        return (Ba = null), P;
      } catch (le) {
        if (le === Al || le === qi) throw le;
        var de = dt(29, le, null, E.mode);
        return (de.lanes = B), (de.return = E), de;
      }
    };
  }
  var ka = gd(!0),
    pd = gd(!1),
    Nt = Ue(null),
    _t = null;
  function pn(e) {
    var t = e.alternate;
    ge(Qe, Qe.current & 1),
      ge(Nt, e),
      _t === null &&
        (t === null || Ra.current !== null || t.memoizedState !== null) &&
        (_t = e);
  }
  function vd(e) {
    if (e.tag === 22) {
      if ((ge(Qe, Qe.current), ge(Nt, e), _t === null)) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (_t = e);
      }
    } else vn();
  }
  function vn() {
    ge(Qe, Qe.current), ge(Nt, Nt.current);
  }
  function Ft(e) {
    we(Nt), _t === e && (_t = null), we(Qe);
  }
  var Qe = Ue(0);
  function Pi(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || Fu(n))
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  function ou(e, t, n, a) {
    (t = e.memoizedState),
      (n = n(a, t)),
      (n = n == null ? t : S({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var uu = {
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var a = pt(),
        i = mn(a);
      (i.payload = t),
        n != null && (i.callback = n),
        (t = hn(e, i, a)),
        t !== null && (vt(t, e, a), Cl(t, e, a));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var a = pt(),
        i = mn(a);
      (i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = hn(e, i, a)),
        t !== null && (vt(t, e, a), Cl(t, e, a));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = pt(),
        a = mn(n);
      (a.tag = 2),
        t != null && (a.callback = t),
        (t = hn(e, a, n)),
        t !== null && (vt(t, e, n), Cl(t, e, n));
    },
  };
  function bd(e, t, n, a, i, r, m) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(a, r, m)
        : t.prototype && t.prototype.isPureReactComponent
          ? !bl(n, a) || !bl(i, r)
          : !0
    );
  }
  function yd(e, t, n, a) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, a),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, a),
      t.state !== e && uu.enqueueReplaceState(t, t.state, null);
  }
  function Pn(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var a in t) a !== "ref" && (n[a] = t[a]);
    }
    if ((e = e.defaultProps)) {
      n === t && (n = S({}, n));
      for (var i in e) n[i] === void 0 && (n[i] = e[i]);
    }
    return n;
  }
  var er =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var t = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == "object" &&
                e !== null &&
                typeof e.message == "string"
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", e);
            return;
          }
          console.error(e);
        };
  function xd(e) {
    er(e);
  }
  function Sd(e) {
    console.error(e);
  }
  function wd(e) {
    er(e);
  }
  function tr(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function Ed(e, t, n) {
    try {
      var a = e.onCaughtError;
      a(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  function su(e, t, n) {
    return (
      (n = mn(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        tr(e, t);
      }),
      n
    );
  }
  function Nd(e) {
    return (e = mn(e)), (e.tag = 3), e;
  }
  function jd(e, t, n, a) {
    var i = n.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var r = a.value;
      (e.payload = function () {
        return i(r);
      }),
        (e.callback = function () {
          Ed(t, n, a);
        });
    }
    var m = n.stateNode;
    m !== null &&
      typeof m.componentDidCatch == "function" &&
      (e.callback = function () {
        Ed(t, n, a),
          typeof i != "function" &&
            (En === null ? (En = new Set([this])) : En.add(this));
        var g = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: g !== null ? g : "",
        });
      });
  }
  function tv(e, t, n, a, i) {
    if (
      ((n.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((t = n.alternate),
        t !== null && El(t, n, i, !0),
        (n = Nt.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 13:
            return (
              _t === null ? Ou() : n.alternate === null && Le === 0 && (Le = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = i),
              a === Lo
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null ? (n.updateQueue = new Set([a])) : t.add(a),
                  _u(e, a, i)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              a === Lo
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (n.updateQueue = t))
                    : ((n = t.retryQueue),
                      n === null ? (t.retryQueue = new Set([a])) : n.add(a)),
                  _u(e, a, i)),
              !1
            );
        }
        throw Error(o(435, n.tag));
      }
      return _u(e, a, i), Ou(), !1;
    }
    if (xe)
      return (
        (t = Nt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = i),
            a !== Do && ((e = Error(o(422), { cause: a })), wl(xt(e, n))))
          : (a !== Do && ((t = Error(o(423), { cause: a })), wl(xt(t, n))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (i &= -i),
            (e.lanes |= i),
            (a = xt(a, n)),
            (i = su(e.stateNode, a, i)),
            Vo(e, i),
            Le !== 4 && (Le = 2)),
        !1
      );
    var r = Error(o(520), { cause: a });
    if (
      ((r = xt(r, n)),
      Yl === null ? (Yl = [r]) : Yl.push(r),
      Le !== 4 && (Le = 2),
      t === null)
    )
      return !0;
    (a = xt(a, n)), (n = t);
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (e = i & -i),
            (n.lanes |= e),
            (e = su(n.stateNode, a, e)),
            Vo(n, e),
            !1
          );
        case 1:
          if (
            ((t = n.type),
            (r = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (r !== null &&
                  typeof r.componentDidCatch == "function" &&
                  (En === null || !En.has(r)))))
          )
            return (
              (n.flags |= 65536),
              (i &= -i),
              (n.lanes |= i),
              (i = Nd(i)),
              jd(i, e, n, a),
              Vo(n, i),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Ad = Error(o(461)),
    Je = !1;
  function Ie(e, t, n, a) {
    t.child = e === null ? pd(t, null, n, a) : ka(t, e.child, n, a);
  }
  function Td(e, t, n, a, i) {
    n = n.render;
    var r = t.ref;
    if ("ref" in a) {
      var m = {};
      for (var g in a) g !== "ref" && (m[g] = a[g]);
    } else m = a;
    return (
      Fn(t),
      (a = Zo(e, t, n, m, r, i)),
      (g = Ko()),
      e !== null && !Je
        ? (Jo(e, t, i), Wt(e, t, i))
        : (xe && g && Mo(t), (t.flags |= 1), Ie(e, t, a, i), t.child)
    );
  }
  function Cd(e, t, n, a, i) {
    if (e === null) {
      var r = n.type;
      return typeof r == "function" &&
        !Ao(r) &&
        r.defaultProps === void 0 &&
        n.compare === null
        ? ((t.tag = 15), (t.type = r), Md(e, t, r, a, i))
        : ((e = Ui(n.type, null, a, t, t.mode, i)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((r = e.child), !vu(e, i))) {
      var m = r.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : bl), n(m, a) && e.ref === t.ref)
      )
        return Wt(e, t, i);
    }
    return (
      (t.flags |= 1),
      (e = Xt(r, a)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Md(e, t, n, a, i) {
    if (e !== null) {
      var r = e.memoizedProps;
      if (bl(r, a) && e.ref === t.ref)
        if (((Je = !1), (t.pendingProps = a = r), vu(e, i)))
          (e.flags & 131072) !== 0 && (Je = !0);
        else return (t.lanes = e.lanes), Wt(e, t, i);
    }
    return cu(e, t, n, a, i);
  }
  function zd(e, t, n) {
    var a = t.pendingProps,
      i = a.children,
      r = e !== null ? e.memoizedState : null;
    if (a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (((a = r !== null ? r.baseLanes | n : n), e !== null)) {
          for (i = t.child = e.child, r = 0; i !== null; )
            (r = r | i.lanes | i.childLanes), (i = i.sibling);
          t.childLanes = r & ~a;
        } else (t.childLanes = 0), (t.child = null);
        return Dd(e, t, a, n);
      }
      if ((n & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Hi(t, r !== null ? r.cachePool : null),
          r !== null ? Mf(t, r) : Yo(),
          vd(t);
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          Dd(e, t, r !== null ? r.baseLanes | n : n, n)
        );
    } else
      r !== null
        ? (Hi(t, r.cachePool), Mf(t, r), vn(), (t.memoizedState = null))
        : (e !== null && Hi(t, null), Yo(), vn());
    return Ie(e, t, i, n), t.child;
  }
  function Dd(e, t, n, a) {
    var i = ko();
    return (
      (i = i === null ? null : { parent: Xe._currentValue, pool: i }),
      (t.memoizedState = { baseLanes: n, cachePool: i }),
      e !== null && Hi(t, null),
      Yo(),
      vd(t),
      e !== null && El(e, t, a, !0),
      null
    );
  }
  function nr(e, t) {
    var n = t.ref;
    if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(o(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function cu(e, t, n, a, i) {
    return (
      Fn(t),
      (n = Zo(e, t, n, a, void 0, i)),
      (a = Ko()),
      e !== null && !Je
        ? (Jo(e, t, i), Wt(e, t, i))
        : (xe && a && Mo(t), (t.flags |= 1), Ie(e, t, n, i), t.child)
    );
  }
  function Rd(e, t, n, a, i, r) {
    return (
      Fn(t),
      (t.updateQueue = null),
      (n = Df(t, a, n, i)),
      zf(e),
      (a = Ko()),
      e !== null && !Je
        ? (Jo(e, t, r), Wt(e, t, r))
        : (xe && a && Mo(t), (t.flags |= 1), Ie(e, t, n, r), t.child)
    );
  }
  function Od(e, t, n, a, i) {
    if ((Fn(t), t.stateNode === null)) {
      var r = Ta,
        m = n.contextType;
      typeof m == "object" && m !== null && (r = nt(m)),
        (r = new n(a, r)),
        (t.memoizedState =
          r.state !== null && r.state !== void 0 ? r.state : null),
        (r.updater = uu),
        (t.stateNode = r),
        (r._reactInternals = t),
        (r = t.stateNode),
        (r.props = a),
        (r.state = t.memoizedState),
        (r.refs = {}),
        Ho(t),
        (m = n.contextType),
        (r.context = typeof m == "object" && m !== null ? nt(m) : Ta),
        (r.state = t.memoizedState),
        (m = n.getDerivedStateFromProps),
        typeof m == "function" && (ou(t, n, m, a), (r.state = t.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof r.getSnapshotBeforeUpdate == "function" ||
          (typeof r.UNSAFE_componentWillMount != "function" &&
            typeof r.componentWillMount != "function") ||
          ((m = r.state),
          typeof r.componentWillMount == "function" && r.componentWillMount(),
          typeof r.UNSAFE_componentWillMount == "function" &&
            r.UNSAFE_componentWillMount(),
          m !== r.state && uu.enqueueReplaceState(r, r.state, null),
          zl(t, a, r, i),
          Ml(),
          (r.state = t.memoizedState)),
        typeof r.componentDidMount == "function" && (t.flags |= 4194308),
        (a = !0);
    } else if (e === null) {
      r = t.stateNode;
      var g = t.memoizedProps,
        b = Pn(n, g);
      r.props = b;
      var j = r.context,
        _ = n.contextType;
      (m = Ta), typeof _ == "object" && _ !== null && (m = nt(_));
      var L = n.getDerivedStateFromProps;
      (_ =
        typeof L == "function" ||
        typeof r.getSnapshotBeforeUpdate == "function"),
        (g = t.pendingProps !== g),
        _ ||
          (typeof r.UNSAFE_componentWillReceiveProps != "function" &&
            typeof r.componentWillReceiveProps != "function") ||
          ((g || j !== m) && yd(t, r, a, m)),
        (dn = !1);
      var C = t.memoizedState;
      (r.state = C),
        zl(t, a, r, i),
        Ml(),
        (j = t.memoizedState),
        g || C !== j || dn
          ? (typeof L == "function" && (ou(t, n, L, a), (j = t.memoizedState)),
            (b = dn || bd(t, n, b, a, C, j, m))
              ? (_ ||
                  (typeof r.UNSAFE_componentWillMount != "function" &&
                    typeof r.componentWillMount != "function") ||
                  (typeof r.componentWillMount == "function" &&
                    r.componentWillMount(),
                  typeof r.UNSAFE_componentWillMount == "function" &&
                    r.UNSAFE_componentWillMount()),
                typeof r.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof r.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = j)),
            (r.props = a),
            (r.state = j),
            (r.context = m),
            (a = b))
          : (typeof r.componentDidMount == "function" && (t.flags |= 4194308),
            (a = !1));
    } else {
      (r = t.stateNode),
        qo(e, t),
        (m = t.memoizedProps),
        (_ = Pn(n, m)),
        (r.props = _),
        (L = t.pendingProps),
        (C = r.context),
        (j = n.contextType),
        (b = Ta),
        typeof j == "object" && j !== null && (b = nt(j)),
        (g = n.getDerivedStateFromProps),
        (j =
          typeof g == "function" ||
          typeof r.getSnapshotBeforeUpdate == "function") ||
          (typeof r.UNSAFE_componentWillReceiveProps != "function" &&
            typeof r.componentWillReceiveProps != "function") ||
          ((m !== L || C !== b) && yd(t, r, a, b)),
        (dn = !1),
        (C = t.memoizedState),
        (r.state = C),
        zl(t, a, r, i),
        Ml();
      var D = t.memoizedState;
      m !== L ||
      C !== D ||
      dn ||
      (e !== null && e.dependencies !== null && ki(e.dependencies))
        ? (typeof g == "function" && (ou(t, n, g, a), (D = t.memoizedState)),
          (_ =
            dn ||
            bd(t, n, _, a, C, D, b) ||
            (e !== null && e.dependencies !== null && ki(e.dependencies)))
            ? (j ||
                (typeof r.UNSAFE_componentWillUpdate != "function" &&
                  typeof r.componentWillUpdate != "function") ||
                (typeof r.componentWillUpdate == "function" &&
                  r.componentWillUpdate(a, D, b),
                typeof r.UNSAFE_componentWillUpdate == "function" &&
                  r.UNSAFE_componentWillUpdate(a, D, b)),
              typeof r.componentDidUpdate == "function" && (t.flags |= 4),
              typeof r.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof r.componentDidUpdate != "function" ||
                (m === e.memoizedProps && C === e.memoizedState) ||
                (t.flags |= 4),
              typeof r.getSnapshotBeforeUpdate != "function" ||
                (m === e.memoizedProps && C === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = D)),
          (r.props = a),
          (r.state = D),
          (r.context = b),
          (a = _))
        : (typeof r.componentDidUpdate != "function" ||
            (m === e.memoizedProps && C === e.memoizedState) ||
            (t.flags |= 4),
          typeof r.getSnapshotBeforeUpdate != "function" ||
            (m === e.memoizedProps && C === e.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return (
      (r = a),
      nr(e, t),
      (a = (t.flags & 128) !== 0),
      r || a
        ? ((r = t.stateNode),
          (n =
            a && typeof n.getDerivedStateFromError != "function"
              ? null
              : r.render()),
          (t.flags |= 1),
          e !== null && a
            ? ((t.child = ka(t, e.child, null, i)),
              (t.child = ka(t, null, n, i)))
            : Ie(e, t, n, i),
          (t.memoizedState = r.state),
          (e = t.child))
        : (e = Wt(e, t, i)),
      e
    );
  }
  function Ud(e, t, n, a) {
    return Sl(), (t.flags |= 256), Ie(e, t, n, a), t.child;
  }
  var fu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function du(e) {
    return { baseLanes: e, cachePool: Sf() };
  }
  function mu(e, t, n) {
    return (e = e !== null ? e.childLanes & ~n : 0), t && (e |= jt), e;
  }
  function _d(e, t, n) {
    var a = t.pendingProps,
      i = !1,
      r = (t.flags & 128) !== 0,
      m;
    if (
      ((m = r) ||
        (m =
          e !== null && e.memoizedState === null ? !1 : (Qe.current & 2) !== 0),
      m && ((i = !0), (t.flags &= -129)),
      (m = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (xe) {
        if ((i ? pn(t) : vn(), xe)) {
          var g = ke,
            b;
          if ((b = g)) {
            e: {
              for (b = g, g = Ut; b.nodeType !== 8; ) {
                if (!g) {
                  g = null;
                  break e;
                }
                if (((b = zt(b.nextSibling)), b === null)) {
                  g = null;
                  break e;
                }
              }
              g = b;
            }
            g !== null
              ? ((t.memoizedState = {
                  dehydrated: g,
                  treeContext: Qn !== null ? { id: Qt, overflow: Zt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (b = dt(18, null, null, 0)),
                (b.stateNode = g),
                (b.return = t),
                (t.child = b),
                (at = t),
                (ke = null),
                (b = !0))
              : (b = !1);
          }
          b || Jn(t);
        }
        if (
          ((g = t.memoizedState),
          g !== null && ((g = g.dehydrated), g !== null))
        )
          return Fu(g) ? (t.lanes = 32) : (t.lanes = 536870912), null;
        Ft(t);
      }
      return (
        (g = a.children),
        (a = a.fallback),
        i
          ? (vn(),
            (i = t.mode),
            (g = ar({ mode: "hidden", children: g }, i)),
            (a = Xn(a, i, n, null)),
            (g.return = t),
            (a.return = t),
            (g.sibling = a),
            (t.child = g),
            (i = t.child),
            (i.memoizedState = du(n)),
            (i.childLanes = mu(e, m, n)),
            (t.memoizedState = fu),
            a)
          : (pn(t), hu(t, g))
      );
    }
    if (
      ((b = e.memoizedState), b !== null && ((g = b.dehydrated), g !== null))
    ) {
      if (r)
        t.flags & 256
          ? (pn(t), (t.flags &= -257), (t = gu(e, t, n)))
          : t.memoizedState !== null
            ? (vn(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (vn(),
              (i = a.fallback),
              (g = t.mode),
              (a = ar({ mode: "visible", children: a.children }, g)),
              (i = Xn(i, g, n, null)),
              (i.flags |= 2),
              (a.return = t),
              (i.return = t),
              (a.sibling = i),
              (t.child = a),
              ka(t, e.child, null, n),
              (a = t.child),
              (a.memoizedState = du(n)),
              (a.childLanes = mu(e, m, n)),
              (t.memoizedState = fu),
              (t = i));
      else if ((pn(t), Fu(g))) {
        if (((m = g.nextSibling && g.nextSibling.dataset), m)) var j = m.dgst;
        (m = j),
          (a = Error(o(419))),
          (a.stack = ""),
          (a.digest = m),
          wl({ value: a, source: null, stack: null }),
          (t = gu(e, t, n));
      } else if (
        (Je || El(e, t, n, !1), (m = (n & e.childLanes) !== 0), Je || m)
      ) {
        if (
          ((m = ze),
          m !== null &&
            ((a = n & -n),
            (a = (a & 42) !== 0 ? 1 : Fr(a)),
            (a = (a & (m.suspendedLanes | n)) !== 0 ? 0 : a),
            a !== 0 && a !== b.retryLane))
        )
          throw ((b.retryLane = a), Aa(e, a), vt(m, e, a), Ad);
        g.data === "$?" || Ou(), (t = gu(e, t, n));
      } else
        g.data === "$?"
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = b.treeContext),
            (ke = zt(g.nextSibling)),
            (at = t),
            (xe = !0),
            (Kn = null),
            (Ut = !1),
            e !== null &&
              ((wt[Et++] = Qt),
              (wt[Et++] = Zt),
              (wt[Et++] = Qn),
              (Qt = e.id),
              (Zt = e.overflow),
              (Qn = t)),
            (t = hu(t, a.children)),
            (t.flags |= 4096));
      return t;
    }
    return i
      ? (vn(),
        (i = a.fallback),
        (g = t.mode),
        (b = e.child),
        (j = b.sibling),
        (a = Xt(b, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = b.subtreeFlags & 65011712),
        j !== null ? (i = Xt(j, i)) : ((i = Xn(i, g, n, null)), (i.flags |= 2)),
        (i.return = t),
        (a.return = t),
        (a.sibling = i),
        (t.child = a),
        (a = i),
        (i = t.child),
        (g = e.child.memoizedState),
        g === null
          ? (g = du(n))
          : ((b = g.cachePool),
            b !== null
              ? ((j = Xe._currentValue),
                (b = b.parent !== j ? { parent: j, pool: j } : b))
              : (b = Sf()),
            (g = { baseLanes: g.baseLanes | n, cachePool: b })),
        (i.memoizedState = g),
        (i.childLanes = mu(e, m, n)),
        (t.memoizedState = fu),
        a)
      : (pn(t),
        (n = e.child),
        (e = n.sibling),
        (n = Xt(n, { mode: "visible", children: a.children })),
        (n.return = t),
        (n.sibling = null),
        e !== null &&
          ((m = t.deletions),
          m === null ? ((t.deletions = [e]), (t.flags |= 16)) : m.push(e)),
        (t.child = n),
        (t.memoizedState = null),
        n);
  }
  function hu(e, t) {
    return (
      (t = ar({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function ar(e, t) {
    return (
      (e = dt(22, e, null, t)),
      (e.lanes = 0),
      (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      e
    );
  }
  function gu(e, t, n) {
    return (
      ka(t, e.child, null, n),
      (e = hu(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Bd(e, t, n) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), Oo(e.return, t, n);
  }
  function pu(e, t, n, a, i) {
    var r = e.memoizedState;
    r === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: n,
          tailMode: i,
        })
      : ((r.isBackwards = t),
        (r.rendering = null),
        (r.renderingStartTime = 0),
        (r.last = a),
        (r.tail = n),
        (r.tailMode = i));
  }
  function kd(e, t, n) {
    var a = t.pendingProps,
      i = a.revealOrder,
      r = a.tail;
    if ((Ie(e, t, a.children, n), (a = Qe.current), (a & 2) !== 0))
      (a = (a & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Bd(e, n, t);
          else if (e.tag === 19) Bd(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      a &= 1;
    }
    switch ((ge(Qe, a), i)) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Pi(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          pu(t, !1, i, n, r);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Pi(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        pu(t, !0, n, null, r);
        break;
      case "together":
        pu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Wt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (wn |= t.lanes),
      (n & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((El(e, t, n, !1), (n & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (
        e = t.child, n = Xt(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;
      )
        (e = e.sibling),
          (n = n.sibling = Xt(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function vu(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && ki(e)));
  }
  function nv(e, t, n) {
    switch (t.tag) {
      case 3:
        We(t, t.stateNode.containerInfo),
          fn(t, Xe, e.memoizedState.cache),
          Sl();
        break;
      case 27:
      case 5:
        Rt(t);
        break;
      case 4:
        We(t, t.stateNode.containerInfo);
        break;
      case 10:
        fn(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (pn(t), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? _d(e, t, n)
              : (pn(t), (e = Wt(e, t, n)), e !== null ? e.sibling : null);
        pn(t);
        break;
      case 19:
        var i = (e.flags & 128) !== 0;
        if (
          ((a = (n & t.childLanes) !== 0),
          a || (El(e, t, n, !1), (a = (n & t.childLanes) !== 0)),
          i)
        ) {
          if (a) return kd(e, t, n);
          t.flags |= 128;
        }
        if (
          ((i = t.memoizedState),
          i !== null &&
            ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
          ge(Qe, Qe.current),
          a)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), zd(e, t, n);
      case 24:
        fn(t, Xe, e.memoizedState.cache);
    }
    return Wt(e, t, n);
  }
  function Ld(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Je = !0;
      else {
        if (!vu(e, n) && (t.flags & 128) === 0) return (Je = !1), nv(e, t, n);
        Je = (e.flags & 131072) !== 0;
      }
    else (Je = !1), xe && (t.flags & 1048576) !== 0 && hf(t, Bi, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          e = t.pendingProps;
          var a = t.elementType,
            i = a._init;
          if (((a = i(a._payload)), (t.type = a), typeof a == "function"))
            Ao(a)
              ? ((e = Pn(a, e)), (t.tag = 1), (t = Od(null, t, a, e, n)))
              : ((t.tag = 0), (t = cu(null, t, a, e, n)));
          else {
            if (a != null) {
              if (((i = a.$$typeof), i === V)) {
                (t.tag = 11), (t = Td(null, t, a, e, n));
                break e;
              } else if (i === G) {
                (t.tag = 14), (t = Cd(null, t, a, e, n));
                break e;
              }
            }
            throw ((t = oe(a) || a), Error(o(306, t, "")));
          }
        }
        return t;
      case 0:
        return cu(e, t, t.type, t.pendingProps, n);
      case 1:
        return (a = t.type), (i = Pn(a, t.pendingProps)), Od(e, t, a, i, n);
      case 3:
        e: {
          if ((We(t, t.stateNode.containerInfo), e === null))
            throw Error(o(387));
          a = t.pendingProps;
          var r = t.memoizedState;
          (i = r.element), qo(e, t), zl(t, a, null, n);
          var m = t.memoizedState;
          if (
            ((a = m.cache),
            fn(t, Xe, a),
            a !== r.cache && Uo(t, [Xe], n, !0),
            Ml(),
            (a = m.element),
            r.isDehydrated)
          )
            if (
              ((r = { element: a, isDehydrated: !1, cache: m.cache }),
              (t.updateQueue.baseState = r),
              (t.memoizedState = r),
              t.flags & 256)
            ) {
              t = Ud(e, t, a, n);
              break e;
            } else if (a !== i) {
              (i = xt(Error(o(424)), t)), wl(i), (t = Ud(e, t, a, n));
              break e;
            } else
              for (
                e = t.stateNode.containerInfo,
                  e.nodeType === 9
                    ? (e = e.body)
                    : (e = e.nodeName === "HTML" ? e.ownerDocument.body : e),
                  ke = zt(e.firstChild),
                  at = t,
                  xe = !0,
                  Kn = null,
                  Ut = !0,
                  n = pd(t, null, a, n),
                  t.child = n;
                n;
              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((Sl(), a === i)) {
              t = Wt(e, t, n);
              break e;
            }
            Ie(e, t, a, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          nr(e, t),
          e === null
            ? (n = Gm(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = n)
              : xe ||
                ((n = t.type),
                (e = t.pendingProps),
                (a = vr(Ce.current).createElement(n)),
                (a[tt] = t),
                (a[lt] = e),
                et(a, n, e),
                Ke(a),
                (t.stateNode = a))
            : (t.memoizedState = Gm(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Rt(t),
          e === null &&
            xe &&
            ((a = t.stateNode = Hm(t.type, t.pendingProps, Ce.current)),
            (at = t),
            (Ut = !0),
            (i = ke),
            An(t.type) ? ((Wu = i), (ke = zt(a.firstChild))) : (ke = i)),
          Ie(e, t, t.pendingProps.children, n),
          nr(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            xe &&
            ((i = a = ke) &&
              ((a = zv(a, t.type, t.pendingProps, Ut)),
              a !== null
                ? ((t.stateNode = a),
                  (at = t),
                  (ke = zt(a.firstChild)),
                  (Ut = !1),
                  (i = !0))
                : (i = !1)),
            i || Jn(t)),
          Rt(t),
          (i = t.type),
          (r = t.pendingProps),
          (m = e !== null ? e.memoizedProps : null),
          (a = r.children),
          Ku(i, r) ? (a = null) : m !== null && Ku(i, m) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((i = Zo(e, t, Jp, null, null, n)), (Il._currentValue = i)),
          nr(e, t),
          Ie(e, t, a, n),
          t.child
        );
      case 6:
        return (
          e === null &&
            xe &&
            ((e = n = ke) &&
              ((n = Dv(n, t.pendingProps, Ut)),
              n !== null
                ? ((t.stateNode = n), (at = t), (ke = null), (e = !0))
                : (e = !1)),
            e || Jn(t)),
          null
        );
      case 13:
        return _d(e, t, n);
      case 4:
        return (
          We(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          e === null ? (t.child = ka(t, null, a, n)) : Ie(e, t, a, n),
          t.child
        );
      case 11:
        return Td(e, t, t.type, t.pendingProps, n);
      case 7:
        return Ie(e, t, t.pendingProps, n), t.child;
      case 8:
        return Ie(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Ie(e, t, t.pendingProps.children, n), t.child;
      case 10:
        return (
          (a = t.pendingProps),
          fn(t, t.type, a.value),
          Ie(e, t, a.children, n),
          t.child
        );
      case 9:
        return (
          (i = t.type._context),
          (a = t.pendingProps.children),
          Fn(t),
          (i = nt(i)),
          (a = a(i)),
          (t.flags |= 1),
          Ie(e, t, a, n),
          t.child
        );
      case 14:
        return Cd(e, t, t.type, t.pendingProps, n);
      case 15:
        return Md(e, t, t.type, t.pendingProps, n);
      case 19:
        return kd(e, t, n);
      case 31:
        return (
          (a = t.pendingProps),
          (n = t.mode),
          (a = { mode: a.mode, children: a.children }),
          e === null
            ? ((n = ar(a, n)),
              (n.ref = t.ref),
              (t.child = n),
              (n.return = t),
              (t = n))
            : ((n = Xt(e.child, a)),
              (n.ref = t.ref),
              (t.child = n),
              (n.return = t),
              (t = n)),
          t
        );
      case 22:
        return zd(e, t, n);
      case 24:
        return (
          Fn(t),
          (a = nt(Xe)),
          e === null
            ? ((i = ko()),
              i === null &&
                ((i = ze),
                (r = _o()),
                (i.pooledCache = r),
                r.refCount++,
                r !== null && (i.pooledCacheLanes |= n),
                (i = r)),
              (t.memoizedState = { parent: a, cache: i }),
              Ho(t),
              fn(t, Xe, i))
            : ((e.lanes & n) !== 0 && (qo(e, t), zl(t, null, null, n), Ml()),
              (i = e.memoizedState),
              (r = t.memoizedState),
              i.parent !== a
                ? ((i = { parent: a, cache: a }),
                  (t.memoizedState = i),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = i),
                  fn(t, Xe, a))
                : ((a = r.cache),
                  fn(t, Xe, a),
                  a !== i.cache && Uo(t, [Xe], n, !0))),
          Ie(e, t, t.pendingProps.children, n),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(o(156, t.tag));
  }
  function It(e) {
    e.flags |= 4;
  }
  function Hd(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Km(t))) {
      if (
        ((t = Nt.current),
        t !== null &&
          ((pe & 4194048) === pe
            ? _t !== null
            : ((pe & 62914560) !== pe && (pe & 536870912) === 0) || t !== _t))
      )
        throw ((Tl = Lo), wf);
      e.flags |= 8192;
    }
  }
  function lr(e, t) {
    t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? pc() : 536870912), (e.lanes |= t), (Va |= t));
  }
  function kl(e, t) {
    if (!xe)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var a = null; n !== null; )
            n.alternate !== null && (a = n), (n = n.sibling);
          a === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function _e(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      a = 0;
    if (t)
      for (var i = e.child; i !== null; )
        (n |= i.lanes | i.childLanes),
          (a |= i.subtreeFlags & 65011712),
          (a |= i.flags & 65011712),
          (i.return = e),
          (i = i.sibling);
    else
      for (i = e.child; i !== null; )
        (n |= i.lanes | i.childLanes),
          (a |= i.subtreeFlags),
          (a |= i.flags),
          (i.return = e),
          (i = i.sibling);
    return (e.subtreeFlags |= a), (e.childLanes = n), t;
  }
  function av(e, t, n) {
    var a = t.pendingProps;
    switch ((zo(t), t.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return _e(t), null;
      case 1:
        return _e(t), null;
      case 3:
        return (
          (n = t.stateNode),
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Jt(Xe),
          ve(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (xl(t)
              ? It(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), vf())),
          _e(t),
          null
        );
      case 26:
        return (
          (n = t.memoizedState),
          e === null
            ? (It(t),
              n !== null ? (_e(t), Hd(t, n)) : (_e(t), (t.flags &= -16777217)))
            : n
              ? n !== e.memoizedState
                ? (It(t), _e(t), Hd(t, n))
                : (_e(t), (t.flags &= -16777217))
              : (e.memoizedProps !== a && It(t), _e(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        Vt(t), (n = Ce.current);
        var i = t.type;
        if (e !== null && t.stateNode != null) e.memoizedProps !== a && It(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(o(166));
            return _e(t), null;
          }
          (e = Re.current),
            xl(t) ? gf(t) : ((e = Hm(i, a, n)), (t.stateNode = e), It(t));
        }
        return _e(t), null;
      case 5:
        if ((Vt(t), (n = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && It(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(o(166));
            return _e(t), null;
          }
          if (((e = Re.current), xl(t))) gf(t);
          else {
            switch (((i = vr(Ce.current)), e)) {
              case 1:
                e = i.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                e = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    e = i.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    e = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n,
                    );
                    break;
                  case "script":
                    (e = i.createElement("div")),
                      (e.innerHTML = "<script><\/script>"),
                      (e = e.removeChild(e.firstChild));
                    break;
                  case "select":
                    (e =
                      typeof a.is == "string"
                        ? i.createElement("select", { is: a.is })
                        : i.createElement("select")),
                      a.multiple
                        ? (e.multiple = !0)
                        : a.size && (e.size = a.size);
                    break;
                  default:
                    e =
                      typeof a.is == "string"
                        ? i.createElement(n, { is: a.is })
                        : i.createElement(n);
                }
            }
            (e[tt] = t), (e[lt] = a);
            e: for (i = t.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) e.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                (i.child.return = i), (i = i.child);
                continue;
              }
              if (i === t) break e;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === t) break e;
                i = i.return;
              }
              (i.sibling.return = i.return), (i = i.sibling);
            }
            t.stateNode = e;
            e: switch ((et(e, n, a), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!a.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && It(t);
          }
        }
        return _e(t), (t.flags &= -16777217), null;
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== a && It(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(o(166));
          if (((e = Ce.current), xl(t))) {
            if (
              ((e = t.stateNode),
              (n = t.memoizedProps),
              (a = null),
              (i = at),
              i !== null)
            )
              switch (i.tag) {
                case 27:
                case 5:
                  a = i.memoizedProps;
              }
            (e[tt] = t),
              (e = !!(
                e.nodeValue === n ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Rm(e.nodeValue, n)
              )),
              e || Jn(t);
          } else (e = vr(e).createTextNode(a)), (e[tt] = t), (t.stateNode = e);
        }
        return _e(t), null;
      case 13:
        if (
          ((a = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((i = xl(t)), a !== null && a.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(o(318));
              if (
                ((i = t.memoizedState),
                (i = i !== null ? i.dehydrated : null),
                !i)
              )
                throw Error(o(317));
              i[tt] = t;
            } else
              Sl(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            _e(t), (i = !1);
          } else
            (i = vf()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = i),
              (i = !0);
          if (!i) return t.flags & 256 ? (Ft(t), t) : (Ft(t), null);
        }
        if ((Ft(t), (t.flags & 128) !== 0)) return (t.lanes = n), t;
        if (
          ((n = a !== null), (e = e !== null && e.memoizedState !== null), n)
        ) {
          (a = t.child),
            (i = null),
            a.alternate !== null &&
              a.alternate.memoizedState !== null &&
              a.alternate.memoizedState.cachePool !== null &&
              (i = a.alternate.memoizedState.cachePool.pool);
          var r = null;
          a.memoizedState !== null &&
            a.memoizedState.cachePool !== null &&
            (r = a.memoizedState.cachePool.pool),
            r !== i && (a.flags |= 2048);
        }
        return (
          n !== e && n && (t.child.flags |= 8192),
          lr(t, t.updateQueue),
          _e(t),
          null
        );
      case 4:
        return ve(), e === null && Gu(t.stateNode.containerInfo), _e(t), null;
      case 10:
        return Jt(t.type), _e(t), null;
      case 19:
        if ((we(Qe), (i = t.memoizedState), i === null)) return _e(t), null;
        if (((a = (t.flags & 128) !== 0), (r = i.rendering), r === null))
          if (a) kl(i, !1);
          else {
            if (Le !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((r = Pi(e)), r !== null)) {
                  for (
                    t.flags |= 128,
                      kl(i, !1),
                      e = r.updateQueue,
                      t.updateQueue = e,
                      lr(t, e),
                      t.subtreeFlags = 0,
                      e = n,
                      n = t.child;
                    n !== null;
                  )
                    mf(n, e), (n = n.sibling);
                  return ge(Qe, (Qe.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            i.tail !== null &&
              Ot() > or &&
              ((t.flags |= 128), (a = !0), kl(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!a)
            if (((e = Pi(r)), e !== null)) {
              if (
                ((t.flags |= 128),
                (a = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                lr(t, e),
                kl(i, !0),
                i.tail === null &&
                  i.tailMode === "hidden" &&
                  !r.alternate &&
                  !xe)
              )
                return _e(t), null;
            } else
              2 * Ot() - i.renderingStartTime > or &&
                n !== 536870912 &&
                ((t.flags |= 128), (a = !0), kl(i, !1), (t.lanes = 4194304));
          i.isBackwards
            ? ((r.sibling = t.child), (t.child = r))
            : ((e = i.last),
              e !== null ? (e.sibling = r) : (t.child = r),
              (i.last = r));
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = Ot()),
            (t.sibling = null),
            (e = Qe.current),
            ge(Qe, a ? (e & 1) | 2 : e & 1),
            t)
          : (_e(t), null);
      case 22:
      case 23:
        return (
          Ft(t),
          Xo(),
          (a = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
            ? (n & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (_e(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : _e(t),
          (n = t.updateQueue),
          n !== null && lr(t, n.retryQueue),
          (n = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (n = e.memoizedState.cachePool.pool),
          (a = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          a !== n && (t.flags |= 2048),
          e !== null && we(Wn),
          null
        );
      case 24:
        return (
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          Jt(Xe),
          _e(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function lv(e, t) {
    switch ((zo(t), t.tag)) {
      case 1:
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Jt(Xe),
          ve(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Vt(t), null;
      case 13:
        if (
          (Ft(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(o(340));
          Sl();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return we(Qe), null;
      case 4:
        return ve(), null;
      case 10:
        return Jt(t.type), null;
      case 22:
      case 23:
        return (
          Ft(t),
          Xo(),
          e !== null && we(Wn),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return Jt(Xe), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function qd(e, t) {
    switch ((zo(t), t.tag)) {
      case 3:
        Jt(Xe), ve();
        break;
      case 26:
      case 27:
      case 5:
        Vt(t);
        break;
      case 4:
        ve();
        break;
      case 13:
        Ft(t);
        break;
      case 19:
        we(Qe);
        break;
      case 10:
        Jt(t.type);
        break;
      case 22:
      case 23:
        Ft(t), Xo(), e !== null && we(Wn);
        break;
      case 24:
        Jt(Xe);
    }
  }
  function Ll(e, t) {
    try {
      var n = t.updateQueue,
        a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var i = a.next;
        n = i;
        do {
          if ((n.tag & e) === e) {
            a = void 0;
            var r = n.create,
              m = n.inst;
            (a = r()), (m.destroy = a);
          }
          n = n.next;
        } while (n !== i);
      }
    } catch (g) {
      Me(t, t.return, g);
    }
  }
  function bn(e, t, n) {
    try {
      var a = t.updateQueue,
        i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var r = i.next;
        a = r;
        do {
          if ((a.tag & e) === e) {
            var m = a.inst,
              g = m.destroy;
            if (g !== void 0) {
              (m.destroy = void 0), (i = t);
              var b = n,
                j = g;
              try {
                j();
              } catch (_) {
                Me(i, b, _);
              }
            }
          }
          a = a.next;
        } while (a !== r);
      }
    } catch (_) {
      Me(t, t.return, _);
    }
  }
  function Vd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Cf(t, n);
      } catch (a) {
        Me(e, e.return, a);
      }
    }
  }
  function Gd(e, t, n) {
    (n.props = Pn(e.type, e.memoizedProps)), (n.state = e.memoizedState);
    try {
      n.componentWillUnmount();
    } catch (a) {
      Me(e, t, a);
    }
  }
  function Hl(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        typeof n == "function" ? (e.refCleanup = n(a)) : (n.current = a);
      }
    } catch (i) {
      Me(e, t, i);
    }
  }
  function Bt(e, t) {
    var n = e.ref,
      a = e.refCleanup;
    if (n !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (i) {
          Me(e, t, i);
        } finally {
          (e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (i) {
          Me(e, t, i);
        }
      else n.current = null;
  }
  function Yd(e) {
    var t = e.type,
      n = e.memoizedProps,
      a = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && a.focus();
          break e;
        case "img":
          n.src ? (a.src = n.src) : n.srcSet && (a.srcset = n.srcSet);
      }
    } catch (i) {
      Me(e, e.return, i);
    }
  }
  function bu(e, t, n) {
    try {
      var a = e.stateNode;
      jv(a, e.type, n, t), (a[lt] = t);
    } catch (i) {
      Me(e, e.return, i);
    }
  }
  function Xd(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && An(e.type)) ||
      e.tag === 4
    );
  }
  function yu(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Xd(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (
          (e.tag === 27 && An(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function xu(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6)
      (e = e.stateNode),
        t
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === "HTML"
                ? n.ownerDocument.body
                : n
            ).insertBefore(e, t)
          : ((t =
              n.nodeType === 9
                ? n.body
                : n.nodeName === "HTML"
                  ? n.ownerDocument.body
                  : n),
            t.appendChild(e),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = pr));
    else if (
      a !== 4 &&
      (a === 27 && An(e.type) && ((n = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (xu(e, t, n), e = e.sibling; e !== null; )
        xu(e, t, n), (e = e.sibling);
  }
  function ir(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (
      a !== 4 &&
      (a === 27 && An(e.type) && (n = e.stateNode), (e = e.child), e !== null)
    )
      for (ir(e, t, n), e = e.sibling; e !== null; )
        ir(e, t, n), (e = e.sibling);
  }
  function Qd(e) {
    var t = e.stateNode,
      n = e.memoizedProps;
    try {
      for (var a = e.type, i = t.attributes; i.length; )
        t.removeAttributeNode(i[0]);
      et(t, a, n), (t[tt] = e), (t[lt] = n);
    } catch (r) {
      Me(e, e.return, r);
    }
  }
  var Pt = !1,
    qe = !1,
    Su = !1,
    Zd = typeof WeakSet == "function" ? WeakSet : Set,
    $e = null;
  function iv(e, t) {
    if (((e = e.containerInfo), (Qu = Er), (e = nf(e)), yo(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var a = n.getSelection && n.getSelection();
          if (a && a.rangeCount !== 0) {
            n = a.anchorNode;
            var i = a.anchorOffset,
              r = a.focusNode;
            a = a.focusOffset;
            try {
              n.nodeType, r.nodeType;
            } catch {
              n = null;
              break e;
            }
            var m = 0,
              g = -1,
              b = -1,
              j = 0,
              _ = 0,
              L = e,
              C = null;
            t: for (;;) {
              for (
                var D;
                L !== n || (i !== 0 && L.nodeType !== 3) || (g = m + i),
                  L !== r || (a !== 0 && L.nodeType !== 3) || (b = m + a),
                  L.nodeType === 3 && (m += L.nodeValue.length),
                  (D = L.firstChild) !== null;
              )
                (C = L), (L = D);
              for (;;) {
                if (L === e) break t;
                if (
                  (C === n && ++j === i && (g = m),
                  C === r && ++_ === a && (b = m),
                  (D = L.nextSibling) !== null)
                )
                  break;
                (L = C), (C = L.parentNode);
              }
              L = D;
            }
            n = g === -1 || b === -1 ? null : { start: g, end: b };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Zu = { focusedElem: e, selectionRange: n }, Er = !1, $e = t;
      $e !== null;
    )
      if (
        ((t = $e), (e = t.child), (t.subtreeFlags & 1024) !== 0 && e !== null)
      )
        (e.return = t), ($e = e);
      else
        for (; $e !== null; ) {
          switch (((t = $e), (r = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && r !== null) {
                (e = void 0),
                  (n = t),
                  (i = r.memoizedProps),
                  (r = r.memoizedState),
                  (a = n.stateNode);
                try {
                  var se = Pn(n.type, i, n.elementType === n.type);
                  (e = a.getSnapshotBeforeUpdate(se, r)),
                    (a.__reactInternalSnapshotBeforeUpdate = e);
                } catch (re) {
                  Me(n, n.return, re);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)
                )
                  $u(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      $u(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(o(163));
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), ($e = e);
            break;
          }
          $e = t.return;
        }
  }
  function Kd(e, t, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        yn(e, n), a & 4 && Ll(5, n);
        break;
      case 1:
        if ((yn(e, n), a & 4))
          if (((e = n.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (m) {
              Me(n, n.return, m);
            }
          else {
            var i = Pn(n.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (m) {
              Me(n, n.return, m);
            }
          }
        a & 64 && Vd(n), a & 512 && Hl(n, n.return);
        break;
      case 3:
        if ((yn(e, n), a & 64 && ((e = n.updateQueue), e !== null))) {
          if (((t = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          try {
            Cf(e, t);
          } catch (m) {
            Me(n, n.return, m);
          }
        }
        break;
      case 27:
        t === null && a & 4 && Qd(n);
      case 26:
      case 5:
        yn(e, n), t === null && a & 4 && Yd(n), a & 512 && Hl(n, n.return);
        break;
      case 12:
        yn(e, n);
        break;
      case 13:
        yn(e, n),
          a & 4 && Fd(e, n),
          a & 64 &&
            ((e = n.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((n = hv.bind(null, n)), Rv(e, n))));
        break;
      case 22:
        if (((a = n.memoizedState !== null || Pt), !a)) {
          (t = (t !== null && t.memoizedState !== null) || qe), (i = Pt);
          var r = qe;
          (Pt = a),
            (qe = t) && !r ? xn(e, n, (n.subtreeFlags & 8772) !== 0) : yn(e, n),
            (Pt = i),
            (qe = r);
        }
        break;
      case 30:
        break;
      default:
        yn(e, n);
    }
  }
  function Jd(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Jd(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && Pr(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var Oe = null,
    ot = !1;
  function en(e, t, n) {
    for (n = n.child; n !== null; ) $d(e, t, n), (n = n.sibling);
  }
  function $d(e, t, n) {
    if (st && typeof st.onCommitFiberUnmount == "function")
      try {
        st.onCommitFiberUnmount(rl, n);
      } catch {}
    switch (n.tag) {
      case 26:
        qe || Bt(n, t),
          en(e, t, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n));
        break;
      case 27:
        qe || Bt(n, t);
        var a = Oe,
          i = ot;
        An(n.type) && ((Oe = n.stateNode), (ot = !1)),
          en(e, t, n),
          Jl(n.stateNode),
          (Oe = a),
          (ot = i);
        break;
      case 5:
        qe || Bt(n, t);
      case 6:
        if (
          ((a = Oe),
          (i = ot),
          (Oe = null),
          en(e, t, n),
          (Oe = a),
          (ot = i),
          Oe !== null)
        )
          if (ot)
            try {
              (Oe.nodeType === 9
                ? Oe.body
                : Oe.nodeName === "HTML"
                  ? Oe.ownerDocument.body
                  : Oe
              ).removeChild(n.stateNode);
            } catch (r) {
              Me(n, t, r);
            }
          else
            try {
              Oe.removeChild(n.stateNode);
            } catch (r) {
              Me(n, t, r);
            }
        break;
      case 18:
        Oe !== null &&
          (ot
            ? ((e = Oe),
              km(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                    ? e.ownerDocument.body
                    : e,
                n.stateNode,
              ),
              ni(e))
            : km(Oe, n.stateNode));
        break;
      case 4:
        (a = Oe),
          (i = ot),
          (Oe = n.stateNode.containerInfo),
          (ot = !0),
          en(e, t, n),
          (Oe = a),
          (ot = i);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        qe || bn(2, n, t), qe || bn(4, n, t), en(e, t, n);
        break;
      case 1:
        qe ||
          (Bt(n, t),
          (a = n.stateNode),
          typeof a.componentWillUnmount == "function" && Gd(n, t, a)),
          en(e, t, n);
        break;
      case 21:
        en(e, t, n);
        break;
      case 22:
        (qe = (a = qe) || n.memoizedState !== null), en(e, t, n), (qe = a);
        break;
      default:
        en(e, t, n);
    }
  }
  function Fd(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        ni(e);
      } catch (n) {
        Me(t, t.return, n);
      }
  }
  function rv(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Zd()), t;
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new Zd()),
          t
        );
      default:
        throw Error(o(435, e.tag));
    }
  }
  function wu(e, t) {
    var n = rv(e);
    t.forEach(function (a) {
      var i = gv.bind(null, e, a);
      n.has(a) || (n.add(a), a.then(i, i));
    });
  }
  function mt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var i = n[a],
          r = e,
          m = t,
          g = m;
        e: for (; g !== null; ) {
          switch (g.tag) {
            case 27:
              if (An(g.type)) {
                (Oe = g.stateNode), (ot = !1);
                break e;
              }
              break;
            case 5:
              (Oe = g.stateNode), (ot = !1);
              break e;
            case 3:
            case 4:
              (Oe = g.stateNode.containerInfo), (ot = !0);
              break e;
          }
          g = g.return;
        }
        if (Oe === null) throw Error(o(160));
        $d(r, m, i),
          (Oe = null),
          (ot = !1),
          (r = i.alternate),
          r !== null && (r.return = null),
          (i.return = null);
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; ) Wd(t, e), (t = t.sibling);
  }
  var Mt = null;
  function Wd(e, t) {
    var n = e.alternate,
      a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        mt(t, e),
          ht(e),
          a & 4 && (bn(3, e, e.return), Ll(3, e), bn(5, e, e.return));
        break;
      case 1:
        mt(t, e),
          ht(e),
          a & 512 && (qe || n === null || Bt(n, n.return)),
          a & 64 &&
            Pt &&
            ((e = e.updateQueue),
            e !== null &&
              ((a = e.callbacks),
              a !== null &&
                ((n = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = n === null ? a : n.concat(a)))));
        break;
      case 26:
        var i = Mt;
        if (
          (mt(t, e),
          ht(e),
          a & 512 && (qe || n === null || Bt(n, n.return)),
          a & 4)
        ) {
          var r = n !== null ? n.memoizedState : null;
          if (((a = e.memoizedState), n === null))
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  (a = e.type),
                    (n = e.memoizedProps),
                    (i = i.ownerDocument || i);
                  t: switch (a) {
                    case "title":
                      (r = i.getElementsByTagName("title")[0]),
                        (!r ||
                          r[sl] ||
                          r[tt] ||
                          r.namespaceURI === "http://www.w3.org/2000/svg" ||
                          r.hasAttribute("itemprop")) &&
                          ((r = i.createElement(a)),
                          i.head.insertBefore(
                            r,
                            i.querySelector("head > title"),
                          )),
                        et(r, a, n),
                        (r[tt] = e),
                        Ke(r),
                        (a = r);
                      break e;
                    case "link":
                      var m = Qm("link", "href", i).get(a + (n.href || ""));
                      if (m) {
                        for (var g = 0; g < m.length; g++)
                          if (
                            ((r = m[g]),
                            r.getAttribute("href") ===
                              (n.href == null || n.href === ""
                                ? null
                                : n.href) &&
                              r.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              r.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              r.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            m.splice(g, 1);
                            break t;
                          }
                      }
                      (r = i.createElement(a)),
                        et(r, a, n),
                        i.head.appendChild(r);
                      break;
                    case "meta":
                      if (
                        (m = Qm("meta", "content", i).get(
                          a + (n.content || ""),
                        ))
                      ) {
                        for (g = 0; g < m.length; g++)
                          if (
                            ((r = m[g]),
                            r.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              r.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              r.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              r.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              r.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            m.splice(g, 1);
                            break t;
                          }
                      }
                      (r = i.createElement(a)),
                        et(r, a, n),
                        i.head.appendChild(r);
                      break;
                    default:
                      throw Error(o(468, a));
                  }
                  (r[tt] = e), Ke(r), (a = r);
                }
                e.stateNode = a;
              } else Zm(i, e.type, e.stateNode);
            else e.stateNode = Xm(i, a, e.memoizedProps);
          else
            r !== a
              ? (r === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : r.count--,
                a === null
                  ? Zm(i, e.type, e.stateNode)
                  : Xm(i, a, e.memoizedProps))
              : a === null &&
                e.stateNode !== null &&
                bu(e, e.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        mt(t, e),
          ht(e),
          a & 512 && (qe || n === null || Bt(n, n.return)),
          n !== null && a & 4 && bu(e, e.memoizedProps, n.memoizedProps);
        break;
      case 5:
        if (
          (mt(t, e),
          ht(e),
          a & 512 && (qe || n === null || Bt(n, n.return)),
          e.flags & 32)
        ) {
          i = e.stateNode;
          try {
            ya(i, "");
          } catch (D) {
            Me(e, e.return, D);
          }
        }
        a & 4 &&
          e.stateNode != null &&
          ((i = e.memoizedProps), bu(e, i, n !== null ? n.memoizedProps : i)),
          a & 1024 && (Su = !0);
        break;
      case 6:
        if ((mt(t, e), ht(e), a & 4)) {
          if (e.stateNode === null) throw Error(o(162));
          (a = e.memoizedProps), (n = e.stateNode);
          try {
            n.nodeValue = a;
          } catch (D) {
            Me(e, e.return, D);
          }
        }
        break;
      case 3:
        if (
          ((xr = null),
          (i = Mt),
          (Mt = br(t.containerInfo)),
          mt(t, e),
          (Mt = i),
          ht(e),
          a & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            ni(t.containerInfo);
          } catch (D) {
            Me(e, e.return, D);
          }
        Su && ((Su = !1), Id(e));
        break;
      case 4:
        (a = Mt),
          (Mt = br(e.stateNode.containerInfo)),
          mt(t, e),
          ht(e),
          (Mt = a);
        break;
      case 12:
        mt(t, e), ht(e);
        break;
      case 13:
        mt(t, e),
          ht(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (Cu = Ot()),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), wu(e, a)));
        break;
      case 22:
        i = e.memoizedState !== null;
        var b = n !== null && n.memoizedState !== null,
          j = Pt,
          _ = qe;
        if (
          ((Pt = j || i),
          (qe = _ || b),
          mt(t, e),
          (qe = _),
          (Pt = j),
          ht(e),
          a & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = i ? t._visibility & -2 : t._visibility | 1,
              i && (n === null || b || Pt || qe || ea(e)),
              n = null,
              t = e;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                b = n = t;
                try {
                  if (((r = b.stateNode), i))
                    (m = r.style),
                      typeof m.setProperty == "function"
                        ? m.setProperty("display", "none", "important")
                        : (m.display = "none");
                  else {
                    g = b.stateNode;
                    var L = b.memoizedProps.style,
                      C =
                        L != null && L.hasOwnProperty("display")
                          ? L.display
                          : null;
                    g.style.display =
                      C == null || typeof C == "boolean" ? "" : ("" + C).trim();
                  }
                } catch (D) {
                  Me(b, b.return, D);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                b = t;
                try {
                  b.stateNode.nodeValue = i ? "" : b.memoizedProps;
                } catch (D) {
                  Me(b, b.return, D);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              n === t && (n = null), (t = t.return);
            }
            n === t && (n = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        a & 4 &&
          ((a = e.updateQueue),
          a !== null &&
            ((n = a.retryQueue),
            n !== null && ((a.retryQueue = null), wu(e, n))));
        break;
      case 19:
        mt(t, e),
          ht(e),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), wu(e, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        mt(t, e), ht(e);
    }
  }
  function ht(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, a = e.return; a !== null; ) {
          if (Xd(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        if (n == null) throw Error(o(160));
        switch (n.tag) {
          case 27:
            var i = n.stateNode,
              r = yu(e);
            ir(e, r, i);
            break;
          case 5:
            var m = n.stateNode;
            n.flags & 32 && (ya(m, ""), (n.flags &= -33));
            var g = yu(e);
            ir(e, g, m);
            break;
          case 3:
          case 4:
            var b = n.stateNode.containerInfo,
              j = yu(e);
            xu(e, j, b);
            break;
          default:
            throw Error(o(161));
        }
      } catch (_) {
        Me(e, e.return, _);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Id(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Id(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling);
      }
  }
  function yn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) Kd(e, t.alternate, t), (t = t.sibling);
  }
  function ea(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          bn(4, t, t.return), ea(t);
          break;
        case 1:
          Bt(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && Gd(t, t.return, n),
            ea(t);
          break;
        case 27:
          Jl(t.stateNode);
        case 26:
        case 5:
          Bt(t, t.return), ea(t);
          break;
        case 22:
          t.memoizedState === null && ea(t);
          break;
        case 30:
          ea(t);
          break;
        default:
          ea(t);
      }
      e = e.sibling;
    }
  }
  function xn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
        i = e,
        r = t,
        m = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          xn(i, r, n), Ll(4, r);
          break;
        case 1:
          if (
            (xn(i, r, n),
            (a = r),
            (i = a.stateNode),
            typeof i.componentDidMount == "function")
          )
            try {
              i.componentDidMount();
            } catch (j) {
              Me(a, a.return, j);
            }
          if (((a = r), (i = a.updateQueue), i !== null)) {
            var g = a.stateNode;
            try {
              var b = i.shared.hiddenCallbacks;
              if (b !== null)
                for (i.shared.hiddenCallbacks = null, i = 0; i < b.length; i++)
                  Tf(b[i], g);
            } catch (j) {
              Me(a, a.return, j);
            }
          }
          n && m & 64 && Vd(r), Hl(r, r.return);
          break;
        case 27:
          Qd(r);
        case 26:
        case 5:
          xn(i, r, n), n && a === null && m & 4 && Yd(r), Hl(r, r.return);
          break;
        case 12:
          xn(i, r, n);
          break;
        case 13:
          xn(i, r, n), n && m & 4 && Fd(i, r);
          break;
        case 22:
          r.memoizedState === null && xn(i, r, n), Hl(r, r.return);
          break;
        case 30:
          break;
        default:
          xn(i, r, n);
      }
      t = t.sibling;
    }
  }
  function Eu(e, t) {
    var n = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (n = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== n && (e != null && e.refCount++, n != null && Nl(n));
  }
  function Nu(e, t) {
    (e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Nl(e));
  }
  function kt(e, t, n, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) Pd(e, t, n, a), (t = t.sibling);
  }
  function Pd(e, t, n, a) {
    var i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        kt(e, t, n, a), i & 2048 && Ll(9, t);
        break;
      case 1:
        kt(e, t, n, a);
        break;
      case 3:
        kt(e, t, n, a),
          i & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && Nl(e)));
        break;
      case 12:
        if (i & 2048) {
          kt(e, t, n, a), (e = t.stateNode);
          try {
            var r = t.memoizedProps,
              m = r.id,
              g = r.onPostCommit;
            typeof g == "function" &&
              g(
                m,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0,
              );
          } catch (b) {
            Me(t, t.return, b);
          }
        } else kt(e, t, n, a);
        break;
      case 13:
        kt(e, t, n, a);
        break;
      case 23:
        break;
      case 22:
        (r = t.stateNode),
          (m = t.alternate),
          t.memoizedState !== null
            ? r._visibility & 2
              ? kt(e, t, n, a)
              : ql(e, t)
            : r._visibility & 2
              ? kt(e, t, n, a)
              : ((r._visibility |= 2),
                La(e, t, n, a, (t.subtreeFlags & 10256) !== 0)),
          i & 2048 && Eu(m, t);
        break;
      case 24:
        kt(e, t, n, a), i & 2048 && Nu(t.alternate, t);
        break;
      default:
        kt(e, t, n, a);
    }
  }
  function La(e, t, n, a, i) {
    for (i = i && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var r = e,
        m = t,
        g = n,
        b = a,
        j = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          La(r, m, g, b, i), Ll(8, m);
          break;
        case 23:
          break;
        case 22:
          var _ = m.stateNode;
          m.memoizedState !== null
            ? _._visibility & 2
              ? La(r, m, g, b, i)
              : ql(r, m)
            : ((_._visibility |= 2), La(r, m, g, b, i)),
            i && j & 2048 && Eu(m.alternate, m);
          break;
        case 24:
          La(r, m, g, b, i), i && j & 2048 && Nu(m.alternate, m);
          break;
        default:
          La(r, m, g, b, i);
      }
      t = t.sibling;
    }
  }
  function ql(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e,
          a = t,
          i = a.flags;
        switch (a.tag) {
          case 22:
            ql(n, a), i & 2048 && Eu(a.alternate, a);
            break;
          case 24:
            ql(n, a), i & 2048 && Nu(a.alternate, a);
            break;
          default:
            ql(n, a);
        }
        t = t.sibling;
      }
  }
  var Vl = 8192;
  function Ha(e) {
    if (e.subtreeFlags & Vl)
      for (e = e.child; e !== null; ) em(e), (e = e.sibling);
  }
  function em(e) {
    switch (e.tag) {
      case 26:
        Ha(e),
          e.flags & Vl &&
            e.memoizedState !== null &&
            Qv(Mt, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        Ha(e);
        break;
      case 3:
      case 4:
        var t = Mt;
        (Mt = br(e.stateNode.containerInfo)), Ha(e), (Mt = t);
        break;
      case 22:
        e.memoizedState === null &&
          ((t = e.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = Vl), (Vl = 16777216), Ha(e), (Vl = t))
            : Ha(e));
        break;
      default:
        Ha(e);
    }
  }
  function tm(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do (t = e.sibling), (e.sibling = null), (e = t);
      while (e !== null);
    }
  }
  function Gl(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          ($e = a), am(a, e);
        }
      tm(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) nm(e), (e = e.sibling);
  }
  function nm(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Gl(e), e.flags & 2048 && bn(9, e, e.return);
        break;
      case 3:
        Gl(e);
        break;
      case 12:
        Gl(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), rr(e))
          : Gl(e);
        break;
      default:
        Gl(e);
    }
  }
  function rr(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          ($e = a), am(a, e);
        }
      tm(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          bn(8, t, t.return), rr(t);
          break;
        case 22:
          (n = t.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), rr(t));
          break;
        default:
          rr(t);
      }
      e = e.sibling;
    }
  }
  function am(e, t) {
    for (; $e !== null; ) {
      var n = $e;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          bn(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Nl(n.memoizedState.cache);
      }
      if (((a = n.child), a !== null)) (a.return = n), ($e = a);
      else
        e: for (n = e; $e !== null; ) {
          a = $e;
          var i = a.sibling,
            r = a.return;
          if ((Jd(a), a === n)) {
            $e = null;
            break e;
          }
          if (i !== null) {
            (i.return = r), ($e = i);
            break e;
          }
          $e = r;
        }
    }
  }
  var ov = {
      getCacheForType: function (e) {
        var t = nt(Xe),
          n = t.data.get(e);
        return n === void 0 && ((n = e()), t.data.set(e, n)), n;
      },
    },
    uv = typeof WeakMap == "function" ? WeakMap : Map,
    Ee = 0,
    ze = null,
    me = null,
    pe = 0,
    Ne = 0,
    gt = null,
    Sn = !1,
    qa = !1,
    ju = !1,
    tn = 0,
    Le = 0,
    wn = 0,
    ta = 0,
    Au = 0,
    jt = 0,
    Va = 0,
    Yl = null,
    ut = null,
    Tu = !1,
    Cu = 0,
    or = 1 / 0,
    ur = null,
    En = null,
    Pe = 0,
    Nn = null,
    Ga = null,
    Ya = 0,
    Mu = 0,
    zu = null,
    lm = null,
    Xl = 0,
    Du = null;
  function pt() {
    if ((Ee & 2) !== 0 && pe !== 0) return pe & -pe;
    if (R.T !== null) {
      var e = za;
      return e !== 0 ? e : Lu();
    }
    return yc();
  }
  function im() {
    jt === 0 && (jt = (pe & 536870912) === 0 || xe ? gc() : 536870912);
    var e = Nt.current;
    return e !== null && (e.flags |= 32), jt;
  }
  function vt(e, t, n) {
    ((e === ze && (Ne === 2 || Ne === 9)) || e.cancelPendingCommit !== null) &&
      (Xa(e, 0), jn(e, pe, jt, !1)),
      ul(e, n),
      ((Ee & 2) === 0 || e !== ze) &&
        (e === ze &&
          ((Ee & 2) === 0 && (ta |= n), Le === 4 && jn(e, pe, jt, !1)),
        Lt(e));
  }
  function rm(e, t, n) {
    if ((Ee & 6) !== 0) throw Error(o(327));
    var a = (!n && (t & 124) === 0 && (t & e.expiredLanes) === 0) || ol(e, t),
      i = a ? fv(e, t) : Uu(e, t, !0),
      r = a;
    do {
      if (i === 0) {
        qa && !a && jn(e, t, 0, !1);
        break;
      } else {
        if (((n = e.current.alternate), r && !sv(n))) {
          (i = Uu(e, t, !1)), (r = !1);
          continue;
        }
        if (i === 2) {
          if (((r = t), e.errorRecoveryDisabledLanes & r)) var m = 0;
          else
            (m = e.pendingLanes & -536870913),
              (m = m !== 0 ? m : m & 536870912 ? 536870912 : 0);
          if (m !== 0) {
            t = m;
            e: {
              var g = e;
              i = Yl;
              var b = g.current.memoizedState.isDehydrated;
              if ((b && (Xa(g, m).flags |= 256), (m = Uu(g, m, !1)), m !== 2)) {
                if (ju && !b) {
                  (g.errorRecoveryDisabledLanes |= r), (ta |= r), (i = 4);
                  break e;
                }
                (r = ut),
                  (ut = i),
                  r !== null && (ut === null ? (ut = r) : ut.push.apply(ut, r));
              }
              i = m;
            }
            if (((r = !1), i !== 2)) continue;
          }
        }
        if (i === 1) {
          Xa(e, 0), jn(e, t, 0, !0);
          break;
        }
        e: {
          switch (((a = e), (r = i), r)) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              jn(a, t, jt, !Sn);
              break e;
            case 2:
              ut = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && ((i = Cu + 300 - Ot()), 10 < i)) {
            if ((jn(a, t, jt, !Sn), yi(a, 0, !0) !== 0)) break e;
            a.timeoutHandle = _m(
              om.bind(null, a, n, ut, ur, Tu, t, jt, ta, Va, Sn, r, 2, -0, 0),
              i,
            );
            break e;
          }
          om(a, n, ut, ur, Tu, t, jt, ta, Va, Sn, r, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Lt(e);
  }
  function om(e, t, n, a, i, r, m, g, b, j, _, L, C, D) {
    if (
      ((e.timeoutHandle = -1),
      (L = t.subtreeFlags),
      (L & 8192 || (L & 16785408) === 16785408) &&
        ((Wl = { stylesheets: null, count: 0, unsuspend: Xv }),
        em(t),
        (L = Zv()),
        L !== null))
    ) {
      (e.cancelPendingCommit = L(
        hm.bind(null, e, t, r, n, a, i, m, g, b, _, 1, C, D),
      )),
        jn(e, r, m, !j);
      return;
    }
    hm(e, t, r, n, a, i, m, g, b);
  }
  function sv(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        t.flags & 16384 &&
        ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var a = 0; a < n.length; a++) {
          var i = n[a],
            r = i.getSnapshot;
          i = i.value;
          try {
            if (!ft(r(), i)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function jn(e, t, n, a) {
    (t &= ~Au),
      (t &= ~ta),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      a && (e.warmLanes |= t),
      (a = e.expirationTimes);
    for (var i = t; 0 < i; ) {
      var r = 31 - ct(i),
        m = 1 << r;
      (a[r] = -1), (i &= ~m);
    }
    n !== 0 && vc(e, n, t);
  }
  function sr() {
    return (Ee & 6) === 0 ? (Ql(0), !1) : !0;
  }
  function Ru() {
    if (me !== null) {
      if (Ne === 0) var e = me.return;
      else (e = me), (Kt = $n = null), $o(e), (Ba = null), (_l = 0), (e = me);
      for (; e !== null; ) qd(e.alternate, e), (e = e.return);
      me = null;
    }
  }
  function Xa(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && ((e.timeoutHandle = -1), Tv(n)),
      (n = e.cancelPendingCommit),
      n !== null && ((e.cancelPendingCommit = null), n()),
      Ru(),
      (ze = e),
      (me = n = Xt(e.current, null)),
      (pe = t),
      (Ne = 0),
      (gt = null),
      (Sn = !1),
      (qa = ol(e, t)),
      (ju = !1),
      (Va = jt = Au = ta = wn = Le = 0),
      (ut = Yl = null),
      (Tu = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var i = 31 - ct(a),
          r = 1 << i;
        (t |= e[i]), (a &= ~r);
      }
    return (tn = t), Di(), n;
  }
  function um(e, t) {
    (ce = null),
      (R.H = Fi),
      t === Al || t === qi
        ? ((t = jf()), (Ne = 3))
        : t === wf
          ? ((t = jf()), (Ne = 4))
          : (Ne =
              t === Ad
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (gt = t),
      me === null && ((Le = 1), tr(e, xt(t, e.current)));
  }
  function sm() {
    var e = R.H;
    return (R.H = Fi), e === null ? Fi : e;
  }
  function cm() {
    var e = R.A;
    return (R.A = ov), e;
  }
  function Ou() {
    (Le = 4),
      Sn || ((pe & 4194048) !== pe && Nt.current !== null) || (qa = !0),
      ((wn & 134217727) === 0 && (ta & 134217727) === 0) ||
        ze === null ||
        jn(ze, pe, jt, !1);
  }
  function Uu(e, t, n) {
    var a = Ee;
    Ee |= 2;
    var i = sm(),
      r = cm();
    (ze !== e || pe !== t) && ((ur = null), Xa(e, t)), (t = !1);
    var m = Le;
    e: do
      try {
        if (Ne !== 0 && me !== null) {
          var g = me,
            b = gt;
          switch (Ne) {
            case 8:
              Ru(), (m = 6);
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Nt.current === null && (t = !0);
              var j = Ne;
              if (((Ne = 0), (gt = null), Qa(e, g, b, j), n && qa)) {
                m = 0;
                break e;
              }
              break;
            default:
              (j = Ne), (Ne = 0), (gt = null), Qa(e, g, b, j);
          }
        }
        cv(), (m = Le);
        break;
      } catch (_) {
        um(e, _);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (Kt = $n = null),
      (Ee = a),
      (R.H = i),
      (R.A = r),
      me === null && ((ze = null), (pe = 0), Di()),
      m
    );
  }
  function cv() {
    for (; me !== null; ) fm(me);
  }
  function fv(e, t) {
    var n = Ee;
    Ee |= 2;
    var a = sm(),
      i = cm();
    ze !== e || pe !== t
      ? ((ur = null), (or = Ot() + 500), Xa(e, t))
      : (qa = ol(e, t));
    e: do
      try {
        if (Ne !== 0 && me !== null) {
          t = me;
          var r = gt;
          t: switch (Ne) {
            case 1:
              (Ne = 0), (gt = null), Qa(e, t, r, 1);
              break;
            case 2:
            case 9:
              if (Ef(r)) {
                (Ne = 0), (gt = null), dm(t);
                break;
              }
              (t = function () {
                (Ne !== 2 && Ne !== 9) || ze !== e || (Ne = 7), Lt(e);
              }),
                r.then(t, t);
              break e;
            case 3:
              Ne = 7;
              break e;
            case 4:
              Ne = 5;
              break e;
            case 7:
              Ef(r)
                ? ((Ne = 0), (gt = null), dm(t))
                : ((Ne = 0), (gt = null), Qa(e, t, r, 7));
              break;
            case 5:
              var m = null;
              switch (me.tag) {
                case 26:
                  m = me.memoizedState;
                case 5:
                case 27:
                  var g = me;
                  if (!m || Km(m)) {
                    (Ne = 0), (gt = null);
                    var b = g.sibling;
                    if (b !== null) me = b;
                    else {
                      var j = g.return;
                      j !== null ? ((me = j), cr(j)) : (me = null);
                    }
                    break t;
                  }
              }
              (Ne = 0), (gt = null), Qa(e, t, r, 5);
              break;
            case 6:
              (Ne = 0), (gt = null), Qa(e, t, r, 6);
              break;
            case 8:
              Ru(), (Le = 6);
              break e;
            default:
              throw Error(o(462));
          }
        }
        dv();
        break;
      } catch (_) {
        um(e, _);
      }
    while (!0);
    return (
      (Kt = $n = null),
      (R.H = a),
      (R.A = i),
      (Ee = n),
      me !== null ? 0 : ((ze = null), (pe = 0), Di(), Le)
    );
  }
  function dv() {
    for (; me !== null && !U0(); ) fm(me);
  }
  function fm(e) {
    var t = Ld(e.alternate, e, tn);
    (e.memoizedProps = e.pendingProps), t === null ? cr(e) : (me = t);
  }
  function dm(e) {
    var t = e,
      n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Rd(n, t, t.pendingProps, t.type, void 0, pe);
        break;
      case 11:
        t = Rd(n, t, t.pendingProps, t.type.render, t.ref, pe);
        break;
      case 5:
        $o(t);
      default:
        qd(n, t), (t = me = mf(t, tn)), (t = Ld(n, t, tn));
    }
    (e.memoizedProps = e.pendingProps), t === null ? cr(e) : (me = t);
  }
  function Qa(e, t, n, a) {
    (Kt = $n = null), $o(t), (Ba = null), (_l = 0);
    var i = t.return;
    try {
      if (tv(e, i, t, n, pe)) {
        (Le = 1), tr(e, xt(n, e.current)), (me = null);
        return;
      }
    } catch (r) {
      if (i !== null) throw ((me = i), r);
      (Le = 1), tr(e, xt(n, e.current)), (me = null);
      return;
    }
    t.flags & 32768
      ? (xe || a === 1
          ? (e = !0)
          : qa || (pe & 536870912) !== 0
            ? (e = !1)
            : ((Sn = e = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = Nt.current),
                a !== null && a.tag === 13 && (a.flags |= 16384))),
        mm(t, e))
      : cr(t);
  }
  function cr(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        mm(t, Sn);
        return;
      }
      e = t.return;
      var n = av(t.alternate, t, tn);
      if (n !== null) {
        me = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        me = t;
        return;
      }
      me = t = e;
    } while (t !== null);
    Le === 0 && (Le = 5);
  }
  function mm(e, t) {
    do {
      var n = lv(e.alternate, e);
      if (n !== null) {
        (n.flags &= 32767), (me = n);
        return;
      }
      if (
        ((n = e.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        me = e;
        return;
      }
      me = e = n;
    } while (e !== null);
    (Le = 6), (me = null);
  }
  function hm(e, t, n, a, i, r, m, g, b) {
    e.cancelPendingCommit = null;
    do fr();
    while (Pe !== 0);
    if ((Ee & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      if (
        ((r = t.lanes | t.childLanes),
        (r |= No),
        X0(e, n, r, m, g, b),
        e === ze && ((me = ze = null), (pe = 0)),
        (Ga = t),
        (Nn = e),
        (Ya = n),
        (Mu = r),
        (zu = i),
        (lm = a),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            pv(pi, function () {
              return ym(), null;
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (a = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        (a = R.T), (R.T = null), (i = K.p), (K.p = 2), (m = Ee), (Ee |= 4);
        try {
          iv(e, t, n);
        } finally {
          (Ee = m), (K.p = i), (R.T = a);
        }
      }
      (Pe = 1), gm(), pm(), vm();
    }
  }
  function gm() {
    if (Pe === 1) {
      Pe = 0;
      var e = Nn,
        t = Ga,
        n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        (n = R.T), (R.T = null);
        var a = K.p;
        K.p = 2;
        var i = Ee;
        Ee |= 4;
        try {
          Wd(t, e);
          var r = Zu,
            m = nf(e.containerInfo),
            g = r.focusedElem,
            b = r.selectionRange;
          if (
            m !== g &&
            g &&
            g.ownerDocument &&
            tf(g.ownerDocument.documentElement, g)
          ) {
            if (b !== null && yo(g)) {
              var j = b.start,
                _ = b.end;
              if ((_ === void 0 && (_ = j), "selectionStart" in g))
                (g.selectionStart = j),
                  (g.selectionEnd = Math.min(_, g.value.length));
              else {
                var L = g.ownerDocument || document,
                  C = (L && L.defaultView) || window;
                if (C.getSelection) {
                  var D = C.getSelection(),
                    se = g.textContent.length,
                    re = Math.min(b.start, se),
                    Te = b.end === void 0 ? re : Math.min(b.end, se);
                  !D.extend && re > Te && ((m = Te), (Te = re), (re = m));
                  var E = ef(g, re),
                    y = ef(g, Te);
                  if (
                    E &&
                    y &&
                    (D.rangeCount !== 1 ||
                      D.anchorNode !== E.node ||
                      D.anchorOffset !== E.offset ||
                      D.focusNode !== y.node ||
                      D.focusOffset !== y.offset)
                  ) {
                    var N = L.createRange();
                    N.setStart(E.node, E.offset),
                      D.removeAllRanges(),
                      re > Te
                        ? (D.addRange(N), D.extend(y.node, y.offset))
                        : (N.setEnd(y.node, y.offset), D.addRange(N));
                  }
                }
              }
            }
            for (L = [], D = g; (D = D.parentNode); )
              D.nodeType === 1 &&
                L.push({ element: D, left: D.scrollLeft, top: D.scrollTop });
            for (
              typeof g.focus == "function" && g.focus(), g = 0;
              g < L.length;
              g++
            ) {
              var B = L[g];
              (B.element.scrollLeft = B.left), (B.element.scrollTop = B.top);
            }
          }
          (Er = !!Qu), (Zu = Qu = null);
        } finally {
          (Ee = i), (K.p = a), (R.T = n);
        }
      }
      (e.current = t), (Pe = 2);
    }
  }
  function pm() {
    if (Pe === 2) {
      Pe = 0;
      var e = Nn,
        t = Ga,
        n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        (n = R.T), (R.T = null);
        var a = K.p;
        K.p = 2;
        var i = Ee;
        Ee |= 4;
        try {
          Kd(e, t.alternate, t);
        } finally {
          (Ee = i), (K.p = a), (R.T = n);
        }
      }
      Pe = 3;
    }
  }
  function vm() {
    if (Pe === 4 || Pe === 3) {
      (Pe = 0), _0();
      var e = Nn,
        t = Ga,
        n = Ya,
        a = lm;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Pe = 5)
        : ((Pe = 0), (Ga = Nn = null), bm(e, e.pendingLanes));
      var i = e.pendingLanes;
      if (
        (i === 0 && (En = null),
        Wr(n),
        (t = t.stateNode),
        st && typeof st.onCommitFiberRoot == "function")
      )
        try {
          st.onCommitFiberRoot(rl, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        (t = R.T), (i = K.p), (K.p = 2), (R.T = null);
        try {
          for (var r = e.onRecoverableError, m = 0; m < a.length; m++) {
            var g = a[m];
            r(g.value, { componentStack: g.stack });
          }
        } finally {
          (R.T = t), (K.p = i);
        }
      }
      (Ya & 3) !== 0 && fr(),
        Lt(e),
        (i = e.pendingLanes),
        (n & 4194090) !== 0 && (i & 42) !== 0
          ? e === Du
            ? Xl++
            : ((Xl = 0), (Du = e))
          : (Xl = 0),
        Ql(0);
    }
  }
  function bm(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), Nl(t)));
  }
  function fr(e) {
    return gm(), pm(), vm(), ym();
  }
  function ym() {
    if (Pe !== 5) return !1;
    var e = Nn,
      t = Mu;
    Mu = 0;
    var n = Wr(Ya),
      a = R.T,
      i = K.p;
    try {
      (K.p = 32 > n ? 32 : n), (R.T = null), (n = zu), (zu = null);
      var r = Nn,
        m = Ya;
      if (((Pe = 0), (Ga = Nn = null), (Ya = 0), (Ee & 6) !== 0))
        throw Error(o(331));
      var g = Ee;
      if (
        ((Ee |= 4),
        nm(r.current),
        Pd(r, r.current, m, n),
        (Ee = g),
        Ql(0, !1),
        st && typeof st.onPostCommitFiberRoot == "function")
      )
        try {
          st.onPostCommitFiberRoot(rl, r);
        } catch {}
      return !0;
    } finally {
      (K.p = i), (R.T = a), bm(e, t);
    }
  }
  function xm(e, t, n) {
    (t = xt(n, t)),
      (t = su(e.stateNode, t, 2)),
      (e = hn(e, t, 2)),
      e !== null && (ul(e, 2), Lt(e));
  }
  function Me(e, t, n) {
    if (e.tag === 3) xm(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          xm(t, e, n);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (En === null || !En.has(a)))
          ) {
            (e = xt(n, e)),
              (n = Nd(2)),
              (a = hn(t, n, 2)),
              a !== null && (jd(n, a, t, e), ul(a, 2), Lt(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function _u(e, t, n) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new uv();
      var i = new Set();
      a.set(t, i);
    } else (i = a.get(t)), i === void 0 && ((i = new Set()), a.set(t, i));
    i.has(n) ||
      ((ju = !0), i.add(n), (e = mv.bind(null, e, t, n)), t.then(e, e));
  }
  function mv(e, t, n) {
    var a = e.pingCache;
    a !== null && a.delete(t),
      (e.pingedLanes |= e.suspendedLanes & n),
      (e.warmLanes &= ~n),
      ze === e &&
        (pe & n) === n &&
        (Le === 4 || (Le === 3 && (pe & 62914560) === pe && 300 > Ot() - Cu)
          ? (Ee & 2) === 0 && Xa(e, 0)
          : (Au |= n),
        Va === pe && (Va = 0)),
      Lt(e);
  }
  function Sm(e, t) {
    t === 0 && (t = pc()), (e = Aa(e, t)), e !== null && (ul(e, t), Lt(e));
  }
  function hv(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), Sm(e, n);
  }
  function gv(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var a = e.stateNode,
          i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      case 22:
        a = e.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    a !== null && a.delete(t), Sm(e, n);
  }
  function pv(e, t) {
    return Ln(e, t);
  }
  var dr = null,
    Za = null,
    Bu = !1,
    mr = !1,
    ku = !1,
    na = 0;
  function Lt(e) {
    e !== Za &&
      e.next === null &&
      (Za === null ? (dr = Za = e) : (Za = Za.next = e)),
      (mr = !0),
      Bu || ((Bu = !0), bv());
  }
  function Ql(e, t) {
    if (!ku && mr) {
      ku = !0;
      do
        for (var n = !1, a = dr; a !== null; ) {
          if (e !== 0) {
            var i = a.pendingLanes;
            if (i === 0) var r = 0;
            else {
              var m = a.suspendedLanes,
                g = a.pingedLanes;
              (r = (1 << (31 - ct(42 | e) + 1)) - 1),
                (r &= i & ~(m & ~g)),
                (r = r & 201326741 ? (r & 201326741) | 1 : r ? r | 2 : 0);
            }
            r !== 0 && ((n = !0), jm(a, r));
          } else
            (r = pe),
              (r = yi(
                a,
                a === ze ? r : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
              )),
              (r & 3) === 0 || ol(a, r) || ((n = !0), jm(a, r));
          a = a.next;
        }
      while (n);
      ku = !1;
    }
  }
  function vv() {
    wm();
  }
  function wm() {
    mr = Bu = !1;
    var e = 0;
    na !== 0 && (Av() && (e = na), (na = 0));
    for (var t = Ot(), n = null, a = dr; a !== null; ) {
      var i = a.next,
        r = Em(a, t);
      r === 0
        ? ((a.next = null),
          n === null ? (dr = i) : (n.next = i),
          i === null && (Za = n))
        : ((n = a), (e !== 0 || (r & 3) !== 0) && (mr = !0)),
        (a = i);
    }
    Ql(e);
  }
  function Em(e, t) {
    for (
      var n = e.suspendedLanes,
        a = e.pingedLanes,
        i = e.expirationTimes,
        r = e.pendingLanes & -62914561;
      0 < r;
    ) {
      var m = 31 - ct(r),
        g = 1 << m,
        b = i[m];
      b === -1
        ? ((g & n) === 0 || (g & a) !== 0) && (i[m] = Y0(g, t))
        : b <= t && (e.expiredLanes |= g),
        (r &= ~g);
    }
    if (
      ((t = ze),
      (n = pe),
      (n = yi(
        e,
        e === t ? n : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      (a = e.callbackNode),
      n === 0 ||
        (e === t && (Ne === 2 || Ne === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && on(a),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((n & 3) === 0 || ol(e, n)) {
      if (((t = n & -n), t === e.callbackPriority)) return t;
      switch ((a !== null && on(a), Wr(n))) {
        case 2:
        case 8:
          n = mc;
          break;
        case 32:
          n = pi;
          break;
        case 268435456:
          n = hc;
          break;
        default:
          n = pi;
      }
      return (
        (a = Nm.bind(null, e)),
        (n = Ln(n, a)),
        (e.callbackPriority = t),
        (e.callbackNode = n),
        t
      );
    }
    return (
      a !== null && a !== null && on(a),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function Nm(e, t) {
    if (Pe !== 0 && Pe !== 5)
      return (e.callbackNode = null), (e.callbackPriority = 0), null;
    var n = e.callbackNode;
    if (fr() && e.callbackNode !== n) return null;
    var a = pe;
    return (
      (a = yi(
        e,
        e === ze ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      a === 0
        ? null
        : (rm(e, a, t),
          Em(e, Ot()),
          e.callbackNode != null && e.callbackNode === n
            ? Nm.bind(null, e)
            : null)
    );
  }
  function jm(e, t) {
    if (fr()) return null;
    rm(e, t, !0);
  }
  function bv() {
    Cv(function () {
      (Ee & 6) !== 0 ? Ln(dc, vv) : wm();
    });
  }
  function Lu() {
    return na === 0 && (na = gc()), na;
  }
  function Am(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : Ni("" + e);
  }
  function Tm(e, t) {
    var n = t.ownerDocument.createElement("input");
    return (
      (n.name = t.name),
      (n.value = t.value),
      e.id && n.setAttribute("form", e.id),
      t.parentNode.insertBefore(n, t),
      (e = new FormData(e)),
      n.parentNode.removeChild(n),
      e
    );
  }
  function yv(e, t, n, a, i) {
    if (t === "submit" && n && n.stateNode === i) {
      var r = Am((i[lt] || null).action),
        m = a.submitter;
      m &&
        ((t = (t = m[lt] || null)
          ? Am(t.formAction)
          : m.getAttribute("formAction")),
        t !== null && ((r = t), (m = null)));
      var g = new Ci("action", "action", null, a, i);
      e.push({
        event: g,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (na !== 0) {
                  var b = m ? Tm(i, m) : new FormData(i);
                  lu(
                    n,
                    { pending: !0, data: b, method: i.method, action: r },
                    null,
                    b,
                  );
                }
              } else
                typeof r == "function" &&
                  (g.preventDefault(),
                  (b = m ? Tm(i, m) : new FormData(i)),
                  lu(
                    n,
                    { pending: !0, data: b, method: i.method, action: r },
                    r,
                    b,
                  ));
            },
            currentTarget: i,
          },
        ],
      });
    }
  }
  for (var Hu = 0; Hu < Eo.length; Hu++) {
    var qu = Eo[Hu],
      xv = qu.toLowerCase(),
      Sv = qu[0].toUpperCase() + qu.slice(1);
    Ct(xv, "on" + Sv);
  }
  Ct(rf, "onAnimationEnd"),
    Ct(of, "onAnimationIteration"),
    Ct(uf, "onAnimationStart"),
    Ct("dblclick", "onDoubleClick"),
    Ct("focusin", "onFocus"),
    Ct("focusout", "onBlur"),
    Ct(Lp, "onTransitionRun"),
    Ct(Hp, "onTransitionStart"),
    Ct(qp, "onTransitionCancel"),
    Ct(sf, "onTransitionEnd"),
    pa("onMouseEnter", ["mouseout", "mouseover"]),
    pa("onMouseLeave", ["mouseout", "mouseover"]),
    pa("onPointerEnter", ["pointerout", "pointerover"]),
    pa("onPointerLeave", ["pointerout", "pointerover"]),
    qn(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    qn(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    qn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    qn(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    qn(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    qn(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
  var Zl =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    wv = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Zl),
    );
  function Cm(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var a = e[n],
        i = a.event;
      a = a.listeners;
      e: {
        var r = void 0;
        if (t)
          for (var m = a.length - 1; 0 <= m; m--) {
            var g = a[m],
              b = g.instance,
              j = g.currentTarget;
            if (((g = g.listener), b !== r && i.isPropagationStopped()))
              break e;
            (r = g), (i.currentTarget = j);
            try {
              r(i);
            } catch (_) {
              er(_);
            }
            (i.currentTarget = null), (r = b);
          }
        else
          for (m = 0; m < a.length; m++) {
            if (
              ((g = a[m]),
              (b = g.instance),
              (j = g.currentTarget),
              (g = g.listener),
              b !== r && i.isPropagationStopped())
            )
              break e;
            (r = g), (i.currentTarget = j);
            try {
              r(i);
            } catch (_) {
              er(_);
            }
            (i.currentTarget = null), (r = b);
          }
      }
    }
  }
  function he(e, t) {
    var n = t[Ir];
    n === void 0 && (n = t[Ir] = new Set());
    var a = e + "__bubble";
    n.has(a) || (Mm(t, e, 2, !1), n.add(a));
  }
  function Vu(e, t, n) {
    var a = 0;
    t && (a |= 4), Mm(n, e, a, t);
  }
  var hr = "_reactListening" + Math.random().toString(36).slice(2);
  function Gu(e) {
    if (!e[hr]) {
      (e[hr] = !0),
        Sc.forEach(function (n) {
          n !== "selectionchange" && (wv.has(n) || Vu(n, !1, e), Vu(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[hr] || ((t[hr] = !0), Vu("selectionchange", !1, t));
    }
  }
  function Mm(e, t, n, a) {
    switch (Pm(t)) {
      case 2:
        var i = $v;
        break;
      case 8:
        i = Fv;
        break;
      default:
        i = ns;
    }
    (n = i.bind(null, t, n, e)),
      (i = void 0),
      !so ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (i = !0),
      a
        ? i !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: i })
          : e.addEventListener(t, n, !0)
        : i !== void 0
          ? e.addEventListener(t, n, { passive: i })
          : e.addEventListener(t, n, !1);
  }
  function Yu(e, t, n, a, i) {
    var r = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (;;) {
        if (a === null) return;
        var m = a.tag;
        if (m === 3 || m === 4) {
          var g = a.stateNode.containerInfo;
          if (g === i) break;
          if (m === 4)
            for (m = a.return; m !== null; ) {
              var b = m.tag;
              if ((b === 3 || b === 4) && m.stateNode.containerInfo === i)
                return;
              m = m.return;
            }
          for (; g !== null; ) {
            if (((m = ma(g)), m === null)) return;
            if (((b = m.tag), b === 5 || b === 6 || b === 26 || b === 27)) {
              a = r = m;
              continue e;
            }
            g = g.parentNode;
          }
        }
        a = a.return;
      }
    _c(function () {
      var j = r,
        _ = oo(n),
        L = [];
      e: {
        var C = cf.get(e);
        if (C !== void 0) {
          var D = Ci,
            se = e;
          switch (e) {
            case "keypress":
              if (Ai(n) === 0) break e;
            case "keydown":
            case "keyup":
              D = pp;
              break;
            case "focusin":
              (se = "focus"), (D = ho);
              break;
            case "focusout":
              (se = "blur"), (D = ho);
              break;
            case "beforeblur":
            case "afterblur":
              D = ho;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              D = Lc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              D = lp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              D = yp;
              break;
            case rf:
            case of:
            case uf:
              D = op;
              break;
            case sf:
              D = Sp;
              break;
            case "scroll":
            case "scrollend":
              D = np;
              break;
            case "wheel":
              D = Ep;
              break;
            case "copy":
            case "cut":
            case "paste":
              D = sp;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              D = qc;
              break;
            case "toggle":
            case "beforetoggle":
              D = jp;
          }
          var re = (t & 4) !== 0,
            Te = !re && (e === "scroll" || e === "scrollend"),
            E = re ? (C !== null ? C + "Capture" : null) : C;
          re = [];
          for (var y = j, N; y !== null; ) {
            var B = y;
            if (
              ((N = B.stateNode),
              (B = B.tag),
              (B !== 5 && B !== 26 && B !== 27) ||
                N === null ||
                E === null ||
                ((B = fl(y, E)), B != null && re.push(Kl(y, B, N))),
              Te)
            )
              break;
            y = y.return;
          }
          0 < re.length &&
            ((C = new D(C, se, null, n, _)),
            L.push({ event: C, listeners: re }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((C = e === "mouseover" || e === "pointerover"),
            (D = e === "mouseout" || e === "pointerout"),
            C &&
              n !== ro &&
              (se = n.relatedTarget || n.fromElement) &&
              (ma(se) || se[da]))
          )
            break e;
          if (
            (D || C) &&
            ((C =
              _.window === _
                ? _
                : (C = _.ownerDocument)
                  ? C.defaultView || C.parentWindow
                  : window),
            D
              ? ((se = n.relatedTarget || n.toElement),
                (D = j),
                (se = se ? ma(se) : null),
                se !== null &&
                  ((Te = d(se)),
                  (re = se.tag),
                  se !== Te || (re !== 5 && re !== 27 && re !== 6)) &&
                  (se = null))
              : ((D = null), (se = j)),
            D !== se)
          ) {
            if (
              ((re = Lc),
              (B = "onMouseLeave"),
              (E = "onMouseEnter"),
              (y = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((re = qc),
                (B = "onPointerLeave"),
                (E = "onPointerEnter"),
                (y = "pointer")),
              (Te = D == null ? C : cl(D)),
              (N = se == null ? C : cl(se)),
              (C = new re(B, y + "leave", D, n, _)),
              (C.target = Te),
              (C.relatedTarget = N),
              (B = null),
              ma(_) === j &&
                ((re = new re(E, y + "enter", se, n, _)),
                (re.target = N),
                (re.relatedTarget = Te),
                (B = re)),
              (Te = B),
              D && se)
            )
              t: {
                for (re = D, E = se, y = 0, N = re; N; N = Ka(N)) y++;
                for (N = 0, B = E; B; B = Ka(B)) N++;
                for (; 0 < y - N; ) (re = Ka(re)), y--;
                for (; 0 < N - y; ) (E = Ka(E)), N--;
                for (; y--; ) {
                  if (re === E || (E !== null && re === E.alternate)) break t;
                  (re = Ka(re)), (E = Ka(E));
                }
                re = null;
              }
            else re = null;
            D !== null && zm(L, C, D, re, !1),
              se !== null && Te !== null && zm(L, Te, se, re, !0);
          }
        }
        e: {
          if (
            ((C = j ? cl(j) : window),
            (D = C.nodeName && C.nodeName.toLowerCase()),
            D === "select" || (D === "input" && C.type === "file"))
          )
            var P = Jc;
          else if (Zc(C))
            if ($c) P = _p;
            else {
              P = Op;
              var de = Rp;
            }
          else
            (D = C.nodeName),
              !D ||
              D.toLowerCase() !== "input" ||
              (C.type !== "checkbox" && C.type !== "radio")
                ? j && io(j.elementType) && (P = Jc)
                : (P = Up);
          if (P && (P = P(e, j))) {
            Kc(L, P, n, _);
            break e;
          }
          de && de(e, C, j),
            e === "focusout" &&
              j &&
              C.type === "number" &&
              j.memoizedProps.value != null &&
              lo(C, "number", C.value);
        }
        switch (((de = j ? cl(j) : window), e)) {
          case "focusin":
            (Zc(de) || de.contentEditable === "true") &&
              ((Ea = de), (xo = j), (yl = null));
            break;
          case "focusout":
            yl = xo = Ea = null;
            break;
          case "mousedown":
            So = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (So = !1), af(L, n, _);
            break;
          case "selectionchange":
            if (kp) break;
          case "keydown":
          case "keyup":
            af(L, n, _);
        }
        var le;
        if (po)
          e: {
            switch (e) {
              case "compositionstart":
                var ue = "onCompositionStart";
                break e;
              case "compositionend":
                ue = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ue = "onCompositionUpdate";
                break e;
            }
            ue = void 0;
          }
        else
          wa
            ? Xc(e, n) && (ue = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (ue = "onCompositionStart");
        ue &&
          (Vc &&
            n.locale !== "ko" &&
            (wa || ue !== "onCompositionStart"
              ? ue === "onCompositionEnd" && wa && (le = Bc())
              : ((cn = _),
                (co = "value" in cn ? cn.value : cn.textContent),
                (wa = !0))),
          (de = gr(j, ue)),
          0 < de.length &&
            ((ue = new Hc(ue, e, null, n, _)),
            L.push({ event: ue, listeners: de }),
            le
              ? (ue.data = le)
              : ((le = Qc(n)), le !== null && (ue.data = le)))),
          (le = Tp ? Cp(e, n) : Mp(e, n)) &&
            ((ue = gr(j, "onBeforeInput")),
            0 < ue.length &&
              ((de = new Hc("onBeforeInput", "beforeinput", null, n, _)),
              L.push({ event: de, listeners: ue }),
              (de.data = le))),
          yv(L, e, j, n, _);
      }
      Cm(L, t);
    });
  }
  function Kl(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function gr(e, t) {
    for (var n = t + "Capture", a = []; e !== null; ) {
      var i = e,
        r = i.stateNode;
      if (
        ((i = i.tag),
        (i !== 5 && i !== 26 && i !== 27) ||
          r === null ||
          ((i = fl(e, n)),
          i != null && a.unshift(Kl(e, i, r)),
          (i = fl(e, t)),
          i != null && a.push(Kl(e, i, r))),
        e.tag === 3)
      )
        return a;
      e = e.return;
    }
    return [];
  }
  function Ka(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function zm(e, t, n, a, i) {
    for (var r = t._reactName, m = []; n !== null && n !== a; ) {
      var g = n,
        b = g.alternate,
        j = g.stateNode;
      if (((g = g.tag), b !== null && b === a)) break;
      (g !== 5 && g !== 26 && g !== 27) ||
        j === null ||
        ((b = j),
        i
          ? ((j = fl(n, r)), j != null && m.unshift(Kl(n, j, b)))
          : i || ((j = fl(n, r)), j != null && m.push(Kl(n, j, b)))),
        (n = n.return);
    }
    m.length !== 0 && e.push({ event: t, listeners: m });
  }
  var Ev = /\r\n?/g,
    Nv = /\u0000|\uFFFD/g;
  function Dm(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Ev,
        `
`,
      )
      .replace(Nv, "");
  }
  function Rm(e, t) {
    return (t = Dm(t)), Dm(e) === t;
  }
  function pr() {}
  function Ae(e, t, n, a, i, r) {
    switch (n) {
      case "children":
        typeof a == "string"
          ? t === "body" || (t === "textarea" && a === "") || ya(e, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            t !== "body" &&
            ya(e, "" + a);
        break;
      case "className":
        Si(e, "class", a);
        break;
      case "tabIndex":
        Si(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Si(e, n, a);
        break;
      case "style":
        Oc(e, a, r);
        break;
      case "data":
        if (t !== "object") {
          Si(e, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          e.removeAttribute(n);
          break;
        }
        (a = Ni("" + a)), e.setAttribute(n, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof r == "function" &&
            (n === "formAction"
              ? (t !== "input" && Ae(e, t, "name", i.name, i, null),
                Ae(e, t, "formEncType", i.formEncType, i, null),
                Ae(e, t, "formMethod", i.formMethod, i, null),
                Ae(e, t, "formTarget", i.formTarget, i, null))
              : (Ae(e, t, "encType", i.encType, i, null),
                Ae(e, t, "method", i.method, i, null),
                Ae(e, t, "target", i.target, i, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(n);
          break;
        }
        (a = Ni("" + a)), e.setAttribute(n, a);
        break;
      case "onClick":
        a != null && (e.onclick = pr);
        break;
      case "onScroll":
        a != null && he("scroll", e);
        break;
      case "onScrollEnd":
        a != null && he("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(o(61));
          if (((n = a.__html), n != null)) {
            if (i.children != null) throw Error(o(60));
            e.innerHTML = n;
          }
        }
        break;
      case "multiple":
        e.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        e.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        (n = Ni("" + a)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? e.setAttribute(n, "" + a)
          : e.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? e.setAttribute(n, "")
          : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        a === !0
          ? e.setAttribute(n, "")
          : a !== !1 &&
              a != null &&
              typeof a != "function" &&
              typeof a != "symbol"
            ? e.setAttribute(n, a)
            : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? e.setAttribute(n, a)
          : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? e.removeAttribute(n)
          : e.setAttribute(n, a);
        break;
      case "popover":
        he("beforetoggle", e), he("toggle", e), xi(e, "popover", a);
        break;
      case "xlinkActuate":
        Gt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Gt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Gt(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Gt(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Gt(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Gt(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Gt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Gt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Gt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        xi(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = ep.get(n) || n), xi(e, n, a));
    }
  }
  function Xu(e, t, n, a, i, r) {
    switch (n) {
      case "style":
        Oc(e, a, r);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(o(61));
          if (((n = a.__html), n != null)) {
            if (i.children != null) throw Error(o(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? ya(e, a)
          : (typeof a == "number" || typeof a == "bigint") && ya(e, "" + a);
        break;
      case "onScroll":
        a != null && he("scroll", e);
        break;
      case "onScrollEnd":
        a != null && he("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = pr);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!wc.hasOwnProperty(n))
          e: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((i = n.endsWith("Capture")),
              (t = n.slice(2, i ? n.length - 7 : void 0)),
              (r = e[lt] || null),
              (r = r != null ? r[n] : null),
              typeof r == "function" && e.removeEventListener(t, r, i),
              typeof a == "function")
            ) {
              typeof r != "function" &&
                r !== null &&
                (n in e
                  ? (e[n] = null)
                  : e.hasAttribute(n) && e.removeAttribute(n)),
                e.addEventListener(t, a, i);
              break e;
            }
            n in e
              ? (e[n] = a)
              : a === !0
                ? e.setAttribute(n, "")
                : xi(e, n, a);
          }
    }
  }
  function et(e, t, n) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        he("error", e), he("load", e);
        var a = !1,
          i = !1,
          r;
        for (r in n)
          if (n.hasOwnProperty(r)) {
            var m = n[r];
            if (m != null)
              switch (r) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  i = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, t));
                default:
                  Ae(e, t, r, m, n, null);
              }
          }
        i && Ae(e, t, "srcSet", n.srcSet, n, null),
          a && Ae(e, t, "src", n.src, n, null);
        return;
      case "input":
        he("invalid", e);
        var g = (r = m = i = null),
          b = null,
          j = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var _ = n[a];
            if (_ != null)
              switch (a) {
                case "name":
                  i = _;
                  break;
                case "type":
                  m = _;
                  break;
                case "checked":
                  b = _;
                  break;
                case "defaultChecked":
                  j = _;
                  break;
                case "value":
                  r = _;
                  break;
                case "defaultValue":
                  g = _;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (_ != null) throw Error(o(137, t));
                  break;
                default:
                  Ae(e, t, a, _, n, null);
              }
          }
        Mc(e, r, g, b, j, m, i, !1), wi(e);
        return;
      case "select":
        he("invalid", e), (a = m = r = null);
        for (i in n)
          if (n.hasOwnProperty(i) && ((g = n[i]), g != null))
            switch (i) {
              case "value":
                r = g;
                break;
              case "defaultValue":
                m = g;
                break;
              case "multiple":
                a = g;
              default:
                Ae(e, t, i, g, n, null);
            }
        (t = r),
          (n = m),
          (e.multiple = !!a),
          t != null ? ba(e, !!a, t, !1) : n != null && ba(e, !!a, n, !0);
        return;
      case "textarea":
        he("invalid", e), (r = i = a = null);
        for (m in n)
          if (n.hasOwnProperty(m) && ((g = n[m]), g != null))
            switch (m) {
              case "value":
                a = g;
                break;
              case "defaultValue":
                i = g;
                break;
              case "children":
                r = g;
                break;
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(o(91));
                break;
              default:
                Ae(e, t, m, g, n, null);
            }
        Dc(e, a, i, r), wi(e);
        return;
      case "option":
        for (b in n)
          n.hasOwnProperty(b) &&
            ((a = n[b]), a != null) &&
            (b === "selected"
              ? (e.selected =
                  a && typeof a != "function" && typeof a != "symbol")
              : Ae(e, t, b, a, n, null));
        return;
      case "dialog":
        he("beforetoggle", e), he("toggle", e), he("cancel", e), he("close", e);
        break;
      case "iframe":
      case "object":
        he("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Zl.length; a++) he(Zl[a], e);
        break;
      case "image":
        he("error", e), he("load", e);
        break;
      case "details":
        he("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        he("error", e), he("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (j in n)
          if (n.hasOwnProperty(j) && ((a = n[j]), a != null))
            switch (j) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                Ae(e, t, j, a, n, null);
            }
        return;
      default:
        if (io(t)) {
          for (_ in n)
            n.hasOwnProperty(_) &&
              ((a = n[_]), a !== void 0 && Xu(e, t, _, a, n, void 0));
          return;
        }
    }
    for (g in n)
      n.hasOwnProperty(g) && ((a = n[g]), a != null && Ae(e, t, g, a, n, null));
  }
  function jv(e, t, n, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var i = null,
          r = null,
          m = null,
          g = null,
          b = null,
          j = null,
          _ = null;
        for (D in n) {
          var L = n[D];
          if (n.hasOwnProperty(D) && L != null)
            switch (D) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                b = L;
              default:
                a.hasOwnProperty(D) || Ae(e, t, D, null, a, L);
            }
        }
        for (var C in a) {
          var D = a[C];
          if (((L = n[C]), a.hasOwnProperty(C) && (D != null || L != null)))
            switch (C) {
              case "type":
                r = D;
                break;
              case "name":
                i = D;
                break;
              case "checked":
                j = D;
                break;
              case "defaultChecked":
                _ = D;
                break;
              case "value":
                m = D;
                break;
              case "defaultValue":
                g = D;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (D != null) throw Error(o(137, t));
                break;
              default:
                D !== L && Ae(e, t, C, D, a, L);
            }
        }
        ao(e, m, g, b, j, _, r, i);
        return;
      case "select":
        D = m = g = C = null;
        for (r in n)
          if (((b = n[r]), n.hasOwnProperty(r) && b != null))
            switch (r) {
              case "value":
                break;
              case "multiple":
                D = b;
              default:
                a.hasOwnProperty(r) || Ae(e, t, r, null, a, b);
            }
        for (i in a)
          if (
            ((r = a[i]),
            (b = n[i]),
            a.hasOwnProperty(i) && (r != null || b != null))
          )
            switch (i) {
              case "value":
                C = r;
                break;
              case "defaultValue":
                g = r;
                break;
              case "multiple":
                m = r;
              default:
                r !== b && Ae(e, t, i, r, a, b);
            }
        (t = g),
          (n = m),
          (a = D),
          C != null
            ? ba(e, !!n, C, !1)
            : !!a != !!n &&
              (t != null ? ba(e, !!n, t, !0) : ba(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        D = C = null;
        for (g in n)
          if (
            ((i = n[g]),
            n.hasOwnProperty(g) && i != null && !a.hasOwnProperty(g))
          )
            switch (g) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ae(e, t, g, null, a, i);
            }
        for (m in a)
          if (
            ((i = a[m]),
            (r = n[m]),
            a.hasOwnProperty(m) && (i != null || r != null))
          )
            switch (m) {
              case "value":
                C = i;
                break;
              case "defaultValue":
                D = i;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(o(91));
                break;
              default:
                i !== r && Ae(e, t, m, i, a, r);
            }
        zc(e, C, D);
        return;
      case "option":
        for (var se in n)
          (C = n[se]),
            n.hasOwnProperty(se) &&
              C != null &&
              !a.hasOwnProperty(se) &&
              (se === "selected"
                ? (e.selected = !1)
                : Ae(e, t, se, null, a, C));
        for (b in a)
          (C = a[b]),
            (D = n[b]),
            a.hasOwnProperty(b) &&
              C !== D &&
              (C != null || D != null) &&
              (b === "selected"
                ? (e.selected =
                    C && typeof C != "function" && typeof C != "symbol")
                : Ae(e, t, b, C, a, D));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var re in n)
          (C = n[re]),
            n.hasOwnProperty(re) &&
              C != null &&
              !a.hasOwnProperty(re) &&
              Ae(e, t, re, null, a, C);
        for (j in a)
          if (
            ((C = a[j]),
            (D = n[j]),
            a.hasOwnProperty(j) && C !== D && (C != null || D != null))
          )
            switch (j) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (C != null) throw Error(o(137, t));
                break;
              default:
                Ae(e, t, j, C, a, D);
            }
        return;
      default:
        if (io(t)) {
          for (var Te in n)
            (C = n[Te]),
              n.hasOwnProperty(Te) &&
                C !== void 0 &&
                !a.hasOwnProperty(Te) &&
                Xu(e, t, Te, void 0, a, C);
          for (_ in a)
            (C = a[_]),
              (D = n[_]),
              !a.hasOwnProperty(_) ||
                C === D ||
                (C === void 0 && D === void 0) ||
                Xu(e, t, _, C, a, D);
          return;
        }
    }
    for (var E in n)
      (C = n[E]),
        n.hasOwnProperty(E) &&
          C != null &&
          !a.hasOwnProperty(E) &&
          Ae(e, t, E, null, a, C);
    for (L in a)
      (C = a[L]),
        (D = n[L]),
        !a.hasOwnProperty(L) ||
          C === D ||
          (C == null && D == null) ||
          Ae(e, t, L, C, a, D);
  }
  var Qu = null,
    Zu = null;
  function vr(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Om(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Um(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function Ku(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Ju = null;
  function Av() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === Ju
        ? !1
        : ((Ju = e), !0)
      : ((Ju = null), !1);
  }
  var _m = typeof setTimeout == "function" ? setTimeout : void 0,
    Tv = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Bm = typeof Promise == "function" ? Promise : void 0,
    Cv =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Bm < "u"
          ? function (e) {
              return Bm.resolve(null).then(e).catch(Mv);
            }
          : _m;
  function Mv(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function An(e) {
    return e === "head";
  }
  function km(e, t) {
    var n = t,
      a = 0,
      i = 0;
    do {
      var r = n.nextSibling;
      if ((e.removeChild(n), r && r.nodeType === 8))
        if (((n = r.data), n === "/$")) {
          if (0 < a && 8 > a) {
            n = a;
            var m = e.ownerDocument;
            if ((n & 1 && Jl(m.documentElement), n & 2 && Jl(m.body), n & 4))
              for (n = m.head, Jl(n), m = n.firstChild; m; ) {
                var g = m.nextSibling,
                  b = m.nodeName;
                m[sl] ||
                  b === "SCRIPT" ||
                  b === "STYLE" ||
                  (b === "LINK" && m.rel.toLowerCase() === "stylesheet") ||
                  n.removeChild(m),
                  (m = g);
              }
          }
          if (i === 0) {
            e.removeChild(r), ni(t);
            return;
          }
          i--;
        } else
          n === "$" || n === "$?" || n === "$!"
            ? i++
            : (a = n.charCodeAt(0) - 48);
      else a = 0;
      n = r;
    } while (n);
    ni(t);
  }
  function $u(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (((t = t.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          $u(n), Pr(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(n);
    }
  }
  function zv(e, t, n, a) {
    for (; e.nodeType === 1; ) {
      var i = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (a) {
        if (!e[sl])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((r = e.getAttribute("rel")),
                r === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                r !== i.rel ||
                e.getAttribute("href") !==
                  (i.href == null || i.href === "" ? null : i.href) ||
                e.getAttribute("crossorigin") !==
                  (i.crossOrigin == null ? null : i.crossOrigin) ||
                e.getAttribute("title") !== (i.title == null ? null : i.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((r = e.getAttribute("src")),
                (r !== (i.src == null ? null : i.src) ||
                  e.getAttribute("type") !== (i.type == null ? null : i.type) ||
                  e.getAttribute("crossorigin") !==
                    (i.crossOrigin == null ? null : i.crossOrigin)) &&
                  r &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var r = i.name == null ? null : "" + i.name;
        if (i.type === "hidden" && e.getAttribute("name") === r) return e;
      } else return e;
      if (((e = zt(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function Dv(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !n) ||
        ((e = zt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Fu(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState === "complete")
    );
  }
  function Rv(e, t) {
    var n = e.ownerDocument;
    if (e.data !== "$?" || n.readyState === "complete") t();
    else {
      var a = function () {
        t(), n.removeEventListener("DOMContentLoaded", a);
      };
      n.addEventListener("DOMContentLoaded", a), (e._reactRetry = a);
    }
  }
  function zt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
        )
          break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  var Wu = null;
  function Lm(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Hm(e, t, n) {
    switch (((t = vr(n)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(o(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(o(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(o(454));
        return e;
      default:
        throw Error(o(451));
    }
  }
  function Jl(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    Pr(e);
  }
  var At = new Map(),
    qm = new Set();
  function br(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var nn = K.d;
  K.d = { f: Ov, r: Uv, D: _v, C: Bv, L: kv, m: Lv, X: qv, S: Hv, M: Vv };
  function Ov() {
    var e = nn.f(),
      t = sr();
    return e || t;
  }
  function Uv(e) {
    var t = ha(e);
    t !== null && t.tag === 5 && t.type === "form" ? rd(t) : nn.r(e);
  }
  var Ja = typeof document > "u" ? null : document;
  function Vm(e, t, n) {
    var a = Ja;
    if (a && typeof t == "string" && t) {
      var i = yt(t);
      (i = 'link[rel="' + e + '"][href="' + i + '"]'),
        typeof n == "string" && (i += '[crossorigin="' + n + '"]'),
        qm.has(i) ||
          (qm.add(i),
          (e = { rel: e, crossOrigin: n, href: t }),
          a.querySelector(i) === null &&
            ((t = a.createElement("link")),
            et(t, "link", e),
            Ke(t),
            a.head.appendChild(t)));
    }
  }
  function _v(e) {
    nn.D(e), Vm("dns-prefetch", e, null);
  }
  function Bv(e, t) {
    nn.C(e, t), Vm("preconnect", e, t);
  }
  function kv(e, t, n) {
    nn.L(e, t, n);
    var a = Ja;
    if (a && e && t) {
      var i = 'link[rel="preload"][as="' + yt(t) + '"]';
      t === "image" && n && n.imageSrcSet
        ? ((i += '[imagesrcset="' + yt(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (i += '[imagesizes="' + yt(n.imageSizes) + '"]'))
        : (i += '[href="' + yt(e) + '"]');
      var r = i;
      switch (t) {
        case "style":
          r = $a(e);
          break;
        case "script":
          r = Fa(e);
      }
      At.has(r) ||
        ((e = S(
          {
            rel: "preload",
            href: t === "image" && n && n.imageSrcSet ? void 0 : e,
            as: t,
          },
          n,
        )),
        At.set(r, e),
        a.querySelector(i) !== null ||
          (t === "style" && a.querySelector($l(r))) ||
          (t === "script" && a.querySelector(Fl(r))) ||
          ((t = a.createElement("link")),
          et(t, "link", e),
          Ke(t),
          a.head.appendChild(t)));
    }
  }
  function Lv(e, t) {
    nn.m(e, t);
    var n = Ja;
    if (n && e) {
      var a = t && typeof t.as == "string" ? t.as : "script",
        i =
          'link[rel="modulepreload"][as="' + yt(a) + '"][href="' + yt(e) + '"]',
        r = i;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = Fa(e);
      }
      if (
        !At.has(r) &&
        ((e = S({ rel: "modulepreload", href: e }, t)),
        At.set(r, e),
        n.querySelector(i) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Fl(r))) return;
        }
        (a = n.createElement("link")),
          et(a, "link", e),
          Ke(a),
          n.head.appendChild(a);
      }
    }
  }
  function Hv(e, t, n) {
    nn.S(e, t, n);
    var a = Ja;
    if (a && e) {
      var i = ga(a).hoistableStyles,
        r = $a(e);
      t = t || "default";
      var m = i.get(r);
      if (!m) {
        var g = { loading: 0, preload: null };
        if ((m = a.querySelector($l(r)))) g.loading = 5;
        else {
          (e = S({ rel: "stylesheet", href: e, "data-precedence": t }, n)),
            (n = At.get(r)) && Iu(e, n);
          var b = (m = a.createElement("link"));
          Ke(b),
            et(b, "link", e),
            (b._p = new Promise(function (j, _) {
              (b.onload = j), (b.onerror = _);
            })),
            b.addEventListener("load", function () {
              g.loading |= 1;
            }),
            b.addEventListener("error", function () {
              g.loading |= 2;
            }),
            (g.loading |= 4),
            yr(m, t, a);
        }
        (m = { type: "stylesheet", instance: m, count: 1, state: g }),
          i.set(r, m);
      }
    }
  }
  function qv(e, t) {
    nn.X(e, t);
    var n = Ja;
    if (n && e) {
      var a = ga(n).hoistableScripts,
        i = Fa(e),
        r = a.get(i);
      r ||
        ((r = n.querySelector(Fl(i))),
        r ||
          ((e = S({ src: e, async: !0 }, t)),
          (t = At.get(i)) && Pu(e, t),
          (r = n.createElement("script")),
          Ke(r),
          et(r, "link", e),
          n.head.appendChild(r)),
        (r = { type: "script", instance: r, count: 1, state: null }),
        a.set(i, r));
    }
  }
  function Vv(e, t) {
    nn.M(e, t);
    var n = Ja;
    if (n && e) {
      var a = ga(n).hoistableScripts,
        i = Fa(e),
        r = a.get(i);
      r ||
        ((r = n.querySelector(Fl(i))),
        r ||
          ((e = S({ src: e, async: !0, type: "module" }, t)),
          (t = At.get(i)) && Pu(e, t),
          (r = n.createElement("script")),
          Ke(r),
          et(r, "link", e),
          n.head.appendChild(r)),
        (r = { type: "script", instance: r, count: 1, state: null }),
        a.set(i, r));
    }
  }
  function Gm(e, t, n, a) {
    var i = (i = Ce.current) ? br(i) : null;
    if (!i) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((t = $a(n.href)),
            (n = ga(i).hoistableStyles),
            (a = n.get(t)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              n.set(t, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          e = $a(n.href);
          var r = ga(i).hoistableStyles,
            m = r.get(e);
          if (
            (m ||
              ((i = i.ownerDocument || i),
              (m = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              r.set(e, m),
              (r = i.querySelector($l(e))) &&
                !r._p &&
                ((m.instance = r), (m.state.loading = 5)),
              At.has(e) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                At.set(e, n),
                r || Gv(i, e, n, m.state))),
            t && a === null)
          )
            throw Error(o(528, ""));
          return m;
        }
        if (t && a !== null) throw Error(o(529, ""));
        return null;
      case "script":
        return (
          (t = n.async),
          (n = n.src),
          typeof n == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = Fa(n)),
              (n = ga(i).hoistableScripts),
              (a = n.get(t)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(t, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(o(444, e));
    }
  }
  function $a(e) {
    return 'href="' + yt(e) + '"';
  }
  function $l(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Ym(e) {
    return S({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function Gv(e, t, n, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (a.loading = 1)
      : ((t = e.createElement("link")),
        (a.preload = t),
        t.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        et(t, "link", n),
        Ke(t),
        e.head.appendChild(t));
  }
  function Fa(e) {
    return '[src="' + yt(e) + '"]';
  }
  function Fl(e) {
    return "script[async]" + e;
  }
  function Xm(e, t, n) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var a = e.querySelector('style[data-href~="' + yt(n.href) + '"]');
          if (a) return (t.instance = a), Ke(a), a;
          var i = S({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (e.ownerDocument || e).createElement("style")),
            Ke(a),
            et(a, "style", i),
            yr(a, n.precedence, e),
            (t.instance = a)
          );
        case "stylesheet":
          i = $a(n.href);
          var r = e.querySelector($l(i));
          if (r) return (t.state.loading |= 4), (t.instance = r), Ke(r), r;
          (a = Ym(n)),
            (i = At.get(i)) && Iu(a, i),
            (r = (e.ownerDocument || e).createElement("link")),
            Ke(r);
          var m = r;
          return (
            (m._p = new Promise(function (g, b) {
              (m.onload = g), (m.onerror = b);
            })),
            et(r, "link", a),
            (t.state.loading |= 4),
            yr(r, n.precedence, e),
            (t.instance = r)
          );
        case "script":
          return (
            (r = Fa(n.src)),
            (i = e.querySelector(Fl(r)))
              ? ((t.instance = i), Ke(i), i)
              : ((a = n),
                (i = At.get(r)) && ((a = S({}, n)), Pu(a, i)),
                (e = e.ownerDocument || e),
                (i = e.createElement("script")),
                Ke(i),
                et(i, "link", a),
                e.head.appendChild(i),
                (t.instance = i))
          );
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((a = t.instance), (t.state.loading |= 4), yr(a, n.precedence, e));
    return t.instance;
  }
  function yr(e, t, n) {
    for (
      var a = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        i = a.length ? a[a.length - 1] : null,
        r = i,
        m = 0;
      m < a.length;
      m++
    ) {
      var g = a[m];
      if (g.dataset.precedence === t) r = g;
      else if (r !== i) break;
    }
    r
      ? r.parentNode.insertBefore(e, r.nextSibling)
      : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild));
  }
  function Iu(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title);
  }
  function Pu(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity);
  }
  var xr = null;
  function Qm(e, t, n) {
    if (xr === null) {
      var a = new Map(),
        i = (xr = new Map());
      i.set(n, a);
    } else (i = xr), (a = i.get(n)), a || ((a = new Map()), i.set(n, a));
    if (a.has(e)) return a;
    for (
      a.set(e, null), n = n.getElementsByTagName(e), i = 0;
      i < n.length;
      i++
    ) {
      var r = n[i];
      if (
        !(
          r[sl] ||
          r[tt] ||
          (e === "link" && r.getAttribute("rel") === "stylesheet")
        ) &&
        r.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var m = r.getAttribute(t) || "";
        m = e + m;
        var g = a.get(m);
        g ? g.push(r) : a.set(m, [r]);
      }
    }
    return a;
  }
  function Zm(e, t, n) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(
        n,
        t === "title" ? e.querySelector("head > title") : null,
      );
  }
  function Yv(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        return t.rel === "stylesheet"
          ? ((e = t.disabled), typeof t.precedence == "string" && e == null)
          : !0;
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Km(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Wl = null;
  function Xv() {}
  function Qv(e, t, n) {
    if (Wl === null) throw Error(o(475));
    var a = Wl;
    if (
      t.type === "stylesheet" &&
      (typeof n.media != "string" || matchMedia(n.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var i = $a(n.href),
          r = e.querySelector($l(i));
        if (r) {
          (e = r._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (a.count++, (a = Sr.bind(a)), e.then(a, a)),
            (t.state.loading |= 4),
            (t.instance = r),
            Ke(r);
          return;
        }
        (r = e.ownerDocument || e),
          (n = Ym(n)),
          (i = At.get(i)) && Iu(n, i),
          (r = r.createElement("link")),
          Ke(r);
        var m = r;
        (m._p = new Promise(function (g, b) {
          (m.onload = g), (m.onerror = b);
        })),
          et(r, "link", n),
          (t.instance = r);
      }
      a.stylesheets === null && (a.stylesheets = new Map()),
        a.stylesheets.set(t, e),
        (e = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (a.count++,
          (t = Sr.bind(a)),
          e.addEventListener("load", t),
          e.addEventListener("error", t));
    }
  }
  function Zv() {
    if (Wl === null) throw Error(o(475));
    var e = Wl;
    return (
      e.stylesheets && e.count === 0 && es(e, e.stylesheets),
      0 < e.count
        ? function (t) {
            var n = setTimeout(function () {
              if ((e.stylesheets && es(e, e.stylesheets), e.unsuspend)) {
                var a = e.unsuspend;
                (e.unsuspend = null), a();
              }
            }, 6e4);
            return (
              (e.unsuspend = t),
              function () {
                (e.unsuspend = null), clearTimeout(n);
              }
            );
          }
        : null
    );
  }
  function Sr() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) es(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var wr = null;
  function es(e, t) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (wr = new Map()),
        t.forEach(Kv, e),
        (wr = null),
        Sr.call(e));
  }
  function Kv(e, t) {
    if (!(t.state.loading & 4)) {
      var n = wr.get(e);
      if (n) var a = n.get(null);
      else {
        (n = new Map()), wr.set(e, n);
        for (
          var i = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            r = 0;
          r < i.length;
          r++
        ) {
          var m = i[r];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") &&
            (n.set(m.dataset.precedence, m), (a = m));
        }
        a && n.set(null, a);
      }
      (i = t.instance),
        (m = i.getAttribute("data-precedence")),
        (r = n.get(m) || a),
        r === a && n.set(null, i),
        n.set(m, i),
        this.count++,
        (a = Sr.bind(this)),
        i.addEventListener("load", a),
        i.addEventListener("error", a),
        r
          ? r.parentNode.insertBefore(i, r.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(i, e.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var Il = {
    $$typeof: Y,
    Provider: null,
    Consumer: null,
    _currentValue: ie,
    _currentValue2: ie,
    _threadCount: 0,
  };
  function Jv(e, t, n, a, i, r, m, g) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = $r(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = $r(0)),
      (this.hiddenUpdates = $r(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = i),
      (this.onCaughtError = r),
      (this.onRecoverableError = m),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = g),
      (this.incompleteTransitions = new Map());
  }
  function Jm(e, t, n, a, i, r, m, g, b, j, _, L) {
    return (
      (e = new Jv(e, t, n, m, g, b, j, L)),
      (t = 1),
      r === !0 && (t |= 24),
      (r = dt(3, null, null, t)),
      (e.current = r),
      (r.stateNode = e),
      (t = _o()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (r.memoizedState = { element: a, isDehydrated: n, cache: t }),
      Ho(r),
      e
    );
  }
  function $m(e) {
    return e ? ((e = Ta), e) : Ta;
  }
  function Fm(e, t, n, a, i, r) {
    (i = $m(i)),
      a.context === null ? (a.context = i) : (a.pendingContext = i),
      (a = mn(t)),
      (a.payload = { element: n }),
      (r = r === void 0 ? null : r),
      r !== null && (a.callback = r),
      (n = hn(e, a, t)),
      n !== null && (vt(n, e, t), Cl(n, e, t));
  }
  function Wm(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function ts(e, t) {
    Wm(e, t), (e = e.alternate) && Wm(e, t);
  }
  function Im(e) {
    if (e.tag === 13) {
      var t = Aa(e, 67108864);
      t !== null && vt(t, e, 67108864), ts(e, 67108864);
    }
  }
  var Er = !0;
  function $v(e, t, n, a) {
    var i = R.T;
    R.T = null;
    var r = K.p;
    try {
      (K.p = 2), ns(e, t, n, a);
    } finally {
      (K.p = r), (R.T = i);
    }
  }
  function Fv(e, t, n, a) {
    var i = R.T;
    R.T = null;
    var r = K.p;
    try {
      (K.p = 8), ns(e, t, n, a);
    } finally {
      (K.p = r), (R.T = i);
    }
  }
  function ns(e, t, n, a) {
    if (Er) {
      var i = as(a);
      if (i === null) Yu(e, t, a, Nr, n), eh(e, a);
      else if (Iv(i, e, t, n, a)) a.stopPropagation();
      else if ((eh(e, a), t & 4 && -1 < Wv.indexOf(e))) {
        for (; i !== null; ) {
          var r = ha(i);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (((r = r.stateNode), r.current.memoizedState.isDehydrated)) {
                  var m = Hn(r.pendingLanes);
                  if (m !== 0) {
                    var g = r;
                    for (g.pendingLanes |= 2, g.entangledLanes |= 2; m; ) {
                      var b = 1 << (31 - ct(m));
                      (g.entanglements[1] |= b), (m &= ~b);
                    }
                    Lt(r), (Ee & 6) === 0 && ((or = Ot() + 500), Ql(0));
                  }
                }
                break;
              case 13:
                (g = Aa(r, 2)), g !== null && vt(g, r, 2), sr(), ts(r, 2);
            }
          if (((r = as(a)), r === null && Yu(e, t, a, Nr, n), r === i)) break;
          i = r;
        }
        i !== null && a.stopPropagation();
      } else Yu(e, t, a, null, n);
    }
  }
  function as(e) {
    return (e = oo(e)), ls(e);
  }
  var Nr = null;
  function ls(e) {
    if (((Nr = null), (e = ma(e)), e !== null)) {
      var t = d(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (((e = h(t)), e !== null)) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return (Nr = e), null;
  }
  function Pm(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (B0()) {
          case dc:
            return 2;
          case mc:
            return 8;
          case pi:
          case k0:
            return 32;
          case hc:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var is = !1,
    Tn = null,
    Cn = null,
    Mn = null,
    Pl = new Map(),
    ei = new Map(),
    zn = [],
    Wv =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function eh(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Tn = null;
        break;
      case "dragenter":
      case "dragleave":
        Cn = null;
        break;
      case "mouseover":
      case "mouseout":
        Mn = null;
        break;
      case "pointerover":
      case "pointerout":
        Pl.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ei.delete(t.pointerId);
    }
  }
  function ti(e, t, n, a, i, r) {
    return e === null || e.nativeEvent !== r
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: a,
          nativeEvent: r,
          targetContainers: [i],
        }),
        t !== null && ((t = ha(t)), t !== null && Im(t)),
        e)
      : ((e.eventSystemFlags |= a),
        (t = e.targetContainers),
        i !== null && t.indexOf(i) === -1 && t.push(i),
        e);
  }
  function Iv(e, t, n, a, i) {
    switch (t) {
      case "focusin":
        return (Tn = ti(Tn, e, t, n, a, i)), !0;
      case "dragenter":
        return (Cn = ti(Cn, e, t, n, a, i)), !0;
      case "mouseover":
        return (Mn = ti(Mn, e, t, n, a, i)), !0;
      case "pointerover":
        var r = i.pointerId;
        return Pl.set(r, ti(Pl.get(r) || null, e, t, n, a, i)), !0;
      case "gotpointercapture":
        return (
          (r = i.pointerId), ei.set(r, ti(ei.get(r) || null, e, t, n, a, i)), !0
        );
    }
    return !1;
  }
  function th(e) {
    var t = ma(e.target);
    if (t !== null) {
      var n = d(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = h(n)), t !== null)) {
            (e.blockedOn = t),
              Q0(e.priority, function () {
                if (n.tag === 13) {
                  var a = pt();
                  a = Fr(a);
                  var i = Aa(n, a);
                  i !== null && vt(i, n, a), ts(n, a);
                }
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function jr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = as(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var a = new n.constructor(n.type, n);
        (ro = a), n.target.dispatchEvent(a), (ro = null);
      } else return (t = ha(n)), t !== null && Im(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function nh(e, t, n) {
    jr(e) && n.delete(t);
  }
  function Pv() {
    (is = !1),
      Tn !== null && jr(Tn) && (Tn = null),
      Cn !== null && jr(Cn) && (Cn = null),
      Mn !== null && jr(Mn) && (Mn = null),
      Pl.forEach(nh),
      ei.forEach(nh);
  }
  function Ar(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      is ||
        ((is = !0),
        l.unstable_scheduleCallback(l.unstable_NormalPriority, Pv)));
  }
  var Tr = null;
  function ah(e) {
    Tr !== e &&
      ((Tr = e),
      l.unstable_scheduleCallback(l.unstable_NormalPriority, function () {
        Tr === e && (Tr = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t],
            a = e[t + 1],
            i = e[t + 2];
          if (typeof a != "function") {
            if (ls(a || n) === null) continue;
            break;
          }
          var r = ha(n);
          r !== null &&
            (e.splice(t, 3),
            (t -= 3),
            lu(r, { pending: !0, data: i, method: n.method, action: a }, a, i));
        }
      }));
  }
  function ni(e) {
    function t(b) {
      return Ar(b, e);
    }
    Tn !== null && Ar(Tn, e),
      Cn !== null && Ar(Cn, e),
      Mn !== null && Ar(Mn, e),
      Pl.forEach(t),
      ei.forEach(t);
    for (var n = 0; n < zn.length; n++) {
      var a = zn[n];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < zn.length && ((n = zn[0]), n.blockedOn === null); )
      th(n), n.blockedOn === null && zn.shift();
    if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
      for (a = 0; a < n.length; a += 3) {
        var i = n[a],
          r = n[a + 1],
          m = i[lt] || null;
        if (typeof r == "function") m || ah(n);
        else if (m) {
          var g = null;
          if (r && r.hasAttribute("formAction")) {
            if (((i = r), (m = r[lt] || null))) g = m.formAction;
            else if (ls(i) !== null) continue;
          } else g = m.action;
          typeof g == "function" ? (n[a + 1] = g) : (n.splice(a, 3), (a -= 3)),
            ah(n);
        }
      }
  }
  function rs(e) {
    this._internalRoot = e;
  }
  (Cr.prototype.render = rs.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(o(409));
      var n = t.current,
        a = pt();
      Fm(n, a, e, t, null, null);
    }),
    (Cr.prototype.unmount = rs.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          Fm(e.current, 2, null, e, null, null), sr(), (t[da] = null);
        }
      });
  function Cr(e) {
    this._internalRoot = e;
  }
  Cr.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = yc();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < zn.length && t !== 0 && t < zn[n].priority; n++);
      zn.splice(n, 0, e), n === 0 && th(e);
    }
  };
  var lh = u.version;
  if (lh !== "19.1.0") throw Error(o(527, lh, "19.1.0"));
  K.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(o(188))
        : ((e = Object.keys(e).join(",")), Error(o(268, e)));
    return (
      (e = v(t)),
      (e = e !== null ? w(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var eb = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: R,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Mr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Mr.isDisabled && Mr.supportsFiber)
      try {
        (rl = Mr.inject(eb)), (st = Mr);
      } catch {}
  }
  return (
    (ai.createRoot = function (e, t) {
      if (!c(e)) throw Error(o(299));
      var n = !1,
        a = "",
        i = xd,
        r = Sd,
        m = wd,
        g = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (i = t.onUncaughtError),
          t.onCaughtError !== void 0 && (r = t.onCaughtError),
          t.onRecoverableError !== void 0 && (m = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (g = t.unstable_transitionCallbacks)),
        (t = Jm(e, 1, !1, null, null, n, a, i, r, m, g, null)),
        (e[da] = t.current),
        Gu(e),
        new rs(t)
      );
    }),
    (ai.hydrateRoot = function (e, t, n) {
      if (!c(e)) throw Error(o(299));
      var a = !1,
        i = "",
        r = xd,
        m = Sd,
        g = wd,
        b = null,
        j = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (a = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (r = n.onUncaughtError),
          n.onCaughtError !== void 0 && (m = n.onCaughtError),
          n.onRecoverableError !== void 0 && (g = n.onRecoverableError),
          n.unstable_transitionCallbacks !== void 0 &&
            (b = n.unstable_transitionCallbacks),
          n.formState !== void 0 && (j = n.formState)),
        (t = Jm(e, 1, !0, t, n ?? null, a, i, r, m, g, b, j)),
        (t.context = $m(null)),
        (n = t.current),
        (a = pt()),
        (a = Fr(a)),
        (i = mn(a)),
        (i.callback = null),
        hn(n, i, a),
        (n = a),
        (t.current.lanes = n),
        ul(t, n),
        Lt(t),
        (e[da] = t.current),
        Gu(e),
        new Cr(t)
      );
    }),
    (ai.version = "19.1.0"),
    ai
  );
}
var sh;
function zb() {
  if (sh) return os.exports;
  sh = 1;
  function l() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (u) {
        console.error(u);
      }
  }
  return l(), (os.exports = Mb()), os.exports;
}
var Db = zb();
const Rb = "modulepreload",
  Ob = function (l, u) {
    return new URL(l, u).href;
  },
  ch = {},
  hi = function (u, s, o) {
    let c = Promise.resolve();
    if (s && s.length > 0) {
      let w = function (S) {
        return Promise.all(
          S.map((T) =>
            Promise.resolve(T).then(
              (M) => ({ status: "fulfilled", value: M }),
              (M) => ({ status: "rejected", reason: M }),
            ),
          ),
        );
      };
      const h = document.getElementsByTagName("link"),
        p = document.querySelector("meta[property=csp-nonce]"),
        v = p?.nonce || p?.getAttribute("nonce");
      c = w(
        s.map((S) => {
          if (((S = Ob(S, o)), S in ch)) return;
          ch[S] = !0;
          const T = S.endsWith(".css"),
            M = T ? '[rel="stylesheet"]' : "";
          if (o)
            for (let H = h.length - 1; H >= 0; H--) {
              const z = h[H];
              if (z.href === S && (!T || z.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${S}"]${M}`)) return;
          const A = document.createElement("link");
          if (
            ((A.rel = T ? "stylesheet" : Rb),
            T || (A.as = "script"),
            (A.crossOrigin = ""),
            (A.href = S),
            v && A.setAttribute("nonce", v),
            document.head.appendChild(A),
            T)
          )
            return new Promise((H, z) => {
              A.addEventListener("load", H),
                A.addEventListener("error", () =>
                  z(new Error(`Unable to preload CSS for ${S}`)),
                );
            });
        }),
      );
    }
    function d(h) {
      const p = new Event("vite:preloadError", { cancelable: !0 });
      if (((p.payload = h), window.dispatchEvent(p), !p.defaultPrevented))
        throw h;
    }
    return c.then((h) => {
      for (const p of h || []) p.status === "rejected" && d(p.reason);
      return u().catch(d);
    });
  },
  si = { v: [] },
  fh = () => si.v.forEach((l) => l()),
  Ub = (l) => (
    si.v.push(l) === 1 && addEventListener("hashchange", fh),
    () => {
      (si.v = si.v.filter((u) => u !== l)),
        si.v.length || removeEventListener("hashchange", fh);
    }
  ),
  _b = () => "/" + location.hash.replace(/^#?\/?/, ""),
  Bb = (l, { state: u = null, replace: s = !1 } = {}) => {
    const o = location.href,
      [c, d] = l.replace(/^#?\/?/, "").split("?"),
      h = new URL(location.href);
    (h.hash = `/${c}`), d && (h.search = d);
    const p = h.href;
    s ? history.replaceState(u, "", p) : history.pushState(u, "", p);
    const v =
      typeof HashChangeEvent < "u"
        ? new HashChangeEvent("hashchange", { oldURL: o, newURL: p })
        : new Event("hashchange", { detail: { oldURL: o, newURL: p } });
    dispatchEvent(v);
  },
  wg = ({ ssrPath: l = "/" } = {}) => [
    ob.useSyncExternalStore(Ub, _b, () => l),
    Bb,
  ];
wg.hrefs = (l) => "#" + l;
var kb = {
  siteMode: "portfolio",
  siteUrl: "",
  showPoweredBy: !1,
  name: "李蓉",
  title: "求职意向：新媒体运营 · 内容运营",
  tagline:
    "中央民族大学新闻传播学硕士在读 · 用内容连接品牌与用户，让数据驱动创作",
  email: "lirong10102002@163.com",
  phone: "13384870500",
  location: "北京 · 每周可实习 4 天",
  avatarUrl: "./avatar.jpg",
  openToWork: !0,
  defaultTheme: "light",
  colorPreset: "indigo",
  resumeTheme: { twoColumn: "indigo", classic: "indigo" },
  contactFormEndpoint: "",
  sections: [
    { id: "about", show: !0 },
    { id: "stats", show: !1 },
    { id: "skills", show: !0 },
    { id: "languages", show: !1 },
    { id: "experience", show: !0 },
    { id: "projects", show: !1 },
    { id: "education", show: !0 },
    { id: "certifications", show: !0 },
    { id: "publications", show: !0 },
    { id: "testimonials", show: !1 },
    { id: "contact", show: !0 },
  ],
  social: { github: "", linkedin: "", twitter: "", website: "" },
  about: `中央民族大学（985）新闻传播学硕士在读，本科毕业于内蒙古大学（211）新闻学专业。

拥有作业帮内容运营、人民网实习记者、政务新媒体宣传、省级考试院编辑四段实习经历：
独立产出 80 条口播成片与 50 篇短视频脚本，50 余篇新闻报道在人民网正式刊发并获首页推荐。

擅长把「选题策划 → 内容生产 → 数据复盘」跑通闭环：既能在剪映和 AI 工具里熬夜剪片，
也能坐下来把完播率和互动率拆成下一版脚本。求职意向为互联网大厂新媒体运营 / 内容运营岗位。
`,
  stats: [
    { label: "口播脚本撰写（篇）", value: 50 },
    { label: "优质口播成片（条）", value: 80 },
    { label: "官方报道刊发（篇）", value: 50, suffix: "+" },
    { label: "图文累计阅读", value: 2, suffix: "w+" },
  ],
  skills: [
    {
      category: "内容创作",
      items: [
        "选题策划",
        "短视频脚本",
        "口播文案",
        "新闻采访",
        "政务文稿",
        "内容合规审核",
      ],
    },
    {
      category: "视频制作",
      items: ["剪映专业版", "数字人口播", "现场实拍品控", "AI 内容生成工具"],
    },
    {
      category: "新媒体运营",
      items: [
        "公众号排版",
        "视频号运营",
        "H5 制作",
        "数据可视化",
        "数据复盘",
        "问卷设计与分析",
      ],
    },
    {
      category: "办公技能",
      items: ["Office 办公套件", "文档处理", "数据归集核对"],
    },
  ],
  experience: [
    {
      company: "作业帮",
      role: "内容运营（实习）",
      period: "2026.06 – 2026.09",
      description: `独立负责短视频内容的脚本策划与文案撰写，内容覆盖产品推广、品牌价值传递等方向；
全程跟进口播视频的现场实拍与内容品控，确保符合平台传播调性；
参与周度内容运营复盘，基于播放量、完播率、互动率等核心数据迭代脚本结构与剪辑节奏。
`,
      highlights: [
        "50 篇口播脚本",
        "80 条优质成片",
        "30 场实拍品控",
        "剪映 / AI 工具",
      ],
    },
    {
      company: "包头市青山区民政局",
      role: "政务宣传实习生",
      period: "2026.01 – 2026.02",
      description: `独立负责新春拜年宣传片创作，完成脚本策划、实地拍摄、后期剪辑全流程，
契合政务宣传风格，成品上线民政局官方新媒体渠道；
撰写政协民生提案初稿、政务通知、党日活动材料等多类型正式文稿，
掌握党政机关行文规范与内容审核标准，严把政治导向与文字质量关。
`,
      highlights: ["宣传片全流程", "政务文稿撰写", "官方新媒体渠道上线"],
    },
    {
      company: "内蒙古自治区教育考试院",
      role: "编辑实习生",
      period: "2025.04 – 2025.06",
      description: `承担省级官方教育招录文件《2025 年内蒙古自治区普通高校招生计划》的
全量文字校对与信息处理工作，对标教育政策规范完成内容审核、招生数据核对与信息核查；
实习期间综合表现优异，获「成绩突出」官方评价。
`,
      highlights: ["省级文件全量校对", "招生数据核对", "「成绩突出」官方评价"],
    },
    {
      company: "人民网",
      role: "实习记者",
      period: "2024.10 – 2025.01",
      description: `围绕基层发展、教育建设、文化交流等主题，独立完成选题策划、实地采访与文稿撰写，
累计正式刊发 50 余篇官方新闻报道，稿件 100% 通过平台内容审核与发布规范，
具备成熟的官方文案创作与合规把控能力。
`,
      highlights: [
        "50+ 篇正式刊发",
        "100% 稿件过审",
        "首页重点推荐 1 篇",
        "自治区优秀奖 1 篇",
      ],
    },
    {
      company: "中央民族大学研究生会",
      role: "调研权益部干事",
      period: "2025.09 – 至今",
      description: `协助宣传工作，收集学生诉求、完成调研问卷设计与数据分析，
精准提炼核心诉求与共性问题，形成调研成果。
`,
      highlights: ["问卷设计", "数据分析"],
    },
    {
      company: "2021 级新闻学团支部",
      role: "团支部书记",
      period: "2021.09 – 2025.06",
      description: `负责组织超过 40 次团日活动，及时传达组织通知赢得同学好评；
所在团支部获「五四红旗团支部」（2024），个人获团日活动设计大赛二等奖（2021）、优秀奖（2023），
具备较强的组织协调能力、团队责任心与集体意识。
`,
      highlights: ["40+ 次团日活动", "五四红旗团支部"],
    },
    {
      company: "内蒙古大学青年志愿者协会",
      role: "宣传部干事",
      period: "2021.09 – 2022.06",
      description: `进行 30+ 篇图文推送的拍剪、编辑、排版工作，推文累计浏览量达 2w+；
熟练掌握排版、H5、二维码、VR、数据可视化等制作方法；
内容通过公众号、线下社群等多渠道分发，覆盖校内师生超千人次。
`,
      highlights: ["30+ 篇图文推送", "2w+ 累计阅读", "H5 / 数据可视化"],
    },
  ],
  education: [
    {
      institution: "中央民族大学（985）· 新闻传播学院",
      degree: "新闻传播学（广告与传媒经济） · 硕士在读",
      period: "2025.09 – 2028.06",
    },
    {
      institution: "内蒙古大学（211）· 文学与新闻传播学院",
      degree: "新闻学 · 本科 · GPA 3.84/4 · 校级一等 / 二等 / 三等奖学金",
      period: "2021.09 – 2025.06",
    },
  ],
  publications: [
    {
      title: "草原村排：一边生活，一边热爱",
      authors: "独立完成选题策划、实地采访与文稿撰写",
      venue: "人民网首页重点推荐",
      year: "2025",
      url: "",
      type: "重点推荐",
      tags: ["基层发展", "全民健身", "首页推荐"],
    },
    {
      title: "我要把这株象征友谊的中国葡萄苗带回家乡",
      authors: "独立完成选题策划、实地采访与文稿撰写",
      venue: "人民网国际频道",
      year: "2025",
      url: "",
      type: "国际传播",
      tags: ["国际传播", "文化交流", "友谊故事"],
    },
    {
      title: "呼和浩特市赛罕区后窑子村有机胡萝卜喜获丰收",
      authors: "独立完成选题策划、实地采访与文稿撰写",
      venue: "获内蒙古自治区优秀奖",
      year: "2024",
      url: "",
      type: "获奖作品",
      tags: ["乡村振兴", "丰收故事", "获奖报道"],
    },
  ],
  certifications: [
    {
      title: "优秀毕业生",
      issuer: "内蒙古大学 · 校级",
      date: "2025",
      credentialUrl: "",
      badgeUrl: "",
      tags: [],
    },
    {
      title: "校级三好学生",
      issuer: "内蒙古大学 · 校级",
      date: "",
      credentialUrl: "",
      badgeUrl: "",
      tags: [],
    },
    {
      title: "优秀团干部 · 优秀学生干部",
      issuer: "内蒙古大学 · 校级",
      date: "",
      credentialUrl: "",
      badgeUrl: "",
      tags: [],
    },
    {
      title: "优秀团员 · 「奉献之星」荣誉称号",
      issuer: "内蒙古大学 · 校级",
      date: "",
      credentialUrl: "",
      badgeUrl: "",
      tags: [],
    },
    {
      title: "「五四红旗团支部」",
      issuer: "任团支部书记期间带领支部获评",
      date: "2024",
      credentialUrl: "",
      badgeUrl: "",
      tags: ["集体荣誉"],
    },
    {
      title: "团日活动设计大赛二等奖 · 优秀奖",
      issuer: "内蒙古大学",
      date: "2021 / 2023",
      credentialUrl: "",
      badgeUrl: "",
      tags: ["赛事获奖"],
    },
    {
      title: "综合奖学金（一等 / 二等 / 三等）",
      issuer: "内蒙古大学 · GPA 3.84/4",
      date: "",
      credentialUrl: "",
      badgeUrl: "",
      tags: [],
    },
  ],
  contactHeading: "联系我",
  contactTitle: `期待与你
共同创造好内容`,
  contactDescription:
    "正在寻找新媒体运营 / 内容运营实习机会，可每周实习 4 天、随时到岗。欢迎 HR 与猎头联系，也欢迎同行朋友交流。",
  blog: { enabled: !1, title: "博客", description: "" },
};
const Be = kb,
  k = {
    ...Be,
    colorPreset: Be.colorPreset,
    defaultTheme: Be.defaultTheme,
    sections: Be.sections,
    stats: Be.stats ?? [],
    languages: Be.languages ?? [],
    certifications: Be.certifications ?? [],
    publications: Be.publications ?? [],
    testimonials: Be.testimonials ?? [],
    showPoweredBy: Be.showPoweredBy,
    contactHeading: Be.contactHeading,
    contactTitle: Be.contactTitle,
    contactDescription: Be.contactDescription,
    analytics: { goatcounterCode: Be.analytics?.goatcounterCode ?? "" },
    blog: {
      enabled: Be.blog?.enabled ?? !1,
      title: Be.blog?.title ?? "Blog",
      description: Be.blog?.description ?? "",
    },
    primaryColor: Be.primaryColor ?? "",
    customColors: Be.customColors,
    resumeTheme: {
      twoColumn: Be.resumeTheme?.twoColumn ?? Be.colorPreset,
      classic: Be.resumeTheme?.classic ?? Be.colorPreset,
    },
  };
function Bn(l, u, { checkForDefaultPrevented: s = !0 } = {}) {
  return function (c) {
    if ((l?.(c), s === !1 || !c.defaultPrevented)) return u?.(c);
  };
}
function dh(l, u) {
  if (typeof l == "function") return l(u);
  l != null && (l.current = u);
}
function Eg(...l) {
  return (u) => {
    let s = !1;
    const o = l.map((c) => {
      const d = dh(c, u);
      return !s && typeof d == "function" && (s = !0), d;
    });
    if (s)
      return () => {
        for (let c = 0; c < o.length; c++) {
          const d = o[c];
          typeof d == "function" ? d() : dh(l[c], null);
        }
      };
  };
}
function ua(...l) {
  return x.useCallback(Eg(...l), l);
}
function Lb(l, u) {
  const s = x.createContext(u),
    o = (d) => {
      const { children: h, ...p } = d,
        v = x.useMemo(() => p, Object.values(p));
      return f.jsx(s.Provider, { value: v, children: h });
    };
  o.displayName = l + "Provider";
  function c(d) {
    const h = x.useContext(s);
    if (h) return h;
    if (u !== void 0) return u;
    throw new Error(`\`${d}\` must be used within \`${l}\``);
  }
  return [o, c];
}
function Hb(l, u = []) {
  let s = [];
  function o(d, h) {
    const p = x.createContext(h),
      v = s.length;
    s = [...s, h];
    const w = (T) => {
      const { scope: M, children: A, ...H } = T,
        z = M?.[l]?.[v] || p,
        O = x.useMemo(() => H, Object.values(H));
      return f.jsx(z.Provider, { value: O, children: A });
    };
    w.displayName = d + "Provider";
    function S(T, M) {
      const A = M?.[l]?.[v] || p,
        H = x.useContext(A);
      if (H) return H;
      if (h !== void 0) return h;
      throw new Error(`\`${T}\` must be used within \`${d}\``);
    }
    return [w, S];
  }
  const c = () => {
    const d = s.map((h) => x.createContext(h));
    return function (p) {
      const v = p?.[l] || d;
      return x.useMemo(() => ({ [`__scope${l}`]: { ...p, [l]: v } }), [p, v]);
    };
  };
  return (c.scopeName = l), [o, qb(c, ...u)];
}
function qb(...l) {
  const u = l[0];
  if (l.length === 1) return u;
  const s = () => {
    const o = l.map((c) => ({ useScope: c(), scopeName: c.scopeName }));
    return function (d) {
      const h = o.reduce((p, { useScope: v, scopeName: w }) => {
        const T = v(d)[`__scope${w}`];
        return { ...p, ...T };
      }, {});
      return x.useMemo(() => ({ [`__scope${u.scopeName}`]: h }), [h]);
    };
  };
  return (s.scopeName = u.scopeName), s;
}
var di = globalThis?.document ? x.useLayoutEffect : () => {},
  Vb = hg[" useId ".trim().toString()] || (() => {}),
  Gb = 0;
function cs(l) {
  const [u, s] = x.useState(Vb());
  return (
    di(() => {
      s((o) => o ?? String(Gb++));
    }, [l]),
    l || (u ? `radix-${u}` : "")
  );
}
var Yb = hg[" useInsertionEffect ".trim().toString()] || di;
function Xb({ prop: l, defaultProp: u, onChange: s = () => {}, caller: o }) {
  const [c, d, h] = Qb({ defaultProp: u, onChange: s }),
    p = l !== void 0,
    v = p ? l : c;
  {
    const S = x.useRef(l !== void 0);
    x.useEffect(() => {
      const T = S.current;
      T !== p &&
        console.warn(
          `${o} is changing from ${T ? "controlled" : "uncontrolled"} to ${p ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
        ),
        (S.current = p);
    }, [p, o]);
  }
  const w = x.useCallback(
    (S) => {
      if (p) {
        const T = Zb(S) ? S(l) : S;
        T !== l && h.current?.(T);
      } else d(S);
    },
    [p, l, d, h],
  );
  return [v, w];
}
function Qb({ defaultProp: l, onChange: u }) {
  const [s, o] = x.useState(l),
    c = x.useRef(s),
    d = x.useRef(u);
  return (
    Yb(() => {
      d.current = u;
    }, [u]),
    x.useEffect(() => {
      c.current !== s && (d.current?.(s), (c.current = s));
    }, [s, c]),
    [s, o, d]
  );
}
function Zb(l) {
  return typeof l == "function";
}
var Ng = pg();
const Kb = gg(Ng);
function jg(l) {
  const u = Jb(l),
    s = x.forwardRef((o, c) => {
      const { children: d, ...h } = o,
        p = x.Children.toArray(d),
        v = p.find(Fb);
      if (v) {
        const w = v.props.children,
          S = p.map((T) =>
            T === v
              ? x.Children.count(w) > 1
                ? x.Children.only(null)
                : x.isValidElement(w)
                  ? w.props.children
                  : null
              : T,
          );
        return f.jsx(u, {
          ...h,
          ref: c,
          children: x.isValidElement(w) ? x.cloneElement(w, void 0, S) : null,
        });
      }
      return f.jsx(u, { ...h, ref: c, children: d });
    });
  return (s.displayName = `${l}.Slot`), s;
}
function Jb(l) {
  const u = x.forwardRef((s, o) => {
    const { children: c, ...d } = s;
    if (x.isValidElement(c)) {
      const h = Ib(c),
        p = Wb(d, c.props);
      return (
        c.type !== x.Fragment && (p.ref = o ? Eg(o, h) : h),
        x.cloneElement(c, p)
      );
    }
    return x.Children.count(c) > 1 ? x.Children.only(null) : null;
  });
  return (u.displayName = `${l}.SlotClone`), u;
}
var $b = Symbol("radix.slottable");
function Fb(l) {
  return (
    x.isValidElement(l) &&
    typeof l.type == "function" &&
    "__radixId" in l.type &&
    l.type.__radixId === $b
  );
}
function Wb(l, u) {
  const s = { ...u };
  for (const o in u) {
    const c = l[o],
      d = u[o];
    /^on[A-Z]/.test(o)
      ? c && d
        ? (s[o] = (...p) => {
            const v = d(...p);
            return c(...p), v;
          })
        : c && (s[o] = c)
      : o === "style"
        ? (s[o] = { ...c, ...d })
        : o === "className" && (s[o] = [c, d].filter(Boolean).join(" "));
  }
  return { ...l, ...s };
}
function Ib(l) {
  let u = Object.getOwnPropertyDescriptor(l.props, "ref")?.get,
    s = u && "isReactWarning" in u && u.isReactWarning;
  return s
    ? l.ref
    : ((u = Object.getOwnPropertyDescriptor(l, "ref")?.get),
      (s = u && "isReactWarning" in u && u.isReactWarning),
      s ? l.props.ref : l.props.ref || l.ref);
}
var Pb = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  ln = Pb.reduce((l, u) => {
    const s = jg(`Primitive.${u}`),
      o = x.forwardRef((c, d) => {
        const { asChild: h, ...p } = c,
          v = h ? s : u;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          f.jsx(v, { ...p, ref: d })
        );
      });
    return (o.displayName = `Primitive.${u}`), { ...l, [u]: o };
  }, {});
function ey(l, u) {
  l && Ng.flushSync(() => l.dispatchEvent(u));
}
function mi(l) {
  const u = x.useRef(l);
  return (
    x.useEffect(() => {
      u.current = l;
    }),
    x.useMemo(
      () =>
        (...s) =>
          u.current?.(...s),
      [],
    )
  );
}
function ty(l, u = globalThis?.document) {
  const s = mi(l);
  x.useEffect(() => {
    const o = (c) => {
      c.key === "Escape" && s(c);
    };
    return (
      u.addEventListener("keydown", o, { capture: !0 }),
      () => u.removeEventListener("keydown", o, { capture: !0 })
    );
  }, [s, u]);
}
var ny = "DismissableLayer",
  Fs = "dismissableLayer.update",
  ay = "dismissableLayer.pointerDownOutside",
  ly = "dismissableLayer.focusOutside",
  mh,
  Ag = x.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Tg = x.forwardRef((l, u) => {
    const {
        disableOutsidePointerEvents: s = !1,
        onEscapeKeyDown: o,
        onPointerDownOutside: c,
        onFocusOutside: d,
        onInteractOutside: h,
        onDismiss: p,
        ...v
      } = l,
      w = x.useContext(Ag),
      [S, T] = x.useState(null),
      M = S?.ownerDocument ?? globalThis?.document,
      [, A] = x.useState({}),
      H = ua(u, (G) => T(G)),
      z = Array.from(w.layers),
      [O] = [...w.layersWithOutsidePointerEventsDisabled].slice(-1),
      q = z.indexOf(O),
      Q = S ? z.indexOf(S) : -1,
      Y = w.layersWithOutsidePointerEventsDisabled.size > 0,
      V = Q >= q,
      W = oy((G) => {
        const U = G.target,
          Z = [...w.branches].some((ne) => ne.contains(U));
        !V || Z || (c?.(G), h?.(G), G.defaultPrevented || p?.());
      }, M),
      X = uy((G) => {
        const U = G.target;
        [...w.branches].some((ne) => ne.contains(U)) ||
          (d?.(G), h?.(G), G.defaultPrevented || p?.());
      }, M);
    return (
      ty((G) => {
        Q === w.layers.size - 1 &&
          (o?.(G), !G.defaultPrevented && p && (G.preventDefault(), p()));
      }, M),
      x.useEffect(() => {
        if (S)
          return (
            s &&
              (w.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((mh = M.body.style.pointerEvents),
                (M.body.style.pointerEvents = "none")),
              w.layersWithOutsidePointerEventsDisabled.add(S)),
            w.layers.add(S),
            hh(),
            () => {
              s &&
                w.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (M.body.style.pointerEvents = mh);
            }
          );
      }, [S, M, s, w]),
      x.useEffect(
        () => () => {
          S &&
            (w.layers.delete(S),
            w.layersWithOutsidePointerEventsDisabled.delete(S),
            hh());
        },
        [S, w],
      ),
      x.useEffect(() => {
        const G = () => A({});
        return (
          document.addEventListener(Fs, G),
          () => document.removeEventListener(Fs, G)
        );
      }, []),
      f.jsx(ln.div, {
        ...v,
        ref: H,
        style: {
          pointerEvents: Y ? (V ? "auto" : "none") : void 0,
          ...l.style,
        },
        onFocusCapture: Bn(l.onFocusCapture, X.onFocusCapture),
        onBlurCapture: Bn(l.onBlurCapture, X.onBlurCapture),
        onPointerDownCapture: Bn(
          l.onPointerDownCapture,
          W.onPointerDownCapture,
        ),
      })
    );
  });
Tg.displayName = ny;
var iy = "DismissableLayerBranch",
  ry = x.forwardRef((l, u) => {
    const s = x.useContext(Ag),
      o = x.useRef(null),
      c = ua(u, o);
    return (
      x.useEffect(() => {
        const d = o.current;
        if (d)
          return (
            s.branches.add(d),
            () => {
              s.branches.delete(d);
            }
          );
      }, [s.branches]),
      f.jsx(ln.div, { ...l, ref: c })
    );
  });
ry.displayName = iy;
function oy(l, u = globalThis?.document) {
  const s = mi(l),
    o = x.useRef(!1),
    c = x.useRef(() => {});
  return (
    x.useEffect(() => {
      const d = (p) => {
          if (p.target && !o.current) {
            let v = function () {
              Cg(ay, s, w, { discrete: !0 });
            };
            const w = { originalEvent: p };
            p.pointerType === "touch"
              ? (u.removeEventListener("click", c.current),
                (c.current = v),
                u.addEventListener("click", c.current, { once: !0 }))
              : v();
          } else u.removeEventListener("click", c.current);
          o.current = !1;
        },
        h = window.setTimeout(() => {
          u.addEventListener("pointerdown", d);
        }, 0);
      return () => {
        window.clearTimeout(h),
          u.removeEventListener("pointerdown", d),
          u.removeEventListener("click", c.current);
      };
    }, [u, s]),
    { onPointerDownCapture: () => (o.current = !0) }
  );
}
function uy(l, u = globalThis?.document) {
  const s = mi(l),
    o = x.useRef(!1);
  return (
    x.useEffect(() => {
      const c = (d) => {
        d.target &&
          !o.current &&
          Cg(ly, s, { originalEvent: d }, { discrete: !1 });
      };
      return (
        u.addEventListener("focusin", c),
        () => u.removeEventListener("focusin", c)
      );
    }, [u, s]),
    {
      onFocusCapture: () => (o.current = !0),
      onBlurCapture: () => (o.current = !1),
    }
  );
}
function hh() {
  const l = new CustomEvent(Fs);
  document.dispatchEvent(l);
}
function Cg(l, u, s, { discrete: o }) {
  const c = s.originalEvent.target,
    d = new CustomEvent(l, { bubbles: !1, cancelable: !0, detail: s });
  u && c.addEventListener(l, u, { once: !0 }),
    o ? ey(c, d) : c.dispatchEvent(d);
}
var fs = "focusScope.autoFocusOnMount",
  ds = "focusScope.autoFocusOnUnmount",
  gh = { bubbles: !1, cancelable: !0 },
  sy = "FocusScope",
  Mg = x.forwardRef((l, u) => {
    const {
        loop: s = !1,
        trapped: o = !1,
        onMountAutoFocus: c,
        onUnmountAutoFocus: d,
        ...h
      } = l,
      [p, v] = x.useState(null),
      w = mi(c),
      S = mi(d),
      T = x.useRef(null),
      M = ua(u, (z) => v(z)),
      A = x.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    x.useEffect(() => {
      if (o) {
        let z = function (Y) {
            if (A.paused || !p) return;
            const V = Y.target;
            p.contains(V) ? (T.current = V) : _n(T.current, { select: !0 });
          },
          O = function (Y) {
            if (A.paused || !p) return;
            const V = Y.relatedTarget;
            V !== null && (p.contains(V) || _n(T.current, { select: !0 }));
          },
          q = function (Y) {
            if (document.activeElement === document.body)
              for (const W of Y) W.removedNodes.length > 0 && _n(p);
          };
        document.addEventListener("focusin", z),
          document.addEventListener("focusout", O);
        const Q = new MutationObserver(q);
        return (
          p && Q.observe(p, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", z),
              document.removeEventListener("focusout", O),
              Q.disconnect();
          }
        );
      }
    }, [o, p, A.paused]),
      x.useEffect(() => {
        if (p) {
          vh.add(A);
          const z = document.activeElement;
          if (!p.contains(z)) {
            const q = new CustomEvent(fs, gh);
            p.addEventListener(fs, w),
              p.dispatchEvent(q),
              q.defaultPrevented ||
                (cy(gy(zg(p)), { select: !0 }),
                document.activeElement === z && _n(p));
          }
          return () => {
            p.removeEventListener(fs, w),
              setTimeout(() => {
                const q = new CustomEvent(ds, gh);
                p.addEventListener(ds, S),
                  p.dispatchEvent(q),
                  q.defaultPrevented || _n(z ?? document.body, { select: !0 }),
                  p.removeEventListener(ds, S),
                  vh.remove(A);
              }, 0);
          };
        }
      }, [p, w, S, A]);
    const H = x.useCallback(
      (z) => {
        if ((!s && !o) || A.paused) return;
        const O = z.key === "Tab" && !z.altKey && !z.ctrlKey && !z.metaKey,
          q = document.activeElement;
        if (O && q) {
          const Q = z.currentTarget,
            [Y, V] = fy(Q);
          Y && V
            ? !z.shiftKey && q === V
              ? (z.preventDefault(), s && _n(Y, { select: !0 }))
              : z.shiftKey &&
                q === Y &&
                (z.preventDefault(), s && _n(V, { select: !0 }))
            : q === Q && z.preventDefault();
        }
      },
      [s, o, A.paused],
    );
    return f.jsx(ln.div, { tabIndex: -1, ...h, ref: M, onKeyDown: H });
  });
Mg.displayName = sy;
function cy(l, { select: u = !1 } = {}) {
  const s = document.activeElement;
  for (const o of l)
    if ((_n(o, { select: u }), document.activeElement !== s)) return;
}
function fy(l) {
  const u = zg(l),
    s = ph(u, l),
    o = ph(u.reverse(), l);
  return [s, o];
}
function zg(l) {
  const u = [],
    s = document.createTreeWalker(l, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (o) => {
        const c = o.tagName === "INPUT" && o.type === "hidden";
        return o.disabled || o.hidden || c
          ? NodeFilter.FILTER_SKIP
          : o.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; s.nextNode(); ) u.push(s.currentNode);
  return u;
}
function ph(l, u) {
  for (const s of l) if (!dy(s, { upTo: u })) return s;
}
function dy(l, { upTo: u }) {
  if (getComputedStyle(l).visibility === "hidden") return !0;
  for (; l; ) {
    if (u !== void 0 && l === u) return !1;
    if (getComputedStyle(l).display === "none") return !0;
    l = l.parentElement;
  }
  return !1;
}
function my(l) {
  return l instanceof HTMLInputElement && "select" in l;
}
function _n(l, { select: u = !1 } = {}) {
  if (l && l.focus) {
    const s = document.activeElement;
    l.focus({ preventScroll: !0 }), l !== s && my(l) && u && l.select();
  }
}
var vh = hy();
function hy() {
  let l = [];
  return {
    add(u) {
      const s = l[0];
      u !== s && s?.pause(), (l = bh(l, u)), l.unshift(u);
    },
    remove(u) {
      (l = bh(l, u)), l[0]?.resume();
    },
  };
}
function bh(l, u) {
  const s = [...l],
    o = s.indexOf(u);
  return o !== -1 && s.splice(o, 1), s;
}
function gy(l) {
  return l.filter((u) => u.tagName !== "A");
}
var py = "Portal",
  Dg = x.forwardRef((l, u) => {
    const { container: s, ...o } = l,
      [c, d] = x.useState(!1);
    di(() => d(!0), []);
    const h = s || (c && globalThis?.document?.body);
    return h ? Kb.createPortal(f.jsx(ln.div, { ...o, ref: u }), h) : null;
  });
Dg.displayName = py;
function vy(l, u) {
  return x.useReducer((s, o) => u[s][o] ?? s, l);
}
var Qr = (l) => {
  const { present: u, children: s } = l,
    o = by(u),
    c =
      typeof s == "function" ? s({ present: o.isPresent }) : x.Children.only(s),
    d = ua(o.ref, yy(c));
  return typeof s == "function" || o.isPresent
    ? x.cloneElement(c, { ref: d })
    : null;
};
Qr.displayName = "Presence";
function by(l) {
  const [u, s] = x.useState(),
    o = x.useRef(null),
    c = x.useRef(l),
    d = x.useRef("none"),
    h = l ? "mounted" : "unmounted",
    [p, v] = vy(h, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    x.useEffect(() => {
      const w = zr(o.current);
      d.current = p === "mounted" ? w : "none";
    }, [p]),
    di(() => {
      const w = o.current,
        S = c.current;
      if (S !== l) {
        const M = d.current,
          A = zr(w);
        l
          ? v("MOUNT")
          : A === "none" || w?.display === "none"
            ? v("UNMOUNT")
            : v(S && M !== A ? "ANIMATION_OUT" : "UNMOUNT"),
          (c.current = l);
      }
    }, [l, v]),
    di(() => {
      if (u) {
        let w;
        const S = u.ownerDocument.defaultView ?? window,
          T = (A) => {
            const z = zr(o.current).includes(CSS.escape(A.animationName));
            if (A.target === u && z && (v("ANIMATION_END"), !c.current)) {
              const O = u.style.animationFillMode;
              (u.style.animationFillMode = "forwards"),
                (w = S.setTimeout(() => {
                  u.style.animationFillMode === "forwards" &&
                    (u.style.animationFillMode = O);
                }));
            }
          },
          M = (A) => {
            A.target === u && (d.current = zr(o.current));
          };
        return (
          u.addEventListener("animationstart", M),
          u.addEventListener("animationcancel", T),
          u.addEventListener("animationend", T),
          () => {
            S.clearTimeout(w),
              u.removeEventListener("animationstart", M),
              u.removeEventListener("animationcancel", T),
              u.removeEventListener("animationend", T);
          }
        );
      } else v("ANIMATION_END");
    }, [u, v]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(p),
      ref: x.useCallback((w) => {
        (o.current = w ? getComputedStyle(w) : null), s(w);
      }, []),
    }
  );
}
function zr(l) {
  return l?.animationName || "none";
}
function yy(l) {
  let u = Object.getOwnPropertyDescriptor(l.props, "ref")?.get,
    s = u && "isReactWarning" in u && u.isReactWarning;
  return s
    ? l.ref
    : ((u = Object.getOwnPropertyDescriptor(l, "ref")?.get),
      (s = u && "isReactWarning" in u && u.isReactWarning),
      s ? l.props.ref : l.props.ref || l.ref);
}
var ms = 0;
function xy() {
  x.useEffect(() => {
    const l = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", l[0] ?? yh()),
      document.body.insertAdjacentElement("beforeend", l[1] ?? yh()),
      ms++,
      () => {
        ms === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((u) => u.remove()),
          ms--;
      }
    );
  }, []);
}
function yh() {
  const l = document.createElement("span");
  return (
    l.setAttribute("data-radix-focus-guard", ""),
    (l.tabIndex = 0),
    (l.style.outline = "none"),
    (l.style.opacity = "0"),
    (l.style.position = "fixed"),
    (l.style.pointerEvents = "none"),
    l
  );
}
var qt = function () {
  return (
    (qt =
      Object.assign ||
      function (u) {
        for (var s, o = 1, c = arguments.length; o < c; o++) {
          s = arguments[o];
          for (var d in s)
            Object.prototype.hasOwnProperty.call(s, d) && (u[d] = s[d]);
        }
        return u;
      }),
    qt.apply(this, arguments)
  );
};
function Rg(l, u) {
  var s = {};
  for (var o in l)
    Object.prototype.hasOwnProperty.call(l, o) &&
      u.indexOf(o) < 0 &&
      (s[o] = l[o]);
  if (l != null && typeof Object.getOwnPropertySymbols == "function")
    for (var c = 0, o = Object.getOwnPropertySymbols(l); c < o.length; c++)
      u.indexOf(o[c]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(l, o[c]) &&
        (s[o[c]] = l[o[c]]);
  return s;
}
function Sy(l, u, s) {
  if (s || arguments.length === 2)
    for (var o = 0, c = u.length, d; o < c; o++)
      (d || !(o in u)) &&
        (d || (d = Array.prototype.slice.call(u, 0, o)), (d[o] = u[o]));
  return l.concat(d || Array.prototype.slice.call(u));
}
var Hr = "right-scroll-bar-position",
  qr = "width-before-scroll-bar",
  wy = "with-scroll-bars-hidden",
  Ey = "--removed-body-scroll-bar-size";
function hs(l, u) {
  return typeof l == "function" ? l(u) : l && (l.current = u), l;
}
function Ny(l, u) {
  var s = x.useState(function () {
    return {
      value: l,
      callback: u,
      facade: {
        get current() {
          return s.value;
        },
        set current(o) {
          var c = s.value;
          c !== o && ((s.value = o), s.callback(o, c));
        },
      },
    };
  })[0];
  return (s.callback = u), s.facade;
}
var jy = typeof window < "u" ? x.useLayoutEffect : x.useEffect,
  xh = new WeakMap();
function Ay(l, u) {
  var s = Ny(null, function (o) {
    return l.forEach(function (c) {
      return hs(c, o);
    });
  });
  return (
    jy(
      function () {
        var o = xh.get(s);
        if (o) {
          var c = new Set(o),
            d = new Set(l),
            h = s.current;
          c.forEach(function (p) {
            d.has(p) || hs(p, null);
          }),
            d.forEach(function (p) {
              c.has(p) || hs(p, h);
            });
        }
        xh.set(s, l);
      },
      [l],
    ),
    s
  );
}
function Ty(l) {
  return l;
}
function Cy(l, u) {
  u === void 0 && (u = Ty);
  var s = [],
    o = !1,
    c = {
      read: function () {
        if (o)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
          );
        return s.length ? s[s.length - 1] : l;
      },
      useMedium: function (d) {
        var h = u(d, o);
        return (
          s.push(h),
          function () {
            s = s.filter(function (p) {
              return p !== h;
            });
          }
        );
      },
      assignSyncMedium: function (d) {
        for (o = !0; s.length; ) {
          var h = s;
          (s = []), h.forEach(d);
        }
        s = {
          push: function (p) {
            return d(p);
          },
          filter: function () {
            return s;
          },
        };
      },
      assignMedium: function (d) {
        o = !0;
        var h = [];
        if (s.length) {
          var p = s;
          (s = []), p.forEach(d), (h = s);
        }
        var v = function () {
            var S = h;
            (h = []), S.forEach(d);
          },
          w = function () {
            return Promise.resolve().then(v);
          };
        w(),
          (s = {
            push: function (S) {
              h.push(S), w();
            },
            filter: function (S) {
              return (h = h.filter(S)), s;
            },
          });
      },
    };
  return c;
}
function My(l) {
  l === void 0 && (l = {});
  var u = Cy(null);
  return (u.options = qt({ async: !0, ssr: !1 }, l)), u;
}
var Og = function (l) {
  var u = l.sideCar,
    s = Rg(l, ["sideCar"]);
  if (!u)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car",
    );
  var o = u.read();
  if (!o) throw new Error("Sidecar medium not found");
  return x.createElement(o, qt({}, s));
};
Og.isSideCarExport = !0;
function zy(l, u) {
  return l.useMedium(u), Og;
}
var Ug = My(),
  gs = function () {},
  Zr = x.forwardRef(function (l, u) {
    var s = x.useRef(null),
      o = x.useState({
        onScrollCapture: gs,
        onWheelCapture: gs,
        onTouchMoveCapture: gs,
      }),
      c = o[0],
      d = o[1],
      h = l.forwardProps,
      p = l.children,
      v = l.className,
      w = l.removeScrollBar,
      S = l.enabled,
      T = l.shards,
      M = l.sideCar,
      A = l.noRelative,
      H = l.noIsolation,
      z = l.inert,
      O = l.allowPinchZoom,
      q = l.as,
      Q = q === void 0 ? "div" : q,
      Y = l.gapMode,
      V = Rg(l, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noRelative",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      W = M,
      X = Ay([s, u]),
      G = qt(qt({}, V), c);
    return x.createElement(
      x.Fragment,
      null,
      S &&
        x.createElement(W, {
          sideCar: Ug,
          removeScrollBar: w,
          shards: T,
          noRelative: A,
          noIsolation: H,
          inert: z,
          setCallbacks: d,
          allowPinchZoom: !!O,
          lockRef: s,
          gapMode: Y,
        }),
      h
        ? x.cloneElement(x.Children.only(p), qt(qt({}, G), { ref: X }))
        : x.createElement(Q, qt({}, G, { className: v, ref: X }), p),
    );
  });
Zr.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Zr.classNames = { fullWidth: qr, zeroRight: Hr };
var Dy = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function Ry() {
  if (!document) return null;
  var l = document.createElement("style");
  l.type = "text/css";
  var u = Dy();
  return u && l.setAttribute("nonce", u), l;
}
function Oy(l, u) {
  l.styleSheet
    ? (l.styleSheet.cssText = u)
    : l.appendChild(document.createTextNode(u));
}
function Uy(l) {
  var u = document.head || document.getElementsByTagName("head")[0];
  u.appendChild(l);
}
var _y = function () {
    var l = 0,
      u = null;
    return {
      add: function (s) {
        l == 0 && (u = Ry()) && (Oy(u, s), Uy(u)), l++;
      },
      remove: function () {
        l--,
          !l && u && (u.parentNode && u.parentNode.removeChild(u), (u = null));
      },
    };
  },
  By = function () {
    var l = _y();
    return function (u, s) {
      x.useEffect(
        function () {
          return (
            l.add(u),
            function () {
              l.remove();
            }
          );
        },
        [u && s],
      );
    };
  },
  _g = function () {
    var l = By(),
      u = function (s) {
        var o = s.styles,
          c = s.dynamic;
        return l(o, c), null;
      };
    return u;
  },
  ky = { left: 0, top: 0, right: 0, gap: 0 },
  ps = function (l) {
    return parseInt(l || "", 10) || 0;
  },
  Ly = function (l) {
    var u = window.getComputedStyle(document.body),
      s = u[l === "padding" ? "paddingLeft" : "marginLeft"],
      o = u[l === "padding" ? "paddingTop" : "marginTop"],
      c = u[l === "padding" ? "paddingRight" : "marginRight"];
    return [ps(s), ps(o), ps(c)];
  },
  Hy = function (l) {
    if ((l === void 0 && (l = "margin"), typeof window > "u")) return ky;
    var u = Ly(l),
      s = document.documentElement.clientWidth,
      o = window.innerWidth;
    return {
      left: u[0],
      top: u[1],
      right: u[2],
      gap: Math.max(0, o - s + u[2] - u[0]),
    };
  },
  qy = _g(),
  il = "data-scroll-locked",
  Vy = function (l, u, s, o) {
    var c = l.left,
      d = l.top,
      h = l.right,
      p = l.gap;
    return (
      s === void 0 && (s = "margin"),
      `
  .`
        .concat(
          wy,
          ` {
   overflow: hidden `,
        )
        .concat(
          o,
          `;
   padding-right: `,
        )
        .concat(p, "px ")
        .concat(
          o,
          `;
  }
  body[`,
        )
        .concat(
          il,
          `] {
    overflow: hidden `,
        )
        .concat(
          o,
          `;
    overscroll-behavior: contain;
    `,
        )
        .concat(
          [
            u && "position: relative ".concat(o, ";"),
            s === "margin" &&
              `
    padding-left: `
                .concat(
                  c,
                  `px;
    padding-top: `,
                )
                .concat(
                  d,
                  `px;
    padding-right: `,
                )
                .concat(
                  h,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                )
                .concat(p, "px ")
                .concat(
                  o,
                  `;
    `,
                ),
            s === "padding" &&
              "padding-right: ".concat(p, "px ").concat(o, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`,
        )
        .concat(
          Hr,
          ` {
    right: `,
        )
        .concat(p, "px ")
        .concat(
          o,
          `;
  }
  
  .`,
        )
        .concat(
          qr,
          ` {
    margin-right: `,
        )
        .concat(p, "px ")
        .concat(
          o,
          `;
  }
  
  .`,
        )
        .concat(Hr, " .")
        .concat(
          Hr,
          ` {
    right: 0 `,
        )
        .concat(
          o,
          `;
  }
  
  .`,
        )
        .concat(qr, " .")
        .concat(
          qr,
          ` {
    margin-right: 0 `,
        )
        .concat(
          o,
          `;
  }
  
  body[`,
        )
        .concat(
          il,
          `] {
    `,
        )
        .concat(Ey, ": ")
        .concat(
          p,
          `px;
  }
`,
        )
    );
  },
  Sh = function () {
    var l = parseInt(document.body.getAttribute(il) || "0", 10);
    return isFinite(l) ? l : 0;
  },
  Gy = function () {
    x.useEffect(function () {
      return (
        document.body.setAttribute(il, (Sh() + 1).toString()),
        function () {
          var l = Sh() - 1;
          l <= 0
            ? document.body.removeAttribute(il)
            : document.body.setAttribute(il, l.toString());
        }
      );
    }, []);
  },
  Yy = function (l) {
    var u = l.noRelative,
      s = l.noImportant,
      o = l.gapMode,
      c = o === void 0 ? "margin" : o;
    Gy();
    var d = x.useMemo(
      function () {
        return Hy(c);
      },
      [c],
    );
    return x.createElement(qy, { styles: Vy(d, !u, c, s ? "" : "!important") });
  },
  Ws = !1;
if (typeof window < "u")
  try {
    var Dr = Object.defineProperty({}, "passive", {
      get: function () {
        return (Ws = !0), !0;
      },
    });
    window.addEventListener("test", Dr, Dr),
      window.removeEventListener("test", Dr, Dr);
  } catch {
    Ws = !1;
  }
var Ia = Ws ? { passive: !1 } : !1,
  Xy = function (l) {
    return l.tagName === "TEXTAREA";
  },
  Bg = function (l, u) {
    if (!(l instanceof Element)) return !1;
    var s = window.getComputedStyle(l);
    return (
      s[u] !== "hidden" &&
      !(s.overflowY === s.overflowX && !Xy(l) && s[u] === "visible")
    );
  },
  Qy = function (l) {
    return Bg(l, "overflowY");
  },
  Zy = function (l) {
    return Bg(l, "overflowX");
  },
  wh = function (l, u) {
    var s = u.ownerDocument,
      o = u;
    do {
      typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
      var c = kg(l, o);
      if (c) {
        var d = Lg(l, o),
          h = d[1],
          p = d[2];
        if (h > p) return !0;
      }
      o = o.parentNode;
    } while (o && o !== s.body);
    return !1;
  },
  Ky = function (l) {
    var u = l.scrollTop,
      s = l.scrollHeight,
      o = l.clientHeight;
    return [u, s, o];
  },
  Jy = function (l) {
    var u = l.scrollLeft,
      s = l.scrollWidth,
      o = l.clientWidth;
    return [u, s, o];
  },
  kg = function (l, u) {
    return l === "v" ? Qy(u) : Zy(u);
  },
  Lg = function (l, u) {
    return l === "v" ? Ky(u) : Jy(u);
  },
  $y = function (l, u) {
    return l === "h" && u === "rtl" ? -1 : 1;
  },
  Fy = function (l, u, s, o, c) {
    var d = $y(l, window.getComputedStyle(u).direction),
      h = d * o,
      p = s.target,
      v = u.contains(p),
      w = !1,
      S = h > 0,
      T = 0,
      M = 0;
    do {
      if (!p) break;
      var A = Lg(l, p),
        H = A[0],
        z = A[1],
        O = A[2],
        q = z - O - d * H;
      (H || q) && kg(l, p) && ((T += q), (M += H));
      var Q = p.parentNode;
      p = Q && Q.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? Q.host : Q;
    } while ((!v && p !== document.body) || (v && (u.contains(p) || u === p)));
    return ((S && Math.abs(T) < 1) || (!S && Math.abs(M) < 1)) && (w = !0), w;
  },
  Rr = function (l) {
    return "changedTouches" in l
      ? [l.changedTouches[0].clientX, l.changedTouches[0].clientY]
      : [0, 0];
  },
  Eh = function (l) {
    return [l.deltaX, l.deltaY];
  },
  Nh = function (l) {
    return l && "current" in l ? l.current : l;
  },
  Wy = function (l, u) {
    return l[0] === u[0] && l[1] === u[1];
  },
  Iy = function (l) {
    return `
  .block-interactivity-`
      .concat(
        l,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        l,
        ` {pointer-events: all;}
`,
      );
  },
  Py = 0,
  Pa = [];
function e1(l) {
  var u = x.useRef([]),
    s = x.useRef([0, 0]),
    o = x.useRef(),
    c = x.useState(Py++)[0],
    d = x.useState(_g)[0],
    h = x.useRef(l);
  x.useEffect(
    function () {
      h.current = l;
    },
    [l],
  ),
    x.useEffect(
      function () {
        if (l.inert) {
          document.body.classList.add("block-interactivity-".concat(c));
          var z = Sy([l.lockRef.current], (l.shards || []).map(Nh), !0).filter(
            Boolean,
          );
          return (
            z.forEach(function (O) {
              return O.classList.add("allow-interactivity-".concat(c));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(c)),
                z.forEach(function (O) {
                  return O.classList.remove("allow-interactivity-".concat(c));
                });
            }
          );
        }
      },
      [l.inert, l.lockRef.current, l.shards],
    );
  var p = x.useCallback(function (z, O) {
      if (
        ("touches" in z && z.touches.length === 2) ||
        (z.type === "wheel" && z.ctrlKey)
      )
        return !h.current.allowPinchZoom;
      var q = Rr(z),
        Q = s.current,
        Y = "deltaX" in z ? z.deltaX : Q[0] - q[0],
        V = "deltaY" in z ? z.deltaY : Q[1] - q[1],
        W,
        X = z.target,
        G = Math.abs(Y) > Math.abs(V) ? "h" : "v";
      if ("touches" in z && G === "h" && X.type === "range") return !1;
      var U = window.getSelection(),
        Z = U && U.anchorNode,
        ne = Z ? Z === X || Z.contains(X) : !1;
      if (ne) return !1;
      var I = wh(G, X);
      if (!I) return !0;
      if ((I ? (W = G) : ((W = G === "v" ? "h" : "v"), (I = wh(G, X))), !I))
        return !1;
      if (
        (!o.current && "changedTouches" in z && (Y || V) && (o.current = W), !W)
      )
        return !0;
      var F = o.current || W;
      return Fy(F, O, z, F === "h" ? Y : V);
    }, []),
    v = x.useCallback(function (z) {
      var O = z;
      if (!(!Pa.length || Pa[Pa.length - 1] !== d)) {
        var q = "deltaY" in O ? Eh(O) : Rr(O),
          Q = u.current.filter(function (W) {
            return (
              W.name === O.type &&
              (W.target === O.target || O.target === W.shadowParent) &&
              Wy(W.delta, q)
            );
          })[0];
        if (Q && Q.should) {
          O.cancelable && O.preventDefault();
          return;
        }
        if (!Q) {
          var Y = (h.current.shards || [])
              .map(Nh)
              .filter(Boolean)
              .filter(function (W) {
                return W.contains(O.target);
              }),
            V = Y.length > 0 ? p(O, Y[0]) : !h.current.noIsolation;
          V && O.cancelable && O.preventDefault();
        }
      }
    }, []),
    w = x.useCallback(function (z, O, q, Q) {
      var Y = { name: z, delta: O, target: q, should: Q, shadowParent: t1(q) };
      u.current.push(Y),
        setTimeout(function () {
          u.current = u.current.filter(function (V) {
            return V !== Y;
          });
        }, 1);
    }, []),
    S = x.useCallback(function (z) {
      (s.current = Rr(z)), (o.current = void 0);
    }, []),
    T = x.useCallback(function (z) {
      w(z.type, Eh(z), z.target, p(z, l.lockRef.current));
    }, []),
    M = x.useCallback(function (z) {
      w(z.type, Rr(z), z.target, p(z, l.lockRef.current));
    }, []);
  x.useEffect(function () {
    return (
      Pa.push(d),
      l.setCallbacks({
        onScrollCapture: T,
        onWheelCapture: T,
        onTouchMoveCapture: M,
      }),
      document.addEventListener("wheel", v, Ia),
      document.addEventListener("touchmove", v, Ia),
      document.addEventListener("touchstart", S, Ia),
      function () {
        (Pa = Pa.filter(function (z) {
          return z !== d;
        })),
          document.removeEventListener("wheel", v, Ia),
          document.removeEventListener("touchmove", v, Ia),
          document.removeEventListener("touchstart", S, Ia);
      }
    );
  }, []);
  var A = l.removeScrollBar,
    H = l.inert;
  return x.createElement(
    x.Fragment,
    null,
    H ? x.createElement(d, { styles: Iy(c) }) : null,
    A
      ? x.createElement(Yy, { noRelative: l.noRelative, gapMode: l.gapMode })
      : null,
  );
}
function t1(l) {
  for (var u = null; l !== null; )
    l instanceof ShadowRoot && ((u = l.host), (l = l.host)), (l = l.parentNode);
  return u;
}
const n1 = zy(Ug, e1);
var Hg = x.forwardRef(function (l, u) {
  return x.createElement(Zr, qt({}, l, { ref: u, sideCar: n1 }));
});
Hg.classNames = Zr.classNames;
var a1 = function (l) {
    if (typeof document > "u") return null;
    var u = Array.isArray(l) ? l[0] : l;
    return u.ownerDocument.body;
  },
  el = new WeakMap(),
  Or = new WeakMap(),
  Ur = {},
  vs = 0,
  qg = function (l) {
    return l && (l.host || qg(l.parentNode));
  },
  l1 = function (l, u) {
    return u
      .map(function (s) {
        if (l.contains(s)) return s;
        var o = qg(s);
        return o && l.contains(o)
          ? o
          : (console.error(
              "aria-hidden",
              s,
              "in not contained inside",
              l,
              ". Doing nothing",
            ),
            null);
      })
      .filter(function (s) {
        return !!s;
      });
  },
  i1 = function (l, u, s, o) {
    var c = l1(u, Array.isArray(l) ? l : [l]);
    Ur[s] || (Ur[s] = new WeakMap());
    var d = Ur[s],
      h = [],
      p = new Set(),
      v = new Set(c),
      w = function (T) {
        !T || p.has(T) || (p.add(T), w(T.parentNode));
      };
    c.forEach(w);
    var S = function (T) {
      !T ||
        v.has(T) ||
        Array.prototype.forEach.call(T.children, function (M) {
          if (p.has(M)) S(M);
          else
            try {
              var A = M.getAttribute(o),
                H = A !== null && A !== "false",
                z = (el.get(M) || 0) + 1,
                O = (d.get(M) || 0) + 1;
              el.set(M, z),
                d.set(M, O),
                h.push(M),
                z === 1 && H && Or.set(M, !0),
                O === 1 && M.setAttribute(s, "true"),
                H || M.setAttribute(o, "true");
            } catch (q) {
              console.error("aria-hidden: cannot operate on ", M, q);
            }
        });
    };
    return (
      S(u),
      p.clear(),
      vs++,
      function () {
        h.forEach(function (T) {
          var M = el.get(T) - 1,
            A = d.get(T) - 1;
          el.set(T, M),
            d.set(T, A),
            M || (Or.has(T) || T.removeAttribute(o), Or.delete(T)),
            A || T.removeAttribute(s);
        }),
          vs--,
          vs ||
            ((el = new WeakMap()),
            (el = new WeakMap()),
            (Or = new WeakMap()),
            (Ur = {}));
      }
    );
  },
  r1 = function (l, u, s) {
    s === void 0 && (s = "data-aria-hidden");
    var o = Array.from(Array.isArray(l) ? l : [l]),
      c = a1(l);
    return c
      ? (o.push.apply(o, Array.from(c.querySelectorAll("[aria-live], script"))),
        i1(o, c, s, "aria-hidden"))
      : function () {
          return null;
        };
  },
  Kr = "Dialog",
  [Vg] = Hb(Kr),
  [o1, Dt] = Vg(Kr),
  Gg = (l) => {
    const {
        __scopeDialog: u,
        children: s,
        open: o,
        defaultOpen: c,
        onOpenChange: d,
        modal: h = !0,
      } = l,
      p = x.useRef(null),
      v = x.useRef(null),
      [w, S] = Xb({ prop: o, defaultProp: c ?? !1, onChange: d, caller: Kr });
    return f.jsx(o1, {
      scope: u,
      triggerRef: p,
      contentRef: v,
      contentId: cs(),
      titleId: cs(),
      descriptionId: cs(),
      open: w,
      onOpenChange: S,
      onOpenToggle: x.useCallback(() => S((T) => !T), [S]),
      modal: h,
      children: s,
    });
  };
Gg.displayName = Kr;
var Yg = "DialogTrigger",
  u1 = x.forwardRef((l, u) => {
    const { __scopeDialog: s, ...o } = l,
      c = Dt(Yg, s),
      d = ua(u, c.triggerRef);
    return f.jsx(ln.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": c.open,
      "aria-controls": c.contentId,
      "data-state": lc(c.open),
      ...o,
      ref: d,
      onClick: Bn(l.onClick, c.onOpenToggle),
    });
  });
u1.displayName = Yg;
var nc = "DialogPortal",
  [s1, Xg] = Vg(nc, { forceMount: void 0 }),
  Qg = (l) => {
    const { __scopeDialog: u, forceMount: s, children: o, container: c } = l,
      d = Dt(nc, u);
    return f.jsx(s1, {
      scope: u,
      forceMount: s,
      children: x.Children.map(o, (h) =>
        f.jsx(Qr, {
          present: s || d.open,
          children: f.jsx(Dg, { asChild: !0, container: c, children: h }),
        }),
      ),
    });
  };
Qg.displayName = nc;
var Vr = "DialogOverlay",
  Zg = x.forwardRef((l, u) => {
    const s = Xg(Vr, l.__scopeDialog),
      { forceMount: o = s.forceMount, ...c } = l,
      d = Dt(Vr, l.__scopeDialog);
    return d.modal
      ? f.jsx(Qr, {
          present: o || d.open,
          children: f.jsx(f1, { ...c, ref: u }),
        })
      : null;
  });
Zg.displayName = Vr;
var c1 = jg("DialogOverlay.RemoveScroll"),
  f1 = x.forwardRef((l, u) => {
    const { __scopeDialog: s, ...o } = l,
      c = Dt(Vr, s);
    return f.jsx(Hg, {
      as: c1,
      allowPinchZoom: !0,
      shards: [c.contentRef],
      children: f.jsx(ln.div, {
        "data-state": lc(c.open),
        ...o,
        ref: u,
        style: { pointerEvents: "auto", ...o.style },
      }),
    });
  }),
  oa = "DialogContent",
  Kg = x.forwardRef((l, u) => {
    const s = Xg(oa, l.__scopeDialog),
      { forceMount: o = s.forceMount, ...c } = l,
      d = Dt(oa, l.__scopeDialog);
    return f.jsx(Qr, {
      present: o || d.open,
      children: d.modal
        ? f.jsx(d1, { ...c, ref: u })
        : f.jsx(m1, { ...c, ref: u }),
    });
  });
Kg.displayName = oa;
var d1 = x.forwardRef((l, u) => {
    const s = Dt(oa, l.__scopeDialog),
      o = x.useRef(null),
      c = ua(u, s.contentRef, o);
    return (
      x.useEffect(() => {
        const d = o.current;
        if (d) return r1(d);
      }, []),
      f.jsx(Jg, {
        ...l,
        ref: c,
        trapFocus: s.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Bn(l.onCloseAutoFocus, (d) => {
          d.preventDefault(), s.triggerRef.current?.focus();
        }),
        onPointerDownOutside: Bn(l.onPointerDownOutside, (d) => {
          const h = d.detail.originalEvent,
            p = h.button === 0 && h.ctrlKey === !0;
          (h.button === 2 || p) && d.preventDefault();
        }),
        onFocusOutside: Bn(l.onFocusOutside, (d) => d.preventDefault()),
      })
    );
  }),
  m1 = x.forwardRef((l, u) => {
    const s = Dt(oa, l.__scopeDialog),
      o = x.useRef(!1),
      c = x.useRef(!1);
    return f.jsx(Jg, {
      ...l,
      ref: u,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (d) => {
        l.onCloseAutoFocus?.(d),
          d.defaultPrevented ||
            (o.current || s.triggerRef.current?.focus(), d.preventDefault()),
          (o.current = !1),
          (c.current = !1);
      },
      onInteractOutside: (d) => {
        l.onInteractOutside?.(d),
          d.defaultPrevented ||
            ((o.current = !0),
            d.detail.originalEvent.type === "pointerdown" && (c.current = !0));
        const h = d.target;
        s.triggerRef.current?.contains(h) && d.preventDefault(),
          d.detail.originalEvent.type === "focusin" &&
            c.current &&
            d.preventDefault();
      },
    });
  }),
  Jg = x.forwardRef((l, u) => {
    const {
        __scopeDialog: s,
        trapFocus: o,
        onOpenAutoFocus: c,
        onCloseAutoFocus: d,
        ...h
      } = l,
      p = Dt(oa, s),
      v = x.useRef(null),
      w = ua(u, v);
    return (
      xy(),
      f.jsxs(f.Fragment, {
        children: [
          f.jsx(Mg, {
            asChild: !0,
            loop: !0,
            trapped: o,
            onMountAutoFocus: c,
            onUnmountAutoFocus: d,
            children: f.jsx(Tg, {
              role: "dialog",
              id: p.contentId,
              "aria-describedby": p.descriptionId,
              "aria-labelledby": p.titleId,
              "data-state": lc(p.open),
              ...h,
              ref: w,
              onDismiss: () => p.onOpenChange(!1),
            }),
          }),
          f.jsxs(f.Fragment, {
            children: [
              f.jsx(h1, { titleId: p.titleId }),
              f.jsx(p1, { contentRef: v, descriptionId: p.descriptionId }),
            ],
          }),
        ],
      })
    );
  }),
  ac = "DialogTitle",
  $g = x.forwardRef((l, u) => {
    const { __scopeDialog: s, ...o } = l,
      c = Dt(ac, s);
    return f.jsx(ln.h2, { id: c.titleId, ...o, ref: u });
  });
$g.displayName = ac;
var Fg = "DialogDescription",
  Wg = x.forwardRef((l, u) => {
    const { __scopeDialog: s, ...o } = l,
      c = Dt(Fg, s);
    return f.jsx(ln.p, { id: c.descriptionId, ...o, ref: u });
  });
Wg.displayName = Fg;
var Ig = "DialogClose",
  Pg = x.forwardRef((l, u) => {
    const { __scopeDialog: s, ...o } = l,
      c = Dt(Ig, s);
    return f.jsx(ln.button, {
      type: "button",
      ...o,
      ref: u,
      onClick: Bn(l.onClick, () => c.onOpenChange(!1)),
    });
  });
Pg.displayName = Ig;
function lc(l) {
  return l ? "open" : "closed";
}
var e0 = "DialogTitleWarning",
  [X2, t0] = Lb(e0, { contentName: oa, titleName: ac, docsSlug: "dialog" }),
  h1 = ({ titleId: l }) => {
    const u = t0(e0),
      s = `\`${u.contentName}\` requires a \`${u.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${u.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${u.docsSlug}`;
    return (
      x.useEffect(() => {
        l && (document.getElementById(l) || console.error(s));
      }, [s, l]),
      null
    );
  },
  g1 = "DialogDescriptionWarning",
  p1 = ({ contentRef: l, descriptionId: u }) => {
    const o = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${t0(g1).contentName}}.`;
    return (
      x.useEffect(() => {
        const c = l.current?.getAttribute("aria-describedby");
        u && c && (document.getElementById(u) || console.warn(o));
      }, [o, l, u]),
      null
    );
  },
  v1 = Gg,
  b1 = Qg,
  n0 = Zg,
  a0 = Kg,
  l0 = $g,
  i0 = Wg,
  y1 = Pg;
function r0(l) {
  var u,
    s,
    o = "";
  if (typeof l == "string" || typeof l == "number") o += l;
  else if (typeof l == "object")
    if (Array.isArray(l)) {
      var c = l.length;
      for (u = 0; u < c; u++)
        l[u] && (s = r0(l[u])) && (o && (o += " "), (o += s));
    } else for (s in l) l[s] && (o && (o += " "), (o += s));
  return o;
}
function x1() {
  for (var l, u, s = 0, o = "", c = arguments.length; s < c; s++)
    (l = arguments[s]) && (u = r0(l)) && (o && (o += " "), (o += u));
  return o;
}
const S1 = (l, u) => {
    const s = new Array(l.length + u.length);
    for (let o = 0; o < l.length; o++) s[o] = l[o];
    for (let o = 0; o < u.length; o++) s[l.length + o] = u[o];
    return s;
  },
  w1 = (l, u) => ({ classGroupId: l, validator: u }),
  o0 = (l = new Map(), u = null, s) => ({
    nextPart: l,
    validators: u,
    classGroupId: s,
  }),
  Gr = "-",
  jh = [],
  E1 = "arbitrary..",
  N1 = (l) => {
    const u = A1(l),
      { conflictingClassGroups: s, conflictingClassGroupModifiers: o } = l;
    return {
      getClassGroupId: (h) => {
        if (h.startsWith("[") && h.endsWith("]")) return j1(h);
        const p = h.split(Gr),
          v = p[0] === "" && p.length > 1 ? 1 : 0;
        return u0(p, v, u);
      },
      getConflictingClassGroupIds: (h, p) => {
        if (p) {
          const v = o[h],
            w = s[h];
          return v ? (w ? S1(w, v) : v) : w || jh;
        }
        return s[h] || jh;
      },
    };
  },
  u0 = (l, u, s) => {
    if (l.length - u === 0) return s.classGroupId;
    const c = l[u],
      d = s.nextPart.get(c);
    if (d) {
      const w = u0(l, u + 1, d);
      if (w) return w;
    }
    const h = s.validators;
    if (h === null) return;
    const p = u === 0 ? l.join(Gr) : l.slice(u).join(Gr),
      v = h.length;
    for (let w = 0; w < v; w++) {
      const S = h[w];
      if (S.validator(p)) return S.classGroupId;
    }
  },
  j1 = (l) =>
    l.slice(1, -1).indexOf(":") === -1
      ? void 0
      : (() => {
          const u = l.slice(1, -1),
            s = u.indexOf(":"),
            o = u.slice(0, s);
          return o ? E1 + o : void 0;
        })(),
  A1 = (l) => {
    const { theme: u, classGroups: s } = l;
    return T1(s, u);
  },
  T1 = (l, u) => {
    const s = o0();
    for (const o in l) {
      const c = l[o];
      ic(c, s, o, u);
    }
    return s;
  },
  ic = (l, u, s, o) => {
    const c = l.length;
    for (let d = 0; d < c; d++) {
      const h = l[d];
      C1(h, u, s, o);
    }
  },
  C1 = (l, u, s, o) => {
    if (typeof l == "string") {
      M1(l, u, s);
      return;
    }
    if (typeof l == "function") {
      z1(l, u, s, o);
      return;
    }
    D1(l, u, s, o);
  },
  M1 = (l, u, s) => {
    const o = l === "" ? u : s0(u, l);
    o.classGroupId = s;
  },
  z1 = (l, u, s, o) => {
    if (R1(l)) {
      ic(l(o), u, s, o);
      return;
    }
    u.validators === null && (u.validators = []), u.validators.push(w1(s, l));
  },
  D1 = (l, u, s, o) => {
    const c = Object.entries(l),
      d = c.length;
    for (let h = 0; h < d; h++) {
      const [p, v] = c[h];
      ic(v, s0(u, p), s, o);
    }
  },
  s0 = (l, u) => {
    let s = l;
    const o = u.split(Gr),
      c = o.length;
    for (let d = 0; d < c; d++) {
      const h = o[d];
      let p = s.nextPart.get(h);
      p || ((p = o0()), s.nextPart.set(h, p)), (s = p);
    }
    return s;
  },
  R1 = (l) => "isThemeGetter" in l && l.isThemeGetter === !0,
  O1 = (l) => {
    if (l < 1) return { get: () => {}, set: () => {} };
    let u = 0,
      s = Object.create(null),
      o = Object.create(null);
    const c = (d, h) => {
      (s[d] = h), u++, u > l && ((u = 0), (o = s), (s = Object.create(null)));
    };
    return {
      get(d) {
        let h = s[d];
        if (h !== void 0) return h;
        if ((h = o[d]) !== void 0) return c(d, h), h;
      },
      set(d, h) {
        d in s ? (s[d] = h) : c(d, h);
      },
    };
  },
  Is = "!",
  Ah = ":",
  U1 = [],
  Th = (l, u, s, o, c) => ({
    modifiers: l,
    hasImportantModifier: u,
    baseClassName: s,
    maybePostfixModifierPosition: o,
    isExternal: c,
  }),
  _1 = (l) => {
    const { prefix: u, experimentalParseClassName: s } = l;
    let o = (c) => {
      const d = [];
      let h = 0,
        p = 0,
        v = 0,
        w;
      const S = c.length;
      for (let z = 0; z < S; z++) {
        const O = c[z];
        if (h === 0 && p === 0) {
          if (O === Ah) {
            d.push(c.slice(v, z)), (v = z + 1);
            continue;
          }
          if (O === "/") {
            w = z;
            continue;
          }
        }
        O === "[" ? h++ : O === "]" ? h-- : O === "(" ? p++ : O === ")" && p--;
      }
      const T = d.length === 0 ? c : c.slice(v);
      let M = T,
        A = !1;
      T.endsWith(Is)
        ? ((M = T.slice(0, -1)), (A = !0))
        : T.startsWith(Is) && ((M = T.slice(1)), (A = !0));
      const H = w && w > v ? w - v : void 0;
      return Th(d, A, M, H);
    };
    if (u) {
      const c = u + Ah,
        d = o;
      o = (h) =>
        h.startsWith(c) ? d(h.slice(c.length)) : Th(U1, !1, h, void 0, !0);
    }
    if (s) {
      const c = o;
      o = (d) => s({ className: d, parseClassName: c });
    }
    return o;
  },
  B1 = (l) => {
    const u = new Map();
    return (
      l.orderSensitiveModifiers.forEach((s, o) => {
        u.set(s, 1e6 + o);
      }),
      (s) => {
        const o = [];
        let c = [];
        for (let d = 0; d < s.length; d++) {
          const h = s[d],
            p = h[0] === "[",
            v = u.has(h);
          p || v
            ? (c.length > 0 && (c.sort(), o.push(...c), (c = [])), o.push(h))
            : c.push(h);
        }
        return c.length > 0 && (c.sort(), o.push(...c)), o;
      }
    );
  },
  k1 = (l) => ({
    cache: O1(l.cacheSize),
    parseClassName: _1(l),
    sortModifiers: B1(l),
    ...N1(l),
  }),
  L1 = /\s+/,
  H1 = (l, u) => {
    const {
        parseClassName: s,
        getClassGroupId: o,
        getConflictingClassGroupIds: c,
        sortModifiers: d,
      } = u,
      h = [],
      p = l.trim().split(L1);
    let v = "";
    for (let w = p.length - 1; w >= 0; w -= 1) {
      const S = p[w],
        {
          isExternal: T,
          modifiers: M,
          hasImportantModifier: A,
          baseClassName: H,
          maybePostfixModifierPosition: z,
        } = s(S);
      if (T) {
        v = S + (v.length > 0 ? " " + v : v);
        continue;
      }
      let O = !!z,
        q = o(O ? H.substring(0, z) : H);
      if (!q) {
        if (!O) {
          v = S + (v.length > 0 ? " " + v : v);
          continue;
        }
        if (((q = o(H)), !q)) {
          v = S + (v.length > 0 ? " " + v : v);
          continue;
        }
        O = !1;
      }
      const Q = M.length === 0 ? "" : M.length === 1 ? M[0] : d(M).join(":"),
        Y = A ? Q + Is : Q,
        V = Y + q;
      if (h.indexOf(V) > -1) continue;
      h.push(V);
      const W = c(q, O);
      for (let X = 0; X < W.length; ++X) {
        const G = W[X];
        h.push(Y + G);
      }
      v = S + (v.length > 0 ? " " + v : v);
    }
    return v;
  },
  q1 = (...l) => {
    let u = 0,
      s,
      o,
      c = "";
    for (; u < l.length; )
      (s = l[u++]) && (o = c0(s)) && (c && (c += " "), (c += o));
    return c;
  },
  c0 = (l) => {
    if (typeof l == "string") return l;
    let u,
      s = "";
    for (let o = 0; o < l.length; o++)
      l[o] && (u = c0(l[o])) && (s && (s += " "), (s += u));
    return s;
  },
  V1 = (l, ...u) => {
    let s, o, c, d;
    const h = (v) => {
        const w = u.reduce((S, T) => T(S), l());
        return (s = k1(w)), (o = s.cache.get), (c = s.cache.set), (d = p), p(v);
      },
      p = (v) => {
        const w = o(v);
        if (w) return w;
        const S = H1(v, s);
        return c(v, S), S;
      };
    return (d = h), (...v) => d(q1(...v));
  },
  G1 = [],
  Ze = (l) => {
    const u = (s) => s[l] || G1;
    return (u.isThemeGetter = !0), u;
  },
  f0 = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  d0 = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  Y1 = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
  X1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Q1 =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Z1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  K1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  J1 =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Rn = (l) => Y1.test(l),
  fe = (l) => !!l && !Number.isNaN(Number(l)),
  On = (l) => !!l && Number.isInteger(Number(l)),
  bs = (l) => l.endsWith("%") && fe(l.slice(0, -1)),
  an = (l) => X1.test(l),
  m0 = () => !0,
  $1 = (l) => Q1.test(l) && !Z1.test(l),
  rc = () => !1,
  F1 = (l) => K1.test(l),
  W1 = (l) => J1.test(l),
  I1 = (l) => !ee(l) && !te(l),
  P1 = (l) => kn(l, p0, rc),
  ee = (l) => f0.test(l),
  aa = (l) => kn(l, v0, $1),
  Ch = (l) => kn(l, ox, fe),
  ex = (l) => kn(l, y0, m0),
  tx = (l) => kn(l, b0, rc),
  Mh = (l) => kn(l, h0, rc),
  nx = (l) => kn(l, g0, W1),
  _r = (l) => kn(l, x0, F1),
  te = (l) => d0.test(l),
  li = (l) => sa(l, v0),
  ax = (l) => sa(l, b0),
  zh = (l) => sa(l, h0),
  lx = (l) => sa(l, p0),
  ix = (l) => sa(l, g0),
  Br = (l) => sa(l, x0, !0),
  rx = (l) => sa(l, y0, !0),
  kn = (l, u, s) => {
    const o = f0.exec(l);
    return o ? (o[1] ? u(o[1]) : s(o[2])) : !1;
  },
  sa = (l, u, s = !1) => {
    const o = d0.exec(l);
    return o ? (o[1] ? u(o[1]) : s) : !1;
  },
  h0 = (l) => l === "position" || l === "percentage",
  g0 = (l) => l === "image" || l === "url",
  p0 = (l) => l === "length" || l === "size" || l === "bg-size",
  v0 = (l) => l === "length",
  ox = (l) => l === "number",
  b0 = (l) => l === "family-name",
  y0 = (l) => l === "number" || l === "weight",
  x0 = (l) => l === "shadow",
  ux = () => {
    const l = Ze("color"),
      u = Ze("font"),
      s = Ze("text"),
      o = Ze("font-weight"),
      c = Ze("tracking"),
      d = Ze("leading"),
      h = Ze("breakpoint"),
      p = Ze("container"),
      v = Ze("spacing"),
      w = Ze("radius"),
      S = Ze("shadow"),
      T = Ze("inset-shadow"),
      M = Ze("text-shadow"),
      A = Ze("drop-shadow"),
      H = Ze("blur"),
      z = Ze("perspective"),
      O = Ze("aspect"),
      q = Ze("ease"),
      Q = Ze("animate"),
      Y = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      V = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom",
      ],
      W = () => [...V(), te, ee],
      X = () => ["auto", "hidden", "clip", "visible", "scroll"],
      G = () => ["auto", "contain", "none"],
      U = () => [te, ee, v],
      Z = () => [Rn, "full", "auto", ...U()],
      ne = () => [On, "none", "subgrid", te, ee],
      I = () => ["auto", { span: ["full", On, te, ee] }, On, te, ee],
      F = () => [On, "auto", te, ee],
      ae = () => ["auto", "min", "max", "fr", te, ee],
      oe = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe",
      ],
      De = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe",
      ],
      R = () => ["auto", ...U()],
      K = () => [
        Rn,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...U(),
      ],
      ie = () => [
        Rn,
        "screen",
        "full",
        "dvw",
        "lvw",
        "svw",
        "min",
        "max",
        "fit",
        ...U(),
      ],
      ye = () => [
        Rn,
        "screen",
        "full",
        "lh",
        "dvh",
        "lvh",
        "svh",
        "min",
        "max",
        "fit",
        ...U(),
      ],
      J = () => [l, te, ee],
      Ue = () => [...V(), zh, Mh, { position: [te, ee] }],
      we = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      ge = () => ["auto", "cover", "contain", lx, P1, { size: [te, ee] }],
      Re = () => [bs, li, aa],
      Se = () => ["", "none", "full", w, te, ee],
      Ce = () => ["", fe, li, aa],
      Ye = () => ["solid", "dashed", "dotted", "double"],
      We = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      ve = () => [fe, bs, zh, Mh],
      Rt = () => ["", "none", H, te, ee],
      Vt = () => ["none", fe, te, ee],
      rn = () => ["none", fe, te, ee],
      Ln = () => [fe, te, ee],
      on = () => [Rn, "full", ...U()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [an],
        breakpoint: [an],
        color: [m0],
        container: [an],
        "drop-shadow": [an],
        ease: ["in", "out", "in-out"],
        font: [I1],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [an],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [an],
        shadow: [an],
        spacing: ["px", fe],
        text: [an],
        "text-shadow": [an],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", Rn, ee, te, O] }],
        container: ["container"],
        columns: [{ columns: [fe, ee, te, p] }],
        "break-after": [{ "break-after": Y() }],
        "break-before": [{ "break-before": Y() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: W() }],
        overflow: [{ overflow: X() }],
        "overflow-x": [{ "overflow-x": X() }],
        "overflow-y": [{ "overflow-y": X() }],
        overscroll: [{ overscroll: G() }],
        "overscroll-x": [{ "overscroll-x": G() }],
        "overscroll-y": [{ "overscroll-y": G() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: Z() }],
        "inset-x": [{ "inset-x": Z() }],
        "inset-y": [{ "inset-y": Z() }],
        start: [{ "inset-s": Z(), start: Z() }],
        end: [{ "inset-e": Z(), end: Z() }],
        "inset-bs": [{ "inset-bs": Z() }],
        "inset-be": [{ "inset-be": Z() }],
        top: [{ top: Z() }],
        right: [{ right: Z() }],
        bottom: [{ bottom: Z() }],
        left: [{ left: Z() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [On, "auto", te, ee] }],
        basis: [{ basis: [Rn, "full", "auto", p, ...U()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [fe, Rn, "auto", "initial", "none", ee] }],
        grow: [{ grow: ["", fe, te, ee] }],
        shrink: [{ shrink: ["", fe, te, ee] }],
        order: [{ order: [On, "first", "last", "none", te, ee] }],
        "grid-cols": [{ "grid-cols": ne() }],
        "col-start-end": [{ col: I() }],
        "col-start": [{ "col-start": F() }],
        "col-end": [{ "col-end": F() }],
        "grid-rows": [{ "grid-rows": ne() }],
        "row-start-end": [{ row: I() }],
        "row-start": [{ "row-start": F() }],
        "row-end": [{ "row-end": F() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ae() }],
        "auto-rows": [{ "auto-rows": ae() }],
        gap: [{ gap: U() }],
        "gap-x": [{ "gap-x": U() }],
        "gap-y": [{ "gap-y": U() }],
        "justify-content": [{ justify: [...oe(), "normal"] }],
        "justify-items": [{ "justify-items": [...De(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...De()] }],
        "align-content": [{ content: ["normal", ...oe()] }],
        "align-items": [{ items: [...De(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...De(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": oe() }],
        "place-items": [{ "place-items": [...De(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...De()] }],
        p: [{ p: U() }],
        px: [{ px: U() }],
        py: [{ py: U() }],
        ps: [{ ps: U() }],
        pe: [{ pe: U() }],
        pbs: [{ pbs: U() }],
        pbe: [{ pbe: U() }],
        pt: [{ pt: U() }],
        pr: [{ pr: U() }],
        pb: [{ pb: U() }],
        pl: [{ pl: U() }],
        m: [{ m: R() }],
        mx: [{ mx: R() }],
        my: [{ my: R() }],
        ms: [{ ms: R() }],
        me: [{ me: R() }],
        mbs: [{ mbs: R() }],
        mbe: [{ mbe: R() }],
        mt: [{ mt: R() }],
        mr: [{ mr: R() }],
        mb: [{ mb: R() }],
        ml: [{ ml: R() }],
        "space-x": [{ "space-x": U() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": U() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: K() }],
        "inline-size": [{ inline: ["auto", ...ie()] }],
        "min-inline-size": [{ "min-inline": ["auto", ...ie()] }],
        "max-inline-size": [{ "max-inline": ["none", ...ie()] }],
        "block-size": [{ block: ["auto", ...ye()] }],
        "min-block-size": [{ "min-block": ["auto", ...ye()] }],
        "max-block-size": [{ "max-block": ["none", ...ye()] }],
        w: [{ w: [p, "screen", ...K()] }],
        "min-w": [{ "min-w": [p, "screen", "none", ...K()] }],
        "max-w": [
          { "max-w": [p, "screen", "none", "prose", { screen: [h] }, ...K()] },
        ],
        h: [{ h: ["screen", "lh", ...K()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ...K()] }],
        "max-h": [{ "max-h": ["screen", "lh", ...K()] }],
        "font-size": [{ text: ["base", s, li, aa] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [o, rx, ex] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              bs,
              ee,
            ],
          },
        ],
        "font-family": [{ font: [ax, tx, u] }],
        "font-features": [{ "font-features": [ee] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [c, te, ee] }],
        "line-clamp": [{ "line-clamp": [fe, "none", te, Ch] }],
        leading: [{ leading: [d, ...U()] }],
        "list-image": [{ "list-image": ["none", te, ee] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", te, ee] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: J() }],
        "text-color": [{ text: J() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...Ye(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [fe, "from-font", "auto", te, aa] },
        ],
        "text-decoration-color": [{ decoration: J() }],
        "underline-offset": [{ "underline-offset": [fe, "auto", te, ee] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: U() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              te,
              ee,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", te, ee] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: Ue() }],
        "bg-repeat": [{ bg: we() }],
        "bg-size": [{ bg: ge() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  On,
                  te,
                  ee,
                ],
                radial: ["", te, ee],
                conic: [On, te, ee],
              },
              ix,
              nx,
            ],
          },
        ],
        "bg-color": [{ bg: J() }],
        "gradient-from-pos": [{ from: Re() }],
        "gradient-via-pos": [{ via: Re() }],
        "gradient-to-pos": [{ to: Re() }],
        "gradient-from": [{ from: J() }],
        "gradient-via": [{ via: J() }],
        "gradient-to": [{ to: J() }],
        rounded: [{ rounded: Se() }],
        "rounded-s": [{ "rounded-s": Se() }],
        "rounded-e": [{ "rounded-e": Se() }],
        "rounded-t": [{ "rounded-t": Se() }],
        "rounded-r": [{ "rounded-r": Se() }],
        "rounded-b": [{ "rounded-b": Se() }],
        "rounded-l": [{ "rounded-l": Se() }],
        "rounded-ss": [{ "rounded-ss": Se() }],
        "rounded-se": [{ "rounded-se": Se() }],
        "rounded-ee": [{ "rounded-ee": Se() }],
        "rounded-es": [{ "rounded-es": Se() }],
        "rounded-tl": [{ "rounded-tl": Se() }],
        "rounded-tr": [{ "rounded-tr": Se() }],
        "rounded-br": [{ "rounded-br": Se() }],
        "rounded-bl": [{ "rounded-bl": Se() }],
        "border-w": [{ border: Ce() }],
        "border-w-x": [{ "border-x": Ce() }],
        "border-w-y": [{ "border-y": Ce() }],
        "border-w-s": [{ "border-s": Ce() }],
        "border-w-e": [{ "border-e": Ce() }],
        "border-w-bs": [{ "border-bs": Ce() }],
        "border-w-be": [{ "border-be": Ce() }],
        "border-w-t": [{ "border-t": Ce() }],
        "border-w-r": [{ "border-r": Ce() }],
        "border-w-b": [{ "border-b": Ce() }],
        "border-w-l": [{ "border-l": Ce() }],
        "divide-x": [{ "divide-x": Ce() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": Ce() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...Ye(), "hidden", "none"] }],
        "divide-style": [{ divide: [...Ye(), "hidden", "none"] }],
        "border-color": [{ border: J() }],
        "border-color-x": [{ "border-x": J() }],
        "border-color-y": [{ "border-y": J() }],
        "border-color-s": [{ "border-s": J() }],
        "border-color-e": [{ "border-e": J() }],
        "border-color-bs": [{ "border-bs": J() }],
        "border-color-be": [{ "border-be": J() }],
        "border-color-t": [{ "border-t": J() }],
        "border-color-r": [{ "border-r": J() }],
        "border-color-b": [{ "border-b": J() }],
        "border-color-l": [{ "border-l": J() }],
        "divide-color": [{ divide: J() }],
        "outline-style": [{ outline: [...Ye(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [fe, te, ee] }],
        "outline-w": [{ outline: ["", fe, li, aa] }],
        "outline-color": [{ outline: J() }],
        shadow: [{ shadow: ["", "none", S, Br, _r] }],
        "shadow-color": [{ shadow: J() }],
        "inset-shadow": [{ "inset-shadow": ["none", T, Br, _r] }],
        "inset-shadow-color": [{ "inset-shadow": J() }],
        "ring-w": [{ ring: Ce() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: J() }],
        "ring-offset-w": [{ "ring-offset": [fe, aa] }],
        "ring-offset-color": [{ "ring-offset": J() }],
        "inset-ring-w": [{ "inset-ring": Ce() }],
        "inset-ring-color": [{ "inset-ring": J() }],
        "text-shadow": [{ "text-shadow": ["none", M, Br, _r] }],
        "text-shadow-color": [{ "text-shadow": J() }],
        opacity: [{ opacity: [fe, te, ee] }],
        "mix-blend": [
          { "mix-blend": [...We(), "plus-darker", "plus-lighter"] },
        ],
        "bg-blend": [{ "bg-blend": We() }],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
          "mask-no-clip",
        ],
        "mask-composite": [
          { mask: ["add", "subtract", "intersect", "exclude"] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [fe] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": ve() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": ve() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": J() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": J() }],
        "mask-image-t-from-pos": [{ "mask-t-from": ve() }],
        "mask-image-t-to-pos": [{ "mask-t-to": ve() }],
        "mask-image-t-from-color": [{ "mask-t-from": J() }],
        "mask-image-t-to-color": [{ "mask-t-to": J() }],
        "mask-image-r-from-pos": [{ "mask-r-from": ve() }],
        "mask-image-r-to-pos": [{ "mask-r-to": ve() }],
        "mask-image-r-from-color": [{ "mask-r-from": J() }],
        "mask-image-r-to-color": [{ "mask-r-to": J() }],
        "mask-image-b-from-pos": [{ "mask-b-from": ve() }],
        "mask-image-b-to-pos": [{ "mask-b-to": ve() }],
        "mask-image-b-from-color": [{ "mask-b-from": J() }],
        "mask-image-b-to-color": [{ "mask-b-to": J() }],
        "mask-image-l-from-pos": [{ "mask-l-from": ve() }],
        "mask-image-l-to-pos": [{ "mask-l-to": ve() }],
        "mask-image-l-from-color": [{ "mask-l-from": J() }],
        "mask-image-l-to-color": [{ "mask-l-to": J() }],
        "mask-image-x-from-pos": [{ "mask-x-from": ve() }],
        "mask-image-x-to-pos": [{ "mask-x-to": ve() }],
        "mask-image-x-from-color": [{ "mask-x-from": J() }],
        "mask-image-x-to-color": [{ "mask-x-to": J() }],
        "mask-image-y-from-pos": [{ "mask-y-from": ve() }],
        "mask-image-y-to-pos": [{ "mask-y-to": ve() }],
        "mask-image-y-from-color": [{ "mask-y-from": J() }],
        "mask-image-y-to-color": [{ "mask-y-to": J() }],
        "mask-image-radial": [{ "mask-radial": [te, ee] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": ve() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": ve() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": J() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": J() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: ["side", "corner"], farthest: ["side", "corner"] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": V() }],
        "mask-image-conic-pos": [{ "mask-conic": [fe] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": ve() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": ve() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": J() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": J() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
        ],
        "mask-position": [{ mask: Ue() }],
        "mask-repeat": [{ mask: we() }],
        "mask-size": [{ mask: ge() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", te, ee] }],
        filter: [{ filter: ["", "none", te, ee] }],
        blur: [{ blur: Rt() }],
        brightness: [{ brightness: [fe, te, ee] }],
        contrast: [{ contrast: [fe, te, ee] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", A, Br, _r] }],
        "drop-shadow-color": [{ "drop-shadow": J() }],
        grayscale: [{ grayscale: ["", fe, te, ee] }],
        "hue-rotate": [{ "hue-rotate": [fe, te, ee] }],
        invert: [{ invert: ["", fe, te, ee] }],
        saturate: [{ saturate: [fe, te, ee] }],
        sepia: [{ sepia: ["", fe, te, ee] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", te, ee] }],
        "backdrop-blur": [{ "backdrop-blur": Rt() }],
        "backdrop-brightness": [{ "backdrop-brightness": [fe, te, ee] }],
        "backdrop-contrast": [{ "backdrop-contrast": [fe, te, ee] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", fe, te, ee] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [fe, te, ee] }],
        "backdrop-invert": [{ "backdrop-invert": ["", fe, te, ee] }],
        "backdrop-opacity": [{ "backdrop-opacity": [fe, te, ee] }],
        "backdrop-saturate": [{ "backdrop-saturate": [fe, te, ee] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", fe, te, ee] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": U() }],
        "border-spacing-x": [{ "border-spacing-x": U() }],
        "border-spacing-y": [{ "border-spacing-y": U() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              te,
              ee,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [fe, "initial", te, ee] }],
        ease: [{ ease: ["linear", "initial", q, te, ee] }],
        delay: [{ delay: [fe, te, ee] }],
        animate: [{ animate: ["none", Q, te, ee] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [z, te, ee] }],
        "perspective-origin": [{ "perspective-origin": W() }],
        rotate: [{ rotate: Vt() }],
        "rotate-x": [{ "rotate-x": Vt() }],
        "rotate-y": [{ "rotate-y": Vt() }],
        "rotate-z": [{ "rotate-z": Vt() }],
        scale: [{ scale: rn() }],
        "scale-x": [{ "scale-x": rn() }],
        "scale-y": [{ "scale-y": rn() }],
        "scale-z": [{ "scale-z": rn() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: Ln() }],
        "skew-x": [{ "skew-x": Ln() }],
        "skew-y": [{ "skew-y": Ln() }],
        transform: [{ transform: [te, ee, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: W() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: on() }],
        "translate-x": [{ "translate-x": on() }],
        "translate-y": [{ "translate-y": on() }],
        "translate-z": [{ "translate-z": on() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: J() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: J() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              te,
              ee,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": U() }],
        "scroll-mx": [{ "scroll-mx": U() }],
        "scroll-my": [{ "scroll-my": U() }],
        "scroll-ms": [{ "scroll-ms": U() }],
        "scroll-me": [{ "scroll-me": U() }],
        "scroll-mbs": [{ "scroll-mbs": U() }],
        "scroll-mbe": [{ "scroll-mbe": U() }],
        "scroll-mt": [{ "scroll-mt": U() }],
        "scroll-mr": [{ "scroll-mr": U() }],
        "scroll-mb": [{ "scroll-mb": U() }],
        "scroll-ml": [{ "scroll-ml": U() }],
        "scroll-p": [{ "scroll-p": U() }],
        "scroll-px": [{ "scroll-px": U() }],
        "scroll-py": [{ "scroll-py": U() }],
        "scroll-ps": [{ "scroll-ps": U() }],
        "scroll-pe": [{ "scroll-pe": U() }],
        "scroll-pbs": [{ "scroll-pbs": U() }],
        "scroll-pbe": [{ "scroll-pbe": U() }],
        "scroll-pt": [{ "scroll-pt": U() }],
        "scroll-pr": [{ "scroll-pr": U() }],
        "scroll-pb": [{ "scroll-pb": U() }],
        "scroll-pl": [{ "scroll-pl": U() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          {
            "will-change": ["auto", "scroll", "contents", "transform", te, ee],
          },
        ],
        fill: [{ fill: ["none", ...J()] }],
        "stroke-w": [{ stroke: [fe, li, aa, Ch] }],
        stroke: [{ stroke: ["none", ...J()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "inset-bs",
          "inset-be",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-bs",
          "border-w-be",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-bs",
          "border-color-be",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mbs",
          "scroll-mbe",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pbs",
          "scroll-pbe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection",
      ],
    };
  },
  sx = V1(ux);
function gi(...l) {
  return sx(x1(l));
}
const cx = v1,
  fx = b1,
  S0 = x.forwardRef(({ className: l, ...u }, s) =>
    f.jsx(n0, {
      ref: s,
      className: gi(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        l,
      ),
      ...u,
    }),
  );
S0.displayName = n0.displayName;
const w0 = x.forwardRef(({ className: l, children: u, ...s }, o) =>
  f.jsxs(fx, {
    children: [
      f.jsx(S0, {}),
      f.jsxs(a0, {
        ref: o,
        className: gi(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed top-[50%] left-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border p-6 shadow-lg duration-200 sm:rounded-lg",
          l,
        ),
        ...s,
        children: [
          u,
          f.jsxs(y1, {
            className:
              "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none",
            children: [
              f.jsx(ec, { className: "h-4 w-4" }),
              f.jsx("span", { className: "sr-only", children: "Close" }),
            ],
          }),
        ],
      }),
    ],
  }),
);
w0.displayName = a0.displayName;
const E0 = ({ className: l, ...u }) =>
  f.jsx("div", {
    className: gi("flex flex-col space-y-1.5 text-center sm:text-left", l),
    ...u,
  });
E0.displayName = "DialogHeader";
const N0 = x.forwardRef(({ className: l, ...u }, s) =>
  f.jsx(l0, {
    ref: s,
    className: gi("text-lg leading-none font-semibold tracking-tight", l),
    ...u,
  }),
);
N0.displayName = l0.displayName;
const dx = x.forwardRef(({ className: l, ...u }, s) =>
  f.jsx(i0, {
    ref: s,
    className: gi("text-muted-foreground text-sm", l),
    ...u,
  }),
);
dx.displayName = i0.displayName;
var j0 = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Dh = ra.createContext && ra.createContext(j0),
  mx = ["attr", "size", "title"];
function hx(l, u) {
  if (l == null) return {};
  var s,
    o,
    c = gx(l, u);
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(l);
    for (o = 0; o < d.length; o++)
      (s = d[o]),
        u.indexOf(s) === -1 &&
          {}.propertyIsEnumerable.call(l, s) &&
          (c[s] = l[s]);
  }
  return c;
}
function gx(l, u) {
  if (l == null) return {};
  var s = {};
  for (var o in l)
    if ({}.hasOwnProperty.call(l, o)) {
      if (u.indexOf(o) !== -1) continue;
      s[o] = l[o];
    }
  return s;
}
function Yr() {
  return (
    (Yr = Object.assign
      ? Object.assign.bind()
      : function (l) {
          for (var u = 1; u < arguments.length; u++) {
            var s = arguments[u];
            for (var o in s) ({}).hasOwnProperty.call(s, o) && (l[o] = s[o]);
          }
          return l;
        }),
    Yr.apply(null, arguments)
  );
}
function Rh(l, u) {
  var s = Object.keys(l);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(l);
    u &&
      (o = o.filter(function (c) {
        return Object.getOwnPropertyDescriptor(l, c).enumerable;
      })),
      s.push.apply(s, o);
  }
  return s;
}
function Xr(l) {
  for (var u = 1; u < arguments.length; u++) {
    var s = arguments[u] != null ? arguments[u] : {};
    u % 2
      ? Rh(Object(s), !0).forEach(function (o) {
          px(l, o, s[o]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s))
        : Rh(Object(s)).forEach(function (o) {
            Object.defineProperty(l, o, Object.getOwnPropertyDescriptor(s, o));
          });
  }
  return l;
}
function px(l, u, s) {
  return (
    (u = vx(u)) in l
      ? Object.defineProperty(l, u, {
          value: s,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (l[u] = s),
    l
  );
}
function vx(l) {
  var u = bx(l, "string");
  return typeof u == "symbol" ? u : u + "";
}
function bx(l, u) {
  if (typeof l != "object" || !l) return l;
  var s = l[Symbol.toPrimitive];
  if (s !== void 0) {
    var o = s.call(l, u);
    if (typeof o != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (u === "string" ? String : Number)(l);
}
function A0(l) {
  return (
    l &&
    l.map((u, s) =>
      ra.createElement(u.tag, Xr({ key: s }, u.attr), A0(u.child)),
    )
  );
}
function oc(l) {
  return (u) =>
    ra.createElement(yx, Yr({ attr: Xr({}, l.attr) }, u), A0(l.child));
}
function yx(l) {
  var u = (s) => {
    var { attr: o, size: c, title: d } = l,
      h = hx(l, mx),
      p = c || s.size || "1em",
      v;
    return (
      s.className && (v = s.className),
      l.className && (v = (v ? v + " " : "") + l.className),
      ra.createElement(
        "svg",
        Yr(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          s.attr,
          o,
          h,
          {
            className: v,
            style: Xr(Xr({ color: l.color || s.color }, s.style), l.style),
            height: p,
            width: p,
            xmlns: "http://www.w3.org/2000/svg",
          },
        ),
        d && ra.createElement("title", null, d),
        l.children,
      )
    );
  };
  return Dh !== void 0
    ? ra.createElement(Dh.Consumer, null, (s) => u(s))
    : u(j0);
}
function uc(l) {
  return oc({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z",
        },
        child: [],
      },
    ],
  })(l);
}
function sc(l) {
  return oc({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z",
        },
        child: [],
      },
    ],
  })(l);
}
function cc(l) {
  return oc({
    attr: { viewBox: "0 0 496 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z",
        },
        child: [],
      },
    ],
  })(l);
}
var tl = {},
  ys,
  Oh;
function xx() {
  return (
    Oh ||
      ((Oh = 1),
      (ys = function () {
        return (
          typeof Promise == "function" &&
          Promise.prototype &&
          Promise.prototype.then
        );
      })),
    ys
  );
}
var xs = {},
  Un = {},
  Uh;
function ca() {
  if (Uh) return Un;
  Uh = 1;
  let l;
  const u = [
    0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655,
    733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921,
    2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706,
  ];
  return (
    (Un.getSymbolSize = function (o) {
      if (!o) throw new Error('"version" cannot be null or undefined');
      if (o < 1 || o > 40)
        throw new Error('"version" should be in range from 1 to 40');
      return o * 4 + 17;
    }),
    (Un.getSymbolTotalCodewords = function (o) {
      return u[o];
    }),
    (Un.getBCHDigit = function (s) {
      let o = 0;
      for (; s !== 0; ) o++, (s >>>= 1);
      return o;
    }),
    (Un.setToSJISFunction = function (o) {
      if (typeof o != "function")
        throw new Error('"toSJISFunc" is not a valid function.');
      l = o;
    }),
    (Un.isKanjiModeEnabled = function () {
      return typeof l < "u";
    }),
    (Un.toSJIS = function (o) {
      return l(o);
    }),
    Un
  );
}
var Ss = {},
  _h;
function fc() {
  return (
    _h ||
      ((_h = 1),
      (function (l) {
        (l.L = { bit: 1 }),
          (l.M = { bit: 0 }),
          (l.Q = { bit: 3 }),
          (l.H = { bit: 2 });
        function u(s) {
          if (typeof s != "string") throw new Error("Param is not a string");
          switch (s.toLowerCase()) {
            case "l":
            case "low":
              return l.L;
            case "m":
            case "medium":
              return l.M;
            case "q":
            case "quartile":
              return l.Q;
            case "h":
            case "high":
              return l.H;
            default:
              throw new Error("Unknown EC Level: " + s);
          }
        }
        (l.isValid = function (o) {
          return o && typeof o.bit < "u" && o.bit >= 0 && o.bit < 4;
        }),
          (l.from = function (o, c) {
            if (l.isValid(o)) return o;
            try {
              return u(o);
            } catch {
              return c;
            }
          });
      })(Ss)),
    Ss
  );
}
var ws, Bh;
function Sx() {
  if (Bh) return ws;
  Bh = 1;
  function l() {
    (this.buffer = []), (this.length = 0);
  }
  return (
    (l.prototype = {
      get: function (u) {
        const s = Math.floor(u / 8);
        return ((this.buffer[s] >>> (7 - (u % 8))) & 1) === 1;
      },
      put: function (u, s) {
        for (let o = 0; o < s; o++)
          this.putBit(((u >>> (s - o - 1)) & 1) === 1);
      },
      getLengthInBits: function () {
        return this.length;
      },
      putBit: function (u) {
        const s = Math.floor(this.length / 8);
        this.buffer.length <= s && this.buffer.push(0),
          u && (this.buffer[s] |= 128 >>> (this.length % 8)),
          this.length++;
      },
    }),
    (ws = l),
    ws
  );
}
var Es, kh;
function wx() {
  if (kh) return Es;
  kh = 1;
  function l(u) {
    if (!u || u < 1)
      throw new Error("BitMatrix size must be defined and greater than 0");
    (this.size = u),
      (this.data = new Uint8Array(u * u)),
      (this.reservedBit = new Uint8Array(u * u));
  }
  return (
    (l.prototype.set = function (u, s, o, c) {
      const d = u * this.size + s;
      (this.data[d] = o), c && (this.reservedBit[d] = !0);
    }),
    (l.prototype.get = function (u, s) {
      return this.data[u * this.size + s];
    }),
    (l.prototype.xor = function (u, s, o) {
      this.data[u * this.size + s] ^= o;
    }),
    (l.prototype.isReserved = function (u, s) {
      return this.reservedBit[u * this.size + s];
    }),
    (Es = l),
    Es
  );
}
var Ns = {},
  Lh;
function Ex() {
  return (
    Lh ||
      ((Lh = 1),
      (function (l) {
        const u = ca().getSymbolSize;
        (l.getRowColCoords = function (o) {
          if (o === 1) return [];
          const c = Math.floor(o / 7) + 2,
            d = u(o),
            h = d === 145 ? 26 : Math.ceil((d - 13) / (2 * c - 2)) * 2,
            p = [d - 7];
          for (let v = 1; v < c - 1; v++) p[v] = p[v - 1] - h;
          return p.push(6), p.reverse();
        }),
          (l.getPositions = function (o) {
            const c = [],
              d = l.getRowColCoords(o),
              h = d.length;
            for (let p = 0; p < h; p++)
              for (let v = 0; v < h; v++)
                (p === 0 && v === 0) ||
                  (p === 0 && v === h - 1) ||
                  (p === h - 1 && v === 0) ||
                  c.push([d[p], d[v]]);
            return c;
          });
      })(Ns)),
    Ns
  );
}
var js = {},
  Hh;
function Nx() {
  if (Hh) return js;
  Hh = 1;
  const l = ca().getSymbolSize,
    u = 7;
  return (
    (js.getPositions = function (o) {
      const c = l(o);
      return [
        [0, 0],
        [c - u, 0],
        [0, c - u],
      ];
    }),
    js
  );
}
var As = {},
  qh;
function jx() {
  return (
    qh ||
      ((qh = 1),
      (function (l) {
        l.Patterns = {
          PATTERN000: 0,
          PATTERN001: 1,
          PATTERN010: 2,
          PATTERN011: 3,
          PATTERN100: 4,
          PATTERN101: 5,
          PATTERN110: 6,
          PATTERN111: 7,
        };
        const u = { N1: 3, N2: 3, N3: 40, N4: 10 };
        (l.isValid = function (c) {
          return c != null && c !== "" && !isNaN(c) && c >= 0 && c <= 7;
        }),
          (l.from = function (c) {
            return l.isValid(c) ? parseInt(c, 10) : void 0;
          }),
          (l.getPenaltyN1 = function (c) {
            const d = c.size;
            let h = 0,
              p = 0,
              v = 0,
              w = null,
              S = null;
            for (let T = 0; T < d; T++) {
              (p = v = 0), (w = S = null);
              for (let M = 0; M < d; M++) {
                let A = c.get(T, M);
                A === w
                  ? p++
                  : (p >= 5 && (h += u.N1 + (p - 5)), (w = A), (p = 1)),
                  (A = c.get(M, T)),
                  A === S
                    ? v++
                    : (v >= 5 && (h += u.N1 + (v - 5)), (S = A), (v = 1));
              }
              p >= 5 && (h += u.N1 + (p - 5)), v >= 5 && (h += u.N1 + (v - 5));
            }
            return h;
          }),
          (l.getPenaltyN2 = function (c) {
            const d = c.size;
            let h = 0;
            for (let p = 0; p < d - 1; p++)
              for (let v = 0; v < d - 1; v++) {
                const w =
                  c.get(p, v) +
                  c.get(p, v + 1) +
                  c.get(p + 1, v) +
                  c.get(p + 1, v + 1);
                (w === 4 || w === 0) && h++;
              }
            return h * u.N2;
          }),
          (l.getPenaltyN3 = function (c) {
            const d = c.size;
            let h = 0,
              p = 0,
              v = 0;
            for (let w = 0; w < d; w++) {
              p = v = 0;
              for (let S = 0; S < d; S++)
                (p = ((p << 1) & 2047) | c.get(w, S)),
                  S >= 10 && (p === 1488 || p === 93) && h++,
                  (v = ((v << 1) & 2047) | c.get(S, w)),
                  S >= 10 && (v === 1488 || v === 93) && h++;
            }
            return h * u.N3;
          }),
          (l.getPenaltyN4 = function (c) {
            let d = 0;
            const h = c.data.length;
            for (let v = 0; v < h; v++) d += c.data[v];
            return Math.abs(Math.ceil((d * 100) / h / 5) - 10) * u.N4;
          });
        function s(o, c, d) {
          switch (o) {
            case l.Patterns.PATTERN000:
              return (c + d) % 2 === 0;
            case l.Patterns.PATTERN001:
              return c % 2 === 0;
            case l.Patterns.PATTERN010:
              return d % 3 === 0;
            case l.Patterns.PATTERN011:
              return (c + d) % 3 === 0;
            case l.Patterns.PATTERN100:
              return (Math.floor(c / 2) + Math.floor(d / 3)) % 2 === 0;
            case l.Patterns.PATTERN101:
              return ((c * d) % 2) + ((c * d) % 3) === 0;
            case l.Patterns.PATTERN110:
              return (((c * d) % 2) + ((c * d) % 3)) % 2 === 0;
            case l.Patterns.PATTERN111:
              return (((c * d) % 3) + ((c + d) % 2)) % 2 === 0;
            default:
              throw new Error("bad maskPattern:" + o);
          }
        }
        (l.applyMask = function (c, d) {
          const h = d.size;
          for (let p = 0; p < h; p++)
            for (let v = 0; v < h; v++)
              d.isReserved(v, p) || d.xor(v, p, s(c, v, p));
        }),
          (l.getBestMask = function (c, d) {
            const h = Object.keys(l.Patterns).length;
            let p = 0,
              v = 1 / 0;
            for (let w = 0; w < h; w++) {
              d(w), l.applyMask(w, c);
              const S =
                l.getPenaltyN1(c) +
                l.getPenaltyN2(c) +
                l.getPenaltyN3(c) +
                l.getPenaltyN4(c);
              l.applyMask(w, c), S < v && ((v = S), (p = w));
            }
            return p;
          });
      })(As)),
    As
  );
}
var kr = {},
  Vh;
function T0() {
  if (Vh) return kr;
  Vh = 1;
  const l = fc(),
    u = [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2,
      4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4,
      9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6,
      13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9,
      18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34,
      40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17,
      33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56,
      66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81,
    ],
    s = [
      7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72,
      88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160,
      192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198,
      288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168,
      308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700,
      224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810,
      960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390,
      728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868,
      1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530,
      1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100,
      660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430,
    ];
  return (
    (kr.getBlocksCount = function (c, d) {
      switch (d) {
        case l.L:
          return u[(c - 1) * 4 + 0];
        case l.M:
          return u[(c - 1) * 4 + 1];
        case l.Q:
          return u[(c - 1) * 4 + 2];
        case l.H:
          return u[(c - 1) * 4 + 3];
        default:
          return;
      }
    }),
    (kr.getTotalCodewordsCount = function (c, d) {
      switch (d) {
        case l.L:
          return s[(c - 1) * 4 + 0];
        case l.M:
          return s[(c - 1) * 4 + 1];
        case l.Q:
          return s[(c - 1) * 4 + 2];
        case l.H:
          return s[(c - 1) * 4 + 3];
        default:
          return;
      }
    }),
    kr
  );
}
var Ts = {},
  ii = {},
  Gh;
function Ax() {
  if (Gh) return ii;
  Gh = 1;
  const l = new Uint8Array(512),
    u = new Uint8Array(256);
  return (
    (function () {
      let o = 1;
      for (let c = 0; c < 255; c++)
        (l[c] = o), (u[o] = c), (o <<= 1), o & 256 && (o ^= 285);
      for (let c = 255; c < 512; c++) l[c] = l[c - 255];
    })(),
    (ii.log = function (o) {
      if (o < 1) throw new Error("log(" + o + ")");
      return u[o];
    }),
    (ii.exp = function (o) {
      return l[o];
    }),
    (ii.mul = function (o, c) {
      return o === 0 || c === 0 ? 0 : l[u[o] + u[c]];
    }),
    ii
  );
}
var Yh;
function Tx() {
  return (
    Yh ||
      ((Yh = 1),
      (function (l) {
        const u = Ax();
        (l.mul = function (o, c) {
          const d = new Uint8Array(o.length + c.length - 1);
          for (let h = 0; h < o.length; h++)
            for (let p = 0; p < c.length; p++) d[h + p] ^= u.mul(o[h], c[p]);
          return d;
        }),
          (l.mod = function (o, c) {
            let d = new Uint8Array(o);
            for (; d.length - c.length >= 0; ) {
              const h = d[0];
              for (let v = 0; v < c.length; v++) d[v] ^= u.mul(c[v], h);
              let p = 0;
              for (; p < d.length && d[p] === 0; ) p++;
              d = d.slice(p);
            }
            return d;
          }),
          (l.generateECPolynomial = function (o) {
            let c = new Uint8Array([1]);
            for (let d = 0; d < o; d++)
              c = l.mul(c, new Uint8Array([1, u.exp(d)]));
            return c;
          });
      })(Ts)),
    Ts
  );
}
var Cs, Xh;
function Cx() {
  if (Xh) return Cs;
  Xh = 1;
  const l = Tx();
  function u(s) {
    (this.genPoly = void 0),
      (this.degree = s),
      this.degree && this.initialize(this.degree);
  }
  return (
    (u.prototype.initialize = function (o) {
      (this.degree = o), (this.genPoly = l.generateECPolynomial(this.degree));
    }),
    (u.prototype.encode = function (o) {
      if (!this.genPoly) throw new Error("Encoder not initialized");
      const c = new Uint8Array(o.length + this.degree);
      c.set(o);
      const d = l.mod(c, this.genPoly),
        h = this.degree - d.length;
      if (h > 0) {
        const p = new Uint8Array(this.degree);
        return p.set(d, h), p;
      }
      return d;
    }),
    (Cs = u),
    Cs
  );
}
var Ms = {},
  zs = {},
  Ds = {},
  Qh;
function C0() {
  return (
    Qh ||
      ((Qh = 1),
      (Ds.isValid = function (u) {
        return !isNaN(u) && u >= 1 && u <= 40;
      })),
    Ds
  );
}
var Ht = {},
  Zh;
function M0() {
  if (Zh) return Ht;
  Zh = 1;
  const l = "[0-9]+",
    u = "[A-Z $%*+\\-./:]+";
  let s =
    "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
  s = s.replace(/u/g, "\\u");
  const o =
    "(?:(?![A-Z0-9 $%*+\\-./:]|" +
    s +
    `)(?:.|[\r
]))+`;
  (Ht.KANJI = new RegExp(s, "g")),
    (Ht.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g")),
    (Ht.BYTE = new RegExp(o, "g")),
    (Ht.NUMERIC = new RegExp(l, "g")),
    (Ht.ALPHANUMERIC = new RegExp(u, "g"));
  const c = new RegExp("^" + s + "$"),
    d = new RegExp("^" + l + "$"),
    h = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
  return (
    (Ht.testKanji = function (v) {
      return c.test(v);
    }),
    (Ht.testNumeric = function (v) {
      return d.test(v);
    }),
    (Ht.testAlphanumeric = function (v) {
      return h.test(v);
    }),
    Ht
  );
}
var Kh;
function fa() {
  return (
    Kh ||
      ((Kh = 1),
      (function (l) {
        const u = C0(),
          s = M0();
        (l.NUMERIC = { id: "Numeric", bit: 1, ccBits: [10, 12, 14] }),
          (l.ALPHANUMERIC = {
            id: "Alphanumeric",
            bit: 2,
            ccBits: [9, 11, 13],
          }),
          (l.BYTE = { id: "Byte", bit: 4, ccBits: [8, 16, 16] }),
          (l.KANJI = { id: "Kanji", bit: 8, ccBits: [8, 10, 12] }),
          (l.MIXED = { bit: -1 }),
          (l.getCharCountIndicator = function (d, h) {
            if (!d.ccBits) throw new Error("Invalid mode: " + d);
            if (!u.isValid(h)) throw new Error("Invalid version: " + h);
            return h >= 1 && h < 10
              ? d.ccBits[0]
              : h < 27
                ? d.ccBits[1]
                : d.ccBits[2];
          }),
          (l.getBestModeForData = function (d) {
            return s.testNumeric(d)
              ? l.NUMERIC
              : s.testAlphanumeric(d)
                ? l.ALPHANUMERIC
                : s.testKanji(d)
                  ? l.KANJI
                  : l.BYTE;
          }),
          (l.toString = function (d) {
            if (d && d.id) return d.id;
            throw new Error("Invalid mode");
          }),
          (l.isValid = function (d) {
            return d && d.bit && d.ccBits;
          });
        function o(c) {
          if (typeof c != "string") throw new Error("Param is not a string");
          switch (c.toLowerCase()) {
            case "numeric":
              return l.NUMERIC;
            case "alphanumeric":
              return l.ALPHANUMERIC;
            case "kanji":
              return l.KANJI;
            case "byte":
              return l.BYTE;
            default:
              throw new Error("Unknown mode: " + c);
          }
        }
        l.from = function (d, h) {
          if (l.isValid(d)) return d;
          try {
            return o(d);
          } catch {
            return h;
          }
        };
      })(zs)),
    zs
  );
}
var Jh;
function Mx() {
  return (
    Jh ||
      ((Jh = 1),
      (function (l) {
        const u = ca(),
          s = T0(),
          o = fc(),
          c = fa(),
          d = C0(),
          h = 7973,
          p = u.getBCHDigit(h);
        function v(M, A, H) {
          for (let z = 1; z <= 40; z++)
            if (A <= l.getCapacity(z, H, M)) return z;
        }
        function w(M, A) {
          return c.getCharCountIndicator(M, A) + 4;
        }
        function S(M, A) {
          let H = 0;
          return (
            M.forEach(function (z) {
              const O = w(z.mode, A);
              H += O + z.getBitsLength();
            }),
            H
          );
        }
        function T(M, A) {
          for (let H = 1; H <= 40; H++)
            if (S(M, H) <= l.getCapacity(H, A, c.MIXED)) return H;
        }
        (l.from = function (A, H) {
          return d.isValid(A) ? parseInt(A, 10) : H;
        }),
          (l.getCapacity = function (A, H, z) {
            if (!d.isValid(A)) throw new Error("Invalid QR Code version");
            typeof z > "u" && (z = c.BYTE);
            const O = u.getSymbolTotalCodewords(A),
              q = s.getTotalCodewordsCount(A, H),
              Q = (O - q) * 8;
            if (z === c.MIXED) return Q;
            const Y = Q - w(z, A);
            switch (z) {
              case c.NUMERIC:
                return Math.floor((Y / 10) * 3);
              case c.ALPHANUMERIC:
                return Math.floor((Y / 11) * 2);
              case c.KANJI:
                return Math.floor(Y / 13);
              case c.BYTE:
              default:
                return Math.floor(Y / 8);
            }
          }),
          (l.getBestVersionForData = function (A, H) {
            let z;
            const O = o.from(H, o.M);
            if (Array.isArray(A)) {
              if (A.length > 1) return T(A, O);
              if (A.length === 0) return 1;
              z = A[0];
            } else z = A;
            return v(z.mode, z.getLength(), O);
          }),
          (l.getEncodedBits = function (A) {
            if (!d.isValid(A) || A < 7)
              throw new Error("Invalid QR Code version");
            let H = A << 12;
            for (; u.getBCHDigit(H) - p >= 0; )
              H ^= h << (u.getBCHDigit(H) - p);
            return (A << 12) | H;
          });
      })(Ms)),
    Ms
  );
}
var Rs = {},
  $h;
function zx() {
  if ($h) return Rs;
  $h = 1;
  const l = ca(),
    u = 1335,
    s = 21522,
    o = l.getBCHDigit(u);
  return (
    (Rs.getEncodedBits = function (d, h) {
      const p = (d.bit << 3) | h;
      let v = p << 10;
      for (; l.getBCHDigit(v) - o >= 0; ) v ^= u << (l.getBCHDigit(v) - o);
      return ((p << 10) | v) ^ s;
    }),
    Rs
  );
}
var Os = {},
  Us,
  Fh;
function Dx() {
  if (Fh) return Us;
  Fh = 1;
  const l = fa();
  function u(s) {
    (this.mode = l.NUMERIC), (this.data = s.toString());
  }
  return (
    (u.getBitsLength = function (o) {
      return 10 * Math.floor(o / 3) + (o % 3 ? (o % 3) * 3 + 1 : 0);
    }),
    (u.prototype.getLength = function () {
      return this.data.length;
    }),
    (u.prototype.getBitsLength = function () {
      return u.getBitsLength(this.data.length);
    }),
    (u.prototype.write = function (o) {
      let c, d, h;
      for (c = 0; c + 3 <= this.data.length; c += 3)
        (d = this.data.substr(c, 3)), (h = parseInt(d, 10)), o.put(h, 10);
      const p = this.data.length - c;
      p > 0 &&
        ((d = this.data.substr(c)), (h = parseInt(d, 10)), o.put(h, p * 3 + 1));
    }),
    (Us = u),
    Us
  );
}
var _s, Wh;
function Rx() {
  if (Wh) return _s;
  Wh = 1;
  const l = fa(),
    u = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      " ",
      "$",
      "%",
      "*",
      "+",
      "-",
      ".",
      "/",
      ":",
    ];
  function s(o) {
    (this.mode = l.ALPHANUMERIC), (this.data = o);
  }
  return (
    (s.getBitsLength = function (c) {
      return 11 * Math.floor(c / 2) + 6 * (c % 2);
    }),
    (s.prototype.getLength = function () {
      return this.data.length;
    }),
    (s.prototype.getBitsLength = function () {
      return s.getBitsLength(this.data.length);
    }),
    (s.prototype.write = function (c) {
      let d;
      for (d = 0; d + 2 <= this.data.length; d += 2) {
        let h = u.indexOf(this.data[d]) * 45;
        (h += u.indexOf(this.data[d + 1])), c.put(h, 11);
      }
      this.data.length % 2 && c.put(u.indexOf(this.data[d]), 6);
    }),
    (_s = s),
    _s
  );
}
var Bs, Ih;
function Ox() {
  if (Ih) return Bs;
  Ih = 1;
  const l = fa();
  function u(s) {
    (this.mode = l.BYTE),
      typeof s == "string"
        ? (this.data = new TextEncoder().encode(s))
        : (this.data = new Uint8Array(s));
  }
  return (
    (u.getBitsLength = function (o) {
      return o * 8;
    }),
    (u.prototype.getLength = function () {
      return this.data.length;
    }),
    (u.prototype.getBitsLength = function () {
      return u.getBitsLength(this.data.length);
    }),
    (u.prototype.write = function (s) {
      for (let o = 0, c = this.data.length; o < c; o++) s.put(this.data[o], 8);
    }),
    (Bs = u),
    Bs
  );
}
var ks, Ph;
function Ux() {
  if (Ph) return ks;
  Ph = 1;
  const l = fa(),
    u = ca();
  function s(o) {
    (this.mode = l.KANJI), (this.data = o);
  }
  return (
    (s.getBitsLength = function (c) {
      return c * 13;
    }),
    (s.prototype.getLength = function () {
      return this.data.length;
    }),
    (s.prototype.getBitsLength = function () {
      return s.getBitsLength(this.data.length);
    }),
    (s.prototype.write = function (o) {
      let c;
      for (c = 0; c < this.data.length; c++) {
        let d = u.toSJIS(this.data[c]);
        if (d >= 33088 && d <= 40956) d -= 33088;
        else if (d >= 57408 && d <= 60351) d -= 49472;
        else
          throw new Error(
            "Invalid SJIS character: " +
              this.data[c] +
              `
Make sure your charset is UTF-8`,
          );
        (d = ((d >>> 8) & 255) * 192 + (d & 255)), o.put(d, 13);
      }
    }),
    (ks = s),
    ks
  );
}
var Ls = { exports: {} },
  eg;
function _x() {
  return (
    eg ||
      ((eg = 1),
      (function (l) {
        var u = {
          single_source_shortest_paths: function (s, o, c) {
            var d = {},
              h = {};
            h[o] = 0;
            var p = u.PriorityQueue.make();
            p.push(o, 0);
            for (var v, w, S, T, M, A, H, z, O; !p.empty(); ) {
              (v = p.pop()), (w = v.value), (T = v.cost), (M = s[w] || {});
              for (S in M)
                M.hasOwnProperty(S) &&
                  ((A = M[S]),
                  (H = T + A),
                  (z = h[S]),
                  (O = typeof h[S] > "u"),
                  (O || z > H) && ((h[S] = H), p.push(S, H), (d[S] = w)));
            }
            if (typeof c < "u" && typeof h[c] > "u") {
              var q = ["Could not find a path from ", o, " to ", c, "."].join(
                "",
              );
              throw new Error(q);
            }
            return d;
          },
          extract_shortest_path_from_predecessor_list: function (s, o) {
            for (var c = [], d = o; d; ) c.push(d), s[d], (d = s[d]);
            return c.reverse(), c;
          },
          find_path: function (s, o, c) {
            var d = u.single_source_shortest_paths(s, o, c);
            return u.extract_shortest_path_from_predecessor_list(d, c);
          },
          PriorityQueue: {
            make: function (s) {
              var o = u.PriorityQueue,
                c = {},
                d;
              s = s || {};
              for (d in o) o.hasOwnProperty(d) && (c[d] = o[d]);
              return (
                (c.queue = []), (c.sorter = s.sorter || o.default_sorter), c
              );
            },
            default_sorter: function (s, o) {
              return s.cost - o.cost;
            },
            push: function (s, o) {
              var c = { value: s, cost: o };
              this.queue.push(c), this.queue.sort(this.sorter);
            },
            pop: function () {
              return this.queue.shift();
            },
            empty: function () {
              return this.queue.length === 0;
            },
          },
        };
        l.exports = u;
      })(Ls)),
    Ls.exports
  );
}
var tg;
function Bx() {
  return (
    tg ||
      ((tg = 1),
      (function (l) {
        const u = fa(),
          s = Dx(),
          o = Rx(),
          c = Ox(),
          d = Ux(),
          h = M0(),
          p = ca(),
          v = _x();
        function w(q) {
          return unescape(encodeURIComponent(q)).length;
        }
        function S(q, Q, Y) {
          const V = [];
          let W;
          for (; (W = q.exec(Y)) !== null; )
            V.push({
              data: W[0],
              index: W.index,
              mode: Q,
              length: W[0].length,
            });
          return V;
        }
        function T(q) {
          const Q = S(h.NUMERIC, u.NUMERIC, q),
            Y = S(h.ALPHANUMERIC, u.ALPHANUMERIC, q);
          let V, W;
          return (
            p.isKanjiModeEnabled()
              ? ((V = S(h.BYTE, u.BYTE, q)), (W = S(h.KANJI, u.KANJI, q)))
              : ((V = S(h.BYTE_KANJI, u.BYTE, q)), (W = [])),
            Q.concat(Y, V, W)
              .sort(function (G, U) {
                return G.index - U.index;
              })
              .map(function (G) {
                return { data: G.data, mode: G.mode, length: G.length };
              })
          );
        }
        function M(q, Q) {
          switch (Q) {
            case u.NUMERIC:
              return s.getBitsLength(q);
            case u.ALPHANUMERIC:
              return o.getBitsLength(q);
            case u.KANJI:
              return d.getBitsLength(q);
            case u.BYTE:
              return c.getBitsLength(q);
          }
        }
        function A(q) {
          return q.reduce(function (Q, Y) {
            const V = Q.length - 1 >= 0 ? Q[Q.length - 1] : null;
            return V && V.mode === Y.mode
              ? ((Q[Q.length - 1].data += Y.data), Q)
              : (Q.push(Y), Q);
          }, []);
        }
        function H(q) {
          const Q = [];
          for (let Y = 0; Y < q.length; Y++) {
            const V = q[Y];
            switch (V.mode) {
              case u.NUMERIC:
                Q.push([
                  V,
                  { data: V.data, mode: u.ALPHANUMERIC, length: V.length },
                  { data: V.data, mode: u.BYTE, length: V.length },
                ]);
                break;
              case u.ALPHANUMERIC:
                Q.push([V, { data: V.data, mode: u.BYTE, length: V.length }]);
                break;
              case u.KANJI:
                Q.push([V, { data: V.data, mode: u.BYTE, length: w(V.data) }]);
                break;
              case u.BYTE:
                Q.push([{ data: V.data, mode: u.BYTE, length: w(V.data) }]);
            }
          }
          return Q;
        }
        function z(q, Q) {
          const Y = {},
            V = { start: {} };
          let W = ["start"];
          for (let X = 0; X < q.length; X++) {
            const G = q[X],
              U = [];
            for (let Z = 0; Z < G.length; Z++) {
              const ne = G[Z],
                I = "" + X + Z;
              U.push(I), (Y[I] = { node: ne, lastCount: 0 }), (V[I] = {});
              for (let F = 0; F < W.length; F++) {
                const ae = W[F];
                Y[ae] && Y[ae].node.mode === ne.mode
                  ? ((V[ae][I] =
                      M(Y[ae].lastCount + ne.length, ne.mode) -
                      M(Y[ae].lastCount, ne.mode)),
                    (Y[ae].lastCount += ne.length))
                  : (Y[ae] && (Y[ae].lastCount = ne.length),
                    (V[ae][I] =
                      M(ne.length, ne.mode) +
                      4 +
                      u.getCharCountIndicator(ne.mode, Q)));
              }
            }
            W = U;
          }
          for (let X = 0; X < W.length; X++) V[W[X]].end = 0;
          return { map: V, table: Y };
        }
        function O(q, Q) {
          let Y;
          const V = u.getBestModeForData(q);
          if (((Y = u.from(Q, V)), Y !== u.BYTE && Y.bit < V.bit))
            throw new Error(
              '"' +
                q +
                '" cannot be encoded with mode ' +
                u.toString(Y) +
                `.
 Suggested mode is: ` +
                u.toString(V),
            );
          switch (
            (Y === u.KANJI && !p.isKanjiModeEnabled() && (Y = u.BYTE), Y)
          ) {
            case u.NUMERIC:
              return new s(q);
            case u.ALPHANUMERIC:
              return new o(q);
            case u.KANJI:
              return new d(q);
            case u.BYTE:
              return new c(q);
          }
        }
        (l.fromArray = function (Q) {
          return Q.reduce(function (Y, V) {
            return (
              typeof V == "string"
                ? Y.push(O(V, null))
                : V.data && Y.push(O(V.data, V.mode)),
              Y
            );
          }, []);
        }),
          (l.fromString = function (Q, Y) {
            const V = T(Q, p.isKanjiModeEnabled()),
              W = H(V),
              X = z(W, Y),
              G = v.find_path(X.map, "start", "end"),
              U = [];
            for (let Z = 1; Z < G.length - 1; Z++) U.push(X.table[G[Z]].node);
            return l.fromArray(A(U));
          }),
          (l.rawSplit = function (Q) {
            return l.fromArray(T(Q, p.isKanjiModeEnabled()));
          });
      })(Os)),
    Os
  );
}
var ng;
function kx() {
  if (ng) return xs;
  ng = 1;
  const l = ca(),
    u = fc(),
    s = Sx(),
    o = wx(),
    c = Ex(),
    d = Nx(),
    h = jx(),
    p = T0(),
    v = Cx(),
    w = Mx(),
    S = zx(),
    T = fa(),
    M = Bx();
  function A(X, G) {
    const U = X.size,
      Z = d.getPositions(G);
    for (let ne = 0; ne < Z.length; ne++) {
      const I = Z[ne][0],
        F = Z[ne][1];
      for (let ae = -1; ae <= 7; ae++)
        if (!(I + ae <= -1 || U <= I + ae))
          for (let oe = -1; oe <= 7; oe++)
            F + oe <= -1 ||
              U <= F + oe ||
              ((ae >= 0 && ae <= 6 && (oe === 0 || oe === 6)) ||
              (oe >= 0 && oe <= 6 && (ae === 0 || ae === 6)) ||
              (ae >= 2 && ae <= 4 && oe >= 2 && oe <= 4)
                ? X.set(I + ae, F + oe, !0, !0)
                : X.set(I + ae, F + oe, !1, !0));
    }
  }
  function H(X) {
    const G = X.size;
    for (let U = 8; U < G - 8; U++) {
      const Z = U % 2 === 0;
      X.set(U, 6, Z, !0), X.set(6, U, Z, !0);
    }
  }
  function z(X, G) {
    const U = c.getPositions(G);
    for (let Z = 0; Z < U.length; Z++) {
      const ne = U[Z][0],
        I = U[Z][1];
      for (let F = -2; F <= 2; F++)
        for (let ae = -2; ae <= 2; ae++)
          F === -2 || F === 2 || ae === -2 || ae === 2 || (F === 0 && ae === 0)
            ? X.set(ne + F, I + ae, !0, !0)
            : X.set(ne + F, I + ae, !1, !0);
    }
  }
  function O(X, G) {
    const U = X.size,
      Z = w.getEncodedBits(G);
    let ne, I, F;
    for (let ae = 0; ae < 18; ae++)
      (ne = Math.floor(ae / 3)),
        (I = (ae % 3) + U - 8 - 3),
        (F = ((Z >> ae) & 1) === 1),
        X.set(ne, I, F, !0),
        X.set(I, ne, F, !0);
  }
  function q(X, G, U) {
    const Z = X.size,
      ne = S.getEncodedBits(G, U);
    let I, F;
    for (I = 0; I < 15; I++)
      (F = ((ne >> I) & 1) === 1),
        I < 6
          ? X.set(I, 8, F, !0)
          : I < 8
            ? X.set(I + 1, 8, F, !0)
            : X.set(Z - 15 + I, 8, F, !0),
        I < 8
          ? X.set(8, Z - I - 1, F, !0)
          : I < 9
            ? X.set(8, 15 - I - 1 + 1, F, !0)
            : X.set(8, 15 - I - 1, F, !0);
    X.set(Z - 8, 8, 1, !0);
  }
  function Q(X, G) {
    const U = X.size;
    let Z = -1,
      ne = U - 1,
      I = 7,
      F = 0;
    for (let ae = U - 1; ae > 0; ae -= 2)
      for (ae === 6 && ae--; ; ) {
        for (let oe = 0; oe < 2; oe++)
          if (!X.isReserved(ne, ae - oe)) {
            let De = !1;
            F < G.length && (De = ((G[F] >>> I) & 1) === 1),
              X.set(ne, ae - oe, De),
              I--,
              I === -1 && (F++, (I = 7));
          }
        if (((ne += Z), ne < 0 || U <= ne)) {
          (ne -= Z), (Z = -Z);
          break;
        }
      }
  }
  function Y(X, G, U) {
    const Z = new s();
    U.forEach(function (oe) {
      Z.put(oe.mode.bit, 4),
        Z.put(oe.getLength(), T.getCharCountIndicator(oe.mode, X)),
        oe.write(Z);
    });
    const ne = l.getSymbolTotalCodewords(X),
      I = p.getTotalCodewordsCount(X, G),
      F = (ne - I) * 8;
    for (
      Z.getLengthInBits() + 4 <= F && Z.put(0, 4);
      Z.getLengthInBits() % 8 !== 0;
    )
      Z.putBit(0);
    const ae = (F - Z.getLengthInBits()) / 8;
    for (let oe = 0; oe < ae; oe++) Z.put(oe % 2 ? 17 : 236, 8);
    return V(Z, X, G);
  }
  function V(X, G, U) {
    const Z = l.getSymbolTotalCodewords(G),
      ne = p.getTotalCodewordsCount(G, U),
      I = Z - ne,
      F = p.getBlocksCount(G, U),
      ae = Z % F,
      oe = F - ae,
      De = Math.floor(Z / F),
      R = Math.floor(I / F),
      K = R + 1,
      ie = De - R,
      ye = new v(ie);
    let J = 0;
    const Ue = new Array(F),
      we = new Array(F);
    let ge = 0;
    const Re = new Uint8Array(X.buffer);
    for (let ve = 0; ve < F; ve++) {
      const Rt = ve < oe ? R : K;
      (Ue[ve] = Re.slice(J, J + Rt)),
        (we[ve] = ye.encode(Ue[ve])),
        (J += Rt),
        (ge = Math.max(ge, Rt));
    }
    const Se = new Uint8Array(Z);
    let Ce = 0,
      Ye,
      We;
    for (Ye = 0; Ye < ge; Ye++)
      for (We = 0; We < F; We++) Ye < Ue[We].length && (Se[Ce++] = Ue[We][Ye]);
    for (Ye = 0; Ye < ie; Ye++)
      for (We = 0; We < F; We++) Se[Ce++] = we[We][Ye];
    return Se;
  }
  function W(X, G, U, Z) {
    let ne;
    if (Array.isArray(X)) ne = M.fromArray(X);
    else if (typeof X == "string") {
      let De = G;
      if (!De) {
        const R = M.rawSplit(X);
        De = w.getBestVersionForData(R, U);
      }
      ne = M.fromString(X, De || 40);
    } else throw new Error("Invalid data");
    const I = w.getBestVersionForData(ne, U);
    if (!I)
      throw new Error(
        "The amount of data is too big to be stored in a QR Code",
      );
    if (!G) G = I;
    else if (G < I)
      throw new Error(
        `
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` +
          I +
          `.
`,
      );
    const F = Y(G, U, ne),
      ae = l.getSymbolSize(G),
      oe = new o(ae);
    return (
      A(oe, G),
      H(oe),
      z(oe, G),
      q(oe, U, 0),
      G >= 7 && O(oe, G),
      Q(oe, F),
      isNaN(Z) && (Z = h.getBestMask(oe, q.bind(null, oe, U))),
      h.applyMask(Z, oe),
      q(oe, U, Z),
      {
        modules: oe,
        version: G,
        errorCorrectionLevel: U,
        maskPattern: Z,
        segments: ne,
      }
    );
  }
  return (
    (xs.create = function (G, U) {
      if (typeof G > "u" || G === "") throw new Error("No input text");
      let Z = u.M,
        ne,
        I;
      return (
        typeof U < "u" &&
          ((Z = u.from(U.errorCorrectionLevel, u.M)),
          (ne = w.from(U.version)),
          (I = h.from(U.maskPattern)),
          U.toSJISFunc && l.setToSJISFunction(U.toSJISFunc)),
        W(G, ne, Z, I)
      );
    }),
    xs
  );
}
var Hs = {},
  qs = {},
  ag;
function z0() {
  return (
    ag ||
      ((ag = 1),
      (function (l) {
        function u(s) {
          if (
            (typeof s == "number" && (s = s.toString()), typeof s != "string")
          )
            throw new Error("Color should be defined as hex string");
          let o = s.slice().replace("#", "").split("");
          if (o.length < 3 || o.length === 5 || o.length > 8)
            throw new Error("Invalid hex color: " + s);
          (o.length === 3 || o.length === 4) &&
            (o = Array.prototype.concat.apply(
              [],
              o.map(function (d) {
                return [d, d];
              }),
            )),
            o.length === 6 && o.push("F", "F");
          const c = parseInt(o.join(""), 16);
          return {
            r: (c >> 24) & 255,
            g: (c >> 16) & 255,
            b: (c >> 8) & 255,
            a: c & 255,
            hex: "#" + o.slice(0, 6).join(""),
          };
        }
        (l.getOptions = function (o) {
          o || (o = {}), o.color || (o.color = {});
          const c =
              typeof o.margin > "u" || o.margin === null || o.margin < 0
                ? 4
                : o.margin,
            d = o.width && o.width >= 21 ? o.width : void 0,
            h = o.scale || 4;
          return {
            width: d,
            scale: d ? 4 : h,
            margin: c,
            color: {
              dark: u(o.color.dark || "#000000ff"),
              light: u(o.color.light || "#ffffffff"),
            },
            type: o.type,
            rendererOpts: o.rendererOpts || {},
          };
        }),
          (l.getScale = function (o, c) {
            return c.width && c.width >= o + c.margin * 2
              ? c.width / (o + c.margin * 2)
              : c.scale;
          }),
          (l.getImageWidth = function (o, c) {
            const d = l.getScale(o, c);
            return Math.floor((o + c.margin * 2) * d);
          }),
          (l.qrToImageData = function (o, c, d) {
            const h = c.modules.size,
              p = c.modules.data,
              v = l.getScale(h, d),
              w = Math.floor((h + d.margin * 2) * v),
              S = d.margin * v,
              T = [d.color.light, d.color.dark];
            for (let M = 0; M < w; M++)
              for (let A = 0; A < w; A++) {
                let H = (M * w + A) * 4,
                  z = d.color.light;
                if (M >= S && A >= S && M < w - S && A < w - S) {
                  const O = Math.floor((M - S) / v),
                    q = Math.floor((A - S) / v);
                  z = T[p[O * h + q] ? 1 : 0];
                }
                (o[H++] = z.r), (o[H++] = z.g), (o[H++] = z.b), (o[H] = z.a);
              }
          });
      })(qs)),
    qs
  );
}
var lg;
function Lx() {
  return (
    lg ||
      ((lg = 1),
      (function (l) {
        const u = z0();
        function s(c, d, h) {
          c.clearRect(0, 0, d.width, d.height),
            d.style || (d.style = {}),
            (d.height = h),
            (d.width = h),
            (d.style.height = h + "px"),
            (d.style.width = h + "px");
        }
        function o() {
          try {
            return document.createElement("canvas");
          } catch {
            throw new Error("You need to specify a canvas element");
          }
        }
        (l.render = function (d, h, p) {
          let v = p,
            w = h;
          typeof v > "u" && (!h || !h.getContext) && ((v = h), (h = void 0)),
            h || (w = o()),
            (v = u.getOptions(v));
          const S = u.getImageWidth(d.modules.size, v),
            T = w.getContext("2d"),
            M = T.createImageData(S, S);
          return (
            u.qrToImageData(M.data, d, v),
            s(T, w, S),
            T.putImageData(M, 0, 0),
            w
          );
        }),
          (l.renderToDataURL = function (d, h, p) {
            let v = p;
            typeof v > "u" && (!h || !h.getContext) && ((v = h), (h = void 0)),
              v || (v = {});
            const w = l.render(d, h, v),
              S = v.type || "image/png",
              T = v.rendererOpts || {};
            return w.toDataURL(S, T.quality);
          });
      })(Hs)),
    Hs
  );
}
var Vs = {},
  ig;
function Hx() {
  if (ig) return Vs;
  ig = 1;
  const l = z0();
  function u(c, d) {
    const h = c.a / 255,
      p = d + '="' + c.hex + '"';
    return h < 1 ? p + " " + d + '-opacity="' + h.toFixed(2).slice(1) + '"' : p;
  }
  function s(c, d, h) {
    let p = c + d;
    return typeof h < "u" && (p += " " + h), p;
  }
  function o(c, d, h) {
    let p = "",
      v = 0,
      w = !1,
      S = 0;
    for (let T = 0; T < c.length; T++) {
      const M = Math.floor(T % d),
        A = Math.floor(T / d);
      !M && !w && (w = !0),
        c[T]
          ? (S++,
            (T > 0 && M > 0 && c[T - 1]) ||
              ((p += w ? s("M", M + h, 0.5 + A + h) : s("m", v, 0)),
              (v = 0),
              (w = !1)),
            (M + 1 < d && c[T + 1]) || ((p += s("h", S)), (S = 0)))
          : v++;
    }
    return p;
  }
  return (
    (Vs.render = function (d, h, p) {
      const v = l.getOptions(h),
        w = d.modules.size,
        S = d.modules.data,
        T = w + v.margin * 2,
        M = v.color.light.a
          ? "<path " +
            u(v.color.light, "fill") +
            ' d="M0 0h' +
            T +
            "v" +
            T +
            'H0z"/>'
          : "",
        A =
          "<path " +
          u(v.color.dark, "stroke") +
          ' d="' +
          o(S, w, v.margin) +
          '"/>',
        H = 'viewBox="0 0 ' + T + " " + T + '"',
        O =
          '<svg xmlns="http://www.w3.org/2000/svg" ' +
          (v.width ? 'width="' + v.width + '" height="' + v.width + '" ' : "") +
          H +
          ' shape-rendering="crispEdges">' +
          M +
          A +
          `</svg>
`;
      return typeof p == "function" && p(null, O), O;
    }),
    Vs
  );
}
var rg;
function qx() {
  if (rg) return tl;
  rg = 1;
  const l = xx(),
    u = kx(),
    s = Lx(),
    o = Hx();
  function c(d, h, p, v, w) {
    const S = [].slice.call(arguments, 1),
      T = S.length,
      M = typeof S[T - 1] == "function";
    if (!M && !l()) throw new Error("Callback required as last argument");
    if (M) {
      if (T < 2) throw new Error("Too few arguments provided");
      T === 2
        ? ((w = p), (p = h), (h = v = void 0))
        : T === 3 &&
          (h.getContext && typeof w > "u"
            ? ((w = v), (v = void 0))
            : ((w = v), (v = p), (p = h), (h = void 0)));
    } else {
      if (T < 1) throw new Error("Too few arguments provided");
      return (
        T === 1
          ? ((p = h), (h = v = void 0))
          : T === 2 && !h.getContext && ((v = p), (p = h), (h = void 0)),
        new Promise(function (A, H) {
          try {
            const z = u.create(p, v);
            A(d(z, h, v));
          } catch (z) {
            H(z);
          }
        })
      );
    }
    try {
      const A = u.create(p, v);
      w(null, d(A, h, v));
    } catch (A) {
      w(A);
    }
  }
  return (
    (tl.create = u.create),
    (tl.toCanvas = c.bind(null, s.render)),
    (tl.toDataURL = c.bind(null, s.renderToDataURL)),
    (tl.toString = c.bind(null, function (d, h, p) {
      return o.render(d, p);
    })),
    tl
  );
}
var Vx = qx();
const Gx = gg(Vx);
function Yx({
  text: l,
  label: u,
  copiedLabel: s = "已复制！",
  compact: o = !1,
}) {
  const [c, d] = x.useState(!1),
    h = async () => {
      await navigator.clipboard.writeText(l),
        d(!0),
        setTimeout(() => d(!1), 2e3);
    };
  return f.jsxs("button", {
    onClick: h,
    className: `border-border hover:bg-secondary hover:border-primary/40 flex items-center gap-1.5 rounded-lg border font-medium transition-all ${o ? "w-full justify-between px-2.5 py-1.5 text-[11px]" : "px-3 py-1.5 text-xs"}`,
    children: [
      f.jsx("span", { className: "truncate", children: c ? s : u }),
      c
        ? f.jsx(tc, { size: 11, className: "flex-shrink-0 text-green-500" })
        : f.jsx(bg, {
            size: 11,
            className: "text-muted-foreground flex-shrink-0",
          }),
    ],
  });
}
function D0({ open: l, onClose: u }) {
  const [s, o] = x.useState(""),
    [c, d] = x.useState(!1),
    h =
      typeof window < "u"
        ? `${window.location.origin}${window.location.pathname.replace(/\/$/, "") || "/"}`
        : "";
  x.useEffect(() => {
    !l ||
      !h ||
      Gx.toDataURL(h, {
        width: 240,
        margin: 2,
        color: { dark: "#111111", light: "#ffffff" },
      }).then(o);
  }, [l, h]);
  const p = async () => {
      await navigator.clipboard.writeText(h),
        d(!0),
        setTimeout(() => d(!1), 2e3);
    },
    v = () => {
      if (!s) return;
      const A = document.createElement("a");
      (A.href = s),
        (A.download = `${k.name.replace(/\s+/g, "-")}-qr.png`),
        A.click();
    },
    w = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(h)}`,
    S = `https://twitter.com/intent/tweet?text=${encodeURIComponent("Check out my portfolio 👋")}&url=${encodeURIComponent(h)}`,
    T = `mailto:?subject=${encodeURIComponent(`${k.name}'s Portfolio`)}&body=${encodeURIComponent(`Hi,

Check out my portfolio:
${h}`)}`,
    M = [
      '<table cellpadding="0" cellspacing="0" style="font-family:Arial,sans-serif;font-size:14px;color:#333333;">',
      `  <tr><td style="padding-bottom:2px;"><strong>${k.name}</strong></td></tr>`,
      `  <tr><td style="color:#666666;padding-bottom:2px;">${k.title}</td></tr>`,
      k.location
        ? `  <tr><td style="color:#666666;padding-bottom:6px;">${k.location}</td></tr>`
        : "",
      `  <tr><td><a href="${h}" style="color:#6366f1;text-decoration:none;">🌐 Portfolio</a>${k.email ? ` &nbsp;·&nbsp; <a href="mailto:${k.email}" style="color:#6366f1;text-decoration:none;">${k.email}</a>` : ""}</td></tr>`,
      "</table>",
    ]
      .filter(Boolean)
      .join(`
`);
  return f.jsx(cx, {
    open: l,
    onOpenChange: u,
    children: f.jsxs(w0, {
      className: "max-h-[85vh] max-w-md overflow-hidden",
      children: [
        f.jsx(E0, {
          children: f.jsx(N0, {
            className: "text-base font-medium",
            children: "分享我的作品集",
          }),
        }),
        f.jsxs("div", {
          className: "space-y-4 overflow-y-auto pr-1 pb-1",
          children: [
            f.jsxs("div", {
              children: [
                f.jsxs("p", {
                  className:
                    "text-muted-foreground mb-2 flex items-center gap-1.5 font-mono text-xs tracking-widest uppercase",
                  children: [f.jsx(vg, { size: 11 }), " 作品集链接"],
                }),
                f.jsxs("div", {
                  className:
                    "bg-secondary border-border flex items-center gap-2 rounded-xl border px-3 py-2.5",
                  children: [
                    f.jsx("span", {
                      className:
                        "text-foreground flex-1 truncate font-mono text-xs",
                      children: h,
                    }),
                    f.jsx("button", {
                      onClick: p,
                      className:
                        "hover:bg-background flex-shrink-0 rounded-lg p-1.5 transition-colors",
                      "aria-label": "Copy link",
                      children: c
                        ? f.jsx(tc, { size: 14, className: "text-green-500" })
                        : f.jsx(bg, {
                            size: 14,
                            className: "text-muted-foreground",
                          }),
                    }),
                  ],
                }),
              ],
            }),
            f.jsxs("div", {
              children: [
                f.jsx("p", {
                  className:
                    "text-muted-foreground mb-2 font-mono text-xs tracking-widest uppercase",
                  children: "分享到",
                }),
                f.jsxs("div", {
                  className: "flex flex-wrap gap-2",
                  children: [
                    f.jsxs("a", {
                      href: w,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "border-border flex items-center gap-1.5 rounded-xl border px-3.5 py-2 text-xs font-medium transition-all hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/10 hover:text-[#0A66C2]",
                      children: [f.jsx(sc, { size: 13 }), " LinkedIn"],
                    }),
                    f.jsxs("a", {
                      href: S,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "border-border hover:bg-foreground/5 flex items-center gap-1.5 rounded-xl border px-3.5 py-2 text-xs font-medium transition-all",
                      children: [f.jsx(uc, { size: 13 }), " Twitter / X"],
                    }),
                    f.jsxs("a", {
                      href: T,
                      className:
                        "border-border hover:bg-secondary hover:border-primary/40 flex items-center gap-1.5 rounded-xl border px-3.5 py-2 text-xs font-medium transition-all",
                      children: [f.jsx(ci, { size: 13 }), " Email"],
                    }),
                  ],
                }),
              ],
            }),
            f.jsxs("div", {
              children: [
                f.jsxs("p", {
                  className:
                    "text-muted-foreground mb-2 flex items-center gap-1.5 font-mono text-xs tracking-widest uppercase",
                  children: [f.jsx(cb, { size: 11 }), " 二维码"],
                }),
                f.jsxs("div", {
                  className:
                    "bg-secondary border-border flex items-center gap-4 rounded-xl border p-3",
                  children: [
                    s
                      ? f.jsx("img", {
                          src: s,
                          alt: "Portfolio QR Code",
                          className: "h-20 w-20 flex-shrink-0 rounded-lg",
                        })
                      : f.jsx("div", {
                          className:
                            "bg-muted h-20 w-20 flex-shrink-0 animate-pulse rounded-lg",
                        }),
                    f.jsxs("div", {
                      className: "flex flex-col gap-2",
                      children: [
                        f.jsx("p", {
                          className:
                            "text-muted-foreground text-xs leading-relaxed",
                          children: "可印在名片、简历页眉或线下物料上。",
                        }),
                        f.jsxs("button", {
                          onClick: v,
                          disabled: !s,
                          className:
                            "border-border hover:bg-background hover:border-primary/40 flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-all disabled:opacity-40",
                          children: [f.jsx(ia, { size: 12 }), " 下载 PNG"],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            f.jsxs("div", {
              children: [
                f.jsxs("p", {
                  className:
                    "text-muted-foreground mb-2 flex items-center gap-1.5 font-mono text-xs tracking-widest uppercase",
                  children: [f.jsx(ci, { size: 11 }), " 邮件签名"],
                }),
                f.jsxs("div", {
                  className: "bg-secondary border-border rounded-xl border p-3",
                  children: [
                    f.jsxs("div", {
                      className:
                        "bg-background border-border/60 mb-2.5 rounded-lg border p-2.5 text-xs",
                      children: [
                        f.jsx("div", {
                          className: "text-foreground font-semibold",
                          children: k.name,
                        }),
                        f.jsx("div", {
                          className: "text-muted-foreground",
                          children: k.title,
                        }),
                        k.location &&
                          f.jsx("div", {
                            className: "text-muted-foreground",
                            children: k.location,
                          }),
                        f.jsx("a", {
                          href: h,
                          className: "text-primary",
                          onClick: (A) => A.preventDefault(),
                          children: "🌐 Portfolio",
                        }),
                      ],
                    }),
                    f.jsx(Yx, { text: M, label: "Copy HTML" }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const Xx = {
    about: "关于我",
    stats: "数据",
    skills: "技能",
    languages: "语言",
    experience: "经历",
    projects: "项目",
    education: "教育",
    certifications: "荣誉",
    publications: "代表报道",
    testimonials: "推荐",
    contact: "联系",
  },
  Jr = k.sections
    .filter((l) => l.show)
    .map((l) => ({ label: Xx[l.id] ?? l.id, href: `#${l.id}`, id: l.id })),
  R0 = 5,
  Qx = Jr.slice(0, R0),
  Lr = Jr.slice(R0),
  og = Jr.map((l) => l.id),
  Gs = k.blog?.enabled ?? !1;
function Zx({ theme: l, onToggleTheme: u, topOffset: s }) {
  const [o, c] = x.useState(!1),
    [d, h] = x.useState(!1),
    [p, v] = x.useState(""),
    [w, S] = x.useState(!1),
    [T, M] = x.useState(!1),
    A = x.useRef(null);
  x.useEffect(() => {
    const O = () => {
      const Q = window.scrollY,
        Y = window.innerHeight,
        V = document.documentElement.scrollHeight;
      if ((c(Q > 20), Q > 0 && Q + Y >= V - 60 && og.includes("contact"))) {
        v("contact");
        return;
      }
      const W = Y * 0.4;
      let X = "";
      for (const G of og) {
        const U = document.getElementById(G);
        U && U.getBoundingClientRect().top <= W && (X = G);
      }
      v(X);
    };
    let q = requestAnimationFrame(O);
    return (
      window.addEventListener("scroll", O, { passive: !0 }),
      () => {
        cancelAnimationFrame(q), window.removeEventListener("scroll", O);
      }
    );
  }, []),
    x.useEffect(() => {
      const O = (q) => {
        A.current && !A.current.contains(q.target) && M(!1);
      };
      return (
        document.addEventListener("mousedown", O),
        () => document.removeEventListener("mousedown", O)
      );
    }, []);
  const H = (O) => {
      O.preventDefault(), h(!1), M(!1);
    },
    z = (O) =>
      `relative px-3 py-2 text-xs font-medium tracking-widest uppercase rounded-md transition-colors whitespace-nowrap ${O ? "text-foreground" : "text-muted-foreground hover:text-foreground hover:bg-secondary"}`;
  return f.jsxs("nav", {
    "data-testid": "navbar",
    style: { top: `${s}px` },
    className: `fixed right-0 left-0 z-50 transition-all duration-500 ${o ? "bg-background/85 border-border/60 border-b shadow-sm backdrop-blur-lg" : "bg-transparent"}`,
    children: [
      f.jsxs("div", {
        className:
          "mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6",
        children: [
          f.jsxs("a", {
            href: "#hero",
            onClick: (O) => H(O),
            className:
              "text-foreground hover:text-primary flex-shrink-0 font-serif text-2xl font-light tracking-wide transition-colors",
            "data-testid": "nav-logo",
            children: [
              (() => {
                const O = k.name.split(" ")[0];
                return O.length > 8
                  ? k.name
                      .split(" ")
                      .map((q) => q[0])
                      .join("")
                      .slice(0, 3)
                      .toUpperCase()
                  : O;
              })(),
              f.jsx("span", {
                className: "text-primary font-normal",
                children: ".",
              }),
            ],
          }),
          f.jsxs("div", {
            className:
              "hidden flex-1 items-center justify-center gap-0.5 md:flex",
            children: [
              Qx.map((O) => {
                const q = p === O.id;
                return f.jsxs(
                  "a",
                  {
                    href: O.href,
                    onClick: (Q) => H(Q),
                    className: z(q),
                    "data-testid": `nav-link-${O.label.toLowerCase()}`,
                    children: [
                      q &&
                        f.jsx($.span, {
                          layoutId: "nav-active-pill",
                          className: "bg-secondary absolute inset-0 rounded-md",
                          style: { zIndex: -1 },
                          transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 35,
                          },
                        }),
                      q &&
                        f.jsx($.span, {
                          layoutId: "nav-active-dot",
                          className:
                            "bg-primary absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full",
                          transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 35,
                          },
                        }),
                      O.label,
                    ],
                  },
                  O.href,
                );
              }),
              Lr.length > 0 &&
                f.jsxs("div", {
                  ref: A,
                  className: "relative",
                  children: [
                    f.jsxs("button", {
                      onClick: () => M((O) => !O),
                      "aria-expanded": T,
                      "aria-haspopup": "true",
                      className: `flex items-center gap-1 rounded-md px-3 py-2 text-xs font-medium tracking-widest uppercase transition-colors ${T || Lr.some((O) => p === O.id) ? "text-foreground bg-secondary" : "text-muted-foreground hover:text-foreground hover:bg-secondary"}`,
                      children: [
                        "更多",
                        f.jsx($.span, {
                          animate: { rotate: T ? 180 : 0 },
                          transition: { duration: 0.18 },
                          children: f.jsx(fb, { size: 12 }),
                        }),
                      ],
                    }),
                    f.jsx(ll, {
                      children:
                        T &&
                        f.jsxs($.div, {
                          initial: { opacity: 0, y: -6, scale: 0.97 },
                          animate: { opacity: 1, y: 0, scale: 1 },
                          exit: { opacity: 0, y: -6, scale: 0.97 },
                          transition: { duration: 0.15, ease: "easeOut" },
                          className:
                            "bg-background border-border absolute top-full left-1/2 z-50 mt-2 w-44 -translate-x-1/2 overflow-hidden rounded-xl border py-1 shadow-lg shadow-black/10",
                          children: [
                            Lr.map((O) => {
                              const q = p === O.id;
                              return f.jsxs(
                                "a",
                                {
                                  href: O.href,
                                  onClick: (Q) => H(Q),
                                  className: `flex items-center gap-2.5 px-4 py-2.5 text-xs font-medium tracking-widest uppercase transition-colors ${q ? "text-foreground bg-secondary" : "text-muted-foreground hover:text-foreground hover:bg-secondary"}`,
                                  children: [
                                    q &&
                                      f.jsx("span", {
                                        className:
                                          "bg-primary h-1.5 w-1.5 flex-shrink-0 rounded-full",
                                      }),
                                    !q &&
                                      f.jsx("span", {
                                        className: "h-1.5 w-1.5 flex-shrink-0",
                                      }),
                                    O.label,
                                  ],
                                },
                                O.href,
                              );
                            }),
                            Gs &&
                              f.jsxs("a", {
                                href: "#/blog",
                                className:
                                  "text-muted-foreground hover:text-foreground hover:bg-secondary flex items-center gap-2.5 px-4 py-2.5 text-xs font-medium tracking-widest uppercase transition-colors",
                                children: [
                                  f.jsx("span", {
                                    className: "h-1.5 w-1.5 flex-shrink-0",
                                  }),
                                  "博客",
                                ],
                              }),
                          ],
                        }),
                    }),
                  ],
                }),
              Gs &&
                Lr.length === 0 &&
                f.jsx("a", {
                  href: "#/blog",
                  className:
                    "text-muted-foreground hover:text-foreground hover:bg-secondary relative rounded-md px-3 py-2 text-xs font-medium tracking-widest whitespace-nowrap uppercase transition-colors",
                  children: "博客",
                }),
            ],
          }),
          f.jsxs("div", {
            className: "flex flex-shrink-0 items-center gap-2",
            children: [
              f.jsx("button", {
                onClick: () => S(!0),
                className:
                  "border-border hover:border-primary/40 bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground rounded-full border p-2 transition-all",
                "aria-label": "Share portfolio",
                "data-testid": "button-share-nav",
                children: f.jsx(yg, { size: 16 }),
              }),
              f.jsx("button", {
                onClick: u,
                className:
                  "border-border hover:border-primary/40 bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground overflow-hidden rounded-full border p-2 transition-all",
                "aria-label": "Toggle theme",
                "data-testid": "button-toggle-theme",
                children: f.jsx(ll, {
                  mode: "wait",
                  initial: !1,
                  children:
                    l === "dark"
                      ? f.jsx(
                          $.span,
                          {
                            initial: { rotate: -90, opacity: 0, y: 8 },
                            animate: { rotate: 0, opacity: 1, y: 0 },
                            exit: { rotate: 90, opacity: 0, y: -8 },
                            transition: { duration: 0.22 },
                            className: "block",
                            children: f.jsx(db, { size: 16 }),
                          },
                          "sun",
                        )
                      : f.jsx(
                          $.span,
                          {
                            initial: { rotate: 90, opacity: 0, y: 8 },
                            animate: { rotate: 0, opacity: 1, y: 0 },
                            exit: { rotate: -90, opacity: 0, y: -8 },
                            transition: { duration: 0.22 },
                            className: "block",
                            children: f.jsx(mb, { size: 16 }),
                          },
                          "moon",
                        ),
                }),
              }),
              k.resumeUrl
                ? f.jsxs("a", {
                    href: k.resumeUrl,
                    download: k.resumeFileName || "resume.pdf",
                    className:
                      "bg-primary text-primary-foreground hidden items-center gap-2 rounded-full px-4 py-2 text-xs font-medium tracking-widest uppercase transition-opacity hover:opacity-90 md:flex",
                    "data-testid": "button-download-resume-nav",
                    children: [f.jsx(ia, { size: 13 }), "简历"],
                  })
                : f.jsxs("a", {
                    href: "#/resume",
                    className:
                      "bg-primary text-primary-foreground hidden items-center gap-2 rounded-full px-4 py-2 text-xs font-medium tracking-widest uppercase transition-opacity hover:opacity-90 md:flex",
                    "data-testid": "button-download-resume-nav",
                    children: [f.jsx(ia, { size: 13 }), "简历"],
                  }),
              f.jsx("button", {
                className:
                  "text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md p-2 transition-colors md:hidden",
                onClick: () => h(!d),
                "aria-label": "Toggle menu",
                "data-testid": "button-mobile-menu",
                children: f.jsx(ll, {
                  mode: "wait",
                  initial: !1,
                  children: d
                    ? f.jsx(
                        $.span,
                        {
                          initial: { rotate: -90, opacity: 0 },
                          animate: { rotate: 0, opacity: 1 },
                          exit: { rotate: 90, opacity: 0 },
                          transition: { duration: 0.18 },
                          className: "block",
                          children: f.jsx(ec, { size: 18 }),
                        },
                        "close",
                      )
                    : f.jsx(
                        $.span,
                        {
                          initial: { rotate: 90, opacity: 0 },
                          animate: { rotate: 0, opacity: 1 },
                          exit: { rotate: -90, opacity: 0 },
                          transition: { duration: 0.18 },
                          className: "block",
                          children: f.jsx(hb, { size: 18 }),
                        },
                        "menu",
                      ),
                }),
              }),
            ],
          }),
        ],
      }),
      f.jsx(ll, {
        children:
          d &&
          f.jsx($.div, {
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
            transition: { duration: 0.25, ease: "easeInOut" },
            className:
              "bg-background/95 border-border overflow-hidden border-b backdrop-blur-md md:hidden",
            children: f.jsxs("div", {
              className: "flex flex-col gap-1 px-6 py-4",
              children: [
                Jr.map((O) => {
                  const q = p === O.id;
                  return f.jsxs(
                    "a",
                    {
                      href: O.href,
                      onClick: (Q) => H(Q),
                      className: `flex items-center gap-2.5 rounded-md px-3 py-3 text-xs font-medium tracking-widest uppercase transition-colors ${q ? "text-foreground bg-secondary" : "text-muted-foreground hover:text-foreground hover:bg-secondary"}`,
                      children: [
                        f.jsx("span", {
                          className: `h-1.5 w-1.5 flex-shrink-0 rounded-full ${q ? "bg-primary" : ""}`,
                        }),
                        O.label,
                      ],
                    },
                    O.href,
                  );
                }),
                Gs &&
                  f.jsxs("a", {
                    href: "#/blog",
                    onClick: () => h(!1),
                    className:
                      "text-muted-foreground hover:text-foreground hover:bg-secondary flex items-center gap-2.5 rounded-md px-3 py-3 text-xs font-medium tracking-widest uppercase transition-colors",
                    children: [
                      f.jsx("span", {
                        className: "h-1.5 w-1.5 flex-shrink-0 rounded-full",
                      }),
                      "Blog",
                    ],
                  }),
                k.resumeUrl
                  ? f.jsxs("a", {
                      href: k.resumeUrl,
                      download: k.resumeFileName || "resume.pdf",
                      className:
                        "text-primary hover:bg-accent flex items-center gap-2 rounded-md px-3 py-3 text-xs font-medium tracking-widest uppercase transition-colors",
                      children: [f.jsx(ia, { size: 13 }), " 下载简历"],
                    })
                  : f.jsxs("a", {
                      href: "#/resume",
                      onClick: () => h(!1),
                      className:
                        "text-primary hover:bg-accent flex items-center gap-2 rounded-md px-3 py-3 text-xs font-medium tracking-widest uppercase transition-colors",
                      children: [f.jsx(ia, { size: 13 }), " 查看简历"],
                    }),
              ],
            }),
          }),
      }),
      f.jsx(D0, { open: w, onClose: () => S(!1) }),
    ],
  });
}
function Kx() {
  if (k.avatarUrl)
    return f.jsx("img", {
      src: k.avatarUrl,
      alt: k.name,
      className: "ring-primary/30 h-28 w-28 rounded-2xl object-cover ring-2",
      fetchPriority: "high",
      loading: "eager",
      "data-testid": "img-avatar",
    });
  const l = k.name
    .split(" ")
    .map((u) => u[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return f.jsx("div", {
    className:
      "text-primary-foreground ring-primary/30 flex h-28 w-28 items-center justify-center rounded-2xl font-serif text-3xl font-bold ring-2",
    style: {
      background:
        "linear-gradient(135deg, hsl(var(--primary)), hsl(250 84% 80%))",
    },
    "data-testid": "div-avatar-initials",
    children: l,
  });
}
function Jx({ text: l }) {
  const [u, s] = x.useState(""),
    [o, c] = x.useState(!1);
  return (
    x.useEffect(() => {
      let d = 0;
      const h = setTimeout(() => {
        const p = setInterval(() => {
          d++, s(l.slice(0, d)), d >= l.length && (clearInterval(p), c(!0));
        }, 38);
        return () => clearInterval(p);
      }, 600);
      return () => clearTimeout(h);
    }, [l]),
    f.jsxs("p", {
      className:
        "text-muted-foreground max-w-xl text-base leading-relaxed font-light tracking-wide md:text-lg",
      children: [
        u,
        !o &&
          f.jsx("span", {
            className:
              "bg-primary ml-0.5 inline-block h-4 w-0.5 animate-pulse align-middle",
          }),
      ],
    })
  );
}
function $x() {
  const l = x.useRef(null),
    { scrollYProgress: u } = nb({
      target: l,
      offset: ["start start", "end start"],
    }),
    s = al(u, [0, 1], ["0%", "28%"]),
    o = al(u, [0, 0.65], [1, 0]),
    c = al(u, [0, 1], ["0%", "14%"]),
    d = al(u, [0, 1], ["0%", "18%"]),
    h = al(u, [0, 0.18], [1, 0]);
  return f.jsxs("section", {
    id: "hero",
    ref: l,
    className:
      "relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-16",
    children: [
      f.jsx($.div, {
        style: {
          y: c,
          backgroundImage:
            "radial-gradient(hsl(var(--primary) / 0.11) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        },
        className:
          "pointer-events-none absolute inset-0 opacity-30 dark:opacity-20",
      }),
      f.jsx($.div, {
        style: {
          y: d,
          background:
            "radial-gradient(ellipse, hsl(var(--primary)), transparent 70%)",
        },
        className:
          "pointer-events-none absolute top-1/3 left-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15 blur-3xl",
      }),
      f.jsxs($.div, {
        style: { y: s, opacity: o },
        className:
          "relative z-10 flex w-full max-w-3xl flex-col items-center gap-6 text-center",
        children: [
          f.jsx($.div, {
            initial: { y: 20 },
            animate: { y: 0 },
            transition: { duration: 0.5 },
            children: f.jsx(Kx, {}),
          }),
          f.jsxs($.div, {
            initial: { y: 20 },
            animate: { y: 0 },
            transition: { duration: 0.5, delay: 0.08 },
            className: "flex flex-col items-center gap-3",
            children: [
              k.openToWork &&
                f.jsxs("span", {
                  className:
                    "inline-flex items-center gap-1.5 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-medium tracking-wide text-green-600 uppercase dark:text-green-400",
                  children: [
                    f.jsx("span", {
                      className:
                        "h-1.5 w-1.5 animate-pulse rounded-full bg-green-500",
                    }),
                    "求职中 · 随时到岗",
                  ],
                }),
              f.jsx("h1", {
                className:
                  "text-foreground font-serif text-6xl leading-none font-light tracking-tight md:text-8xl",
                children: k.name
                  .split(" ")
                  .map((p, v) =>
                    f.jsxs(
                      "span",
                      {
                        className: v === 1 ? "italic" : "",
                        children: [v > 0 ? " " : "", p],
                      },
                      v,
                    ),
                  ),
              }),
              f.jsx("p", {
                className:
                  "text-primary mt-1 text-sm font-medium tracking-[0.22em] uppercase",
                children: k.title,
              }),
              k.tagline && f.jsx(Jx, { text: k.tagline }),
              (k.location || k.phone) &&
                f.jsxs("p", {
                  className:
                    "text-muted-foreground mt-1 flex flex-wrap items-center justify-center gap-3 text-xs font-medium tracking-wider uppercase",
                  children: [
                    k.location &&
                      f.jsxs("span", {
                        className: "flex items-center gap-1.5",
                        children: [f.jsx(gb, { size: 12 }), k.location],
                      }),
                    k.location &&
                      k.phone &&
                      f.jsx("span", { className: "opacity-30", children: "·" }),
                    k.phone &&
                      f.jsxs("a", {
                        href: `tel:${k.phone.replace(/\s/g, "")}`,
                        className:
                          "hover:text-foreground flex items-center gap-1.5 transition-colors",
                        children: [f.jsx(xg, { size: 12 }), k.phone],
                      }),
                  ],
                }),
            ],
          }),
          f.jsxs($.div, {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.2 },
            className: "flex flex-wrap items-center justify-center gap-3",
            children: [
              k.social.github &&
                f.jsx("a", {
                  href: k.social.github,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "border-border text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/5 rounded-xl border p-2.5 transition-all",
                  "aria-label": "GitHub",
                  "data-testid": "link-github",
                  children: f.jsx(cc, { size: 18 }),
                }),
              k.social.linkedin &&
                f.jsx("a", {
                  href: k.social.linkedin,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "border-border text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/5 rounded-xl border p-2.5 transition-all",
                  "aria-label": "LinkedIn",
                  "data-testid": "link-linkedin",
                  children: f.jsx(sc, { size: 18 }),
                }),
              k.social.twitter &&
                f.jsx("a", {
                  href: k.social.twitter,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "border-border text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/5 rounded-xl border p-2.5 transition-all",
                  "aria-label": "Twitter",
                  "data-testid": "link-twitter",
                  children: f.jsx(uc, { size: 18 }),
                }),
            ],
          }),
          f.jsxs($.div, {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.3 },
            className: "flex flex-wrap items-center justify-center gap-3",
            children: [
              f.jsx("a", {
                href: "#experience",
                className:
                  "bg-primary text-primary-foreground rounded-xl px-7 py-3 text-sm font-medium tracking-wide transition-opacity hover:opacity-90",
                "data-testid": "button-view-work",
                children: "查看我的经历",
              }),
              f.jsxs("a", {
                href: "#/resume",
                className:
                  "border-primary/40 text-primary hover:bg-primary/5 flex items-center gap-2 rounded-xl border px-7 py-3 text-sm font-medium tracking-wide transition-all",
                "data-testid": "button-view-resume",
                children: [f.jsx(ia, { size: 14 }), "查看简历"],
              }),
            ],
          }),
        ],
      }),
      f.jsx($.button, {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        style: { opacity: h },
        transition: { duration: 0.5, delay: 1.2 },
        onClick: () =>
          document
            .querySelector("#about")
            ?.scrollIntoView({ behavior: "smooth" }),
        className:
          "text-muted-foreground hover:text-foreground absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce rounded-full p-2 transition-colors",
        "aria-label": "Scroll down",
        "data-testid": "button-scroll-down",
        children: f.jsx(pb, { size: 18 }),
      }),
    ],
  });
}
const Fx = [0.22, 1, 0.36, 1];
function Tt(l = 40, u = 0.75, s = 0.12) {
  return {
    hidden: { opacity: 0, y: l },
    visible: (o = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: u, delay: o * s, ease: Fx },
    }),
  };
}
const la = Tt(48, 0.8, 0.12),
  Wx = {
    native: "bg-primary text-primary-foreground border-primary",
    fluent: "bg-primary/15 text-primary border-primary/30",
    conversational: "bg-secondary text-foreground border-border",
    professional: "bg-secondary text-foreground border-border",
    basic: "bg-secondary/60 text-muted-foreground border-border",
    elementary: "bg-secondary/60 text-muted-foreground border-border",
  };
function Ix(l) {
  return Wx[l.toLowerCase()] ?? "bg-secondary text-foreground border-border";
}
function Px(l) {
  return 1 - Math.pow(1 - l, 4);
}
function e2({ stat: l, delay: u }) {
  const s = x.useRef(null),
    [o, c] = x.useState(typeof l.value == "number" ? 0 : l.value),
    [d, h] = x.useState(!1);
  return (
    x.useEffect(() => {
      if (d || typeof l.value != "number") return;
      const p = s.current;
      if (!p) return;
      const v = new IntersectionObserver(
        ([w]) => {
          if (!w.isIntersecting || d) return;
          h(!0), v.disconnect();
          const S = l.value,
            T = 1600;
          let M = null;
          const A = (H) => {
            M === null && (M = H);
            const z = H - M,
              O = Math.min(z / T, 1);
            c(Math.round(Px(O) * S)), O < 1 && requestAnimationFrame(A);
          };
          requestAnimationFrame(A);
        },
        { threshold: 0.4 },
      );
      return v.observe(p), () => v.disconnect();
    }, [d, l.value]),
    f.jsxs($.div, {
      ref: s,
      variants: la,
      custom: u,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: !0, margin: "-60px" },
      className: "border-border bg-card card-hover rounded-2xl border p-6",
      "data-testid": `stat-${l.label.toLowerCase().replace(/\s+/g, "-")}`,
      children: [
        f.jsxs("p", {
          className: "gradient-text mb-2 font-serif text-4xl font-light",
          children: [l.prefix ?? "", o, l.suffix ?? ""],
        }),
        f.jsx("p", {
          className: "text-muted-foreground text-xs tracking-wide",
          children: l.label,
        }),
      ],
    })
  );
}
function t2() {
  const l = x.useRef(null),
    u = k.languages && k.languages.length > 0,
    s = [
      { label: "工作年限", value: 5, prefix: "", suffix: "+" },
      { label: "内容产出", value: 20, prefix: "", suffix: "+" },
      {
        label: "技能项",
        value: k.skills.reduce((c, d) => c + d.items.length, 0),
        prefix: "",
        suffix: "+",
      },
      { label: "累计阅读", value: "∞", prefix: "", suffix: "" },
    ],
    o = k.stats.length > 0 ? k.stats.slice(0, 4) : s;
  return f.jsx("section", {
    id: "about",
    ref: l,
    className: "relative overflow-hidden px-6 py-32",
    children: f.jsx("div", {
      className: "mx-auto max-w-6xl",
      children: f.jsxs("div", {
        className: "grid items-center gap-16 md:grid-cols-2",
        children: [
          f.jsxs("div", {
            children: [
              f.jsx($.p, {
                variants: la,
                custom: 0,
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: !0, margin: "-80px" },
                className:
                  "text-primary mb-4 font-mono text-xs font-medium tracking-widest uppercase",
                children: "关于我",
              }),
              f.jsxs($.h2, {
                variants: la,
                custom: 1,
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: !0, margin: "-80px" },
                className:
                  "section-heading text-foreground mb-6 text-4xl leading-tight md:text-5xl",
                children: [
                  "用内容打动人，",
                  f.jsx("br", {}),
                  f.jsx("em", {
                    className: "font-light not-italic",
                    children: "用数据证明价值。",
                  }),
                ],
              }),
              f.jsx($.div, {
                variants: la,
                custom: 2,
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: !0, margin: "-80px" },
                className: "mb-8 h-px w-12",
                style: {
                  background:
                    "linear-gradient(90deg, hsl(var(--primary)), transparent)",
                },
              }),
              f.jsx($.p, {
                variants: la,
                custom: 3,
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: !0, margin: "-80px" },
                className:
                  "text-muted-foreground text-base leading-relaxed font-light whitespace-pre-line",
                children: k.about,
              }),
              k.email &&
                f.jsxs($.a, {
                  variants: la,
                  custom: 4,
                  initial: "hidden",
                  whileInView: "visible",
                  viewport: { once: !0, margin: "-80px" },
                  href: `mailto:${k.email}`,
                  className:
                    "text-primary mt-6 inline-flex items-center gap-2 text-sm font-medium hover:underline",
                  "data-testid": "link-email",
                  children: [f.jsx(ci, { size: 14 }), k.email],
                }),
              u &&
                f.jsxs($.div, {
                  variants: la,
                  custom: 5,
                  initial: "hidden",
                  whileInView: "visible",
                  viewport: { once: !0, margin: "-80px" },
                  className: "border-border mt-8 border-t pt-6",
                  children: [
                    f.jsxs("div", {
                      className:
                        "text-muted-foreground mb-3 flex items-center gap-1.5 font-mono text-xs font-medium tracking-widest uppercase",
                      children: [f.jsx(vb, { size: 12 }), "Languages"],
                    }),
                    f.jsx("div", {
                      className: "flex flex-wrap gap-2",
                      children: k.languages.map((c) =>
                        f.jsxs(
                          "span",
                          {
                            className: `inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium ${Ix(c.level)}`,
                            children: [
                              c.name,
                              f.jsx("span", {
                                className: "font-normal opacity-60",
                                children: "·",
                              }),
                              f.jsx("span", {
                                className: "font-normal opacity-75",
                                children: c.level,
                              }),
                            ],
                          },
                          c.name,
                        ),
                      ),
                    }),
                  ],
                }),
            ],
          }),
          f.jsx("div", {
            className: "grid grid-cols-2 gap-4",
            children: o.map((c, d) =>
              f.jsx(e2, { stat: c, delay: d + 1 }, c.label),
            ),
          }),
        ],
      }),
    }),
  });
}
const Ys = Tt(40, 0.7, 0.1);
function n2({ value: l, prefix: u = "", suffix: s = "" }) {
  const o = ab(0),
    c = al(o, (p) => Math.round(p).toLocaleString()),
    d = x.useRef(null),
    h = mg(d, { once: !0, margin: "-80px" });
  return (
    x.useEffect(
      () => (h ? lb(o, l, { duration: 2, ease: "easeOut" }).stop : void 0),
      [h, l, o],
    ),
    f.jsxs("span", {
      ref: d,
      className: "inline-flex items-baseline",
      children: [
        u &&
          f.jsx("span", {
            className: "text-primary mr-0.5 text-2xl font-bold md:text-3xl",
            children: u,
          }),
        f.jsx($.span, { children: c }),
        s &&
          f.jsx("span", {
            className: "text-primary ml-0.5 text-2xl font-bold md:text-3xl",
            children: s,
          }),
      ],
    })
  );
}
function a2() {
  const l = k.stats ?? [];
  return l.length
    ? f.jsx("section", {
        id: "stats",
        className: "bg-secondary/20 px-6 py-24",
        children: f.jsxs("div", {
          className: "mx-auto max-w-6xl",
          children: [
            f.jsx($.p, {
              variants: Ys,
              custom: 0,
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: !0, margin: "-80px" },
              className:
                "text-primary mb-4 font-mono text-xs font-medium tracking-widest uppercase",
              children: "By the numbers",
            }),
            f.jsx($.h2, {
              variants: Ys,
              custom: 1,
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: !0, margin: "-80px" },
              className:
                "section-heading text-foreground mb-14 text-4xl md:text-5xl",
              children: "At a Glance",
            }),
            f.jsx("div", {
              className: `divide-border border-border grid gap-0 divide-y overflow-hidden rounded-2xl border md:divide-x md:divide-y-0 ${l.length <= 2 ? "md:grid-cols-2" : l.length === 3 ? "md:grid-cols-3" : "md:grid-cols-4"}`,
              children: l.map((u, s) =>
                f.jsxs(
                  $.div,
                  {
                    variants: Ys,
                    custom: s + 2,
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: { once: !0, margin: "-60px" },
                    className:
                      "group bg-background hover:bg-primary/5 flex flex-col items-center justify-center px-8 py-10 text-center transition-colors duration-300",
                    children: [
                      f.jsx("div", {
                        className:
                          "text-foreground group-hover:text-primary mb-2 text-4xl leading-none font-bold tabular-nums transition-colors duration-300 md:text-5xl",
                        children: f.jsx(n2, {
                          value: u.value,
                          prefix: u.prefix ?? "",
                          suffix: u.suffix ?? "",
                        }),
                      }),
                      f.jsx("p", {
                        className:
                          "text-muted-foreground mt-1 text-xs font-medium tracking-widest uppercase",
                        children: u.label,
                      }),
                    ],
                  },
                  s,
                ),
              ),
            }),
          ],
        }),
      })
    : null;
}
function l2(l) {
  const u = l.match(/github\.com\/([^/?#\s]+)/);
  return u ? u[1] : null;
}
function i2(l) {
  const [u, s] = x.useState(null),
    [o, c] = x.useState(!1),
    [d, h] = x.useState(null);
  return (
    x.useEffect(() => {
      const p = l2(l);
      if (!p || p === "yourusername") return;
      let v = !1;
      c(!0), h(null);
      async function w() {
        const S = { Accept: "application/vnd.github+json" },
          [T, M] = await Promise.all([
            fetch(`https://api.github.com/users/${p}`, { headers: S }),
            fetch(
              `https://api.github.com/users/${p}/repos?per_page=100&sort=pushed`,
              { headers: S },
            ),
          ]);
        if (T.status === 403 || M.status === 403)
          throw new Error("rate-limited");
        if (!T.ok)
          throw new Error(T.status === 404 ? "not-found" : "fetch-error");
        const A = await T.json(),
          z = (M.ok ? await M.json() : []).filter((V) => !V.fork),
          O = z.reduce((V, W) => V + W.stargazers_count, 0),
          q = {};
        for (const V of z)
          V.language && (q[V.language] = (q[V.language] ?? 0) + 1);
        const Q = Object.values(q).reduce((V, W) => V + W, 0),
          Y = Object.entries(q)
            .sort(([, V], [, W]) => W - V)
            .slice(0, 5)
            .map(([V, W]) => ({
              name: V,
              count: W,
              percentage: Q ? Math.round((W / Q) * 100) : 0,
            }));
        v ||
          s({
            followers: A.followers,
            publicRepos: A.public_repos,
            totalStars: O,
            topLanguages: Y,
            profileUrl: `https://github.com/${p}`,
          });
      }
      return (
        w()
          .catch((S) => {
            v || h(S.message ?? "fetch-error");
          })
          .finally(() => {
            v || c(!1);
          }),
        () => {
          v = !0;
        }
      );
    }, [l]),
    { data: u, loading: o, error: d }
  );
}
const ri = Tt(40, 0.7, 0.1),
  r2 = {
    TypeScript: "#3178c6",
    JavaScript: "#f1e05a",
    Python: "#3572A5",
    Rust: "#dea584",
    Go: "#00ADD8",
    Java: "#b07219",
    "C++": "#f34b7d",
    C: "#555555",
    Ruby: "#701516",
    Swift: "#F05138",
    Kotlin: "#A97BFF",
    PHP: "#4F5D95",
    "C#": "#178600",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Shell: "#89e051",
    Dart: "#00B4AB",
    Scala: "#c22d40",
    Elixir: "#6e4a7e",
    Haskell: "#5e5086",
    Lua: "#000080",
    R: "#198CE7",
    Vue: "#41B883",
    Svelte: "#ff3e00",
  };
function ug(l) {
  return r2[l] ?? "hsl(var(--primary))";
}
function o2({ value: l }) {
  const u = x.useRef(null),
    s = mg(u, { once: !0, margin: "-60px" }),
    [o, c] = x.useState(0);
  return (
    x.useEffect(() => {
      if (!s) return;
      const d = 1600,
        h = performance.now();
      function p(v) {
        const w = Math.min((v - h) / d, 1),
          S = 1 - Math.pow(1 - w, 4);
        c(Math.round(S * l)), w < 1 && requestAnimationFrame(p);
      }
      requestAnimationFrame(p);
    }, [s, l]),
    f.jsx("span", { ref: u, children: o.toLocaleString() })
  );
}
function oi({ className: l }) {
  return f.jsx("div", {
    className: `bg-muted/50 animate-pulse rounded ${l ?? ""}`,
  });
}
function u2() {
  const l = k.social?.github ?? "",
    { data: u, loading: s, error: o } = i2(l);
  if (!l || l.includes("yourusername") || o === "not-found") return null;
  const c = u
    ? [
        { icon: bb, label: "Stars earned", value: u.totalStars },
        { icon: yb, label: "Followers", value: u.followers },
        { icon: Sg, label: "Public repos", value: u.publicRepos },
      ]
    : [];
  return f.jsx("section", {
    id: "github",
    className: "px-6 py-24",
    children: f.jsxs("div", {
      className: "mx-auto max-w-6xl",
      children: [
        f.jsx($.p, {
          variants: ri,
          custom: 0,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: !0, margin: "-80px" },
          className:
            "text-primary mb-4 font-mono text-xs font-medium tracking-widest uppercase",
          children: "Open source",
        }),
        f.jsxs("div", {
          className: "mb-14 flex flex-wrap items-start justify-between gap-4",
          children: [
            f.jsx($.h2, {
              variants: ri,
              custom: 1,
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: !0, margin: "-80px" },
              className: "section-heading text-foreground text-4xl md:text-5xl",
              children: "GitHub Activity",
            }),
            u &&
              f.jsxs($.a, {
                variants: ri,
                custom: 2,
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: !0, margin: "-80px" },
                href: u.profileUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                className:
                  "text-muted-foreground hover:text-primary inline-flex items-center gap-2 text-sm font-medium transition-colors",
                children: [
                  f.jsx(cc, { size: 16 }),
                  "View profile",
                  f.jsx(fi, { size: 12 }),
                ],
              }),
          ],
        }),
        f.jsx("div", {
          className: "mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3",
          children: s
            ? Array.from({ length: 3 }).map((d, h) =>
                f.jsxs(
                  "div",
                  {
                    className:
                      "border-border bg-background rounded-2xl border p-8",
                    children: [
                      f.jsx(oi, { className: "mb-3 h-10 w-24" }),
                      f.jsx(oi, { className: "h-4 w-28" }),
                    ],
                  },
                  h,
                ),
              )
            : c.map(({ icon: d, label: h, value: p }, v) =>
                f.jsxs(
                  $.div,
                  {
                    variants: ri,
                    custom: v + 3,
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: { once: !0, margin: "-60px" },
                    className:
                      "group border-border bg-background hover:bg-primary/5 hover:border-primary/30 rounded-2xl border p-8 transition-colors duration-300",
                    children: [
                      f.jsx(d, {
                        size: 18,
                        className:
                          "text-primary mb-4 transition-transform duration-300 group-hover:scale-110",
                      }),
                      f.jsx("div", {
                        className:
                          "text-foreground mb-2 text-4xl leading-none font-bold tabular-nums md:text-5xl",
                        children: f.jsx(o2, { value: p }),
                      }),
                      f.jsx("p", {
                        className:
                          "text-muted-foreground text-xs font-medium tracking-widest uppercase",
                        children: h,
                      }),
                    ],
                  },
                  h,
                ),
              ),
        }),
        (s || (u && u.topLanguages.length > 0)) &&
          f.jsxs($.div, {
            variants: ri,
            custom: 6,
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: !0, margin: "-60px" },
            className: "border-border bg-background rounded-2xl border p-8",
            children: [
              f.jsx("p", {
                className:
                  "text-muted-foreground mb-6 font-mono text-xs font-medium tracking-widest uppercase",
                children: "Top languages",
              }),
              s
                ? f.jsx("div", {
                    className: "space-y-4",
                    children: Array.from({ length: 4 }).map((d, h) =>
                      f.jsxs(
                        "div",
                        {
                          className: "flex items-center gap-4",
                          children: [
                            f.jsx(oi, { className: "h-4 w-24" }),
                            f.jsx(oi, { className: "h-2 flex-1 rounded-full" }),
                            f.jsx(oi, { className: "h-4 w-8" }),
                          ],
                        },
                        h,
                      ),
                    ),
                  })
                : f.jsx("div", {
                    className: "space-y-4",
                    children: u.topLanguages.map(
                      ({ name: d, percentage: h }, p) =>
                        f.jsxs(
                          $.div,
                          {
                            initial: { opacity: 0, x: -12 },
                            whileInView: { opacity: 1, x: 0 },
                            viewport: { once: !0 },
                            transition: { delay: p * 0.07, duration: 0.4 },
                            className: "flex items-center gap-4",
                            children: [
                              f.jsx("span", {
                                className: "min-w-[7rem] text-sm font-medium",
                                style: { color: ug(d) },
                                children: d,
                              }),
                              f.jsx("div", {
                                className:
                                  "bg-secondary h-1.5 flex-1 overflow-hidden rounded-full",
                                children: f.jsx($.div, {
                                  initial: { width: 0 },
                                  whileInView: { width: `${h}%` },
                                  viewport: { once: !0 },
                                  transition: {
                                    delay: p * 0.07 + 0.15,
                                    duration: 0.7,
                                    ease: "easeOut",
                                  },
                                  className: "h-full rounded-full",
                                  style: { backgroundColor: ug(d) },
                                }),
                              }),
                              f.jsxs("span", {
                                className:
                                  "text-muted-foreground w-8 text-right text-xs tabular-nums",
                                children: [h, "%"],
                              }),
                            ],
                          },
                          d,
                        ),
                    ),
                  }),
            ],
          }),
        o === "rate-limited" &&
          f.jsx("p", {
            className: "text-muted-foreground mt-6 text-center text-sm",
            children:
              "GitHub API rate limit reached — stats will appear on next load.",
          }),
      ],
    }),
  });
}
const Xs = Tt(40, 0.7, 0.1);
function s2() {
  return f.jsx("section", {
    id: "skills",
    className: "bg-secondary/20 px-6 py-32",
    children: f.jsxs("div", {
      className: "mx-auto max-w-6xl",
      children: [
        f.jsx($.p, {
          variants: Xs,
          custom: 0,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: !0, margin: "-80px" },
          className:
            "text-primary mb-4 font-mono text-xs font-medium tracking-widest uppercase",
          children: "能力栈",
        }),
        f.jsx($.h2, {
          variants: Xs,
          custom: 1,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: !0, margin: "-80px" },
          className:
            "section-heading text-foreground mb-14 text-4xl md:text-5xl",
          children: "专业技能",
        }),
        f.jsx("div", {
          className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
          children: k.skills.map((l, u) =>
            f.jsxs(
              $.div,
              {
                variants: Xs,
                custom: u + 2,
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: !0, margin: "-60px" },
                className: "border-border bg-card rounded-2xl border p-6",
                "data-testid": `skills-group-${l.category.toLowerCase()}`,
                children: [
                  f.jsx("p", {
                    className:
                      "text-primary mb-4 font-mono text-xs font-medium tracking-widest uppercase",
                    children: l.category,
                  }),
                  f.jsx("div", {
                    className: "flex flex-wrap gap-2",
                    children: l.items.map((s, o) =>
                      f.jsx(
                        $.span,
                        {
                          initial: { opacity: 0, scale: 0.85 },
                          whileInView: { opacity: 1, scale: 1 },
                          viewport: { once: !0 },
                          transition: {
                            duration: 0.35,
                            delay: u * 0.06 + o * 0.04,
                            ease: "easeOut",
                          },
                          className:
                            "bg-secondary text-secondary-foreground border-border hover:border-primary/40 hover:bg-primary/5 hover:text-primary cursor-default rounded-lg border px-3 py-1.5 text-xs font-medium transition-all",
                          "data-testid": `skill-${s.toLowerCase().replace(/\s+/g, "-")}`,
                          children: s,
                        },
                        s,
                      ),
                    ),
                  }),
                ],
              },
              l.category,
            ),
          ),
        }),
      ],
    }),
  });
}
const Qs = Tt(40, 0.7, 0.1),
  c2 = { native: 4, fluent: 3, conversational: 2, basic: 1 },
  f2 = {
    native: "Native",
    fluent: "Fluent",
    conversational: "Conversational",
    basic: "Basic",
  };
function d2({ level: l }) {
  const u = l.toLowerCase(),
    s = c2[u] ?? 1;
  return f.jsx("div", {
    className: "flex items-center gap-1.5",
    "aria-label": `${l} proficiency`,
    children: Array.from({ length: 4 }).map((o, c) =>
      f.jsx(
        "span",
        {
          className: `h-2 w-2 rounded-full transition-colors ${c < s ? "bg-primary" : "bg-border"}`,
        },
        c,
      ),
    ),
  });
}
function m2() {
  const l = k.languages ?? [];
  return l.length === 0
    ? null
    : f.jsx("section", {
        id: "languages",
        className: "px-6 py-24",
        children: f.jsxs("div", {
          className: "mx-auto max-w-6xl",
          children: [
            f.jsx($.p, {
              variants: Qs,
              custom: 0,
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: !0, margin: "-80px" },
              className:
                "text-primary mb-4 font-mono text-xs font-medium tracking-widest uppercase",
              children: "Communication",
            }),
            f.jsx($.h2, {
              variants: Qs,
              custom: 1,
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: !0, margin: "-80px" },
              className:
                "section-heading text-foreground mb-14 text-4xl md:text-5xl",
              children: "Languages",
            }),
            f.jsx("div", {
              className: "flex flex-wrap gap-4",
              children: l.map((u, s) => {
                const o = u.level.toLowerCase();
                return f.jsxs(
                  $.div,
                  {
                    variants: Qs,
                    custom: s + 2,
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: { once: !0, margin: "-60px" },
                    className:
                      "border-border bg-card hover:border-primary/30 hover:bg-primary/5 group flex items-center gap-5 rounded-2xl border px-6 py-5 transition-all",
                    "data-testid": `language-${u.name.toLowerCase()}`,
                    children: [
                      f.jsxs("div", {
                        children: [
                          f.jsx("p", {
                            className:
                              "text-foreground mb-1 text-sm font-semibold",
                            children: u.name,
                          }),
                          f.jsx("p", {
                            className:
                              "text-muted-foreground text-xs tracking-wide",
                            children: f2[o] ?? u.level,
                          }),
                        ],
                      }),
                      f.jsx(d2, { level: u.level }),
                    ],
                  },
                  u.name,
                );
              }),
            }),
          ],
        }),
      });
}
const Zs = Tt(40, 0.75, 0.13);
function h2() {
  return f.jsx("section", {
    id: "experience",
    className: "px-6 py-32",
    children: f.jsxs("div", {
      className: "mx-auto max-w-6xl",
      children: [
        f.jsx($.p, {
          variants: Zs,
          custom: 0,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: !0, margin: "-80px" },
          className:
            "text-primary mb-4 font-mono text-xs font-medium tracking-widest uppercase",
          children: "实习 · 校园",
        }),
        f.jsx($.h2, {
          variants: Zs,
          custom: 1,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: !0, margin: "-80px" },
          className:
            "section-heading text-foreground mb-14 text-4xl md:text-5xl",
          children: "实习与校园经历",
        }),
        f.jsxs("div", {
          className: "relative",
          children: [
            f.jsx("div", {
              className:
                "from-primary/40 via-border absolute top-2 bottom-2 left-0 hidden w-px bg-gradient-to-b to-transparent sm:block md:left-8",
            }),
            f.jsx("div", {
              className: "flex flex-col gap-10",
              children: k.experience.map((l, u) =>
                f.jsxs(
                  $.div,
                  {
                    variants: Zs,
                    custom: u + 2,
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: { once: !0, margin: "-60px" },
                    className: "relative sm:pl-24",
                    "data-testid": `experience-${u}`,
                    children: [
                      f.jsx("div", {
                        className:
                          "bg-background border-primary/50 absolute top-6 left-4 hidden h-8 w-8 items-center justify-center rounded-full border-2 sm:flex",
                        children: f.jsx("div", {
                          className: "bg-primary h-2 w-2 rounded-full",
                        }),
                      }),
                      f.jsxs("div", {
                        className:
                          "border-border bg-card card-hover rounded-2xl border p-7",
                        children: [
                          f.jsxs("div", {
                            className:
                              "mb-3 flex flex-wrap items-start justify-between gap-2",
                            children: [
                              f.jsxs("div", {
                                children: [
                                  f.jsx("h3", {
                                    className:
                                      "text-foreground font-serif text-2xl font-light",
                                    children: l.role,
                                  }),
                                  f.jsx("p", {
                                    className:
                                      "text-primary mt-0.5 text-sm font-medium tracking-wide",
                                    children: l.company,
                                  }),
                                ],
                              }),
                              f.jsx("span", {
                                className:
                                  "text-muted-foreground bg-secondary border-border rounded-full border px-3 py-1 font-mono text-xs whitespace-nowrap",
                                children: l.period,
                              }),
                            ],
                          }),
                          f.jsx("p", {
                            className:
                              "text-muted-foreground mb-4 text-sm leading-relaxed font-light",
                            children: l.description,
                          }),
                          l.highlights &&
                            l.highlights.length > 0 &&
                            f.jsx("div", {
                              className: "flex flex-wrap gap-2",
                              children: l.highlights.map((s) =>
                                f.jsx(
                                  "span",
                                  {
                                    className:
                                      "bg-primary/10 text-primary border-primary/20 rounded-md border px-2.5 py-1 text-xs font-medium",
                                    children: s,
                                  },
                                  s,
                                ),
                              ),
                            }),
                        ],
                      }),
                    ],
                  },
                  `${l.company}-${u}`,
                ),
              ),
            }),
          ],
        }),
      ],
    }),
  });
}
const ui = Tt(44, 0.75, 0.12);
function g2() {
  const l = k.projects.filter((s) => s.featured),
    u = k.projects.filter((s) => !s.featured);
  return f.jsx("section", {
    id: "projects",
    className: "bg-secondary/20 px-6 py-32",
    children: f.jsxs("div", {
      className: "mx-auto max-w-6xl",
      children: [
        f.jsx($.p, {
          variants: ui,
          custom: 0,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: !0, margin: "-80px" },
          className:
            "text-primary mb-4 font-mono text-xs font-medium tracking-widest uppercase",
          children: "Work",
        }),
        f.jsx($.h2, {
          variants: ui,
          custom: 1,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: !0, margin: "-80px" },
          className:
            "section-heading text-foreground mb-14 text-4xl md:text-5xl",
          children: "Featured Projects",
        }),
        f.jsx("div", {
          className: "mb-14 grid gap-6 md:grid-cols-2",
          children: l.map((s, o) =>
            f.jsxs(
              $.div,
              {
                variants: ui,
                custom: o + 2,
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: !0, margin: "-60px" },
                className:
                  "group border-border bg-card card-hover flex flex-col gap-4 rounded-2xl border p-7",
                "data-testid": `project-featured-${o}`,
                children: [
                  f.jsxs("div", {
                    className: "flex items-start justify-between gap-4",
                    children: [
                      f.jsx("h3", {
                        className:
                          "text-foreground group-hover:text-primary font-serif text-2xl font-light transition-colors",
                        children: s.name,
                      }),
                      f.jsxs("div", {
                        className: "flex shrink-0 gap-2",
                        children: [
                          s.repoUrl &&
                            f.jsx("a", {
                              href: s.repoUrl,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className:
                                "text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg p-2 transition-all",
                              "aria-label": "GitHub repo",
                              "data-testid": `link-repo-${s.name.toLowerCase()}`,
                              children: f.jsx(ih, { size: 16 }),
                            }),
                          s.liveUrl &&
                            f.jsx("a", {
                              href: s.liveUrl,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className:
                                "text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg p-2 transition-all",
                              "aria-label": "Live project",
                              "data-testid": `link-live-${s.name.toLowerCase()}`,
                              children: f.jsx(fi, { size: 16 }),
                            }),
                        ],
                      }),
                    ],
                  }),
                  f.jsx("p", {
                    className:
                      "text-muted-foreground flex-1 text-sm leading-relaxed font-light",
                    children: s.description,
                  }),
                  f.jsx("div", {
                    className: "flex flex-wrap gap-2",
                    children: s.tags.map((c) =>
                      f.jsx(
                        "span",
                        {
                          className:
                            "bg-secondary text-secondary-foreground border-border rounded-md border px-2.5 py-1 font-mono text-xs",
                          children: c,
                        },
                        c,
                      ),
                    ),
                  }),
                ],
              },
              s.name,
            ),
          ),
        }),
        u.length > 0 &&
          f.jsxs(f.Fragment, {
            children: [
              f.jsx($.h3, {
                variants: ui,
                custom: l.length + 2,
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: !0, margin: "-60px" },
                className:
                  "text-muted-foreground mb-6 font-mono text-xs font-medium tracking-widest uppercase",
                children: "Other Projects",
              }),
              f.jsx("div", {
                className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
                children: u.map((s, o) =>
                  f.jsxs(
                    $.div,
                    {
                      variants: ui,
                      custom: o + l.length + 3,
                      initial: "hidden",
                      whileInView: "visible",
                      viewport: { once: !0, margin: "-40px" },
                      className:
                        "group border-border bg-card card-hover flex flex-col gap-3 rounded-xl border p-5",
                      "data-testid": `project-other-${o}`,
                      children: [
                        f.jsxs("div", {
                          className: "flex items-center justify-between",
                          children: [
                            f.jsx("h4", {
                              className:
                                "text-foreground group-hover:text-primary font-serif text-lg font-light transition-colors",
                              children: s.name,
                            }),
                            f.jsxs("div", {
                              className: "flex gap-1",
                              children: [
                                s.repoUrl &&
                                  f.jsx("a", {
                                    href: s.repoUrl,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className:
                                      "text-muted-foreground hover:text-foreground rounded-md p-1.5 transition-colors",
                                    "aria-label": "GitHub",
                                    children: f.jsx(ih, { size: 14 }),
                                  }),
                                s.liveUrl &&
                                  f.jsx("a", {
                                    href: s.liveUrl,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className:
                                      "text-muted-foreground hover:text-foreground rounded-md p-1.5 transition-colors",
                                    "aria-label": "Live",
                                    children: f.jsx(fi, { size: 14 }),
                                  }),
                              ],
                            }),
                          ],
                        }),
                        f.jsx("p", {
                          className:
                            "text-muted-foreground flex-1 text-xs leading-relaxed font-light",
                          children: s.description,
                        }),
                        f.jsx("div", {
                          className: "flex flex-wrap gap-1.5",
                          children: s.tags
                            .slice(0, 3)
                            .map((c) =>
                              f.jsx(
                                "span",
                                {
                                  className:
                                    "bg-secondary text-secondary-foreground rounded px-2 py-0.5 font-mono text-xs",
                                  children: c,
                                },
                                c,
                              ),
                            ),
                        }),
                      ],
                    },
                    s.name,
                  ),
                ),
              }),
            ],
          }),
      ],
    }),
  });
}
const Ks = Tt(36, 0.7, 0.12);
function p2() {
  return !k.education || k.education.length === 0
    ? null
    : f.jsx("section", {
        id: "education",
        className: "px-6 py-24",
        children: f.jsxs("div", {
          className: "mx-auto max-w-6xl",
          children: [
            f.jsx($.p, {
              variants: Ks,
              custom: 0,
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: !0, margin: "-80px" },
              className:
                "text-primary mb-4 font-mono text-xs font-medium tracking-widest uppercase",
              children: "学历",
            }),
            f.jsx($.h2, {
              variants: Ks,
              custom: 1,
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: !0, margin: "-80px" },
              className:
                "section-heading text-foreground mb-10 text-4xl md:text-5xl",
              children: "教育背景",
            }),
            f.jsx("div", {
              className: "flex flex-col gap-4",
              children: k.education.map((l, u) =>
                f.jsxs(
                  $.div,
                  {
                    variants: Ks,
                    custom: u + 2,
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: { once: !0, margin: "-60px" },
                    className:
                      "border-border bg-card card-hover flex items-center gap-6 rounded-2xl border p-6",
                    "data-testid": `education-${u}`,
                    children: [
                      f.jsx("div", {
                        className:
                          "bg-primary/10 text-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-xl",
                        children: f.jsx(xb, { size: 20 }),
                      }),
                      f.jsxs("div", {
                        className: "min-w-0 flex-1",
                        children: [
                          f.jsx("h3", {
                            className:
                              "text-foreground font-serif text-xl font-light",
                            children: l.degree,
                          }),
                          f.jsx("p", {
                            className:
                              "text-muted-foreground mt-0.5 text-sm tracking-wide",
                            children: l.institution,
                          }),
                        ],
                      }),
                      f.jsx("span", {
                        className:
                          "text-muted-foreground bg-secondary border-border shrink-0 rounded-full border px-3 py-1 font-mono text-xs whitespace-nowrap",
                        children: l.period,
                      }),
                    ],
                  },
                  `${l.institution}-${u}`,
                ),
              ),
            }),
          ],
        }),
      });
}
const Js = Tt(36, 0.7, 0.1);
function v2() {
  return !k.certifications || k.certifications.length === 0
    ? null
    : f.jsx("section", {
        id: "certifications",
        className: "px-6 py-24",
        children: f.jsxs("div", {
          className: "mx-auto max-w-6xl",
          children: [
            f.jsx($.p, {
              variants: Js,
              custom: 0,
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: !0, margin: "-80px" },
              className:
                "text-primary mb-4 font-mono text-xs font-medium tracking-widest uppercase",
              children: "荣誉",
            }),
            f.jsx($.h2, {
              variants: Js,
              custom: 1,
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: !0, margin: "-80px" },
              className:
                "section-heading text-foreground mb-10 text-4xl md:text-5xl",
              children: "荣誉奖项",
            }),
            f.jsx("div", {
              className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
              children: k.certifications.map((l, u) =>
                f.jsxs(
                  $.div,
                  {
                    variants: Js,
                    custom: u + 2,
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: { once: !0, margin: "-60px" },
                    "data-testid": `certification-${u}`,
                    className:
                      "group border-border bg-card card-hover relative flex flex-col gap-4 rounded-2xl border p-6",
                    children: [
                      f.jsxs("div", {
                        className: "flex items-start gap-4",
                        children: [
                          l.badgeUrl
                            ? f.jsx("img", {
                                src: l.badgeUrl,
                                alt: `${l.title} badge`,
                                className:
                                  "bg-secondary h-14 w-14 shrink-0 rounded-xl object-contain p-1",
                                onError: (s) => {
                                  s.currentTarget.style.display = "none";
                                  const o = s.currentTarget.nextElementSibling;
                                  o && (o.style.display = "flex");
                                },
                              })
                            : null,
                          f.jsx("div", {
                            className: `bg-primary/10 text-primary h-14 w-14 shrink-0 items-center justify-center rounded-xl ${l.badgeUrl ? "hidden" : "flex"}`,
                            children: f.jsx(Sb, { size: 24 }),
                          }),
                          f.jsxs("div", {
                            className: "min-w-0 flex-1",
                            children: [
                              f.jsx("h3", {
                                className:
                                  "text-foreground text-sm leading-snug font-medium",
                                children: l.title,
                              }),
                              f.jsx("p", {
                                className: "text-muted-foreground mt-1 text-xs",
                                children: l.issuer,
                              }),
                            ],
                          }),
                        ],
                      }),
                      l.tags &&
                        l.tags.length > 0 &&
                        f.jsx("div", {
                          className: "flex flex-wrap gap-1.5",
                          children: l.tags.map((s) =>
                            f.jsx(
                              "span",
                              {
                                className:
                                  "border-border bg-secondary text-muted-foreground rounded-full border px-2 py-0.5 font-mono text-xs",
                                children: s,
                              },
                              s,
                            ),
                          ),
                        }),
                      f.jsxs("div", {
                        className:
                          "border-border mt-auto flex items-center justify-between border-t pt-2",
                        children: [
                          f.jsx("span", {
                            className:
                              "text-muted-foreground font-mono text-xs",
                            children: l.date,
                          }),
                          l.credentialUrl &&
                            f.jsxs("a", {
                              href: l.credentialUrl,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className:
                                "text-primary flex items-center gap-1 text-xs hover:underline",
                              children: ["Verify ", f.jsx(fi, { size: 11 })],
                            }),
                        ],
                      }),
                    ],
                  },
                  `${l.title}-${u}`,
                ),
              ),
            }),
          ],
        }),
      });
}
const $s = Tt(44, 0.75, 0.12),
  b2 = {
    journal: "Journal",
    conference: "Conference",
    preprint: "Preprint",
    "book-chapter": "Book Chapter",
    workshop: "Workshop",
  };
function y2() {
  const l = k.publications ?? [];
  return l.length
    ? f.jsx("section", {
        id: "publications",
        className: "px-6 py-32",
        children: f.jsxs("div", {
          className: "mx-auto max-w-6xl",
          children: [
            f.jsx($.p, {
              variants: $s,
              custom: 0,
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: !0, margin: "-80px" },
              className:
                "text-primary mb-4 font-mono text-xs font-medium tracking-widest uppercase",
              children: "内容作品",
            }),
            f.jsx($.h2, {
              variants: $s,
              custom: 1,
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: !0, margin: "-80px" },
              className:
                "section-heading text-foreground mb-14 text-4xl md:text-5xl",
              children: "代表报道",
            }),
            f.jsx("div", {
              className: "space-y-4",
              children: l.map((u, s) =>
                f.jsx(
                  $.div,
                  {
                    variants: $s,
                    custom: s + 2,
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: { once: !0, margin: "-60px" },
                    className:
                      "group border-border bg-background hover:border-primary/30 hover:shadow-primary/5 relative rounded-2xl border p-6 transition-all duration-300 hover:shadow-lg",
                    children: f.jsxs("div", {
                      className: "flex items-start justify-between gap-4",
                      children: [
                        f.jsxs("div", {
                          className: "min-w-0 flex-1",
                          children: [
                            f.jsxs("div", {
                              className:
                                "mb-2 flex flex-wrap items-center gap-2",
                              children: [
                                u.type &&
                                  f.jsx("span", {
                                    className:
                                      "border-primary/20 text-primary bg-primary/5 rounded-full border px-2 py-0.5 font-mono text-[10px] font-semibold tracking-widest uppercase",
                                    children: b2[u.type] ?? u.type,
                                  }),
                                (u.venue || u.year) &&
                                  f.jsxs("span", {
                                    className:
                                      "text-muted-foreground text-xs font-medium",
                                    children: [
                                      u.venue,
                                      u.year ? ` · ${u.year}` : "",
                                    ],
                                  }),
                              ],
                            }),
                            f.jsx("h3", {
                              className:
                                "text-foreground group-hover:text-primary mb-1.5 text-base leading-snug font-semibold transition-colors",
                              children: u.url
                                ? f.jsx("a", {
                                    href: u.url,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: u.title,
                                  })
                                : u.title,
                            }),
                            u.authors &&
                              f.jsxs("p", {
                                className:
                                  "text-muted-foreground mb-3 flex items-center gap-1 text-xs leading-relaxed",
                                children: [
                                  f.jsx(Sg, {
                                    size: 11,
                                    className: "flex-shrink-0 opacity-60",
                                  }),
                                  u.authors,
                                ],
                              }),
                            (u.tags ?? []).length > 0 &&
                              f.jsx("div", {
                                className: "flex flex-wrap gap-1.5",
                                children: u.tags.map((o) =>
                                  f.jsx(
                                    "span",
                                    {
                                      className:
                                        "bg-secondary border-border text-muted-foreground rounded-full border px-2 py-0.5 text-[10px]",
                                      children: o,
                                    },
                                    o,
                                  ),
                                ),
                              }),
                          ],
                        }),
                        u.url &&
                          f.jsx("a", {
                            href: u.url,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "border-border text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 mt-0.5 flex-shrink-0 rounded-lg border p-2 opacity-0 transition-all group-hover:opacity-100",
                            "aria-label": "Open publication",
                            children: f.jsx(fi, { size: 14 }),
                          }),
                      ],
                    }),
                  },
                  s,
                ),
              ),
            }),
          ],
        }),
      })
    : null;
}
const Ps = Tt(36, 0.7, 0.1);
function x2({ t: l, index: u }) {
  return f.jsxs($.div, {
    variants: Ps,
    custom: u + 2,
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: !0, margin: "-60px" },
    "data-testid": `testimonial-${u}`,
    className:
      "border-border bg-card card-hover flex flex-col gap-5 rounded-2xl border p-7",
    children: [
      f.jsx("div", {
        className:
          "bg-primary/10 text-primary flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
        children: f.jsx(wb, { size: 16 }),
      }),
      f.jsxs("blockquote", {
        className:
          "text-foreground flex-1 font-serif text-lg leading-relaxed font-light",
        children: ["“", l.quote, "”"],
      }),
      f.jsxs("div", {
        className: "border-border flex items-center gap-3 border-t pt-2",
        children: [
          l.photoUrl
            ? f.jsx("img", {
                src: l.photoUrl,
                alt: l.name,
                className:
                  "bg-secondary h-10 w-10 shrink-0 rounded-full object-cover",
                onError: (s) => {
                  s.currentTarget.style.display = "none";
                  const o = s.currentTarget.nextElementSibling;
                  o && (o.style.display = "flex");
                },
              })
            : null,
          f.jsx("div", {
            className: `bg-primary/15 text-primary h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${l.photoUrl ? "hidden" : "flex"}`,
            children: l.name
              .split(" ")
              .map((s) => s[0])
              .join("")
              .slice(0, 2)
              .toUpperCase(),
          }),
          f.jsxs("div", {
            className: "min-w-0",
            children: [
              f.jsx("p", {
                className: "text-foreground truncate text-sm font-medium",
                children: l.name,
              }),
              f.jsxs("p", {
                className: "text-muted-foreground truncate text-xs",
                children: [l.title, l.company ? ` · ${l.company}` : ""],
              }),
            ],
          }),
          l.relationship &&
            f.jsx("span", {
              className:
                "text-muted-foreground bg-secondary border-border ml-auto shrink-0 rounded-full border px-2.5 py-1 font-mono text-xs whitespace-nowrap",
              children: l.relationship,
            }),
        ],
      }),
    ],
  });
}
function S2() {
  return !k.testimonials || k.testimonials.length === 0
    ? null
    : f.jsx("section", {
        id: "testimonials",
        className: "px-6 py-24",
        children: f.jsxs("div", {
          className: "mx-auto max-w-6xl",
          children: [
            f.jsx($.p, {
              variants: Ps,
              custom: 0,
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: !0, margin: "-80px" },
              className:
                "text-primary mb-4 font-mono text-xs font-medium tracking-widest uppercase",
              children: "Testimonials",
            }),
            f.jsx($.h2, {
              variants: Ps,
              custom: 1,
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: !0, margin: "-80px" },
              className:
                "section-heading text-foreground mb-10 text-4xl md:text-5xl",
              children: "What People Say",
            }),
            f.jsx("div", {
              className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
              children: k.testimonials.map((l, u) =>
                f.jsx(x2, { t: l, index: u }, `${l.name}-${u}`),
              ),
            }),
          ],
        }),
      });
}
const nl = Tt(40, 0.75, 0.12);
function w2() {
  const [l, u] = x.useState(!1),
    [s, o] = x.useState(""),
    [c, d] = x.useState(""),
    [h, p] = x.useState(""),
    [v, w] = x.useState("idle"),
    S = k.contactHeading,
    T = k.contactTitle,
    M = k.contactDescription;
  async function A(H) {
    if ((H.preventDefault(), !(!s || !c || !h))) {
      const z = encodeURIComponent(`来自作品集的留言 - ${s}`),
        O = encodeURIComponent(`Name: ${s}
Email: ${c}

${h}`);
      window.open(`mailto:${k.email}?subject=${z}&body=${O}`);
      return;
    }
  }
  return f.jsx("footer", {
    id: "contact",
    className: "border-border/60 bg-card/30 border-t px-6 py-32",
    children: f.jsx("div", {
      className: "mx-auto max-w-6xl",
      children: f.jsxs("div", {
        className: "flex flex-col items-center gap-10 text-center",
        children: [
          f.jsxs($.div, {
            variants: nl,
            custom: 0,
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: !0, margin: "-80px" },
            children: [
              f.jsx("p", {
                className:
                  "text-primary mb-4 font-mono text-xs font-medium tracking-widest uppercase",
                children: S,
              }),
              f.jsx("h2", {
                className:
                  "section-heading text-foreground mb-5 text-4xl leading-tight md:text-6xl",
                children: T.split(`
`).map((H, z) =>
                  z === 1
                    ? f.jsx(
                        "em",
                        {
                          className: "font-light italic not-italic",
                          children: H,
                        },
                        z,
                      )
                    : f.jsxs(
                        "span",
                        {
                          children: [
                            H,
                            z === 0 &&
                            T.includes(`
`)
                              ? f.jsx("br", {})
                              : null,
                          ],
                        },
                        z,
                      ),
                ),
              }),
              f.jsx("p", {
                className:
                  "text-muted-foreground mx-auto max-w-md leading-relaxed font-light",
                children: M,
              }),
            ],
          }),
          f.jsxs($.form, {
            onSubmit: A,
            variants: nl,
            custom: 1,
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: !0, margin: "-60px" },
            className: "flex w-full max-w-lg flex-col gap-3 text-left",
            children: [
              f.jsxs("div", {
                className: "flex flex-col gap-3 sm:flex-row",
                children: [
                  f.jsxs("div", {
                    className: "flex flex-1 flex-col gap-1.5",
                    children: [
                      f.jsx("label", {
                        htmlFor: "contact-name",
                        className:
                          "text-muted-foreground text-xs font-medium tracking-wide",
                        children: "您的称呼",
                      }),
                      f.jsx("input", {
                        id: "contact-name",
                        type: "text",
                        required: !0,
                        value: s,
                        onChange: (H) => o(H.target.value),
                        placeholder: "怎么称呼您",
                        className:
                          "border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-primary/40 focus:border-primary/40 w-full rounded-xl border px-4 py-3 text-sm transition-colors focus:ring-1 focus:outline-none",
                      }),
                    ],
                  }),
                  f.jsxs("div", {
                    className: "flex flex-1 flex-col gap-1.5",
                    children: [
                      f.jsx("label", {
                        htmlFor: "contact-email",
                        className:
                          "text-muted-foreground text-xs font-medium tracking-wide",
                        children: "您的邮箱",
                      }),
                      f.jsx("input", {
                        id: "contact-email",
                        type: "email",
                        required: !0,
                        value: c,
                        onChange: (H) => d(H.target.value),
                        placeholder: "您的工作邮箱",
                        className:
                          "border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-primary/40 focus:border-primary/40 w-full rounded-xl border px-4 py-3 text-sm transition-colors focus:ring-1 focus:outline-none",
                      }),
                    ],
                  }),
                ],
              }),
              f.jsxs("div", {
                className: "flex flex-col gap-1.5",
                children: [
                  f.jsx("label", {
                    htmlFor: "contact-message",
                    className:
                      "text-muted-foreground text-xs font-medium tracking-wide",
                    children: "留言内容",
                  }),
                  f.jsx("textarea", {
                    id: "contact-message",
                    required: !0,
                    rows: 5,
                    value: h,
                    onChange: (H) => p(H.target.value),
                    placeholder: "介绍一下您的机会或想法…",
                    className:
                      "border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-primary/40 focus:border-primary/40 w-full resize-none rounded-xl border px-4 py-3 text-sm transition-colors focus:ring-1 focus:outline-none",
                  }),
                ],
              }),
              v === "success" &&
                f.jsxs("div", {
                  className:
                    "flex items-center gap-2 rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-600 dark:text-green-400",
                  children: [
                    f.jsx(tc, { size: 16, className: "shrink-0" }),
                    "留言已发送，我会尽快回复您！",
                  ],
                }),
              v === "error" &&
                f.jsxs("div", {
                  className:
                    "flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-600 dark:text-red-400",
                  children: [
                    f.jsx(Eb, { size: 16, className: "shrink-0" }),
                    "发送失败，请直接发邮件联系我。",
                  ],
                }),
              f.jsxs("button", {
                type: "submit",
                disabled: v === "sending",
                className:
                  "bg-primary text-primary-foreground flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50",
                children: [
                  f.jsx(Nb, { size: 15 }),
                  v === "sending" ? "发送中…" : "通过邮件应用发送",
                ],
              }),
              f.jsxs("p", {
                className: "text-muted-foreground text-center text-xs",
                children: [
                  "将在您的邮件客户端预填留言内容。",
                  " ",
                  f.jsx("a", {
                    href: `mailto:${k.email}`,
                    className:
                      "text-primary underline-offset-2 hover:underline",
                    children: "直接发邮件 →",
                  }),
                ],
              }),
            ],
          }),
          f.jsxs($.div, {
            variants: nl,
            custom: 2,
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: !0, margin: "-60px" },
            className: "flex flex-col items-center gap-3 sm:flex-row",
            children: [
              f.jsxs("a", {
                href: `mailto:${k.email}`,
                className:
                  "bg-secondary border-border text-foreground hover:border-primary/40 hover:bg-primary/5 flex items-center gap-2.5 rounded-2xl border px-6 py-3 text-sm font-medium tracking-wide transition-all",
                "data-testid": "link-contact-email",
                children: [f.jsx(ci, { size: 15 }), k.email],
              }),
              k.phone &&
                f.jsxs("a", {
                  href: `tel:${k.phone.replace(/\s/g, "")}`,
                  className:
                    "border-border text-foreground hover:bg-secondary hover:border-primary/40 flex items-center gap-2.5 rounded-2xl border px-6 py-3 text-sm font-medium tracking-wide transition-all",
                  "data-testid": "link-contact-phone",
                  children: [f.jsx(xg, { size: 15 }), k.phone],
                }),
            ],
          }),
          f.jsxs($.div, {
            variants: nl,
            custom: 3,
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: !0, margin: "-60px" },
            className: "flex items-center gap-3",
            children: [
              k.social.github &&
                f.jsx("a", {
                  href: k.social.github,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "border-border text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/5 rounded-xl border p-3 transition-all",
                  "aria-label": "GitHub",
                  "data-testid": "link-footer-github",
                  children: f.jsx(cc, { size: 18 }),
                }),
              k.social.linkedin &&
                f.jsx("a", {
                  href: k.social.linkedin,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "border-border text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/5 rounded-xl border p-3 transition-all",
                  "aria-label": "LinkedIn",
                  "data-testid": "link-footer-linkedin",
                  children: f.jsx(sc, { size: 18 }),
                }),
              k.social.twitter &&
                f.jsx("a", {
                  href: k.social.twitter,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "border-border text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/5 rounded-xl border p-3 transition-all",
                  "aria-label": "Twitter",
                  "data-testid": "link-footer-twitter",
                  children: f.jsx(uc, { size: 18 }),
                }),
            ],
          }),
          f.jsxs($.div, {
            variants: nl,
            custom: 4,
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: !0, margin: "-60px" },
            className: "flex flex-wrap items-center justify-center gap-3",
            children: [
              f.jsxs("a", {
                href: k.resumeUrl,
                download: k.resumeFileName,
                className:
                  "border-border text-foreground hover:bg-secondary hover:border-primary/40 flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-medium transition-all",
                "data-testid": "button-download-resume-footer",
                children: [f.jsx(ia, { size: 14 }), "下载简历"],
              }),
              f.jsxs("button", {
                onClick: () => u(!0),
                className:
                  "border-border text-foreground hover:bg-secondary hover:border-primary/40 flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-medium transition-all",
                "data-testid": "button-share-resume-footer",
                children: [f.jsx(yg, { size: 14 }), "分享本页"],
              }),
            ],
          }),
          f.jsx(D0, { open: l, onClose: () => u(!1) }),
          f.jsx($.div, {
            variants: nl,
            custom: 5,
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: !0, margin: "-40px" },
            className: "border-border/60 w-full border-t pt-8 text-center",
            children: f.jsxs("p", {
              className:
                "text-muted-foreground font-mono text-xs tracking-wide",
              children: [
                "基于",
                " ",
                f.jsx("a", {
                  href: "https://github.com/git-vitae/git-vitae.github.io",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-primary underline-offset-2 hover:underline",
                  children: "GitVitae",
                }),
                " ",
                "构建",
              ],
            }),
          }),
        ],
      }),
    }),
  });
}
const E2 = {
  about: t2,
  stats: a2,
  skills: s2,
  languages: m2,
  experience: h2,
  projects: g2,
  education: p2,
  certifications: v2,
  publications: y2,
  testimonials: S2,
  contact: w2,
};
function N2({ id: l, children: u }) {
  const [s, o] = x.useState(!1),
    c = async () => {
      const d = `${window.location.origin}${window.location.pathname.replace(/\/$/, "")}`,
        p = window.location.hash.startsWith("#/demo") ? "#/demo" : "",
        v = `${d}${p}#${l}`;
      await navigator.clipboard.writeText(v),
        o(!0),
        setTimeout(() => o(!1), 2200);
    };
  return f.jsxs("div", {
    className: "group/sec relative",
    children: [
      u,
      f.jsx("div", {
        className:
          "no-print pointer-events-none absolute top-10 right-6 z-10 hidden opacity-0 transition-opacity duration-200 group-hover/sec:pointer-events-auto group-hover/sec:opacity-100 sm:block",
        children: f.jsx("button", {
          onClick: c,
          className:
            "bg-background/90 border-border text-muted-foreground hover:text-foreground hover:border-primary/40 flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[11px] font-medium shadow-sm backdrop-blur transition-colors",
          "aria-label": `Copy link to ${l} section`,
          children: f.jsx(ll, {
            mode: "wait",
            initial: !1,
            children: s
              ? f.jsxs(
                  $.span,
                  {
                    initial: { scale: 0.6, opacity: 0 },
                    animate: { scale: 1, opacity: 1 },
                    exit: { scale: 0.6, opacity: 0 },
                    transition: { duration: 0.15 },
                    className: "flex items-center gap-1.5 text-green-500",
                    children: [
                      f.jsx(jb, { size: 11, strokeWidth: 2.5 }),
                      "已复制！",
                    ],
                  },
                  "check",
                )
              : f.jsxs(
                  $.span,
                  {
                    initial: { scale: 0.6, opacity: 0 },
                    animate: { scale: 1, opacity: 1 },
                    exit: { scale: 0.6, opacity: 0 },
                    transition: { duration: 0.15 },
                    className: "flex items-center gap-1.5",
                    children: [f.jsx(vg, { size: 11 }), "复制链接"],
                  },
                  "link",
                ),
          }),
        }),
      }),
    ],
  });
}
function j2({ theme: l, onToggleTheme: u, topOffset: s }) {
  return f.jsxs("div", {
    className: "bg-background text-foreground min-h-screen",
    children: [
      f.jsx(Zx, { theme: l, onToggleTheme: u, topOffset: s }),
      f.jsx($x, {}),
      f.jsx(u2, {}),
      k.sections
        .filter((o) => o.show)
        .map(({ id: o }) => {
          const c = E2[o];
          return c ? f.jsx(N2, { id: o, children: f.jsx(c, {}) }, o) : null;
        }),
      k.showPoweredBy,
    ],
  });
}
function O0() {
  const l = x.useRef(null),
    u = x.useRef(null),
    [s, o] = x.useState(!1),
    c = x.useRef({ x: -100, y: -100 }),
    d = x.useRef({ x: -100, y: -100 }),
    h = x.useRef(0);
  return (
    x.useEffect(
      () => (
        document.documentElement.classList.add("custom-cursor-active"),
        () => document.documentElement.classList.remove("custom-cursor-active")
      ),
      [],
    ),
    x.useEffect(() => {
      const p = (A) => {
          c.current = { x: A.clientX, y: A.clientY };
        },
        v = () => o(!0),
        w = () => o(!1),
        S = (A, H, z) => A + (H - A) * z,
        T = () => {
          if (
            ((d.current.x = S(d.current.x, c.current.x, 0.12)),
            (d.current.y = S(d.current.y, c.current.y, 0.12)),
            l.current &&
              (l.current.style.transform = `translate(${c.current.x - 4}px, ${c.current.y - 4}px)`),
            u.current)
          ) {
            const A = s ? 40 : 28;
            (u.current.style.transform = `translate(${d.current.x - A / 2}px, ${d.current.y - A / 2}px)`),
              (u.current.style.width = `${A}px`),
              (u.current.style.height = `${A}px`);
          }
          h.current = requestAnimationFrame(T);
        };
      (h.current = requestAnimationFrame(T)),
        window.addEventListener("mousemove", p);
      const M = document.querySelectorAll("a, button, [role='button']");
      return (
        M.forEach((A) => {
          A.addEventListener("mouseenter", v),
            A.addEventListener("mouseleave", w);
        }),
        () => {
          cancelAnimationFrame(h.current),
            window.removeEventListener("mousemove", p),
            M.forEach((A) => {
              A.removeEventListener("mouseenter", v),
                A.removeEventListener("mouseleave", w);
            });
        }
      );
    }, [s]),
    typeof window < "u" && window.matchMedia("(pointer: coarse)").matches
      ? null
      : f.jsxs(f.Fragment, {
          children: [
            f.jsx("div", {
              ref: l,
              className:
                "bg-primary pointer-events-none fixed top-0 left-0 z-[9999] h-2 w-2 rounded-full",
              style: { willChange: "transform" },
            }),
            f.jsx("div", {
              ref: u,
              className: `pointer-events-none fixed top-0 left-0 z-[9998] rounded-full border transition-[opacity,border-color] duration-200 ${s ? "border-primary opacity-80" : "border-primary/50 opacity-60"}`,
              style: {
                willChange: "transform, width, height",
                transition: "width 0.2s ease, height 0.2s ease",
              },
            }),
          ],
        })
  );
}
function A2({ children: l }) {
  return (
    x.useEffect(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const u = new Ab({
        lerp: 0.08,
        orientation: "vertical",
        smoothWheel: !0,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.8,
      });
      let s;
      function o(d) {
        u.raf(d), (s = requestAnimationFrame(o));
      }
      s = requestAnimationFrame(o);
      const c = (d) => {
        const h = d.target.closest("a[href^='#']");
        if (!h) return;
        const p = h.getAttribute("href");
        if (!p || p.includes("/")) return;
        const v = document.querySelector(p);
        v &&
          (d.preventDefault(), u.scrollTo(v, { offset: -64, duration: 1.6 }));
      };
      return (
        document.addEventListener("click", c),
        () => {
          cancelAnimationFrame(s),
            u.destroy(),
            document.removeEventListener("click", c);
        }
      );
    }, []),
    f.jsx(f.Fragment, { children: l })
  );
}
function T2({ onDismiss: l, topOffset: u = 0 }) {
  const [s, o] = x.useState(!1);
  if (!k.openToWork) return null;
  const c = () => {
    o(!0), l();
  };
  return f.jsx(ll, {
    children:
      !s &&
      f.jsxs($.div, {
        initial: { y: -48, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: -48, opacity: 0 },
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        style: { top: u },
        className:
          "bg-primary text-primary-foreground fixed right-0 left-0 z-[60] flex h-10 items-center justify-center gap-3 px-4 text-xs font-medium tracking-wide select-none print:hidden",
        children: [
          f.jsxs("span", {
            className: "relative flex shrink-0 items-center",
            children: [
              f.jsx("span", {
                className:
                  "bg-primary-foreground absolute inline-flex h-2 w-2 animate-ping rounded-full opacity-70",
              }),
              f.jsx("span", {
                className:
                  "bg-primary-foreground relative inline-flex h-2 w-2 rounded-full",
              }),
            ],
          }),
          f.jsx("span", {
            className: "text-[11px] font-semibold tracking-widest uppercase",
            children: "求职中",
          }),
          f.jsx("span", {
            className: "text-primary-foreground/50 hidden sm:inline",
            children: "·",
          }),
          f.jsx("span", {
            className:
              "text-primary-foreground/75 hidden text-[11px] sm:inline",
            children: "正在寻找新媒体运营 / 内容运营实习机会",
          }),
          f.jsxs("a", {
            href: `mailto:${k.email}?subject=求职机会对接`,
            className:
              "bg-primary-foreground/15 hover:bg-primary-foreground/25 border-primary-foreground/20 ml-1 flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold tracking-widest whitespace-nowrap uppercase transition-colors",
            children: [f.jsx(ci, { size: 11 }), "联系我"],
          }),
          f.jsx("button", {
            onClick: c,
            "aria-label": "Dismiss banner",
            className:
              "hover:bg-primary-foreground/15 text-primary-foreground/60 hover:text-primary-foreground absolute right-3 rounded-full p-1.5 transition-colors",
            children: f.jsx(ec, { size: 13 }),
          }),
        ],
      }),
  });
}
const C2 = "gitvitae-demo-dismissed";
function M2({ onDismiss: l }) {
  const [u, s] = x.useState(() => localStorage.getItem(C2) === "1");
  return null;
}
const z2 = {
  indigo: {
    light: {
      primary: "250 84% 60%",
      primaryFg: "0 0% 100%",
      accent: "250 84% 96%",
      accentFg: "250 84% 40%",
      ring: "250 84% 60%",
      gradientEnd: "250 84% 80%",
    },
    dark: {
      primary: "250 84% 67%",
      primaryFg: "0 0% 100%",
      accent: "250 50% 22%",
      accentFg: "250 84% 80%",
      ring: "250 84% 67%",
      gradientEnd: "250 100% 85%",
    },
  },
  emerald: {
    light: {
      primary: "160 72% 40%",
      primaryFg: "0 0% 100%",
      accent: "160 60% 94%",
      accentFg: "160 72% 28%",
      ring: "160 72% 40%",
      gradientEnd: "160 60% 62%",
    },
    dark: {
      primary: "160 65% 52%",
      primaryFg: "0 0% 100%",
      accent: "160 40% 18%",
      accentFg: "160 65% 72%",
      ring: "160 65% 52%",
      gradientEnd: "160 80% 72%",
    },
  },
  rose: {
    light: {
      primary: "340 75% 55%",
      primaryFg: "0 0% 100%",
      accent: "340 80% 96%",
      accentFg: "340 75% 38%",
      ring: "340 75% 55%",
      gradientEnd: "350 90% 72%",
    },
    dark: {
      primary: "340 78% 65%",
      primaryFg: "0 0% 100%",
      accent: "340 40% 22%",
      accentFg: "340 80% 80%",
      ring: "340 78% 65%",
      gradientEnd: "350 90% 78%",
    },
  },
  amber: {
    light: {
      primary: "38 95% 50%",
      primaryFg: "38 100% 10%",
      accent: "38 90% 94%",
      accentFg: "38 95% 30%",
      ring: "38 95% 50%",
      gradientEnd: "45 98% 65%",
    },
    dark: {
      primary: "38 90% 58%",
      primaryFg: "38 100% 10%",
      accent: "38 50% 18%",
      accentFg: "38 90% 75%",
      ring: "38 90% 58%",
      gradientEnd: "45 98% 72%",
    },
  },
  ocean: {
    light: {
      primary: "196 80% 42%",
      primaryFg: "0 0% 100%",
      accent: "196 70% 93%",
      accentFg: "196 80% 28%",
      ring: "196 80% 42%",
      gradientEnd: "196 80% 62%",
    },
    dark: {
      primary: "196 80% 56%",
      primaryFg: "0 0% 100%",
      accent: "196 50% 18%",
      accentFg: "196 80% 76%",
      ring: "196 80% 56%",
      gradientEnd: "196 90% 72%",
    },
  },
  slate: {
    light: {
      primary: "215 30% 38%",
      primaryFg: "0 0% 100%",
      accent: "215 20% 93%",
      accentFg: "215 30% 24%",
      ring: "215 30% 38%",
      gradientEnd: "215 30% 58%",
    },
    dark: {
      primary: "215 25% 62%",
      primaryFg: "0 0% 100%",
      accent: "215 20% 20%",
      accentFg: "215 25% 80%",
      ring: "215 25% 62%",
      gradientEnd: "215 30% 78%",
    },
  },
};
function D2(l) {
  const u = l.replace("#", ""),
    s = parseInt(u.slice(0, 2), 16) / 255,
    o = parseInt(u.slice(2, 4), 16) / 255,
    c = parseInt(u.slice(4, 6), 16) / 255,
    d = Math.max(s, o, c),
    h = Math.min(s, o, c),
    p = (d + h) / 2;
  let v = 0,
    w = 0;
  if (d !== h) {
    const S = d - h;
    switch (((w = p > 0.5 ? S / (2 - d - h) : S / (d + h)), d)) {
      case s:
        v = ((o - c) / S + (o < c ? 6 : 0)) / 6;
        break;
      case o:
        v = ((c - s) / S + 2) / 6;
        break;
      case c:
        v = ((s - o) / S + 4) / 6;
        break;
    }
  }
  return [Math.round(v * 360), Math.round(w * 100), Math.round(p * 100)];
}
function sg(l) {
  const [u, s, o] = D2(l),
    c = Math.max(Math.min(o, 60), 40),
    d = Math.min(c + 10, 72),
    h = c > 55 ? `${u} ${Math.round(s * 0.4)}% 12%` : "0 0% 100%";
  return {
    light: {
      primary: `${u} ${s}% ${c}%`,
      primaryFg: h,
      accent: `${u} ${Math.max(s - 20, 20)}% 94%`,
      accentFg: `${u} ${s}% ${Math.round(c * 0.65)}%`,
      ring: `${u} ${s}% ${c}%`,
      gradientEnd: `${(u + 15) % 360} ${Math.min(s + 5, 100)}% ${Math.min(c + 18, 84)}%`,
    },
    dark: {
      primary: `${u} ${s}% ${d}%`,
      primaryFg: h,
      accent: `${u} ${Math.max(s - 30, 15)}% 18%`,
      accentFg: `${u} ${Math.min(s + 10, 90)}% ${Math.min(d + 15, 84)}%`,
      ring: `${u} ${s}% ${d}%`,
      gradientEnd: `${(u + 15) % 360} ${Math.min(s + 10, 100)}% ${Math.min(d + 20, 88)}%`,
    },
  };
}
function cg(l, u, s) {
  const o = l === "custom" ? s : z2[l];
  if (!o) return;
  const c = u ? o.dark : o.light,
    d = document.documentElement;
  d.style.setProperty("--primary", c.primary),
    d.style.setProperty("--primary-foreground", c.primaryFg),
    d.style.setProperty("--accent", c.accent),
    d.style.setProperty("--accent-foreground", c.accentFg),
    d.style.setProperty("--ring", c.ring),
    d.style.setProperty("--sidebar-primary", c.primary),
    d.style.setProperty("--sidebar-ring", c.ring),
    d.style.setProperty("--gradient-text-end", `hsl(${c.gradientEnd})`);
}
const R2 = x.lazy(() =>
  hi(
    () => import("./index-CPCRazQQ.js"),
    __vite__mapDeps([0, 1, 2, 3, 4, 5]),
    import.meta.url,
  ).then((l) => ({ default: l.ResumePage })),
);
x.lazy(() =>
  hi(
    () => import("./index-BXdM8uZt.js"),
    __vite__mapDeps([6, 1, 2, 3, 4, 5]),
    import.meta.url,
  ).then((l) => ({ default: l.LandingPage })),
);
const O2 = x.lazy(() =>
    hi(
      () => import("./index-DnGIfiMC.js"),
      __vite__mapDeps([7, 1, 2, 3]),
      import.meta.url,
    ).then((l) => ({ default: l.SetupPage })),
  ),
  U2 = x.lazy(() =>
    hi(
      () => import("./index-f4JpbCrd.js"),
      __vite__mapDeps([8, 1, 2, 9, 3, 4, 5]),
      import.meta.url,
    ).then((l) => ({ default: l.BlogListPage })),
  ),
  _2 = x.lazy(() =>
    hi(
      () => import("./post-DUZCc_DG.js"),
      __vite__mapDeps([10, 1, 2, 9, 3]),
      import.meta.url,
    ).then((l) => ({ default: l.BlogPostPage })),
  ),
  fg = !1;
function dg({ theme: l, toggleTheme: u, showDemoBanner: s }) {
  const [o, c] = x.useState(
      s && localStorage.getItem("gitvitae-demo-dismissed") !== "1",
    ),
    [d, h] = x.useState(k.openToWork),
    p = o ? 40 : 0,
    v = p + (d ? 40 : 0);
  return f.jsxs(A2, {
    children: [
      f.jsx(O0, {}),
      f.jsx(M2, { onDismiss: () => c(!1) }),
      f.jsx(T2, { onDismiss: () => h(!1), topOffset: p }),
      f.jsx("div", {
        className:
          "transition-[padding] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        style: { paddingTop: `${v}px` },
        children: f.jsx(j2, { theme: l, onToggleTheme: u, topOffset: v }),
      }),
    ],
  });
}
function B2() {
  const [l, u] = x.useState(() => {
    const o = localStorage.getItem("portfolio-theme");
    return o || k.defaultTheme;
  });
  x.useEffect(() => {
    const o = document.documentElement,
      c = l === "dark";
    c ? o.classList.add("dark") : o.classList.remove("dark"),
      localStorage.setItem("portfolio-theme", l);
    const d = k.primaryColor ? sg(k.primaryColor) : k.customColors;
    cg(k.primaryColor ? "custom" : k.colorPreset, c, d);
  }, [l]),
    x.useEffect(() => {
      const o = k.primaryColor ? sg(k.primaryColor) : k.customColors;
      cg(k.primaryColor ? "custom" : k.colorPreset, l === "dark", o);
    }, []);
  const s = () => u((o) => (o === "dark" ? "light" : "dark"));
  return f.jsx(ib, {
    reducedMotion: "user",
    children: f.jsx(ub, {
      hook: wg,
      children: f.jsx(x.Suspense, {
        fallback: null,
        children: f.jsxs(sb, {
          children: [
            f.jsx(Wa, {
              path: "/blog/:slug",
              children: (o) => f.jsx(_2, { slug: o.slug ?? "" }),
            }),
            f.jsx(Wa, { path: "/blog", children: f.jsx(U2, {}) }),
            f.jsxs(Wa, {
              path: "/resume",
              children: [
                f.jsx(O0, {}),
                f.jsx(R2, { theme: l, onToggleTheme: s }),
              ],
            }),
            f.jsx(Wa, { path: "/setup", children: f.jsx(O2, {}) }),
            f.jsx(Wa, {
              path: "/demo",
              children: f.jsx(dg, {
                theme: l,
                toggleTheme: s,
                showDemoBanner: fg,
              }),
            }),
            f.jsx(Wa, {
              children: f.jsx(dg, {
                theme: l,
                toggleTheme: s,
                showDemoBanner: fg,
              }),
            }),
          ],
        }),
      }),
    }),
  });
}
function k2(l, u) {
  const s = l.trim().split(/\s+/).filter(Boolean),
    o =
      s.length >= 2
        ? `${s[0][0]}${s[s.length - 1][0]}`.toUpperCase()
        : (s[0] ?? "?").slice(0, 2).toUpperCase(),
    c = o.length === 1 ? 18 : 14,
    d = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <rect width="32" height="32" rx="8" fill="${u}"/>
    <text x="16" y="16" text-anchor="middle" dominant-baseline="central"
      font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif"
      font-size="${c}" font-weight="700" fill="white">${o}</text>
  </svg>`,
    p =
      document.querySelector("link[rel~='icon']") ??
      document.createElement("link");
  (p.rel = "icon"),
    (p.type = "image/svg+xml"),
    (p.href = `data:image/svg+xml,${encodeURIComponent(d)}`),
    p.parentNode || document.head.appendChild(p);
}
const L2 =
  (k.primaryColor && k.primaryColor.trim()) ||
  k.customColors?.[k.colorPreset]?.primary ||
  "#374151";
k2(k.name, L2);
if (k.analytics.goatcounterCode) {
  const l = document.createElement("script");
  (l.dataset.goatcounter = `https://${k.analytics.goatcounterCode}.goatcounter.com/count`),
    (l.async = !0),
    (l.src = "//gc.zgo.at/count.js"),
    document.head.appendChild(l);
}
Db.createRoot(document.getElementById("root")).render(f.jsx(B2, {}));
export { cc as F, D0 as S, cg as a, sc as b, k as c, sg as h };
