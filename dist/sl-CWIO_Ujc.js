import { g as M, c as j } from "./_commonjsHelpers-DaMA6jEr.js";
import Y from "dayjs";
function y(s, c) {
  for (var i = 0; i < c.length; i++) {
    const o = c[i];
    if (typeof o != "string" && !Array.isArray(o)) {
      for (const u in o)
        if (u !== "default" && !(u in s)) {
          const m = Object.getOwnPropertyDescriptor(o, u);
          m && Object.defineProperty(s, u, m.get ? m : {
            enumerable: !0,
            get: () => o[u]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }));
}
var d = { exports: {} };
(function(s, c) {
  (function(i, o) {
    s.exports = o(Y);
  })(j, function(i) {
    function o(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var u = o(i);
    function m(e) {
      return e % 100 == 2;
    }
    function _(e) {
      return e % 100 == 3 || e % 100 == 4;
    }
    function n(e, t, f, r) {
      var a = e + " ";
      switch (f) {
        case "s":
          return t || r ? "nekaj sekund" : "nekaj sekundami";
        case "m":
          return t ? "ena minuta" : "eno minuto";
        case "mm":
          return m(e) ? a + (t || r ? "minuti" : "minutama") : _(e) ? a + (t || r ? "minute" : "minutami") : a + (t || r ? "minut" : "minutami");
        case "h":
          return t ? "ena ura" : "eno uro";
        case "hh":
          return m(e) ? a + (t || r ? "uri" : "urama") : _(e) ? a + (t || r ? "ure" : "urami") : a + (t || r ? "ur" : "urami");
        case "d":
          return t || r ? "en dan" : "enim dnem";
        case "dd":
          return m(e) ? a + (t || r ? "dneva" : "dnevoma") : a + (t || r ? "dni" : "dnevi");
        case "M":
          return t || r ? "en mesec" : "enim mesecem";
        case "MM":
          return m(e) ? a + (t || r ? "meseca" : "mesecema") : _(e) ? a + (t || r ? "mesece" : "meseci") : a + (t || r ? "mesecev" : "meseci");
        case "y":
          return t || r ? "eno leto" : "enim letom";
        case "yy":
          return m(e) ? a + (t || r ? "leti" : "letoma") : _(e) ? a + (t || r ? "leta" : "leti") : a + (t || r ? "let" : "leti");
      }
    }
    var l = { name: "sl", weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"), months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"), weekStart: 1, weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"), monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"), weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"), ordinal: function(e) {
      return e + ".";
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm", l: "D. M. YYYY" }, relativeTime: { future: "čez %s", past: "pred %s", s: n, m: n, mm: n, h: n, hh: n, d: n, dd: n, M: n, MM: n, y: n, yy: n } };
    return u.default.locale(l, null, !0), l;
  });
})(d);
var p = d.exports;
const b = /* @__PURE__ */ M(p), g = /* @__PURE__ */ y({
  __proto__: null,
  default: b
}, [p]);
export {
  g as s
};
