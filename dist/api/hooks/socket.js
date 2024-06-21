import { useRef as u, useEffect as f } from "react";
import { ApiRoutes as i } from "../ApiRoutes.js";
import { SocketEventHandler as m } from "../SocketEventHandler.js";
const d = (n, o, c, r) => {
  const e = u(
    new m(
      i.feature_socket(n, o, c)
    )
  );
  return f(() => {
    const t = (s) => {
      console.error(s.message);
    };
    return e.current.addEventListener("ERROR", t), r && e.current.connect(), () => {
      e.current.removeEventListener("ERROR", t), r && e.current.disconnect();
    };
  }, [r]), e.current;
};
export {
  d as useFeatureSocket
};
