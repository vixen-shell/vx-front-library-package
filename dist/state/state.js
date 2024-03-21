var l = Object.defineProperty;
var v = (i, t, e) => t in i ? l(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var c = (i, t, e) => (v(i, typeof t != "symbol" ? t + "" : t, e), e);
import { jsx as f } from "react/jsx-runtime";
import { createContext as p, useReducer as E, useEffect as m, useContext as T } from "react";
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
const u = p(void 0), _ = ({ children: i }) => {
  const [t, e] = E(
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
    return s.events.addListener("UPDATE_STATE", n), () => {
      s.events.removeListener("UPDATE_STATE", n);
    };
  }, []), /* @__PURE__ */ f(u.Provider, { value: { state: t, dispatch: e }, children: i });
}, h = () => {
  const i = T(u);
  if (!i)
    throw new Error(
      "useFeatureState must be used within a FeatureStateProvider."
    );
  const { state: t } = i;
  return { getStateItem: (d) => t[d], setStateItem: (d, S) => {
    s.events.send({ id: "SET_STATE", data: { key: d, value: S } });
  }, saveState: () => {
    s.events.send({ id: "SAVE_STATE" });
  } };
};
export {
  o as GlobalState,
  _ as GlobalStateProvider,
  h as useGlobalState
};
