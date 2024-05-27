var h = Object.defineProperty;
var E = (r, t, a) => t in r ? h(r, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[t] = a;
var s = (r, t, a) => (E(r, typeof t != "symbol" ? t + "" : t, a), a);
function e(r, t) {
  const [a, u] = ["localhost", "6481"];
  return `${r}://${a}:${u}${t}`;
}
class f {
  constructor(t) {
    s(this, "_featureName");
    s(this, "LOGS", e("http", "/logs"));
    s(this, "LOG", e("http", "/log"));
    s(this, "FEATURE_NAME", e("http", "/features/names"));
    this._featureName = t;
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
  get FEATURE_STATE_SOCKET() {
    return e("ws", `/feature/${this._featureName}/state`);
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
s(f, "PING", e("http", "/ping"));
export {
  f as ApiRoutes
};
