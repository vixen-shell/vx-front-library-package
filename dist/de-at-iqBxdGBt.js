import { g as p, c as f } from "./_commonjsHelpers-DaMA6jEr.js";
import c from "dayjs";
function g(a, s) {
  for (var o = 0; o < s.length; o++) {
    const t = s[o];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const n in t)
        if (n !== "default" && !(n in a)) {
          const i = Object.getOwnPropertyDescriptor(t, n);
          i && Object.defineProperty(a, n, i.get ? i : {
            enumerable: !0,
            get: () => t[n]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }));
}
var u = { exports: {} };
(function(a, s) {
  (function(o, t) {
    a.exports = t(c);
  })(f, function(o) {
    function t(r) {
      return r && typeof r == "object" && "default" in r ? r : { default: r };
    }
    var n = t(o), i = { s: "ein paar Sekunden", m: ["eine Minute", "einer Minute"], mm: "%d Minuten", h: ["eine Stunde", "einer Stunde"], hh: "%d Stunden", d: ["ein Tag", "einem Tag"], dd: ["%d Tage", "%d Tagen"], M: ["ein Monat", "einem Monat"], MM: ["%d Monate", "%d Monaten"], y: ["ein Jahr", "einem Jahr"], yy: ["%d Jahre", "%d Jahren"] };
    function e(r, m, l) {
      var _ = i[l];
      return Array.isArray(_) && (_ = _[m ? 0 : 1]), _.replace("%d", r);
    }
    var d = { name: "de-at", weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"), ordinal: function(r) {
      return r + ".";
    }, weekStart: 1, formats: { LTS: "HH:mm:ss", LT: "HH:mm", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, relativeTime: { future: "in %s", past: "vor %s", s: e, m: e, mm: e, h: e, hh: e, d: e, dd: e, M: e, MM: e, y: e, yy: e } };
    return n.default.locale(d, null, !0), d;
  });
})(u);
var M = u.exports;
const y = /* @__PURE__ */ p(M), Y = /* @__PURE__ */ g({
  __proto__: null,
  default: y
}, [M]);
export {
  Y as d
};
