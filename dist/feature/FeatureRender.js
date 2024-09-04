import { jsx as r } from "react/jsx-runtime";
import { GlobalStateProvider as i } from "../state/state.js";
import "react";
import "../api/ApiRoutes.js";
import "../api/api.js";
import { RouterRender as m } from "../router/index.js";
import { RouterProvider as d } from "../router/router.js";
const c = ({
  initialRoute: e,
  state: t
}) => {
  const o = () => /* @__PURE__ */ r(d, { initialRoute: e, children: /* @__PURE__ */ r(m, {}) });
  return t ? /* @__PURE__ */ r(i, { children: /* @__PURE__ */ r(o, {}) }) : /* @__PURE__ */ r(o, {});
};
export {
  c as default
};
