import { useState as i, useCallback as p } from "react";
import { ApiRoutes as u } from "../ApiRoutes.js";
const d = (o, r) => {
  const [e, s] = i({});
  return { update: p(() => {
    const a = new AbortController(), { signal: n } = a;
    return (async () => {
      try {
        const t = await fetch(
          u.feature_data(o),
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(r),
            signal: n
          }
        );
        if (!t.ok) {
          const c = await t.json();
          throw new Error(c.message);
        }
        s(await t.json());
      } catch (t) {
        e && s({}), console.error(t);
      }
    })(), () => a.abort();
  }, [o, r]), data: e };
};
export {
  d as useFeatureData
};
