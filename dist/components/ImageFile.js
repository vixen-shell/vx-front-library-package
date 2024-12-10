import { jsxs as c, jsx as r } from "react/jsx-runtime";
import { ImageBroken as g } from "./ImageBroken.js";
import { useImageFile as p } from "./hooks/index.js";
const f = ({
  filePath: i,
  style: n = void 0,
  width: e = void 0,
  height: o = void 0,
  minWidth: l = void 0,
  minHeight: a = void 0,
  radius: t = void 0,
  fit: s = "fill",
  ...m
}) => {
  const { url: d, error: u } = p(i);
  return u ? /* @__PURE__ */ c(
    "div",
    {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "10px",
        border: "1px dashed grey",
        borderRadius: t,
        width: e || "auto",
        height: o || "auto",
        padding: "10px"
      },
      children: [
        /* @__PURE__ */ r(g, { size: 32, color: "grey" }),
        /* @__PURE__ */ r(
          "p",
          {
            style: {
              color: "grey",
              fontSize: "0.75rem",
              overflowWrap: "anywhere",
              textAlign: "center",
              width: "100%"
            },
            children: i
          }
        )
      ]
    }
  ) : d === "" ? /* @__PURE__ */ r(
    "div",
    {
      style: {
        backgroundColor: "#00000033",
        borderRadius: t,
        width: e || "auto",
        height: o || "auto"
      }
    }
  ) : /* @__PURE__ */ r(
    "img",
    {
      ...m,
      style: {
        ...n,
        borderRadius: t,
        objectFit: s,
        minWidth: l || e || "auto",
        minHeight: a || o || "auto"
      },
      width: e || "auto",
      height: o || "auto",
      src: d
    }
  );
};
export {
  f as ImageFile
};
