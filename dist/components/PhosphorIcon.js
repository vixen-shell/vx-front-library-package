import { jsx as g } from "react/jsx-runtime";
import { useState as l, useRef as E, useEffect as u } from "react";
import { ApiRoutes as b } from "../api/ApiRoutes.js";
import { ImageBroken as x } from "./ImageBroken.js";
import { useVxState as y } from "../stateHook/index.js";
async function _(t, o = void 0) {
  const r = await fetch(b.phosphor_icons(t, o));
  if (!r.ok) {
    const n = await r.json();
    throw new Error(n.message || "Unhandled error");
  }
  const e = await r.blob();
  if (e.type !== "image/svg+xml")
    throw new Error("Unsupported file type");
  return e;
}
async function S(t) {
  return new Promise((o, r) => {
    const e = new FileReader();
    e.onload = () => {
      o(e.result);
    }, e.onerror = () => {
      r(new Error("Error reading blob"));
    }, e.readAsText(t);
  });
}
function I(t) {
  return new DOMParser().parseFromString(
    t,
    "image/svg+xml"
  ).documentElement;
}
function R(t, o) {
  t.setAttribute("fill", o);
}
const j = ({
  iconName: t,
  style: o = void 0,
  iconStyle: r = void 0,
  size: e = 32,
  color: n = void 0,
  ...h
}) => {
  const c = y(), [v, f] = l(!1), [a, m] = l(null), [d, w] = l(c.get.vx_ui_icons), p = E(document.createElement("div"));
  return u(() => {
    r || w(c.get.vx_ui_icons);
  }, [r, c.get.vx_ui_icons]), u(() => ((async () => {
    f(!1);
    try {
      m(await _(t, r || d));
    } catch (s) {
      console.error(s), f(!0);
    }
  })(), () => m(null)), [t, r, d]), u(() => {
    const s = p.current;
    return a && (async () => {
      const i = I(await S(a));
      n && R(i, n), e && (i.style.width = String(e), i.style.height = String(e)), s.appendChild(i.cloneNode(!0));
    })(), () => {
      s.innerHTML = "";
    };
  }, [a, e, n]), v ? /* @__PURE__ */ g(x, { size: e, color: "grey" }) : /* @__PURE__ */ g(
    "div",
    {
      ...h,
      style: { ...o, width: e, height: e },
      ref: p
    }
  );
};
export {
  j as PhosphorIcon
};
