import { g as u, c as p } from "./_commonjsHelpers-DaMA6jEr.js";
import f from "dayjs";
function D(a, l) {
  for (var i = 0; i < l.length; i++) {
    const t = l[i];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const s in t)
        if (s !== "default" && !(s in a)) {
          const r = Object.getOwnPropertyDescriptor(t, s);
          r && Object.defineProperty(a, s, r.get ? r : {
            enumerable: !0,
            get: () => t[s]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }));
}
var m = { exports: {} };
(function(a, l) {
  (function(i, t) {
    a.exports = t(f);
  })(p, function(i) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(i), r = "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"), o = "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"), Y = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/, M = function(e, _) {
      return Y.test(_) ? r[e.month()] : o[e.month()];
    };
    M.s = o, M.f = r;
    var d = { name: "lt", weekdays: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"), weekdaysShort: "sek_pir_ant_tre_ket_pen_šeš".split("_"), weekdaysMin: "s_p_a_t_k_pn_š".split("_"), months: M, monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"), ordinal: function(e) {
      return e + ".";
    }, weekStart: 1, relativeTime: { future: "už %s", past: "prieš %s", s: "kelias sekundes", m: "minutę", mm: "%d minutes", h: "valandą", hh: "%d valandas", d: "dieną", dd: "%d dienas", M: "mėnesį", MM: "%d mėnesius", y: "metus", yy: "%d metus" }, format: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" } };
    return s.default.locale(d, null, !0), d;
  });
})(m);
var n = m.exports;
const g = /* @__PURE__ */ u(n), L = /* @__PURE__ */ D({
  __proto__: null,
  default: g
}, [n]);
export {
  L as l
};
