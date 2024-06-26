import { jsx as f } from "react/jsx-runtime";
import g from "react-dom";
import w from "./ui/components/ErrorFrame/index.js";
import "react";
import { Api as m } from "./api/api.js";
var i = {}, n = g;
if (process.env.NODE_ENV === "production")
  i.createRoot = n.createRoot, i.hydrateRoot = n.hydrateRoot;
else {
  var u = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  i.createRoot = function(a, e) {
    u.usingClientEntryPoint = !0;
    try {
      return n.createRoot(a, e);
    } finally {
      u.usingClientEntryPoint = !1;
    }
  }, i.hydrateRoot = function(a, e, s) {
    u.usingClientEntryPoint = !0;
    try {
      return n.hydrateRoot(a, e, s);
    } finally {
      u.usingClientEntryPoint = !1;
    }
  };
}
function R() {
  const a = new URLSearchParams(window.location.search);
  return {
    featureName: a.get("feature"),
    initialRoute: a.get("route")
  };
}
function _(a) {
  const e = R(), s = (r) => /* @__PURE__ */ f(w, { message: r });
  async function l(r) {
    const t = e.featureName;
    if (!t)
      throw new Error("Missing 'feature' parameter");
    try {
      const o = (await r(t)).default;
      if (!o)
        throw new Error(
          `Bad initialization of feature '${e.featureName}'`
        );
      return o;
    } catch (o) {
      throw o.message.startsWith("Unknown variable dynamic import") ? new Error(`Feature '${e.featureName}' not found`) : new Error(o.message);
    }
  }
  function c(r) {
    const t = () => r;
    i.createRoot(a).render(/* @__PURE__ */ f(t, {}));
  }
  async function y(r) {
    await m.init(e.featureName), c(
      r(
        e.featureName,
        e.initialRoute,
        await m.getInitialState()
      )
    );
  }
  async function E(r) {
    try {
      const t = await l(r);
      await y(t);
    } catch (t) {
      console.error(t), c(s(t.message));
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
