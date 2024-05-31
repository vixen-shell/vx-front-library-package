import { useState as i, useCallback as p } from "react";
import { ApiRoutes as u } from "../ApiRoutes.js";
const w = (t, r) => {
  const [e, s] = i(void 0);
  return { update: p(() => {
    const a = new AbortController(), { signal: n } = a;
    return (async () => {
      try {
        const o = await fetch(
          u.feature_data(t),
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(r),
            signal: n
          }
        );
        if (!o.ok) {
          const c = await o.json();
          throw new Error(c.message);
        }
        s(await o.json());
      } catch (o) {
        e && s(void 0), console.error(o);
      }
    })(), () => a.abort();
  }, [t, r]), data: e };
};
export {
  w as useFeatureData
};
