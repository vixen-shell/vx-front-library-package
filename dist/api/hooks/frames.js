import { useState as w, useCallback as a, useEffect as A } from "react";
import { BaseApi as d } from "../api.js";
import { ApiRoutes as l } from "../ApiRoutes.js";
const _ = (s = d.urlParams.feature) => {
  const [p, i] = w([]), [b, m] = w([]), n = a(async (t, r) => {
    const o = await fetch(t, { signal: r });
    if (!o.ok) {
      const c = await o.json();
      throw new Error(c.message);
    }
    return await o.json();
  }, []), e = a(() => {
    const t = new AbortController(), { signal: r } = t;
    return (async () => {
      try {
        const o = await n(
          l.frames_ids(s),
          r
        );
        i(o.ids), m(o.actives);
      } catch (o) {
        i([]), m([]), console.error(o);
      }
    })(), () => t.abort();
  }, [s, n]), g = a(
    (t) => {
      const r = new AbortController(), { signal: o } = r;
      return (async () => {
        try {
          await n(
            l.frame_toggle(s, t),
            o
          ), e();
        } catch (c) {
          console.error(c);
        }
      })(), () => r.abort();
    },
    [s, n, e]
  ), y = a(
    (t) => {
      const r = new AbortController(), { signal: o } = r;
      return (async () => {
        try {
          await n(
            l.frame_open(s, t),
            o
          ), e();
        } catch (c) {
          console.error(c);
        }
      })(), () => r.abort();
    },
    [s, n, e]
  ), u = a(
    (t) => {
      const r = new AbortController(), { signal: o } = r;
      return (async () => {
        try {
          await n(
            l.frame_close(s, t),
            o
          ), e();
        } catch (c) {
          console.error(c);
        }
      })(), () => r.abort();
    },
    [s, n, e]
  );
  return A(() => {
    e();
  }, [e]), { ids: p, actives: b, toggle: g, open: y, close: u };
};
export {
  _ as useFrames
};
