import { jsx as s } from "react/jsx-runtime";
import w from "react";
import E from "react-dom";
import g from "./ui/components/ErrorFrame/index.js";
import { Api as l } from "./api/api.js";
var i = {}, o = E;
if (process.env.NODE_ENV === "production")
  i.createRoot = o.createRoot, i.hydrateRoot = o.hydrateRoot;
else {
  var c = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  i.createRoot = function(r, e) {
    c.usingClientEntryPoint = !0;
    try {
      return o.createRoot(r, e);
    } finally {
      c.usingClientEntryPoint = !1;
    }
  }, i.hydrateRoot = function(r, e, u) {
    c.usingClientEntryPoint = !0;
    try {
      return o.hydrateRoot(r, e, u);
    } finally {
      c.usingClientEntryPoint = !1;
    }
  };
}
function _() {
  const r = new URLSearchParams(window.location.search);
  return {
    featureName: r.get("feature"),
    initialRoute: r.get("route"),
    clientId: r.get("client_id")
  };
}
function R(r) {
  const e = _(), u = (a) => /* @__PURE__ */ s(g, { message: a });
  async function m(a) {
    const t = e.featureName;
    if (!t)
      throw new Error("Missing 'feature' parameter");
    try {
      const n = (await a(t)).default;
      if (!n)
        throw new Error(
          `Bad initialization of feature '${e.featureName}'`
        );
      return n;
    } catch (n) {
      throw n.message.startsWith("Unknown variable dynamic import") ? new Error(`Feature '${e.featureName}' not found`) : new Error(n.message);
    }
  }
  function f(a) {
    const t = () => a;
    i.createRoot(r).render(
      /* @__PURE__ */ s(w.StrictMode, { children: /* @__PURE__ */ s(t, {}) })
    );
  }
  async function d(a) {
    if (!e.clientId)
      throw new Error("Missing 'client_id' parameter");
    await l.init(e.featureName, e.clientId);
    const t = await l.featureState();
    f(a(e.initialRoute, t));
  }
  async function y(a) {
    try {
      const t = await m(a);
      await d(t);
    } catch (t) {
      console.error(t), f(u(t.message));
    }
  }
  return { render: y };
}
const O = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  create: R
}, Symbol.toStringTag, { value: "Module" }));
export {
  R as c,
  O as i
};
