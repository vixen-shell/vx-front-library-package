import { useContext as s } from "react";
import { GlobalStateContext as r } from "../state/index.js";
import { BaseApi as n } from "../api/api.js";
import "../api/ApiRoutes.js";
const I = () => {
  const o = s(r);
  if (!o) throw new Error("The state provider is not available");
  const { state: e } = o;
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
    saveStateItem: (t) => {
      n.state.eventHandler.send_event({
        id: "SAVE_ITEM",
        data: { key: t }
      });
    }
  };
};
export {
  I as useVxState
};
