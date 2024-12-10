import { useTask as o } from "./hooks/task.js";
import { useData as m } from "./hooks/data.js";
import { useStream as u } from "./hooks/Stream.js";
import { useSocket as f } from "./hooks/socket.js";
import { useFrames as a } from "./hooks/frames.js";
import { useParams as c } from "./hooks/params.js";
import { useSystray as k } from "./hooks/systray.js";
import { useMenu as y } from "./hooks/menu.js";
import { useDbusMenu as M } from "./hooks/dbusmenu.js";
import { useLocales as b } from "./hooks/locales.js";
import { useTime as A } from "./hooks/time.js";
import { BaseApi as F } from "./api.js";
export {
  F as BaseApi,
  m as useData,
  M as useDbusMenu,
  a as useFrames,
  b as useLocales,
  y as useMenu,
  c as useParams,
  f as useSocket,
  u as useStream,
  k as useSystray,
  o as useTask,
  A as useTime
};
