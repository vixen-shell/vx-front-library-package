import { g as m, c as d } from "./_commonjsHelpers-DaMA6jEr.js";
import f from "dayjs";
function u(a, n) {
  for (var o = 0; o < n.length; o++) {
    const e = n[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in a)) {
          const _ = Object.getOwnPropertyDescriptor(e, r);
          _ && Object.defineProperty(a, r, _.get ? _ : {
            enumerable: !0,
            get: () => e[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }));
}
var s = { exports: {} };
(function(a, n) {
  (function(o, e) {
    a.exports = e(f);
  })(d, function(o) {
    function e(t) {
      return t && typeof t == "object" && "default" in t ? t : { default: t };
    }
    var r = e(o), _ = { name: "ar-sa", weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), ordinal: function(t) {
      return t;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiem: function(t) {
      return t > 12 ? "م" : "ص";
    }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" } };
    return r.default.locale(_, null, !0), _;
  });
})(s);
var i = s.exports;
const l = /* @__PURE__ */ m(i), M = /* @__PURE__ */ u({
  __proto__: null,
  default: l
}, [i]);
export {
  M as a
};
