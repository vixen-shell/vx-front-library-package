import { jsx as d } from "react/jsx-runtime";
import { createContext as c, useReducer as u, useEffect as l } from "react";
import "../api/ApiRoutes.js";
import { Api as o } from "../api/api.js";
const t = class t {
  static set initialState(a) {
    if (t._initialState)
      console.error("Initial state is already set.");
    else {
      t._initialState = a;
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
let n = t;
const p = c(void 0), m = ({ children: s }) => {
  const [a, i] = u(
    n.reducer,
    n.initialState
  );
  return l(() => {
    function e(r) {
      i({
        type: `update_${r.key}`,
        payload: r.value
      });
    }
    return o.stateEvents.addEventListener("UPDATE", e), () => {
      o.stateEvents.removeEventListener("UPDATE", e);
    };
  }, []), /* @__PURE__ */ d(p.Provider, { value: { state: a, dispatch: i }, children: s });
};
export {
  n as GlobalState,
  p as GlobalStateContext,
  m as GlobalStateProvider
};
