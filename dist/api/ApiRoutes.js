var c = Object.defineProperty;
var n = (r, t, e) => t in r ? c(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var s = (r, t, e) => (n(r, typeof t != "symbol" ? t + "" : t, e), e);
function a(r, t) {
  const [e, u] = ["localhost", "6481"];
  return `${r}://${e}:${u}${t}`;
}
class f {
  // ----------------------------------- - - -
  // ENDPOINTS :: FEATURE
  static feature_start(t) {
    return a("http", `/feature/${t}/start`);
  }
  static feature_stop(t) {
    return a("http", `/feature/${t}/stop`);
  }
  static feature_state(t) {
    return a("http", `/feature/${t}/state`);
  }
  static feature_get_param(t, e) {
    return a("http", `/feature/${t}/get_param/${e}`);
  }
  static feature_set_param(t, e) {
    return a("http", `/feature/${t}/set_param/${e}`);
  }
  // WEBSOCKETS :: FEATURE STATE
  static feature_state_socket(t) {
    return a("ws", `/feature/${t}/state`);
  }
  // ----------------------------------- - - -
  // ENDPOINTS :: FEATURE CONTENTS
  static feature_action(t) {
    return a("http", `/feature/${t}/action`);
  }
  static feature_data(t) {
    return a("http", `/feature/${t}/data`);
  }
  static feature_file(t) {
    return a("http", `/feature/${t}/file`);
  }
  // WEBSOCKETS :: FEATURE CONTENTS
  static feature_data_streamer(t, e) {
    return a(
      "ws",
      `/feature/${t}/data_streamer/${e}`
    );
  }
  static feature_socket(t, e, u) {
    return a(
      "ws",
      `/feature/${t}/sockets/${e}/${u}`
    );
  }
  // ----------------------------------- - - -
  // ENDPOINTS :: FRAMES
  static frames_ids(t) {
    return a("http", `/frames/${t}/ids`);
  }
  // ----------------------------------- - - -
  // ENDPOINTS :: FRAME
  static frame_toggle(t, e) {
    return a("http", `/frame/${t}/toggle/${e}`);
  }
  static frame_open(t, e) {
    return a("http", `/frame/${t}/open/${e}`);
  }
  static frame_close(t, e) {
    return a("http", `/frame/${t}/close/${e}`);
  }
}
// ----------------------------------- - - -
// ENDPOINTS :: BASIC
s(f, "ping", a("http", "/ping")), s(f, "shutdown", a("http", "/shutdown")), // ----------------------------------- - - -
// ENDPOINTS :: FEATURES
s(f, "features_names", a("http", "/features/names"));
export {
  f as ApiRoutes
};
