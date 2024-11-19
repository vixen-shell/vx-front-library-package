import { ApiRoutes as a } from "./ApiRoutes.js";
import { SocketEventHandler as u } from "./SocketEventHandler.js";
import { dayjsLocaleImporters as c } from "../theme/locale.js";
async function o(i) {
  const e = await fetch(i);
  if (!e.ok) {
    const r = await e.json();
    throw new Error(r.message || "Request Error");
  }
  return await e.json();
}
async function w() {
  const i = await fetch(
    a.feature_data(s.urlParams.feature),
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        data_name: "locales",
        handler_name: "__locales__"
      })
    }
  );
  if (!i.ok) {
    const e = await i.json();
    throw new Error(e.message);
  }
  return await i.json();
}
const t = class t {
  static async init() {
    if (!await t.ping())
      throw new Error("Unable to acces Vixen Api");
    t._features = (await o(a.features_names)).names, t._initialState = await o(a.vx_state), t._stateEventHandler = new u(
      a.feature_state_socket(t.urlParams.feature)
    ), t._defaultFonts = await o(a.gtk_fonts), t._locale = await o(a.locale), t._locales = (await w()).locales, t._isInit = !0;
  }
  static async ping() {
    try {
      return !!(await fetch(a.ping)).ok;
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
    const e = new URLSearchParams(window.location.search), r = e.get("feature"), n = e.get("frame"), l = e.get("route"), f = e.has("popup");
    if (!r) throw new Error("Unable to find url parameter 'feature'");
    if (!n) throw new Error("Unable to find url parameter 'frame'");
    if (!l) throw new Error("Unable to find url parameter 'route'");
    return { feature: r, frame: n, route: l, popup: f };
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
  static get locales() {
    if (!t._isInit)
      throw new Error("Api not initialized");
    return t._locales;
  }
  static locale(e = !1) {
    if (!t._isInit)
      throw new Error("Api not initialized");
    if (!e) return t._locale;
    const [r, n] = t._locale.toLowerCase().split("_");
    return `${r}-${n}` in c ? `${r}-${n}` : r in c ? r : "en";
  }
};
t._isInit = !1, t._features = void 0, t._initialState = void 0, t._stateEventHandler = void 0, t._defaultFonts = void 0, t._locale = void 0, t._locales = void 0;
let s = t;
export {
  s as BaseApi
};
