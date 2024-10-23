import { ApiRoutes as i } from "./ApiRoutes.js";
import { SocketEventHandler as f } from "./SocketEventHandler.js";
async function n(u, r = !1) {
  if (!r && !s.isInit) throw new Error("Api not initialized");
  const e = await fetch(u);
  if (!e.ok) {
    const a = await e.json();
    throw new Error(a.message || "Request Error");
  }
  return await e.json();
}
const t = class t {
  static async init() {
    if (!await t.ping())
      throw new Error("Unable to acces Vixen Api");
    t._features = (await n(i.features_names, !0)).names, t._initialState = await n(i.vx_state, !0), t._stateEventHandler = new f(
      i.feature_state_socket(t.urlParams.feature)
    ), t._defaultFonts = await n(i.gtk_fonts, !0), t._isInit = !0;
  }
  static async ping() {
    try {
      return !!(await fetch(i.ping)).ok;
    } catch {
      return !1;
    }
  }
  static get isInit() {
    return t._isInit;
  }
  static get features() {
    if (!t._isInit)
      throw new Error("Api not initialized");
    return t._features;
  }
  static get urlParams() {
    const r = new URLSearchParams(window.location.search), e = r.get("feature"), a = r.get("frame"), o = r.get("route");
    if (!e) throw new Error("Unable to find url parameter 'feature'");
    if (!a) throw new Error("Unable to find url parameter 'frame'");
    if (!o) throw new Error("Unable to find url parameter 'route'");
    return { feature: e, frame: a, route: o };
  }
  static get state() {
    if (!t._isInit)
      throw new Error("Api not initialized");
    return {
      initial: t._initialState,
      eventHandler: t._stateEventHandler
    };
  }
  static get defaultFonts() {
    if (!t._isInit)
      throw new Error("Api not initialized");
    return t._defaultFonts;
  }
};
t._isInit = !1, t._features = void 0, t._initialState = void 0, t._stateEventHandler = void 0, t._defaultFonts = void 0;
let s = t;
export {
  s as BaseApi
};
