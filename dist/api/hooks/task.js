import { useRef as f, useCallback as c } from "react";
import { ApiRoutes as p } from "../ApiRoutes.js";
const b = (e, n) => {
  const o = f(), a = c(
    (t) => {
      t && (n.args = t);
      const s = new AbortController(), { signal: u } = s;
      return (async () => {
        try {
          const r = await fetch(
            p.feature_action(e),
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(n),
              signal: u
            }
          );
          if (!r.ok) {
            const l = await r.json();
            throw new Error(l.message);
          }
          o.current && o.current(await r.json(), null);
        } catch (r) {
          console.error(r), o.current && o.current(null, r);
        }
      })(), () => s.abort();
    },
    [e, n]
  ), i = c(
    (t) => {
      o.current = t;
    },
    []
  );
  return { run: a, afterRun: i };
};
export {
  b as useTask
};
