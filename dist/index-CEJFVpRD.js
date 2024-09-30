import { jsx as f } from "react/jsx-runtime";
import './assets/styles.css';/* empty css                */
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
  i.createRoot = function(a, t) {
    s.usingClientEntryPoint = !0;
    try {
      return n.createRoot(a, t);
    } finally {
      s.usingClientEntryPoint = !1;
    }
  }, i.hydrateRoot = function(a, t, c) {
    s.usingClientEntryPoint = !0;
    try {
      return n.hydrateRoot(a, t, c);
    } finally {
      s.usingClientEntryPoint = !1;
    }
  };
}
function d() {
  const a = new URLSearchParams(window.location.search);
  return {
    featureName: a.get("feature"),
    initialRoute: a.get("route")
  };
}
function _(a) {
  const t = d(), c = (r) => /* @__PURE__ */ f(E, { message: r });
  async function l(r) {
    const e = t.featureName;
    if (!e)
      throw new Error("Missing 'feature' parameter");
    try {
      const o = (await r(e)).default;
      if (!o)
        throw new Error(
          `Bad initialization of feature '${t.featureName}'`
        );
      return o;
    } catch (o) {
      throw o.message.startsWith("Unknown variable dynamic import") ? new Error(`Feature '${t.featureName}' not found`) : new Error(o.message);
    }
  }
  function m(r) {
    const e = () => r;
    i.createRoot(a).render(/* @__PURE__ */ f(e, {}));
  }
  async function y(r) {
    await u.init(t.featureName);
    const e = await u.getInitialTheme();
    document.documentElement.style.zoom = String(e.ui_scale), m(
      r(
        t.featureName,
        await u.getInitialTheme(),
        t.initialRoute,
        await u.getInitialState()
      )
    );
  }
  async function g(r) {
    try {
      const e = await l(r);
      await y(e);
    } catch (e) {
      console.error(e), m(c(e.message));
    }
  }
  return { render: g };
}
const T = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  create: _
}, Symbol.toStringTag, { value: "Module" }));
export {
  _ as c,
  T as i
};
