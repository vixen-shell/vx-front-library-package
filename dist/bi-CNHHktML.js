import { g as d, c as m } from "./_commonjsHelpers-DaMA6jEr.js";
import u from "dayjs";
function l(o, i) {
  for (var r = 0; r < i.length; r++) {
    const e = i[r];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in o)) {
          const n = Object.getOwnPropertyDescriptor(e, t);
          n && Object.defineProperty(o, t, n.get ? n : {
            enumerable: !0,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var _ = { exports: {} };
(function(o, i) {
  (function(r, e) {
    o.exports = e(u);
  })(m, function(r) {
    function e(a) {
      return a && typeof a == "object" && "default" in a ? a : { default: a };
    }
    var t = e(r), n = { name: "bi", weekdays: "Sande_Mande_Tusde_Wenesde_Tosde_Fraede_Sarade".split("_"), months: "Januari_Februari_Maj_Eprel_Mei_Jun_Julae_Okis_Septemba_Oktoba_Novemba_Disemba".split("_"), weekStart: 1, weekdaysShort: "San_Man_Tus_Wen_Tos_Frae_Sar".split("_"), monthsShort: "Jan_Feb_Maj_Epr_Mai_Jun_Jul_Oki_Sep_Okt_Nov_Dis".split("_"), weekdaysMin: "San_Ma_Tu_We_To_Fr_Sar".split("_"), ordinal: function(a) {
      return a;
    }, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, relativeTime: { future: "lo %s", past: "%s bifo", s: "sam seken", m: "wan minit", mm: "%d minit", h: "wan haoa", hh: "%d haoa", d: "wan dei", dd: "%d dei", M: "wan manis", MM: "%d manis", y: "wan yia", yy: "%d yia" } };
    return t.default.locale(n, null, !0), n;
  });
})(_);
var s = _.exports;
const f = /* @__PURE__ */ d(s), b = /* @__PURE__ */ l({
  __proto__: null,
  default: f
}, [s]);
export {
  b
};
