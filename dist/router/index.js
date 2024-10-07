import { Routes as o } from "./router.js";
import { RouterProvider as R } from "./router.js";
import { useRouter as r } from "./hook.js";
import { Link as i } from "./Link.js";
const m = () => o.get(r().route);
export {
  i as Link,
  R as RouterProvider,
  m as RouterRender,
  o as Routes,
  r as useRouter
};
