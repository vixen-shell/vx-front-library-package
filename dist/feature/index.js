var g = Object.defineProperty;
var f = (r, t, e) => t in r ? g(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var n = (r, t, e) => (f(r, typeof t != "symbol" ? t + "" : t, e), e);
import { jsx as l } from "react/jsx-runtime";
import { Routes as L, useRouter as m, RouterLink as c } from "../router/router.js";
import { GlobalState as p, useGlobalState as R } from "../state/state.js";
import { Api as S } from "../api/api.js";
import { useLogListener as d, useLogHistory as w } from "../api/hooks.js";
import y from "./FeatureRender.js";
function i(r, t) {
  if (!s.isInit)
    throw new Error(`Cannot use '${r}' before feature initialization`);
  return t;
}
const o = class o {
  static init(t) {
    if (o.isInit)
      throw new Error("Feature is already initialized");
    L.define(t);
    const e = (a, u) => (p.initialState = u, /* @__PURE__ */ l(y, { initialRoute: a }));
    return o.isInit = !0, e;
  }
  static get Link() {
    return i("Link", c);
  }
  static get log() {
    return i("log", S.Logger.log);
  }
  // static get Events() {
  //     return $<typeof Api.events>('Events', Api.events)
  // }
};
n(o, "isInit", !1), n(o, "Use", {
  get Router() {
    return i("Router", m);
  },
  get State() {
    return i("State", R);
  },
  get LogListener() {
    return i("LogListener", d);
  },
  get LogHistory() {
    return i("LogHistory", w);
  }
});
let s = o;
export {
  s as Feature
};
