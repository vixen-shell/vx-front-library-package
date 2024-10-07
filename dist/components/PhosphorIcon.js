import { jsx as d } from "react/jsx-runtime";
import { useState as a, useRef as w, useEffect as l } from "react";
import { ApiRoutes as v } from "../api/ApiRoutes.js";
import { ImageBroken as E } from "./ImageBroken.js";
import "../state/state.js";
import { useGlobalState as b } from "../state/hook.js";
async function y(o, r = void 0) {
  const e = await fetch(v.phosphor_icons(o, r));
  if (!e.ok) {
    const n = await e.json();
    throw new Error(n.message || "Unhandled error");
  }
  const t = await e.blob();
  if (t.type !== "image/svg+xml")
    throw new Error("Unsupported file type");
  return t;
}
async function x(o) {
  return new Promise((r, e) => {
    const t = new FileReader();
    t.onload = () => {
      r(t.result);
    }, t.onerror = () => {
      e(new Error("Error reading blob"));
    }, t.readAsText(o);
  });
}
function I(o) {
  return new DOMParser().parseFromString(
    o,
    "image/svg+xml"
  ).documentElement;
}
function S(o, r) {
  o.setAttribute("fill", r);
}
const P = ({ iconName: o, iconStyle: r = void 0, size: e = 32, color: t = void 0 }) => {
  const { getItem: n } = b(), [h, m] = a(!1), [c, u] = a(null), [f, g] = a(n("vx_ui_icons")), p = w(document.createElement("div"));
  return l(() => {
    r || g(n("vx_ui_icons"));
  }, [n, r]), l(() => ((async () => {
    m(!1);
    try {
      u(await y(o, r || f));
    } catch (s) {
      console.error(s), m(!0);
    }
  })(), () => u(null)), [o, r, f]), l(() => {
    const s = p.current;
    return c && (async () => {
      const i = I(await x(c));
      t && S(i, t), e && (i.style.width = String(e), i.style.height = String(e)), s.appendChild(i.cloneNode(!0));
    })(), () => {
      s.innerHTML = "";
    };
  }, [c, e, t]), h ? /* @__PURE__ */ d(E, { size: e, color: "grey" }) : /* @__PURE__ */ d("div", { style: { width: e, height: e }, ref: p });
};
export {
  P as PhosphorIcon
};
