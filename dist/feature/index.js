import { jsx as s } from "react/jsx-runtime";
import { Routes as n } from "../router/router.js";
import { useRouter as m } from "../router/hook.js";
import { Link as u } from "../router/Link.js";
import { GlobalState as f } from "../state/state.js";
import { useVxState as p } from "../stateHook/index.js";
import { useTask as c } from "../api/hooks/task.js";
import { useData as l } from "../api/hooks/data.js";
import "react";
import { BaseApi as i } from "../api/api.js";
import "../api/ApiRoutes.js";
import { useSocket as g } from "../api/hooks/socket.js";
import { useFrames as k } from "../api/hooks/frames.js";
import { useParams as S } from "../api/hooks/params.js";
import { useMenu as R } from "../api/hooks/menu.js";
import d from "./FeatureRender.js";
function t(o, e) {
  if (!a.isInit)
    throw new Error(`Cannot use '${o}' before feature initialization`);
  return e;
}
const r = class r {
  static init(e) {
    if (r.isInit)
      throw new Error("Feature is already initialized");
    return n.define(e), () => (r.isInit = !0, f.initialState = i.state.initial, /* @__PURE__ */ s(d, { initialRoute: i.urlParams.route }));
  }
  static get names() {
    return t("feature names", i.features);
  }
  static get Link() {
    return t("Link", u);
  }
};
r.isInit = !1, r.featureName = void 0, r.Use = {
  get Router() {
    return t("Router", m);
  },
  get State() {
    return t("State", p);
  },
  get Params() {
    return t("Params", S);
  },
  get Frames() {
    return t("Frames", k);
  },
  get Task() {
    return t("Task", c);
  },
  get Data() {
    return t("Data", l);
  },
  get Menu() {
    return t("Menu", R);
  },
  get Socket() {
    return t("Socket", g);
  }
};
let a = r;
export {
  a as Feature
};
