import { g as f, c as k } from "./_commonjsHelpers-DaMA6jEr.js";
import M from "dayjs";
function y(u, _) {
  for (var m = 0; m < _.length; m++) {
    const a = _[m];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const i in a)
        if (i !== "default" && !(i in u)) {
          const s = Object.getOwnPropertyDescriptor(a, i);
          s && Object.defineProperty(u, i, s.get ? s : {
            enumerable: !0,
            get: () => a[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(u, Symbol.toStringTag, { value: "Module" }));
}
var d = { exports: {} };
(function(u, _) {
  (function(m, a) {
    u.exports = a(M);
  })(k, function(m) {
    function a(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var i = a(m);
    function s(e) {
      return e > 1 && e < 5 && ~~(e / 10) != 1;
    }
    function r(e, t, l, n) {
      var o = e + " ";
      switch (l) {
        case "s":
          return t || n ? "pár sekúnd" : "pár sekundami";
        case "m":
          return t ? "minúta" : n ? "minútu" : "minútou";
        case "mm":
          return t || n ? o + (s(e) ? "minúty" : "minút") : o + "minútami";
        case "h":
          return t ? "hodina" : n ? "hodinu" : "hodinou";
        case "hh":
          return t || n ? o + (s(e) ? "hodiny" : "hodín") : o + "hodinami";
        case "d":
          return t || n ? "deň" : "dňom";
        case "dd":
          return t || n ? o + (s(e) ? "dni" : "dní") : o + "dňami";
        case "M":
          return t || n ? "mesiac" : "mesiacom";
        case "MM":
          return t || n ? o + (s(e) ? "mesiace" : "mesiacov") : o + "mesiacmi";
        case "y":
          return t || n ? "rok" : "rokom";
        case "yy":
          return t || n ? o + (s(e) ? "roky" : "rokov") : o + "rokmi";
      }
    }
    var c = { name: "sk", weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"), weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"), weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"), months: "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"), monthsShort: "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_"), weekStart: 1, yearStart: 4, ordinal: function(e) {
      return e + ".";
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd D. MMMM YYYY H:mm", l: "D. M. YYYY" }, relativeTime: { future: "za %s", past: "pred %s", s: r, m: r, mm: r, h: r, hh: r, d: r, dd: r, M: r, MM: r, y: r, yy: r } };
    return i.default.locale(c, null, !0), c;
  });
})(d);
var p = d.exports;
const Y = /* @__PURE__ */ f(p), j = /* @__PURE__ */ y({
  __proto__: null,
  default: Y
}, [p]);
export {
  j as s
};
