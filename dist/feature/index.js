import { jsx as f } from "react/jsx-runtime";
import { Routes as n } from "../router/router.js";
import { useRouter as p } from "../router/hook.js";
import { RouterLink as c } from "../router/RouterLink.js";
import { GlobalState as l } from "../state/state.js";
import { useGlobalState as N } from "../state/hook.js";
import { useTask as k } from "../api/hooks/task.js";
import { useData as S } from "../api/hooks/data.js";
import { useStream as R } from "../api/hooks/Stream.js";
import { useFiles as d } from "../api/hooks/files.js";
import { useSocket as h } from "../api/hooks/socket.js";
import { useFrames as g } from "../api/hooks/frames.js";
import { useParams as w } from "../api/hooks/params.js";
import { Api as F } from "../api/api.js";
import I from "./FeatureRender.js";
function t(u, e) {
  if (!s.isInit)
    throw new Error(`Cannot use '${u}' before feature initialization`);
  return e;
}
const r = class r {
  static init(e) {
    if (r.isInit)
      throw new Error("Feature is already initialized");
    return n.define(e), (i, m, o) => (r.isInit = !0, r.featureName = i, o && (l.initialState = o), /* @__PURE__ */ f(
      I,
      {
        initialRoute: m,
        state: !!o
      }
    ));
  }
  static get names() {
    return t("feature names", F.featureNames);
  }
  static get Link() {
    return t("Link", c);
  }
};
r.isInit = !1, r.featureName = void 0, r.Use = {
  get Router() {
    return t("Router", p);
  },
  get State() {
    return t("State", N);
  },
  Params(e) {
    return t("Params", w(r.featureName, e));
  },
  Frames(e = r.featureName) {
    return t("Frames", g(e));
  },
  Task({ feature: e = r.featureName, handler: a }) {
    return t("Task", k(e, a));
  },
  Data({ feature: e = r.featureName, handlers: a }) {
    return t("Data", S(e, a));
  },
  Stream({
    feature: e = r.featureName,
    handlers: a,
    interval: i = 1,
    auto: m = !0
  }) {
    return t(
      "Stream",
      R(
        r.featureName,
        e,
        a,
        i,
        m
      )
    );
  },
  Files({ feature: e = r.featureName, handlers: a }) {
    return t(
      "Files",
      d(e, a)
    );
  },
  Socket({
    feature: e = r.featureName,
    name: a,
    auto: i = !0
  }) {
    return t(
      "Socket",
      h(r.featureName, e, a, i)
    );
  }
};
let s = r;
export {
  s as Feature
};
