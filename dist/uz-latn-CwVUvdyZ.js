import { g as i, c as l } from "./_commonjsHelpers-DaMA6jEr.js";
import d from "dayjs";
function y(o, _) {
  for (var r = 0; r < _.length; r++) {
    const t = _[r];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const e in t)
        if (e !== "default" && !(e in o)) {
          const n = Object.getOwnPropertyDescriptor(t, e);
          n && Object.defineProperty(o, e, n.get ? n : {
            enumerable: !0,
            get: () => t[e]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var s = { exports: {} };
(function(o, _) {
  (function(r, t) {
    o.exports = t(d);
  })(l, function(r) {
    function t(a) {
      return a && typeof a == "object" && "default" in a ? a : { default: a };
    }
    var e = t(r), n = { name: "uz-latn", weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"), months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"), weekStart: 1, weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"), monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"), weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"), ordinal: function(a) {
      return a;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "D MMMM YYYY, dddd HH:mm" }, relativeTime: { future: "Yaqin %s ichida", past: "%s oldin", s: "soniya", m: "bir daqiqa", mm: "%d daqiqa", h: "bir soat", hh: "%d soat", d: "bir kun", dd: "%d kun", M: "bir oy", MM: "%d oy", y: "bir yil", yy: "%d yil" } };
    return e.default.locale(n, null, !0), n;
  });
})(s);
var u = s.exports;
const m = /* @__PURE__ */ i(u), b = /* @__PURE__ */ y({
  __proto__: null,
  default: m
}, [u]);
export {
  b as u
};
