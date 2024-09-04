import { useState as p, useEffect as f, useCallback as l } from "react";
import { ApiRoutes as u } from "../ApiRoutes.js";
const d = (o, e) => {
  const [r, s] = p({});
  f(() => {
    a();
  }, []);
  const a = l(() => {
    const n = new AbortController(), { signal: c } = n;
    return (async () => {
      try {
        const t = await fetch(u.feature_data(o), {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(e),
          signal: c
        });
        if (!t.ok) {
          const i = await t.json();
          throw new Error(i.message);
        }
        s(await t.json());
      } catch (t) {
        r && s({}), console.error(t);
      }
    })(), () => n.abort();
  }, [o, e]);
  return { update: a, data: r };
};
export {
  d as useData
};
