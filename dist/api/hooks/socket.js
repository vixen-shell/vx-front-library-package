import { useRef as s, useEffect as u } from "react";
import { ApiRoutes as f } from "../ApiRoutes.js";
import { SocketEventHandler as i } from "../SocketEventHandler.js";
const p = (n, o, r) => {
  const e = s(
    new i(
      f.feature_socket(n, o)
    )
  );
  return u(() => {
    const t = (c) => {
      console.error(c.message);
    };
    return e.current.addEventListener("ERROR", t), r && e.current.connect(), () => {
      e.current.removeEventListener("ERROR", t), r && e.current.disconnect();
    };
  }, [r]), e.current;
};
export {
  p as useFeatureSocket
};
