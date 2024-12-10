import { BaseApi as n } from "../api.js";
const p = () => (r, e = []) => (n.locales[r] || r).replace(
  /\[(\d+)\]/g,
  (s, t) => {
    const o = parseInt(t, 10);
    return e[o] !== void 0 ? String(e[o]) : s;
  }
);
export {
  p as useLocales
};
