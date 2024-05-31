var l = Object.defineProperty;
var E = (i, t, e) => t in i ? l(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var c = (i, t, e) => (E(i, typeof t != "symbol" ? t + "" : t, e), e);
import { jsx as S } from "react/jsx-runtime";
import { createContext as f, useReducer as p, useEffect as m, useContext as y } from "react";
import { Api as a } from "../api/api.js";
const r = class r {
  static set initialState(t) {
    if (r._initialState)
      console.error("Initial state is already set.");
    else {
      r._initialState = t;
      const e = {};
      for (const n in r._initialState)
        e[`update_${n}`] = n;
      r._reducer = (n, s) => s.type in e ? { ...n, [e[s.type]]: s.payload } : n;
    }
  }
  static get initialState() {
    if (r._initialState)
      return r._initialState;
    throw new Error("State is not defined.");
  }
  static get reducer() {
    if (r._reducer)
      return r._reducer;
    throw new Error("State is not defined.");
  }
};
c(r, "_initialState"), c(r, "_reducer");
let o = r;
const u = f(void 0), P = ({ children: i }) => {
  const [t, e] = p(
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
  }, []), /* @__PURE__ */ S(u.Provider, { value: { state: t, dispatch: e }, children: i });
}, g = () => {
  const i = y(u);
  if (!i)
    throw new Error(
      "useFeatureState must be used within a FeatureStateProvider."
    );
  const { state: t } = i;
  return { getItem: (d) => t[d], setItem: (d, v) => {
    a.stateEvents.send_event({ id: "SET", data: { key: d, value: v } });
  }, save: () => {
    a.stateEvents.send_event({ id: "SAVE" });
  } };
};
export {
  o as GlobalState,
  P as GlobalStateProvider,
  g as useGlobalState
};
