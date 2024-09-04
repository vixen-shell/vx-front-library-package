import { useState as g, useEffect as h, useCallback as n } from "react";
import { ApiRoutes as l } from "../ApiRoutes.js";
const d = (a, f) => {
  const [c, w] = g({});
  h(() => {
    f.forEach((r) => {
      m(r);
    });
  }, []);
  const i = n((r, o) => {
    w((t) => ({ ...t, [r]: o }));
  }, []), m = n((r) => {
    const o = new AbortController(), { signal: t } = o;
    return (async () => {
      try {
        const e = await fetch(
          l.feature_get_param(a, r),
          { signal: t }
        );
        if (!e.ok) {
          const s = await e.json();
          throw new Error(s.message);
        }
        i(r, (await e.json())[r]);
      } catch (e) {
        console.error(e);
      }
    })(), () => o.abort();
  }, []), p = n((r, o) => {
    if (!(r in c))
      throw new Error("Parameter path not found");
    const t = new AbortController(), { signal: e } = t;
    return (async () => {
      try {
        const s = await fetch(
          l.feature_set_param(a, r),
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ value: o }),
            signal: e
          }
        );
        if (!s.ok) {
          const u = await s.json();
          throw new Error(u.message);
        }
        i(r, o);
      } catch (s) {
        console.error(s);
      }
    })(), () => t.abort();
  }, []);
  return { params: c, setParam: p };
};
export {
  d as useParams
};
