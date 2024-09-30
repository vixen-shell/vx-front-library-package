import { jsx as r } from "react/jsx-runtime";
import { GlobalStateProvider as m } from "../state/state.js";
import "react";
import "../api/ApiRoutes.js";
import "../api/api.js";
import { RouterRender as d } from "../router/index.js";
import { ThemeProvider as n } from "../theme/ThemeProvider.js";
import { RouterProvider as p } from "../router/router.js";
const P = ({ initialTheme: o, initialRoute: t, state: i }) => {
  const e = () => /* @__PURE__ */ r(p, { initialRoute: t, children: /* @__PURE__ */ r(d, {}) });
  return /* @__PURE__ */ r(n, { initialTheme: o, children: /* @__PURE__ */ r(i ? () => /* @__PURE__ */ r(m, { children: /* @__PURE__ */ r(e, {}) }) : e, {}) });
};
export {
  P as default
};
