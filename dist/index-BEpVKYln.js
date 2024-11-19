import { jsx as f } from "react/jsx-runtime";
import './assets/styles.css';/* empty css                */
import { dayjsLocaleImporters as y } from "./theme/locale.js";
import E from "react-dom";
import { ErrorFrame as p } from "./components/ErrorFrame.js";
import "react";
import { BaseApi as a } from "./api/api.js";
import "./api/ApiRoutes.js";
var i = {}, n = E;
if (process.env.NODE_ENV === "production")
  i.createRoot = n.createRoot, i.hydrateRoot = n.hydrateRoot;
else {
  var s = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  i.createRoot = function(e, o) {
    s.usingClientEntryPoint = !0;
    try {
      return n.createRoot(e, o);
    } finally {
      s.usingClientEntryPoint = !1;
    }
  }, i.hydrateRoot = function(e, o, u) {
    s.usingClientEntryPoint = !0;
    try {
      return n.hydrateRoot(e, o, u);
    } finally {
      s.usingClientEntryPoint = !1;
    }
  };
}
function _(e) {
  const o = (t) => /* @__PURE__ */ f(p, { message: t });
  async function u(t) {
    try {
      const r = (await t(a.urlParams.feature)).default;
      if (!r)
        throw new Error(
          `Bad initialization of feature '${a.urlParams.feature}'`
        );
      return r;
    } catch (r) {
      throw r.message.startsWith("Unknown variable dynamic import") ? new Error(
        `Feature '${a.urlParams.feature}' not found`
      ) : new Error(r.message);
    }
  }
  function c(t) {
    const r = () => t;
    i.createRoot(e).render(/* @__PURE__ */ f(r, {}));
  }
  async function l(t) {
    await a.init(), await y[a.locale(!0)](), c(t());
  }
  async function m(t) {
    try {
      const r = await u(t);
      await l(r);
    } catch (r) {
      console.error(r), c(o(r.message));
    }
  }
  return { render: m };
}
const C = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  create: _
}, Symbol.toStringTag, { value: "Module" }));
export {
  _ as c,
  C as i
};
