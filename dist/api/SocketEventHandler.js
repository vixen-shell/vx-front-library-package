var r = Object.defineProperty;
var h = (t, s, e) => s in t ? r(t, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[s] = e;
var n = (t, s, e) => (h(t, typeof s != "symbol" ? s + "" : s, e), e);
class _ {
  constructor(s) {
    n(this, "_websocket");
    n(this, "_listeners", {});
    this._websocket = new WebSocket(s), this._websocket.onmessage = (e) => {
      const i = JSON.parse(e.data);
      this._handleInputEvents(i);
    };
  }
  _handleInputEvents(s) {
    const e = this._listeners[s.id];
    e && e.forEach((i) => {
      i(s.data || {});
    });
  }
  addEventListener(s, e) {
    this._listeners[s] || (this._listeners[s] = []), this._listeners[s].push(e);
  }
  removeEventListener(s, e) {
    this._listeners[s] && (this._listeners[s] = this._listeners[s].filter(
      (i) => i !== e
    ), this._listeners[s].length === 0 && delete this._listeners[s]);
  }
  send_event(s) {
    this._websocket.send(JSON.stringify(s));
  }
}
export {
  _ as SocketEventHandler
};
