import { useState as p, useCallback as m, useEffect as g } from "react";
import { ApiRoutes as f } from "../ApiRoutes.js";
const l = (r) => [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/svg+xml",
  "image/webp",
  "image/x-icon",
  "image/bmp",
  "image/tiff"
].includes(r), y = (r, s) => {
  const [a, n] = p({}), i = m(
    async (e) => {
      try {
        const t = await fetch(
          f.feature_file(r),
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(e)
          }
        );
        if (!t.ok) {
          const c = await t.json();
          throw new Error(c.message || "Unhandled error");
        }
        const o = await t.blob();
        if (!l(o.type))
          throw new Error("Unsupported file type");
        return URL.createObjectURL(o);
      } catch (t) {
        console.error(t);
      }
    },
    [r]
  );
  return g(() => ((async () => {
    const e = {};
    Object.entries(s).forEach(async ([t, o]) => {
      e[t] = await i(o);
    }), n(e);
  })(), () => {
    Object.values(a).forEach((e) => {
      e && URL.revokeObjectURL(e);
    }), n({});
  }), []), a;
};
export {
  y as useImageFiles
};
