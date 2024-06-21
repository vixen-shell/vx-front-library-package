var f = Object.defineProperty;
var c = (i, e, t) => e in i ? f(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var o = (i, e, t) => (c(i, typeof e != "symbol" ? e + "" : e, t), t);
import { jsx as p } from "react/jsx-runtime";
import { Routes as l, RouterLink as N, useRouter as F } from "../router/router.js";
import { GlobalState as S, useGlobalState as g } from "../state/state.js";
import { useFeatureAction as I } from "../api/hooks/action.js";
import { useFeatureData as k } from "../api/hooks/data.js";
import { useFeatureDataStreamer as D } from "../api/hooks/dataStreamer.js";
import { useImageFiles as R } from "../api/hooks/files.js";
import { useFeatureSocket as d } from "../api/hooks/socket.js";
import { useFeatureFrames as w } from "../api/hooks/frames.js";
import { Api as A } from "../api/api.js";
import b from "./FeatureRender.js";
function a(i, e) {
  if (!s.isInit)
    throw new Error(`Cannot use '${i}' before feature initialization`);
  return e;
}
const r = class r {
  static init(e) {
    if (r.isInit)
      throw new Error("Feature is already initialized");
    return l.define(e), (u, m, n) => (r.isInit = !0, r.featureName = u, n && (S.initialState = n), /* @__PURE__ */ p(
      b,
      {
        initialRoute: m,
        state: !!n
      }
    ));
  }
  static get names() {
    return a("feature names", A.featureNames);
  }
  static get Link() {
    return a("Link", N);
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
        r.featureName,
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
      d(
        r.featureName,
        e,
        t,
        u
      )
    );
  }
});
let s = r;
export {
  s as Feature
};
