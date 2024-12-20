import { useState as m, useEffect as f, useCallback as u } from "react";
import { BaseApi as l } from "../api.js";
import r from "dayjs";
const w = (e = "YYYY-MM-DD HH:mm:ss", o = !0) => {
  const [s, t] = m("");
  f(() => {
    if (r.locale(l.locale(!0)), t(r().format(e)), o) {
      const i = setInterval(() => {
        t(r().format(e));
      }, 1e3);
      return () => clearInterval(i);
    }
  }, [e, o]);
  const c = u(
    (i = void 0) => {
      const n = r().format(i || e);
      return o || t(n), n;
    },
    [e, o]
  );
  return { time: s, now: c };
};
export {
  w as useTime
};
