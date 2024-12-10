class o {
  constructor(e) {
    this._socket = void 0, this._listeners = {}, this._eventQueue = [], this._uri = e;
  }
  _afterConnection(e) {
    (async () => {
      if (this._socket) {
        let t = !0, s = !0;
        for (; t; )
          this._socket.readyState === WebSocket.OPEN && (t = !1), this._socket.readyState === WebSocket.CLOSED && (t = !1, s = !1), await new Promise((i) => setTimeout(i, 100));
        s && e();
      }
    })();
  }
  connect() {
    this._socket ? console.error(
      `Socket event handler (${this._uri}): Already connected`
    ) : (this._socket = new WebSocket(this._uri), this._socket.addEventListener("open", async () => {
      this._eventQueue.length > 0 && this._afterConnection(() => {
        for (; this._eventQueue.length > 0; )
          this._socket.send(
            JSON.stringify(this._eventQueue.shift())
          );
      });
    }), this._socket.onmessage = (e) => {
      const t = JSON.parse(e.data), s = this._listeners[t.id];
      s && s.forEach((i) => {
        i(t.data || {});
      });
    });
  }
  disconnect() {
    if (this._socket) {
      const e = this._socket;
      this._afterConnection(() => {
        e.close();
      }), this._socket = void 0;
    } else
      console.error(`Socket event handler (${this._uri}): Not connected`);
  }
  addEventListener(e, t) {
    this._listeners[e] || (this._listeners[e] = []), this._listeners[e].push(t);
  }
  removeEventListener(e, t) {
    this._listeners[e] && (this._listeners[e] = this._listeners[e].filter(
      (s) => s !== t
    ), this._listeners[e].length === 0 && delete this._listeners[e]);
  }
  send_event(e) {
    this._socket && (this._socket.readyState == WebSocket.OPEN ? this._socket.send(JSON.stringify(e)) : this._eventQueue.push(e));
  }
}
export {
  o as SocketEventHandler
};
