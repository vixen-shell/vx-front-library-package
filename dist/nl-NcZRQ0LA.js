import { g as u, c as i } from "./_commonjsHelpers-DaMA6jEr.js";
import m from "dayjs";
function l(o, _) {
  for (var n = 0; n < _.length; n++) {
    const r = _[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const t in r)
        if (t !== "default" && !(t in o)) {
          const a = Object.getOwnPropertyDescriptor(r, t);
          a && Object.defineProperty(o, t, a.get ? a : {
            enumerable: !0,
            get: () => r[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var d = { exports: {} };
(function(o, _) {
  (function(n, r) {
    o.exports = r(m);
  })(i, function(n) {
    function r(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var t = r(n), a = { name: "nl", weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"), weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"), weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"), months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"), ordinal: function(e) {
      return "[" + e + (e === 1 || e === 8 || e >= 20 ? "ste" : "de") + "]";
    }, weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "over %s", past: "%s geleden", s: "een paar seconden", m: "een minuut", mm: "%d minuten", h: "een uur", hh: "%d uur", d: "een dag", dd: "%d dagen", M: "een maand", MM: "%d maanden", y: "een jaar", yy: "%d jaar" } };
    return t.default.locale(a, null, !0), a;
  });
})(d);
var s = d.exports;
const f = /* @__PURE__ */ u(s), g = /* @__PURE__ */ l({
  __proto__: null,
  default: f
}, [s]);
export {
  g as n
};
