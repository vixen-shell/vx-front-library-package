import { jsx as r } from "react/jsx-runtime";
import { GlobalStateProvider as d } from "../state/state.js";
import { RouterProvider as n, RouterRender as i } from "../router/router.js";
const u = ({
  initialRoute: o,
  state: t
}) => {
  const e = () => /* @__PURE__ */ r(n, { initialRoute: o, children: /* @__PURE__ */ r(i, {}) });
  return t ? /* @__PURE__ */ r(d, { children: /* @__PURE__ */ r(e, {}) }) : /* @__PURE__ */ r(e, {});
};
export {
  u as default
};
