import { jsx as r } from "react/jsx-runtime";
import { GlobalStateProvider as t } from "../state/state.js";
import "react";
import "../api/ApiRoutes.js";
import "../api/api.js";
import { RouterRender as i } from "../router/index.js";
import { ThemeProvider as m } from "../theme/ThemeProvider.js";
import { RouterProvider as d } from "../router/router.js";
const s = ({ gtkFonts: o, initialRoute: e }) => /* @__PURE__ */ r(t, { children: /* @__PURE__ */ r(m, { fonts: o, children: /* @__PURE__ */ r(d, { initialRoute: e, children: /* @__PURE__ */ r(i, {}) }) }) });
export {
  s as default
};
