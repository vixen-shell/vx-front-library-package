import { jsx as s } from "react/jsx-runtime";
import { useRouter as i } from "./hook.js";
const c = ({ className: o, route: r, children: t }) => {
  const { setRoute: e } = i();
  return /* @__PURE__ */ s(
    "div",
    {
      className: `ui_link ${o}`,
      style: { cursor: "pointer" },
      onClick: () => e(r),
      children: t
    }
  );
};
export {
  c as RouterLink
};
