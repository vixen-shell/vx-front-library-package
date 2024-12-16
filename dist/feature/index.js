import { jsx as s } from "react/jsx-runtime";
import { Routes as m } from "../router/router.js";
import { useRouter as n } from "../router/hook.js";
import { Link as u } from "../router/Link.js";
import { GlobalState as f } from "../state/index.js";
import { useVxState as l } from "../stateHook/index.js";
import { useTask as c } from "../api/hooks/task.js";
import { useData as p } from "../api/hooks/data.js";
import "react";
import { BaseApi as e } from "../api/api.js";
import "../api/ApiRoutes.js";
import { useSocket as g } from "../api/hooks/socket.js";
import { useFrames as k } from "../api/hooks/frames.js";
import { useParams as S } from "../api/hooks/params.js";
import { useMenu as L } from "../api/hooks/menu.js";
import { useLocales as R } from "../api/hooks/locales.js";
import { useTime as T } from "../api/hooks/time.js";
import P from "./FeatureRender.js";
function t(o, i) {
  if (!a.isInit)
    throw new Error(`Cannot use '${o}' before feature initialization`);
  return i;
}
const r = class r {
  static init(i) {
    if (r.isInit)
      throw new Error("Feature is already initialized");
    return m.define(i), () => (r.isInit = !0, f.initialState = e.state.initial, /* @__PURE__ */ s(P, { initialRoute: e.urlParams.route }));
  }
  static get locale() {
    return t("locale", e.locale());
  }
  static get names() {
    return t("feature names", e.features);
  }
  static get current() {
    return t("feature names", e.urlParams);
  }
  static get Link() {
    return t("Link", u);
  }
};
r.isInit = !1, r.Use = {
  get Router() {
    return t("Router", n);
  },
  get State() {
    return t("State", l);
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
    return t("Data", p);
  },
  get Menu() {
    return t("Menu", L);
  },
  get Socket() {
    return t("Socket", g);
  },
  get Locales() {
    return t("Locales", R);
  },
  get Time() {
    return t("Time", T);
  }
};
let a = r;
export {
  a as Feature
};
