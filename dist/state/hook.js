import { useContext as r } from "react";
import { GlobalStateContext as a } from "./state.js";
import "../api/ApiRoutes.js";
import { Api as o } from "../api/api.js";
const E = () => {
  const e = r(a);
  if (!e) throw new Error("The state provider is not available");
  const { state: s } = e;
  return { getItem: (t) => s[t], setItem: (t, n) => {
    o.stateEvents.send_event({ id: "SET", data: { key: t, value: n } });
  }, save: () => {
    o.stateEvents.send_event({ id: "SAVE" });
  } };
};
export {
  E as useGlobalState
};
