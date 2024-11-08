import { useRef as _, useEffect as m } from "react";
import { BaseApi as d } from "../api/api.js";
import { ApiRoutes as s } from "../api/ApiRoutes.js";
import { useVxState as n } from "../stateHook/index.js";
async function h(o) {
  const e = await fetch(
    s.popup_frame_show(d.urlParams.feature),
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
async function w() {
  const o = await fetch(s.popup_frame_hide);
  if (!o.ok) {
    const e = await o.json();
    throw new Error(e.message);
  }
  return await o.json();
}
const k = () => {
  const o = n();
  return { hide: () => {
    o.get.vx_popup_frame && (async () => {
      try {
        await w(), o.set("vx_popup_frame", null);
      } catch (r) {
        console.error(r);
      }
    })();
  } };
}, b = () => {
  const o = n(), e = _(), r = ({
    route: t,
    monitorId: i = void 0,
    position: c = void 0,
    size: u = void 0,
    resizable: f = !1,
    exitOnMouseLeave: l = !1
  }) => {
    o.get.vx_popup_frame || (o.set("vx_popup_frame", {
      position: c || null,
      size: u || null,
      resizable: f,
      exit_on_leave: l
    }), (async () => {
      try {
        await h({
          route: t,
          monitor_id: i || 0
        });
      } catch (a) {
        console.error(a);
      }
    })());
  }, p = (t) => {
    e.current = t;
  };
  return m(() => {
    const t = o.get.vx_popup_frame_callback_data;
    t && (e.current && e.current(
      t.position,
      t.size
    ), o.set("vx_popup_frame_callback_data", null));
  }, [o.get.vx_popup_frame_callback_data]), { show: r, onClosing: p };
};
export {
  k as useHidePopupFrame,
  b as usePopupFrame
};
