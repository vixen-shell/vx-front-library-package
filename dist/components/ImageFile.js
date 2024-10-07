import { jsxs as m, jsx as r } from "react/jsx-runtime";
import { ImageBroken as p } from "./ImageBroken.js";
import { useImageFile as u } from "./hooks/index.js";
const y = ({
  filePath: i,
  width: e = void 0,
  height: o = void 0,
  minWidth: n = void 0,
  minHeight: l = void 0,
  radius: t = 0,
  fit: a = "fill"
}) => {
  const { url: d, error: s } = u(i);
  return s ? /* @__PURE__ */ m(
    "div",
    {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "10px",
        border: "1px dashed grey",
        borderRadius: `${t}px`,
        width: e || "auto",
        height: o || "auto",
        padding: "10px"
      },
      children: [
        /* @__PURE__ */ r(p, { size: 32, color: "grey" }),
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
        borderRadius: `${t}px`,
        width: e || "auto",
        height: o || "auto"
      }
    }
  ) : /* @__PURE__ */ r(
    "img",
    {
      style: {
        borderRadius: `${t}px`,
        objectFit: a,
        minWidth: n || e || "auto",
        minHeight: l || o || "auto"
      },
      width: e || "auto",
      height: o || "auto",
      src: d
    }
  );
};
export {
  y as ImageFile
};
