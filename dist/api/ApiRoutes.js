function e(f, t) {
  const [a, s] = ["localhost", "6481"];
  return `${f}://${a}:${s}${t}`;
}
const r = class r {
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
  static feature_get_param(t, a) {
    return e("http", `/feature/${t}/get_param/${a}`);
  }
  static feature_set_param(t, a) {
    return e("http", `/feature/${t}/set_param/${a}`);
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
  static feature_data_streamer(t, a) {
    return e(
      "ws",
      `/feature/${t}/data_streamer/${a}`
    );
  }
  static feature_socket(t, a, s) {
    return e(
      "ws",
      `/feature/${t}/sockets/${a}/${s}`
    );
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
};
r.ping = e("http", "/ping"), r.shutdown = e("http", "/shutdown"), r.features_names = e("http", "/features/names");
let u = r;
export {
  u as ApiRoutes
};
