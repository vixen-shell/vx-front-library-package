import { useRef as i, useCallback as c } from "react";
import { BaseApi as l } from "../api.js";
import { ApiRoutes as f } from "../ApiRoutes.js";
async function p(r, n) {
  const o = await fetch(
    f.feature_action(l.urlParams.feature),
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
    const t = await o.json();
    throw new Error(t.message);
  }
  return await o.json();
}
const h = () => {
  const r = i(), n = c((t, a) => {
    const s = new AbortController(), { signal: u } = s;
    return (async () => {
      try {
        if (await p({ name: t, args: a }, u), r.current) {
          const e = {
            name: t,
            args: a
          };
          r.current(e, null);
        }
      } catch (e) {
        console.error(e), r.current && r.current(null, e);
      }
    })(), () => s.abort();
  }, []), o = c(
    (t) => {
      r.current = t;
    },
    []
  );
  return { run: n, afterRun: o };
};
export {
  h as useTask
};
