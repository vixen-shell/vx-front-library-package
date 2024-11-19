import { g as a, c as i } from "./_commonjsHelpers-DaMA6jEr.js";
import f from "dayjs";
function u(o, l) {
  for (var r = 0; r < l.length; r++) {
    const M = l[r];
    if (typeof M != "string" && !Array.isArray(M)) {
      for (const Y in M)
        if (Y !== "default" && !(Y in o)) {
          const _ = Object.getOwnPropertyDescriptor(M, Y);
          _ && Object.defineProperty(o, Y, _.get ? _ : {
            enumerable: !0,
            get: () => M[Y]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var s = { exports: {} };
(function(o, l) {
  (function(r, M) {
    o.exports = M(f);
  })(i, function(r) {
    function M(t) {
      return t && typeof t == "object" && "default" in t ? t : { default: t };
    }
    var Y = M(r), _ = { s: "מספר שניות", ss: "%d שניות", m: "דקה", mm: "%d דקות", h: "שעה", hh: "%d שעות", hh2: "שעתיים", d: "יום", dd: "%d ימים", dd2: "יומיים", M: "חודש", MM: "%d חודשים", MM2: "חודשיים", y: "שנה", yy: "%d שנים", yy2: "שנתיים" };
    function e(t, H, d) {
      return (_[d + (t === 2 ? "2" : "")] || _[d]).replace("%d", t);
    }
    var m = { name: "he", weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"), weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"), weekdaysMin: "א׳_ב׳_ג׳_ד׳_ה׳_ו_ש׳".split("_"), months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"), monthsShort: "ינו_פבר_מרץ_אפר_מאי_יונ_יול_אוג_ספט_אוק_נוב_דצמ".split("_"), relativeTime: { future: "בעוד %s", past: "לפני %s", s: e, m: e, mm: e, h: e, hh: e, d: e, dd: e, M: e, MM: e, y: e, yy: e }, ordinal: function(t) {
      return t;
    }, format: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [ב]MMMM YYYY", LLL: "D [ב]MMMM YYYY HH:mm", LLLL: "dddd, D [ב]MMMM YYYY HH:mm", l: "D/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY HH:mm", llll: "ddd, D MMM YYYY HH:mm" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [ב]MMMM YYYY", LLL: "D [ב]MMMM YYYY HH:mm", LLLL: "dddd, D [ב]MMMM YYYY HH:mm", l: "D/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY HH:mm", llll: "ddd, D MMM YYYY HH:mm" } };
    return Y.default.locale(m, null, !0), m;
  });
})(s);
var n = s.exports;
const p = /* @__PURE__ */ a(n), D = /* @__PURE__ */ u({
  __proto__: null,
  default: p
}, [n]);
export {
  D as h
};
