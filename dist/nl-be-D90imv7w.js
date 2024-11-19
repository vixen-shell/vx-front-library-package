import { g as u, c as i } from "./_commonjsHelpers-DaMA6jEr.js";
import m from "dayjs";
function l(o, _) {
  for (var n = 0; n < _.length; n++) {
    const e = _[n];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in o)) {
          const a = Object.getOwnPropertyDescriptor(e, r);
          a && Object.defineProperty(o, r, a.get ? a : {
            enumerable: !0,
            get: () => e[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var d = { exports: {} };
(function(o, _) {
  (function(n, e) {
    o.exports = e(m);
  })(i, function(n) {
    function e(t) {
      return t && typeof t == "object" && "default" in t ? t : { default: t };
    }
    var r = e(n), a = { name: "nl-be", weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"), months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"), monthsShort: "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"), weekStart: 1, weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"), weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"), ordinal: function(t) {
      return t;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "over %s", past: "%s geleden", s: "een paar seconden", m: "één minuut", mm: "%d minuten", h: "één uur", hh: "%d uur", d: "één dag", dd: "%d dagen", M: "één maand", MM: "%d maanden", y: "één jaar", yy: "%d jaar" } };
    return r.default.locale(a, null, !0), a;
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
