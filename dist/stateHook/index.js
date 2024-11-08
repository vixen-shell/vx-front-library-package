import { useContext as r } from "react";
import { GlobalStateContext as a } from "../state/index.js";
import { BaseApi as o } from "../api/api.js";
import "../api/ApiRoutes.js";
const l = () => {
  const s = r(a);
  if (!s) throw new Error("The state provider is not available");
  const { state: e } = s;
  return {
    get get() {
      return e;
    },
    getCopy: (t) => JSON.parse(JSON.stringify(e[t])),
    set: (t, n) => {
      o.state.eventHandler.send_event({
        id: "SET",
        data: {
          key: t,
          value: typeof n == "function" ? n(e[t]) : n
        }
      });
    },
    save: () => {
      o.state.eventHandler.send_event({ id: "SAVE" });
    },
    saveItem: (t) => {
      o.state.eventHandler.send_event({
        id: "SAVE_ITEM",
        data: { key: t }
      });
    }
  };
};
export {
  l as useVxState
};
