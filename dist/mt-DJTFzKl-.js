import { g as u, c as m } from "./_commonjsHelpers-DaMA6jEr.js";
import l from "dayjs";
function d(i, o) {
  for (var a = 0; a < o.length; a++) {
    const t = o[a];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const e in t)
        if (e !== "default" && !(e in i)) {
          const n = Object.getOwnPropertyDescriptor(t, e);
          n && Object.defineProperty(i, e, n.get ? n : {
            enumerable: !0,
            get: () => t[e]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }));
}
var _ = { exports: {} };
(function(i, o) {
  (function(a, t) {
    i.exports = t(l);
  })(m, function(a) {
    function t(r) {
      return r && typeof r == "object" && "default" in r ? r : { default: r };
    }
    var e = t(a), n = { name: "mt", weekdays: "Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split("_"), months: "Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split("_"), weekStart: 1, weekdaysShort: "Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"), monthsShort: "Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split("_"), weekdaysMin: "Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"), ordinal: function(r) {
      return r;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "f’ %s", past: "%s ilu", s: "ftit sekondi", m: "minuta", mm: "%d minuti", h: "siegħa", hh: "%d siegħat", d: "ġurnata", dd: "%d ġranet", M: "xahar", MM: "%d xhur", y: "sena", yy: "%d sni" } };
    return e.default.locale(n, null, !0), n;
  });
})(_);
var s = _.exports;
const f = /* @__PURE__ */ u(s), c = /* @__PURE__ */ d({
  __proto__: null,
  default: f
}, [s]);
export {
  c as m
};
