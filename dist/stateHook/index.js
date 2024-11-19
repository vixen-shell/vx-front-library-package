import { useContext as o } from "react";
import { GlobalStateContext as r } from "../state/index.js";
import { BaseApi as n } from "../api/api.js";
import "../api/ApiRoutes.js";
const I = () => {
  const s = o(r);
  if (!s) throw new Error("The state provider is not available");
  const { state: e } = s;
  return {
    state: e,
    getStateItemCopy: (t) => JSON.parse(JSON.stringify(e[t])),
    setStateItem: (t, a) => {
      n.state.eventHandler.send_event({
        id: "SET",
        data: {
          key: t,
          value: typeof a == "function" ? a(e[t]) : a
        }
      });
    },
    saveState: () => {
      n.state.eventHandler.send_event({ id: "SAVE" });
    },
    saveStateItems: (t) => {
      n.state.eventHandler.send_event({
        id: "SAVE_ITEMS",
        data: { keys: t }
      });
    }
  };
};
export {
  I as useVxState
};
