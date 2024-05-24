var v = Object.defineProperty;
var l = (i, t, e) => t in i ? v(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var c = (i, t, e) => (l(i, typeof t != "symbol" ? t + "" : t, e), e);
import { jsx as E } from "react/jsx-runtime";
import { createContext as f, useReducer as p, useEffect as m, useContext as y } from "react";
import { Api as s } from "../api/api.js";
const r = class r {
  static set initialState(t) {
    if (r._initialState)
      console.error("Initial state is already set.");
    else {
      r._initialState = t;
      const e = {};
      for (const n in r._initialState)
        e[`update_${n}`] = n;
      r._reducer = (n, a) => a.type in e ? { ...n, [e[a.type]]: a.payload } : n;
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
    function n(a) {
      e({
        type: `update_${a.key}`,
        payload: a.value
      });
    }
    return s.stateEvents.addEventListener("UPDATE", n), () => {
      s.stateEvents.removeEventListener("UPDATE", n);
    };
  }, []), /* @__PURE__ */ E(u.Provider, { value: { state: t, dispatch: e }, children: i });
}, g = () => {
  const i = y(u);
  if (!i)
    throw new Error(
      "useFeatureState must be used within a FeatureStateProvider."
    );
  const { state: t } = i;
  return { getStateItem: (d) => t[d], setStateItem: (d, S) => {
    s.stateEvents.send_event({ id: "SET", data: { key: d, value: S } });
  }, saveState: () => {
    s.stateEvents.send_event({ id: "SAVE" });
  } };
};
export {
  o as GlobalState,
  P as GlobalStateProvider,
  g as useGlobalState
};
