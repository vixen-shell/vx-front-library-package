import { g as l, c as m } from "./_commonjsHelpers-DaMA6jEr.js";
import u from "dayjs";
function p(n, a) {
  for (var _ = 0; _ < a.length; _++) {
    const r = a[_];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const e in r)
        if (e !== "default" && !(e in n)) {
          const o = Object.getOwnPropertyDescriptor(r, e);
          o && Object.defineProperty(n, e, o.get ? o : {
            enumerable: !0,
            get: () => r[e]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var f = { exports: {} };
(function(n, a) {
  (function(_, r) {
    n.exports = r(u);
  })(m, function(_) {
    function r(t) {
      return t && typeof t == "object" && "default" in t ? t : { default: t };
    }
    var e = r(_), o = { name: "bg", weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"), weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"), weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"), months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"), monthsShort: "яну_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"), weekStart: 1, ordinal: function(t) {
      var i = t % 100;
      if (i > 10 && i < 20) return t + "-ти";
      var s = t % 10;
      return s === 1 ? t + "-ви" : s === 2 ? t + "-ри" : s === 7 || s === 8 ? t + "-ми" : t + "-ти";
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, relativeTime: { future: "след %s", past: "преди %s", s: "няколко секунди", m: "минута", mm: "%d минути", h: "час", hh: "%d часа", d: "ден", dd: "%d дена", M: "месец", MM: "%d месеца", y: "година", yy: "%d години" } };
    return e.default.locale(o, null, !0), o;
  });
})(f);
var d = f.exports;
const c = /* @__PURE__ */ l(d), g = /* @__PURE__ */ p({
  __proto__: null,
  default: c
}, [d]);
export {
  g as b
};
