import { g as i, c as m } from "./_commonjsHelpers-DaMA6jEr.js";
import d from "dayjs";
function l(n, a) {
  for (var r = 0; r < a.length; r++) {
    const e = a[r];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const o in e)
        if (o !== "default" && !(o in n)) {
          const s = Object.getOwnPropertyDescriptor(e, o);
          s && Object.defineProperty(n, o, s.get ? s : {
            enumerable: !0,
            get: () => e[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var _ = { exports: {} };
(function(n, a) {
  (function(r, e) {
    n.exports = e(d);
  })(m, function(r) {
    function e(t) {
      return t && typeof t == "object" && "default" in t ? t : { default: t };
    }
    var o = e(r), s = { name: "es-us", weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinal: function(t) {
      return t + "º";
    }, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "MM/DD/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY h:mm A", LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A" } };
    return o.default.locale(s, null, !0), s;
  });
})(_);
var u = _.exports;
const f = /* @__PURE__ */ i(u), M = /* @__PURE__ */ l({
  __proto__: null,
  default: f
}, [u]);
export {
  M as e
};
