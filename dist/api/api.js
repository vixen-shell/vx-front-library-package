import { ApiRoutes as a } from "./ApiRoutes.js";
import { SocketEventHandler as c } from "./SocketEventHandler.js";
async function i(n, e = !1) {
  if (!e && !s.isInit) throw new Error("Api not initialized");
  const r = await fetch(n);
  if (!r.ok) {
    const o = await r.json();
    throw new Error(o.message || "Request Error");
  }
  return await r.json();
}
const t = class t {
  static async init(e) {
    if (!await t.ping()) throw new Error("Unable to acces Vixen Api.");
    t.featureNames = (await i(a.features_names, !0)).names, t.currentFeatureName = e, t._stateEvents = new c(
      a.feature_state_socket(t.currentFeatureName)
    ), t._stateEvents.connect(), t._isInit = !0;
  }
  static get isInit() {
    return t._isInit;
  }
  static async ping() {
    try {
      return !!(await fetch(a.ping)).ok;
    } catch {
      return !1;
    }
  }
  static get stateEvents() {
    if (t._stateEvents) return t._stateEvents;
    throw new Error("Api not initialized");
  }
  static async getInitialState() {
    return (await i(a.feature_state(t.currentFeatureName))).state || null;
  }
};
t.featureNames = void 0, t.currentFeatureName = void 0, t._stateEvents = void 0, t._isInit = !1;
let s = t;
export {
  s as Api
};
