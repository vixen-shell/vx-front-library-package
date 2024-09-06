import { jsx as m } from "react/jsx-runtime";
import _ from "react-dom";
import d from "./ui/components/ErrorFrame/index.js";
import "react";
import "./api/ApiRoutes.js";
import { Api as c } from "./api/api.js";
var i = {}, n = _;
if (process.env.NODE_ENV === "production")
  i.createRoot = n.createRoot, i.hydrateRoot = n.hydrateRoot;
else {
  var u = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  i.createRoot = function(a, r) {
    u.usingClientEntryPoint = !0;
    try {
      return n.createRoot(a, r);
    } finally {
      u.usingClientEntryPoint = !1;
    }
  }, i.hydrateRoot = function(a, r, s) {
    u.usingClientEntryPoint = !0;
    try {
      return n.hydrateRoot(a, r, s);
    } finally {
      u.usingClientEntryPoint = !1;
    }
  };
}
function w() {
  const a = new URLSearchParams(window.location.search);
  return {
    featureName: a.get("feature"),
    initialRoute: a.get("route")
  };
}
function g(a) {
  const r = w(), s = (t) => /* @__PURE__ */ m(d, { message: t });
  async function l(t) {
    const e = r.featureName;
    if (!e)
      throw new Error("Missing 'feature' parameter");
    try {
      const o = (await t(e)).default;
      if (!o)
        throw new Error(
          `Bad initialization of feature '${r.featureName}'`
        );
      return o;
    } catch (o) {
      throw o.message.startsWith("Unknown variable dynamic import") ? new Error(`Feature '${r.featureName}' not found`) : new Error(o.message);
    }
  }
  function f(t) {
    const e = () => t;
    i.createRoot(a).render(/* @__PURE__ */ m(e, {}));
  }
  async function E(t) {
    await c.init(r.featureName);
    const e = await c.prefer_dark_theme();
    document.styleSheets[0].insertRule(
      `#root { color: ${e ? "#EEEEEE" : "#111111"}; }`,
      0
    ), f(
      t(
        r.featureName,
        r.initialRoute,
        await c.getInitialState()
      )
    );
  }
  async function y(t) {
    try {
      const e = await l(t);
      await E(e);
    } catch (e) {
      console.error(e), f(s(e.message));
    }
  }
  return { render: y };
}
const O = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  create: g
}, Symbol.toStringTag, { value: "Module" }));
export {
  g as c,
  O as i
};
