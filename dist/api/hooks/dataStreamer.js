import { useState as m, useRef as E, useEffect as f, useCallback as R } from "react";
import { ApiRoutes as p } from "../ApiRoutes.js";
import { SocketEventHandler as v } from "../SocketEventHandler.js";
const k = (d, n, s, t) => {
  const [i, o] = m({}), e = E(
    new v(p.feature_data_streamer(d))
  );
  f(() => {
    const a = (r) => {
      o(r);
    }, u = (r) => {
      console.error(r.message), o({});
    };
    return e.current.addEventListener("UPDATE", a), e.current.addEventListener("ERROR", u), t && c(), () => {
      e.current.removeEventListener("UPDATE", a), e.current.removeEventListener("ERROR", u), t && e.current.disconnect();
    };
  }, [t]);
  const c = R(() => {
    e.current.connect(), e.current.send_event({
      id: "INIT",
      data: { data_handlers: n, interval: s }
    });
  }, [n, s]);
  return { data: i, start: c, stop: e.current.disconnect };
};
export {
  k as useFeatureDataStreamer
};
