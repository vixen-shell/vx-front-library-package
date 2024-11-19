import { g as l, c as m } from "./_commonjsHelpers-DaMA6jEr.js";
import u from "dayjs";
function L(s, i) {
  for (var a = 0; a < i.length; a++) {
    const e = i[a];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in s)) {
          const o = Object.getOwnPropertyDescriptor(e, t);
          o && Object.defineProperty(s, t, o.get ? o : {
            enumerable: !0,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }));
}
var r = { exports: {} };
(function(s, i) {
  (function(a, e) {
    s.exports = e(u);
  })(m, function(a) {
    function e(n) {
      return n && typeof n == "object" && "default" in n ? n : { default: n };
    }
    var t = e(a), o = { name: "ss", weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"), months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"), weekStart: 1, weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"), monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"), weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"), ordinal: function(n) {
      return n;
    }, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, relativeTime: { future: "nga %s", past: "wenteka nga %s", s: "emizuzwana lomcane", m: "umzuzu", mm: "%d emizuzu", h: "lihora", hh: "%d emahora", d: "lilanga", dd: "%d emalanga", M: "inyanga", MM: "%d tinyanga", y: "umnyaka", yy: "%d iminyaka" } };
    return t.default.locale(o, null, !0), o;
  });
})(r);
var _ = r.exports;
const d = /* @__PURE__ */ l(_), c = /* @__PURE__ */ L({
  __proto__: null,
  default: d
}, [_]);
export {
  c as s
};
