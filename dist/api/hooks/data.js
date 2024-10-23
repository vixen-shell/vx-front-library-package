import { useState as p, useCallback as m } from "react";
import { BaseApi as u } from "../api.js";
import { ApiRoutes as l } from "../ApiRoutes.js";
import { useStream as d } from "./Stream.js";
async function w(n, s) {
  const t = await fetch(
    l.feature_data(u.urlParams.feature),
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(n),
      signal: s
    }
  );
  if (!t.ok) {
    const e = await t.json();
    throw new Error(e.message);
  }
  return await t.json();
}
const b = () => {
  const { stream: n, setInterval: s } = d(), [t, e] = p({}), i = m((a) => {
    const o = new AbortController(), { signal: c } = o;
    (async () => {
      try {
        const r = await w(a, c);
        e((f) => ({ ...f, ...r }));
      } catch (r) {
        console.error(r);
      }
    })();
  }, []);
  return { get: m(
    (a, o) => {
      if (!(a in t) && o) {
        e((r) => ({ ...r, [a]: void 0 }));
        const c = {
          data_name: a,
          handler_name: o.name,
          handler_args: o.args
        };
        i(c);
      }
      return t[a] || void 0;
    },
    [t, i]
  ), stream: n, setInterval: s };
};
export {
  b as useData
};
