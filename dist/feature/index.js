import { jsx as f } from "react/jsx-runtime";
import { Routes as p } from "../router/router.js";
import { useRouter as c } from "../router/hook.js";
import { Link as N } from "../router/Link.js";
import { GlobalState as S } from "../state/state.js";
import { useGlobalState as l } from "../state/hook.js";
import { useTask as k } from "../api/hooks/task.js";
import { useData as d } from "../api/hooks/data.js";
import { useStream as h } from "../api/hooks/Stream.js";
import { useSocket as R } from "../api/hooks/socket.js";
import { useFrames as g } from "../api/hooks/frames.js";
import { useParams as w } from "../api/hooks/params.js";
import { Api as I } from "../api/api.js";
import b from "./FeatureRender.js";
function r(o, e) {
  if (!m.isInit)
    throw new Error(`Cannot use '${o}' before feature initialization`);
  return e;
}
const t = class t {
  static init(e) {
    if (t.isInit)
      throw new Error("Feature is already initialized");
    return p.define(e), (i, u, s, n) => (t.isInit = !0, t.featureName = i, S.initialState = n, /* @__PURE__ */ f(
      b,
      {
        gtkFonts: u,
        initialRoute: s
      }
    ));
  }
  static get names() {
    return r("feature names", I.featureNames);
  }
  static get Link() {
    return r("Link", N);
  }
};
t.isInit = !1, t.featureName = void 0, t.Use = {
  get Router() {
    return r("Router", c);
  },
  get State() {
    return r("State", l);
  },
  Params(e) {
    return r("Params", w(t.featureName, e));
  },
  Frames(e = t.featureName) {
    return r("Frames", g(e));
  },
  Task(e) {
    return r("Task", k(t.featureName, e));
  },
  Data(e) {
    return r("Data", d(t.featureName, e));
  },
  Stream(e, a = 1, i = !0) {
    return r(
      "Stream",
      h(
        t.featureName,
        t.featureName,
        e,
        a,
        i
      )
    );
  },
  Socket(e, a = !0) {
    return r(
      "Socket",
      R(
        t.featureName,
        t.featureName,
        e,
        a
      )
    );
  }
};
let m = t;
export {
  m as Feature
};
