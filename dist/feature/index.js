import { jsx as s } from "react/jsx-runtime";
import { Routes as u } from "../router/router.js";
import { useRouter as m } from "../router/hook.js";
import { Link as n } from "../router/Link.js";
import { GlobalState as f } from "../state/index.js";
import { useVxState as p } from "../stateHook/index.js";
import { useTask as c } from "../api/hooks/task.js";
import { useData as g } from "../api/hooks/data.js";
import "react";
import { BaseApi as e } from "../api/api.js";
import "../api/ApiRoutes.js";
import { useSocket as l } from "../api/hooks/socket.js";
import { useFrames as k } from "../api/hooks/frames.js";
import { useParams as P } from "../api/hooks/params.js";
import { useMenu as S } from "../api/hooks/menu.js";
import { usePopupFrame as R } from "../api/hooks/popup.js";
import F from "./FeatureRender.js";
function t(o, i) {
  if (!a.isInit)
    throw new Error(`Cannot use '${o}' before feature initialization`);
  return i;
}
const r = class r {
  static init(i) {
    if (r.isInit)
      throw new Error("Feature is already initialized");
    return u.define(i), () => (r.isInit = !0, f.initialState = e.state.initial, /* @__PURE__ */ s(F, { initialRoute: e.urlParams.route }));
  }
  static get names() {
    return t("feature names", e.features);
  }
  static get current() {
    return t("feature names", e.urlParams);
  }
  static get Link() {
    return t("Link", n);
  }
};
r.isInit = !1, r.Use = {
  get Router() {
    return t("Router", m);
  },
  get State() {
    return t("State", p);
  },
  get Params() {
    return t("Params", P);
  },
  get Frames() {
    return t("Frames", k);
  },
  get Task() {
    return t("Task", c);
  },
  get Data() {
    return t("Data", g);
  },
  get Menu() {
    return t("Menu", S);
  },
  get PopupFrame() {
    return t("PopupFrame", R);
  },
  get Socket() {
    return t("Socket", l);
  }
};
let a = r;
export {
  a as Feature
};
