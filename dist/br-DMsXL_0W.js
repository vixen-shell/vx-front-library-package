import { g as M, c as p } from "./_commonjsHelpers-DaMA6jEr.js";
import b from "dayjs";
function h(o, a) {
  for (var n = 0; n < a.length; n++) {
    const r = a[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const t in r)
        if (t !== "default" && !(t in o)) {
          const u = Object.getOwnPropertyDescriptor(r, t);
          u && Object.defineProperty(o, t, u.get ? u : {
            enumerable: !0,
            get: () => r[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var c = { exports: {} };
(function(o, a) {
  (function(n, r) {
    o.exports = r(b);
  })(p, function(n) {
    function r(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var t = r(n);
    function u(e) {
      return e > 9 ? u(e % 10) : e;
    }
    function _(e, Y, f) {
      return e + " " + function(i, d) {
        return d === 2 ? function(m) {
          return { m: "v", b: "v", d: "z" }[m.charAt(0)] + m.substring(1);
        }(i) : i;
      }({ mm: "munutenn", MM: "miz", dd: "devezh" }[f], e);
    }
    var s = { name: "br", weekdays: "Sul_Lun_Meurzh_Mercʼher_Yaou_Gwener_Sadorn".split("_"), months: "Genver_Cʼhwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"), weekStart: 1, weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"), monthsShort: "Gen_Cʼhwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"), weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "h[e]mm A", LTS: "h[e]mm:ss A", L: "DD/MM/YYYY", LL: "D [a viz] MMMM YYYY", LLL: "D [a viz] MMMM YYYY h[e]mm A", LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A" }, relativeTime: { future: "a-benn %s", past: "%s ʼzo", s: "un nebeud segondennoù", m: "ur vunutenn", mm: _, h: "un eur", hh: "%d eur", d: "un devezh", dd: _, M: "ur miz", MM: _, y: "ur bloaz", yy: function(e) {
      switch (u(e)) {
        case 1:
        case 3:
        case 4:
        case 5:
        case 9:
          return e + " bloaz";
        default:
          return e + " vloaz";
      }
    } }, meridiem: function(e) {
      return e < 12 ? "a.m." : "g.m.";
    } };
    return t.default.locale(s, null, !0), s;
  });
})(c);
var l = c.exports;
const v = /* @__PURE__ */ M(l), g = /* @__PURE__ */ h({
  __proto__: null,
  default: v
}, [l]);
export {
  g as b
};
