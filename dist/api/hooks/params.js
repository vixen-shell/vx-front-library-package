import { useState as h, useCallback as c, useEffect as d } from "react";
import { BaseApi as j } from "../api.js";
import { ApiRoutes as m } from "../ApiRoutes.js";
const C = (l = [], n = j.urlParams.feature) => {
  const [s, w] = h({}), i = c((o, r) => {
    w((e) => ({ ...e, [o]: r }));
  }, []), f = c(
    (o) => {
      const r = new AbortController(), { signal: e } = r;
      return (async () => {
        try {
          const t = await fetch(
            m.feature_get_param(n, o),
            { signal: e }
          );
          if (!t.ok) {
            const a = await t.json();
            throw new Error(a.message);
          }
          i(o, (await t.json())[o]);
        } catch (t) {
          console.error(t);
        }
      })(), () => r.abort();
    },
    [n, i]
  ), u = c(
    (o) => s[o],
    [s]
  ), g = c(
    (o, r) => {
      if (!(o in s))
        throw new Error("Parameter path not found");
      const e = new AbortController(), { signal: t } = e;
      return (async () => {
        try {
          const a = typeof r == "function" ? r(s[o]) : r, p = await fetch(
            m.feature_set_param(n, o),
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({ value: a }),
              signal: t
            }
          );
          if (!p.ok) {
            const b = await p.json();
            throw new Error(b.message);
          }
          i(o, a);
        } catch (a) {
          console.error(a);
        }
      })(), () => e.abort();
    },
    [n, s, i]
  ), y = c(() => {
    const o = new AbortController(), { signal: r } = o;
    return (async () => {
      const e = await fetch(
        m.feature_save_params(n),
        { signal: r }
      );
      if (!e.ok) {
        const t = await e.json();
        console.error(t.message);
      }
    })(), () => o.abort();
  }, [n]);
  return d(() => {
    Object.keys(s).length < l.length && l.forEach((o) => {
      f(o);
    });
  }, [f, s, l]), { get: u, set: g, save: y };
};
export {
  C as useParams
};
