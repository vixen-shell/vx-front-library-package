import { useRef as T, useState as v, useEffect as p, useCallback as o } from "react";
import { ApiRoutes as F } from "../ApiRoutes.js";
import { BaseApi as M } from "../api.js";
import { SocketEventHandler as l } from "../SocketEventHandler.js";
const C = (_ = M.urlParams.feature) => {
  const n = T(
    new l(F.feature_frames_socket(_))
  ), [L, r] = v([]), [f, s] = v([]);
  p(() => {
    const e = n.current, E = (t) => {
      console.error(t.message);
    }, a = (t) => {
      r(t.frame_ids), s(t.active_frame_ids);
    }, i = (t) => {
      s(t.active_frame_ids);
    }, c = (t) => {
      s(t.active_frame_ids);
    }, d = (t) => {
      r(t.frame_ids);
    }, m = (t) => {
      r(t.frame_ids);
    };
    return e.addEventListener("ERROR", E), e.addEventListener("FRAME_IDS", a), e.addEventListener("OPEN", i), e.addEventListener("CLOSE", c), e.addEventListener("NEW_FROM_TEMPLATE", d), e.addEventListener(
      "REMOVE_FROM_TEMPLATE",
      m
    ), e.connect(), e.send_event({ id: "UPDATE" }), () => {
      e.removeEventListener("ERROR", E), e.removeEventListener("OPEN_SOCKET", a), e.removeEventListener("OPEN", i), e.removeEventListener("CLOSE", c), e.removeEventListener(
        "NEW_FROM_TEMPLATE",
        d
      ), e.removeEventListener(
        "REMOVE_FROM_TEMPLATE",
        m
      ), e.disconnect();
    };
  }, []);
  const O = o((e) => {
    n.current.send_event({
      id: "TOGGLE",
      data: { frame_id: e }
    });
  }, []), u = o((e) => {
    n.current.send_event({
      id: "OPEN",
      data: { frame_id: e }
    });
  }, []), R = o((e) => {
    n.current.send_event({
      id: "CLOSE",
      data: { frame_id: e }
    });
  }, []);
  return { ids: L, actives: f, toggle: O, open: u, close: R };
};
export {
  C as useFrames
};
