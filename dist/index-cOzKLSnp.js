import { jsx as f } from "react/jsx-runtime";
import './assets/styles.css';/* empty css                */
import y from "react-dom";
import { ErrorFrame as E } from "./components/ErrorFrame.js";
import "react";
import { BaseApi as i } from "./api/api.js";
import "./api/ApiRoutes.js";
var a = {}, n = y;
if (process.env.NODE_ENV === "production")
  a.createRoot = n.createRoot, a.hydrateRoot = n.hydrateRoot;
else {
  var u = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  a.createRoot = function(e, o) {
    u.usingClientEntryPoint = !0;
    try {
      return n.createRoot(e, o);
    } finally {
      u.usingClientEntryPoint = !1;
    }
  }, a.hydrateRoot = function(e, o, s) {
    u.usingClientEntryPoint = !0;
    try {
      return n.hydrateRoot(e, o, s);
    } finally {
      u.usingClientEntryPoint = !1;
    }
  };
}
function _(e) {
  const o = (t) => /* @__PURE__ */ f(E, { message: t });
  async function s(t) {
    try {
      const r = (await t(i.urlParams.feature)).default;
      if (!r)
        throw new Error(
          `Bad initialization of feature '${i.urlParams.feature}'`
        );
      return r;
    } catch (r) {
      throw r.message.startsWith("Unknown variable dynamic import") ? new Error(
        `Feature '${i.urlParams.feature}' not found`
      ) : new Error(r.message);
    }
  }
  function c(t) {
    const r = () => t;
    a.createRoot(e).render(/* @__PURE__ */ f(r, {}));
  }
  async function l(t) {
    await i.init(), c(t());
  }
  async function m(t) {
    try {
      const r = await s(t);
      await l(r);
    } catch (r) {
      console.error(r), c(o(r.message));
    }
  }
  return { render: m };
}
const O = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  create: _
}, Symbol.toStringTag, { value: "Module" }));
export {
  _ as c,
  O as i
};
