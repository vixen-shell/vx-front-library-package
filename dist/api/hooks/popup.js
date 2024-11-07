import { BaseApi as l } from "../api.js";
import { ApiRoutes as s } from "../ApiRoutes.js";
import { useVxState as m } from "../../stateHook/index.js";
import { useRef as d, useEffect as w } from "react";
async function h(o) {
  const e = await fetch(
    s.popup_frame_show(l.urlParams.feature),
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(o)
    }
  );
  if (!e.ok) {
    const t = await e.json();
    throw new Error(t.message);
  }
  return await e.json();
}
async function v() {
  const o = await fetch(s.popup_frame_hide);
  if (!o.ok) {
    const e = await o.json();
    throw new Error(e.message);
  }
  return await o.json();
}
const b = () => {
  const o = m(), e = d(), t = ({
    route: r,
    monitorId: i = void 0,
    position: c = void 0,
    size: u = void 0,
    resizable: f = !1,
    exitOnMouseLeave: _ = !1
  }) => {
    o.get.vx_popup_frame || (o.set("vx_popup_frame", {
      position: c || null,
      size: u || null,
      resizable: f,
      exit_on_leave: _
    }), (async () => {
      try {
        await h({
          route: r,
          monitor_id: i || 0
        });
      } catch (a) {
        console.error(a);
      }
    })());
  }, p = () => {
    o.get.vx_popup_frame && (async () => {
      try {
        await v(), o.set("vx_popup_frame", null);
      } catch (r) {
        console.error(r);
      }
    })();
  }, n = (r) => {
    e.current = r;
  };
  return w(() => {
    const r = o.get.vx_popup_frame_callback_data;
    r && (e.current && e.current(
      r.position,
      r.size
    ), o.set("vx_popup_frame_callback_data", null));
  }, [o.get.vx_popup_frame_callback_data]), { show: t, hide: p, onHiding: n };
};
export {
  b as usePopupFrame
};
