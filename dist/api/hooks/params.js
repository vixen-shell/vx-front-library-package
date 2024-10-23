import { useState as y, useCallback as c, useEffect as h } from "react";
import { BaseApi as d } from "../api.js";
import { ApiRoutes as m } from "../ApiRoutes.js";
const A = (l, s = d.urlParams.feature) => {
  const [n, f] = y({}), i = c((r, o) => {
    f((e) => ({ ...e, [r]: o }));
  }, []), w = c(
    (r) => {
      const o = new AbortController(), { signal: e } = o;
      return (async () => {
        try {
          const t = await fetch(
            m.feature_get_param(s, r),
            { signal: e }
          );
          if (!t.ok) {
            const a = await t.json();
            throw new Error(a.message);
          }
          i(r, (await t.json())[r]);
        } catch (t) {
          console.error(t);
        }
      })(), () => o.abort();
    },
    [s, i]
  ), p = c(
    (r) => n[r],
    [n]
  ), g = c(
    (r, o) => {
      if (!(r in n))
        throw new Error("Parameter path not found");
      const e = new AbortController(), { signal: t } = e;
      return (async () => {
        try {
          const a = await fetch(
            m.feature_set_param(s, r),
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({ value: o }),
              signal: t
            }
          );
          if (!a.ok) {
            const b = await a.json();
            throw new Error(b.message);
          }
          i(r, o);
        } catch (a) {
          console.error(a);
        }
      })(), () => e.abort();
    },
    [s, n, i]
  ), u = c(() => {
    const r = new AbortController(), { signal: o } = r;
    return (async () => {
      const e = await fetch(
        m.feature_save_params(s),
        { signal: o }
      );
      if (!e.ok) {
        const t = await e.json();
        console.error(t.message);
      }
    })(), () => r.abort();
  }, [s]);
  return h(() => {
    Object.keys(n).length < l.length && l.forEach((r) => {
      w(r);
    });
  }, [w, n, l]), { get: p, set: g, save: u };
};
export {
  A as useParams
};
