(function (e) {
  function t(t) {
    for (
      var i, o, s = t[0], c = t[1], l = t[2], h = 0, u = [];
      h < s.length;
      h++
    )
      (o = s[h]),
        Object.prototype.hasOwnProperty.call(r, o) && r[o] && u.push(r[o][0]),
        (r[o] = 0);
    for (i in c) Object.prototype.hasOwnProperty.call(c, i) && (e[i] = c[i]);
    d && d(t);
    while (u.length) u.shift()();
    return n.push.apply(n, l || []), a();
  }
  function a() {
    for (var e, t = 0; t < n.length; t++) {
      for (var a = n[t], i = !0, s = 1; s < a.length; s++) {
        var c = a[s];
        0 !== r[c] && (i = !1);
      }
      i && (n.splice(t--, 1), (e = o((o.s = a[0]))));
    }
    return e;
  }
  var i = {},
    r = { app: 0 },
    n = [];
  function o(t) {
    if (i[t]) return i[t].exports;
    var a = (i[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, o), (a.l = !0), a.exports;
  }
  (o.m = e),
    (o.c = i),
    (o.d = function (e, t, a) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
    }),
    (o.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.t = function (e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (
        (o.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          o.d(
            a,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return a;
    }),
    (o.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return o.d(t, "a", t), t;
    }),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = "/");
  var s = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    c = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var l = 0; l < s.length; l++) t(s[l]);
  var d = c;
  n.push([0, "chunk-vendors"]), a();
})({
  0: function (e, t, a) {
    e.exports = a("56d7");
  },
  "0bf3": function (e, t, a) {},
  1589: function (e, t, a) {},
  "1a19": function (e, t, a) {},
  "20aa": function (e, t, a) {
    "use strict";
    a("cc96");
  },
  2478: function (e, t, a) {
    "use strict";
    a("e6f4");
  },
  "2ea5": function (e, t, a) {},
  "3a82": function (e, t, a) {},
  "3cc9": function (e, t, a) {
    "use strict";
    a("1589");
  },
  "49df": function (e, t, a) {},
  "56d7": function (e, t, a) {
    "use strict";
    a.r(t);
    a("e260"), a("e6cf"), a("cca6"), a("a79d"), a("07ac"), a("5319"), a("ac1f");
    var i = a("2b0e"),
      r = a("8c4f"),
      n = a("3835"),
      o = (a("4de4"), a("4fad"), a("9b6a")),
      s = o["a"].filter;
    o["a"].filter = function (e) {
      return !(!e.metaKey && !e.ctrlKey && "Escape" !== e.key) || s(e);
    };
    var c = {
        install: function (e) {
          e.mixin({
            mounted: function () {
              var e = this;
              if (this.$options.hotkeys)
                for (
                  var t = function () {
                      var t = Object(n["a"])(i[a], 2),
                        r = t[0],
                        s = t[1];
                      Object(o["a"])(r, function (t) {
                        "function" === typeof s ? s.apply(e, [t]) : e[s](t);
                      });
                    },
                    a = 0,
                    i = Object.entries(this.$options.hotkeys);
                  a < i.length;
                  a++
                )
                  t();
            },
            destroyed: function () {
              if (this.$options.hotkeys)
                for (
                  var e = 0, t = Object.entries(this.$options.hotkeys);
                  e < t.length;
                  e++
                ) {
                  var a = Object(n["a"])(t[e], 2),
                    i = a[0],
                    r = a[1];
                  o["a"].unbind(i, this[r]);
                }
            },
          });
        },
      },
      l = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "div",
          { class: { "dark-mode": e.config.darkMode }, attrs: { id: "app" } },
          [a("Wrapper")],
          1
        );
      },
      d = [],
      h = a("5530"),
      u = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "main",
          { staticClass: "wrapper" },
          [
            a("div", { staticClass: "header" }, [
              a(
                "div",
                { staticClass: "header-start" },
                [a("KeyboardShortcuts")],
                1
              ),
              e._m(0),
            ]),
            a(
              "div",
              { staticClass: "content" },
              [a("Frame", { staticClass: "frame", attrs: { id: "frame" } })],
              1
            ),
            a("Controls"),
            a("Footer"),
          ],
          1
        );
      },
      g = [
        function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("div", { staticClass: "header-end" }, [
            a(
              "a",

              []
            ),
          ]);
        },
      ],
      f = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "section",
          {
            staticClass: "controls",
            class: {
              "theme-dropdown-open": e.themeDropdownOpen,
              "language-dropdown-open": e.languageDropdownOpen,
              "dark-mode": e.config.darkMode,
            },
          },
          [
            a(
              "div",
              { staticClass: "setting theme" },
              [
                a(
                  "FormItem",
                  { attrs: { title: "Colors" } },
                  [
                    a("ThemeSelect", {
                      on: {
                        open: function (t) {
                          e.themeDropdownOpen = !0;
                        },
                        close: function (t) {
                          e.themeDropdownOpen = !1;
                        },
                      },
                    }),
                  ],
                  1
                ),
              ],
              1
            ),
            a(
              "div",
              { staticClass: "setting" },
              [
                a(
                  "FormItem",
                  { attrs: { title: "Background" } },
                  [
                    a("toggle", {
                      attrs: { on: e.config.background },
                      on: { click: e.toggleBackground },
                    }),
                  ],
                  1
                ),
              ],
              1
            ),
            a(
              "div",
              { staticClass: "setting" },
              [
                a(
                  "FormItem",
                  { attrs: { title: "Dark mode" } },
                  [
                    a("toggle", {
                      attrs: { on: e.config.darkMode },
                      on: { click: e.toggleDarkMode },
                    }),
                  ],
                  1
                ),
              ],
              1
            ),
            a(
              "div",
              { staticClass: "setting" },
              [
                a(
                  "FormItem",
                  { attrs: { title: "Padding" } },
                  [a("Padding")],
                  1
                ),
              ],
              1
            ),
            a(
              "div",
              { staticClass: "setting language" },
              [
                a(
                  "FormItem",
                  { attrs: { title: "Language" } },
                  [
                    a("LanguageSelect", {
                      on: {
                        open: function (t) {
                          e.languageDropdownOpen = !0;
                        },
                        close: function (t) {
                          e.languageDropdownOpen = !1;
                        },
                      },
                    }),
                  ],
                  1
                ),
              ],
              1
            ),
            a("div", { staticClass: "setting export" }, [a("Export")], 1),
          ]
        );
      },
      p = [],
      m = (a("b64b"), a("2f62")),
      b = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a("div", { staticClass: "form-item" }, [
          a("label", {
            staticClass: "label text-medium-small",
            class: e.align,
            domProps: { textContent: e._s(e.title) },
          }),
          a("div", { staticClass: "slot" }, [e._t("default")], 2),
        ]);
      },
      v = [],
      j = {
        props: {
          title: String,
          align: {
            type: String,
            default: "left",
            validator: function (e) {
              return -1 !== ["left", "right"].indexOf(e);
            },
          },
        },
      },
      C = j,
      x = (a("fd5b"), a("2877")),
      y = Object(x["a"])(C, b, v, !1, null, "601ccdd1", null),
      k = y.exports,
      w = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "div",
          [
            a("transition", { attrs: { name: "fade" } }, [
              e.partyModeIntervalId
                ? a("div", { staticClass: "party-mode" }, [
                    a("span", [
                      e._v(" 🎉 Party Mode on. Press "),
                      a("pre", [e._v("`")]),
                      e._v(" to stop."),
                    ]),
                  ])
                : e._e(),
            ]),
            a(
              "div",
              {
                ref: "select",
                staticClass: "select",
                on: {
                  blur: function (t) {
                    e.open = !1;
                  },
                },
              },
              [
                a(
                  "div",
                  {
                    directives: [
                      {
                        name: "click-outside",
                        rawName: "v-click-outside",
                        value: e.hide,
                        expression: "hide",
                      },
                    ],
                    staticClass: "selected",
                    class: { open: e.open },
                    on: { click: e.toggle },
                  },
                  [
                    a("span", {
                      staticClass: "circle",
                      style: {
                        background:
                          "linear-gradient(140deg, " +
                          e.getCurrentTheme.background.from +
                          ", " +
                          e.getCurrentTheme.background.to +
                          ")",
                      },
                    }),
                    a(
                      "svg",
                      {
                        staticClass: "chevron",
                        attrs: {
                          width: "10",
                          height: "6",
                          viewBox: "0 0 10 6",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                        },
                      },
                      [
                        a("path", {
                          attrs: {
                            d: "M4.99988 0.567261C4.83325 0.572022 4.68091 0.633912 4.55713 0.767212L0.938965 4.47107C0.834228 4.57581 0.7771 4.70911 0.7771 4.86621C0.7771 5.18042 1.02466 5.43274 1.33887 5.43274C1.49121 5.43274 1.63879 5.37085 1.74829 5.26135L4.99512 1.92407L8.25146 5.26135C8.36096 5.36609 8.50378 5.43274 8.66089 5.43274C8.9751 5.43274 9.22266 5.18042 9.22266 4.86621C9.22266 4.70911 9.16553 4.57581 9.06079 4.47107L5.43787 0.767212C5.30933 0.633911 5.1665 0.567261 4.99988 0.567261Z",
                          },
                        }),
                      ]
                    ),
                  ]
                ),
                a("transition", { attrs: { name: "fade" } }, [
                  e.open
                    ? a(
                        "div",
                        { staticClass: "options" },
                        e._l(e.themes, function (t, i) {
                          return a(
                            "div",
                            {
                              key: i,
                              staticClass: "option",
                              class: { current: i === e.selected },
                              attrs: { title: t.name, value: i },
                              on: {
                                click: function (t) {
                                  return e.select(i);
                                },
                              },
                            },
                            [
                              a("span", {
                                staticClass: "circle",
                                style: {
                                  background:
                                    "linear-gradient(140deg, " +
                                    t.background.from +
                                    ", " +
                                    t.background.to +
                                    ")",
                                },
                              }),
                              e._v(" " + e._s(t.name) + " "),
                            ]
                          );
                        }),
                        0
                      )
                    : e._e(),
                ]),
              ],
              1
            ),
          ],
          1
        );
      },
      M = [],
      S = a("e67d"),
      F = a.n(S);
    function _(e) {
      if (e)
        return {
          "--syntax-text": e.text,
          "--syntax-background": e.background,
          "--syntax-string": e.string,
          "--syntax-comment": e.comment,
          "--syntax-variable": e.variable,
          "--syntax-variable-2": e.variable2 || e.variable,
          "--syntax-variable-3": e.variable3 || e.variable,
          "--syntax-number": e.number,
          "--syntax-atom": e.number,
          "--syntax-keyword": e.keyword,
          "--syntax-property": e.property,
          "--syntax-definition": e.definition,
          "--syntax-meta": e.meta,
          "--syntax-operator": e.operator,
          "--syntax-attribute": e.attribute,
          "--syntax-tag": e.tag,
          "--syntax-builtin": e.builtin,
        };
    }
    var L = {
        candy: {
          name: "Candy",
          background: {
            from: "rgba(165,142,251,1)",
            to: "rgba(233,191,248,1)",
          },
          syntax: {
            light: _({
              background: "rgba 0,0,100,0.75",
              text: "#434447",
              variable: "#009033",
              variable2: "#63676A",
              variable3: "#D35A35",
              attribute: "#009033",
              definition: "#009033",
              keyword: "#DC155E",
              operator: "#d15a8b",
              property: "#2286A6",
              number: "#676DFF",
              string: "#B2762E",
              comment: "#8D949B",
              meta: "#6A6367",
              tag: "#d15a8b",
            }),
            dark: _({
              background: "rgba 0,0,0,0.75",
              text: "#FFFFFF",
              variable: "#73DFA5",
              variable2: "#FFFFFF",
              variable3: "#E08569",
              attribute: "#73DFA5",
              definition: "#73DFA5",
              keyword: "#FF659C",
              operator: "#FF659C",
              property: "#1AC8FF",
              number: "#7A7FFD",
              string: "#DFD473",
              comment: "#807796",
              meta: "#F1ECFE",
              tag: "#FF659C",
            }),
          },
        },
        breeze: {
          name: "Breeze",
          background: { from: "rgba(207,47,152,1)", to: "rgba(106,61,236,1)" },
          syntax: {
            light: _({
              background: "rgba 0,0,100,0.75",
              text: "#434447",
              variable: "#F8518D",
              variable2: "#BF3F6D",
              variable3: "#238600",
              attribute: "#C44170",
              definition: "#C44170",
              keyword: "#496EB8",
              operator: "#496EB8",
              property: "#0B7880",
              number: "#24805E",
              string: "#886594",
              comment: "#8C828B",
              meta: "#625B6B",
              tag: "#4B71BD",
            }),
            dark: _({
              background: "rgba 0,0,0,0.75",
              text: "#FFFFFF",
              variable: "#F8518D",
              variable2: "#FFFFFF",
              variable3: "#9AEC7D",
              attribute: "#F8518D",
              definition: "#F8518D",
              keyword: "#6599FF",
              operator: "#6599FF",
              property: "#49E8F2",
              number: "#55E7B2",
              string: "#E9AEFE",
              comment: "#8A757D",
              meta: "#ECFEEF",
              tag: "#6599FF",
            }),
          },
        },
        midnight: {
          name: "Midnight",
          background: { from: "rgba(76,200,200,1)", to: "rgba(32,32,51,1)" },
          syntax: {
            light: _({
              background: "rgba 0,0,100,0.75",
              text: "#434447",
              variable: "#2F788F",
              variable2: "#63676A",
              variable3: "#5D70B5",
              attribute: "#2F788F",
              definition: "#2F788F",
              keyword: "#587678",
              operator: "#587678",
              property: "#766599",
              number: "#2D8264",
              string: "#5F758F",
              comment: "#78808C",
              meta: "#5B636B",
              tag: "#5A797A",
            }),
            dark: _({
              background: "rgba 0,0,0,0.75",
              text: "#FFFFFF",
              variable: "#51D0F8",
              variable2: "#FFFFFF",
              variable3: "#626B8B",
              attribute: "#51D0F8",
              definition: "#51D0F8",
              keyword: "#7DA9AB",
              operator: "#7DA9AB",
              property: "#9681C2",
              number: "#75D2B1",
              string: "#6D86A4",
              comment: "#4A4C56",
              meta: "#F2F7F7",
              tag: "#7DA9AB",
            }),
          },
        },
        sunset: {
          name: "Sunset",
          background: { from: "rgba(255,207,115,1)", to: "rgba(255,122,47,1)" },
          syntax: {
            light: _({
              background: "rgba 0,0,100,0.75",
              text: "#737568",
              variable: "#807410",
              variable2: "#717365",
              variable3: "#8C6A29",
              attribute: "#807410",
              definition: "#807410",
              keyword: "#A1642C",
              operator: "#A1642C",
              property: "#AD5A78",
              number: "#856F00",
              string: "#8C703C",
              comment: "#7A7055",
              meta: "#6B625B",
              tag: "#A1642C",
            }),
            dark: _({
              background: "rgba 0,0,0,0.75",
              text: "#FFFFFF",
              variable: "#E2D66B",
              variable2: "#FFFFFF",
              variable3: "#E7B555",
              attribute: "#E2D66B",
              definition: "#E2D66B",
              keyword: "#FFAF65",
              operator: "#FFAF65",
              property: "#E978A1",
              number: "#E7CF55",
              string: "#F9D38C",
              comment: "#878572",
              meta: "#FFFDED",
              tag: "#FFAF65",
            }),
          },
        },
      },
      O = {
        hotkeys: { c: "nextTheme", "`": "togglePartyMode" },
        data: function () {
          return { open: !1, partyModeIntervalId: null };
        },
        watch: {
          selected: {
            handler: function () {
              this.open = !1;
            },
          },
          open: function (e) {
            e ? this.$emit("open") : this.$emit("close");
          },
        },
        computed: Object(h["a"])(
          Object(h["a"])({}, Object(m["c"])(["getCurrentTheme"])),
          {},
          {
            themes: function () {
              return L;
            },
            selected: {
              get: function () {
                return this.config.theme;
              },
              set: function (e) {
                this.$store.dispatch("updateConfig", {
                  setting: "theme",
                  value: e,
                });
              },
            },
          },
          Object(m["e"])(["config"])
        ),
        mounted: function () {
          (this.popupItem = this.$refs.select),
            (this.selected = this.config.theme);
        },
        methods: {
          toggle: function () {
            this.open = !this.open;
          },
          nextTheme: function () {
            var e = Object.keys(L),
              t = e.indexOf(this.config.theme);
            e[t + 1] ? (this.selected = e[t + 1]) : (this.selected = e[0]);
          },
          hide: function () {
            this.open = !1;
          },
          select: function (e) {
            this.selected = e;
          },
          togglePartyMode: function () {
            this.partyModeIntervalId
              ? (clearInterval(this.partyModeIntervalId),
                (this.partyModeIntervalId = null))
              : (this.partyModeIntervalId = setInterval(this.nextTheme, 500));
          },
        },
        directives: { ClickOutside: F.a },
      },
      N = O,
      E = (a("5883"), Object(x["a"])(N, w, M, !1, null, "edda6282", null)),
      D = E.exports,
      J = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "div",
          { staticClass: "padding-options" },
          e._l(e.paddingValues, function (t, i) {
            return a(
              "div",
              {
                key: i,
                staticClass: "padding-option text-medium",
                class: { selected: t === e.selected },
              },
              [
                a("label", [
                  a("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: e.selected,
                        expression: "selected",
                      },
                    ],
                    attrs: { type: "radio" },
                    domProps: { value: t, checked: e._q(e.selected, t) },
                    on: {
                      change: function (a) {
                        e.selected = t;
                      },
                    },
                  }),
                  e._v(e._s(t) + " "),
                ]),
              ]
            );
          }),
          0
        );
      },
      P = [],
      H = {
        hotkeys: { p: "nextPadding" },
        data: function () {
          return { selected: "", paddingValues: ["16", "32", "64", "128"] };
        },
        methods: {
          nextPadding: function () {
            var e = this.paddingValues.indexOf(this.selected);
            this.paddingValues[e + 1]
              ? (this.selected = this.paddingValues[e + 1])
              : (this.selected = this.paddingValues[0]);
          },
        },
        computed: Object(h["a"])({}, Object(m["e"])(["config"])),
        mounted: function () {
          this.selected = this.config.spacing;
        },
        watch: {
          selected: {
            handler: function (e) {
              this.$store.dispatch("updateConfig", {
                setting: "spacing",
                value: e,
              });
            },
          },
        },
      },
      T = H,
      V = (a("97ca"), Object(x["a"])(T, J, P, !1, null, "a4839b86", null)),
      A = V.exports,
      B = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "div",
          {
            directives: [
              {
                name: "click-outside",
                rawName: "v-click-outside",
                value: e.hide,
                expression: "hide",
              },
            ],
            ref: "select",
            staticClass: "select",
          },
          [
            a("div", { staticClass: "select-shell", on: { click: e.toggle } }, [
              !1 === e.open
                ? a("div", { staticClass: "selected" }, [
                    e.selectedLanguage
                      ? a("span", [
                          a("span", {
                            domProps: {
                              textContent: e._s(e.selectedLanguage.name),
                            },
                          }),
                          e.autoDetect ? a("span", [e._v(" (auto)")]) : e._e(),
                        ])
                      : a("span", [e._v(" Auto-Detect ")]),
                  ])
                : a("div", { staticClass: "typeahead-container" }, [
                    a("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: e.typeahead,
                          expression: "typeahead",
                        },
                      ],
                      ref: "typeahead",
                      staticClass: "typeahead",
                      attrs: { type: "text", placeholder: "Search" },
                      domProps: { value: e.typeahead },
                      on: {
                        click: function (e) {
                          e.stopPropagation();
                        },
                        keydown: [
                          function (t) {
                            return !t.type.indexOf("key") &&
                              e._k(t.keyCode, "escape", void 0, t.key, void 0)
                              ? null
                              : e.hide(t);
                          },
                          function (t) {
                            return !t.type.indexOf("key") &&
                              e._k(t.keyCode, "down", 40, t.key, [
                                "Down",
                                "ArrowDown",
                              ])
                              ? null
                              : e.hoverNext(t);
                          },
                          function (t) {
                            return !t.type.indexOf("key") &&
                              e._k(t.keyCode, "up", 38, t.key, [
                                "Up",
                                "ArrowUp",
                              ])
                              ? null
                              : e.hoverPrevious(t);
                          },
                          function (t) {
                            return !t.type.indexOf("key") &&
                              e._k(t.keyCode, "enter", 13, t.key, "Enter")
                              ? null
                              : e.selectHovered(t);
                          },
                        ],
                        input: function (t) {
                          t.target.composing || (e.typeahead = t.target.value);
                        },
                      },
                    }),
                  ]),
              a(
                "svg",
                {
                  staticClass: "chevron",
                  attrs: {
                    width: "10",
                    height: "6",
                    viewBox: "0 0 10 6",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                  },
                },
                [
                  a("path", {
                    attrs: {
                      d: "M4.99988 0.567261C4.83325 0.572022 4.68091 0.633912 4.55713 0.767212L0.938965 4.47107C0.834228 4.57581 0.7771 4.70911 0.7771 4.86621C0.7771 5.18042 1.02466 5.43274 1.33887 5.43274C1.49121 5.43274 1.63879 5.37085 1.74829 5.26135L4.99512 1.92407L8.25146 5.26135C8.36096 5.36609 8.50378 5.43274 8.66089 5.43274C8.9751 5.43274 9.22266 5.18042 9.22266 4.86621C9.22266 4.70911 9.16553 4.57581 9.06079 4.47107L5.43787 0.767212C5.30933 0.633911 5.1665 0.567261 4.99988 0.567261Z",
                    },
                  }),
                ]
              ),
            ]),
            a("transition", { attrs: { name: "fade" } }, [
              e.open
                ? a(
                    "div",
                    { staticClass: "options" },
                    [
                      a(
                        "div",
                        {
                          ref: "Auto-Detect",
                          staticClass: "option",
                          class: {
                            hover: "Auto-Detect" === e.hovered,
                            selected: e.autoDetect,
                          },
                          on: {
                            click: e.enableAutoDetect,
                            mouseenter: function (t) {
                              return e.hover("Auto-Detect");
                            },
                          },
                        },
                        [e._v(" Auto-Detect ")]
                      ),
                      e._l(
                        e.isFiltering ? e.filteredLanguages : e.languages,
                        function (t) {
                          var i = t[0],
                            r = t[1];
                          return a(
                            "div",
                            {
                              key: r.name,
                              ref: i,
                              refInFor: !0,
                              staticClass: "option",
                              class: {
                                hover: e.hovered === i,
                                selected: !e.autoDetect && e.language === i,
                              },
                              on: {
                                click: function (t) {
                                  return e.selectLanguage(i);
                                },
                                mouseenter: function (t) {
                                  return e.hover(i);
                                },
                              },
                            },
                            [e._v(" " + e._s(r.name) + " ")]
                          );
                        }
                      ),
                    ],
                    2
                  )
                : e._e(),
            ]),
          ],
          1
        );
      },
      $ = [],
      I = (a("b0c0"), a("c740"), a("159b"), a("7db0"), a("1020")),
      Z = a.n(I),
      R = {
        shell: {
          name: "Bash",
          highlightJSName: "bash",
          highlightJSFileName: "bash",
          codeMirrorMode: "shell",
          codeMirrorPath: "shell/shell",
        },
        cpp: {
          name: "C++",
          highlightJSName: "cpp",
          highlightJSFileName: "cpp",
          codeMirrorMode: "text/x-c++src",
          codeMirrorPath: "clike/clike",
        },
        csharp: {
          name: "C#",
          highlightJSName: "csharp",
          highlightJSFileName: "csharp",
          codeMirrorMode: "text/x-csharp",
          codeMirrorPath: "clike/clike",
        },
        clojure: {
          name: "Clojure",
          highlightJSName: "clojure",
          highlightJSFileName: "clojure",
          codeMirrorMode: "text/x-clojure",
          codeMirrorPath: "clojure/clojure",
        },
        coffeescript: {
          name: "CoffeeScript",
          highlightJSName: "coffeescript",
          highlightJSFileName: "coffeescript",
          codeMirrorMode: "text/x-coffeescript",
          codeMirrorPath: "coffeescript/coffeescript",
        },
        crystal: {
          name: "Crystal",
          highlightJSName: "crystal",
          highlightJSFileName: "crystal",
          codeMirrorMode: "text/x-crystal",
          codeMirrorPath: "crystal/crystal",
        },
        css: {
          name: "CSS",
          highlightJSName: "css",
          highlightJSFileName: "css",
          codeMirrorMode: "text/css",
          codeMirrorPath: "css/css",
        },
        d: {
          name: "D",
          highlightJSName: "d",
          highlightJSFileName: "d",
          codeMirrorMode: "text/x-d",
          codeMirrorPath: "d/d",
        },
        dart: {
          name: "Dart",
          highlightJSName: "dart",
          highlightJSFileName: "dart",
          codeMirrorMode: "application/dart",
          codeMirrorPath: "dart/dart",
        },
        diff: {
          name: "Diff",
          highlightJSName: "diff",
          highlightJSFileName: "diff",
          codeMirrorMode: "text/x-diff",
          codeMirrorPath: "diff/diff",
        },
        dockerfile: {
          name: "Docker",
          highlightJSName: "dockerfile",
          highlightJSFileName: "dockerfile",
          codeMirrorMode: "dockerfile",
          codeMirrorPath: "dockerfile/dockerfile",
        },
        elm: {
          name: "Elm",
          highlightJSName: "elm",
          highlightJSFileName: "elm",
          codeMirrorMode: "text/x-elm",
          codeMirrorPath: "elm/elm",
        },
        erlang: {
          name: "Erlang",
          highlightJSName: "erlang",
          highlightJSFileName: "erlang",
          codeMirrorMode: "text/x-erlang",
          codeMirrorPath: "erlang/erlang",
        },
        fortran: {
          name: "Fortran",
          highlightJSName: "fortran",
          highlightJSFileName: "fortran",
          codeMirrorMode: "text/x-fortran",
          codeMirrorPath: "fortran/fortran",
        },
        fsharp: {
          name: "F#",
          highlightJSName: "fsharp",
          highlightJSFileName: "fsharp",
          codeMirrorMode: "text/x-fsharp",
          codeMirrorPath: "mllike/mllike",
        },
        gherkin: {
          name: "Gherkin",
          highlightJSName: "gherkin",
          highlightJSFileName: "gherkin",
          codeMirrorMode: "text/x-feature",
          codeMirrorPath: "gherkin/gherkin",
        },
        go: {
          name: "Go",
          highlightJSName: "go",
          highlightJSFileName: "go",
          codeMirrorMode: "text/x-go",
          codeMirrorPath: "go/go",
        },
        groovy: {
          name: "Groovy",
          highlightJSName: "groovy",
          highlightJSFileName: "groovy",
          codeMirrorMode: "text/x-groovy",
          codeMirrorPath: "groovy/groovy",
        },
        haskell: {
          name: "Haskell",
          highlightJSName: "haskell",
          highlightJSFileName: "haskell",
          codeMirrorMode: "text/x-haskell",
          codeMirrorPath: "haskell/haskell",
        },
        xml: {
          name: "HTML",
          highlightJSName: "xml",
          highlightJSFileName: "xml",
          codeMirrorMode: "text/html",
          codeMirrorPath: "xml/xml",
        },
        java: {
          name: "Java",
          highlightJSName: "java",
          highlightJSFileName: "java",
          codeMirrorMode: "text/x-java",
          codeMirrorPath: "clike/clike",
        },
        javascript: {
          name: "JavaScript",
          highlightJSName: "javascript",
          highlightJSFileName: "javascript",
          codeMirrorMode: "text/javascript",
          codeMirrorPath: "javascript/javascript",
        },
        json: {
          name: "JSON",
          highlightJSName: "json",
          highlightJSFileName: "json",
          codeMirrorMode: "application/json",
          codeMirrorPath: "javascript/javascript",
        },
        jsx: {
          name: "JSX",
          codeMirrorMode: "text/jsx",
          codeMirrorPath: "jsx/jsx",
        },
        julia: {
          name: "Julia",
          highlightJSName: "julia",
          highlightJSFileName: "julia",
          codeMirrorMode: "text/x-julia",
          codeMirrorPath: "julia/julia",
        },
        kotlin: {
          name: "Kotlin",
          highlightJSName: "kotlin",
          highlightJSFileName: "kotlin",
          codeMirrorMode: "text/x-kotlin",
          codeMirrorPath: "clike/clike",
        },
        latex: {
          name: "LaTeX",
          highlightJSName: "latex",
          highlightJSFileName: "latex",
          codeMirrorMode: "text/text/x-stex",
          codeMirrorPath: "stex/stex",
        },
        lisp: {
          name: "Lisp",
          highlightJSName: "lisp",
          highlightJSFileName: "lisp",
          codeMirrorMode: "text/x-common-lisp",
          codeMirrorPath: "commonlisp/commonlisp",
        },
        lua: {
          name: "Lua",
          highlightJSName: "lua",
          highlightJSFileName: "lua",
          codeMirrorMode: "text/x-lua",
          codeMirrorPath: "lua/lua",
        },
        markdown: {
          name: "Markdown",
          highlightJSName: "markdown",
          highlightJSFileName: "markdown",
          codeMirrorMode: "text/x-markdown",
          codeMirrorPath: "markdown/markdown",
        },
        mathematica: {
          name: "Mathematica",
          highlightJSName: "mathematica",
          highlightJSFileName: "mathematica",
          codeMirrorMode: "text/x-mathematica",
          codeMirrorPath: "mathematica/mathematica",
        },
        matlab: {
          name: "MATLAB/Octave",
          highlightJSName: "matlab",
          highlightJSFileName: "matlab",
          codeMirrorMode: "text/x-octave",
          codeMirrorPath: "octave/octave",
        },
        nginx: {
          name: "NGINX",
          highlightJSName: "nginx",
          highlightJSFileName: "nginx",
          codeMirrorMode: "text/x-nginx-conf",
          codeMirrorPath: "nginx/nginx",
        },
        objectivec: {
          name: "Objective C",
          highlightJSName: "objectivec",
          highlightJSFileName: "objectivec",
          codeMirrorMode: "text/x-objectivec",
          codeMirrorPath: "clike/clike",
        },
        ocaml: {
          name: "OCaml",
          highlightJSName: "ocaml",
          highlightJSFileName: "ocaml",
          codeMirrorMode: "text/x-ocaml",
          codeMirrorPath: "mllike/mllike",
        },
        perl: {
          name: "Perl",
          highlightJSName: "perl",
          highlightJSFileName: "perl",
          codeMirrorMode: "text/x-perl",
          codeMirrorPath: "perl/perl",
        },
        php: {
          name: "PHP",
          highlightJSName: "php",
          highlightJSFileName: "php",
          codeMirrorMode: { name: "application/x-httpd-php", startOpen: !0 },
          codeMirrorPath: "php/php",
        },
        powershell: {
          name: "PowerShell",
          highlightJSName: "powershell",
          highlightJSFileName: "powershell",
          codeMirrorMode: "application/x-powershell",
          codeMirrorPath: "powershell/powershell",
        },
        python: {
          name: "Python",
          highlightJSName: "python",
          highlightJSFileName: "python",
          codeMirrorMode: "text/x-python",
          codeMirrorPath: "python/python",
        },
        r: {
          name: "R",
          highlightJSName: "r",
          highlightJSFileName: "r",
          codeMirrorMode: "text/x-rsrc",
          codeMirrorPath: "r/r",
        },
        ruby: {
          name: "Ruby",
          highlightJSName: "ruby",
          highlightJSFileName: "ruby",
          codeMirrorMode: "text/x-ruby",
          codeMirrorPath: "ruby/ruby",
        },
        rust: {
          name: "Rust",
          highlightJSName: "rust",
          highlightJSFileName: "rust",
          codeMirrorMode: "text/x-rustsrc",
          codeMirrorPath: "rust/rust",
        },
        scala: {
          name: "Scala",
          highlightJSName: "scala",
          highlightJSFileName: "scala",
          codeMirrorMode: "text/x-scala",
          codeMirrorPath: "clike/clike",
        },
        scss: {
          name: "SCSS",
          highlightJSName: "scss",
          highlightJSFileName: "scss.js",
          codeMirrorMode: "text/x-scss",
          codeMirrorPath: "css/css",
        },
        smalltalk: {
          name: "Smalltalk",
          highlightJSName: "smalltalk",
          highlightJSFileName: "smalltalk",
          codeMirrorMode: "text/x-stsrc",
          codeMirrorPath: "smalltalk/smalltalk",
        },
        sql: {
          name: "SQL",
          highlightJSName: "sql",
          highlightJSFileName: "sql",
          codeMirrorMode: "text/x-sql",
          codeMirrorPath: "sql/sql",
        },
        swift: {
          name: "Swift",
          highlightJSName: "swift",
          highlightJSFileName: "swift.js",
          codeMirrorMode: "text/x-swift",
          codeMirrorPath: "swift/swift",
        },
        typescript: {
          name: "TypeScript",
          highlightJSName: "typescript",
          highlightJSFileName: "typescript",
          codeMirrorMode: "text/typescript",
          codeMirrorPath: "javascript/javascript",
        },
        tsx: {
          name: "TSX",
          highlightJSName: "typescript",
          highlightJSFileName: "typescript",
          codeMirrorMode: "text/typescript-jsx",
          codeMirrorPath: "jsx/jsx",
        },
        twig: {
          name: "Twig",
          highlightJSName: "twig",
          highlightJSFileName: "twig",
          codeMirrorMode: "text/x-twig",
          codeMirrorPath: "twig/twig",
        },
        verilog: {
          name: "Verilog",
          highlightJSName: "verilog",
          highlightJSFileName: "verilog",
          codeMirrorMode: "text/x-verilog",
          codeMirrorPath: "verilog/verilog",
        },
        vhdl: {
          name: "VHDL",
          highlightJSName: "vhdl",
          highlightJSFileName: "vhdl",
          codeMirrorMode: "text/x-vhdl",
          codeMirrorPath: "vhdl/vhdl",
        },
        xquery: {
          name: "XQuery",
          highlightJSName: "xquery",
          highlightJSFileName: "xquery",
          codeMirrorMode: "application/xquery",
          codeMirrorPath: "xquery/xquery",
        },
        yaml: {
          name: "YAML",
          highlightJSName: "yaml",
          highlightJSFileName: "yaml",
          codeMirrorMode: "text/x-yaml",
          codeMirrorPath: "yaml/yaml",
        },
      };
    function q(e) {
      if (e) {
        var t = Z.a.highlightAuto(e).language;
        return (
          console.info("Detected Language:", t),
          Object.entries(R).find(function (e) {
            var a = Object(n["a"])(e, 2),
              i = (a[0], a[1].highlightJSName);
            return i === t;
          })[0]
        );
      }
    }
    Object.values(R).forEach(function (e) {
      e.highlightJSName &&
        Z.a.registerLanguage(
          e.highlightJSName,
          a("f205")("./".concat(e.highlightJSFileName))
        ),
        a("7936")("./".concat(e.codeMirrorPath, ".js"));
    });
    var U = {
        hotkeys: {
          l: function (e) {
            e.preventDefault(), this.toggle();
          },
        },
        data: function () {
          return { open: !1, typeahead: "", hovered: "Auto-Detect" };
        },
        watch: {
          open: function () {
            var e = this;
            this.open
              ? (this.$nextTick(function () {
                  return e.$refs.typeahead.focus();
                }),
                this.$emit("open"))
              : ((this.typeahead = ""), this.$emit("close"));
          },
          hovered: function () {
            var e = this;
            this.$nextTick(function () {
              e.open &&
                e.hoveredElement &&
                e.hoveredElement.scrollIntoView({ block: "nearest" });
            });
          },
          typeahead: function () {
            this.typeahead.length
              ? this.filteredLanguages.length
                ? (this.hovered =
                    this.filteredLanguages[
                      this.filteredLanguages.length - 1
                    ].name)
                : (this.hovered = "Auto-Detect")
              : (this.hovered = this.languages[this.languages.length - 1].name);
          },
        },
        computed: Object(h["a"])(
          Object(h["a"])({}, Object(m["e"])(["language", "autoDetect"])),
          {},
          {
            selectedLanguage: function () {
              return R[this.language];
            },
            isFiltering: function () {
              return this.typeahead.length > 0;
            },
            languages: function () {
              return Object.entries(R);
            },
            filteredLanguages: function () {
              var e = this;
              return this.languages.filter(function (t) {
                var a = Object(n["a"])(t, 2),
                  i = (a[0], a[1]);
                return (
                  -1 != i.name.toLowerCase().indexOf(e.typeahead.toLowerCase())
                );
              });
            },
            hoveredElement: function () {
              var e = this.$refs[this.hovered];
              return Array.isArray(e) && (e = e[0]), e;
            },
          }
        ),
        methods: Object(h["a"])(
          Object(h["a"])(
            Object(h["a"])(
              {},
              Object(m["d"])(["SET_AUTODETECT", "SET_LANGUAGE"])
            ),
            Object(m["b"])(["autoDetectLanguage"])
          ),
          {},
          {
            hide: function () {
              (this.open = !1), (this.typeahead = "");
            },
            toggle: function () {
              this.open = !this.open;
            },
            enableAutoDetect: function () {
              (this.open = !1),
                this.SET_AUTODETECT(!0),
                this.autoDetectLanguage();
            },
            selectHovered: function () {
              this.hoveredElement.click();
            },
            selectLanguage: function (e) {
              this.SET_AUTODETECT(!1), this.SET_LANGUAGE(e), (this.open = !1);
            },
            hover: function (e) {
              this.hovered = e;
            },
            hoverNext: function () {
              var e = this,
                t = this.filteredLanguages.findIndex(function (t) {
                  var a = Object(n["a"])(t, 1),
                    i = a[0];
                  return i === e.hovered;
                });
              this.filteredLanguages[t + 1]
                ? (this.hovered = this.filteredLanguages[t + 1][0])
                : (this.hovered = "Auto-Detect");
            },
            hoverPrevious: function () {
              var e = this,
                t = this.filteredLanguages.findIndex(function (t) {
                  var a = Object(n["a"])(t, 1),
                    i = a[0];
                  return i === e.hovered;
                });
              this.filteredLanguages[t - 1]
                ? (this.hovered = this.filteredLanguages[t - 1][0])
                : (this.hovered = "Auto-Detect");
            },
          }
        ),
        mounted: function () {
          this.popupItem = this.$el;
        },
        directives: { ClickOutside: F.a },
      },
      G = U,
      z = (a("996d"), Object(x["a"])(G, B, $, !1, null, "4e128978", null)),
      W = z.exports,
      X = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "svg",
          {
            staticClass: "toggle",
            class: { on: e.on },
            attrs: {
              width: "32",
              height: "18",
              viewBox: "0 0 32 18",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            on: {
              click: function (t) {
                return e.$emit("click");
              },
            },
          },
          [
            a("rect", {
              staticClass: "frame",
              attrs: { x: "1", y: "1", width: "30", height: "16", rx: "8" },
            }),
            a("circle", {
              staticClass: "circle",
              attrs: { cx: "10", cy: "9", r: "5", fill: "white" },
            }),
          ]
        );
      },
      K = [],
      Q = { name: "toggle", props: { on: Boolean } },
      Y = Q,
      ee = (a("d096"), Object(x["a"])(Y, X, K, !1, null, "1cce9f24", null)),
      te = ee.exports,
      ae = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "div",
          {
            class: { button: !0, clicked: e.clicked },
            on: {
              click: function (t) {
                e.clicked = !0;
              },
            },
          },
          [
            a(
              "button",
              {
                on: {
                  click: function (t) {
                    return t.preventDefault(), e.exportToPNG(e.frameEl);
                  },
                },
              },
              [e._v("Export "), a("ExportIcon")],
              1
            ),
            a("div", { staticClass: "options-container" }, [
              a("div", { staticClass: "options" }, [
                a(
                  "a",
                  {
                    staticClass: "option",
                    attrs: { href: "#" },
                    on: {
                      click: function (t) {
                        return t.preventDefault(), e.exportToPNG(e.frameEl);
                      },
                    },
                  },
                  [a("ImageIcon"), e._v(" Save PNG ")],
                  1
                ),
                a(
                  "a",
                  {
                    staticClass: "option",
                    attrs: { href: "#" },
                    on: {
                      click: function (t) {
                        return t.preventDefault(), e.exportToSVG(e.frameEl);
                      },
                    },
                  },
                  [a("ImageIcon"), e._v(" Save SVG ")],
                  1
                ),
                a(
                  "a",
                  {
                    staticClass: "option",
                    attrs: { href: "#" },
                    on: {
                      click: function (t) {
                        return t.preventDefault(), e.copyToClipboard(e.frameEl);
                      },
                    },
                  },
                  [a("CopyIcon"), e._v(" Copy image ")],
                  1
                ),
                a(
                  "a",
                  // {
                  //   staticClass: "option",
                  //   attrs: { href: "#" },
                  //   on: {
                  //     click: function (t) {
                  //       return t.preventDefault(), e.copyURL(t);
                  //     },
                  //   },
                  // },
                  // [a("URLIcon"), e._v(" Copy URL ")],
                  1
                ),
              ]),
            ]),
          ]
        );
      },
      ie = [],
      re = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "svg",
          {
            attrs: {
              width: "14",
              height: "12",
              viewBox: "0 0 14 12",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
          },
          [
            a("path", {
              attrs: {
                d: "M2.22168 11.1299H11.7783C12.9502 11.1299 13.5479 10.5381 13.5479 9.37793V2.61621C13.5479 1.46191 12.9502 0.870117 11.7783 0.870117H2.22168C1.0498 0.870117 0.452148 1.45605 0.452148 2.61621V9.37793C0.452148 10.5381 1.0498 11.1299 2.22168 11.1299ZM1.41895 2.68066C1.41895 2.11816 1.71777 1.83691 2.25684 1.83691H11.7432C12.2764 1.83691 12.5811 2.11816 12.5811 2.68066V8.7041L9.68066 5.97949C9.43457 5.7627 9.14746 5.64551 8.84863 5.64551C8.54395 5.64551 8.26855 5.74512 8.0166 5.97363L5.51465 8.21191L4.48926 7.28613C4.25488 7.0752 3.99707 6.96973 3.73926 6.96973C3.4873 6.96973 3.25293 7.06934 3.02441 7.28027L1.41895 8.72754V2.68066ZM4.6416 6.06152C5.3623 6.06152 5.9541 5.47559 5.9541 4.74902C5.9541 4.02832 5.3623 3.43066 4.6416 3.43066C3.91504 3.43066 3.3291 4.02832 3.3291 4.74902C3.3291 5.47559 3.91504 6.06152 4.6416 6.06152Z",
              },
            }),
          ]
        );
      },
      ne = [],
      oe = {},
      se = oe,
      ce = Object(x["a"])(se, re, ne, !1, null, null, null),
      le = ce.exports,
      de = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "svg",
          {
            attrs: {
              width: "14",
              height: "18",
              viewBox: "0 0 14 18",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
          },
          [
            a("path", {
              attrs: {
                d: "M0.385742 14.9922C0.385742 16.3696 1.09668 17.0806 2.45508 17.0806H8.39648C9.75488 17.0806 10.4658 16.3633 10.4658 14.9922V13.8179H11.5449C12.9033 13.8179 13.6143 13.1006 13.6143 11.7295V3.01416C13.6143 1.63672 12.9033 0.919434 11.5449 0.919434H5.60352C4.24512 0.919434 3.53418 1.63672 3.53418 3.01416V4.18213H2.45508C1.09668 4.18213 0.385742 4.90576 0.385742 6.27686V14.9922ZM7.07617 3.19824C6.79688 3.19824 6.64453 3.00781 6.64453 2.79834V2.65234C6.64453 2.46191 6.78418 2.24609 7.07617 2.24609H10.0659C10.3643 2.24609 10.4976 2.46191 10.4976 2.65234V2.79834C10.4976 3.00781 10.3516 3.19824 10.0659 3.19824H7.07617ZM1.64893 14.9097V6.35938C1.64893 5.77539 1.95361 5.45166 2.56934 5.45166H4.50537V8.90479C4.50537 9.8252 4.95605 10.2695 5.87012 10.2695H9.20264V14.9097C9.20264 15.4937 8.89795 15.8174 8.28223 15.8174H2.56299C1.95361 15.8174 1.64893 15.4937 1.64893 14.9097ZM5.99072 9.15869C5.73047 9.15869 5.61621 9.05078 5.61621 8.78418V5.69287L9.03125 9.15869H5.99072Z",
              },
            }),
          ]
        );
      },
      he = [],
      ue = {},
      ge = ue,
      fe = Object(x["a"])(ge, de, he, !1, null, null, null),
      pe = fe.exports,
      me = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "svg",
          {
            attrs: {
              width: "14",
              height: "14",
              viewBox: "0 0 14 14",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
          },
          [
            a("path", {
              attrs: {
                d: "M6.70483 9.68146L7.67603 8.69757C6.927 8.6341 6.38745 8.38654 6.00024 7.99933C4.92749 6.92658 4.92749 5.40949 5.9939 4.34943L8.10132 2.23566C9.17407 1.16925 10.6848 1.1629 11.7576 2.23566C12.8367 3.31476 12.824 4.8255 11.7639 5.89191L10.6848 6.96466C10.8879 7.43439 10.9578 8.00568 10.8435 8.50079L12.6589 6.69171C14.2205 5.13654 14.2268 2.91486 12.6526 1.34064C11.072 -0.239928 8.86304 -0.227233 7.30151 1.33429L5.09253 3.54328C3.53101 5.1048 3.52466 7.32013 5.09888 8.89435C5.46704 9.26886 5.97485 9.54816 6.70483 9.68146ZM7.29517 4.31769L6.32397 5.30158C7.073 5.3714 7.61255 5.61261 7.99976 5.99982C9.07886 7.07257 9.07251 8.58966 8.0061 9.65607L5.89868 11.7635C4.82593 12.8362 3.31519 12.8362 2.24878 11.7635C1.16968 10.6844 1.17603 9.17999 2.24243 8.11359L3.31519 7.03449C3.11206 6.57111 3.04858 5.99982 3.15649 5.49835L1.34106 7.31378C-0.220459 8.86896 -0.226807 11.0843 1.34741 12.6585C2.92798 14.2391 5.13696 14.2264 6.69849 12.6712L8.90747 10.4559C10.469 8.89435 10.4753 6.67902 8.90112 5.1048C8.53296 4.73663 8.03149 4.45734 7.29517 4.31769Z",
              },
            }),
          ]
        );
      },
      be = [],
      ve = {},
      je = ve,
      Ce = Object(x["a"])(je, me, be, !1, null, null, null),
      xe = Ce.exports,
      ye = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "svg",
          {
            attrs: {
              width: "12",
              height: "16",
              viewBox: "0 0 12 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
          },
          [
            a("path", {
              attrs: {
                d: "M6.00635 10.1995C6.33008 10.1995 6.59668 9.93286 6.59668 9.61548V3.22974L6.55225 2.29028L6.93945 2.75366L7.82812 3.69946C7.92969 3.81372 8.07568 3.87085 8.22168 3.87085C8.51367 3.87085 8.75488 3.66138 8.75488 3.36304C8.75488 3.20435 8.69141 3.09009 8.5835 2.98218L6.45703 0.931885C6.30469 0.779541 6.15869 0.72876 6.00635 0.72876C5.84766 0.72876 5.70801 0.779541 5.55566 0.931885L3.42285 2.98218C3.31494 3.09009 3.25146 3.20435 3.25146 3.36304C3.25146 3.66138 3.48633 3.87085 3.77832 3.87085C3.92432 3.87085 4.07666 3.81372 4.17822 3.69946L5.06689 2.75366L5.46045 2.28394L5.40967 3.22974V9.61548C5.40967 9.93286 5.67627 10.1995 6.00635 10.1995ZM2.34375 15.2712H9.65625C11.0337 15.2712 11.7446 14.5603 11.7446 13.2019V6.96216C11.7446 5.60376 11.0337 4.89282 9.65625 4.89282H7.94238V6.15601H9.57373C10.1514 6.15601 10.4814 6.46069 10.4814 7.07007V13.0876C10.4814 13.697 10.1514 14.0017 9.57373 14.0017H2.42627C1.84229 14.0017 1.51855 13.697 1.51855 13.0876V7.07007C1.51855 6.46069 1.84229 6.15601 2.42627 6.15601H4.07666V4.89282H2.34375C0.972656 4.89282 0.255371 5.59741 0.255371 6.96216V13.2019C0.255371 14.5603 0.972656 15.2712 2.34375 15.2712Z",
              },
            }),
          ]
        );
      },
      ke = [],
      we = {},
      Me = we,
      Se = Object(x["a"])(Me, ye, ke, !1, null, null, null),
      Fe = Se.exports,
      _e = {
        hotkeys: {
          "ctrl+s,cmd+s": function (e) {
            e.preventDefault(), this.exportToPNG(this.frameEl);
          },
          "ctrl+shift+s,cmd+shift+s": function (e) {
            e.preventDefault(), this.exportToSVG(this.frameEl);
          },
          "ctrl+c,cmd+c": function (e) {
            "TEXTAREA" !== e.target.tagName &&
              (e.preventDefault(), this.copyToClipboard(this.frameEl));
          },
          "ctrl+shift+c,cmd+shift+c": function (e) {
            "TEXTAREA" !== e.target.tagName &&
              (e.preventDefault(), this.copyURL());
          },
        },
        data: function () {
          return { clicked: !1 };
        },
        watch: {
          clicked: function () {
            var e = this;
            setTimeout(function () {
              return (e.clicked = !1);
            }, 500);
          },
        },
        components: {
          ImageIcon: le,
          CopyIcon: pe,
          URLIcon: xe,
          ExportIcon: Fe,
        },
        computed: Object(h["a"])(
          Object(h["a"])({}, Object(m["e"])(["autoSave"])),
          {},
          {
            frameEl: function () {
              return document.getElementById("frame");
            },
          }
        ),
        methods: Object(h["a"])(
          {},
          Object(m["b"])([
            "exportToPNG",
            "exportToSVG",
            "copyToClipboard",
            "copyURL",
          ])
        ),
        mounted: function () {
          var e = this;
          this.$nextTick(function () {
            e.autoSave && e.exportToPNG();
          });
        },
      },
      Le = _e,
      Oe = (a("2478"), Object(x["a"])(Le, ae, ie, !1, null, "10a6da6c", null)),
      Ne = Oe.exports,
      Ee = {
        hotkeys: {
          d: "toggleDarkMode",
          b: "toggleBackground",
          r: "randomTheme",
        },
        data: function () {
          return { themeDropdownOpen: !1, languageDropdownOpen: !1 };
        },
        components: {
          FormItem: k,
          ThemeSelect: D,
          Padding: A,
          LanguageSelect: W,
          Toggle: te,
          Export: Ne,
        },
        computed: Object(h["a"])({}, Object(m["e"])(["config"])),
        methods: Object(h["a"])(
          Object(h["a"])({}, Object(m["b"])(["updateConfig"])),
          {},
          {
            toggleBackground: function () {
              this.updateConfig({
                setting: "background",
                value: !this.config.background,
              });
            },
            toggleDarkMode: function () {
              this.updateConfig({
                setting: "darkMode",
                value: !this.config.darkMode,
              });
            },
            randomTheme: function () {
              var e = Object.keys(L);
              this.updateConfig({
                setting: "darkMode",
                value: Math.random() < 0.5,
              }),
                this.updateConfig({
                  setting: "theme",
                  value: e[Math.floor(Math.random() * e.length)],
                });
            },
          }
        ),
      },
      De = Ee,
      Je = (a("bb87"), Object(x["a"])(De, f, p, !1, null, "6df75c32", null)),
      Pe = Je.exports,
      He = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "div",
          {
            ref: "frame",
            staticClass: "frame",
            style: {
              background: e.backgroundStyling,
              padding: e.config.spacing + "px",
              width: e.width ? e.width + "px" : "auto",
              height: e.height ? e.height + "px" : "auto",
              minWidth: e.minWidth + "px",
              minHeight: e.minHeight + "px",
              maxWidth: e.maxWidth + "px",
            },
            attrs: { id: "frame" },
            on: { click: e.focusTextarea },
          },
          [
            a("transition", { attrs: { name: "banner-fade" } }, [
              e.banner
                ? a(
                    "div",
                    {
                      staticClass: "banner",
                      on: {
                        click: function (t) {
                          return t.preventDefault(), e.hideBanner(t);
                        },
                      },
                    },
                    [a("banner", { attrs: { type: e.banner } })],
                    1
                  )
                : e._e(),
            ]),
            a(
              "div",
              {
                staticClass: "drag-control-points",
                attrs: { "data-hide-when-exporting": "" },
              },
              [
                a("div", {
                  staticClass: "handle left",
                  on: {
                    mousedown: function (t) {
                      return e.startResizeFrameX(t, "left");
                    },
                    click: function (e) {
                      e.stopPropagation();
                    },
                  },
                }),
                a("div", {
                  staticClass: "handle right",
                  on: {
                    mousedown: function (t) {
                      return e.startResizeFrameX(t, "right");
                    },
                    click: function (e) {
                      e.stopPropagation();
                    },
                  },
                }),
              ]
            ),
            a(
              "div",
              { attrs: { "data-hide-when-exporting": "" } },
              [
                a("transition", { attrs: { name: "fade" } }, [
                  e.isResizing
                    ? a("div", { staticClass: "sizing-values" }, [
                        a("hr"),
                        a("div", { staticClass: "sizing-width" }, [
                          a("span", {
                            domProps: {
                              textContent: e._s(
                                e.width ? e.width + "px" : "auto"
                              ),
                            },
                          }),
                        ]),
                      ])
                    : e._e(),
                ]),
                a("transition", { attrs: { name: "fade" } }, [
                  !e.isResizing && e.width
                    ? a(
                        "div",
                        {
                          staticClass: "clear-sizing",
                          on: {
                            click: function (t) {
                              t.stopPropagation(), (e.width = null);
                            },
                          },
                        },
                        [
                          a(
                            "svg",
                            {
                              staticClass: "clear-icon",
                              attrs: {
                                width: "16",
                                height: "16",
                                viewBox: "0 0 16 16",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                              },
                            },
                            [
                              a("circle", {
                                attrs: {
                                  cx: "8",
                                  cy: "8",
                                  r: "8",
                                  fill: "#fff",
                                },
                              }),
                              a("path", {
                                attrs: {
                                  "fill-rule": "evenodd",
                                  "clip-rule": "evenodd",
                                  d: "M10.8523 5.14768C10.6554 4.95077 10.3361 4.95077 10.1392 5.14768L7.99996 7.28693L5.86076 5.14773C5.66385 4.95082 5.34459 4.95082 5.14768 5.14773C4.95077 5.34464 4.95077 5.66389 5.14768 5.8608L7.28689 8.00001L5.14769 10.1392C4.95078 10.3361 4.95078 10.6554 5.14769 10.8523C5.3446 11.0492 5.66385 11.0492 5.86076 10.8523L7.99996 8.71308L10.1392 10.8523C10.3361 11.0492 10.6554 11.0492 10.8523 10.8523C11.0492 10.6554 11.0492 10.3362 10.8523 10.1393L8.71304 8.00001L10.8523 5.86076C11.0492 5.66385 11.0492 5.34459 10.8523 5.14768Z",
                                  fill: "black",
                                },
                              }),
                            ]
                          ),
                          a("span", [e._v("Set to auto width")]),
                        ]
                      )
                    : e._e(),
                ]),
              ],
              1
            ),
            a("div", { staticClass: "app-frame-container" }, [
              a("div", { staticClass: "shadow" }, [
                a("div", {
                  staticClass: "shadow-background",
                  style: { background: e.backgroundStyling },
                }),
              ]),
              a(
                "div",
                { staticClass: "app-frame" },
                [
                  a("FrameHeader"),
                  a("codemirror", {
                    ref: "cmEditor",
                    staticClass: "code-editor",
                    style: e.theme,
                    attrs: { options: e.cmOptions },
                    on: { focus: e.handleFocus, blur: e.handleBlur },
                    model: {
                      value: e.code,
                      callback: function (t) {
                        e.code = t;
                      },
                      expression: "code",
                    },
                  }),
                ],
                1
              ),
            ]),
          ],
          1
        );
      },
      Te = [],
      Ve = (a("99af"), a("8f94")),
      Ae =
        (a("f9d4"),
        a("a7be"),
        a("3a82"),
        function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("div", { staticClass: "app-frame-header" }, [
            a(
              "div",
              {
                staticClass: "controls",
                on: {
                  click: function (e) {
                    e.stopPropagation();
                  },
                },
              },
              [
                a("div", { staticClass: "control close" }),
                a("div", { staticClass: "control minimize" }),
                a("div", { staticClass: "control maximize" }),
              ]
            ),
            a("div", { staticClass: "title" }, [
              e.title.trim().length > 0 || e.editingTitle
                ? a("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: e.title,
                        expression: "title",
                      },
                    ],
                    ref: "titleInput",
                    attrs: { type: "text", spellcheck: "false" },
                    domProps: { value: e.title },
                    on: {
                      click: function (e) {
                        e.stopPropagation();
                      },
                      focus: function (t) {
                        e.editingTitle = !0;
                      },
                      blur: function (t) {
                        e.editingTitle = !1;
                      },
                      paste: function (e) {
                        e.stopPropagation();
                      },
                      input: function (t) {
                        t.target.composing || (e.title = t.target.value);
                      },
                    },
                  })
                : a(
                    "span",
                    {
                      staticClass: "empty",
                      attrs: { "data-hide-when-exporting": "" },
                      on: {
                        click: function (t) {
                          t.stopPropagation(), (e.editingTitle = !0);
                        },
                      },
                    },
                    [e._v(" Untitled-1 ")]
                  ),
            ]),
          ]);
        }),
      Be = [],
      $e = {
        data: function () {
          return { editingTitle: !1 };
        },
        computed: Object(h["a"])(
          Object(h["a"])({}, Object(m["e"])(["config"])),
          {},
          {
            title: {
              get: function () {
                return this.config.title;
              },
              set: function (e) {
                this.updateConfig({ setting: "title", value: e });
              },
            },
          }
        ),
        methods: Object(h["a"])({}, Object(m["b"])(["updateConfig"])),
        watch: {
          editingTitle: function (e) {
            var t = this;
            e &&
              this.$nextTick(function () {
                return t.$refs.titleInput.focus();
              });
          },
        },
      },
      Ie = $e,
      Ze = (a("3cc9"), Object(x["a"])(Ie, Ae, Be, !1, null, "1af65ca2", null)),
      Re = Ze.exports,
      qe = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "span",
          { class: e.bannerClass },
          [a(e.icon, { tag: "component" }), e._v(" " + e._s(e.text) + " ")],
          1
        );
      },
      Ue = [],
      Ge = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "svg",
          {
            attrs: {
              width: "14",
              height: "14",
              viewBox: "0 0 14 14",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
          },
          [
            a("path", {
              attrs: {
                d: "M2.12817 13.0842H11.8782C12.989 13.0842 13.7 12.2654 13.7 11.2561C13.7 10.9514 13.6238 10.6404 13.4587 10.3547L8.57104 1.83618C8.22827 1.22681 7.6189 0.915771 7.00317 0.915771C6.38745 0.915771 5.77173 1.23315 5.42896 1.83618L0.54126 10.3611C0.376221 10.6467 0.300049 10.9514 0.300049 11.2561C0.300049 12.2654 1.01733 13.0842 2.12817 13.0842ZM2.24878 11.8655C1.85522 11.8655 1.59497 11.5417 1.59497 11.1926C1.59497 11.0911 1.60767 10.9641 1.67114 10.8499L6.43188 2.51538C6.55884 2.29956 6.78101 2.198 7.00317 2.198C7.22534 2.198 7.44116 2.29956 7.56177 2.51538L12.3289 10.8625C12.386 10.9705 12.4114 11.0911 12.4114 11.1926C12.4114 11.5417 12.1448 11.8655 11.7512 11.8655H2.24878ZM7.00317 8.67896C7.35229 8.67896 7.55542 8.48218 7.56177 8.11401L7.65698 5.06079C7.66968 4.68628 7.39038 4.41968 6.99683 4.41968C6.60327 4.41968 6.33032 4.67993 6.34302 5.05444L6.43188 8.12036C6.44458 8.48218 6.64771 8.67896 7.00317 8.67896ZM7.00317 10.7864C7.41577 10.7864 7.7522 10.488 7.7522 10.0881C7.7522 9.68188 7.42212 9.38989 7.00317 9.38989C6.59058 9.38989 6.25415 9.68823 6.25415 10.0881C6.25415 10.488 6.59692 10.7864 7.00317 10.7864Z",
              },
            }),
          ]
        );
      },
      ze = [],
      We = {},
      Xe = We,
      Ke = Object(x["a"])(Xe, Ge, ze, !1, null, null, null),
      Qe = Ke.exports,
      Ye = {
        "copied-image-to-clipboard": {
          icon: pe,
          text: "Copied image to clipboard",
        },
        "copied-url": { icon: xe, text: "Copied URL to clipboard" },
        "image-clipboard-not-supported": {
          icon: Qe,
          text: "Copy Failed. Please check the console for help",
          bannerClass: "warning",
        },
      },
      et = {
        props: ["type"],
        computed: {
          icon: function (e) {
            return Ye[e.type].icon;
          },
          text: function (e) {
            return Ye[e.type].text;
          },
          bannerClass: function (e) {
            return Ye[e.type].bannerClass;
          },
        },
      },
      tt = et,
      at = (a("20aa"), Object(x["a"])(tt, qe, Ue, !1, null, "58a291b4", null)),
      it = at.exports,
      rt = {
        hotkeys: {
          f: "focusTextarea",
          esc: function (e) {
            this.$refs.frame.contains(e.target) && e.target.blur();
          },
        },
        components: {
          codemirror: Ve["codemirror"],
          FrameHeader: Re,
          Banner: it,
        },
        data: function () {
          return {
            width: null,
            height: null,
            minWidth: 520,
            minHeight: 154,
            maxWidth: 920,
            startY: null,
            startX: null,
            startHeight: null,
            startWidth: null,
            currentHandle: "",
            isResizing: !1,
          };
        },
        computed: Object(h["a"])(
          Object(h["a"])(
            Object(h["a"])(
              {},
              Object(m["e"])([
                "config",
                "language",
                "autoDetect",
                "isCodeSample",
                "banner",
              ])
            ),
            Object(m["c"])(["getCurrentTheme"])
          ),
          {},
          {
            background: function () {
              return this.getCurrentTheme.background;
            },
            theme: function () {
              return this.getCurrentTheme.syntax[
                this.config.darkMode ? "dark" : "light"
              ];
            },
            code: {
              get: function () {
                return this.$store.state.code;
              },
              set: function (e) {
                this.setCode(e);
              },
            },
            cmOptions: function () {
              return {
                mode: this.language ? R[this.language].codeMirrorMode : void 0,
                lineWrapping: !0,
              };
            },
            backgroundStyling: function () {
              return this.config.background
                ? "linear-gradient(140deg, "
                    .concat(this.background.from, ", ")
                    .concat(this.background.to, ")")
                : "";
            },
          }
        ),
        methods: Object(h["a"])(
          Object(h["a"])(
            {},
            Object(m["b"])([
              "updateConfig",
              "setLanguage",
              "setCode",
              "hideBanner",
            ])
          ),
          {},
          {
            focusTextarea: function (e) {
              e.preventDefault(), this.$refs.cmEditor.codemirror.focus();
            },
            startResizeFrameX: function (e, t) {
              (this.isResizing = !0),
                (this.currentHandle = t),
                (this.startX = e.clientX),
                (this.startWidth = this.$refs.frame.offsetWidth),
                document.documentElement.addEventListener(
                  "mousemove",
                  this.doDragX,
                  !1
                ),
                document.documentElement.addEventListener(
                  "mouseup",
                  this.stopResizeFrame,
                  !1
                );
            },
            doDragX: function (e) {
              var t;
              e.preventDefault(),
                (t =
                  "left" === this.currentHandle
                    ? this.startWidth - 2 * (e.clientX - this.startX)
                    : this.startWidth + 2 * (e.clientX - this.startX)),
                t > this.maxWidth
                  ? (t = this.maxWidth)
                  : t < this.minWidth && (t = this.minWidth),
                (this.width = t);
            },
            stopResizeFrame: function () {
              (this.currentHandle = ""),
                (this.isResizing = !1),
                document.documentElement.removeEventListener(
                  "mousemove",
                  this.doDragX,
                  !1
                ),
                document.documentElement.removeEventListener(
                  "mouseup",
                  this.stopResizeFrame,
                  !1
                );
            },
            handlePaste: function (e) {
              if (!this.$refs.cmEditor.$el.contains(e.target)) {
                var t = (e.clipboardData || window.clipboardData).getData(
                  "text"
                );
                this.$refs.cmEditor.codemirror.setValue(t);
              }
            },
            handleFocus: function (e) {
              this.isCodeSample && e.execCommand("selectAll");
            },
            handleBlur: function (e) {
              e.setSelection({ line: 0, ch: 0 });
            },
          }
        ),
        mounted: function () {
          document.addEventListener("paste", this.handlePaste);
        },
        destroyed: function () {
          document.removeEventListener("paste", this.handlePaste);
        },
        directives: { ClickOutside: F.a },
      },
      nt = rt,
      ot =
        (a("94ef"),
        a("b8da"),
        Object(x["a"])(nt, He, Te, !1, null, "08894850", null)),
      st = ot.exports,
      ct = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "div",
          { staticClass: "keyboard-shortcuts" },
          [
            a("transition", { attrs: { name: "fade" } }, [
              e.open
                ? a("div", {
                    staticClass: "overlay",
                    on: {
                      click: function (t) {
                        e.open = !1;
                      },
                    },
                  })
                : e._e(),
            ]),
            a(
              "span",
              {
                staticClass: "button",
                on: {
                  click: function (t) {
                    e.open = !e.open;
                  },
                },
              },
              [
                a(
                  "svg",
                  {
                    attrs: {
                      width: "18",
                      height: "11",
                      viewBox: "0 0 18 11",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                    },
                  },
                  [
                    a("path", {
                      attrs: {
                        d: "M2.99854 10.2896H15.002C16.373 10.2896 17.0903 9.57861 17.0903 8.22021V2.06934C17.0903 0.710938 16.373 0 15.002 0H2.99854C1.62109 0 0.910156 0.710938 0.910156 2.06934V8.22021C0.910156 9.57861 1.62109 10.2896 2.99854 10.2896ZM3.08105 9.02002C2.49707 9.02002 2.17334 8.71533 2.17334 8.10596V2.18359C2.17334 1.56787 2.49707 1.26318 3.08105 1.26318H14.9194C15.5034 1.26318 15.8271 1.56787 15.8271 2.18359V8.10596C15.8271 8.71533 15.5034 9.02002 14.9194 9.02002H3.08105ZM3.69043 3.71338H4.27441C4.4585 3.71338 4.57275 3.59912 4.57275 3.41504V2.83105C4.57275 2.64697 4.4585 2.53271 4.27441 2.53271H3.69043C3.50635 2.53271 3.39209 2.64697 3.39209 2.83105V3.41504C3.39209 3.59912 3.50635 3.71338 3.69043 3.71338ZM5.69629 3.71338H6.28027C6.46436 3.71338 6.57861 3.59912 6.57861 3.41504V2.83105C6.57861 2.64697 6.46436 2.53271 6.28027 2.53271H5.69629C5.51221 2.53271 5.39795 2.64697 5.39795 2.83105V3.41504C5.39795 3.59912 5.51221 3.71338 5.69629 3.71338ZM7.6958 3.71338H8.27979C8.46387 3.71338 8.57812 3.59912 8.57812 3.41504V2.83105C8.57812 2.64697 8.46387 2.53271 8.27979 2.53271H7.6958C7.51172 2.53271 7.39746 2.64697 7.39746 2.83105V3.41504C7.39746 3.59912 7.51172 3.71338 7.6958 3.71338ZM9.70166 3.71338H10.2856C10.4697 3.71338 10.584 3.59912 10.584 3.41504V2.83105C10.584 2.64697 10.4697 2.53271 10.2856 2.53271H9.70166C9.51758 2.53271 9.40332 2.64697 9.40332 2.83105V3.41504C9.40332 3.59912 9.51758 3.71338 9.70166 3.71338ZM11.7202 3.71338H12.2852C12.4692 3.71338 12.5835 3.59912 12.5835 3.41504V2.83105C12.5835 2.64697 12.4692 2.53271 12.2852 2.53271H11.7202C11.5234 2.53271 11.4092 2.64697 11.4092 2.83105V3.41504C11.4092 3.59912 11.5234 3.71338 11.7202 3.71338ZM13.707 3.71338H14.291C14.4751 3.71338 14.5894 3.59912 14.5894 3.41504V2.83105C14.5894 2.64697 14.4751 2.53271 14.291 2.53271H13.707C13.5229 2.53271 13.4087 2.64697 13.4087 2.83105V3.41504C13.4087 3.59912 13.5229 3.71338 13.707 3.71338ZM13.707 5.73193H14.291C14.4751 5.73193 14.5894 5.61768 14.5894 5.43359V4.84961C14.5894 4.66553 14.4751 4.55127 14.291 4.55127H13.707C13.5229 4.55127 13.4087 4.66553 13.4087 4.84961V5.43359C13.4087 5.61768 13.5229 5.73193 13.707 5.73193ZM11.7202 5.73193H12.2852C12.4692 5.73193 12.5835 5.61768 12.5835 5.43359V4.84961C12.5835 4.66553 12.4692 4.55127 12.2852 4.55127H11.7202C11.5234 4.55127 11.4092 4.66553 11.4092 4.84961V5.43359C11.4092 5.61768 11.5234 5.73193 11.7202 5.73193ZM9.70166 5.73193H10.2856C10.4697 5.73193 10.584 5.61768 10.584 5.43359V4.84961C10.584 4.66553 10.4697 4.55127 10.2856 4.55127H9.70166C9.51758 4.55127 9.40332 4.66553 9.40332 4.84961V5.43359C9.40332 5.61768 9.51758 5.73193 9.70166 5.73193ZM7.6958 5.73193H8.27979C8.46387 5.73193 8.57812 5.61768 8.57812 5.43359V4.84961C8.57812 4.66553 8.46387 4.55127 8.27979 4.55127H7.6958C7.51172 4.55127 7.39746 4.66553 7.39746 4.84961V5.43359C7.39746 5.61768 7.51172 5.73193 7.6958 5.73193ZM5.69629 5.73193H6.28027C6.46436 5.73193 6.57861 5.61768 6.57861 5.43359V4.84961C6.57861 4.66553 6.46436 4.55127 6.28027 4.55127H5.69629C5.51221 4.55127 5.39795 4.66553 5.39795 4.84961V5.43359C5.39795 5.61768 5.51221 5.73193 5.69629 5.73193ZM3.69043 5.73193H4.27441C4.4585 5.73193 4.57275 5.61768 4.57275 5.43359V4.84961C4.57275 4.66553 4.4585 4.55127 4.27441 4.55127H3.69043C3.50635 4.55127 3.39209 4.66553 3.39209 4.84961V5.43359C3.39209 5.61768 3.50635 5.73193 3.69043 5.73193ZM3.69043 7.75049H4.27441C4.4585 7.75049 4.57275 7.63623 4.57275 7.45215V6.86816C4.57275 6.68408 4.4585 6.56982 4.27441 6.56982H3.69043C3.50635 6.56982 3.39209 6.68408 3.39209 6.86816V7.45215C3.39209 7.63623 3.50635 7.75049 3.69043 7.75049ZM5.74707 7.75049H12.2344C12.4565 7.75049 12.5835 7.62354 12.5835 7.40137V6.91895C12.5835 6.69678 12.4565 6.56982 12.2344 6.56982H5.74707C5.5249 6.56982 5.39795 6.69678 5.39795 6.91895V7.40137C5.39795 7.62354 5.5249 7.75049 5.74707 7.75049ZM13.707 7.75049H14.291C14.4751 7.75049 14.5894 7.63623 14.5894 7.45215V6.86816C14.5894 6.68408 14.4751 6.56982 14.291 6.56982H13.707C13.5229 6.56982 13.4087 6.68408 13.4087 6.86816V7.45215C13.4087 7.63623 13.5229 7.75049 13.707 7.75049Z",
                        fill: "white",
                      },
                    }),
                  ]
                ),
                e.open
                  ? a("span", [e._v(" Esc ")])
                  : a("span", [e._v(" Keyboard shortcuts ")]),
              ]
            ),
            a(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: e.open,
                    expression: "open",
                  },
                ],
                staticClass: "list",
              },
              [
                a("h3", [e._v("Keyboard shortcuts")]),
                a("dl", [
                  a("dt", [e._v("Focus text editor")]),
                  e._m(0),
                  a("dt", [e._v("Unfocus text editor")]),
                  e._m(1),
                  a("dt", [e._v("Change colors")]),
                  e._m(2),
                  a("dt", [e._v("Toggle background")]),
                  e._m(3),
                  a("dt", [e._v("Toggle dark mode")]),
                  e._m(4),
                  a("dt", [e._v("Change padding")]),
                  e._m(5),
                  a("dt", [e._v("Select language")]),
                  e._m(6),
                  a("dt", [e._v("Pick random theme")]),
                  e._m(7),
                  a("dt", [e._v("Save PNG")]),
                  a("dd", [
                    a("span", [e._v(e._s(e.metaKey))]),
                    a("span", [e._v("S")]),
                  ]),
                  a("dt", [e._v("Save SVG")]),
                  a("dd", [
                    a("span", [e._v(e._s(e.metaKey))]),
                    a("span", [e._v("shift")]),
                    a("span", [e._v("S")]),
                  ]),
                  a("dt", [e._v("Copy image")]),
                  a("dd", [
                    a("span", [e._v(e._s(e.metaKey))]),
                    a("span", [e._v("C")]),
                  ]),
                  a("dt", [e._v("Copy URL")]),
                  a("dd", [
                    a("span", [e._v(e._s(e.metaKey))]),
                    a("span", [e._v("shift")]),
                    a("span", [e._v("C")]),
                  ]),
                  a("dt", [e._v("Open shortcuts")]),
                  e._m(8),
                ]),
              ]
            ),
          ],
          1
        );
      },
      lt = [
        function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("dd", [a("span", [e._v("F")])]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("dd", [a("span", [e._v("Esc")])]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("dd", [a("span", [e._v("C")])]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("dd", [a("span", [e._v("B")])]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("dd", [a("span", [e._v("D")])]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("dd", [a("span", [e._v("P")])]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("dd", [a("span", [e._v("L")])]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("dd", [a("span", [e._v("R")])]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("dd", [a("span", [e._v("?")])]);
        },
      ],
      dt = a("337f"),
      ht = a.n(dt),
      ut = {
        hotkeys: {
          "shift+/": function () {
            this.open = !this.open;
          },
          esc: function () {
            this.open && (this.open = !1);
          },
        },
        data: function () {
          return { open: !1 };
        },
        computed: {
          metaKey: function () {
            var e = ht.a.getParser(navigator.userAgent);
            return "macOS" === e.getOS().name ? "⌘" : "ctrl";
          },
        },
      },
      gt = ut,
      ft = (a("99f9"), Object(x["a"])(gt, ct, lt, !1, null, "c6c06d82", null)),
      pt = ft.exports,
      mt = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a("div", { staticClass: "footer" }, [
          a("div", { staticClass: "footer-start" }, [
            a(
              "a",
              {
                attrs: {
                  href: "https://github.com/YatharthChauhan2362",
                },
              },
              [e._v("Yatharth Chauhan"), a("External")],
              1
            ),
          ]),
          a(
            "div",
            { staticClass: "footer-center" },
            [a("MadeBycodetosnap")],
            1
          ),
          a("div", { staticClass: "footer-end" }, [
            a(
              "a",
              {
                attrs: {
                  target: "_blank",
                  href: "https://github.com/YatharthChauhan2362/CodeToSnap.github.io",
                },
              },
              [e._v("View on github"), a("External")],
              1
            ),
          ]),
        ]);
      },
      bt = [],
      vt = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "svg",
          {
            attrs: {
              width: "7",
              height: "8",
              viewBox: "0 0 7 8",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
          },
          [
            a("path", {
              attrs: {
                d: "M6.6918 0.787265C6.58744 0.682908 6.44269 0.62568 6.2912 0.629047H1.86781C1.69613 0.632413 1.56821 0.686275 1.47395 0.780533C1.2585 0.995979 1.25514 1.30232 1.46049 1.50767C1.56821 1.61539 1.70286 1.66252 1.83752 1.66252L3.36248 1.67262L5.2308 1.58846L4.40268 2.32232L0.322659 6.40234C0.0971129 6.62789 0.0971129 6.93759 0.319292 7.15977C0.538105 7.37859 0.84781 7.37859 1.07336 7.15304L5.15337 3.07302L5.88724 2.2449L5.80308 4.11322L5.81318 5.63818C5.81318 5.77283 5.86031 5.90749 5.96803 6.01521C6.17338 6.22056 6.47972 6.21719 6.69516 6.00175C6.78942 5.90749 6.84328 5.77957 6.84665 5.62135V1.1845C6.85002 1.03301 6.79279 0.888256 6.6918 0.787265Z",
                fill: "white",
                "fill-opacity": "0.6",
              },
            }),
          ]
        );
      },
      jt = [],
      Ct = {},
      xt = Ct,
      yt = Object(x["a"])(xt, vt, jt, !1, null, null, null),
      kt = yt.exports,
      wt = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a("section", { staticClass: "made-by-codetosnap" }, [
          a(
            "a",
            {
              staticClass: "container",
              attrs: { href: "index.html" },
            },
            [a("span", [e._v(" Made by CodeToSnap")]), a("")],
            1
          ),
        ]);
      },
      Mt = [],
      St = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "svg",
          {
            attrs: {
              width: "77",
              height: "20",
              viewBox: "0 0 77 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
          },
          [
            a("path", {
              attrs: {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M4.98799 12.9303V15.012L0 10.024L1.04149 8.98252L4.98799 12.9303ZM7.06964 15.012H4.98799L9.97598 20L11.0175 18.9585L7.06964 15.012ZM18.9078 11.0655L19.9493 10.024L9.97332 0.0480347L8.93449 1.09219L12.881 5.03868H10.4961L7.74136 2.2893L6.69987 3.3308L8.41308 5.044H7.21596V12.7867H14.9586V11.5896L16.6719 13.3028L17.7133 12.2613L14.9586 9.50659V7.12167L18.9078 11.0655ZM5.50807 4.51993L4.46392 5.56142L5.58123 6.67873L6.62272 5.63724L5.50807 4.51993ZM14.3667 13.3786L13.3252 14.4201L14.4426 15.5374L15.484 14.4959L14.3667 13.3786ZM3.27345 6.75322L2.23196 7.79471L4.98666 10.5494V8.46643L3.27345 6.75322ZM11.5362 15.016H9.45457L12.2093 17.7707L13.2508 16.7292L11.5362 15.016Z",
                fill: "#FF6363",
              },
            }),
            a("path", {
              attrs: {
                d: "M75.6407 14.9999C74.969 14.9999 74.4436 14.8177 74.0685 14.4519C73.6934 14.0861 73.5059 13.578 73.5059 12.9342V8.9438H72.3008V7.45006H73.5125L73.728 5.45486H75.1473V7.45006H77.0001V8.94646H75.1473V12.7174C75.1434 12.9236 75.2202 13.1231 75.3614 13.2734C75.4336 13.3501 75.5214 13.4104 75.619 13.4501C75.7165 13.4898 75.8215 13.508 75.9267 13.5035H77.0001V14.9999H75.6407Z",
                fill: "white",
              },
            }),
            a("path", {
              attrs: {
                d: "M68.3928 15.1408C67.4972 15.1408 66.7767 14.9271 66.2314 14.4997C65.6896 14.0761 65.3181 13.4718 65.1846 12.7972H66.9656C67.0436 13.0565 67.2165 13.2769 67.4498 13.4143C67.7358 13.5795 68.0628 13.6603 68.3928 13.6471C69.3426 13.6471 69.8201 13.3811 69.8201 12.8677C69.8201 12.6114 69.6707 12.4159 69.3718 12.2811C69.0245 12.1321 68.6612 12.0237 68.2891 11.9578C67.8661 11.8767 67.4418 11.7716 67.0108 11.6439C66.582 11.5173 66.2014 11.2642 65.9188 10.9177C65.6217 10.563 65.4728 10.0966 65.4719 9.51839C65.4672 9.21462 65.5327 8.91386 65.6633 8.63955C65.7939 8.36523 65.986 8.12476 66.2247 7.93686C66.7284 7.51654 67.4267 7.30682 68.3197 7.30771C69.2126 7.3086 69.9221 7.50812 70.4479 7.90627C70.9709 8.30154 71.3302 8.87533 71.4575 9.51839H69.6738C69.4836 9.04619 69.0353 8.80544 68.325 8.80411C67.5628 8.80411 67.1824 9.0422 67.1824 9.51839C67.1838 9.62755 67.2142 9.73439 67.2705 9.8279C67.3269 9.92141 67.4071 9.99823 67.503 10.0504C67.7472 10.1979 68.0186 10.2947 68.3011 10.3351C68.6544 10.3952 69.004 10.476 69.3479 10.5772C69.7046 10.6792 70.0543 10.8045 70.3947 10.9523C70.7267 11.1023 71.0075 11.3465 71.2021 11.6546C71.4279 12.0164 71.5404 12.4374 71.5253 12.8637C71.5324 13.181 71.4637 13.4955 71.3249 13.781C71.1861 14.0664 70.9812 14.3147 70.7272 14.505C70.1969 14.928 69.4188 15.14 68.3928 15.1408Z",
                fill: "white",
              },
            }),
            a("path", {
              attrs: {
                d: "M63.0812 8.06327C62.5323 7.56935 61.7635 7.32239 60.7748 7.32239C59.9864 7.32239 59.3254 7.53477 58.7916 7.95952C58.2646 8.37371 57.8926 8.95334 57.7354 9.60489H59.4194C59.505 9.35812 59.6684 9.14577 59.8849 8.99968C60.1478 8.82343 60.4599 8.73539 60.7761 8.74829C61.239 8.74829 61.6035 8.868 61.8708 9.10476C62.0065 9.23099 62.1126 9.38562 62.1816 9.55761C62.2506 9.7296 62.2807 9.91471 62.2698 10.0997V10.4602H60.3412C59.4544 10.4602 58.7579 10.6841 58.2515 11.1319C58.0094 11.3385 57.8161 11.5962 57.6855 11.8865C57.5549 12.1767 57.4901 12.4923 57.496 12.8105C57.4871 13.1252 57.5453 13.4381 57.6669 13.7285C57.7885 14.0189 57.9705 14.28 58.201 14.4945C58.6692 14.9378 59.2899 15.1595 60.0632 15.1595C60.5422 15.1705 61.0162 15.0602 61.4412 14.839C61.7829 14.6718 62.072 14.4136 62.2765 14.0928H62.3457L62.4853 15.0238H63.9099V10.1024C63.9072 9.23866 63.631 8.55897 63.0812 8.06327ZM62.2712 12.0962C62.2811 12.3202 62.2415 12.5435 62.1553 12.7504C62.0691 12.9573 61.9383 13.1427 61.7724 13.2933C61.4416 13.5869 60.9903 13.7341 60.4183 13.7349C60.002 13.7349 59.6827 13.6392 59.4633 13.453C59.3566 13.3663 59.2712 13.2564 59.2136 13.1317C59.1559 13.007 59.1276 12.8707 59.1307 12.7334C59.1307 12.0683 59.5657 11.7384 60.4183 11.7384H62.2712V12.0962Z",
                fill: "white",
              },
            }),
            a("path", {
              attrs: {
                d: "M53.2222 15.1569C52.1413 15.1569 51.2776 14.8101 50.6311 14.1167C49.9847 13.4233 49.661 12.4638 49.6602 11.2383C49.6602 10.0155 49.9825 9.05688 50.6272 8.36255C51.2718 7.66822 52.1369 7.3215 53.2222 7.32239C54.1037 7.32239 54.8344 7.55738 55.4143 8.02736C55.9832 8.48135 56.3886 9.10852 56.5688 9.81372H54.9355C54.7755 9.50128 54.529 9.24139 54.2255 9.065C53.922 8.88861 53.5743 8.80315 53.2236 8.81879C52.9574 8.80923 52.6927 8.86128 52.45 8.97087C52.2072 9.08047 51.9931 9.24464 51.8243 9.4506C51.4696 9.87358 51.2922 10.4695 51.2922 11.2383C51.2922 12.0071 51.4696 12.603 51.8243 13.026C51.9928 13.2324 52.2069 13.3971 52.4496 13.5072C52.6923 13.6172 52.9572 13.6697 53.2236 13.6605C53.5743 13.6755 53.922 13.5896 54.2254 13.413C54.5288 13.2365 54.7753 12.9766 54.9355 12.6642H56.5688C56.389 13.37 55.9836 13.9977 55.4143 14.4519C54.8352 14.9219 54.1046 15.1569 53.2222 15.1569Z",
                fill: "white",
              },
            }),
            a("path", {
              attrs: {
                d: "M43.5857 17.8692L44.7257 15.0174L41.665 7.46759H43.4461L45.5118 12.8107H45.5809L47.6493 7.46759H49.4303L45.2963 17.8692H43.5857Z",
                fill: "white",
              },
            }),
            a("path", {
              attrs: {
                d: "M40.1263 8.06327C39.5774 7.56935 38.8086 7.32239 37.8198 7.32239C37.0311 7.32239 36.3686 7.53388 35.8366 7.95952C35.3093 8.37343 34.9372 8.95317 34.7805 9.60489H36.4644C36.5494 9.35775 36.7129 9.14519 36.93 8.99968C37.1927 8.82309 37.5049 8.73501 37.8212 8.74829C38.284 8.74829 38.6489 8.86711 38.9159 9.10476C39.0518 9.23076 39.1581 9.38535 39.2271 9.5574C39.2961 9.72945 39.3261 9.91467 39.3149 10.0997V10.4602H37.3862C36.4994 10.4602 35.8029 10.6841 35.2966 11.1319C35.0543 11.3383 34.8608 11.596 34.7301 11.8863C34.5995 12.1766 34.5349 12.4922 34.5411 12.8105C34.5315 13.125 34.5893 13.4379 34.7104 13.7283C34.8315 14.0187 35.0132 14.2799 35.2434 14.4945C35.7116 14.9378 36.3323 15.1595 37.1055 15.1595C37.5845 15.1705 38.0586 15.0602 38.4836 14.839C38.8253 14.6718 39.1144 14.4136 39.3189 14.0928H39.388L39.5277 15.0238H40.9496V10.1024C40.9496 9.23866 40.6752 8.55897 40.1263 8.06327ZM39.3136 12.0962C39.3236 12.3202 39.2842 12.5436 39.1979 12.7505C39.1117 12.9575 38.9809 13.1428 38.8148 13.2933C38.4849 13.5877 38.0335 13.7349 37.4607 13.7349C37.0444 13.7349 36.7238 13.6405 36.5057 13.453C36.3992 13.3662 36.3138 13.2563 36.2562 13.1316C36.1986 13.0069 36.1702 12.8707 36.1731 12.7334C36.1776 12.071 36.6067 11.7393 37.4607 11.7384H39.3136V12.0962Z",
                fill: "white",
              },
            }),
            a("path", {
              attrs: {
                d: "M30.8856 11.2385C31.1395 11.1707 31.385 11.0743 31.6172 10.9512C31.8882 10.8027 32.1416 10.6243 32.3727 10.4192C32.652 10.162 32.8675 9.84317 33.0019 9.48808C33.1637 9.07098 33.2437 8.62659 33.2373 8.17923C33.2373 7.22952 32.934 6.46868 32.3275 5.89672C31.721 5.32477 30.9317 5.03968 29.9599 5.04145H25.8271V15.0174H27.6082V11.3157H28.9596L31.5268 15.0174H33.522L30.8856 11.2385ZM27.6082 9.73814V6.61233H29.8149C30.3203 6.61233 30.7194 6.74934 31.012 7.02334C31.3046 7.29735 31.4518 7.68132 31.4536 8.17524C31.4536 8.66916 31.3055 9.05401 31.0093 9.32979C30.6837 9.61339 30.2608 9.75975 29.8295 9.73814H27.6082Z",
                fill: "white",
              },
            }),
          ]
        );
      },
      Ft = [],
      _t = {},
      Lt = Object(x["a"])(_t, St, Ft, !1, null, null, null),
      Ot = Lt.exports,
      Nt = { components: { Logo: Ot } },
      Et = Nt,
      Dt = (a("9302"), Object(x["a"])(Et, wt, Mt, !1, null, "56912f6f", null)),
      Jt = Dt.exports,
      Pt = { components: { MadeBycodetosnap: Jt, External: kt } },
      Ht = Pt,
      Tt = (a("f22a"), Object(x["a"])(Ht, mt, bt, !1, null, "124bd1b5", null)),
      Vt = Tt.exports,
      At = {
        components: {
          Controls: Pe,
          Frame: st,
          KeyboardShortcuts: pt,
          Footer: Vt,
        },
      },
      Bt = At,
      $t = (a("629b"), Object(x["a"])(Bt, u, g, !1, null, "215b0901", null)),
      It = $t.exports,
      Zt = {
        name: "App",
        components: { Wrapper: It },
        computed: Object(h["a"])({}, Object(m["e"])(["config"])),
      },
      Rt = Zt,
      qt = (a("5c0b"), Object(x["a"])(Rt, l, d, !1, null, null, null)),
      Ut = qt.exports,
      Gt = a("9483"),
      zt = a("ade3"),
      Wt = a("1da1"),
      Xt =
        (a("96cf"),
        a("2b3d"),
        a("d3b7"),
        a("3ca3"),
        a("ddb0"),
        a("25f0"),
        a("2ef0")),
      Kt = a("9ad7"),
      Qt = a.n(Kt);
    function Yt(e, t) {
      var a = document.createElement("a");
      (a.href = e),
        (a.download = t),
        document.body.appendChild(a),
        a.click(),
        document.body.removeChild(a);
    }
    a("841c");
    var ea = a("e762");
    function ta() {
      var e,
        t = new URLSearchParams(window.location.search),
        a = "";
      if (t.get("code"))
        try {
          a = ea["a"].decode(t.get("code"));
        } catch (i) {
          console.error("decoding code query parameter failed"),
            console.error(i);
        }
      return (
        t.get("language") in R && (e = t.get("language")),
        {
          title: t.get("title"),
          theme: t.get("colors"),
          code: a,
          spacing: t.get("padding"),
          background: t.get("background"),
          darkMode: t.get("darkMode"),
          autoSave: t.get("autoSave"),
          language: e,
        }
      );
    }
    var aa = a("554b"),
      ia = [
        {
          language: "javascript",
          code: "console.log('Welcome to CodeToSnap'); \n\nlet developer = 'Yatharth Chauhan' \n\nfor (i=0 ;i<= developer.length-1 ; i++)\n\n{  \n\nlet codetosnap = develper[i]  \n\nconsole.log(codetosnap)\n\n}",
        },
        {
          language: "python",
          code: 'def factorial(n):         \n\n   return 1 if (n == 1 or n == 0) else n * factorial(n - 1); \n\nnum = 23;\n\nprint("Factorial of",num,"is",factorial(num))',
        },
      ];
    function ra() {
      return ia[Math.floor(Math.random() * ia.length)];
    }
    function na(e) {
      return (
        !(e instanceof Element) ||
        (!e.hasAttribute("data-hide-when-exporting") &&
          !e.matches(".CodeMirror-cursors") &&
          !e.matches(".CodeMirror-selected"))
      );
    }
    i["a"].use(m["a"]);
    var oa = new m["a"].Store({
      state: {
        exportError: void 0,
        language: void 0,
        autoDetect: !0,
        banner: void 0,
        isCodeSample: !1,
        code: "",
        autoSave: !1,
        config: {
          title: "",
          theme: Object.keys(L)[0],
          spacing: "64",
          background: !0,
          darkMode: window.matchMedia("(prefers-color-scheme: dark)").matches,
        },
      },
      getters: {
        getCurrentTheme: function (e) {
          return L[e.config.theme];
        },
        getTitle: function (e) {
          return e.config.title || "CodeToSnap-untitled";
        },
        getDefaultDomtoimageStyle: function (e) {
          return { background: e.config.background ? void 0 : "transparent" };
        },
        currentHost: function () {
          return "https://CodeToSnap";
        },
        currentURL: function (e, t) {
          for (
            var a = new URLSearchParams(), i = 0, r = Object.entries(e.config);
            i < r.length;
            i++
          ) {
            var o = Object(n["a"])(r[i], 2),
              s = o[0],
              c = o[1];
            a.set(s, c);
          }
          return (
            a.set("code", Object(ea["b"])(e.code)),
            a.set("language", e.language),
            "".concat(t.currentHost, "/?").concat(a.toString())
          );
        },
      },
      mutations: {
        SET_EXPORT_ERROR: function (e, t) {
          e.exportError = t;
        },
        SET_LANGUAGE: function (e, t) {
          e.language = t;
        },
        SET_AUTODETECT: function (e, t) {
          e.autoDetect = t;
        },
        SET_CODE: function (e, t) {
          (e.isCodeSample = !1), (e.code = t);
        },
        SET_BANNER: function (e, t) {
          e.banner = t;
        },
        UPDATE_CONFIG: function (e, t) {
          i["a"].set(e.config, t.setting, t.value);
        },
        INIT_CONFIG: function (e) {
          var t = localStorage.getItem("config");
          t && (e.config = JSON.parse(t));
          var a = ta();
          if (a) {
            if (
              (i["a"].set(e.config, "title", a.title || ""),
              i["a"].set(e.config, "theme", a.theme || e.config.theme),
              i["a"].set(e.config, "spacing", a.spacing || e.config.spacing),
              (e.code = a.code),
              (e.autoSave = a.autoSave || !1),
              0 === e.code.length)
            ) {
              var r = ra();
              (e.language = r.language),
                (e.code = r.code),
                (e.isCodeSample = !0);
            }
            a.language && (e.language = a.language),
              i["a"].set(
                e.config,
                "background",
                a.background ? "true" === a.background : e.config.background
              ),
              i["a"].set(
                e.config,
                "darkMode",
                a.darkMode ? "true" === a.darkMode : e.config.darkMode
              );
          }
          -1 === Object.keys(L).indexOf(e.config.theme) &&
            i["a"].set(e.config, "theme", Object.keys(L)[0]);
        },
      },
      actions: {
        exportToPNG: function (e, t) {
          return Object(Wt["a"])(
            regeneratorRuntime.mark(function a() {
              var i, r, n, o;
              return regeneratorRuntime.wrap(function (a) {
                while (1)
                  switch ((a.prev = a.next)) {
                    case 0:
                      return (
                        e.state,
                        (i = e.getters),
                        (r = 2),
                        (n = 72),
                        (a.next = 5),
                        Qt.a.toPng(t, {
                          height: t.offsetHeight * r,
                          width: t.offsetWidth * r,
                          style: Object(h["a"])(
                            Object(h["a"])({}, i.getDefaultDomtoimageStyle),
                            {},
                            {
                              transform: "scale(".concat(r, ")"),
                              transformOrigin: "top left",
                              width: "".concat(t.offsetWidth, "px"),
                              height: "".concat(t.offsetHeight, "px"),
                            }
                          ),
                          filter: na,
                        })
                      );
                    case 5:
                      (o = a.sent),
                        (o = Object(aa["changeDpiDataUrl"])(o, n * r)),
                        Yt(o, "".concat(i.getTitle, ".png"));
                    case 8:
                    case "end":
                      return a.stop();
                  }
              }, a);
            })
          )();
        },
        exportToSVG: function (e, t) {
          return Object(Wt["a"])(
            regeneratorRuntime.mark(function a() {
              var i, r;
              return regeneratorRuntime.wrap(function (a) {
                while (1)
                  switch ((a.prev = a.next)) {
                    case 0:
                      return (
                        (i = e.getters),
                        (a.next = 3),
                        Qt.a.toSvg(t, {
                          style: Object(h["a"])(
                            {},
                            i.getDefaultDomtoimageStyle
                          ),
                          filter: na,
                        })
                      );
                    case 3:
                      (r = a.sent), Yt(r, "".concat(i.getTitle, ".svg"));
                    case 5:
                    case "end":
                      return a.stop();
                  }
              }, a);
            })
          )();
        },
        copyToClipboard: function (e, t) {
          return Object(Wt["a"])(
            regeneratorRuntime.mark(function a() {
              var i, r, n, o, s;
              return regeneratorRuntime.wrap(function (a) {
                while (1)
                  switch ((a.prev = a.next)) {
                    case 0:
                      if (
                        ((i = e.getters),
                        (r = e.dispatch),
                        (n =
                          window.navigator &&
                          window.navigator.clipboard &&
                          "function" === typeof ClipboardItem),
                        n)
                      ) {
                        a.next = 7;
                        break;
                      }
                      console.warn(
                        "In order to copy images to the clipboard, CodeToSnap needs access to the ClipboardItem web API, which is locked behind a config in Firefox. Please refer to https://developer.mozilla.org/en-US/docs/Web/API/ClipboardItem#browser_compatibility for instructions."
                      ),
                        r("showBanner", {
                          type: "image-clipboard-not-supported",
                        }),
                        (a.next = 13);
                      break;
                    case 7:
                      return (
                        (o = 2),
                        (a.next = 10),
                        Qt.a.toBlob(t, {
                          height: t.offsetHeight * o,
                          width: t.offsetWidth * o,
                          style: Object(h["a"])(
                            Object(h["a"])({}, i.getDefaultDomtoimageStyle),
                            {},
                            {
                              transform: "scale(".concat(o, ")"),
                              transformOrigin: "top left",
                              width: "".concat(t.offsetWidth, "px"),
                              height: "".concat(t.offsetHeight, "px"),
                            }
                          ),
                          filter: na,
                        })
                      );
                    case 10:
                      (s = a.sent),
                        navigator.clipboard.write([
                          new window.ClipboardItem(
                            Object(zt["a"])({}, s.type, s)
                          ),
                        ]),
                        r("showBanner", { type: "copied-image-to-clipboard" });
                    case 13:
                    case "end":
                      return a.stop();
                  }
              }, a);
            })
          )();
        },
        copyURL: function (e) {
          var t = e.getters,
            a = e.dispatch;
          navigator.clipboard.writeText(t.currentURL),
            a("showBanner", { type: "copied-url" });
        },
        showBanner: function (e, t) {
          var a = e.commit,
            i = e.dispatch,
            r = t.type,
            n = t.timeout,
            o = void 0 === n ? 2e3 : n;
          a("SET_BANNER", r),
            setTimeout(function () {
              return i("hideBanner");
            }, o);
        },
        hideBanner: function (e) {
          var t = e.commit;
          t("SET_BANNER", void 0);
        },
        updateConfig: function (e, t) {
          var a = e.commit,
            i = t.setting,
            r = t.value;
          a("UPDATE_CONFIG", { setting: i, value: r }),
            localStorage.setItem(
              "config",
              JSON.stringify(
                Object(h["a"])(
                  Object(h["a"])({}, this.state.config),
                  {},
                  { title: "" }
                )
              )
            );
        },
        setCode: function (e, t) {
          var a = e.commit,
            i = e.state,
            r = e.dispatch;
          a("SET_CODE", t), i.autoDetect && r("autoDetectLanguage");
        },
        setLanguage: function (e, t) {
          var a = e.commit;
          a("SET_LANGUAGE", t);
        },
        initConfig: function (e) {
          var t = e.commit;
          t("INIT_CONFIG");
        },
        autoDetectLanguage: Object(Xt["debounce"])(function (e) {
          var t = e.dispatch,
            a = e.state;
          if (a.autoDetect) {
            var i = q(a.code);
            i && t("setLanguage", i);
          }
        }, 300),
      },
    });
    Object(Gt["a"])("".concat("/", "service-worker.js"), {
      ready: function () {
        console.log(
          "App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB"
        );
      },
      registered: function () {
        console.log("Service worker has been registered.");
      },
      cached: function () {
        console.log("Content has been cached for offline use.");
      },
      updatefound: function () {
        console.log("New content is downloading.");
      },
      updated: function () {
        console.log("New content is available; please refresh."),
          (window.location = oa.getters.currentURL);
      },
      offline: function () {
        console.log(
          "No internet connection found. App is running in offline mode."
        );
      },
      error: function (e) {
        console.error("Error during service worker registration:", e);
      },
    });
    a("2ea5");
    (i["a"].config.productionTip = !1), i["a"].use(r["a"]), i["a"].use(c);
    var sa = new r["a"]({ routes: [], mode: "history" });
    new i["a"]({
      router: sa,
      store: oa,
      render: function (e) {
        return e(Ut);
      },
      beforeCreate: function () {
        this.$store.dispatch("initConfig"),
          Object.values(this.$route.query).length &&
            this.$router.replace({ query: {} });
      },
    }).$mount("#app");
  },
  5883: function (e, t, a) {
    "use strict";
    a("0bf3");
  },
  "5c0b": function (e, t, a) {
    "use strict";
    a("9c0c");
  },
  "629b": function (e, t, a) {
    "use strict";
    a("c4e5");
  },
  "74e2": function (e, t, a) {},
  7936: function (e, t, a) {
    var i = {
      "./apl/apl.js": "e249",
      "./asciiarmor/asciiarmor.js": "26df",
      "./asn.1/asn.1.js": "d0e1",
      "./asterisk/asterisk.js": "c868",
      "./brainfuck/brainfuck.js": "a05e",
      "./clike/clike.js": "4ba6",
      "./clojure/clojure.js": "2c0d",
      "./cmake/cmake.js": "a84f",
      "./cobol/cobol.js": "24d2",
      "./coffeescript/coffeescript.js": "a0bd",
      "./commonlisp/commonlisp.js": "9260",
      "./crystal/crystal.js": "2512",
      "./css/css.js": "7b00",
      "./cypher/cypher.js": "bd6f",
      "./d/d.js": "cd1c",
      "./dart/dart.js": "eaaf",
      "./diff/diff.js": "ddf9",
      "./django/django.js": "4b34",
      "./dockerfile/dockerfile.js": "47ac",
      "./dtd/dtd.js": "fd82",
      "./dylan/dylan.js": "3cb1",
      "./ebnf/ebnf.js": "02f2",
      "./ecl/ecl.js": "ad2a",
      "./eiffel/eiffel.js": "b7ce",
      "./elm/elm.js": "45b6",
      "./erlang/erlang.js": "f514",
      "./factor/factor.js": "cafe",
      "./fcl/fcl.js": "c6fb",
      "./forth/forth.js": "0839",
      "./fortran/fortran.js": "518b",
      "./gas/gas.js": "529a",
      "./gfm/gfm.js": "44a0",
      "./gherkin/gherkin.js": "b640",
      "./go/go.js": "4ff4",
      "./groovy/groovy.js": "5fb4",
      "./haml/haml.js": "73e6",
      "./handlebars/handlebars.js": "e1de",
      "./haskell-literate/haskell-literate.js": "20d7",
      "./haskell/haskell.js": "d3e0",
      "./haxe/haxe.js": "59ef",
      "./htmlembedded/htmlembedded.js": "74bb",
      "./htmlmixed/htmlmixed.js": "d69f",
      "./http/http.js": "b1c1",
      "./idl/idl.js": "1eaa",
      "./javascript/javascript.js": "f9d4",
      "./jinja2/jinja2.js": "4e80",
      "./jsx/jsx.js": "a279",
      "./julia/julia.js": "346a",
      "./livescript/livescript.js": "e515",
      "./lua/lua.js": "8eb3",
      "./markdown/markdown.js": "959b",
      "./mathematica/mathematica.js": "ced6",
      "./mbox/mbox.js": "ea60",
      "./meta.js": "f040",
      "./mirc/mirc.js": "a399",
      "./mllike/mllike.js": "354f",
      "./modelica/modelica.js": "9508",
      "./mscgen/mscgen.js": "ea04",
      "./mumps/mumps.js": "43bb",
      "./nginx/nginx.js": "b2b9",
      "./nsis/nsis.js": "6d82",
      "./ntriples/ntriples.js": "3d60",
      "./octave/octave.js": "9b26",
      "./oz/oz.js": "ca19",
      "./pascal/pascal.js": "941f",
      "./pegjs/pegjs.js": "6466",
      "./perl/perl.js": "906f",
      "./php/php.js": "44d5",
      "./pig/pig.js": "f3ad",
      "./powershell/powershell.js": "9da3",
      "./properties/properties.js": "dc5b",
      "./protobuf/protobuf.js": "707c",
      "./pug/pug.js": "5bef",
      "./puppet/puppet.js": "730a",
      "./python/python.js": "db91",
      "./q/q.js": "322a",
      "./r/r.js": "903e",
      "./rpm/rpm.js": "42ce",
      "./rst/rst.js": "8c84",
      "./ruby/ruby.js": "8536",
      "./rust/rust.js": "b18e",
      "./sas/sas.js": "4a1d",
      "./sass/sass.js": "1b63",
      "./scheme/scheme.js": "f307",
      "./shell/shell.js": "02f0",
      "./sieve/sieve.js": "d5d4",
      "./slim/slim.js": "548d",
      "./smalltalk/smalltalk.js": "9f83",
      "./smarty/smarty.js": "41685",
      "./solr/solr.js": "c611",
      "./soy/soy.js": "bc7f",
      "./sparql/sparql.js": "fbe7",
      "./spreadsheet/spreadsheet.js": "6c45",
      "./sql/sql.js": "ffda",
      "./stex/stex.js": "f8d2",
      "./stylus/stylus.js": "76d2",
      "./swift/swift.js": "c0e2",
      "./tcl/tcl.js": "0440",
      "./textile/textile.js": "4c3d",
      "./tiddlywiki/tiddlywiki.js": "f7e3",
      "./tiki/tiki.js": "2a6e",
      "./toml/toml.js": "d2ca",
      "./tornado/tornado.js": "c5b3",
      "./troff/troff.js": "b35a",
      "./ttcn-cfg/ttcn-cfg.js": "8664",
      "./ttcn/ttcn.js": "4d8a",
      "./turtle/turtle.js": "3f73",
      "./twig/twig.js": "4882",
      "./vb/vb.js": "2abe",
      "./vbscript/vbscript.js": "6b16",
      "./velocity/velocity.js": "fe46",
      "./verilog/verilog.js": "9b66",
      "./vhdl/vhdl.js": "3cfe",
      "./vue/vue.js": "693d",
      "./wast/wast.js": "59ef2",
      "./webidl/webidl.js": "3d58",
      "./xml/xml.js": "d5e0",
      "./xquery/xquery.js": "6c91",
      "./yacas/yacas.js": "5938",
      "./yaml-frontmatter/yaml-frontmatter.js": "d202",
      "./yaml/yaml.js": "ced0",
      "./z80/z80.js": "7511",
    };
    function r(e) {
      var t = n(e);
      return a(t);
    }
    function n(e) {
      if (!a.o(i, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
      }
      return i[e];
    }
    (r.keys = function () {
      return Object.keys(i);
    }),
      (r.resolve = n),
      (e.exports = r),
      (r.id = "7936");
  },
  "7e43": function (e, t, a) {},
  8263: function (e, t, a) {},
  9302: function (e, t, a) {
    "use strict";
    a("c67f");
  },
  "94ef": function (e, t, a) {
    "use strict";
    a("8263");
  },
  "97ca": function (e, t, a) {
    "use strict";
    a("74e2");
  },
  "996d": function (e, t, a) {
    "use strict";
    a("fc18");
  },
  "99f9": function (e, t, a) {
    "use strict";
    a("7e43");
  },
  "9c0c": function (e, t, a) {},
  b311: function (e, t, a) {},
  b8da: function (e, t, a) {
    "use strict";
    a("1a19");
  },
  bb87: function (e, t, a) {
    "use strict";
    a("d632");
  },
  c4e5: function (e, t, a) {},
  c67f: function (e, t, a) {},
  cc96: function (e, t, a) {},
  d096: function (e, t, a) {
    "use strict";
    a("49df");
  },
  d632: function (e, t, a) {},
  e6f4: function (e, t, a) {},
  f137: function (e, t, a) {},
  f205: function (e, t, a) {
    var i = {
      "./1c": "f71c",
      "./1c.js": "f71c",
      "./abnf": "b528",
      "./abnf.js": "b528",
      "./accesslog": "998d",
      "./accesslog.js": "998d",
      "./actionscript": "f9f0",
      "./actionscript.js": "f9f0",
      "./ada": "01ac",
      "./ada.js": "01ac",
      "./angelscript": "dbcc",
      "./angelscript.js": "dbcc",
      "./apache": "f0aa",
      "./apache.js": "f0aa",
      "./applescript": "7bc1",
      "./applescript.js": "7bc1",
      "./arcade": "305e",
      "./arcade.js": "305e",
      "./arduino": "944e",
      "./arduino.js": "944e",
      "./armasm": "a33c",
      "./armasm.js": "a33c",
      "./asciidoc": "0290",
      "./asciidoc.js": "0290",
      "./aspectj": "9814",
      "./aspectj.js": "9814",
      "./autohotkey": "0481",
      "./autohotkey.js": "0481",
      "./autoit": "ef99",
      "./autoit.js": "ef99",
      "./avrasm": "a6fb",
      "./avrasm.js": "a6fb",
      "./awk": "1069",
      "./awk.js": "1069",
      "./axapta": "a885",
      "./axapta.js": "a885",
      "./bash": "f0f8",
      "./bash.js": "f0f8",
      "./basic": "a15a",
      "./basic.js": "a15a",
      "./bnf": "75da",
      "./bnf.js": "75da",
      "./brainfuck": "5921",
      "./brainfuck.js": "5921",
      "./c": "1fe5",
      "./c-like": "af9a",
      "./c-like.js": "af9a",
      "./c.js": "1fe5",
      "./cal": "7781",
      "./cal.js": "7781",
      "./capnproto": "4a5e",
      "./capnproto.js": "4a5e",
      "./ceylon": "ba76",
      "./ceylon.js": "ba76",
      "./clean": "51ab",
      "./clean.js": "51ab",
      "./clojure": "b884",
      "./clojure-repl": "149d",
      "./clojure-repl.js": "149d",
      "./clojure.js": "b884",
      "./cmake": "eaab",
      "./cmake.js": "eaab",
      "./coffeescript": "a995",
      "./coffeescript.js": "a995",
      "./coq": "80b3",
      "./coq.js": "80b3",
      "./cos": "8261",
      "./cos.js": "8261",
      "./cpp": "0209",
      "./cpp.js": "0209",
      "./crmsh": "c8e5",
      "./crmsh.js": "c8e5",
      "./crystal": "294a",
      "./crystal.js": "294a",
      "./csharp": "98af",
      "./csharp.js": "98af",
      "./csp": "4272",
      "./csp.js": "4272",
      "./css": "ee8c",
      "./css.js": "ee8c",
      "./d": "8d6d",
      "./d.js": "8d6d",
      "./dart": "7c46",
      "./dart.js": "7c46",
      "./delphi": "1f8a",
      "./delphi.js": "1f8a",
      "./diff": "48b8",
      "./diff.js": "48b8",
      "./django": "d248",
      "./django.js": "d248",
      "./dns": "8a86",
      "./dns.js": "8a86",
      "./dockerfile": "44b5",
      "./dockerfile.js": "44b5",
      "./dos": "7cff",
      "./dos.js": "7cff",
      "./dsconfig": "b91e",
      "./dsconfig.js": "b91e",
      "./dts": "b0cf",
      "./dts.js": "b0cf",
      "./dust": "f4da",
      "./dust.js": "f4da",
      "./ebnf": "1b4d",
      "./ebnf.js": "1b4d",
      "./elixir": "7727",
      "./elixir.js": "7727",
      "./elm": "5051",
      "./elm.js": "5051",
      "./erb": "1367",
      "./erb.js": "1367",
      "./erlang": "b3c5",
      "./erlang-repl": "f492",
      "./erlang-repl.js": "f492",
      "./erlang.js": "b3c5",
      "./excel": "f5cf",
      "./excel.js": "f5cf",
      "./fix": "2b22",
      "./fix.js": "2b22",
      "./flix": "a14e",
      "./flix.js": "a14e",
      "./fortran": "485f",
      "./fortran.js": "485f",
      "./fsharp": "0215",
      "./fsharp.js": "0215",
      "./gams": "7d9d",
      "./gams.js": "7d9d",
      "./gauss": "ae7a",
      "./gauss.js": "ae7a",
      "./gcode": "94a2",
      "./gcode.js": "94a2",
      "./gherkin": "351a",
      "./gherkin.js": "351a",
      "./glsl": "df06",
      "./glsl.js": "df06",
      "./gml": "e6ea",
      "./gml.js": "e6ea",
      "./go": "0b22",
      "./go.js": "0b22",
      "./golo": "919d",
      "./golo.js": "919d",
      "./gradle": "9544",
      "./gradle.js": "9544",
      "./groovy": "1f64",
      "./groovy.js": "1f64",
      "./haml": "4f4a",
      "./haml.js": "4f4a",
      "./handlebars": "e55c",
      "./handlebars.js": "e55c",
      "./haskell": "3f38",
      "./haskell.js": "3f38",
      "./haxe": "7c71",
      "./haxe.js": "7c71",
      "./hsp": "c22d",
      "./hsp.js": "c22d",
      "./htmlbars": "79b5",
      "./htmlbars.js": "79b5",
      "./http": "c01d",
      "./http.js": "c01d",
      "./hy": "8667",
      "./hy.js": "8667",
      "./inform7": "2e5d",
      "./inform7.js": "2e5d",
      "./ini": "2a93",
      "./ini.js": "2a93",
      "./irpf90": "074e",
      "./irpf90.js": "074e",
      "./isbl": "bb43",
      "./isbl.js": "bb43",
      "./java": "332f",
      "./java.js": "332f",
      "./javascript": "4dd1",
      "./javascript.js": "4dd1",
      "./jboss-cli": "04a8",
      "./jboss-cli.js": "04a8",
      "./json": "5ad2",
      "./json.js": "5ad2",
      "./julia": "2265",
      "./julia-repl": "b7aa",
      "./julia-repl.js": "b7aa",
      "./julia.js": "2265",
      "./kotlin": "a941",
      "./kotlin.js": "a941",
      "./lasso": "25bd",
      "./lasso.js": "25bd",
      "./latex": "1555",
      "./latex.js": "1555",
      "./ldif": "1a06",
      "./ldif.js": "1a06",
      "./leaf": "2e9b",
      "./leaf.js": "2e9b",
      "./less": "1846",
      "./less.js": "1846",
      "./lisp": "9b32",
      "./lisp.js": "9b32",
      "./livecodeserver": "1beb",
      "./livecodeserver.js": "1beb",
      "./livescript": "2e11",
      "./livescript.js": "2e11",
      "./llvm": "7c30",
      "./llvm.js": "7c30",
      "./lsl": "28ad",
      "./lsl.js": "28ad",
      "./lua": "ecfe",
      "./lua.js": "ecfe",
      "./makefile": "7a5e",
      "./makefile.js": "7a5e",
      "./markdown": "04b0",
      "./markdown.js": "04b0",
      "./mathematica": "ef7a",
      "./mathematica.js": "ef7a",
      "./matlab": "8ca5",
      "./matlab.js": "8ca5",
      "./maxima": "399d",
      "./maxima.js": "399d",
      "./mel": "bb7e",
      "./mel.js": "bb7e",
      "./mercury": "2425",
      "./mercury.js": "2425",
      "./mipsasm": "a342",
      "./mipsasm.js": "a342",
      "./mizar": "0f16",
      "./mizar.js": "0f16",
      "./mojolicious": "66ba",
      "./mojolicious.js": "66ba",
      "./monkey": "a710",
      "./monkey.js": "a710",
      "./moonscript": "b1b9",
      "./moonscript.js": "b1b9",
      "./n1ql": "f4c8",
      "./n1ql.js": "f4c8",
      "./nginx": "f54f",
      "./nginx.js": "f54f",
      "./nim": "861d1",
      "./nim.js": "861d1",
      "./nix": "46ae",
      "./nix.js": "46ae",
      "./node-repl": "0118",
      "./node-repl.js": "0118",
      "./nsis": "b322",
      "./nsis.js": "b322",
      "./objectivec": "9bf21",
      "./objectivec.js": "9bf21",
      "./ocaml": "ee6c",
      "./ocaml.js": "ee6c",
      "./openscad": "02c4",
      "./openscad.js": "02c4",
      "./oxygene": "6de8",
      "./oxygene.js": "6de8",
      "./parser3": "3728",
      "./parser3.js": "3728",
      "./perl": "6a51",
      "./perl.js": "6a51",
      "./pf": "767a",
      "./pf.js": "767a",
      "./pgsql": "f851",
      "./pgsql.js": "f851",
      "./php": "2907",
      "./php-template": "e05a",
      "./php-template.js": "e05a",
      "./php.js": "2907",
      "./plaintext": "44e5",
      "./plaintext.js": "44e5",
      "./pony": "95d0",
      "./pony.js": "95d0",
      "./powershell": "508e",
      "./powershell.js": "508e",
      "./processing": "afba",
      "./processing.js": "afba",
      "./profile": "b90a",
      "./profile.js": "b90a",
      "./prolog": "4396",
      "./prolog.js": "4396",
      "./properties": "56b2",
      "./properties.js": "56b2",
      "./protobuf": "2e8e",
      "./protobuf.js": "2e8e",
      "./puppet": "5027",
      "./puppet.js": "5027",
      "./purebasic": "1b02",
      "./purebasic.js": "1b02",
      "./python": "9510",
      "./python-repl": "4168",
      "./python-repl.js": "4168",
      "./python.js": "9510",
      "./q": "5dfb",
      "./q.js": "5dfb",
      "./qml": "612a",
      "./qml.js": "612a",
      "./r": "26bc",
      "./r.js": "26bc",
      "./reasonml": "e990",
      "./reasonml.js": "e990",
      "./rib": "0faf",
      "./rib.js": "0faf",
      "./roboconf": "f50f",
      "./roboconf.js": "f50f",
      "./routeros": "d959",
      "./routeros.js": "d959",
      "./rsl": "a0a7",
      "./rsl.js": "a0a7",
      "./ruby": "82cb",
      "./ruby.js": "82cb",
      "./ruleslanguage": "8aba",
      "./ruleslanguage.js": "8aba",
      "./rust": "2ce7",
      "./rust.js": "2ce7",
      "./sas": "40f4",
      "./sas.js": "40f4",
      "./scala": "9f7f",
      "./scala.js": "9f7f",
      "./scheme": "4108",
      "./scheme.js": "4108",
      "./scilab": "ea4d",
      "./scilab.js": "ea4d",
      "./scss": "6113",
      "./scss.js": "6113",
      "./shell": "b65b",
      "./shell.js": "b65b",
      "./smali": "1b1c",
      "./smali.js": "1b1c",
      "./smalltalk": "8d4f",
      "./smalltalk.js": "8d4f",
      "./sml": "dc41",
      "./sml.js": "dc41",
      "./sqf": "e2a7",
      "./sqf.js": "e2a7",
      "./sql": "de09",
      "./sql.js": "de09",
      "./sql_more": "f761",
      "./sql_more.js": "f761",
      "./stan": "8931",
      "./stan.js": "8931",
      "./stata": "d4b5",
      "./stata.js": "d4b5",
      "./step21": "0081",
      "./step21.js": "0081",
      "./stylus": "bd88",
      "./stylus.js": "bd88",
      "./subunit": "02ac",
      "./subunit.js": "02ac",
      "./swift": "2a39",
      "./swift.js": "2a39",
      "./taggerscript": "2468",
      "./taggerscript.js": "2468",
      "./tap": "06b4",
      "./tap.js": "06b4",
      "./tcl": "a27d",
      "./tcl.js": "a27d",
      "./thrift": "adf9",
      "./thrift.js": "adf9",
      "./tp": "a613",
      "./tp.js": "a613",
      "./twig": "f46e",
      "./twig.js": "f46e",
      "./typescript": "af44",
      "./typescript.js": "af44",
      "./vala": "f122",
      "./vala.js": "f122",
      "./vbnet": "89e7",
      "./vbnet.js": "89e7",
      "./vbscript": "5a3e",
      "./vbscript-html": "f45a",
      "./vbscript-html.js": "f45a",
      "./vbscript.js": "5a3e",
      "./verilog": "e10f",
      "./verilog.js": "e10f",
      "./vhdl": "310f",
      "./vhdl.js": "310f",
      "./vim": "3c69",
      "./vim.js": "3c69",
      "./x86asm": "a154",
      "./x86asm.js": "a154",
      "./xl": "2639",
      "./xl.js": "2639",
      "./xml": "8dcb",
      "./xml.js": "8dcb",
      "./xquery": "268a",
      "./xquery.js": "268a",
      "./yaml": "2e7b",
      "./yaml.js": "2e7b",
      "./zephir": "9f0c",
      "./zephir.js": "9f0c",
    };
    function r(e) {
      var t = n(e);
      return a(t);
    }
    function n(e) {
      if (!a.o(i, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
      }
      return i[e];
    }
    (r.keys = function () {
      return Object.keys(i);
    }),
      (r.resolve = n),
      (e.exports = r),
      (r.id = "f205");
  },
  f22a: function (e, t, a) {
    "use strict";
    a("b311");
  },
  fc18: function (e, t, a) {},
  fd5b: function (e, t, a) {
    "use strict";
    a("f137");
  },
});
