var r = Object.defineProperty;
var h = (t, s, e) => s in t ? r(t, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[s] = e;
var n = (t, s, e) => (h(t, typeof s != "symbol" ? s + "" : s, e), e);
class _ {
  constructor(s) {
    n(this, "_webSocket");
    n(this, "_listeners", {
      LOG: [],
      UPDATE_STATE: []
    });
    this._webSocket = new WebSocket(s), this._webSocket.onmessage = (e) => {
      const i = JSON.parse(e.data);
      this._handleInputs(i);
    };
  }
  _handleInputs(s) {
    s.id in this._listeners && s.data && this._listeners[s.id].forEach((e) => {
      e(s.data);
    });
  }
  hasListeners(s) {
    return this._listeners[s].length !== 0;
  }
  addListener(s, e) {
    this._listeners[s].push(e);
  }
  removeListener(s, e) {
    this._listeners[s] = this._listeners[s].filter(
      (i) => i !== e
    );
  }
  send(s) {
    this._webSocket.send(JSON.stringify(s));
  }
}
export {
  _ as ApiEvents
};
