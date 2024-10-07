import { jsx as e } from "react/jsx-runtime";
import { useRouter as i } from "./hook.js";
const m = ({ route: o, children: t }) => {
  const { setRoute: r } = i();
  return /* @__PURE__ */ e(
    "div",
    {
      style: { cursor: "pointer !important" },
      onClick: () => r(o),
      children: t
    }
  );
};
export {
  m as Link
};
