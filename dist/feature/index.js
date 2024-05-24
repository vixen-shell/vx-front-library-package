var f = Object.defineProperty;
var l = (e, t, i) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i;
var n = (e, t, i) => (l(e, typeof t != "symbol" ? t + "" : t, i), i);
import { jsx as m } from "react/jsx-runtime";
import { Routes as c, useRouter as R, RouterLink as p } from "../router/router.js";
import { GlobalState as S, useGlobalState as d } from "../state/state.js";
import w from "./FeatureRender.js";
function o(e, t) {
  if (!a.isInit)
    throw new Error(`Cannot use '${e}' before feature initialization`);
  return t;
}
const r = class r {
  static init(t) {
    if (r.isInit)
      throw new Error("Feature is already initialized");
    c.define(t);
    const i = (s, u) => (S.initialState = u, /* @__PURE__ */ m(w, { initialRoute: s }));
    return r.isInit = !0, i;
  }
  static get Link() {
    return o("Link", p);
  }
};
n(r, "isInit", !1), n(r, "Use", {
  get Router() {
    return o("Router", R);
  },
  get State() {
    return o("State", d);
  }
});
let a = r;
export {
  a as Feature
};
