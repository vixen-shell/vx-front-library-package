import { g as i, c as d } from "./_commonjsHelpers-DaMA6jEr.js";
import m from "dayjs";
function f(n, _) {
  for (var a = 0; a < _.length; a++) {
    const e = _[a];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in n)) {
          const o = Object.getOwnPropertyDescriptor(e, t);
          o && Object.defineProperty(n, t, o.get ? o : {
            enumerable: !0,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var s = { exports: {} };
(function(n, _) {
  (function(a, e) {
    n.exports = e(m);
  })(d, function(a) {
    function e(r) {
      return r && typeof r == "object" && "default" in r ? r : { default: r };
    }
    var t = e(a), o = { name: "af", weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"), months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"), weekStart: 1, weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"), monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"), weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"), ordinal: function(r) {
      return r;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "oor %s", past: "%s gelede", s: "'n paar sekondes", m: "'n minuut", mm: "%d minute", h: "'n uur", hh: "%d ure", d: "'n dag", dd: "%d dae", M: "'n maand", MM: "%d maande", y: "'n jaar", yy: "%d jaar" } };
    return t.default.locale(o, null, !0), o;
  });
})(s);
var u = s.exports;
const l = /* @__PURE__ */ i(u), c = /* @__PURE__ */ f({
  __proto__: null,
  default: l
}, [u]);
export {
  c as a
};
