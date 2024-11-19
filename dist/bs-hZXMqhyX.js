import { g as p, c as i } from "./_commonjsHelpers-DaMA6jEr.js";
import l from "dayjs";
function m(_, n) {
  for (var o = 0; o < n.length; o++) {
    const e = n[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in _)) {
          const a = Object.getOwnPropertyDescriptor(e, t);
          a && Object.defineProperty(_, t, a.get ? a : {
            enumerable: !0,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(_, Symbol.toStringTag, { value: "Module" }));
}
var s = { exports: {} };
(function(_, n) {
  (function(o, e) {
    _.exports = e(l);
  })(i, function(o) {
    function e(r) {
      return r && typeof r == "object" && "default" in r ? r : { default: r };
    }
    var t = e(o), a = { name: "bs", weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"), months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"), weekStart: 1, weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"), monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), ordinal: function(r) {
      return r;
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" } };
    return t.default.locale(a, null, !0), a;
  });
})(s);
var u = s.exports;
const f = /* @__PURE__ */ p(u), b = /* @__PURE__ */ m({
  __proto__: null,
  default: f
}, [u]);
export {
  b
};
