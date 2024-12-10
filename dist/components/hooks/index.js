import { useState as a, useEffect as l } from "react";
import { ApiRoutes as i } from "../../api/ApiRoutes.js";
async function f(r) {
  const e = await fetch(i.image_file(r));
  if (!e.ok) {
    const s = await e.json();
    throw new Error(s.message || "Unhandled error");
  }
  const t = await e.blob();
  return URL.createObjectURL(t);
}
const w = (r) => {
  const [e, t] = a(!1), [s, n] = a("");
  return l(() => {
    let o = null;
    return (async () => {
      t(!1);
      try {
        o = await f(r), n(o);
      } catch (c) {
        console.error(c), t(!0);
      }
    })(), () => {
      o && (URL.revokeObjectURL(o), n(""));
    };
  }, [r]), { url: s, error: e };
};
export {
  w as useImageFile
};
