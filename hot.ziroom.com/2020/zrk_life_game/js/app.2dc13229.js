(function(e) {
    function t(t) {
        for (var i, o, s = t[0], c = t[1], u = t[2], l = 0, m = []; l < s.length; l++)
            o = s[l],
            Object.prototype.hasOwnProperty.call(r, o) && r[o] && m.push(r[o][0]),
            r[o] = 0;
        for (i in c)
            Object.prototype.hasOwnProperty.call(c, i) && (e[i] = c[i]);
        p && p(t);
        while (m.length)
            m.shift()();
        return a.push.apply(a, u || []),
        n()
    }
    function n() {
        for (var e, t = 0; t < a.length; t++) {
            for (var n = a[t], i = !0, s = 1; s < n.length; s++) {
                var c = n[s];
                0 !== r[c] && (i = !1)
            }
            i && (a.splice(t--, 1),
            e = o(o.s = n[0]))
        }
        return e
    }
    var i = {}
      , r = {
        app: 0
    }
      , a = [];
    function o(t) {
        if (i[t])
            return i[t].exports;
        var n = i[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, o),
        n.l = !0,
        n.exports
    }
    o.m = e,
    o.c = i,
    o.d = function(e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    o.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    o.t = function(e, t) {
        if (1 & t && (e = o(e)),
        8 & t)
            return e;
        if (4 & t && "object" === typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (o.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var i in e)
                o.d(n, i, function(t) {
                    return e[t]
                }
                .bind(null, i));
        return n
    }
    ,
    o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return o.d(t, "a", t),
        t
    }
    ,
    o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    o.p = "/2020/zrk_life_game/";
    var s = window["webpackJsonp"] = window["webpackJsonp"] || []
      , c = s.push.bind(s);
    s.push = t,
    s = s.slice();
    for (var u = 0; u < s.length; u++)
        t(s[u]);
    var p = c;
    a.push([0, "chunk-vendors"]),
    n()
}
)({
    0: function(e, t, n) {
        e.exports = n("cd49")
    },
    "0b91": function(e, t, n) {
        e.exports = n.p + "media/bgm.6ad95e38.mp3"
    },
    "0ca1": function(e, t, n) {
        e.exports = n.p + "img/1.65a0832d.png"
    },
    1: function(e, t) {},
    "10ad": function(e, t, n) {},
    2: function(e, t) {},
    "29dc": function(e, t, n) {
        e.exports = n.p + "img/manticore.3e41b115.jpeg"
    },
    "2ca9": function(e, t, n) {
        e.exports = n.p + "img/manticore_blink.7c87ab5d.png"
    },
    3: function(e, t) {},
    3198: function(e, t, n) {
        e.exports = n.p + "img/manticore_rule.374ba2df.png"
    },
    "366a": function(e, t, n) {
        e.exports = n.p + "img/manticore_tit.45b6ab73.png"
    },
    "3e2a": function(e, t, n) {
        "use strict";
        var i = n("918c7")
          , r = n.n(i);
        r.a
    },
    4: function(e, t) {},
    4014: function(e, t, n) {
        e.exports = n.p + "img/top_bg.dc6c4191.png"
    },
    5: function(e, t) {},
    6: function(e, t) {},
    "6c5e": function(e, t, n) {
        e.exports = n.p + "img/manticore_bg.e10112c1.png"
    },
    "6c93": function(e, t, n) {
        "use strict";
        var i = n("bc65")
          , r = n.n(i);
        r.a
    },
    7: function(e, t) {},
    8: function(e, t) {},
    "88ae": function(e, t, n) {
        e.exports = n.p + "img/pause.de3930ab.png"
    },
    9: function(e, t) {},
    "918c7": function(e, t, n) {},
    a3b9: function(e, t, n) {},
    aa8c: function(e, t, n) {
        e.exports = n.p + "img/manticore_start.5a02f4bc.png"
    },
    b96f: function(e, t, n) {
        e.exports = n.p + "img/manticore_machine.08eccec4.png"
    },
    b9af: function(e, t, n) {
        e.exports = n.p + "img/2.7067c8c9.png"
    },
    bb69: function(e, t, n) {
        e.exports = n.p + "img/manticore_end.a8463087.png"
    },
    bc65: function(e, t, n) {},
    c072: function(e, t, n) {
        "use strict";
        var i = n("10ad")
          , r = n.n(i);
        r.a
    },
    c2e4: function(e, t, n) {
        e.exports = n.p + "img/3.d22c830b.png"
    },
    c385: function(e, t, n) {
        e.exports = n.p + "img/manticore_get.3d454502.png"
    },
    cd49: function(e, t, n) {
        "use strict";
        n.r(t);
        n("9531"),
        n("26d3"),
        n("2007"),
        n("41ab");
        var i = n("9869")
          , r = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("router-view")
        }
          , a = []
          , o = n("f5f2")
          , s = n("f0ad")
          , c = n("02a5")
          , u = n("0f9e")
          , p = n("fc36")
          , l = function(e) {
            Object(s["a"])(n, e);
            var t = Object(c["a"])(n);
            function n() {
                return Object(o["a"])(this, n),
                t.apply(this, arguments)
            }
            return n
        }(p["c"]);
        l = Object(u["a"])([Object(p["a"])({
            name: "app"
        })], l);
        var m = l
          , h = m
          , d = n("2be6")
          , f = Object(d["a"])(h, r, a, !1, null, null, null)
          , g = f.exports
          , b = n("5f2b")
          , y = function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticClass: "index-page"
            }, [e.loadEnd && e.gameBegin ? i("Game") : e.loadEnd ? !e.gameBegin && e.loadEnd ? i("Entrance", {
                attrs: {
                    cmsData: e.cmsData
                },
                on: {
                    doGameBegin: function(t) {
                        return e.doGameBegin()
                    }
                }
            }) : e._e() : i("Loading", {
                on: {
                    doNext: function(t) {
                        return e.doNext()
                    }
                }
            }), i("div", {
                staticClass: "audio-box"
            }, [i("audio", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !e.getIsbaidu,
                    expression: "!getIsbaidu"
                }],
                staticClass: "audio bgm",
                attrs: {
                    id: "bgm",
                    loop: "loop",
                    controls: "controls",
                    preload: "auto",
                    src: n("0b91")
                }
            }, [e._v(" 你的浏览器版本太低，不支持audio标签 ")]), e._l(e.IMG_LIST.audio, (function(t, n) {
                return i("div", [i("audio", {
                    staticClass: "audio",
                    class: t.id,
                    attrs: {
                        id: t.only,
                        muted: "",
                        controls: "controls",
                        preload: "true",
                        src: t.mp3
                    }
                }, [e._v(" 你的浏览器版本太低，不支持audio标签 ")])])
            }
            ))], 2)], 1)
        }
          , v = []
          , k = (n("d6de"),
        n("8d0f"),
        n("d86f"),
        n("df26"),
        n("42c2"))
          , w = n("30c6")
          , x = (n("ef1f"),
        n("2aa5"),
        n("32f5"),
        n("086b"),
        n("763a"))
          , O = n.n(x)
          , j = n("c921")
          , _ = n("aa7c")
          , I = n("507a")
          , S = n("6445");
        function E(e) {
            return e
        }
        var T = {
            "hd.ziroom.com": "production",
            "special.ziroom.com": "production",
            "topic.ziroom.com": "production",
            "hot.ziroom.com": "production",
            "hd.q.ziroom.com": "staging",
            "special.q.ziroom.com": "staging",
            "qspecial.ziroom.com": "staging",
            "topic.q.ziroom.com": "staging",
            "hot.q.ziroom.com": "staging",
            "hd.t.ziroom.com": "test",
            "special.t.ziroom.com": "test",
            "tspecial.ziroom.com": "test",
            "topic.t.ziroom.com": "test",
            "hot.t.ziroom.com": "test"
        }
          , P = E({
            development: "http://hot.t.ziroom.com/2020/zrk_life_game/",
            test: "http://hot.t.ziroom.com/2020/zrk_life_game/",
            staging: "http://hot.q.ziroom.com/2020/zrk_life_game/",
            production: "https://hot.ziroom.com/2020/zrk_life_game/"
        })
          , A = E({
            development: "http://wx.new.d1.ziroom.com",
            test: "http://wx.new.t2.ziroom.com",
            staging: "http://wx.q.ziroom.com",
            production: "https://yx1.ziroom.com"
        })
          , R = E({
            development: "http://hot.t.ziroom.com",
            test: "http://hot.t.ziroom.com",
            staging: "http://hot.t.ziroom.com",
            production: "https://hot.ziroom.com"
        })
          , C = E({
            development: "http://special2019.ziroom.com/zi-feature/cms_bd/zuzhu/all/",
            test: "http://special2019.ziroom.com/zi-feature/cms_bd/zuzhu/all/",
            staging: "http://special2019.ziroom.com/zi-feature/cms_bd/zuzhu/all/",
            production: "http://special2019.ziroom.com/zi-prod/cms_bd/zuzhu/all/"
        })
          , z = "";
        function N() {
            return new Promise(function() {
                var e = Object(k["a"])(regeneratorRuntime.mark((function e(t, n) {
                    var i;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                if (!z) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return", t(z));
                            case 2:
                                if (!Object(S["isWechat"])()) {
                                    e.next = 8;
                                    break
                                }
                                return e.next = 5,
                                Object(S["isWechatApp"])();
                            case 5:
                                return i = e.sent,
                                z = i ? "wechatApp" : "wechat",
                                e.abrupt("return", t(z));
                            case 8:
                                if (!Object(S["isApp"])()) {
                                    e.next = 11;
                                    break
                                }
                                return z = "app",
                                e.abrupt("return", t(z));
                            case 11:
                                return z = "browser",
                                e.abrupt("return", t(z));
                            case 13:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t, n) {
                    return e.apply(this, arguments)
                }
            }())
        }
        function L() {
            return Object(S["isApp"])() ? Object(S["isIOS"])() ? 1 : 2 : Object(S["isWechat"])() ? 3 : 5
        }
        var U = T[window.location.host] || "development"
          , M = T[window.location.host] || "test"
          , D = A[U]
          , W = P[U]
          , F = R[U]
          , B = C[U];
        function G() {
            return "production" === U
        }
        n("8423"),
        n("beb4"),
        n("e416"),
        n("e94e"),
        n("f3b8"),
        n("841b"),
        n("097b");
        var q = n("4fd6")
          , H = n.n(q)
          , Q = n("7c6c")
          , Z = n("9ce4");
        i["default"].use(Z["a"]);
        var K = new Z["a"].Store({})
          , X = n("b827")
          , V = n("ff89");
        function J() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : location.href;
            window.wx.miniProgram.redirectTo({
                url: "/pages/login/main".concat(Object(I["setQueryString"])({
                    redirectUrl: e
                }))
            })
        }
        var Y = function(e) {
            Object(s["a"])(n, e);
            var t = Object(c["a"])(n);
            function n() {
                var e;
                return Object(o["a"])(this, n),
                e = t.apply(this, arguments),
                e.isProduction = G(),
                e.token = Object(S["getQueryString"])("token") || V["Cookies"].get("passport_token") || "",
                e.uid = V["Cookies"].get("uid") || "",
                e.phone = V["Cookies"].get("phone") || "",
                e.source = L(),
                e.isAppInfoSaved = !1,
                e.isStop = !1,
                e.isPause = !1,
                e.ctx = null,
                e.exeTime = 0,
                e.enemys = [],
                e.bullets = [],
                e.addEnemyTime = 4e3,
                e.enemy_img = [],
                e.die_img = [],
                e.fire_img = [],
                e.boom_die = [],
                e.die_land_img = [],
                e.ratio = 1,
                e.enemySpeed = 1,
                e.badPlanNum = 10,
                e.bulletsNum = 20,
                e.innerWidth = window.innerWidth,
                e.innerHeight = window.innerHeight,
                e.points = 0,
                e.words = [],
                e.keyboardHeight = 0,
                e.checkPoints = 0,
                e.checkWords = [],
                e.enemyNum = 0,
                e.isPlay = !1,
                e.ememyMarLeft = 100,
                e.ememyMarRight = 270,
                e.wordsList = [],
                e
            }
            return Object(w["a"])(n, [{
                key: "SET_USERINFO",
                value: function(e) {
                    this.token = e.token || "",
                    this.uid = e.uid || "",
                    this.phone = e.phone || e._phone || "",
                    Object(S["isApp"])() || (V["Cookies"].set("passport_token", e.token),
                    V["Cookies"].set("uid", e.uid),
                    V["Cookies"].set("phone", e.phone || e._phone))
                }
            }, {
                key: "CLEAR_USERINFO",
                value: function() {
                    this.token = "",
                    this.uid = "",
                    this.phone = "",
                    Object(S["isApp"])() || (V["Cookies"].expire("passport_token"),
                    V["Cookies"].expire("uid"),
                    V["Cookies"].expire("phone"))
                }
            }, {
                key: "SET_APPINFOSAVED",
                value: function(e) {
                    this.isAppInfoSaved = e
                }
            }, {
                key: "putCtx",
                value: function(e) {
                    this.ctx = e
                }
            }, {
                key: "gameOver",
                value: function() {
                    this.isStop = !0
                }
            }, {
                key: "gamePause",
                value: function() {
                    this.isPause = !this.isPause
                }
            }, {
                key: "putEnemyNum",
                value: function(e) {
                    this.enemyNum = e
                }
            }, {
                key: "putScore",
                value: function(e) {}
            }, {
                key: "putEnemyImg",
                value: function(e) {
                    this.enemy_img = e
                }
            }, {
                key: "putDieImg",
                value: function(e) {
                    this.die_img = e
                }
            }, {
                key: "putFireImg",
                value: function(e) {
                    this.fire_img = e
                }
            }, {
                key: "putBoomDieImg",
                value: function(e) {
                    this.boom_die = e
                }
            }, {
                key: "enemysPush",
                value: function(e) {
                    if (!e)
                        return !1;
                    this.enemys.push(e)
                }
            }, {
                key: "bulletsPush",
                value: function(e) {
                    if (!e)
                        return !1;
                    this.bullets.push(e)
                }
            }, {
                key: "putRatio",
                value: function(e) {
                    if (!e)
                        return !1;
                    this.ratio = e
                }
            }, {
                key: "r",
                value: function(e) {
                    var t = Math.floor(this.ratio * this.innerWidth * e / 750);
                    return t
                }
            }, {
                key: "putEnemySpeed",
                value: function(e) {
                    if (!e)
                        return !1;
                    this.enemySpeed = e
                }
            }, {
                key: "putExeTime",
                value: function(e) {
                    if (!e)
                        return !1;
                    this.exeTime = e
                }
            }, {
                key: "putPoint",
                value: function(e) {
                    if (!e)
                        return !1;
                    this.points += e
                }
            }, {
                key: "putCheckPoints",
                value: function(e) {
                    ~e ? this.checkPoints += e : this.checkPoints = 0
                }
            }, {
                key: "putCheckWords",
                value: function(e) {
                    e.words && this.words.push(e.words),
                    e.type && e.words ? this.checkWords.push(e.words) : e.type || (this.checkWords = [])
                }
            }, {
                key: "putKeyboardHeight",
                value: function(e) {
                    if (!e)
                        return !1;
                    this.keyboardHeight = e
                }
            }, {
                key: "putBoomDieLandImg",
                value: function(e) {
                    if (!e)
                        return !1;
                    this.die_land_img = e
                }
            }, {
                key: "putIsPlay",
                value: function(e) {
                    this.isPlay = e
                }
            }, {
                key: "putWordsList",
                value: function(e) {
                    e.length > 0 && (this.wordsList = [].concat(Object(Q["a"])(this.wordsList), Object(Q["a"])(e)))
                }
            }, {
                key: "doAudio",
                value: function(e) {
                    if (!this.isPlay)
                        return !1;
                    var t = Array.from(document.getElementsByTagName("audio"));
                    t.some((function(t) {
                        if (~t.className.indexOf(e) && (t.paused || t.ended))
                            return t.muted && (t.muted = !1),
                            t.play().then((function() {}
                            )).catch((function(e) {}
                            )),
                            !0
                    }
                    ))
                }
            }, {
                key: "geneEnemy",
                value: function() {
                    var e = this;
                    if (!this.isStop && !this.isPause) {
                        var t = this.enemyNum % 2 ? this.ememyMarRight : this.ememyMarLeft
                          , n = this.wordsList[this.enemyNum] ? this.wordsList[this.enemyNum] : this.wordsList[0];
                        this.enemys.some((function(i) {
                            if (i.isDie && i.isRemove)
                                return i.create(t, n),
                                e.enemyNum = e.enemyNum + 1,
                                !0
                        }
                        ))
                    }
                }
            }, {
                key: "getUserInfo",
                value: function() {
                    var e = Object(k["a"])(regeneratorRuntime.mark((function e() {
                        var t, n, i, r;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!this.isAppInfoSaved) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return e.next = 4,
                                    N();
                                case 4:
                                    t = e.sent,
                                    e.t0 = t,
                                    e.next = "app" === e.t0 ? 8 : "wechatApp" === e.t0 ? 13 : 16;
                                    break;
                                case 8:
                                    return e.next = 10,
                                    window.$zrApp.invoke("getLoginInfo");
                                case 10:
                                    return n = e.sent,
                                    n.token ? (this.SET_USERINFO(n),
                                    this.SET_APPINFOSAVED(!0)) : this.CLEAR_USERINFO(),
                                    e.abrupt("break", 16);
                                case 13:
                                    return i = Object(S["getQueryString"])("token"),
                                    i && (r = {
                                        token: i,
                                        uid: "",
                                        phone: "",
                                        _phone: ""
                                    },
                                    this.SET_USERINFO(r)),
                                    e.abrupt("break", 16);
                                case 16:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "login",
                value: function() {
                    var e = Object(k["a"])(regeneratorRuntime.mark((function e() {
                        var t, n, i;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    N();
                                case 2:
                                    t = e.sent,
                                    e.t0 = t,
                                    e.next = "app" === e.t0 ? 6 : "wechatApp" === e.t0 ? 17 : 20;
                                    break;
                                case 6:
                                    return e.next = 8,
                                    window.$zrApp.invoke("login");
                                case 8:
                                    if (n = e.sent,
                                    !n.token) {
                                        e.next = 14;
                                        break
                                    }
                                    return this.SET_USERINFO(n),
                                    e.abrupt("return", n);
                                case 14:
                                    return this.CLEAR_USERINFO(),
                                    e.abrupt("return", {});
                                case 16:
                                    return e.abrupt("break", 32);
                                case 17:
                                    return J(),
                                    e.abrupt("return", {});
                                case 20:
                                    return e.next = 22,
                                    H()({
                                        env: M,
                                        loginButton: !1
                                    });
                                case 22:
                                    if (i = e.sent,
                                    !i.token) {
                                        e.next = 31;
                                        break
                                    }
                                    return V["Cookies"].set("phone", i._phone),
                                    V["Cookies"].set("passport_token", i.token, {
                                        expires: Number(604800)
                                    }),
                                    V["Cookies"].set("uid", i.uid, {
                                        expires: Number(604800)
                                    }),
                                    this.SET_USERINFO(i),
                                    e.abrupt("return", i);
                                case 31:
                                    return e.abrupt("return", {});
                                case 32:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "hideShare",
                value: function() {
                    var e = Object(k["a"])(regeneratorRuntime.mark((function e(t) {
                        var n;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    N();
                                case 2:
                                    n = e.sent,
                                    e.t0 = n,
                                    e.next = "app" === e.t0 ? 6 : "wechat" === e.t0 ? 8 : 10;
                                    break;
                                case 6:
                                    return window.$zrApp.invoke("showTitleBar", {
                                        title: t
                                    }),
                                    e.abrupt("break", 10);
                                case 8:
                                    return Object(S["hideWxShare"])(),
                                    e.abrupt("break", 10);
                                case 10:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "initShare",
                value: function() {
                    var e = Object(k["a"])(regeneratorRuntime.mark((function e(t) {
                        var n, i, r, a;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    N();
                                case 2:
                                    r = e.sent,
                                    e.t0 = r,
                                    e.next = "app" === e.t0 ? 6 : "wechatApp" === e.t0 ? 10 : "wechat" === e.t0 ? 12 : 14;
                                    break;
                                case 6:
                                    return a = null,
                                    a = t.wechatApp ? {
                                        wxMiniProgramUserName: "gh_0cbc07004998",
                                        wxMiniProgramPath: "/pages/webview/main?src=".concat(encodeURIComponent(t.link)),
                                        linkUrl: t.link,
                                        title: t.title,
                                        content: t.desc,
                                        imageUrl: t.imgUrl,
                                        channel: ["qq", "qzone", "sina", "wechat"]
                                    } : {
                                        linkUrl: t.link,
                                        title: t.title,
                                        content: t.desc,
                                        imageUrl: t.imgUrl
                                    },
                                    window.$zrApp.invoke("showTitleBar", {
                                        title: t.appTitle || t.title,
                                        shareParam: a
                                    }),
                                    e.abrupt("break", 14);
                                case 10:
                                    return null === (n = window.wx) || void 0 === n || null === (i = n.miniProgram) || void 0 === i || i.postMessage({
                                        data: {
                                            shareData: t
                                        }
                                    }),
                                    e.abrupt("break", 14);
                                case 12:
                                    return Object(S["wxShare"])(t, {
                                        production: this.isProduction,
                                        debug: !1,
                                        hideOtherShare: !0
                                    }),
                                    e.abrupt("break", 14);
                                case 14:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "share",
                value: function() {
                    var e = Object(k["a"])(regeneratorRuntime.mark((function e(t) {
                        var n, i, r, a;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    N();
                                case 2:
                                    r = e.sent,
                                    e.t0 = r,
                                    e.next = "app" === e.t0 ? 6 : "wechatApp" === e.t0 ? 10 : "wechat" === e.t0 ? 12 : 14;
                                    break;
                                case 6:
                                    return a = null,
                                    a = t.wechatApp ? {
                                        wxMiniProgramUserName: "gh_0cbc07004998",
                                        wxMiniProgramPath: "/pages/webview/main?src=".concat(encodeURIComponent(t.link)),
                                        linkUrl: t.link,
                                        title: t.title,
                                        content: t.desc,
                                        imageUrl: t.imgUrl,
                                        channel: ["qq", "qzone", "sina", "wechat"]
                                    } : {
                                        linkUrl: t.link,
                                        title: t.title,
                                        content: t.desc,
                                        imageUrl: t.imgUrl
                                    },
                                    window.$zrApp.invoke("share", a),
                                    e.abrupt("break", 14);
                                case 10:
                                    return null === (n = window.wx) || void 0 === n || null === (i = n.miniProgram) || void 0 === i || i.postMessage({
                                        data: {
                                            shareData: t
                                        }
                                    }),
                                    e.abrupt("break", 14);
                                case 12:
                                    return Object(S["wxShare"])(t, {
                                        production: this.isProduction,
                                        debug: !1,
                                        hideOtherShare: !0
                                    }),
                                    e.abrupt("break", 14);
                                case 14:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "isLogin",
                get: function() {
                    return "" !== this.token
                }
            }, {
                key: "getEnemySpeed",
                get: function() {
                    return this.enemySpeed
                }
            }]),
            n
        }(X["d"]);
        Object(u["a"])([X["c"]], Y.prototype, "SET_USERINFO", null),
        Object(u["a"])([X["c"]], Y.prototype, "CLEAR_USERINFO", null),
        Object(u["a"])([X["c"]], Y.prototype, "SET_APPINFOSAVED", null),
        Object(u["a"])([X["c"]], Y.prototype, "putCtx", null),
        Object(u["a"])([X["c"]], Y.prototype, "gameOver", null),
        Object(u["a"])([X["c"]], Y.prototype, "gamePause", null),
        Object(u["a"])([X["c"]], Y.prototype, "putEnemyNum", null),
        Object(u["a"])([X["c"]], Y.prototype, "putScore", null),
        Object(u["a"])([X["c"]], Y.prototype, "putEnemyImg", null),
        Object(u["a"])([X["c"]], Y.prototype, "putDieImg", null),
        Object(u["a"])([X["c"]], Y.prototype, "putFireImg", null),
        Object(u["a"])([X["c"]], Y.prototype, "putBoomDieImg", null),
        Object(u["a"])([X["c"]], Y.prototype, "enemysPush", null),
        Object(u["a"])([X["c"]], Y.prototype, "bulletsPush", null),
        Object(u["a"])([X["c"]], Y.prototype, "putRatio", null),
        Object(u["a"])([X["c"]], Y.prototype, "r", null),
        Object(u["a"])([X["c"]], Y.prototype, "putEnemySpeed", null),
        Object(u["a"])([X["c"]], Y.prototype, "putExeTime", null),
        Object(u["a"])([X["c"]], Y.prototype, "putPoint", null),
        Object(u["a"])([X["c"]], Y.prototype, "putCheckPoints", null),
        Object(u["a"])([X["c"]], Y.prototype, "putCheckWords", null),
        Object(u["a"])([X["c"]], Y.prototype, "putKeyboardHeight", null),
        Object(u["a"])([X["c"]], Y.prototype, "putBoomDieLandImg", null),
        Object(u["a"])([X["c"]], Y.prototype, "putIsPlay", null),
        Object(u["a"])([X["c"]], Y.prototype, "putWordsList", null),
        Object(u["a"])([X["c"]], Y.prototype, "doAudio", null),
        Object(u["a"])([X["c"]], Y.prototype, "geneEnemy", null),
        Object(u["a"])([Object(X["a"])({
            rawError: !0
        })], Y.prototype, "getUserInfo", null),
        Object(u["a"])([Object(X["a"])({
            rawError: !0
        })], Y.prototype, "login", null),
        Object(u["a"])([Object(X["a"])({
            rawError: !0
        })], Y.prototype, "hideShare", null),
        Object(u["a"])([Object(X["a"])({
            rawError: !0
        })], Y.prototype, "initShare", null),
        Object(u["a"])([Object(X["a"])({
            rawError: !0
        })], Y.prototype, "share", null),
        Y = Object(u["a"])([Object(X["b"])({
            dynamic: !0,
            store: K,
            name: "common"
        })], Y);
        var $ = Object(X["e"])(Y)
          , ee = n("132a")
          , te = new j["API"]({
            baseURL: D,
            mockURL: "https://yapi.petrelteam.com/mock/54"
        });
        te.validate = function(e, t, n) {
            return new Promise(function() {
                var t = Object(k["a"])(regeneratorRuntime.mark((function t(n) {
                    var i;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1)
                            switch (t.prev = t.next) {
                            case 0:
                                if (i = "success" === e.status,
                                i) {
                                    t.next = 19;
                                    break
                                }
                                t.t0 = e.error_code,
                                t.next = "NEED_REDIRECT" === t.t0 ? 5 : "NEED_LOGIN" === t.t0 ? 7 : "ACTIVITY_TIMEOUT" === t.t0 ? 14 : "ACTIVITY_NOT_START" === t.t0 ? 16 : 18;
                                break;
                            case 5:
                                return window.location.href = e.data.url + encodeURIComponent(window.location.href),
                                t.abrupt("break", 19);
                            case 7:
                                return $.CLEAR_USERINFO(),
                                O()("您的登录信息失效，请重新登录"),
                                t.next = 11,
                                Object(I["sleep"])(2e3);
                            case 11:
                                return t.next = 13,
                                $.login();
                            case 13:
                                return t.abrupt("break", 19);
                            case 14:
                                return O()(e.error_message),
                                t.abrupt("break", 19);
                            case 16:
                                return O()(e.error_message),
                                t.abrupt("break", 19);
                            case 18:
                                O()(e.error_message);
                            case 19:
                                n(i);
                            case 20:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }())
        }
        ,
        te.format = function(e, t, n) {
            return e.data
        }
        ,
        te.catch = function() {
            var e = Object(k["a"])(regeneratorRuntime.mark((function e(t, n, i) {
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            O()("网络错误，请稍后再试");
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n, i) {
                return e.apply(this, arguments)
            }
        }();
        var ne = new _["DefaultUseGateway"]({
            env: U,
            appID: "snaMobile",
            headers: function() {
                return {
                    token: $.token
                }
            }
        });
        ne.validate = function() {
            var e = Object(k["a"])(regeneratorRuntime.mark((function e(t, n, i) {
                var r;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            if (r = "success" === t.status,
                            r) {
                                e.next = 15;
                                break
                            }
                            if (O()(t.message || "接口异常"),
                            10004 !== +t.code && 40005 !== +t.code) {
                                e.next = 12;
                                break
                            }
                            return $.CLEAR_USERINFO(),
                            e.next = 7,
                            Object(I["sleep"])(2e3);
                        case 7:
                            return e.next = 9,
                            $.login();
                        case 9:
                            location.reload(),
                            e.next = 15;
                            break;
                        case 12:
                            return e.next = 14,
                            Object(I["sleep"])(2e3);
                        case 14:
                            window.location.replace("".concat(F, "/2020/zrk_life_home/?city_code=").concat(Object(ee["getQueryString"])("city_code"), "&channelcode=").concat(Object(ee["getQueryString"])("utm_source")));
                        case 15:
                            return e.abrupt("return", r);
                        case 17:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n, i) {
                return e.apply(this, arguments)
            }
        }(),
        ne.catch = function() {
            var e = Object(k["a"])(regeneratorRuntime.mark((function e(t, n, i) {
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            O()("网络错误，请稍后再试");
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n, i) {
                return e.apply(this, arguments)
            }
        }();
        var ie, re = new j["API"]({
            useGateway: ne
        });
        n("0d9f"),
        n("2ea2"),
        n("918c");
        function ae() {
            return (new Date).getTime().toString().replace(/^(\d+)\d{5}$/, "$100000")
        }
        function oe() {
            return new Promise((function(e) {
                ie ? e(ie) : Object(ee["isApp"])() ? (ie = Object(ee["isIOS"])() ? "app_ios" : "app_android",
                e(ie)) : Object(ee["isWechatApp"])().then((function(t) {
                    ie = t ? "min_programe" : "h5_common",
                    e(ie)
                }
                ))
            }
            ))
        }
        var se = new Set;
        function ce(e) {
            return ue.apply(this, arguments)
        }
        function ue() {
            return ue = Object(k["a"])(regeneratorRuntime.mark((function e(t) {
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            if (!se.has(t)) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return", Promise.resolve());
                        case 2:
                            return e.abrupt("return", new Promise((function(e) {
                                var n = new Image;
                                n.onload = function() {
                                    se.add(t),
                                    e({
                                        img: n,
                                        src: t
                                    })
                                }
                                ,
                                n.src = t
                            }
                            )));
                        case 3:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            ue.apply(this, arguments)
        }
        function pe(e, t) {
            for (var n = 0; n < e.length; n++)
                t(e[n], n);
            return e
        }
        function le() {
            var e = !1
              , t = window.screen.height / window.screen.width
              , n = window.screen.height == window.screen.availHeight ? 1.8 : 1.65;
            return t > n && (e = !0),
            e
        }
        function me() {
            var e = "";
            try {
                window && (e = window.navigator.userAgent)
            } catch (t) {}
            return ~e.indexOf("baiduboxapp")
        }
        var he = function(e) {
            return te.GET("".concat(B).concat(e, ".json?").concat(ae()))
        }
          , de = (re.POST("/order/express/list", {
            gateway: {
                appID: "mall-admin"
            }
        }),
        te.GET("/hd/join/join-detail"),
        re.POST("/life2020/game/start"))
          , fe = re.POST("/life2020/game/check")
          , ge = re.POST("/life2020/game/end")
          , be = re.POST("/life2020/game/user-info")
          , ye = n("29dc")
          , ve = n.n(ye)
          , ke = function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticClass: "game",
                attrs: {
                    id: "game"
                }
            }, [i("div", {
                staticClass: "parent",
                style: {
                    opacity: e.isPause || e.isStop ? 0 : 1
                }
            }, [i("canvas", {
                ref: "canvas",
                attrs: {
                    id: "cas"
                }
            }, [e._v("您的浏览器不支持canvas，请更新浏览器")])]), i("div", {
                staticClass: "top"
            }, [e.isPlay ? i("img", {
                staticClass: "stop",
                attrs: {
                    src: n("dfc2"),
                    alt: ""
                },
                on: {
                    click: function(t) {
                        return e.handlePlay("commit")
                    }
                }
            }) : i("img", {
                staticClass: "stop",
                attrs: {
                    src: n("dbf4"),
                    alt: ""
                },
                on: {
                    click: function(t) {
                        return e.handlePlay("btn")
                    }
                }
            }), i("div", {
                staticClass: "time"
            }, [i("p", [e._v(e._s(e.isStop ? 0 : e.exeTime) + "s")]), i("div", {
                staticClass: "step-box"
            }, [i("img", {
                staticClass: "steps step-bg",
                attrs: {
                    src: n("d7cf"),
                    alt: ""
                }
            }), i("div", {
                staticClass: "step steps"
            }, [i("div", {
                staticClass: "step-img",
                style: {
                    width: this.doStep()
                }
            })])])]), i("p", {
                staticClass: "die-word"
            }, [e._v(" 已获得 "), i("span", [e._v(e._s(e.points))]), e._v(" 分 ")])]), i("div", {
                ref: "keyboard",
                class: {
                    keyboardErr: e.keyboardErr
                },
                style: {
                    "padding-bottom": e.judgeBigScreen ? "30px" : "10px"
                },
                attrs: {
                    id: "keyboard"
                }
            }, [e._l(e.keyboard, (function(t, n) {
                return [1 === t.type ? i("div", {
                    staticClass: "i-w",
                    on: {
                        click: function(n) {
                            return e.doKeyboard(n, t.name)
                        }
                    }
                }, [i("div", {
                    staticClass: "key-item"
                }, [e._v(e._s(t.name))])]) : 2 === t.type ? i("div", {
                    staticClass: "i-w-half-blank"
                }) : 3 === t.type ? i("div", {
                    staticClass: "i-w-blank"
                }) : e._e()]
            }
            ))], 2), e.isPause && !e.isPauseLoading ? i("div", {
                staticClass: "pause",
                on: {
                    click: function(t) {
                        return e.doStopPop(1)
                    }
                }
            }, [i("img", {
                attrs: {
                    src: n("88ae"),
                    alt: ""
                }
            })]) : e._e(), e.isPause && e.isPauseLoading ? i("div", {
                staticClass: "pause-ani"
            }, [i("transition-group", {
                staticClass: "animated",
                attrs: {
                    tag: "ul",
                    name: "slide-fade"
                }
            }, e._l(e.pauseAni, (function(t, n) {
                return n === e.scrollIndex ? i("li", {
                    key: n + "_scroll"
                }, [t.img ? i("img", {
                    attrs: {
                        src: t.img,
                        alt: ""
                    }
                }) : e._e()]) : e._e()
            }
            )), 0)], 1) : e._e(), e.showStar ? i("div", {
                staticClass: "isStop isStar"
            }, [i("img", {
                staticClass: "slide-fade-enter-active",
                attrs: {
                    src: n("fd98"),
                    alt: ""
                }
            })]) : e._e(), e.isStop ? i("div", {
                staticClass: "isStop"
            }, [i("img", {
                staticClass: "slide-fade-enter-active",
                attrs: {
                    src: n("d983"),
                    alt: ""
                }
            })]) : e._e()])
        }
          , we = []
          , xe = (n("ef14"),
        {
            enemy_img: [{
                img: "https://webimg.ziroom.com/a57f71be-9980-4573-a5f0-46056e74c2c3.png"
            }, {
                img: "https://webimg.ziroom.com/a4eea37a-4335-4c6f-b101-831e15aead18.png"
            }, {
                img: "https://webimg.ziroom.com/a57f71be-9980-4573-a5f0-46056e74c2c3.png"
            }],
            boom_die: [{
                img: "https://webimg.ziroom.com/6e345188-fba6-4551-acbf-184c85e8683a.png"
            }, {
                img: "https://webimg.ziroom.com/5634d2c2-e570-4b07-9a2b-eba0724ccc0e.png"
            }, {
                img: "https://webimg.ziroom.com/c4cbba14-f721-4315-8e50-aa5510097808.png"
            }, {
                img: "https://webimg.ziroom.com/c543ed7f-a87c-437f-8f55-53038a31bf0c.png"
            }],
            die_big_img: [{
                img: "https://webimg.ziroom.com/e11cd19c-4fc2-496c-a7d1-da7cfd2c4dd0.png"
            }, {
                img: "https://webimg.ziroom.com/37e1d733-41db-4dc8-82d2-2892e2790a79.png"
            }, {
                img: "https://webimg.ziroom.com/fb57a8ea-7e19-4a66-a423-cf1c707edcaf.png"
            }, {
                img: "https://webimg.ziroom.com/a8a11fc7-aee1-4217-a9c6-e4a5b41039bb.png"
            }, {
                img: "https://webimg.ziroom.com/0bfd2bbd-4694-4c77-92cc-28052ba879fb.png"
            }, {
                img: "https://webimg.ziroom.com/c7fee3fb-799c-4ec2-85ef-4934fbc32f9e.png"
            }, {
                img: "https://webimg.ziroom.com/072f1b52-5848-4e87-aff4-6c7749768285.png"
            }],
            die_land_img: [{
                img: "https://webimg.ziroom.com/5425834e-882e-4fc7-bb0d-f2ad543f607d.png"
            }, {
                img: "https://webimg.ziroom.com/ccc184eb-46b3-42b7-b3b0-5645b0c5b78e.png"
            }, {
                img: "https://webimg.ziroom.com/c6ecaa05-11ac-4066-b139-e2fcdbf841c0.png"
            }, {
                img: "https://webimg.ziroom.com/de8350b9-942d-41d0-beae-d6c8087c4f29.png"
            }, {
                img: "https://webimg.ziroom.com/ce133352-9b2a-49b1-947e-65ec0bbab5d7.png"
            }],
            audio: [{
                id: "boom",
                only: "boom1",
                mp3: "https://cloudvideo.ziroom.com/video/boom.mp3"
            }, {
                id: "boom",
                only: "boom2",
                mp3: "https://cloudvideo.ziroom.com/video/boom.mp3"
            }, {
                id: "shot",
                only: "shot1",
                mp3: "https://cloudvideo.ziroom.com/video/shot.mp3"
            }, {
                id: "shot",
                only: "shot2",
                mp3: "https://cloudvideo.ziroom.com/video/shot.mp3"
            }, {
                id: "typerror",
                only: "typerror1",
                mp3: "https://cloudvideo.ziroom.com/video/error.mp3"
            }, {
                id: "typerror",
                only: "typerror2",
                mp3: "https://cloudvideo.ziroom.com/video/error.mp3"
            }, {
                id: "typeright",
                only: "typeright1",
                mp3: "https://cloudvideo.ziroom.com/video/typeright.mp3"
            }, {
                id: "typeright",
                only: "typeright2",
                mp3: "https://cloudvideo.ziroom.com/video/typeright.mp3"
            }],
            other_img: [n("0ca1"), n("b9af"), n("c2e4"), n("d68e"), n("88ae"), n("fd98"), n("d7cf"), n("d3b2"), n("e7e7"), n("4014"), n("d983"), n("d0d7"), n("6c5e"), n("fba8"), n("b96f"), n("3198"), n("aa8c"), n("366a"), n("bb69"), n("c385"), n("2ca9"), n("dfc2"), n("dbf4")]
        })
          , Oe = xe
          , je = [{
            name: "q",
            type: 1
        }, {
            name: "w",
            type: 1
        }, {
            name: "e",
            type: 1
        }, {
            name: "r",
            type: 1
        }, {
            name: "t",
            type: 1
        }, {
            name: "y",
            type: 1
        }, {
            name: "u",
            type: 1
        }, {
            name: "i",
            type: 1
        }, {
            name: "o",
            type: 1
        }, {
            name: "p",
            type: 1
        }, {
            name: "",
            type: 2
        }, {
            name: "a",
            type: 1
        }, {
            name: "s",
            type: 1
        }, {
            name: "d",
            type: 1
        }, {
            name: "f",
            type: 1
        }, {
            name: "g",
            type: 1
        }, {
            name: "h",
            type: 1
        }, {
            name: "j",
            type: 1
        }, {
            name: "k",
            type: 1
        }, {
            name: "l",
            type: 1
        }, {
            name: "",
            type: 2
        }, {
            name: "",
            type: 2
        }, {
            name: "",
            type: 3
        }, {
            name: "z",
            type: 1
        }, {
            name: "x",
            type: 1
        }, {
            name: "c",
            type: 1
        }, {
            name: "v",
            type: 1
        }, {
            name: "b",
            type: 1
        }, {
            name: "n",
            type: 1
        }, {
            name: "m",
            type: 1
        }, {
            name: "",
            type: 3
        }, {
            name: "",
            type: 2
        }]
          , _e = je
          , Ie = null
          , Se = []
          , Ee = function(e) {
            Object(s["a"])(i, e);
            var t = Object(c["a"])(i);
            function i() {
                var e;
                return Object(o["a"])(this, i),
                e = t.apply(this, arguments),
                e.nowStep = 0,
                e.preName = "",
                e.isStep = !1,
                e.nowName = "",
                e.bg = "",
                e.keyboard = _e,
                e.player_img = null,
                e.player_err_img = null,
                e.enemy_img = null,
                e.die_img = null,
                e.fire_img = null,
                e.bullet_img = null,
                e.percent = 0,
                e.timeInt = null,
                e.myReq = null,
                e.scrollIndex = 0,
                e.pauseAni = [{
                    img: ""
                }, {
                    img: n("c2e4")
                }, {
                    img: n("b9af")
                }, {
                    img: n("0ca1")
                }, {
                    img: ""
                }],
                e.isPauseLoading = !1,
                e.IMG_LIST = Oe,
                e.gtoken = "",
                e.gid = "",
                e.check_time = 0,
                e.check_time_save = 0,
                e.intervalNext = !0,
                e.keyboardErr = !1,
                e.judgeBigScreen = !1,
                e.checkNum = 0,
                e.is_pause = 0,
                e
            }
            return Object(w["a"])(i, [{
                key: "created",
                value: function() {
                    var e = Object(k["a"])(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.getMatch();
                                case 2:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "getMatch",
                value: function() {
                    var e = Object(k["a"])(regeneratorRuntime.mark((function e() {
                        var t;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    de({
                                        city_code: Object(ee["getQueryString"])("city_code") || "110000"
                                    });
                                case 2:
                                    if (t = e.sent,
                                    !t.isNotValid) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", !1);
                                case 5:
                                    $.putWordsList(t.data.words || []),
                                    this.gtoken = t.data.gtoken || "",
                                    this.gid = t.data.gid || "",
                                    this.check_time = 1e3 * t.data.check_time || 0;
                                case 9:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "docheck",
                value: function() {
                    var e = Object(k["a"])(regeneratorRuntime.mark((function e() {
                        var t, n, i;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return this.checkNum = this.checkNum + 1,
                                    t = this.checkPoints,
                                    n = this.checkWords.join(","),
                                    $.putCheckPoints(-1),
                                    $.putCheckWords({
                                        words: "",
                                        type: 0
                                    }),
                                    e.next = 7,
                                    fe({
                                        gtoken: this.gtoken,
                                        gid: this.gid,
                                        checkNum: this.checkNum,
                                        score: t,
                                        words: n,
                                        allWords: this.words.join(",")
                                    });
                                case 7:
                                    if (i = e.sent,
                                    !i.isNotValid) {
                                        e.next = 10;
                                        break
                                    }
                                    return e.abrupt("return", !1);
                                case 10:
                                    $.putWordsList(i.data.words || []),
                                    this.gtoken = i.data.gtoken || "",
                                    this.check_time = 1e3 * i.data.check_time || 0;
                                case 13:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "doEnd",
                value: function() {
                    var e = Object(k["a"])(regeneratorRuntime.mark((function e() {
                        var t;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    ge({
                                        gid: this.gid,
                                        score: this.checkPoints,
                                        checkNum: this.checkNum,
                                        total: this.points,
                                        words: this.checkWords.join(","),
                                        allWords: this.words.join(","),
                                        is_pause: this.is_pause,
                                        allpiyin: Se.join(",")
                                    });
                                case 2:
                                    if (t = e.sent,
                                    !t.isNotValid) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", !1);
                                case 5:
                                    this.jumpToLucky();
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "jumpToLucky",
                value: function() {
                    window.location.replace("".concat(F, "/2020/zrk_life_lottery/index/").concat(ae(), "?city_code=").concat(Object(ee["getQueryString"])("city_code"), "&utm_source=").concat(Object(ee["getQueryString"])("utm_source"), "&game_id=").concat(this.gid, "&autoRefresh=true&"))
                }
            }, {
                key: "mounted",
                value: function() {
                    var e = this
                      , t = this;
                    this.judgeBigScreen = le(),
                    this.$nextTick((function() {
                        $.putKeyboardHeight(e.$refs.keyboard.getBoundingClientRect().height),
                        e.initPlay(),
                        e.initCanvas(),
                        e.start()
                    }
                    )),
                    document.addEventListener("visibilitychange", (function() {
                        "hidden" === document.visibilityState ? (e.check_time_save = e.check_time,
                        clearInterval(e._ANITIME),
                        clearInterval(e.timeInt),
                        clearTimeout(e._CKECKTIME),
                        e.check_time = 0,
                        t.handlePlay("commit")) : "visible" === document.visibilityState && (e.doTimeInt(),
                        e.check_time = e.check_time_save,
                        e.check_time_save = 0)
                    }
                    ));
                    try {
                        if (!Object(ee["isApp"])())
                            return !1;
                        var n = window.$zrApp
                          , i = !1;
                        if (n && n.waitingQueue && n.waitingQueue.length > 0 && n.waitingQueue.some((function(e) {
                            if ("onAppState" === e.funcName)
                                return i = !0,
                                !0
                        }
                        )),
                        i)
                            return;
                        window.$zrApp.listen("onAppState", (function(t) {
                            "background" === t.state ? e.handlePlay("commit") : "foreground" === t.state && e.handlePlay("btn")
                        }
                        ))
                    } catch (r) {}
                }
            }, {
                key: "doKeyboard",
                value: function(e, t) {
                    var n = this;
                    Se.push(t);
                    try {
                        // if ("undefined" !== typeof e.isTrusted && !e.isTrusted)
                        //     return !1
                        const pinyin = this.enemys[0].pinyin;
                        if (window.curPinyi === pinyin) {}
                        else {
                            window.curPinyi = pinyin;
                            console.log(pinyin);
                            window.curArr = `${pinyin}`.split('');
                        }
                    } catch (a) {}
                    var i = this;
                    if (!this.isStop && !this.isPause && this.enemys.length > 0) {
                        var r = null;
                        this.enemys.some((function(e, i) {
                            if (!e.isDie && !e.isRemove && e.check(t))
                                return r = i,
                                n.doAudioRight(),
                                !0
                        }
                        )),
                        null !== r ? i.bullets.some((function(e) {
                            if (e.isDie && e.isRemove)
                                return e.create(r),
                                !0
                        }
                        )) : (i.keyboardErr = !0,
                        i.doAudioErr())
                    }
                }
            }, {
                key: "doAudioErr",
                value: function() {
                    $.doAudio("typerror")
                }
            }, {
                key: "doAudioRight",
                value: function() {}
            }, {
                key: "doStopPop",
                value: function(e) {
                    if (this.isStop)
                        return !1;
                    e ? (this.isPauseLoading = !0,
                    this._ANITIME = null,
                    this.scrollIndex = 0,
                    this._ANITIME = setInterval(this.aniScroll, 1e3)) : $.gamePause()
                }
            }, {
                key: "aniScroll",
                value: function() {
                    this.scrollIndex = this.scrollIndex + 1,
                    4 === this.scrollIndex && (clearInterval(this._ANITIME),
                    this.isPauseLoading = !1,
                    $.gamePause())
                }
            }, {
                key: "initCanvas",
                value: function() {
                    Ie = this.$refs.canvas,
                    $.putCtx(Ie.getContext("2d"));
                    var e = +this.getPixelRatio();
                    $.putRatio(e);
                    var t = $.keyboardHeight;
                    Ie.style.width = window.innerWidth + "px",
                    Ie.style.height = Math.floor(window.innerHeight - t) + "px",
                    Ie.setAttribute("width", window.innerWidth * e),
                    Ie.setAttribute("height", (window.innerHeight - t) * e),
                    $.ctx.fillStyle = "#000",
                    $.ctx.textBaseline = "middle",
                    $.ctx.textAlign = "center",
                    window.RAF = function() {
                        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
                            window.setTimeout(e, 1e3 / 60)
                        }
                    }(),
                    this.loop()
                }
            }, {
                key: "getPixelRatio",
                value: function() {
                    return 2
                }
            }, {
                key: "start",
                value: function() {
                    $.putExeTime(120),
                    this.doTimeInt()
                }
            }, {
                key: "doTimeInt",
                value: function() {
                    var e = this
                      , t = this;
                    this.timeInt = setInterval((function() {
                        if (t.isStop || t.isPause || t.exeTime <= 0)
                            return !1;
                        e.intervalNext && e.wordsList.length > 0 && (e.intervalNext = !1,
                        $.geneEnemy());
                        var n = t.exeTime - 1;
                        $.putExeTime(n),
                        n % 20 === 0 && $.putEnemySpeed(t.enemySpeed + .3),
                        t.exeTime <= 1 && (clearTimeout(t.timeInt),
                        t.timeInt = null,
                        $.gameOver()),
                        t.keyboardErr && (t.keyboardErr = !1)
                    }
                    ), 1e3)
                }
            }, {
                key: "loop",
                value: function() {
                    var e = this;
                    if (this.isStop || this.isPause)
                        return !1;
                    this.update(),
                    this.myReq = window.RAF((function() {
                        e.loop()
                    }
                    ))
                }
            }, {
                key: "update",
                value: function() {
                    $.ctx.clearRect(0, 0, Math.floor(window.innerWidth * $.ratio), Math.floor(window.innerHeight * $.ratio)),
                    pe(this.enemys, (function(e) {
                        e.isRemove || e.act()
                    }
                    )),
                    pe(this.bullets, (function(e) {
                        e.isRemove || e.act()
                    }
                    ))
                }
            }, {
                key: "r",
                value: function(e) {
                    return +Math.floor(+$.ratio * +$.innerWidth * e / 750)
                }
            }, {
                key: "doStep",
                value: function() {
                    return "".concat(this.isStop ? 0 : this.exeTime / 120 * 100, "%")
                }
            }, {
                key: "initPlay",
                value: function() {
                    var e = Object(k["a"])(regeneratorRuntime.mark((function e() {
                        var t, n, i = this;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    t = document.getElementById("bgm"),
                                    Object(ee["isWechat"])() && document.addEventListener ? document.addEventListener("WeixinJSBridgeReady", (function() {
                                        setTimeout((function() {
                                            t.play(),
                                            i.handleAudio(t.audio.paused)
                                        }
                                        ), 0)
                                    }
                                    ), !1) : this.getIsbaidu || Object(ee["isIOS"])() || (setTimeout((function() {
                                        t.play()
                                    }
                                    ), 0),
                                    n = function() {
                                        var e = Object(k["a"])(regeneratorRuntime.mark((function e() {
                                            var t;
                                            return regeneratorRuntime.wrap((function(e) {
                                                while (1)
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        t = document.getElementById("bgm"),
                                                        t.play(),
                                                        i.handleAudio(t.paused),
                                                        document.removeEventListener("click", n, !1);
                                                    case 5:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }
                                            ), e)
                                        }
                                        )));
                                        return function() {
                                            return e.apply(this, arguments)
                                        }
                                    }(),
                                    t.paused && document.addEventListener("click", n, !1));
                                case 2:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "handleAudio",
                value: function() {
                    var e = Object(k["a"])(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    t ? $.putIsPlay(!1) : $.putIsPlay(!0);
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "handlePlay",
                value: function() {
                    var e = Object(k["a"])(regeneratorRuntime.mark((function e() {
                        var t, n, i = arguments;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    t = i.length > 0 && void 0 !== i[0] ? i[0] : "",
                                    this.getIsbaidu ? this.handleAudio("btn" !== t || this.isPlay) : (n = document.getElementById("bgm"),
                                    "commit" !== t && n.paused ? n.play() : n.pause(),
                                    this.handleAudio("btn" !== t || n.paused));
                                case 2:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "beforeDestroy",
                value: function() {
                    this.handlePlay("commit"),
                    clearInterval(this._ANITIME),
                    clearInterval(this.timeInt),
                    clearTimeout(this._CKECKTIME)
                }
            }, {
                key: "watchPause",
                value: function(e) {
                    e || this.loop()
                }
            }, {
                key: "watchExeTimee",
                value: function(e) {
                    e < 0 && (clearTimeout(this.timeInt),
                    this.timeInt = null,
                    $.gameOver())
                }
            }, {
                key: "watchIsStop",
                value: function(e) {
                    e && (this.check_time = 0,
                    clearInterval(this._ANITIME),
                    clearInterval(this.timeInt),
                    clearTimeout(this._CKECKTIME),
                    Object(ee["sleep"])(2e3),
                    this.doEnd())
                }
            }, {
                key: "watchCheckTime",
                value: function(e) {
                    var t = this;
                    if (e) {
                        if (clearTimeout(this._CKECKTIME),
                        this._CKECKTIME = null,
                        this.exeTime < 10)
                            return !1;
                        this._CKECKTIME = setTimeout((function() {
                            t.check_time = 0,
                            t.docheck(),
                            clearTimeout(t._CKECKTIME)
                        }
                        ), e)
                    }
                }
            }, {
                key: "isPause",
                get: function() {
                    return $.isPause
                }
            }, {
                key: "isStop",
                get: function() {
                    return $.isStop
                }
            }, {
                key: "enemys",
                get: function() {
                    return $.enemys
                }
            }, {
                key: "exeTime",
                get: function() {
                    return $.exeTime
                }
            }, {
                key: "enemySpeed",
                get: function() {
                    return $.enemySpeed
                }
            }, {
                key: "bullets",
                get: function() {
                    return $.bullets
                }
            }, {
                key: "addEnemyTime",
                get: function() {
                    return $.addEnemyTime
                }
            }, {
                key: "points",
                get: function() {
                    return $.points
                }
            }, {
                key: "words",
                get: function() {
                    return $.words
                }
            }, {
                key: "checkPoints",
                get: function() {
                    return $.checkPoints
                }
            }, {
                key: "checkWords",
                get: function() {
                    return $.checkWords
                }
            }, {
                key: "enemyNum",
                get: function() {
                    return $.enemyNum
                }
            }, {
                key: "isPlay",
                get: function() {
                    return $.isPlay
                }
            }, {
                key: "showStar",
                get: function() {
                    return this.enemys[0].isRemove && this.enemyNum < 1
                }
            }, {
                key: "wordsList",
                get: function() {
                    return $.wordsList
                }
            }, {
                key: "getIsbaidu",
                get: function() {
                    return me() && Object(ee["isAndroid"])()
                }
            }]),
            i
        }(p["c"]);
        Object(u["a"])([Object(p["b"])()], Ee.prototype, "banner", void 0),
        Object(u["a"])([Object(p["d"])("isPause")], Ee.prototype, "watchPause", null),
        Object(u["a"])([Object(p["d"])("exeTime")], Ee.prototype, "watchExeTimee", null),
        Object(u["a"])([Object(p["d"])("isStop")], Ee.prototype, "watchIsStop", null),
        Object(u["a"])([Object(p["d"])("check_time")], Ee.prototype, "watchCheckTime", null),
        Ee = Object(u["a"])([Object(p["a"])({
            name: "Game"
        })], Ee);
        var Te = Ee
          , Pe = Te
          , Ae = (n("6c93"),
        Object(d["a"])(Pe, ke, we, !1, null, null, null))
          , Re = Ae.exports
          , Ce = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                staticClass: "load-container"
            }, [n("div", {
                ref: "unit",
                staticClass: "part-unit"
            }, [n("div", {
                staticClass: "process-bar-box"
            }, [n("div", {
                staticClass: "process-bar-bg"
            }), n("div", {
                staticClass: "process-bar-b"
            }, [n("div", {
                staticClass: "process-bar",
                style: {
                    width: e.percent + "%"
                }
            })])])])])
        }
          , ze = []
          , Ne = (n("cfce"),
        function() {
            function e() {
                Object(o["a"])(this, e),
                this.w = 0,
                this.h = 0,
                this.x = 0,
                this.y = 0,
                this.words = "",
                this.pinyin = null,
                this.hp = 1,
                this.hpIndex = 0,
                this.img = $.enemy_img[0].img,
                this.enemyImgIndex = 0,
                this.dieImg = $.die_img,
                this.dieIndex = -1,
                this.speed = 1,
                this.titFont = 1,
                this.titH = 1,
                this.piyinFont = 1,
                this.piyinH = 1,
                this.point = 0,
                this.isDie = !0,
                this.isRemove = !0,
                this.w = this.r(354),
                this.h = this.r(430),
                this.titFont = this.r(54),
                this.titH = this.r(338),
                this.piyinFont = this.r(40),
                this.piyinH = this.r(240)
            }
            return Object(w["a"])(e, [{
                key: "create",
                value: function(e, t) {
                    this.speed = $.getEnemySpeed,
                    this.x = this.r(e),
                    this.y = 20,
                    this.words = t.w,
                    this.pinyin = t.p,
                    this.point = this.pinyin.length,
                    this.hp = this.pinyin.length,
                    this.hpIndex = 0,
                    this.enemyImgIndex = 0,
                    this.dieIndex = -1,
                    this.img = $.enemy_img[0].img,
                    this.dieImg = $.die_img,
                    this.isRemove = !1,
                    this.isDie = !1
                }
            }, {
                key: "act",
                value: function() {
                    if (this.isRemove)
                        return !1;
                    !this.isDie && this.y >= $.ctx.canvas.height / $.ratio && (this.isDie = !0,
                    this.dieImg = $.die_land_img,
                    this.dieIndex = 0,
                    $.putExeTime($.exeTime - 5),
                    this.dieAudio()),
                    this.isDie ? (this.dieIndex++,
                    this.dieIndex >= 4 * this.dieImg.length - 1 && (this.dieIndex--,
                    this.remove(),
                    $.geneEnemy())) : this.y += this.speed,
                    this.draw()
                }
            }, {
                key: "draw",
                value: function() {
                    if ($.isStop || $.isPause)
                        return !1;
                    if ($.ctx.save(),
                    !this)
                        return !1;
                    if ($.ctx.translate(this.x, this.y),
                    this.isDie)
                        $.ctx.drawImage(this.dieImg[Math.floor(this.dieIndex / 4)], Math.floor(this.x - this.w / 2), Math.floor(this.y - this.h / 2), this.w, this.w);
                    else {
                        $.ctx.font = "".concat(this.titFont, "px MicrosoftYahei");
                        var e = this.y - this.h / 2
                          , t = $.enemy_img[Math.floor(this.enemyImgIndex / 10)];
                        $.ctx.drawImage(t, Math.floor(this.x - this.w / 2), Math.floor(e), this.w, this.h),
                        this.enemyImgIndex = this.enemyImgIndex + 1,
                        29 === this.enemyImgIndex && (this.enemyImgIndex = 1),
                        $.ctx.fillStyle = "white",
                        $.ctx.fillText(this.words, this.x, e + this.titH),
                        e += this.h,
                        $.ctx.font = "bold ".concat(this.piyinFont, "px MicrosoftYahei"),
                        $.ctx.fillStyle = "#FEF6D1",
                        $.ctx.fillText(this.pinyin.substring(0, this.pinyin.length - this.hp), this.x, e - this.piyinH)
                    }
                    $.ctx.restore()
                }
            }, {
                key: "hurt",
                value: function() {
                    this.hp--,
                    $.doAudio("shot"),
                    this.isDie || 0 != this.hp || (this.die(),
                    $.putPoint(this.point),
                    $.putCheckPoints(this.point),
                    $.putCheckWords({
                        words: this.words,
                        type: 1
                    }))
                }
            }, {
                key: "dieAudio",
                value: function() {
                    $.doAudio("boom")
                }
            }, {
                key: "touchTarget",
                value: function() {
                    return !1
                }
            }, {
                key: "die",
                value: function() {
                    this.dieIndex = 0,
                    this.isDie = !0,
                    this.dieAudio()
                }
            }, {
                key: "remove",
                value: function() {
                    this.isRemove = !0
                }
            }, {
                key: "check",
                value: function(e) {
                    return !!(this.pinyin && this.hpIndex < this.pinyin.length && e == this.pinyin[this.hpIndex]) && (this.hpIndex++,
                    !0)
                }
            }, {
                key: "r",
                value: function(e) {
                    return Math.floor(+$.ratio * +$.innerWidth * e / 750)
                }
            }, {
                key: "floor",
                value: function(e) {
                    return Math.floor(100 * e) / 100
                }
            }]),
            e
        }())
          , Le = Ne
          , Ue = function() {
            function e() {
                Object(o["a"])(this, e),
                this.w = 33,
                this.h = 95,
                this.x = 0,
                this.y = 0,
                this.deg = 0,
                this.target = null,
                this.img = null,
                this.dieImg = null,
                this.dieIndex = -1,
                this.dieLen = 100,
                this.speed = 30,
                this.speedx = 0,
                this.speedy = 0,
                this.movaIndex = 0,
                this.isDie = !0,
                this.isRemove = !0,
                this.w = this.r(33),
                this.h = this.r(95),
                this.img = $.fire_img[0],
                this.dieImg = $.boom_die
            }
            return Object(w["a"])(e, [{
                key: "create",
                value: function(e) {
                    this.w = this.r(33),
                    this.h = this.r(95),
                    this.x = this.r(375) - this.w / 2,
                    this.y = $.ctx.canvas.height,
                    this.target = e,
                    this.deg = 0,
                    this.isDie = !1,
                    this.dieIndex = -1,
                    this.dieLen = 100,
                    this.isRemove = !1,
                    this.speed = 30,
                    this.speedx = 0,
                    this.speedy = 0,
                    this.movaIndex = 0,
                    this.init($.enemys[this.target])
                }
            }, {
                key: "act",
                value: function() {
                    if (this.isRemove)
                        return !1;
                    null != this.target ? (this.isDie ? $.enemys[this.target].hp > 0 ? (this.dieIndex++,
                    this.dieIndex >= 3 * this.dieImg.length - 1 && (this.dieIndex--,
                    this.remove())) : this.remove() : this.touchTarget() && ($.enemys[this.target].hurt(),
                    this.die()),
                    this.draw()) : this.remove()
                }
            }, {
                key: "draw",
                value: function() {
                    $.ctx.save(),
                    this.isDie ? $.ctx.drawImage(this.dieImg[Math.floor(this.dieIndex / 3)], this.x, this.y, this.dieLen, this.dieLen) : ($.ctx.translate(this.x, this.y),
                    $.ctx.rotate(this.deg),
                    $.ctx.translate(-this.x, -this.y),
                    $.ctx.drawImage(this.img, this.x, this.y, this.w, this.h),
                    this.x -= this.speedx,
                    this.y -= this.speedy),
                    $.ctx.restore()
                }
            }, {
                key: "touchTarget",
                value: function() {
                    return this.movaIndex++,
                    this.movaIndex >= 30
                }
            }, {
                key: "die",
                value: function() {
                    this.dieIndex = 0,
                    this.isDie = !0
                }
            }, {
                key: "remove",
                value: function() {
                    this.isRemove = !0
                }
            }, {
                key: "init",
                value: function(e) {
                    var t = e.x * $.ratio
                      , n = e.y * $.ratio + 30 * e.speed;
                    this.deg = -Math.atan((t - this.x) / (n - this.y)),
                    this.speedx = (this.x - t) / 30,
                    this.speedy = (this.y - n) / 30
                }
            }, {
                key: "floor",
                value: function(e) {
                    return Math.floor(100 * e) / 100
                }
            }, {
                key: "r",
                value: function(e) {
                    return +Math.floor(+$.ratio * +$.innerWidth * e / 750)
                }
            }, {
                key: "fr",
                value: function(e) {
                    return +Math.floor(750 * e / (+$.ratio * +$.innerWidth))
                }
            }]),
            e
        }()
          , Me = Ue
          , De = function(e) {
            Object(s["a"])(n, e);
            var t = Object(c["a"])(n);
            function n() {
                var e;
                return Object(o["a"])(this, n),
                e = t.apply(this, arguments),
                e.dataIndex = 0,
                e.maxPercent = 51,
                e.percent = 0,
                e
            }
            return Object(w["a"])(n, [{
                key: "handleLogin",
                value: function() {
                    var e = Object(k["a"])(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    $.login();
                                case 2:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "preLoadImg",
                value: function(e, t) {
                    var n = new Image;
                    n.src = e,
                    n.onload = function() {
                        t.call(n)
                    }
                }
            }, {
                key: "created",
                value: function() {
                    var e = Object(k["a"])(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    $.getUserInfo();
                                case 2:
                                    if (this.token) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.next = 5,
                                    this.handleLogin();
                                case 5:
                                    this.initObjects();
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "mounted",
                value: function() {
                    var e = this;
                    this.$nextTick((function() {
                        e.loadResour()
                    }
                    ))
                }
            }, {
                key: "initObjects",
                value: function() {
                    for (var e = [], t = 0; t < Oe.enemy_img.length; t++) {
                        var n = new Image;
                        n.src = Oe.enemy_img[t].img,
                        e.push(n),
                        this.percent++
                    }
                    $.putEnemyImg(e);
                    var i = [];
                    for (t = 0; t < Oe.die_big_img.length; t++) {
                        var r = new Image;
                        r.src = Oe.die_big_img[t].img,
                        i.push(r),
                        this.percent++
                    }
                    $.putDieImg(i);
                    var a = []
                      , o = new Image;
                    o.src = "https://webimg.ziroom.com/3c5d74db-b2aa-4f08-9df4-340a95ca08f0.png",
                    a.push(o),
                    this.percent++,
                    $.putFireImg(a);
                    var s = [];
                    for (t = 0; t < Oe.boom_die.length; t++) {
                        var c = new Image;
                        c.src = Oe.boom_die[t].img,
                        s.push(c),
                        this.percent++
                    }
                    $.putBoomDieImg(s);
                    var u = [];
                    for (t = 0; t < Oe.die_land_img.length; t++) {
                        var p = new Image;
                        p.src = Oe.die_land_img[t].img,
                        u.push(p),
                        this.percent++
                    }
                    $.putBoomDieLandImg(u),
                    this.addElement()
                }
            }, {
                key: "addElement",
                value: function() {
                    for (var e = 0; e < this.badPlanNum; e++)
                        $.enemysPush(new Le);
                    for (e = 0; e < this.bulletsNum; e++)
                        $.bulletsPush(new Me);
                    this.preloadImages()
                }
            }, {
                key: "preloadImages",
                value: function() {
                    var e = Object(k["a"])(regeneratorRuntime.mark((function e() {
                        var t = this;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    Promise.all(Oe.other_img.map(function() {
                                        var e = Object(k["a"])(regeneratorRuntime.mark((function e(n) {
                                            return regeneratorRuntime.wrap((function(e) {
                                                while (1)
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2,
                                                        ce(n);
                                                    case 2:
                                                        e.sent,
                                                        t.percent++;
                                                    case 5:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }
                                            ), e)
                                        }
                                        )));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "preloadAudio",
                value: function(e, t, n) {
                    var i = this
                      , r = new Audio
                      , a = document.getElementById(n);
                    if (Object(ee["isWechat"])() && document.addEventListener) {
                        var o = function() {
                            var e = Object(k["a"])(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function(e) {
                                    while (1)
                                        switch (e.prev = e.next) {
                                        case 0:
                                            a.muted = !0,
                                            a.play(),
                                            i.percent++,
                                            document.removeEventListener("WeixinJSBridgeReady", o);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                        }
                                }
                                ), e)
                            }
                            )));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                        document.addEventListener("WeixinJSBridgeReady", o, !1)
                    } else
                        Object(ee["isIOS"])() ? (a.load(),
                        a.play().then((function() {
                            i.percent++
                        }
                        )).catch((function(e) {
                            i.percent++
                        }
                        ))) : (r.addEventListener("canplaythrough", (function() {
                            i.percent++
                        }
                        ), !1),
                        r.addEventListener("error", (function(e) {
                            i.percent++
                        }
                        ), !1),
                        r.src = e,
                        r.load())
                }
            }, {
                key: "loadResour",
                value: function() {
                    for (var e = 0; e < Oe.audio.length; e++)
                        this.preloadAudio(Oe.audio[e].mp3, Oe.audio[e].id, Oe.audio[e].only)
                }
            }, {
                key: "watchPercent",
                value: function(e) {
                    var t = this;
                    e === this.maxPercent && (this.percent = 100,
                    setTimeout((function() {
                        t.$emit("doNext")
                    }
                    ), 2500))
                }
            }, {
                key: "token",
                get: function() {
                    return $.token
                }
            }, {
                key: "badPlanNum",
                get: function() {
                    return $.badPlanNum
                }
            }, {
                key: "bulletsNum",
                get: function() {
                    return $.bulletsNum
                }
            }]),
            n
        }(p["c"]);
        Object(u["a"])([Object(p["b"])()], De.prototype, "propPercent", void 0),
        Object(u["a"])([Object(p["d"])("percent")], De.prototype, "watchPercent", null),
        De = Object(u["a"])([Object(p["a"])({
            name: "Loading"
        })], De);
        var We = De
          , Fe = We
          , Be = (n("3e2a"),
        Object(d["a"])(Fe, Ce, ze, !1, null, null, null))
          , Ge = Be.exports
          , qe = function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticClass: "entrance-box"
            }, [i("div", {
                staticClass: "entrance-bg"
            }, [i("div", {
                staticClass: "entrance"
            }, [i("div", {
                staticClass: "tit-box"
            }, [i("img", {
                staticClass: "tit",
                attrs: {
                    src: n("366a"),
                    alt: ""
                }
            }), i("p", [e._v("挑战时间：" + e._s(e.cmsData.loop2[0].title))])]), e.userInfo ? i("div", {
                staticClass: "box"
            }, [i("img", {
                staticClass: "machine",
                attrs: {
                    src: n("b96f"),
                    alt: ""
                }
            }), e.userInfo.has_played ? i("div", {
                staticClass: "transcript"
            }, [i("h1", [e._v(" 我的最佳成绩："), i("span", [e._v(e._s(e.userInfo.best_score))]), e._v(" 分 ")]), e.userInfo.is_in_rank ? i("h2", [e._v(" 暂居："), i("i", [e._v("第")]), e._v(" "), i("span", [e._v(e._s(e.userInfo.rank))]), e._v(" 位 ")]) : i("h2", [e._v(" 距离入榜还差："), i("span", [e._v(" " + e._s(0 === +e.userInfo.rank_gap ? 1 : e.userInfo.rank_gap) + " ")]), e._v("分 ")])]) : e._e(), i("p", [e._v(" 今日剩余挑战次数: "), i("span", [e._v(e._s(e.userInfo.game_chance))]), e._v(" 次 ")]), i("button", {
                staticClass: "rule abs lifefestival2020_gameindex_rules_ck",
                on: {
                    click: e.jumpToRule
                }
            }, [i("img", {
                attrs: {
                    src: n("3198"),
                    alt: ""
                }
            })]), i("button", {
                staticClass: "list abs lifefestival2020_gameindex_top_ck",
                on: {
                    click: e.jumpToList
                }
            }, [i("img", {
                attrs: {
                    src: n("fba8"),
                    alt: ""
                }
            })]), +e.userInfo.is_end ? i("button", {
                staticClass: "next isEnd"
            }, [i("img", {
                attrs: {
                    src: n("bb69"),
                    alt: ""
                }
            })]) : +e.userInfo.game_chance ? i("button", {
                staticClass: "next isStart lifefestival2020_gameindex_start_ck",
                on: {
                    click: e.doGame
                }
            }, [i("img", {
                attrs: {
                    src: n("aa8c"),
                    alt: ""
                }
            })]) : i("button", {
                staticClass: "next isGetChance",
                on: {
                    click: e.jumpToGet
                }
            }, [i("img", {
                attrs: {
                    src: n("c385"),
                    alt: ""
                }
            })]), i("button", {
                staticClass: "lucky lifefestival2020_gameindex_draw_ck",
                on: {
                    click: e.jumpToLucky
                }
            })]) : e._e()])])])
        }
          , He = []
          , Qe = function(e) {
            Object(s["a"])(n, e);
            var t = Object(c["a"])(n);
            function n() {
                var e;
                return Object(o["a"])(this, n),
                e = t.apply(this, arguments),
                e.userInfo = null,
                e
            }
            return Object(w["a"])(n, [{
                key: "created",
                value: function() {
                    this.getUserInfo()
                }
            }, {
                key: "getUserInfo",
                value: function() {
                    var e = Object(k["a"])(regeneratorRuntime.mark((function e() {
                        var t;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    be({
                                        city_code: Object(ee["getQueryString"])("city_code") || "110000",
                                        utm_source: Object(ee["getQueryString"])("utm_source") || "",
                                        source: this.source
                                    });
                                case 2:
                                    if (t = e.sent,
                                    !t.isNotValid) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", !1);
                                case 5:
                                    this.userInfo = t.data;
                                case 7:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "doGame",
                value: function() {
                    this.$emit("doGameBegin")
                }
            }, {
                key: "jumpToGet",
                value: function() {
                    window.location.href = "".concat(F, "/2020/zrk_life_lottery/index/").concat(ae(), "?city_code=").concat(Object(ee["getQueryString"])("city_code"), "&utm_source=").concat(Object(ee["getQueryString"])("utm_source"), "&autoRefresh=true&task=true&")
                }
            }, {
                key: "jumpToLucky",
                value: function() {
                    window.location.href = "".concat(F, "/2020/zrk_life_lottery/index/").concat(ae(), "?city_code=").concat(Object(ee["getQueryString"])("city_code"), "&utm_source=").concat(Object(ee["getQueryString"])("utm_source"), "&autoRefresh=true&lottery=true&")
                }
            }, {
                key: "jumpToList",
                value: function() {
                    window.location.replace("".concat(F, "/2020/zrk_life_home/?city_code=").concat(Object(ee["getQueryString"])("city_code"), "&channelcode=").concat(Object(ee["getQueryString"])("utm_source")))
                }
            }, {
                key: "jumpToRule",
                value: function() {
                    this.$modal(this.cmsData.loop1[0].title, this.cmsData.loop1[0].description)
                }
            }, {
                key: "source",
                get: function() {
                    return $.source
                }
            }]),
            n
        }(p["c"]);
        Object(u["a"])([Object(p["b"])()], Qe.prototype, "cmsData", void 0),
        Qe = Object(u["a"])([Object(p["a"])({
            name: "Entrance"
        })], Qe);
        var Ze = Qe
          , Ke = Ze
          , Xe = (n("f605"),
        Object(d["a"])(Ke, qe, He, !1, null, null, null))
          , Ve = Xe.exports
          , Je = function(e) {
            Object(s["a"])(n, e);
            var t = Object(c["a"])(n);
            function n() {
                var e;
                return Object(o["a"])(this, n),
                e = t.apply(this, arguments),
                e.cmsData = null,
                e.gatewayData = null,
                e.getJoinDetailData = null,
                e.gameBegin = !1,
                e.IMG_LIST = Oe,
                e.logo = ve.a,
                e.loadEnd = !1,
                e
            }
            return Object(w["a"])(n, [{
                key: "beforeMount",
                value: function() {
                    var e = Object(k["a"])(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    $.getUserInfo();
                                case 2:
                                    return e.next = 4,
                                    this.requestCMSData();
                                case 4:
                                    Object(S["getQueryString"])("again") && (this.gameBegin = !0);
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "requestCMSData",
                value: function() {
                    var e = Object(k["a"])(regeneratorRuntime.mark((function e() {
                        var t;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    he(16272)("");
                                case 2:
                                    if (t = e.sent,
                                    !t.isNotValid) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 5:
                                    this.cmsData = t.data,
                                    this.initShare(this.cmsData.share[0]);
                                case 7:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "initShare",
                value: function() {
                    var e = Object(k["a"])(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    $.initShare({
                                        link: "".concat(W).concat(ae()).concat(Object(S["setQueryString"])({
                                            city_code: Object(S["getQueryString"])("city_code"),
                                            utm_source: Object(S["getQueryString"])("utm_source")
                                        })),
                                        appTitle: document.title,
                                        title: t.title,
                                        desc: t.description || t.sub_title,
                                        imgUrl: t.img
                                    });
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "doNext",
                value: function() {
                    this.loadEnd = !0
                }
            }, {
                key: "doGameBegin",
                value: function() {
                    this.gameBegin = !0
                }
            }, {
                key: "getIsbaidu",
                get: function() {
                    return me() && Object(S["isAndroid"])()
                }
            }]),
            n
        }(p["c"]);
        Je = Object(u["a"])([Object(p["a"])({
            name: "index",
            components: {
                Game: Re,
                Loading: Ge,
                Entrance: Ve
            }
        })], Je);
        var Ye = Je
          , $e = Ye
          , et = (n("c072"),
        Object(d["a"])($e, y, v, !1, null, null, null))
          , tt = et.exports;
        i["default"].use(b["a"]);
        var nt, it = new b["a"]({
            mode: "history",
            base: "/2020/zrk_life_game/",
            routes: [{
                path: "/*",
                name: "index",
                component: tt
            }]
        });
        n("fb98"),
        n("868d");
        (function(e) {
            var t = e.sdk_url
              , n = e.name
              , i = window
              , r = document
              , a = "script"
              , o = null
              , s = null;
            if ("undefined" !== typeof i["sensorsDataAnalytic201505"])
                return !1;
            i["sensorsDataAnalytic201505"] = n,
            i[n] = i[n] || function(e) {
                return function() {
                    (i[n]._q = i[n]._q || []).push([e, arguments])
                }
            }
            ;
            for (var c = ["track", "quick", "register", "registerPage", "registerOnce", "trackSignup", "trackAbtest", "setProfile", "setOnceProfile", "appendProfile", "incrementProfile", "deleteProfile", "unsetProfile", "identify", "login", "logout", "trackLink", "clearAllRegister", "getAppStatus"], u = 0; u < c.length; u++)
                i[n][c[u]] = i[n].call(null, c[u]);
            i[n]._t || (o = r.createElement(a),
            s = r.getElementsByTagName(a)[0],
            o.async = 1,
            o.src = t,
            o.setAttribute("charset", "UTF-8"),
            i[n].para = e,
            s.parentNode.insertBefore(o, s))
        }({
            sdk_url: "https://static8.ziroom.com/fecommon/library/sensors/sensorsdata.min-1.15.5.js",
            heatmap_url: "https://static8.ziroom.com/fecommon/library/sensors/heatmap.min.js",
            name: "sensors",
            server_url: G() ? "https://tianyanimport.ziroom.com/sa?project=production" : "https://tianyanimport.ziroom.com/sa?project=default",
            use_app_track: !0,
            show_log: !G(),
            heatmap: {
                is_track_single_page: !0,
                loadTimeout: 3e3,
                clickmap: "default"
            }
        }),
        oe().then((function(e) {
            window.sensors.registerPage({
                platForm: e
            }),
            window.sensors.quick("autoTrack")
        }
        )),
        function() {
            var e = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
              , t = window.devicePixelRatio || 1
              , n = {
                width: window.screen.width * t,
                height: window.screen.height * t
            }
              , i = 1125 === n.width && 2436 === n.height
              , r = 1242 === n.width && 2688 === n.height
              , a = 828 === n.width && 1792 === n.height;
            e && (i || r || a) && (document.body.classList.add("iX"),
            navigator.userAgent.indexOf("QQ") > -1 && document.body.classList.add("iXQQ"))
        }(),
        Object(S["isIOS"])()) && (document.body.addEventListener("focusin", (function() {
            clearInterval(nt)
        }
        )),
        document.body.addEventListener("focusout", (function() {
            var e = document.documentElement.scrollTop || document.body.scrollTop;
            nt = setTimeout((function() {
                window.pageYOffset > 0 && (window.scrollTo(0, e - 1),
                window.scrollTo(0, e))
            }
            ), 200)
        }
        )));
        n("8f0b"),
        n("fa8c"),
        n("7a28");
        var rt = n("6cb8")
          , at = n.n(rt)
          , ot = (n("0293"),
        n("3035"))
          , st = n.n(ot)
          , ct = (n("005d"),
        n("f926"))
          , ut = n.n(ct)
          , pt = (n("f4a0"),
        n("db4a"))
          , lt = n.n(pt)
          , mt = (n("bc74"),
        n("8f60"))
          , ht = n.n(mt);
        n("f734"),
        n("2853");
        [ht.a, lt.a, O.a, ut.a, st.a, at.a].forEach((function(e) {
            return i["default"].use(e)
        }
        ));
        var dt = n("97a9")
          , ft = dt["a"].getInstance();
        window.$zrApp = ft,
        i["default"].prototype.$app = ft,
        i["default"].config.productionTip = !1,
        new i["default"]({
            router: it,
            store: K,
            render: function(e) {
                return e(g)
            }
        }).$mount("#app")
    },
    d0d7: function(e, t, n) {
        e.exports = n.p + "img/load_bg.4546e45d.png"
    },
    d3b2: function(e, t, n) {
        e.exports = n.p + "img/step.5f3466e7.png"
    },
    d68e: function(e, t, n) {
        e.exports = n.p + "img/bg.ff05d8fa.png"
    },
    d7cf: function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    d983: function(e, t, n) {
        e.exports = n.p + "img/timeup.0a4d3d4d.png"
    },
    dbf4: function(e, t, n) {
        e.exports = n.p + "img/no_audio.7c59e5b4.png"
    },
    dfc2: function(e, t, n) {
        e.exports = n.p + "img/audio.14641636.png"
    },
    e7e7: function(e, t, n) {
        e.exports = n.p + "img/stop.3e4eb732.png"
    },
    f605: function(e, t, n) {
        "use strict";
        var i = n("a3b9")
          , r = n.n(i);
        r.a
    },
    fb98: function(e, t, n) {},
    fba8: function(e, t, n) {
        e.exports = n.p + "img/manticore_list.517cc3d3.png"
    },
    fd98: function(e, t, n) {
        e.exports = n.p + "img/start.5cbabefa.png"
    }
});

function foo () {
    try {
        if (!window.curArr || window.curArr.length < 1) {
            document.querySelector('#keyboard').childNodes[+(Math.random() * 8).toFixed(0)].childNodes[0].click();
        }
    } catch (error) {
        
    }
    
    if (!Array.isArray(window.curArr)) return;
    const existed = Array.from(document.querySelector('#keyboard').childNodes).find(i => {
        try {
            return i.childNodes[0].textContent === window.curArr[0];
        } catch (error) {
            
        }
    });
    existed && existed.click();
    existed && window.curArr.shift();
}

window.addEventListener('keydown', (e) => {
    foo();
});
