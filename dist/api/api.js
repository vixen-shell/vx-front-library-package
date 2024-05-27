var u = Object.defineProperty;
var w = (i, e, r) => e in i ? u(i, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : i[e] = r;
var s = (i, e, r) => (w(i, typeof e != "symbol" ? e + "" : e, r), r);
import { ApiRoutes as c } from "./ApiRoutes.js";
import { SocketEventHandler as E } from "./SocketEventHandler.js";
function f(i, e) {
  if (a.isInit)
    return async () => {
      const r = await fetch(i);
      if (!r.ok)
        try {
          const n = await r.json();
          throw new Error(n.message);
        } catch (n) {
          throw new Error(n.message);
        }
      const o = await r.json();
      if (e in o)
        return o[e];
      throw new Error(`Unable to acces ${e}`);
    };
  throw new Error("Api not initialized");
}
const t = class t {
  static async init(e) {
    if (!await t.ping())
      throw new Error("Unable to acces Vixen Api.");
    t._routes = new c(e), t._stateEvents = new E(
      t._routes.FEATURE_STATE_SOCKET
    ), t._isInit = !0;
  }
  static get isInit() {
    return t._isInit;
  }
  static async ping() {
    try {
      return !!(await fetch(c.PING)).ok;
    } catch {
      return !1;
    }
  }
  static get routes() {
    if (t._routes)
      return t._routes;
    throw new Error("Api not initialized");
  }
  static get stateEvents() {
    if (t._stateEvents)
      return t._stateEvents;
    throw new Error("Api not initialized");
  }
  static get featureState() {
    return f(t.routes.FEATURE_STATE, "state");
  }
};
s(t, "_routes"), s(t, "_stateEvents"), s(t, "_isInit", !1);
let a = t;
export {
  a as Api
};
