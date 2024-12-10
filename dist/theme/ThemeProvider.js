import { jsx as t } from "react/jsx-runtime";
import '../assets/styles.css';import '../assets/ThemeProvider.css';/* empty css                 */
import { MantineProvider as m, createTheme as i } from "@mantine/core";
import { useEffect as a } from "react";
import { BaseApi as e } from "../api/api.js";
import "../api/ApiRoutes.js";
import "dayjs";
import { useVxState as l } from "../stateHook/index.js";
import { DatesProvider as f } from "@mantine/dates";
const y = ({ children: r }) => {
  const { state: o } = l();
  return a(() => {
    document.documentElement.style.zoom = String(o.vx_ui_scale);
  }, [o.vx_ui_locale, o.vx_ui_scale]), /* @__PURE__ */ t(
    m,
    {
      theme: i({
        fontFamily: o.vx_ui_font_family || e.defaultFonts.font_family,
        fontFamilyMonospace: o.vx_ui_font_family_monospace || e.defaultFonts.font_family_monospace,
        primaryColor: o.vx_ui_color
      }),
      defaultColorScheme: "auto",
      forceColorScheme: o.vx_ui_color_scheme || void 0,
      children: /* @__PURE__ */ t(f, { settings: { locale: e.locale(!0) }, children: r })
    }
  );
};
export {
  y as ThemeProvider
};
