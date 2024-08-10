import { useState as g, useEffect as h, useCallback as n } from "react";
import { ApiRoutes as l } from "../ApiRoutes.js";
const d = (a, f) => {
  const [c, w] = g({});
  h(() => {
    f.forEach((r) => {
      p(r);
    });
  }, []);
  const i = n((r, o) => {
    w((e) => ({ ...e, [r]: o }));
  }, []), p = n((r) => {
    const o = new AbortController(), { signal: e } = o;
    return (async () => {
      try {
        const t = await fetch(
          l.feature_get_param(a, r),
          { signal: e }
        );
        if (!t.ok) {
          const s = await t.json();
          throw new Error(s.message);
        }
        i(r, (await t.json())[r]);
      } catch (t) {
        console.error(t);
      }
    })(), () => o.abort();
  }, []), m = n((r, o) => {
    if (!(r in c))
      throw new Error("Parameter path not found");
    const e = new AbortController(), { signal: t } = e;
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
            signal: t
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
    })(), () => e.abort();
  }, []);
  return { params: c, setParam: m };
};
export {
  d as useParams
};
