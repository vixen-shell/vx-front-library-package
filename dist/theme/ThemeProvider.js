import { jsx as m } from "react/jsx-runtime";
import '../assets/styles.css';import '../assets/ThemeProvider.css';/* empty css                 */
import { MantineProvider as r, createTheme as i } from "@mantine/core";
import "../state/state.js";
import { useGlobalState as a } from "../state/hook.js";
import { useEffect as n } from "react";
const _ = ({
  fonts: e,
  children: t
}) => {
  const { getItem: o } = a();
  return n(() => {
    document.documentElement.style.zoom = String(o("vx_ui_scale"));
  }, [o]), /* @__PURE__ */ m(
    r,
    {
      theme: i({
        fontFamily: e.font_family,
        fontFamilyMonospace: e.font_family_monospace,
        primaryColor: o("vx_ui_color")
      }),
      defaultColorScheme: "auto",
      children: t
    }
  );
};
export {
  _ as ThemeProvider
};
