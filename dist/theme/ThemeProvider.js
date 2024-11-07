import { jsx as m } from "react/jsx-runtime";
import '../assets/styles.css';/* empty css                 */
import { MantineProvider as r, createTheme as i } from "@mantine/core";
import { useEffect as a } from "react";
import { BaseApi as e } from "../api/api.js";
import "../api/ApiRoutes.js";
import { useVxState as f } from "../stateHook/index.js";
const x = ({ children: t }) => {
  const o = f();
  return a(() => {
    document.documentElement.style.zoom = String(o.get.vx_ui_scale);
  }, [o.get.vx_ui_scale]), /* @__PURE__ */ m(
    r,
    {
      theme: i({
        fontFamily: o.get.vx_ui_font_family || e.defaultFonts.font_family,
        fontFamilyMonospace: o.get.vx_ui_font_family_monospace || e.defaultFonts.font_family_monospace,
        primaryColor: o.get.vx_ui_color
      }),
      defaultColorScheme: o.get.vx_ui_color_scheme || "auto",
      children: t
    }
  );
};
export {
  x as ThemeProvider
};
