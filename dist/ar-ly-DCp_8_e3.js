import { g as f, c as l } from "./_commonjsHelpers-DaMA6jEr.js";
import u from "dayjs";
function m(n, a) {
  for (var o = 0; o < a.length; o++) {
    const t = a[o];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const r in t)
        if (r !== "default" && !(r in n)) {
          const _ = Object.getOwnPropertyDescriptor(t, r);
          _ && Object.defineProperty(n, r, _.get ? _ : {
            enumerable: !0,
            get: () => t[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var s = { exports: {} };
(function(n, a) {
  (function(o, t) {
    n.exports = t(u);
  })(l, function(o) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var r = t(o), _ = { name: "ar-ly", weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekStart: 6, weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), ordinal: function(e) {
      return e;
    }, meridiem: function(e) {
      return e > 12 ? "م" : "ص";
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/‏M/‏YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" } };
    return r.default.locale(_, null, !0), _;
  });
})(s);
var i = s.exports;
const c = /* @__PURE__ */ f(i), y = /* @__PURE__ */ m({
  __proto__: null,
  default: c
}, [i]);
export {
  y as a
};
