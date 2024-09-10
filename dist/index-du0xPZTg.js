import { jsx as d } from "react/jsx-runtime";
import w from "react-dom";
import E from "./ui/components/ErrorFrame/index.js";
import "react";
import "./api/ApiRoutes.js";
import { Api as u } from "./api/api.js";
var i = {}, n = w;
if (process.env.NODE_ENV === "production")
  i.createRoot = n.createRoot, i.hydrateRoot = n.hydrateRoot;
else {
  var s = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  i.createRoot = function(o, e) {
    s.usingClientEntryPoint = !0;
    try {
      return n.createRoot(o, e);
    } finally {
      s.usingClientEntryPoint = !1;
    }
  }, i.hydrateRoot = function(o, e, f) {
    s.usingClientEntryPoint = !0;
    try {
      return n.hydrateRoot(o, e, f);
    } finally {
      s.usingClientEntryPoint = !1;
    }
  };
}
function h() {
  const o = new URLSearchParams(window.location.search);
  return {
    featureName: o.get("feature"),
    initialRoute: o.get("route")
  };
}
function _(o) {
  const e = h(), f = (r) => /* @__PURE__ */ d(E, { message: r });
  async function y(r) {
    const t = e.featureName;
    if (!t)
      throw new Error("Missing 'feature' parameter");
    try {
      const a = (await r(t)).default;
      if (!a)
        throw new Error(
          `Bad initialization of feature '${e.featureName}'`
        );
      return a;
    } catch (a) {
      throw a.message.startsWith("Unknown variable dynamic import") ? new Error(`Feature '${e.featureName}' not found`) : new Error(a.message);
    }
  }
  function c(r) {
    const t = () => r;
    i.createRoot(o).render(/* @__PURE__ */ d(t, {}));
  }
  async function g(r) {
    await u.init(e.featureName);
    const t = await u.gtkDefaultFont(), a = t.font_family || "sans-serif", l = t.font_size || 12, m = document.createElement("style");
    m.textContent = `
            @media (prefers-color-scheme: dark) {
                :root {
                    --default-font-color: rgba(255, 255, 255, 0.75);
                }
            }

            @media (prefers-color-scheme: light) {
                :root {
                    --default-font-color: rgba(0, 0, 0, 0.75);
                }
            }

            :root {
                --default-font-family: ${a};
                --default-font-size: ${l}pt;

                font-family: var(--default-font-family);
                font-size: var(--default-font-size);
                color: var(--default-font-color);

                user-select: none !important;
                -webkit-user-select: none !important;
            }

            * {
                box-sizing: border-box;
                cursor: default;
                margin: 0;
            }
        `, document.head.appendChild(m), c(
      r(
        e.featureName,
        e.initialRoute,
        await u.getInitialState()
      )
    );
  }
  async function p(r) {
    try {
      const t = await y(r);
      await g(t);
    } catch (t) {
      console.error(t), c(f(t.message));
    }
  }
  return { render: p };
}
const z = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  create: _
}, Symbol.toStringTag, { value: "Module" }));
export {
  _ as c,
  z as i
};
