import { Routes as o } from "./router.js";
import { RouterProvider as p } from "./router.js";
import { useRouter as r } from "./hook.js";
import { RouterLink as i } from "./RouterLink.js";
const u = () => o.get(r().route);
export {
  i as RouterLink,
  p as RouterProvider,
  u as RouterRender,
  o as Routes,
  r as useRouter
};
