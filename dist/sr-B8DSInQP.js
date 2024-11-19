import { g as f, c as g } from "./_commonjsHelpers-DaMA6jEr.js";
import M from "dayjs";
function v(d, m) {
  for (var n = 0; n < m.length; n++) {
    const t = m[n];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const a in t)
        if (a !== "default" && !(a in d)) {
          const r = Object.getOwnPropertyDescriptor(t, a);
          r && Object.defineProperty(d, a, r.get ? r : {
            enumerable: !0,
            get: () => t[a]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(d, Symbol.toStringTag, { value: "Module" }));
}
var l = { exports: {} };
(function(d, m) {
  (function(n, t) {
    d.exports = t(M);
  })(g, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var a = t(n), r = { words: { m: ["jedan minut", "jednog minuta"], mm: ["%d minut", "%d minuta", "%d minuta"], h: ["jedan sat", "jednog sata"], hh: ["%d sat", "%d sata", "%d sati"], d: ["jedan dan", "jednog dana"], dd: ["%d dan", "%d dana", "%d dana"], M: ["jedan mesec", "jednog meseca"], MM: ["%d mesec", "%d meseca", "%d meseci"], y: ["jednu godinu", "jedne godine"], yy: ["%d godinu", "%d godine", "%d godina"] }, correctGrammarCase: function(e, o) {
      return e % 10 >= 1 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? e % 10 == 1 ? o[0] : o[1] : o[2];
    }, relativeTimeFormatter: function(e, o, i, p) {
      var s = r.words[i];
      if (i.length === 1) return i === "y" && o ? "jedna godina" : p || o ? s[0] : s[1];
      var _ = r.correctGrammarCase(e, s);
      return i === "yy" && o && _ === "%d godinu" ? e + " godina" : _.replace("%d", e);
    } }, u = { name: "sr", weekdays: "Nedelja_Ponedeljak_Utorak_Sreda_Četvrtak_Petak_Subota".split("_"), weekdaysShort: "Ned._Pon._Uto._Sre._Čet._Pet._Sub.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), months: "Januar_Februar_Mart_April_Maj_Jun_Jul_Avgust_Septembar_Oktobar_Novembar_Decembar".split("_"), monthsShort: "Jan._Feb._Mar._Apr._Maj_Jun_Jul_Avg._Sep._Okt._Nov._Dec.".split("_"), weekStart: 1, relativeTime: { future: "za %s", past: "pre %s", s: "nekoliko sekundi", m: r.relativeTimeFormatter, mm: r.relativeTimeFormatter, h: r.relativeTimeFormatter, hh: r.relativeTimeFormatter, d: r.relativeTimeFormatter, dd: r.relativeTimeFormatter, M: r.relativeTimeFormatter, MM: r.relativeTimeFormatter, y: r.relativeTimeFormatter, yy: r.relativeTimeFormatter }, ordinal: function(e) {
      return e + ".";
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "D. M. YYYY.", LL: "D. MMMM YYYY.", LLL: "D. MMMM YYYY. H:mm", LLLL: "dddd, D. MMMM YYYY. H:mm" } };
    return a.default.locale(u, null, !0), u;
  });
})(l);
var c = l.exports;
const j = /* @__PURE__ */ f(c), Y = /* @__PURE__ */ v({
  __proto__: null,
  default: j
}, [c]);
export {
  Y as s
};
