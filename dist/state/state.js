import { jsx as d } from "react/jsx-runtime";
import { createContext as c, useReducer as l, useEffect as u } from "react";
import { BaseApi as n } from "../api/api.js";
import "../api/ApiRoutes.js";
const t = class t {
  static set initialState(o) {
    if (t._initialState)
      console.error("Initial state is already set.");
    else {
      t._initialState = o;
      const i = {};
      for (const e in t._initialState)
        i[`update_${e}`] = e;
      t._reducer = (e, r) => r.type in i ? { ...e, [i[r.type]]: r.payload } : e;
    }
  }
  static get initialState() {
    if (t._initialState) return t._initialState;
    throw new Error("State is not defined.");
  }
  static get reducer() {
    if (t._reducer) return t._reducer;
    throw new Error("State is not defined.");
  }
};
t._initialState = void 0, t._reducer = void 0;
let a = t;
const p = c(void 0), y = ({ children: s }) => {
  const [o, i] = l(
    a.reducer,
    a.initialState
  );
  return u(() => {
    function e(r) {
      i({
        type: `update_${r.key}`,
        payload: r.value
      });
    }
    return n.state.eventHandler.addEventListener(
      "UPDATE",
      e
    ), n.state.eventHandler.connect(), () => {
      n.state.eventHandler.removeEventListener(
        "UPDATE",
        e
      ), n.state.eventHandler.disconnect();
    };
  }, []), /* @__PURE__ */ d(p.Provider, { value: { state: o, dispatch: i }, children: s });
};
export {
  a as GlobalState,
  p as GlobalStateContext,
  y as GlobalStateProvider
};
