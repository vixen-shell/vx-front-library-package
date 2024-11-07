import { useContext as r } from "react";
import { GlobalStateContext as a } from "../state/index.js";
import { BaseApi as e } from "../api/api.js";
import "../api/ApiRoutes.js";
const f = () => {
  const n = r(a);
  if (!n) throw new Error("The state provider is not available");
  const { state: s } = n;
  return {
    get get() {
      return s;
    },
    getCopy: (t) => JSON.parse(JSON.stringify(s[t])),
    set: (t, o) => {
      e.state.eventHandler.send_event({
        id: "SET",
        data: { key: t, value: o }
      });
    },
    save: () => {
      e.state.eventHandler.send_event({ id: "SAVE" });
    },
    saveItem: (t) => {
      e.state.eventHandler.send_event({
        id: "SAVE_ITEM",
        data: { key: t }
      });
    }
  };
};
export {
  f as useVxState
};
