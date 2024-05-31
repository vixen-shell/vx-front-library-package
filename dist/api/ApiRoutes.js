var c = Object.defineProperty;
var n = (r, t, a) => t in r ? c(r, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[t] = a;
var s = (r, t, a) => (n(r, typeof t != "symbol" ? t + "" : t, a), a);
function e(r, t) {
  const [a, f] = ["localhost", "6481"];
  return `${r}://${a}:${f}${t}`;
}
class u {
  // ----------------------------------- - - -
  // ENDPOINTS :: FEATURE
  static feature_start(t) {
    return e("http", `/feature/${t}/start`);
  }
  static feature_stop(t) {
    return e("http", `/feature/${t}/stop`);
  }
  static feature_state(t) {
    return e("http", `/feature/${t}/state`);
  }
  // WEBSOCKETS :: FEATURE STATE
  static feature_state_socket(t) {
    return e("ws", `/feature/${t}/state`);
  }
  // ----------------------------------- - - -
  // ENDPOINTS :: FEATURE CONTENTS
  static feature_action(t) {
    return e("http", `/feature/${t}/action`);
  }
  static feature_data(t) {
    return e("http", `/feature/${t}/data`);
  }
  static feature_file(t) {
    return e("http", `/feature/${t}/file`);
  }
  // WEBSOCKETS :: FEATURE CONTENTS
  static feature_data_streamer(t) {
    return e("ws", `/feature/${t}/data_streamer`);
  }
  static feature_socket(t, a) {
    return e("ws", `/feature/${t}/sockets/${a}`);
  }
  // ----------------------------------- - - -
  // ENDPOINTS :: FRAMES
  static frames_ids(t) {
    return e("http", `/frames/${t}/ids`);
  }
  // ----------------------------------- - - -
  // ENDPOINTS :: FRAME
  static frame_toggle(t, a) {
    return e("http", `/frame/${t}/toggle/${a}`);
  }
  static frame_open(t, a) {
    return e("http", `/frame/${t}/open/${a}`);
  }
  static frame_close(t, a) {
    return e("http", `/frame/${t}/close/${a}`);
  }
}
// ----------------------------------- - - -
// ENDPOINTS :: BASIC
s(u, "ping", e("http", "/ping")), s(u, "shutdown", e("http", "/shutdown")), // ----------------------------------- - - -
// ENDPOINTS :: FEATURES
s(u, "features_names", e("http", "/features/names"));
export {
  u as ApiRoutes
};
