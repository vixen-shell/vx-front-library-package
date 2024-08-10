import { useState as p, useEffect as u, useCallback as f } from "react";
import { ApiRoutes as l } from "../ApiRoutes.js";
const m = (o, e) => {
  const [r, s] = p({});
  u(() => {
    n();
  }, []);
  const n = f(() => {
    const a = new AbortController(), { signal: c } = a;
    return (async () => {
      try {
        const t = await fetch(
          l.feature_data(o),
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(e),
            signal: c
          }
        );
        if (!t.ok) {
          const i = await t.json();
          throw new Error(i.message);
        }
        s(await t.json());
      } catch (t) {
        r && s({}), console.error(t);
      }
    })(), () => a.abort();
  }, [o, e]);
  return { update: n, data: r };
};
export {
  m as useFeatureData
};
