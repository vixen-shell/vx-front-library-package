function e(c, t) {
  const [a, s] = ["localhost", "6481"];
  return `${c}://${a}:${s}${t}`;
}
const r = class r {
  static system_icons(t) {
    return e("http", `/system_icons/${t}`);
  }
  static phosphor_icons(t, a = void 0) {
    const s = a ? `?icon_style=${a}` : "";
    return e("http", `/phosphor_icons/${t}/${s}`);
  }
  static image_file(t) {
    return e("http", `/image_file/?filepath=${t}`);
  }
  // ----------------------------------- - - -
  // ENDPOINTS :: FEATURE
  static feature_start(t) {
    return e("http", `/feature/${t}/start`);
  }
  static feature_stop(t) {
    return e("http", `/feature/${t}/stop`);
  }
  static feature_get_param(t, a) {
    return e("http", `/feature/${t}/get_param/${a}`);
  }
  static feature_set_param(t, a) {
    return e("http", `/feature/${t}/set_param/${a}`);
  }
  // ----------------------------------- - - -
  // ENDPOINTS :: FEATURE CONTENTS
  static feature_action(t) {
    return e("http", `/feature/${t}/action`);
  }
  static feature_data(t) {
    return e("http", `/feature/${t}/data`);
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
r.ping = e("http", "/ping"), r.shutdown = e("http", "/shutdown"), r.gtk_fonts = e("http", "/gtk_fonts"), r.vx_state = e("http", "/vx_state"), r.vx_state_socket = e("ws", "/vx_state"), r.features_names = e("http", "/features/names");
let i = r;
export {
  i as ApiRoutes
};
