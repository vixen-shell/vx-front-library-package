import { useRef as _, useEffect as d } from "react";
import { BaseApi as h } from "../api/api.js";
import { ApiRoutes as n } from "../api/ApiRoutes.js";
import { useVxState as p } from "../stateHook/index.js";
async function w(o) {
  const e = await fetch(
    n.popup_frame_show(h.urlParams.feature),
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(o)
    }
  );
  if (!e.ok) {
    const r = await e.json();
    throw new Error(r.message);
  }
  return await e.json();
}
async function v() {
  const o = await fetch(n.popup_frame_hide);
  if (!o.ok) {
    const e = await o.json();
    throw new Error(e.message);
  }
  return await o.json();
}
const P = () => {
  const { state: o, setStateItem: e } = p();
  return { hide: () => {
    o.vx_popup_frame && (async () => {
      try {
        await v(), e("vx_popup_frame", null);
      } catch (a) {
        console.error(a);
      }
    })();
  } };
}, g = () => {
  const { state: o, setStateItem: e } = p(), r = _(), a = ({
    route: t,
    monitorId: c = void 0,
    position: u = void 0,
    size: f = void 0,
    resizable: l = !1,
    exitOnMouseLeave: m = !1
  }) => {
    o.vx_popup_frame || (e("vx_popup_frame", {
      position: u || null,
      size: f || null,
      resizable: l,
      exit_on_leave: m
    }), (async () => {
      try {
        await w({
          route: t,
          monitor_id: c || 0
        });
      } catch (s) {
        console.error(s);
      }
    })());
  }, i = (t) => {
    r.current = t;
  };
  return d(() => {
    const t = o.vx_popup_frame_callback_data;
    t && (r.current && r.current(
      t.position,
      t.size
    ), e("vx_popup_frame_callback_data", null));
  }, [o.vx_popup_frame_callback_data]), { show: a, onClosing: i };
};
export {
  P as useHidePopupFrame,
  g as usePopupFrame
};
