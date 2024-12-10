import { g as s, c as f } from "./_commonjsHelpers-DaMA6jEr.js";
import d from "dayjs";
function _(n, u) {
  for (var r = 0; r < u.length; r++) {
    const a = u[r];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const e in a)
        if (e !== "default" && !(e in n)) {
          const o = Object.getOwnPropertyDescriptor(a, e);
          o && Object.defineProperty(n, e, o.get ? o : {
            enumerable: !0,
            get: () => a[e]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var i = { exports: {} };
(function(n, u) {
  (function(r, a) {
    n.exports = a(d);
  })(f, function(r) {
    function a(t) {
      return t && typeof t == "object" && "default" in t ? t : { default: t };
    }
    var e = a(r), o = { name: "rw", weekdays: "Ku Cyumweru_Kuwa Mbere_Kuwa Kabiri_Kuwa Gatatu_Kuwa Kane_Kuwa Gatanu_Kuwa Gatandatu".split("_"), months: "Mutarama_Gashyantare_Werurwe_Mata_Gicurasi_Kamena_Nyakanga_Kanama_Nzeri_Ukwakira_Ugushyingo_Ukuboza".split("_"), relativeTime: { future: "mu %s", past: "%s", s: "amasegonda", m: "Umunota", mm: "%d iminota", h: "isaha", hh: "%d amasaha", d: "Umunsi", dd: "%d iminsi", M: "ukwezi", MM: "%d amezi", y: "umwaka", yy: "%d imyaka" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, ordinal: function(t) {
      return t;
    } };
    return e.default.locale(o, null, !0), o;
  });
})(i);
var m = i.exports;
const l = /* @__PURE__ */ s(m), p = /* @__PURE__ */ _({
  __proto__: null,
  default: l
}, [m]);
export {
  p as r
};
