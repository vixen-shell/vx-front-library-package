var f = Object.defineProperty;
var c = (i, e, t) => e in i ? f(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var o = (i, e, t) => (c(i, typeof e != "symbol" ? e + "" : e, t), t);
import { jsx as l } from "react/jsx-runtime";
import { Routes as p, RouterLink as S, useRouter as F } from "../router/router.js";
import { GlobalState as N, useGlobalState as g } from "../state/state.js";
import { useFeatureAction as I } from "../api/hooks/action.js";
import { useFeatureData as k } from "../api/hooks/data.js";
import { useFeatureDataStreamer as D } from "../api/hooks/dataStreamer.js";
import { useImageFiles as R } from "../api/hooks/files.js";
import { useFeatureSocket as d } from "../api/hooks/socket.js";
import { useFeatureFrames as w } from "../api/hooks/frames.js";
import { Api as A } from "../api/api.js";
import b from "./FeatureRender.js";
function a(i, e) {
  if (!n.isInit)
    throw new Error(`Cannot use '${i}' before feature initialization`);
  return e;
}
const r = class r {
  static init(e) {
    if (r.isInit)
      throw new Error("Feature is already initialized");
    return p.define(e), (u, m, s) => (r.isInit = !0, r.featureName = u, N.initialState = s, /* @__PURE__ */ l(b, { initialRoute: m }));
  }
  static get names() {
    return a("feature names", A.featureNames);
  }
  static get Link() {
    return a("Link", S);
  }
};
o(r, "isInit", !1), o(r, "featureName"), o(r, "Use", {
  get Router() {
    return a("Router", F);
  },
  get State() {
    return a("State", g);
  },
  Frames(e = r.featureName) {
    return a("Frames", w(e));
  },
  Action({
    featureName: e = r.featureName,
    actionHandler: t
  }) {
    return a("Action", I(e, t));
  },
  Data({
    featureName: e = r.featureName,
    dataHandlers: t
  }) {
    return a("Data", k(e, t));
  },
  DataStreamer({
    featureName: e = r.featureName,
    dataHandlers: t,
    interval: u = 1,
    auto: m = !0
  }) {
    return a(
      "DataStreamer",
      D(
        e,
        t,
        u,
        m
      )
    );
  },
  ImageFiles({
    featureName: e = r.featureName,
    fileHandlers: t
  }) {
    return a(
      "ImageFile",
      R(e, t)
    );
  },
  Socket({
    featureName: e = r.featureName,
    socketName: t,
    auto: u = !0
  }) {
    return a(
      "Socket",
      d(e, t, u)
    );
  }
});
let n = r;
export {
  n as Feature
};
