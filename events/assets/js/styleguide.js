! function o(a, s, u) {
    function l(t, e) {
        if (!s[t]) {
            if (!a[t]) {
                var n = "function" == typeof require && require;
                if (!e && n) return n(t, !0);
                if (c) return c(t, !0);
                var r = new Error("Cannot find module '" + t + "'");
                throw r.code = "MODULE_NOT_FOUND", r
            }
            var i = s[t] = {
                exports: {}
            };
            a[t][0].call(i.exports, function (e) {
                return l(a[t][1][e] || e)
            }, i, i.exports, o, a, s, u)
        }
        return s[t].exports
    }
    for (var c = "function" == typeof require && require, e = 0; e < u.length; e++) l(u[e]);
    return l
}({
    1: [function (e, t, n) {
        var o = e("jquery");
        t.exports = function (e) {
            var t = o("#" + e),
                n = 0;
            if (0 === t.length) return n;
            var r = parseInt(o(".sidenav").css("padding-top"), 10),
                i = parseInt(t.css("padding-top"), 10);
            return n = o(".site-nav-secondary").first().outerHeight(), n -= i - r, t.offset().top - n
        }
    }, {
        jquery: 7
    }],
    2: [function (e, t, n) {
        e("jquery")(".preview form").submit(function (e) {
            e.preventDefault()
        })
    }, {
        jquery: 7
    }],
    3: [function (e, t, n) {
        "use strict";
        var r, i = e("jquery"),
            o = e("./calculate-anchor-position");

        function a() {
            var e = window.location.hash.substr(1),
                t = e ? o(e) : 0;
            0 < t && (clearTimeout(r), r = setTimeout(function () {
                i(window).scrollTop(t)
            }, 1))
        }
        i(function () {
            setTimeout(a, 150)
        })
    }, {
        "./calculate-anchor-position": 1,
        jquery: 7
    }],
    4: [function (e, t, n) {
        "use strict";
        var i = e("jquery"),
            o = e("./calculate-anchor-position"),
            a = i("body, html");
        i(".sidenav").on("keydown", "a", function (e) {
            13 === e.which && i(this).data("keypress", !0)
        }), i(".sidenav").on("click", "a", function (n) {
            var r = i(this).attr("href").split("#")[1],
                e = o(r);
            if (0 === e) return !0;
            n.preventDefault(), a.animate({
                scrollTop: e
            }, {
                duration: 200,
                start: function () {
                    var e = "#" + r;
                    history && history.pushState && window.location.hash !== e ? history.pushState(null, null, e) : window.location.hash !== e && (window.location.hash = e)
                },
                done: function () {
                    var e = i(n.target),
                        t = i("#" + r);
                    !0 === e.data("keypress") && (e.removeData("keypress"), t.attr("tabindex", "-1"), t.focus())
                }
            })
        });
        var r = function () {
            i(".sidenav").css("height", window.innerHeight - 50)
        };
        r(), i(window).resize(function () {
            r()
        })
    }, {
        "./calculate-anchor-position": 1,
        jquery: 7
    }],
    5: [function (e, t, n) {
        "use strict";
        e("./form-disable"), e("./scroll-to-top-for-hash"), e("./sidenav"), e("./vendor/stickyfill.min.js");
        for (var r = document.getElementsByClassName("sticky"), i = r.length - 1; 0 <= i; i--) Stickyfill.add(r[i])
    }, {
        "./form-disable": 2,
        "./scroll-to-top-for-hash": 3,
        "./sidenav": 4,
        "./vendor/stickyfill.min.js": 6
    }],
    6: [function (e, t, n) {
        ! function (e, n) {
            function t() {
                x = E = b = w = T = C = A
            }

            function f(e) {
                return parseFloat(e) || 0
            }

            function r() {
                k = {
                    top: n.pageYOffset,
                    left: n.pageXOffset
                }
            }

            function i() {
                return n.pageXOffset != k.left ? (r(), void b()) : void(n.pageYOffset != k.top && (r(), a()))
            }

            function o(e) {
                setTimeout(function () {
                    n.pageYOffset != k.top && (k.top = n.pageYOffset, a())
                }, 0)
            }

            function a() {
                for (var e = N.length - 1; 0 <= e; e--) s(N[e])
            }

            function s(e) {
                if (e.inited) {
                    var t = k.top <= e.limit.start ? 0 : k.top >= e.limit.end ? 2 : 1;
                    e.mode != t && function (e, t) {
                        var n = e.node.style;
                        switch (t) {
                            case 0:
                                n.position = "absolute", n.left = e.offset.left + "px", n.right = e.offset.right + "px", n.top = e.offset.top + "px", n.bottom = "auto", n.width = "auto", n.marginLeft = 0, n.marginRight = 0, n.marginTop = 0;
                                break;
                            case 1:
                                n.position = "fixed", n.left = e.box.left + "px", n.right = e.box.right + "px", n.top = e.css.top, n.bottom = "auto", n.width = "auto", n.marginLeft = 0, n.marginRight = 0, n.marginTop = 0;
                                break;
                            case 2:
                                n.position = "absolute", n.left = e.offset.left + "px", n.right = e.offset.right + "px", n.top = "auto", n.bottom = 0, n.width = "auto", n.marginLeft = 0, n.marginRight = 0
                        }
                        e.mode = t
                    }(e, t)
                }
            }

            function u(e) {
                isNaN(parseFloat(e.computed.top)) || e.isCell || "none" == e.computed.display || (e.inited = !0, e.clone || function (e) {
                    e.clone = document.createElement("div");
                    var t = e.node.nextSibling || e.node,
                        n = e.clone.style;
                    n.height = e.height + "px", n.width = e.width + "px", n.marginTop = e.computed.marginTop, n.marginBottom = e.computed.marginBottom, n.marginLeft = e.computed.marginLeft, n.marginRight = e.computed.marginRight, n.padding = n.border = n.borderSpacing = 0, n.fontSize = "1em", n.position = "static", n.cssFloat = e.computed.cssFloat, e.node.parentNode.insertBefore(e.clone, t)
                }(e), "absolute" != e.parent.computed.position && "relative" != e.parent.computed.position && (e.parent.node.style.position = "relative"), s(e), e.parent.height = e.parent.node.offsetHeight, e.docOffsetTop = h(e.clone))
            }

            function l(e) {
                var t, n = !0;
                e.clone && ((t = e).clone.parentNode.removeChild(t.clone), t.clone = void 0),
                    function (e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    }(e.node.style, e.css);
                for (var r = N.length - 1; 0 <= r; r--)
                    if (N[r].node !== e.node && N[r].parent.node === e.parent.node) {
                        n = !1;
                        break
                    }
                n && (e.parent.node.style.position = e.parent.css.position), e.mode = -1
            }

            function c() {
                for (var e = N.length - 1; 0 <= e; e--) u(N[e])
            }

            function p() {
                for (var e = N.length - 1; 0 <= e; e--) l(N[e])
            }

            function d(e) {
                var t = getComputedStyle(e),
                    n = e.parentNode,
                    r = getComputedStyle(n),
                    i = e.style.position;
                e.style.position = "relative";
                var o = {
                        top: t.top,
                        marginTop: t.marginTop,
                        marginBottom: t.marginBottom,
                        marginLeft: t.marginLeft,
                        marginRight: t.marginRight,
                        cssFloat: t.cssFloat,
                        display: t.display
                    },
                    a = {
                        top: f(t.top),
                        marginBottom: f(t.marginBottom),
                        paddingLeft: f(t.paddingLeft),
                        paddingRight: f(t.paddingRight),
                        borderLeftWidth: f(t.borderLeftWidth),
                        borderRightWidth: f(t.borderRightWidth)
                    };
                e.style.position = i;
                var s = {
                        position: e.style.position,
                        top: e.style.top,
                        bottom: e.style.bottom,
                        left: e.style.left,
                        right: e.style.right,
                        width: e.style.width,
                        marginTop: e.style.marginTop,
                        marginLeft: e.style.marginLeft,
                        marginRight: e.style.marginRight
                    },
                    u = g(e),
                    l = g(n),
                    c = {
                        node: n,
                        css: {
                            position: n.style.position
                        },
                        computed: {
                            position: r.position
                        },
                        numeric: {
                            borderLeftWidth: f(r.borderLeftWidth),
                            borderRightWidth: f(r.borderRightWidth),
                            borderTopWidth: f(r.borderTopWidth),
                            borderBottomWidth: f(r.borderBottomWidth)
                        }
                    };
                return {
                    node: e,
                    box: {
                        left: u.win.left,
                        right: D.clientWidth - u.win.right
                    },
                    offset: {
                        top: u.win.top - l.win.top - c.numeric.borderTopWidth,
                        left: u.win.left - l.win.left - c.numeric.borderLeftWidth,
                        right: -u.win.right + l.win.right - c.numeric.borderRightWidth
                    },
                    css: s,
                    isCell: "table-cell" == t.display,
                    computed: o,
                    numeric: a,
                    width: u.win.right - u.win.left,
                    height: u.win.bottom - u.win.top,
                    mode: -1,
                    inited: !1,
                    parent: c,
                    limit: {
                        start: u.doc.top - a.top,
                        end: l.doc.top + n.offsetHeight - c.numeric.borderBottomWidth - e.offsetHeight - a.top - a.marginBottom
                    }
                }
            }

            function h(e) {
                for (var t = 0; e;) t += e.offsetTop, e = e.offsetParent;
                return t
            }

            function g(e) {
                var t = e.getBoundingClientRect();
                return {
                    doc: {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset
                    },
                    win: t
                }
            }

            function m() {
                S = setInterval(function () {
                    ! function () {
                        for (var e = N.length - 1; 0 <= e; e--)
                            if (N[e].inited) {
                                var t = Math.abs(h(N[e].clone) - N[e].docOffsetTop),
                                    n = Math.abs(N[e].parent.node.offsetHeight - N[e].parent.height);
                                if (2 <= t || 2 <= n) return !1
                            }
                        return !0
                    }() && b()
                }, 500)
            }

            function v() {
                clearInterval(S)
            }

            function y() {
                j && (document[L] ? v() : m())
            }

            function x() {
                j || (r(), c(), n.addEventListener("scroll", i), n.addEventListener("wheel", o), n.addEventListener("resize", b), n.addEventListener("orientationchange", b), e.addEventListener(q, y), m(), j = !0)
            }

            function b() {
                if (j) {
                    p();
                    for (var e = N.length - 1; 0 <= e; e--) N[e] = d(N[e].node);
                    c()
                }
            }

            function w() {
                n.removeEventListener("scroll", i), n.removeEventListener("wheel", o), n.removeEventListener("resize", b), n.removeEventListener("orientationchange", b), e.removeEventListener(q, y), v(), j = !1
            }

            function T() {
                w(), p()
            }

            function C() {
                for (T(); N.length;) N.pop()
            }

            function E(e) {
                for (var t = N.length - 1; 0 <= t; t--)
                    if (N[t].node === e) return;
                var n = d(e);
                N.push(n), j ? u(n) : x()
            }
            var k, S, N = [],
                j = !1,
                D = e.documentElement,
                A = function () {},
                L = "hidden",
                q = "visibilitychange";
            void 0 !== e.webkitHidden && (L = "webkitHidden", q = "webkitvisibilitychange"), n.getComputedStyle || t();
            for (var H = ["", "-webkit-", "-moz-", "-ms-"], O = document.createElement("div"), R = H.length - 1; 0 <= R; R--) {
                try {
                    O.style.position = H[R] + "sticky"
                } catch (e) {}
                "" != O.style.position && t()
            }
            r(), n.Stickyfill = {
                stickies: N,
                add: E,
                remove: function (e) {
                    for (var t = N.length - 1; 0 <= t; t--) N[t].node === e && (l(N[t]), N.splice(t, 1))
                },
                init: x,
                rebuild: b,
                pause: w,
                stop: T,
                kill: C
            }
        }(document, window), window.jQuery && (window.jQuery.fn.Stickyfill = function (e) {
            return this.each(function () {
                Stickyfill.add(this)
            }), this
        })
    }, {}],
    7: [function (e, n, t) {
        ! function (e, t) {
            "use strict";
            "object" == typeof n && "object" == typeof n.exports ? n.exports = e.document ? t(e, !0) : function (e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return t(e)
            } : t(e)
        }("undefined" != typeof window ? window : this, function (C, e) {
            "use strict";
            var t = [],
                E = C.document,
                r = Object.getPrototypeOf,
                s = t.slice,
                g = t.concat,
                u = t.push,
                i = t.indexOf,
                n = {},
                o = n.toString,
                m = n.hasOwnProperty,
                a = m.toString,
                l = a.call(Object),
                v = {},
                y = function (e) {
                    return "function" == typeof e && "number" != typeof e.nodeType
                },
                x = function (e) {
                    return null != e && e === e.window
                },
                c = {
                    type: !0,
                    src: !0,
                    noModule: !0
                };

            function b(e, t, n) {
                var r, i = (t = t || E).createElement("script");
                if (i.text = e, n)
                    for (r in c) n[r] && (i[r] = n[r]);
                t.head.appendChild(i).parentNode.removeChild(i)
            }

            function w(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
            }
            var k = function (e, t) {
                    return new k.fn.init(e, t)
                },
                f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

            function p(e) {
                var t = !!e && "length" in e && e.length,
                    n = w(e);
                return !y(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
            }
            k.fn = k.prototype = {
                jquery: "3.3.1",
                constructor: k,
                length: 0,
                toArray: function () {
                    return s.call(this)
                },
                get: function (e) {
                    return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
                },
                pushStack: function (e) {
                    var t = k.merge(this.constructor(), e);
                    return t.prevObject = this, t
                },
                each: function (e) {
                    return k.each(this, e)
                },
                map: function (n) {
                    return this.pushStack(k.map(this, function (e, t) {
                        return n.call(e, t, e)
                    }))
                },
                slice: function () {
                    return this.pushStack(s.apply(this, arguments))
                },
                first: function () {
                    return this.eq(0)
                },
                last: function () {
                    return this.eq(-1)
                },
                eq: function (e) {
                    var t = this.length,
                        n = +e + (e < 0 ? t : 0);
                    return this.pushStack(0 <= n && n < t ? [this[n]] : [])
                },
                end: function () {
                    return this.prevObject || this.constructor()
                },
                push: u,
                sort: t.sort,
                splice: t.splice
            }, k.extend = k.fn.extend = function () {
                var e, t, n, r, i, o, a = arguments[0] || {},
                    s = 1,
                    u = arguments.length,
                    l = !1;
                for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || y(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
                    if (null != (e = arguments[s]))
                        for (t in e) n = a[t], a !== (r = e[t]) && (l && r && (k.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && k.isPlainObject(n) ? n : {}, a[t] = k.extend(l, o, r)) : void 0 !== r && (a[t] = r));
                return a
            }, k.extend({
                expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function (e) {
                    throw new Error(e)
                },
                noop: function () {},
                isPlainObject: function (e) {
                    var t, n;
                    return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = m.call(t, "constructor") && t.constructor) && a.call(n) === l)
                },
                isEmptyObject: function (e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                },
                globalEval: function (e) {
                    b(e)
                },
                each: function (e, t) {
                    var n, r = 0;
                    if (p(e))
                        for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                    else
                        for (r in e)
                            if (!1 === t.call(e[r], r, e[r])) break;
                    return e
                },
                trim: function (e) {
                    return null == e ? "" : (e + "").replace(f, "")
                },
                makeArray: function (e, t) {
                    var n = t || [];
                    return null != e && (p(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
                },
                inArray: function (e, t, n) {
                    return null == t ? -1 : i.call(t, e, n)
                },
                merge: function (e, t) {
                    for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                    return e.length = i, e
                },
                grep: function (e, t, n) {
                    for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
                    return r
                },
                map: function (e, t, n) {
                    var r, i, o = 0,
                        a = [];
                    if (p(e))
                        for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
                    else
                        for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                    return g.apply([], a)
                },
                guid: 1,
                support: v
            }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
                n["[object " + t + "]"] = t.toLowerCase()
            });
            var d = function (n) {
                var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, m, s, c, v, k = "sizzle" + 1 * new Date,
                    y = n.document,
                    S = 0,
                    r = 0,
                    p = ae(),
                    x = ae(),
                    N = ae(),
                    j = function (e, t) {
                        return e === t && (l = !0), 0
                    },
                    D = {}.hasOwnProperty,
                    t = [],
                    A = t.pop,
                    L = t.push,
                    q = t.push,
                    H = t.slice,
                    O = function (e, t) {
                        for (var n = 0, r = e.length; n < r; n++)
                            if (e[n] === t) return n;
                        return -1
                    },
                    R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    P = "[\\x20\\t\\r\\n\\f]",
                    W = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                    M = "\\[" + P + "*(" + W + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + W + "))|)" + P + "*\\]",
                    I = ":(" + W + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
                    B = new RegExp(P + "+", "g"),
                    F = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
                    $ = new RegExp("^" + P + "*," + P + "*"),
                    _ = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
                    z = new RegExp("=" + P + "*([^\\]'\"]*?)" + P + "*\\]", "g"),
                    X = new RegExp(I),
                    U = new RegExp("^" + W + "$"),
                    V = {
                        ID: new RegExp("^#(" + W + ")"),
                        CLASS: new RegExp("^\\.(" + W + ")"),
                        TAG: new RegExp("^(" + W + "|[*])"),
                        ATTR: new RegExp("^" + M),
                        PSEUDO: new RegExp("^" + I),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + R + ")$", "i"),
                        needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
                    },
                    Y = /^(?:input|select|textarea|button)$/i,
                    G = /^h\d$/i,
                    Q = /^[^{]+\{\s*\[native \w/,
                    J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    K = /[+~]/,
                    Z = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
                    ee = function (e, t, n) {
                        var r = "0x" + t - 65536;
                        return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                    },
                    te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    ne = function (e, t) {
                        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                    },
                    re = function () {
                        T()
                    },
                    ie = ye(function (e) {
                        return !0 === e.disabled && ("form" in e || "label" in e)
                    }, {
                        dir: "parentNode",
                        next: "legend"
                    });
                try {
                    q.apply(t = H.call(y.childNodes), y.childNodes), t[y.childNodes.length].nodeType
                } catch (e) {
                    q = {
                        apply: t.length ? function (e, t) {
                            L.apply(e, H.call(t))
                        } : function (e, t) {
                            for (var n = e.length, r = 0; e[n++] = t[r++];);
                            e.length = n - 1
                        }
                    }
                }

                function oe(e, t, n, r) {
                    var i, o, a, s, u, l, c, f = t && t.ownerDocument,
                        p = t ? t.nodeType : 9;
                    if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n;
                    if (!r && ((t ? t.ownerDocument || t : y) !== C && T(t), t = t || C, E)) {
                        if (11 !== p && (u = J.exec(e)))
                            if (i = u[1]) {
                                if (9 === p) {
                                    if (!(a = t.getElementById(i))) return n;
                                    if (a.id === i) return n.push(a), n
                                } else if (f && (a = f.getElementById(i)) && v(t, a) && a.id === i) return n.push(a), n
                            } else {
                                if (u[2]) return q.apply(n, t.getElementsByTagName(e)), n;
                                if ((i = u[3]) && d.getElementsByClassName && t.getElementsByClassName) return q.apply(n, t.getElementsByClassName(i)), n
                            }
                        if (d.qsa && !N[e + " "] && (!m || !m.test(e))) {
                            if (1 !== p) f = t, c = e;
                            else if ("object" !== t.nodeName.toLowerCase()) {
                                for ((s = t.getAttribute("id")) ? s = s.replace(te, ne) : t.setAttribute("id", s = k), o = (l = h(e)).length; o--;) l[o] = "#" + s + " " + ve(l[o]);
                                c = l.join(","), f = K.test(e) && ge(t.parentNode) || t
                            }
                            if (c) try {
                                return q.apply(n, f.querySelectorAll(c)), n
                            } catch (e) {} finally {
                                s === k && t.removeAttribute("id")
                            }
                        }
                    }
                    return g(e.replace(F, "$1"), t, n, r)
                }

                function ae() {
                    var r = [];
                    return function e(t, n) {
                        return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
                    }
                }

                function se(e) {
                    return e[k] = !0, e
                }

                function ue(e) {
                    var t = C.createElement("fieldset");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function le(e, t) {
                    for (var n = e.split("|"), r = n.length; r--;) b.attrHandle[n[r]] = t
                }

                function ce(e, t) {
                    var n = t && e,
                        r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (r) return r;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function fe(t) {
                    return function (e) {
                        return "input" === e.nodeName.toLowerCase() && e.type === t
                    }
                }

                function pe(n) {
                    return function (e) {
                        var t = e.nodeName.toLowerCase();
                        return ("input" === t || "button" === t) && e.type === n
                    }
                }

                function de(t) {
                    return function (e) {
                        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ie(e) === t : e.disabled === t : "label" in e && e.disabled === t
                    }
                }

                function he(a) {
                    return se(function (o) {
                        return o = +o, se(function (e, t) {
                            for (var n, r = a([], e.length, o), i = r.length; i--;) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                        })
                    })
                }

                function ge(e) {
                    return e && void 0 !== e.getElementsByTagName && e
                }
                for (e in d = oe.support = {}, i = oe.isXML = function (e) {
                        var t = e && (e.ownerDocument || e).documentElement;
                        return !!t && "HTML" !== t.nodeName
                    }, T = oe.setDocument = function (e) {
                        var t, n, r = e ? e.ownerDocument || e : y;
                        return r !== C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), y !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", re, !1) : n.attachEvent && n.attachEvent("onunload", re)), d.attributes = ue(function (e) {
                            return e.className = "i", !e.getAttribute("className")
                        }), d.getElementsByTagName = ue(function (e) {
                            return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
                        }), d.getElementsByClassName = Q.test(C.getElementsByClassName), d.getById = ue(function (e) {
                            return a.appendChild(e).id = k, !C.getElementsByName || !C.getElementsByName(k).length
                        }), d.getById ? (b.filter.ID = function (e) {
                            var t = e.replace(Z, ee);
                            return function (e) {
                                return e.getAttribute("id") === t
                            }
                        }, b.find.ID = function (e, t) {
                            if (void 0 !== t.getElementById && E) {
                                var n = t.getElementById(e);
                                return n ? [n] : []
                            }
                        }) : (b.filter.ID = function (e) {
                            var n = e.replace(Z, ee);
                            return function (e) {
                                var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                return t && t.value === n
                            }
                        }, b.find.ID = function (e, t) {
                            if (void 0 !== t.getElementById && E) {
                                var n, r, i, o = t.getElementById(e);
                                if (o) {
                                    if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                    for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                                }
                                return []
                            }
                        }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
                        } : function (e, t) {
                            var n, r = [],
                                i = 0,
                                o = t.getElementsByTagName(e);
                            if ("*" === e) {
                                for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                                return r
                            }
                            return o
                        }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
                            if (void 0 !== t.getElementsByClassName && E) return t.getElementsByClassName(e)
                        }, s = [], m = [], (d.qsa = Q.test(C.querySelectorAll)) && (ue(function (e) {
                            a.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + P + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + k + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + k + "+*").length || m.push(".#.+[+~]")
                        }), ue(function (e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = C.createElement("input");
                            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + P + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                        })), (d.matchesSelector = Q.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ue(function (e) {
                            d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", I)
                        }), m = m.length && new RegExp(m.join("|")), s = s.length && new RegExp(s.join("|")), t = Q.test(a.compareDocumentPosition), v = t || Q.test(a.contains) ? function (e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                                r = t && t.parentNode;
                            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                        } : function (e, t) {
                            if (t)
                                for (; t = t.parentNode;)
                                    if (t === e) return !0;
                            return !1
                        }, j = t ? function (e, t) {
                            if (e === t) return l = !0, 0;
                            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === y && v(y, e) ? -1 : t === C || t.ownerDocument === y && v(y, t) ? 1 : u ? O(u, e) - O(u, t) : 0 : 4 & n ? -1 : 1)
                        } : function (e, t) {
                            if (e === t) return l = !0, 0;
                            var n, r = 0,
                                i = e.parentNode,
                                o = t.parentNode,
                                a = [e],
                                s = [t];
                            if (!i || !o) return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? O(u, e) - O(u, t) : 0;
                            if (i === o) return ce(e, t);
                            for (n = e; n = n.parentNode;) a.unshift(n);
                            for (n = t; n = n.parentNode;) s.unshift(n);
                            for (; a[r] === s[r];) r++;
                            return r ? ce(a[r], s[r]) : a[r] === y ? -1 : s[r] === y ? 1 : 0
                        }), C
                    }, oe.matches = function (e, t) {
                        return oe(e, null, null, t)
                    }, oe.matchesSelector = function (e, t) {
                        if ((e.ownerDocument || e) !== C && T(e), t = t.replace(z, "='$1']"), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!m || !m.test(t))) try {
                            var n = c.call(e, t);
                            if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                        } catch (e) {}
                        return 0 < oe(t, C, null, [e]).length
                    }, oe.contains = function (e, t) {
                        return (e.ownerDocument || e) !== C && T(e), v(e, t)
                    }, oe.attr = function (e, t) {
                        (e.ownerDocument || e) !== C && T(e);
                        var n = b.attrHandle[t.toLowerCase()],
                            r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
                        return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                    }, oe.escape = function (e) {
                        return (e + "").replace(te, ne)
                    }, oe.error = function (e) {
                        throw new Error("Syntax error, unrecognized expression: " + e)
                    }, oe.uniqueSort = function (e) {
                        var t, n = [],
                            r = 0,
                            i = 0;
                        if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(j), l) {
                            for (; t = e[i++];) t === e[i] && (r = n.push(i));
                            for (; r--;) e.splice(n[r], 1)
                        }
                        return u = null, e
                    }, o = oe.getText = function (e) {
                        var t, n = "",
                            r = 0,
                            i = e.nodeType;
                        if (i) {
                            if (1 === i || 9 === i || 11 === i) {
                                if ("string" == typeof e.textContent) return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                            } else if (3 === i || 4 === i) return e.nodeValue
                        } else
                            for (; t = e[r++];) n += o(t);
                        return n
                    }, (b = oe.selectors = {
                        cacheLength: 50,
                        createPseudo: se,
                        match: V,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function (e) {
                                return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                            },
                            CHILD: function (e) {
                                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                            },
                            PSEUDO: function (e) {
                                var t, n = !e[6] && e[2];
                                return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function (e) {
                                var t = e.replace(Z, ee).toLowerCase();
                                return "*" === e ? function () {
                                    return !0
                                } : function (e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t
                                }
                            },
                            CLASS: function (e) {
                                var t = p[e + " "];
                                return t || (t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && p(e, function (e) {
                                    return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                })
                            },
                            ATTR: function (n, r, i) {
                                return function (e) {
                                    var t = oe.attr(e, n);
                                    return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                                }
                            },
                            CHILD: function (h, e, t, g, m) {
                                var v = "nth" !== h.slice(0, 3),
                                    y = "last" !== h.slice(-4),
                                    x = "of-type" === e;
                                return 1 === g && 0 === m ? function (e) {
                                    return !!e.parentNode
                                } : function (e, t, n) {
                                    var r, i, o, a, s, u, l = v !== y ? "nextSibling" : "previousSibling",
                                        c = e.parentNode,
                                        f = x && e.nodeName.toLowerCase(),
                                        p = !n && !x,
                                        d = !1;
                                    if (c) {
                                        if (v) {
                                            for (; l;) {
                                                for (a = e; a = a[l];)
                                                    if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                                u = l = "only" === h && !u && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (u = [y ? c.firstChild : c.lastChild], y && p) {
                                            for (d = (s = (r = (i = (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]) && r[2], a = s && c.childNodes[s]; a = ++s && a && a[l] || (d = s = 0) || u.pop();)
                                                if (1 === a.nodeType && ++d && a === e) {
                                                    i[h] = [S, s, d];
                                                    break
                                                }
                                        } else if (p && (d = s = (r = (i = (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]), !1 === d)
                                            for (;
                                                (a = ++s && a && a[l] || (d = s = 0) || u.pop()) && ((x ? a.nodeName.toLowerCase() !== f : 1 !== a.nodeType) || !++d || (p && ((i = (o = a[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [S, d]), a !== e)););
                                        return (d -= m) === g || d % g == 0 && 0 <= d / g
                                    }
                                }
                            },
                            PSEUDO: function (e, o) {
                                var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                                return a[k] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, t) {
                                    for (var n, r = a(e, o), i = r.length; i--;) e[n = O(e, r[i])] = !(t[n] = r[i])
                                }) : function (e) {
                                    return a(e, 0, t)
                                }) : a
                            }
                        },
                        pseudos: {
                            not: se(function (e) {
                                var r = [],
                                    i = [],
                                    s = f(e.replace(F, "$1"));
                                return s[k] ? se(function (e, t, n, r) {
                                    for (var i, o = s(e, null, r, []), a = e.length; a--;)(i = o[a]) && (e[a] = !(t[a] = i))
                                }) : function (e, t, n) {
                                    return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                                }
                            }),
                            has: se(function (t) {
                                return function (e) {
                                    return 0 < oe(t, e).length
                                }
                            }),
                            contains: se(function (t) {
                                return t = t.replace(Z, ee),
                                    function (e) {
                                        return -1 < (e.textContent || e.innerText || o(e)).indexOf(t)
                                    }
                            }),
                            lang: se(function (n) {
                                return U.test(n || "") || oe.error("unsupported lang: " + n), n = n.replace(Z, ee).toLowerCase(),
                                    function (e) {
                                        var t;
                                        do {
                                            if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                        } while ((e = e.parentNode) && 1 === e.nodeType);
                                        return !1
                                    }
                            }),
                            target: function (e) {
                                var t = n.location && n.location.hash;
                                return t && t.slice(1) === e.id
                            },
                            root: function (e) {
                                return e === a
                            },
                            focus: function (e) {
                                return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                            },
                            enabled: de(!1),
                            disabled: de(!0),
                            checked: function (e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && !!e.checked || "option" === t && !!e.selected
                            },
                            selected: function (e) {
                                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                            },
                            empty: function (e) {
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    if (e.nodeType < 6) return !1;
                                return !0
                            },
                            parent: function (e) {
                                return !b.pseudos.empty(e)
                            },
                            header: function (e) {
                                return G.test(e.nodeName)
                            },
                            input: function (e) {
                                return Y.test(e.nodeName)
                            },
                            button: function (e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t
                            },
                            text: function (e) {
                                var t;
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                            },
                            first: he(function () {
                                return [0]
                            }),
                            last: he(function (e, t) {
                                return [t - 1]
                            }),
                            eq: he(function (e, t, n) {
                                return [n < 0 ? n + t : n]
                            }),
                            even: he(function (e, t) {
                                for (var n = 0; n < t; n += 2) e.push(n);
                                return e
                            }),
                            odd: he(function (e, t) {
                                for (var n = 1; n < t; n += 2) e.push(n);
                                return e
                            }),
                            lt: he(function (e, t, n) {
                                for (var r = n < 0 ? n + t : n; 0 <= --r;) e.push(r);
                                return e
                            }),
                            gt: he(function (e, t, n) {
                                for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                                return e
                            })
                        }
                    }).pseudos.nth = b.pseudos.eq, {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) b.pseudos[e] = fe(e);
                for (e in {
                        submit: !0,
                        reset: !0
                    }) b.pseudos[e] = pe(e);

                function me() {}

                function ve(e) {
                    for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                    return r
                }

                function ye(s, e, t) {
                    var u = e.dir,
                        l = e.next,
                        c = l || u,
                        f = t && "parentNode" === c,
                        p = r++;
                    return e.first ? function (e, t, n) {
                        for (; e = e[u];)
                            if (1 === e.nodeType || f) return s(e, t, n);
                        return !1
                    } : function (e, t, n) {
                        var r, i, o, a = [S, p];
                        if (n) {
                            for (; e = e[u];)
                                if ((1 === e.nodeType || f) && s(e, t, n)) return !0
                        } else
                            for (; e = e[u];)
                                if (1 === e.nodeType || f)
                                    if (i = (o = e[k] || (e[k] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
                                    else {
                                        if ((r = i[c]) && r[0] === S && r[1] === p) return a[2] = r[2];
                                        if ((i[c] = a)[2] = s(e, t, n)) return !0
                                    } return !1
                    }
                }

                function xe(i) {
                    return 1 < i.length ? function (e, t, n) {
                        for (var r = i.length; r--;)
                            if (!i[r](e, t, n)) return !1;
                        return !0
                    } : i[0]
                }

                function be(e, t, n, r, i) {
                    for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
                    return a
                }

                function we(d, h, g, m, v, e) {
                    return m && !m[k] && (m = we(m)), v && !v[k] && (v = we(v, e)), se(function (e, t, n, r) {
                        var i, o, a, s = [],
                            u = [],
                            l = t.length,
                            c = e || function (e, t, n) {
                                for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
                                return n
                            }(h || "*", n.nodeType ? [n] : n, []),
                            f = !d || !e && h ? c : be(c, s, d, n, r),
                            p = g ? v || (e ? d : l || m) ? [] : t : f;
                        if (g && g(f, p, n, r), m)
                            for (i = be(p, u), m(i, [], n, r), o = i.length; o--;)(a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
                        if (e) {
                            if (v || d) {
                                if (v) {
                                    for (i = [], o = p.length; o--;)(a = p[o]) && i.push(f[o] = a);
                                    v(null, p = [], i, r)
                                }
                                for (o = p.length; o--;)(a = p[o]) && -1 < (i = v ? O(e, a) : s[o]) && (e[i] = !(t[i] = a))
                            }
                        } else p = be(p === t ? p.splice(l, p.length) : p), v ? v(null, t, p, r) : q.apply(t, p)
                    })
                }

                function Te(e) {
                    for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = ye(function (e) {
                            return e === i
                        }, a, !0), l = ye(function (e) {
                            return -1 < O(i, e)
                        }, a, !0), c = [function (e, t, n) {
                            var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                            return i = null, r
                        }]; s < r; s++)
                        if (t = b.relative[e[s].type]) c = [ye(xe(c), t)];
                        else {
                            if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) {
                                for (n = ++s; n < r && !b.relative[e[n].type]; n++);
                                return we(1 < s && xe(c), 1 < s && ve(e.slice(0, s - 1).concat({
                                    value: " " === e[s - 2].type ? "*" : ""
                                })).replace(F, "$1"), t, s < n && Te(e.slice(s, n)), n < r && Te(e = e.slice(n)), n < r && ve(e))
                            }
                            c.push(t)
                        }
                    return xe(c)
                }
                return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = oe.tokenize = function (e, t) {
                    var n, r, i, o, a, s, u, l = x[e + " "];
                    if (l) return t ? 0 : l.slice(0);
                    for (a = e, s = [], u = b.preFilter; a;) {
                        for (o in n && !(r = $.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = _.exec(a)) && (n = r.shift(), i.push({
                                value: n,
                                type: r[0].replace(F, " ")
                            }), a = a.slice(n.length)), b.filter) !(r = V[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                            value: n,
                            type: o,
                            matches: r
                        }), a = a.slice(n.length));
                        if (!n) break
                    }
                    return t ? a.length : a ? oe.error(e) : x(e, s).slice(0)
                }, f = oe.compile = function (e, t) {
                    var n, m, v, y, x, r, i = [],
                        o = [],
                        a = N[e + " "];
                    if (!a) {
                        for (t || (t = h(e)), n = t.length; n--;)(a = Te(t[n]))[k] ? i.push(a) : o.push(a);
                        (a = N(e, (m = o, y = 0 < (v = i).length, x = 0 < m.length, r = function (e, t, n, r, i) {
                            var o, a, s, u = 0,
                                l = "0",
                                c = e && [],
                                f = [],
                                p = w,
                                d = e || x && b.find.TAG("*", i),
                                h = S += null == p ? 1 : Math.random() || .1,
                                g = d.length;
                            for (i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++) {
                                if (x && o) {
                                    for (a = 0, t || o.ownerDocument === C || (T(o), n = !E); s = m[a++];)
                                        if (s(o, t || C, n)) {
                                            r.push(o);
                                            break
                                        }
                                    i && (S = h)
                                }
                                y && ((o = !s && o) && u--, e && c.push(o))
                            }
                            if (u += l, y && l !== u) {
                                for (a = 0; s = v[a++];) s(c, f, t, n);
                                if (e) {
                                    if (0 < u)
                                        for (; l--;) c[l] || f[l] || (f[l] = A.call(r));
                                    f = be(f)
                                }
                                q.apply(r, f), i && !e && 0 < f.length && 1 < u + v.length && oe.uniqueSort(r)
                            }
                            return i && (S = h, w = p), c
                        }, y ? se(r) : r))).selector = e
                    }
                    return a
                }, g = oe.select = function (e, t, n, r) {
                    var i, o, a, s, u, l = "function" == typeof e && e,
                        c = !r && h(e = l.selector || e);
                    if (n = n || [], 1 === c.length) {
                        if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                            if (!(t = (b.find.ID(a.matches[0].replace(Z, ee), t) || [])[0])) return n;
                            l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                        }
                        for (i = V.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !b.relative[s = a.type]);)
                            if ((u = b.find[s]) && (r = u(a.matches[0].replace(Z, ee), K.test(o[0].type) && ge(t.parentNode) || t))) {
                                if (o.splice(i, 1), !(e = r.length && ve(o))) return q.apply(n, r), n;
                                break
                            }
                    }
                    return (l || f(e, c))(r, t, !E, n, !t || K.test(e) && ge(t.parentNode) || t), n
                }, d.sortStable = k.split("").sort(j).join("") === k, d.detectDuplicates = !!l, T(), d.sortDetached = ue(function (e) {
                    return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
                }), ue(function (e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || le("type|href|height|width", function (e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), d.attributes && ue(function (e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || le("value", function (e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                }), ue(function (e) {
                    return null == e.getAttribute("disabled")
                }) || le(R, function (e, t, n) {
                    var r;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }), oe
            }(C);
            k.find = d, k.expr = d.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = d.uniqueSort, k.text = d.getText, k.isXMLDoc = d.isXML, k.contains = d.contains, k.escapeSelector = d.escape;
            var h = function (e, t, n) {
                    for (var r = [], i = void 0 !== n;
                        (e = e[t]) && 9 !== e.nodeType;)
                        if (1 === e.nodeType) {
                            if (i && k(e).is(n)) break;
                            r.push(e)
                        }
                    return r
                },
                T = function (e, t) {
                    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n
                },
                S = k.expr.match.needsContext;

            function N(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            }
            var j = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

            function D(e, n, r) {
                return y(n) ? k.grep(e, function (e, t) {
                    return !!n.call(e, t, e) !== r
                }) : n.nodeType ? k.grep(e, function (e) {
                    return e === n !== r
                }) : "string" != typeof n ? k.grep(e, function (e) {
                    return -1 < i.call(n, e) !== r
                }) : k.filter(n, e, r)
            }
            k.filter = function (e, t, n) {
                var r = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [r] : [] : k.find.matches(e, k.grep(t, function (e) {
                    return 1 === e.nodeType
                }))
            }, k.fn.extend({
                find: function (e) {
                    var t, n, r = this.length,
                        i = this;
                    if ("string" != typeof e) return this.pushStack(k(e).filter(function () {
                        for (t = 0; t < r; t++)
                            if (k.contains(i[t], this)) return !0
                    }));
                    for (n = this.pushStack([]), t = 0; t < r; t++) k.find(e, i[t], n);
                    return 1 < r ? k.uniqueSort(n) : n
                },
                filter: function (e) {
                    return this.pushStack(D(this, e || [], !1))
                },
                not: function (e) {
                    return this.pushStack(D(this, e || [], !0))
                },
                is: function (e) {
                    return !!D(this, "string" == typeof e && S.test(e) ? k(e) : e || [], !1).length
                }
            });
            var A, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (k.fn.init = function (e, t, n) {
                var r, i;
                if (!e) return this;
                if (n = n || A, "string" == typeof e) {
                    if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (r[1]) {
                        if (t = t instanceof k ? t[0] : t, k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), j.test(r[1]) && k.isPlainObject(t))
                            for (r in t) y(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                        return this
                    }
                    return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this
                }
                return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this)
            }).prototype = k.fn, A = k(E);
            var q = /^(?:parents|prev(?:Until|All))/,
                H = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };

            function O(e, t) {
                for (;
                    (e = e[t]) && 1 !== e.nodeType;);
                return e
            }
            k.fn.extend({
                has: function (e) {
                    var t = k(e, this),
                        n = t.length;
                    return this.filter(function () {
                        for (var e = 0; e < n; e++)
                            if (k.contains(this, t[e])) return !0
                    })
                },
                closest: function (e, t) {
                    var n, r = 0,
                        i = this.length,
                        o = [],
                        a = "string" != typeof e && k(e);
                    if (!S.test(e))
                        for (; r < i; r++)
                            for (n = this[r]; n && n !== t; n = n.parentNode)
                                if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
                                    o.push(n);
                                    break
                                }
                    return this.pushStack(1 < o.length ? k.uniqueSort(o) : o)
                },
                index: function (e) {
                    return e ? "string" == typeof e ? i.call(k(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function (e, t) {
                    return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))))
                },
                addBack: function (e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }), k.each({
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                },
                parents: function (e) {
                    return h(e, "parentNode")
                },
                parentsUntil: function (e, t, n) {
                    return h(e, "parentNode", n)
                },
                next: function (e) {
                    return O(e, "nextSibling")
                },
                prev: function (e) {
                    return O(e, "previousSibling")
                },
                nextAll: function (e) {
                    return h(e, "nextSibling")
                },
                prevAll: function (e) {
                    return h(e, "previousSibling")
                },
                nextUntil: function (e, t, n) {
                    return h(e, "nextSibling", n)
                },
                prevUntil: function (e, t, n) {
                    return h(e, "previousSibling", n)
                },
                siblings: function (e) {
                    return T((e.parentNode || {}).firstChild, e)
                },
                children: function (e) {
                    return T(e.firstChild)
                },
                contents: function (e) {
                    return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), k.merge([], e.childNodes))
                }
            }, function (r, i) {
                k.fn[r] = function (e, t) {
                    var n = k.map(this, i, e);
                    return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = k.filter(t, n)), 1 < this.length && (H[r] || k.uniqueSort(n), q.test(r) && n.reverse()), this.pushStack(n)
                }
            });
            var R = /[^\x20\t\r\n\f]+/g;

            function P(e) {
                return e
            }

            function W(e) {
                throw e
            }

            function M(e, t, n, r) {
                var i;
                try {
                    e && y(i = e.promise) ? i.call(e).done(t).fail(n) : e && y(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
                } catch (e) {
                    n.apply(void 0, [e])
                }
            }
            k.Callbacks = function (r) {
                var e, n;
                r = "string" == typeof r ? (e = r, n = {}, k.each(e.match(R) || [], function (e, t) {
                    n[t] = !0
                }), n) : k.extend({}, r);
                var i, t, o, a, s = [],
                    u = [],
                    l = -1,
                    c = function () {
                        for (a = a || r.once, o = i = !0; u.length; l = -1)
                            for (t = u.shift(); ++l < s.length;) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1);
                        r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
                    },
                    f = {
                        add: function () {
                            return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
                                k.each(e, function (e, t) {
                                    y(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                                })
                            }(arguments), t && !i && c()), this
                        },
                        remove: function () {
                            return k.each(arguments, function (e, t) {
                                for (var n; - 1 < (n = k.inArray(t, s, n));) s.splice(n, 1), n <= l && l--
                            }), this
                        },
                        has: function (e) {
                            return e ? -1 < k.inArray(e, s) : 0 < s.length
                        },
                        empty: function () {
                            return s && (s = []), this
                        },
                        disable: function () {
                            return a = u = [], s = t = "", this
                        },
                        disabled: function () {
                            return !s
                        },
                        lock: function () {
                            return a = u = [], t || i || (s = t = ""), this
                        },
                        locked: function () {
                            return !!a
                        },
                        fireWith: function (e, t) {
                            return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
                        },
                        fire: function () {
                            return f.fireWith(this, arguments), this
                        },
                        fired: function () {
                            return !!o
                        }
                    };
                return f
            }, k.extend({
                Deferred: function (e) {
                    var o = [["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2], ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]],
                        i = "pending",
                        a = {
                            state: function () {
                                return i
                            },
                            always: function () {
                                return s.done(arguments).fail(arguments), this
                            },
                            catch: function (e) {
                                return a.then(null, e)
                            },
                            pipe: function () {
                                var i = arguments;
                                return k.Deferred(function (r) {
                                    k.each(o, function (e, t) {
                                        var n = y(i[t[4]]) && i[t[4]];
                                        s[t[1]](function () {
                                            var e = n && n.apply(this, arguments);
                                            e && y(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                        })
                                    }), i = null
                                }).promise()
                            },
                            then: function (t, n, r) {
                                var u = 0;

                                function l(i, o, a, s) {
                                    return function () {
                                        var n = this,
                                            r = arguments,
                                            e = function () {
                                                var e, t;
                                                if (!(i < u)) {
                                                    if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                                    t = e && ("object" == typeof e || "function" == typeof e) && e.then, y(t) ? s ? t.call(e, l(u, o, P, s), l(u, o, W, s)) : (u++, t.call(e, l(u, o, P, s), l(u, o, W, s), l(u, o, P, o.notifyWith))) : (a !== P && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                                }
                                            },
                                            t = s ? e : function () {
                                                try {
                                                    e()
                                                } catch (e) {
                                                    k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== W && (n = void 0, r = [e]), o.rejectWith(n, r))
                                                }
                                            };
                                        i ? t() : (k.Deferred.getStackHook && (t.stackTrace = k.Deferred.getStackHook()), C.setTimeout(t))
                                    }
                                }
                                return k.Deferred(function (e) {
                                    o[0][3].add(l(0, e, y(r) ? r : P, e.notifyWith)), o[1][3].add(l(0, e, y(t) ? t : P)), o[2][3].add(l(0, e, y(n) ? n : W))
                                }).promise()
                            },
                            promise: function (e) {
                                return null != e ? k.extend(e, a) : a
                            }
                        },
                        s = {};
                    return k.each(o, function (e, t) {
                        var n = t[2],
                            r = t[5];
                        a[t[1]] = n.add, r && n.add(function () {
                            i = r
                        }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
                            return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                        }, s[t[0] + "With"] = n.fireWith
                    }), a.promise(s), e && e.call(s, s), s
                },
                when: function (e) {
                    var n = arguments.length,
                        t = n,
                        r = Array(t),
                        i = s.call(arguments),
                        o = k.Deferred(),
                        a = function (t) {
                            return function (e) {
                                r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i)
                            }
                        };
                    if (n <= 1 && (M(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || y(i[t] && i[t].then))) return o.then();
                    for (; t--;) M(i[t], a(t), o.reject);
                    return o.promise()
                }
            });
            var I = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            k.Deferred.exceptionHook = function (e, t) {
                C.console && C.console.warn && e && I.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
            }, k.readyException = function (e) {
                C.setTimeout(function () {
                    throw e
                })
            };
            var B = k.Deferred();

            function F() {
                E.removeEventListener("DOMContentLoaded", F), C.removeEventListener("load", F), k.ready()
            }
            k.fn.ready = function (e) {
                return B.then(e).catch(function (e) {
                    k.readyException(e)
                }), this
            }, k.extend({
                isReady: !1,
                readyWait: 1,
                ready: function (e) {
                    (!0 === e ? --k.readyWait : k.isReady) || (k.isReady = !0) !== e && 0 < --k.readyWait || B.resolveWith(E, [k])
                }
            }), k.ready.then = B.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(k.ready) : (E.addEventListener("DOMContentLoaded", F), C.addEventListener("load", F));
            var $ = function (e, t, n, r, i, o, a) {
                    var s = 0,
                        u = e.length,
                        l = null == n;
                    if ("object" === w(n))
                        for (s in i = !0, n) $(e, t, s, n[s], !0, o, a);
                    else if (void 0 !== r && (i = !0, y(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
                            return l.call(k(e), n)
                        })), t))
                        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
                },
                _ = /^-ms-/,
                z = /-([a-z])/g;

            function X(e, t) {
                return t.toUpperCase()
            }

            function U(e) {
                return e.replace(_, "ms-").replace(z, X)
            }
            var V = function (e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };

            function Y() {
                this.expando = k.expando + Y.uid++
            }
            Y.uid = 1, Y.prototype = {
                cache: function (e) {
                    var t = e[this.expando];
                    return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))), t
                },
                set: function (e, t, n) {
                    var r, i = this.cache(e);
                    if ("string" == typeof t) i[U(t)] = n;
                    else
                        for (r in t) i[U(r)] = t[r];
                    return i
                },
                get: function (e, t) {
                    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][U(t)]
                },
                access: function (e, t, n) {
                    return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
                },
                remove: function (e, t) {
                    var n, r = e[this.expando];
                    if (void 0 !== r) {
                        if (void 0 !== t) {
                            n = (t = Array.isArray(t) ? t.map(U) : (t = U(t)) in r ? [t] : t.match(R) || []).length;
                            for (; n--;) delete r[t[n]]
                        }(void 0 === t || k.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                    }
                },
                hasData: function (e) {
                    var t = e[this.expando];
                    return void 0 !== t && !k.isEmptyObject(t)
                }
            };
            var G = new Y,
                Q = new Y,
                J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                K = /[A-Z]/g;

            function Z(e, t, n) {
                var r, i;
                if (void 0 === n && 1 === e.nodeType)
                    if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
                        try {
                            n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
                        } catch (e) {}
                        Q.set(e, t, n)
                    } else n = void 0;
                return n
            }
            k.extend({
                hasData: function (e) {
                    return Q.hasData(e) || G.hasData(e)
                },
                data: function (e, t, n) {
                    return Q.access(e, t, n)
                },
                removeData: function (e, t) {
                    Q.remove(e, t)
                },
                _data: function (e, t, n) {
                    return G.access(e, t, n)
                },
                _removeData: function (e, t) {
                    G.remove(e, t)
                }
            }), k.fn.extend({
                data: function (n, e) {
                    var t, r, i, o = this[0],
                        a = o && o.attributes;
                    if (void 0 === n) {
                        if (this.length && (i = Q.get(o), 1 === o.nodeType && !G.get(o, "hasDataAttrs"))) {
                            for (t = a.length; t--;) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = U(r.slice(5)), Z(o, r, i[r]));
                            G.set(o, "hasDataAttrs", !0)
                        }
                        return i
                    }
                    return "object" == typeof n ? this.each(function () {
                        Q.set(this, n)
                    }) : $(this, function (e) {
                        var t;
                        if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                        this.each(function () {
                            Q.set(this, n, e)
                        })
                    }, null, e, 1 < arguments.length, null, !0)
                },
                removeData: function (e) {
                    return this.each(function () {
                        Q.remove(this, e)
                    })
                }
            }), k.extend({
                queue: function (e, t, n) {
                    var r;
                    if (e) return t = (t || "fx") + "queue", r = G.get(e, t), n && (!r || Array.isArray(n) ? r = G.access(e, t, k.makeArray(n)) : r.push(n)), r || []
                },
                dequeue: function (e, t) {
                    t = t || "fx";
                    var n = k.queue(e, t),
                        r = n.length,
                        i = n.shift(),
                        o = k._queueHooks(e, t);
                    "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
                        k.dequeue(e, t)
                    }, o)), !r && o && o.empty.fire()
                },
                _queueHooks: function (e, t) {
                    var n = t + "queueHooks";
                    return G.get(e, n) || G.access(e, n, {
                        empty: k.Callbacks("once memory").add(function () {
                            G.remove(e, [t + "queue", n])
                        })
                    })
                }
            }), k.fn.extend({
                queue: function (t, n) {
                    var e = 2;
                    return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? k.queue(this[0], t) : void 0 === n ? this : this.each(function () {
                        var e = k.queue(this, t, n);
                        k._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t)
                    })
                },
                dequeue: function (e) {
                    return this.each(function () {
                        k.dequeue(this, e)
                    })
                },
                clearQueue: function (e) {
                    return this.queue(e || "fx", [])
                },
                promise: function (e, t) {
                    var n, r = 1,
                        i = k.Deferred(),
                        o = this,
                        a = this.length,
                        s = function () {
                            --r || i.resolveWith(o, [o])
                        };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = G.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                    return s(), i.promise(t)
                }
            });
            var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
                ne = ["Top", "Right", "Bottom", "Left"],
                re = function (e, t) {
                    return "none" === (e = t || e).style.display || "" === e.style.display && k.contains(e.ownerDocument, e) && "none" === k.css(e, "display")
                },
                ie = function (e, t, n, r) {
                    var i, o, a = {};
                    for (o in t) a[o] = e.style[o], e.style[o] = t[o];
                    for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];
                    return i
                };

            function oe(e, t, n, r) {
                var i, o, a = 20,
                    s = r ? function () {
                        return r.cur()
                    } : function () {
                        return k.css(e, t, "")
                    },
                    u = s(),
                    l = n && n[3] || (k.cssNumber[t] ? "" : "px"),
                    c = (k.cssNumber[t] || "px" !== l && +u) && te.exec(k.css(e, t));
                if (c && c[3] !== l) {
                    for (u /= 2, l = l || c[3], c = +u || 1; a--;) k.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
                    c *= 2, k.style(e, t, c + l), n = n || []
                }
                return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
            }
            var ae = {};

            function se(e, t) {
                for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = G.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && re(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ae[s]) || (o = a.body.appendChild(a.createElement(s)), u = k.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ae[s] = u)))) : "none" !== n && (l[c] = "none", G.set(r, "display", n)));
                for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
                return e
            }
            k.fn.extend({
                show: function () {
                    return se(this, !0)
                },
                hide: function () {
                    return se(this)
                },
                toggle: function (e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                        re(this) ? k(this).show() : k(this).hide()
                    })
                }
            });
            var ue = /^(?:checkbox|radio)$/i,
                le = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
                ce = /^$|^module$|\/(?:java|ecma)script/i,
                fe = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };

            function pe(e, t) {
                var n;
                return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? k.merge([e], n) : n
            }

            function de(e, t) {
                for (var n = 0, r = e.length; n < r; n++) G.set(e[n], "globalEval", !t || G.get(t[n], "globalEval"))
            }
            fe.optgroup = fe.option, fe.tbody = fe.tfoot = fe.colgroup = fe.caption = fe.thead, fe.th = fe.td;
            var he, ge, me = /<|&#?\w+;/;

            function ve(e, t, n, r, i) {
                for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
                    if ((o = e[d]) || 0 === o)
                        if ("object" === w(o)) k.merge(p, o.nodeType ? [o] : o);
                        else if (me.test(o)) {
                    for (a = a || f.appendChild(t.createElement("div")), s = (le.exec(o) || ["", ""])[1].toLowerCase(), u = fe[s] || fe._default, a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2], c = u[0]; c--;) a = a.lastChild;
                    k.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
                } else p.push(t.createTextNode(o));
                for (f.textContent = "", d = 0; o = p[d++];)
                    if (r && -1 < k.inArray(o, r)) i && i.push(o);
                    else if (l = k.contains(o.ownerDocument, o), a = pe(f.appendChild(o), "script"), l && de(a), n)
                    for (c = 0; o = a[c++];) ce.test(o.type || "") && n.push(o);
                return f
            }
            he = E.createDocumentFragment().appendChild(E.createElement("div")), (ge = E.createElement("input")).setAttribute("type", "radio"), ge.setAttribute("checked", "checked"), ge.setAttribute("name", "t"), he.appendChild(ge), v.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked, he.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue;
            var ye = E.documentElement,
                xe = /^key/,
                be = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                we = /^([^.]*)(?:\.(.+)|)/;

            function Te() {
                return !0
            }

            function Ce() {
                return !1
            }

            function Ee() {
                try {
                    return E.activeElement
                } catch (e) {}
            }

            function ke(e, t, n, r, i, o) {
                var a, s;
                if ("object" == typeof t) {
                    for (s in "string" != typeof n && (r = r || n, n = void 0), t) ke(e, s, n, r, t[s], o);
                    return e
                }
                if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ce;
                else if (!i) return e;
                return 1 === o && (a = i, (i = function (e) {
                    return k().off(e), a.apply(this, arguments)
                }).guid = a.guid || (a.guid = k.guid++)), e.each(function () {
                    k.event.add(this, t, i, r, n)
                })
            }
            k.event = {
                global: {},
                add: function (t, e, n, r, i) {
                    var o, a, s, u, l, c, f, p, d, h, g, m = G.get(t);
                    if (m)
                        for (n.handler && (n = (o = n).handler, i = o.selector), i && k.find.matchesSelector(ye, i), n.guid || (n.guid = k.guid++), (u = m.events) || (u = m.events = {}), (a = m.handle) || (a = m.handle = function (e) {
                                return void 0 !== k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0
                            }), l = (e = (e || "").match(R) || [""]).length; l--;) d = g = (s = we.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = k.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = k.event.special[d] || {}, c = k.extend({
                            type: d,
                            origType: g,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: i,
                            needsContext: i && k.expr.match.needsContext.test(i),
                            namespace: h.join(".")
                        }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), k.event.global[d] = !0)
                },
                remove: function (e, t, n, r, i) {
                    var o, a, s, u, l, c, f, p, d, h, g, m = G.hasData(e) && G.get(e);
                    if (m && (u = m.events)) {
                        for (l = (t = (t || "").match(R) || [""]).length; l--;)
                            if (d = g = (s = we.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                                for (f = k.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                                a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || k.removeEvent(e, d, m.handle), delete u[d])
                            } else
                                for (d in u) k.event.remove(e, d + t[l], n, r, !0);
                        k.isEmptyObject(u) && G.remove(e, "handle events")
                    }
                },
                dispatch: function (e) {
                    var t, n, r, i, o, a, s = k.event.fix(e),
                        u = new Array(arguments.length),
                        l = (G.get(this, "events") || {})[s.type] || [],
                        c = k.event.special[s.type] || {};
                    for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
                    if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                        for (a = k.event.handlers.call(this, s, l), t = 0;
                            (i = a[t++]) && !s.isPropagationStopped();)
                            for (s.currentTarget = i.elem, n = 0;
                                (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((k.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                        return c.postDispatch && c.postDispatch.call(this, s), s.result
                    }
                },
                handlers: function (e, t) {
                    var n, r, i, o, a, s = [],
                        u = t.delegateCount,
                        l = e.target;
                    if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                        for (; l !== this; l = l.parentNode || this)
                            if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                                for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < k(i, this).index(l) : k.find(i, this, null, [l]).length), a[i] && o.push(r);
                                o.length && s.push({
                                    elem: l,
                                    handlers: o
                                })
                            }
                    return l = this, u < t.length && s.push({
                        elem: l,
                        handlers: t.slice(u)
                    }), s
                },
                addProp: function (t, e) {
                    Object.defineProperty(k.Event.prototype, t, {
                        enumerable: !0,
                        configurable: !0,
                        get: y(e) ? function () {
                            if (this.originalEvent) return e(this.originalEvent)
                        } : function () {
                            if (this.originalEvent) return this.originalEvent[t]
                        },
                        set: function (e) {
                            Object.defineProperty(this, t, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: e
                            })
                        }
                    })
                },
                fix: function (e) {
                    return e[k.expando] ? e : new k.Event(e)
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function () {
                            if (this !== Ee() && this.focus) return this.focus(), !1
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function () {
                            if (this === Ee() && this.blur) return this.blur(), !1
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function () {
                            if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1
                        },
                        _default: function (e) {
                            return N(e.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function (e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                }
            }, k.removeEvent = function (e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n)
            }, k.Event = function (e, t) {
                if (!(this instanceof k.Event)) return new k.Event(e, t);
                e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Te : Ce, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && k.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[k.expando] = !0
            }, k.Event.prototype = {
                constructor: k.Event,
                isDefaultPrevented: Ce,
                isPropagationStopped: Ce,
                isImmediatePropagationStopped: Ce,
                isSimulated: !1,
                preventDefault: function () {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = Te, e && !this.isSimulated && e.preventDefault()
                },
                stopPropagation: function () {
                    var e = this.originalEvent;
                    this.isPropagationStopped = Te, e && !this.isSimulated && e.stopPropagation()
                },
                stopImmediatePropagation: function () {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = Te, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
                }
            }, k.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function (e) {
                    var t = e.button;
                    return null == e.which && xe.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && be.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
                }
            }, k.event.addProp), k.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function (e, i) {
                k.event.special[e] = {
                    delegateType: i,
                    bindType: i,
                    handle: function (e) {
                        var t, n = e.relatedTarget,
                            r = e.handleObj;
                        return n && (n === this || k.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
                    }
                }
            }), k.fn.extend({
                on: function (e, t, n, r) {
                    return ke(this, e, t, n, r)
                },
                one: function (e, t, n, r) {
                    return ke(this, e, t, n, r, 1)
                },
                off: function (e, t, n) {
                    var r, i;
                    if (e && e.preventDefault && e.handleObj) return r = e.handleObj, k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                    if ("object" == typeof e) {
                        for (i in e) this.off(i, t, e[i]);
                        return this
                    }
                    return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ce), this.each(function () {
                        k.event.remove(this, e, n, t)
                    })
                }
            });
            var Se = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                Ne = /<script|<style|<link/i,
                je = /checked\s*(?:[^=]|=\s*.checked.)/i,
                De = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

            function Ae(e, t) {
                return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0] || e
            }

            function Le(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
            }

            function qe(e) {
                return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
            }

            function He(e, t) {
                var n, r, i, o, a, s, u, l;
                if (1 === t.nodeType) {
                    if (G.hasData(e) && (o = G.access(e), a = G.set(t, o), l = o.events))
                        for (i in delete a.handle, a.events = {}, l)
                            for (n = 0, r = l[i].length; n < r; n++) k.event.add(t, i, l[i][n]);
                    Q.hasData(e) && (s = Q.access(e), u = k.extend({}, s), Q.set(t, u))
                }
            }

            function Oe(n, r, i, o) {
                r = g.apply([], r);
                var e, t, a, s, u, l, c = 0,
                    f = n.length,
                    p = f - 1,
                    d = r[0],
                    h = y(d);
                if (h || 1 < f && "string" == typeof d && !v.checkClone && je.test(d)) return n.each(function (e) {
                    var t = n.eq(e);
                    h && (r[0] = d.call(this, e, t.html())), Oe(t, r, i, o)
                });
                if (f && (t = (e = ve(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
                    for (s = (a = k.map(pe(e, "script"), Le)).length; c < f; c++) u = e, c !== p && (u = k.clone(u, !0, !0), s && k.merge(a, pe(u, "script"))), i.call(n[c], u, c);
                    if (s)
                        for (l = a[a.length - 1].ownerDocument, k.map(a, qe), c = 0; c < s; c++) u = a[c], ce.test(u.type || "") && !G.access(u, "globalEval") && k.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? k._evalUrl && k._evalUrl(u.src) : b(u.textContent.replace(De, ""), l, u))
                }
                return n
            }

            function Re(e, t, n) {
                for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || k.cleanData(pe(r)), r.parentNode && (n && k.contains(r.ownerDocument, r) && de(pe(r, "script")), r.parentNode.removeChild(r));
                return e
            }
            k.extend({
                htmlPrefilter: function (e) {
                    return e.replace(Se, "<$1></$2>")
                },
                clone: function (e, t, n) {
                    var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                        f = k.contains(e.ownerDocument, e);
                    if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e)))
                        for (a = pe(c), r = 0, i = (o = pe(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && ue.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
                    if (t)
                        if (n)
                            for (o = o || pe(e), a = a || pe(c), r = 0, i = o.length; r < i; r++) He(o[r], a[r]);
                        else He(e, c);
                    return 0 < (a = pe(c, "script")).length && de(a, !f && pe(e, "script")), c
                },
                cleanData: function (e) {
                    for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++)
                        if (V(n)) {
                            if (t = n[G.expando]) {
                                if (t.events)
                                    for (r in t.events) i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
                                n[G.expando] = void 0
                            }
                            n[Q.expando] && (n[Q.expando] = void 0)
                        }
                }
            }), k.fn.extend({
                detach: function (e) {
                    return Re(this, e, !0)
                },
                remove: function (e) {
                    return Re(this, e)
                },
                text: function (e) {
                    return $(this, function (e) {
                        return void 0 === e ? k.text(this) : this.empty().each(function () {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                        })
                    }, null, e, arguments.length)
                },
                append: function () {
                    return Oe(this, arguments, function (e) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ae(this, e).appendChild(e)
                    })
                },
                prepend: function () {
                    return Oe(this, arguments, function (e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = Ae(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                },
                before: function () {
                    return Oe(this, arguments, function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                },
                after: function () {
                    return Oe(this, arguments, function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                },
                empty: function () {
                    for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (k.cleanData(pe(e, !1)), e.textContent = "");
                    return this
                },
                clone: function (e, t) {
                    return e = null != e && e, t = null == t ? e : t, this.map(function () {
                        return k.clone(this, e, t)
                    })
                },
                html: function (e) {
                    return $(this, function (e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !Ne.test(e) && !fe[(le.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = k.htmlPrefilter(e);
                            try {
                                for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (k.cleanData(pe(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (e) {}
                        }
                        t && this.empty().append(e)
                    }, null, e, arguments.length)
                },
                replaceWith: function () {
                    var n = [];
                    return Oe(this, arguments, function (e) {
                        var t = this.parentNode;
                        k.inArray(this, n) < 0 && (k.cleanData(pe(this)), t && t.replaceChild(e, this))
                    }, n)
                }
            }), k.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function (e, a) {
                k.fn[e] = function (e) {
                    for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), k(r[o])[a](t), u.apply(n, t.get());
                    return this.pushStack(n)
                }
            });
            var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
                We = function (e) {
                    var t = e.ownerDocument.defaultView;
                    return t && t.opener || (t = C), t.getComputedStyle(e)
                },
                Me = new RegExp(ne.join("|"), "i");

            function Ie(e, t, n) {
                var r, i, o, a, s = e.style;
                return (n = n || We(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || k.contains(e.ownerDocument, e) || (a = k.style(e, t)), !v.pixelBoxStyles() && Pe.test(a) && Me.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
            }

            function Be(e, t) {
                return {
                    get: function () {
                        if (!e()) return (this.get = t).apply(this, arguments);
                        delete this.get
                    }
                }
            }! function () {
                function e() {
                    if (u) {
                        s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ye.appendChild(s).appendChild(u);
                        var e = C.getComputedStyle(u);
                        n = "1%" !== e.top, a = 12 === t(e.marginLeft), u.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), u.style.position = "absolute", i = 36 === u.offsetWidth || "absolute", ye.removeChild(s), u = null
                    }
                }

                function t(e) {
                    return Math.round(parseFloat(e))
                }
                var n, r, i, o, a, s = E.createElement("div"),
                    u = E.createElement("div");
                u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === u.style.backgroundClip, k.extend(v, {
                    boxSizingReliable: function () {
                        return e(), r
                    },
                    pixelBoxStyles: function () {
                        return e(), o
                    },
                    pixelPosition: function () {
                        return e(), n
                    },
                    reliableMarginLeft: function () {
                        return e(), a
                    },
                    scrollboxSize: function () {
                        return e(), i
                    }
                }))
            }();
            var Fe = /^(none|table(?!-c[ea]).+)/,
                $e = /^--/,
                _e = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                ze = {
                    letterSpacing: "0",
                    fontWeight: "400"
                },
                Xe = ["Webkit", "Moz", "ms"],
                Ue = E.createElement("div").style;

            function Ve(e) {
                var t = k.cssProps[e];
                return t || (t = k.cssProps[e] = function (e) {
                    if (e in Ue) return e;
                    for (var t = e[0].toUpperCase() + e.slice(1), n = Xe.length; n--;)
                        if ((e = Xe[n] + t) in Ue) return e
                }(e) || e), t
            }

            function Ye(e, t, n) {
                var r = te.exec(t);
                return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
            }

            function Ge(e, t, n, r, i, o) {
                var a = "width" === t ? 1 : 0,
                    s = 0,
                    u = 0;
                if (n === (r ? "border" : "content")) return 0;
                for (; a < 4; a += 2) "margin" === n && (u += k.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= k.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= k.css(e, "border" + ne[a] + "Width", !0, i))) : (u += k.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += k.css(e, "border" + ne[a] + "Width", !0, i) : s += k.css(e, "border" + ne[a] + "Width", !0, i));
                return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u
            }

            function Qe(e, t, n) {
                var r = We(e),
                    i = Ie(e, t, r),
                    o = "border-box" === k.css(e, "boxSizing", !1, r),
                    a = o;
                if (Pe.test(i)) {
                    if (!n) return i;
                    i = "auto"
                }
                return a = a && (v.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === k.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ge(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
            }

            function Je(e, t, n, r, i) {
                return new Je.prototype.init(e, t, n, r, i)
            }
            k.extend({
                cssHooks: {
                    opacity: {
                        get: function (e, t) {
                            if (t) {
                                var n = Ie(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {},
                style: function (e, t, n, r) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var i, o, a, s = U(t),
                            u = $e.test(t),
                            l = e.style;
                        if (u || (t = Ve(s)), a = k.cssHooks[t] || k.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                        "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = oe(e, t, i), o = "number"), null != n && n == n && ("number" === o && (n += i && i[3] || (k.cssNumber[s] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
                    }
                },
                css: function (e, t, n, r) {
                    var i, o, a, s = U(t);
                    return $e.test(t) || (t = Ve(s)), (a = k.cssHooks[t] || k.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Ie(e, t, r)), "normal" === i && t in ze && (i = ze[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
                }
            }), k.each(["height", "width"], function (e, s) {
                k.cssHooks[s] = {
                    get: function (e, t, n) {
                        if (t) return !Fe.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Qe(e, s, n) : ie(e, _e, function () {
                            return Qe(e, s, n)
                        })
                    },
                    set: function (e, t, n) {
                        var r, i = We(e),
                            o = "border-box" === k.css(e, "boxSizing", !1, i),
                            a = n && Ge(e, s, n, o, i);
                        return o && v.scrollboxSize() === i.position && (a -= Math.ceil(e["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(i[s]) - Ge(e, s, "border", !1, i) - .5)), a && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[s] = t, t = k.css(e, s)), Ye(0, t, a)
                    }
                }
            }), k.cssHooks.marginLeft = Be(v.reliableMarginLeft, function (e, t) {
                if (t) return (parseFloat(Ie(e, "marginLeft")) || e.getBoundingClientRect().left - ie(e, {
                    marginLeft: 0
                }, function () {
                    return e.getBoundingClientRect().left
                })) + "px"
            }), k.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function (i, o) {
                k.cssHooks[i + o] = {
                    expand: function (e) {
                        for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                        return n
                    }
                }, "margin" !== i && (k.cssHooks[i + o].set = Ye)
            }), k.fn.extend({
                css: function (e, t) {
                    return $(this, function (e, t, n) {
                        var r, i, o = {},
                            a = 0;
                        if (Array.isArray(t)) {
                            for (r = We(e), i = t.length; a < i; a++) o[t[a]] = k.css(e, t[a], !1, r);
                            return o
                        }
                        return void 0 !== n ? k.style(e, t, n) : k.css(e, t)
                    }, e, t, 1 < arguments.length)
                }
            }), ((k.Tween = Je).prototype = {
                constructor: Je,
                init: function (e, t, n, r, i, o) {
                    this.elem = e, this.prop = n, this.easing = i || k.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (k.cssNumber[n] ? "" : "px")
                },
                cur: function () {
                    var e = Je.propHooks[this.prop];
                    return e && e.get ? e.get(this) : Je.propHooks._default.get(this)
                },
                run: function (e) {
                    var t, n = Je.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Je.propHooks._default.set(this), this
                }
            }).init.prototype = Je.prototype, (Je.propHooks = {
                _default: {
                    get: function (e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                    },
                    set: function (e) {
                        k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[k.cssProps[e.prop]] && !k.cssHooks[e.prop] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit)
                    }
                }
            }).scrollTop = Je.propHooks.scrollLeft = {
                set: function (e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, k.easing = {
                linear: function (e) {
                    return e
                },
                swing: function (e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                _default: "swing"
            }, k.fx = Je.prototype.init, k.fx.step = {};
            var Ke, Ze, et, tt, nt = /^(?:toggle|show|hide)$/,
                rt = /queueHooks$/;

            function it() {
                Ze && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(it) : C.setTimeout(it, k.fx.interval), k.fx.tick())
            }

            function ot() {
                return C.setTimeout(function () {
                    Ke = void 0
                }), Ke = Date.now()
            }

            function at(e, t) {
                var n, r = 0,
                    i = {
                        height: e
                    };
                for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
                return t && (i.opacity = i.width = e), i
            }

            function st(e, t, n) {
                for (var r, i = (ut.tweeners[t] || []).concat(ut.tweeners["*"]), o = 0, a = i.length; o < a; o++)
                    if (r = i[o].call(n, t, e)) return r
            }

            function ut(o, e, t) {
                var n, a, r = 0,
                    i = ut.prefilters.length,
                    s = k.Deferred().always(function () {
                        delete u.elem
                    }),
                    u = function () {
                        if (a) return !1;
                        for (var e = Ke || ot(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
                        return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
                    },
                    l = s.promise({
                        elem: o,
                        props: k.extend({}, e),
                        opts: k.extend(!0, {
                            specialEasing: {},
                            easing: k.easing._default
                        }, t),
                        originalProperties: e,
                        originalOptions: t,
                        startTime: Ke || ot(),
                        duration: t.duration,
                        tweens: [],
                        createTween: function (e, t) {
                            var n = k.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                            return l.tweens.push(n), n
                        },
                        stop: function (e) {
                            var t = 0,
                                n = e ? l.tweens.length : 0;
                            if (a) return this;
                            for (a = !0; t < n; t++) l.tweens[t].run(1);
                            return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
                        }
                    }),
                    c = l.props;
                for (! function (e, t) {
                        var n, r, i, o, a;
                        for (n in e)
                            if (i = t[r = U(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = k.cssHooks[r]) && "expand" in a)
                                for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                            else t[r] = i
                    }(c, l.opts.specialEasing); r < i; r++)
                    if (n = ut.prefilters[r].call(l, o, c, l.opts)) return y(n.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
                return k.map(c, st, l), y(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), k.fx.timer(k.extend(u, {
                    elem: o,
                    anim: l,
                    queue: l.opts.queue
                })), l
            }
            k.Animation = k.extend(ut, {
                tweeners: {
                    "*": [function (e, t) {
                        var n = this.createTween(e, t);
                        return oe(n.elem, e, te.exec(t), n), n
                    }]
                },
                tweener: function (e, t) {
                    y(e) ? (t = e, e = ["*"]) : e = e.match(R);
                    for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ut.tweeners[n] = ut.tweeners[n] || [], ut.tweeners[n].unshift(t)
                },
                prefilters: [function (e, t, n) {
                    var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                        p = this,
                        d = {},
                        h = e.style,
                        g = e.nodeType && re(e),
                        m = G.get(e, "fxshow");
                    for (r in n.queue || (null == (a = k._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
                            a.unqueued || s()
                        }), a.unqueued++, p.always(function () {
                            p.always(function () {
                                a.unqueued--, k.queue(e, "fx").length || a.empty.fire()
                            })
                        })), t)
                        if (i = t[r], nt.test(i)) {
                            if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                                if ("show" !== i || !m || void 0 === m[r]) continue;
                                g = !0
                            }
                            d[r] = m && m[r] || k.style(e, r)
                        }
                    if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d))
                        for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = m && m.display) && (l = G.get(e, "display")), "none" === (c = k.css(e, "display")) && (l ? c = l : (se([e], !0), l = e.style.display || l, c = k.css(e, "display"), se([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === k.css(e, "float") && (u || (p.done(function () {
                                h.display = l
                            }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
                                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                            })), u = !1, d) u || (m ? "hidden" in m && (g = m.hidden) : m = G.access(e, "fxshow", {
                            display: l
                        }), o && (m.hidden = !g), g && se([e], !0), p.done(function () {
                            for (r in g || se([e]), G.remove(e, "fxshow"), d) k.style(e, r, d[r])
                        })), u = st(g ? m[r] : 0, r, p), r in m || (m[r] = u.start, g && (u.end = u.start, u.start = 0))
                }],
                prefilter: function (e, t) {
                    t ? ut.prefilters.unshift(e) : ut.prefilters.push(e)
                }
            }), k.speed = function (e, t, n) {
                var r = e && "object" == typeof e ? k.extend({}, e) : {
                    complete: n || !n && t || y(e) && e,
                    duration: e,
                    easing: n && t || t && !y(t) && t
                };
                return k.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                    y(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue)
                }, r
            }, k.fn.extend({
                fadeTo: function (e, t, n, r) {
                    return this.filter(re).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, r)
                },
                animate: function (t, e, n, r) {
                    var i = k.isEmptyObject(t),
                        o = k.speed(e, n, r),
                        a = function () {
                            var e = ut(this, k.extend({}, t), o);
                            (i || G.get(this, "finish")) && e.stop(!0)
                        };
                    return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                },
                stop: function (i, e, o) {
                    var a = function (e) {
                        var t = e.stop;
                        delete e.stop, t(o)
                    };
                    return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(function () {
                        var e = !0,
                            t = null != i && i + "queueHooks",
                            n = k.timers,
                            r = G.get(this);
                        if (t) r[t] && r[t].stop && a(r[t]);
                        else
                            for (t in r) r[t] && r[t].stop && rt.test(t) && a(r[t]);
                        for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                        !e && o || k.dequeue(this, i)
                    })
                },
                finish: function (a) {
                    return !1 !== a && (a = a || "fx"), this.each(function () {
                        var e, t = G.get(this),
                            n = t[a + "queue"],
                            r = t[a + "queueHooks"],
                            i = k.timers,
                            o = n ? n.length : 0;
                        for (t.finish = !0, k.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                        for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                        delete t.finish
                    })
                }
            }), k.each(["toggle", "show", "hide"], function (e, r) {
                var i = k.fn[r];
                k.fn[r] = function (e, t, n) {
                    return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(at(r, !0), e, t, n)
                }
            }), k.each({
                slideDown: at("show"),
                slideUp: at("hide"),
                slideToggle: at("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function (e, r) {
                k.fn[e] = function (e, t, n) {
                    return this.animate(r, e, t, n)
                }
            }), k.timers = [], k.fx.tick = function () {
                var e, t = 0,
                    n = k.timers;
                for (Ke = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || k.fx.stop(), Ke = void 0
            }, k.fx.timer = function (e) {
                k.timers.push(e), k.fx.start()
            }, k.fx.interval = 13, k.fx.start = function () {
                Ze || (Ze = !0, it())
            }, k.fx.stop = function () {
                Ze = null
            }, k.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, k.fn.delay = function (r, e) {
                return r = k.fx && k.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
                    var n = C.setTimeout(e, r);
                    t.stop = function () {
                        C.clearTimeout(n)
                    }
                })
            }, et = E.createElement("input"), tt = E.createElement("select").appendChild(E.createElement("option")), et.type = "checkbox", v.checkOn = "" !== et.value, v.optSelected = tt.selected, (et = E.createElement("input")).value = "t", et.type = "radio", v.radioValue = "t" === et.value;
            var lt, ct = k.expr.attrHandle;
            k.fn.extend({
                attr: function (e, t) {
                    return $(this, k.attr, e, t, 1 < arguments.length)
                },
                removeAttr: function (e) {
                    return this.each(function () {
                        k.removeAttr(this, e)
                    })
                }
            }), k.extend({
                attr: function (e, t, n) {
                    var r, i, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? k.prop(e, t, n) : (1 === o && k.isXMLDoc(e) || (i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? lt : void 0)), void 0 !== n ? null === n ? void k.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = k.find.attr(e, t)) ? void 0 : r)
                },
                attrHooks: {
                    type: {
                        set: function (e, t) {
                            if (!v.radioValue && "radio" === t && N(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t
                            }
                        }
                    }
                },
                removeAttr: function (e, t) {
                    var n, r = 0,
                        i = t && t.match(R);
                    if (i && 1 === e.nodeType)
                        for (; n = i[r++];) e.removeAttribute(n)
                }
            }), lt = {
                set: function (e, t, n) {
                    return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n
                }
            }, k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
                var a = ct[t] || k.find.attr;
                ct[t] = function (e, t, n) {
                    var r, i, o = t.toLowerCase();
                    return n || (i = ct[o], ct[o] = r, r = null != a(e, t, n) ? o : null, ct[o] = i), r
                }
            });
            var ft = /^(?:input|select|textarea|button)$/i,
                pt = /^(?:a|area)$/i;

            function dt(e) {
                return (e.match(R) || []).join(" ")
            }

            function ht(e) {
                return e.getAttribute && e.getAttribute("class") || ""
            }

            function gt(e) {
                return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || []
            }
            k.fn.extend({
                prop: function (e, t) {
                    return $(this, k.prop, e, t, 1 < arguments.length)
                },
                removeProp: function (e) {
                    return this.each(function () {
                        delete this[k.propFix[e] || e]
                    })
                }
            }), k.extend({
                prop: function (e, t, n) {
                    var r, i, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o) return 1 === o && k.isXMLDoc(e) || (t = k.propFix[t] || t, i = k.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                },
                propHooks: {
                    tabIndex: {
                        get: function (e) {
                            var t = k.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : ft.test(e.nodeName) || pt.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }), v.optSelected || (k.propHooks.selected = {
                get: function (e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null
                },
                set: function (e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                }
            }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                k.propFix[this.toLowerCase()] = this
            }), k.fn.extend({
                addClass: function (t) {
                    var e, n, r, i, o, a, s, u = 0;
                    if (y(t)) return this.each(function (e) {
                        k(this).addClass(t.call(this, e, ht(this)))
                    });
                    if ((e = gt(t)).length)
                        for (; n = this[u++];)
                            if (i = ht(n), r = 1 === n.nodeType && " " + dt(i) + " ") {
                                for (a = 0; o = e[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                                i !== (s = dt(r)) && n.setAttribute("class", s)
                            }
                    return this
                },
                removeClass: function (t) {
                    var e, n, r, i, o, a, s, u = 0;
                    if (y(t)) return this.each(function (e) {
                        k(this).removeClass(t.call(this, e, ht(this)))
                    });
                    if (!arguments.length) return this.attr("class", "");
                    if ((e = gt(t)).length)
                        for (; n = this[u++];)
                            if (i = ht(n), r = 1 === n.nodeType && " " + dt(i) + " ") {
                                for (a = 0; o = e[a++];)
                                    for (; - 1 < r.indexOf(" " + o + " ");) r = r.replace(" " + o + " ", " ");
                                i !== (s = dt(r)) && n.setAttribute("class", s)
                            }
                    return this
                },
                toggleClass: function (i, t) {
                    var o = typeof i,
                        a = "string" === o || Array.isArray(i);
                    return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : y(i) ? this.each(function (e) {
                        k(this).toggleClass(i.call(this, e, ht(this), t), t)
                    }) : this.each(function () {
                        var e, t, n, r;
                        if (a)
                            for (t = 0, n = k(this), r = gt(i); e = r[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                        else void 0 !== i && "boolean" !== o || ((e = ht(this)) && G.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : G.get(this, "__className__") || ""))
                    })
                },
                hasClass: function (e) {
                    var t, n, r = 0;
                    for (t = " " + e + " "; n = this[r++];)
                        if (1 === n.nodeType && -1 < (" " + dt(ht(n)) + " ").indexOf(t)) return !0;
                    return !1
                }
            });
            var mt = /\r/g;
            k.fn.extend({
                val: function (n) {
                    var r, e, i, t = this[0];
                    return arguments.length ? (i = y(n), this.each(function (e) {
                        var t;
                        1 === this.nodeType && (null == (t = i ? n.call(this, e, k(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = k.map(t, function (e) {
                            return null == e ? "" : e + ""
                        })), (r = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
                    })) : t ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(mt, "") : null == e ? "" : e : void 0
                }
            }), k.extend({
                valHooks: {
                    option: {
                        get: function (e) {
                            var t = k.find.attr(e, "value");
                            return null != t ? t : dt(k.text(e))
                        }
                    },
                    select: {
                        get: function (e) {
                            var t, n, r, i = e.options,
                                o = e.selectedIndex,
                                a = "select-one" === e.type,
                                s = a ? null : [],
                                u = a ? o + 1 : i.length;
                            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                                if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                                    if (t = k(n).val(), a) return t;
                                    s.push(t)
                                }
                            return s
                        },
                        set: function (e, t) {
                            for (var n, r, i = e.options, o = k.makeArray(t), a = i.length; a--;)((r = i[a]).selected = -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0);
                            return n || (e.selectedIndex = -1), o
                        }
                    }
                }
            }), k.each(["radio", "checkbox"], function () {
                k.valHooks[this] = {
                    set: function (e, t) {
                        if (Array.isArray(t)) return e.checked = -1 < k.inArray(k(e).val(), t)
                    }
                }, v.checkOn || (k.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                })
            }), v.focusin = "onfocusin" in C;
            var vt = /^(?:focusinfocus|focusoutblur)$/,
                yt = function (e) {
                    e.stopPropagation()
                };
            k.extend(k.event, {
                trigger: function (e, t, n, r) {
                    var i, o, a, s, u, l, c, f, p = [n || E],
                        d = m.call(e, "type") ? e.type : e,
                        h = m.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !vt.test(d + k.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[k.expando] ? e : new k.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : k.makeArray(t, [e]), c = k.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                        if (!r && !c.noBubble && !x(n)) {
                            for (s = c.delegateType || d, vt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                            a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                        }
                        for (i = 0;
                            (o = p[i++]) && !e.isPropagationStopped();) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (G.get(o, "events") || {})[e.type] && G.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                        return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && y(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), k.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, yt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, yt), k.event.triggered = void 0, a && (n[u] = a)), e.result
                    }
                },
                simulate: function (e, t, n) {
                    var r = k.extend(new k.Event, n, {
                        type: e,
                        isSimulated: !0
                    });
                    k.event.trigger(r, null, t)
                }
            }), k.fn.extend({
                trigger: function (e, t) {
                    return this.each(function () {
                        k.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function (e, t) {
                    var n = this[0];
                    if (n) return k.event.trigger(e, t, n, !0)
                }
            }), v.focusin || k.each({
                focus: "focusin",
                blur: "focusout"
            }, function (n, r) {
                var i = function (e) {
                    k.event.simulate(r, e.target, k.event.fix(e))
                };
                k.event.special[r] = {
                    setup: function () {
                        var e = this.ownerDocument || this,
                            t = G.access(e, r);
                        t || e.addEventListener(n, i, !0), G.access(e, r, (t || 0) + 1)
                    },
                    teardown: function () {
                        var e = this.ownerDocument || this,
                            t = G.access(e, r) - 1;
                        t ? G.access(e, r, t) : (e.removeEventListener(n, i, !0), G.remove(e, r))
                    }
                }
            });
            var xt = C.location,
                bt = Date.now(),
                wt = /\?/;
            k.parseXML = function (e) {
                var t;
                if (!e || "string" != typeof e) return null;
                try {
                    t = (new C.DOMParser).parseFromString(e, "text/xml")
                } catch (e) {
                    t = void 0
                }
                return t && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e), t
            };
            var Tt = /\[\]$/,
                Ct = /\r?\n/g,
                Et = /^(?:submit|button|image|reset|file)$/i,
                kt = /^(?:input|select|textarea|keygen)/i;

            function St(n, e, r, i) {
                var t;
                if (Array.isArray(e)) k.each(e, function (e, t) {
                    r || Tt.test(n) ? i(n, t) : St(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
                });
                else if (r || "object" !== w(e)) i(n, e);
                else
                    for (t in e) St(n + "[" + t + "]", e[t], r, i)
            }
            k.param = function (e, t) {
                var n, r = [],
                    i = function (e, t) {
                        var n = y(t) ? t() : t;
                        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                    };
                if (Array.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e, function () {
                    i(this.name, this.value)
                });
                else
                    for (n in e) St(n, e[n], t, i);
                return r.join("&")
            }, k.fn.extend({
                serialize: function () {
                    return k.param(this.serializeArray())
                },
                serializeArray: function () {
                    return this.map(function () {
                        var e = k.prop(this, "elements");
                        return e ? k.makeArray(e) : this
                    }).filter(function () {
                        var e = this.type;
                        return this.name && !k(this).is(":disabled") && kt.test(this.nodeName) && !Et.test(e) && (this.checked || !ue.test(e))
                    }).map(function (e, t) {
                        var n = k(this).val();
                        return null == n ? null : Array.isArray(n) ? k.map(n, function (e) {
                            return {
                                name: t.name,
                                value: e.replace(Ct, "\r\n")
                            }
                        }) : {
                            name: t.name,
                            value: n.replace(Ct, "\r\n")
                        }
                    }).get()
                }
            });
            var Nt = /%20/g,
                jt = /#.*$/,
                Dt = /([?&])_=[^&]*/,
                At = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                Lt = /^(?:GET|HEAD)$/,
                qt = /^\/\//,
                Ht = {},
                Ot = {},
                Rt = "*/".concat("*"),
                Pt = E.createElement("a");

            function Wt(o) {
                return function (e, t) {
                    "string" != typeof e && (t = e, e = "*");
                    var n, r = 0,
                        i = e.toLowerCase().match(R) || [];
                    if (y(t))
                        for (; n = i[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
                }
            }

            function Mt(t, i, o, a) {
                var s = {},
                    u = t === Ot;

                function l(e) {
                    var r;
                    return s[e] = !0, k.each(t[e] || [], function (e, t) {
                        var n = t(i, o, a);
                        return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
                    }), r
                }
                return l(i.dataTypes[0]) || !s["*"] && l("*")
            }

            function It(e, t) {
                var n, r, i = k.ajaxSettings.flatOptions || {};
                for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
                return r && k.extend(!0, e, r), e
            }
            Pt.href = xt.href, k.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: xt.href,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(xt.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Rt,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": JSON.parse,
                        "text xml": k.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function (e, t) {
                    return t ? It(It(e, k.ajaxSettings), t) : It(k.ajaxSettings, e)
                },
                ajaxPrefilter: Wt(Ht),
                ajaxTransport: Wt(Ot),
                ajax: function (e, t) {
                    "object" == typeof e && (t = e, e = void 0), t = t || {};
                    var c, f, p, n, d, r, h, g, i, o, m = k.ajaxSetup({}, t),
                        v = m.context || m,
                        y = m.context && (v.nodeType || v.jquery) ? k(v) : k.event,
                        x = k.Deferred(),
                        b = k.Callbacks("once memory"),
                        w = m.statusCode || {},
                        a = {},
                        s = {},
                        u = "canceled",
                        T = {
                            readyState: 0,
                            getResponseHeader: function (e) {
                                var t;
                                if (h) {
                                    if (!n)
                                        for (n = {}; t = At.exec(p);) n[t[1].toLowerCase()] = t[2];
                                    t = n[e.toLowerCase()]
                                }
                                return null == t ? null : t
                            },
                            getAllResponseHeaders: function () {
                                return h ? p : null
                            },
                            setRequestHeader: function (e, t) {
                                return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
                            },
                            overrideMimeType: function (e) {
                                return null == h && (m.mimeType = e), this
                            },
                            statusCode: function (e) {
                                var t;
                                if (e)
                                    if (h) T.always(e[T.status]);
                                    else
                                        for (t in e) w[t] = [w[t], e[t]];
                                return this
                            },
                            abort: function (e) {
                                var t = e || u;
                                return c && c.abort(t), l(0, t), this
                            }
                        };
                    if (x.promise(T), m.url = ((e || m.url || xt.href) + "").replace(qt, xt.protocol + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = (m.dataType || "*").toLowerCase().match(R) || [""], null == m.crossDomain) {
                        r = E.createElement("a");
                        try {
                            r.href = m.url, r.href = r.href, m.crossDomain = Pt.protocol + "//" + Pt.host != r.protocol + "//" + r.host
                        } catch (e) {
                            m.crossDomain = !0
                        }
                    }
                    if (m.data && m.processData && "string" != typeof m.data && (m.data = k.param(m.data, m.traditional)), Mt(Ht, m, t, T), h) return T;
                    for (i in (g = k.event && m.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !Lt.test(m.type), f = m.url.replace(jt, ""), m.hasContent ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(Nt, "+")) : (o = m.url.slice(f.length), m.data && (m.processData || "string" == typeof m.data) && (f += (wt.test(f) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (f = f.replace(Dt, "$1"), o = (wt.test(f) ? "&" : "?") + "_=" + bt++ + o), m.url = f + o), m.ifModified && (k.lastModified[f] && T.setRequestHeader("If-Modified-Since", k.lastModified[f]), k.etag[f] && T.setRequestHeader("If-None-Match", k.etag[f])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && T.setRequestHeader("Content-Type", m.contentType), T.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : m.accepts["*"]), m.headers) T.setRequestHeader(i, m.headers[i]);
                    if (m.beforeSend && (!1 === m.beforeSend.call(v, T, m) || h)) return T.abort();
                    if (u = "abort", b.add(m.complete), T.done(m.success), T.fail(m.error), c = Mt(Ot, m, t, T)) {
                        if (T.readyState = 1, g && y.trigger("ajaxSend", [T, m]), h) return T;
                        m.async && 0 < m.timeout && (d = C.setTimeout(function () {
                            T.abort("timeout")
                        }, m.timeout));
                        try {
                            h = !1, c.send(a, l)
                        } catch (e) {
                            if (h) throw e;
                            l(-1, e)
                        }
                    } else l(-1, "No Transport");

                    function l(e, t, n, r) {
                        var i, o, a, s, u, l = t;
                        h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
                            for (var r, i, o, a, s = e.contents, u = e.dataTypes;
                                "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                            if (r)
                                for (i in s)
                                    if (s[i] && s[i].test(r)) {
                                        u.unshift(i);
                                        break
                                    }
                            if (u[0] in n) o = u[0];
                            else {
                                for (i in n) {
                                    if (!u[0] || e.converters[i + " " + u[0]]) {
                                        o = i;
                                        break
                                    }
                                    a || (a = i)
                                }
                                o = o || a
                            }
                            if (o) return o !== u[0] && u.unshift(o), n[o]
                        }(m, T, n)), s = function (e, t, n, r) {
                            var i, o, a, s, u, l = {},
                                c = e.dataTypes.slice();
                            if (c[1])
                                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                            for (o = c.shift(); o;)
                                if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                                    if ("*" === o) o = u;
                                    else if ("*" !== u && u !== o) {
                                if (!(a = l[u + " " + o] || l["* " + o]))
                                    for (i in l)
                                        if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && e.throws) t = a(t);
                                    else try {
                                        t = a(t)
                                    } catch (e) {
                                        return {
                                            state: "parsererror",
                                            error: a ? e : "No conversion from " + u + " to " + o
                                        }
                                    }
                            }
                            return {
                                state: "success",
                                data: t
                            }
                        }(m, s, T, i), i ? (m.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (k.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (k.etag[f] = u)), 204 === e || "HEAD" === m.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(v, [o, l, T]) : x.rejectWith(v, [T, l, a]), T.statusCode(w), w = void 0, g && y.trigger(i ? "ajaxSuccess" : "ajaxError", [T, m, i ? o : a]), b.fireWith(v, [T, l]), g && (y.trigger("ajaxComplete", [T, m]), --k.active || k.event.trigger("ajaxStop")))
                    }
                    return T
                },
                getJSON: function (e, t, n) {
                    return k.get(e, t, n, "json")
                },
                getScript: function (e, t) {
                    return k.get(e, void 0, t, "script")
                }
            }), k.each(["get", "post"], function (e, i) {
                k[i] = function (e, t, n, r) {
                    return y(t) && (r = r || n, n = t, t = void 0), k.ajax(k.extend({
                        url: e,
                        type: i,
                        dataType: r,
                        data: t,
                        success: n
                    }, k.isPlainObject(e) && e))
                }
            }), k._evalUrl = function (e) {
                return k.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    throws: !0
                })
            }, k.fn.extend({
                wrapAll: function (e) {
                    var t;
                    return this[0] && (y(e) && (e = e.call(this[0])), t = k(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                        return e
                    }).append(this)), this
                },
                wrapInner: function (n) {
                    return y(n) ? this.each(function (e) {
                        k(this).wrapInner(n.call(this, e))
                    }) : this.each(function () {
                        var e = k(this),
                            t = e.contents();
                        t.length ? t.wrapAll(n) : e.append(n)
                    })
                },
                wrap: function (t) {
                    var n = y(t);
                    return this.each(function (e) {
                        k(this).wrapAll(n ? t.call(this, e) : t)
                    })
                },
                unwrap: function (e) {
                    return this.parent(e).not("body").each(function () {
                        k(this).replaceWith(this.childNodes)
                    }), this
                }
            }), k.expr.pseudos.hidden = function (e) {
                return !k.expr.pseudos.visible(e)
            }, k.expr.pseudos.visible = function (e) {
                return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
            }, k.ajaxSettings.xhr = function () {
                try {
                    return new C.XMLHttpRequest
                } catch (e) {}
            };
            var Bt = {
                    0: 200,
                    1223: 204
                },
                Ft = k.ajaxSettings.xhr();
            v.cors = !!Ft && "withCredentials" in Ft, v.ajax = Ft = !!Ft, k.ajaxTransport(function (i) {
                var o, a;
                if (v.cors || Ft && !i.crossDomain) return {
                    send: function (e, t) {
                        var n, r = i.xhr();
                        if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                            for (n in i.xhrFields) r[n] = i.xhrFields[n];
                        for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                        o = function (e) {
                            return function () {
                                o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Bt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                    binary: r.response
                                } : {
                                    text: r.responseText
                                }, r.getAllResponseHeaders()))
                            }
                        }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
                            4 === r.readyState && C.setTimeout(function () {
                                o && a()
                            })
                        }, o = o("abort");
                        try {
                            r.send(i.hasContent && i.data || null)
                        } catch (e) {
                            if (o) throw e
                        }
                    },
                    abort: function () {
                        o && o()
                    }
                }
            }), k.ajaxPrefilter(function (e) {
                e.crossDomain && (e.contents.script = !1)
            }), k.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function (e) {
                        return k.globalEval(e), e
                    }
                }
            }), k.ajaxPrefilter("script", function (e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
            }), k.ajaxTransport("script", function (n) {
                var r, i;
                if (n.crossDomain) return {
                    send: function (e, t) {
                        r = k("<script>").prop({
                            charset: n.scriptCharset,
                            src: n.url
                        }).on("load error", i = function (e) {
                            r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                        }), E.head.appendChild(r[0])
                    },
                    abort: function () {
                        i && i()
                    }
                }
            });
            var $t, _t = [],
                zt = /(=)\?(?=&|$)|\?\?/;
            k.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function () {
                    var e = _t.pop() || k.expando + "_" + bt++;
                    return this[e] = !0, e
                }
            }), k.ajaxPrefilter("json jsonp", function (e, t, n) {
                var r, i, o, a = !1 !== e.jsonp && (zt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && zt.test(e.data) && "data");
                if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(zt, "$1" + r) : !1 !== e.jsonp && (e.url += (wt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
                    return o || k.error(r + " was not called"), o[0]
                }, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
                    o = arguments
                }, n.always(function () {
                    void 0 === i ? k(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, _t.push(r)), o && y(i) && i(o[0]), o = i = void 0
                }), "script"
            }), v.createHTMLDocument = (($t = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === $t.childNodes.length), k.parseHTML = function (e, t, n) {
                return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = j.exec(e)) ? [t.createElement(i[1])] : (i = ve([e], t, o), o && o.length && k(o).remove(), k.merge([], i.childNodes)));
                var r, i, o
            }, k.fn.load = function (e, t, n) {
                var r, i, o, a = this,
                    s = e.indexOf(" ");
                return -1 < s && (r = dt(e.slice(s)), e = e.slice(0, s)), y(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && k.ajax({
                    url: e,
                    type: i || "GET",
                    dataType: "html",
                    data: t
                }).done(function (e) {
                    o = arguments, a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e)
                }).always(n && function (e, t) {
                    a.each(function () {
                        n.apply(this, o || [e.responseText, t, e])
                    })
                }), this
            }, k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
                k.fn[t] = function (e) {
                    return this.on(t, e)
                }
            }), k.expr.pseudos.animated = function (t) {
                return k.grep(k.timers, function (e) {
                    return t === e.elem
                }).length
            }, k.offset = {
                setOffset: function (e, t, n) {
                    var r, i, o, a, s, u, l = k.css(e, "position"),
                        c = k(e),
                        f = {};
                    "static" === l && (e.style.position = "relative"), s = c.offset(), o = k.css(e, "top"), u = k.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), y(t) && (t = t.call(e, n, k.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
                }
            }, k.fn.extend({
                offset: function (t) {
                    if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                        k.offset.setOffset(this, t, e)
                    });
                    var e, n, r = this[0];
                    return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                        top: e.top + n.pageYOffset,
                        left: e.left + n.pageXOffset
                    }) : {
                        top: 0,
                        left: 0
                    } : void 0
                },
                position: function () {
                    if (this[0]) {
                        var e, t, n, r = this[0],
                            i = {
                                top: 0,
                                left: 0
                            };
                        if ("fixed" === k.css(r, "position")) t = r.getBoundingClientRect();
                        else {
                            for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position");) e = e.parentNode;
                            e && e !== r && 1 === e.nodeType && ((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0), i.left += k.css(e, "borderLeftWidth", !0))
                        }
                        return {
                            top: t.top - i.top - k.css(r, "marginTop", !0),
                            left: t.left - i.left - k.css(r, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function () {
                    return this.map(function () {
                        for (var e = this.offsetParent; e && "static" === k.css(e, "position");) e = e.offsetParent;
                        return e || ye
                    })
                }
            }), k.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function (t, i) {
                var o = "pageYOffset" === i;
                k.fn[t] = function (e) {
                    return $(this, function (e, t, n) {
                        var r;
                        if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
                    }, t, e, arguments.length)
                }
            }), k.each(["top", "left"], function (e, n) {
                k.cssHooks[n] = Be(v.pixelPosition, function (e, t) {
                    if (t) return t = Ie(e, n), Pe.test(t) ? k(e).position()[n] + "px" : t
                })
            }), k.each({
                Height: "height",
                Width: "width"
            }, function (a, s) {
                k.each({
                    padding: "inner" + a,
                    content: s,
                    "": "outer" + a
                }, function (r, o) {
                    k.fn[o] = function (e, t) {
                        var n = arguments.length && (r || "boolean" != typeof e),
                            i = r || (!0 === e || !0 === t ? "margin" : "border");
                        return $(this, function (e, t, n) {
                            var r;
                            return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? k.css(e, t, i) : k.style(e, t, n, i)
                        }, s, n ? e : void 0, n)
                    }
                })
            }), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
                k.fn[n] = function (e, t) {
                    return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
                }
            }), k.fn.extend({
                hover: function (e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            }), k.fn.extend({
                bind: function (e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function (e, t) {
                    return this.off(e, null, t)
                },
                delegate: function (e, t, n, r) {
                    return this.on(t, e, n, r)
                },
                undelegate: function (e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                }
            }), k.proxy = function (e, t) {
                var n, r, i;
                if ("string" == typeof t && (n = e[t], t = e, e = n), y(e)) return r = s.call(arguments, 2), (i = function () {
                    return e.apply(t || this, r.concat(s.call(arguments)))
                }).guid = e.guid = e.guid || k.guid++, i
            }, k.holdReady = function (e) {
                e ? k.readyWait++ : k.ready(!0)
            }, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = N, k.isFunction = y, k.isWindow = x, k.camelCase = U, k.type = w, k.now = Date.now, k.isNumeric = function (e) {
                var t = k.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            }, "function" == typeof define && define.amd && define("jquery", [], function () {
                return k
            });
            var Xt = C.jQuery,
                Ut = C.$;
            return k.noConflict = function (e) {
                return C.$ === k && (C.$ = Ut), e && C.jQuery === k && (C.jQuery = Xt), k
            }, e || (C.jQuery = C.$ = k), k
        })
    }, {}]
}, {}, [5]);
//# sourceMappingURL=styleguide.js.map
