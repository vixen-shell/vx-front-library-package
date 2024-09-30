import { jsx as n } from "react/jsx-runtime";
import { Routes as p } from "../router/router.js";
import { useRouter as c } from "../router/hook.js";
import { RouterLink as l } from "../router/RouterLink.js";
import { GlobalState as N } from "../state/state.js";
import { useGlobalState as k } from "../state/hook.js";
import { useTask as S } from "../api/hooks/task.js";
import { useData as R } from "../api/hooks/data.js";
import { useStream as d } from "../api/hooks/Stream.js";
import { useFiles as h } from "../api/hooks/files.js";
import { useSocket as g } from "../api/hooks/socket.js";
import { useFrames as w } from "../api/hooks/frames.js";
import { useParams as F } from "../api/hooks/params.js";
import { Api as I } from "../api/api.js";
import b from "./FeatureRender.js";
function t(s, e) {
  if (!o.isInit)
    throw new Error(`Cannot use '${s}' before feature initialization`);
  return e;
}
const r = class r {
  static init(e) {
    if (r.isInit)
      throw new Error("Feature is already initialized");
    return p.define(e), (i, u, f, m) => (r.isInit = !0, r.featureName = i, m && (N.initialState = m), /* @__PURE__ */ n(
      b,
      {
        initialTheme: u,
        initialRoute: f,
        state: !!m
      }
    ));
  }
  static get names() {
    return t("feature names", I.featureNames);
  }
  static get Link() {
    return t("Link", l);
  }
};
r.isInit = !1, r.featureName = void 0, r.Use = {
  get Router() {
    return t("Router", c);
  },
  get State() {
    return t("State", k);
  },
  Params(e) {
    return t("Params", F(r.featureName, e));
  },
  Frames(e = r.featureName) {
    return t("Frames", w(e));
  },
  Task(e) {
    return t("Task", S(r.featureName, e));
  },
  Data(e) {
    return t("Data", R(r.featureName, e));
  },
  Stream(e, a = 1, i = !0) {
    return t(
      "Stream",
      d(
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
      h(r.featureName, e)
    );
  },
  Socket(e, a = !0) {
    return t(
      "Socket",
      g(
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
