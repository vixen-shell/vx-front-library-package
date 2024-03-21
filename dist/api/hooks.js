import { useState as i, useRef as a, useEffect as n } from "react";
import { Api as s } from "./api.js";
const c = () => {
  const [e, t] = i(!1), [o, r] = i(void 0), g = a(
    (L) => r(L)
  );
  return n(() => () => {
    e && s.Logger.removeListener(g.current);
  }, []), n(() => {
    e ? s.Logger.addListener(g.current) : s.Logger.removeListener(g.current);
  }, [e]), {
    logListening: e,
    setLogListening: t,
    logData: o
  };
}, l = () => {
  const { setLogListening: e, logData: t } = c(), [o, r] = i([]);
  return n(() => {
    (async () => (r(await s.Logger.logs()), e(!0)))();
  }, []), n(() => {
    t && r([...o, t]);
  }, [t]), {
    logHistory: o,
    latestLog: t
  };
};
export {
  l as useLogHistory,
  c as useLogListener
};
