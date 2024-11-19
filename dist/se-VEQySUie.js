import { g as _, c as i } from "./_commonjsHelpers-DaMA6jEr.js";
import d from "dayjs";
function l(s, r) {
  for (var o = 0; o < r.length; o++) {
    const t = r[o];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const e in t)
        if (e !== "default" && !(e in s)) {
          const n = Object.getOwnPropertyDescriptor(t, e);
          n && Object.defineProperty(s, e, n.get ? n : {
            enumerable: !0,
            get: () => t[e]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }));
}
var u = { exports: {} };
(function(s, r) {
  (function(o, t) {
    s.exports = t(d);
  })(i, function(o) {
    function t(a) {
      return a && typeof a == "object" && "default" in a ? a : { default: a };
    }
    var e = t(o), n = { name: "se", weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"), months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"), weekStart: 1, weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"), monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"), weekdaysMin: "s_v_m_g_d_b_L".split("_"), ordinal: function(a) {
      return a;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "MMMM D. [b.] YYYY", LLL: "MMMM D. [b.] YYYY [ti.] HH:mm", LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm" }, relativeTime: { future: "%s geažes", past: "maŋit %s", s: "moadde sekunddat", m: "okta minuhta", mm: "%d minuhtat", h: "okta diimmu", hh: "%d diimmut", d: "okta beaivi", dd: "%d beaivvit", M: "okta mánnu", MM: "%d mánut", y: "okta jahki", yy: "%d jagit" } };
    return e.default.locale(n, null, !0), n;
  });
})(u);
var m = u.exports;
const g = /* @__PURE__ */ _(m), p = /* @__PURE__ */ l({
  __proto__: null,
  default: g
}, [m]);
export {
  p as s
};
