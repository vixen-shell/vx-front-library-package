import { g as d, c as f } from "./_commonjsHelpers-DaMA6jEr.js";
import l from "dayjs";
function m(n, s) {
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
    n.exports = t(l);
  })(f, function(o) {
    function t(r) {
      return r && typeof r == "object" && "default" in r ? r : { default: r };
    }
    var e = t(o), _ = { name: "kk", weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"), weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"), weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"), months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"), monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"), weekStart: 1, relativeTime: { future: "%s ішінде", past: "%s бұрын", s: "бірнеше секунд", m: "бір минут", mm: "%d минут", h: "бір сағат", hh: "%d сағат", d: "бір күн", dd: "%d күн", M: "бір ай", MM: "%d ай", y: "бір жыл", yy: "%d жыл" }, ordinal: function(r) {
      return r;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return e.default.locale(_, null, !0), _;
  });
})(a);
var i = a.exports;
const u = /* @__PURE__ */ d(i), M = /* @__PURE__ */ m({
  __proto__: null,
  default: u
}, [i]);
export {
  M as k
};
