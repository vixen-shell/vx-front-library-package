import { jsx as r } from "react/jsx-runtime";
import { GlobalStateProvider as o } from "../state/state.js";
import { RouterProvider as t, RouterRender as i } from "../router/router.js";
import { useEffect as m } from "react";
import f from "./initFeature.js";
const l = ({
  initialRoute: e
}) => (m(f, []), /* @__PURE__ */ r(o, { children: /* @__PURE__ */ r(t, { initialRoute: e, children: /* @__PURE__ */ r(i, {}) }) }));
export {
  l as default
};
