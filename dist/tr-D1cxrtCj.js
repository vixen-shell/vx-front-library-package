import { g as m, c as l } from "./_commonjsHelpers-DaMA6jEr.js";
import u from "dayjs";
function d(_, o) {
  for (var a = 0; a < o.length; a++) {
    const t = o[a];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const r in t)
        if (r !== "default" && !(r in _)) {
          const s = Object.getOwnPropertyDescriptor(t, r);
          s && Object.defineProperty(_, r, s.get ? s : {
            enumerable: !0,
            get: () => t[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(_, Symbol.toStringTag, { value: "Module" }));
}
var i = { exports: {} };
(function(_, o) {
  (function(a, t) {
    _.exports = t(u);
  })(l, function(a) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var r = t(a), s = { name: "tr", weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"), weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"), weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"), months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"), monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"), weekStart: 1, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "%s sonra", past: "%s önce", s: "birkaç saniye", m: "bir dakika", mm: "%d dakika", h: "bir saat", hh: "%d saat", d: "bir gün", dd: "%d gün", M: "bir ay", MM: "%d ay", y: "bir yıl", yy: "%d yıl" }, ordinal: function(e) {
      return e + ".";
    } };
    return r.default.locale(s, null, !0), s;
  });
})(i);
var n = i.exports;
const f = /* @__PURE__ */ m(n), y = /* @__PURE__ */ d({
  __proto__: null,
  default: f
}, [n]);
export {
  y as t
};
