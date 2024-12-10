import { useContext as o } from "react";
import { RouterContext as r } from "./router.js";
const n = () => {
  const t = o(r);
  if (t) return t;
  throw new Error("useRouter must be used within a RouterProvider.");
};
export {
  n as useRouter
};
