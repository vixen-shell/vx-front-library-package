var f = Object.defineProperty;
var c = (u, e, r) => e in u ? f(u, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : u[e] = r;
var m = (u, e, r) => (c(u, typeof e != "symbol" ? e + "" : e, r), r);
import { jsx as p } from "react/jsx-runtime";
import { Routes as l, RouterLink as N, useRouter as F } from "../router/router.js";
import { GlobalState as S, useGlobalState as g } from "../state/state.js";
import { useFeatureAction as I } from "../api/hooks/action.js";
import { useFeatureData as k } from "../api/hooks/data.js";
import { useFeatureDataStreamer as D } from "../api/hooks/dataStreamer.js";
import { useImageFiles as R } from "../api/hooks/files.js";
import { useFeatureSocket as d } from "../api/hooks/socket.js";
import { useFeatureFrames as w } from "../api/hooks/frames.js";
import { useParams as A } from "../api/hooks/params.js";
import { Api as b } from "../api/api.js";
import L from "./FeatureRender.js";
function a(u, e) {
  if (!n.isInit)
    throw new Error(`Cannot use '${u}' before feature initialization`);
  return e;
}
const t = class t {
  static init(e) {
    if (t.isInit)
      throw new Error("Feature is already initialized");
    return l.define(e), (i, o, s) => (t.isInit = !0, t.featureName = i, s && (S.initialState = s), /* @__PURE__ */ p(
      L,
      {
        initialRoute: o,
        state: !!s
      }
    ));
  }
  static get names() {
    return a("feature names", b.featureNames);
  }
  static get Link() {
    return a("Link", N);
  }
};
m(t, "isInit", !1), m(t, "featureName"), m(t, "Use", {
  get Router() {
    return a("Router", F);
  },
  get State() {
    return a("State", g);
  },
  Params(e) {
    return a("Params", A(t.featureName, e));
  },
  Frames(e = t.featureName) {
    return a("Frames", w(e));
  },
  Action({
    featureName: e = t.featureName,
    actionHandler: r
  }) {
    return a("Action", I(e, r));
  },
  Data({
    featureName: e = t.featureName,
    dataHandlers: r
  }) {
    return a("Data", k(e, r));
  },
  DataStreamer({
    featureName: e = t.featureName,
    dataHandlers: r,
    interval: i = 1,
    auto: o = !0
  }) {
    return a(
      "DataStreamer",
      D(
        t.featureName,
        e,
        r,
        i,
        o
      )
    );
  },
  ImageFiles({
    featureName: e = t.featureName,
    fileHandlers: r
  }) {
    return a(
      "ImageFile",
      R(e, r)
    );
  },
  Socket({
    featureName: e = t.featureName,
    socketName: r,
    auto: i = !0
  }) {
    return a(
      "Socket",
      d(
        t.featureName,
        e,
        r,
        i
      )
    );
  }
});
let n = t;
export {
  n as Feature
};
