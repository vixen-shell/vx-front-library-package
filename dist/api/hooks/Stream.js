import { useState as f, useRef as R, useEffect as p, useCallback as v } from "react";
import { ApiRoutes as k } from "../ApiRoutes.js";
import { SocketEventHandler as L } from "../SocketEventHandler.js";
const A = (u, m, o, s, r) => {
  const [E, c] = f({}), t = R(
    new L(k.feature_data_streamer(u, m))
  );
  p(() => {
    const e = t.current, d = (n) => {
      c(n);
    }, i = (n) => {
      console.error(n.message), c({});
    };
    return e.addEventListener("UPDATE", d), e.addEventListener("ERROR", i), r && a(), () => {
      e.removeEventListener("UPDATE", d), e.removeEventListener("ERROR", i), r && e.disconnect();
    };
  }, [r]);
  const a = v(() => {
    t.current.connect(), t.current.send_event({
      id: "INIT",
      data: { data_handlers: o, interval: s }
    });
  }, [o, s]);
  return { data: E, start: a, stop: t.current.disconnect };
};
export {
  A as useStream
};
