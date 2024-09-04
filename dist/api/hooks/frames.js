import { useState as m, useEffect as h, useCallback as e } from "react";
import { ApiRoutes as l } from "../ApiRoutes.js";
const C = (s) => {
  const [b, i] = m([]), [g, w] = m([]);
  h(() => {
    a();
  }, []);
  const c = e(async (t, r) => {
    const o = await fetch(t, { signal: r });
    if (!o.ok) {
      const n = await o.json();
      throw new Error(n.message);
    }
    return await o.json();
  }, []), a = e(() => {
    const t = new AbortController(), { signal: r } = t;
    return (async () => {
      try {
        const o = await c(
          l.frames_ids(s),
          r
        );
        i(o.ids), w(o.actives);
      } catch (o) {
        i([]), w([]), console.error(o);
      }
    })(), () => t.abort();
  }, [s]), p = e(
    (t) => {
      const r = new AbortController(), { signal: o } = r;
      return (async () => {
        try {
          await c(
            l.frame_toggle(s, t),
            o
          ), a();
        } catch (n) {
          console.error(n);
        }
      })(), () => r.abort();
    },
    [s]
  ), y = e(
    (t) => {
      const r = new AbortController(), { signal: o } = r;
      return (async () => {
        try {
          await c(
            l.frame_open(s, t),
            o
          ), a();
        } catch (n) {
          console.error(n);
        }
      })(), () => r.abort();
    },
    [s]
  ), d = e(
    (t) => {
      const r = new AbortController(), { signal: o } = r;
      return (async () => {
        try {
          await c(
            l.frame_close(s, t),
            o
          ), a();
        } catch (n) {
          console.error(n);
        }
      })(), () => r.abort();
    },
    [s]
  );
  return { ids: b, actives: g, toggle: p, open: y, close: d };
};
export {
  C as useFrames
};
