import { jsx as e } from "react/jsx-runtime";
import '../assets/styles.css';import '../assets/ThemeProvider.css';/* empty css                 */
import { createTheme as r, MantineProvider as c } from "@mantine/core";
import { createContext as l, useState as i } from "react";
const s = l(
  void 0
), C = ({
  initialTheme: o,
  children: t
}) => {
  const [m, n] = i(
    r({
      fontFamily: o.font_family,
      fontFamilyMonospace: o.font_family_monospace,
      primaryColor: o.ui_color
    })
  ), a = (f) => {
    n(
      r({
        primaryColor: f,
        fontFamily: o.font_family
      })
    );
  };
  return /* @__PURE__ */ e(s.Provider, { value: { setThemeColor: a }, children: /* @__PURE__ */ e(c, { theme: m, defaultColorScheme: "auto", children: t }) });
};
export {
  s as ThemeContext,
  C as ThemeProvider
};
