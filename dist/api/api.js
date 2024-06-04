var u = Object.defineProperty;
var f = (a, e, r) => e in a ? u(a, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : a[e] = r;
var n = (a, e, r) => (f(a, typeof e != "symbol" ? e + "" : e, r), r);
import { ApiRoutes as s } from "./ApiRoutes.js";
import { SocketEventHandler as w } from "./SocketEventHandler.js";
async function o(a, e = !1) {
  if (!e && !i.isInit)
    throw new Error("Api not initialized");
  try {
    const r = await fetch(a);
    if (!r.ok) {
      const c = await r.json();
      throw new Error(c.message || "Request Error");
    }
    return await r.json();
  } catch (r) {
    throw r;
  }
}
const t = class t {
  static async init(e) {
    if (!await t.ping())
      throw new Error("Unable to acces Vixen Api.");
    t.featureNames = (await o(s.features_names, !0)).names, t.currentFeatureName = e, t._stateEvents = new w(
      s.feature_state_socket(t.currentFeatureName)
    ), t._stateEvents.connect(), t._isInit = !0;
  }
  static get isInit() {
    return t._isInit;
  }
  static async ping() {
    try {
      return !!(await fetch(s.ping)).ok;
    } catch {
      return !1;
    }
  }
  static get stateEvents() {
    if (t._stateEvents)
      return t._stateEvents;
    throw new Error("Api not initialized");
  }
  static async getInitialState() {
    return (await o(s.feature_state(t.currentFeatureName))).state || null;
  }
};
n(t, "featureNames"), n(t, "currentFeatureName"), n(t, "_stateEvents"), n(t, "_isInit", !1);
let i = t;
export {
  i as Api
};
