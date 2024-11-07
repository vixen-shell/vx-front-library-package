import { ApiRoutes as i } from "./ApiRoutes.js";
import { SocketEventHandler as c } from "./SocketEventHandler.js";
async function n(u, e = !1) {
  if (!e && !s.isInit) throw new Error("Api not initialized");
  const r = await fetch(u);
  if (!r.ok) {
    const a = await r.json();
    throw new Error(a.message || "Request Error");
  }
  return await r.json();
}
const t = class t {
  static async init() {
    if (!await t.ping())
      throw new Error("Unable to acces Vixen Api");
    t._features = (await n(i.features_names, !0)).names, t._initialState = await n(i.vx_state, !0), t._stateEventHandler = new c(
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
    const e = new URLSearchParams(window.location.search), r = e.get("feature"), a = e.get("frame"), o = e.get("route"), f = e.has("popup");
    if (!r) throw new Error("Unable to find url parameter 'feature'");
    if (!a) throw new Error("Unable to find url parameter 'frame'");
    if (!o) throw new Error("Unable to find url parameter 'route'");
    return { feature: r, frame: a, route: o, popup: f };
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
