import { g as i, c as d } from "./_commonjsHelpers-DaMA6jEr.js";
import f from "dayjs";
function l(n, s) {
  for (var o = 0; o < s.length; o++) {
    const t = s[o];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const e in t)
        if (e !== "default" && !(e in n)) {
          const _ = Object.getOwnPropertyDescriptor(t, e);
          _ && Object.defineProperty(n, e, _.get ? _ : {
            enumerable: !0,
            get: () => t[e]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var a = { exports: {} };
(function(n, s) {
  (function(o, t) {
    n.exports = t(f);
  })(d, function(o) {
    function t(r) {
      return r && typeof r == "object" && "default" in r ? r : { default: r };
    }
    var e = t(o), _ = { name: "hy-am", weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"), months: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"), weekStart: 1, weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"), monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"), weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"), ordinal: function(r) {
      return r;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY թ.", LLL: "D MMMM YYYY թ., HH:mm", LLLL: "dddd, D MMMM YYYY թ., HH:mm" }, relativeTime: { future: "%s հետո", past: "%s առաջ", s: "մի քանի վայրկյան", m: "րոպե", mm: "%d րոպե", h: "ժամ", hh: "%d ժամ", d: "օր", dd: "%d օր", M: "ամիս", MM: "%d ամիս", y: "տարի", yy: "%d տարի" } };
    return e.default.locale(_, null, !0), _;
  });
})(a);
var m = a.exports;
const u = /* @__PURE__ */ i(m), y = /* @__PURE__ */ l({
  __proto__: null,
  default: u
}, [m]);
export {
  y as h
};
