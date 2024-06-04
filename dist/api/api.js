var u = Object.defineProperty;
var f = (a, e, r) => e in a ? u(a, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : a[e] = r;
var s = (a, e, r) => (f(a, typeof e != "symbol" ? e + "" : e, r), r);
import { ApiRoutes as n } from "./ApiRoutes.js";
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
    throw console.error(r), r;
  }
}
const t = class t {
  static async init(e) {
    if (!await t.ping())
      throw new Error("Unable to acces Vixen Api.");
    t.featureNames = (await o(n.features_names, !0)).names, t.currentFeatureName = e, t._stateEvents = new w(
      n.feature_state_socket(t.currentFeatureName)
    ), t._stateEvents.connect(), t._isInit = !0;
  }
  static get isInit() {
    return t._isInit;
  }
  static async ping() {
    try {
      return !!(await fetch(n.ping)).ok;
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
    try {
      return (await o(
        n.feature_state(t.currentFeatureName)
      )).state;
    } catch (e) {
      return console.warn(e), {};
    }
  }
};
s(t, "featureNames"), s(t, "currentFeatureName"), s(t, "_stateEvents"), s(t, "_isInit", !1);
let i = t;
export {
  i as Api
};
