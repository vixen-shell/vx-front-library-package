import { g as f, c } from "./_commonjsHelpers-DaMA6jEr.js";
import M from "dayjs";
function k(u, i) {
  for (var s = 0; s < i.length; s++) {
    const a = i[s];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const r in a)
        if (r !== "default" && !(r in u)) {
          const e = Object.getOwnPropertyDescriptor(a, r);
          e && Object.defineProperty(u, r, e.get ? e : {
            enumerable: !0,
            get: () => a[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(u, Symbol.toStringTag, { value: "Module" }));
}
var m = { exports: {} };
(function(u, i) {
  (function(s, a) {
    u.exports = a(M);
  })(c, function(s) {
    function a(t) {
      return t && typeof t == "object" && "default" in t ? t : { default: t };
    }
    var r = a(s);
    function e(t, p, n, l) {
      var o = { s: ["mõne sekundi", "mõni sekund", "paar sekundit"], m: ["ühe minuti", "üks minut"], mm: ["%d minuti", "%d minutit"], h: ["ühe tunni", "tund aega", "üks tund"], hh: ["%d tunni", "%d tundi"], d: ["ühe päeva", "üks päev"], M: ["kuu aja", "kuu aega", "üks kuu"], MM: ["%d kuu", "%d kuud"], y: ["ühe aasta", "aasta", "üks aasta"], yy: ["%d aasta", "%d aastat"] };
      return p ? (o[n][2] ? o[n][2] : o[n][1]).replace("%d", t) : (l ? o[n][0] : o[n][1]).replace("%d", t);
    }
    var _ = { name: "et", weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"), weekdaysShort: "P_E_T_K_N_R_L".split("_"), weekdaysMin: "P_E_T_K_N_R_L".split("_"), months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"), monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"), ordinal: function(t) {
      return t + ".";
    }, weekStart: 1, relativeTime: { future: "%s pärast", past: "%s tagasi", s: e, m: e, mm: e, h: e, hh: e, d: e, dd: "%d päeva", M: e, MM: e, y: e, yy: e }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" } };
    return r.default.locale(_, null, !0), _;
  });
})(m);
var d = m.exports;
const v = /* @__PURE__ */ f(d), Y = /* @__PURE__ */ k({
  __proto__: null,
  default: v
}, [d]);
export {
  Y as e
};
