import { jsx as c } from "react/jsx-runtime";
import d from "react";
import w from "react-dom";
import R from "./ui/components/ErrorFrame/index.js";
import { Api as l } from "./api/api.js";
var i = {}, n = w;
if (process.env.NODE_ENV === "production")
  i.createRoot = n.createRoot, i.hydrateRoot = n.hydrateRoot;
else {
  var u = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  i.createRoot = function(a, t) {
    u.usingClientEntryPoint = !0;
    try {
      return n.createRoot(a, t);
    } finally {
      u.usingClientEntryPoint = !1;
    }
  }, i.hydrateRoot = function(a, t, s) {
    u.usingClientEntryPoint = !0;
    try {
      return n.hydrateRoot(a, t, s);
    } finally {
      u.usingClientEntryPoint = !1;
    }
  };
}
function g() {
  const a = new URLSearchParams(window.location.search);
  return {
    featureName: a.get("feature"),
    initialRoute: a.get("route")
  };
}
function _(a) {
  const t = g(), s = (r) => /* @__PURE__ */ c(R, { message: r });
  async function m(r) {
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
  function f(r) {
    const e = () => r;
    i.createRoot(a).render(
      /* @__PURE__ */ c(d.StrictMode, { children: /* @__PURE__ */ c(e, {}) })
    );
  }
  async function y(r) {
    await l.init(t.featureName);
    const e = await l.featureState();
    f(r(t.initialRoute, e));
  }
  async function E(r) {
    try {
      const e = await m(r);
      await y(e);
    } catch (e) {
      console.error(e), f(s(e.message));
    }
  }
  return { render: E };
}
const O = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  create: _
}, Symbol.toStringTag, { value: "Module" }));
export {
  _ as c,
  O as i
};
