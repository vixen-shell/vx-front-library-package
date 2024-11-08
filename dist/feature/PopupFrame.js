import { jsx as B, Fragment as tt, jsxs as et } from "react/jsx-runtime";
import * as C from "react";
import it, { useRef as U, useState as st, useEffect as rt } from "react";
import { useHidePopupFrame as ot } from "./PopupHooks.js";
import { useVxState as nt } from "../stateHook/index.js";
import { Paper as G } from "@mantine/core";
import { flushSync as at } from "react-dom";
import { PhosphorIcon as ht } from "../components/PhosphorIcon.js";
var pt = /* @__PURE__ */ function() {
  var s = function(o, t) {
    return s = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, e) {
      i.__proto__ = e;
    } || function(i, e) {
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (i[n] = e[n]);
    }, s(o, t);
  };
  return function(o, t) {
    s(o, t);
    function i() {
      this.constructor = o;
    }
    o.prototype = t === null ? Object.create(t) : (i.prototype = t.prototype, new i());
  };
}(), b = function() {
  return b = Object.assign || function(s) {
    for (var o, t = 1, i = arguments.length; t < i; t++) {
      o = arguments[t];
      for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (s[e] = o[e]);
    }
    return s;
  }, b.apply(this, arguments);
}, I = {
  width: "100%",
  height: "10px",
  top: "0px",
  left: "0px",
  cursor: "row-resize"
}, $ = {
  width: "10px",
  height: "100%",
  top: "0px",
  left: "0px",
  cursor: "col-resize"
}, O = {
  width: "20px",
  height: "20px",
  position: "absolute"
}, lt = {
  top: b(b({}, I), { top: "-5px" }),
  right: b(b({}, $), { left: void 0, right: "-5px" }),
  bottom: b(b({}, I), { top: void 0, bottom: "-5px" }),
  left: b(b({}, $), { left: "-5px" }),
  topRight: b(b({}, O), { right: "-10px", top: "-10px", cursor: "ne-resize" }),
  bottomRight: b(b({}, O), { right: "-10px", bottom: "-10px", cursor: "se-resize" }),
  bottomLeft: b(b({}, O), { left: "-10px", bottom: "-10px", cursor: "sw-resize" }),
  topLeft: b(b({}, O), { left: "-10px", top: "-10px", cursor: "nw-resize" })
}, ut = (
  /** @class */
  function(s) {
    pt(o, s);
    function o() {
      var t = s !== null && s.apply(this, arguments) || this;
      return t.onMouseDown = function(i) {
        t.props.onResizeStart(i, t.props.direction);
      }, t.onTouchStart = function(i) {
        t.props.onResizeStart(i, t.props.direction);
      }, t;
    }
    return o.prototype.render = function() {
      return C.createElement("div", { className: this.props.className || "", style: b(b({ position: "absolute", userSelect: "none" }, lt[this.props.direction]), this.props.replaceStyles || {}), onMouseDown: this.onMouseDown, onTouchStart: this.onTouchStart }, this.props.children);
    }, o;
  }(C.PureComponent)
), dt = /* @__PURE__ */ function() {
  var s = function(o, t) {
    return s = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, e) {
      i.__proto__ = e;
    } || function(i, e) {
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (i[n] = e[n]);
    }, s(o, t);
  };
  return function(o, t) {
    s(o, t);
    function i() {
      this.constructor = o;
    }
    o.prototype = t === null ? Object.create(t) : (i.prototype = t.prototype, new i());
  };
}(), _ = function() {
  return _ = Object.assign || function(s) {
    for (var o, t = 1, i = arguments.length; t < i; t++) {
      o = arguments[t];
      for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (s[e] = o[e]);
    }
    return s;
  }, _.apply(this, arguments);
}, ft = {
  width: "auto",
  height: "auto"
}, A = function(s, o, t) {
  return Math.max(Math.min(s, t), o);
}, V = function(s, o, t) {
  var i = Math.round(s / o);
  return i * o + t * (i - 1);
}, P = function(s, o) {
  return new RegExp(s, "i").test(o);
}, D = function(s) {
  return !!(s.touches && s.touches.length);
}, ct = function(s) {
  return !!((s.clientX || s.clientX === 0) && (s.clientY || s.clientY === 0));
}, Z = function(s, o, t) {
  t === void 0 && (t = 0);
  var i = o.reduce(function(n, a, r) {
    return Math.abs(a - s) < Math.abs(o[n] - s) ? r : n;
  }, 0), e = Math.abs(o[i] - s);
  return t === 0 || e < t ? o[i] : s;
}, X = function(s) {
  return s = s.toString(), s === "auto" || s.endsWith("px") || s.endsWith("%") || s.endsWith("vh") || s.endsWith("vw") || s.endsWith("vmax") || s.endsWith("vmin") ? s : s + "px";
}, T = function(s, o, t, i) {
  if (s && typeof s == "string") {
    if (s.endsWith("px"))
      return Number(s.replace("px", ""));
    if (s.endsWith("%")) {
      var e = Number(s.replace("%", "")) / 100;
      return o * e;
    }
    if (s.endsWith("vw")) {
      var e = Number(s.replace("vw", "")) / 100;
      return t * e;
    }
    if (s.endsWith("vh")) {
      var e = Number(s.replace("vh", "")) / 100;
      return i * e;
    }
  }
  return s;
}, gt = function(s, o, t, i, e, n, a) {
  return i = T(i, s.width, o, t), e = T(e, s.height, o, t), n = T(n, s.width, o, t), a = T(a, s.height, o, t), {
    maxWidth: typeof i > "u" ? void 0 : Number(i),
    maxHeight: typeof e > "u" ? void 0 : Number(e),
    minWidth: typeof n > "u" ? void 0 : Number(n),
    minHeight: typeof a > "u" ? void 0 : Number(a)
  };
}, vt = function(s) {
  return Array.isArray(s) ? s : [s, s];
}, wt = [
  "as",
  "ref",
  "style",
  "className",
  "grid",
  "gridGap",
  "snap",
  "bounds",
  "boundsByDirection",
  "size",
  "defaultSize",
  "minWidth",
  "minHeight",
  "maxWidth",
  "maxHeight",
  "lockAspectRatio",
  "lockAspectRatioExtraWidth",
  "lockAspectRatioExtraHeight",
  "enable",
  "handleStyles",
  "handleClasses",
  "handleWrapperStyle",
  "handleWrapperClass",
  "children",
  "onResizeStart",
  "onResize",
  "onResizeStop",
  "handleComponent",
  "scale",
  "resizeRatio",
  "snapGap"
], q = "__resizable_base__", bt = (
  /** @class */
  function(s) {
    dt(o, s);
    function o(t) {
      var i, e, n, a, r = s.call(this, t) || this;
      return r.ratio = 1, r.resizable = null, r.parentLeft = 0, r.parentTop = 0, r.resizableLeft = 0, r.resizableRight = 0, r.resizableTop = 0, r.resizableBottom = 0, r.targetLeft = 0, r.targetTop = 0, r.appendBase = function() {
        if (!r.resizable || !r.window)
          return null;
        var u = r.parentNode;
        if (!u)
          return null;
        var p = r.window.document.createElement("div");
        return p.style.width = "100%", p.style.height = "100%", p.style.position = "absolute", p.style.transform = "scale(0, 0)", p.style.left = "0", p.style.flex = "0 0 100%", p.classList ? p.classList.add(q) : p.className += q, u.appendChild(p), p;
      }, r.removeBase = function(u) {
        var p = r.parentNode;
        p && p.removeChild(u);
      }, r.state = {
        isResizing: !1,
        width: (e = (i = r.propsSize) === null || i === void 0 ? void 0 : i.width) !== null && e !== void 0 ? e : "auto",
        height: (a = (n = r.propsSize) === null || n === void 0 ? void 0 : n.height) !== null && a !== void 0 ? a : "auto",
        direction: "right",
        original: {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        },
        backgroundStyle: {
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0,0,0,0)",
          cursor: "auto",
          opacity: 0,
          position: "fixed",
          zIndex: 9999,
          top: "0",
          left: "0",
          bottom: "0",
          right: "0"
        },
        flexBasis: void 0
      }, r.onResizeStart = r.onResizeStart.bind(r), r.onMouseMove = r.onMouseMove.bind(r), r.onMouseUp = r.onMouseUp.bind(r), r;
    }
    return Object.defineProperty(o.prototype, "parentNode", {
      get: function() {
        return this.resizable ? this.resizable.parentNode : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(o.prototype, "window", {
      get: function() {
        return !this.resizable || !this.resizable.ownerDocument ? null : this.resizable.ownerDocument.defaultView;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(o.prototype, "propsSize", {
      get: function() {
        return this.props.size || this.props.defaultSize || ft;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(o.prototype, "size", {
      get: function() {
        var t = 0, i = 0;
        if (this.resizable && this.window) {
          var e = this.resizable.offsetWidth, n = this.resizable.offsetHeight, a = this.resizable.style.position;
          a !== "relative" && (this.resizable.style.position = "relative"), t = this.resizable.style.width !== "auto" ? this.resizable.offsetWidth : e, i = this.resizable.style.height !== "auto" ? this.resizable.offsetHeight : n, this.resizable.style.position = a;
        }
        return { width: t, height: i };
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(o.prototype, "sizeStyle", {
      get: function() {
        var t = this, i = this.props.size, e = function(r) {
          var u;
          if (typeof t.state[r] > "u" || t.state[r] === "auto")
            return "auto";
          if (t.propsSize && t.propsSize[r] && (!((u = t.propsSize[r]) === null || u === void 0) && u.toString().endsWith("%"))) {
            if (t.state[r].toString().endsWith("%"))
              return t.state[r].toString();
            var p = t.getParentSize(), d = Number(t.state[r].toString().replace("px", "")), f = d / p[r] * 100;
            return f + "%";
          }
          return X(t.state[r]);
        }, n = i && typeof i.width < "u" && !this.state.isResizing ? X(i.width) : e("width"), a = i && typeof i.height < "u" && !this.state.isResizing ? X(i.height) : e("height");
        return { width: n, height: a };
      },
      enumerable: !1,
      configurable: !0
    }), o.prototype.getParentSize = function() {
      if (!this.parentNode)
        return this.window ? { width: this.window.innerWidth, height: this.window.innerHeight } : { width: 0, height: 0 };
      var t = this.appendBase();
      if (!t)
        return { width: 0, height: 0 };
      var i = !1, e = this.parentNode.style.flexWrap;
      e !== "wrap" && (i = !0, this.parentNode.style.flexWrap = "wrap"), t.style.position = "relative", t.style.minWidth = "100%", t.style.minHeight = "100%";
      var n = {
        width: t.offsetWidth,
        height: t.offsetHeight
      };
      return i && (this.parentNode.style.flexWrap = e), this.removeBase(t), n;
    }, o.prototype.bindEvents = function() {
      this.window && (this.window.addEventListener("mouseup", this.onMouseUp), this.window.addEventListener("mousemove", this.onMouseMove), this.window.addEventListener("mouseleave", this.onMouseUp), this.window.addEventListener("touchmove", this.onMouseMove, {
        capture: !0,
        passive: !1
      }), this.window.addEventListener("touchend", this.onMouseUp));
    }, o.prototype.unbindEvents = function() {
      this.window && (this.window.removeEventListener("mouseup", this.onMouseUp), this.window.removeEventListener("mousemove", this.onMouseMove), this.window.removeEventListener("mouseleave", this.onMouseUp), this.window.removeEventListener("touchmove", this.onMouseMove, !0), this.window.removeEventListener("touchend", this.onMouseUp));
    }, o.prototype.componentDidMount = function() {
      if (!(!this.resizable || !this.window)) {
        var t = this.window.getComputedStyle(this.resizable);
        this.setState({
          width: this.state.width || this.size.width,
          height: this.state.height || this.size.height,
          flexBasis: t.flexBasis !== "auto" ? t.flexBasis : void 0
        });
      }
    }, o.prototype.componentWillUnmount = function() {
      this.window && this.unbindEvents();
    }, o.prototype.createSizeForCssProperty = function(t, i) {
      var e = this.propsSize && this.propsSize[i];
      return this.state[i] === "auto" && this.state.original[i] === t && (typeof e > "u" || e === "auto") ? "auto" : t;
    }, o.prototype.calculateNewMaxFromBoundary = function(t, i) {
      var e = this.props.boundsByDirection, n = this.state.direction, a = e && P("left", n), r = e && P("top", n), u, p;
      if (this.props.bounds === "parent") {
        var d = this.parentNode;
        d && (u = a ? this.resizableRight - this.parentLeft : d.offsetWidth + (this.parentLeft - this.resizableLeft), p = r ? this.resizableBottom - this.parentTop : d.offsetHeight + (this.parentTop - this.resizableTop));
      } else this.props.bounds === "window" ? this.window && (u = a ? this.resizableRight : this.window.innerWidth - this.resizableLeft, p = r ? this.resizableBottom : this.window.innerHeight - this.resizableTop) : this.props.bounds && (u = a ? this.resizableRight - this.targetLeft : this.props.bounds.offsetWidth + (this.targetLeft - this.resizableLeft), p = r ? this.resizableBottom - this.targetTop : this.props.bounds.offsetHeight + (this.targetTop - this.resizableTop));
      return u && Number.isFinite(u) && (t = t && t < u ? t : u), p && Number.isFinite(p) && (i = i && i < p ? i : p), { maxWidth: t, maxHeight: i };
    }, o.prototype.calculateNewSizeFromDirection = function(t, i) {
      var e = this.props.scale || 1, n = vt(this.props.resizeRatio || 1), a = n[0], r = n[1], u = this.state, p = u.direction, d = u.original, f = this.props, c = f.lockAspectRatio, S = f.lockAspectRatioExtraHeight, z = f.lockAspectRatioExtraWidth, g = d.width, y = d.height, x = S || 0, m = z || 0;
      return P("right", p) && (g = d.width + (t - d.x) * a / e, c && (y = (g - m) / this.ratio + x)), P("left", p) && (g = d.width - (t - d.x) * a / e, c && (y = (g - m) / this.ratio + x)), P("bottom", p) && (y = d.height + (i - d.y) * r / e, c && (g = (y - x) * this.ratio + m)), P("top", p) && (y = d.height - (i - d.y) * r / e, c && (g = (y - x) * this.ratio + m)), { newWidth: g, newHeight: y };
    }, o.prototype.calculateNewSizeFromAspectRatio = function(t, i, e, n) {
      var a = this.props, r = a.lockAspectRatio, u = a.lockAspectRatioExtraHeight, p = a.lockAspectRatioExtraWidth, d = typeof n.width > "u" ? 10 : n.width, f = typeof e.width > "u" || e.width < 0 ? t : e.width, c = typeof n.height > "u" ? 10 : n.height, S = typeof e.height > "u" || e.height < 0 ? i : e.height, z = u || 0, g = p || 0;
      if (r) {
        var y = (c - z) * this.ratio + g, x = (S - z) * this.ratio + g, m = (d - g) / this.ratio + z, v = (f - g) / this.ratio + z, w = Math.max(d, y), L = Math.min(f, x), E = Math.max(c, m), W = Math.min(S, v);
        t = A(t, w, L), i = A(i, E, W);
      } else
        t = A(t, d, f), i = A(i, c, S);
      return { newWidth: t, newHeight: i };
    }, o.prototype.setBoundingClientRect = function() {
      var t = 1 / (this.props.scale || 1);
      if (this.props.bounds === "parent") {
        var i = this.parentNode;
        if (i) {
          var e = i.getBoundingClientRect();
          this.parentLeft = e.left * t, this.parentTop = e.top * t;
        }
      }
      if (this.props.bounds && typeof this.props.bounds != "string") {
        var n = this.props.bounds.getBoundingClientRect();
        this.targetLeft = n.left * t, this.targetTop = n.top * t;
      }
      if (this.resizable) {
        var a = this.resizable.getBoundingClientRect(), r = a.left, u = a.top, p = a.right, d = a.bottom;
        this.resizableLeft = r * t, this.resizableRight = p * t, this.resizableTop = u * t, this.resizableBottom = d * t;
      }
    }, o.prototype.onResizeStart = function(t, i) {
      if (!(!this.resizable || !this.window)) {
        var e = 0, n = 0;
        if (t.nativeEvent && ct(t.nativeEvent) ? (e = t.nativeEvent.clientX, n = t.nativeEvent.clientY) : t.nativeEvent && D(t.nativeEvent) && (e = t.nativeEvent.touches[0].clientX, n = t.nativeEvent.touches[0].clientY), this.props.onResizeStart && this.resizable) {
          var a = this.props.onResizeStart(t, i, this.resizable);
          if (a === !1)
            return;
        }
        this.props.size && (typeof this.props.size.height < "u" && this.props.size.height !== this.state.height && this.setState({ height: this.props.size.height }), typeof this.props.size.width < "u" && this.props.size.width !== this.state.width && this.setState({ width: this.props.size.width })), this.ratio = typeof this.props.lockAspectRatio == "number" ? this.props.lockAspectRatio : this.size.width / this.size.height;
        var r, u = this.window.getComputedStyle(this.resizable);
        if (u.flexBasis !== "auto") {
          var p = this.parentNode;
          if (p) {
            var d = this.window.getComputedStyle(p).flexDirection;
            this.flexDir = d.startsWith("row") ? "row" : "column", r = u.flexBasis;
          }
        }
        this.setBoundingClientRect(), this.bindEvents();
        var f = {
          original: {
            x: e,
            y: n,
            width: this.size.width,
            height: this.size.height
          },
          isResizing: !0,
          backgroundStyle: _(_({}, this.state.backgroundStyle), { cursor: this.window.getComputedStyle(t.target).cursor || "auto" }),
          direction: i,
          flexBasis: r
        };
        this.setState(f);
      }
    }, o.prototype.onMouseMove = function(t) {
      var i = this;
      if (!(!this.state.isResizing || !this.resizable || !this.window)) {
        if (this.window.TouchEvent && D(t))
          try {
            t.preventDefault(), t.stopPropagation();
          } catch {
          }
        var e = this.props, n = e.maxWidth, a = e.maxHeight, r = e.minWidth, u = e.minHeight, p = D(t) ? t.touches[0].clientX : t.clientX, d = D(t) ? t.touches[0].clientY : t.clientY, f = this.state, c = f.direction, S = f.original, z = f.width, g = f.height, y = this.getParentSize(), x = gt(y, this.window.innerWidth, this.window.innerHeight, n, a, r, u);
        n = x.maxWidth, a = x.maxHeight, r = x.minWidth, u = x.minHeight;
        var m = this.calculateNewSizeFromDirection(p, d), v = m.newHeight, w = m.newWidth, L = this.calculateNewMaxFromBoundary(n, a);
        this.props.snap && this.props.snap.x && (w = Z(w, this.props.snap.x, this.props.snapGap)), this.props.snap && this.props.snap.y && (v = Z(v, this.props.snap.y, this.props.snapGap));
        var E = this.calculateNewSizeFromAspectRatio(w, v, { width: L.maxWidth, height: L.maxHeight }, { width: r, height: u });
        if (w = E.newWidth, v = E.newHeight, this.props.grid) {
          var W = V(w, this.props.grid[0], this.props.gridGap ? this.props.gridGap[0] : 0), H = V(v, this.props.grid[1], this.props.gridGap ? this.props.gridGap[1] : 0), N = this.props.snapGap || 0, l = N === 0 || Math.abs(W - w) <= N ? W : w, h = N === 0 || Math.abs(H - v) <= N ? H : v;
          w = l, v = h;
        }
        var R = {
          width: w - S.width,
          height: v - S.height
        };
        if (z && typeof z == "string") {
          if (z.endsWith("%")) {
            var k = w / y.width * 100;
            w = k + "%";
          } else if (z.endsWith("vw")) {
            var j = w / this.window.innerWidth * 100;
            w = j + "vw";
          } else if (z.endsWith("vh")) {
            var F = w / this.window.innerHeight * 100;
            w = F + "vh";
          }
        }
        if (g && typeof g == "string") {
          if (g.endsWith("%")) {
            var k = v / y.height * 100;
            v = k + "%";
          } else if (g.endsWith("vw")) {
            var j = v / this.window.innerWidth * 100;
            v = j + "vw";
          } else if (g.endsWith("vh")) {
            var F = v / this.window.innerHeight * 100;
            v = F + "vh";
          }
        }
        var M = {
          width: this.createSizeForCssProperty(w, "width"),
          height: this.createSizeForCssProperty(v, "height")
        };
        this.flexDir === "row" ? M.flexBasis = M.width : this.flexDir === "column" && (M.flexBasis = M.height);
        var J = this.state.width !== M.width, K = this.state.height !== M.height, Q = this.state.flexBasis !== M.flexBasis, Y = J || K || Q;
        Y && at(function() {
          i.setState(M);
        }), this.props.onResize && Y && this.props.onResize(t, c, this.resizable, R);
      }
    }, o.prototype.onMouseUp = function(t) {
      var i, e, n = this.state, a = n.isResizing, r = n.direction, u = n.original;
      if (!(!a || !this.resizable)) {
        var p = {
          width: this.size.width - u.width,
          height: this.size.height - u.height
        };
        this.props.onResizeStop && this.props.onResizeStop(t, r, this.resizable, p), this.props.size && this.setState({ width: (i = this.props.size.width) !== null && i !== void 0 ? i : "auto", height: (e = this.props.size.height) !== null && e !== void 0 ? e : "auto" }), this.unbindEvents(), this.setState({
          isResizing: !1,
          backgroundStyle: _(_({}, this.state.backgroundStyle), { cursor: "auto" })
        });
      }
    }, o.prototype.updateSize = function(t) {
      var i, e;
      this.setState({ width: (i = t.width) !== null && i !== void 0 ? i : "auto", height: (e = t.height) !== null && e !== void 0 ? e : "auto" });
    }, o.prototype.renderResizer = function(t) {
      var i = this, e = this.props, n = e.enable, a = e.handleStyles, r = e.handleClasses, u = e.handleWrapperStyle, p = e.handleWrapperClass, d = e.handleComponent;
      if (!n)
        return null;
      var f = t.filter(function(c) {
        return n[c] !== !1;
      }).map(function(c) {
        return n[c] !== !1 ? C.createElement(ut, { key: c, direction: c, onResizeStart: i.onResizeStart, replaceStyles: a && a[c], className: r && r[c] }, d && d[c] ? d[c] : null) : null;
      });
      return C.createElement("div", { className: p, style: u }, f);
    }, o.prototype.render = function() {
      var t = this, i = Object.keys(this.props).reduce(function(a, r) {
        return wt.indexOf(r) !== -1 || (a[r] = t.props[r]), a;
      }, {}), e = _(_(_({ position: "relative", userSelect: this.state.isResizing ? "none" : "auto" }, this.props.style), this.sizeStyle), { maxWidth: this.props.maxWidth, maxHeight: this.props.maxHeight, minWidth: this.props.minWidth, minHeight: this.props.minHeight, boxSizing: "border-box", flexShrink: 0 });
      this.state.flexBasis && (e.flexBasis = this.state.flexBasis);
      var n = this.props.as || "div";
      return C.createElement(
        n,
        _({ style: e, className: this.props.className }, i, {
          // `ref` is after `extendsProps` to ensure this one wins over a version
          // passed in
          ref: function(a) {
            a && (t.resizable = a);
          }
        }),
        this.state.isResizing && C.createElement("div", { style: this.state.backgroundStyle }),
        this.renderResizer(["topLeft", "top", "topRight", "left"]),
        this.props.children,
        this.renderResizer(["right", "bottomLeft", "bottom", "bottomRight"])
      );
    }, o.defaultProps = {
      as: "div",
      onResizeStart: function() {
      },
      onResize: function() {
      },
      onResizeStop: function() {
      },
      enable: {
        top: !0,
        right: !0,
        bottom: !0,
        left: !0,
        topRight: !0,
        bottomRight: !0,
        bottomLeft: !0,
        topLeft: !0
      },
      style: {},
      grid: [1, 1],
      gridGap: [0, 0],
      lockAspectRatio: !1,
      lockAspectRatioExtraWidth: 0,
      lockAspectRatioExtraHeight: 0,
      scale: 1,
      resizeRatio: 1,
      snapGap: 0
    }, o;
  }(C.PureComponent)
);
const Mt = ({ children: s }) => {
  const o = it.Children.only(s), t = ot(), i = nt(), e = i.get.vx_popup_frame, n = e.position ? {
    x: e.position.x / i.get.vx_ui_scale,
    y: e.position.y / i.get.vx_ui_scale
  } : null, a = U(e.size), r = U(null), u = (l) => {
    const h = l.getBoundingClientRect();
    a.current = {
      width: h.width,
      height: h.height
    };
  }, p = (l) => {
    r.current = {
      top: parseFloat(l.style.top),
      left: parseFloat(l.style.left)
    };
  }, d = U(null), [f, c] = st(null);
  rt(() => {
    setTimeout(() => {
      if (d.current) {
        const l = d.current.getBoundingClientRect();
        c({
          width: l.width,
          height: l.height
        }), d.current.style.opacity = "1";
      }
    }, 100);
  }, []);
  const S = (l, h) => l + h > f.width ? "right" : "left", z = (l, h) => l + h > f.height ? "bottom" : "top", g = (l, h) => l ? z(l.y, h.height) + S(l.x, h.width) : "null", y = (l, h) => S(l, h) === "right" ? l - h : l, x = (l, h) => z(l, h) === "bottom" ? l - h : l, m = () => a.current ? a.current : {
    width: f.width / 2,
    height: f.height / 2
  }, v = () => n ? {
    position: "absolute",
    top: x(n.y, m().height),
    left: y(n.x, m().width)
  } : {
    position: "relative"
  }, w = () => {
    const l = g(n, m()), h = {
      top: !1,
      right: !1,
      bottom: !1,
      left: !1,
      topRight: !1,
      bottomRight: !1,
      bottomLeft: !1,
      topLeft: !1
    };
    switch (l) {
      case "topleft":
        h.bottomRight = !0;
        break;
      case "topright":
        h.bottomLeft = !0;
        break;
      case "bottomright":
        h.topLeft = !0;
        break;
      case "bottomleft":
        h.topRight = !0;
        break;
      default:
        return;
    }
    return h;
  }, L = () => {
    const l = g(n, m()), h = { position: "absolute" };
    switch (l) {
      case "topleft":
        h.top = "100%", h.left = "100%", h.transform = "translate(-100%, -100%)";
        break;
      case "topright":
        h.top = "100%", h.left = 0, h.transform = "translate(0, -100%) rotate(90deg)";
        break;
      case "bottomright":
        h.top = 0, h.left = 0, h.transform = "rotate(180deg)";
        break;
      case "bottomleft":
        h.top = 0, h.left = "100%", h.transform = "translate(-100%, 0) rotate(270deg)";
        break;
      default:
        h.display = "none";
        break;
    }
    return h;
  }, E = () => {
    const l = g(n, m()), h = {
      maxWidth: void 0,
      maxHeight: void 0
    };
    switch (l) {
      case "topleft":
        h.maxWidth = f.width - n.x, h.maxHeight = f.height - n.y;
        break;
      case "topright":
        h.maxWidth = -f.width - n.x, h.maxHeight = f.height - n.y;
        break;
      case "bottomright":
        h.maxWidth = -f.width - n.x, h.maxHeight = -f.height - n.y;
        break;
      case "bottomleft":
        h.maxWidth = f.width - n.x, h.maxHeight = -f.height - n.y;
        break;
    }
    return h;
  }, W = () => {
    d.current && (d.current.style.opacity = "0"), i.set("vx_popup_frame_callback_data", {
      position: e.position,
      size: a.current
    }), t.hide();
  }, H = () => /* @__PURE__ */ B(
    G,
    {
      shadow: "sm",
      withBorder: !0,
      style: {
        ...m(),
        ...v()
      },
      onClick: (l) => l.stopPropagation(),
      onMouseLeave: () => {
        e.exit_on_leave && W();
      },
      children: o
    }
  ), N = () => /* @__PURE__ */ B(
    bt,
    {
      defaultSize: m(),
      resizeRatio: 1 / i.get.vx_ui_scale,
      style: { ...v() },
      enable: w(),
      maxWidth: E().maxWidth,
      maxHeight: E().maxHeight,
      onResizeStart: (l, h, R) => {
        r.current || p(R);
      },
      onResize: (l, h, R, k) => {
        ["left", "bottomLeft", "topLeft"].includes(h) && (R.style.left = `${r.current.left - k.width}px`), ["top", "topRight", "topLeft"].includes(h) && (R.style.top = `${r.current.top - k.height}px`);
      },
      onResizeStop: (l, h, R) => {
        p(R), u(R);
      },
      children: /* @__PURE__ */ et(
        G,
        {
          shadow: "sm",
          withBorder: !0,
          style: {
            width: "100%",
            height: "100%"
          },
          onClick: (l) => l.stopPropagation(),
          onMouseLeave: () => {
            e.exit_on_leave && W();
          },
          children: [
            o,
            /* @__PURE__ */ B(
              ht,
              {
                iconName: "notches",
                iconStyle: "thin",
                size: 32,
                style: L()
              }
            )
          ]
        }
      )
    }
  );
  return /* @__PURE__ */ B(
    "div",
    {
      ref: d,
      style: {
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "clip",
        transition: "opacity 0.25s ease-in-out",
        opacity: 0
      },
      onClick: () => W(),
      children: f ? e.resizable ? /* @__PURE__ */ B(N, {}) : /* @__PURE__ */ B(H, {}) : /* @__PURE__ */ B(tt, {})
    }
  );
};
export {
  Mt as PopupFrame
};
