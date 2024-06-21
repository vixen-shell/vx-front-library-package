import { useState as E, useRef as f, useEffect as R, useCallback as p } from "react";
import { ApiRoutes as v } from "../ApiRoutes.js";
import { SocketEventHandler as D } from "../SocketEventHandler.js";
const l = (d, i, n, s, t) => {
  const [m, o] = E({}), e = f(
    new D(
      v.feature_data_streamer(d, i)
    )
  );
  R(() => {
    const a = (r) => {
      o(r);
    }, u = (r) => {
      console.error(r.message), o({});
    };
    return e.current.addEventListener("UPDATE", a), e.current.addEventListener("ERROR", u), t && c(), () => {
      e.current.removeEventListener("UPDATE", a), e.current.removeEventListener("ERROR", u), t && e.current.disconnect();
    };
  }, [t]);
  const c = p(() => {
    e.current.connect(), e.current.send_event({
      id: "INIT",
      data: { data_handlers: n, interval: s }
    });
  }, [n, s]);
  return { data: m, start: c, stop: e.current.disconnect };
};
export {
  l as useFeatureDataStreamer
};
