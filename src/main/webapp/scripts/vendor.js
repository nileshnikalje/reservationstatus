! function(t, e, n) {
    "use strict";

    function r(t, e) {
        return e = e || Error,
            function() {
                var n, r, i = arguments[0],
                    o = "[" + (t ? t + ":" : "") + i + "] ",
                    a = arguments[1],
                    s = arguments;
                for (n = o + a.replace(/\{\d+\}/g, function(t) {
                        var e = +t.slice(1, -1);
                        return e + 2 < s.length ? ht(s[e + 2]) : t
                    }), n = n + "\nhttp://errors.angularjs.org/1.3.20/" + (t ? t + "/" : "") + i, r = 2; r < arguments.length; r++) n = n + (2 == r ? "?" : "&") + "p" + (r - 2) + "=" + encodeURIComponent(ht(arguments[r]));
                return new e(n)
            }
    }

    function i(t) {
        if (null == t || E(t)) return !1;
        var e = "length" in Object(t) && t.length;
        return t.nodeType === wr && e ? !0 : w(t) || dr(t) || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }

    function o(t, e, n) {
        var r, a;
        if (t)
            if (C(t))
                for (r in t) "prototype" == r || "length" == r || "name" == r || t.hasOwnProperty && !t.hasOwnProperty(r) || e.call(n, t[r], r, t);
            else if (dr(t) || i(t)) {
            var s = "object" != typeof t;
            for (r = 0, a = t.length; a > r; r++)(s || r in t) && e.call(n, t[r], r, t)
        } else if (t.forEach && t.forEach !== o) t.forEach(e, n, t);
        else
            for (r in t) t.hasOwnProperty(r) && e.call(n, t[r], r, t);
        return t
    }

    function a(t) {
        return Object.keys(t).sort()
    }

    function s(t, e, n) {
        for (var r = a(t), i = 0; i < r.length; i++) e.call(n, t[r[i]], r[i]);
        return r
    }

    function u(t) {
        return function(e, n) {
            t(n, e)
        }
    }

    function c() {
        return ++fr
    }

    function l(t, e) {
        e ? t.$$hashKey = e : delete t.$$hashKey
    }

    function f(t) {
        for (var e = t.$$hashKey, n = 1, r = arguments.length; r > n; n++) {
            var i = arguments[n];
            if (i)
                for (var o = Object.keys(i), a = 0, s = o.length; s > a; a++) {
                    var u = o[a];
                    t[u] = i[u]
                }
        }
        return l(t, e), t
    }

    function h(t) {
        return parseInt(t, 10)
    }

    function d(t, e) {
        return f(Object.create(t), e)
    }

    function p() {}

    function $(t) {
        return t
    }

    function v(t) {
        return function() {
            return t
        }
    }

    function m(t) {
        return "undefined" == typeof t
    }

    function g(t) {
        return "undefined" != typeof t
    }

    function y(t) {
        return null !== t && "object" == typeof t
    }

    function w(t) {
        return "string" == typeof t
    }

    function b(t) {
        return "number" == typeof t
    }

    function x(t) {
        return "[object Date]" === ur.call(t)
    }

    function C(t) {
        return "function" == typeof t
    }

    function S(t) {
        return "[object RegExp]" === ur.call(t)
    }

    function E(t) {
        return t && t.window === t
    }

    function k(t) {
        return t && t.$evalAsync && t.$watch
    }

    function A(t) {
        return "[object File]" === ur.call(t)
    }

    function T(t) {
        return "[object FormData]" === ur.call(t)
    }

    function O(t) {
        return "[object Blob]" === ur.call(t)
    }

    function D(t) {
        return "boolean" == typeof t
    }

    function M(t) {
        return t && C(t.then)
    }

    function j(t) {
        return !(!t || !(t.nodeName || t.prop && t.attr && t.find))
    }

    function P(t) {
        var e, n = {},
            r = t.split(",");
        for (e = 0; e < r.length; e++) n[r[e]] = !0;
        return n
    }

    function N(t) {
        return Kn(t.nodeName || t[0] && t[0].nodeName)
    }

    function V(t, e) {
        var n = t.indexOf(e);
        return n >= 0 && t.splice(n, 1), e
    }

    function q(t, e, n, r) {
        if (E(t) || k(t)) throw cr("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
        if (e) {
            if (t === e) throw cr("cpi", "Can't copy! Source and destination are identical.");
            if (n = n || [], r = r || [], y(t)) {
                var i = n.indexOf(t);
                if (-1 !== i) return r[i];
                n.push(t), r.push(e)
            }
            var a;
            if (dr(t)) {
                e.length = 0;
                for (var s = 0; s < t.length; s++) a = q(t[s], null, n, r), y(t[s]) && (n.push(t[s]), r.push(a)), e.push(a)
            } else {
                var u = e.$$hashKey;
                dr(e) ? e.length = 0 : o(e, function(t, n) {
                    delete e[n]
                });
                for (var c in t) t.hasOwnProperty(c) && (a = q(t[c], null, n, r), y(t[c]) && (n.push(t[c]), r.push(a)), e[c] = a);
                l(e, u)
            }
        } else if (e = t, t)
            if (dr(t)) e = q(t, [], n, r);
            else if (x(t)) e = new Date(t.getTime());
        else if (S(t)) e = new RegExp(t.source, t.toString().match(/[^\/]*$/)[0]), e.lastIndex = t.lastIndex;
        else if (y(t)) {
            var f = Object.create(Object.getPrototypeOf(t));
            e = q(t, f, n, r)
        }
        return e
    }

    function R(t, e) {
        if (dr(t)) {
            e = e || [];
            for (var n = 0, r = t.length; r > n; n++) e[n] = t[n]
        } else if (y(t)) {
            e = e || {};
            for (var i in t)("$" !== i.charAt(0) || "$" !== i.charAt(1)) && (e[i] = t[i])
        }
        return e || t
    }

    function I(t, e) {
        if (t === e) return !0;
        if (null === t || null === e) return !1;
        if (t !== t && e !== e) return !0;
        var r, i, o, a = typeof t,
            s = typeof e;
        if (a == s && "object" == a) {
            if (!dr(t)) {
                if (x(t)) return x(e) ? I(t.getTime(), e.getTime()) : !1;
                if (S(t)) return S(e) ? t.toString() == e.toString() : !1;
                if (k(t) || k(e) || E(t) || E(e) || dr(e) || x(e) || S(e)) return !1;
                o = {};
                for (i in t)
                    if ("$" !== i.charAt(0) && !C(t[i])) {
                        if (!I(t[i], e[i])) return !1;
                        o[i] = !0
                    }
                for (i in e)
                    if (!o.hasOwnProperty(i) && "$" !== i.charAt(0) && e[i] !== n && !C(e[i])) return !1;
                return !0
            }
            if (!dr(e)) return !1;
            if ((r = t.length) == e.length) {
                for (i = 0; r > i; i++)
                    if (!I(t[i], e[i])) return !1;
                return !0
            }
        }
        return !1
    }

    function U(t, e, n) {
        return t.concat(or.call(e, n))
    }

    function F(t, e) {
        return or.call(t, e || 0)
    }

    function H(t, e) {
        var n = arguments.length > 2 ? F(arguments, 2) : [];
        return !C(e) || e instanceof RegExp ? e : n.length ? function() {
            return arguments.length ? e.apply(t, U(n, arguments, 0)) : e.apply(t, n)
        } : function() {
            return arguments.length ? e.apply(t, arguments) : e.call(t)
        }
    }

    function _(t, r) {
        var i = r;
        return "string" == typeof t && "$" === t.charAt(0) && "$" === t.charAt(1) ? i = n : E(r) ? i = "$WINDOW" : r && e === r ? i = "$DOCUMENT" : k(r) && (i = "$SCOPE"), i
    }

    function B(t, e) {
        return "undefined" == typeof t ? n : (b(e) || (e = e ? 2 : null), JSON.stringify(t, _, e))
    }

    function L(t) {
        return w(t) ? JSON.parse(t) : t
    }

    function z(t) {
        t = nr(t).clone();
        try {
            t.empty()
        } catch (e) {}
        var n = nr("<div>").append(t).html();
        try {
            return t[0].nodeType === xr ? Kn(n) : n.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(t, e) {
                return "<" + Kn(e)
            })
        } catch (e) {
            return Kn(n)
        }
    }

    function G(t) {
        try {
            return decodeURIComponent(t)
        } catch (e) {}
    }

    function W(t) {
        var e, n, r = {};
        return o((t || "").split("&"), function(t) {
            if (t && (e = t.replace(/\+/g, "%20").split("="), n = G(e[0]), g(n))) {
                var i = g(e[1]) ? G(e[1]) : !0;
                Zn.call(r, n) ? dr(r[n]) ? r[n].push(i) : r[n] = [r[n], i] : r[n] = i
            }
        }), r
    }

    function Y(t) {
        var e = [];
        return o(t, function(t, n) {
            dr(t) ? o(t, function(t) {
                e.push(K(n, !0) + (t === !0 ? "" : "=" + K(t, !0)))
            }) : e.push(K(n, !0) + (t === !0 ? "" : "=" + K(t, !0)))
        }), e.length ? e.join("&") : ""
    }

    function J(t) {
        return K(t, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function K(t, e) {
        return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, e ? "%20" : "+")
    }

    function Z(t, e) {
        var n, r, i = mr.length;
        for (t = nr(t), r = 0; i > r; ++r)
            if (n = mr[r] + e, w(n = t.attr(n))) return n;
        return null
    }

    function X(t, e) {
        var n, r, i = {};
        o(mr, function(e) {
            var i = e + "app";
            !n && t.hasAttribute && t.hasAttribute(i) && (n = t, r = t.getAttribute(i))
        }), o(mr, function(e) {
            var i, o = e + "app";
            !n && (i = t.querySelector("[" + o.replace(":", "\\:") + "]")) && (n = i, r = i.getAttribute(o))
        }), n && (i.strictDi = null !== Z(n, "strict-di"), e(n, r ? [r] : [], i))
    }

    function Q(n, r, i) {
        y(i) || (i = {});
        var a = {
            strictDi: !1
        };
        i = f(a, i);
        var s = function() {
                if (n = nr(n), n.injector()) {
                    var t = n[0] === e ? "document" : z(n);
                    throw cr("btstrpd", "App Already Bootstrapped with this Element '{0}'", t.replace(/</, "&lt;").replace(/>/, "&gt;"))
                }
                r = r || [], r.unshift(["$provide", function(t) {
                    t.value("$rootElement", n)
                }]), i.debugInfoEnabled && r.push(["$compileProvider", function(t) {
                    t.debugInfoEnabled(!0)
                }]), r.unshift("ng");
                var o = Lt(r, i.strictDi);
                return o.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function(t, e, n, r) {
                    t.$apply(function() {
                        e.data("$injector", r), n(e)(t)
                    })
                }]), o
            },
            u = /^NG_ENABLE_DEBUG_INFO!/,
            c = /^NG_DEFER_BOOTSTRAP!/;
        return t && u.test(t.name) && (i.debugInfoEnabled = !0, t.name = t.name.replace(u, "")), t && !c.test(t.name) ? s() : (t.name = t.name.replace(c, ""), lr.resumeBootstrap = function(t) {
            return o(t, function(t) {
                r.push(t)
            }), s()
        }, void(C(lr.resumeDeferredBootstrap) && lr.resumeDeferredBootstrap()))
    }

    function tt() {
        t.name = "NG_ENABLE_DEBUG_INFO!" + t.name, t.location.reload()
    }

    function et(t) {
        var e = lr.element(t).injector();
        if (!e) throw cr("test", "no injector found for element argument to getTestability");
        return e.get("$$testability")
    }

    function nt(t, e) {
        return e = e || "_", t.replace(gr, function(t, n) {
            return (n ? e : "") + t.toLowerCase()
        })
    }

    function rt() {
        var e;
        yr || (rr = t.jQuery, rr && rr.fn.on ? (nr = rr, f(rr.fn, {
            scope: Fr.scope,
            isolateScope: Fr.isolateScope,
            controller: Fr.controller,
            injector: Fr.injector,
            inheritedData: Fr.inheritedData
        }), e = rr.cleanData, rr.cleanData = function(t) {
            var n;
            if (hr) hr = !1;
            else
                for (var r, i = 0; null != (r = t[i]); i++) n = rr._data(r, "events"), n && n.$destroy && rr(r).triggerHandler("$destroy");
            e(t)
        }) : nr = wt, lr.element = nr, yr = !0)
    }

    function it(t, e, n) {
        if (!t) throw cr("areq", "Argument '{0}' is {1}", e || "?", n || "required");
        return t
    }

    function ot(t, e, n) {
        return n && dr(t) && (t = t[t.length - 1]), it(C(t), e, "not a function, got " + (t && "object" == typeof t ? t.constructor.name || "Object" : typeof t)), t
    }

    function at(t, e) {
        if ("hasOwnProperty" === t) throw cr("badname", "hasOwnProperty is not a valid {0} name", e)
    }

    function st(t, e, n) {
        if (!e) return t;
        for (var r, i = e.split("."), o = t, a = i.length, s = 0; a > s; s++) r = i[s], t && (t = (o = t)[r]);
        return !n && C(t) ? H(o, t) : t
    }

    function ut(t) {
        var e = t[0],
            n = t[t.length - 1],
            r = [e];
        do {
            if (e = e.nextSibling, !e) break;
            r.push(e)
        } while (e !== n);
        return nr(r)
    }

    function ct() {
        return Object.create(null)
    }

    function lt(t) {
        function e(t, e, n) {
            return t[e] || (t[e] = n())
        }
        var n = r("$injector"),
            i = r("ng"),
            o = e(t, "angular", Object);
        return o.$$minErr = o.$$minErr || r, e(o, "module", function() {
            var t = {};
            return function(r, o, a) {
                var s = function(t, e) {
                    if ("hasOwnProperty" === t) throw i("badname", "hasOwnProperty is not a valid {0} name", e)
                };
                return s(r, "module"), o && t.hasOwnProperty(r) && (t[r] = null), e(t, r, function() {
                    function t(t, n, r, i) {
                        return i || (i = e),
                            function() {
                                return i[r || "push"]([t, n, arguments]), c
                            }
                    }
                    if (!o) throw n("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", r);
                    var e = [],
                        i = [],
                        s = [],
                        u = t("$injector", "invoke", "push", i),
                        c = {
                            _invokeQueue: e,
                            _configBlocks: i,
                            _runBlocks: s,
                            requires: o,
                            name: r,
                            provider: t("$provide", "provider"),
                            factory: t("$provide", "factory"),
                            service: t("$provide", "service"),
                            value: t("$provide", "value"),
                            constant: t("$provide", "constant", "unshift"),
                            animation: t("$animateProvider", "register"),
                            filter: t("$filterProvider", "register"),
                            controller: t("$controllerProvider", "register"),
                            directive: t("$compileProvider", "directive"),
                            config: u,
                            run: function(t) {
                                return s.push(t), this
                            }
                        };
                    return a && u(a), c
                })
            }
        })
    }

    function ft(t) {
        var e = [];
        return JSON.stringify(t, function(t, n) {
            if (n = _(t, n), y(n)) {
                if (e.indexOf(n) >= 0) return "<<already seen>>";
                e.push(n)
            }
            return n
        })
    }

    function ht(t) {
        return "function" == typeof t ? t.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof t ? "undefined" : "string" != typeof t ? ft(t) : t
    }

    function dt(e) {
        f(e, {
            bootstrap: Q,
            copy: q,
            extend: f,
            equals: I,
            element: nr,
            forEach: o,
            injector: Lt,
            noop: p,
            bind: H,
            toJson: B,
            fromJson: L,
            identity: $,
            isUndefined: m,
            isDefined: g,
            isString: w,
            isFunction: C,
            isObject: y,
            isNumber: b,
            isElement: j,
            isArray: dr,
            version: kr,
            isDate: x,
            lowercase: Kn,
            uppercase: Xn,
            callbacks: {
                counter: 0
            },
            getTestability: et,
            $$minErr: r,
            $$csp: vr,
            reloadWithDebugInfo: tt
        }), ir = lt(t);
        try {
            ir("ngLocale")
        } catch (n) {
            ir("ngLocale", []).provider("$locale", ve)
        }
        ir("ng", ["ngLocale"], ["$provide", function(t) {
            t.provider({
                $$sanitizeUri: Je
            }), t.provider("$compile", Zt).directive({
                a: ji,
                input: Ji,
                textarea: Ji,
                form: Ri,
                script: Uo,
                select: _o,
                style: Lo,
                option: Bo,
                ngBind: Xi,
                ngBindHtml: to,
                ngBindTemplate: Qi,
                ngClass: no,
                ngClassEven: io,
                ngClassOdd: ro,
                ngCloak: oo,
                ngController: ao,
                ngForm: Ii,
                ngHide: Po,
                ngIf: co,
                ngInclude: lo,
                ngInit: ho,
                ngNonBindable: Ao,
                ngPluralize: To,
                ngRepeat: Oo,
                ngShow: jo,
                ngStyle: No,
                ngSwitch: Vo,
                ngSwitchWhen: qo,
                ngSwitchDefault: Ro,
                ngOptions: Ho,
                ngTransclude: Io,
                ngModel: So,
                ngList: po,
                ngChange: eo,
                pattern: Go,
                ngPattern: Go,
                required: zo,
                ngRequired: zo,
                minlength: Yo,
                ngMinlength: Yo,
                maxlength: Wo,
                ngMaxlength: Wo,
                ngValue: Zi,
                ngModelOptions: ko
            }).directive({
                ngInclude: fo
            }).directive(Pi).directive(so), t.provider({
                $anchorScroll: zt,
                $animate: Kr,
                $browser: Yt,
                $cacheFactory: Jt,
                $controller: ee,
                $document: ne,
                $exceptionHandler: re,
                $filter: un,
                $interpolate: pe,
                $interval: $e,
                $http: le,
                $httpBackend: he,
                $location: De,
                $log: Me,
                $parse: Be,
                $rootScope: Ye,
                $q: Le,
                $$q: ze,
                $sce: Qe,
                $sceDelegate: Xe,
                $sniffer: tn,
                $templateCache: Kt,
                $templateRequest: en,
                $$testability: nn,
                $timeout: rn,
                $window: sn,
                $$rAF: We,
                $$asyncCallback: Gt,
                $$jqLite: Ut
            })
        }])
    }

    function pt() {
        return ++Tr
    }

    function $t(t) {
        return t.replace(Mr, function(t, e, n, r) {
            return r ? n.toUpperCase() : n
        }).replace(jr, "Moz$1")
    }

    function vt(t) {
        return !qr.test(t)
    }

    function mt(t) {
        var e = t.nodeType;
        return e === wr || !e || e === Sr
    }

    function gt(t, e) {
        var n, r, i, a, s = e.createDocumentFragment(),
            u = [];
        if (vt(t)) u.push(e.createTextNode(t));
        else {
            for (n = n || s.appendChild(e.createElement("div")), r = (Rr.exec(t) || ["", ""])[1].toLowerCase(), i = Ur[r] || Ur._default, n.innerHTML = i[1] + t.replace(Ir, "<$1></$2>") + i[2], a = i[0]; a--;) n = n.lastChild;
            u = U(u, n.childNodes), n = s.firstChild, n.textContent = ""
        }
        return s.textContent = "", s.innerHTML = "", o(u, function(t) {
            s.appendChild(t)
        }), s
    }

    function yt(t, n) {
        n = n || e;
        var r;
        return (r = Vr.exec(t)) ? [n.createElement(r[1])] : (r = gt(t, n)) ? r.childNodes : []
    }

    function wt(t) {
        if (t instanceof wt) return t;
        var e;
        if (w(t) && (t = pr(t), e = !0), !(this instanceof wt)) {
            if (e && "<" != t.charAt(0)) throw Nr("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
            return new wt(t)
        }
        e ? Dt(this, yt(t)) : Dt(this, t)
    }

    function bt(t) {
        return t.cloneNode(!0)
    }

    function xt(t, e) {
        if (e || St(t), t.querySelectorAll)
            for (var n = t.querySelectorAll("*"), r = 0, i = n.length; i > r; r++) St(n[r])
    }

    function Ct(t, e, n, r) {
        if (g(r)) throw Nr("offargs", "jqLite#off() does not support the `selector` argument");
        var i = Et(t),
            a = i && i.events,
            s = i && i.handle;
        if (s)
            if (e) o(e.split(" "), function(e) {
                if (g(n)) {
                    var r = a[e];
                    if (V(r || [], n), r && r.length > 0) return
                }
                Dr(t, e, s), delete a[e]
            });
            else
                for (e in a) "$destroy" !== e && Dr(t, e, s), delete a[e]
    }

    function St(t, e) {
        var r = t.ng339,
            i = r && Ar[r];
        if (i) {
            if (e) return void delete i.data[e];
            i.handle && (i.events.$destroy && i.handle({}, "$destroy"), Ct(t)), delete Ar[r], t.ng339 = n
        }
    }

    function Et(t, e) {
        var r = t.ng339,
            i = r && Ar[r];
        return e && !i && (t.ng339 = r = pt(), i = Ar[r] = {
            events: {},
            data: {},
            handle: n
        }), i
    }

    function kt(t, e, n) {
        if (mt(t)) {
            var r = g(n),
                i = !r && e && !y(e),
                o = !e,
                a = Et(t, !i),
                s = a && a.data;
            if (r) s[e] = n;
            else {
                if (o) return s;
                if (i) return s && s[e];
                f(s, e)
            }
        }
    }

    function At(t, e) {
        return t.getAttribute ? (" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + e + " ") > -1 : !1
    }

    function Tt(t, e) {
        e && t.setAttribute && o(e.split(" "), function(e) {
            t.setAttribute("class", pr((" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + pr(e) + " ", " ")))
        })
    }

    function Ot(t, e) {
        if (e && t.setAttribute) {
            var n = (" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            o(e.split(" "), function(t) {
                t = pr(t), -1 === n.indexOf(" " + t + " ") && (n += t + " ")
            }), t.setAttribute("class", pr(n))
        }
    }

    function Dt(t, e) {
        if (e)
            if (e.nodeType) t[t.length++] = e;
            else {
                var n = e.length;
                if ("number" == typeof n && e.window !== e) {
                    if (n)
                        for (var r = 0; n > r; r++) t[t.length++] = e[r]
                } else t[t.length++] = e
            }
    }

    function Mt(t, e) {
        return jt(t, "$" + (e || "ngController") + "Controller")
    }

    function jt(t, e, r) {
        t.nodeType == Sr && (t = t.documentElement);
        for (var i = dr(e) ? e : [e]; t;) {
            for (var o = 0, a = i.length; a > o; o++)
                if ((r = nr.data(t, i[o])) !== n) return r;
            t = t.parentNode || t.nodeType === Er && t.host
        }
    }

    function Pt(t) {
        for (xt(t, !0); t.firstChild;) t.removeChild(t.firstChild)
    }

    function Nt(t, e) {
        e || xt(t);
        var n = t.parentNode;
        n && n.removeChild(t)
    }

    function Vt(e, n) {
        n = n || t, "complete" === n.document.readyState ? n.setTimeout(e) : nr(n).on("load", e)
    }

    function qt(t, e) {
        var n = Hr[e.toLowerCase()];
        return n && _r[N(t)] && n
    }

    function Rt(t, e) {
        var n = t.nodeName;
        return ("INPUT" === n || "TEXTAREA" === n) && Br[e]
    }

    function It(t, e) {
        var n = function(n, r) {
            n.isDefaultPrevented = function() {
                return n.defaultPrevented
            };
            var i = e[r || n.type],
                o = i ? i.length : 0;
            if (o) {
                if (m(n.immediatePropagationStopped)) {
                    var a = n.stopImmediatePropagation;
                    n.stopImmediatePropagation = function() {
                        n.immediatePropagationStopped = !0, n.stopPropagation && n.stopPropagation(), a && a.call(n)
                    }
                }
                n.isImmediatePropagationStopped = function() {
                    return n.immediatePropagationStopped === !0
                }, o > 1 && (i = R(i));
                for (var s = 0; o > s; s++) n.isImmediatePropagationStopped() || i[s].call(t, n)
            }
        };
        return n.elem = t, n
    }

    function Ut() {
        this.$get = function() {
            return f(wt, {
                hasClass: function(t, e) {
                    return t.attr && (t = t[0]), At(t, e)
                },
                addClass: function(t, e) {
                    return t.attr && (t = t[0]), Ot(t, e)
                },
                removeClass: function(t, e) {
                    return t.attr && (t = t[0]), Tt(t, e)
                }
            })
        }
    }

    function Ft(t, e) {
        var n = t && t.$$hashKey;
        if (n) return "function" == typeof n && (n = t.$$hashKey()), n;
        var r = typeof t;
        return n = "function" == r || "object" == r && null !== t ? t.$$hashKey = r + ":" + (e || c)() : r + ":" + t
    }

    function Ht(t, e) {
        if (e) {
            var n = 0;
            this.nextUid = function() {
                return ++n
            }
        }
        o(t, this.put, this)
    }

    function _t(t) {
        var e = t.toString().replace(Wr, ""),
            n = e.match(Lr);
        return n ? "function(" + (n[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
    }

    function Bt(t, e, n) {
        var r, i, a, s;
        if ("function" == typeof t) {
            if (!(r = t.$inject)) {
                if (r = [], t.length) {
                    if (e) throw w(n) && n || (n = t.name || _t(t)), Yr("strictdi", "{0} is not using explicit annotation and cannot be invoked in strict mode", n);
                    i = t.toString().replace(Wr, ""), a = i.match(Lr), o(a[1].split(zr), function(t) {
                        t.replace(Gr, function(t, e, n) {
                            r.push(n)
                        })
                    })
                }
                t.$inject = r
            }
        } else dr(t) ? (s = t.length - 1, ot(t[s], "fn"), r = t.slice(0, s)) : ot(t, "fn", !0);
        return r
    }

    function Lt(t, e) {
        function r(t) {
            return function(e, n) {
                return y(e) ? void o(e, u(t)) : t(e, n)
            }
        }

        function i(t, e) {
            if (at(t, "service"), (C(e) || dr(e)) && (e = k.instantiate(e)), !e.$get) throw Yr("pget", "Provider '{0}' must define $get factory method.", t);
            return E[t + b] = e
        }

        function a(t, e) {
            return function() {
                var n = T.invoke(e, this);
                if (m(n)) throw Yr("undef", "Provider '{0}' must return a value from $get factory method.", t);
                return n
            }
        }

        function s(t, e, n) {
            return i(t, {
                $get: n !== !1 ? a(t, e) : e
            })
        }

        function c(t, e) {
            return s(t, ["$injector", function(t) {
                return t.instantiate(e)
            }])
        }

        function l(t, e) {
            return s(t, v(e), !1)
        }

        function f(t, e) {
            at(t, "constant"), E[t] = e, A[t] = e
        }

        function h(t, e) {
            var n = k.get(t + b),
                r = n.$get;
            n.$get = function() {
                var t = T.invoke(r, n);
                return T.invoke(e, null, {
                    $delegate: t
                })
            }
        }

        function d(t) {
            var e, n = [];
            return o(t, function(t) {
                function r(t) {
                    var e, n;
                    for (e = 0, n = t.length; n > e; e++) {
                        var r = t[e],
                            i = k.get(r[0]);
                        i[r[1]].apply(i, r[2])
                    }
                }
                if (!S.get(t)) {
                    S.put(t, !0);
                    try {
                        w(t) ? (e = ir(t), n = n.concat(d(e.requires)).concat(e._runBlocks), r(e._invokeQueue), r(e._configBlocks)) : C(t) ? n.push(k.invoke(t)) : dr(t) ? n.push(k.invoke(t)) : ot(t, "module")
                    } catch (i) {
                        throw dr(t) && (t = t[t.length - 1]), i.message && i.stack && -1 == i.stack.indexOf(i.message) && (i = i.message + "\n" + i.stack), Yr("modulerr", "Failed to instantiate module {0} due to:\n{1}", t, i.stack || i.message || i)
                    }
                }
            }), n
        }

        function $(t, n) {
            function r(e, r) {
                if (t.hasOwnProperty(e)) {
                    if (t[e] === g) throw Yr("cdep", "Circular dependency found: {0}", e + " <- " + x.join(" <- "));
                    return t[e]
                }
                try {
                    return x.unshift(e), t[e] = g, t[e] = n(e, r)
                } catch (i) {
                    throw t[e] === g && delete t[e], i
                } finally {
                    x.shift()
                }
            }

            function i(t, n, i, o) {
                "string" == typeof i && (o = i, i = null);
                var a, s, u, c = [],
                    l = Lt.$$annotate(t, e, o);
                for (s = 0, a = l.length; a > s; s++) {
                    if (u = l[s], "string" != typeof u) throw Yr("itkn", "Incorrect injection token! Expected service name as string, got {0}", u);
                    c.push(i && i.hasOwnProperty(u) ? i[u] : r(u, o))
                }
                return dr(t) && (t = t[a]), t.apply(n, c)
            }

            function o(t, e, n) {
                var r = Object.create((dr(t) ? t[t.length - 1] : t).prototype || null),
                    o = i(t, r, e, n);
                return y(o) || C(o) ? o : r
            }
            return {
                invoke: i,
                instantiate: o,
                get: r,
                annotate: Lt.$$annotate,
                has: function(e) {
                    return E.hasOwnProperty(e + b) || t.hasOwnProperty(e)
                }
            }
        }
        e = e === !0;
        var g = {},
            b = "Provider",
            x = [],
            S = new Ht([], !0),
            E = {
                $provide: {
                    provider: r(i),
                    factory: r(s),
                    service: r(c),
                    value: r(l),
                    constant: r(f),
                    decorator: h
                }
            },
            k = E.$injector = $(E, function(t, e) {
                throw lr.isString(e) && x.push(e), Yr("unpr", "Unknown provider: {0}", x.join(" <- "))
            }),
            A = {},
            T = A.$injector = $(A, function(t, e) {
                var r = k.get(t + b, e);
                return T.invoke(r.$get, r, n, t)
            });
        return o(d(t), function(t) {
            T.invoke(t || p)
        }), T
    }

    function zt() {
        var t = !0;
        this.disableAutoScrolling = function() {
            t = !1
        }, this.$get = ["$window", "$location", "$rootScope", function(e, n, r) {
            function i(t) {
                var e = null;
                return Array.prototype.some.call(t, function(t) {
                    return "a" === N(t) ? (e = t, !0) : void 0
                }), e
            }

            function o() {
                var t = s.yOffset;
                if (C(t)) t = t();
                else if (j(t)) {
                    var n = t[0],
                        r = e.getComputedStyle(n);
                    t = "fixed" !== r.position ? 0 : n.getBoundingClientRect().bottom
                } else b(t) || (t = 0);
                return t
            }

            function a(t) {
                if (t) {
                    t.scrollIntoView();
                    var n = o();
                    if (n) {
                        var r = t.getBoundingClientRect().top;
                        e.scrollBy(0, r - n)
                    }
                } else e.scrollTo(0, 0)
            }

            function s() {
                var t, e = n.hash();
                e ? (t = u.getElementById(e)) ? a(t) : (t = i(u.getElementsByName(e))) ? a(t) : "top" === e && a(null) : a(null)
            }
            var u = e.document;
            return t && r.$watch(function() {
                return n.hash()
            }, function(t, e) {
                (t !== e || "" !== t) && Vt(function() {
                    r.$evalAsync(s)
                })
            }), s
        }]
    }

    function Gt() {
        this.$get = ["$$rAF", "$timeout", function(t, e) {
            return t.supported ? function(e) {
                return t(e)
            } : function(t) {
                return e(t, 0, !1)
            }
        }]
    }

    function Wt(t, e, r, i) {
        function a(t) {
            try {
                t.apply(null, F(arguments, 1))
            } finally {
                if (S--, 0 === S)
                    for (; E.length;) try {
                        E.pop()()
                    } catch (e) {
                        r.error(e)
                    }
            }
        }

        function s(t) {
            var e = t.indexOf("#");
            return -1 === e ? "" : t.substr(e)
        }

        function u(t, e) {
            ! function n() {
                o(A, function(t) {
                    t()
                }), k = e(n, t)
            }()
        }

        function c() {
            f(), h()
        }

        function l() {
            try {
                return y.state
            } catch (t) {}
        }

        function f() {
            T = l(), T = m(T) ? null : T, I(T, V) && (T = V), V = T
        }

        function h() {
            (D !== $.url() || O !== T) && (D = $.url(), O = T, o(P, function(t) {
                t($.url(), T)
            }))
        }

        function d(t) {
            try {
                return decodeURIComponent(t)
            } catch (e) {
                return t
            }
        }
        var $ = this,
            v = e[0],
            g = t.location,
            y = t.history,
            b = t.setTimeout,
            x = t.clearTimeout,
            C = {};
        $.isMock = !1;
        var S = 0,
            E = [];
        $.$$completeOutstandingRequest = a, $.$$incOutstandingRequestCount = function() {
            S++
        }, $.notifyWhenNoOutstandingRequests = function(t) {
            o(A, function(t) {
                t()
            }), 0 === S ? t() : E.push(t)
        };
        var k, A = [];
        $.addPollFn = function(t) {
            return m(k) && u(100, b), A.push(t), t
        };
        var T, O, D = g.href,
            M = e.find("base"),
            j = null;
        f(), O = T, $.url = function(e, n, r) {
            if (m(r) && (r = null), g !== t.location && (g = t.location), y !== t.history && (y = t.history), e) {
                var o = O === r;
                if (D === e && (!i.history || o)) return $;
                var a = D && be(D) === be(e);
                return D = e, O = r, !i.history || a && o ? ((!a || j) && (j = e), n ? g.replace(e) : a ? g.hash = s(e) : g.href = e) : (y[n ? "replaceState" : "pushState"](r, "", e), f(), O = T), $
            }
            return j || g.href.replace(/%27/g, "'")
        }, $.state = function() {
            return T
        };
        var P = [],
            N = !1,
            V = null;
        $.onUrlChange = function(e) {
            return N || (i.history && nr(t).on("popstate", c), nr(t).on("hashchange", c), N = !0), P.push(e), e
        }, $.$$checkUrlChange = h, $.baseHref = function() {
            var t = M.attr("href");
            return t ? t.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
        };
        var q = {},
            R = "",
            U = $.baseHref();
        $.cookies = function(t, e) {
            var i, o, a, s, u;
            if (!t) {
                if (v.cookie !== R)
                    for (R = v.cookie, o = R.split("; "), q = {}, s = 0; s < o.length; s++) a = o[s], u = a.indexOf("="), u > 0 && (t = d(a.substring(0, u)), q[t] === n && (q[t] = d(a.substring(u + 1))));
                return q
            }
            e === n ? v.cookie = encodeURIComponent(t) + "=;path=" + U + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : w(e) && (i = (v.cookie = encodeURIComponent(t) + "=" + encodeURIComponent(e) + ";path=" + U).length + 1, i > 4096 && r.warn("Cookie '" + t + "' possibly not set or overflowed because it was too large (" + i + " > 4096 bytes)!"))
        }, $.defer = function(t, e) {
            var n;
            return S++, n = b(function() {
                delete C[n], a(t)
            }, e || 0), C[n] = !0, n
        }, $.defer.cancel = function(t) {
            return C[t] ? (delete C[t], x(t), a(p), !0) : !1
        }
    }

    function Yt() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function(t, e, n, r) {
            return new Wt(t, r, e, n)
        }]
    }

    function Jt() {
        this.$get = function() {
            function t(t, n) {
                function i(t) {
                    t != h && (d ? d == t && (d = t.n) : d = t, o(t.n, t.p), o(t, h), h = t, h.n = null)
                }

                function o(t, e) {
                    t != e && (t && (t.p = e), e && (e.n = t))
                }
                if (t in e) throw r("$cacheFactory")("iid", "CacheId '{0}' is already taken!", t);
                var a = 0,
                    s = f({}, n, {
                        id: t
                    }),
                    u = {},
                    c = n && n.capacity || Number.MAX_VALUE,
                    l = {},
                    h = null,
                    d = null;
                return e[t] = {
                    put: function(t, e) {
                        if (c < Number.MAX_VALUE) {
                            var n = l[t] || (l[t] = {
                                key: t
                            });
                            i(n)
                        }
                        if (!m(e)) return t in u || a++, u[t] = e, a > c && this.remove(d.key), e
                    },
                    get: function(t) {
                        if (c < Number.MAX_VALUE) {
                            var e = l[t];
                            if (!e) return;
                            i(e)
                        }
                        return u[t]
                    },
                    remove: function(t) {
                        if (c < Number.MAX_VALUE) {
                            var e = l[t];
                            if (!e) return;
                            e == h && (h = e.p), e == d && (d = e.n), o(e.n, e.p), delete l[t]
                        }
                        delete u[t], a--
                    },
                    removeAll: function() {
                        u = {}, a = 0, l = {}, h = d = null
                    },
                    destroy: function() {
                        u = null, s = null, l = null, delete e[t]
                    },
                    info: function() {
                        return f({}, s, {
                            size: a
                        })
                    }
                }
            }
            var e = {};
            return t.info = function() {
                var t = {};
                return o(e, function(e, n) {
                    t[n] = e.info()
                }), t
            }, t.get = function(t) {
                return e[t]
            }, t
        }
    }

    function Kt() {
        this.$get = ["$cacheFactory", function(t) {
            return t("templates")
        }]
    }

    function Zt(t, r) {
        function i(t, e) {
            var n = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,
                r = {};
            return o(t, function(t, i) {
                var o = t.match(n);
                if (!o) throw Zr("iscp", "Invalid isolate scope definition for directive '{0}'. Definition: {... {1}: '{2}' ...}", e, i, t);
                r[i] = {
                    mode: o[1][0],
                    collection: "*" === o[2],
                    optional: "?" === o[3],
                    attrName: o[4] || i
                }
            }), r
        }
        var a = {},
            s = "Directive",
            c = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
            l = /(([\w\-]+)(?:\:([^;]+))?;?)/,
            h = P("ngSrc,ngSrcset,src,srcset"),
            m = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
            b = /^(on[a-z]+|formaction)$/;
        this.directive = function S(e, n) {
            return at(e, "directive"), w(e) ? (it(n, "directiveFactory"), a.hasOwnProperty(e) || (a[e] = [], t.factory(e + s, ["$injector", "$exceptionHandler", function(t, n) {
                var r = [];
                return o(a[e], function(o, a) {
                    try {
                        var s = t.invoke(o);
                        C(s) ? s = {
                            compile: v(s)
                        } : !s.compile && s.link && (s.compile = v(s.link)), s.priority = s.priority || 0, s.index = a, s.name = s.name || e, s.require = s.require || s.controller && s.name, s.restrict = s.restrict || "EA", y(s.scope) && (s.$$isolateBindings = i(s.scope, s.name)), r.push(s)
                    } catch (u) {
                        n(u)
                    }
                }), r
            }])), a[e].push(n)) : o(e, u(S)), this
        }, this.aHrefSanitizationWhitelist = function(t) {
            return g(t) ? (r.aHrefSanitizationWhitelist(t), this) : r.aHrefSanitizationWhitelist()
        }, this.imgSrcSanitizationWhitelist = function(t) {
            return g(t) ? (r.imgSrcSanitizationWhitelist(t), this) : r.imgSrcSanitizationWhitelist()
        };
        var x = !0;
        this.debugInfoEnabled = function(t) {
            return g(t) ? (x = t, this) : x
        }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function(t, r, i, u, v, g, S, E, A, T, O) {
            function D(t, e) {
                try {
                    t.addClass(e)
                } catch (n) {}
            }

            function M(t, e, n, r, i) {
                t instanceof nr || (t = nr(t)), o(t, function(e, n) {
                    e.nodeType == xr && e.nodeValue.match(/\S+/) && (t[n] = nr(e).wrap("<span></span>").parent()[0])
                });
                var a = P(t, e, t, n, r, i);
                M.$$addScopeClass(t);
                var s = null;
                return function(e, n, r) {
                    it(e, "scope"), r = r || {};
                    var i = r.parentBoundTranscludeFn,
                        o = r.transcludeControllers,
                        u = r.futureParentElement;
                    i && i.$$boundTransclude && (i = i.$$boundTransclude), s || (s = j(u));
                    var c;
                    if (c = "html" !== s ? nr(X(s, nr("<div>").append(t).html())) : n ? Fr.clone.call(t) : t, o)
                        for (var l in o) c.data("$" + l + "Controller", o[l].instance);
                    return M.$$addScopeInfo(c, e), n && n(c, e), a && a(e, c, c, i), c
                }
            }

            function j(t) {
                var e = t && t[0];
                return e && "foreignobject" !== N(e) && e.toString().match(/SVG/) ? "svg" : "html"
            }

            function P(t, e, r, i, o, a) {
                function s(t, r, i, o) {
                    var a, s, u, c, l, f, h, d, v;
                    if (p) {
                        var m = r.length;
                        for (v = new Array(m), l = 0; l < $.length; l += 3) h = $[l], v[h] = r[h]
                    } else v = r;
                    for (l = 0, f = $.length; f > l;) u = v[$[l++]], a = $[l++], s = $[l++], a ? (a.scope ? (c = t.$new(), M.$$addScopeInfo(nr(u), c)) : c = t, d = a.transcludeOnThisElement ? q(t, a.transclude, o, a.elementTranscludeOnThisElement) : !a.templateOnThisElement && o ? o : !o && e ? q(t, e) : null, a(s, c, u, i, d)) : s && s(t, u.childNodes, n, o)
                }
                for (var u, c, l, f, h, d, p, $ = [], v = 0; v < t.length; v++) u = new at, c = R(t[v], [], u, 0 === v ? i : n, o), l = c.length ? _(c, t[v], u, e, r, null, [], [], a) : null, l && l.scope && M.$$addScopeClass(u.$$element), h = l && l.terminal || !(f = t[v].childNodes) || !f.length ? null : P(f, l ? (l.transcludeOnThisElement || !l.templateOnThisElement) && l.transclude : e), (l || h) && ($.push(v, l, h), d = !0, p = p || l), a = null;
                return d ? s : null
            }

            function q(t, e, n, r) {
                var i = function(r, i, o, a, s) {
                    return r || (r = t.$new(!1, s), r.$$transcluded = !0), e(r, i, {
                        parentBoundTranscludeFn: n,
                        transcludeControllers: o,
                        futureParentElement: a
                    })
                };
                return i
            }

            function R(t, e, n, r, i) {
                var o, a, s = t.nodeType,
                    u = n.$attr;
                switch (s) {
                    case wr:
                        L(e, Xt(N(t)), "E", r, i);
                        for (var f, h, d, p, $, v, m = t.attributes, g = 0, b = m && m.length; b > g; g++) {
                            var x = !1,
                                C = !1;
                            f = m[g], h = f.name, $ = pr(f.value), p = Xt(h), (v = ft.test(p)) && (h = h.replace(Xr, "").substr(8).replace(/_(.)/g, function(t, e) {
                                return e.toUpperCase()
                            }));
                            var S = p.replace(/(Start|End)$/, "");
                            G(S) && p === S + "Start" && (x = h, C = h.substr(0, h.length - 5) + "end", h = h.substr(0, h.length - 6)), d = Xt(h.toLowerCase()), u[d] = h, (v || !n.hasOwnProperty(d)) && (n[d] = $, qt(t, d) && (n[d] = !0)), tt(t, e, $, d, v), L(e, d, "A", r, i, x, C)
                        }
                        if (a = t.className, y(a) && (a = a.animVal), w(a) && "" !== a)
                            for (; o = l.exec(a);) d = Xt(o[2]), L(e, d, "C", r, i) && (n[d] = pr(o[3])), a = a.substr(o.index + o[0].length);
                        break;
                    case xr:
                        Z(e, t.nodeValue);
                        break;
                    case Cr:
                        try {
                            o = c.exec(t.nodeValue), o && (d = Xt(o[1]), L(e, d, "M", r, i) && (n[d] = pr(o[2])))
                        } catch (E) {}
                }
                return e.sort(J), e
            }

            function U(t, e, n) {
                var r = [],
                    i = 0;
                if (e && t.hasAttribute && t.hasAttribute(e)) {
                    do {
                        if (!t) throw Zr("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", e, n);
                        t.nodeType == wr && (t.hasAttribute(e) && i++, t.hasAttribute(n) && i--), r.push(t), t = t.nextSibling
                    } while (i > 0)
                } else r.push(t);
                return nr(r)
            }

            function H(t, e, n) {
                return function(r, i, o, a, s) {
                    return i = U(i[0], e, n), t(r, i, o, a, s)
                }
            }

            function _(t, a, s, u, c, l, f, h, d) {
                function p(t, e, n, r) {
                    t && (n && (t = H(t, n, r)), t.require = E.require, t.directiveName = A, (N === E || E.$$isolateScope) && (t = rt(t, {
                        isolateScope: !0
                    })), f.push(t)), e && (n && (e = H(e, n, r)), e.require = E.require, e.directiveName = A, (N === E || E.$$isolateScope) && (e = rt(e, {
                        isolateScope: !0
                    })), h.push(e))
                }

                function $(t, e, n, r) {
                    var i, a, s = "data",
                        u = !1,
                        c = n;
                    if (w(e)) {
                        if (a = e.match(m), e = e.substring(a[0].length), a[3] && (a[1] ? a[3] = null : a[1] = a[3]), "^" === a[1] ? s = "inheritedData" : "^^" === a[1] && (s = "inheritedData", c = n.parent()), "?" === a[2] && (u = !0), i = null, r && "data" === s && (i = r[e]) && (i = i.instance), i = i || c[s]("$" + e + "Controller"), !i && !u) throw Zr("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", e, t);
                        return i || null
                    }
                    return dr(e) && (i = [], o(e, function(e) {
                        i.push($(t, e, n, r))
                    })), i
                }

                function b(t, e, i, u, c) {
                    function l(t, e, r) {
                        var i;
                        return k(t) || (r = e, e = t, t = n), G && (i = b), r || (r = G ? C.parent() : C), c(t, e, i, r, O)
                    }
                    var d, p, m, y, w, b, x, C, E;
                    if (a === i ? (E = s, C = s.$$element) : (C = nr(i), E = new at(C, s)), N && (w = e.$new(!0)), c && (x = l, x.$$boundTransclude = c), P && (S = {}, b = {}, o(P, function(t) {
                            var n, r = {
                                $scope: t === N || t.$$isolateScope ? w : e,
                                $element: C,
                                $attrs: E,
                                $transclude: x
                            };
                            y = t.controller, "@" == y && (y = E[t.name]), n = g(y, r, !0, t.controllerAs), b[t.name] = n, G || C.data("$" + t.name + "Controller", n.instance), S[t.name] = n
                        })), N) {
                        M.$$addScopeInfo(C, w, !0, !(V && (V === N || V === N.$$originalDirective))), M.$$addScopeClass(C, !0);
                        var A = S && S[N.name],
                            T = w;
                        A && A.identifier && N.bindToController === !0 && (T = A.instance), o(w.$$isolateBindings = N.$$isolateBindings, function(t, n) {
                            var i, o, a, s, u = t.attrName,
                                c = t.optional,
                                l = t.mode;
                            switch (l) {
                                case "@":
                                    E.$observe(u, function(t) {
                                        T[n] = t
                                    }), E.$$observers[u].$$scope = e, E[u] && (T[n] = r(E[u])(e));
                                    break;
                                case "=":
                                    if (c && !E[u]) return;
                                    o = v(E[u]), s = o.literal ? I : function(t, e) {
                                        return t === e || t !== t && e !== e
                                    }, a = o.assign || function() {
                                        throw i = T[n] = o(e), Zr("nonassign", "Expression '{0}' used with directive '{1}' is non-assignable!", E[u], N.name)
                                    }, i = T[n] = o(e);
                                    var f = function(t) {
                                        return s(t, T[n]) || (s(t, i) ? a(e, t = T[n]) : T[n] = t), i = t
                                    };
                                    f.$stateful = !0;
                                    var h;
                                    h = t.collection ? e.$watchCollection(E[u], f) : e.$watch(v(E[u], f), null, o.literal), w.$on("$destroy", h);
                                    break;
                                case "&":
                                    o = v(E[u]), T[n] = function(t) {
                                        return o(e, t)
                                    }
                            }
                        })
                    }
                    for (S && (o(S, function(t) {
                            t()
                        }), S = null), d = 0, p = f.length; p > d; d++) m = f[d], ot(m, m.isolateScope ? w : e, C, E, m.require && $(m.directiveName, m.require, C, b), x);
                    var O = e;
                    for (N && (N.template || null === N.templateUrl) && (O = w), t && t(O, i.childNodes, n, c), d = h.length - 1; d >= 0; d--) m = h[d], ot(m, m.isolateScope ? w : e, C, E, m.require && $(m.directiveName, m.require, C, b), x)
                }
                d = d || {};
                for (var x, S, E, A, T, O, D, j = -Number.MAX_VALUE, P = d.controllerDirectives, N = d.newIsolateScopeDirective, V = d.templateDirective, q = d.nonTlbTranscludeDirective, _ = !1, L = !1, G = d.hasElementTranscludeDirective, J = s.$$element = nr(a), Z = l, Q = u, tt = 0, nt = t.length; nt > tt; tt++) {
                    E = t[tt];
                    var it = E.$$start,
                        st = E.$$end;
                    if (it && (J = U(a, it, st)), T = n, j > E.priority) break;
                    if ((D = E.scope) && (E.templateUrl || (y(D) ? (K("new/isolated scope", N || x, E, J), N = E) : K("new/isolated scope", N, E, J)), x = x || E), A = E.name, !E.templateUrl && E.controller && (D = E.controller, P = P || {}, K("'" + A + "' controller", P[A], E, J), P[A] = E), (D = E.transclude) && (_ = !0, E.$$tlb || (K("transclusion", q, E, J), q = E), "element" == D ? (G = !0, j = E.priority, T = J, J = s.$$element = nr(e.createComment(" " + A + ": " + s[A] + " ")), a = J[0], et(c, F(T), a), Q = M(T, u, j, Z && Z.name, {
                            nonTlbTranscludeDirective: q
                        })) : (T = nr(bt(a)).contents(), J.empty(), Q = M(T, u))), E.template)
                        if (L = !0, K("template", V, E, J), V = E, D = C(E.template) ? E.template(J, s) : E.template, D = lt(D), E.replace) {
                            if (Z = E, T = vt(D) ? [] : te(X(E.templateNamespace, pr(D))), a = T[0], 1 != T.length || a.nodeType !== wr) throw Zr("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", A, "");
                            et(c, J, a);
                            var ut = {
                                    $attr: {}
                                },
                                ct = R(a, [], ut),
                                ft = t.splice(tt + 1, t.length - (tt + 1));
                            N && B(ct), t = t.concat(ct).concat(ft), W(s, ut), nt = t.length
                        } else J.html(D);
                    if (E.templateUrl) L = !0, K("template", V, E, J), V = E, E.replace && (Z = E), b = Y(t.splice(tt, t.length - tt), J, s, c, _ && Q, f, h, {
                        controllerDirectives: P,
                        newIsolateScopeDirective: N,
                        templateDirective: V,
                        nonTlbTranscludeDirective: q
                    }), nt = t.length;
                    else if (E.compile) try {
                        O = E.compile(J, s, Q), C(O) ? p(null, O, it, st) : O && p(O.pre, O.post, it, st)
                    } catch (ht) {
                        i(ht, z(J))
                    }
                    E.terminal && (b.terminal = !0, j = Math.max(j, E.priority))
                }
                return b.scope = x && x.scope === !0, b.transcludeOnThisElement = _, b.elementTranscludeOnThisElement = G, b.templateOnThisElement = L, b.transclude = Q, d.hasElementTranscludeDirective = G, b
            }

            function B(t) {
                for (var e = 0, n = t.length; n > e; e++) t[e] = d(t[e], {
                    $$isolateScope: !0
                })
            }

            function L(e, r, o, u, c, l, f) {
                if (r === c) return null;
                var h = null;
                if (a.hasOwnProperty(r))
                    for (var p, $ = t.get(r + s), v = 0, m = $.length; m > v; v++) try {
                        p = $[v], (u === n || u > p.priority) && -1 != p.restrict.indexOf(o) && (l && (p = d(p, {
                            $$start: l,
                            $$end: f
                        })), e.push(p), h = p)
                    } catch (g) {
                        i(g)
                    }
                return h
            }

            function G(e) {
                if (a.hasOwnProperty(e))
                    for (var n, r = t.get(e + s), i = 0, o = r.length; o > i; i++)
                        if (n = r[i], n.multiElement) return !0;
                return !1
            }

            function W(t, e) {
                var n = e.$attr,
                    r = t.$attr,
                    i = t.$$element;
                o(t, function(r, i) {
                    "$" != i.charAt(0) && (e[i] && e[i] !== r && (r += ("style" === i ? ";" : " ") + e[i]), t.$set(i, r, !0, n[i]))
                }), o(e, function(e, o) {
                    "class" == o ? (D(i, e), t["class"] = (t["class"] ? t["class"] + " " : "") + e) : "style" == o ? (i.attr("style", i.attr("style") + ";" + e), t.style = (t.style ? t.style + ";" : "") + e) : "$" == o.charAt(0) || t.hasOwnProperty(o) || (t[o] = e, r[o] = n[o])
                })
            }

            function Y(t, e, n, r, i, a, s, c) {
                var l, f, h = [],
                    p = e[0],
                    $ = t.shift(),
                    v = d($, {
                        templateUrl: null,
                        transclude: null,
                        replace: null,
                        $$originalDirective: $
                    }),
                    m = C($.templateUrl) ? $.templateUrl(e, n) : $.templateUrl,
                    g = $.templateNamespace;
                return e.empty(), u(m).then(function(u) {
                        var d, w, b, x;
                        if (u = lt(u), $.replace) {
                            if (b = vt(u) ? [] : te(X(g, pr(u))), d = b[0], 1 != b.length || d.nodeType !== wr) throw Zr("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", $.name, m);
                            w = {
                                $attr: {}
                            }, et(r, e, d);
                            var C = R(d, [], w);
                            y($.scope) && B(C), t = C.concat(t), W(n, w)
                        } else d = p, e.html(u);
                        for (t.unshift(v), l = _(t, d, n, i, e, $, a, s, c), o(r, function(t, n) {
                                t == d && (r[n] = e[0])
                            }), f = P(e[0].childNodes, i); h.length;) {
                            var S = h.shift(),
                                E = h.shift(),
                                k = h.shift(),
                                A = h.shift(),
                                T = e[0];
                            if (!S.$$destroyed) {
                                if (E !== p) {
                                    var O = E.className;
                                    c.hasElementTranscludeDirective && $.replace || (T = bt(d)), et(k, nr(E), T), D(nr(T), O)
                                }
                                x = l.transcludeOnThisElement ? q(S, l.transclude, A) : A, l(f, S, T, r, x)
                            }
                        }
                        h = null
                    }),
                    function(t, e, n, r, i) {
                        var o = i;
                        e.$$destroyed || (h ? h.push(e, n, r, o) : (l.transcludeOnThisElement && (o = q(e, l.transclude, i)), l(f, e, n, r, o)))
                    }
            }

            function J(t, e) {
                var n = e.priority - t.priority;
                return 0 !== n ? n : t.name !== e.name ? t.name < e.name ? -1 : 1 : t.index - e.index
            }

            function K(t, e, n, r) {
                if (e) throw Zr("multidir", "Multiple directives [{0}, {1}] asking for {2} on: {3}", e.name, n.name, t, z(r))
            }

            function Z(t, e) {
                var n = r(e, !0);
                n && t.push({
                    priority: 0,
                    compile: function(t) {
                        var e = t.parent(),
                            r = !!e.length;
                        return r && M.$$addBindingClass(e),
                            function(t, e) {
                                var i = e.parent();
                                r || M.$$addBindingClass(i), M.$$addBindingInfo(i, n.expressions), t.$watch(n, function(t) {
                                    e[0].nodeValue = t
                                })
                            }
                    }
                })
            }

            function X(t, n) {
                switch (t = Kn(t || "html")) {
                    case "svg":
                    case "math":
                        var r = e.createElement("div");
                        return r.innerHTML = "<" + t + ">" + n + "</" + t + ">", r.childNodes[0].childNodes;
                    default:
                        return n
                }
            }

            function Q(t, e) {
                if ("srcdoc" == e) return A.HTML;
                var n = N(t);
                return "xlinkHref" == e || "form" == n && "action" == e || "img" != n && ("src" == e || "ngSrc" == e) ? A.RESOURCE_URL : void 0
            }

            function tt(t, e, n, i, o) {
                var a = Q(t, i);
                o = h[i] || o;
                var s = r(n, !0, a, o);
                if (s) {
                    if ("multiple" === i && "select" === N(t)) throw Zr("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", z(t));
                    e.push({
                        priority: 100,
                        compile: function() {
                            return {
                                pre: function(t, e, u) {
                                    var c = u.$$observers || (u.$$observers = {});
                                    if (b.test(i)) throw Zr("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
                                    var l = u[i];
                                    l !== n && (s = l && r(l, !0, a, o), n = l), s && (u[i] = s(t), (c[i] || (c[i] = [])).$$inter = !0, (u.$$observers && u.$$observers[i].$$scope || t).$watch(s, function(t, e) {
                                        "class" === i && t != e ? u.$updateClass(t, e) : u.$set(i, t)
                                    }))
                                }
                            }
                        }
                    })
                }
            }

            function et(t, n, r) {
                var i, o, a = n[0],
                    s = n.length,
                    u = a.parentNode;
                if (t)
                    for (i = 0, o = t.length; o > i; i++)
                        if (t[i] == a) {
                            t[i++] = r;
                            for (var c = i, l = c + s - 1, f = t.length; f > c; c++, l++) f > l ? t[c] = t[l] : delete t[c];
                            t.length -= s - 1, t.context === a && (t.context = r);
                            break
                        }
                u && u.replaceChild(r, a);
                var h = e.createDocumentFragment();
                h.appendChild(a), nr(r).data(nr(a).data()), rr ? (hr = !0, rr.cleanData([a])) : delete nr.cache[a[nr.expando]];
                for (var d = 1, p = n.length; p > d; d++) {
                    var $ = n[d];
                    nr($).remove(), h.appendChild($), delete n[d]
                }
                n[0] = r, n.length = 1
            }

            function rt(t, e) {
                return f(function() {
                    return t.apply(null, arguments)
                }, t, e)
            }

            function ot(t, e, n, r, o, a) {
                try {
                    t(e, n, r, o, a)
                } catch (s) {
                    i(s, z(n))
                }
            }
            var at = function(t, e) {
                if (e) {
                    var n, r, i, o = Object.keys(e);
                    for (n = 0, r = o.length; r > n; n++) i = o[n], this[i] = e[i]
                } else this.$attr = {};
                this.$$element = t
            };
            at.prototype = {
                $normalize: Xt,
                $addClass: function(t) {
                    t && t.length > 0 && T.addClass(this.$$element, t)
                },
                $removeClass: function(t) {
                    t && t.length > 0 && T.removeClass(this.$$element, t)
                },
                $updateClass: function(t, e) {
                    var n = Qt(t, e);
                    n && n.length && T.addClass(this.$$element, n);
                    var r = Qt(e, t);
                    r && r.length && T.removeClass(this.$$element, r)
                },
                $set: function(t, e, r, a) {
                    var s, u = this.$$element[0],
                        c = qt(u, t),
                        l = Rt(u, t),
                        f = t;
                    if (c ? (this.$$element.prop(t, e), a = c) : l && (this[l] = e, f = l), this[t] = e, a ? this.$attr[t] = a : (a = this.$attr[t], a || (this.$attr[t] = a = nt(t, "-"))), s = N(this.$$element), "a" === s && "href" === t || "img" === s && "src" === t) this[t] = e = O(e, "src" === t);
                    else if ("img" === s && "srcset" === t) {
                        for (var h = "", d = pr(e), p = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, $ = /\s/.test(d) ? p : /(,)/, v = d.split($), m = Math.floor(v.length / 2), g = 0; m > g; g++) {
                            var y = 2 * g;
                            h += O(pr(v[y]), !0), h += " " + pr(v[y + 1])
                        }
                        var w = pr(v[2 * g]).split(/\s/);
                        h += O(pr(w[0]), !0), 2 === w.length && (h += " " + pr(w[1])), this[t] = e = h
                    }
                    r !== !1 && (null === e || e === n ? this.$$element.removeAttr(a) : this.$$element.attr(a, e));
                    var b = this.$$observers;
                    b && o(b[f], function(t) {
                        try {
                            t(e)
                        } catch (n) {
                            i(n)
                        }
                    })
                },
                $observe: function(t, e) {
                    var n = this,
                        r = n.$$observers || (n.$$observers = ct()),
                        i = r[t] || (r[t] = []);
                    return i.push(e), S.$evalAsync(function() {
                            !i.$$inter && n.hasOwnProperty(t) && e(n[t])
                        }),
                        function() {
                            V(i, e)
                        }
                }
            };
            var st = r.startSymbol(),
                ut = r.endSymbol(),
                lt = "{{" == st || "}}" == ut ? $ : function(t) {
                    return t.replace(/\{\{/g, st).replace(/}}/g, ut)
                },
                ft = /^ngAttr[A-Z]/;
            return M.$$addBindingInfo = x ? function(t, e) {
                var n = t.data("$binding") || [];
                dr(e) ? n = n.concat(e) : n.push(e), t.data("$binding", n)
            } : p, M.$$addBindingClass = x ? function(t) {
                D(t, "ng-binding")
            } : p, M.$$addScopeInfo = x ? function(t, e, n, r) {
                var i = n ? r ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope";
                t.data(i, e)
            } : p, M.$$addScopeClass = x ? function(t, e) {
                D(t, e ? "ng-isolate-scope" : "ng-scope")
            } : p, M
        }]
    }

    function Xt(t) {
        return $t(t.replace(Xr, ""))
    }

    function Qt(t, e) {
        var n = "",
            r = t.split(/\s+/),
            i = e.split(/\s+/);
        t: for (var o = 0; o < r.length; o++) {
            for (var a = r[o], s = 0; s < i.length; s++)
                if (a == i[s]) continue t;
            n += (n.length > 0 ? " " : "") + a
        }
        return n
    }

    function te(t) {
        t = nr(t);
        var e = t.length;
        if (1 >= e) return t;
        for (; e--;) {
            var n = t[e];
            n.nodeType === Cr && ar.call(t, e, 1)
        }
        return t
    }

    function ee() {
        var t = {},
            e = !1,
            i = /^(\S+)(\s+as\s+(\w+))?$/;
        this.register = function(e, n) {
            at(e, "controller"), y(e) ? f(t, e) : t[e] = n
        }, this.allowGlobals = function() {
            e = !0
        }, this.$get = ["$injector", "$window", function(o, a) {
            function s(t, e, n, i) {
                if (!t || !y(t.$scope)) throw r("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", i, e);
                t.$scope[e] = n
            }
            return function(r, u, c, l) {
                var h, d, p, $;
                if (c = c === !0, l && w(l) && ($ = l), w(r)) {
                    if (d = r.match(i), !d) throw Qr("ctrlfmt", "Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.", r);
                    p = d[1], $ = $ || d[3], r = t.hasOwnProperty(p) ? t[p] : st(u.$scope, p, !0) || (e ? st(a, p, !0) : n), ot(r, p, !0)
                }
                if (c) {
                    var v = (dr(r) ? r[r.length - 1] : r).prototype;
                    return h = Object.create(v || null), $ && s(u, $, h, p || r.name), f(function() {
                        return o.invoke(r, h, u, p), h
                    }, {
                        instance: h,
                        identifier: $
                    })
                }
                return h = o.instantiate(r, u, p), $ && s(u, $, h, p || r.name), h
            }
        }]
    }

    function ne() {
        this.$get = ["$window", function(t) {
            return nr(t.document)
        }]
    }

    function re() {
        this.$get = ["$log", function(t) {
            return function(e, n) {
                t.error.apply(t, arguments)
            }
        }]
    }

    function ie(t, e) {
        if (w(t)) {
            var n = t.replace(ii, "").trim();
            if (n) {
                var r = e("Content-Type");
                (r && 0 === r.indexOf(ti) || oe(n)) && (t = L(n))
            }
        }
        return t
    }

    function oe(t) {
        var e = t.match(ni);
        return e && ri[e[0]].test(t)
    }

    function ae(t) {
        var e, n, r, i = ct();
        return t ? (o(t.split("\n"), function(t) {
            r = t.indexOf(":"), e = Kn(pr(t.substr(0, r))), n = pr(t.substr(r + 1)), e && (i[e] = i[e] ? i[e] + ", " + n : n)
        }), i) : i
    }

    function se(t) {
        var e = y(t) ? t : n;
        return function(n) {
            if (e || (e = ae(t)), n) {
                var r = e[Kn(n)];
                return void 0 === r && (r = null), r
            }
            return e
        }
    }

    function ue(t, e, n, r) {
        return C(r) ? r(t, e, n) : (o(r, function(r) {
            t = r(t, e, n)
        }), t)
    }

    function ce(t) {
        return t >= 200 && 300 > t
    }

    function le() {
        var t = this.defaults = {
                transformResponse: [ie],
                transformRequest: [function(t) {
                    return !y(t) || A(t) || O(t) || T(t) ? t : B(t)
                }],
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    },
                    post: R(ei),
                    put: R(ei),
                    patch: R(ei)
                },
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN"
            },
            e = !1;
        this.useApplyAsync = function(t) {
            return g(t) ? (e = !!t, this) : e
        };
        var i = this.interceptors = [];
        this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function(a, u, c, l, h, d) {
            function p(e) {
                function i(t) {
                    var e = f({}, t);
                    return t.data ? e.data = ue(t.data, t.headers, t.status, u.transformResponse) : e.data = t.data, ce(t.status) ? e : h.reject(e)
                }

                function a(t) {
                    var e, n = {};
                    return o(t, function(t, r) {
                        C(t) ? (e = t(), null != e && (n[r] = e)) : n[r] = t
                    }), n
                }

                function s(e) {
                    var n, r, i, o = t.headers,
                        s = f({}, e.headers);
                    o = f({}, o.common, o[Kn(e.method)]);
                    t: for (n in o) {
                        r = Kn(n);
                        for (i in s)
                            if (Kn(i) === r) continue t;
                        s[n] = o[n]
                    }
                    return a(s)
                }
                if (!lr.isObject(e)) throw r("$http")("badreq", "Http request configuration must be an object.  Received: {0}", e);
                var u = f({
                    method: "get",
                    transformRequest: t.transformRequest,
                    transformResponse: t.transformResponse
                }, e);
                u.headers = s(e), u.method = Xn(u.method);
                var c = function(e) {
                        var r = e.headers,
                            a = ue(e.data, se(r), n, e.transformRequest);
                        return m(a) && o(r, function(t, e) {
                            "content-type" === Kn(e) && delete r[e]
                        }), m(e.withCredentials) && !m(t.withCredentials) && (e.withCredentials = t.withCredentials), b(e, a).then(i, i)
                    },
                    l = [c, n],
                    d = h.when(u);
                for (o(k, function(t) {
                        (t.request || t.requestError) && l.unshift(t.request, t.requestError), (t.response || t.responseError) && l.push(t.response, t.responseError)
                    }); l.length;) {
                    var p = l.shift(),
                        $ = l.shift();
                    d = d.then(p, $)
                }
                return d.success = function(t) {
                    return ot(t, "fn"), d.then(function(e) {
                        t(e.data, e.status, e.headers, u)
                    }), d
                }, d.error = function(t) {
                    return ot(t, "fn"), d.then(null, function(e) {
                        t(e.data, e.status, e.headers, u)
                    }), d
                }, d
            }

            function $(t) {
                o(arguments, function(t) {
                    p[t] = function(e, n) {
                        return p(f(n || {}, {
                            method: t,
                            url: e
                        }))
                    }
                })
            }

            function v(t) {
                o(arguments, function(t) {
                    p[t] = function(e, n, r) {
                        return p(f(r || {}, {
                            method: t,
                            url: e,
                            data: n
                        }))
                    }
                })
            }

            function b(r, i) {
                function o(t, n, r, i) {
                    function o() {
                        s(n, t, r, i)
                    }
                    d && (ce(t) ? d.put(x, [t, n, ae(r), i]) : d.remove(x)), e ? l.$applyAsync(o) : (o(), l.$$phase || l.$apply())
                }

                function s(t, e, n, i) {
                    e = e >= -1 ? e : 0, (ce(e) ? v.resolve : v.reject)({
                        data: t,
                        status: e,
                        headers: se(n),
                        config: r,
                        statusText: i
                    })
                }

                function c(t) {
                    s(t.data, t.status, R(t.headers()), t.statusText)
                }

                function f() {
                    var t = p.pendingRequests.indexOf(r); - 1 !== t && p.pendingRequests.splice(t, 1)
                }
                var d, $, v = h.defer(),
                    w = v.promise,
                    b = r.headers,
                    x = S(r.url, r.params);
                if (p.pendingRequests.push(r), w.then(f, f), !r.cache && !t.cache || r.cache === !1 || "GET" !== r.method && "JSONP" !== r.method || (d = y(r.cache) ? r.cache : y(t.cache) ? t.cache : E), d && ($ = d.get(x), g($) ? M($) ? $.then(c, c) : dr($) ? s($[1], $[0], R($[2]), $[3]) : s($, 200, {}, "OK") : d.put(x, w)), m($)) {
                    var C = an(r.url) ? u.cookies()[r.xsrfCookieName || t.xsrfCookieName] : n;
                    C && (b[r.xsrfHeaderName || t.xsrfHeaderName] = C), a(r.method, x, i, o, b, r.timeout, r.withCredentials, r.responseType)
                }
                return w
            }

            function S(t, e) {
                if (!e) return t;
                var n = [];
                return s(e, function(t, e) {
                    null === t || m(t) || (dr(t) || (t = [t]), o(t, function(t) {
                        y(t) && (t = x(t) ? t.toISOString() : B(t)), n.push(K(e) + "=" + K(t))
                    }))
                }), n.length > 0 && (t += (-1 == t.indexOf("?") ? "?" : "&") + n.join("&")), t
            }
            var E = c("$http"),
                k = [];
            return o(i, function(t) {
                k.unshift(w(t) ? d.get(t) : d.invoke(t))
            }), p.pendingRequests = [], $("get", "delete", "head", "jsonp"), v("post", "put", "patch"), p.defaults = t, p
        }]
    }

    function fe() {
        return new t.XMLHttpRequest
    }

    function he() {
        this.$get = ["$browser", "$window", "$document", function(t, e, n) {
            return de(t, fe, t.defer, e.angular.callbacks, n[0])
        }]
    }

    function de(t, e, r, i, a) {
        function s(t, e, n) {
            var r = a.createElement("script"),
                o = null;
            return r.type = "text/javascript", r.src = t, r.async = !0, o = function(t) {
                Dr(r, "load", o), Dr(r, "error", o), a.body.removeChild(r), r = null;
                var s = -1,
                    u = "unknown";
                t && ("load" !== t.type || i[e].called || (t = {
                    type: "error"
                }), u = t.type, s = "error" === t.type ? 404 : 200), n && n(s, u)
            }, Or(r, "load", o), Or(r, "error", o), a.body.appendChild(r), o
        }
        return function(a, u, c, l, f, h, d, $) {
            function v() {
                w && w(), b && b.abort()
            }

            function m(e, i, o, a, s) {
                S !== n && r.cancel(S), w = b = null, e(i, o, a, s), t.$$completeOutstandingRequest(p)
            }
            if (t.$$incOutstandingRequestCount(), u = u || t.url(), "jsonp" == Kn(a)) {
                var y = "_" + (i.counter++).toString(36);
                i[y] = function(t) {
                    i[y].data = t, i[y].called = !0
                };
                var w = s(u.replace("JSON_CALLBACK", "angular.callbacks." + y), y, function(t, e) {
                    m(l, t, i[y].data, "", e), i[y] = p
                })
            } else {
                var b = e();
                b.open(a, u, !0), o(f, function(t, e) {
                    g(t) && b.setRequestHeader(e, t)
                }), b.onload = function() {
                    var t = b.statusText || "",
                        e = "response" in b ? b.response : b.responseText,
                        n = 1223 === b.status ? 204 : b.status;
                    0 === n && (n = e ? 200 : "file" == on(u).protocol ? 404 : 0), m(l, n, e, b.getAllResponseHeaders(), t)
                };
                var x = function() {
                    m(l, -1, null, null, "")
                };
                if (b.onerror = x, b.onabort = x, d && (b.withCredentials = !0), $) try {
                    b.responseType = $
                } catch (C) {
                    if ("json" !== $) throw C
                }
                b.send(c || null)
            }
            if (h > 0) var S = r(v, h);
            else M(h) && h.then(v)
        }
    }

    function pe() {
        var t = "{{",
            e = "}}";
        this.startSymbol = function(e) {
            return e ? (t = e, this) : t
        }, this.endSymbol = function(t) {
            return t ? (e = t, this) : e
        }, this.$get = ["$parse", "$exceptionHandler", "$sce", function(n, r, i) {
            function o(t) {
                return "\\\\\\" + t
            }

            function a(o, a, h, d) {
                function p(n) {
                    return n.replace(c, t).replace(l, e)
                }

                function $(t) {
                    try {
                        return t = O(t), d && !g(t) ? t : D(t)
                    } catch (e) {
                        var n = oi("interr", "Can't interpolate: {0}\n{1}", o, e.toString());
                        r(n)
                    }
                }
                d = !!d;
                for (var v, y, w, b = 0, x = [], S = [], E = o.length, k = [], A = []; E > b;) {
                    if (-1 == (v = o.indexOf(t, b)) || -1 == (y = o.indexOf(e, v + s))) {
                        b !== E && k.push(p(o.substring(b)));
                        break
                    }
                    b !== v && k.push(p(o.substring(b, v))), w = o.substring(v + s, y), x.push(w), S.push(n(w, $)), b = y + u, A.push(k.length), k.push("")
                }
                if (h && k.length > 1) throw oi("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", o);
                if (!a || x.length) {
                    var T = function(t) {
                            for (var e = 0, n = x.length; n > e; e++) {
                                if (d && m(t[e])) return;
                                k[A[e]] = t[e]
                            }
                            return k.join("")
                        },
                        O = function(t) {
                            return h ? i.getTrusted(h, t) : i.valueOf(t)
                        },
                        D = function(t) {
                            if (null == t) return "";
                            switch (typeof t) {
                                case "string":
                                    break;
                                case "number":
                                    t = "" + t;
                                    break;
                                default:
                                    t = B(t)
                            }
                            return t
                        };
                    return f(function(t) {
                        var e = 0,
                            n = x.length,
                            i = new Array(n);
                        try {
                            for (; n > e; e++) i[e] = S[e](t);
                            return T(i)
                        } catch (a) {
                            var s = oi("interr", "Can't interpolate: {0}\n{1}", o, a.toString());
                            r(s)
                        }
                    }, {
                        exp: o,
                        expressions: x,
                        $$watchDelegate: function(t, e, n) {
                            var r;
                            return t.$watchGroup(S, function(n, i) {
                                var o = T(n);
                                C(e) && e.call(this, o, n !== i ? r : o, t), r = o
                            }, n)
                        }
                    })
                }
            }
            var s = t.length,
                u = e.length,
                c = new RegExp(t.replace(/./g, o), "g"),
                l = new RegExp(e.replace(/./g, o), "g");
            return a.startSymbol = function() {
                return t
            }, a.endSymbol = function() {
                return e
            }, a
        }]
    }

    function $e() {
        this.$get = ["$rootScope", "$window", "$q", "$$q", function(t, e, n, r) {
            function i(i, a, s, u) {
                var c = e.setInterval,
                    l = e.clearInterval,
                    f = 0,
                    h = g(u) && !u,
                    d = (h ? r : n).defer(),
                    p = d.promise;
                return s = g(s) ? s : 0, p.then(null, null, i), p.$$intervalId = c(function() {
                    d.notify(f++), s > 0 && f >= s && (d.resolve(f), l(p.$$intervalId), delete o[p.$$intervalId]), h || t.$apply()
                }, a), o[p.$$intervalId] = d, p
            }
            var o = {};
            return i.cancel = function(t) {
                return t && t.$$intervalId in o ? (o[t.$$intervalId].reject("canceled"), e.clearInterval(t.$$intervalId), delete o[t.$$intervalId], !0) : !1
            }, i
        }]
    }

    function ve() {
        this.$get = function() {
            return {
                id: "en-us",
                NUMBER_FORMATS: {
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [{
                        minInt: 1,
                        minFrac: 0,
                        maxFrac: 3,
                        posPre: "",
                        posSuf: "",
                        negPre: "-",
                        negSuf: "",
                        gSize: 3,
                        lgSize: 3
                    }, {
                        minInt: 1,
                        minFrac: 2,
                        maxFrac: 2,
                        posPre: "¤",
                        posSuf: "",
                        negPre: "(¤",
                        negSuf: ")",
                        gSize: 3,
                        lgSize: 3
                    }],
                    CURRENCY_SYM: "$"
                },
                DATETIME_FORMATS: {
                    MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
                    SHORTMONTH: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
                    DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
                    SHORTDAY: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
                    AMPMS: ["AM", "PM"],
                    medium: "MMM d, y h:mm:ss a",
                    "short": "M/d/yy h:mm a",
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    mediumDate: "MMM d, y",
                    shortDate: "M/d/yy",
                    mediumTime: "h:mm:ss a",
                    shortTime: "h:mm a",
                    ERANAMES: ["Before Christ", "Anno Domini"],
                    ERAS: ["BC", "AD"]
                },
                pluralCat: function(t) {
                    return 1 === t ? "one" : "other"
                }
            }
        }
    }

    function me(t) {
        for (var e = t.split("/"), n = e.length; n--;) e[n] = J(e[n]);
        return e.join("/")
    }

    function ge(t, e) {
        var n = on(t);
        e.$$protocol = n.protocol, e.$$host = n.hostname, e.$$port = h(n.port) || si[n.protocol] || null
    }

    function ye(t, e) {
        var n = "/" !== t.charAt(0);
        n && (t = "/" + t);
        var r = on(t);
        e.$$path = decodeURIComponent(n && "/" === r.pathname.charAt(0) ? r.pathname.substring(1) : r.pathname), e.$$search = W(r.search), e.$$hash = decodeURIComponent(r.hash), e.$$path && "/" != e.$$path.charAt(0) && (e.$$path = "/" + e.$$path)
    }

    function we(t, e) {
        return 0 === e.indexOf(t) ? e.substr(t.length) : void 0
    }

    function be(t) {
        var e = t.indexOf("#");
        return -1 == e ? t : t.substr(0, e)
    }

    function xe(t) {
        return t.replace(/(#.+)|#$/, "$1")
    }

    function Ce(t) {
        return t.substr(0, be(t).lastIndexOf("/") + 1)
    }

    function Se(t) {
        return t.substring(0, t.indexOf("/", t.indexOf("//") + 2))
    }

    function Ee(t, e, r) {
        this.$$html5 = !0, r = r || "", ge(t, this), this.$$parse = function(t) {
            var n = we(e, t);
            if (!w(n)) throw ui("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', t, e);
            ye(n, this), this.$$path || (this.$$path = "/"), this.$$compose()
        }, this.$$compose = function() {
            var t = Y(this.$$search),
                n = this.$$hash ? "#" + J(this.$$hash) : "";
            this.$$url = me(this.$$path) + (t ? "?" + t : "") + n, this.$$absUrl = e + this.$$url.substr(1)
        }, this.$$parseLinkUrl = function(i, o) {
            if (o && "#" === o[0]) return this.hash(o.slice(1)), !0;
            var a, s, u;
            return (a = we(t, i)) !== n ? (s = a, u = (a = we(r, a)) !== n ? e + (we("/", a) || a) : t + s) : (a = we(e, i)) !== n ? u = e + a : e == i + "/" && (u = e), u && this.$$parse(u), !!u
        }
    }

    function ke(t, e, n) {
        ge(t, this), this.$$parse = function(r) {
            function i(t, e, n) {
                var r, i = /^\/[A-Z]:(\/.*)/;
                return 0 === e.indexOf(n) && (e = e.replace(n, "")), i.exec(e) ? t : (r = i.exec(t), r ? r[1] : t)
            }
            var o, a = we(t, r) || we(e, r);
            m(a) || "#" !== a.charAt(0) ? this.$$html5 ? o = a : (o = "", m(a) && (t = r, this.replace())) : (o = we(n, a), m(o) && (o = a)), ye(o, this), this.$$path = i(this.$$path, o, t), this.$$compose()
        }, this.$$compose = function() {
            var e = Y(this.$$search),
                r = this.$$hash ? "#" + J(this.$$hash) : "";
            this.$$url = me(this.$$path) + (e ? "?" + e : "") + r, this.$$absUrl = t + (this.$$url ? n + this.$$url : "")
        }, this.$$parseLinkUrl = function(e, n) {
            return be(t) == be(e) ? (this.$$parse(e), !0) : !1
        }
    }

    function Ae(t, e, n) {
        this.$$html5 = !0, ke.apply(this, arguments), this.$$parseLinkUrl = function(r, i) {
            if (i && "#" === i[0]) return this.hash(i.slice(1)), !0;
            var o, a;
            return t == be(r) ? o = r : (a = we(e, r)) ? o = t + n + a : e === r + "/" && (o = e), o && this.$$parse(o), !!o
        }, this.$$compose = function() {
            var e = Y(this.$$search),
                r = this.$$hash ? "#" + J(this.$$hash) : "";
            this.$$url = me(this.$$path) + (e ? "?" + e : "") + r, this.$$absUrl = t + n + this.$$url
        }
    }

    function Te(t) {
        return function() {
            return this[t]
        }
    }

    function Oe(t, e) {
        return function(n) {
            return m(n) ? this[t] : (this[t] = e(n), this.$$compose(), this)
        }
    }

    function De() {
        var t = "",
            e = {
                enabled: !1,
                requireBase: !0,
                rewriteLinks: !0
            };
        this.hashPrefix = function(e) {
            return g(e) ? (t = e, this) : t
        }, this.html5Mode = function(t) {
            return D(t) ? (e.enabled = t, this) : y(t) ? (D(t.enabled) && (e.enabled = t.enabled), D(t.requireBase) && (e.requireBase = t.requireBase), D(t.rewriteLinks) && (e.rewriteLinks = t.rewriteLinks), this) : e
        }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function(n, r, i, o, a) {
            function s(t, e, n) {
                var i = c.url(),
                    o = c.$$state;
                try {
                    r.url(t, e, n), c.$$state = r.state()
                } catch (a) {
                    throw c.url(i), c.$$state = o, a
                }
            }

            function u(t, e) {
                n.$broadcast("$locationChangeSuccess", c.absUrl(), t, c.$$state, e)
            }
            var c, l, f, h = r.baseHref(),
                d = r.url();
            if (e.enabled) {
                if (!h && e.requireBase) throw ui("nobase", "$location in HTML5 mode requires a <base> tag to be present!");
                f = Se(d) + (h || "/"), l = i.history ? Ee : Ae
            } else f = be(d), l = ke;
            var p = Ce(f);
            c = new l(f, p, "#" + t), c.$$parseLinkUrl(d, d), c.$$state = r.state();
            var $ = /^\s*(javascript|mailto):/i;
            o.on("click", function(t) {
                if (e.rewriteLinks && !t.ctrlKey && !t.metaKey && !t.shiftKey && 2 != t.which && 2 != t.button) {
                    for (var i = nr(t.target);
                        "a" !== N(i[0]);)
                        if (i[0] === o[0] || !(i = i.parent())[0]) return;
                    var s = i.prop("href"),
                        u = i.attr("href") || i.attr("xlink:href");
                    y(s) && "[object SVGAnimatedString]" === s.toString() && (s = on(s.animVal).href), $.test(s) || !s || i.attr("target") || t.isDefaultPrevented() || c.$$parseLinkUrl(s, u) && (t.preventDefault(), c.absUrl() != r.url() && (n.$apply(), a.angular["ff-684208-preventDefault"] = !0))
                }
            }), xe(c.absUrl()) != xe(d) && r.url(c.absUrl(), !0);
            var v = !0;
            return r.onUrlChange(function(t, e) {
                return m(we(p, t)) ? void(a.location.href = t) : (n.$evalAsync(function() {
                    var r, i = c.absUrl(),
                        o = c.$$state;
                    c.$$parse(t), c.$$state = e, r = n.$broadcast("$locationChangeStart", t, i, e, o).defaultPrevented, c.absUrl() === t && (r ? (c.$$parse(i), c.$$state = o, s(i, !1, o)) : (v = !1, u(i, o)))
                }), void(n.$$phase || n.$digest()))
            }), n.$watch(function() {
                var t = xe(r.url()),
                    e = xe(c.absUrl()),
                    o = r.state(),
                    a = c.$$replace,
                    l = t !== e || c.$$html5 && i.history && o !== c.$$state;
                (v || l) && (v = !1, n.$evalAsync(function() {
                    var e = c.absUrl(),
                        r = n.$broadcast("$locationChangeStart", e, t, c.$$state, o).defaultPrevented;
                    c.absUrl() === e && (r ? (c.$$parse(t), c.$$state = o) : (l && s(e, a, o === c.$$state ? null : c.$$state), u(t, o)))
                })), c.$$replace = !1
            }), c
        }]
    }

    function Me() {
        var t = !0,
            e = this;
        this.debugEnabled = function(e) {
            return g(e) ? (t = e, this) : t
        }, this.$get = ["$window", function(n) {
            function r(t) {
                return t instanceof Error && (t.stack ? t = t.message && -1 === t.stack.indexOf(t.message) ? "Error: " + t.message + "\n" + t.stack : t.stack : t.sourceURL && (t = t.message + "\n" + t.sourceURL + ":" + t.line)), t
            }

            function i(t) {
                var e = n.console || {},
                    i = e[t] || e.log || p,
                    a = !1;
                try {
                    a = !!i.apply
                } catch (s) {}
                return a ? function() {
                    var t = [];
                    return o(arguments, function(e) {
                        t.push(r(e))
                    }), i.apply(e, t)
                } : function(t, e) {
                    i(t, null == e ? "" : e)
                }
            }
            return {
                log: i("log"),
                info: i("info"),
                warn: i("warn"),
                error: i("error"),
                debug: function() {
                    var n = i("debug");
                    return function() {
                        t && n.apply(e, arguments)
                    }
                }()
            }
        }]
    }

    function je(t, e) {
        if ("__defineGetter__" === t || "__defineSetter__" === t || "__lookupGetter__" === t || "__lookupSetter__" === t || "__proto__" === t) throw li("isecfld", "Attempting to access a disallowed field in Angular expressions! Expression: {0}", e);
        return t
    }

    function Pe(t, e) {
        if (t += "", !w(t)) throw li("iseccst", "Cannot convert object to primitive value! Expression: {0}", e);
        return t
    }

    function Ne(t, e) {
        if (t) {
            if (t.constructor === t) throw li("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", e);
            if (t.window === t) throw li("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", e);
            if (t.children && (t.nodeName || t.prop && t.attr && t.find)) throw li("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", e);
            if (t === Object) throw li("isecobj", "Referencing Object in Angular expressions is disallowed! Expression: {0}", e)
        }
        return t
    }

    function Ve(t, e) {
        if (t) {
            if (t.constructor === t) throw li("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", e);
            if (t === fi || t === hi || t === di) throw li("isecff", "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}", e)
        }
    }

    function qe(t) {
        return t.constant
    }

    function Re(t, e, n, r, i) {
        Ne(t, i), Ne(e, i);
        for (var o, a = n.split("."), s = 0; a.length > 1; s++) {
            o = je(a.shift(), i);
            var u = 0 === s && e && e[o] || t[o];
            u || (u = {}, t[o] = u), t = Ne(u, i)
        }
        return o = je(a.shift(), i), Ne(t[o], i), t[o] = r, r
    }

    function Ie(t) {
        return "constructor" == t
    }

    function Ue(t, e, r, i, o, a, s) {
        je(t, a), je(e, a), je(r, a), je(i, a), je(o, a);
        var u = function(t) {
                return Ne(t, a)
            },
            c = s || Ie(t) ? u : $,
            l = s || Ie(e) ? u : $,
            f = s || Ie(r) ? u : $,
            h = s || Ie(i) ? u : $,
            d = s || Ie(o) ? u : $;
        return function(a, s) {
            var u = s && s.hasOwnProperty(t) ? s : a;
            return null == u ? u : (u = c(u[t]), e ? null == u ? n : (u = l(u[e]), r ? null == u ? n : (u = f(u[r]), i ? null == u ? n : (u = h(u[i]), o ? null == u ? n : u = d(u[o]) : u) : u) : u) : u)
        }
    }

    function Fe(t, e) {
        return function(n, r) {
            return t(n, r, Ne, e)
        }
    }

    function He(t, e, r) {
        var i = e.expensiveChecks,
            a = i ? wi : yi,
            s = a[t];
        if (s) return s;
        var u = t.split("."),
            c = u.length;
        if (e.csp) s = 6 > c ? Ue(u[0], u[1], u[2], u[3], u[4], r, i) : function(t, e) {
            var o, a = 0;
            do o = Ue(u[a++], u[a++], u[a++], u[a++], u[a++], r, i)(t, e), e = n, t = o; while (c > a);
            return o
        };
        else {
            var l = "";
            i && (l += "s = eso(s, fe);\nl = eso(l, fe);\n");
            var f = i;
            o(u, function(t, e) {
                je(t, r);
                var n = (e ? "s" : '((l&&l.hasOwnProperty("' + t + '"))?l:s)') + "." + t;
                (i || Ie(t)) && (n = "eso(" + n + ", fe)", f = !0), l += "if(s == null) return undefined;\ns=" + n + ";\n"
            }), l += "return s;";
            var h = new Function("s", "l", "eso", "fe", l);
            h.toString = v(l), f && (h = Fe(h, r)), s = h
        }
        return s.sharedGetter = !0, s.assign = function(e, n, r) {
            return Re(e, r, t, n, t)
        }, a[t] = s, s
    }

    function _e(t) {
        return C(t.valueOf) ? t.valueOf() : bi.call(t)
    }

    function Be() {
        var t = ct(),
            e = ct();
        this.$get = ["$filter", "$sniffer", function(n, r) {
            function i(t) {
                var e = t;
                return t.sharedGetter && (e = function(e, n) {
                    return t(e, n)
                }, e.literal = t.literal, e.constant = t.constant, e.assign = t.assign), e
            }

            function a(t, e) {
                for (var n = 0, r = t.length; r > n; n++) {
                    var i = t[n];
                    i.constant || (i.inputs ? a(i.inputs, e) : -1 === e.indexOf(i) && e.push(i))
                }
                return e
            }

            function s(t, e) {
                return null == t || null == e ? t === e : "object" == typeof t && (t = _e(t), "object" == typeof t) ? !1 : t === e || t !== t && e !== e
            }

            function u(t, e, n, r) {
                var i, o = r.$$inputs || (r.$$inputs = a(r.inputs, []));
                if (1 === o.length) {
                    var u = s;
                    return o = o[0], t.$watch(function(t) {
                        var e = o(t);
                        return s(e, u) || (i = r(t), u = e && _e(e)), i
                    }, e, n)
                }
                for (var c = [], l = 0, f = o.length; f > l; l++) c[l] = s;
                return t.$watch(function(t) {
                    for (var e = !1, n = 0, a = o.length; a > n; n++) {
                        var u = o[n](t);
                        (e || (e = !s(u, c[n]))) && (c[n] = u && _e(u))
                    }
                    return e && (i = r(t)), i
                }, e, n)
            }

            function c(t, e, n, r) {
                var i, o;
                return i = t.$watch(function(t) {
                    return r(t)
                }, function(t, n, r) {
                    o = t, C(e) && e.apply(this, arguments), g(t) && r.$$postDigest(function() {
                        g(o) && i()
                    })
                }, n)
            }

            function l(t, e, n, r) {
                function i(t) {
                    var e = !0;
                    return o(t, function(t) {
                        g(t) || (e = !1)
                    }), e
                }
                var a, s;
                return a = t.$watch(function(t) {
                    return r(t)
                }, function(t, n, r) {
                    s = t, C(e) && e.call(this, t, n, r), i(t) && r.$$postDigest(function() {
                        i(s) && a()
                    })
                }, n)
            }

            function f(t, e, n, r) {
                var i;
                return i = t.$watch(function(t) {
                    return r(t)
                }, function(t, n, r) {
                    C(e) && e.apply(this, arguments), i()
                }, n)
            }

            function h(t, e) {
                if (!e) return t;
                var n = t.$$watchDelegate,
                    r = n !== l && n !== c,
                    i = r ? function(n, r) {
                        var i = t(n, r);
                        return e(i, n, r)
                    } : function(n, r) {
                        var i = t(n, r),
                            o = e(i, n, r);
                        return g(i) ? o : i
                    };
                return t.$$watchDelegate && t.$$watchDelegate !== u ? i.$$watchDelegate = t.$$watchDelegate : e.$stateful || (i.$$watchDelegate = u, i.inputs = [t]), i
            }
            var d = {
                    csp: r.csp,
                    expensiveChecks: !1
                },
                $ = {
                    csp: r.csp,
                    expensiveChecks: !0
                };
            return function(r, o, a) {
                var s, v, m;
                switch (typeof r) {
                    case "string":
                        m = r = r.trim();
                        var g = a ? e : t;
                        if (s = g[m], !s) {
                            ":" === r.charAt(0) && ":" === r.charAt(1) && (v = !0, r = r.substring(2));
                            var y = a ? $ : d,
                                w = new mi(y),
                                b = new gi(w, n, y);
                            s = b.parse(r), s.constant ? s.$$watchDelegate = f : v ? (s = i(s), s.$$watchDelegate = s.literal ? l : c) : s.inputs && (s.$$watchDelegate = u), g[m] = s
                        }
                        return h(s, o);
                    case "function":
                        return h(r, o);
                    default:
                        return h(p, o)
                }
            }
        }]
    }

    function Le() {
        this.$get = ["$rootScope", "$exceptionHandler", function(t, e) {
            return Ge(function(e) {
                t.$evalAsync(e)
            }, e)
        }]
    }

    function ze() {
        this.$get = ["$browser", "$exceptionHandler", function(t, e) {
            return Ge(function(e) {
                t.defer(e)
            }, e)
        }]
    }

    function Ge(t, e) {
        function i(t, e, n) {
            function r(e) {
                return function(n) {
                    i || (i = !0, e.call(t, n))
                }
            }
            var i = !1;
            return [r(e), r(n)]
        }

        function a() {
            this.$$state = {
                status: 0
            }
        }

        function s(t, e) {
            return function(n) {
                e.call(t, n)
            }
        }

        function u(t) {
            var r, i, o;
            o = t.pending, t.processScheduled = !1, t.pending = n;
            for (var a = 0, s = o.length; s > a; ++a) {
                i = o[a][0], r = o[a][t.status];
                try {
                    C(r) ? i.resolve(r(t.value)) : 1 === t.status ? i.resolve(t.value) : i.reject(t.value)
                } catch (u) {
                    i.reject(u), e(u)
                }
            }
        }

        function c(e) {
            !e.processScheduled && e.pending && (e.processScheduled = !0, t(function() {
                u(e)
            }))
        }

        function l() {
            this.promise = new a, this.resolve = s(this, this.resolve), this.reject = s(this, this.reject), this.notify = s(this, this.notify)
        }

        function f(t) {
            var e = new l,
                n = 0,
                r = dr(t) ? [] : {};
            return o(t, function(t, i) {
                n++, m(t).then(function(t) {
                    r.hasOwnProperty(i) || (r[i] = t, --n || e.resolve(r))
                }, function(t) {
                    r.hasOwnProperty(i) || e.reject(t)
                })
            }), 0 === n && e.resolve(r), e.promise
        }
        var h = r("$q", TypeError),
            d = function() {
                return new l
            };
        a.prototype = {
            then: function(t, e, n) {
                var r = new l;
                return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([r, t, e, n]), this.$$state.status > 0 && c(this.$$state), r.promise
            },
            "catch": function(t) {
                return this.then(null, t)
            },
            "finally": function(t, e) {
                return this.then(function(e) {
                    return v(e, !0, t)
                }, function(e) {
                    return v(e, !1, t)
                }, e)
            }
        }, l.prototype = {
            resolve: function(t) {
                this.promise.$$state.status || (t === this.promise ? this.$$reject(h("qcycle", "Expected promise to be resolved with value other than itself '{0}'", t)) : this.$$resolve(t))
            },
            $$resolve: function(t) {
                var n, r;
                r = i(this, this.$$resolve, this.$$reject);
                try {
                    (y(t) || C(t)) && (n = t && t.then), C(n) ? (this.promise.$$state.status = -1, n.call(t, r[0], r[1], this.notify)) : (this.promise.$$state.value = t, this.promise.$$state.status = 1, c(this.promise.$$state))
                } catch (o) {
                    r[1](o), e(o)
                }
            },
            reject: function(t) {
                this.promise.$$state.status || this.$$reject(t)
            },
            $$reject: function(t) {
                this.promise.$$state.value = t, this.promise.$$state.status = 2, c(this.promise.$$state)
            },
            notify: function(n) {
                var r = this.promise.$$state.pending;
                this.promise.$$state.status <= 0 && r && r.length && t(function() {
                    for (var t, i, o = 0, a = r.length; a > o; o++) {
                        i = r[o][0], t = r[o][3];
                        try {
                            i.notify(C(t) ? t(n) : n)
                        } catch (s) {
                            e(s)
                        }
                    }
                })
            }
        };
        var p = function(t) {
                var e = new l;
                return e.reject(t), e.promise
            },
            $ = function(t, e) {
                var n = new l;
                return e ? n.resolve(t) : n.reject(t), n.promise
            },
            v = function(t, e, n) {
                var r = null;
                try {
                    C(n) && (r = n())
                } catch (i) {
                    return $(i, !1)
                }
                return M(r) ? r.then(function() {
                    return $(t, e)
                }, function(t) {
                    return $(t, !1)
                }) : $(t, e)
            },
            m = function(t, e, n, r) {
                var i = new l;
                return i.resolve(t), i.promise.then(e, n, r)
            },
            g = function w(t) {
                function e(t) {
                    r.resolve(t)
                }

                function n(t) {
                    r.reject(t)
                }
                if (!C(t)) throw h("norslvr", "Expected resolverFn, got '{0}'", t);
                if (!(this instanceof w)) return new w(t);
                var r = new l;
                return t(e, n), r.promise
            };
        return g.defer = d, g.reject = p, g.when = m, g.all = f, g
    }

    function We() {
        this.$get = ["$window", "$timeout", function(t, e) {
            function n() {
                for (var t = 0; t < l.length; t++) {
                    var e = l[t];
                    e && (l[t] = null, e())
                }
                c = l.length = 0
            }

            function r(t) {
                var e = l.length;
                return c++, l.push(t), 0 === e && (u = s(n)),
                    function() {
                        e >= 0 && (l[e] = null, e = null, 0 === --c && u && (u(), u = null, l.length = 0))
                    }
            }
            var i = t.requestAnimationFrame || t.webkitRequestAnimationFrame,
                o = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.webkitCancelRequestAnimationFrame,
                a = !!i,
                s = a ? function(t) {
                    var e = i(t);
                    return function() {
                        o(e)
                    }
                } : function(t) {
                    var n = e(t, 16.66, !1);
                    return function() {
                        e.cancel(n)
                    }
                };
            r.supported = a;
            var u, c = 0,
                l = [];
            return r
        }]
    }

    function Ye() {
        function t(t) {
            function e() {
                this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$id = c(), this.$$ChildScope = null
            }
            return e.prototype = t, e
        }
        var e = 10,
            n = r("$rootScope"),
            a = null,
            s = null;
        this.digestTtl = function(t) {
            return arguments.length && (e = t), e
        }, this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function(r, u, l, f) {
            function h(t) {
                t.currentScope.$$destroyed = !0
            }

            function d() {
                this.$id = c(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.$root = this, this.$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, this.$$isolateBindings = null
            }

            function $(t) {
                if (S.$$phase) throw n("inprog", "{0} already in progress", S.$$phase);
                S.$$phase = t
            }

            function v() {
                S.$$phase = null
            }

            function g(t, e, n) {
                do t.$$listenerCount[n] -= e, 0 === t.$$listenerCount[n] && delete t.$$listenerCount[n]; while (t = t.$parent)
            }

            function w() {}

            function b() {
                for (; A.length;) try {
                    A.shift()()
                } catch (t) {
                    u(t)
                }
                s = null
            }

            function x() {
                null === s && (s = f.defer(function() {
                    S.$apply(b)
                }))
            }
            d.prototype = {
                constructor: d,
                $new: function(e, n) {
                    var r;
                    return n = n || this, e ? (r = new d, r.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = t(this)), r = new this.$$ChildScope), r.$parent = n, r.$$prevSibling = n.$$childTail, n.$$childHead ? (n.$$childTail.$$nextSibling = r, n.$$childTail = r) : n.$$childHead = n.$$childTail = r, (e || n != this) && r.$on("$destroy", h), r
                },
                $watch: function(t, e, n) {
                    var r = l(t);
                    if (r.$$watchDelegate) return r.$$watchDelegate(this, e, n, r);
                    var i = this,
                        o = i.$$watchers,
                        s = {
                            fn: e,
                            last: w,
                            get: r,
                            exp: t,
                            eq: !!n
                        };
                    return a = null, C(e) || (s.fn = p), o || (o = i.$$watchers = []), o.unshift(s),
                        function() {
                            V(o, s), a = null
                        }
                },
                $watchGroup: function(t, e) {
                    function n() {
                        u = !1, c ? (c = !1, e(i, i, s)) : e(i, r, s)
                    }
                    var r = new Array(t.length),
                        i = new Array(t.length),
                        a = [],
                        s = this,
                        u = !1,
                        c = !0;
                    if (!t.length) {
                        var l = !0;
                        return s.$evalAsync(function() {
                                l && e(i, i, s)
                            }),
                            function() {
                                l = !1
                            }
                    }
                    return 1 === t.length ? this.$watch(t[0], function(t, n, o) {
                        i[0] = t, r[0] = n, e(i, t === n ? i : r, o)
                    }) : (o(t, function(t, e) {
                        var o = s.$watch(t, function(t, o) {
                            i[e] = t, r[e] = o, u || (u = !0, s.$evalAsync(n))
                        });
                        a.push(o)
                    }), function() {
                        for (; a.length;) a.shift()()
                    })
                },
                $watchCollection: function(t, e) {
                    function n(t) {
                        o = t;
                        var e, n, r, s, u;
                        if (!m(o)) {
                            if (y(o))
                                if (i(o)) {
                                    a !== d && (a = d, v = a.length = 0, f++), e = o.length, v !== e && (f++, a.length = v = e);
                                    for (var c = 0; e > c; c++) u = a[c], s = o[c], r = u !== u && s !== s, r || u === s || (f++, a[c] = s)
                                } else {
                                    a !== p && (a = p = {}, v = 0, f++), e = 0;
                                    for (n in o) o.hasOwnProperty(n) && (e++, s = o[n], u = a[n], n in a ? (r = u !== u && s !== s, r || u === s || (f++, a[n] = s)) : (v++, a[n] = s, f++));
                                    if (v > e) {
                                        f++;
                                        for (n in a) o.hasOwnProperty(n) || (v--, delete a[n])
                                    }
                                }
                            else a !== o && (a = o, f++);
                            return f;
                        }
                    }

                    function r() {
                        if ($ ? ($ = !1, e(o, o, u)) : e(o, s, u), c)
                            if (y(o))
                                if (i(o)) {
                                    s = new Array(o.length);
                                    for (var t = 0; t < o.length; t++) s[t] = o[t]
                                } else {
                                    s = {};
                                    for (var n in o) Zn.call(o, n) && (s[n] = o[n])
                                }
                        else s = o
                    }
                    n.$stateful = !0;
                    var o, a, s, u = this,
                        c = e.length > 1,
                        f = 0,
                        h = l(t, n),
                        d = [],
                        p = {},
                        $ = !0,
                        v = 0;
                    return this.$watch(h, r)
                },
                $digest: function() {
                    var t, r, i, o, c, l, h, d, p, m, g = e,
                        y = this,
                        x = [];
                    $("$digest"), f.$$checkUrlChange(), this === S && null !== s && (f.defer.cancel(s), b()), a = null;
                    do {
                        for (l = !1, d = y; E.length;) {
                            try {
                                m = E.shift(), m.scope.$eval(m.expression, m.locals)
                            } catch (A) {
                                u(A)
                            }
                            a = null
                        }
                        t: do {
                            if (o = d.$$watchers)
                                for (c = o.length; c--;) try {
                                    if (t = o[c])
                                        if ((r = t.get(d)) === (i = t.last) || (t.eq ? I(r, i) : "number" == typeof r && "number" == typeof i && isNaN(r) && isNaN(i))) {
                                            if (t === a) {
                                                l = !1;
                                                break t
                                            }
                                        } else l = !0, a = t, t.last = t.eq ? q(r, null) : r, t.fn(r, i === w ? r : i, d), 5 > g && (p = 4 - g, x[p] || (x[p] = []), x[p].push({
                                            msg: C(t.exp) ? "fn: " + (t.exp.name || t.exp.toString()) : t.exp,
                                            newVal: r,
                                            oldVal: i
                                        }))
                                } catch (A) {
                                    u(A)
                                }
                            if (!(h = d.$$childHead || d !== y && d.$$nextSibling))
                                for (; d !== y && !(h = d.$$nextSibling);) d = d.$parent
                        } while (d = h);
                        if ((l || E.length) && !g--) throw v(), n("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", e, x)
                    } while (l || E.length);
                    for (v(); k.length;) try {
                        k.shift()()
                    } catch (A) {
                        u(A)
                    }
                },
                $destroy: function() {
                    if (!this.$$destroyed) {
                        var t = this.$parent;
                        if (this.$broadcast("$destroy"), this.$$destroyed = !0, this !== S) {
                            for (var e in this.$$listenerCount) g(this, this.$$listenerCount[e], e);
                            t.$$childHead == this && (t.$$childHead = this.$$nextSibling), t.$$childTail == this && (t.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = p, this.$on = this.$watch = this.$watchGroup = function() {
                                return p
                            }, this.$$listeners = {}, this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers = null
                        }
                    }
                },
                $eval: function(t, e) {
                    return l(t)(this, e)
                },
                $evalAsync: function(t, e) {
                    S.$$phase || E.length || f.defer(function() {
                        E.length && S.$digest()
                    }), E.push({
                        scope: this,
                        expression: t,
                        locals: e
                    })
                },
                $$postDigest: function(t) {
                    k.push(t)
                },
                $apply: function(t) {
                    try {
                        return $("$apply"), this.$eval(t)
                    } catch (e) {
                        u(e)
                    } finally {
                        v();
                        try {
                            S.$digest()
                        } catch (e) {
                            throw u(e), e
                        }
                    }
                },
                $applyAsync: function(t) {
                    function e() {
                        n.$eval(t)
                    }
                    var n = this;
                    t && A.push(e), x()
                },
                $on: function(t, e) {
                    var n = this.$$listeners[t];
                    n || (this.$$listeners[t] = n = []), n.push(e);
                    var r = this;
                    do r.$$listenerCount[t] || (r.$$listenerCount[t] = 0), r.$$listenerCount[t]++; while (r = r.$parent);
                    var i = this;
                    return function() {
                        var r = n.indexOf(e); - 1 !== r && (n[r] = null, g(i, 1, t))
                    }
                },
                $emit: function(t, e) {
                    var n, r, i, o = [],
                        a = this,
                        s = !1,
                        c = {
                            name: t,
                            targetScope: a,
                            stopPropagation: function() {
                                s = !0
                            },
                            preventDefault: function() {
                                c.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        },
                        l = U([c], arguments, 1);
                    do {
                        for (n = a.$$listeners[t] || o, c.currentScope = a, r = 0, i = n.length; i > r; r++)
                            if (n[r]) try {
                                n[r].apply(null, l)
                            } catch (f) {
                                u(f)
                            } else n.splice(r, 1), r--, i--;
                        if (s) return c.currentScope = null, c;
                        a = a.$parent
                    } while (a);
                    return c.currentScope = null, c
                },
                $broadcast: function(t, e) {
                    var n = this,
                        r = n,
                        i = n,
                        o = {
                            name: t,
                            targetScope: n,
                            preventDefault: function() {
                                o.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        };
                    if (!n.$$listenerCount[t]) return o;
                    for (var a, s, c, l = U([o], arguments, 1); r = i;) {
                        for (o.currentScope = r, a = r.$$listeners[t] || [], s = 0, c = a.length; c > s; s++)
                            if (a[s]) try {
                                a[s].apply(null, l)
                            } catch (f) {
                                u(f)
                            } else a.splice(s, 1), s--, c--;
                        if (!(i = r.$$listenerCount[t] && r.$$childHead || r !== n && r.$$nextSibling))
                            for (; r !== n && !(i = r.$$nextSibling);) r = r.$parent
                    }
                    return o.currentScope = null, o
                }
            };
            var S = new d,
                E = S.$$asyncQueue = [],
                k = S.$$postDigestQueue = [],
                A = S.$$applyAsyncQueue = [];
            return S
        }]
    }

    function Je() {
        var t = /^\s*(https?|ftp|mailto|tel|file):/,
            e = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function(e) {
            return g(e) ? (t = e, this) : t
        }, this.imgSrcSanitizationWhitelist = function(t) {
            return g(t) ? (e = t, this) : e
        }, this.$get = function() {
            return function(n, r) {
                var i, o = r ? e : t;
                return i = on(n).href, "" === i || i.match(o) ? n : "unsafe:" + i
            }
        }
    }

    function Ke(t) {
        if ("self" === t) return t;
        if (w(t)) {
            if (t.indexOf("***") > -1) throw xi("iwcard", "Illegal sequence *** in string matcher.  String: {0}", t);
            return t = $r(t).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + t + "$")
        }
        if (S(t)) return new RegExp("^" + t.source + "$");
        throw xi("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
    }

    function Ze(t) {
        var e = [];
        return g(t) && o(t, function(t) {
            e.push(Ke(t))
        }), e
    }

    function Xe() {
        this.SCE_CONTEXTS = Ci;
        var t = ["self"],
            e = [];
        this.resourceUrlWhitelist = function(e) {
            return arguments.length && (t = Ze(e)), t
        }, this.resourceUrlBlacklist = function(t) {
            return arguments.length && (e = Ze(t)), e
        }, this.$get = ["$injector", function(r) {
            function i(t, e) {
                return "self" === t ? an(e) : !!t.exec(e.href)
            }

            function o(n) {
                var r, o, a = on(n.toString()),
                    s = !1;
                for (r = 0, o = t.length; o > r; r++)
                    if (i(t[r], a)) {
                        s = !0;
                        break
                    }
                if (s)
                    for (r = 0, o = e.length; o > r; r++)
                        if (i(e[r], a)) {
                            s = !1;
                            break
                        }
                return s
            }

            function a(t) {
                var e = function(t) {
                    this.$$unwrapTrustedValue = function() {
                        return t
                    }
                };
                return t && (e.prototype = new t), e.prototype.valueOf = function() {
                    return this.$$unwrapTrustedValue()
                }, e.prototype.toString = function() {
                    return this.$$unwrapTrustedValue().toString()
                }, e
            }

            function s(t, e) {
                var r = h.hasOwnProperty(t) ? h[t] : null;
                if (!r) throw xi("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", t, e);
                if (null === e || e === n || "" === e) return e;
                if ("string" != typeof e) throw xi("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", t);
                return new r(e)
            }

            function u(t) {
                return t instanceof f ? t.$$unwrapTrustedValue() : t
            }

            function c(t, e) {
                if (null === e || e === n || "" === e) return e;
                var r = h.hasOwnProperty(t) ? h[t] : null;
                if (r && e instanceof r) return e.$$unwrapTrustedValue();
                if (t === Ci.RESOURCE_URL) {
                    if (o(e)) return e;
                    throw xi("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", e.toString())
                }
                if (t === Ci.HTML) return l(e);
                throw xi("unsafe", "Attempting to use an unsafe value in a safe context.")
            }
            var l = function(t) {
                throw xi("unsafe", "Attempting to use an unsafe value in a safe context.")
            };
            r.has("$sanitize") && (l = r.get("$sanitize"));
            var f = a(),
                h = {};
            return h[Ci.HTML] = a(f), h[Ci.CSS] = a(f), h[Ci.URL] = a(f), h[Ci.JS] = a(f), h[Ci.RESOURCE_URL] = a(h[Ci.URL]), {
                trustAs: s,
                getTrusted: c,
                valueOf: u
            }
        }]
    }

    function Qe() {
        var t = !0;
        this.enabled = function(e) {
            return arguments.length && (t = !!e), t
        }, this.$get = ["$parse", "$sceDelegate", function(e, n) {
            if (t && 8 > er) throw xi("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
            var r = R(Ci);
            r.isEnabled = function() {
                return t
            }, r.trustAs = n.trustAs, r.getTrusted = n.getTrusted, r.valueOf = n.valueOf, t || (r.trustAs = r.getTrusted = function(t, e) {
                return e
            }, r.valueOf = $), r.parseAs = function(t, n) {
                var i = e(n);
                return i.literal && i.constant ? i : e(n, function(e) {
                    return r.getTrusted(t, e)
                })
            };
            var i = r.parseAs,
                a = r.getTrusted,
                s = r.trustAs;
            return o(Ci, function(t, e) {
                var n = Kn(e);
                r[$t("parse_as_" + n)] = function(e) {
                    return i(t, e)
                }, r[$t("get_trusted_" + n)] = function(e) {
                    return a(t, e)
                }, r[$t("trust_as_" + n)] = function(e) {
                    return s(t, e)
                }
            }), r
        }]
    }

    function tn() {
        this.$get = ["$window", "$document", function(t, e) {
            var n, r, i = {},
                o = h((/android (\d+)/.exec(Kn((t.navigator || {}).userAgent)) || [])[1]),
                a = /Boxee/i.test((t.navigator || {}).userAgent),
                s = e[0] || {},
                u = /^(Moz|webkit|ms)(?=[A-Z])/,
                c = s.body && s.body.style,
                l = !1,
                f = !1;
            if (c) {
                for (var d in c)
                    if (r = u.exec(d)) {
                        n = r[0], n = n.substr(0, 1).toUpperCase() + n.substr(1);
                        break
                    }
                n || (n = "WebkitOpacity" in c && "webkit"), l = !!("transition" in c || n + "Transition" in c), f = !!("animation" in c || n + "Animation" in c), !o || l && f || (l = w(s.body.style.webkitTransition), f = w(s.body.style.webkitAnimation))
            }
            return {
                history: !(!t.history || !t.history.pushState || 4 > o || a),
                hasEvent: function(t) {
                    if ("input" === t && 11 >= er) return !1;
                    if (m(i[t])) {
                        var e = s.createElement("div");
                        i[t] = "on" + t in e
                    }
                    return i[t]
                },
                csp: vr(),
                vendorPrefix: n,
                transitions: l,
                animations: f,
                android: o
            }
        }]
    }

    function en() {
        this.$get = ["$templateCache", "$http", "$q", "$sce", function(t, e, n, r) {
            function i(o, a) {
                function s(t) {
                    if (!a) throw Zr("tpload", "Failed to load template: {0}", o);
                    return n.reject(t)
                }
                i.totalPendingRequests++, w(o) && t.get(o) || (o = r.getTrustedResourceUrl(o));
                var u = e.defaults && e.defaults.transformResponse;
                dr(u) ? u = u.filter(function(t) {
                    return t !== ie
                }) : u === ie && (u = null);
                var c = {
                    cache: t,
                    transformResponse: u
                };
                return e.get(o, c)["finally"](function() {
                    i.totalPendingRequests--
                }).then(function(t) {
                    return t.data
                }, s)
            }
            return i.totalPendingRequests = 0, i
        }]
    }

    function nn() {
        this.$get = ["$rootScope", "$browser", "$location", function(t, e, n) {
            var r = {};
            return r.findBindings = function(t, e, n) {
                var r = t.getElementsByClassName("ng-binding"),
                    i = [];
                return o(r, function(t) {
                    var r = lr.element(t).data("$binding");
                    r && o(r, function(r) {
                        if (n) {
                            var o = new RegExp("(^|\\s)" + $r(e) + "(\\s|\\||$)");
                            o.test(r) && i.push(t)
                        } else -1 != r.indexOf(e) && i.push(t)
                    })
                }), i
            }, r.findModels = function(t, e, n) {
                for (var r = ["ng-", "data-ng-", "ng\\:"], i = 0; i < r.length; ++i) {
                    var o = n ? "=" : "*=",
                        a = "[" + r[i] + "model" + o + '"' + e + '"]',
                        s = t.querySelectorAll(a);
                    if (s.length) return s
                }
            }, r.getLocation = function() {
                return n.url()
            }, r.setLocation = function(e) {
                e !== n.url() && (n.url(e), t.$digest())
            }, r.whenStable = function(t) {
                e.notifyWhenNoOutstandingRequests(t)
            }, r
        }]
    }

    function rn() {
        this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function(t, e, n, r, i) {
            function o(o, s, u) {
                var c, l = g(u) && !u,
                    f = (l ? r : n).defer(),
                    h = f.promise;
                return c = e.defer(function() {
                    try {
                        f.resolve(o())
                    } catch (e) {
                        f.reject(e), i(e)
                    } finally {
                        delete a[h.$$timeoutId]
                    }
                    l || t.$apply()
                }, s), h.$$timeoutId = c, a[c] = f, h
            }
            var a = {};
            return o.cancel = function(t) {
                return t && t.$$timeoutId in a ? (a[t.$$timeoutId].reject("canceled"), delete a[t.$$timeoutId], e.defer.cancel(t.$$timeoutId)) : !1
            }, o
        }]
    }

    function on(t) {
        var e = t;
        return er && (Si.setAttribute("href", e), e = Si.href), Si.setAttribute("href", e), {
            href: Si.href,
            protocol: Si.protocol ? Si.protocol.replace(/:$/, "") : "",
            host: Si.host,
            search: Si.search ? Si.search.replace(/^\?/, "") : "",
            hash: Si.hash ? Si.hash.replace(/^#/, "") : "",
            hostname: Si.hostname,
            port: Si.port,
            pathname: "/" === Si.pathname.charAt(0) ? Si.pathname : "/" + Si.pathname
        }
    }

    function an(t) {
        var e = w(t) ? on(t) : t;
        return e.protocol === Ei.protocol && e.host === Ei.host
    }

    function sn() {
        this.$get = v(t)
    }

    function un(t) {
        function e(r, i) {
            if (y(r)) {
                var a = {};
                return o(r, function(t, n) {
                    a[n] = e(n, t)
                }), a
            }
            return t.factory(r + n, i)
        }
        var n = "Filter";
        this.register = e, this.$get = ["$injector", function(t) {
            return function(e) {
                return t.get(e + n)
            }
        }], e("currency", hn), e("date", En), e("filter", cn), e("json", kn), e("limitTo", An), e("lowercase", Di), e("number", dn), e("orderBy", Tn), e("uppercase", Mi)
    }

    function cn() {
        return function(t, e, n) {
            if (!dr(t)) return t;
            var r, i, o = null !== e ? typeof e : "null";
            switch (o) {
                case "function":
                    r = e;
                    break;
                case "boolean":
                case "null":
                case "number":
                case "string":
                    i = !0;
                case "object":
                    r = ln(e, n, i);
                    break;
                default:
                    return t
            }
            return t.filter(r)
        }
    }

    function ln(t, e, n) {
        var r, i = y(t) && "$" in t;
        return e === !0 ? e = I : C(e) || (e = function(t, e) {
            return m(t) ? !1 : null === t || null === e ? t === e : y(t) || y(e) ? !1 : (t = Kn("" + t), e = Kn("" + e), -1 !== t.indexOf(e))
        }), r = function(r) {
            return i && !y(r) ? fn(r, t.$, e, !1) : fn(r, t, e, n)
        }
    }

    function fn(t, e, n, r, i) {
        var o = null !== t ? typeof t : "null",
            a = null !== e ? typeof e : "null";
        if ("string" === a && "!" === e.charAt(0)) return !fn(t, e.substring(1), n, r);
        if (dr(t)) return t.some(function(t) {
            return fn(t, e, n, r)
        });
        switch (o) {
            case "object":
                var s;
                if (r) {
                    for (s in t)
                        if ("$" !== s.charAt(0) && fn(t[s], e, n, !0)) return !0;
                    return i ? !1 : fn(t, e, n, !1)
                }
                if ("object" === a) {
                    for (s in e) {
                        var u = e[s];
                        if (!C(u) && !m(u)) {
                            var c = "$" === s,
                                l = c ? t : t[s];
                            if (!fn(l, u, n, c, c)) return !1
                        }
                    }
                    return !0
                }
                return n(t, e);
            case "function":
                return !1;
            default:
                return n(t, e)
        }
    }

    function hn(t) {
        var e = t.NUMBER_FORMATS;
        return function(t, n, r) {
            return m(n) && (n = e.CURRENCY_SYM), m(r) && (r = e.PATTERNS[1].maxFrac), null == t ? t : pn(t, e.PATTERNS[1], e.GROUP_SEP, e.DECIMAL_SEP, r).replace(/\u00A4/g, n)
        }
    }

    function dn(t) {
        var e = t.NUMBER_FORMATS;
        return function(t, n) {
            return null == t ? t : pn(t, e.PATTERNS[0], e.GROUP_SEP, e.DECIMAL_SEP, n)
        }
    }

    function pn(t, e, n, r, i) {
        if (!isFinite(t) || y(t)) return "";
        var o = 0 > t;
        t = Math.abs(t);
        var a = t + "",
            s = "",
            u = [],
            c = !1;
        if (-1 !== a.indexOf("e")) {
            var l = a.match(/([\d\.]+)e(-?)(\d+)/);
            l && "-" == l[2] && l[3] > i + 1 ? t = 0 : (s = a, c = !0)
        }
        if (c) i > 0 && 1 > t && (s = t.toFixed(i), t = parseFloat(s));
        else {
            var f = (a.split(ki)[1] || "").length;
            m(i) && (i = Math.min(Math.max(e.minFrac, f), e.maxFrac)), t = +(Math.round(+(t.toString() + "e" + i)).toString() + "e" + -i);
            var h = ("" + t).split(ki),
                d = h[0];
            h = h[1] || "";
            var p, $ = 0,
                v = e.lgSize,
                g = e.gSize;
            if (d.length >= v + g)
                for ($ = d.length - v, p = 0; $ > p; p++)($ - p) % g === 0 && 0 !== p && (s += n), s += d.charAt(p);
            for (p = $; p < d.length; p++)(d.length - p) % v === 0 && 0 !== p && (s += n), s += d.charAt(p);
            for (; h.length < i;) h += "0";
            i && "0" !== i && (s += r + h.substr(0, i))
        }
        return 0 === t && (o = !1), u.push(o ? e.negPre : e.posPre, s, o ? e.negSuf : e.posSuf), u.join("")
    }

    function $n(t, e, n) {
        var r = "";
        for (0 > t && (r = "-", t = -t), t = "" + t; t.length < e;) t = "0" + t;
        return n && (t = t.substr(t.length - e)), r + t
    }

    function vn(t, e, n, r) {
        return n = n || 0,
            function(i) {
                var o = i["get" + t]();
                return (n > 0 || o > -n) && (o += n), 0 === o && -12 == n && (o = 12), $n(o, e, r)
            }
    }

    function mn(t, e) {
        return function(n, r) {
            var i = n["get" + t](),
                o = Xn(e ? "SHORT" + t : t);
            return r[o][i]
        }
    }

    function gn(t) {
        var e = -1 * t.getTimezoneOffset(),
            n = e >= 0 ? "+" : "";
        return n += $n(Math[e > 0 ? "floor" : "ceil"](e / 60), 2) + $n(Math.abs(e % 60), 2)
    }

    function yn(t) {
        var e = new Date(t, 0, 1).getDay();
        return new Date(t, 0, (4 >= e ? 5 : 12) - e)
    }

    function wn(t) {
        return new Date(t.getFullYear(), t.getMonth(), t.getDate() + (4 - t.getDay()))
    }

    function bn(t) {
        return function(e) {
            var n = yn(e.getFullYear()),
                r = wn(e),
                i = +r - +n,
                o = 1 + Math.round(i / 6048e5);
            return $n(o, t)
        }
    }

    function xn(t, e) {
        return t.getHours() < 12 ? e.AMPMS[0] : e.AMPMS[1]
    }

    function Cn(t, e) {
        return t.getFullYear() <= 0 ? e.ERAS[0] : e.ERAS[1]
    }

    function Sn(t, e) {
        return t.getFullYear() <= 0 ? e.ERANAMES[0] : e.ERANAMES[1]
    }

    function En(t) {
        function e(t) {
            var e;
            if (e = t.match(n)) {
                var r = new Date(0),
                    i = 0,
                    o = 0,
                    a = e[8] ? r.setUTCFullYear : r.setFullYear,
                    s = e[8] ? r.setUTCHours : r.setHours;
                e[9] && (i = h(e[9] + e[10]), o = h(e[9] + e[11])), a.call(r, h(e[1]), h(e[2]) - 1, h(e[3]));
                var u = h(e[4] || 0) - i,
                    c = h(e[5] || 0) - o,
                    l = h(e[6] || 0),
                    f = Math.round(1e3 * parseFloat("0." + (e[7] || 0)));
                return s.call(r, u, c, l, f), r
            }
            return t
        }
        var n = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function(n, r, i) {
            var a, s, u = "",
                c = [];
            if (r = r || "mediumDate", r = t.DATETIME_FORMATS[r] || r, w(n) && (n = Oi.test(n) ? h(n) : e(n)), b(n) && (n = new Date(n)), !x(n)) return n;
            for (; r;) s = Ti.exec(r), s ? (c = U(c, s, 1), r = c.pop()) : (c.push(r), r = null);
            return i && "UTC" === i && (n = new Date(n.getTime()), n.setMinutes(n.getMinutes() + n.getTimezoneOffset())), o(c, function(e) {
                a = Ai[e], u += a ? a(n, t.DATETIME_FORMATS) : e.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            }), u
        }
    }

    function kn() {
        return function(t, e) {
            return m(e) && (e = 2), B(t, e)
        }
    }

    function An() {
        return function(t, e) {
            return b(t) && (t = t.toString()), dr(t) || w(t) ? (e = Math.abs(Number(e)) === 1 / 0 ? Number(e) : h(e), e ? e > 0 ? t.slice(0, e) : t.slice(e) : w(t) ? "" : []) : t
        }
    }

    function Tn(t) {
        return function(e, n, r) {
            function o(t, e) {
                for (var r = 0; r < n.length; r++) {
                    var i = n[r](t, e);
                    if (0 !== i) return i
                }
                return 0
            }

            function a(t, e) {
                return e ? function(e, n) {
                    return t(n, e)
                } : t
            }

            function s(t) {
                switch (typeof t) {
                    case "number":
                    case "boolean":
                    case "string":
                        return !0;
                    default:
                        return !1
                }
            }

            function u(t) {
                return null === t ? "null" : "function" == typeof t.valueOf && (t = t.valueOf(), s(t)) ? t : "function" == typeof t.toString && (t = t.toString(), s(t)) ? t : ""
            }

            function c(t, e) {
                var n = typeof t,
                    r = typeof e;
                return n === r && "object" === n && (t = u(t), e = u(e)), n === r ? ("string" === n && (t = t.toLowerCase(), e = e.toLowerCase()), t === e ? 0 : e > t ? -1 : 1) : r > n ? -1 : 1
            }
            return i(e) ? (n = dr(n) ? n : [n], 0 === n.length && (n = ["+"]), n = n.map(function(e) {
                var n = !1,
                    r = e || $;
                if (w(e)) {
                    if (("+" == e.charAt(0) || "-" == e.charAt(0)) && (n = "-" == e.charAt(0), e = e.substring(1)), "" === e) return a(c, n);
                    if (r = t(e), r.constant) {
                        var i = r();
                        return a(function(t, e) {
                            return c(t[i], e[i])
                        }, n)
                    }
                }
                return a(function(t, e) {
                    return c(r(t), r(e))
                }, n)
            }), or.call(e).sort(a(o, r))) : e
        }
    }

    function On(t) {
        return C(t) && (t = {
            link: t
        }), t.restrict = t.restrict || "AC", v(t)
    }

    function Dn(t, e) {
        t.$name = e
    }

    function Mn(t, e, r, i, a) {
        var s = this,
            u = [],
            c = s.$$parentForm = t.parent().controller("form") || Ni;
        s.$error = {}, s.$$success = {}, s.$pending = n, s.$name = a(e.name || e.ngForm || "")(r), s.$dirty = !1, s.$pristine = !0, s.$valid = !0, s.$invalid = !1, s.$submitted = !1, c.$addControl(s), s.$rollbackViewValue = function() {
            o(u, function(t) {
                t.$rollbackViewValue()
            })
        }, s.$commitViewValue = function() {
            o(u, function(t) {
                t.$commitViewValue()
            })
        }, s.$addControl = function(t) {
            at(t.$name, "input"), u.push(t), t.$name && (s[t.$name] = t)
        }, s.$$renameControl = function(t, e) {
            var n = t.$name;
            s[n] === t && delete s[n], s[e] = t, t.$name = e
        }, s.$removeControl = function(t) {
            t.$name && s[t.$name] === t && delete s[t.$name], o(s.$pending, function(e, n) {
                s.$setValidity(n, null, t)
            }), o(s.$error, function(e, n) {
                s.$setValidity(n, null, t)
            }), o(s.$$success, function(e, n) {
                s.$setValidity(n, null, t)
            }), V(u, t)
        }, Gn({
            ctrl: this,
            $element: t,
            set: function(t, e, n) {
                var r = t[e];
                if (r) {
                    var i = r.indexOf(n); - 1 === i && r.push(n)
                } else t[e] = [n]
            },
            unset: function(t, e, n) {
                var r = t[e];
                r && (V(r, n), 0 === r.length && delete t[e])
            },
            parentForm: c,
            $animate: i
        }), s.$setDirty = function() {
            i.removeClass(t, mo), i.addClass(t, go), s.$dirty = !0, s.$pristine = !1, c.$setDirty()
        }, s.$setPristine = function() {
            i.setClass(t, mo, go + " " + Vi), s.$dirty = !1, s.$pristine = !0, s.$submitted = !1, o(u, function(t) {
                t.$setPristine()
            })
        }, s.$setUntouched = function() {
            o(u, function(t) {
                t.$setUntouched()
            })
        }, s.$setSubmitted = function() {
            i.addClass(t, Vi), s.$submitted = !0, c.$setSubmitted()
        }
    }

    function jn(t) {
        t.$formatters.push(function(e) {
            return t.$isEmpty(e) ? e : e.toString()
        })
    }

    function Pn(t, e, n, r, i, o) {
        Nn(t, e, n, r, i, o), jn(r)
    }

    function Nn(t, e, n, r, i, o) {
        var a = Kn(e[0].type);
        if (!i.android) {
            var s = !1;
            e.on("compositionstart", function(t) {
                s = !0
            }), e.on("compositionend", function() {
                s = !1, u()
            })
        }
        var u = function(t) {
            if (c && (o.defer.cancel(c), c = null), !s) {
                var i = e.val(),
                    u = t && t.type;
                "password" === a || n.ngTrim && "false" === n.ngTrim || (i = pr(i)), (r.$viewValue !== i || "" === i && r.$$hasNativeValidators) && r.$setViewValue(i, u)
            }
        };
        if (i.hasEvent("input")) e.on("input", u);
        else {
            var c, l = function(t, e, n) {
                c || (c = o.defer(function() {
                    c = null, e && e.value === n || u(t)
                }))
            };
            e.on("keydown", function(t) {
                var e = t.keyCode;
                91 === e || e > 15 && 19 > e || e >= 37 && 40 >= e || l(t, this, this.value)
            }), i.hasEvent("paste") && e.on("paste cut", l)
        }
        e.on("change", u), r.$render = function() {
            e.val(r.$isEmpty(r.$viewValue) ? "" : r.$viewValue)
        }
    }

    function Vn(t, e) {
        if (x(t)) return t;
        if (w(t)) {
            zi.lastIndex = 0;
            var n = zi.exec(t);
            if (n) {
                var r = +n[1],
                    i = +n[2],
                    o = 0,
                    a = 0,
                    s = 0,
                    u = 0,
                    c = yn(r),
                    l = 7 * (i - 1);
                return e && (o = e.getHours(), a = e.getMinutes(), s = e.getSeconds(), u = e.getMilliseconds()), new Date(r, 0, c.getDate() + l, o, a, s, u)
            }
        }
        return NaN
    }

    function qn(t, e) {
        return function(n, r) {
            var i, a;
            if (x(n)) return n;
            if (w(n)) {
                if ('"' == n.charAt(0) && '"' == n.charAt(n.length - 1) && (n = n.substring(1, n.length - 1)), Ui.test(n)) return new Date(n);
                if (t.lastIndex = 0, i = t.exec(n)) return i.shift(), a = r ? {
                    yyyy: r.getFullYear(),
                    MM: r.getMonth() + 1,
                    dd: r.getDate(),
                    HH: r.getHours(),
                    mm: r.getMinutes(),
                    ss: r.getSeconds(),
                    sss: r.getMilliseconds() / 1e3
                } : {
                    yyyy: 1970,
                    MM: 1,
                    dd: 1,
                    HH: 0,
                    mm: 0,
                    ss: 0,
                    sss: 0
                }, o(i, function(t, n) {
                    n < e.length && (a[e[n]] = +t)
                }), new Date(a.yyyy, a.MM - 1, a.dd, a.HH, a.mm, a.ss || 0, 1e3 * a.sss || 0)
            }
            return NaN
        }
    }

    function Rn(t, e, r, i) {
        return function(o, a, s, u, c, l, f) {
            function h(t) {
                return t && !(t.getTime && t.getTime() !== t.getTime())
            }

            function d(t) {
                return g(t) ? x(t) ? t : r(t) : n
            }
            In(o, a, s, u), Nn(o, a, s, u, c, l);
            var p, $ = u && u.$options && u.$options.timezone;
            if (u.$$parserName = t, u.$parsers.push(function(t) {
                    if (u.$isEmpty(t)) return null;
                    if (e.test(t)) {
                        var i = r(t, p);
                        return "UTC" === $ && i.setMinutes(i.getMinutes() - i.getTimezoneOffset()), i
                    }
                    return n
                }), u.$formatters.push(function(t) {
                    if (t && !x(t)) throw xo("datefmt", "Expected `{0}` to be a date", t);
                    if (h(t)) {
                        if (p = t, p && "UTC" === $) {
                            var e = 6e4 * p.getTimezoneOffset();
                            p = new Date(p.getTime() + e)
                        }
                        return f("date")(t, i, $)
                    }
                    return p = null, ""
                }), g(s.min) || s.ngMin) {
                var v;
                u.$validators.min = function(t) {
                    return !h(t) || m(v) || r(t) >= v
                }, s.$observe("min", function(t) {
                    v = d(t), u.$validate()
                })
            }
            if (g(s.max) || s.ngMax) {
                var y;
                u.$validators.max = function(t) {
                    return !h(t) || m(y) || r(t) <= y
                }, s.$observe("max", function(t) {
                    y = d(t), u.$validate()
                })
            }
        }
    }

    function In(t, e, r, i) {
        var o = e[0],
            a = i.$$hasNativeValidators = y(o.validity);
        a && i.$parsers.push(function(t) {
            var r = e.prop(Jn) || {};
            return r.badInput && !r.typeMismatch ? n : t
        })
    }

    function Un(t, e, r, i, o, a) {
        if (In(t, e, r, i), Nn(t, e, r, i, o, a), i.$$parserName = "number", i.$parsers.push(function(t) {
                return i.$isEmpty(t) ? null : _i.test(t) ? parseFloat(t) : n
            }), i.$formatters.push(function(t) {
                if (!i.$isEmpty(t)) {
                    if (!b(t)) throw xo("numfmt", "Expected `{0}` to be a number", t);
                    t = t.toString()
                }
                return t
            }), g(r.min) || r.ngMin) {
            var s;
            i.$validators.min = function(t) {
                return i.$isEmpty(t) || m(s) || t >= s
            }, r.$observe("min", function(t) {
                g(t) && !b(t) && (t = parseFloat(t, 10)), s = b(t) && !isNaN(t) ? t : n, i.$validate()
            })
        }
        if (g(r.max) || r.ngMax) {
            var u;
            i.$validators.max = function(t) {
                return i.$isEmpty(t) || m(u) || u >= t
            }, r.$observe("max", function(t) {
                g(t) && !b(t) && (t = parseFloat(t, 10)), u = b(t) && !isNaN(t) ? t : n, i.$validate()
            })
        }
    }

    function Fn(t, e, n, r, i, o) {
        Nn(t, e, n, r, i, o), jn(r), r.$$parserName = "url", r.$validators.url = function(t, e) {
            var n = t || e;
            return r.$isEmpty(n) || Fi.test(n)
        }
    }

    function Hn(t, e, n, r, i, o) {
        Nn(t, e, n, r, i, o), jn(r), r.$$parserName = "email", r.$validators.email = function(t, e) {
            var n = t || e;
            return r.$isEmpty(n) || Hi.test(n)
        }
    }

    function _n(t, e, n, r) {
        m(n.name) && e.attr("name", c());
        var i = function(t) {
            e[0].checked && r.$setViewValue(n.value, t && t.type)
        };
        e.on("click", i), r.$render = function() {
            var t = n.value;
            e[0].checked = t == r.$viewValue
        }, n.$observe("value", r.$render)
    }

    function Bn(t, e, n, r, i) {
        var o;
        if (g(r)) {
            if (o = t(r), !o.constant) throw xo("constexpr", "Expected constant expression for `{0}`, but saw `{1}`.", n, r);
            return o(e)
        }
        return i
    }

    function Ln(t, e, n, r, i, o, a, s) {
        var u = Bn(s, t, "ngTrueValue", n.ngTrueValue, !0),
            c = Bn(s, t, "ngFalseValue", n.ngFalseValue, !1),
            l = function(t) {
                r.$setViewValue(e[0].checked, t && t.type)
            };
        e.on("click", l), r.$render = function() {
            e[0].checked = r.$viewValue
        }, r.$isEmpty = function(t) {
            return t === !1
        }, r.$formatters.push(function(t) {
            return I(t, u)
        }), r.$parsers.push(function(t) {
            return t ? u : c
        })
    }

    function zn(t, e) {
        return t = "ngClass" + t, ["$animate", function(n) {
            function r(t, e) {
                var n = [];
                t: for (var r = 0; r < t.length; r++) {
                    for (var i = t[r], o = 0; o < e.length; o++)
                        if (i == e[o]) continue t;
                    n.push(i)
                }
                return n
            }

            function i(t) {
                if (dr(t)) return t;
                if (w(t)) return t.split(" ");
                if (y(t)) {
                    var e = [];
                    return o(t, function(t, n) {
                        t && (e = e.concat(n.split(" ")))
                    }), e
                }
                return t
            }
            return {
                restrict: "AC",
                link: function(a, s, u) {
                    function c(t) {
                        var e = f(t, 1);
                        u.$addClass(e)
                    }

                    function l(t) {
                        var e = f(t, -1);
                        u.$removeClass(e)
                    }

                    function f(t, e) {
                        var n = s.data("$classCounts") || {},
                            r = [];
                        return o(t, function(t) {
                            (e > 0 || n[t]) && (n[t] = (n[t] || 0) + e, n[t] === +(e > 0) && r.push(t))
                        }), s.data("$classCounts", n), r.join(" ")
                    }

                    function h(t, e) {
                        var i = r(e, t),
                            o = r(t, e);
                        i = f(i, 1), o = f(o, -1), i && i.length && n.addClass(s, i), o && o.length && n.removeClass(s, o)
                    }

                    function d(t) {
                        if (e === !0 || a.$index % 2 === e) {
                            var n = i(t || []);
                            if (p) {
                                if (!I(t, p)) {
                                    var r = i(p);
                                    h(r, n)
                                }
                            } else c(n)
                        }
                        p = R(t)
                    }
                    var p;
                    a.$watch(u[t], d, !0), u.$observe("class", function(e) {
                        d(a.$eval(u[t]))
                    }), "ngClass" !== t && a.$watch("$index", function(n, r) {
                        var o = 1 & n;
                        if (o !== (1 & r)) {
                            var s = i(a.$eval(u[t]));
                            o === e ? c(s) : l(s)
                        }
                    })
                }
            }
        }]
    }

    function Gn(t) {
        function e(t, e, u) {
            e === n ? r("$pending", t, u) : i("$pending", t, u), D(e) ? e ? (f(s.$error, t, u), l(s.$$success, t, u)) : (l(s.$error, t, u), f(s.$$success, t, u)) : (f(s.$error, t, u), f(s.$$success, t, u)), s.$pending ? (o(bo, !0), s.$valid = s.$invalid = n, a("", null)) : (o(bo, !1), s.$valid = Wn(s.$error), s.$invalid = !s.$valid, a("", s.$valid));
            var c;
            c = s.$pending && s.$pending[t] ? n : s.$error[t] ? !1 : s.$$success[t] ? !0 : null, a(t, c), h.$setValidity(t, c, s)
        }

        function r(t, e, n) {
            s[t] || (s[t] = {}), l(s[t], e, n)
        }

        function i(t, e, r) {
            s[t] && f(s[t], e, r), Wn(s[t]) && (s[t] = n)
        }

        function o(t, e) {
            e && !c[t] ? (d.addClass(u, t), c[t] = !0) : !e && c[t] && (d.removeClass(u, t), c[t] = !1)
        }

        function a(t, e) {
            t = t ? "-" + nt(t, "-") : "", o($o + t, e === !0), o(vo + t, e === !1)
        }
        var s = t.ctrl,
            u = t.$element,
            c = {},
            l = t.set,
            f = t.unset,
            h = t.parentForm,
            d = t.$animate;
        c[vo] = !(c[$o] = u.hasClass($o)), s.$setValidity = e
    }

    function Wn(t) {
        if (t)
            for (var e in t) return !1;
        return !0
    }
    var Yn = /^\/(.+)\/([a-z]*)$/,
        Jn = "validity",
        Kn = function(t) {
            return w(t) ? t.toLowerCase() : t
        },
        Zn = Object.prototype.hasOwnProperty,
        Xn = function(t) {
            return w(t) ? t.toUpperCase() : t
        },
        Qn = function(t) {
            return w(t) ? t.replace(/[A-Z]/g, function(t) {
                return String.fromCharCode(32 | t.charCodeAt(0))
            }) : t
        },
        tr = function(t) {
            return w(t) ? t.replace(/[a-z]/g, function(t) {
                return String.fromCharCode(-33 & t.charCodeAt(0))
            }) : t
        };
    "i" !== "I".toLowerCase() && (Kn = Qn, Xn = tr);
    var er, nr, rr, ir, or = [].slice,
        ar = [].splice,
        sr = [].push,
        ur = Object.prototype.toString,
        cr = r("ng"),
        lr = t.angular || (t.angular = {}),
        fr = 0;
    er = e.documentMode, p.$inject = [], $.$inject = [];
    var hr, dr = Array.isArray,
        pr = function(t) {
            return w(t) ? t.trim() : t
        },
        $r = function(t) {
            return t.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
        },
        vr = function() {
            if (g(vr.isActive_)) return vr.isActive_;
            var t = !(!e.querySelector("[ng-csp]") && !e.querySelector("[data-ng-csp]"));
            if (!t) try {
                new Function("")
            } catch (n) {
                t = !0
            }
            return vr.isActive_ = t
        },
        mr = ["ng-", "data-ng-", "ng:", "x-ng-"],
        gr = /[A-Z]/g,
        yr = !1,
        wr = 1,
        br = 2,
        xr = 3,
        Cr = 8,
        Sr = 9,
        Er = 11,
        kr = {
            full: "1.3.20",
            major: 1,
            minor: 3,
            dot: 20,
            codeName: "shallow-translucence"
        };
    wt.expando = "ng339";
    var Ar = wt.cache = {},
        Tr = 1,
        Or = function(t, e, n) {
            t.addEventListener(e, n, !1)
        },
        Dr = function(t, e, n) {
            t.removeEventListener(e, n, !1)
        };
    wt._data = function(t) {
        return this.cache[t[this.expando]] || {}
    };
    var Mr = /([\:\-\_]+(.))/g,
        jr = /^moz([A-Z])/,
        Pr = {
            mouseleave: "mouseout",
            mouseenter: "mouseover"
        },
        Nr = r("jqLite"),
        Vr = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        qr = /<|&#?\w+;/,
        Rr = /<([\w:]+)/,
        Ir = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Ur = {
            option: [1, '<select multiple="multiple">', "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ur.optgroup = Ur.option, Ur.tbody = Ur.tfoot = Ur.colgroup = Ur.caption = Ur.thead, Ur.th = Ur.td;
    var Fr = wt.prototype = {
            ready: function(n) {
                function r() {
                    i || (i = !0, n())
                }
                var i = !1;
                "complete" === e.readyState ? setTimeout(r) : (this.on("DOMContentLoaded", r), wt(t).on("load", r))
            },
            toString: function() {
                var t = [];
                return o(this, function(e) {
                    t.push("" + e)
                }), "[" + t.join(", ") + "]"
            },
            eq: function(t) {
                return nr(t >= 0 ? this[t] : this[this.length + t])
            },
            length: 0,
            push: sr,
            sort: [].sort,
            splice: [].splice
        },
        Hr = {};
    o("multiple,selected,checked,disabled,readOnly,required,open".split(","), function(t) {
        Hr[Kn(t)] = t
    });
    var _r = {};
    o("input,select,option,textarea,button,form,details".split(","), function(t) {
        _r[t] = !0
    });
    var Br = {
        ngMinlength: "minlength",
        ngMaxlength: "maxlength",
        ngMin: "min",
        ngMax: "max",
        ngPattern: "pattern"
    };
    o({
        data: kt,
        removeData: St
    }, function(t, e) {
        wt[e] = t
    }), o({
        data: kt,
        inheritedData: jt,
        scope: function(t) {
            return nr.data(t, "$scope") || jt(t.parentNode || t, ["$isolateScope", "$scope"])
        },
        isolateScope: function(t) {
            return nr.data(t, "$isolateScope") || nr.data(t, "$isolateScopeNoTemplate")
        },
        controller: Mt,
        injector: function(t) {
            return jt(t, "$injector")
        },
        removeAttr: function(t, e) {
            t.removeAttribute(e)
        },
        hasClass: At,
        css: function(t, e, n) {
            return e = $t(e), g(n) ? void(t.style[e] = n) : t.style[e]
        },
        attr: function(t, e, r) {
            var i = t.nodeType;
            if (i !== xr && i !== br && i !== Cr) {
                var o = Kn(e);
                if (Hr[o]) {
                    if (!g(r)) return t[e] || (t.attributes.getNamedItem(e) || p).specified ? o : n;
                    r ? (t[e] = !0, t.setAttribute(e, o)) : (t[e] = !1, t.removeAttribute(o))
                } else if (g(r)) t.setAttribute(e, r);
                else if (t.getAttribute) {
                    var a = t.getAttribute(e, 2);
                    return null === a ? n : a
                }
            }
        },
        prop: function(t, e, n) {
            return g(n) ? void(t[e] = n) : t[e]
        },
        text: function() {
            function t(t, e) {
                if (m(e)) {
                    var n = t.nodeType;
                    return n === wr || n === xr ? t.textContent : ""
                }
                t.textContent = e
            }
            return t.$dv = "", t
        }(),
        val: function(t, e) {
            if (m(e)) {
                if (t.multiple && "select" === N(t)) {
                    var n = [];
                    return o(t.options, function(t) {
                        t.selected && n.push(t.value || t.text)
                    }), 0 === n.length ? null : n
                }
                return t.value
            }
            t.value = e
        },
        html: function(t, e) {
            return m(e) ? t.innerHTML : (xt(t, !0), void(t.innerHTML = e))
        },
        empty: Pt
    }, function(t, e) {
        wt.prototype[e] = function(e, r) {
            var i, o, a = this.length;
            if (t !== Pt && (2 == t.length && t !== At && t !== Mt ? e : r) === n) {
                if (y(e)) {
                    for (i = 0; a > i; i++)
                        if (t === kt) t(this[i], e);
                        else
                            for (o in e) t(this[i], o, e[o]);
                    return this
                }
                for (var s = t.$dv, u = s === n ? Math.min(a, 1) : a, c = 0; u > c; c++) {
                    var l = t(this[c], e, r);
                    s = s ? s + l : l
                }
                return s
            }
            for (i = 0; a > i; i++) t(this[i], e, r);
            return this
        }
    }), o({
        removeData: St,
        on: function Jo(t, e, n, r) {
            if (g(r)) throw Nr("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
            if (mt(t)) {
                var i = Et(t, !0),
                    o = i.events,
                    a = i.handle;
                a || (a = i.handle = It(t, o));
                for (var s = e.indexOf(" ") >= 0 ? e.split(" ") : [e], u = s.length; u--;) {
                    e = s[u];
                    var c = o[e];
                    c || (o[e] = [], "mouseenter" === e || "mouseleave" === e ? Jo(t, Pr[e], function(t) {
                        var n = this,
                            r = t.relatedTarget;
                        (!r || r !== n && !n.contains(r)) && a(t, e)
                    }) : "$destroy" !== e && Or(t, e, a), c = o[e]), c.push(n)
                }
            }
        },
        off: Ct,
        one: function(t, e, n) {
            t = nr(t), t.on(e, function r() {
                t.off(e, n), t.off(e, r)
            }), t.on(e, n)
        },
        replaceWith: function(t, e) {
            var n, r = t.parentNode;
            xt(t), o(new wt(e), function(e) {
                n ? r.insertBefore(e, n.nextSibling) : r.replaceChild(e, t), n = e
            })
        },
        children: function(t) {
            var e = [];
            return o(t.childNodes, function(t) {
                t.nodeType === wr && e.push(t)
            }), e
        },
        contents: function(t) {
            return t.contentDocument || t.childNodes || []
        },
        append: function(t, e) {
            var n = t.nodeType;
            if (n === wr || n === Er) {
                e = new wt(e);
                for (var r = 0, i = e.length; i > r; r++) {
                    var o = e[r];
                    t.appendChild(o)
                }
            }
        },
        prepend: function(t, e) {
            if (t.nodeType === wr) {
                var n = t.firstChild;
                o(new wt(e), function(e) {
                    t.insertBefore(e, n)
                })
            }
        },
        wrap: function(t, e) {
            e = nr(e).eq(0).clone()[0];
            var n = t.parentNode;
            n && n.replaceChild(e, t), e.appendChild(t)
        },
        remove: Nt,
        detach: function(t) {
            Nt(t, !0)
        },
        after: function(t, e) {
            var n = t,
                r = t.parentNode;
            e = new wt(e);
            for (var i = 0, o = e.length; o > i; i++) {
                var a = e[i];
                r.insertBefore(a, n.nextSibling), n = a
            }
        },
        addClass: Ot,
        removeClass: Tt,
        toggleClass: function(t, e, n) {
            e && o(e.split(" "), function(e) {
                var r = n;
                m(r) && (r = !At(t, e)), (r ? Ot : Tt)(t, e)
            })
        },
        parent: function(t) {
            var e = t.parentNode;
            return e && e.nodeType !== Er ? e : null
        },
        next: function(t) {
            return t.nextElementSibling
        },
        find: function(t, e) {
            return t.getElementsByTagName ? t.getElementsByTagName(e) : []
        },
        clone: bt,
        triggerHandler: function(t, e, n) {
            var r, i, a, s = e.type || e,
                u = Et(t),
                c = u && u.events,
                l = c && c[s];
            l && (r = {
                preventDefault: function() {
                    this.defaultPrevented = !0
                },
                isDefaultPrevented: function() {
                    return this.defaultPrevented === !0
                },
                stopImmediatePropagation: function() {
                    this.immediatePropagationStopped = !0
                },
                isImmediatePropagationStopped: function() {
                    return this.immediatePropagationStopped === !0
                },
                stopPropagation: p,
                type: s,
                target: t
            }, e.type && (r = f(r, e)), i = R(l), a = n ? [r].concat(n) : [r], o(i, function(e) {
                r.isImmediatePropagationStopped() || e.apply(t, a)
            }))
        }
    }, function(t, e) {
        wt.prototype[e] = function(e, n, r) {
            for (var i, o = 0, a = this.length; a > o; o++) m(i) ? (i = t(this[o], e, n, r), g(i) && (i = nr(i))) : Dt(i, t(this[o], e, n, r));
            return g(i) ? i : this
        }, wt.prototype.bind = wt.prototype.on, wt.prototype.unbind = wt.prototype.off
    }), Ht.prototype = {
        put: function(t, e) {
            this[Ft(t, this.nextUid)] = e
        },
        get: function(t) {
            return this[Ft(t, this.nextUid)]
        },
        remove: function(t) {
            var e = this[t = Ft(t, this.nextUid)];
            return delete this[t], e
        }
    };
    var Lr = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
        zr = /,/,
        Gr = /^\s*(_?)(\S+?)\1\s*$/,
        Wr = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
        Yr = r("$injector");
    Lt.$$annotate = Bt;
    var Jr = r("$animate"),
        Kr = ["$provide", function(t) {
            this.$$selectors = {}, this.register = function(e, n) {
                var r = e + "-animation";
                if (e && "." != e.charAt(0)) throw Jr("notcsel", "Expecting class selector starting with '.' got '{0}'.", e);
                this.$$selectors[e.substr(1)] = r, t.factory(r, n)
            }, this.classNameFilter = function(t) {
                return 1 === arguments.length && (this.$$classNameFilter = t instanceof RegExp ? t : null), this.$$classNameFilter
            }, this.$get = ["$$q", "$$asyncCallback", "$rootScope", function(t, e, n) {
                function r(e) {
                    var r, i = t.defer();
                    return i.promise.$$cancelFn = function() {
                        r && r()
                    }, n.$$postDigest(function() {
                        r = e(function() {
                            i.resolve()
                        })
                    }), i.promise
                }

                function i(t, e) {
                    var n = [],
                        r = [],
                        i = ct();
                    return o((t.attr("class") || "").split(/\s+/), function(t) {
                        i[t] = !0
                    }), o(e, function(t, e) {
                        var o = i[e];
                        t === !1 && o ? r.push(e) : t !== !0 || o || n.push(e)
                    }), n.length + r.length > 0 && [n.length ? n : null, r.length ? r : null]
                }

                function a(t, e, n) {
                    for (var r = 0, i = e.length; i > r; ++r) {
                        var o = e[r];
                        t[o] = n
                    }
                }

                function s() {
                    return c || (c = t.defer(), e(function() {
                        c.resolve(), c = null
                    })), c.promise
                }

                function u(t, e) {
                    if (lr.isObject(e)) {
                        var n = f(e.from || {}, e.to || {});
                        t.css(n)
                    }
                }
                var c;
                return {
                    animate: function(t, e, n) {
                        return u(t, {
                            from: e,
                            to: n
                        }), s()
                    },
                    enter: function(t, e, n, r) {
                        return u(t, r), n ? n.after(t) : e.prepend(t), s()
                    },
                    leave: function(t, e) {
                        return u(t, e), t.remove(), s()
                    },
                    move: function(t, e, n, r) {
                        return this.enter(t, e, n, r)
                    },
                    addClass: function(t, e, n) {
                        return this.setClass(t, e, [], n)
                    },
                    $$addClassImmediately: function(t, e, n) {
                        return t = nr(t), e = w(e) ? e : dr(e) ? e.join(" ") : "", o(t, function(t) {
                            Ot(t, e)
                        }), u(t, n), s()
                    },
                    removeClass: function(t, e, n) {
                        return this.setClass(t, [], e, n);
                    },
                    $$removeClassImmediately: function(t, e, n) {
                        return t = nr(t), e = w(e) ? e : dr(e) ? e.join(" ") : "", o(t, function(t) {
                            Tt(t, e)
                        }), u(t, n), s()
                    },
                    setClass: function(t, e, n, o) {
                        var s = this,
                            u = "$$animateClasses",
                            c = !1;
                        t = nr(t);
                        var l = t.data(u);
                        l ? o && l.options && (l.options = lr.extend(l.options || {}, o)) : (l = {
                            classes: {},
                            options: o
                        }, c = !0);
                        var f = l.classes;
                        return e = dr(e) ? e : e.split(" "), n = dr(n) ? n : n.split(" "), a(f, e, !0), a(f, n, !1), c && (l.promise = r(function(e) {
                            var n = t.data(u);
                            if (t.removeData(u), n) {
                                var r = i(t, n.classes);
                                r && s.$$setClassImmediately(t, r[0], r[1], n.options)
                            }
                            e()
                        }), t.data(u, l)), l.promise
                    },
                    $$setClassImmediately: function(t, e, n, r) {
                        return e && this.$$addClassImmediately(t, e), n && this.$$removeClassImmediately(t, n), u(t, r), s()
                    },
                    enabled: p,
                    cancel: p
                }
            }]
        }],
        Zr = r("$compile");
    Zt.$inject = ["$provide", "$$sanitizeUriProvider"];
    var Xr = /^((?:x|data)[\:\-_])/i,
        Qr = r("$controller"),
        ti = "application/json",
        ei = {
            "Content-Type": ti + ";charset=utf-8"
        },
        ni = /^\[|^\{(?!\{)/,
        ri = {
            "[": /]$/,
            "{": /}$/
        },
        ii = /^\)\]\}',?\n/,
        oi = r("$interpolate"),
        ai = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
        si = {
            http: 80,
            https: 443,
            ftp: 21
        },
        ui = r("$location"),
        ci = {
            $$html5: !1,
            $$replace: !1,
            absUrl: Te("$$absUrl"),
            url: function(t) {
                if (m(t)) return this.$$url;
                var e = ai.exec(t);
                return (e[1] || "" === t) && this.path(decodeURIComponent(e[1])), (e[2] || e[1] || "" === t) && this.search(e[3] || ""), this.hash(e[5] || ""), this
            },
            protocol: Te("$$protocol"),
            host: Te("$$host"),
            port: Te("$$port"),
            path: Oe("$$path", function(t) {
                return t = null !== t ? t.toString() : "", "/" == t.charAt(0) ? t : "/" + t
            }),
            search: function(t, e) {
                switch (arguments.length) {
                    case 0:
                        return this.$$search;
                    case 1:
                        if (w(t) || b(t)) t = t.toString(), this.$$search = W(t);
                        else {
                            if (!y(t)) throw ui("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
                            t = q(t, {}), o(t, function(e, n) {
                                null == e && delete t[n]
                            }), this.$$search = t
                        }
                        break;
                    default:
                        m(e) || null === e ? delete this.$$search[t] : this.$$search[t] = e
                }
                return this.$$compose(), this
            },
            hash: Oe("$$hash", function(t) {
                return null !== t ? t.toString() : ""
            }),
            replace: function() {
                return this.$$replace = !0, this
            }
        };
    o([Ae, ke, Ee], function(t) {
        t.prototype = Object.create(ci), t.prototype.state = function(e) {
            if (!arguments.length) return this.$$state;
            if (t !== Ee || !this.$$html5) throw ui("nostate", "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");
            return this.$$state = m(e) ? null : e, this
        }
    });
    var li = r("$parse"),
        fi = Function.prototype.call,
        hi = Function.prototype.apply,
        di = Function.prototype.bind,
        pi = ct();
    o({
        "null": function() {
            return null
        },
        "true": function() {
            return !0
        },
        "false": function() {
            return !1
        },
        undefined: function() {}
    }, function(t, e) {
        t.constant = t.literal = t.sharedGetter = !0, pi[e] = t
    }), pi["this"] = function(t) {
        return t
    }, pi["this"].sharedGetter = !0;
    var $i = f(ct(), {
            "+": function(t, e, r, i) {
                return r = r(t, e), i = i(t, e), g(r) ? g(i) ? r + i : r : g(i) ? i : n
            },
            "-": function(t, e, n, r) {
                return n = n(t, e), r = r(t, e), (g(n) ? n : 0) - (g(r) ? r : 0)
            },
            "*": function(t, e, n, r) {
                return n(t, e) * r(t, e)
            },
            "/": function(t, e, n, r) {
                return n(t, e) / r(t, e)
            },
            "%": function(t, e, n, r) {
                return n(t, e) % r(t, e)
            },
            "===": function(t, e, n, r) {
                return n(t, e) === r(t, e)
            },
            "!==": function(t, e, n, r) {
                return n(t, e) !== r(t, e)
            },
            "==": function(t, e, n, r) {
                return n(t, e) == r(t, e)
            },
            "!=": function(t, e, n, r) {
                return n(t, e) != r(t, e)
            },
            "<": function(t, e, n, r) {
                return n(t, e) < r(t, e)
            },
            ">": function(t, e, n, r) {
                return n(t, e) > r(t, e)
            },
            "<=": function(t, e, n, r) {
                return n(t, e) <= r(t, e)
            },
            ">=": function(t, e, n, r) {
                return n(t, e) >= r(t, e)
            },
            "&&": function(t, e, n, r) {
                return n(t, e) && r(t, e)
            },
            "||": function(t, e, n, r) {
                return n(t, e) || r(t, e)
            },
            "!": function(t, e, n) {
                return !n(t, e)
            },
            "=": !0,
            "|": !0
        }),
        vi = {
            n: "\n",
            f: "\f",
            r: "\r",
            t: "	",
            v: "",
            "'": "'",
            '"': '"'
        },
        mi = function(t) {
            this.options = t
        };
    mi.prototype = {
        constructor: mi,
        lex: function(t) {
            for (this.text = t, this.index = 0, this.tokens = []; this.index < this.text.length;) {
                var e = this.text.charAt(this.index);
                if ('"' === e || "'" === e) this.readString(e);
                else if (this.isNumber(e) || "." === e && this.isNumber(this.peek())) this.readNumber();
                else if (this.isIdent(e)) this.readIdent();
                else if (this.is(e, "(){}[].,;:?")) this.tokens.push({
                    index: this.index,
                    text: e
                }), this.index++;
                else if (this.isWhitespace(e)) this.index++;
                else {
                    var n = e + this.peek(),
                        r = n + this.peek(2),
                        i = $i[e],
                        o = $i[n],
                        a = $i[r];
                    if (i || o || a) {
                        var s = a ? r : o ? n : e;
                        this.tokens.push({
                            index: this.index,
                            text: s,
                            operator: !0
                        }), this.index += s.length
                    } else this.throwError("Unexpected next character ", this.index, this.index + 1)
                }
            }
            return this.tokens
        },
        is: function(t, e) {
            return -1 !== e.indexOf(t)
        },
        peek: function(t) {
            var e = t || 1;
            return this.index + e < this.text.length ? this.text.charAt(this.index + e) : !1
        },
        isNumber: function(t) {
            return t >= "0" && "9" >= t && "string" == typeof t
        },
        isWhitespace: function(t) {
            return " " === t || "\r" === t || "	" === t || "\n" === t || "" === t || " " === t
        },
        isIdent: function(t) {
            return t >= "a" && "z" >= t || t >= "A" && "Z" >= t || "_" === t || "$" === t
        },
        isExpOperator: function(t) {
            return "-" === t || "+" === t || this.isNumber(t)
        },
        throwError: function(t, e, n) {
            n = n || this.index;
            var r = g(e) ? "s " + e + "-" + this.index + " [" + this.text.substring(e, n) + "]" : " " + n;
            throw li("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", t, r, this.text)
        },
        readNumber: function() {
            for (var t = "", e = this.index; this.index < this.text.length;) {
                var n = Kn(this.text.charAt(this.index));
                if ("." == n || this.isNumber(n)) t += n;
                else {
                    var r = this.peek();
                    if ("e" == n && this.isExpOperator(r)) t += n;
                    else if (this.isExpOperator(n) && r && this.isNumber(r) && "e" == t.charAt(t.length - 1)) t += n;
                    else {
                        if (!this.isExpOperator(n) || r && this.isNumber(r) || "e" != t.charAt(t.length - 1)) break;
                        this.throwError("Invalid exponent")
                    }
                }
                this.index++
            }
            this.tokens.push({
                index: e,
                text: t,
                constant: !0,
                value: Number(t)
            })
        },
        readIdent: function() {
            for (var t = this.index; this.index < this.text.length;) {
                var e = this.text.charAt(this.index);
                if (!this.isIdent(e) && !this.isNumber(e)) break;
                this.index++
            }
            this.tokens.push({
                index: t,
                text: this.text.slice(t, this.index),
                identifier: !0
            })
        },
        readString: function(t) {
            var e = this.index;
            this.index++;
            for (var n = "", r = t, i = !1; this.index < this.text.length;) {
                var o = this.text.charAt(this.index);
                if (r += o, i) {
                    if ("u" === o) {
                        var a = this.text.substring(this.index + 1, this.index + 5);
                        a.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + a + "]"), this.index += 4, n += String.fromCharCode(parseInt(a, 16))
                    } else {
                        var s = vi[o];
                        n += s || o
                    }
                    i = !1
                } else if ("\\" === o) i = !0;
                else {
                    if (o === t) return this.index++, void this.tokens.push({
                        index: e,
                        text: r,
                        constant: !0,
                        value: n
                    });
                    n += o
                }
                this.index++
            }
            this.throwError("Unterminated quote", e)
        }
    };
    var gi = function(t, e, n) {
        this.lexer = t, this.$filter = e, this.options = n
    };
    gi.ZERO = f(function() {
        return 0
    }, {
        sharedGetter: !0,
        constant: !0
    }), gi.prototype = {
        constructor: gi,
        parse: function(t) {
            this.text = t, this.tokens = this.lexer.lex(t);
            var e = this.statements();
            return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), e.literal = !!e.literal, e.constant = !!e.constant, e
        },
        primary: function() {
            var t;
            this.expect("(") ? (t = this.filterChain(), this.consume(")")) : this.expect("[") ? t = this.arrayDeclaration() : this.expect("{") ? t = this.object() : this.peek().identifier && this.peek().text in pi ? t = pi[this.consume().text] : this.peek().identifier ? t = this.identifier() : this.peek().constant ? t = this.constant() : this.throwError("not a primary expression", this.peek());
            for (var e, n; e = this.expect("(", "[", ".");) "(" === e.text ? (t = this.functionCall(t, n), n = null) : "[" === e.text ? (n = t, t = this.objectIndex(t)) : "." === e.text ? (n = t, t = this.fieldAccess(t)) : this.throwError("IMPOSSIBLE");
            return t
        },
        throwError: function(t, e) {
            throw li("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", e.text, t, e.index + 1, this.text, this.text.substring(e.index))
        },
        peekToken: function() {
            if (0 === this.tokens.length) throw li("ueoe", "Unexpected end of expression: {0}", this.text);
            return this.tokens[0]
        },
        peek: function(t, e, n, r) {
            return this.peekAhead(0, t, e, n, r)
        },
        peekAhead: function(t, e, n, r, i) {
            if (this.tokens.length > t) {
                var o = this.tokens[t],
                    a = o.text;
                if (a === e || a === n || a === r || a === i || !e && !n && !r && !i) return o
            }
            return !1
        },
        expect: function(t, e, n, r) {
            var i = this.peek(t, e, n, r);
            return i ? (this.tokens.shift(), i) : !1
        },
        consume: function(t) {
            if (0 === this.tokens.length) throw li("ueoe", "Unexpected end of expression: {0}", this.text);
            var e = this.expect(t);
            return e || this.throwError("is unexpected, expecting [" + t + "]", this.peek()), e
        },
        unaryFn: function(t, e) {
            var n = $i[t];
            return f(function(t, r) {
                return n(t, r, e)
            }, {
                constant: e.constant,
                inputs: [e]
            })
        },
        binaryFn: function(t, e, n, r) {
            var i = $i[e];
            return f(function(e, r) {
                return i(e, r, t, n)
            }, {
                constant: t.constant && n.constant,
                inputs: !r && [t, n]
            })
        },
        identifier: function() {
            for (var t = this.consume().text; this.peek(".") && this.peekAhead(1).identifier && !this.peekAhead(2, "(");) t += this.consume().text + this.consume().text;
            return He(t, this.options, this.text)
        },
        constant: function() {
            var t = this.consume().value;
            return f(function() {
                return t
            }, {
                constant: !0,
                literal: !0
            })
        },
        statements: function() {
            for (var t = [];;)
                if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && t.push(this.filterChain()), !this.expect(";")) return 1 === t.length ? t[0] : function(e, n) {
                    for (var r, i = 0, o = t.length; o > i; i++) r = t[i](e, n);
                    return r
                }
        },
        filterChain: function() {
            for (var t, e = this.expression(); t = this.expect("|");) e = this.filter(e);
            return e
        },
        filter: function(t) {
            var e, r, i = this.$filter(this.consume().text);
            if (this.peek(":"))
                for (e = [], r = []; this.expect(":");) e.push(this.expression());
            var o = [t].concat(e || []);
            return f(function(o, a) {
                var s = t(o, a);
                if (r) {
                    r[0] = s;
                    for (var u = e.length; u--;) r[u + 1] = e[u](o, a);
                    return i.apply(n, r)
                }
                return i(s)
            }, {
                constant: !i.$stateful && o.every(qe),
                inputs: !i.$stateful && o
            })
        },
        expression: function() {
            return this.assignment()
        },
        assignment: function() {
            var t, e, n = this.ternary();
            return (e = this.expect("=")) ? (n.assign || this.throwError("implies assignment but [" + this.text.substring(0, e.index) + "] can not be assigned to", e), t = this.ternary(), f(function(e, r) {
                return n.assign(e, t(e, r), r)
            }, {
                inputs: [n, t]
            })) : n
        },
        ternary: function() {
            var t, e, n = this.logicalOR();
            if ((e = this.expect("?")) && (t = this.assignment(), this.consume(":"))) {
                var r = this.assignment();
                return f(function(e, i) {
                    return n(e, i) ? t(e, i) : r(e, i)
                }, {
                    constant: n.constant && t.constant && r.constant
                })
            }
            return n
        },
        logicalOR: function() {
            for (var t, e = this.logicalAND(); t = this.expect("||");) e = this.binaryFn(e, t.text, this.logicalAND(), !0);
            return e
        },
        logicalAND: function() {
            for (var t, e = this.equality(); t = this.expect("&&");) e = this.binaryFn(e, t.text, this.equality(), !0);
            return e
        },
        equality: function() {
            for (var t, e = this.relational(); t = this.expect("==", "!=", "===", "!==");) e = this.binaryFn(e, t.text, this.relational());
            return e
        },
        relational: function() {
            for (var t, e = this.additive(); t = this.expect("<", ">", "<=", ">=");) e = this.binaryFn(e, t.text, this.additive());
            return e
        },
        additive: function() {
            for (var t, e = this.multiplicative(); t = this.expect("+", "-");) e = this.binaryFn(e, t.text, this.multiplicative());
            return e
        },
        multiplicative: function() {
            for (var t, e = this.unary(); t = this.expect("*", "/", "%");) e = this.binaryFn(e, t.text, this.unary());
            return e
        },
        unary: function() {
            var t;
            return this.expect("+") ? this.primary() : (t = this.expect("-")) ? this.binaryFn(gi.ZERO, t.text, this.unary()) : (t = this.expect("!")) ? this.unaryFn(t.text, this.unary()) : this.primary()
        },
        fieldAccess: function(t) {
            var e = this.identifier();
            return f(function(r, i, o) {
                var a = o || t(r, i);
                return null == a ? n : e(a)
            }, {
                assign: function(n, r, i) {
                    var o = t(n, i);
                    return o || t.assign(n, o = {}, i), e.assign(o, r)
                }
            })
        },
        objectIndex: function(t) {
            var e = this.text,
                r = this.expression();
            return this.consume("]"), f(function(i, o) {
                var a, s = t(i, o),
                    u = Pe(r(i, o), e);
                return je(u, e), s ? a = Ne(s[u], e) : n
            }, {
                assign: function(n, i, o) {
                    var a = je(Pe(r(n, o), e), e),
                        s = Ne(t(n, o), e);
                    return s || t.assign(n, s = {}, o), s[a] = i
                }
            })
        },
        functionCall: function(t, e) {
            var r = [];
            if (")" !== this.peekToken().text)
                do r.push(this.expression()); while (this.expect(","));
            this.consume(")");
            var i = this.text,
                o = r.length ? [] : null;
            return function(a, s) {
                var u = e ? e(a, s) : g(e) ? n : a,
                    c = t(a, s, u) || p;
                if (o)
                    for (var l = r.length; l--;) o[l] = Ne(r[l](a, s), i);
                Ne(u, i), Ve(c, i);
                var f = c.apply ? c.apply(u, o) : c(o[0], o[1], o[2], o[3], o[4]);
                return o && (o.length = 0), Ne(f, i)
            }
        },
        arrayDeclaration: function() {
            var t = [];
            if ("]" !== this.peekToken().text)
                do {
                    if (this.peek("]")) break;
                    t.push(this.expression())
                } while (this.expect(","));
            return this.consume("]"), f(function(e, n) {
                for (var r = [], i = 0, o = t.length; o > i; i++) r.push(t[i](e, n));
                return r
            }, {
                literal: !0,
                constant: t.every(qe),
                inputs: t
            })
        },
        object: function() {
            var t = [],
                e = [];
            if ("}" !== this.peekToken().text)
                do {
                    if (this.peek("}")) break;
                    var n = this.consume();
                    n.constant ? t.push(n.value) : n.identifier ? t.push(n.text) : this.throwError("invalid key", n), this.consume(":"), e.push(this.expression())
                } while (this.expect(","));
            return this.consume("}"), f(function(n, r) {
                for (var i = {}, o = 0, a = e.length; a > o; o++) i[t[o]] = e[o](n, r);
                return i
            }, {
                literal: !0,
                constant: e.every(qe),
                inputs: e
            })
        }
    };
    var yi = ct(),
        wi = ct(),
        bi = Object.prototype.valueOf,
        xi = r("$sce"),
        Ci = {
            HTML: "html",
            CSS: "css",
            URL: "url",
            RESOURCE_URL: "resourceUrl",
            JS: "js"
        },
        Zr = r("$compile"),
        Si = e.createElement("a"),
        Ei = on(t.location.href);
    un.$inject = ["$provide"], hn.$inject = ["$locale"], dn.$inject = ["$locale"];
    var ki = ".",
        Ai = {
            yyyy: vn("FullYear", 4),
            yy: vn("FullYear", 2, 0, !0),
            y: vn("FullYear", 1),
            MMMM: mn("Month"),
            MMM: mn("Month", !0),
            MM: vn("Month", 2, 1),
            M: vn("Month", 1, 1),
            dd: vn("Date", 2),
            d: vn("Date", 1),
            HH: vn("Hours", 2),
            H: vn("Hours", 1),
            hh: vn("Hours", 2, -12),
            h: vn("Hours", 1, -12),
            mm: vn("Minutes", 2),
            m: vn("Minutes", 1),
            ss: vn("Seconds", 2),
            s: vn("Seconds", 1),
            sss: vn("Milliseconds", 3),
            EEEE: mn("Day"),
            EEE: mn("Day", !0),
            a: xn,
            Z: gn,
            ww: bn(2),
            w: bn(1),
            G: Cn,
            GG: Cn,
            GGG: Cn,
            GGGG: Sn
        },
        Ti = /((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
        Oi = /^\-?\d+$/;
    En.$inject = ["$locale"];
    var Di = v(Kn),
        Mi = v(Xn);
    Tn.$inject = ["$parse"];
    var ji = v({
            restrict: "E",
            compile: function(t, e) {
                return e.href || e.xlinkHref || e.name ? void 0 : function(t, e) {
                    if ("a" === e[0].nodeName.toLowerCase()) {
                        var n = "[object SVGAnimatedString]" === ur.call(e.prop("href")) ? "xlink:href" : "href";
                        e.on("click", function(t) {
                            e.attr(n) || t.preventDefault()
                        })
                    }
                }
            }
        }),
        Pi = {};
    o(Hr, function(t, e) {
        if ("multiple" != t) {
            var n = Xt("ng-" + e);
            Pi[n] = function() {
                return {
                    restrict: "A",
                    priority: 100,
                    link: function(t, r, i) {
                        t.$watch(i[n], function(t) {
                            i.$set(e, !!t)
                        })
                    }
                }
            }
        }
    }), o(Br, function(t, e) {
        Pi[e] = function() {
            return {
                priority: 100,
                link: function(t, n, r) {
                    if ("ngPattern" === e && "/" == r.ngPattern.charAt(0)) {
                        var i = r.ngPattern.match(Yn);
                        if (i) return void r.$set("ngPattern", new RegExp(i[1], i[2]))
                    }
                    t.$watch(r[e], function(t) {
                        r.$set(e, t)
                    })
                }
            }
        }
    }), o(["src", "srcset", "href"], function(t) {
        var e = Xt("ng-" + t);
        Pi[e] = function() {
            return {
                priority: 99,
                link: function(n, r, i) {
                    var o = t,
                        a = t;
                    "href" === t && "[object SVGAnimatedString]" === ur.call(r.prop("href")) && (a = "xlinkHref", i.$attr[a] = "xlink:href", o = null), i.$observe(e, function(e) {
                        return e ? (i.$set(a, e), void(er && o && r.prop(o, i[a]))) : void("href" === t && i.$set(a, null))
                    })
                }
            }
        }
    });
    var Ni = {
            $addControl: p,
            $$renameControl: Dn,
            $removeControl: p,
            $setValidity: p,
            $setDirty: p,
            $setPristine: p,
            $setSubmitted: p
        },
        Vi = "ng-submitted";
    Mn.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
    var qi = function(t) {
            return ["$timeout", function(e) {
                var r = {
                    name: "form",
                    restrict: t ? "EAC" : "E",
                    controller: Mn,
                    compile: function(r, i) {
                        r.addClass(mo).addClass($o);
                        var o = i.name ? "name" : t && i.ngForm ? "ngForm" : !1;
                        return {
                            pre: function(t, r, i, a) {
                                if (!("action" in i)) {
                                    var s = function(e) {
                                        t.$apply(function() {
                                            a.$commitViewValue(), a.$setSubmitted()
                                        }), e.preventDefault()
                                    };
                                    Or(r[0], "submit", s), r.on("$destroy", function() {
                                        e(function() {
                                            Dr(r[0], "submit", s)
                                        }, 0, !1)
                                    })
                                }
                                var u = a.$$parentForm;
                                o && (Re(t, null, a.$name, a, a.$name), i.$observe(o, function(e) {
                                    a.$name !== e && (Re(t, null, a.$name, n, a.$name), u.$$renameControl(a, e), Re(t, null, a.$name, a, a.$name))
                                })), r.on("$destroy", function() {
                                    u.$removeControl(a), o && Re(t, null, i[o], n, a.$name), f(a, Ni)
                                })
                            }
                        }
                    }
                };
                return r
            }]
        },
        Ri = qi(),
        Ii = qi(!0),
        Ui = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,
        Fi = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
        Hi = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
        _i = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
        Bi = /^(\d{4})-(\d{2})-(\d{2})$/,
        Li = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
        zi = /^(\d{4})-W(\d\d)$/,
        Gi = /^(\d{4})-(\d\d)$/,
        Wi = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
        Yi = {
            text: Pn,
            date: Rn("date", Bi, qn(Bi, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
            "datetime-local": Rn("datetimelocal", Li, qn(Li, ["yyyy", "MM", "dd", "HH", "mm", "ss", "sss"]), "yyyy-MM-ddTHH:mm:ss.sss"),
            time: Rn("time", Wi, qn(Wi, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
            week: Rn("week", zi, Vn, "yyyy-Www"),
            month: Rn("month", Gi, qn(Gi, ["yyyy", "MM"]), "yyyy-MM"),
            number: Un,
            url: Fn,
            email: Hn,
            radio: _n,
            checkbox: Ln,
            hidden: p,
            button: p,
            submit: p,
            reset: p,
            file: p
        },
        Ji = ["$browser", "$sniffer", "$filter", "$parse", function(t, e, n, r) {
            return {
                restrict: "E",
                require: ["?ngModel"],
                link: {
                    pre: function(i, o, a, s) {
                        s[0] && (Yi[Kn(a.type)] || Yi.text)(i, o, a, s[0], e, t, n, r)
                    }
                }
            }
        }],
        Ki = /^(true|false|\d+)$/,
        Zi = function() {
            return {
                restrict: "A",
                priority: 100,
                compile: function(t, e) {
                    return Ki.test(e.ngValue) ? function(t, e, n) {
                        n.$set("value", t.$eval(n.ngValue))
                    } : function(t, e, n) {
                        t.$watch(n.ngValue, function(t) {
                            n.$set("value", t)
                        })
                    }
                }
            }
        },
        Xi = ["$compile", function(t) {
            return {
                restrict: "AC",
                compile: function(e) {
                    return t.$$addBindingClass(e),
                        function(e, r, i) {
                            t.$$addBindingInfo(r, i.ngBind), r = r[0], e.$watch(i.ngBind, function(t) {
                                r.textContent = t === n ? "" : t
                            })
                        }
                }
            }
        }],
        Qi = ["$interpolate", "$compile", function(t, e) {
            return {
                compile: function(r) {
                    return e.$$addBindingClass(r),
                        function(r, i, o) {
                            var a = t(i.attr(o.$attr.ngBindTemplate));
                            e.$$addBindingInfo(i, a.expressions), i = i[0], o.$observe("ngBindTemplate", function(t) {
                                i.textContent = t === n ? "" : t
                            })
                        }
                }
            }
        }],
        to = ["$sce", "$parse", "$compile", function(t, e, n) {
            return {
                restrict: "A",
                compile: function(r, i) {
                    var o = e(i.ngBindHtml),
                        a = e(i.ngBindHtml, function(t) {
                            return (t || "").toString()
                        });
                    return n.$$addBindingClass(r),
                        function(e, r, i) {
                            n.$$addBindingInfo(r, i.ngBindHtml), e.$watch(a, function() {
                                r.html(t.getTrustedHtml(o(e)) || "")
                            })
                        }
                }
            }
        }],
        eo = v({
            restrict: "A",
            require: "ngModel",
            link: function(t, e, n, r) {
                r.$viewChangeListeners.push(function() {
                    t.$eval(n.ngChange)
                })
            }
        }),
        no = zn("", !0),
        ro = zn("Odd", 0),
        io = zn("Even", 1),
        oo = On({
            compile: function(t, e) {
                e.$set("ngCloak", n), t.removeClass("ng-cloak")
            }
        }),
        ao = [function() {
            return {
                restrict: "A",
                scope: !0,
                controller: "@",
                priority: 500
            }
        }],
        so = {},
        uo = {
            blur: !0,
            focus: !0
        };
    o("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(t) {
        var e = Xt("ng-" + t);
        so[e] = ["$parse", "$rootScope", function(n, r) {
            return {
                restrict: "A",
                compile: function(i, o) {
                    var a = n(o[e], null, !0);
                    return function(e, n) {
                        n.on(t, function(n) {
                            var i = function() {
                                a(e, {
                                    $event: n
                                })
                            };
                            uo[t] && r.$$phase ? e.$evalAsync(i) : e.$apply(i)
                        })
                    }
                }
            }
        }]
    });
    var co = ["$animate", function(t) {
            return {
                multiElement: !0,
                transclude: "element",
                priority: 600,
                terminal: !0,
                restrict: "A",
                $$tlb: !0,
                link: function(n, r, i, o, a) {
                    var s, u, c;
                    n.$watch(i.ngIf, function(n) {
                        n ? u || a(function(n, o) {
                            u = o, n[n.length++] = e.createComment(" end ngIf: " + i.ngIf + " "), s = {
                                clone: n
                            }, t.enter(n, r.parent(), r)
                        }) : (c && (c.remove(), c = null), u && (u.$destroy(), u = null), s && (c = ut(s.clone), t.leave(c).then(function() {
                            c = null
                        }), s = null))
                    })
                }
            }
        }],
        lo = ["$templateRequest", "$anchorScroll", "$animate", function(t, e, n) {
            return {
                restrict: "ECA",
                priority: 400,
                terminal: !0,
                transclude: "element",
                controller: lr.noop,
                compile: function(r, i) {
                    var o = i.ngInclude || i.src,
                        a = i.onload || "",
                        s = i.autoscroll;
                    return function(r, i, u, c, l) {
                        var f, h, d, p = 0,
                            $ = function() {
                                h && (h.remove(), h = null), f && (f.$destroy(), f = null), d && (n.leave(d).then(function() {
                                    h = null
                                }), h = d, d = null)
                            };
                        r.$watch(o, function(o) {
                            var u = function() {
                                    !g(s) || s && !r.$eval(s) || e()
                                },
                                h = ++p;
                            o ? (t(o, !0).then(function(t) {
                                if (h === p) {
                                    var e = r.$new();
                                    c.template = t;
                                    var s = l(e, function(t) {
                                        $(), n.enter(t, null, i).then(u)
                                    });
                                    f = e, d = s, f.$emit("$includeContentLoaded", o), r.$eval(a)
                                }
                            }, function() {
                                h === p && ($(), r.$emit("$includeContentError", o))
                            }), r.$emit("$includeContentRequested", o)) : ($(), c.template = null)
                        })
                    }
                }
            }
        }],
        fo = ["$compile", function(t) {
            return {
                restrict: "ECA",
                priority: -400,
                require: "ngInclude",
                link: function(n, r, i, o) {
                    return /SVG/.test(r[0].toString()) ? (r.empty(), void t(gt(o.template, e).childNodes)(n, function(t) {
                        r.append(t)
                    }, {
                        futureParentElement: r
                    })) : (r.html(o.template), void t(r.contents())(n))
                }
            }
        }],
        ho = On({
            priority: 450,
            compile: function() {
                return {
                    pre: function(t, e, n) {
                        t.$eval(n.ngInit)
                    }
                }
            }
        }),
        po = function() {
            return {
                restrict: "A",
                priority: 100,
                require: "ngModel",
                link: function(t, e, r, i) {
                    var a = e.attr(r.$attr.ngList) || ", ",
                        s = "false" !== r.ngTrim,
                        u = s ? pr(a) : a,
                        c = function(t) {
                            if (!m(t)) {
                                var e = [];
                                return t && o(t.split(u), function(t) {
                                    t && e.push(s ? pr(t) : t)
                                }), e
                            }
                        };
                    i.$parsers.push(c), i.$formatters.push(function(t) {
                        return dr(t) ? t.join(a) : n
                    }), i.$isEmpty = function(t) {
                        return !t || !t.length
                    }
                }
            }
        },
        $o = "ng-valid",
        vo = "ng-invalid",
        mo = "ng-pristine",
        go = "ng-dirty",
        yo = "ng-untouched",
        wo = "ng-touched",
        bo = "ng-pending",
        xo = r("ngModel"),
        Co = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function(t, e, r, i, a, s, u, c, l, f) {
            this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$$rawModelValue = n, this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = n, this.$name = f(r.name || "", !1)(t);
            var h, d = a(r.ngModel),
                $ = d.assign,
                v = d,
                y = $,
                w = null,
                x = this;
            this.$$setOptions = function(t) {
                if (x.$options = t, t && t.getterSetter) {
                    var e = a(r.ngModel + "()"),
                        n = a(r.ngModel + "($$$p)");
                    v = function(t) {
                        var n = d(t);
                        return C(n) && (n = e(t)), n
                    }, y = function(t, e) {
                        C(d(t)) ? n(t, {
                            $$$p: x.$modelValue
                        }) : $(t, x.$modelValue)
                    }
                } else if (!d.assign) throw xo("nonassign", "Expression '{0}' is non-assignable. Element: {1}", r.ngModel, z(i))
            }, this.$render = p, this.$isEmpty = function(t) {
                return m(t) || "" === t || null === t || t !== t
            };
            var S = i.inheritedData("$formController") || Ni,
                E = 0;
            Gn({
                ctrl: this,
                $element: i,
                set: function(t, e) {
                    t[e] = !0
                },
                unset: function(t, e) {
                    delete t[e]
                },
                parentForm: S,
                $animate: s
            }), this.$setPristine = function() {
                x.$dirty = !1, x.$pristine = !0, s.removeClass(i, go), s.addClass(i, mo)
            }, this.$setDirty = function() {
                x.$dirty = !0, x.$pristine = !1, s.removeClass(i, mo), s.addClass(i, go), S.$setDirty()
            }, this.$setUntouched = function() {
                x.$touched = !1, x.$untouched = !0, s.setClass(i, yo, wo)
            }, this.$setTouched = function() {
                x.$touched = !0, x.$untouched = !1, s.setClass(i, wo, yo)
            }, this.$rollbackViewValue = function() {
                u.cancel(w), x.$viewValue = x.$$lastCommittedViewValue, x.$render()
            }, this.$validate = function() {
                if (!b(x.$modelValue) || !isNaN(x.$modelValue)) {
                    var t = x.$$lastCommittedViewValue,
                        e = x.$$rawModelValue,
                        r = x.$valid,
                        i = x.$modelValue,
                        o = x.$options && x.$options.allowInvalid;
                    x.$$runValidators(e, t, function(t) {
                        o || r === t || (x.$modelValue = t ? e : n, x.$modelValue !== i && x.$$writeModelToScope())
                    })
                }
            }, this.$$runValidators = function(t, e, r) {
                function i() {
                    var t = x.$$parserName || "parse";
                    return h !== n ? (h || (o(x.$validators, function(t, e) {
                        u(e, null)
                    }), o(x.$asyncValidators, function(t, e) {
                        u(e, null)
                    })), u(t, h), h) : (u(t, null), !0)
                }

                function a() {
                    var n = !0;
                    return o(x.$validators, function(r, i) {
                        var o = r(t, e);
                        n = n && o, u(i, o)
                    }), n ? !0 : (o(x.$asyncValidators, function(t, e) {
                        u(e, null)
                    }), !1)
                }

                function s() {
                    var r = [],
                        i = !0;
                    o(x.$asyncValidators, function(o, a) {
                        var s = o(t, e);
                        if (!M(s)) throw xo("$asyncValidators", "Expected asynchronous validator to return a promise but got '{0}' instead.", s);
                        u(a, n), r.push(s.then(function() {
                            u(a, !0)
                        }, function(t) {
                            i = !1, u(a, !1)
                        }))
                    }), r.length ? l.all(r).then(function() {
                        c(i)
                    }, p) : c(!0)
                }

                function u(t, e) {
                    f === E && x.$setValidity(t, e)
                }

                function c(t) {
                    f === E && r(t)
                }
                E++;
                var f = E;
                return i() && a() ? void s() : void c(!1)
            }, this.$commitViewValue = function() {
                var t = x.$viewValue;
                u.cancel(w), (x.$$lastCommittedViewValue !== t || "" === t && x.$$hasNativeValidators) && (x.$$lastCommittedViewValue = t, x.$pristine && this.$setDirty(), this.$$parseAndValidate())
            }, this.$$parseAndValidate = function() {
                function e() {
                    x.$modelValue !== a && x.$$writeModelToScope()
                }
                var r = x.$$lastCommittedViewValue,
                    i = r;
                if (h = m(i) ? n : !0)
                    for (var o = 0; o < x.$parsers.length; o++)
                        if (i = x.$parsers[o](i), m(i)) {
                            h = !1;
                            break
                        }
                b(x.$modelValue) && isNaN(x.$modelValue) && (x.$modelValue = v(t));
                var a = x.$modelValue,
                    s = x.$options && x.$options.allowInvalid;
                x.$$rawModelValue = i, s && (x.$modelValue = i, e()), x.$$runValidators(i, x.$$lastCommittedViewValue, function(t) {
                    s || (x.$modelValue = t ? i : n, e())
                })
            }, this.$$writeModelToScope = function() {
                y(t, x.$modelValue), o(x.$viewChangeListeners, function(t) {
                    try {
                        t()
                    } catch (n) {
                        e(n)
                    }
                })
            }, this.$setViewValue = function(t, e) {
                x.$viewValue = t, (!x.$options || x.$options.updateOnDefault) && x.$$debounceViewValueCommit(e)
            }, this.$$debounceViewValueCommit = function(e) {
                var n, r = 0,
                    i = x.$options;
                i && g(i.debounce) && (n = i.debounce, b(n) ? r = n : b(n[e]) ? r = n[e] : b(n["default"]) && (r = n["default"])), u.cancel(w), r ? w = u(function() {
                    x.$commitViewValue()
                }, r) : c.$$phase ? x.$commitViewValue() : t.$apply(function() {
                    x.$commitViewValue()
                })
            }, t.$watch(function() {
                var e = v(t);
                if (e !== x.$modelValue && (x.$modelValue === x.$modelValue || e === e)) {
                    x.$modelValue = x.$$rawModelValue = e, h = n;
                    for (var r = x.$formatters, i = r.length, o = e; i--;) o = r[i](o);
                    x.$viewValue !== o && (x.$viewValue = x.$$lastCommittedViewValue = o, x.$render(), x.$$runValidators(e, o, p))
                }
                return e
            })
        }],
        So = ["$rootScope", function(t) {
            return {
                restrict: "A",
                require: ["ngModel", "^?form", "^?ngModelOptions"],
                controller: Co,
                priority: 1,
                compile: function(e) {
                    return e.addClass(mo).addClass(yo).addClass($o), {
                        pre: function(t, e, n, r) {
                            var i = r[0],
                                o = r[1] || Ni;
                            i.$$setOptions(r[2] && r[2].$options), o.$addControl(i), n.$observe("name", function(t) {
                                i.$name !== t && o.$$renameControl(i, t)
                            }), t.$on("$destroy", function() {
                                o.$removeControl(i)
                            })
                        },
                        post: function(e, n, r, i) {
                            var o = i[0];
                            o.$options && o.$options.updateOn && n.on(o.$options.updateOn, function(t) {
                                o.$$debounceViewValueCommit(t && t.type)
                            }), n.on("blur", function(n) {
                                o.$touched || (t.$$phase ? e.$evalAsync(o.$setTouched) : e.$apply(o.$setTouched))
                            })
                        }
                    }
                }
            }
        }],
        Eo = /(\s+|^)default(\s+|$)/,
        ko = function() {
            return {
                restrict: "A",
                controller: ["$scope", "$attrs", function(t, e) {
                    var r = this;
                    this.$options = t.$eval(e.ngModelOptions), this.$options.updateOn !== n ? (this.$options.updateOnDefault = !1, this.$options.updateOn = pr(this.$options.updateOn.replace(Eo, function() {
                        return r.$options.updateOnDefault = !0, " "
                    }))) : this.$options.updateOnDefault = !0
                }]
            }
        },
        Ao = On({
            terminal: !0,
            priority: 1e3
        }),
        To = ["$locale", "$interpolate", function(t, e) {
            var n = /{}/g,
                r = /^when(Minus)?(.+)$/;
            return {
                restrict: "EA",
                link: function(i, a, s) {
                    function u(t) {
                        a.text(t || "")
                    }
                    var c, l = s.count,
                        f = s.$attr.when && a.attr(s.$attr.when),
                        h = s.offset || 0,
                        d = i.$eval(f) || {},
                        p = {},
                        $ = e.startSymbol(),
                        v = e.endSymbol(),
                        m = $ + l + "-" + h + v,
                        g = lr.noop;
                    o(s, function(t, e) {
                        var n = r.exec(e);
                        if (n) {
                            var i = (n[1] ? "-" : "") + Kn(n[2]);
                            d[i] = a.attr(s.$attr[e])
                        }
                    }), o(d, function(t, r) {
                        p[r] = e(t.replace(n, m))
                    }), i.$watch(l, function(e) {
                        var n = parseFloat(e),
                            r = isNaN(n);
                        r || n in d || (n = t.pluralCat(n - h)), n === c || r && isNaN(c) || (g(), g = i.$watch(p[n], u), c = n)
                    })
                }
            }
        }],
        Oo = ["$parse", "$animate", function(t, a) {
            var s = "$$NG_REMOVED",
                u = r("ngRepeat"),
                c = function(t, e, n, r, i, o, a) {
                    t[n] = r, i && (t[i] = o), t.$index = e, t.$first = 0 === e, t.$last = e === a - 1, t.$middle = !(t.$first || t.$last), t.$odd = !(t.$even = 0 === (1 & e))
                },
                l = function(t) {
                    return t.clone[0]
                },
                f = function(t) {
                    return t.clone[t.clone.length - 1]
                };
            return {
                restrict: "A",
                multiElement: !0,
                transclude: "element",
                priority: 1e3,
                terminal: !0,
                $$tlb: !0,
                compile: function(r, h) {
                    var d = h.ngRepeat,
                        p = e.createComment(" end ngRepeat: " + d + " "),
                        $ = d.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                    if (!$) throw u("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", d);
                    var v = $[1],
                        m = $[2],
                        g = $[3],
                        y = $[4];
                    if ($ = v.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/), !$) throw u("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", v);
                    var w = $[3] || $[1],
                        b = $[2];
                    if (g && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(g) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(g))) throw u("badident", "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", g);
                    var x, C, S, E, k = {
                        $id: Ft
                    };
                    return y ? x = t(y) : (S = function(t, e) {
                            return Ft(e)
                        }, E = function(t) {
                            return t
                        }),
                        function(t, e, r, h, $) {
                            x && (C = function(e, n, r) {
                                return b && (k[b] = e), k[w] = n, k.$index = r, x(t, k)
                            });
                            var v = ct();
                            t.$watchCollection(m, function(r) {
                                var h, m, y, x, k, A, T, O, D, M, j, P, N = e[0],
                                    V = ct();
                                if (g && (t[g] = r), i(r)) D = r, O = C || S;
                                else {
                                    O = C || E, D = [];
                                    for (var q in r) r.hasOwnProperty(q) && "$" != q.charAt(0) && D.push(q);
                                    D.sort()
                                }
                                for (x = D.length, j = new Array(x), h = 0; x > h; h++)
                                    if (k = r === D ? h : D[h], A = r[k], T = O(k, A, h), v[T]) M = v[T], delete v[T], V[T] = M, j[h] = M;
                                    else {
                                        if (V[T]) throw o(j, function(t) {
                                            t && t.scope && (v[t.id] = t)
                                        }), u("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", d, T, A);
                                        j[h] = {
                                            id: T,
                                            scope: n,
                                            clone: n
                                        }, V[T] = !0
                                    }
                                for (var R in v) {
                                    if (M = v[R], P = ut(M.clone), a.leave(P), P[0].parentNode)
                                        for (h = 0, m = P.length; m > h; h++) P[h][s] = !0;
                                    M.scope.$destroy()
                                }
                                for (h = 0; x > h; h++)
                                    if (k = r === D ? h : D[h], A = r[k], M = j[h], M.scope) {
                                        y = N;
                                        do y = y.nextSibling; while (y && y[s]);
                                        l(M) != y && a.move(ut(M.clone), null, nr(N)), N = f(M), c(M.scope, h, w, A, b, k, x)
                                    } else $(function(t, e) {
                                        M.scope = e;
                                        var n = p.cloneNode(!1);
                                        t[t.length++] = n, a.enter(t, null, nr(N)), N = n, M.clone = t, V[M.id] = M, c(M.scope, h, w, A, b, k, x)
                                    });
                                v = V
                            })
                        }
                }
            }
        }],
        Do = "ng-hide",
        Mo = "ng-hide-animate",
        jo = ["$animate", function(t) {
            return {
                restrict: "A",
                multiElement: !0,
                link: function(e, n, r) {
                    e.$watch(r.ngShow, function(e) {
                        t[e ? "removeClass" : "addClass"](n, Do, {
                            tempClasses: Mo
                        })
                    })
                }
            }
        }],
        Po = ["$animate", function(t) {
            return {
                restrict: "A",
                multiElement: !0,
                link: function(e, n, r) {
                    e.$watch(r.ngHide, function(e) {
                        t[e ? "addClass" : "removeClass"](n, Do, {
                            tempClasses: Mo
                        })
                    })
                }
            }
        }],
        No = On(function(t, e, n) {
            t.$watch(n.ngStyle, function(t, n) {
                n && t !== n && o(n, function(t, n) {
                    e.css(n, "")
                }), t && e.css(t)
            }, !0)
        }),
        Vo = ["$animate", function(t) {
            return {
                restrict: "EA",
                require: "ngSwitch",
                controller: ["$scope", function() {
                    this.cases = {}
                }],
                link: function(n, r, i, a) {
                    var s = i.ngSwitch || i.on,
                        u = [],
                        c = [],
                        l = [],
                        f = [],
                        h = function(t, e) {
                            return function() {
                                t.splice(e, 1)
                            }
                        };
                    n.$watch(s, function(n) {
                        var r, i;
                        for (r = 0, i = l.length; i > r; ++r) t.cancel(l[r]);
                        for (l.length = 0, r = 0, i = f.length; i > r; ++r) {
                            var s = ut(c[r].clone);
                            f[r].$destroy();
                            var d = l[r] = t.leave(s);
                            d.then(h(l, r))
                        }
                        c.length = 0, f.length = 0, (u = a.cases["!" + n] || a.cases["?"]) && o(u, function(n) {
                            n.transclude(function(r, i) {
                                f.push(i);
                                var o = n.element;
                                r[r.length++] = e.createComment(" end ngSwitchWhen: ");
                                var a = {
                                    clone: r
                                };
                                c.push(a), t.enter(r, o.parent(), o)
                            })
                        })
                    })
                }
            }
        }],
        qo = On({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function(t, e, n, r, i) {
                r.cases["!" + n.ngSwitchWhen] = r.cases["!" + n.ngSwitchWhen] || [], r.cases["!" + n.ngSwitchWhen].push({
                    transclude: i,
                    element: e
                })
            }
        }),
        Ro = On({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function(t, e, n, r, i) {
                r.cases["?"] = r.cases["?"] || [], r.cases["?"].push({
                    transclude: i,
                    element: e
                })
            }
        }),
        Io = On({
            restrict: "EAC",
            link: function(t, e, n, i, o) {
                if (!o) throw r("ngTransclude")("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", z(e));
                o(function(t) {
                    e.empty(), e.append(t)
                })
            }
        }),
        Uo = ["$templateCache", function(t) {
            return {
                restrict: "E",
                terminal: !0,
                compile: function(e, n) {
                    if ("text/ng-template" == n.type) {
                        var r = n.id,
                            i = e[0].text;
                        t.put(r, i)
                    }
                }
            }
        }],
        Fo = r("ngOptions"),
        Ho = v({
            restrict: "A",
            terminal: !0
        }),
        _o = ["$compile", "$parse", function(t, r) {
            var i = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
                s = {
                    $setViewValue: p
                };
            return {
                restrict: "E",
                require: ["select", "?ngModel"],
                controller: ["$element", "$scope", "$attrs", function(t, e, n) {
                    var r, i, o = this,
                        a = {},
                        u = s;
                    o.databound = n.ngModel, o.init = function(t, e, n) {
                        u = t, r = e, i = n
                    }, o.addOption = function(e, n) {
                        at(e, '"option value"'), a[e] = !0, u.$viewValue == e && (t.val(e), i.parent() && i.remove()), n && n[0].hasAttribute("selected") && (n[0].selected = !0)
                    }, o.removeOption = function(t) {
                        this.hasOption(t) && (delete a[t], u.$viewValue === t && this.renderUnknownOption(t))
                    }, o.renderUnknownOption = function(e) {
                        var n = "? " + Ft(e) + " ?";
                        i.val(n), t.prepend(i), t.val(n), i.prop("selected", !0)
                    }, o.hasOption = function(t) {
                        return a.hasOwnProperty(t)
                    }, e.$on("$destroy", function() {
                        o.renderUnknownOption = p
                    })
                }],
                link: function(s, u, c, l) {
                    function f(t, e, n, r) {
                        n.$render = function() {
                            var t = n.$viewValue;
                            r.hasOption(t) ? (S.parent() && S.remove(), e.val(t), "" === t && p.prop("selected", !0)) : null == t && p ? e.val("") : r.renderUnknownOption(t)
                        }, e.on("change", function() {
                            t.$apply(function() {
                                S.parent() && S.remove(), n.$setViewValue(e.val())
                            })
                        })
                    }

                    function h(t, e, n) {
                        var r;
                        n.$render = function() {
                            var t = new Ht(n.$viewValue);
                            o(e.find("option"), function(e) {
                                e.selected = g(t.get(e.value))
                            })
                        }, t.$watch(function() {
                            I(r, n.$viewValue) || (r = R(n.$viewValue), n.$render())
                        }), e.on("change", function() {
                            t.$apply(function() {
                                var t = [];
                                o(e.find("option"), function(e) {
                                    e.selected && t.push(e.value)
                                }), n.$setViewValue(t)
                            })
                        })
                    }

                    function d(e, s, u) {
                        function c(t, n, r) {
                            return I[A] = r, D && (I[D] = n), t(e, I)
                        }

                        function l() {
                            e.$apply(function() {
                                var t, n = P(e) || [];
                                if (m) t = [], o(s.val(), function(e) {
                                    e = V ? q[e] : e, t.push(f(e, n[e]))
                                });
                                else {
                                    var r = V ? q[s.val()] : s.val();
                                    t = f(r, n[r])
                                }
                                u.$setViewValue(t), S()
                            })
                        }

                        function f(t, e) {
                            if ("?" === t) return n;
                            if ("" === t) return null;
                            var r = O ? O : j;
                            return c(r, t, e)
                        }

                        function h() {
                            var t, n = P(e);
                            if (n && dr(n)) {
                                t = new Array(n.length);
                                for (var r = 0, i = n.length; i > r; r++) t[r] = c(k, r, n[r]);
                                return t
                            }
                            if (n) {
                                t = {};
                                for (var o in n) n.hasOwnProperty(o) && (t[o] = c(k, o, n[o]))
                            }
                            return t
                        }

                        function d(t) {
                            var e;
                            if (m)
                                if (V && dr(t)) {
                                    e = new Ht([]);
                                    for (var n = 0; n < t.length; n++) e.put(c(V, null, t[n]), !0)
                                } else e = new Ht(t);
                            else V && (t = c(V, null, t));
                            return function(n, r) {
                                var i;
                                return i = V ? V : O ? O : j, m ? g(e.remove(c(i, n, r))) : t === c(i, n, r)
                            }
                        }

                        function p() {
                            b || (e.$$postDigest(S), b = !0)
                        }

                        function v(t, e, n) {
                            t[e] = t[e] || 0, t[e] += n ? 1 : -1
                        }

                        function S() {
                            b = !1;
                            var t, n, r, i, l, f, h, p, y, S, E, A, T, O, j, N, U, F = {
                                    "": []
                                },
                                H = [""],
                                _ = u.$viewValue,
                                B = P(e) || [],
                                L = D ? a(B) : B,
                                z = {},
                                G = d(_),
                                W = !1;
                            for (q = {}, A = 0; S = L.length, S > A; A++) h = A, D && (h = L[A], "$" === h.charAt(0)) || (p = B[h], t = c(M, h, p) || "", (n = F[t]) || (n = F[t] = [], H.push(t)), T = G(h, p), W = W || T, N = c(k, h, p), N = g(N) ? N : "", U = V ? V(e, I) : D ? L[A] : A, V && (q[U] = h), n.push({
                                id: U,
                                label: N,
                                selected: T
                            }));
                            for (m || (w || null === _ ? F[""].unshift({
                                    id: "",
                                    label: "",
                                    selected: !W
                                }) : W || F[""].unshift({
                                    id: "?",
                                    label: "",
                                    selected: !0
                                })), E = 0, y = H.length; y > E; E++) {
                                for (t = H[E], n = F[t], R.length <= E ? (i = {
                                        element: C.clone().attr("label", t),
                                        label: n.label
                                    }, l = [i], R.push(l), s.append(i.element)) : (l = R[E], i = l[0], i.label != t && i.element.attr("label", i.label = t)), O = null, A = 0, S = n.length; S > A; A++) r = n[A], (f = l[A + 1]) ? (O = f.element, f.label !== r.label && (v(z, f.label, !1), v(z, r.label, !0), O.text(f.label = r.label), O.prop("label", f.label)), f.id !== r.id && O.val(f.id = r.id), O[0].selected !== r.selected && (O.prop("selected", f.selected = r.selected), er && O.prop("selected", f.selected))) : ("" === r.id && w ? j = w : (j = x.clone()).val(r.id).prop("selected", r.selected).attr("selected", r.selected).prop("label", r.label).text(r.label), l.push(f = {
                                    element: j,
                                    label: r.label,
                                    id: r.id,
                                    selected: r.selected
                                }), v(z, r.label, !0), O ? O.after(j) : i.element.append(j), O = j);
                                for (A++; l.length > A;) r = l.pop(), v(z, r.label, !1), r.element.remove()
                            }
                            for (; R.length > E;) {
                                for (n = R.pop(), A = 1; A < n.length; ++A) v(z, n[A].label, !1);
                                n[0].element.remove()
                            }
                            o(z, function(t, e) {
                                t > 0 ? $.addOption(e) : 0 > t && $.removeOption(e)
                            })
                        }
                        var E;
                        if (!(E = y.match(i))) throw Fo("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", y, z(s));
                        var k = r(E[2] || E[1]),
                            A = E[4] || E[6],
                            T = / as /.test(E[0]) && E[1],
                            O = T ? r(T) : null,
                            D = E[5],
                            M = r(E[3] || ""),
                            j = r(E[2] ? E[1] : A),
                            P = r(E[7]),
                            N = E[8],
                            V = N ? r(E[8]) : null,
                            q = {},
                            R = [
                                [{
                                    element: s,
                                    label: ""
                                }]
                            ],
                            I = {};
                        w && (t(w)(e), w.removeClass("ng-scope"), w.remove()), s.empty(), s.on("change", l), u.$render = S, e.$watchCollection(P, p), e.$watchCollection(h, p), m && e.$watchCollection(function() {
                            return u.$modelValue
                        }, p)
                    }
                    if (l[1]) {
                        for (var p, $ = l[0], v = l[1], m = c.multiple, y = c.ngOptions, w = !1, b = !1, x = nr(e.createElement("option")), C = nr(e.createElement("optgroup")), S = x.clone(), E = 0, k = u.children(), A = k.length; A > E; E++)
                            if ("" === k[E].value) {
                                p = w = k.eq(E);
                                break
                            }
                        $.init(v, w, S), m && (v.$isEmpty = function(t) {
                            return !t || 0 === t.length
                        }), y ? d(s, u, v) : m ? h(s, u, v) : f(s, u, v, $)
                    }
                }
            }
        }],
        Bo = ["$interpolate", function(t) {
            var e = {
                addOption: p,
                removeOption: p
            };
            return {
                restrict: "E",
                priority: 100,
                compile: function(n, r) {
                    if (m(r.value)) {
                        var i = t(n.text(), !0);
                        i || r.$set("value", n.text())
                    }
                    return function(t, n, r) {
                        var o = "$selectController",
                            a = n.parent(),
                            s = a.data(o) || a.parent().data(o);
                        s && s.databound || (s = e), i ? t.$watch(i, function(t, e) {
                            r.$set("value", t), e !== t && s.removeOption(e), s.addOption(t, n)
                        }) : s.addOption(r.value, n), n.on("$destroy", function() {
                            s.removeOption(r.value)
                        })
                    }
                }
            }
        }],
        Lo = v({
            restrict: "E",
            terminal: !1
        }),
        zo = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(t, e, n, r) {
                    r && (n.required = !0, r.$validators.required = function(t, e) {
                        return !n.required || !r.$isEmpty(e)
                    }, n.$observe("required", function() {
                        r.$validate()
                    }))
                }
            }
        },
        Go = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(t, e, i, o) {
                    if (o) {
                        var a, s = i.ngPattern || i.pattern;
                        i.$observe("pattern", function(t) {
                            if (w(t) && t.length > 0 && (t = new RegExp("^" + t + "$")), t && !t.test) throw r("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", s, t, z(e));
                            a = t || n, o.$validate()
                        }), o.$validators.pattern = function(t, e) {
                            return o.$isEmpty(e) || m(a) || a.test(e)
                        }
                    }
                }
            }
        },
        Wo = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(t, e, n, r) {
                    if (r) {
                        var i = -1;
                        n.$observe("maxlength", function(t) {
                            var e = h(t);
                            i = isNaN(e) ? -1 : e, r.$validate()
                        }), r.$validators.maxlength = function(t, e) {
                            return 0 > i || r.$isEmpty(e) || e.length <= i
                        }
                    }
                }
            }
        },
        Yo = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(t, e, n, r) {
                    if (r) {
                        var i = 0;
                        n.$observe("minlength", function(t) {
                            i = h(t) || 0, r.$validate()
                        }), r.$validators.minlength = function(t, e) {
                            return r.$isEmpty(e) || e.length >= i
                        }
                    }
                }
            }
        };
    return t.angular.bootstrap ? void console.log("WARNING: Tried to load angular more than once.") : (rt(), dt(lr), void nr(e).ready(function() {
        X(e, Q)
    }))
}(window, document), !window.angular.$$csp() && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>'),
    function(t, e, n) {
        "use strict";

        function r(t) {
            var e;
            if (e = t.match(c)) {
                var n = new Date(0),
                    r = 0,
                    o = 0;
                return e[9] && (r = i(e[9] + e[10]), o = i(e[9] + e[11])), n.setUTCFullYear(i(e[1]), i(e[2]) - 1, i(e[3])), n.setUTCHours(i(e[4] || 0) - r, i(e[5] || 0) - o, i(e[6] || 0), i(e[7] || 0)), n
            }
            return t
        }

        function i(t) {
            return parseInt(t, 10)
        }

        function o(t, e, n) {
            var r = "";
            for (0 > t && (r = "-", t = -t), t = "" + t; t.length < e;) t = "0" + t;
            return n && (t = t.substr(t.length - e)), r + t
        }

        function a(t, r, i, o) {
            function a(t, n, r, i) {
                return e.isFunction(t) ? t : function() {
                    return e.isNumber(t) ? [t, n, r, i] : [200, t, n, r]
                }
            }

            function c(t, a, s, c, l, v, m) {
                function g(t) {
                    return e.isString(t) || e.isFunction(t) || t instanceof RegExp ? t : e.toJson(t)
                }

                function y(e) {
                    function i() {
                        var n = e.response(t, a, s, l);
                        w.$$respHeaders = n[2], c($(n[0]), $(n[1]), w.getAllResponseHeaders(), $(n[3] || ""))
                    }

                    function u() {
                        for (var t = 0, e = d.length; e > t; t++)
                            if (d[t] === i) {
                                d.splice(t, 1), c(-1, n, "");
                                break
                            }
                    }
                    return !o && v && (v.then ? v.then(u) : r(u, v)), i
                }
                var w = new u,
                    b = h[0],
                    x = !1;
                if (b && b.match(t, a)) {
                    if (!b.matchData(s)) throw new Error("Expected " + b + " with different data\nEXPECTED: " + g(b.data) + "\nGOT:      " + s);
                    if (!b.matchHeaders(l)) throw new Error("Expected " + b + " with different headers\nEXPECTED: " + g(b.headers) + "\nGOT:      " + g(l));
                    if (h.shift(), b.response) return void d.push(y(b));
                    x = !0
                }
                for (var C, S = -1; C = f[++S];)
                    if (C.match(t, a, s, l || {})) {
                        if (C.response)(o ? o.defer : p)(y(C));
                        else {
                            if (!C.passThrough) throw new Error("No response defined !");
                            i(t, a, s, c, l, v, m)
                        }
                        return
                    }
                throw x ? new Error("No response defined !") : new Error("Unexpected request: " + t + " " + a + "\n" + (b ? "Expected " + b : "No more request expected"))
            }

            function l(t) {
                e.forEach(["GET", "DELETE", "JSONP", "HEAD"], function(e) {
                    c[t + e] = function(r, i) {
                        return c[t](e, r, n, i)
                    }
                }), e.forEach(["PUT", "POST", "PATCH"], function(e) {
                    c[t + e] = function(n, r, i) {
                        return c[t](e, n, r, i)
                    }
                })
            }
            var f = [],
                h = [],
                d = [],
                p = e.bind(d, d.push),
                $ = e.copy;
            return c.when = function(t, e, r, i) {
                var u = new s(t, e, r, i),
                    c = {
                        respond: function(t, e, r, i) {
                            return u.passThrough = n, u.response = a(t, e, r, i), c
                        }
                    };
                return o && (c.passThrough = function() {
                    return u.response = n, u.passThrough = !0, c
                }), f.push(u), c
            }, l("when"), c.expect = function(t, e, n, r) {
                var i = new s(t, e, n, r),
                    o = {
                        respond: function(t, e, n, r) {
                            return i.response = a(t, e, n, r), o
                        }
                    };
                return h.push(i), o
            }, l("expect"), c.flush = function(n, r) {
                if (r !== !1 && t.$digest(), !d.length) throw new Error("No pending request to flush !");
                if (e.isDefined(n) && null !== n)
                    for (; n--;) {
                        if (!d.length) throw new Error("No more pending request to flush !");
                        d.shift()()
                    } else
                        for (; d.length;) d.shift()();
                c.verifyNoOutstandingExpectation(r)
            }, c.verifyNoOutstandingExpectation = function(e) {
                if (e !== !1 && t.$digest(), h.length) throw new Error("Unsatisfied requests: " + h.join(", "))
            }, c.verifyNoOutstandingRequest = function() {
                if (d.length) throw new Error("Unflushed requests: " + d.length)
            }, c.resetExpectations = function() {
                h.length = 0, d.length = 0
            }, c
        }

        function s(t, n, r, i) {
            this.data = r, this.headers = i, this.match = function(n, r, i, o) {
                return t != n ? !1 : this.matchUrl(r) ? e.isDefined(i) && !this.matchData(i) ? !1 : e.isDefined(o) && !this.matchHeaders(o) ? !1 : !0 : !1
            }, this.matchUrl = function(t) {
                return n ? e.isFunction(n.test) ? n.test(t) : e.isFunction(n) ? n(t) : n == t : !0
            }, this.matchHeaders = function(t) {
                return e.isUndefined(i) ? !0 : e.isFunction(i) ? i(t) : e.equals(i, t)
            }, this.matchData = function(t) {
                return e.isUndefined(r) ? !0 : r && e.isFunction(r.test) ? r.test(t) : r && e.isFunction(r) ? r(t) : r && !e.isString(r) ? e.equals(e.fromJson(e.toJson(r)), e.fromJson(t)) : r == t
            }, this.toString = function() {
                return t + " " + n
            }
        }

        function u() {
            u.$$lastInstance = this, this.open = function(t, e, n) {
                this.$$method = t, this.$$url = e, this.$$async = n, this.$$reqHeaders = {}, this.$$respHeaders = {}
            }, this.send = function(t) {
                this.$$data = t
            }, this.setRequestHeader = function(t, e) {
                this.$$reqHeaders[t] = e
            }, this.getResponseHeader = function(t) {
                var r = this.$$respHeaders[t];
                return r ? r : (t = e.lowercase(t), (r = this.$$respHeaders[t]) ? r : (r = n, e.forEach(this.$$respHeaders, function(n, i) {
                    r || e.lowercase(i) != t || (r = n)
                }), r))
            }, this.getAllResponseHeaders = function() {
                var t = [];
                return e.forEach(this.$$respHeaders, function(e, n) {
                    t.push(n + ": " + e)
                }), t.join("\n")
            }, this.abort = e.noop
        }
        e.mock = {}, e.mock.$BrowserProvider = function() {
            this.$get = function() {
                return new e.mock.$Browser
            }
        }, e.mock.$Browser = function() {
            var t = this;
            this.isMock = !0, t.$$url = "http://server/", t.$$lastUrl = t.$$url, t.pollFns = [], t.$$completeOutstandingRequest = e.noop, t.$$incOutstandingRequestCount = e.noop, t.onUrlChange = function(e) {
                return t.pollFns.push(function() {
                    (t.$$lastUrl !== t.$$url || t.$$state !== t.$$lastState) && (t.$$lastUrl = t.$$url, t.$$lastState = t.$$state, e(t.$$url, t.$$state))
                }), e
            }, t.$$checkUrlChange = e.noop, t.cookieHash = {}, t.lastCookieHash = {}, t.deferredFns = [], t.deferredNextId = 0, t.defer = function(e, n) {
                return n = n || 0, t.deferredFns.push({
                    time: t.defer.now + n,
                    fn: e,
                    id: t.deferredNextId
                }), t.deferredFns.sort(function(t, e) {
                    return t.time - e.time
                }), t.deferredNextId++
            }, t.defer.now = 0, t.defer.cancel = function(r) {
                var i;
                return e.forEach(t.deferredFns, function(t, e) {
                    t.id === r && (i = e)
                }), i !== n ? (t.deferredFns.splice(i, 1), !0) : !1
            }, t.defer.flush = function(n) {
                if (e.isDefined(n)) t.defer.now += n;
                else {
                    if (!t.deferredFns.length) throw new Error("No deferred tasks to be flushed");
                    t.defer.now = t.deferredFns[t.deferredFns.length - 1].time
                }
                for (; t.deferredFns.length && t.deferredFns[0].time <= t.defer.now;) t.deferredFns.shift().fn()
            }, t.$$baseHref = "/", t.baseHref = function() {
                return this.$$baseHref
            }
        }, e.mock.$Browser.prototype = {
            poll: function() {
                e.forEach(this.pollFns, function(t) {
                    t()
                })
            },
            addPollFn: function(t) {
                return this.pollFns.push(t), t
            },
            url: function(t, n, r) {
                return e.isUndefined(r) && (r = null), t ? (this.$$url = t, this.$$state = e.copy(r), this) : this.$$url
            },
            state: function() {
                return this.$$state
            },
            cookies: function(t, n) {
                return t ? void(e.isUndefined(n) ? delete this.cookieHash[t] : e.isString(n) && n.length <= 4096 && (this.cookieHash[t] = n)) : (e.equals(this.cookieHash, this.lastCookieHash) || (this.lastCookieHash = e.copy(this.cookieHash), this.cookieHash = e.copy(this.cookieHash)), this.cookieHash)
            },
            notifyWhenNoOutstandingRequests: function(t) {
                t()
            }
        }, e.mock.$ExceptionHandlerProvider = function() {
            var t;
            this.mode = function(e) {
                switch (e) {
                    case "log":
                    case "rethrow":
                        var n = [];
                        t = function(t) {
                            if (1 == arguments.length ? n.push(t) : n.push([].slice.call(arguments, 0)), "rethrow" === e) throw t
                        }, t.errors = n;
                        break;
                    default:
                        throw new Error("Unknown mode '" + e + "', only 'log'/'rethrow' modes are allowed!")
                }
            }, this.$get = function() {
                return t
            }, this.mode("rethrow")
        }, e.mock.$LogProvider = function() {
            function t(t, e, n) {
                return t.concat(Array.prototype.slice.call(e, n))
            }
            var n = !0;
            this.debugEnabled = function(t) {
                return e.isDefined(t) ? (n = t, this) : n
            }, this.$get = function() {
                var r = {
                    log: function() {
                        r.log.logs.push(t([], arguments, 0))
                    },
                    warn: function() {
                        r.warn.logs.push(t([], arguments, 0))
                    },
                    info: function() {
                        r.info.logs.push(t([], arguments, 0))
                    },
                    error: function() {
                        r.error.logs.push(t([], arguments, 0))
                    },
                    debug: function() {
                        n && r.debug.logs.push(t([], arguments, 0))
                    }
                };
                return r.reset = function() {
                    r.log.logs = [], r.info.logs = [], r.warn.logs = [], r.error.logs = [], r.debug.logs = []
                }, r.assertEmpty = function() {
                    var t = [];
                    if (e.forEach(["error", "warn", "info", "log", "debug"], function(n) {
                            e.forEach(r[n].logs, function(r) {
                                e.forEach(r, function(e) {
                                    t.push("MOCK $log (" + n + "): " + String(e) + "\n" + (e.stack || ""))
                                })
                            })
                        }), t.length) throw t.unshift("Expected $log to be empty! Either a message was logged unexpectedly, or an expected log message was not checked and removed:"), t.push(""), new Error(t.join("\n---------\n"))
                }, r.reset(), r
            }
        }, e.mock.$IntervalProvider = function() {
            this.$get = ["$browser", "$rootScope", "$q", "$$q", function(t, r, i, o) {
                var a = [],
                    s = 0,
                    u = 0,
                    c = function(c, l, f, h) {
                        function d() {
                            if (v.notify(p++), f > 0 && p >= f) {
                                var i;
                                v.resolve(p), e.forEach(a, function(t, e) {
                                    t.id === m.$$intervalId && (i = e)
                                }), i !== n && a.splice(i, 1)
                            }
                            $ ? t.defer.flush() : r.$apply()
                        }
                        var p = 0,
                            $ = e.isDefined(h) && !h,
                            v = ($ ? o : i).defer(),
                            m = v.promise;
                        return f = e.isDefined(f) ? f : 0, m.then(null, null, c), m.$$intervalId = s, a.push({
                            nextTime: u + l,
                            delay: l,
                            fn: d,
                            id: s,
                            deferred: v
                        }), a.sort(function(t, e) {
                            return t.nextTime - e.nextTime
                        }), s++, m
                    };
                return c.cancel = function(t) {
                    if (!t) return !1;
                    var r;
                    return e.forEach(a, function(e, n) {
                        e.id === t.$$intervalId && (r = n)
                    }), r !== n ? (a[r].deferred.reject("canceled"), a.splice(r, 1), !0) : !1
                }, c.flush = function(t) {
                    for (u += t; a.length && a[0].nextTime <= u;) {
                        var e = a[0];
                        e.fn(), e.nextTime += e.delay, a.sort(function(t, e) {
                            return t.nextTime - e.nextTime
                        })
                    }
                    return t
                }, c
            }]
        };
        var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?:\:?(\d\d)(?:\:?(\d\d)(?:\.(\d{3}))?)?)?(Z|([+-])(\d\d):?(\d\d)))?$/;
        if (e.mock.TzDate = function(t, n) {
                var i = new Date(0);
                if (e.isString(n)) {
                    var a = n;
                    if (i.origDate = r(n), n = i.origDate.getTime(), isNaN(n)) throw {
                        name: "Illegal Argument",
                        message: "Arg '" + a + "' passed into TzDate constructor is not a valid date string"
                    }
                } else i.origDate = new Date(n);
                var s = new Date(n).getTimezoneOffset();
                i.offsetDiff = 60 * s * 1e3 - 1e3 * t * 60 * 60, i.date = new Date(n + i.offsetDiff), i.getTime = function() {
                    return i.date.getTime() - i.offsetDiff
                }, i.toLocaleDateString = function() {
                    return i.date.toLocaleDateString()
                }, i.getFullYear = function() {
                    return i.date.getFullYear()
                }, i.getMonth = function() {
                    return i.date.getMonth()
                }, i.getDate = function() {
                    return i.date.getDate()
                }, i.getHours = function() {
                    return i.date.getHours()
                }, i.getMinutes = function() {
                    return i.date.getMinutes()
                }, i.getSeconds = function() {
                    return i.date.getSeconds()
                }, i.getMilliseconds = function() {
                    return i.date.getMilliseconds()
                }, i.getTimezoneOffset = function() {
                    return 60 * t
                }, i.getUTCFullYear = function() {
                    return i.origDate.getUTCFullYear()
                }, i.getUTCMonth = function() {
                    return i.origDate.getUTCMonth()
                }, i.getUTCDate = function() {
                    return i.origDate.getUTCDate()
                }, i.getUTCHours = function() {
                    return i.origDate.getUTCHours()
                }, i.getUTCMinutes = function() {
                    return i.origDate.getUTCMinutes()
                }, i.getUTCSeconds = function() {
                    return i.origDate.getUTCSeconds()
                }, i.getUTCMilliseconds = function() {
                    return i.origDate.getUTCMilliseconds()
                }, i.getDay = function() {
                    return i.date.getDay()
                }, i.toISOString && (i.toISOString = function() {
                    return o(i.origDate.getUTCFullYear(), 4) + "-" + o(i.origDate.getUTCMonth() + 1, 2) + "-" + o(i.origDate.getUTCDate(), 2) + "T" + o(i.origDate.getUTCHours(), 2) + ":" + o(i.origDate.getUTCMinutes(), 2) + ":" + o(i.origDate.getUTCSeconds(), 2) + "." + o(i.origDate.getUTCMilliseconds(), 3) + "Z"
                });
                var u = ["getUTCDay", "getYear", "setDate", "setFullYear", "setHours", "setMilliseconds", "setMinutes", "setMonth", "setSeconds", "setTime", "setUTCDate", "setUTCFullYear", "setUTCHours", "setUTCMilliseconds", "setUTCMinutes", "setUTCMonth", "setUTCSeconds", "setYear", "toDateString", "toGMTString", "toJSON", "toLocaleFormat", "toLocaleString", "toLocaleTimeString", "toSource", "toString", "toTimeString", "toUTCString", "valueOf"];
                return e.forEach(u, function(t) {
                    i[t] = function() {
                        throw new Error("Method '" + t + "' is not implemented in the TzDate mock")
                    }
                }), i
            }, e.mock.TzDate.prototype = Date.prototype, e.mock.animate = e.module("ngAnimateMock", ["ng"]).config(["$provide", function(t) {
                var n = [];
                t.value("$$animateReflow", function(t) {
                    var e = n.length;
                    return n.push(t),
                        function() {
                            n.splice(e, 1)
                        }
                }), t.decorator("$animate", ["$delegate", "$$asyncCallback", "$timeout", "$browser", "$rootScope", "$$rAF", function(t, r, i, o, a, s) {
                    var u = {
                        queue: [],
                        cancel: t.cancel,
                        enabled: t.enabled,
                        triggerCallbackEvents: function() {
                            r.flush()
                        },
                        triggerCallbackPromise: function() {
                            i.flush(0)
                        },
                        triggerCallbacks: function() {
                            this.triggerCallbackEvents(), this.triggerCallbackPromise()
                        },
                        triggerReflow: function() {
                            e.forEach(n, function(t) {
                                t()
                            }), n = []
                        },
                        flush: function() {
                            function t() {
                                return o.deferredFns.length
                            }
                            a.$digest();
                            var e, i = !1;
                            do
                                if (e = !1, n.length && (e = i = !0, this.triggerReflow()), s.queue.length && (e = i = !0, s.flush()), r.queue.length && (e = i = !0, this.triggerCallbackEvents()), t()) {
                                    var u = t();
                                    this.triggerCallbackPromise();
                                    var c = t();
                                    u > c && (e = i = !0)
                                }
                            while (e);
                            if (!i) throw new Error("No pending animations ready to be closed or flushed");
                            a.$digest()
                        }
                    };
                    return e.forEach(["animate", "enter", "leave", "move", "addClass", "removeClass", "setClass"], function(e) {
                        u[e] = function() {
                            return u.queue.push({
                                event: e,
                                element: arguments[0],
                                options: arguments[arguments.length - 1],
                                args: arguments
                            }), t[e].apply(t, arguments)
                        }
                    }), u
                }])
            }]), e.mock.dump = function(t) {
                function n(t) {
                    var i;
                    return e.isElement(t) ? (t = e.element(t), i = e.element("<div></div>"), e.forEach(t, function(t) {
                        i.append(e.element(t).clone())
                    }), i = i.html()) : e.isArray(t) ? (i = [], e.forEach(t, function(t) {
                        i.push(n(t))
                    }), i = "[ " + i.join(", ") + " ]") : i = e.isObject(t) ? e.isFunction(t.$eval) && e.isFunction(t.$apply) ? r(t) : t instanceof Error ? t.stack || "" + t.name + ": " + t.message : e.toJson(t, !0) : String(t), i
                }

                function r(t, n) {
                    n = n || "  ";
                    var i = [n + "Scope(" + t.$id + "): {"];
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && !o.match(/^(\$|this)/) && i.push("  " + o + ": " + e.toJson(t[o]));
                    for (var a = t.$$childHead; a;) i.push(r(a, n + "  ")), a = a.$$nextSibling;
                    return i.push("}"), i.join("\n" + n)
                }
                return n(t)
            }, e.mock.$HttpBackendProvider = function() {
                this.$get = ["$rootScope", "$timeout", a]
            }, e.mock.$TimeoutDecorator = ["$delegate", "$browser", function(t, n) {
                function r(t) {
                    var n = [];
                    return e.forEach(t, function(t) {
                        n.push("{id: " + t.id + ", time: " + t.time + "}")
                    }), n.join(", ")
                }
                return t.flush = function(t) {
                    n.defer.flush(t)
                }, t.verifyNoPendingTasks = function() {
                    if (n.deferredFns.length) throw new Error("Deferred tasks to flush (" + n.deferredFns.length + "): " + r(n.deferredFns))
                }, t
            }], e.mock.$RAFDecorator = ["$delegate", function(t) {
                var e, n = function(t) {
                    var n = e.length;
                    return e.push(t),
                        function() {
                            e.splice(n, 1)
                        }
                };
                return e = n.queue = [], n.supported = t.supported, n.flush = function() {
                    if (0 === e.length) throw new Error("No rAF callbacks present");
                    for (var t = e.length, n = 0; t > n; n++) e[n]();
                    e.length = 0
                }, n
            }], e.mock.$AsyncCallbackDecorator = ["$delegate", function(t) {
                var n, r = function(t) {
                    n.push(t)
                };
                return n = r.queue = [], r.flush = function() {
                    e.forEach(n, function(t) {
                        t()
                    }), n.length = 0
                }, r
            }], e.mock.$RootElementProvider = function() {
                this.$get = function() {
                    return e.element("<div ng-app></div>")
                }
            }, e.mock.$ControllerDecorator = ["$delegate", function(t) {
                return function(n, r, i, o) {
                    if (i && "object" == typeof i) {
                        var a = t(n, r, !0, o);
                        return e.extend(a.instance, i), a()
                    }
                    return t(n, r, i, o)
                }
            }], e.module("ngMock", ["ng"]).provider({
                $browser: e.mock.$BrowserProvider,
                $exceptionHandler: e.mock.$ExceptionHandlerProvider,
                $log: e.mock.$LogProvider,
                $interval: e.mock.$IntervalProvider,
                $httpBackend: e.mock.$HttpBackendProvider,
                $rootElement: e.mock.$RootElementProvider
            }).config(["$provide", function(t) {
                t.decorator("$timeout", e.mock.$TimeoutDecorator), t.decorator("$$rAF", e.mock.$RAFDecorator), t.decorator("$$asyncCallback", e.mock.$AsyncCallbackDecorator), t.decorator("$rootScope", e.mock.$RootScopeDecorator), t.decorator("$controller", e.mock.$ControllerDecorator)
            }]), e.module("ngMockE2E", ["ng"]).config(["$provide", function(t) {
                t.decorator("$httpBackend", e.mock.e2e.$httpBackendDecorator)
            }]), e.mock.e2e = {}, e.mock.e2e.$httpBackendDecorator = ["$rootScope", "$timeout", "$delegate", "$browser", a], e.mock.$RootScopeDecorator = ["$delegate", function(t) {
                function e() {
                    for (var t, e = 0, n = [this.$$childHead]; n.length;)
                        for (t = n.shift(); t;) e += 1, n.push(t.$$childHead), t = t.$$nextSibling;
                    return e
                }

                function n() {
                    for (var t, e = this.$$watchers ? this.$$watchers.length : 0, n = [this.$$childHead]; n.length;)
                        for (t = n.shift(); t;) e += t.$$watchers ? t.$$watchers.length : 0, n.push(t.$$childHead), t = t.$$nextSibling;
                    return e
                }
                var r = Object.getPrototypeOf(t);
                return r.$countChildScopes = e, r.$countWatchers = n, t
            }], t.jasmine || t.mocha) {
            var l = null,
                f = [],
                h = function() {
                    return !!l
                };
            e.mock.$$annotate = e.injector.$$annotate, e.injector.$$annotate = function(t) {
                return "function" != typeof t || t.$inject || f.push(t), e.mock.$$annotate.apply(this, arguments)
            }, (t.beforeEach || t.setup)(function() {
                f = [], l = this
            }), (t.afterEach || t.teardown)(function() {
                var t = l.$injector;
                if (f.forEach(function(t) {
                        delete t.$inject
                    }), e.forEach(l.$modules, function(t) {
                        t && t.$$hashKey && (t.$$hashKey = n)
                    }), l.$injector = null, l.$modules = null, l = null, t) {
                    t.get("$rootElement").off();
                    var r = t.get("$browser");
                    r.pollFns && (r.pollFns.length = 0)
                }
                e.forEach(e.element.fragments, function(t, n) {
                    delete e.element.fragments[n]
                }), u.$$lastInstance = null, e.forEach(e.callbacks, function(t, n) {
                    delete e.callbacks[n]
                }), e.callbacks.counter = 0
            }), t.module = e.mock.module = function() {
                function t() {
                    if (l.$injector) throw new Error("Injector already created, can not register a module!");
                    var t = l.$modules || (l.$modules = []);
                    e.forEach(n, function(n) {
                        e.isObject(n) && !e.isArray(n) ? t.push(function(t) {
                            e.forEach(n, function(e, n) {
                                t.value(n, e)
                            })
                        }) : t.push(n)
                    })
                }
                var n = Array.prototype.slice.call(arguments, 0);
                return h() ? t() : t
            };
            var d = function(t, e) {
                this.message = t.message, this.name = t.name, t.line && (this.line = t.line), t.sourceId && (this.sourceId = t.sourceId), t.stack && e && (this.stack = t.stack + "\n" + e.stack), t.stackArray && (this.stackArray = t.stackArray)
            };
            d.prototype.toString = Error.prototype.toString, t.inject = e.mock.inject = function() {
                function t() {
                    var t = l.$modules || [],
                        i = !!l.$injectorStrict;
                    t.unshift("ngMock"), t.unshift("ng");
                    var o = l.$injector;
                    o || (i && e.forEach(t, function(t) {
                        "function" == typeof t && e.injector.$$annotate(t)
                    }), o = l.$injector = e.injector(t, i), l.$injectorStrict = i);
                    for (var a = 0, s = n.length; s > a; a++) {
                        l.$injectorStrict && o.annotate(n[a]);
                        try {
                            o.invoke(n[a] || e.noop, this)
                        } catch (u) {
                            if (u.stack && r) throw new d(u, r);
                            throw u
                        } finally {
                            r = null
                        }
                    }
                }
                var n = Array.prototype.slice.call(arguments, 0),
                    r = new Error("Declaration Location");
                return h() ? t.call(l) : t
            }, e.mock.inject.strictDi = function(t) {
                function e() {
                    if (t !== l.$injectorStrict) {
                        if (l.$injector) throw new Error("Injector already created, can not modify strict annotations");
                        l.$injectorStrict = t
                    }
                }
                return t = arguments.length ? !!t : !0, h() ? e() : e
            }
        }
    }(window, window.angular), "undefined" != typeof module && "undefined" != typeof exports && module.exports === exports && (module.exports = "ui.router"),
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            return U(new(U(function() {}, {
                prototype: t
            })), e)
        }

        function i(t) {
            return I(arguments, function(e) {
                e !== t && I(e, function(e, n) {
                    t.hasOwnProperty(n) || (t[n] = e)
                })
            }), t
        }

        function o(t, e) {
            var n = [];
            for (var r in t.path) {
                if (t.path[r] !== e.path[r]) break;
                n.push(t.path[r])
            }
            return n
        }

        function a(t) {
            if (Object.keys) return Object.keys(t);
            var e = [];
            return I(t, function(t, n) {
                e.push(n)
            }), e
        }

        function s(t, e) {
            if (Array.prototype.indexOf) return t.indexOf(e, Number(arguments[2]) || 0);
            var n = t.length >>> 0,
                r = Number(arguments[2]) || 0;
            for (r = 0 > r ? Math.ceil(r) : Math.floor(r), 0 > r && (r += n); n > r; r++)
                if (r in t && t[r] === e) return r;
            return -1
        }

        function u(t, e, n, r) {
            var i, u = o(n, r),
                c = {},
                l = [];
            for (var f in u)
                if (u[f].params && (i = a(u[f].params), i.length))
                    for (var h in i) s(l, i[h]) >= 0 || (l.push(i[h]), c[i[h]] = t[i[h]]);
            return U({}, c, e)
        }

        function c(t, e, n) {
            if (!n) {
                n = [];
                for (var r in t) n.push(r)
            }
            for (var i = 0; i < n.length; i++) {
                var o = n[i];
                if (t[o] != e[o]) return !1
            }
            return !0
        }

        function l(t, e) {
            var n = {};
            return I(t, function(t) {
                n[t] = e[t]
            }), n
        }

        function f(t) {
            var e = {},
                n = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
            return I(n, function(n) {
                n in t && (e[n] = t[n])
            }), e
        }

        function h(t) {
            var e = {},
                n = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
            for (var r in t) - 1 == s(n, r) && (e[r] = t[r]);
            return e
        }

        function d(t, e) {
            var n = R(t),
                r = n ? [] : {};
            return I(t, function(t, i) {
                e(t, i) && (r[n ? r.length : i] = t)
            }), r
        }

        function p(t, e) {
            var n = R(t) ? [] : {};
            return I(t, function(t, r) {
                n[r] = e(t, r)
            }), n
        }

        function $(t, e) {
            var r = 1,
                o = 2,
                u = {},
                c = [],
                l = u,
                f = U(t.when(u), {
                    $$promises: u,
                    $$values: u
                });
            this.study = function(u) {
                function d(t, n) {
                    if (g[n] !== o) {
                        if (m.push(n), g[n] === r) throw m.splice(0, s(m, n)), new Error("Cyclic dependency: " + m.join(" -> "));
                        if (g[n] = r, V(t)) v.push(n, [function() {
                            return e.get(t)
                        }], c);
                        else {
                            var i = e.annotate(t);
                            I(i, function(t) {
                                t !== n && u.hasOwnProperty(t) && d(u[t], t)
                            }), v.push(n, t, i)
                        }
                        m.pop(), g[n] = o
                    }
                }

                function p(t) {
                    return q(t) && t.then && t.$$promises
                }
                if (!q(u)) throw new Error("'invocables' must be an object");
                var $ = a(u || {}),
                    v = [],
                    m = [],
                    g = {};
                return I(u, d), u = m = g = null,
                    function(r, o, a) {
                        function s() {
                            --w || (b || i(y, o.$$values), m.$$values = y, m.$$promises = m.$$promises || !0, delete m.$$inheritedValues, d.resolve(y))
                        }

                        function u(t) {
                            m.$$failure = t, d.reject(t)
                        }

                        function c(n, i, o) {
                            function c(t) {
                                f.reject(t), u(t)
                            }

                            function l() {
                                if (!P(m.$$failure)) try {
                                    f.resolve(e.invoke(i, a, y)), f.promise.then(function(t) {
                                        y[n] = t, s()
                                    }, c)
                                } catch (t) {
                                    c(t)
                                }
                            }
                            var f = t.defer(),
                                h = 0;
                            I(o, function(t) {
                                g.hasOwnProperty(t) && !r.hasOwnProperty(t) && (h++, g[t].then(function(e) {
                                    y[t] = e, --h || l()
                                }, c))
                            }), h || l(), g[n] = f.promise
                        }
                        if (p(r) && a === n && (a = o, o = r, r = null), r) {
                            if (!q(r)) throw new Error("'locals' must be an object")
                        } else r = l;
                        if (o) {
                            if (!p(o)) throw new Error("'parent' must be a promise returned by $resolve.resolve()")
                        } else o = f;
                        var d = t.defer(),
                            m = d.promise,
                            g = m.$$promises = {},
                            y = U({}, r),
                            w = 1 + v.length / 3,
                            b = !1;
                        if (P(o.$$failure)) return u(o.$$failure), m;
                        o.$$inheritedValues && i(y, h(o.$$inheritedValues, $)), U(g, o.$$promises), o.$$values ? (b = i(y, h(o.$$values, $)), m.$$inheritedValues = h(o.$$values, $), s()) : (o.$$inheritedValues && (m.$$inheritedValues = h(o.$$inheritedValues, $)), o.then(s, u));
                        for (var x = 0, C = v.length; C > x; x += 3) r.hasOwnProperty(v[x]) ? s() : c(v[x], v[x + 1], v[x + 2]);
                        return m
                    }
            }, this.resolve = function(t, e, n, r) {
                return this.study(t)(e, n, r)
            }
        }

        function v(t, e, n) {
            this.fromConfig = function(t, e, n) {
                return P(t.template) ? this.fromString(t.template, e) : P(t.templateUrl) ? this.fromUrl(t.templateUrl, e) : P(t.templateProvider) ? this.fromProvider(t.templateProvider, e, n) : null
            }, this.fromString = function(t, e) {
                return N(t) ? t(e) : t
            }, this.fromUrl = function(n, r) {
                return N(n) && (n = n(r)), null == n ? null : t.get(n, {
                    cache: e,
                    headers: {
                        Accept: "text/html"
                    }
                }).then(function(t) {
                    return t.data
                })
            }, this.fromProvider = function(t, e, r) {
                return n.invoke(t, null, r || {
                    params: e
                })
            }
        }

        function m(t, e, i) {
            function o(e, n, r, i) {
                if (v.push(e), p[e]) return p[e];
                if (!/^\w+(-+\w+)*(?:\[\])?$/.test(e)) throw new Error("Invalid parameter name '" + e + "' in pattern '" + t + "'");
                if ($[e]) throw new Error("Duplicate parameter name '" + e + "' in pattern '" + t + "'");
                return $[e] = new H.Param(e, n, r, i), $[e]
            }

            function a(t, e, n, r) {
                var i = ["", ""],
                    o = t.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
                if (!e) return o;
                switch (n) {
                    case !1:
                        i = ["(", ")" + (r ? "?" : "")];
                        break;
                    case !0:
                        i = ["?(", ")?"];
                        break;
                    default:
                        i = ["(" + n + "|", ")?"]
                }
                return o + i[0] + e + i[1]
            }

            function s(i, o) {
                var a, s, u, c, l;
                return a = i[2] || i[3], l = e.params[a], u = t.substring(h, i.index), s = o ? i[4] : i[4] || ("*" == i[1] ? ".*" : null), c = H.type(s || "string") || r(H.type("string"), {
                    pattern: new RegExp(s, e.caseInsensitive ? "i" : n)
                }), {
                    id: a,
                    regexp: s,
                    segment: u,
                    type: c,
                    cfg: l
                }
            }
            e = U({
                params: {}
            }, q(e) ? e : {});
            var u, c = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
                l = /([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
                f = "^",
                h = 0,
                d = this.segments = [],
                p = i ? i.params : {},
                $ = this.params = i ? i.params.$$new() : new H.ParamSet,
                v = [];
            this.source = t;
            for (var m, g, y;
                (u = c.exec(t)) && (m = s(u, !1), !(m.segment.indexOf("?") >= 0));) g = o(m.id, m.type, m.cfg, "path"), f += a(m.segment, g.type.pattern.source, g.squash, g.isOptional), d.push(m.segment), h = c.lastIndex;
            y = t.substring(h);
            var w = y.indexOf("?");
            if (w >= 0) {
                var b = this.sourceSearch = y.substring(w);
                if (y = y.substring(0, w), this.sourcePath = t.substring(0, h + w), b.length > 0)
                    for (h = 0; u = l.exec(b);) m = s(u, !0), g = o(m.id, m.type, m.cfg, "search"), h = c.lastIndex
            } else this.sourcePath = t, this.sourceSearch = "";
            f += a(y) + (e.strict === !1 ? "/?" : "") + "$", d.push(y), this.regexp = new RegExp(f, e.caseInsensitive ? "i" : n), this.prefix = d[0], this.$$paramNames = v
        }

        function g(t) {
            U(this, t)
        }

        function y() {
            function t(t) {
                return null != t ? t.toString().replace(/\//g, "%2F") : t
            }

            function i(t) {
                return null != t ? t.toString().replace(/%2F/g, "/") : t
            }

            function o() {
                return {
                    strict: $,
                    caseInsensitive: h
                }
            }

            function u(t) {
                return N(t) || R(t) && N(t[t.length - 1])
            }

            function c() {
                for (; x.length;) {
                    var t = x.shift();
                    if (t.pattern) throw new Error("You cannot override a type's .pattern at runtime.");
                    e.extend(w[t.name], f.invoke(t.def))
                }
            }

            function l(t) {
                U(this, t || {})
            }
            H = this;
            var f, h = !1,
                $ = !0,
                v = !1,
                w = {},
                b = !0,
                x = [],
                C = {
                    string: {
                        encode: t,
                        decode: i,
                        is: function(t) {
                            return null == t || !P(t) || "string" == typeof t
                        },
                        pattern: /[^\/]*/
                    },
                    "int": {
                        encode: t,
                        decode: function(t) {
                            return parseInt(t, 10)
                        },
                        is: function(t) {
                            return P(t) && this.decode(t.toString()) === t
                        },
                        pattern: /\d+/
                    },
                    bool: {
                        encode: function(t) {
                            return t ? 1 : 0
                        },
                        decode: function(t) {
                            return 0 !== parseInt(t, 10)
                        },
                        is: function(t) {
                            return t === !0 || t === !1
                        },
                        pattern: /0|1/
                    },
                    date: {
                        encode: function(t) {
                            return this.is(t) ? [t.getFullYear(), ("0" + (t.getMonth() + 1)).slice(-2), ("0" + t.getDate()).slice(-2)].join("-") : n
                        },
                        decode: function(t) {
                            if (this.is(t)) return t;
                            var e = this.capture.exec(t);
                            return e ? new Date(e[1], e[2] - 1, e[3]) : n
                        },
                        is: function(t) {
                            return t instanceof Date && !isNaN(t.valueOf())
                        },
                        equals: function(t, e) {
                            return this.is(t) && this.is(e) && t.toISOString() === e.toISOString()
                        },
                        pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
                        capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
                    },
                    json: {
                        encode: e.toJson,
                        decode: e.fromJson,
                        is: e.isObject,
                        equals: e.equals,
                        pattern: /[^\/]*/
                    },
                    any: {
                        encode: e.identity,
                        decode: e.identity,
                        equals: e.equals,
                        pattern: /.*/
                    }
                };
            y.$$getDefaultValue = function(t) {
                if (!u(t.value)) return t.value;
                if (!f) throw new Error("Injectable functions cannot be called at configuration time");
                return f.invoke(t.value)
            }, this.caseInsensitive = function(t) {
                return P(t) && (h = t), h
            }, this.strictMode = function(t) {
                return P(t) && ($ = t), $
            }, this.defaultSquashPolicy = function(t) {
                if (!P(t)) return v;
                if (t !== !0 && t !== !1 && !V(t)) throw new Error("Invalid squash policy: " + t + ". Valid policies: false, true, arbitrary-string");
                return v = t, t
            }, this.compile = function(t, e) {
                return new m(t, U(o(), e))
            }, this.isMatcher = function(t) {
                if (!q(t)) return !1;
                var e = !0;
                return I(m.prototype, function(n, r) {
                    N(n) && (e = e && P(t[r]) && N(t[r]))
                }), e
            }, this.type = function(t, e, n) {
                if (!P(e)) return w[t];
                if (w.hasOwnProperty(t)) throw new Error("A type named '" + t + "' has already been defined.");
                return w[t] = new g(U({
                    name: t
                }, e)), n && (x.push({
                    name: t,
                    def: n
                }), b || c()), this
            }, I(C, function(t, e) {
                w[e] = new g(U({
                    name: e
                }, t))
            }), w = r(w, {}), this.$get = ["$injector", function(t) {
                return f = t, b = !1, c(), I(C, function(t, e) {
                    w[e] || (w[e] = new g(t))
                }), this
            }], this.Param = function(t, e, r, i) {
                function o(t) {
                    var e = q(t) ? a(t) : [],
                        n = -1 === s(e, "value") && -1 === s(e, "type") && -1 === s(e, "squash") && -1 === s(e, "array");
                    return n && (t = {
                        value: t
                    }), t.$$fn = u(t.value) ? t.value : function() {
                        return t.value
                    }, t
                }

                function c(e, n, r) {
                    if (e.type && n) throw new Error("Param '" + t + "' has two type configurations.");
                    return n ? n : e.type ? e.type instanceof g ? e.type : new g(e.type) : "config" === r ? w.any : w.string
                }

                function l() {
                    var e = {
                            array: "search" === i ? "auto" : !1
                        },
                        n = t.match(/\[\]$/) ? {
                            array: !0
                        } : {};
                    return U(e, n, r).array
                }

                function h(t, e) {
                    var n = t.squash;
                    if (!e || n === !1) return !1;
                    if (!P(n) || null == n) return v;
                    if (n === !0 || V(n)) return n;
                    throw new Error("Invalid squash policy: '" + n + "'. Valid policies: false, true, or arbitrary string")
                }

                function $(t, e, r, i) {
                    var o, a, u = [{
                        from: "",
                        to: r || e ? n : ""
                    }, {
                        from: null,
                        to: r || e ? n : ""
                    }];
                    return o = R(t.replace) ? t.replace : [], V(i) && o.push({
                        from: i,
                        to: n
                    }), a = p(o, function(t) {
                        return t.from
                    }), d(u, function(t) {
                        return -1 === s(a, t.from)
                    }).concat(o)
                }

                function m() {
                    if (!f) throw new Error("Injectable functions cannot be called at configuration time");
                    var t = f.invoke(r.$$fn);
                    if (null !== t && t !== n && !x.type.is(t)) throw new Error("Default value (" + t + ") for parameter '" + x.id + "' is not an instance of Type (" + x.type.name + ")");
                    return t
                }

                function y(t) {
                    function e(t) {
                        return function(e) {
                            return e.from === t
                        }
                    }

                    function n(t) {
                        var n = p(d(x.replace, e(t)), function(t) {
                            return t.to
                        });
                        return n.length ? n[0] : t
                    }
                    return t = n(t), P(t) ? x.type.$normalize(t) : m()
                }

                function b() {
                    return "{Param:" + t + " " + e + " squash: '" + E + "' optional: " + S + "}"
                }
                var x = this;
                r = o(r), e = c(r, e, i);
                var C = l();
                e = C ? e.$asArray(C, "search" === i) : e, "string" !== e.name || C || "path" !== i || r.value !== n || (r.value = "");
                var S = r.value !== n,
                    E = h(r, S),
                    k = $(r, C, S, E);
                U(this, {
                    id: t,
                    type: e,
                    location: i,
                    array: C,
                    squash: E,
                    replace: k,
                    isOptional: S,
                    value: y,
                    dynamic: n,
                    config: r,
                    toString: b
                })
            }, l.prototype = {
                $$new: function() {
                    return r(this, U(new l, {
                        $$parent: this
                    }))
                },
                $$keys: function() {
                    for (var t = [], e = [], n = this, r = a(l.prototype); n;) e.push(n), n = n.$$parent;
                    return e.reverse(), I(e, function(e) {
                        I(a(e), function(e) {
                            -1 === s(t, e) && -1 === s(r, e) && t.push(e)
                        })
                    }), t
                },
                $$values: function(t) {
                    var e = {},
                        n = this;
                    return I(n.$$keys(), function(r) {
                        e[r] = n[r].value(t && t[r])
                    }), e
                },
                $$equals: function(t, e) {
                    var n = !0,
                        r = this;
                    return I(r.$$keys(), function(i) {
                        var o = t && t[i],
                            a = e && e[i];
                        r[i].type.equals(o, a) || (n = !1)
                    }), n
                },
                $$validates: function(t) {
                    var r, i, o, a, s, u = this.$$keys();
                    for (r = 0; r < u.length && (i = this[u[r]], o = t[u[r]], o !== n && null !== o || !i.isOptional); r++) {
                        if (a = i.type.$normalize(o), !i.type.is(a)) return !1;
                        if (s = i.type.encode(a), e.isString(s) && !i.type.pattern.exec(s)) return !1
                    }
                    return !0
                },
                $$parent: n
            }, this.ParamSet = l
        }

        function w(t, r) {
            function i(t) {
                var e = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(t.source);
                return null != e ? e[1].replace(/\\(.)/g, "$1") : ""
            }

            function o(t, e) {
                return t.replace(/\$(\$|\d{1,2})/, function(t, n) {
                    return e["$" === n ? 0 : Number(n)]
                })
            }

            function a(t, e, n) {
                if (!n) return !1;
                var r = t.invoke(e, e, {
                    $match: n
                });
                return P(r) ? r : !0
            }

            function s(r, i, o, a) {
                function s(t, e, n) {
                    return "/" === $ ? t : e ? $.slice(0, -1) + t : n ? $.slice(1) + t : t
                }

                function h(t) {
                    function e(t) {
                        var e = t(o, r);
                        return e ? (V(e) && r.replace().url(e), !0) : !1
                    }
                    if (!t || !t.defaultPrevented) {
                        p && r.url() === p;
                        p = n;
                        var i, a = c.length;
                        for (i = 0; a > i; i++)
                            if (e(c[i])) return;
                        l && e(l)
                    }
                }

                function d() {
                    return u = u || i.$on("$locationChangeSuccess", h)
                }
                var p, $ = a.baseHref(),
                    v = r.url();
                return f || d(), {
                    sync: function() {
                        h()
                    },
                    listen: function() {
                        return d()
                    },
                    update: function(t) {
                        return t ? void(v = r.url()) : void(r.url() !== v && (r.url(v), r.replace()))
                    },
                    push: function(t, e, i) {
                        var o = t.format(e || {});
                        null !== o && e && e["#"] && (o += "#" + e["#"]), r.url(o), p = i && i.$$avoidResync ? r.url() : n, i && i.replace && r.replace()
                    },
                    href: function(n, i, o) {
                        if (!n.validates(i)) return null;
                        var a = t.html5Mode();
                        e.isObject(a) && (a = a.enabled);
                        var u = n.format(i);
                        if (o = o || {}, a || null === u || (u = "#" + t.hashPrefix() + u), null !== u && i && i["#"] && (u += "#" + i["#"]), u = s(u, a, o.absolute), !o.absolute || !u) return u;
                        var c = !a && u ? "/" : "",
                            l = r.port();
                        return l = 80 === l || 443 === l ? "" : ":" + l, [r.protocol(), "://", r.host(), l, c, u].join("")
                    }
                }
            }
            var u, c = [],
                l = null,
                f = !1;
            this.rule = function(t) {
                if (!N(t)) throw new Error("'rule' must be a function");
                return c.push(t), this
            }, this.otherwise = function(t) {
                if (V(t)) {
                    var e = t;
                    t = function() {
                        return e
                    }
                } else if (!N(t)) throw new Error("'rule' must be a function");
                return l = t, this
            }, this.when = function(t, e) {
                var n, s = V(e);
                if (V(t) && (t = r.compile(t)), !s && !N(e) && !R(e)) throw new Error("invalid 'handler' in when()");
                var u = {
                        matcher: function(t, e) {
                            return s && (n = r.compile(e), e = ["$match", function(t) {
                                return n.format(t)
                            }]), U(function(n, r) {
                                return a(n, e, t.exec(r.path(), r.search()))
                            }, {
                                prefix: V(t.prefix) ? t.prefix : ""
                            })
                        },
                        regex: function(t, e) {
                            if (t.global || t.sticky) throw new Error("when() RegExp must not be global or sticky");
                            return s && (n = e, e = ["$match", function(t) {
                                return o(n, t)
                            }]), U(function(n, r) {
                                return a(n, e, t.exec(r.path()))
                            }, {
                                prefix: i(t)
                            })
                        }
                    },
                    c = {
                        matcher: r.isMatcher(t),
                        regex: t instanceof RegExp
                    };
                for (var l in c)
                    if (c[l]) return this.rule(u[l](t, e));
                throw new Error("invalid 'what' in when()")
            }, this.deferIntercept = function(t) {
                t === n && (t = !0), f = t
            }, this.$get = s, s.$inject = ["$location", "$rootScope", "$injector", "$browser"]
        }

        function b(t, i) {
            function o(t) {
                return 0 === t.indexOf(".") || 0 === t.indexOf("^")
            }

            function h(t, e) {
                if (!t) return n;
                var r = V(t),
                    i = r ? t : t.name,
                    a = o(i);
                if (a) {
                    if (!e) throw new Error("No reference point given for path '" + i + "'");
                    e = h(e);
                    for (var s = i.split("."), u = 0, c = s.length, l = e; c > u; u++)
                        if ("" !== s[u] || 0 !== u) {
                            if ("^" !== s[u]) break;
                            if (!l.parent) throw new Error("Path '" + i + "' not valid for state '" + e.name + "'");
                            l = l.parent
                        } else l = e;
                    s = s.slice(u).join("."), i = l.name + (l.name && s ? "." : "") + s
                }
                var f = E[i];
                return !f || !r && (r || f !== t && f.self !== t) ? n : f
            }

            function d(t, e) {
                k[t] || (k[t] = []), k[t].push(e)
            }

            function $(t) {
                for (var e = k[t] || []; e.length;) v(e.shift())
            }

            function v(e) {
                e = r(e, {
                    self: e,
                    resolve: e.resolve || {},
                    toString: function() {
                        return this.name
                    }
                });
                var n = e.name;
                if (!V(n) || n.indexOf("@") >= 0) throw new Error("State must have a valid name");
                if (E.hasOwnProperty(n)) throw new Error("State '" + n + "'' is already defined");
                var i = -1 !== n.indexOf(".") ? n.substring(0, n.lastIndexOf(".")) : V(e.parent) ? e.parent : q(e.parent) && V(e.parent.name) ? e.parent.name : "";
                if (i && !E[i]) return d(i, e.self);
                for (var o in T) N(T[o]) && (e[o] = T[o](e, T.$delegates[o]));
                return E[n] = e, !e[A] && e.url && t.when(e.url, ["$match", "$stateParams", function(t, n) {
                    S.$current.navigable == e && c(t, n) || S.transitionTo(e, t, {
                        inherit: !0,
                        location: !1
                    })
                }]), $(n), e
            }

            function m(t) {
                return t.indexOf("*") > -1
            }

            function g(t) {
                for (var e = t.split("."), n = S.$current.name.split("."), r = 0, i = e.length; i > r; r++) "*" === e[r] && (n[r] = "*");
                return "**" === e[0] && (n = n.slice(s(n, e[1])), n.unshift("**")), "**" === e[e.length - 1] && (n.splice(s(n, e[e.length - 2]) + 1, Number.MAX_VALUE), n.push("**")), e.length != n.length ? !1 : n.join("") === e.join("")
            }

            function y(t, e) {
                return V(t) && !P(e) ? T[t] : N(e) && V(t) ? (T[t] && !T.$delegates[t] && (T.$delegates[t] = T[t]), T[t] = e, this) : this
            }

            function w(t, e) {
                return q(t) ? e = t : e.name = t, v(e), this
            }

            function b(t, i, o, s, f, d, $, v, y) {
                function w(e, n, r, o) {
                    var a = t.$broadcast("$stateNotFound", e, n, r);
                    if (a.defaultPrevented) return $.update(), O;
                    if (!a.retry) return null;
                    if (o.$retry) return $.update(), D;
                    var s = S.transition = i.when(a.retry);
                    return s.then(function() {
                        return s !== S.transition ? k : (e.options.$retry = !0, S.transitionTo(e.to, e.toParams, e.options))
                    }, function() {
                        return O
                    }), $.update(), s
                }

                function b(t, n, r, a, u, c) {
                    function h() {
                        var n = [];
                        return I(t.views, function(r, i) {
                            var a = r.resolve && r.resolve !== t.resolve ? r.resolve : {};
                            a.$template = [function() {
                                return o.load(i, {
                                    view: r,
                                    locals: u.globals,
                                    params: d,
                                    notify: c.notify
                                }) || ""
                            }], n.push(f.resolve(a, u.globals, u.resolve, t).then(function(n) {
                                if (N(r.controllerProvider) || R(r.controllerProvider)) {
                                    var o = e.extend({}, a, u.globals);
                                    n.$$controller = s.invoke(r.controllerProvider, null, o)
                                } else n.$$controller = r.controller;
                                n.$$state = t, n.$$controllerAs = r.controllerAs, u[i] = n
                            }))
                        }), i.all(n).then(function() {
                            return u.globals
                        })
                    }
                    var d = r ? n : l(t.params.$$keys(), n),
                        p = {
                            $stateParams: d
                        };
                    u.resolve = f.resolve(t.resolve, p, u.resolve, t);
                    var $ = [u.resolve.then(function(t) {
                        u.globals = t
                    })];
                    return a && $.push(a), i.all($).then(h).then(function(t) {
                        return u
                    })
                }
                var k = i.reject(new Error("transition superseded")),
                    T = i.reject(new Error("transition prevented")),
                    O = i.reject(new Error("transition aborted")),
                    D = i.reject(new Error("transition failed"));
                return C.locals = {
                    resolve: null,
                    globals: {
                        $stateParams: {}
                    }
                }, S = {
                    params: {},
                    current: C.self,
                    $current: C,
                    transition: null
                }, S.reload = function(t) {
                    return S.transitionTo(S.current, d, {
                        reload: t || !0,
                        inherit: !1,
                        notify: !0
                    })
                }, S.go = function(t, e, n) {
                    return S.transitionTo(t, e, U({
                        inherit: !0,
                        relative: S.$current
                    }, n))
                }, S.transitionTo = function(e, n, o) {
                    n = n || {}, o = U({
                        location: !0,
                        inherit: !1,
                        relative: null,
                        notify: !0,
                        reload: !1,
                        $retry: !1
                    }, o || {});
                    var a, c = S.$current,
                        f = S.params,
                        p = c.path,
                        v = h(e, o.relative),
                        m = n["#"];
                    if (!P(v)) {
                        var g = {
                                to: e,
                                toParams: n,
                                options: o
                            },
                            y = w(g, c.self, f, o);
                        if (y) return y;
                        if (e = g.to, n = g.toParams, o = g.options, v = h(e, o.relative), !P(v)) {
                            if (!o.relative) throw new Error("No such state '" + e + "'");
                            throw new Error("Could not resolve '" + e + "' from state '" + o.relative + "'")
                        }
                    }
                    if (v[A]) throw new Error("Cannot transition to abstract state '" + e + "'");
                    if (o.inherit && (n = u(d, n || {}, S.$current, v)), !v.params.$$validates(n)) return D;
                    n = v.params.$$values(n), e = v;
                    var E = e.path,
                        O = 0,
                        M = E[O],
                        j = C.locals,
                        N = [];
                    if (o.reload) {
                        if (V(o.reload) || q(o.reload)) {
                            if (q(o.reload) && !o.reload.name) throw new Error("Invalid reload state object");
                            var R = o.reload === !0 ? p[0] : h(o.reload);
                            if (o.reload && !R) throw new Error("No such reload state '" + (V(o.reload) ? o.reload : o.reload.name) + "'");
                            for (; M && M === p[O] && M !== R;) j = N[O] = M.locals, O++, M = E[O]
                        }
                    } else
                        for (; M && M === p[O] && M.ownParams.$$equals(n, f);) j = N[O] = M.locals, O++, M = E[O];
                    if (x(e, n, c, f, j, o)) return m && (n["#"] = m), S.params = n, F(S.params, d), o.location && e.navigable && e.navigable.url && ($.push(e.navigable.url, n, {
                        $$avoidResync: !0,
                        replace: "replace" === o.location
                    }), $.update(!0)), S.transition = null, i.when(S.current);
                    if (n = l(e.params.$$keys(), n || {}), o.notify && t.$broadcast("$stateChangeStart", e.self, n, c.self, f).defaultPrevented) return t.$broadcast("$stateChangeCancel", e.self, n, c.self, f), $.update(), T;
                    for (var I = i.when(j), H = O; H < E.length; H++, M = E[H]) j = N[H] = r(j), I = b(M, n, M === e, I, j, o);
                    var _ = S.transition = I.then(function() {
                        var r, i, a;
                        if (S.transition !== _) return k;
                        for (r = p.length - 1; r >= O; r--) a = p[r], a.self.onExit && s.invoke(a.self.onExit, a.self, a.locals.globals), a.locals = null;
                        for (r = O; r < E.length; r++) i = E[r], i.locals = N[r], i.self.onEnter && s.invoke(i.self.onEnter, i.self, i.locals.globals);
                        return m && (n["#"] = m), S.transition !== _ ? k : (S.$current = e, S.current = e.self, S.params = n, F(S.params, d), S.transition = null, o.location && e.navigable && $.push(e.navigable.url, e.navigable.locals.globals.$stateParams, {
                            $$avoidResync: !0,
                            replace: "replace" === o.location
                        }), o.notify && t.$broadcast("$stateChangeSuccess", e.self, n, c.self, f), $.update(!0), S.current)
                    }, function(r) {
                        return S.transition !== _ ? k : (S.transition = null, a = t.$broadcast("$stateChangeError", e.self, n, c.self, f, r), a.defaultPrevented || $.update(), i.reject(r))
                    });
                    return _
                }, S.is = function(t, e, r) {
                    r = U({
                        relative: S.$current
                    }, r || {});
                    var i = h(t, r.relative);
                    return P(i) ? S.$current !== i ? !1 : e ? c(i.params.$$values(e), d) : !0 : n
                }, S.includes = function(t, e, r) {
                    if (r = U({
                            relative: S.$current
                        }, r || {}), V(t) && m(t)) {
                        if (!g(t)) return !1;
                        t = S.$current.name
                    }
                    var i = h(t, r.relative);
                    return P(i) ? P(S.$current.includes[i.name]) ? e ? c(i.params.$$values(e), d, a(e)) : !0 : !1 : n
                }, S.href = function(t, e, r) {
                    r = U({
                        lossy: !0,
                        inherit: !0,
                        absolute: !1,
                        relative: S.$current
                    }, r || {});
                    var i = h(t, r.relative);
                    if (!P(i)) return null;
                    r.inherit && (e = u(d, e || {}, S.$current, i));
                    var o = i && r.lossy ? i.navigable : i;
                    return o && o.url !== n && null !== o.url ? $.href(o.url, l(i.params.$$keys().concat("#"), e || {}), {
                        absolute: r.absolute
                    }) : null
                }, S.get = function(t, e) {
                    if (0 === arguments.length) return p(a(E), function(t) {
                        return E[t].self
                    });
                    var n = h(t, e || S.$current);
                    return n && n.self ? n.self : null
                }, S
            }

            function x(t, e, n, r, i, o) {
                function a(t, e, n) {
                    function r(e) {
                        return "search" != t.params[e].location
                    }
                    var i = t.params.$$keys().filter(r),
                        o = f.apply({}, [t.params].concat(i)),
                        a = new H.ParamSet(o);
                    return a.$$equals(e, n)
                }
                return !o.reload && t === n && (i === n.locals || t.self.reloadOnSearch === !1 && a(n, r, e)) ? !0 : void 0
            }
            var C, S, E = {},
                k = {},
                A = "abstract",
                T = {
                    parent: function(t) {
                        if (P(t.parent) && t.parent) return h(t.parent);
                        var e = /^(.+)\.[^.]+$/.exec(t.name);
                        return e ? h(e[1]) : C
                    },
                    data: function(t) {
                        return t.parent && t.parent.data && (t.data = t.self.data = U({}, t.parent.data, t.data)), t.data
                    },
                    url: function(t) {
                        var e = t.url,
                            n = {
                                params: t.params || {}
                            };
                        if (V(e)) return "^" == e.charAt(0) ? i.compile(e.substring(1), n) : (t.parent.navigable || C).url.concat(e, n);
                        if (!e || i.isMatcher(e)) return e;
                        throw new Error("Invalid url '" + e + "' in state '" + t + "'")
                    },
                    navigable: function(t) {
                        return t.url ? t : t.parent ? t.parent.navigable : null
                    },
                    ownParams: function(t) {
                        var e = t.url && t.url.params || new H.ParamSet;
                        return I(t.params || {}, function(t, n) {
                            e[n] || (e[n] = new H.Param(n, null, t, "config"))
                        }), e
                    },
                    params: function(t) {
                        return t.parent && t.parent.params ? U(t.parent.params.$$new(), t.ownParams) : new H.ParamSet
                    },
                    views: function(t) {
                        var e = {};
                        return I(P(t.views) ? t.views : {
                            "": t
                        }, function(n, r) {
                            r.indexOf("@") < 0 && (r += "@" + t.parent.name), e[r] = n
                        }), e
                    },
                    path: function(t) {
                        return t.parent ? t.parent.path.concat(t) : []
                    },
                    includes: function(t) {
                        var e = t.parent ? U({}, t.parent.includes) : {};
                        return e[t.name] = !0, e
                    },
                    $delegates: {}
                };
            C = v({
                name: "",
                url: "^",
                views: null,
                "abstract": !0
            }), C.navigable = null, this.decorator = y, this.state = w, this.$get = b, b.$inject = ["$rootScope", "$q", "$view", "$injector", "$resolve", "$stateParams", "$urlRouter", "$location", "$urlMatcherFactory"]
        }

        function x() {
            function t(t, e) {
                return {
                    load: function(n, r) {
                        var i, o = {
                            template: null,
                            controller: null,
                            view: null,
                            locals: null,
                            notify: !0,
                            async: !0,
                            params: {}
                        };
                        return r = U(o, r), r.view && (i = e.fromConfig(r.view, r.params, r.locals)), i && r.notify && t.$broadcast("$viewContentLoading", r), i
                    }
                }
            }
            this.$get = t, t.$inject = ["$rootScope", "$templateFactory"]
        }

        function C() {
            var t = !1;
            this.useAnchorScroll = function() {
                t = !0
            }, this.$get = ["$anchorScroll", "$timeout", function(e, n) {
                return t ? e : function(t) {
                    return n(function() {
                        t[0].scrollIntoView()
                    }, 0, !1)
                }
            }]
        }

        function S(t, n, r, i) {
            function o() {
                return n.has ? function(t) {
                    return n.has(t) ? n.get(t) : null
                } : function(t) {
                    try {
                        return n.get(t)
                    } catch (e) {
                        return null
                    }
                }
            }

            function a(t, e) {
                var n = function() {
                    return {
                        enter: function(t, e, n) {
                            e.after(t), n()
                        },
                        leave: function(t, e) {
                            t.remove(), e()
                        }
                    }
                };
                if (c) return {
                    enter: function(t, e, n) {
                        var r = c.enter(t, null, e, n);
                        r && r.then && r.then(n)
                    },
                    leave: function(t, e) {
                        var n = c.leave(t, e);
                        n && n.then && n.then(e)
                    }
                };
                if (u) {
                    var r = u && u(e, t);
                    return {
                        enter: function(t, e, n) {
                            r.enter(t, null, e), n()
                        },
                        leave: function(t, e) {
                            r.leave(t), e()
                        }
                    }
                }
                return n()
            }
            var s = o(),
                u = s("$animator"),
                c = s("$animate"),
                l = {
                    restrict: "ECA",
                    terminal: !0,
                    priority: 400,
                    transclude: "element",
                    compile: function(n, o, s) {
                        return function(n, o, u) {
                            function c() {
                                f && (f.remove(), f = null), d && (d.$destroy(), d = null), h && (m.leave(h, function() {
                                    f = null
                                }), f = h, h = null)
                            }

                            function l(a) {
                                var l, f = k(n, u, o, i),
                                    g = f && t.$current && t.$current.locals[f];
                                if (a || g !== p) {
                                    l = n.$new(), p = t.$current.locals[f];
                                    var y = s(l, function(t) {
                                        m.enter(t, o, function() {
                                            d && d.$emit("$viewContentAnimationEnded"), (e.isDefined(v) && !v || n.$eval(v)) && r(t)
                                        }), c()
                                    });
                                    h = y, d = l, d.$emit("$viewContentLoaded"), d.$eval($)
                                }
                            }
                            var f, h, d, p, $ = u.onload || "",
                                v = u.autoscroll,
                                m = a(u, n);
                            n.$on("$stateChangeSuccess", function() {
                                l(!1)
                            }), n.$on("$viewContentLoading", function() {
                                l(!1)
                            }), l(!0)
                        }
                    }
                };
            return l
        }

        function E(t, e, n, r) {
            return {
                restrict: "ECA",
                priority: -400,
                compile: function(i) {
                    var o = i.html();
                    return function(i, a, s) {
                        var u = n.$current,
                            c = k(i, s, a, r),
                            l = u && u.locals[c];
                        if (l) {
                            a.data("$uiView", {
                                name: c,
                                state: l.$$state
                            }), a.html(l.$template ? l.$template : o);
                            var f = t(a.contents());
                            if (l.$$controller) {
                                l.$scope = i, l.$element = a;
                                var h = e(l.$$controller, l);
                                l.$$controllerAs && (i[l.$$controllerAs] = h), a.data("$ngControllerController", h), a.children().data("$ngControllerController", h)
                            }
                            f(i)
                        }
                    }
                }
            }
        }

        function k(t, e, n, r) {
            var i = r(e.uiView || e.name || "")(t),
                o = n.inheritedData("$uiView");
            return i.indexOf("@") >= 0 ? i : i + "@" + (o ? o.state.name : "")
        }

        function A(t, e) {
            var n, r = t.match(/^\s*({[^}]*})\s*$/);
            if (r && (t = e + "(" + r[1] + ")"), n = t.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/), !n || 4 !== n.length) throw new Error("Invalid state ref '" + t + "'");
            return {
                state: n[1],
                paramExpr: n[3] || null
            }
        }

        function T(t) {
            var e = t.parent().inheritedData("$uiView");
            return e && e.state && e.state.name ? e.state : void 0
        }

        function O(t, n) {
            var r = ["location", "inherit", "reload", "absolute"];
            return {
                restrict: "A",
                require: ["?^uiSrefActive", "?^uiSrefActiveEq"],
                link: function(i, o, a, s) {
                    var u = A(a.uiSref, t.current.name),
                        c = null,
                        l = T(o) || t.$current,
                        f = "[object SVGAnimatedString]" === Object.prototype.toString.call(o.prop("href")) ? "xlink:href" : "href",
                        h = null,
                        d = "A" === o.prop("tagName").toUpperCase(),
                        p = "FORM" === o[0].nodeName,
                        $ = p ? "action" : f,
                        v = !0,
                        m = {
                            relative: l,
                            inherit: !0
                        },
                        g = i.$eval(a.uiSrefOpts) || {};
                    e.forEach(r, function(t) {
                        t in g && (m[t] = g[t])
                    });
                    var y = function(n) {
                        if (n && (c = e.copy(n)), v) {
                            h = t.href(u.state, c, m);
                            var r = s[1] || s[0];
                            return r && r.$$addStateInfo(u.state, c), null === h ? (v = !1, !1) : void a.$set($, h)
                        }
                    };
                    u.paramExpr && (i.$watch(u.paramExpr, function(t, e) {
                        t !== c && y(t)
                    }, !0), c = e.copy(i.$eval(u.paramExpr))), y(), p || o.bind("click", function(e) {
                        var r = e.which || e.button;
                        if (!(r > 1 || e.ctrlKey || e.metaKey || e.shiftKey || o.attr("target"))) {
                            var i = n(function() {
                                t.go(u.state, c, m)
                            });
                            e.preventDefault();
                            var a = d && !h ? 1 : 0;
                            e.preventDefault = function() {
                                a-- <= 0 && n.cancel(i)
                            }
                        }
                    })
                }
            }
        }

        function D(t, e, n) {
            return {
                restrict: "A",
                controller: ["$scope", "$element", "$attrs", function(e, r, i) {
                    function o() {
                        a() ? r.addClass(u) : r.removeClass(u)
                    }

                    function a() {
                        for (var t = 0; t < c.length; t++)
                            if (s(c[t].state, c[t].params)) return !0;
                        return !1
                    }

                    function s(e, n) {
                        return "undefined" != typeof i.uiSrefActiveEq ? t.is(e.name, n) : t.includes(e.name, n)
                    }
                    var u, c = [];
                    u = n(i.uiSrefActiveEq || i.uiSrefActive || "", !1)(e), this.$$addStateInfo = function(e, n) {
                        var i = t.get(e, T(r));
                        c.push({
                            state: i || {
                                name: e
                            },
                            params: n
                        }), o()
                    }, e.$on("$stateChangeSuccess", o)
                }]
            }
        }

        function M(t) {
            var e = function(e) {
                return t.is(e)
            };
            return e.$stateful = !0, e
        }

        function j(t) {
            var e = function(e) {
                return t.includes(e)
            };
            return e.$stateful = !0, e
        }
        var P = e.isDefined,
            N = e.isFunction,
            V = e.isString,
            q = e.isObject,
            R = e.isArray,
            I = e.forEach,
            U = e.extend,
            F = e.copy;
        e.module("ui.router.util", ["ng"]), e.module("ui.router.router", ["ui.router.util"]), e.module("ui.router.state", ["ui.router.router", "ui.router.util"]), e.module("ui.router", ["ui.router.state"]), e.module("ui.router.compat", ["ui.router"]), $.$inject = ["$q", "$injector"], e.module("ui.router.util").service("$resolve", $), v.$inject = ["$http", "$templateCache", "$injector"], e.module("ui.router.util").service("$templateFactory", v);
        var H;
        m.prototype.concat = function(t, e) {
            var n = {
                caseInsensitive: H.caseInsensitive(),
                strict: H.strictMode(),
                squash: H.defaultSquashPolicy()
            };
            return new m(this.sourcePath + t + this.sourceSearch, U(n, e), this)
        }, m.prototype.toString = function() {
            return this.source
        }, m.prototype.exec = function(t, e) {
            function n(t) {
                function e(t) {
                    return t.split("").reverse().join("")
                }

                function n(t) {
                    return t.replace(/\\-/g, "-")
                }
                var r = e(t).split(/-(?!\\)/),
                    i = p(r, e);
                return p(i, n).reverse()
            }
            var r = this.regexp.exec(t);
            if (!r) return null;
            e = e || {};
            var i, o, a, s = this.parameters(),
                u = s.length,
                c = this.segments.length - 1,
                l = {};
            if (c !== r.length - 1) throw new Error("Unbalanced capture group in route '" + this.source + "'");
            for (i = 0; c > i; i++) {
                a = s[i];
                var f = this.params[a],
                    h = r[i + 1];
                for (o = 0; o < f.replace; o++) f.replace[o].from === h && (h = f.replace[o].to);
                h && f.array === !0 && (h = n(h)), l[a] = f.value(h)
            }
            for (; u > i; i++) a = s[i], l[a] = this.params[a].value(e[a]);
            return l
        }, m.prototype.parameters = function(t) {
            return P(t) ? this.params[t] || null : this.$$paramNames
        }, m.prototype.validates = function(t) {
            return this.params.$$validates(t)
        }, m.prototype.format = function(t) {
            function e(t) {
                return encodeURIComponent(t).replace(/-/g, function(t) {
                    return "%5C%" + t.charCodeAt(0).toString(16).toUpperCase()
                })
            }
            t = t || {};
            var n = this.segments,
                r = this.parameters(),
                i = this.params;
            if (!this.validates(t)) return null;
            var o, a = !1,
                s = n.length - 1,
                u = r.length,
                c = n[0];
            for (o = 0; u > o; o++) {
                var l = s > o,
                    f = r[o],
                    h = i[f],
                    d = h.value(t[f]),
                    $ = h.isOptional && h.type.equals(h.value(), d),
                    v = $ ? h.squash : !1,
                    m = h.type.encode(d);
                if (l) {
                    var g = n[o + 1];
                    if (v === !1) null != m && (c += R(m) ? p(m, e).join("-") : encodeURIComponent(m)), c += g;
                    else if (v === !0) {
                        var y = c.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
                        c += g.match(y)[1]
                    } else V(v) && (c += v + g)
                } else {
                    if (null == m || $ && v !== !1) continue;
                    R(m) || (m = [m]), m = p(m, encodeURIComponent).join("&" + f + "="), c += (a ? "&" : "?") + (f + "=" + m), a = !0
                }
            }
            return c
        }, g.prototype.is = function(t, e) {
            return !0
        }, g.prototype.encode = function(t, e) {
            return t
        }, g.prototype.decode = function(t, e) {
            return t
        }, g.prototype.equals = function(t, e) {
            return t == e
        }, g.prototype.$subPattern = function() {
            var t = this.pattern.toString();
            return t.substr(1, t.length - 2)
        }, g.prototype.pattern = /.*/, g.prototype.toString = function() {
            return "{Type:" + this.name + "}"
        }, g.prototype.$normalize = function(t) {
            return this.is(t) ? t : this.decode(t)
        }, g.prototype.$asArray = function(t, e) {
            function r(t, e) {
                function r(t, e) {
                    return function() {
                        return t[e].apply(t, arguments)
                    }
                }

                function i(t) {
                    return R(t) ? t : P(t) ? [t] : []
                }

                function o(t) {
                    switch (t.length) {
                        case 0:
                            return n;
                        case 1:
                            return "auto" === e ? t[0] : t;
                        default:
                            return t
                    }
                }

                function a(t) {
                    return !t
                }

                function s(t, e) {
                    return function(n) {
                        n = i(n);
                        var r = p(n, t);
                        return e === !0 ? 0 === d(r, a).length : o(r)
                    }
                }

                function u(t) {
                    return function(e, n) {
                        var r = i(e),
                            o = i(n);
                        if (r.length !== o.length) return !1;
                        for (var a = 0; a < r.length; a++)
                            if (!t(r[a], o[a])) return !1;
                        return !0
                    }
                }
                this.encode = s(r(t, "encode")), this.decode = s(r(t, "decode")), this.is = s(r(t, "is"), !0), this.equals = u(r(t, "equals")), this.pattern = t.pattern, this.$normalize = s(r(t, "$normalize")), this.name = t.name, this.$arrayMode = e
            }
            if (!t) return this;
            if ("auto" === t && !e) throw new Error("'auto' array mode is for query parameters only");
            return new r(this, t)
        }, e.module("ui.router.util").provider("$urlMatcherFactory", y), e.module("ui.router.util").run(["$urlMatcherFactory", function(t) {}]), w.$inject = ["$locationProvider", "$urlMatcherFactoryProvider"], e.module("ui.router.router").provider("$urlRouter", w), b.$inject = ["$urlRouterProvider", "$urlMatcherFactoryProvider"], e.module("ui.router.state").value("$stateParams", {}).provider("$state", b), x.$inject = [], e.module("ui.router.state").provider("$view", x), e.module("ui.router.state").provider("$uiViewScroll", C), S.$inject = ["$state", "$injector", "$uiViewScroll", "$interpolate"], E.$inject = ["$compile", "$controller", "$state", "$interpolate"], e.module("ui.router.state").directive("uiView", S), e.module("ui.router.state").directive("uiView", E), O.$inject = ["$state", "$timeout"], D.$inject = ["$state", "$stateParams", "$interpolate"], e.module("ui.router.state").directive("uiSref", O).directive("uiSrefActive", D).directive("uiSrefActiveEq", D), M.$inject = ["$state"], j.$inject = ["$state"], e.module("ui.router.state").filter("isState", M).filter("includedByState", j)
    }(window, window.angular),
    function(t, e, n) {
        "use strict";
        e.module("ngAnimate", ["ng"]).directive("ngAnimateChildren", function() {
            var t = "$$ngAnimateChildren";
            return function(n, r, i) {
                var o = i.ngAnimateChildren;
                e.isString(o) && 0 === o.length ? r.data(t, !0) : n.$watch(o, function(e) {
                    r.data(t, !!e)
                })
            }
        }).factory("$$animateReflow", ["$$rAF", "$document", function(t, e) {
            var n = e[0].body;
            return function(e) {
                return t(function() {
                    e(n.offsetWidth)
                })
            }
        }]).config(["$provide", "$animateProvider", function(r, i) {
            function o(t) {
                for (var e = 0; e < t.length; e++) {
                    var n = t[e];
                    if (n.nodeType == v) return n
                }
            }

            function a(t) {
                return t && e.element(t)
            }

            function s(t) {
                return e.element(o(t))
            }

            function u(t, e) {
                return o(t) == o(e)
            }
            var c, l = e.noop,
                f = e.forEach,
                h = i.$$selectors,
                d = e.isArray,
                p = e.isString,
                $ = e.isObject,
                v = 1,
                m = "$$ngAnimateState",
                g = "$$ngAnimateChildren",
                y = "ng-animate",
                w = {
                    running: !0
                };
            r.decorator("$animate", ["$delegate", "$$q", "$injector", "$sniffer", "$rootElement", "$$asyncCallback", "$rootScope", "$document", "$templateRequest", "$$jqLite", function(t, n, r, v, b, x, C, S, E, k) {
                function A(t, e) {
                    var n = t.data(m) || {};
                    return e && (n.running = !0, n.structural = !0, t.data(m, n)), n.disabled || n.running && n.structural
                }

                function T(t) {
                    var e, r = n.defer();
                    return r.promise.$$cancelFn = function() {
                        e && e()
                    }, C.$$postDigest(function() {
                        e = t(function() {
                            r.resolve()
                        })
                    }), r.promise
                }

                function O(t) {
                    return $(t) ? (t.tempClasses && p(t.tempClasses) && (t.tempClasses = t.tempClasses.split(/\s+/)), t) : void 0
                }

                function D(t, e, n) {
                    n = n || {};
                    var r = {};
                    f(n, function(t, e) {
                        f(e.split(" "), function(e) {
                            r[e] = t
                        })
                    });
                    var i = Object.create(null);
                    f((t.attr("class") || "").split(/\s+/), function(t) {
                        i[t] = !0
                    });
                    var o = [],
                        a = [];
                    return f(e && e.classes || [], function(t, e) {
                        var n = i[e],
                            s = r[e] || {};
                        t === !1 ? (n || "addClass" == s.event) && a.push(e) : t === !0 && (n && "removeClass" != s.event || o.push(e))
                    }), o.length + a.length > 0 && [o.join(" "), a.join(" ")]
                }

                function M(t) {
                    if (t) {
                        var e = [],
                            n = {},
                            i = t.substr(1).split(".");
                        (v.transitions || v.animations) && e.push(r.get(h[""]));
                        for (var o = 0; o < i.length; o++) {
                            var a = i[o],
                                s = h[a];
                            s && !n[a] && (e.push(r.get(s)), n[a] = !0)
                        }
                        return e
                    }
                }

                function j(t, n, r, i) {
                    function o(t, e) {
                        var n = t[e],
                            r = t["before" + e.charAt(0).toUpperCase() + e.substr(1)];
                        return n || r ? ("leave" == e && (r = n, n = null), x.push({
                            event: e,
                            fn: n
                        }), y.push({
                            event: e,
                            fn: r
                        }), !0) : void 0
                    }

                    function a(e, n, o) {
                        function a(t) {
                            if (n) {
                                if ((n[t] || l)(), ++h < s.length) return;
                                n = null
                            }
                            o()
                        }
                        var s = [];
                        f(e, function(t) {
                            t.fn && s.push(t)
                        });
                        var h = 0;
                        f(s, function(e, o) {
                            var s = function() {
                                a(o)
                            };
                            switch (e.event) {
                                case "setClass":
                                    n.push(e.fn(t, u, c, s, i));
                                    break;
                                case "animate":
                                    n.push(e.fn(t, r, i.from, i.to, s));
                                    break;
                                case "addClass":
                                    n.push(e.fn(t, u || r, s, i));
                                    break;
                                case "removeClass":
                                    n.push(e.fn(t, c || r, s, i));
                                    break;
                                default:
                                    n.push(e.fn(t, s, i))
                            }
                        }), n && 0 === n.length && o()
                    }
                    var s = t[0];
                    if (s) {
                        i && (i.to = i.to || {}, i.from = i.from || {});
                        var u, c;
                        d(r) && (u = r[0], c = r[1], u ? c ? r = u + " " + c : (r = u, n = "addClass") : (r = c, n = "removeClass"));
                        var h = "setClass" == n,
                            p = h || "addClass" == n || "removeClass" == n || "animate" == n,
                            $ = t.attr("class"),
                            v = $ + " " + r;
                        if (F(v)) {
                            var m = l,
                                g = [],
                                y = [],
                                w = l,
                                b = [],
                                x = [],
                                C = (" " + v).replace(/\s+/g, ".");
                            return f(M(C), function(t) {
                                var e = o(t, n);
                                !e && h && (o(t, "addClass"), o(t, "removeClass"))
                            }), {
                                node: s,
                                event: n,
                                className: r,
                                isClassBased: p,
                                isSetClassOperation: h,
                                applyStyles: function() {
                                    i && t.css(e.extend(i.from || {}, i.to || {}))
                                },
                                before: function(t) {
                                    m = t, a(y, g, function() {
                                        m = l, t()
                                    })
                                },
                                after: function(t) {
                                    w = t, a(x, b, function() {
                                        w = l, t()
                                    })
                                },
                                cancel: function() {
                                    g && (f(g, function(t) {
                                        (t || l)(!0)
                                    }), m(!0)), b && (f(b, function(t) {
                                        (t || l)(!0)
                                    }), w(!0))
                                }
                            }
                        }
                    }
                }

                function P(t, n, r, i, o, a, s, u) {
                    function h(e) {
                        var i = "$animate:" + e;
                        C && C[i] && C[i].length > 0 && x(function() {
                            r.triggerHandler(i, {
                                event: t,
                                className: n
                            })
                        })
                    }

                    function d() {
                        h("before")
                    }

                    function p() {
                        h("after")
                    }

                    function $() {
                        h("close"), u()
                    }

                    function v() {
                        v.hasBeenRun || (v.hasBeenRun = !0, a())
                    }

                    function g() {
                        if (!g.hasBeenRun) {
                            b && b.applyStyles(), g.hasBeenRun = !0, s && s.tempClasses && f(s.tempClasses, function(t) {
                                c.removeClass(r, t)
                            });
                            var e = r.data(m);
                            e && (b && b.isClassBased ? V(r, n) : (x(function() {
                                var e = r.data(m) || {};
                                P == e.index && V(r, n, t)
                            }), r.data(m, e))), $()
                        }
                    }
                    var w = l,
                        b = j(r, t, n, s);
                    if (!b) return v(), d(), p(), g(), w;
                    t = b.event, n = b.className;
                    var C = e.element._data(b.node);
                    if (C = C && C.events, i || (i = o ? o.parent() : r.parent()), q(r, i)) return v(), d(), p(), g(), w;
                    var S = r.data(m) || {},
                        E = S.active || {},
                        k = S.totalActive || 0,
                        A = S.last,
                        T = !1;
                    if (k > 0) {
                        var O = [];
                        if (b.isClassBased) {
                            if ("setClass" == A.event) O.push(A), V(r, n);
                            else if (E[n]) {
                                var D = E[n];
                                D.event == t ? T = !0 : (O.push(D), V(r, n))
                            }
                        } else if ("leave" == t && E["ng-leave"]) T = !0;
                        else {
                            for (var M in E) O.push(E[M]);
                            S = {}, V(r, !0)
                        }
                        O.length > 0 && f(O, function(t) {
                            t.cancel()
                        })
                    }
                    if (!b.isClassBased || b.isSetClassOperation || "animate" == t || T || (T = "addClass" == t == r.hasClass(n)), T) return v(), d(), p(), $(), w;
                    E = S.active || {}, k = S.totalActive || 0, "leave" == t && r.one("$destroy", function(t) {
                        var n = e.element(this),
                            r = n.data(m);
                        if (r) {
                            var i = r.active["ng-leave"];
                            i && (i.cancel(), V(n, "ng-leave"))
                        }
                    }), c.addClass(r, y), s && s.tempClasses && f(s.tempClasses, function(t) {
                        c.addClass(r, t)
                    });
                    var P = I++;
                    return k++, E[n] = b, r.data(m, {
                        last: b,
                        active: E,
                        index: P,
                        totalActive: k
                    }), d(), b.before(function(e) {
                        var i = r.data(m);
                        e = e || !i || !i.active[n] || b.isClassBased && i.active[n].event != t, v(), e === !0 ? g() : (p(), b.after(g))
                    }), b.cancel
                }

                function N(t) {
                    var n = o(t);
                    if (n) {
                        var r = e.isFunction(n.getElementsByClassName) ? n.getElementsByClassName(y) : n.querySelectorAll("." + y);
                        f(r, function(t) {
                            t = e.element(t);
                            var n = t.data(m);
                            n && n.active && f(n.active, function(t) {
                                t.cancel()
                            })
                        })
                    }
                }

                function V(t, e) {
                    if (u(t, b)) w.disabled || (w.running = !1, w.structural = !1);
                    else if (e) {
                        var n = t.data(m) || {},
                            r = e === !0;
                        !r && n.active && n.active[e] && (n.totalActive--, delete n.active[e]), (r || !n.totalActive) && (c.removeClass(t, y), t.removeData(m))
                    }
                }

                function q(t, n) {
                    if (w.disabled) return !0;
                    if (u(t, b)) return w.running;
                    var r, i, o;
                    do {
                        if (0 === n.length) break;
                        var a = u(n, b),
                            s = a ? w : n.data(m) || {};
                        if (s.disabled) return !0;
                        if (a && (o = !0), r !== !1) {
                            var c = n.data(g);
                            e.isDefined(c) && (r = c)
                        }
                        i = i || s.running || s.last && !s.last.isClassBased
                    } while (n = n.parent());
                    return !o || !r && i
                }
                c = k, b.data(m, w);
                var R = C.$watch(function() {
                        return E.totalPendingRequests
                    }, function(t, e) {
                        0 === t && (R(), C.$$postDigest(function() {
                            C.$$postDigest(function() {
                                w.running = !1
                            })
                        }))
                    }),
                    I = 0,
                    U = i.classNameFilter(),
                    F = U ? function(t) {
                        return U.test(t)
                    } : function() {
                        return !0
                    };
                return {
                    animate: function(t, e, n, r, i) {
                        return r = r || "ng-inline-animate", i = O(i) || {}, i.from = n ? e : null, i.to = n ? n : e, T(function(e) {
                            return P("animate", r, s(t), null, null, l, i, e)
                        })
                    },
                    enter: function(n, r, i, o) {
                        return o = O(o), n = e.element(n), r = a(r), i = a(i), A(n, !0), t.enter(n, r, i), T(function(t) {
                            return P("enter", "ng-enter", s(n), r, i, l, o, t)
                        })
                    },
                    leave: function(n, r) {
                        return r = O(r), n = e.element(n), N(n), A(n, !0), T(function(e) {
                            return P("leave", "ng-leave", s(n), null, null, function() {
                                t.leave(n)
                            }, r, e)
                        })
                    },
                    move: function(n, r, i, o) {
                        return o = O(o), n = e.element(n), r = a(r), i = a(i), N(n), A(n, !0), t.move(n, r, i), T(function(t) {
                            return P("move", "ng-move", s(n), r, i, l, o, t)
                        })
                    },
                    addClass: function(t, e, n) {
                        return this.setClass(t, e, [], n)
                    },
                    removeClass: function(t, e, n) {
                        return this.setClass(t, [], e, n)
                    },
                    setClass: function(n, r, i, a) {
                        a = O(a);
                        var u = "$$animateClasses";
                        if (n = e.element(n), n = s(n), A(n)) return t.$$setClassImmediately(n, r, i, a);
                        var c, l = n.data(u),
                            h = !!l;
                        return l || (l = {}, l.classes = {}), c = l.classes, r = d(r) ? r : r.split(" "), f(r, function(t) {
                            t && t.length && (c[t] = !0)
                        }), i = d(i) ? i : i.split(" "), f(i, function(t) {
                            t && t.length && (c[t] = !1)
                        }), h ? (a && l.options && (l.options = e.extend(l.options || {}, a)), l.promise) : (n.data(u, l = {
                            classes: c,
                            options: a
                        }), l.promise = T(function(e) {
                            var r, i, a, s = o(n);
                            if (s && (r = n.data(u), n.removeData(u), a = n.parent(), i = s.parentNode), !i || i.$$NG_REMOVED || s.$$NG_REMOVED) return void e();
                            var c = n.data(m) || {},
                                l = D(n, r, c.active);
                            return l ? P("setClass", l, n, a, null, function() {
                                l[0] && t.$$addClassImmediately(n, l[0]), l[1] && t.$$removeClassImmediately(n, l[1])
                            }, r.options, e) : e()
                        }))
                    },
                    cancel: function(t) {
                        t.$$cancelFn()
                    },
                    enabled: function(t, e) {
                        switch (arguments.length) {
                            case 2:
                                if (t) V(e);
                                else {
                                    var n = e.data(m) || {};
                                    n.disabled = !0, e.data(m, n)
                                }
                                break;
                            case 1:
                                w.disabled = !t;
                                break;
                            default:
                                t = !w.disabled
                        }
                        return !!t
                    }
                }
            }]), i.register("", ["$window", "$sniffer", "$timeout", "$$animateReflow", function(r, i, a, s) {
                function u() {
                    V || (V = s(function() {
                        Y = [], V = null, G = {}
                    }))
                }

                function h(t, e) {
                    V && V(), Y.push(e), V = s(function() {
                        f(Y, function(t) {
                            t()
                        }), Y = [], V = null, G = {}
                    })
                }

                function $(t, n) {
                    var r = o(t);
                    t = e.element(r), Z.push(t);
                    var i = Date.now() + n;
                    K >= i || (a.cancel(J), K = i, J = a(function() {
                        m(Z), Z = []
                    }, n, !1))
                }

                function m(t) {
                    f(t, function(t) {
                        var e = t.data(_);
                        e && f(e.closeAnimationFns, function(t) {
                            t()
                        })
                    })
                }

                function g(t, e) {
                    var n = e ? G[e] : null;
                    if (!n) {
                        var i = 0,
                            o = 0,
                            a = 0,
                            s = 0;
                        f(t, function(t) {
                            if (t.nodeType == v) {
                                var e = r.getComputedStyle(t) || {},
                                    n = e[D + q];
                                i = Math.max(y(n), i);
                                var u = e[D + I];
                                o = Math.max(y(u), o);
                                e[j + I];
                                s = Math.max(y(e[j + I]), s);
                                var c = y(e[j + q]);
                                c > 0 && (c *= parseInt(e[j + U], 10) || 1), a = Math.max(c, a)
                            }
                        }), n = {
                            total: 0,
                            transitionDelay: o,
                            transitionDuration: i,
                            animationDelay: s,
                            animationDuration: a
                        }, e && (G[e] = n)
                    }
                    return n
                }

                function y(t) {
                    var e = 0,
                        n = p(t) ? t.split(/\s*,\s*/) : [];
                    return f(n, function(t) {
                        e = Math.max(parseFloat(t) || 0, e)
                    }), e
                }

                function w(t) {
                    var e = t.parent(),
                        n = e.data(H);
                    return n || (e.data(H, ++W), n = W), n + "-" + o(t).getAttribute("class")
                }

                function b(t, e, n, r) {
                    var i = ["ng-enter", "ng-leave", "ng-move"].indexOf(n) >= 0,
                        a = w(e),
                        s = a + " " + n,
                        u = G[s] ? ++G[s].total : 0,
                        l = {};
                    if (u > 0) {
                        var f = n + "-stagger",
                            h = a + " " + f,
                            d = !G[h];
                        d && c.addClass(e, f), l = g(e, h), d && c.removeClass(e, f)
                    }
                    c.addClass(e, n);
                    var p = e.data(_) || {},
                        $ = g(e, s),
                        v = $.transitionDuration,
                        m = $.animationDuration;
                    if (i && 0 === v && 0 === m) return c.removeClass(e, n), !1;
                    var y = r || i && v > 0,
                        b = m > 0 && l.animationDelay > 0 && 0 === l.animationDuration,
                        x = p.closeAnimationFns || [];
                    e.data(_, {
                        stagger: l,
                        cacheKey: s,
                        running: p.running || 0,
                        itemIndex: u,
                        blockTransition: y,
                        closeAnimationFns: x
                    });
                    var E = o(e);
                    return y && (C(E, !0), r && e.css(r)), b && S(E, !0), !0
                }

                function x(t, e, n, r, i) {
                    function s() {
                        e.off(I, u), c.removeClass(e, d), c.removeClass(e, p), q && a.cancel(q), T(e, n);
                        var t = o(e);
                        for (var r in m) t.style.removeProperty(m[r])
                    }

                    function u(t) {
                        t.stopPropagation();
                        var e = t.originalEvent || t,
                            n = e.$manualTimeStamp || e.timeStamp || Date.now(),
                            i = parseFloat(e.elapsedTime.toFixed(B));
                        Math.max(n - R, 0) >= j && i >= O && r()
                    }
                    var l = o(e),
                        h = e.data(_);
                    if (-1 == l.getAttribute("class").indexOf(n) || !h) return void r();
                    var d = "",
                        p = "";
                    f(n.split(" "), function(t, e) {
                        var n = (e > 0 ? " " : "") + t;
                        d += n + "-active", p += n + "-pending"
                    });
                    var v = "",
                        m = [],
                        y = h.itemIndex,
                        w = h.stagger,
                        b = 0;
                    if (y > 0) {
                        var x = 0;
                        w.transitionDelay > 0 && 0 === w.transitionDuration && (x = w.transitionDelay * y);
                        var E = 0;
                        w.animationDelay > 0 && 0 === w.animationDuration && (E = w.animationDelay * y, m.push(N + "animation-play-state")), b = Math.round(100 * Math.max(x, E)) / 100
                    }
                    b || (c.addClass(e, d), h.blockTransition && C(l, !1));
                    var k = h.cacheKey + " " + d,
                        A = g(e, k),
                        O = Math.max(A.transitionDuration, A.animationDuration);
                    if (0 === O) return c.removeClass(e, d), T(e, n), void r();
                    !b && i && Object.keys(i).length > 0 && (A.transitionDuration || (e.css("transition", A.animationDuration + "s linear all"), m.push("transition")), e.css(i));
                    var D = Math.max(A.transitionDelay, A.animationDelay),
                        j = D * z;
                    if (m.length > 0) {
                        var V = l.getAttribute("style") || "";
                        ";" !== V.charAt(V.length - 1) && (V += ";"), l.setAttribute("style", V + " " + v)
                    }
                    var q, R = Date.now(),
                        I = P + " " + M,
                        U = (D + O) * L,
                        F = (b + U) * z;
                    return b > 0 && (c.addClass(e, p), q = a(function() {
                        q = null, A.transitionDuration > 0 && C(l, !1), A.animationDuration > 0 && S(l, !1), c.addClass(e, d), c.removeClass(e, p), i && (0 === A.transitionDuration && e.css("transition", A.animationDuration + "s linear all"), e.css(i), m.push("transition"))
                    }, b * z, !1)), e.on(I, u), h.closeAnimationFns.push(function() {
                        s(), r()
                    }), h.running++, $(e, F), s
                }

                function C(t, e) {
                    t.style[D + R] = e ? "none" : ""
                }

                function S(t, e) {
                    t.style[j + F] = e ? "paused" : ""
                }

                function E(t, e, n, r) {
                    return b(t, e, n, r) ? function(t) {
                        t && T(e, n)
                    } : void 0
                }

                function k(t, e, n, r, i) {
                    return e.data(_) ? x(t, e, n, r, i) : (T(e, n), void r())
                }

                function A(t, e, n, r, i) {
                    var o = E(t, e, n, i.from);
                    if (!o) return u(), void r();
                    var a = o;
                    return h(e, function() {
                            a = k(t, e, n, r, i.to)
                        }),
                        function(t) {
                            (a || l)(t)
                        }
                }

                function T(t, e) {
                    c.removeClass(t, e);
                    var n = t.data(_);
                    n && (n.running && n.running--,
                        n.running && 0 !== n.running || t.removeData(_))
                }

                function O(t, e) {
                    var n = "";
                    return t = d(t) ? t : t.split(/\s+/), f(t, function(t, r) {
                        t && t.length > 0 && (n += (r > 0 ? " " : "") + t + e)
                    }), n
                }
                var D, M, j, P, N = "";
                t.ontransitionend === n && t.onwebkittransitionend !== n ? (N = "-webkit-", D = "WebkitTransition", M = "webkitTransitionEnd transitionend") : (D = "transition", M = "transitionend"), t.onanimationend === n && t.onwebkitanimationend !== n ? (N = "-webkit-", j = "WebkitAnimation", P = "webkitAnimationEnd animationend") : (j = "animation", P = "animationend");
                var V, q = "Duration",
                    R = "Property",
                    I = "Delay",
                    U = "IterationCount",
                    F = "PlayState",
                    H = "$$ngAnimateKey",
                    _ = "$$ngAnimateCSS3Data",
                    B = 3,
                    L = 1.5,
                    z = 1e3,
                    G = {},
                    W = 0,
                    Y = [],
                    J = null,
                    K = 0,
                    Z = [];
                return {
                    animate: function(t, e, n, r, i, o) {
                        return o = o || {}, o.from = n, o.to = r, A("animate", t, e, i, o)
                    },
                    enter: function(t, e, n) {
                        return n = n || {}, A("enter", t, "ng-enter", e, n)
                    },
                    leave: function(t, e, n) {
                        return n = n || {}, A("leave", t, "ng-leave", e, n)
                    },
                    move: function(t, e, n) {
                        return n = n || {}, A("move", t, "ng-move", e, n)
                    },
                    beforeSetClass: function(t, e, n, r, i) {
                        i = i || {};
                        var o = O(n, "-remove") + " " + O(e, "-add"),
                            a = E("setClass", t, o, i.from);
                        return a ? (h(t, r), a) : (u(), void r())
                    },
                    beforeAddClass: function(t, e, n, r) {
                        r = r || {};
                        var i = E("addClass", t, O(e, "-add"), r.from);
                        return i ? (h(t, n), i) : (u(), void n())
                    },
                    beforeRemoveClass: function(t, e, n, r) {
                        r = r || {};
                        var i = E("removeClass", t, O(e, "-remove"), r.from);
                        return i ? (h(t, n), i) : (u(), void n())
                    },
                    setClass: function(t, e, n, r, i) {
                        i = i || {}, n = O(n, "-remove"), e = O(e, "-add");
                        var o = n + " " + e;
                        return k("setClass", t, o, r, i.to)
                    },
                    addClass: function(t, e, n, r) {
                        return r = r || {}, k("addClass", t, O(e, "-add"), n, r.to)
                    },
                    removeClass: function(t, e, n, r) {
                        return r = r || {}, k("removeClass", t, O(e, "-remove"), n, r.to)
                    }
                }
            }])
        }])
    }(window, window.angular);