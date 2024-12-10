import { g as f, c as m } from "./_commonjsHelpers-DaMA6jEr.js";
import l from "dayjs";
function d(_, i) {
  for (var s = 0; s < i.length; s++) {
    const o = i[s];
    if (typeof o != "string" && !Array.isArray(o)) {
      for (const u in o)
        if (u !== "default" && !(u in _)) {
          const a = Object.getOwnPropertyDescriptor(o, u);
          a && Object.defineProperty(_, u, a.get ? a : {
            enumerable: !0,
            get: () => o[u]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(_, Symbol.toStringTag, { value: "Module" }));
}
var c = { exports: {} };
(function(_, i) {
  (function(s, o) {
    _.exports = o(l);
  })(m, function(s) {
    function o(t) {
      return t && typeof t == "object" && "default" in t ? t : { default: t };
    }
    var u = o(s), a = { name: "hu", weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"), weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"), weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"), months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"), monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"), ordinal: function(t) {
      return t + ".";
    }, weekStart: 1, relativeTime: { future: "%s múlva", past: "%s", s: function(t, e, n, r) {
      return "néhány másodperc" + (r || e ? "" : "e");
    }, m: function(t, e, n, r) {
      return "egy perc" + (r || e ? "" : "e");
    }, mm: function(t, e, n, r) {
      return t + " perc" + (r || e ? "" : "e");
    }, h: function(t, e, n, r) {
      return "egy " + (r || e ? "óra" : "órája");
    }, hh: function(t, e, n, r) {
      return t + " " + (r || e ? "óra" : "órája");
    }, d: function(t, e, n, r) {
      return "egy " + (r || e ? "nap" : "napja");
    }, dd: function(t, e, n, r) {
      return t + " " + (r || e ? "nap" : "napja");
    }, M: function(t, e, n, r) {
      return "egy " + (r || e ? "hónap" : "hónapja");
    }, MM: function(t, e, n, r) {
      return t + " " + (r || e ? "hónap" : "hónapja");
    }, y: function(t, e, n, r) {
      return "egy " + (r || e ? "év" : "éve");
    }, yy: function(t, e, n, r) {
      return t + " " + (r || e ? "év" : "éve");
    } }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "YYYY.MM.DD.", LL: "YYYY. MMMM D.", LLL: "YYYY. MMMM D. H:mm", LLLL: "YYYY. MMMM D., dddd H:mm" } };
    return u.default.locale(a, null, !0), a;
  });
})(c);
var p = c.exports;
const h = /* @__PURE__ */ f(p), M = /* @__PURE__ */ d({
  __proto__: null,
  default: h
}, [p]);
export {
  M as h
};
