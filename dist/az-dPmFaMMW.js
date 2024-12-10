import { g as m, c as l } from "./_commonjsHelpers-DaMA6jEr.js";
import d from "dayjs";
function y(o, _) {
  for (var a = 0; a < _.length; a++) {
    const r = _[a];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const e in r)
        if (e !== "default" && !(e in o)) {
          const n = Object.getOwnPropertyDescriptor(r, e);
          n && Object.defineProperty(o, e, n.get ? n : {
            enumerable: !0,
            get: () => r[e]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var s = { exports: {} };
(function(o, _) {
  (function(a, r) {
    o.exports = r(d);
  })(l, function(a) {
    function r(t) {
      return t && typeof t == "object" && "default" in t ? t : { default: t };
    }
    var e = r(a), n = { name: "az", weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"), weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"), weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"), months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"), monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY г.", LLL: "D MMMM YYYY г., H:mm", LLLL: "dddd, D MMMM YYYY г., H:mm" }, relativeTime: { future: "%s sonra", past: "%s əvvəl", s: "bir neçə saniyə", m: "bir dəqiqə", mm: "%d dəqiqə", h: "bir saat", hh: "%d saat", d: "bir gün", dd: "%d gün", M: "bir ay", MM: "%d ay", y: "bir il", yy: "%d il" }, ordinal: function(t) {
      return t;
    } };
    return e.default.locale(n, null, !0), n;
  });
})(s);
var i = s.exports;
const f = /* @__PURE__ */ m(i), b = /* @__PURE__ */ y({
  __proto__: null,
  default: f
}, [i]);
export {
  b as a
};
