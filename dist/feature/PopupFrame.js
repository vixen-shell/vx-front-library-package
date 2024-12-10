import { jsx as E, Fragment as tt, jsxs as et } from "react/jsx-runtime";
import * as B from "react";
import it, { useRef as U, useState as st, useEffect as rt } from "react";
import { useHidePopupFrame as ot } from "./PopupHooks.js";
import { useVxState as nt } from "../stateHook/index.js";
import { Paper as G } from "@mantine/core";
import { flushSync as at } from "react-dom";
import { PhosphorIcon as ht } from "../components/PhosphorIcon.js";
var pt = /* @__PURE__ */ function() {
  var s = function(o, t) {
    return s = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, i) {
      e.__proto__ = i;
    } || function(e, i) {
      for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
    }, s(o, t);
  };
  return function(o, t) {
    s(o, t);
    function e() {
      this.constructor = o;
    }
    o.prototype = t === null ? Object.create(t) : (e.prototype = t.prototype, new e());
  };
}(), b = function() {
  return b = Object.assign || function(s) {
    for (var o, t = 1, e = arguments.length; t < e; t++) {
      o = arguments[t];
      for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (s[i] = o[i]);
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
      return t.onMouseDown = function(e) {
        t.props.onResizeStart(e, t.props.direction);
      }, t.onTouchStart = function(e) {
        t.props.onResizeStart(e, t.props.direction);
      }, t;
    }
    return o.prototype.render = function() {
      return B.createElement("div", { className: this.props.className || "", style: b(b({ position: "absolute", userSelect: "none" }, lt[this.props.direction]), this.props.replaceStyles || {}), onMouseDown: this.onMouseDown, onTouchStart: this.onTouchStart }, this.props.children);
    }, o;
  }(B.PureComponent)
), dt = /* @__PURE__ */ function() {
  var s = function(o, t) {
    return s = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, i) {
      e.__proto__ = i;
    } || function(e, i) {
      for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
    }, s(o, t);
  };
  return function(o, t) {
    s(o, t);
    function e() {
      this.constructor = o;
    }
    o.prototype = t === null ? Object.create(t) : (e.prototype = t.prototype, new e());
  };
}(), _ = function() {
  return _ = Object.assign || function(s) {
    for (var o, t = 1, e = arguments.length; t < e; t++) {
      o = arguments[t];
      for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (s[i] = o[i]);
    }
    return s;
  }, _.apply(this, arguments);
}, ft = {
  width: "auto",
  height: "auto"
}, A = function(s, o, t) {
  return Math.max(Math.min(s, t), o);
}, V = function(s, o, t) {
  var e = Math.round(s / o);
  return e * o + t * (e - 1);
}, H = function(s, o) {
  return new RegExp(s, "i").test(o);
}, D = function(s) {
  return !!(s.touches && s.touches.length);
}, ct = function(s) {
  return !!((s.clientX || s.clientX === 0) && (s.clientY || s.clientY === 0));
}, Z = function(s, o, t) {
  t === void 0 && (t = 0);
  var e = o.reduce(function(n, a, r) {
    return Math.abs(a - s) < Math.abs(o[n] - s) ? r : n;
  }, 0), i = Math.abs(o[e] - s);
  return t === 0 || i < t ? o[e] : s;
}, X = function(s) {
  return s = s.toString(), s === "auto" || s.endsWith("px") || s.endsWith("%") || s.endsWith("vh") || s.endsWith("vw") || s.endsWith("vmax") || s.endsWith("vmin") ? s : s + "px";
}, T = function(s, o, t, e) {
  if (s && typeof s == "string") {
    if (s.endsWith("px"))
      return Number(s.replace("px", ""));
    if (s.endsWith("%")) {
      var i = Number(s.replace("%", "")) / 100;
      return o * i;
    }
    if (s.endsWith("vw")) {
      var i = Number(s.replace("vw", "")) / 100;
      return t * i;
    }
    if (s.endsWith("vh")) {
      var i = Number(s.replace("vh", "")) / 100;
      return e * i;
    }
  }
  return s;
}, gt = function(s, o, t, e, i, n, a) {
  return e = T(e, s.width, o, t), i = T(i, s.height, o, t), n = T(n, s.width, o, t), a = T(a, s.height, o, t), {
    maxWidth: typeof e > "u" ? void 0 : Number(e),
    maxHeight: typeof i > "u" ? void 0 : Number(i),
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
      var e, i, n, a, r = s.call(this, t) || this;
      return r.ratio = 1, r.resizable = null, r.parentLeft = 0, r.parentTop = 0, r.resizableLeft = 0, r.resizableRight = 0, r.resizableTop = 0, r.resizableBottom = 0, r.targetLeft = 0, r.targetTop = 0, r.appendBase = function() {
        if (!r.resizable || !r.window)
          return null;
        var l = r.parentNode;
        if (!l)
          return null;
        var p = r.window.document.createElement("div");
        return p.style.width = "100%", p.style.height = "100%", p.style.position = "absolute", p.style.transform = "scale(0, 0)", p.style.left = "0", p.style.flex = "0 0 100%", p.classList ? p.classList.add(q) : p.className += q, l.appendChild(p), p;
      }, r.removeBase = function(l) {
        var p = r.parentNode;
        p && p.removeChild(l);
      }, r.state = {
        isResizing: !1,
        width: (i = (e = r.propsSize) === null || e === void 0 ? void 0 : e.width) !== null && i !== void 0 ? i : "auto",
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
        var t = 0, e = 0;
        if (this.resizable && this.window) {
          var i = this.resizable.offsetWidth, n = this.resizable.offsetHeight, a = this.resizable.style.position;
          a !== "relative" && (this.resizable.style.position = "relative"), t = this.resizable.style.width !== "auto" ? this.resizable.offsetWidth : i, e = this.resizable.style.height !== "auto" ? this.resizable.offsetHeight : n, this.resizable.style.position = a;
        }
        return { width: t, height: e };
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(o.prototype, "sizeStyle", {
      get: function() {
        var t = this, e = this.props.size, i = function(r) {
          var l;
          if (typeof t.state[r] > "u" || t.state[r] === "auto")
            return "auto";
          if (t.propsSize && t.propsSize[r] && (!((l = t.propsSize[r]) === null || l === void 0) && l.toString().endsWith("%"))) {
            if (t.state[r].toString().endsWith("%"))
              return t.state[r].toString();
            var p = t.getParentSize(), f = Number(t.state[r].toString().replace("px", "")), g = f / p[r] * 100;
            return g + "%";
          }
          return X(t.state[r]);
        }, n = e && typeof e.width < "u" && !this.state.isResizing ? X(e.width) : i("width"), a = e && typeof e.height < "u" && !this.state.isResizing ? X(e.height) : i("height");
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
      var e = !1, i = this.parentNode.style.flexWrap;
      i !== "wrap" && (e = !0, this.parentNode.style.flexWrap = "wrap"), t.style.position = "relative", t.style.minWidth = "100%", t.style.minHeight = "100%";
      var n = {
        width: t.offsetWidth,
        height: t.offsetHeight
      };
      return e && (this.parentNode.style.flexWrap = i), this.removeBase(t), n;
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
    }, o.prototype.createSizeForCssProperty = function(t, e) {
      var i = this.propsSize && this.propsSize[e];
      return this.state[e] === "auto" && this.state.original[e] === t && (typeof i > "u" || i === "auto") ? "auto" : t;
    }, o.prototype.calculateNewMaxFromBoundary = function(t, e) {
      var i = this.props.boundsByDirection, n = this.state.direction, a = i && H("left", n), r = i && H("top", n), l, p;
      if (this.props.bounds === "parent") {
        var f = this.parentNode;
        f && (l = a ? this.resizableRight - this.parentLeft : f.offsetWidth + (this.parentLeft - this.resizableLeft), p = r ? this.resizableBottom - this.parentTop : f.offsetHeight + (this.parentTop - this.resizableTop));
      } else this.props.bounds === "window" ? this.window && (l = a ? this.resizableRight : this.window.innerWidth - this.resizableLeft, p = r ? this.resizableBottom : this.window.innerHeight - this.resizableTop) : this.props.bounds && (l = a ? this.resizableRight - this.targetLeft : this.props.bounds.offsetWidth + (this.targetLeft - this.resizableLeft), p = r ? this.resizableBottom - this.targetTop : this.props.bounds.offsetHeight + (this.targetTop - this.resizableTop));
      return l && Number.isFinite(l) && (t = t && t < l ? t : l), p && Number.isFinite(p) && (e = e && e < p ? e : p), { maxWidth: t, maxHeight: e };
    }, o.prototype.calculateNewSizeFromDirection = function(t, e) {
      var i = this.props.scale || 1, n = vt(this.props.resizeRatio || 1), a = n[0], r = n[1], l = this.state, p = l.direction, f = l.original, g = this.props, d = g.lockAspectRatio, R = g.lockAspectRatioExtraHeight, z = g.lockAspectRatioExtraWidth, v = f.width, m = f.height, y = R || 0, S = z || 0;
      return H("right", p) && (v = f.width + (t - f.x) * a / i, d && (m = (v - S) / this.ratio + y)), H("left", p) && (v = f.width - (t - f.x) * a / i, d && (m = (v - S) / this.ratio + y)), H("bottom", p) && (m = f.height + (e - f.y) * r / i, d && (v = (m - y) * this.ratio + S)), H("top", p) && (m = f.height - (e - f.y) * r / i, d && (v = (m - y) * this.ratio + S)), { newWidth: v, newHeight: m };
    }, o.prototype.calculateNewSizeFromAspectRatio = function(t, e, i, n) {
      var a = this.props, r = a.lockAspectRatio, l = a.lockAspectRatioExtraHeight, p = a.lockAspectRatioExtraWidth, f = typeof n.width > "u" ? 10 : n.width, g = typeof i.width > "u" || i.width < 0 ? t : i.width, d = typeof n.height > "u" ? 10 : n.height, R = typeof i.height > "u" || i.height < 0 ? e : i.height, z = l || 0, v = p || 0;
      if (r) {
        var m = (d - z) * this.ratio + v, y = (R - z) * this.ratio + v, S = (f - v) / this.ratio + z, c = (g - v) / this.ratio + z, w = Math.max(f, m), C = Math.min(g, y), L = Math.max(d, S), M = Math.min(R, c);
        t = A(t, w, C), e = A(e, L, M);
      } else
        t = A(t, f, g), e = A(e, d, R);
      return { newWidth: t, newHeight: e };
    }, o.prototype.setBoundingClientRect = function() {
      var t = 1 / (this.props.scale || 1);
      if (this.props.bounds === "parent") {
        var e = this.parentNode;
        if (e) {
          var i = e.getBoundingClientRect();
          this.parentLeft = i.left * t, this.parentTop = i.top * t;
        }
      }
      if (this.props.bounds && typeof this.props.bounds != "string") {
        var n = this.props.bounds.getBoundingClientRect();
        this.targetLeft = n.left * t, this.targetTop = n.top * t;
      }
      if (this.resizable) {
        var a = this.resizable.getBoundingClientRect(), r = a.left, l = a.top, p = a.right, f = a.bottom;
        this.resizableLeft = r * t, this.resizableRight = p * t, this.resizableTop = l * t, this.resizableBottom = f * t;
      }
    }, o.prototype.onResizeStart = function(t, e) {
      if (!(!this.resizable || !this.window)) {
        var i = 0, n = 0;
        if (t.nativeEvent && ct(t.nativeEvent) ? (i = t.nativeEvent.clientX, n = t.nativeEvent.clientY) : t.nativeEvent && D(t.nativeEvent) && (i = t.nativeEvent.touches[0].clientX, n = t.nativeEvent.touches[0].clientY), this.props.onResizeStart && this.resizable) {
          var a = this.props.onResizeStart(t, e, this.resizable);
          if (a === !1)
            return;
        }
        this.props.size && (typeof this.props.size.height < "u" && this.props.size.height !== this.state.height && this.setState({ height: this.props.size.height }), typeof this.props.size.width < "u" && this.props.size.width !== this.state.width && this.setState({ width: this.props.size.width })), this.ratio = typeof this.props.lockAspectRatio == "number" ? this.props.lockAspectRatio : this.size.width / this.size.height;
        var r, l = this.window.getComputedStyle(this.resizable);
        if (l.flexBasis !== "auto") {
          var p = this.parentNode;
          if (p) {
            var f = this.window.getComputedStyle(p).flexDirection;
            this.flexDir = f.startsWith("row") ? "row" : "column", r = l.flexBasis;
          }
        }
        this.setBoundingClientRect(), this.bindEvents();
        var g = {
          original: {
            x: i,
            y: n,
            width: this.size.width,
            height: this.size.height
          },
          isResizing: !0,
          backgroundStyle: _(_({}, this.state.backgroundStyle), { cursor: this.window.getComputedStyle(t.target).cursor || "auto" }),
          direction: e,
          flexBasis: r
        };
        this.setState(g);
      }
    }, o.prototype.onMouseMove = function(t) {
      var e = this;
      if (!(!this.state.isResizing || !this.resizable || !this.window)) {
        if (this.window.TouchEvent && D(t))
          try {
            t.preventDefault(), t.stopPropagation();
          } catch {
          }
        var i = this.props, n = i.maxWidth, a = i.maxHeight, r = i.minWidth, l = i.minHeight, p = D(t) ? t.touches[0].clientX : t.clientX, f = D(t) ? t.touches[0].clientY : t.clientY, g = this.state, d = g.direction, R = g.original, z = g.width, v = g.height, m = this.getParentSize(), y = gt(m, this.window.innerWidth, this.window.innerHeight, n, a, r, l);
        n = y.maxWidth, a = y.maxHeight, r = y.minWidth, l = y.minHeight;
        var S = this.calculateNewSizeFromDirection(p, f), c = S.newHeight, w = S.newWidth, C = this.calculateNewMaxFromBoundary(n, a);
        this.props.snap && this.props.snap.x && (w = Z(w, this.props.snap.x, this.props.snapGap)), this.props.snap && this.props.snap.y && (c = Z(c, this.props.snap.y, this.props.snapGap));
        var L = this.calculateNewSizeFromAspectRatio(w, c, { width: C.maxWidth, height: C.maxHeight }, { width: r, height: l });
        if (w = L.newWidth, c = L.newHeight, this.props.grid) {
          var M = V(w, this.props.grid[0], this.props.gridGap ? this.props.gridGap[0] : 0), N = V(c, this.props.grid[1], this.props.gridGap ? this.props.gridGap[1] : 0), k = this.props.snapGap || 0, j = k === 0 || Math.abs(M - w) <= k ? M : w, u = k === 0 || Math.abs(N - c) <= k ? N : c;
          w = j, c = u;
        }
        var h = {
          width: w - R.width,
          height: c - R.height
        };
        if (z && typeof z == "string") {
          if (z.endsWith("%")) {
            var x = w / m.width * 100;
            w = x + "%";
          } else if (z.endsWith("vw")) {
            var P = w / this.window.innerWidth * 100;
            w = P + "vw";
          } else if (z.endsWith("vh")) {
            var F = w / this.window.innerHeight * 100;
            w = F + "vh";
          }
        }
        if (v && typeof v == "string") {
          if (v.endsWith("%")) {
            var x = c / m.height * 100;
            c = x + "%";
          } else if (v.endsWith("vw")) {
            var P = c / this.window.innerWidth * 100;
            c = P + "vw";
          } else if (v.endsWith("vh")) {
            var F = c / this.window.innerHeight * 100;
            c = F + "vh";
          }
        }
        var W = {
          width: this.createSizeForCssProperty(w, "width"),
          height: this.createSizeForCssProperty(c, "height")
        };
        this.flexDir === "row" ? W.flexBasis = W.width : this.flexDir === "column" && (W.flexBasis = W.height);
        var J = this.state.width !== W.width, K = this.state.height !== W.height, Q = this.state.flexBasis !== W.flexBasis, Y = J || K || Q;
        Y && at(function() {
          e.setState(W);
        }), this.props.onResize && Y && this.props.onResize(t, d, this.resizable, h);
      }
    }, o.prototype.onMouseUp = function(t) {
      var e, i, n = this.state, a = n.isResizing, r = n.direction, l = n.original;
      if (!(!a || !this.resizable)) {
        var p = {
          width: this.size.width - l.width,
          height: this.size.height - l.height
        };
        this.props.onResizeStop && this.props.onResizeStop(t, r, this.resizable, p), this.props.size && this.setState({ width: (e = this.props.size.width) !== null && e !== void 0 ? e : "auto", height: (i = this.props.size.height) !== null && i !== void 0 ? i : "auto" }), this.unbindEvents(), this.setState({
          isResizing: !1,
          backgroundStyle: _(_({}, this.state.backgroundStyle), { cursor: "auto" })
        });
      }
    }, o.prototype.updateSize = function(t) {
      var e, i;
      this.setState({ width: (e = t.width) !== null && e !== void 0 ? e : "auto", height: (i = t.height) !== null && i !== void 0 ? i : "auto" });
    }, o.prototype.renderResizer = function(t) {
      var e = this, i = this.props, n = i.enable, a = i.handleStyles, r = i.handleClasses, l = i.handleWrapperStyle, p = i.handleWrapperClass, f = i.handleComponent;
      if (!n)
        return null;
      var g = t.filter(function(d) {
        return n[d] !== !1;
      }).map(function(d) {
        return n[d] !== !1 ? B.createElement(ut, { key: d, direction: d, onResizeStart: e.onResizeStart, replaceStyles: a && a[d], className: r && r[d] }, f && f[d] ? f[d] : null) : null;
      });
      return B.createElement("div", { className: p, style: l }, g);
    }, o.prototype.render = function() {
      var t = this, e = Object.keys(this.props).reduce(function(a, r) {
        return wt.indexOf(r) !== -1 || (a[r] = t.props[r]), a;
      }, {}), i = _(_(_({ position: "relative", userSelect: this.state.isResizing ? "none" : "auto" }, this.props.style), this.sizeStyle), { maxWidth: this.props.maxWidth, maxHeight: this.props.maxHeight, minWidth: this.props.minWidth, minHeight: this.props.minHeight, boxSizing: "border-box", flexShrink: 0 });
      this.state.flexBasis && (i.flexBasis = this.state.flexBasis);
      var n = this.props.as || "div";
      return B.createElement(
        n,
        _({ style: i, className: this.props.className }, e, {
          // `ref` is after `extendsProps` to ensure this one wins over a version
          // passed in
          ref: function(a) {
            a && (t.resizable = a);
          }
        }),
        this.state.isResizing && B.createElement("div", { style: this.state.backgroundStyle }),
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
  }(B.PureComponent)
);
const Mt = ({ children: s }) => {
  const o = it.Children.only(s), t = ot(), { state: e, setStateItem: i } = nt(), n = e.vx_popup_frame, a = n.position ? {
    x: n.position.x / e.vx_ui_scale,
    y: n.position.y / e.vx_ui_scale
  } : null, r = U(n.size), l = U(null), p = (u) => {
    const h = u.getBoundingClientRect();
    r.current = {
      width: h.width,
      height: h.height
    };
  }, f = (u) => {
    l.current = {
      top: parseFloat(u.style.top),
      left: parseFloat(u.style.left)
    };
  }, g = U(null), [d, R] = st(null);
  rt(() => {
    setTimeout(() => {
      if (g.current) {
        const u = g.current.getBoundingClientRect();
        R({
          width: u.width,
          height: u.height
        }), g.current.style.opacity = "1";
      }
    }, 100);
  }, []);
  const z = (u, h) => u + h > d.width ? "right" : "left", v = (u, h) => u + h > d.height ? "bottom" : "top", m = (u, h) => u ? v(u.y, h.height) + z(u.x, h.width) : "null", y = (u, h) => z(u, h) === "right" ? u - h : u, S = (u, h) => v(u, h) === "bottom" ? u - h : u, c = () => r.current ? r.current : {
    width: d.width / 2,
    height: d.height / 2
  }, w = () => a ? {
    position: "absolute",
    top: S(a.y, c().height),
    left: y(a.x, c().width)
  } : {
    position: "relative"
  }, C = () => {
    const u = m(a, c()), h = {
      top: !1,
      right: !1,
      bottom: !1,
      left: !1,
      topRight: !1,
      bottomRight: !1,
      bottomLeft: !1,
      topLeft: !1
    };
    switch (u) {
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
    const u = m(a, c()), h = { position: "absolute" };
    switch (u) {
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
  }, M = () => {
    const u = m(a, c()), h = {
      maxWidth: void 0,
      maxHeight: void 0
    };
    switch (u) {
      case "topleft":
        h.maxWidth = d.width - a.x, h.maxHeight = d.height - a.y;
        break;
      case "topright":
        h.maxWidth = -d.width - a.x, h.maxHeight = d.height - a.y;
        break;
      case "bottomright":
        h.maxWidth = -d.width - a.x, h.maxHeight = -d.height - a.y;
        break;
      case "bottomleft":
        h.maxWidth = d.width - a.x, h.maxHeight = -d.height - a.y;
        break;
    }
    return h;
  }, N = () => {
    g.current && (g.current.style.opacity = "0"), i("vx_popup_frame_callback_data", {
      position: n.position,
      size: r.current
    }), t.hide();
  }, k = () => /* @__PURE__ */ E(
    G,
    {
      shadow: "sm",
      withBorder: !0,
      style: {
        ...c(),
        ...w()
      },
      onClick: (u) => u.stopPropagation(),
      onMouseLeave: () => {
        n.exit_on_leave && N();
      },
      children: o
    }
  ), j = () => /* @__PURE__ */ E(
    bt,
    {
      defaultSize: c(),
      resizeRatio: 1 / e.vx_ui_scale,
      style: { ...w() },
      enable: C(),
      maxWidth: M().maxWidth,
      maxHeight: M().maxHeight,
      onResizeStart: (u, h, x) => {
        l.current || f(x);
      },
      onResize: (u, h, x, P) => {
        ["left", "bottomLeft", "topLeft"].includes(h) && (x.style.left = `${l.current.left - P.width}px`), ["top", "topRight", "topLeft"].includes(h) && (x.style.top = `${l.current.top - P.height}px`);
      },
      onResizeStop: (u, h, x) => {
        f(x), p(x);
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
          onClick: (u) => u.stopPropagation(),
          onMouseLeave: () => {
            n.exit_on_leave && N();
          },
          children: [
            o,
            /* @__PURE__ */ E(
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
  return /* @__PURE__ */ E(
    "div",
    {
      ref: g,
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
      onClick: () => N(),
      children: d ? n.resizable ? /* @__PURE__ */ E(j, {}) : /* @__PURE__ */ E(k, {}) : /* @__PURE__ */ E(tt, {})
    }
  );
};
export {
  Mt as PopupFrame
};
