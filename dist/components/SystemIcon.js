import { jsx as m } from "react/jsx-runtime";
import { useState as f, useRef as h, useEffect as d } from "react";
import { ApiRoutes as g } from "../api/ApiRoutes.js";
import { ImageBroken as p } from "./ImageBroken.js";
async function w(r) {
  const o = await fetch(g.system_icons(r));
  if (!o.ok) {
    const t = await o.json();
    throw new Error(t.message || "Unhandled error");
  }
  const e = await o.blob();
  if (e.type !== "image/svg+xml")
    throw new Error("Unsupported file type");
  return e;
}
async function b(r) {
  return new Promise((o, e) => {
    const t = new FileReader();
    t.onload = () => {
      o(t.result);
    }, t.onerror = () => {
      e(new Error("Error reading blob"));
    }, t.readAsText(r);
  });
}
function y(r) {
  const e = new DOMParser().parseFromString(
    r,
    "image/svg+xml"
  ).documentElement, t = e.getAttribute("width"), s = e.getAttribute("height");
  return e.setAttribute("viewBox", `0 0 ${t} ${s}`), e;
}
const A = ({
  iconName: r,
  style: o = void 0,
  size: e = 32,
  ...t
}) => {
  const [s, a] = f(!1), [c, l] = f(null), u = h(document.createElement("div"));
  return d(() => ((async () => {
    a(!1);
    try {
      l(await w(r));
    } catch (n) {
      console.error(n), a(!0);
    }
  })(), () => l(null)), [r]), d(() => {
    const n = u.current;
    return c && (async () => {
      const i = y(await b(c));
      e && (i.style.width = String(e), i.style.height = String(e)), n.appendChild(i.cloneNode(!0));
    })(), () => {
      n.innerHTML = "";
    };
  }, [c, e]), s ? /* @__PURE__ */ m(p, { size: e, color: "grey" }) : /* @__PURE__ */ m(
    "div",
    {
      ...t,
      style: { ...o, width: e, height: e },
      ref: u
    }
  );
};
export {
  A as SystemIcon
};
