import { g as m, c as s } from "./_commonjsHelpers-DaMA6jEr.js";
import f from "dayjs";
function h(o, n) {
  for (var a = 0; a < n.length; a++) {
    const e = n[a];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in o)) {
          const i = Object.getOwnPropertyDescriptor(e, t);
          i && Object.defineProperty(o, t, i.get ? i : {
            enumerable: !0,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var _ = { exports: {} };
(function(o, n) {
  (function(a, e) {
    o.exports = e(f);
  })(s, function(a) {
    function e(r) {
      return r && typeof r == "object" && "default" in r ? r : { default: r };
    }
    var t = e(a), i = { name: "mi", weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"), months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"), weekStart: 1, weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"), monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"), weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"), ordinal: function(r) {
      return r;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [i] HH:mm", LLLL: "dddd, D MMMM YYYY [i] HH:mm" }, relativeTime: { future: "i roto i %s", past: "%s i mua", s: "te hēkona ruarua", m: "he meneti", mm: "%d meneti", h: "te haora", hh: "%d haora", d: "he ra", dd: "%d ra", M: "he marama", MM: "%d marama", y: "he tau", yy: "%d tau" } };
    return t.default.locale(i, null, !0), i;
  });
})(_);
var u = _.exports;
const l = /* @__PURE__ */ m(u), M = /* @__PURE__ */ h({
  __proto__: null,
  default: l
}, [u]);
export {
  M as m
};
