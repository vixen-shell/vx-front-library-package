import { ApiRoutes as e } from "./ApiRoutes.js";
import { SocketEventHandler as c } from "./SocketEventHandler.js";
async function s(n, a = !1) {
  if (!a && !i.isInit) throw new Error("Api not initialized");
  const r = await fetch(n);
  if (!r.ok) {
    const o = await r.json();
    throw new Error(o.message || "Request Error");
  }
  return await r.json();
}
const t = class t {
  static async init(a) {
    if (!await t.ping()) throw new Error("Unable to acces Vixen Api.");
    t.featureNames = (await s(e.features_names, !0)).names, t.currentFeatureName = a, t._stateEvents = new c(
      e.feature_state_socket(t.currentFeatureName)
    ), t._stateEvents.connect(), t._isInit = !0;
  }
  static get isInit() {
    return t._isInit;
  }
  static async ping() {
    try {
      return !!(await fetch(e.ping)).ok;
    } catch {
      return !1;
    }
  }
  static async prefer_dark_theme() {
    return await s(e.prefer_dark_theme);
  }
  static get stateEvents() {
    if (t._stateEvents) return t._stateEvents;
    throw new Error("Api not initialized");
  }
  static async getInitialState() {
    return (await s(e.feature_state(t.currentFeatureName))).state || null;
  }
};
t.featureNames = void 0, t.currentFeatureName = void 0, t._stateEvents = void 0, t._isInit = !1;
let i = t;
export {
  i as Api
};
