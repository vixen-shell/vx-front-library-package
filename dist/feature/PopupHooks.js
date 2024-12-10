import { useRef as _, useEffect as d } from "react";
import { BaseApi as h } from "../api/api.js";
import { ApiRoutes as p } from "../api/ApiRoutes.js";
import "dayjs";
import { useVxState as n } from "../stateHook/index.js";
async function w(o) {
  const e = await fetch(
    p.popup_frame_show(h.urlParams.feature),
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
  const o = await fetch(p.popup_frame_hide);
  if (!o.ok) {
    const e = await o.json();
    throw new Error(e.message);
  }
  return await o.json();
}
const g = () => {
  const { state: o, setStateItem: e } = n();
  return { hide: () => {
    o.vx_popup_frame && (async () => {
      try {
        await v(), e("vx_popup_frame", null);
      } catch (a) {
        console.error(a);
      }
    })();
  } };
}, j = () => {
  const { state: o, setStateItem: e } = n(), r = _(), a = ({
    route: t,
    monitorId: c = void 0,
    position: u = void 0,
    size: f = void 0,
    resizable: m = !1,
    exitOnMouseLeave: l = !1
  }) => {
    o.vx_popup_frame || (e("vx_popup_frame", {
      position: u || null,
      size: f || null,
      resizable: m,
      exit_on_leave: l
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
  g as useHidePopupFrame,
  j as usePopupFrame
};
