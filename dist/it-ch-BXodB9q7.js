import { g as m, c as u } from "./_commonjsHelpers-DaMA6jEr.js";
import d from "dayjs";
function l(i, a) {
  for (var r = 0; r < a.length; r++) {
    const e = a[r];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in i)) {
          const n = Object.getOwnPropertyDescriptor(e, t);
          n && Object.defineProperty(i, t, n.get ? n : {
            enumerable: !0,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }));
}
var _ = { exports: {} };
(function(i, a) {
  (function(r, e) {
    i.exports = e(d);
  })(u, function(r) {
    function e(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var t = e(r), n = { name: "it-ch", weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"), months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"), weekStart: 1, weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"), monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"), weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "tra %s", past: "%s fa", s: "alcuni secondi", m: "un minuto", mm: "%d minuti", h: "un'ora", hh: "%d ore", d: "un giorno", dd: "%d giorni", M: "un mese", MM: "%d mesi", y: "un anno", yy: "%d anni" } };
    return t.default.locale(n, null, !0), n;
  });
})(_);
var s = _.exports;
const f = /* @__PURE__ */ m(s), p = /* @__PURE__ */ l({
  __proto__: null,
  default: f
}, [s]);
export {
  p as i
};
