import { g as a, c as i } from "./_commonjsHelpers-DaMA6jEr.js";
import f from "dayjs";
function u(n, l) {
  for (var o = 0; o < l.length; o++) {
    const t = l[o];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const r in t)
        if (r !== "default" && !(r in n)) {
          const _ = Object.getOwnPropertyDescriptor(t, r);
          _ && Object.defineProperty(n, r, _.get ? _ : {
            enumerable: !0,
            get: () => t[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var m = { exports: {} };
(function(n, l) {
  (function(o, t) {
    n.exports = t(f);
  })(i, function(o) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var r = t(o), _ = { name: "zh-hk", months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), ordinal: function(e, d) {
      return d === "W" ? e + "週" : e + "日";
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日 HH:mm", LLLL: "YYYY年M月D日dddd HH:mm", l: "YYYY/M/D", ll: "YYYY年M月D日", lll: "YYYY年M月D日 HH:mm", llll: "YYYY年M月D日dddd HH:mm" }, relativeTime: { future: "%s內", past: "%s前", s: "幾秒", m: "一分鐘", mm: "%d 分鐘", h: "一小時", hh: "%d 小時", d: "一天", dd: "%d 天", M: "一個月", MM: "%d 個月", y: "一年", yy: "%d 年" }, meridiem: function(e, d) {
      var s = 100 * e + d;
      return s < 600 ? "凌晨" : s < 900 ? "早上" : s < 1100 ? "上午" : s < 1300 ? "中午" : s < 1800 ? "下午" : "晚上";
    } };
    return r.default.locale(_, null, !0), _;
  });
})(m);
var Y = m.exports;
const p = /* @__PURE__ */ a(Y), h = /* @__PURE__ */ u({
  __proto__: null,
  default: p
}, [Y]);
export {
  h as z
};
