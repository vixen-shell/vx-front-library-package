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
  static feature_save_params(t) {
    return e("http", `/feature/${t}/save_params`);
  }
  // ----------------------------------- - - -
  // ENDPOINTS :: FEATURE CONTENTS
  static feature_action(t) {
    return e("http", `/feature/${t}/action`);
  }
  static feature_data(t) {
    return e("http", `/feature/${t}/data`);
  }
  static feature_menu(t) {
    return e("http", `/feature/${t}/menu`);
  }
  static feature_dbus_menu(t) {
    return e("http", `/feature/${t}/dbus_menu`);
  }
  // WEBSOCKETS :: FEATURE CONTENTS
  static feature_state_socket(t) {
    return e("ws", `/feature/${t}/state`);
  }
  static feature_systray_socket(t) {
    return e("ws", `/feature/${t}/systray`);
  }
  static feature_data_streamer_socket(t) {
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
  static popup_frame_show(t) {
    return e("http", `/popup_frame/${t}/show`);
  }
};
r.ping = e("http", "/ping"), r.shutdown = e("http", "/shutdown"), r.gtk_fonts = e("http", "/gtk_fonts"), r.locale = e("http", "/locale"), r.vx_state = e("http", "/vx_state"), r.features_names = e("http", "/features/names"), r.popup_frame_hide = e("http", "/popup_frame/hide");
let u = r;
export {
  u as ApiRoutes
};
