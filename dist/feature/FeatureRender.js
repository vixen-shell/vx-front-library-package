import { jsx as r } from "react/jsx-runtime";
import { GlobalStateProvider as o } from "../state/state.js";
import { RouterRender as t } from "../router/index.js";
import { ThemeProvider as i } from "../theme/ThemeProvider.js";
import { RouterProvider as m } from "../router/router.js";
const a = ({ initialRoute: e }) => /* @__PURE__ */ r(o, { children: /* @__PURE__ */ r(i, { children: /* @__PURE__ */ r(m, { initialRoute: e, children: /* @__PURE__ */ r(t, {}) }) }) });
export {
  a as default
};
