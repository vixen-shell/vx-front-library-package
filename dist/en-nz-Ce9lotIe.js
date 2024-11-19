import { g as m, c as y } from "./_commonjsHelpers-DaMA6jEr.js";
import l from "dayjs";
function c(o, _) {
  for (var a = 0; a < _.length; a++) {
    const e = _[a];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in o)) {
          const n = Object.getOwnPropertyDescriptor(e, r);
          n && Object.defineProperty(o, r, n.get ? n : {
            enumerable: !0,
            get: () => e[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var d = { exports: {} };
(function(o, _) {
  (function(a, e) {
    o.exports = e(l);
  })(y, function(a) {
    function e(t) {
      return t && typeof t == "object" && "default" in t ? t : { default: t };
    }
    var r = e(a), n = { name: "en-nz", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), weekStart: 1, weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), ordinal: function(t) {
      var s = ["th", "st", "nd", "rd"], u = t % 100;
      return "[" + t + (s[(u - 20) % 10] || s[u] || s[0]) + "]";
    }, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" } };
    return r.default.locale(n, null, !0), n;
  });
})(d);
var i = d.exports;
const f = /* @__PURE__ */ m(i), h = /* @__PURE__ */ c({
  __proto__: null,
  default: f
}, [i]);
export {
  h as e
};
