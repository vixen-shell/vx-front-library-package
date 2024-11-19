import { g as m, c as u } from "./_commonjsHelpers-DaMA6jEr.js";
import i from "dayjs";
function M(n, _) {
  for (var o = 0; o < _.length; o++) {
    const t = _[o];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const r in t)
        if (r !== "default" && !(r in n)) {
          const a = Object.getOwnPropertyDescriptor(t, r);
          a && Object.defineProperty(n, r, a.get ? a : {
            enumerable: !0,
            get: () => t[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var s = { exports: {} };
(function(n, _) {
  (function(o, t) {
    n.exports = t(i);
  })(u, function(o) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var r = t(o), a = { name: "gom-latn", weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"), months: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"), weekStart: 1, weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"), monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"), weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "A h:mm [vazta]", LTS: "A h:mm:ss [vazta]", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY A h:mm [vazta]", LLLL: "dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]", llll: "ddd, D MMM YYYY, A h:mm [vazta]" } };
    return r.default.locale(a, null, !0), a;
  });
})(s);
var l = s.exports;
const f = /* @__PURE__ */ m(l), p = /* @__PURE__ */ M({
  __proto__: null,
  default: f
}, [l]);
export {
  p as g
};
