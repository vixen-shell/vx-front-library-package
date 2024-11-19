import { g as i, c as m } from "./_commonjsHelpers-DaMA6jEr.js";
import l from "dayjs";
function p(s, _) {
  for (var r = 0; r < _.length; r++) {
    const e = _[r];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in s)) {
          const o = Object.getOwnPropertyDescriptor(e, t);
          o && Object.defineProperty(s, t, o.get ? o : {
            enumerable: !0,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }));
}
var a = { exports: {} };
(function(s, _) {
  (function(r, e) {
    s.exports = e(l);
  })(m, function(r) {
    function e(n) {
      return n && typeof n == "object" && "default" in n ? n : { default: n };
    }
    var t = e(r), o = { name: "jv", weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"), months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"), weekStart: 1, weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"), monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"), weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"), ordinal: function(n) {
      return n;
    }, formats: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, relativeTime: { future: "wonten ing %s", past: "%s ingkang kepengker", s: "sawetawis detik", m: "setunggal menit", mm: "%d menit", h: "setunggal jam", hh: "%d jam", d: "sedinten", dd: "%d dinten", M: "sewulan", MM: "%d wulan", y: "setaun", yy: "%d taun" } };
    return t.default.locale(o, null, !0), o;
  });
})(a);
var u = a.exports;
const d = /* @__PURE__ */ i(u), g = /* @__PURE__ */ p({
  __proto__: null,
  default: d
}, [u]);
export {
  g as j
};
