var l = Object.defineProperty;
var p = (r, t, e) => t in r ? l(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var c = (r, t, e) => (p(r, typeof t != "symbol" ? t + "" : t, e), e);
import { jsx as E } from "react/jsx-runtime";
import { createContext as f, useReducer as S, useEffect as m, useContext as y } from "react";
import { Api as a } from "../api/api.js";
const i = class i {
  static set initialState(t) {
    if (i._initialState)
      console.error("Initial state is already set.");
    else {
      i._initialState = t;
      const e = {};
      for (const n in i._initialState)
        e[`update_${n}`] = n;
      i._reducer = (n, s) => s.type in e ? { ...n, [e[s.type]]: s.payload } : n;
    }
  }
  static get initialState() {
    if (i._initialState)
      return i._initialState;
    throw new Error("State is not defined.");
  }
  static get reducer() {
    if (i._reducer)
      return i._reducer;
    throw new Error("State is not defined.");
  }
};
c(i, "_initialState"), c(i, "_reducer");
let o = i;
const u = f(void 0), g = ({ children: r }) => {
  const [t, e] = S(
    o.reducer,
    o.initialState
  );
  return m(() => {
    function n(s) {
      e({
        type: `update_${s.key}`,
        payload: s.value
      });
    }
    return a.stateEvents.addEventListener("UPDATE", n), () => {
      a.stateEvents.removeEventListener("UPDATE", n);
    };
  }, []), /* @__PURE__ */ E(u.Provider, { value: { state: t, dispatch: e }, children: r });
}, A = () => {
  const r = y(u);
  if (!r)
    throw new Error("The state provider is not available");
  const { state: t } = r;
  return { getItem: (d) => t[d], setItem: (d, v) => {
    a.stateEvents.send_event({ id: "SET", data: { key: d, value: v } });
  }, save: () => {
    a.stateEvents.send_event({ id: "SAVE" });
  } };
};
export {
  o as GlobalState,
  g as GlobalStateProvider,
  A as useGlobalState
};
