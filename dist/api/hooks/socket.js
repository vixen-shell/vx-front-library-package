import { useRef as c, useEffect as s } from "react";
import { BaseApi as u } from "../api.js";
import { ApiRoutes as m } from "../ApiRoutes.js";
import { SocketEventHandler as f } from "../SocketEventHandler.js";
const E = (o) => {
  const r = c(
    new f(
      m.feature_socket(u.urlParams.feature, o)
    )
  );
  return s(() => {
    const e = r.current, t = (n) => {
      console.error(n.message);
    };
    return e.addEventListener("ERROR", t), e.connect(), () => {
      e.removeEventListener("ERROR", t), e.disconnect();
    };
  }, []), r.current;
};
export {
  E as useSocket
};
