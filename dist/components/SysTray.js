import { jsx as i, Fragment as c } from "react/jsx-runtime";
import { useRef as u, useEffect as p } from "react";
import "../api/api.js";
import "../api/ApiRoutes.js";
import { useSystray as f } from "../api/hooks/systray.js";
import { useDbusMenu as m } from "../api/hooks/dbusmenu.js";
import "dayjs";
import { SystemIcon as v } from "./SystemIcon.js";
const y = ({ item: t, iconSize: n, tooltip: a = !1 }) => {
  const l = m(t.service_name), s = u(null);
  return p(() => {
    if (!s.current) return;
    let r = null;
    const o = s.current;
    if (t.status === "needsattention") {
      let e = !0;
      r = setInterval(() => {
        e ? o.style.opacity = "50%" : o.style.opacity = "100%", e = !e;
      }, 1e3);
    }
    return () => {
      r && clearInterval(r), o.style.opacity = "100%";
    };
  }, [s, t.status]), t.status !== "passive" ? /* @__PURE__ */ i(
    "div",
    {
      ref: s,
      onClick: () => l.popup(),
      title: a ? t.tooltip : void 0,
      children: /* @__PURE__ */ i(v, { iconName: t.icon_name, size: n })
    }
  ) : /* @__PURE__ */ i(c, {});
}, R = ({
  style: t = void 0,
  direction: n = void 0,
  iconSize: a = 16,
  gap: l = void 0,
  tooltip: s = !1,
  ...r
}) => {
  const o = f();
  return /* @__PURE__ */ i(
    "div",
    {
      ...r,
      style: {
        ...t,
        display: "flex",
        flexDirection: n,
        gap: l
      },
      children: o.map((e) => /* @__PURE__ */ i(
        y,
        {
          item: {
            service_name: e.service_name,
            icon_name: e.icon_name,
            tooltip: e.tooltip,
            status: e.status
          },
          iconSize: a,
          tooltip: s
        },
        e.service_name
      ))
    }
  );
};
export {
  R as SysTray
};
