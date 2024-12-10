import { useState as u, useCallback as f } from "react";
import { BaseApi as p } from "../api.js";
import { ApiRoutes as d } from "../ApiRoutes.js";
import { useStream as w } from "./Stream.js";
async function h(e, n) {
  const t = await fetch(
    d.feature_data(p.urlParams.feature),
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(e),
      signal: n
    }
  );
  if (!t.ok) {
    const s = await t.json();
    throw new Error(s.message);
  }
  return await t.json();
}
const b = (e = { UseStream: !1 }) => {
  const { stream: n } = w(e.UseStream, e.interval), [t, s] = u({}), i = f((a) => {
    const r = new AbortController(), { signal: c } = r;
    (async () => {
      try {
        const o = await h(a, c);
        s((l) => ({ ...l, ...o }));
      } catch (o) {
        console.error(o);
      }
    })();
  }, []), m = f(
    (a, r) => {
      if (!(a in t) && r) {
        s((o) => ({ ...o, [a]: void 0 }));
        const c = {
          data_name: a,
          handler_name: r.name,
          handler_args: r.args
        };
        i(c);
      }
      return t[a];
    },
    [t, i]
  );
  return { get: m, stream: e.UseStream ? n : m };
};
export {
  b as useData
};
