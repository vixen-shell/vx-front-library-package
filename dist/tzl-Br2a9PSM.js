import { g as s, c as u } from "./_commonjsHelpers-DaMA6jEr.js";
import M from "dayjs";
function c(o, i) {
  for (var a = 0; a < i.length; a++) {
    const t = i[a];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const e in t)
        if (e !== "default" && !(e in o)) {
          const _ = Object.getOwnPropertyDescriptor(t, e);
          _ && Object.defineProperty(o, e, _.get ? _ : {
            enumerable: !0,
            get: () => t[e]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var n = { exports: {} };
(function(o, i) {
  (function(a, t) {
    o.exports = t(M);
  })(u, function(a) {
    function t(r) {
      return r && typeof r == "object" && "default" in r ? r : { default: r };
    }
    var e = t(a), _ = { name: "tzl", weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"), months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"), weekStart: 1, weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"), monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"), weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"), ordinal: function(r) {
      return r;
    }, formats: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "D. MMMM [dallas] YYYY", LLL: "D. MMMM [dallas] YYYY HH.mm", LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm" } };
    return e.default.locale(_, null, !0), _;
  });
})(n);
var l = n.exports;
const f = /* @__PURE__ */ s(l), d = /* @__PURE__ */ c({
  __proto__: null,
  default: f
}, [l]);
export {
  d as t
};
