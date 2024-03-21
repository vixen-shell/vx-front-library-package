var _ = Object.defineProperty;
var E = (a, t, r) => t in a ? _(a, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : a[t] = r;
var u = (a, t, r) => (E(a, typeof t != "symbol" ? t + "" : t, r), r);
function e(a, t) {
  const [r, s] = ["localhost", "6481"];
  return `${a}://${r}:${s}${t}`;
}
class h {
  constructor(t, r) {
    u(this, "_featureName");
    u(this, "_clientId");
    u(this, "LOGS", e("http", "/logs"));
    u(this, "LOG", e("http", "/log"));
    u(this, "FEATURE_NAME", e("http", "/features/names"));
    this._featureName = t, this._clientId = r;
  }
  get FEATURE_START() {
    return e("http", `/feature/${this._featureName}/start`);
  }
  get FEATURE_STOP() {
    return e("http", `/feature/${this._featureName}/stop`);
  }
  get FEATURE_STATE() {
    return e("http", `/feature/${this._featureName}/state`);
  }
  get FEATURE_LOG_LISTENER() {
    return e("http", `/feature/${this._featureName}/log_listener`);
  }
  get FEATURE_LOG_LISTENER_TOGGLE() {
    return e("http", `/feature/${this._featureName}/log_listener/toggle`);
  }
  get FEATURE_PIPE() {
    return e("ws", `/feature/${this._featureName}/pipe/${this._clientId}`);
  }
  get FRAME_IDS() {
    return e("http", `/frames/${this._featureName}/ids`);
  }
  FRAME_TOGGLE(t) {
    return e("http", `/frame/${this._featureName}/toggle/${t}`);
  }
  FRAME_OPEN(t) {
    return e("http", `/frame/${this._featureName}/open/${t}`);
  }
  FRAME_CLOSE(t) {
    return e("http", `/frame/${this._featureName}/close/${t}`);
  }
}
u(h, "PING", e("http", "/ping"));
export {
  h as ApiRoutes
};
