var E = Object.defineProperty;
var w = (n, t, s) => t in n ? E(n, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : n[t] = s;
var o = (n, t, s) => (w(n, typeof t != "symbol" ? t + "" : t, s), s);
import { ApiRoutes as g } from "./ApiRoutes.js";
import { ApiEvents as f } from "./ApiEvents.js";
function l(n, t) {
  if (r.isInit)
    return async () => {
      const s = await fetch(n);
      if (!s.ok)
        try {
          const a = await s.json();
          throw new Error(a.message);
        } catch (a) {
          throw new Error(a.message);
        }
      const c = await s.json();
      if (t in c)
        return c[t];
      throw new Error(`Unable to acces ${t}`);
    };
  throw new Error("Api not initialized");
}
const i = class i {
  static get logListener() {
    return i._logListener;
  }
  static set logListener(t) {
    (async (c) => {
      const a = l(
        r.routes.FEATURE_LOG_LISTENER,
        "log_listener"
      ), u = l(
        r.routes.FEATURE_LOG_LISTENER_TOGGLE,
        "log_listener"
      );
      await a() !== c && await u();
    })(t), i._logListener = t;
  }
  static async log(t) {
    r.events.send({ id: "LOG", data: t });
  }
  static get logs() {
    return l(r.routes.LOGS, "logs");
  }
  static addListener(t) {
    i.logListener || (i.logListener = !0), r.events.addListener("LOG", t);
  }
  static removeListener(t) {
    r.events.removeListener("LOG", t), !r.events.hasListeners("LOG") && i.logListener && (i.logListener = !1);
  }
};
o(i, "_logListener", !1);
let L = i;
const e = class e {
  static async init(t, s) {
    if (!await e.ping())
      throw new Error("Unable to acces Vixen Api.");
    e._routes = new g(t, s), e._events = new f(e._routes.FEATURE_PIPE), e._isInit = !0;
  }
  static get isInit() {
    return e._isInit;
  }
  static async ping() {
    try {
      return !!(await fetch(g.PING)).ok;
    } catch {
      return !1;
    }
  }
  static get events() {
    if (e._events)
      return e._events;
    throw new Error("Api not initialized");
  }
  static get routes() {
    if (e._routes)
      return e._routes;
    throw new Error("Api not initialized");
  }
  static get featureState() {
    return l(e.routes.FEATURE_STATE, "state");
  }
};
o(e, "_routes"), o(e, "_events"), o(e, "_isInit", !1), o(e, "Logger", L);
let r = e;
export {
  r as Api
};
