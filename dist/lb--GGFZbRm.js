import { g as l, c as i } from "./_commonjsHelpers-DaMA6jEr.js";
import m from "dayjs";
function M(n, s) {
  for (var o = 0; o < s.length; o++) {
    const e = s[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in n)) {
          const _ = Object.getOwnPropertyDescriptor(e, r);
          _ && Object.defineProperty(n, r, _.get ? _ : {
            enumerable: !0,
            get: () => e[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var a = { exports: {} };
(function(n, s) {
  (function(o, e) {
    n.exports = e(m);
  })(i, function(o) {
    function e(t) {
      return t && typeof t == "object" && "default" in t ? t : { default: t };
    }
    var r = e(o), _ = { name: "lb", weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"), months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), weekStart: 1, weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"), monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"), weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"), ordinal: function(t) {
      return t;
    }, formats: { LT: "H:mm [Auer]", LTS: "H:mm:ss [Auer]", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm [Auer]", LLLL: "dddd, D. MMMM YYYY H:mm [Auer]" } };
    return r.default.locale(_, null, !0), _;
  });
})(a);
var u = a.exports;
const c = /* @__PURE__ */ l(u), d = /* @__PURE__ */ M({
  __proto__: null,
  default: c
}, [u]);
export {
  d as l
};
