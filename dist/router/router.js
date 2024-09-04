import { jsx as i } from "react/jsx-runtime";
import n from "../ui/components/ErrorFrame/index.js";
import { createContext as a, useState as c } from "react";
const t = class t {
  static define(e) {
    t.items ? console.error("Route items are already set") : t.items = e;
  }
  static get(e) {
    if (t.items && t.exists(e))
      return t.items[e];
    {
      const r = e ? `Route item '${e}' is not defined` : "Missing 'route' parameter";
      return console.error(r), /* @__PURE__ */ i(n, { message: r });
    }
  }
  static exists(e) {
    return t.items && e in t.items;
  }
};
t.items = void 0;
let s = t;
const u = a(void 0), x = ({ initialRoute: o, children: e }) => {
  const [r, m] = c(o);
  return /* @__PURE__ */ i(u.Provider, { value: { route: r, setRoute: m }, children: e });
};
export {
  u as RouterContext,
  x as RouterProvider,
  s as Routes
};
