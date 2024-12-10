import { g as i, c as d } from "./_commonjsHelpers-DaMA6jEr.js";
import l from "dayjs";
function u(a, _) {
  for (var o = 0; o < _.length; o++) {
    const e = _[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in a)) {
          const r = Object.getOwnPropertyDescriptor(e, t);
          r && Object.defineProperty(a, t, r.get ? r : {
            enumerable: !0,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }));
}
var s = { exports: {} };
(function(a, _) {
  (function(o, e) {
    a.exports = e(l);
  })(d, function(o) {
    function e(n) {
      return n && typeof n == "object" && "default" in n ? n : { default: n };
    }
    var t = e(o), r = { name: "ht", weekdays: "dimanch_lendi_madi_mèkredi_jedi_vandredi_samdi".split("_"), months: "janvye_fevriye_mas_avril_me_jen_jiyè_out_septanm_oktòb_novanm_desanm".split("_"), weekdaysShort: "dim._len._mad._mèk._jed._van._sam.".split("_"), monthsShort: "jan._fev._mas_avr._me_jen_jiyè._out_sept._okt._nov._des.".split("_"), weekdaysMin: "di_le_ma_mè_je_va_sa".split("_"), ordinal: function(n) {
      return n;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "nan %s", past: "sa gen %s", s: "kèk segond", m: "yon minit", mm: "%d minit", h: "inèdtan", hh: "%d zè", d: "yon jou", dd: "%d jou", M: "yon mwa", MM: "%d mwa", y: "yon ane", yy: "%d ane" } };
    return t.default.locale(r, null, !0), r;
  });
})(s);
var m = s.exports;
const f = /* @__PURE__ */ i(m), y = /* @__PURE__ */ u({
  __proto__: null,
  default: f
}, [m]);
export {
  y as h
};
