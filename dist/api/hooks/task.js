import { useState as p, useRef as m, useCallback as a } from "react";
import { ApiRoutes as w } from "../ApiRoutes.js";
const R = (e, o) => {
  const [c, s] = p(!1), r = m(), i = a(() => {
    s(!0);
    const t = new AbortController(), { signal: l } = t;
    return (async () => {
      try {
        const n = await fetch(
          w.feature_action(e),
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(o),
            signal: l
          }
        );
        if (!n.ok) {
          const f = await n.json();
          throw new Error(f.message);
        }
        r.current && r.current(await n.json(), null);
      } catch (n) {
        console.error(n), r.current && r.current(null, n);
      } finally {
        s(!1);
      }
    })(), () => t.abort();
  }, [e, o]), u = a(
    (t) => {
      r.current = t;
    },
    []
  );
  return { run: i, isRunning: c, onTerminate: u };
};
export {
  R as useTask
};
