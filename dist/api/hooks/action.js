import { useState as p, useRef as m, useCallback as c } from "react";
import { ApiRoutes as w } from "../ApiRoutes.js";
const h = (e, o) => {
  const [a, s] = p(!1), n = m(), i = c(() => {
    s(!0);
    const t = new AbortController(), { signal: l } = t;
    return (async () => {
      try {
        const r = await fetch(
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
        if (!r.ok) {
          const f = await r.json();
          throw new Error(f.message);
        }
        n.current && n.current(await r.json(), null);
      } catch (r) {
        console.error(r), n.current && n.current(null, r);
      } finally {
        s(!1);
      }
    })(), () => t.abort();
  }, [e, o]), u = c(
    (t) => {
      n.current = t;
    },
    []
  );
  return { run: i, isRunning: a, onTerminate: u };
};
export {
  h as useFeatureAction
};
