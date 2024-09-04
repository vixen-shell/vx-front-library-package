import { useState as p, useCallback as l, useEffect as f } from "react";
import { ApiRoutes as m } from "../ApiRoutes.js";
const g = (r) => [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/svg+xml",
  "image/webp",
  "image/x-icon",
  "image/bmp",
  "image/tiff"
].includes(r), y = (r, s) => {
  const [n, i] = p({}), a = l(
    async (e) => {
      try {
        const t = await fetch(m.feature_file(r), {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(e)
        });
        if (!t.ok) {
          const c = await t.json();
          throw new Error(c.message || "Unhandled error");
        }
        const o = await t.blob();
        if (!g(o.type))
          throw new Error("Unsupported file type");
        return URL.createObjectURL(o);
      } catch (t) {
        console.error(t);
      }
    },
    [r]
  );
  return f(() => ((async () => {
    const e = {};
    Object.entries(s).forEach(async ([t, o]) => {
      e[t] = await a(o);
    }), i(e);
  })(), () => {
    Object.values(n).forEach((e) => {
      e && URL.revokeObjectURL(e);
    }), i({});
  }), []), n;
};
export {
  y as useFiles
};
