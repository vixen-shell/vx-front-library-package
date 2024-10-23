import { useState as m, useRef as u, useCallback as c, useEffect as E } from "react";
import { BaseApi as v } from "../api.js";
import { ApiRoutes as f } from "../ApiRoutes.js";
import { SocketEventHandler as R } from "../SocketEventHandler.js";
const D = () => {
  const [a, o] = m({}), s = u(
    new R(
      f.feature_data_streamer_socket(v.urlParams.feature)
    )
  ), d = c(
    (e, t) => {
      if (!(e in a) && t) {
        o((r) => ({ ...r, [e]: void 0 }));
        const n = {
          data_name: e,
          handler_name: t.name,
          handler_args: t.args
        };
        s.current.send_event({
          id: "ADD_HANDLER",
          data: n
        });
      }
      return a[e] || void 0;
    },
    [a]
  ), i = c((e) => {
    s.current.send_event({
      id: "SET_INTERVAL",
      data: { interval: e }
    });
  }, []);
  return E(() => {
    const e = s.current, t = (r) => {
      o(r);
    }, n = (r) => {
      console.error(r.message), o({});
    };
    return e.addEventListener("UPDATE", t), e.addEventListener("ERROR", n), e.connect(), () => {
      e.removeEventListener("UPDATE", t), e.removeEventListener("ERROR", n), e.disconnect();
    };
  }, []), { stream: d, setInterval: i };
};
export {
  D as useStream
};
