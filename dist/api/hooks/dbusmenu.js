import { useCallback as i } from "react";
import { ApiRoutes as p } from "../ApiRoutes.js";
const l = (r) => ({ popup: i(() => {
  const o = new AbortController(), { signal: a } = o, t = new URLSearchParams(window.location.search), n = t.get("feature"), s = t.get("frame");
  return n && s && (async () => {
    try {
      const e = await fetch(
        p.feature_dbus_menu(n),
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            frame_id: s,
            service_name: r
          }),
          signal: a
        }
      );
      if (!e.ok) {
        const c = await e.json();
        throw new Error(c.message);
      }
    } catch (e) {
      console.error(e);
    }
  })(), () => o.abort();
}, [r]) });
export {
  l as useDbusMenu
};
