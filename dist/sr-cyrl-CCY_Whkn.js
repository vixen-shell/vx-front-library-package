import { g as y, c as p } from "./_commonjsHelpers-DaMA6jEr.js";
import M from "dayjs";
function v(i, s) {
  for (var m = 0; m < s.length; m++) {
    const t = s[m];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const o in t)
        if (o !== "default" && !(o in i)) {
          const e = Object.getOwnPropertyDescriptor(t, o);
          e && Object.defineProperty(i, o, e.get ? e : {
            enumerable: !0,
            get: () => t[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }));
}
var u = { exports: {} };
(function(i, s) {
  (function(m, t) {
    i.exports = t(M);
  })(p, function(m) {
    function t(r) {
      return r && typeof r == "object" && "default" in r ? r : { default: r };
    }
    var o = t(m), e = { words: { m: ["један минут", "једног минута"], mm: ["%d минут", "%d минута", "%d минута"], h: ["један сат", "једног сата"], hh: ["%d сат", "%d сата", "%d сати"], d: ["један дан", "једног дана"], dd: ["%d дан", "%d дана", "%d дана"], M: ["један месец", "једног месеца"], MM: ["%d месец", "%d месеца", "%d месеци"], y: ["једну годину", "једне године"], yy: ["%d годину", "%d године", "%d година"] }, correctGrammarCase: function(r, a) {
      return r % 10 >= 1 && r % 10 <= 4 && (r % 100 < 10 || r % 100 >= 20) ? r % 10 == 1 ? a[0] : a[1] : a[2];
    }, relativeTimeFormatter: function(r, a, _, f) {
      var n = e.words[_];
      if (_.length === 1) return _ === "y" && a ? "једна година" : f || a ? n[0] : n[1];
      var d = e.correctGrammarCase(r, n);
      return _ === "yy" && a && d === "%d годину" ? r + " година" : d.replace("%d", r);
    } }, l = { name: "sr-cyrl", weekdays: "Недеља_Понедељак_Уторак_Среда_Четвртак_Петак_Субота".split("_"), weekdaysShort: "Нед._Пон._Уто._Сре._Чет._Пет._Суб.".split("_"), weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"), months: "Јануар_Фебруар_Март_Април_Мај_Јун_Јул_Август_Септембар_Октобар_Новембар_Децембар".split("_"), monthsShort: "Јан._Феб._Мар._Апр._Мај_Јун_Јул_Авг._Сеп._Окт._Нов._Дец.".split("_"), weekStart: 1, relativeTime: { future: "за %s", past: "пре %s", s: "неколико секунди", m: e.relativeTimeFormatter, mm: e.relativeTimeFormatter, h: e.relativeTimeFormatter, hh: e.relativeTimeFormatter, d: e.relativeTimeFormatter, dd: e.relativeTimeFormatter, M: e.relativeTimeFormatter, MM: e.relativeTimeFormatter, y: e.relativeTimeFormatter, yy: e.relativeTimeFormatter }, ordinal: function(r) {
      return r + ".";
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "D. M. YYYY.", LL: "D. MMMM YYYY.", LLL: "D. MMMM YYYY. H:mm", LLLL: "dddd, D. MMMM YYYY. H:mm" } };
    return o.default.locale(l, null, !0), l;
  });
})(u);
var c = u.exports;
const Y = /* @__PURE__ */ y(c), F = /* @__PURE__ */ v({
  __proto__: null,
  default: Y
}, [c]);
export {
  F as s
};
