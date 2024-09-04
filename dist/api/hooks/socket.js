import { useRef as i, useEffect as m } from "react";
import { ApiRoutes as u } from "../ApiRoutes.js";
import { SocketEventHandler as R } from "../SocketEventHandler.js";
const d = (n, c, s, r) => {
  const t = i(
    new R(u.feature_socket(n, c, s))
  );
  return m(() => {
    const e = t.current, o = (f) => {
      console.error(f.message);
    };
    return e.addEventListener("ERROR", o), r && e.connect(), () => {
      e.removeEventListener("ERROR", o), r && e.disconnect();
    };
  }, [r]), t.current;
};
export {
  d as useSocket
};
