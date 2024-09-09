import { ApiRoutes as e } from "./ApiRoutes.js";
import { SocketEventHandler as c } from "./SocketEventHandler.js";
async function r(n, a = !1) {
  if (!a && !i.isInit) throw new Error("Api not initialized");
  const s = await fetch(n);
  if (!s.ok) {
    const o = await s.json();
    throw new Error(o.message || "Request Error");
  }
  return await s.json();
}
const t = class t {
  static async init(a) {
    if (!await t.ping()) throw new Error("Unable to acces Vixen Api.");
    t.featureNames = (await r(e.features_names, !0)).names, t.currentFeatureName = a, t._stateEvents = new c(
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
  static async gtkDarkTheme() {
    return await r(e.gtk_dark_theme);
  }
  static async gtkDefaultFont() {
    return await r(e.gtk_default_font);
  }
  static get stateEvents() {
    if (t._stateEvents) return t._stateEvents;
    throw new Error("Api not initialized");
  }
  static async getInitialState() {
    return (await r(e.feature_state(t.currentFeatureName))).state || null;
  }
};
t.featureNames = void 0, t.currentFeatureName = void 0, t._stateEvents = void 0, t._isInit = !1;
let i = t;
export {
  i as Api
};
