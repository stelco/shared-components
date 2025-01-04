import he, { useRef as un, useDebugValue as Ut, createElement as ln, useContext as fn } from "react";
var Ye = { exports: {} }, De = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gt;
function pn() {
  if (Gt) return De;
  Gt = 1;
  var e = he, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(f, l, w) {
    var d, h = {}, v = null, S = null;
    w !== void 0 && (v = "" + w), l.key !== void 0 && (v = "" + l.key), l.ref !== void 0 && (S = l.ref);
    for (d in l) o.call(l, d) && !s.hasOwnProperty(d) && (h[d] = l[d]);
    if (f && f.defaultProps) for (d in l = f.defaultProps, l) h[d] === void 0 && (h[d] = l[d]);
    return { $$typeof: t, type: f, key: v, ref: S, props: h, _owner: a.current };
  }
  return De.Fragment = r, De.jsx = c, De.jsxs = c, De;
}
var je = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qt;
function dn() {
  return qt || (qt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = he, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), f = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), O = Symbol.iterator, N = "@@iterator";
    function M(n) {
      if (n === null || typeof n != "object")
        return null;
      var i = O && n[O] || n[N];
      return typeof i == "function" ? i : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(n) {
      {
        for (var i = arguments.length, u = new Array(i > 1 ? i - 1 : 0), p = 1; p < i; p++)
          u[p - 1] = arguments[p];
        C("error", n, u);
      }
    }
    function C(n, i, u) {
      {
        var p = x.ReactDebugCurrentFrame, _ = p.getStackAddendum();
        _ !== "" && (i += "%s", u = u.concat([_]));
        var P = u.map(function(R) {
          return String(R);
        });
        P.unshift("Warning: " + i), Function.prototype.apply.call(console[n], console, P);
      }
    }
    var T = !1, I = !1, E = !1, m = !1, Z = !1, Q;
    Q = Symbol.for("react.module.reference");
    function st(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === o || n === s || Z || n === a || n === w || n === d || m || n === S || T || I || E || typeof n == "object" && n !== null && (n.$$typeof === v || n.$$typeof === h || n.$$typeof === c || n.$$typeof === f || n.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      n.$$typeof === Q || n.getModuleId !== void 0));
    }
    function ct(n, i, u) {
      var p = n.displayName;
      if (p)
        return p;
      var _ = i.displayName || i.name || "";
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
        case s:
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
            var i = n;
            return Me(i) + ".Consumer";
          case c:
            var u = n;
            return Me(u._context) + ".Provider";
          case l:
            return ct(n, n.render, "ForwardRef");
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
    function q(n, i, u) {
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
    function K(n, i) {
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
        if (i) {
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
`), D = b.length - 1, j = z.length - 1; D >= 1 && j >= 0 && b[D] !== z[j]; )
            j--;
          for (; D >= 1 && j >= 0; D--, j--)
            if (b[D] !== z[j]) {
              if (D !== 1 || j !== 1)
                do
                  if (D--, j--, j < 0 || b[D] !== z[j]) {
                    var B = `
` + b[D].replace(" at new ", " at ");
                    return n.displayName && B.includes("<anonymous>") && (B = B.replace("<anonymous>", n.displayName)), typeof n == "function" && ie.set(n, B), B;
                  }
                while (D >= 1 && j >= 0);
              break;
            }
        }
      } finally {
        H = !1, te.current = P, ve(), Error.prepareStackTrace = _;
      }
      var Se = n ? n.displayName || n.name : "", ue = Se ? q(Se) : "";
      return typeof n == "function" && ie.set(n, ue), ue;
    }
    function Mr(n, i, u) {
      return K(n, !1);
    }
    function Lr(n) {
      var i = n.prototype;
      return !!(i && i.isReactComponent);
    }
    function ze(n, i, u) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return K(n, Lr(n));
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
            return Mr(n.render);
          case h:
            return ze(n.type, i, u);
          case v: {
            var p = n, _ = p._payload, P = p._init;
            try {
              return ze(P(_), i, u);
            } catch {
            }
          }
        }
      return "";
    }
    var Ne = Object.prototype.hasOwnProperty, At = {}, It = x.ReactDebugCurrentFrame;
    function Ve(n) {
      if (n) {
        var i = n._owner, u = ze(n.type, n._source, i ? i.type : null);
        It.setExtraStackFrame(u);
      } else
        It.setExtraStackFrame(null);
    }
    function zr(n, i, u, p, _) {
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
              b = n[R](i, R, p, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (D) {
              b = D;
            }
            b && !(b instanceof Error) && (Ve(_), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", u, R, typeof b), Ve(null)), b instanceof Error && !(b.message in At) && (At[b.message] = !0, Ve(_), y("Failed %s type: %s", u, b.message), Ve(null));
          }
      }
    }
    var Vr = Array.isArray;
    function ut(n) {
      return Vr(n);
    }
    function Yr(n) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, u = i && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return u;
      }
    }
    function Wr(n) {
      try {
        return Nt(n), !1;
      } catch {
        return !0;
      }
    }
    function Nt(n) {
      return "" + n;
    }
    function Dt(n) {
      if (Wr(n))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Yr(n)), Nt(n);
    }
    var jt = x.ReactCurrentOwner, Br = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, $t, Ft;
    function Ur(n) {
      if (Ne.call(n, "ref")) {
        var i = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function Gr(n) {
      if (Ne.call(n, "key")) {
        var i = Object.getOwnPropertyDescriptor(n, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function qr(n, i) {
      typeof n.ref == "string" && jt.current;
    }
    function Hr(n, i) {
      {
        var u = function() {
          $t || ($t = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        u.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: u,
          configurable: !0
        });
      }
    }
    function Kr(n, i) {
      {
        var u = function() {
          Ft || (Ft = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        u.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: u,
          configurable: !0
        });
      }
    }
    var Xr = function(n, i, u, p, _, P, R) {
      var b = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: n,
        key: i,
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
    function Jr(n, i, u, p, _) {
      {
        var P, R = {}, b = null, z = null;
        u !== void 0 && (Dt(u), b = "" + u), Gr(i) && (Dt(i.key), b = "" + i.key), Ur(i) && (z = i.ref, qr(i, _));
        for (P in i)
          Ne.call(i, P) && !Br.hasOwnProperty(P) && (R[P] = i[P]);
        if (n && n.defaultProps) {
          var D = n.defaultProps;
          for (P in D)
            R[P] === void 0 && (R[P] = D[P]);
        }
        if (b || z) {
          var j = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          b && Hr(R, j), z && Kr(R, j);
        }
        return Xr(n, b, z, _, p, jt.current, R);
      }
    }
    var lt = x.ReactCurrentOwner, Mt = x.ReactDebugCurrentFrame;
    function we(n) {
      if (n) {
        var i = n._owner, u = ze(n.type, n._source, i ? i.type : null);
        Mt.setExtraStackFrame(u);
      } else
        Mt.setExtraStackFrame(null);
    }
    var ft;
    ft = !1;
    function pt(n) {
      return typeof n == "object" && n !== null && n.$$typeof === t;
    }
    function Lt() {
      {
        if (lt.current) {
          var n = G(lt.current.type);
          if (n)
            return `

Check the render method of \`` + n + "`.";
        }
        return "";
      }
    }
    function Zr(n) {
      return "";
    }
    var zt = {};
    function Qr(n) {
      {
        var i = Lt();
        if (!i) {
          var u = typeof n == "string" ? n : n.displayName || n.name;
          u && (i = `

Check the top-level render call using <` + u + ">.");
        }
        return i;
      }
    }
    function Vt(n, i) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var u = Qr(i);
        if (zt[u])
          return;
        zt[u] = !0;
        var p = "";
        n && n._owner && n._owner !== lt.current && (p = " It was passed a child from " + G(n._owner.type) + "."), we(n), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, p), we(null);
      }
    }
    function Yt(n, i) {
      {
        if (typeof n != "object")
          return;
        if (ut(n))
          for (var u = 0; u < n.length; u++) {
            var p = n[u];
            pt(p) && Vt(p, i);
          }
        else if (pt(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var _ = M(n);
          if (typeof _ == "function" && _ !== n.entries)
            for (var P = _.call(n), R; !(R = P.next()).done; )
              pt(R.value) && Vt(R.value, i);
        }
      }
    }
    function en(n) {
      {
        var i = n.type;
        if (i == null || typeof i == "string")
          return;
        var u;
        if (typeof i == "function")
          u = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === h))
          u = i.propTypes;
        else
          return;
        if (u) {
          var p = G(i);
          zr(u, n.props, "prop", p, n);
        } else if (i.PropTypes !== void 0 && !ft) {
          ft = !0;
          var _ = G(i);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _ || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function tn(n) {
      {
        for (var i = Object.keys(n.props), u = 0; u < i.length; u++) {
          var p = i[u];
          if (p !== "children" && p !== "key") {
            we(n), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), we(null);
            break;
          }
        }
        n.ref !== null && (we(n), y("Invalid attribute `ref` supplied to `React.Fragment`."), we(null));
      }
    }
    var Wt = {};
    function Bt(n, i, u, p, _, P) {
      {
        var R = st(n);
        if (!R) {
          var b = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var z = Zr();
          z ? b += z : b += Lt();
          var D;
          n === null ? D = "null" : ut(n) ? D = "array" : n !== void 0 && n.$$typeof === t ? (D = "<" + (G(n.type) || "Unknown") + " />", b = " Did you accidentally export a JSX literal instead of a component?") : D = typeof n, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", D, b);
        }
        var j = Jr(n, i, u, _, P);
        if (j == null)
          return j;
        if (R) {
          var B = i.children;
          if (B !== void 0)
            if (p)
              if (ut(B)) {
                for (var Se = 0; Se < B.length; Se++)
                  Yt(B[Se], n);
                Object.freeze && Object.freeze(B);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Yt(B, n);
        }
        if (Ne.call(i, "key")) {
          var ue = G(n), V = Object.keys(i).filter(function(cn) {
            return cn !== "key";
          }), dt = V.length > 0 ? "{key: someKey, " + V.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Wt[ue + dt]) {
            var sn = V.length > 0 ? "{" + V.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, dt, ue, sn, ue), Wt[ue + dt] = !0;
          }
        }
        return n === o ? tn(j) : en(j), j;
      }
    }
    function rn(n, i, u) {
      return Bt(n, i, u, !0);
    }
    function nn(n, i, u) {
      return Bt(n, i, u, !1);
    }
    var on = nn, an = rn;
    je.Fragment = o, je.jsx = on, je.jsxs = an;
  }()), je;
}
var Ht;
function hn() {
  return Ht || (Ht = 1, process.env.NODE_ENV === "production" ? Ye.exports = pn() : Ye.exports = dn()), Ye.exports;
}
var mn = hn(), Y = function() {
  return Y = Object.assign || function(t) {
    for (var r, o = 1, a = arguments.length; o < a; o++) {
      r = arguments[o];
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
    }
    return t;
  }, Y.apply(this, arguments);
};
function Re(e, t, r) {
  if (r || arguments.length === 2) for (var o = 0, a = t.length, s; o < a; o++)
    (s || !(o in t)) && (s || (s = Array.prototype.slice.call(t, 0, o)), s[o] = t[o]);
  return e.concat(s || Array.prototype.slice.call(t));
}
function gn(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var yn = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, vn = /* @__PURE__ */ gn(
  function(e) {
    return yn.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), A = "-ms-", Fe = "-moz-", k = "-webkit-", dr = "comm", tt = "rule", xt = "decl", bn = "@import", hr = "@keyframes", wn = "@layer", mr = Math.abs, Ct = String.fromCharCode, vt = Object.assign;
function Sn(e, t) {
  return F(e, 0) ^ 45 ? (((t << 2 ^ F(e, 0)) << 2 ^ F(e, 1)) << 2 ^ F(e, 2)) << 2 ^ F(e, 3) : 0;
}
function gr(e) {
  return e.trim();
}
function re(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function g(e, t, r) {
  return e.replace(t, r);
}
function qe(e, t, r) {
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
function yr(e) {
  return e.length;
}
function $e(e, t) {
  return t.push(e), e;
}
function En(e, t) {
  return e.map(t).join("");
}
function Kt(e, t) {
  return e.filter(function(r) {
    return !re(r, t);
  });
}
var rt = 1, ke = 1, vr = 0, U = 0, $ = 0, Oe = "";
function nt(e, t, r, o, a, s, c, f) {
  return { value: e, root: t, parent: r, type: o, props: a, children: s, line: rt, column: ke, length: c, return: "", siblings: f };
}
function se(e, t) {
  return vt(nt("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function Ee(e) {
  for (; e.root; )
    e = se(e.root, { children: [e] });
  $e(e, e.siblings);
}
function Rn() {
  return $;
}
function _n() {
  return $ = U > 0 ? F(Oe, --U) : 0, ke--, $ === 10 && (ke = 1, rt--), $;
}
function X() {
  return $ = U < vr ? F(Oe, U++) : 0, ke++, $ === 10 && (ke = 1, rt++), $;
}
function pe() {
  return F(Oe, U);
}
function He() {
  return U;
}
function ot(e, t) {
  return _e(Oe, e, t);
}
function bt(e) {
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
function kn(e) {
  return rt = ke = 1, vr = J(Oe = e), U = 0, [];
}
function xn(e) {
  return Oe = "", e;
}
function ht(e) {
  return gr(ot(U - 1, wt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Cn(e) {
  for (; ($ = pe()) && $ < 33; )
    X();
  return bt(e) > 2 || bt($) > 3 ? "" : " ";
}
function Pn(e, t) {
  for (; --t && X() && !($ < 48 || $ > 102 || $ > 57 && $ < 65 || $ > 70 && $ < 97); )
    ;
  return ot(e, He() + (t < 6 && pe() == 32 && X() == 32));
}
function wt(e) {
  for (; X(); )
    switch ($) {
      // ] ) " '
      case e:
        return U;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && wt($);
        break;
      // (
      case 40:
        e === 41 && wt(e);
        break;
      // \
      case 92:
        X();
        break;
    }
  return U;
}
function On(e, t) {
  for (; X() && e + $ !== 57; )
    if (e + $ === 84 && pe() === 47)
      break;
  return "/*" + ot(t, U - 1) + "*" + Ct(e === 47 ? e : X());
}
function Tn(e) {
  for (; !bt(pe()); )
    X();
  return ot(e, U);
}
function An(e) {
  return xn(Ke("", null, null, null, [""], e = kn(e), 0, [0], e));
}
function Ke(e, t, r, o, a, s, c, f, l) {
  for (var w = 0, d = 0, h = c, v = 0, S = 0, O = 0, N = 1, M = 1, x = 1, y = 0, C = "", T = a, I = s, E = o, m = C; M; )
    switch (O = y, y = X()) {
      // (
      case 40:
        if (O != 108 && F(m, h - 1) == 58) {
          qe(m += g(ht(y), "&", "&\f"), "&\f", mr(w ? f[w - 1] : 0)) != -1 && (x = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        m += ht(y);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        m += Cn(O);
        break;
      // \
      case 92:
        m += Pn(He() - 1, 7);
        continue;
      // /
      case 47:
        switch (pe()) {
          case 42:
          case 47:
            $e(In(On(X(), He()), t, r, l), l);
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
            x == -1 && (m = g(m, /\f/g, "")), S > 0 && J(m) - h && $e(S > 32 ? Jt(m + ";", o, r, h - 1, l) : Jt(g(m, " ", "") + ";", o, r, h - 2, l), l);
            break;
          // @ ;
          case 59:
            m += ";";
          // { rule/at-rule
          default:
            if ($e(E = Xt(m, t, r, w, d, a, f, C, T = [], I = [], h, s), s), y === 123)
              if (d === 0)
                Ke(m, t, E, E, T, s, h, f, I);
              else
                switch (v === 99 && F(m, 3) === 110 ? 100 : v) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ke(e, E, E, o && $e(Xt(e, E, E, 0, 0, a, f, C, a, T = [], h, I), I), a, I, h, f, o ? T : I);
                    break;
                  default:
                    Ke(m, E, E, E, [""], I, 0, f, I);
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
          else if (y == 125 && N++ == 0 && _n() == 125)
            continue;
        }
        switch (m += Ct(y), y * N) {
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
            pe() === 45 && (m += ht(X())), v = pe(), d = h = J(C = m += Tn(He())), y++;
            break;
          // -
          case 45:
            O === 45 && J(m) == 2 && (N = 0);
        }
    }
  return s;
}
function Xt(e, t, r, o, a, s, c, f, l, w, d, h) {
  for (var v = a - 1, S = a === 0 ? s : [""], O = yr(S), N = 0, M = 0, x = 0; N < o; ++N)
    for (var y = 0, C = _e(e, v + 1, v = mr(M = c[N])), T = e; y < O; ++y)
      (T = gr(M > 0 ? S[y] + " " + C : g(C, /&\f/g, S[y]))) && (l[x++] = T);
  return nt(e, t, r, a === 0 ? tt : f, l, w, d, h);
}
function In(e, t, r, o) {
  return nt(e, t, r, dr, Ct(Rn()), _e(e, 2, -2), 0, o);
}
function Jt(e, t, r, o, a) {
  return nt(e, t, r, xt, _e(e, 0, o), _e(e, o + 1, -1), o, a);
}
function br(e, t, r) {
  switch (Sn(e, t)) {
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
      }) ? ~qe(e + (r = r[t].value), "span", 0) ? e : A + g(e, "-start", "") + e + A + "grid-row-span:" + (~qe(r, "span", 0) ? re(r, /\d+/) : +re(r, /\d+/) - +re(e, /\d+/)) + ";" : A + g(e, "-start", "") + e;
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
            return ~qe(e, "stretch", 0) ? br(g(e, "stretch", "fill-available"), t, r) + e : e;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return g(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(o, a, s, c, f, l, w) {
        return A + a + ":" + s + w + (c ? A + a + "-span:" + (f ? l : +l - +s) + w : "") + e;
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
function Ze(e, t) {
  for (var r = "", o = 0; o < e.length; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function Nn(e, t, r, o) {
  switch (e.type) {
    case wn:
      if (e.children.length) break;
    case bn:
    case xt:
      return e.return = e.return || e.value;
    case dr:
      return "";
    case hr:
      return e.return = e.value + "{" + Ze(e.children, o) + "}";
    case tt:
      if (!J(e.value = e.props.join(","))) return "";
  }
  return J(r = Ze(e.children, o)) ? e.return = e.value + "{" + r + "}" : "";
}
function Dn(e) {
  var t = yr(e);
  return function(r, o, a, s) {
    for (var c = "", f = 0; f < t; f++)
      c += e[f](r, o, a, s) || "";
    return c;
  };
}
function jn(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function $n(e, t, r, o) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case xt:
        e.return = br(e.value, e.length, r);
        return;
      case hr:
        return Ze([se(e, { value: g(e.value, "@", "@" + k) })], o);
      case tt:
        if (e.length)
          return En(r = e.props, function(a) {
            switch (re(a, o = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                Ee(se(e, { props: [g(a, /:(read-\w+)/, ":" + Fe + "$1")] })), Ee(se(e, { props: [a] })), vt(e, { props: Kt(r, o) });
                break;
              // :placeholder
              case "::placeholder":
                Ee(se(e, { props: [g(a, /:(plac\w+)/, ":" + k + "input-$1")] })), Ee(se(e, { props: [g(a, /:(plac\w+)/, ":" + Fe + "$1")] })), Ee(se(e, { props: [g(a, /:(plac\w+)/, A + "input-$1")] })), Ee(se(e, { props: [a] })), vt(e, { props: Kt(r, o) });
                break;
            }
            return "";
          });
    }
}
var Fn = {
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
}, me = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", wr = "active", Sr = "data-styled-version", at = "6.1.13", Pt = `/*!sc*/
`, Qe = typeof window < "u" && "HTMLElement" in window, Mn = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Zt = /invalid hook call/i, We = /* @__PURE__ */ new Set(), Ln = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var r = t ? ' with the id of "'.concat(t, '"') : "", o = "The component ".concat(e).concat(r, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, a = console.error;
    try {
      var s = !0;
      console.error = function(c) {
        for (var f = [], l = 1; l < arguments.length; l++) f[l - 1] = arguments[l];
        Zt.test(c) ? (s = !1, We.delete(o)) : a.apply(void 0, Re([c], f, !1));
      }, un(), s && !We.has(o) && (console.warn(o), We.add(o));
    } catch (c) {
      Zt.test(c.message) && We.delete(o);
    } finally {
      console.error = a;
    }
  }
}, it = Object.freeze([]), xe = Object.freeze({});
function zn(e, t, r) {
  return r === void 0 && (r = xe), e.theme !== r.theme && e.theme || t || r.theme;
}
var St = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Vn = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Yn = /(^-|-$)/g;
function Qt(e) {
  return e.replace(Vn, "-").replace(Yn, "");
}
var Wn = /(a)(d)/gi, Be = 52, er = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Et(e) {
  var t, r = "";
  for (t = Math.abs(e); t > Be; t = t / Be | 0) r = er(t % Be) + r;
  return (er(t % Be) + r).replace(Wn, "$1-$2");
}
var mt, Er = 5381, le = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Rr = function(e) {
  return le(Er, e);
};
function Bn(e) {
  return Et(Rr(e) >>> 0);
}
function _r(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function gt(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var kr = typeof Symbol == "function" && Symbol.for, xr = kr ? Symbol.for("react.memo") : 60115, Un = kr ? Symbol.for("react.forward_ref") : 60112, Gn = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, qn = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Cr = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Hn = ((mt = {})[Un] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, mt[xr] = Cr, mt);
function tr(e) {
  return ("type" in (t = e) && t.type.$$typeof) === xr ? Cr : "$$typeof" in e ? Hn[e.$$typeof] : Gn;
  var t;
}
var Kn = Object.defineProperty, Xn = Object.getOwnPropertyNames, rr = Object.getOwnPropertySymbols, Jn = Object.getOwnPropertyDescriptor, Zn = Object.getPrototypeOf, nr = Object.prototype;
function Pr(e, t, r) {
  if (typeof t != "string") {
    if (nr) {
      var o = Zn(t);
      o && o !== nr && Pr(e, o, r);
    }
    var a = Xn(t);
    rr && (a = a.concat(rr(t)));
    for (var s = tr(e), c = tr(t), f = 0; f < a.length; ++f) {
      var l = a[f];
      if (!(l in qn || r && r[l] || c && l in c || s && l in s)) {
        var w = Jn(t, l);
        try {
          Kn(e, l, w);
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
function Ot(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function fe(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function or(e, t) {
  if (e.length === 0) return "";
  for (var r = e[0], o = 1; o < e.length; o++) r += e[o];
  return r;
}
function Pe(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Rt(e, t, r) {
  if (r === void 0 && (r = !1), !r && !Pe(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var o = 0; o < t.length; o++) e[o] = Rt(e[o], t[o]);
  else if (Pe(t)) for (var o in t) e[o] = Rt(e[o], t[o]);
  return e;
}
function Tt(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var Qn = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function eo() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var r = e[0], o = [], a = 1, s = e.length; a < s; a += 1) o.push(e[a]);
  return o.forEach(function(c) {
    r = r.replace(/%[a-z]/, c);
  }), r;
}
function Te(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(eo.apply(void 0, Re([Qn[e]], t, !1)).trim());
}
var to = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var r = 0, o = 0; o < t; o++) r += this.groupSizes[o];
    return r;
  }, e.prototype.insertRules = function(t, r) {
    if (t >= this.groupSizes.length) {
      for (var o = this.groupSizes, a = o.length, s = a; t >= s; ) if ((s <<= 1) < 0) throw Te(16, "".concat(t));
      this.groupSizes = new Uint32Array(s), this.groupSizes.set(o), this.length = s;
      for (var c = a; c < s; c++) this.groupSizes[c] = 0;
    }
    for (var f = this.indexOfGroup(t + 1), l = (c = 0, r.length); c < l; c++) this.tag.insertRule(f, r[c]) && (this.groupSizes[t]++, f++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var r = this.groupSizes[t], o = this.indexOfGroup(t), a = o + r;
      this.groupSizes[t] = 0;
      for (var s = o; s < a; s++) this.tag.deleteRule(o);
    }
  }, e.prototype.getGroup = function(t) {
    var r = "";
    if (t >= this.length || this.groupSizes[t] === 0) return r;
    for (var o = this.groupSizes[t], a = this.indexOfGroup(t), s = a + o, c = a; c < s; c++) r += "".concat(this.tag.getRule(c)).concat(Pt);
    return r;
  }, e;
}(), ro = 1 << 30, Xe = /* @__PURE__ */ new Map(), et = /* @__PURE__ */ new Map(), Je = 1, Ue = function(e) {
  if (Xe.has(e)) return Xe.get(e);
  for (; et.has(Je); ) Je++;
  var t = Je++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > ro)) throw Te(16, "".concat(t));
  return Xe.set(e, t), et.set(t, e), t;
}, no = function(e, t) {
  Je = t + 1, Xe.set(e, t), et.set(t, e);
}, oo = "style[".concat(me, "][").concat(Sr, '="').concat(at, '"]'), ao = new RegExp("^".concat(me, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), io = function(e, t, r) {
  for (var o, a = r.split(","), s = 0, c = a.length; s < c; s++) (o = a[s]) && e.registerName(t, o);
}, so = function(e, t) {
  for (var r, o = ((r = t.textContent) !== null && r !== void 0 ? r : "").split(Pt), a = [], s = 0, c = o.length; s < c; s++) {
    var f = o[s].trim();
    if (f) {
      var l = f.match(ao);
      if (l) {
        var w = 0 | parseInt(l[1], 10), d = l[2];
        w !== 0 && (no(d, w), io(e, d, l[3]), e.getTag().insertRules(w, a)), a.length = 0;
      } else a.push(f);
    }
  }
}, ar = function(e) {
  for (var t = document.querySelectorAll(oo), r = 0, o = t.length; r < o; r++) {
    var a = t[r];
    a && a.getAttribute(me) !== wr && (so(e, a), a.parentNode && a.parentNode.removeChild(a));
  }
};
function co() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Or = function(e) {
  var t = document.head, r = e || t, o = document.createElement("style"), a = function(f) {
    var l = Array.from(f.querySelectorAll("style[".concat(me, "]")));
    return l[l.length - 1];
  }(r), s = a !== void 0 ? a.nextSibling : null;
  o.setAttribute(me, wr), o.setAttribute(Sr, at);
  var c = co();
  return c && o.setAttribute("nonce", c), r.insertBefore(o, s), o;
}, uo = function() {
  function e(t) {
    this.element = Or(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(r) {
      if (r.sheet) return r.sheet;
      for (var o = document.styleSheets, a = 0, s = o.length; a < s; a++) {
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
}(), lo = function() {
  function e(t) {
    this.element = Or(t), this.nodes = this.element.childNodes, this.length = 0;
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
}(), fo = function() {
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
}(), ir = Qe, po = { isServer: !Qe, useCSSOMInjection: !Mn }, Tr = function() {
  function e(t, r, o) {
    t === void 0 && (t = xe), r === void 0 && (r = {});
    var a = this;
    this.options = Y(Y({}, po), t), this.gs = r, this.names = new Map(o), this.server = !!t.isServer, !this.server && Qe && ir && (ir = !1, ar(this)), Tt(this, function() {
      return function(s) {
        for (var c = s.getTag(), f = c.length, l = "", w = function(h) {
          var v = function(x) {
            return et.get(x);
          }(h);
          if (v === void 0) return "continue";
          var S = s.names.get(v), O = c.getGroup(h);
          if (S === void 0 || !S.size || O.length === 0) return "continue";
          var N = "".concat(me, ".g").concat(h, '[id="').concat(v, '"]'), M = "";
          S !== void 0 && S.forEach(function(x) {
            x.length > 0 && (M += "".concat(x, ","));
          }), l += "".concat(O).concat(N, '{content:"').concat(M, '"}').concat(Pt);
        }, d = 0; d < f; d++) w(d);
        return l;
      }(a);
    });
  }
  return e.registerId = function(t) {
    return Ue(t);
  }, e.prototype.rehydrate = function() {
    !this.server && Qe && ar(this);
  }, e.prototype.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e(Y(Y({}, this.options), t), this.gs, r && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(r) {
      var o = r.useCSSOMInjection, a = r.target;
      return r.isServer ? new fo(a) : o ? new uo(a) : new lo(a);
    }(this.options), new to(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, r) {
    return this.names.has(t) && this.names.get(t).has(r);
  }, e.prototype.registerName = function(t, r) {
    if (Ue(t), this.names.has(t)) this.names.get(t).add(r);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(r), this.names.set(t, o);
    }
  }, e.prototype.insertRules = function(t, r, o) {
    this.registerName(t, r), this.getTag().insertRules(Ue(t), o);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(Ue(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), ho = /&/g, mo = /^\s*\/\/.*$/gm;
function Ar(e, t) {
  return e.map(function(r) {
    return r.type === "rule" && (r.value = "".concat(t, " ").concat(r.value), r.value = r.value.replaceAll(",", ",".concat(t, " ")), r.props = r.props.map(function(o) {
      return "".concat(t, " ").concat(o);
    })), Array.isArray(r.children) && r.type !== "@keyframes" && (r.children = Ar(r.children, t)), r;
  });
}
function go(e) {
  var t, r, o, a = xe, s = a.options, c = s === void 0 ? xe : s, f = a.plugins, l = f === void 0 ? it : f, w = function(v, S, O) {
    return O.startsWith(r) && O.endsWith(r) && O.replaceAll(r, "").length > 0 ? ".".concat(t) : v;
  }, d = l.slice();
  d.push(function(v) {
    v.type === tt && v.value.includes("&") && (v.props[0] = v.props[0].replace(ho, r).replace(o, w));
  }), c.prefix && d.push($n), d.push(Nn);
  var h = function(v, S, O, N) {
    S === void 0 && (S = ""), O === void 0 && (O = ""), N === void 0 && (N = "&"), t = N, r = S, o = new RegExp("\\".concat(r, "\\b"), "g");
    var M = v.replace(mo, ""), x = An(O || S ? "".concat(O, " ").concat(S, " { ").concat(M, " }") : M);
    c.namespace && (x = Ar(x, c.namespace));
    var y = [];
    return Ze(x, Dn(d.concat(jn(function(C) {
      return y.push(C);
    })))), y;
  };
  return h.hash = l.length ? l.reduce(function(v, S) {
    return S.name || Te(15), le(v, S.name);
  }, Er).toString() : "", h;
}
var yo = new Tr(), _t = go(), Ir = he.createContext({ shouldForwardProp: void 0, styleSheet: yo, stylis: _t });
Ir.Consumer;
he.createContext(void 0);
function sr() {
  return fn(Ir);
}
var cr = function() {
  function e(t, r) {
    var o = this;
    this.inject = function(a, s) {
      s === void 0 && (s = _t);
      var c = o.name + s.hash;
      a.hasNameForId(o.id, c) || a.insertRules(o.id, c, s(o.rules, c, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = r, Tt(this, function() {
      throw Te(12, String(o.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = _t), this.name + t.hash;
  }, e;
}(), vo = function(e) {
  return e >= "A" && e <= "Z";
};
function ur(e) {
  for (var t = "", r = 0; r < e.length; r++) {
    var o = e[r];
    if (r === 1 && o === "-" && e[0] === "-") return e;
    vo(o) ? t += "-" + o.toLowerCase() : t += o;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Nr = function(e) {
  return e == null || e === !1 || e === "";
}, Dr = function(e) {
  var t, r, o = [];
  for (var a in e) {
    var s = e[a];
    e.hasOwnProperty(a) && !Nr(s) && (Array.isArray(s) && s.isCss || Ce(s) ? o.push("".concat(ur(a), ":"), s, ";") : Pe(s) ? o.push.apply(o, Re(Re(["".concat(a, " {")], Dr(s), !1), ["}"], !1)) : o.push("".concat(ur(a), ": ").concat((t = a, (r = s) == null || typeof r == "boolean" || r === "" ? "" : typeof r != "number" || r === 0 || t in Fn || t.startsWith("--") ? String(r).trim() : "".concat(r, "px")), ";")));
  }
  return o;
};
function de(e, t, r, o) {
  if (Nr(e)) return [];
  if (Ot(e)) return [".".concat(e.styledComponentId)];
  if (Ce(e)) {
    if (!Ce(s = e) || s.prototype && s.prototype.isReactComponent || !t) return [e];
    var a = e(t);
    return process.env.NODE_ENV === "production" || typeof a != "object" || Array.isArray(a) || a instanceof cr || Pe(a) || a === null || console.error("".concat(_r(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), de(a, t, r, o);
  }
  var s;
  return e instanceof cr ? r ? (e.inject(r, o), [e.getName(o)]) : [e] : Pe(e) ? Dr(e) : Array.isArray(e) ? Array.prototype.concat.apply(it, e.map(function(c) {
    return de(c, t, r, o);
  })) : [e.toString()];
}
function bo(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Ce(r) && !Ot(r)) return !1;
  }
  return !0;
}
var wo = Rr(at), So = function() {
  function e(t, r, o) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (o === void 0 || o.isStatic) && bo(t), this.componentId = r, this.baseHash = le(wo, r), this.baseStyle = o, Tr.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, o) {
    var a = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, r, o) : "";
    if (this.isStatic && !o.hash) if (this.staticRulesId && r.hasNameForId(this.componentId, this.staticRulesId)) a = fe(a, this.staticRulesId);
    else {
      var s = or(de(this.rules, t, r, o)), c = Et(le(this.baseHash, s) >>> 0);
      if (!r.hasNameForId(this.componentId, c)) {
        var f = o(s, ".".concat(c), void 0, this.componentId);
        r.insertRules(this.componentId, c, f);
      }
      a = fe(a, c), this.staticRulesId = c;
    }
    else {
      for (var l = le(this.baseHash, o.hash), w = "", d = 0; d < this.rules.length; d++) {
        var h = this.rules[d];
        if (typeof h == "string") w += h, process.env.NODE_ENV !== "production" && (l = le(l, h));
        else if (h) {
          var v = or(de(h, t, r, o));
          l = le(l, v + d), w += v;
        }
      }
      if (w) {
        var S = Et(l >>> 0);
        r.hasNameForId(this.componentId, S) || r.insertRules(this.componentId, S, o(w, ".".concat(S), void 0, this.componentId)), a = fe(a, S);
      }
    }
    return a;
  }, e;
}(), jr = he.createContext(void 0);
jr.Consumer;
var yt = {}, lr = /* @__PURE__ */ new Set();
function Eo(e, t, r) {
  var o = Ot(e), a = e, s = !gt(e), c = t.attrs, f = c === void 0 ? it : c, l = t.componentId, w = l === void 0 ? function(T, I) {
    var E = typeof T != "string" ? "sc" : Qt(T);
    yt[E] = (yt[E] || 0) + 1;
    var m = "".concat(E, "-").concat(Bn(at + E + yt[E]));
    return I ? "".concat(I, "-").concat(m) : m;
  }(t.displayName, t.parentComponentId) : l, d = t.displayName, h = d === void 0 ? function(T) {
    return gt(T) ? "styled.".concat(T) : "Styled(".concat(_r(T), ")");
  }(e) : d, v = t.displayName && t.componentId ? "".concat(Qt(t.displayName), "-").concat(t.componentId) : t.componentId || w, S = o && a.attrs ? a.attrs.concat(f).filter(Boolean) : f, O = t.shouldForwardProp;
  if (o && a.shouldForwardProp) {
    var N = a.shouldForwardProp;
    if (t.shouldForwardProp) {
      var M = t.shouldForwardProp;
      O = function(T, I) {
        return N(T, I) && M(T, I);
      };
    } else O = N;
  }
  var x = new So(r, v, o ? a.componentStyle : void 0);
  function y(T, I) {
    return function(E, m, Z) {
      var Q = E.attrs, st = E.componentStyle, ct = E.defaultProps, Me = E.foldedComponentIds, G = E.styledComponentId, ee = E.target, ce = he.useContext(jr), Le = sr(), ge = E.shouldForwardProp || Le.shouldForwardProp;
      process.env.NODE_ENV !== "production" && Ut(G);
      var Ae = zn(m, ce, ct) || xe, W = function(ve, te, ae) {
        for (var q, H = Y(Y({}, te), { className: void 0, theme: ae }), ie = 0; ie < ve.length; ie += 1) {
          var be = Ce(q = ve[ie]) ? q(H) : q;
          for (var K in be) H[K] = K === "className" ? fe(H[K], be[K]) : K === "style" ? Y(Y({}, H[K]), be[K]) : be[K];
        }
        return te.className && (H.className = fe(H.className, te.className)), H;
      }(Q, m, Ae), ne = W.as || ee, oe = {};
      for (var L in W) W[L] === void 0 || L[0] === "$" || L === "as" || L === "theme" && W.theme === Ae || (L === "forwardedAs" ? oe.as = W.forwardedAs : ge && !ge(L, ne) || (oe[L] = W[L], ge || process.env.NODE_ENV !== "development" || vn(L) || lr.has(L) || !St.has(ne) || (lr.add(L), console.warn('styled-components: it looks like an unknown prop "'.concat(L, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var ye = function(ve, te) {
        var ae = sr(), q = ve.generateAndInjectStyles(te, ae.styleSheet, ae.stylis);
        return process.env.NODE_ENV !== "production" && Ut(q), q;
      }(st, W);
      process.env.NODE_ENV !== "production" && E.warnTooManyClasses && E.warnTooManyClasses(ye);
      var Ie = fe(Me, G);
      return ye && (Ie += " " + ye), W.className && (Ie += " " + W.className), oe[gt(ne) && !St.has(ne) ? "class" : "className"] = Ie, oe.ref = Z, ln(ne, oe);
    }(C, T, I);
  }
  y.displayName = h;
  var C = he.forwardRef(y);
  return C.attrs = S, C.componentStyle = x, C.displayName = h, C.shouldForwardProp = O, C.foldedComponentIds = o ? fe(a.foldedComponentIds, a.styledComponentId) : "", C.styledComponentId = v, C.target = o ? a.target : e, Object.defineProperty(C, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(T) {
    this._foldedDefaultProps = o ? function(I) {
      for (var E = [], m = 1; m < arguments.length; m++) E[m - 1] = arguments[m];
      for (var Z = 0, Q = E; Z < Q.length; Z++) Rt(I, Q[Z], !0);
      return I;
    }({}, a.defaultProps, T) : T;
  } }), process.env.NODE_ENV !== "production" && (Ln(h, v), C.warnTooManyClasses = /* @__PURE__ */ function(T, I) {
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
  }(h, v)), Tt(C, function() {
    return ".".concat(C.styledComponentId);
  }), s && Pr(C, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), C;
}
function fr(e, t) {
  for (var r = [e[0]], o = 0, a = t.length; o < a; o += 1) r.push(t[o], e[o + 1]);
  return r;
}
var pr = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function Ro(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  if (Ce(e) || Pe(e)) return pr(de(fr(it, Re([e], t, !0))));
  var o = e;
  return t.length === 0 && o.length === 1 && typeof o[0] == "string" ? de(o) : pr(de(fr(o, t)));
}
function kt(e, t, r) {
  if (r === void 0 && (r = xe), !t) throw Te(1, t);
  var o = function(a) {
    for (var s = [], c = 1; c < arguments.length; c++) s[c - 1] = arguments[c];
    return e(t, r, Ro.apply(void 0, Re([a], s, !1)));
  };
  return o.attrs = function(a) {
    return kt(e, t, Y(Y({}, r), { attrs: Array.prototype.concat(r.attrs, a).filter(Boolean) }));
  }, o.withConfig = function(a) {
    return kt(e, t, Y(Y({}, r), a));
  }, o;
}
var $r = function(e) {
  return kt(Eo, e);
}, Fr = $r;
St.forEach(function(e) {
  Fr[e] = $r(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Ge = "__sc-".concat(me, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[Ge] || (window[Ge] = 0), window[Ge] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Ge] += 1);
const _o = Fr.button`
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
  ...s
}) => /* @__PURE__ */ mn.jsx(
  _o,
  {
    type: "button",
    onClick: a,
    disabled: r,
    size: e,
    ...s,
    children: o
  }
);
export {
  xo as Button
};
//# sourceMappingURL=index.es.js.map
