import { jsx as m } from "react/jsx-runtime";
import '../assets/styles.css';import '../assets/ThemeProvider.css';/* empty css                 */
import { MantineProvider as r, createTheme as i } from "@mantine/core";
import { useEffect as a } from "react";
import { BaseApi as e } from "../api/api.js";
import "../api/ApiRoutes.js";
import { useVxState as f } from "../stateHook/index.js";
const v = ({ children: t }) => {
  const { state: o } = f();
  return a(() => {
    document.documentElement.style.zoom = String(o.vx_ui_scale);
  }, [o.vx_ui_scale]), /* @__PURE__ */ m(
    r,
    {
      theme: i({
        fontFamily: o.vx_ui_font_family || e.defaultFonts.font_family,
        fontFamilyMonospace: o.vx_ui_font_family_monospace || e.defaultFonts.font_family_monospace,
        primaryColor: o.vx_ui_color
      }),
      defaultColorScheme: "auto",
      forceColorScheme: o.vx_ui_color_scheme || void 0,
      children: t
    }
  );
};
export {
  v as ThemeProvider
};
