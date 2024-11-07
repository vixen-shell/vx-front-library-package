import { jsx as r } from "react/jsx-runtime";
import { GlobalStateProvider as m } from "../state/index.js";
import { RouterRender as o } from "../router/index.js";
import { ThemeProvider as t } from "../theme/ThemeProvider.js";
import "react";
import { BaseApi as i } from "../api/api.js";
import "../api/ApiRoutes.js";
import { PopupFrame as p } from "./PopupFrame.js";
import { RouterProvider as d } from "../router/router.js";
const R = ({ initialRoute: e }) => /* @__PURE__ */ r(m, { children: /* @__PURE__ */ r(t, { children: /* @__PURE__ */ r(d, { initialRoute: e, children: i.urlParams.popup ? /* @__PURE__ */ r(p, { children: /* @__PURE__ */ r(o, {}) }) : /* @__PURE__ */ r(o, {}) }) }) });
export {
  R as default
};
