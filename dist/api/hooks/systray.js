import { useRef as a, useState as i, useEffect as m } from "react";
import { ApiRoutes as u } from "../ApiRoutes.js";
import { BaseApi as E } from "../api.js";
import { SocketEventHandler as y } from "../SocketEventHandler.js";
const R = () => {
  const n = a(
    new y(
      u.feature_systray_socket(E.urlParams.feature)
    )
  ), [o, c] = i([]);
  return m(() => {
    const e = n.current, r = (t) => {
      console.error(t.message);
    }, s = (t) => {
      c(t.systray);
    };
    return e.addEventListener("UPDATE", s), e.addEventListener("ERROR", r), e.connect(), e.send_event({ id: "UPDATE" }), () => {
      e.removeEventListener("UPDATE", s), e.removeEventListener("ERROR", r), e.disconnect();
    };
  }, []), o;
};
export {
  R as useSystray
};
