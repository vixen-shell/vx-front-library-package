import { useContext as s } from "react";
import { GlobalStateContext as a } from "../state/state.js";
import { BaseApi as o } from "../api/api.js";
import "../api/ApiRoutes.js";
const x = () => {
  const e = s(a);
  if (!e) throw new Error("The state provider is not available");
  const { state: n } = e;
  return { get: (t) => n[t], set: (t, r) => {
    o.state.eventHandler.send_event({
      id: "SET",
      data: { key: t, value: r }
    });
  }, save: () => {
    o.state.eventHandler.send_event({ id: "SAVE" });
  } };
};
export {
  x as useVxState
};
