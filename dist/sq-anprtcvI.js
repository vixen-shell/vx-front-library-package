import { g as u, c as m } from "./_commonjsHelpers-DaMA6jEr.js";
import d from "dayjs";
function l(_, s) {
  for (var o = 0; o < s.length; o++) {
    const t = s[o];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const r in t)
        if (r !== "default" && !(r in _)) {
          const n = Object.getOwnPropertyDescriptor(t, r);
          n && Object.defineProperty(_, r, n.get ? n : {
            enumerable: !0,
            get: () => t[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(_, Symbol.toStringTag, { value: "Module" }));
}
var a = { exports: {} };
(function(_, s) {
  (function(o, t) {
    _.exports = t(d);
  })(m, function(o) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var r = t(o), n = { name: "sq", weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"), months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"), weekStart: 1, weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"), monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"), weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "në %s", past: "%s më parë", s: "disa sekonda", m: "një minutë", mm: "%d minuta", h: "një orë", hh: "%d orë", d: "një ditë", dd: "%d ditë", M: "një muaj", MM: "%d muaj", y: "një vit", yy: "%d vite" } };
    return r.default.locale(n, null, !0), n;
  });
})(a);
var i = a.exports;
const M = /* @__PURE__ */ u(i), c = /* @__PURE__ */ l({
  __proto__: null,
  default: M
}, [i]);
export {
  c as s
};
