import { useCallback as i } from "react";
import { ApiRoutes as m } from "../ApiRoutes.js";
const l = () => ({ popup: i((a) => {
  const r = new AbortController(), { signal: s } = r, o = new URLSearchParams(window.location.search), t = o.get("feature"), n = o.get("frame");
  return t && n && (async () => {
    try {
      const e = await fetch(
        m.feature_menu(t),
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            frame_id: n,
            menu_name: a
          }),
          signal: s
        }
      );
      if (!e.ok) {
        const c = await e.json();
        throw new Error(c.message);
      }
    } catch (e) {
      console.error(e);
    }
  })(), () => r.abort();
}, []) });
export {
  l as useMenu
};
