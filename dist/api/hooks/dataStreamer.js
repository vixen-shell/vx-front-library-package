import { useState as m, useRef as E, useEffect as f, useCallback as v } from "react";
import { ApiRoutes as R } from "../ApiRoutes.js";
import { SocketEventHandler as p } from "../SocketEventHandler.js";
const k = (d, n, o, t) => {
  const [i, s] = m(void 0), e = E(
    new p(R.feature_data_streamer(d))
  );
  f(() => {
    const a = (r) => {
      s(r);
    }, u = (r) => {
      console.error(r.message), s(void 0);
    };
    return e.current.addEventListener("UPDATE", a), e.current.addEventListener("ERROR", u), t && c(), () => {
      e.current.removeEventListener("UPDATE", a), e.current.removeEventListener("ERROR", u), t && e.current.disconnect();
    };
  }, [t]);
  const c = v(() => {
    e.current.connect(), e.current.send_event({
      id: "INIT",
      data: { data_handlers: n, interval: o }
    });
  }, [n, o]);
  return { data: i, start: c, stop: e.current.disconnect };
};
export {
  k as useFeatureDataStreamer
};
