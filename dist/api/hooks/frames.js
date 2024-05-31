import { useState as y, useEffect as d, useCallback as c } from "react";
import { ApiRoutes as l } from "../ApiRoutes.js";
const _ = (s) => {
  const [b, i] = y([]), [g, w] = y([]);
  d(() => {
    a();
  }, []);
  const e = c(async (t, o) => {
    try {
      const r = await fetch(t, { signal: o });
      if (!r.ok) {
        const n = await r.json();
        throw new Error(n.message);
      }
      return await r.json();
    } catch (r) {
      throw r;
    }
  }, []), a = c(() => {
    const t = new AbortController(), { signal: o } = t;
    return (async () => {
      try {
        const r = await e(
          l.frames_ids(s),
          o
        );
        i(r.ids), w(r.actives);
      } catch (r) {
        i([]), w([]), console.error(r);
      }
    })(), () => t.abort();
  }, [s]), p = c(
    (t) => {
      const o = new AbortController(), { signal: r } = o;
      return (async () => {
        try {
          await e(
            l.frame_toggle(s, t),
            r
          ), a();
        } catch (n) {
          console.error(n);
        }
      })(), () => o.abort();
    },
    [s]
  ), h = c(
    (t) => {
      const o = new AbortController(), { signal: r } = o;
      return (async () => {
        try {
          await e(
            l.frame_open(s, t),
            r
          ), a();
        } catch (n) {
          console.error(n);
        }
      })(), () => o.abort();
    },
    [s]
  ), u = c(
    (t) => {
      const o = new AbortController(), { signal: r } = o;
      return (async () => {
        try {
          await e(
            l.frame_close(s, t),
            r
          ), a();
        } catch (n) {
          console.error(n);
        }
      })(), () => o.abort();
    },
    [s]
  );
  return { ids: b, actives: g, toggle: p, open: h, close: u };
};
export {
  _ as useFeatureFrames
};
