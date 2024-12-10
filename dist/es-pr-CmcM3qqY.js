import { g as m, c as u } from "./_commonjsHelpers-DaMA6jEr.js";
import d from "dayjs";
function l(n, a) {
  for (var t = 0; t < a.length; t++) {
    const e = a[t];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in n)) {
          const s = Object.getOwnPropertyDescriptor(e, r);
          s && Object.defineProperty(n, r, s.get ? s : {
            enumerable: !0,
            get: () => e[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var _ = { exports: {} };
(function(n, a) {
  (function(t, e) {
    n.exports = e(d);
  })(u, function(t) {
    function e(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var r = e(t), s = { name: "es-pr", monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), weekStart: 1, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "MM/DD/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY h:mm A", LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinal: function(o) {
      return o + "º";
    } };
    return r.default.locale(s, null, !0), s;
  });
})(_);
var i = _.exports;
const f = /* @__PURE__ */ m(i), M = /* @__PURE__ */ l({
  __proto__: null,
  default: f
}, [i]);
export {
  M as e
};
