var a = Object.defineProperty;
var d = (t, e, r) => e in t ? a(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var u = (t, e, r) => (d(t, typeof e != "symbol" ? e + "" : e, r), r);
import { jsx as n } from "react/jsx-runtime";
import l from "../ui/components/ErrorFrame/index.js";
import { createContext as R, useState as f, useContext as x } from "react";
const o = class o {
  static define(e) {
    o.items ? console.error("Route items are already set") : o.items = e;
  }
  static get(e) {
    if (o.items && o.exists(e))
      return o.items[e];
    {
      const r = e ? `Route item '${e}' is not defined` : "Missing 'route' parameter";
      return console.error(r), /* @__PURE__ */ n(l, { message: r });
    }
  }
  static exists(e) {
    return o.items && e in o.items;
  }
};
u(o, "items");
let i = o;
const c = R(void 0), w = ({ initialRoute: t, children: e }) => {
  const [r, s] = f(t);
  return /* @__PURE__ */ n(c.Provider, { value: { route: r, setRoute: s }, children: e });
}, m = () => {
  const t = x(c);
  if (t)
    return t;
  throw new Error("useRouter must be used within a RouterProvider.");
}, P = () => i.get(m().route), h = ({ className: t, route: e, children: r }) => {
  const { setRoute: s } = m();
  return /* @__PURE__ */ n(
    "div",
    {
      className: `ui_link ${t}`,
      style: { cursor: "pointer" },
      onClick: () => s(e),
      children: r
    }
  );
};
export {
  h as RouterLink,
  w as RouterProvider,
  P as RouterRender,
  i as Routes,
  m as useRouter
};
