import { useState as m, useRef as f, useCallback as u, useEffect as E } from "react";
import { BaseApi as R } from "../api.js";
import { ApiRoutes as _ } from "../ApiRoutes.js";
import { SocketEventHandler as p } from "../SocketEventHandler.js";
const l = (s = !1, a) => {
  const [o, c] = m({}), d = f(
    new p(
      _.feature_data_streamer_socket(R.urlParams.feature)
    )
  ), i = u(
    (e, t) => {
      if (!(e in o) && t) {
        c((r) => ({ ...r, [e]: void 0 }));
        const n = {
          data_name: e,
          handler_name: t.name,
          handler_args: t.args
        };
        d.current.send_event({
          id: "ADD_HANDLER",
          data: n
        });
      }
      return o[e];
    },
    [o]
  );
  return E(() => {
    const e = d.current, t = (r) => {
      c(r);
    }, n = (r) => {
      console.error(r.message), c({});
    };
    return e.addEventListener("UPDATE", t), e.addEventListener("ERROR", n), s && (e.connect(), a && e.send_event({
      id: "SET_INTERVAL",
      data: { interval: a }
    })), () => {
      e.removeEventListener("UPDATE", t), e.removeEventListener("ERROR", n), s && e.disconnect();
    };
  }, [s, a]), { stream: i };
};
export {
  l as useStream
};
