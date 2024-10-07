import { jsx as l } from "react/jsx-runtime";
import { useState as u, useRef as f, useEffect as m } from "react";
import { ApiRoutes as h } from "../api/ApiRoutes.js";
import { ImageBroken as d } from "./ImageBroken.js";
async function g(o) {
  const e = await fetch(h.system_icons(o));
  if (!e.ok) {
    const r = await e.json();
    throw new Error(r.message || "Unhandled error");
  }
  const t = await e.blob();
  if (t.type !== "image/svg+xml")
    throw new Error("Unsupported file type");
  return t;
}
async function p(o) {
  return new Promise((e, t) => {
    const r = new FileReader();
    r.onload = () => {
      e(r.result);
    }, r.onerror = () => {
      t(new Error("Error reading blob"));
    }, r.readAsText(o);
  });
}
function w(o) {
  const t = new DOMParser().parseFromString(
    o,
    "image/svg+xml"
  ).documentElement, r = t.getAttribute("width"), n = t.getAttribute("height");
  return t.setAttribute("viewBox", `0 0 ${r} ${n}`), t;
}
const v = ({ iconName: o, size: e = 32 }) => {
  const [t, r] = u(!1), [n, i] = u(null), a = f(document.createElement("div"));
  return m(() => ((async () => {
    r(!1);
    try {
      i(await g(o));
    } catch (s) {
      console.error(s), r(!0);
    }
  })(), () => i(null)), [o]), m(() => {
    const s = a.current;
    return n && (async () => {
      const c = w(await p(n));
      e && (c.style.width = String(e), c.style.height = String(e)), s.appendChild(c.cloneNode(!0));
    })(), () => {
      s.innerHTML = "";
    };
  }, [n, e]), t ? /* @__PURE__ */ l(d, { size: e, color: "grey" }) : /* @__PURE__ */ l("div", { style: { width: e, height: e }, ref: a });
};
export {
  v as SystemIcon
};
