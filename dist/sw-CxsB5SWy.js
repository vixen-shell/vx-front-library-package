import { g as n, c as u } from "./_commonjsHelpers-DaMA6jEr.js";
import l from "dayjs";
function p(i, s) {
  for (var o = 0; o < s.length; o++) {
    const e = s[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in i)) {
          const r = Object.getOwnPropertyDescriptor(e, t);
          r && Object.defineProperty(i, t, r.get ? r : {
            enumerable: !0,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }));
}
var m = { exports: {} };
(function(i, s) {
  (function(o, e) {
    i.exports = e(l);
  })(u, function(o) {
    function e(a) {
      return a && typeof a == "object" && "default" in a ? a : { default: a };
    }
    var t = e(o), r = { name: "sw", weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"), weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"), weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"), months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"), weekStart: 1, ordinal: function(a) {
      return a;
    }, relativeTime: { future: "%s baadaye", past: "tokea %s", s: "hivi punde", m: "dakika moja", mm: "dakika %d", h: "saa limoja", hh: "masaa %d", d: "siku moja", dd: "masiku %d", M: "mwezi mmoja", MM: "miezi %d", y: "mwaka mmoja", yy: "miaka %d" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return t.default.locale(r, null, !0), r;
  });
})(m);
var _ = m.exports;
const d = /* @__PURE__ */ n(_), M = /* @__PURE__ */ p({
  __proto__: null,
  default: d
}, [_]);
export {
  M as s
};
