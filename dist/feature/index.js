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
function t(s, e) {
  if (!o.isInit)
    throw new Error(`Cannot use '${s}' before feature initialization`);
  return e;
}
const r = class r {
  static init(e) {
    if (r.isInit)
      throw new Error("Feature is already initialized");
    return n.define(e), (i, u, m) => (r.isInit = !0, r.featureName = i, m && (l.initialState = m), /* @__PURE__ */ f(
      I,
      {
        initialRoute: u,
        state: !!m
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
  Task(e) {
    return t("Task", k(r.featureName, e));
  },
  Data(e) {
    return t("Data", S(r.featureName, e));
  },
  Stream(e, a = 1, i = !0) {
    return t(
      "Stream",
      R(
        r.featureName,
        r.featureName,
        e,
        a,
        i
      )
    );
  },
  Files(e) {
    return t(
      "Files",
      d(r.featureName, e)
    );
  },
  Socket(e, a = !0) {
    return t(
      "Socket",
      h(
        r.featureName,
        r.featureName,
        e,
        a
      )
    );
  }
};
let o = r;
export {
  o as Feature
};
