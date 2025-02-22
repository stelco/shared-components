import he, { useRef as fn, useDebugValue as Gt, createElement as pn, useContext as dn } from "react";
var Ye = { exports: {} }, je = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qt;
function hn() {
  if (qt) return je;
  qt = 1;
  var e = he, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(f, l, w) {
    var d, h = {}, v = null, S = null;
    w !== void 0 && (v = "" + w), l.key !== void 0 && (v = "" + l.key), l.ref !== void 0 && (S = l.ref);
    for (d in l) o.call(l, d) && !i.hasOwnProperty(d) && (h[d] = l[d]);
    if (f && f.defaultProps) for (d in l = f.defaultProps, l) h[d] === void 0 && (h[d] = l[d]);
    return { $$typeof: t, type: f, key: v, ref: S, props: h, _owner: a.current };
  }
  return je.Fragment = r, je.jsx = c, je.jsxs = c, je;
}
var De = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ht;
function mn() {
  return Ht || (Ht = 1, process.env.NODE_ENV !== "production" && function() {
    var e = he, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), f = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), O = Symbol.iterator, N = "@@iterator";
    function M(n) {
      if (n === null || typeof n != "object")
        return null;
      var s = O && n[O] || n[N];
      return typeof s == "function" ? s : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(n) {
      {
        for (var s = arguments.length, u = new Array(s > 1 ? s - 1 : 0), p = 1; p < s; p++)
          u[p - 1] = arguments[p];
        C("error", n, u);
      }
    }
    function C(n, s, u) {
      {
        var p = x.ReactDebugCurrentFrame, _ = p.getStackAddendum();
        _ !== "" && (s += "%s", u = u.concat([_]));
        var P = u.map(function(R) {
          return String(R);
        });
        P.unshift("Warning: " + s), Function.prototype.apply.call(console[n], console, P);
      }
    }
    var T = !1, I = !1, E = !1, m = !1, Z = !1, Q;
    Q = Symbol.for("react.module.reference");
    function ct(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === o || n === i || Z || n === a || n === w || n === d || m || n === S || T || I || E || typeof n == "object" && n !== null && (n.$$typeof === v || n.$$typeof === h || n.$$typeof === c || n.$$typeof === f || n.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      n.$$typeof === Q || n.getModuleId !== void 0));
    }
    function ut(n, s, u) {
      var p = n.displayName;
      if (p)
        return p;
      var _ = s.displayName || s.name || "";
      return _ !== "" ? u + "(" + _ + ")" : u;
    }
    function Me(n) {
      return n.displayName || "Context";
    }
    function G(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
      switch (n) {
        case o:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case a:
          return "StrictMode";
        case w:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case f:
            var s = n;
            return Me(s) + ".Consumer";
          case c:
            var u = n;
            return Me(u._context) + ".Provider";
          case l:
            return ut(n, n.render, "ForwardRef");
          case h:
            var p = n.displayName || null;
            return p !== null ? p : G(n.type) || "Memo";
          case v: {
            var _ = n, P = _._payload, R = _._init;
            try {
              return G(R(P));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ee = Object.assign, ce = 0, Le, ge, Ae, W, ne, oe, L;
    function ye() {
    }
    ye.__reactDisabledLog = !0;
    function Ie() {
      {
        if (ce === 0) {
          Le = console.log, ge = console.info, Ae = console.warn, W = console.error, ne = console.group, oe = console.groupCollapsed, L = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: ye,
            writable: !0
          };
          Object.defineProperties(console, {
            info: n,
            log: n,
            warn: n,
            error: n,
            group: n,
            groupCollapsed: n,
            groupEnd: n
          });
        }
        ce++;
      }
    }
    function ve() {
      {
        if (ce--, ce === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ee({}, n, {
              value: Le
            }),
            info: ee({}, n, {
              value: ge
            }),
            warn: ee({}, n, {
              value: Ae
            }),
            error: ee({}, n, {
              value: W
            }),
            group: ee({}, n, {
              value: ne
            }),
            groupCollapsed: ee({}, n, {
              value: oe
            }),
            groupEnd: ee({}, n, {
              value: L
            })
          });
        }
        ce < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var te = x.ReactCurrentDispatcher, ae;
    function q(n, s, u) {
      {
        if (ae === void 0)
          try {
            throw Error();
          } catch (_) {
            var p = _.stack.trim().match(/\n( *(at )?)/);
            ae = p && p[1] || "";
          }
        return `
` + ae + n;
      }
    }
    var H = !1, ie;
    {
      var be = typeof WeakMap == "function" ? WeakMap : Map;
      ie = new be();
    }
    function K(n, s) {
      if (!n || H)
        return "";
      {
        var u = ie.get(n);
        if (u !== void 0)
          return u;
      }
      var p;
      H = !0;
      var _ = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var P;
      P = te.current, te.current = null, Ie();
      try {
        if (s) {
          var R = function() {
            throw Error();
          };
          if (Object.defineProperty(R.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(R, []);
            } catch (V) {
              p = V;
            }
            Reflect.construct(n, [], R);
          } else {
            try {
              R.call();
            } catch (V) {
              p = V;
            }
            n.call(R.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (V) {
            p = V;
          }
          n();
        }
      } catch (V) {
        if (V && p && typeof V.stack == "string") {
          for (var b = V.stack.split(`
`), z = p.stack.split(`
`), j = b.length - 1, D = z.length - 1; j >= 1 && D >= 0 && b[j] !== z[D]; )
            D--;
          for (; j >= 1 && D >= 0; j--, D--)
            if (b[j] !== z[D]) {
              if (j !== 1 || D !== 1)
                do
                  if (j--, D--, D < 0 || b[j] !== z[D]) {
                    var B = `
` + b[j].replace(" at new ", " at ");
                    return n.displayName && B.includes("<anonymous>") && (B = B.replace("<anonymous>", n.displayName)), typeof n == "function" && ie.set(n, B), B;
                  }
                while (j >= 1 && D >= 0);
              break;
            }
        }
      } finally {
        H = !1, te.current = P, ve(), Error.prepareStackTrace = _;
      }
      var Se = n ? n.displayName || n.name : "", ue = Se ? q(Se) : "";
      return typeof n == "function" && ie.set(n, ue), ue;
    }
    function zr(n, s, u) {
      return K(n, !1);
    }
    function Vr(n) {
      var s = n.prototype;
      return !!(s && s.isReactComponent);
    }
    function ze(n, s, u) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return K(n, Vr(n));
      if (typeof n == "string")
        return q(n);
      switch (n) {
        case w:
          return q("Suspense");
        case d:
          return q("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case l:
            return zr(n.render);
          case h:
            return ze(n.type, s, u);
          case v: {
            var p = n, _ = p._payload, P = p._init;
            try {
              return ze(P(_), s, u);
            } catch {
            }
          }
        }
      return "";
    }
    var Ne = Object.prototype.hasOwnProperty, It = {}, Nt = x.ReactDebugCurrentFrame;
    function Ve(n) {
      if (n) {
        var s = n._owner, u = ze(n.type, n._source, s ? s.type : null);
        Nt.setExtraStackFrame(u);
      } else
        Nt.setExtraStackFrame(null);
    }
    function Yr(n, s, u, p, _) {
      {
        var P = Function.call.bind(Ne);
        for (var R in n)
          if (P(n, R)) {
            var b = void 0;
            try {
              if (typeof n[R] != "function") {
                var z = Error((p || "React class") + ": " + u + " type `" + R + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[R] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw z.name = "Invariant Violation", z;
              }
              b = n[R](s, R, p, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (j) {
              b = j;
            }
            b && !(b instanceof Error) && (Ve(_), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", u, R, typeof b), Ve(null)), b instanceof Error && !(b.message in It) && (It[b.message] = !0, Ve(_), y("Failed %s type: %s", u, b.message), Ve(null));
          }
      }
    }
    var Wr = Array.isArray;
    function lt(n) {
      return Wr(n);
    }
    function Br(n) {
      {
        var s = typeof Symbol == "function" && Symbol.toStringTag, u = s && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return u;
      }
    }
    function Ur(n) {
      try {
        return jt(n), !1;
      } catch {
        return !0;
      }
    }
    function jt(n) {
      return "" + n;
    }
    function Dt(n) {
      if (Ur(n))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Br(n)), jt(n);
    }
    var $t = x.ReactCurrentOwner, Gr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ft, Mt;
    function qr(n) {
      if (Ne.call(n, "ref")) {
        var s = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function Hr(n) {
      if (Ne.call(n, "key")) {
        var s = Object.getOwnPropertyDescriptor(n, "key").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function Kr(n, s) {
      typeof n.ref == "string" && $t.current;
    }
    function Xr(n, s) {
      {
        var u = function() {
          Ft || (Ft = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        u.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: u,
          configurable: !0
        });
      }
    }
    function Jr(n, s) {
      {
        var u = function() {
          Mt || (Mt = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        u.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: u,
          configurable: !0
        });
      }
    }
    var Zr = function(n, s, u, p, _, P, R) {
      var b = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: n,
        key: s,
        ref: u,
        props: R,
        // Record the component responsible for creating this element.
        _owner: P
      };
      return b._store = {}, Object.defineProperty(b._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(b, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.defineProperty(b, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    };
    function Qr(n, s, u, p, _) {
      {
        var P, R = {}, b = null, z = null;
        u !== void 0 && (Dt(u), b = "" + u), Hr(s) && (Dt(s.key), b = "" + s.key), qr(s) && (z = s.ref, Kr(s, _));
        for (P in s)
          Ne.call(s, P) && !Gr.hasOwnProperty(P) && (R[P] = s[P]);
        if (n && n.defaultProps) {
          var j = n.defaultProps;
          for (P in j)
            R[P] === void 0 && (R[P] = j[P]);
        }
        if (b || z) {
          var D = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          b && Xr(R, D), z && Jr(R, D);
        }
        return Zr(n, b, z, _, p, $t.current, R);
      }
    }
    var ft = x.ReactCurrentOwner, Lt = x.ReactDebugCurrentFrame;
    function we(n) {
      if (n) {
        var s = n._owner, u = ze(n.type, n._source, s ? s.type : null);
        Lt.setExtraStackFrame(u);
      } else
        Lt.setExtraStackFrame(null);
    }
    var pt;
    pt = !1;
    function dt(n) {
      return typeof n == "object" && n !== null && n.$$typeof === t;
    }
    function zt() {
      {
        if (ft.current) {
          var n = G(ft.current.type);
          if (n)
            return `

Check the render method of \`` + n + "`.";
        }
        return "";
      }
    }
    function en(n) {
      return "";
    }
    var Vt = {};
    function tn(n) {
      {
        var s = zt();
        if (!s) {
          var u = typeof n == "string" ? n : n.displayName || n.name;
          u && (s = `

Check the top-level render call using <` + u + ">.");
        }
        return s;
      }
    }
    function Yt(n, s) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var u = tn(s);
        if (Vt[u])
          return;
        Vt[u] = !0;
        var p = "";
        n && n._owner && n._owner !== ft.current && (p = " It was passed a child from " + G(n._owner.type) + "."), we(n), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, p), we(null);
      }
    }
    function Wt(n, s) {
      {
        if (typeof n != "object")
          return;
        if (lt(n))
          for (var u = 0; u < n.length; u++) {
            var p = n[u];
            dt(p) && Yt(p, s);
          }
        else if (dt(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var _ = M(n);
          if (typeof _ == "function" && _ !== n.entries)
            for (var P = _.call(n), R; !(R = P.next()).done; )
              dt(R.value) && Yt(R.value, s);
        }
      }
    }
    function rn(n) {
      {
        var s = n.type;
        if (s == null || typeof s == "string")
          return;
        var u;
        if (typeof s == "function")
          u = s.propTypes;
        else if (typeof s == "object" && (s.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        s.$$typeof === h))
          u = s.propTypes;
        else
          return;
        if (u) {
          var p = G(s);
          Yr(u, n.props, "prop", p, n);
        } else if (s.PropTypes !== void 0 && !pt) {
          pt = !0;
          var _ = G(s);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _ || "Unknown");
        }
        typeof s.getDefaultProps == "function" && !s.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function nn(n) {
      {
        for (var s = Object.keys(n.props), u = 0; u < s.length; u++) {
          var p = s[u];
          if (p !== "children" && p !== "key") {
            we(n), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), we(null);
            break;
          }
        }
        n.ref !== null && (we(n), y("Invalid attribute `ref` supplied to `React.Fragment`."), we(null));
      }
    }
    var Bt = {};
    function Ut(n, s, u, p, _, P) {
      {
        var R = ct(n);
        if (!R) {
          var b = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var z = en();
          z ? b += z : b += zt();
          var j;
          n === null ? j = "null" : lt(n) ? j = "array" : n !== void 0 && n.$$typeof === t ? (j = "<" + (G(n.type) || "Unknown") + " />", b = " Did you accidentally export a JSX literal instead of a component?") : j = typeof n, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", j, b);
        }
        var D = Qr(n, s, u, _, P);
        if (D == null)
          return D;
        if (R) {
          var B = s.children;
          if (B !== void 0)
            if (p)
              if (lt(B)) {
                for (var Se = 0; Se < B.length; Se++)
                  Wt(B[Se], n);
                Object.freeze && Object.freeze(B);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Wt(B, n);
        }
        if (Ne.call(s, "key")) {
          var ue = G(n), V = Object.keys(s).filter(function(ln) {
            return ln !== "key";
          }), ht = V.length > 0 ? "{key: someKey, " + V.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Bt[ue + ht]) {
            var un = V.length > 0 ? "{" + V.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ht, ue, un, ue), Bt[ue + ht] = !0;
          }
        }
        return n === o ? nn(D) : rn(D), D;
      }
    }
    function on(n, s, u) {
      return Ut(n, s, u, !0);
    }
    function an(n, s, u) {
      return Ut(n, s, u, !1);
    }
    var sn = an, cn = on;
    De.Fragment = o, De.jsx = sn, De.jsxs = cn;
  }()), De;
}
var Kt;
function gn() {
  return Kt || (Kt = 1, process.env.NODE_ENV === "production" ? Ye.exports = hn() : Ye.exports = mn()), Ye.exports;
}
var We = gn(), Y = function() {
  return Y = Object.assign || function(t) {
    for (var r, o = 1, a = arguments.length; o < a; o++) {
      r = arguments[o];
      for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, Y.apply(this, arguments);
};
function Re(e, t, r) {
  if (r || arguments.length === 2) for (var o = 0, a = t.length, i; o < a; o++)
    (i || !(o in t)) && (i || (i = Array.prototype.slice.call(t, 0, o)), i[o] = t[o]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function yn(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var vn = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, bn = /* @__PURE__ */ yn(
  function(e) {
    return vn.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), A = "-ms-", Fe = "-moz-", k = "-webkit-", mr = "comm", rt = "rule", Ct = "decl", wn = "@import", gr = "@keyframes", Sn = "@layer", yr = Math.abs, Pt = String.fromCharCode, bt = Object.assign;
function En(e, t) {
  return F(e, 0) ^ 45 ? (((t << 2 ^ F(e, 0)) << 2 ^ F(e, 1)) << 2 ^ F(e, 2)) << 2 ^ F(e, 3) : 0;
}
function vr(e) {
  return e.trim();
}
function re(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function g(e, t, r) {
  return e.replace(t, r);
}
function He(e, t, r) {
  return e.indexOf(t, r);
}
function F(e, t) {
  return e.charCodeAt(t) | 0;
}
function _e(e, t, r) {
  return e.slice(t, r);
}
function J(e) {
  return e.length;
}
function br(e) {
  return e.length;
}
function $e(e, t) {
  return t.push(e), e;
}
function Rn(e, t) {
  return e.map(t).join("");
}
function Xt(e, t) {
  return e.filter(function(r) {
    return !re(r, t);
  });
}
var nt = 1, ke = 1, wr = 0, U = 0, $ = 0, Oe = "";
function ot(e, t, r, o, a, i, c, f) {
  return { value: e, root: t, parent: r, type: o, props: a, children: i, line: nt, column: ke, length: c, return: "", siblings: f };
}
function se(e, t) {
  return bt(ot("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function Ee(e) {
  for (; e.root; )
    e = se(e.root, { children: [e] });
  $e(e, e.siblings);
}
function _n() {
  return $;
}
function kn() {
  return $ = U > 0 ? F(Oe, --U) : 0, ke--, $ === 10 && (ke = 1, nt--), $;
}
function X() {
  return $ = U < wr ? F(Oe, U++) : 0, ke++, $ === 10 && (ke = 1, nt++), $;
}
function pe() {
  return F(Oe, U);
}
function Ke() {
  return U;
}
function at(e, t) {
  return _e(Oe, e, t);
}
function wt(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function xn(e) {
  return nt = ke = 1, wr = J(Oe = e), U = 0, [];
}
function Cn(e) {
  return Oe = "", e;
}
function mt(e) {
  return vr(at(U - 1, St(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Pn(e) {
  for (; ($ = pe()) && $ < 33; )
    X();
  return wt(e) > 2 || wt($) > 3 ? "" : " ";
}
function On(e, t) {
  for (; --t && X() && !($ < 48 || $ > 102 || $ > 57 && $ < 65 || $ > 70 && $ < 97); )
    ;
  return at(e, Ke() + (t < 6 && pe() == 32 && X() == 32));
}
function St(e) {
  for (; X(); )
    switch ($) {
      // ] ) " '
      case e:
        return U;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && St($);
        break;
      // (
      case 40:
        e === 41 && St(e);
        break;
      // \
      case 92:
        X();
        break;
    }
  return U;
}
function Tn(e, t) {
  for (; X() && e + $ !== 57; )
    if (e + $ === 84 && pe() === 47)
      break;
  return "/*" + at(t, U - 1) + "*" + Pt(e === 47 ? e : X());
}
function An(e) {
  for (; !wt(pe()); )
    X();
  return at(e, U);
}
function In(e) {
  return Cn(Xe("", null, null, null, [""], e = xn(e), 0, [0], e));
}
function Xe(e, t, r, o, a, i, c, f, l) {
  for (var w = 0, d = 0, h = c, v = 0, S = 0, O = 0, N = 1, M = 1, x = 1, y = 0, C = "", T = a, I = i, E = o, m = C; M; )
    switch (O = y, y = X()) {
      // (
      case 40:
        if (O != 108 && F(m, h - 1) == 58) {
          He(m += g(mt(y), "&", "&\f"), "&\f", yr(w ? f[w - 1] : 0)) != -1 && (x = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        m += mt(y);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        m += Pn(O);
        break;
      // \
      case 92:
        m += On(Ke() - 1, 7);
        continue;
      // /
      case 47:
        switch (pe()) {
          case 42:
          case 47:
            $e(Nn(Tn(X(), Ke()), t, r, l), l);
            break;
          default:
            m += "/";
        }
        break;
      // {
      case 123 * N:
        f[w++] = J(m) * x;
      // } ; \0
      case 125 * N:
      case 59:
      case 0:
        switch (y) {
          // \0 }
          case 0:
          case 125:
            M = 0;
          // ;
          case 59 + d:
            x == -1 && (m = g(m, /\f/g, "")), S > 0 && J(m) - h && $e(S > 32 ? Zt(m + ";", o, r, h - 1, l) : Zt(g(m, " ", "") + ";", o, r, h - 2, l), l);
            break;
          // @ ;
          case 59:
            m += ";";
          // { rule/at-rule
          default:
            if ($e(E = Jt(m, t, r, w, d, a, f, C, T = [], I = [], h, i), i), y === 123)
              if (d === 0)
                Xe(m, t, E, E, T, i, h, f, I);
              else
                switch (v === 99 && F(m, 3) === 110 ? 100 : v) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Xe(e, E, E, o && $e(Jt(e, E, E, 0, 0, a, f, C, a, T = [], h, I), I), a, I, h, f, o ? T : I);
                    break;
                  default:
                    Xe(m, E, E, E, [""], I, 0, f, I);
                }
        }
        w = d = S = 0, N = x = 1, C = m = "", h = c;
        break;
      // :
      case 58:
        h = 1 + J(m), S = O;
      default:
        if (N < 1) {
          if (y == 123)
            --N;
          else if (y == 125 && N++ == 0 && kn() == 125)
            continue;
        }
        switch (m += Pt(y), y * N) {
          // &
          case 38:
            x = d > 0 ? 1 : (m += "\f", -1);
            break;
          // ,
          case 44:
            f[w++] = (J(m) - 1) * x, x = 1;
            break;
          // @
          case 64:
            pe() === 45 && (m += mt(X())), v = pe(), d = h = J(C = m += An(Ke())), y++;
            break;
          // -
          case 45:
            O === 45 && J(m) == 2 && (N = 0);
        }
    }
  return i;
}
function Jt(e, t, r, o, a, i, c, f, l, w, d, h) {
  for (var v = a - 1, S = a === 0 ? i : [""], O = br(S), N = 0, M = 0, x = 0; N < o; ++N)
    for (var y = 0, C = _e(e, v + 1, v = yr(M = c[N])), T = e; y < O; ++y)
      (T = vr(M > 0 ? S[y] + " " + C : g(C, /&\f/g, S[y]))) && (l[x++] = T);
  return ot(e, t, r, a === 0 ? rt : f, l, w, d, h);
}
function Nn(e, t, r, o) {
  return ot(e, t, r, mr, Pt(_n()), _e(e, 2, -2), 0, o);
}
function Zt(e, t, r, o, a) {
  return ot(e, t, r, Ct, _e(e, 0, o), _e(e, o + 1, -1), o, a);
}
function Sr(e, t, r) {
  switch (En(e, t)) {
    // color-adjust
    case 5103:
      return k + "print-" + e + e;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return k + e + e;
    // tab-size
    case 4789:
      return Fe + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return k + e + Fe + e + A + e + e;
    // writing-mode
    case 5936:
      switch (F(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return k + e + A + g(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return k + e + A + g(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return k + e + A + g(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return k + e + A + e + e;
    // order
    case 6165:
      return k + e + A + "flex-" + e + e;
    // align-items
    case 5187:
      return k + e + g(e, /(\w+).+(:[^]+)/, k + "box-$1$2" + A + "flex-$1$2") + e;
    // align-self
    case 5443:
      return k + e + A + "flex-item-" + g(e, /flex-|-self/g, "") + (re(e, /flex-|baseline/) ? "" : A + "grid-row-" + g(e, /flex-|-self/g, "")) + e;
    // align-content
    case 4675:
      return k + e + A + "flex-line-pack" + g(e, /align-content|flex-|-self/g, "") + e;
    // flex-shrink
    case 5548:
      return k + e + A + g(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return k + e + A + g(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return k + "box-" + g(e, "-grow", "") + k + e + A + g(e, "grow", "positive") + e;
    // transition
    case 4554:
      return k + g(e, /([^-])(transform)/g, "$1" + k + "$2") + e;
    // cursor
    case 6187:
      return g(g(g(e, /(zoom-|grab)/, k + "$1"), /(image-set)/, k + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return g(e, /(image-set\([^]*)/, k + "$1$`$1");
    // justify-content
    case 4968:
      return g(g(e, /(.+:)(flex-)?(.*)/, k + "box-pack:$3" + A + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + k + e + e;
    // justify-self
    case 4200:
      if (!re(e, /flex-|baseline/)) return A + "grid-column-align" + _e(e, t) + e;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return A + g(e, "template-", "") + e;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return r && r.some(function(o, a) {
        return t = a, re(o.props, /grid-\w+-end/);
      }) ? ~He(e + (r = r[t].value), "span", 0) ? e : A + g(e, "-start", "") + e + A + "grid-row-span:" + (~He(r, "span", 0) ? re(r, /\d+/) : +re(r, /\d+/) - +re(e, /\d+/)) + ";" : A + g(e, "-start", "") + e;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return r && r.some(function(o) {
        return re(o.props, /grid-\w+-start/);
      }) ? e : A + g(g(e, "-end", "-span"), "span ", "") + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return g(e, /(.+)-inline(.+)/, k + "$1$2") + e;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (J(e) - 1 - t > 6)
        switch (F(e, t + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (F(e, t + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return g(e, /(.+:)(.+)-([^]+)/, "$1" + k + "$2-$3$1" + Fe + (F(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          // (s)tretch
          case 115:
            return ~He(e, "stretch", 0) ? Sr(g(e, "stretch", "fill-available"), t, r) + e : e;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return g(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(o, a, i, c, f, l, w) {
        return A + a + ":" + i + w + (c ? A + a + "-span:" + (f ? l : +l - +i) + w : "") + e;
      });
    // position: sticky
    case 4949:
      if (F(e, t + 6) === 121)
        return g(e, ":", ":" + k) + e;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (F(e, F(e, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return g(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + k + (F(e, 14) === 45 ? "inline-" : "") + "box$3$1" + k + "$2$3$1" + A + "$2box$3") + e;
        // (inline-)?gri(d)
        case 100:
          return g(e, ":", ":" + A) + e;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return g(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function Qe(e, t) {
  for (var r = "", o = 0; o < e.length; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function jn(e, t, r, o) {
  switch (e.type) {
    case Sn:
      if (e.children.length) break;
    case wn:
    case Ct:
      return e.return = e.return || e.value;
    case mr:
      return "";
    case gr:
      return e.return = e.value + "{" + Qe(e.children, o) + "}";
    case rt:
      if (!J(e.value = e.props.join(","))) return "";
  }
  return J(r = Qe(e.children, o)) ? e.return = e.value + "{" + r + "}" : "";
}
function Dn(e) {
  var t = br(e);
  return function(r, o, a, i) {
    for (var c = "", f = 0; f < t; f++)
      c += e[f](r, o, a, i) || "";
    return c;
  };
}
function $n(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Fn(e, t, r, o) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Ct:
        e.return = Sr(e.value, e.length, r);
        return;
      case gr:
        return Qe([se(e, { value: g(e.value, "@", "@" + k) })], o);
      case rt:
        if (e.length)
          return Rn(r = e.props, function(a) {
            switch (re(a, o = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                Ee(se(e, { props: [g(a, /:(read-\w+)/, ":" + Fe + "$1")] })), Ee(se(e, { props: [a] })), bt(e, { props: Xt(r, o) });
                break;
              // :placeholder
              case "::placeholder":
                Ee(se(e, { props: [g(a, /:(plac\w+)/, ":" + k + "input-$1")] })), Ee(se(e, { props: [g(a, /:(plac\w+)/, ":" + Fe + "$1")] })), Ee(se(e, { props: [g(a, /:(plac\w+)/, A + "input-$1")] })), Ee(se(e, { props: [a] })), bt(e, { props: Xt(r, o) });
                break;
            }
            return "";
          });
    }
}
var Mn = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, me = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Er = "active", Rr = "data-styled-version", it = "6.1.13", Ot = `/*!sc*/
`, et = typeof window < "u" && "HTMLElement" in window, Ln = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Qt = /invalid hook call/i, Be = /* @__PURE__ */ new Set(), zn = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var r = t ? ' with the id of "'.concat(t, '"') : "", o = "The component ".concat(e).concat(r, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, a = console.error;
    try {
      var i = !0;
      console.error = function(c) {
        for (var f = [], l = 1; l < arguments.length; l++) f[l - 1] = arguments[l];
        Qt.test(c) ? (i = !1, Be.delete(o)) : a.apply(void 0, Re([c], f, !1));
      }, fn(), i && !Be.has(o) && (console.warn(o), Be.add(o));
    } catch (c) {
      Qt.test(c.message) && Be.delete(o);
    } finally {
      console.error = a;
    }
  }
}, st = Object.freeze([]), xe = Object.freeze({});
function Vn(e, t, r) {
  return r === void 0 && (r = xe), e.theme !== r.theme && e.theme || t || r.theme;
}
var Et = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Yn = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Wn = /(^-|-$)/g;
function er(e) {
  return e.replace(Yn, "-").replace(Wn, "");
}
var Bn = /(a)(d)/gi, Ue = 52, tr = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Rt(e) {
  var t, r = "";
  for (t = Math.abs(e); t > Ue; t = t / Ue | 0) r = tr(t % Ue) + r;
  return (tr(t % Ue) + r).replace(Bn, "$1-$2");
}
var gt, _r = 5381, le = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, kr = function(e) {
  return le(_r, e);
};
function Un(e) {
  return Rt(kr(e) >>> 0);
}
function xr(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function yt(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Cr = typeof Symbol == "function" && Symbol.for, Pr = Cr ? Symbol.for("react.memo") : 60115, Gn = Cr ? Symbol.for("react.forward_ref") : 60112, qn = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Hn = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Or = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Kn = ((gt = {})[Gn] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, gt[Pr] = Or, gt);
function rr(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Pr ? Or : "$$typeof" in e ? Kn[e.$$typeof] : qn;
  var t;
}
var Xn = Object.defineProperty, Jn = Object.getOwnPropertyNames, nr = Object.getOwnPropertySymbols, Zn = Object.getOwnPropertyDescriptor, Qn = Object.getPrototypeOf, or = Object.prototype;
function Tr(e, t, r) {
  if (typeof t != "string") {
    if (or) {
      var o = Qn(t);
      o && o !== or && Tr(e, o, r);
    }
    var a = Jn(t);
    nr && (a = a.concat(nr(t)));
    for (var i = rr(e), c = rr(t), f = 0; f < a.length; ++f) {
      var l = a[f];
      if (!(l in Hn || r && r[l] || c && l in c || i && l in i)) {
        var w = Zn(t, l);
        try {
          Xn(e, l, w);
        } catch {
        }
      }
    }
  }
  return e;
}
function Ce(e) {
  return typeof e == "function";
}
function Tt(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function fe(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function ar(e, t) {
  if (e.length === 0) return "";
  for (var r = e[0], o = 1; o < e.length; o++) r += e[o];
  return r;
}
function Pe(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function _t(e, t, r) {
  if (r === void 0 && (r = !1), !r && !Pe(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var o = 0; o < t.length; o++) e[o] = _t(e[o], t[o]);
  else if (Pe(t)) for (var o in t) e[o] = _t(e[o], t[o]);
  return e;
}
function At(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var eo = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function to() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var r = e[0], o = [], a = 1, i = e.length; a < i; a += 1) o.push(e[a]);
  return o.forEach(function(c) {
    r = r.replace(/%[a-z]/, c);
  }), r;
}
function Te(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(to.apply(void 0, Re([eo[e]], t, !1)).trim());
}
var ro = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var r = 0, o = 0; o < t; o++) r += this.groupSizes[o];
    return r;
  }, e.prototype.insertRules = function(t, r) {
    if (t >= this.groupSizes.length) {
      for (var o = this.groupSizes, a = o.length, i = a; t >= i; ) if ((i <<= 1) < 0) throw Te(16, "".concat(t));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(o), this.length = i;
      for (var c = a; c < i; c++) this.groupSizes[c] = 0;
    }
    for (var f = this.indexOfGroup(t + 1), l = (c = 0, r.length); c < l; c++) this.tag.insertRule(f, r[c]) && (this.groupSizes[t]++, f++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var r = this.groupSizes[t], o = this.indexOfGroup(t), a = o + r;
      this.groupSizes[t] = 0;
      for (var i = o; i < a; i++) this.tag.deleteRule(o);
    }
  }, e.prototype.getGroup = function(t) {
    var r = "";
    if (t >= this.length || this.groupSizes[t] === 0) return r;
    for (var o = this.groupSizes[t], a = this.indexOfGroup(t), i = a + o, c = a; c < i; c++) r += "".concat(this.tag.getRule(c)).concat(Ot);
    return r;
  }, e;
}(), no = 1 << 30, Je = /* @__PURE__ */ new Map(), tt = /* @__PURE__ */ new Map(), Ze = 1, Ge = function(e) {
  if (Je.has(e)) return Je.get(e);
  for (; tt.has(Ze); ) Ze++;
  var t = Ze++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > no)) throw Te(16, "".concat(t));
  return Je.set(e, t), tt.set(t, e), t;
}, oo = function(e, t) {
  Ze = t + 1, Je.set(e, t), tt.set(t, e);
}, ao = "style[".concat(me, "][").concat(Rr, '="').concat(it, '"]'), io = new RegExp("^".concat(me, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), so = function(e, t, r) {
  for (var o, a = r.split(","), i = 0, c = a.length; i < c; i++) (o = a[i]) && e.registerName(t, o);
}, co = function(e, t) {
  for (var r, o = ((r = t.textContent) !== null && r !== void 0 ? r : "").split(Ot), a = [], i = 0, c = o.length; i < c; i++) {
    var f = o[i].trim();
    if (f) {
      var l = f.match(io);
      if (l) {
        var w = 0 | parseInt(l[1], 10), d = l[2];
        w !== 0 && (oo(d, w), so(e, d, l[3]), e.getTag().insertRules(w, a)), a.length = 0;
      } else a.push(f);
    }
  }
}, ir = function(e) {
  for (var t = document.querySelectorAll(ao), r = 0, o = t.length; r < o; r++) {
    var a = t[r];
    a && a.getAttribute(me) !== Er && (co(e, a), a.parentNode && a.parentNode.removeChild(a));
  }
};
function uo() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Ar = function(e) {
  var t = document.head, r = e || t, o = document.createElement("style"), a = function(f) {
    var l = Array.from(f.querySelectorAll("style[".concat(me, "]")));
    return l[l.length - 1];
  }(r), i = a !== void 0 ? a.nextSibling : null;
  o.setAttribute(me, Er), o.setAttribute(Rr, it);
  var c = uo();
  return c && o.setAttribute("nonce", c), r.insertBefore(o, i), o;
}, lo = function() {
  function e(t) {
    this.element = Ar(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(r) {
      if (r.sheet) return r.sheet;
      for (var o = document.styleSheets, a = 0, i = o.length; a < i; a++) {
        var c = o[a];
        if (c.ownerNode === r) return c;
      }
      throw Te(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    try {
      return this.sheet.insertRule(r, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, e.prototype.getRule = function(t) {
    var r = this.sheet.cssRules[t];
    return r && r.cssText ? r.cssText : "";
  }, e;
}(), fo = function() {
  function e(t) {
    this.element = Ar(t), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    if (t <= this.length && t >= 0) {
      var o = document.createTextNode(r);
      return this.element.insertBefore(o, this.nodes[t] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), po = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    return t <= this.length && (this.rules.splice(t, 0, r), this.length++, !0);
  }, e.prototype.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), sr = et, ho = { isServer: !et, useCSSOMInjection: !Ln }, Ir = function() {
  function e(t, r, o) {
    t === void 0 && (t = xe), r === void 0 && (r = {});
    var a = this;
    this.options = Y(Y({}, ho), t), this.gs = r, this.names = new Map(o), this.server = !!t.isServer, !this.server && et && sr && (sr = !1, ir(this)), At(this, function() {
      return function(i) {
        for (var c = i.getTag(), f = c.length, l = "", w = function(h) {
          var v = function(x) {
            return tt.get(x);
          }(h);
          if (v === void 0) return "continue";
          var S = i.names.get(v), O = c.getGroup(h);
          if (S === void 0 || !S.size || O.length === 0) return "continue";
          var N = "".concat(me, ".g").concat(h, '[id="').concat(v, '"]'), M = "";
          S !== void 0 && S.forEach(function(x) {
            x.length > 0 && (M += "".concat(x, ","));
          }), l += "".concat(O).concat(N, '{content:"').concat(M, '"}').concat(Ot);
        }, d = 0; d < f; d++) w(d);
        return l;
      }(a);
    });
  }
  return e.registerId = function(t) {
    return Ge(t);
  }, e.prototype.rehydrate = function() {
    !this.server && et && ir(this);
  }, e.prototype.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e(Y(Y({}, this.options), t), this.gs, r && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(r) {
      var o = r.useCSSOMInjection, a = r.target;
      return r.isServer ? new po(a) : o ? new lo(a) : new fo(a);
    }(this.options), new ro(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, r) {
    return this.names.has(t) && this.names.get(t).has(r);
  }, e.prototype.registerName = function(t, r) {
    if (Ge(t), this.names.has(t)) this.names.get(t).add(r);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(r), this.names.set(t, o);
    }
  }, e.prototype.insertRules = function(t, r, o) {
    this.registerName(t, r), this.getTag().insertRules(Ge(t), o);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(Ge(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), mo = /&/g, go = /^\s*\/\/.*$/gm;
function Nr(e, t) {
  return e.map(function(r) {
    return r.type === "rule" && (r.value = "".concat(t, " ").concat(r.value), r.value = r.value.replaceAll(",", ",".concat(t, " ")), r.props = r.props.map(function(o) {
      return "".concat(t, " ").concat(o);
    })), Array.isArray(r.children) && r.type !== "@keyframes" && (r.children = Nr(r.children, t)), r;
  });
}
function yo(e) {
  var t, r, o, a = xe, i = a.options, c = i === void 0 ? xe : i, f = a.plugins, l = f === void 0 ? st : f, w = function(v, S, O) {
    return O.startsWith(r) && O.endsWith(r) && O.replaceAll(r, "").length > 0 ? ".".concat(t) : v;
  }, d = l.slice();
  d.push(function(v) {
    v.type === rt && v.value.includes("&") && (v.props[0] = v.props[0].replace(mo, r).replace(o, w));
  }), c.prefix && d.push(Fn), d.push(jn);
  var h = function(v, S, O, N) {
    S === void 0 && (S = ""), O === void 0 && (O = ""), N === void 0 && (N = "&"), t = N, r = S, o = new RegExp("\\".concat(r, "\\b"), "g");
    var M = v.replace(go, ""), x = In(O || S ? "".concat(O, " ").concat(S, " { ").concat(M, " }") : M);
    c.namespace && (x = Nr(x, c.namespace));
    var y = [];
    return Qe(x, Dn(d.concat($n(function(C) {
      return y.push(C);
    })))), y;
  };
  return h.hash = l.length ? l.reduce(function(v, S) {
    return S.name || Te(15), le(v, S.name);
  }, _r).toString() : "", h;
}
var vo = new Ir(), kt = yo(), jr = he.createContext({ shouldForwardProp: void 0, styleSheet: vo, stylis: kt });
jr.Consumer;
he.createContext(void 0);
function cr() {
  return dn(jr);
}
var ur = function() {
  function e(t, r) {
    var o = this;
    this.inject = function(a, i) {
      i === void 0 && (i = kt);
      var c = o.name + i.hash;
      a.hasNameForId(o.id, c) || a.insertRules(o.id, c, i(o.rules, c, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = r, At(this, function() {
      throw Te(12, String(o.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = kt), this.name + t.hash;
  }, e;
}(), bo = function(e) {
  return e >= "A" && e <= "Z";
};
function lr(e) {
  for (var t = "", r = 0; r < e.length; r++) {
    var o = e[r];
    if (r === 1 && o === "-" && e[0] === "-") return e;
    bo(o) ? t += "-" + o.toLowerCase() : t += o;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Dr = function(e) {
  return e == null || e === !1 || e === "";
}, $r = function(e) {
  var t, r, o = [];
  for (var a in e) {
    var i = e[a];
    e.hasOwnProperty(a) && !Dr(i) && (Array.isArray(i) && i.isCss || Ce(i) ? o.push("".concat(lr(a), ":"), i, ";") : Pe(i) ? o.push.apply(o, Re(Re(["".concat(a, " {")], $r(i), !1), ["}"], !1)) : o.push("".concat(lr(a), ": ").concat((t = a, (r = i) == null || typeof r == "boolean" || r === "" ? "" : typeof r != "number" || r === 0 || t in Mn || t.startsWith("--") ? String(r).trim() : "".concat(r, "px")), ";")));
  }
  return o;
};
function de(e, t, r, o) {
  if (Dr(e)) return [];
  if (Tt(e)) return [".".concat(e.styledComponentId)];
  if (Ce(e)) {
    if (!Ce(i = e) || i.prototype && i.prototype.isReactComponent || !t) return [e];
    var a = e(t);
    return process.env.NODE_ENV === "production" || typeof a != "object" || Array.isArray(a) || a instanceof ur || Pe(a) || a === null || console.error("".concat(xr(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), de(a, t, r, o);
  }
  var i;
  return e instanceof ur ? r ? (e.inject(r, o), [e.getName(o)]) : [e] : Pe(e) ? $r(e) : Array.isArray(e) ? Array.prototype.concat.apply(st, e.map(function(c) {
    return de(c, t, r, o);
  })) : [e.toString()];
}
function wo(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Ce(r) && !Tt(r)) return !1;
  }
  return !0;
}
var So = kr(it), Eo = function() {
  function e(t, r, o) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (o === void 0 || o.isStatic) && wo(t), this.componentId = r, this.baseHash = le(So, r), this.baseStyle = o, Ir.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, o) {
    var a = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, r, o) : "";
    if (this.isStatic && !o.hash) if (this.staticRulesId && r.hasNameForId(this.componentId, this.staticRulesId)) a = fe(a, this.staticRulesId);
    else {
      var i = ar(de(this.rules, t, r, o)), c = Rt(le(this.baseHash, i) >>> 0);
      if (!r.hasNameForId(this.componentId, c)) {
        var f = o(i, ".".concat(c), void 0, this.componentId);
        r.insertRules(this.componentId, c, f);
      }
      a = fe(a, c), this.staticRulesId = c;
    }
    else {
      for (var l = le(this.baseHash, o.hash), w = "", d = 0; d < this.rules.length; d++) {
        var h = this.rules[d];
        if (typeof h == "string") w += h, process.env.NODE_ENV !== "production" && (l = le(l, h));
        else if (h) {
          var v = ar(de(h, t, r, o));
          l = le(l, v + d), w += v;
        }
      }
      if (w) {
        var S = Rt(l >>> 0);
        r.hasNameForId(this.componentId, S) || r.insertRules(this.componentId, S, o(w, ".".concat(S), void 0, this.componentId)), a = fe(a, S);
      }
    }
    return a;
  }, e;
}(), Fr = he.createContext(void 0);
Fr.Consumer;
var vt = {}, fr = /* @__PURE__ */ new Set();
function Ro(e, t, r) {
  var o = Tt(e), a = e, i = !yt(e), c = t.attrs, f = c === void 0 ? st : c, l = t.componentId, w = l === void 0 ? function(T, I) {
    var E = typeof T != "string" ? "sc" : er(T);
    vt[E] = (vt[E] || 0) + 1;
    var m = "".concat(E, "-").concat(Un(it + E + vt[E]));
    return I ? "".concat(I, "-").concat(m) : m;
  }(t.displayName, t.parentComponentId) : l, d = t.displayName, h = d === void 0 ? function(T) {
    return yt(T) ? "styled.".concat(T) : "Styled(".concat(xr(T), ")");
  }(e) : d, v = t.displayName && t.componentId ? "".concat(er(t.displayName), "-").concat(t.componentId) : t.componentId || w, S = o && a.attrs ? a.attrs.concat(f).filter(Boolean) : f, O = t.shouldForwardProp;
  if (o && a.shouldForwardProp) {
    var N = a.shouldForwardProp;
    if (t.shouldForwardProp) {
      var M = t.shouldForwardProp;
      O = function(T, I) {
        return N(T, I) && M(T, I);
      };
    } else O = N;
  }
  var x = new Eo(r, v, o ? a.componentStyle : void 0);
  function y(T, I) {
    return function(E, m, Z) {
      var Q = E.attrs, ct = E.componentStyle, ut = E.defaultProps, Me = E.foldedComponentIds, G = E.styledComponentId, ee = E.target, ce = he.useContext(Fr), Le = cr(), ge = E.shouldForwardProp || Le.shouldForwardProp;
      process.env.NODE_ENV !== "production" && Gt(G);
      var Ae = Vn(m, ce, ut) || xe, W = function(ve, te, ae) {
        for (var q, H = Y(Y({}, te), { className: void 0, theme: ae }), ie = 0; ie < ve.length; ie += 1) {
          var be = Ce(q = ve[ie]) ? q(H) : q;
          for (var K in be) H[K] = K === "className" ? fe(H[K], be[K]) : K === "style" ? Y(Y({}, H[K]), be[K]) : be[K];
        }
        return te.className && (H.className = fe(H.className, te.className)), H;
      }(Q, m, Ae), ne = W.as || ee, oe = {};
      for (var L in W) W[L] === void 0 || L[0] === "$" || L === "as" || L === "theme" && W.theme === Ae || (L === "forwardedAs" ? oe.as = W.forwardedAs : ge && !ge(L, ne) || (oe[L] = W[L], ge || process.env.NODE_ENV !== "development" || bn(L) || fr.has(L) || !Et.has(ne) || (fr.add(L), console.warn('styled-components: it looks like an unknown prop "'.concat(L, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var ye = function(ve, te) {
        var ae = cr(), q = ve.generateAndInjectStyles(te, ae.styleSheet, ae.stylis);
        return process.env.NODE_ENV !== "production" && Gt(q), q;
      }(ct, W);
      process.env.NODE_ENV !== "production" && E.warnTooManyClasses && E.warnTooManyClasses(ye);
      var Ie = fe(Me, G);
      return ye && (Ie += " " + ye), W.className && (Ie += " " + W.className), oe[yt(ne) && !Et.has(ne) ? "class" : "className"] = Ie, oe.ref = Z, pn(ne, oe);
    }(C, T, I);
  }
  y.displayName = h;
  var C = he.forwardRef(y);
  return C.attrs = S, C.componentStyle = x, C.displayName = h, C.shouldForwardProp = O, C.foldedComponentIds = o ? fe(a.foldedComponentIds, a.styledComponentId) : "", C.styledComponentId = v, C.target = o ? a.target : e, Object.defineProperty(C, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(T) {
    this._foldedDefaultProps = o ? function(I) {
      for (var E = [], m = 1; m < arguments.length; m++) E[m - 1] = arguments[m];
      for (var Z = 0, Q = E; Z < Q.length; Z++) _t(I, Q[Z], !0);
      return I;
    }({}, a.defaultProps, T) : T;
  } }), process.env.NODE_ENV !== "production" && (zn(h, v), C.warnTooManyClasses = /* @__PURE__ */ function(T, I) {
    var E = {}, m = !1;
    return function(Z) {
      if (!m && (E[Z] = !0, Object.keys(E).length >= 200)) {
        var Q = I ? ' with the id of "'.concat(I, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(T).concat(Q, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), m = !0, E = {};
      }
    };
  }(h, v)), At(C, function() {
    return ".".concat(C.styledComponentId);
  }), i && Tr(C, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), C;
}
function pr(e, t) {
  for (var r = [e[0]], o = 0, a = t.length; o < a; o += 1) r.push(t[o], e[o + 1]);
  return r;
}
var dr = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function _o(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  if (Ce(e) || Pe(e)) return dr(de(pr(st, Re([e], t, !0))));
  var o = e;
  return t.length === 0 && o.length === 1 && typeof o[0] == "string" ? de(o) : dr(de(pr(o, t)));
}
function xt(e, t, r) {
  if (r === void 0 && (r = xe), !t) throw Te(1, t);
  var o = function(a) {
    for (var i = [], c = 1; c < arguments.length; c++) i[c - 1] = arguments[c];
    return e(t, r, _o.apply(void 0, Re([a], i, !1)));
  };
  return o.attrs = function(a) {
    return xt(e, t, Y(Y({}, r), { attrs: Array.prototype.concat(r.attrs, a).filter(Boolean) }));
  }, o.withConfig = function(a) {
    return xt(e, t, Y(Y({}, r), a));
  }, o;
}
var Mr = function(e) {
  return xt(Ro, e);
}, Lr = Mr;
Et.forEach(function(e) {
  Lr[e] = Mr(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var qe = "__sc-".concat(me, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[qe] || (window[qe] = 0), window[qe] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[qe] += 1);
const hr = Lr.button`
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 10px;
  display: inline-block;
  color: ${(e) => e.primary ? "#fff" : "#000"};
  background-color: ${(e) => e.primary ? "#FF5655" : "#f4c4c4"};
  padding: ${(e) => e.size === "small" ? "7px 25px 8px" : e.size === "medium" ? "9px 30px 11px" : "14px 30px 16px"};
`, xo = ({
  size: e,
  primary: t,
  disabled: r,
  text: o,
  onClick: a,
  ...i
}) => /* @__PURE__ */ We.jsxs(We.Fragment, { children: [
  /* @__PURE__ */ We.jsx(
    hr,
    {
      type: "button",
      onClick: a,
      disabled: r,
      size: e,
      ...i,
      children: o
    }
  ),
  /* @__PURE__ */ We.jsx(
    hr,
    {
      type: "button",
      onClick: a,
      disabled: r,
      size: e,
      ...i,
      children: o
    }
  )
] });
export {
  xo as Button
};
//# sourceMappingURL=index.es.js.map
