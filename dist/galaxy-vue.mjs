import { reactive as ze, readonly as pt, ref as Q, inject as j, watch as Me, openBlock as c, createElementBlock as h, normalizeClass as m, unref as r, createElementVNode as $, renderSlot as k, createCommentVNode as C, createTextVNode as E, toDisplayString as T, createVNode as z, Transition as Oe, withCtx as I, withDirectives as We, vShow as He, pushScopeId as Pt, popScopeId as Ot, provide as M, useSlots as G, computed as D, createBlock as V, resolveDynamicComponent as je, mergeProps as st, Fragment as W, defineComponent as Fe, nextTick as to, normalizeProps as Lt, guardReactiveProps as Dt, withScopeId as oo, resolveComponent as Ze, normalizeStyle as ee, withKeys as no, onBeforeUnmount as rt, createSlots as Je, renderList as fe, withModifiers as lt, Comment as so, onMounted as ro } from "vue";
const lo = {
  Expandable: {
    default: {
      group: "",
      groupTheme: "shadow",
      panelWrapperNotGrouped: "shadow",
      panelWrapperGrouped: "",
      panel: "p-4 border cursor-pointer select-none",
      panelTheme: "border-gray-200 hover:bg-gray-50",
      panelDisabled: "!cursor-not-allowed !text-gray-300 hover:!bg-gray-50",
      panelActive: "!bg-gray-100",
      panelTitle: "text-md",
      panelTitleDisabled: "",
      panelArrowWrapper: "text-gray-600",
      panelArrowWrapperDisabled: "!text-gray-300",
      panelArrowSize: "w-4 h-4",
      panelContent: "p-4 border border-gray-200 border-t-0"
    }
  },
  Avatar: {
    default: {
      wrapper: "relative inline-flex",
      content: "inline-flex items-center justify-center overflow-hidden cursor-default",
      contentSize: "w-10 h-10 text-md font-medium",
      contentTheme: "bg-primary-700 rounded-full text-white",
      contentHover: "hover:z-10 cursor-pointer",
      contentGrouped: "border-2 border-white dark:border-gray-600",
      defaultPlaceholderWrapper: "relative h-full w-full inline-flex justify-center items-center overflow-hidden",
      defaultPlaceholderIcon: "absolute w-auto h-auto -bottom-1",
      statusDotSizePosition: "bottom-0 left-7 absolute w-3 h-3",
      statusDotTheme: "border-2 border-white rounded-full",
      statusDotOnline: "bg-green-400",
      statusDotOffline: "bg-gray-400",
      statusDotBusy: "bg-red-500",
      statusDotAway: "bg-yellow-500"
    }
  },
  AvatarGroup: {
    default: {
      content: "flex -space-x-2"
    }
  },
  Badge: {
    default: {
      base: "inline-flex items-center px-2 py-1 gap-x-0.5 cursor-default",
      theme: "rounded text-sm font-normal",
      themeColor: "bg-primary-100 text-primary-800",
      removeButton: "flex items-center justify-center relative -mr-1 h-4 w-4",
      removeButtonTheme: "rounded-full hover:bg-gray-600/20 text-gray-800",
      removeIcon: "h-3 w-3"
    }
  },
  Button: {
    default: {
      base: "whitespace-nowrap font-medium rounded border cursor-pointer",
      baseSize: "text-sm px-4 py-2",
      baseSizeIconOnly: "!p-2",
      iconSize: "w-4 h-4",
      normal: "text-white bg-primary-700 hover:bg-primary-800 border-transparent",
      normalDisabled: "text-white bg-gray-300 hover:bg-gray-300 border-transparent",
      outlined: "text-primary-600 border-primary-400 hover:border-primary-800 hover:bg-gray-100 hover:border-primary-700",
      outlinedDisabled: "text-gray-400 border-gray-300 hover:!border-gray-300",
      ghost: "text-primary-600 hover:bg-gray-200 !border-transparent",
      ghostDisabled: "text-gray-400 bg-gray-50 !border-transparent",
      shadow: "shadow",
      disabled: "!cursor-not-allowed"
    }
  },
  ButtonGroup: {
    default: {
      content: "btn-group inline-flex shadow"
    }
  },
  LoaderSpinner: {
    default: {
      base: "animate-spin",
      size: "w-5 h-5",
      color: "text-gray-200 fill-primary-600",
      disabled: "!fill-gray-400"
    }
  },
  LoaderLinear: {
    default: {
      base: "relative block w-full overflow-hidden",
      size: "h-1",
      emptyColor: "bg-primary-200",
      fillColor: "bg-primary-700",
      disabledEmptyColor: "bg-gray-200",
      disabledFillColor: "bg-gray-400"
    }
  },
  LoaderProgress: {
    default: {
      wrapper: "relative block w-full overflow-hidden",
      size: "h-4",
      bar: "w-full rounded-full",
      barColor: "bg-primary-200",
      progressBar: "rounded-full p-0.5",
      progressBarColor: "bg-primary-600 dark:bg-primary-600 text-primary-100",
      insideLabelText: "font-medium text-center text-xs leading-none",
      outsideLabelWrapper: "flex justify-between mb-1",
      outsideLabelText: "text-base font-medium",
      outsideLabelProgress: "text-sm font-medium"
    }
  },
  Card: {
    default: {
      wrapper: "flex flex-col w-full relative",
      detachedHeaderWrapper: "flex items-center p-2",
      headerWrapper: "flex items-center",
      headerTheme: "border-b border-gray-200",
      headerTitleWrapper: "grow",
      headerTitle: "font-medium text-lg",
      headerSubtitle: "font-normal text-md text-gray-500",
      headerActions: "flex items-center",
      contentWrapper: "flex flex-col w-full",
      contentTheme: "rounded shadow border border-gray-200 bg-white",
      contentDisabled: "absolute top-0 left-0 right-0 bottom-0 bg-white opacity-60",
      body: "grow",
      footerTheme: "border-t border-gray-300",
      padding: "p-4"
    }
  },
  Dropdown: {
    default: {
      wrapper: "inline",
      theme: "bg-white rounded shadow-md",
      size: "w-64"
    }
  },
  Tooltip: {
    default: {
      wrapper: "inline",
      theme: "bg-white border rounded shadow-md"
    }
  },
  Pagination: {
    default: {
      baseText: "text-sm text-gray-500",
      currentPageText: "text-black"
    }
  },
  List: {
    default: {
      listGroup: "overflow-hidden border rounded",
      listGroupColor: "text-gray-900 bg-white border-gray-200",
      listGroupText: "text-md font-normal",
      listItem: "inline-flex block items-center w-full border-b",
      listItemSize: "px-4 py-2 ",
      listItemTheme: "border-gray-200",
      listItemHover: "cursor-pointer hover:bg-gray-100",
      listItemDivider: "bg-gray-200",
      listItemDisabled: "cursor-not-allowed bg-gray-50 text-gray-400",
      listItemBefore: "w-5 h-5 text-gray-400 mr-2 flex items-center",
      listItemAfter: "w-5 h-5 text-gray-400 flex items-center"
    },
    menu: {
      listGroup: "overflow-hidden rounded border space-y-1 py-1",
      listGroupColor: "text-gray-600 bg-white border-gray-200",
      listGroupText: "text-sm font-normal",
      listItem: "inline-flex block items-center w-full",
      listItemSize: "px-4 py-2 ",
      listItemTheme: "",
      listItemHover: "cursor-pointer hover:bg-gray-100",
      listItemDisabled: "cursor-not-allowed bg-gray-50 text-gray-400",
      listItemDivider: "bg-gray-200",
      listItemBefore: "w-5 h-5 text-gray-400 mr-2 flex items-center",
      listItemAfter: "w-4 h-4 text-gray-400 flex items-center"
    }
  },
  Tabs: {
    default: {
      wrapper: "",
      tabListWrapper: "",
      tabList: "flex space-x-4 items-center",
      tabItem: "text-gray-500 rounded px-3 py-2 text-sm font-medium cursor-pointer",
      tabItemSelected: "bg-primary-800 text-white rounded px-3 py-2 text-sm font-medium",
      tabItemDisabled: "!text-gray-400 !cursor-not-allowed",
      tabItemTitle: "flex items-center",
      tabContentWrapper: "",
      tabContent: "p-4"
    },
    underline: {
      wrapper: "",
      tabListWrapper: "border-b border-gray-200",
      tabList: "-mb-px flex space-x-6 items-center",
      tabItem: "cursor-pointer border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap border-b-2 py-2.5 px-1 text-sm font-medium border-primary-600",
      tabItemSelected: "!border-primary-600 text-primary-600",
      tabItemDisabled: "!text-gray-400 !cursor-not-allowed",
      tabItemTitle: "flex items-center justify-center text-center",
      tabContentWrapper: "",
      tabContent: "p-4"
    }
  },
  Label: {
    default: {
      base: "flex items-center select-none cursor-pointer",
      theme: "text-sm font-medium text-gray-800",
      disabled: "!cursor-not-allowed !text-gray-400",
      errors: "!text-red-600",
      iconSize: "w-4 h-4",
      icon: "text-primary-600"
    }
  },
  Checkbox: {
    default: {
      wrapper: "relative flex items-center text-gray-200",
      inputWrapper: "elative cursor-pointer flex items-center",
      inputCheck: "check-animation rounded focus:ring-0 h-4 w-4 cursor-pointer text-primary-600",
      inputRadio: "radio rounded-full focus:ring-0 h-4 w-4 cursor-pointer text-primary-600",
      inputDisabled: "!cursor-not-allowed text-gray-300 border-gray-300",
      labelWrapper: "pl-3 text-sm"
    }
  },
  Toggle: {
    default: {
      wrapper: "relative flex items-center text-gray-200",
      inputWrapper: "relative cursor-pointer flex items-center",
      labelFalseWrapper: "pr-3 text-sm",
      labelWrapper: "pl-3 text-sm",
      switchColor: "bg-gray-400",
      switchColorChecked: "bg-primary-600",
      switchColorBorderChecked: "border-primary-600",
      switchColorBorder: "border-gray-400",
      switchDisabledColor: "bg-gray-100",
      switchDisabledColorChecked: "bg-primary-200",
      switchDisabledColorBorderChecked: "border-primary-200",
      switchFalseLabelColorChecked: "!text-gray-400",
      switchTrueLabelColorChecked: "!text-primary-600",
      switchTrueLabelColor: "!text-gray-400"
    }
  },
  InputText: {
    default: {
      root: "relative w-full",
      inputWrapper: "grow relative",
      inputTheme: "text-gray-800 border-slate-300 hover:bg-slate-50 bg-slate-50 hover:border-slate-400 focus:border-slate-700 hover:text-slate-900",
      input: "block w-full rounded text-sm focus:outline-none focus:ring-0 border px-2 py-2",
      inputPrepend: "rounded-l-none",
      prepend: "inline-flex items-center px-3 text-sm text-gray-800 bg-gray-100 border border-r-0 border-gray-200 rounded-l-md",
      icon: "pointer-events-none absolute inset-y-0 left-0 p-2 flex items-center text-gray-500",
      clearable: "cursor-pointer absolute inset-y-0 right-0 p-2 flex items-center",
      counter: "absolute text-right text-[11px] text-gray-600 right-0.5 -bottom-[21px]",
      disabled: "cursor-default bg-gray-100 border-gray-200 focus:border-gray-200",
      readonly: "cursor-default",
      errors: "border-red-500 focus:border-red-500 text-red-500 hover:text-red-800"
    }
  },
  InputArea: {
    default: {
      root: "relative w-full",
      inputWrapper: "grow relative",
      inputTheme: "text-gray-800 border-slate-300 hover:bg-slate-50 bg-slate-50 hover:border-slate-400 focus:border-slate-700 hover:text-slate-900",
      input: "block w-full rounded text-sm focus:outline-none focus:ring-0 border px-2 py-2",
      clearable: "cursor-pointer absolute right-0 p-2 top-0",
      counter: "absolute text-right text-[11px] text-gray-600 right-0.5 -bottom-[21px]",
      disabled: "cursor-default bg-gray-100 border-gray-200 focus:border-gray-200",
      readonly: "cursor-default",
      errors: "border-red-500 focus:border-red-500 text-red-500 hover:text-red-800"
    }
  },
  Table: {
    default: {
      wrapper: "relative",
      table: "min-w-full h-full text-sm text-left text-gray-500 divide-y divide-gray-300",
      thead: "bg-gray-100",
      theadRow: "divide-x divide-gray-200",
      theadColumn: "my-auto px-4 py-2 font-normal whitespace-nowrap uppercase text-gray-700 text-xs align-middle",
      theadColumnLabel: "font-bold",
      theadColumnSortIcon: "w-3 h-3",
      theadColumnSortIconSorted: "text-primary-600",
      theadColumnSorting: "sortable cursor-pointer hover:bg-gray-200",
      theadColumnSorted: "sorted bg-primary-100 hover:bg-primary-100 text-primary-700",
      theadColumnSelectAll: "w-4 px-4 py-2",
      tbodyColumnSelectBorder: "bg-primary-600",
      tbody: "divide-y divide-gray-200",
      tbodyRow: "hover:bg-gray-100 text-gray-800",
      tbodyRowSelected: "!bg-primary-50",
      tbodyColumn: "px-4 py-3",
      tbodyColumnSelect: "w-4 px-4 py-3",
      noData: "text-center p-3",
      emptyCellText: "text-gray-400"
    }
  },
  Backdrop: {
    default: {
      base: "top-0 left-0 bottom-0 right-0 bg-gray-400 bg-opacity-60 z-40",
      theme: "bg-gray-400 bg-opacity-60"
    }
  },
  Modal: {
    default: {
      base: "fixed inset-0 w-full h-screen z-[100]",
      wrapper: "flex items-center justify-center",
      content: "z-[999] transition-all duration-300 ease-in-out overflow-hidden",
      contentTheme: "bg-white shadow-lg rounded"
    }
  },
  Drawer: {
    default: {
      base: "",
      content: "z-[777] fixed",
      contentTheme: "bg-white shadow-lg"
    }
  }
}, Qe = ze(lo);
function L(t, o, e = {}) {
  const n = Qe[t];
  if (n)
    return o && n[o] ? pt({ ...n.default, ...n[o], ...e }) : pt({ ...n.default, ...e });
  console.warn(`[Galaxy Vue warn] No component "${t}" not found in variant list`);
}
function Fs(t) {
  Object.assign(Qe, It(JSON.parse(JSON.stringify(Qe)), t));
}
function It(t, o) {
  for (const e in o) {
    const n = t[e], s = o[e];
    ft(n) && ft(s) ? t[e] = It({ ...n }, s) : s !== void 0 && (t[e] = s);
  }
  return t;
}
function ft(t) {
  return t && typeof t == "object" && !Array.isArray(t);
}
const me = () => Math.random().toString(36).substr(2, 9);
const be = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [n, s] of o)
    e[n] = s;
  return e;
}, Nt = (t) => (Pt("data-v-e3242f54"), t = t(), Ot(), t), ao = /* @__PURE__ */ Nt(() => /* @__PURE__ */ $("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M8.25 4.5l7.5 7.5-7.5 7.5"
}, null, -1)), io = [
  ao
], uo = /* @__PURE__ */ Nt(() => /* @__PURE__ */ $("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
}, null, -1)), co = [
  uo
], po = {
  __name: "Expandable",
  props: {
    variant: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => {
      }
    },
    title: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    arrowHide: {
      type: Boolean,
      default: !1
    },
    arrowPosition: {
      type: String,
      default: "end",
      validator: function(t) {
        return ["start", "end"].includes(t);
      }
    }
  },
  setup(t) {
    const o = t, e = me(), n = Q(null), s = Q(!1), l = L("Expandable", o.variant, o.classes), a = j("IS_EXPANDABLE_GROUP", 0), d = j("IS_ALWAYS_OPEN", 0), u = j("EXPAND_ACTIVE", null);
    a && Me(u, (v, x) => {
      !d && v !== e && (s.value = !1);
    });
    const f = () => {
      o.disabled || (s.value = !s.value, a && s.value === !0 && (u.value = e));
    }, b = (v) => {
      v.style.height = "0";
    }, p = (v) => {
      v.style.height = v.scrollHeight + "px";
    }, y = (v) => {
      v.style.height = v.scrollHeight + "px";
    }, w = (v) => {
      v.style.height = "0";
    };
    return (v, x) => (c(), h("div", {
      class: m(["expandable-wrapper relative", {
        [r(l).panelWrapperNotGrouped]: !r(a),
        [r(l).panelWrapperGrouped]: r(a)
      }])
    }, [
      $("div", {
        class: m({
          "expandable flex items-center justify-start": !0,
          [r(l).panel]: !0,
          [r(l).panelTheme]: !0,
          [r(l).panelActive]: s.value,
          [r(l).panelDisabled]: o.disabled
        }),
        onClick: f
      }, [
        t.arrowPosition === "start" && !o.arrowHide ? (c(), h("div", {
          key: 0,
          class: m({
            "mr-2": !0,
            [r(l).panelArrowWrapper]: !0,
            [r(l).panelArrowWrapperDisabled]: o.disabled
          })
        }, [
          k(v.$slots, "arrow-start", {}, () => [
            (c(), h("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              "stroke-width": "1.5",
              stroke: "currentColor",
              class: m([r(l).panelArrowSize, { "rotate-0": !s.value, "rotate-90": s.value }])
            }, io, 2))
          ], !0)
        ], 2)) : C("", !0),
        $("div", {
          class: m(["grow", {
            [r(l).panelTitle]: !0,
            [r(l).panelTitleDisabled]: o.disabled
          }])
        }, [
          k(v.$slots, "title", {}, () => [
            E(T(o.title), 1)
          ], !0)
        ], 2),
        t.arrowPosition === "end" && !o.arrowHide ? (c(), h("div", {
          key: 1,
          class: m({
            [r(l).panelArrowWrapper]: !0,
            [r(l).panelArrowWrapperDisabled]: o.disabled
          })
        }, [
          k(v.$slots, "arrow-end", {}, () => [
            (c(), h("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              "stroke-width": "1.5",
              stroke: "currentColor",
              class: m([r(l).panelArrowSize, { "rotate-0": !s.value, "rotate-180": s.value }])
            }, co, 2))
          ], !0)
        ], 2)) : C("", !0)
      ], 2),
      z(Oe, {
        name: "slide",
        onBeforeEnter: b,
        onEnter: p,
        onBeforeLeave: y,
        onLeave: w
      }, {
        default: I(() => [
          We($("div", {
            ref_key: "content",
            ref: n,
            class: m(["overflow-hidden", r(l).panelContent])
          }, [
            k(v.$slots, "default", {}, void 0, !0)
          ], 2), [
            [He, s.value]
          ])
        ]),
        _: 3
      })
    ], 2));
  }
}, Gs = /* @__PURE__ */ be(po, [["__scopeId", "data-v-e3242f54"]]);
const qs = {
  __name: "ExpandableGroup",
  props: {
    variant: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => {
      }
    },
    alwaysOpen: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const o = t, e = Q(!1), n = L("Expandable", o.variant, o.classes);
    return M("IS_EXPANDABLE_GROUP", 1), M("IS_ALWAYS_OPEN", o.alwaysOpen), M("EXPAND_ACTIVE", e), (s, l) => (c(), h("div", {
      class: m(["expandable-group", [r(n).group, r(n).groupTheme]])
    }, [
      k(s.$slots, "default")
    ], 2));
  }
}, fo = { key: 1 }, ho = ["src"], mo = /* @__PURE__ */ $("path", {
  "fill-rule": "evenodd",
  d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
  "clip-rule": "evenodd"
}, null, -1), go = [
  mo
], Us = {
  __name: "Avatar",
  props: {
    variant: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => {
      }
    },
    text: {
      type: String,
      default: null
    },
    img: {
      type: String,
      default: null
    },
    status: {
      type: String,
      default: null
    },
    hover: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const o = t, e = G(), n = L("Avatar", o.variant, o.classes), s = j("IS_AVATAR_GROUPED", 0);
    return (l, a) => {
      var d;
      return c(), h("div", {
        class: m(r(n).wrapper)
      }, [
        $("div", {
          class: m([
            r(n).content,
            r(n).contentSize,
            r(n).contentTheme,
            {
              [r(n).contentGrouped]: r(s),
              [r(n).contentHover]: o.hover
            }
          ])
        }, [
          o.text || ((d = r(e)) == null ? void 0 : d.default) ? k(l.$slots, "default", { key: 0 }, () => [
            E(T(o.text), 1)
          ]) : o.img ? (c(), h("div", fo, [
            $("img", {
              src: o.img,
              alt: ""
            }, null, 8, ho)
          ])) : (c(), h("div", {
            key: 2,
            class: m(r(n).defaultPlaceholderWrapper)
          }, [
            (c(), h("svg", {
              class: m(r(n).defaultPlaceholderIcon),
              fill: "currentColor",
              viewBox: "0 0 20 20",
              xmlns: "http://www.w3.org/2000/svg"
            }, go, 2))
          ], 2)),
          o.status !== null ? (c(), h("span", {
            key: 3,
            class: m([
              r(n).statusDotSizePosition,
              r(n).statusDotTheme,
              {
                [r(n).statusDotOnline]: o.status === "online",
                [r(n).statusDotBusy]: o.status === "busy",
                [r(n).statusDotAway]: o.status === "away",
                [r(n).statusDotOffline]: o.status !== "online" || o.status !== "busy" || o.status === "away"
              }
            ])
          }, null, 2)) : C("", !0)
        ], 2)
      ], 2);
    };
  }
}, Xs = {
  __name: "AvatarGroup",
  props: {
    variant: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(t) {
    const o = t, e = L("AvatarGroup", o.variant, o.classes);
    return M("IS_AVATAR_GROUPED", 1), (n, s) => (c(), h("div", {
      class: m(r(e).content)
    }, [
      k(n.$slots, "default")
    ], 2));
  }
}, yo = /* @__PURE__ */ $("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M6 18L18 6M6 6l12 12"
}, null, -1), vo = [
  yo
], Ys = {
  __name: "Badge",
  props: {
    variant: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => {
      }
    },
    text: {
      type: String,
      default: null
    },
    removable: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["remove"],
  setup(t, { emit: o }) {
    const e = t, n = L("Badge", e.variant, e.classes), s = (l) => {
      o("remove", l);
    };
    return (l, a) => (c(), h("div", {
      class: m([r(n).base, r(n).theme, r(n).themeColor])
    }, [
      $("div", null, [
        k(l.$slots, "default", {}, () => [
          E(T(e.text), 1)
        ])
      ]),
      e.removable ? (c(), h("button", {
        key: 0,
        type: "button",
        class: m([r(n).removeButton, r(n).removeButtonTheme]),
        onClick: a[0] || (a[0] = (d) => s(d))
      }, [
        k(l.$slots, "remove-icon", {}, () => [
          (c(), h("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: m(r(n).removeIcon)
          }, vo, 2))
        ])
      ], 2)) : C("", !0)
    ], 2));
  }
}, bo = /* @__PURE__ */ $("path", {
  d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
  fill: "currentColor"
}, null, -1), wo = /* @__PURE__ */ $("path", {
  d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
  fill: "currentFill"
}, null, -1), _o = [
  bo,
  wo
], xo = {
  __name: "LoaderSpinner",
  props: {
    variant: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => {
      }
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const o = t, e = L("LoaderSpinner", o.variant, o.classes);
    return (n, s) => (c(), h("svg", {
      "aria-hidden": "true",
      class: m([
        r(e).base,
        r(e).size,
        r(e).color,
        {
          [r(e).disabled]: o.disabled
        }
      ]),
      viewBox: "0 0 100 101",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, _o, 2));
  }
};
const $o = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-auto h-auto"
}, So = /* @__PURE__ */ $("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M4.5 15.75l7.5-7.5 7.5 7.5"
}, null, -1), Co = [
  So
], ko = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-auto h-auto"
}, To = /* @__PURE__ */ $("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
}, null, -1), Bo = [
  To
], _e = {
  __name: "Button",
  props: {
    variant: {
      type: String,
      default: null
    },
    variantLoader: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => {
      }
    },
    loading: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    target: {
      type: String,
      default: null
    },
    to: {
      type: String,
      default: null
    },
    href: {
      type: String,
      default: null
    },
    tag: {
      type: String,
      default: "button"
    },
    circle: {
      type: Boolean,
      default: !1
    },
    outlined: {
      type: Boolean,
      default: !1
    },
    ghost: {
      type: Boolean,
      default: !1
    },
    responsive: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const o = t, e = G(), n = j("IS_BUTTON_GROUP", 0), s = j("IS_BUTTON_GROUP_RESPONSIVE", 0), l = j("IS_DROPDOWN", 0), a = j("IS_DROPDOWN_OPEN", 0), d = j("IS_DROPDOWN_ARROW", 0), u = j("IS_BUTTON_GROUP_VARIANT", null), f = Q(o.variant);
    n && u && !o.variant && (f.value = u);
    const b = L("Button", f.value, o.classes), p = D(() => ({
      "btn relative inline-flex items-center justify-center": !0,
      "w-full h-full": o.responsive || s,
      [b.base]: !0,
      [b.baseSize]: !0,
      [b.baseSizeIconOnly]: !n && (o.circle && w.value || w.value),
      [b.normal]: !o.outlined && !o.ghost && !o.disabled,
      [b.outlined]: o.outlined && !o.disabled,
      [b.ghost]: o.ghost && !o.outlined && !o.disabled,
      [b.normalDisabled]: !o.outlined && !o.ghost && o.disabled,
      [b.outlinedDisabled]: o.outlined && !o.ghost && o.disabled,
      [b.ghostDisabled]: o.ghost && !o.outlined && o.disabled,
      [b.shadow]: !n && !o.outlined && !o.ghost,
      [b.disabled]: o.disabled,
      "rounded-full": o.circle,
      btn__loading: o.loading
    })), y = D(() => {
      let v = "";
      const x = {
        disabled: !1,
        target: null,
        href: null,
        to: null
      };
      return o.disabled ? v = "button" : (o.to ? (v = "RouterLink", x.to = o.to) : (v = o.href && "a" || o.tag || "div", v === "a" && o.href && (x.href = o.href)), o.target && (x.target = o.target)), v === "button" && o.disabled && (x.disabled = !0), { tag: v, data: x };
    }), w = D(() => !!(!e.default && e.icon));
    return (v, x) => (c(), V(je(y.value.tag), st(y.value.data, { class: p.value }), {
      default: I(() => {
        var _, g, i, S, O, A, P, N, F, U;
        return [
          o.loading || ((_ = r(e)) == null ? void 0 : _.icon) ? (c(), h("span", {
            key: 0,
            class: m({
              "flex items-center justify-center": !0,
              "mr-2": (g = r(e)) == null ? void 0 : g.default
            })
          }, [
            o.loading ? (c(), h("span", {
              key: 0,
              class: m({
                btn__loader: o.loading && !((i = r(e)) != null && i.default),
                "opacity-0": !o.loading
              })
            }, [
              k(v.$slots, "loader", {}, () => [
                z(xo, {
                  disabled: o.disabled,
                  variant: o.variantLoader
                }, null, 8, ["disabled", "variant"])
              ])
            ], 2)) : C("", !0),
            ((S = r(e)) == null ? void 0 : S.icon) && !((O = r(e)) != null && O.default) || !o.loading && ((A = r(e)) == null ? void 0 : A.icon) && ((P = r(e)) == null ? void 0 : P.default) ? (c(), h("span", {
              key: 1,
              class: m({
                "opacity-0": o.loading,
                [r(b).iconSize]: !0
              })
            }, [
              k(v.$slots, "icon")
            ], 2)) : C("", !0)
          ], 2)) : C("", !0),
          (N = r(e)) != null && N.default ? (c(), h("span", {
            key: 1,
            class: m({
              "opacity-0": o.loading && !((F = r(e)) != null && F.default)
            })
          }, [
            k(v.$slots, "default")
          ], 2)) : C("", !0),
          ((U = r(e)) == null ? void 0 : U.default) && (r(e)["icon-after"] || r(l) && r(d)) ? (c(), h("span", {
            key: 2,
            class: m(["ml-2", r(b).iconSize])
          }, [
            k(v.$slots, "icon-after", {}, () => [
              r(l) && r(d) && r(a) ? (c(), h("svg", $o, Co)) : r(l) && r(d) ? (c(), h("svg", ko, Bo)) : C("", !0)
            ])
          ], 2)) : C("", !0)
        ];
      }),
      _: 3
    }, 16, ["class"]));
  }
};
const Ks = {
  __name: "ButtonGroup",
  props: {
    variant: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => {
      }
    },
    responsive: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const o = t, e = L("ButtonGroup", o.variant, o.classes);
    return M("IS_BUTTON_GROUP", 1), M("IS_BUTTON_GROUP_RESPONSIVE", o.responsive), M("IS_BUTTON_GROUP_VARIANT", o.variant), (n, s) => (c(), h("div", {
      class: m({
        relative: !0,
        "w-full h-full": o.responsive,
        [r(e).content]: !0
      })
    }, [
      k(n.$slots, "default")
    ], 2));
  }
};
const Ao = {
  __name: "LoaderLinear",
  props: {
    variant: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => {
      }
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const o = t, e = L("LoaderLinear", o.variant, o.classes);
    return (n, s) => (c(), h("div", {
      class: m([
        r(e).base,
        r(e).size,
        {
          [r(e).emptyColor]: !o.disabled,
          [r(e).disabledEmptyColor]: o.disabled
        }
      ])
    }, [
      $("div", {
        class: m(["loader-linear", {
          [r(e).fillColor]: !o.disabled,
          [r(e).disabledFillColor]: o.disabled
        }])
      }, null, 2)
    ], 2));
  }
}, Rt = /* @__PURE__ */ be(Ao, [["__scopeId", "data-v-ab2ac7d3"]]), Zs = {
  __name: "Card",
  props: {
    variant: {
      type: String,
      default: null
    },
    variantLoader: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => {
      }
    },
    loading: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    title: {
      type: String,
      default: null
    },
    subtitle: {
      type: String,
      default: null
    },
    detachedHeader: {
      type: Boolean,
      default: !1
    },
    removePadding: {
      type: Boolean,
      default: !1
    },
    removeHeaderPadding: {
      type: Boolean,
      default: !1
    },
    removeBodyPadding: {
      type: Boolean,
      default: !1
    },
    removeFooterPadding: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const o = t, e = G(), n = L("Card", o.variant, o.classes);
    return (s, l) => (c(), h("div", {
      class: m(r(n).wrapper)
    }, [
      o.detachedHeader && (o.title || r(e).header || r(e).actions) ? (c(), h("div", {
        key: 0,
        class: m(r(n).detachedHeaderWrapper)
      }, [
        $("div", {
          class: m(r(n).headerTitleWrapper)
        }, [
          r(e).header ? k(s.$slots, "header", { key: 1 }) : (c(), h(W, { key: 0 }, [
            $("h1", {
              class: m(r(n).headerTitle)
            }, T(o.title), 3),
            $("div", {
              class: m(r(n).headerSubtitle)
            }, T(o.subtitle), 3)
          ], 64))
        ], 2),
        r(e).actions ? (c(), h("div", {
          key: 0,
          class: m(r(n).headerActions)
        }, [
          k(s.$slots, "actions")
        ], 2)) : C("", !0)
      ], 2)) : C("", !0),
      $("div", {
        class: m([r(n).contentWrapper, r(n).contentTheme])
      }, [
        o.disabled ? (c(), h("div", {
          key: 0,
          class: m(r(n).contentDisabled)
        }, null, 2)) : C("", !0),
        !o.detachedHeader && (o.title || r(e).header || r(e).actions) ? (c(), h("div", {
          key: 1,
          class: m([r(n).headerWrapper, r(n).headerTheme, { [r(n).padding]: !o.removeHeaderPadding && !o.removePadding }])
        }, [
          $("div", {
            class: m(r(n).headerTitleWrapper)
          }, [
            r(e).header ? k(s.$slots, "header", { key: 1 }) : (c(), h(W, { key: 0 }, [
              $("h1", {
                class: m(r(n).headerTitle)
              }, T(o.title), 3),
              $("div", {
                class: m(r(n).headerSubtitle)
              }, T(o.subtitle), 3)
            ], 64))
          ], 2),
          r(e).actions ? (c(), h("div", {
            key: 0,
            class: m(r(n).headerActions)
          }, [
            k(s.$slots, "actions")
          ], 2)) : C("", !0)
        ], 2)) : C("", !0),
        o.loading ? (c(), V(Rt, {
          key: 2,
          classes: { base: "inline-block w-full overflow-hidden relative -mt-1 z-10" },
          variant: t.variantLoader
        }, null, 8, ["variant"])) : C("", !0),
        $("div", {
          class: m([r(n).body, { [r(n).padding]: !o.removeBodyPadding && !o.removePadding }])
        }, [
          k(s.$slots, "default")
        ], 2),
        r(e).footer ? (c(), h("div", {
          key: 3,
          class: m([r(n).footerTheme, { [r(n).padding]: !o.removeFooterPadding && !o.removePadding }])
        }, [
          k(s.$slots, "footer")
        ], 2)) : C("", !0)
      ], 2)
    ], 2));
  }
};
function J(t) {
  return t.split("-")[1];
}
function at(t) {
  return t === "y" ? "height" : "width";
}
function te(t) {
  return t.split("-")[0];
}
function we(t) {
  return ["top", "bottom"].includes(te(t)) ? "x" : "y";
}
function ht(t, o, e) {
  let {
    reference: n,
    floating: s
  } = t;
  const l = n.x + n.width / 2 - s.width / 2, a = n.y + n.height / 2 - s.height / 2, d = we(o), u = at(d), f = n[u] / 2 - s[u] / 2, b = te(o), p = d === "x";
  let y;
  switch (b) {
    case "top":
      y = {
        x: l,
        y: n.y - s.height
      };
      break;
    case "bottom":
      y = {
        x: l,
        y: n.y + n.height
      };
      break;
    case "right":
      y = {
        x: n.x + n.width,
        y: a
      };
      break;
    case "left":
      y = {
        x: n.x - s.width,
        y: a
      };
      break;
    default:
      y = {
        x: n.x,
        y: n.y
      };
  }
  switch (J(o)) {
    case "start":
      y[d] -= f * (e && p ? -1 : 1);
      break;
    case "end":
      y[d] += f * (e && p ? -1 : 1);
      break;
  }
  return y;
}
const Po = async (t, o, e) => {
  const {
    placement: n = "bottom",
    strategy: s = "absolute",
    middleware: l = [],
    platform: a
  } = e, d = l.filter(Boolean), u = await (a.isRTL == null ? void 0 : a.isRTL(o));
  let f = await a.getElementRects({
    reference: t,
    floating: o,
    strategy: s
  }), {
    x: b,
    y: p
  } = ht(f, n, u), y = n, w = {}, v = 0;
  for (let x = 0; x < d.length; x++) {
    const {
      name: _,
      fn: g
    } = d[x], {
      x: i,
      y: S,
      data: O,
      reset: A
    } = await g({
      x: b,
      y: p,
      initialPlacement: n,
      placement: y,
      strategy: s,
      middlewareData: w,
      rects: f,
      platform: a,
      elements: {
        reference: t,
        floating: o
      }
    });
    if (b = i != null ? i : b, p = S != null ? S : p, w = {
      ...w,
      [_]: {
        ...w[_],
        ...O
      }
    }, A && v <= 50) {
      v++, typeof A == "object" && (A.placement && (y = A.placement), A.rects && (f = A.rects === !0 ? await a.getElementRects({
        reference: t,
        floating: o,
        strategy: s
      }) : A.rects), {
        x: b,
        y: p
      } = ht(f, y, u)), x = -1;
      continue;
    }
  }
  return {
    x: b,
    y: p,
    placement: y,
    strategy: s,
    middlewareData: w
  };
};
function ge(t, o) {
  return typeof t == "function" ? t(o) : t;
}
function Oo(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Et(t) {
  return typeof t != "number" ? Oo(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function xe(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
async function Ge(t, o) {
  var e;
  o === void 0 && (o = {});
  const {
    x: n,
    y: s,
    platform: l,
    rects: a,
    elements: d,
    strategy: u
  } = t, {
    boundary: f = "clippingAncestors",
    rootBoundary: b = "viewport",
    elementContext: p = "floating",
    altBoundary: y = !1,
    padding: w = 0
  } = ge(o, t), v = Et(w), _ = d[y ? p === "floating" ? "reference" : "floating" : p], g = xe(await l.getClippingRect({
    element: (e = await (l.isElement == null ? void 0 : l.isElement(_))) == null || e ? _ : _.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(d.floating)),
    boundary: f,
    rootBoundary: b,
    strategy: u
  })), i = p === "floating" ? {
    ...a.floating,
    x: n,
    y: s
  } : a.reference, S = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(d.floating)), O = await (l.isElement == null ? void 0 : l.isElement(S)) ? await (l.getScale == null ? void 0 : l.getScale(S)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, A = xe(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: i,
    offsetParent: S,
    strategy: u
  }) : i);
  return {
    top: (g.top - A.top + v.top) / O.y,
    bottom: (A.bottom - g.bottom + v.bottom) / O.y,
    left: (g.left - A.left + v.left) / O.x,
    right: (A.right - g.right + v.right) / O.x
  };
}
const Te = Math.min, pe = Math.max;
function et(t, o, e) {
  return pe(t, Te(o, e));
}
const Lo = (t) => ({
  name: "arrow",
  options: t,
  async fn(o) {
    const {
      x: e,
      y: n,
      placement: s,
      rects: l,
      platform: a,
      elements: d
    } = o, {
      element: u,
      padding: f = 0
    } = ge(t, o) || {};
    if (u == null)
      return {};
    const b = Et(f), p = {
      x: e,
      y: n
    }, y = we(s), w = at(y), v = await a.getDimensions(u), x = y === "y", _ = x ? "top" : "left", g = x ? "bottom" : "right", i = x ? "clientHeight" : "clientWidth", S = l.reference[w] + l.reference[y] - p[y] - l.floating[w], O = p[y] - l.reference[y], A = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
    let P = A ? A[i] : 0;
    (!P || !await (a.isElement == null ? void 0 : a.isElement(A))) && (P = d.floating[i] || l.floating[w]);
    const N = S / 2 - O / 2, F = P / 2 - v[w] / 2 - 1, U = Te(b[_], F), K = Te(b[g], F), R = U, q = P - v[w] - K, H = P / 2 - v[w] / 2 + N, X = et(R, H, q), se = J(s) != null && H != X && l.reference[w] / 2 - (H < R ? U : K) - v[w] / 2 < 0 ? H < R ? R - H : q - H : 0;
    return {
      [y]: p[y] - se,
      data: {
        [y]: X,
        centerOffset: H - X + se
      }
    };
  }
}), Do = ["top", "right", "bottom", "left"], mt = /* @__PURE__ */ Do.reduce((t, o) => t.concat(o, o + "-start", o + "-end"), []), Io = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ne(t) {
  return t.replace(/left|right|bottom|top/g, (o) => Io[o]);
}
function Vt(t, o, e) {
  e === void 0 && (e = !1);
  const n = J(t), s = we(t), l = at(s);
  let a = s === "x" ? n === (e ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return o.reference[l] > o.floating[l] && (a = Ne(a)), {
    main: a,
    cross: Ne(a)
  };
}
const No = {
  start: "end",
  end: "start"
};
function Re(t) {
  return t.replace(/start|end/g, (o) => No[o]);
}
function Ro(t, o, e) {
  return (t ? [...e.filter((s) => J(s) === t), ...e.filter((s) => J(s) !== t)] : e.filter((s) => te(s) === s)).filter((s) => t ? J(s) === t || (o ? Re(s) !== s : !1) : !0);
}
const Eo = function(t) {
  return t === void 0 && (t = {}), {
    name: "autoPlacement",
    options: t,
    async fn(o) {
      var e, n, s;
      const {
        rects: l,
        middlewareData: a,
        placement: d,
        platform: u,
        elements: f
      } = o, {
        crossAxis: b = !1,
        alignment: p,
        allowedPlacements: y = mt,
        autoAlignment: w = !0,
        ...v
      } = ge(t, o), x = p !== void 0 || y === mt ? Ro(p || null, w, y) : y, _ = await Ge(o, v), g = ((e = a.autoPlacement) == null ? void 0 : e.index) || 0, i = x[g];
      if (i == null)
        return {};
      const {
        main: S,
        cross: O
      } = Vt(i, l, await (u.isRTL == null ? void 0 : u.isRTL(f.floating)));
      if (d !== i)
        return {
          reset: {
            placement: x[0]
          }
        };
      const A = [_[te(i)], _[S], _[O]], P = [...((n = a.autoPlacement) == null ? void 0 : n.overflows) || [], {
        placement: i,
        overflows: A
      }], N = x[g + 1];
      if (N)
        return {
          data: {
            index: g + 1,
            overflows: P
          },
          reset: {
            placement: N
          }
        };
      const F = P.map((R) => {
        const q = J(R.placement);
        return [R.placement, q && b ? R.overflows.slice(0, 2).reduce((H, X) => H + X, 0) : R.overflows[0], R.overflows];
      }).sort((R, q) => R[1] - q[1]), K = ((s = F.filter((R) => R[2].slice(
        0,
        J(R[0]) ? 2 : 3
      ).every((q) => q <= 0))[0]) == null ? void 0 : s[0]) || F[0][0];
      return K !== d ? {
        data: {
          index: g + 1,
          overflows: P
        },
        reset: {
          placement: K
        }
      } : {};
    }
  };
};
function Vo(t) {
  const o = Ne(t);
  return [Re(t), o, Re(o)];
}
function zo(t, o, e) {
  const n = ["left", "right"], s = ["right", "left"], l = ["top", "bottom"], a = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return e ? o ? s : n : o ? n : s;
    case "left":
    case "right":
      return o ? l : a;
    default:
      return [];
  }
}
function Mo(t, o, e, n) {
  const s = J(t);
  let l = zo(te(t), e === "start", n);
  return s && (l = l.map((a) => a + "-" + s), o && (l = l.concat(l.map(Re)))), l;
}
const Wo = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(o) {
      var e;
      const {
        placement: n,
        middlewareData: s,
        rects: l,
        initialPlacement: a,
        platform: d,
        elements: u
      } = o, {
        mainAxis: f = !0,
        crossAxis: b = !0,
        fallbackPlacements: p,
        fallbackStrategy: y = "bestFit",
        fallbackAxisSideDirection: w = "none",
        flipAlignment: v = !0,
        ...x
      } = ge(t, o), _ = te(n), g = te(a) === a, i = await (d.isRTL == null ? void 0 : d.isRTL(u.floating)), S = p || (g || !v ? [Ne(a)] : Vo(a));
      !p && w !== "none" && S.push(...Mo(a, v, w, i));
      const O = [a, ...S], A = await Ge(o, x), P = [];
      let N = ((e = s.flip) == null ? void 0 : e.overflows) || [];
      if (f && P.push(A[_]), b) {
        const {
          main: R,
          cross: q
        } = Vt(n, l, i);
        P.push(A[R], A[q]);
      }
      if (N = [...N, {
        placement: n,
        overflows: P
      }], !P.every((R) => R <= 0)) {
        var F, U;
        const R = (((F = s.flip) == null ? void 0 : F.index) || 0) + 1, q = O[R];
        if (q)
          return {
            data: {
              index: R,
              overflows: N
            },
            reset: {
              placement: q
            }
          };
        let H = (U = N.filter((X) => X.overflows[0] <= 0).sort((X, ue) => X.overflows[1] - ue.overflows[1])[0]) == null ? void 0 : U.placement;
        if (!H)
          switch (y) {
            case "bestFit": {
              var K;
              const X = (K = N.map((ue) => [ue.placement, ue.overflows.filter((se) => se > 0).reduce((se, eo) => se + eo, 0)]).sort((ue, se) => ue[1] - se[1])[0]) == null ? void 0 : K[0];
              X && (H = X);
              break;
            }
            case "initialPlacement":
              H = a;
              break;
          }
        if (n !== H)
          return {
            reset: {
              placement: H
            }
          };
      }
      return {};
    }
  };
};
async function Ho(t, o) {
  const {
    placement: e,
    platform: n,
    elements: s
  } = t, l = await (n.isRTL == null ? void 0 : n.isRTL(s.floating)), a = te(e), d = J(e), u = we(e) === "x", f = ["left", "top"].includes(a) ? -1 : 1, b = l && u ? -1 : 1, p = ge(o, t);
  let {
    mainAxis: y,
    crossAxis: w,
    alignmentAxis: v
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...p
  };
  return d && typeof v == "number" && (w = d === "end" ? v * -1 : v), u ? {
    x: w * b,
    y: y * f
  } : {
    x: y * f,
    y: w * b
  };
}
const jo = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(o) {
      const {
        x: e,
        y: n
      } = o, s = await Ho(o, t);
      return {
        x: e + s.x,
        y: n + s.y,
        data: s
      };
    }
  };
};
function Fo(t) {
  return t === "x" ? "y" : "x";
}
const Go = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(o) {
      const {
        x: e,
        y: n,
        placement: s
      } = o, {
        mainAxis: l = !0,
        crossAxis: a = !1,
        limiter: d = {
          fn: (_) => {
            let {
              x: g,
              y: i
            } = _;
            return {
              x: g,
              y: i
            };
          }
        },
        ...u
      } = ge(t, o), f = {
        x: e,
        y: n
      }, b = await Ge(o, u), p = we(te(s)), y = Fo(p);
      let w = f[p], v = f[y];
      if (l) {
        const _ = p === "y" ? "top" : "left", g = p === "y" ? "bottom" : "right", i = w + b[_], S = w - b[g];
        w = et(i, w, S);
      }
      if (a) {
        const _ = y === "y" ? "top" : "left", g = y === "y" ? "bottom" : "right", i = v + b[_], S = v - b[g];
        v = et(i, v, S);
      }
      const x = d.fn({
        ...o,
        [p]: w,
        [y]: v
      });
      return {
        ...x,
        data: {
          x: x.x - e,
          y: x.y - n
        }
      };
    }
  };
}, qo = function(t) {
  return t === void 0 && (t = {}), {
    name: "size",
    options: t,
    async fn(o) {
      const {
        placement: e,
        rects: n,
        platform: s,
        elements: l
      } = o, {
        apply: a = () => {
        },
        ...d
      } = ge(t, o), u = await Ge(o, d), f = te(e), b = J(e), y = we(e) === "x", {
        width: w,
        height: v
      } = n.floating;
      let x, _;
      f === "top" || f === "bottom" ? (x = f, _ = b === (await (s.isRTL == null ? void 0 : s.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (_ = f, x = b === "end" ? "top" : "bottom");
      const g = v - u[x], i = w - u[_], S = !o.middlewareData.shift;
      let O = g, A = i;
      if (y) {
        const N = w - u.left - u.right;
        A = b || S ? Te(i, N) : N;
      } else {
        const N = v - u.top - u.bottom;
        O = b || S ? Te(g, N) : N;
      }
      if (S && !b) {
        const N = pe(u.left, 0), F = pe(u.right, 0), U = pe(u.top, 0), K = pe(u.bottom, 0);
        y ? A = w - 2 * (N !== 0 || F !== 0 ? N + F : pe(u.left, u.right)) : O = v - 2 * (U !== 0 || K !== 0 ? U + K : pe(u.top, u.bottom));
      }
      await a({
        ...o,
        availableWidth: A,
        availableHeight: O
      });
      const P = await s.getDimensions(l.floating);
      return w !== P.width || v !== P.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Y(t) {
  var o;
  return ((o = t.ownerDocument) == null ? void 0 : o.defaultView) || window;
}
function oe(t) {
  return Y(t).getComputedStyle(t);
}
const gt = Math.min, $e = Math.max, Ee = Math.round;
function zt(t) {
  const o = oe(t);
  let e = parseFloat(o.width), n = parseFloat(o.height);
  const s = t.offsetWidth, l = t.offsetHeight, a = Ee(e) !== s || Ee(n) !== l;
  return a && (e = s, n = l), {
    width: e,
    height: n,
    fallback: a
  };
}
function ae(t) {
  return Wt(t) ? (t.nodeName || "").toLowerCase() : "";
}
let Le;
function Mt() {
  if (Le)
    return Le;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (Le = t.brands.map((o) => o.brand + "/" + o.version).join(" "), Le) : navigator.userAgent;
}
function ne(t) {
  return t instanceof Y(t).HTMLElement;
}
function ie(t) {
  return t instanceof Y(t).Element;
}
function Wt(t) {
  return t instanceof Y(t).Node;
}
function yt(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const o = Y(t).ShadowRoot;
  return t instanceof o || t instanceof ShadowRoot;
}
function qe(t) {
  const {
    overflow: o,
    overflowX: e,
    overflowY: n,
    display: s
  } = oe(t);
  return /auto|scroll|overlay|hidden|clip/.test(o + n + e) && !["inline", "contents"].includes(s);
}
function Uo(t) {
  return ["table", "td", "th"].includes(ae(t));
}
function it(t) {
  const o = /firefox/i.test(Mt()), e = oe(t), n = e.backdropFilter || e.WebkitBackdropFilter;
  return e.transform !== "none" || e.perspective !== "none" || (n ? n !== "none" : !1) || o && e.willChange === "filter" || o && (e.filter ? e.filter !== "none" : !1) || ["transform", "perspective"].some((s) => e.willChange.includes(s)) || ["paint", "layout", "strict", "content"].some((s) => {
    const l = e.contain;
    return l != null ? l.includes(s) : !1;
  });
}
function Ht() {
  return !/^((?!chrome|android).)*safari/i.test(Mt());
}
function dt(t) {
  return ["html", "body", "#document"].includes(ae(t));
}
function jt(t) {
  return ie(t) ? t : t.contextElement;
}
const Ft = {
  x: 1,
  y: 1
};
function ye(t) {
  const o = jt(t);
  if (!ne(o))
    return Ft;
  const e = o.getBoundingClientRect(), {
    width: n,
    height: s,
    fallback: l
  } = zt(o);
  let a = (l ? Ee(e.width) : e.width) / n, d = (l ? Ee(e.height) : e.height) / s;
  return (!a || !Number.isFinite(a)) && (a = 1), (!d || !Number.isFinite(d)) && (d = 1), {
    x: a,
    y: d
  };
}
function Be(t, o, e, n) {
  var s, l;
  o === void 0 && (o = !1), e === void 0 && (e = !1);
  const a = t.getBoundingClientRect(), d = jt(t);
  let u = Ft;
  o && (n ? ie(n) && (u = ye(n)) : u = ye(t));
  const f = d ? Y(d) : window, b = !Ht() && e;
  let p = (a.left + (b && ((s = f.visualViewport) == null ? void 0 : s.offsetLeft) || 0)) / u.x, y = (a.top + (b && ((l = f.visualViewport) == null ? void 0 : l.offsetTop) || 0)) / u.y, w = a.width / u.x, v = a.height / u.y;
  if (d) {
    const x = Y(d), _ = n && ie(n) ? Y(n) : n;
    let g = x.frameElement;
    for (; g && n && _ !== x; ) {
      const i = ye(g), S = g.getBoundingClientRect(), O = getComputedStyle(g);
      S.x += (g.clientLeft + parseFloat(O.paddingLeft)) * i.x, S.y += (g.clientTop + parseFloat(O.paddingTop)) * i.y, p *= i.x, y *= i.y, w *= i.x, v *= i.y, p += S.x, y += S.y, g = Y(g).frameElement;
    }
  }
  return {
    width: w,
    height: v,
    top: y,
    right: p + w,
    bottom: y + v,
    left: p,
    x: p,
    y
  };
}
function de(t) {
  return ((Wt(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function Ue(t) {
  return ie(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function Xo(t) {
  let {
    rect: o,
    offsetParent: e,
    strategy: n
  } = t;
  const s = ne(e), l = de(e);
  if (e === l)
    return o;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = {
    x: 1,
    y: 1
  };
  const u = {
    x: 0,
    y: 0
  };
  if ((s || !s && n !== "fixed") && ((ae(e) !== "body" || qe(l)) && (a = Ue(e)), ne(e))) {
    const f = Be(e);
    d = ye(e), u.x = f.x + e.clientLeft, u.y = f.y + e.clientTop;
  }
  return {
    width: o.width * d.x,
    height: o.height * d.y,
    x: o.x * d.x - a.scrollLeft * d.x + u.x,
    y: o.y * d.y - a.scrollTop * d.y + u.y
  };
}
function Gt(t) {
  return Be(de(t)).left + Ue(t).scrollLeft;
}
function Yo(t) {
  const o = de(t), e = Ue(t), n = t.ownerDocument.body, s = $e(o.scrollWidth, o.clientWidth, n.scrollWidth, n.clientWidth), l = $e(o.scrollHeight, o.clientHeight, n.scrollHeight, n.clientHeight);
  let a = -e.scrollLeft + Gt(t);
  const d = -e.scrollTop;
  return oe(n).direction === "rtl" && (a += $e(o.clientWidth, n.clientWidth) - s), {
    width: s,
    height: l,
    x: a,
    y: d
  };
}
function Ae(t) {
  if (ae(t) === "html")
    return t;
  const o = t.assignedSlot || t.parentNode || yt(t) && t.host || de(t);
  return yt(o) ? o.host : o;
}
function qt(t) {
  const o = Ae(t);
  return dt(o) ? o.ownerDocument.body : ne(o) && qe(o) ? o : qt(o);
}
function Ve(t, o) {
  var e;
  o === void 0 && (o = []);
  const n = qt(t), s = n === ((e = t.ownerDocument) == null ? void 0 : e.body), l = Y(n);
  return s ? o.concat(l, l.visualViewport || [], qe(n) ? n : []) : o.concat(n, Ve(n));
}
function Ko(t, o) {
  const e = Y(t), n = de(t), s = e.visualViewport;
  let l = n.clientWidth, a = n.clientHeight, d = 0, u = 0;
  if (s) {
    l = s.width, a = s.height;
    const f = Ht();
    (f || !f && o === "fixed") && (d = s.offsetLeft, u = s.offsetTop);
  }
  return {
    width: l,
    height: a,
    x: d,
    y: u
  };
}
function Zo(t, o) {
  const e = Be(t, !0, o === "fixed"), n = e.top + t.clientTop, s = e.left + t.clientLeft, l = ne(t) ? ye(t) : {
    x: 1,
    y: 1
  }, a = t.clientWidth * l.x, d = t.clientHeight * l.y, u = s * l.x, f = n * l.y;
  return {
    width: a,
    height: d,
    x: u,
    y: f
  };
}
function vt(t, o, e) {
  return o === "viewport" ? xe(Ko(t, e)) : ie(o) ? xe(Zo(o, e)) : xe(Yo(de(t)));
}
function Jo(t, o) {
  const e = o.get(t);
  if (e)
    return e;
  let n = Ve(t).filter((d) => ie(d) && ae(d) !== "body"), s = null;
  const l = oe(t).position === "fixed";
  let a = l ? Ae(t) : t;
  for (; ie(a) && !dt(a); ) {
    const d = oe(a), u = it(a);
    (l ? !u && !s : !u && d.position === "static" && !!s && ["absolute", "fixed"].includes(s.position)) ? n = n.filter((b) => b !== a) : s = d, a = Ae(a);
  }
  return o.set(t, n), n;
}
function Qo(t) {
  let {
    element: o,
    boundary: e,
    rootBoundary: n,
    strategy: s
  } = t;
  const a = [...e === "clippingAncestors" ? Jo(o, this._c) : [].concat(e), n], d = a[0], u = a.reduce((f, b) => {
    const p = vt(o, b, s);
    return f.top = $e(p.top, f.top), f.right = gt(p.right, f.right), f.bottom = gt(p.bottom, f.bottom), f.left = $e(p.left, f.left), f;
  }, vt(o, d, s));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function en(t) {
  return ne(t) ? zt(t) : t.getBoundingClientRect();
}
function bt(t) {
  return !ne(t) || oe(t).position === "fixed" ? null : t.offsetParent;
}
function tn(t) {
  let o = Ae(t);
  for (; ne(o) && !dt(o); ) {
    if (it(o))
      return o;
    o = Ae(o);
  }
  return null;
}
function wt(t) {
  const o = Y(t);
  let e = bt(t);
  for (; e && Uo(e) && oe(e).position === "static"; )
    e = bt(e);
  return e && (ae(e) === "html" || ae(e) === "body" && oe(e).position === "static" && !it(e)) ? o : e || tn(t) || o;
}
function on(t, o, e) {
  const n = ne(o), s = de(o), l = Be(t, !0, e === "fixed", o);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const d = {
    x: 0,
    y: 0
  };
  if (n || !n && e !== "fixed")
    if ((ae(o) !== "body" || qe(s)) && (a = Ue(o)), ne(o)) {
      const u = Be(o, !0);
      d.x = u.x + o.clientLeft, d.y = u.y + o.clientTop;
    } else
      s && (d.x = Gt(s));
  return {
    x: l.left + a.scrollLeft - d.x,
    y: l.top + a.scrollTop - d.y,
    width: l.width,
    height: l.height
  };
}
const nn = {
  getClippingRect: Qo,
  convertOffsetParentRelativeRectToViewportRelativeRect: Xo,
  isElement: ie,
  getDimensions: en,
  getOffsetParent: wt,
  getDocumentElement: de,
  getScale: ye,
  async getElementRects(t) {
    let {
      reference: o,
      floating: e,
      strategy: n
    } = t;
    const s = this.getOffsetParent || wt, l = this.getDimensions;
    return {
      reference: on(o, await s(e), n),
      floating: {
        x: 0,
        y: 0,
        ...await l(e)
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => oe(t).direction === "rtl"
}, sn = (t, o, e) => {
  const n = /* @__PURE__ */ new Map(), s = {
    platform: nn,
    ...e
  }, l = {
    ...s.platform,
    _c: n
  };
  return Po(t, o, {
    ...s,
    platform: l
  });
}, he = {
  disabled: !1,
  distance: 5,
  skidding: 0,
  container: "body",
  boundary: void 0,
  instantMove: !1,
  disposeTimeout: 5e3,
  popperTriggers: [],
  strategy: "absolute",
  preventOverflow: !0,
  flip: !0,
  shift: !0,
  overflowPadding: 0,
  arrowPadding: 0,
  arrowOverflow: !0,
  themes: {
    tooltip: {
      placement: "top",
      triggers: ["hover", "focus", "touch"],
      hideTriggers: (t) => [...t, "click"],
      delay: {
        show: 200,
        hide: 0
      },
      handleResize: !1,
      html: !1,
      loadingContent: "..."
    },
    dropdown: {
      placement: "bottom",
      triggers: ["click"],
      delay: 0,
      handleResize: !0,
      autoHide: !0
    },
    menu: {
      $extend: "dropdown",
      triggers: ["hover", "focus"],
      popperTriggers: ["hover", "focus"],
      delay: {
        show: 0,
        hide: 400
      }
    }
  }
};
function tt(t, o) {
  let e = he.themes[t] || {}, n;
  do
    n = e[o], typeof n > "u" ? e.$extend ? e = he.themes[e.$extend] || {} : (e = null, n = he[o]) : e = null;
  while (e);
  return n;
}
function rn(t) {
  const o = [t];
  let e = he.themes[t] || {};
  do
    e.$extend && !e.$resetCss ? (o.push(e.$extend), e = he.themes[e.$extend] || {}) : e = null;
  while (e);
  return o.map((n) => `v-popper--theme-${n}`);
}
function _t(t) {
  const o = [t];
  let e = he.themes[t] || {};
  do
    e.$extend ? (o.push(e.$extend), e = he.themes[e.$extend] || {}) : e = null;
  while (e);
  return o;
}
let ve = !1;
if (typeof window < "u") {
  ve = !1;
  try {
    const t = Object.defineProperty({}, "passive", {
      get() {
        ve = !0;
      }
    });
    window.addEventListener("test", null, t);
  } catch {
  }
}
let Ut = !1;
typeof window < "u" && typeof navigator < "u" && (Ut = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const ln = ["auto", "top", "bottom", "left", "right"].reduce((t, o) => t.concat([
  o,
  `${o}-start`,
  `${o}-end`
]), []), xt = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart",
  pointer: "pointerdown"
}, $t = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend",
  pointer: "pointerup"
};
function St(t, o) {
  const e = t.indexOf(o);
  e !== -1 && t.splice(e, 1);
}
function Ye() {
  return new Promise((t) => requestAnimationFrame(() => {
    requestAnimationFrame(t);
  }));
}
const Z = [];
let ce = null;
const Ct = {};
function kt(t) {
  let o = Ct[t];
  return o || (o = Ct[t] = []), o;
}
let ot = function() {
};
typeof window < "u" && (ot = window.Element);
function B(t) {
  return function(o) {
    return tt(o.theme, t);
  };
}
const Ke = "__floating-vue__popper", Xt = () => Fe({
  name: "VPopper",
  provide() {
    return {
      [Ke]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [Ke]: { default: null }
  },
  props: {
    theme: {
      type: String,
      required: !0
    },
    targetNodes: {
      type: Function,
      required: !0
    },
    referenceNode: {
      type: Function,
      default: null
    },
    popperNode: {
      type: Function,
      required: !0
    },
    shown: {
      type: Boolean,
      default: !1
    },
    showGroup: {
      type: String,
      default: null
    },
    ariaId: {
      default: null
    },
    disabled: {
      type: Boolean,
      default: B("disabled")
    },
    positioningDisabled: {
      type: Boolean,
      default: B("positioningDisabled")
    },
    placement: {
      type: String,
      default: B("placement"),
      validator: (t) => ln.includes(t)
    },
    delay: {
      type: [String, Number, Object],
      default: B("delay")
    },
    distance: {
      type: [Number, String],
      default: B("distance")
    },
    skidding: {
      type: [Number, String],
      default: B("skidding")
    },
    triggers: {
      type: Array,
      default: B("triggers")
    },
    showTriggers: {
      type: [Array, Function],
      default: B("showTriggers")
    },
    hideTriggers: {
      type: [Array, Function],
      default: B("hideTriggers")
    },
    popperTriggers: {
      type: Array,
      default: B("popperTriggers")
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: B("popperShowTriggers")
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: B("popperHideTriggers")
    },
    container: {
      type: [String, Object, ot, Boolean],
      default: B("container")
    },
    boundary: {
      type: [String, ot],
      default: B("boundary")
    },
    strategy: {
      type: String,
      validator: (t) => ["absolute", "fixed"].includes(t),
      default: B("strategy")
    },
    autoHide: {
      type: [Boolean, Function],
      default: B("autoHide")
    },
    handleResize: {
      type: Boolean,
      default: B("handleResize")
    },
    instantMove: {
      type: Boolean,
      default: B("instantMove")
    },
    eagerMount: {
      type: Boolean,
      default: B("eagerMount")
    },
    popperClass: {
      type: [String, Array, Object],
      default: B("popperClass")
    },
    computeTransformOrigin: {
      type: Boolean,
      default: B("computeTransformOrigin")
    },
    autoMinSize: {
      type: Boolean,
      default: B("autoMinSize")
    },
    autoSize: {
      type: [Boolean, String],
      default: B("autoSize")
    },
    autoMaxSize: {
      type: Boolean,
      default: B("autoMaxSize")
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: B("autoBoundaryMaxSize")
    },
    preventOverflow: {
      type: Boolean,
      default: B("preventOverflow")
    },
    overflowPadding: {
      type: [Number, String],
      default: B("overflowPadding")
    },
    arrowPadding: {
      type: [Number, String],
      default: B("arrowPadding")
    },
    arrowOverflow: {
      type: Boolean,
      default: B("arrowOverflow")
    },
    flip: {
      type: Boolean,
      default: B("flip")
    },
    shift: {
      type: Boolean,
      default: B("shift")
    },
    shiftCrossAxis: {
      type: Boolean,
      default: B("shiftCrossAxis")
    },
    noAutoFocus: {
      type: Boolean,
      default: B("noAutoFocus")
    },
    disposeTimeout: {
      type: Number,
      default: B("disposeTimeout")
    }
  },
  emits: [
    "show",
    "hide",
    "update:shown",
    "apply-show",
    "apply-hide",
    "close-group",
    "close-directive",
    "auto-hide",
    "resize",
    "dispose"
  ],
  data() {
    return {
      isShown: !1,
      isMounted: !1,
      skipTransition: !1,
      classes: {
        showFrom: !1,
        showTo: !1,
        hideFrom: !1,
        hideTo: !0
      },
      result: {
        x: 0,
        y: 0,
        placement: "",
        strategy: this.strategy,
        arrow: {
          x: 0,
          y: 0,
          centerOffset: 0
        },
        transformOrigin: null
      },
      shownChildren: /* @__PURE__ */ new Set(),
      lastAutoHide: !0
    };
  },
  computed: {
    popperId() {
      return this.ariaId != null ? this.ariaId : this.randomId;
    },
    shouldMountContent() {
      return this.eagerMount || this.isMounted;
    },
    slotData() {
      return {
        popperId: this.popperId,
        isShown: this.isShown,
        shouldMountContent: this.shouldMountContent,
        skipTransition: this.skipTransition,
        autoHide: typeof this.autoHide == "function" ? this.lastAutoHide : this.autoHide,
        show: this.show,
        hide: this.hide,
        handleResize: this.handleResize,
        onResize: this.onResize,
        classes: {
          ...this.classes,
          popperClass: this.popperClass
        },
        result: this.positioningDisabled ? null : this.result,
        attrs: this.$attrs
      };
    },
    parentPopper() {
      var t;
      return (t = this[Ke]) == null ? void 0 : t.parentPopper;
    },
    hasPopperShowTriggerHover() {
      var t, o;
      return ((t = this.popperTriggers) == null ? void 0 : t.includes("hover")) || ((o = this.popperShowTriggers) == null ? void 0 : o.includes("hover"));
    }
  },
  watch: {
    shown: "$_autoShowHide",
    disabled(t) {
      t ? this.dispose() : this.init();
    },
    async container() {
      this.isShown && (this.$_ensureTeleport(), await this.$_computePosition());
    },
    ...[
      "triggers",
      "positioningDisabled"
    ].reduce((t, o) => (t[o] = "$_refreshListeners", t), {}),
    ...[
      "placement",
      "distance",
      "skidding",
      "boundary",
      "strategy",
      "overflowPadding",
      "arrowPadding",
      "preventOverflow",
      "shift",
      "shiftCrossAxis",
      "flip"
    ].reduce((t, o) => (t[o] = "$_computePosition", t), {})
  },
  created() {
    this.$_isDisposed = !0, this.randomId = `popper_${[Math.random(), Date.now()].map((t) => t.toString(36).substring(2, 10)).join("_")}`, this.autoMinSize && console.warn('[floating-vue] `autoMinSize` option is deprecated. Use `autoSize="min"` instead.'), this.autoMaxSize && console.warn("[floating-vue] `autoMaxSize` option is deprecated. Use `autoBoundaryMaxSize` instead.");
  },
  mounted() {
    this.init(), this.$_detachPopperNode();
  },
  activated() {
    this.$_autoShowHide();
  },
  deactivated() {
    this.hide();
  },
  beforeUnmount() {
    this.dispose();
  },
  methods: {
    show({ event: t = null, skipDelay: o = !1, force: e = !1 } = {}) {
      var n, s;
      (n = this.parentPopper) != null && n.lockedChild && this.parentPopper.lockedChild !== this || (this.$_pendingHide = !1, (e || !this.disabled) && (((s = this.parentPopper) == null ? void 0 : s.lockedChild) === this && (this.parentPopper.lockedChild = null), this.$_scheduleShow(t, o), this.$emit("show"), this.$_showFrameLocked = !0, requestAnimationFrame(() => {
        this.$_showFrameLocked = !1;
      })), this.$emit("update:shown", !0));
    },
    hide({ event: t = null, skipDelay: o = !1 } = {}) {
      var e;
      if (!this.$_hideInProgress) {
        if (this.shownChildren.size > 0) {
          this.$_pendingHide = !0;
          return;
        }
        if (this.hasPopperShowTriggerHover && this.$_isAimingPopper()) {
          this.parentPopper && (this.parentPopper.lockedChild = this, clearTimeout(this.parentPopper.lockedChildTimer), this.parentPopper.lockedChildTimer = setTimeout(() => {
            this.parentPopper.lockedChild === this && (this.parentPopper.lockedChild.hide({ skipDelay: o }), this.parentPopper.lockedChild = null);
          }, 1e3));
          return;
        }
        ((e = this.parentPopper) == null ? void 0 : e.lockedChild) === this && (this.parentPopper.lockedChild = null), this.$_pendingHide = !1, this.$_scheduleHide(t, o), this.$emit("hide"), this.$emit("update:shown", !1);
      }
    },
    init() {
      var o;
      var t;
      this.$_isDisposed && (this.$_isDisposed = !1, this.isMounted = !1, this.$_events = [], this.$_preventShow = !1, this.$_referenceNode = (o = (t = this.referenceNode) == null ? void 0 : t.call(this)) != null ? o : this.$el, this.$_targetNodes = this.targetNodes().filter((e) => e.nodeType === e.ELEMENT_NODE), this.$_popperNode = this.popperNode(), this.$_innerNode = this.$_popperNode.querySelector(".v-popper__inner"), this.$_arrowNode = this.$_popperNode.querySelector(".v-popper__arrow-container"), this.$_swapTargetAttrs("title", "data-original-title"), this.$_detachPopperNode(), this.triggers.length && this.$_addEventListeners(), this.shown && this.show());
    },
    dispose() {
      this.$_isDisposed || (this.$_isDisposed = !0, this.$_removeEventListeners(), this.hide({ skipDelay: !0 }), this.$_detachPopperNode(), this.isMounted = !1, this.isShown = !1, this.$_updateParentShownChildren(!1), this.$_swapTargetAttrs("data-original-title", "title"), this.$emit("dispose"));
    },
    async onResize() {
      this.isShown && (await this.$_computePosition(), this.$emit("resize"));
    },
    async $_computePosition() {
      var n;
      if (this.$_isDisposed || this.positioningDisabled)
        return;
      const t = {
        strategy: this.strategy,
        middleware: []
      };
      (this.distance || this.skidding) && t.middleware.push(jo({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const o = this.placement.startsWith("auto");
      if (o ? t.middleware.push(Eo({
        alignment: (n = this.placement.split("-")[1]) != null ? n : ""
      })) : t.placement = this.placement, this.preventOverflow && (this.shift && t.middleware.push(Go({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !o && this.flip && t.middleware.push(Wo({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), t.middleware.push(Lo({
        element: this.$_arrowNode,
        padding: this.arrowPadding
      })), this.arrowOverflow && t.middleware.push({
        name: "arrowOverflow",
        fn: ({ placement: s, rects: l, middlewareData: a }) => {
          let d;
          const { centerOffset: u } = a.arrow;
          return s.startsWith("top") || s.startsWith("bottom") ? d = Math.abs(u) > l.reference.width / 2 : d = Math.abs(u) > l.reference.height / 2, {
            data: {
              overflow: d
            }
          };
        }
      }), this.autoMinSize || this.autoSize) {
        const s = this.autoSize ? this.autoSize : this.autoMinSize ? "min" : null;
        t.middleware.push({
          name: "autoSize",
          fn: ({ rects: l, placement: a, middlewareData: d }) => {
            var u;
            if ((u = d.autoSize) != null && u.skip)
              return {};
            let f, b;
            return a.startsWith("top") || a.startsWith("bottom") ? f = l.reference.width : b = l.reference.height, this.$_innerNode.style[s === "min" ? "minWidth" : s === "max" ? "maxWidth" : "width"] = f != null ? `${f}px` : null, this.$_innerNode.style[s === "min" ? "minHeight" : s === "max" ? "maxHeight" : "height"] = b != null ? `${b}px` : null, {
              data: {
                skip: !0
              },
              reset: {
                rects: !0
              }
            };
          }
        });
      }
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, t.middleware.push(qo({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: s, availableHeight: l }) => {
          this.$_innerNode.style.maxWidth = s != null ? `${s}px` : null, this.$_innerNode.style.maxHeight = l != null ? `${l}px` : null;
        }
      })));
      const e = await sn(this.$_referenceNode, this.$_popperNode, t);
      Object.assign(this.result, {
        x: e.x,
        y: e.y,
        placement: e.placement,
        strategy: e.strategy,
        arrow: {
          ...e.middlewareData.arrow,
          ...e.middlewareData.arrowOverflow
        }
      });
    },
    $_scheduleShow(t = null, o = !1) {
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), ce && this.instantMove && ce.instantMove && ce !== this.parentPopper) {
        ce.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      o ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(t = null, o = !1) {
      if (this.shownChildren.size > 0) {
        this.$_pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (ce = this), o ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(t) {
      const o = this.delay;
      return parseInt(o && o[t] || o || 0);
    },
    async $_applyShow(t = !1) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = t, !this.isShown && (this.$_ensureTeleport(), await Ye(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...Ve(this.$_referenceNode),
        ...Ve(this.$_popperNode)
      ], "scroll", () => {
        this.$_computePosition();
      }));
    },
    async $_applyShowEffect() {
      if (this.$_hideInProgress)
        return;
      if (this.computeTransformOrigin) {
        const o = this.$_referenceNode.getBoundingClientRect(), e = this.$_popperNode.querySelector(".v-popper__wrapper"), n = e.parentNode.getBoundingClientRect(), s = o.x + o.width / 2 - (n.left + e.offsetLeft), l = o.y + o.height / 2 - (n.top + e.offsetTop);
        this.result.transformOrigin = `${s}px ${l}px`;
      }
      this.isShown = !0, this.$_applyAttrsToTarget({
        "aria-describedby": this.popperId,
        "data-popper-shown": ""
      });
      const t = this.showGroup;
      if (t) {
        let o;
        for (let e = 0; e < Z.length; e++)
          o = Z[e], o.showGroup !== t && (o.hide(), o.$emit("close-group"));
      }
      Z.push(this), document.body.classList.add("v-popper--some-open");
      for (const o of _t(this.theme))
        kt(o).push(this), document.body.classList.add(`v-popper--some-open--${o}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await Ye(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(t = !1) {
      if (this.shownChildren.size > 0) {
        this.$_pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = t, St(Z, this), Z.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const e of _t(this.theme)) {
        const n = kt(e);
        St(n, this), n.length === 0 && document.body.classList.remove(`v-popper--some-open--${e}`);
      }
      ce === this && (ce = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const o = this.disposeTimeout;
      o !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, o)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await Ye(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
    },
    $_autoShowHide() {
      this.shown ? this.show() : this.hide();
    },
    $_ensureTeleport() {
      if (this.$_isDisposed)
        return;
      let t = this.container;
      if (typeof t == "string" ? t = window.document.querySelector(t) : t === !1 && (t = this.$_targetNodes[0].parentNode), !t)
        throw new Error("No container for popover: " + this.container);
      t.appendChild(this.$_popperNode), this.isMounted = !0;
    },
    $_addEventListeners() {
      const t = (e) => {
        this.isShown && !this.$_hideInProgress || (e.usedByTooltip = !0, !this.$_preventShow && this.show({ event: e }));
      };
      this.$_registerTriggerListeners(this.$_targetNodes, xt, this.triggers, this.showTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], xt, this.popperTriggers, this.popperShowTriggers, t);
      const o = (e) => {
        e.usedByTooltip || this.hide({ event: e });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, $t, this.triggers, this.hideTriggers, o), this.$_registerTriggerListeners([this.$_popperNode], $t, this.popperTriggers, this.popperHideTriggers, o);
    },
    $_registerEventListeners(t, o, e) {
      this.$_events.push({ targetNodes: t, eventType: o, handler: e }), t.forEach((n) => n.addEventListener(o, e, ve ? {
        passive: !0
      } : void 0));
    },
    $_registerTriggerListeners(t, o, e, n, s) {
      let l = e;
      n != null && (l = typeof n == "function" ? n(l) : n), l.forEach((a) => {
        const d = o[a];
        d && this.$_registerEventListeners(t, d, s);
      });
    },
    $_removeEventListeners(t) {
      const o = [];
      this.$_events.forEach((e) => {
        const { targetNodes: n, eventType: s, handler: l } = e;
        !t || t === s ? n.forEach((a) => a.removeEventListener(s, l)) : o.push(e);
      }), this.$_events = o;
    },
    $_refreshListeners() {
      this.$_isDisposed || (this.$_removeEventListeners(), this.$_addEventListeners());
    },
    $_handleGlobalClose(t, o = !1) {
      this.$_showFrameLocked || (this.hide({ event: t }), t.closePopover ? this.$emit("close-directive") : this.$emit("auto-hide"), o && (this.$_preventShow = !0, setTimeout(() => {
        this.$_preventShow = !1;
      }, 300)));
    },
    $_detachPopperNode() {
      this.$_popperNode.parentNode && this.$_popperNode.parentNode.removeChild(this.$_popperNode);
    },
    $_swapTargetAttrs(t, o) {
      for (const e of this.$_targetNodes) {
        const n = e.getAttribute(t);
        n && (e.removeAttribute(t), e.setAttribute(o, n));
      }
    },
    $_applyAttrsToTarget(t) {
      for (const o of this.$_targetNodes)
        for (const e in t) {
          const n = t[e];
          n == null ? o.removeAttribute(e) : o.setAttribute(e, n);
        }
    },
    $_updateParentShownChildren(t) {
      let o = this.parentPopper;
      for (; o; )
        t ? o.shownChildren.add(this.randomId) : (o.shownChildren.delete(this.randomId), o.$_pendingHide && o.hide()), o = o.parentPopper;
    },
    $_isAimingPopper() {
      const t = this.$_referenceNode.getBoundingClientRect();
      if (Se >= t.left && Se <= t.right && Ce >= t.top && Ce <= t.bottom) {
        const o = this.$_popperNode.getBoundingClientRect(), e = Se - re, n = Ce - le, s = o.left + o.width / 2 - re + (o.top + o.height / 2) - le + o.width + o.height, l = re + e * s, a = le + n * s;
        return De(re, le, l, a, o.left, o.top, o.left, o.bottom) || De(re, le, l, a, o.left, o.top, o.right, o.top) || De(re, le, l, a, o.right, o.top, o.right, o.bottom) || De(re, le, l, a, o.left, o.bottom, o.right, o.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
typeof document < "u" && typeof window < "u" && (Ut ? (document.addEventListener("touchstart", Tt, ve ? {
  passive: !0,
  capture: !0
} : !0), document.addEventListener("touchend", dn, ve ? {
  passive: !0,
  capture: !0
} : !0)) : (window.addEventListener("mousedown", Tt, !0), window.addEventListener("click", an, !0)), window.addEventListener("resize", pn));
function Tt(t) {
  for (let o = 0; o < Z.length; o++) {
    const e = Z[o];
    try {
      const n = e.popperNode();
      e.$_mouseDownContains = n.contains(t.target);
    } catch {
    }
  }
}
function an(t) {
  Yt(t);
}
function dn(t) {
  Yt(t, !0);
}
function Yt(t, o = !1) {
  const e = {};
  for (let n = Z.length - 1; n >= 0; n--) {
    const s = Z[n];
    try {
      const l = s.$_containsGlobalTarget = un(s, t);
      s.$_pendingHide = !1, requestAnimationFrame(() => {
        if (s.$_pendingHide = !1, !e[s.randomId] && Bt(s, l, t)) {
          if (s.$_handleGlobalClose(t, o), !t.closeAllPopover && t.closePopover && l) {
            let d = s.parentPopper;
            for (; d; )
              e[d.randomId] = !0, d = d.parentPopper;
            return;
          }
          let a = s.parentPopper;
          for (; a && Bt(a, a.$_containsGlobalTarget, t); )
            a.$_handleGlobalClose(t, o), a = a.parentPopper;
        }
      });
    } catch {
    }
  }
}
function un(t, o) {
  const e = t.popperNode();
  return t.$_mouseDownContains || e.contains(o.target);
}
function Bt(t, o, e) {
  return e.closeAllPopover || e.closePopover && o || cn(t, e) && !o;
}
function cn(t, o) {
  if (typeof t.autoHide == "function") {
    const e = t.autoHide(o);
    return t.lastAutoHide = e, e;
  }
  return t.autoHide;
}
function pn(t) {
  for (let o = 0; o < Z.length; o++)
    Z[o].$_computePosition(t);
}
let re = 0, le = 0, Se = 0, Ce = 0;
typeof window < "u" && window.addEventListener("mousemove", (t) => {
  re = Se, le = Ce, Se = t.clientX, Ce = t.clientY;
}, ve ? {
  passive: !0
} : void 0);
function De(t, o, e, n, s, l, a, d) {
  const u = ((a - s) * (o - l) - (d - l) * (t - s)) / ((d - l) * (e - t) - (a - s) * (n - o)), f = ((e - t) * (o - l) - (n - o) * (t - s)) / ((d - l) * (e - t) - (a - s) * (n - o));
  return u >= 0 && u <= 1 && f >= 0 && f <= 1;
}
const fn = {
  extends: Xt()
}, ut = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [n, s] of o)
    e[n] = s;
  return e;
};
function hn(t, o, e, n, s, l) {
  return c(), h("div", {
    ref: "reference",
    class: m(["v-popper", {
      "v-popper--shown": t.slotData.isShown
    }])
  }, [
    k(t.$slots, "default", Lt(Dt(t.slotData)))
  ], 2);
}
const mn = /* @__PURE__ */ ut(fn, [["render", hn]]);
function gn() {
  var t = window.navigator.userAgent, o = t.indexOf("MSIE ");
  if (o > 0)
    return parseInt(t.substring(o + 5, t.indexOf(".", o)), 10);
  var e = t.indexOf("Trident/");
  if (e > 0) {
    var n = t.indexOf("rv:");
    return parseInt(t.substring(n + 3, t.indexOf(".", n)), 10);
  }
  var s = t.indexOf("Edge/");
  return s > 0 ? parseInt(t.substring(s + 5, t.indexOf(".", s)), 10) : -1;
}
let Ie;
function nt() {
  nt.init || (nt.init = !0, Ie = gn() !== -1);
}
var Xe = {
  name: "ResizeObserver",
  props: {
    emitOnMount: {
      type: Boolean,
      default: !1
    },
    ignoreWidth: {
      type: Boolean,
      default: !1
    },
    ignoreHeight: {
      type: Boolean,
      default: !1
    }
  },
  emits: [
    "notify"
  ],
  mounted() {
    nt(), to(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const t = document.createElement("object");
    this._resizeObject = t, t.setAttribute("aria-hidden", "true"), t.setAttribute("tabindex", -1), t.onload = this.addResizeHandlers, t.type = "text/html", Ie && this.$el.appendChild(t), t.data = "about:blank", Ie || this.$el.appendChild(t);
  },
  beforeUnmount() {
    this.removeResizeHandlers();
  },
  methods: {
    compareAndNotify() {
      (!this.ignoreWidth && this._w !== this.$el.offsetWidth || !this.ignoreHeight && this._h !== this.$el.offsetHeight) && (this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitSize());
    },
    emitSize() {
      this.$emit("notify", {
        width: this._w,
        height: this._h
      });
    },
    addResizeHandlers() {
      this._resizeObject.contentDocument.defaultView.addEventListener("resize", this.compareAndNotify), this.compareAndNotify();
    },
    removeResizeHandlers() {
      this._resizeObject && this._resizeObject.onload && (!Ie && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const yn = /* @__PURE__ */ oo("data-v-b329ee4c");
Pt("data-v-b329ee4c");
const vn = {
  class: "resize-observer",
  tabindex: "-1"
};
Ot();
const bn = /* @__PURE__ */ yn((t, o, e, n, s, l) => (c(), V("div", vn)));
Xe.render = bn;
Xe.__scopeId = "data-v-b329ee4c";
Xe.__file = "src/components/ResizeObserver.vue";
const Kt = (t = "theme") => ({
  computed: {
    themeClass() {
      return rn(this[t]);
    }
  }
}), wn = Fe({
  name: "VPopperContent",
  components: {
    ResizeObserver: Xe
  },
  mixins: [
    Kt()
  ],
  props: {
    popperId: String,
    theme: String,
    shown: Boolean,
    mounted: Boolean,
    skipTransition: Boolean,
    autoHide: Boolean,
    handleResize: Boolean,
    classes: Object,
    result: Object
  },
  emits: [
    "hide",
    "resize"
  ],
  methods: {
    toPx(t) {
      return t != null && !isNaN(t) ? `${t}px` : null;
    }
  }
}), _n = ["id", "aria-hidden", "tabindex", "data-popper-placement"], xn = {
  ref: "inner",
  class: "v-popper__inner"
}, $n = /* @__PURE__ */ $("div", { class: "v-popper__arrow-outer" }, null, -1), Sn = /* @__PURE__ */ $("div", { class: "v-popper__arrow-inner" }, null, -1), Cn = [
  $n,
  Sn
];
function kn(t, o, e, n, s, l) {
  const a = Ze("ResizeObserver");
  return c(), h("div", {
    id: t.popperId,
    ref: "popover",
    class: m(["v-popper__popper", [
      t.themeClass,
      t.classes.popperClass,
      {
        "v-popper__popper--shown": t.shown,
        "v-popper__popper--hidden": !t.shown,
        "v-popper__popper--show-from": t.classes.showFrom,
        "v-popper__popper--show-to": t.classes.showTo,
        "v-popper__popper--hide-from": t.classes.hideFrom,
        "v-popper__popper--hide-to": t.classes.hideTo,
        "v-popper__popper--skip-transition": t.skipTransition,
        "v-popper__popper--arrow-overflow": t.result && t.result.arrow.overflow,
        "v-popper__popper--no-positioning": !t.result
      }
    ]]),
    style: ee(t.result ? {
      position: t.result.strategy,
      transform: `translate3d(${Math.round(t.result.x)}px,${Math.round(t.result.y)}px,0)`
    } : void 0),
    "aria-hidden": t.shown ? "false" : "true",
    tabindex: t.autoHide ? 0 : void 0,
    "data-popper-placement": t.result ? t.result.placement : void 0,
    onKeyup: o[2] || (o[2] = no((d) => t.autoHide && t.$emit("hide"), ["esc"]))
  }, [
    $("div", {
      class: "v-popper__backdrop",
      onClick: o[0] || (o[0] = (d) => t.autoHide && t.$emit("hide"))
    }),
    $("div", {
      class: "v-popper__wrapper",
      style: ee(t.result ? {
        transformOrigin: t.result.transformOrigin
      } : void 0)
    }, [
      $("div", xn, [
        t.mounted ? (c(), h(W, { key: 0 }, [
          $("div", null, [
            k(t.$slots, "default")
          ]),
          t.handleResize ? (c(), V(a, {
            key: 0,
            onNotify: o[1] || (o[1] = (d) => t.$emit("resize", d))
          })) : C("", !0)
        ], 64)) : C("", !0)
      ], 512),
      $("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: ee(t.result ? {
          left: t.toPx(t.result.arrow.x),
          top: t.toPx(t.result.arrow.y)
        } : void 0)
      }, Cn, 4)
    ], 4)
  ], 46, _n);
}
const Zt = /* @__PURE__ */ ut(wn, [["render", kn]]), Jt = {
  methods: {
    show(...t) {
      return this.$refs.popper.show(...t);
    },
    hide(...t) {
      return this.$refs.popper.hide(...t);
    },
    dispose(...t) {
      return this.$refs.popper.dispose(...t);
    },
    onResize(...t) {
      return this.$refs.popper.onResize(...t);
    }
  }
}, Tn = Fe({
  name: "VPopperWrapper",
  components: {
    Popper: mn,
    PopperContent: Zt
  },
  mixins: [
    Jt,
    Kt("finalTheme")
  ],
  props: {
    theme: {
      type: String,
      default: null
    }
  },
  computed: {
    finalTheme() {
      var t;
      return (t = this.theme) != null ? t : this.$options.vPopperTheme;
    }
  },
  methods: {
    getTargetNodes() {
      return Array.from(this.$el.children).filter((t) => t !== this.$refs.popperContent.$el);
    }
  }
});
function Bn(t, o, e, n, s, l) {
  const a = Ze("PopperContent"), d = Ze("Popper");
  return c(), V(d, {
    ref: "popper",
    theme: t.finalTheme,
    "target-nodes": t.getTargetNodes,
    "popper-node": () => t.$refs.popperContent.$el,
    class: m([
      t.themeClass
    ])
  }, {
    default: I(({
      popperId: u,
      isShown: f,
      shouldMountContent: b,
      skipTransition: p,
      autoHide: y,
      show: w,
      hide: v,
      handleResize: x,
      onResize: _,
      classes: g,
      result: i
    }) => [
      k(t.$slots, "default", {
        shown: f,
        show: w,
        hide: v
      }),
      z(a, {
        ref: "popperContent",
        "popper-id": u,
        theme: t.finalTheme,
        shown: f,
        mounted: b,
        "skip-transition": p,
        "auto-hide": y,
        "handle-resize": x,
        classes: g,
        result: i,
        onHide: v,
        onResize: _
      }, {
        default: I(() => [
          k(t.$slots, "popper", {
            shown: f,
            hide: v
          })
        ]),
        _: 2
      }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 3
  }, 8, ["theme", "target-nodes", "popper-node", "class"]);
}
const ct = /* @__PURE__ */ ut(Tn, [["render", Bn]]), An = {
  ...ct,
  name: "VDropdown",
  vPopperTheme: "dropdown"
};
({
  ...ct
});
const Pn = {
  ...ct,
  name: "VTooltip",
  vPopperTheme: "tooltip"
};
Fe({
  name: "VTooltipDirective",
  components: {
    Popper: Xt(),
    PopperContent: Zt
  },
  mixins: [
    Jt
  ],
  inheritAttrs: !1,
  props: {
    theme: {
      type: String,
      default: "tooltip"
    },
    html: {
      type: Boolean,
      default: (t) => tt(t.theme, "html")
    },
    content: {
      type: [String, Number, Function],
      default: null
    },
    loadingContent: {
      type: String,
      default: (t) => tt(t.theme, "loadingContent")
    },
    targetNodes: {
      type: Function,
      required: !0
    }
  },
  data() {
    return {
      asyncContent: null
    };
  },
  computed: {
    isContentAsync() {
      return typeof this.content == "function";
    },
    loading() {
      return this.isContentAsync && this.asyncContent == null;
    },
    finalContent() {
      return this.isContentAsync ? this.loading ? this.loadingContent : this.asyncContent : this.content;
    }
  },
  watch: {
    content: {
      handler() {
        this.fetchContent(!0);
      },
      immediate: !0
    },
    async finalContent() {
      await this.$nextTick(), this.$refs.popper.onResize();
    }
  },
  created() {
    this.$_fetchId = 0;
  },
  methods: {
    fetchContent(t) {
      if (typeof this.content == "function" && this.$_isShown && (t || !this.$_loading && this.asyncContent == null)) {
        this.asyncContent = null, this.$_loading = !0;
        const o = ++this.$_fetchId, e = this.content(this);
        e.then ? e.then((n) => this.onResult(o, n)) : this.onResult(o, e);
      }
    },
    onResult(t, o) {
      t === this.$_fetchId && (this.$_loading = !1, this.asyncContent = o);
    },
    onShow() {
      this.$_isShown = !0, this.fetchContent();
    },
    onHide() {
      this.$_isShown = !1;
    }
  }
});
const On = An, Ln = Pn;
const Dn = ["data-slot"], Js = {
  __name: "Dropdown",
  props: {
    variant: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => {
      }
    },
    placement: {
      type: String,
      default: "bottom-start"
    },
    distance: {
      type: Number,
      default: 14
    },
    arrow: {
      type: Boolean,
      default: !1
    },
    itemSelector: {
      type: String,
      default: ".list--item:not(.disabled)"
    }
  },
  setup(t) {
    const o = t;
    G();
    const e = Q(null), n = Q(!1), s = L("Dropdown", o.variant, o.classes), l = (f) => {
      var p;
      const b = e.value;
      if (!!b) {
        if (["ArrowUp", "ArrowDown"].includes(f.key)) {
          f.preventDefault();
          const y = [...b.$refs.popperContent.$el.querySelectorAll(o.itemSelector)];
          if (!y.length)
            return;
          let w = y.indexOf(f.target);
          w = f.key === "ArrowDown" ? w + 1 : w - 1, (p = y[w]) == null || p.focus();
        }
        (f.key === "Enter" || f.key === " ") && f.target === b.$refs.popperContent.$el && (f.preventDefault(), b.hide());
      }
    }, a = (f) => {
      const b = e.value;
      if (!b || f.target.classList.contains("v-popper") || f.target.classList.contains("disabled"))
        return;
      let p = f.target, y = !0;
      for (; p; ) {
        if (p.getAttribute("data-slot") === "default")
          return;
        if (p.classList.contains("list--item")) {
          y = !1;
          break;
        }
        if (p = p.parentElement, p === null)
          break;
      }
      y || ![...b.$refs.popperContent.$el.querySelectorAll(o.itemSelector)].length || f.target.classList.contains("dropdown-stay") || (f.preventDefault(), b.hide());
    }, d = () => {
      document.addEventListener("keydown", l), document.addEventListener("click", a);
    }, u = () => {
      document.removeEventListener("keydown", l), document.removeEventListener("click", a);
      const f = e.value;
      f == null || f.$refs.popper.$_targetNodes[0].focus();
    };
    return rt(() => {
      document.removeEventListener("keydown", l), document.removeEventListener("click", a);
    }), M("IS_DROPDOWN", 1), M("IS_DROPDOWN_OPEN", n), M("IS_DROPDOWN_ARROW", o.arrow), (f, b) => (c(), V(r(On), {
      ref_key: "popoverRef",
      ref: e,
      distance: o.distance,
      triggers: ["click"],
      theme: "dropdown-menu",
      placement: o.placement,
      "auto-hide": "",
      onShow: d,
      onHide: u,
      shown: n.value,
      "onUpdate:shown": b[1] || (b[1] = (p) => n.value = p),
      class: m(r(s).wrapper),
      "popper-class": [r(s).size, r(s).theme]
    }, Je({ _: 2 }, [
      fe(f.$slots, (p, y) => ({
        name: y,
        fn: I((w) => [
          y === "default" ? (c(), h("div", st({
            class: "inline-block relative",
            "data-slot": y,
            key: y
          }, w || {}, {
            onClick: b[0] || (b[0] = lt(() => {
            }, ["prevent", "stop"]))
          }), [
            k(f.$slots, y)
          ], 16, Dn)) : (c(), V(Oe, {
            name: "dropdown",
            appear: "",
            key: y
          }, {
            default: I(() => [
              We($("div", null, [
                k(f.$slots, y, Lt(Dt(w || {})))
              ], 512), [
                [He, n.value]
              ])
            ]),
            _: 2
          }, 1024))
        ])
      }))
    ]), 1032, ["distance", "placement", "shown", "class", "popper-class"]));
  }
};
const In = {
  __name: "Tooltip",
  props: {
    variant: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => {
      }
    },
    placement: {
      type: String,
      default: "top"
    },
    distance: {
      type: Number,
      default: 6
    }
  },
  setup(t) {
    const o = t, e = L("Tooltip", o.variant, o.classes);
    return (n, s) => (c(), V(r(Ln), {
      triggers: ["hover"],
      theme: "tooltip",
      placement: o.placement,
      "auto-hide": "",
      class: m(r(e).wrapper),
      "popper-class": [r(e).theme]
    }, {
      popper: I(() => [
        k(n.$slots, "content")
      ]),
      default: I(() => [
        k(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["placement", "class", "popper-class"]));
  }
}, Nn = {
  key: 0,
  class: "flex flex-row items-center"
}, Rn = ["value"], En = ["value"], Vn = {
  for: "perPage",
  class: "mt-0 ml-4 text-left"
}, zn = {
  key: 1,
  class: "relative flex flex-col justify-center items-center w-full text-center"
}, Mn = {
  key: 0,
  class: "text-center mb-2"
}, Wn = {
  key: 1,
  class: "flex justify-center space-x-2"
}, Hn = {
  key: 2,
  class: "relative flex order-1 space-x-2"
}, jn = /* @__PURE__ */ $("span", null, "Previous", -1), Fn = /* @__PURE__ */ $("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "w-auto h-auto",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ $("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M15 19l-7-7 7-7"
  })
], -1), Gn = { class: "relative flex items-center space-x-2" }, qn = ["value", "disabled", "max"], Un = {
  key: 2,
  class: "text-gray-500"
}, Xn = /* @__PURE__ */ $("span", null, "Next", -1), Yn = /* @__PURE__ */ $("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "w-auto h-auto",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ $("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M9 5l7 7-7 7"
  })
], -1), Qs = {
  __name: "Pagination",
  props: {
    variant: {
      type: String,
      default: null
    },
    variantButton: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => {
      }
    },
    page: {
      type: Number,
      default: 1,
      required: !0
    },
    perPage: {
      type: Number,
      default: 15
    },
    perPageOptions: {
      type: Array,
      default: () => [15, 30, 50, 100]
    },
    itemsShown: {
      type: Number,
      default: 0
    },
    totalItems: {
      type: Number,
      default: 0
    },
    nextPrevButtons: {
      type: Boolean,
      default: !1
    },
    hideStats: {
      type: Boolean,
      default: !1
    },
    pageInput: {
      type: Boolean,
      default: !1
    },
    itemName: {
      type: String,
      default: "results"
    },
    loading: {
      type: Boolean,
      default: !1
    },
    loadMore: {
      type: Boolean,
      default: !1
    },
    loadMoreButton: {
      type: String,
      default: "Load More"
    }
  },
  emits: ["change"],
  setup(t, { emit: o }) {
    const e = t, n = L("Pagination", e.variant, e.classes), s = D(() => e.totalItems === void 0 ? -1 : Math.ceil(e.totalItems / e.perPage)), l = D(() => e.page === 1), a = D(() => e.page === 1 ? 1 : e.perPage * (e.page - 1) + 1), d = D(() => {
      if (e.page === s.value)
        return e.totalItems;
      {
        let y = e.page * e.perPage;
        return e.currentCount && y > e.currentCount ? e.currentCount : y;
      }
    }), u = D(() => s.value === -1 ? !1 : s.value < 1 && !e.loading || s.value === 1 ? !0 : s.value > 1 ? e.page === s.value : !1), f = (y) => {
      p(y.target.value), y.target === document.activeElement && y.target.blur();
    }, b = (y) => {
      o("change", {
        page: 1,
        perPage: Number(y.target.value)
      });
    }, p = (y) => {
      y < 1 || y === 1 ? y = 1 : s.value > 0 && Number(y) > s.value && (y = s.value), o("change", {
        page: Number(y),
        perPage: e.perPage
      });
    };
    return (y, w) => (c(), h("div", {
      class: m(["flex", {
        [r(n).baseText]: !0,
        "justify-between": !e.hideStats,
        "justify-center": e.hideStats
      }])
    }, [
      !e.hideStats && !e.loadMore ? (c(), h("div", Nn, [
        $("select", {
          name: "currentPerPage",
          class: "flex w-16 py-2 pl-2 pr-2 text-sm font-medium text-gray-500 bg-white border-gray-200 rounded cursor-pointer hover:bg-blue-100 hover:border-blue-900 hover:text-blue-900 focus:outline-none focus:border-blue-900 focus:ring-0",
          value: e.perPage,
          onInput: w[0] || (w[0] = (v) => b(v))
        }, [
          (c(!0), h(W, null, fe(e.perPageOptions, (v) => (c(), h("option", {
            key: v,
            value: v
          }, T(v), 9, En))), 128))
        ], 40, Rn),
        $("label", Vn, [
          t.totalItems ? (c(), h(W, { key: 0 }, [
            E("Showing " + T(a.value) + " to " + T(d.value) + " of " + T(t.totalItems) + " " + T(t.itemName), 1)
          ], 64)) : e.loading ? (c(), h(W, { key: 1 }, [
            E("Loading...")
          ], 64)) : C("", !0)
        ])
      ])) : C("", !0),
      e.loadMore ? (c(), h("div", zn, [
        e.hideStats ? C("", !0) : (c(), h("div", Mn, [
          t.totalItems ? (c(), h(W, { key: 0 }, [
            E("Showing " + T(d.value) + " of " + T(t.totalItems) + " " + T(t.itemName), 1)
          ], 64)) : C("", !0)
        ])),
        t.nextPrevButtons ? (c(), h("div", Wn, [
          z(_e, {
            outlined: "",
            onClick: w[1] || (w[1] = (v) => l.value ? "" : p(e.page - 1)),
            disabled: l.value,
            variant: t.variantButton
          }, {
            default: I(() => [
              E("Previous")
            ]),
            _: 1
          }, 8, ["disabled", "variant"]),
          z(_e, {
            outlined: "",
            onClick: w[2] || (w[2] = (v) => u.value ? "" : p(e.page + 1)),
            disabled: u.value,
            variant: t.variantButton
          }, {
            default: I(() => [
              E("Next")
            ]),
            _: 1
          }, 8, ["disabled", "variant"])
        ])) : (c(), V(_e, {
          key: 2,
          outlined: "",
          onClick: w[3] || (w[3] = (v) => u.value ? "" : p(e.page + 1)),
          disabled: e.loading || u.value,
          loading: e.loading,
          variant: t.variantButton
        }, {
          default: I(() => [
            E(T(t.loadMoreButton), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading", "variant"]))
      ])) : (c(), h("div", Hn, [
        $("div", null, [
          z(_e, {
            ghost: "",
            circle: !t.nextPrevButtons,
            onClick: w[4] || (w[4] = (v) => l.value ? "" : p(e.page - 1)),
            disabled: l.value,
            variant: t.variantButton
          }, Je({ _: 2 }, [
            t.nextPrevButtons ? {
              name: "default",
              fn: I(() => [
                jn
              ]),
              key: "0"
            } : void 0,
            t.nextPrevButtons ? void 0 : {
              name: "icon",
              fn: I(() => [
                Fn
              ]),
              key: "1"
            }
          ]), 1032, ["circle", "disabled", "variant"])
        ]),
        $("div", Gn, [
          t.pageInput ? (c(), h("input", {
            key: 0,
            type: "number",
            value: e.page,
            disabled: !e.totalItems && e.loading || s.value < 1 && !e.loading,
            onFocusin: w[5] || (w[5] = (v) => v.target.select()),
            onChange: f,
            max: s.value,
            classes: "text-center",
            style: { width: "55px" }
          }, null, 40, qn)) : (c(), h("span", {
            key: 1,
            class: m(r(n).currentPageText)
          }, T(e.page), 3)),
          e.totalItems ? (c(), h("span", Un, "of " + T(s.value), 1)) : C("", !0)
        ]),
        $("div", null, [
          z(_e, {
            ghost: "",
            circle: !t.nextPrevButtons,
            onClick: w[6] || (w[6] = (v) => u.value ? "" : p(e.page + 1)),
            disabled: u.value,
            variant: t.variantButton
          }, Je({ _: 2 }, [
            t.nextPrevButtons ? {
              name: "default",
              fn: I(() => [
                Xn
              ]),
              key: "0"
            } : void 0,
            t.nextPrevButtons ? void 0 : {
              name: "icon",
              fn: I(() => [
                Yn
              ]),
              key: "1"
            }
          ]), 1032, ["circle", "disabled", "variant"])
        ])
      ]))
    ], 2));
  }
}, er = {
  __name: "List",
  props: {
    variant: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(t) {
    const o = t, e = L("List", o.variant, o.classes);
    return M("IS_LIST_GROUP", 1), M("IS_LIST_VARIANT", o.variant), (n, s) => (c(), h("div", {
      class: m({
        [r(e).listGroup]: !0,
        [r(e).listGroupColor]: !0,
        [r(e).listGroupText]: !0
      })
    }, [
      k(n.$slots, "default")
    ], 2));
  }
}, Kn = { class: "grow w-full" }, tr = {
  __name: "ListItem",
  props: {
    variant: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => {
      }
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    hover: {
      type: Boolean,
      default: !0
    },
    divider: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const o = t, e = G(), n = j("IS_LIST_GROUP", 0), s = j("IS_LIST_VARIANT", null), l = Q(o.variant);
    n && s && !o.variant && (l.value = s);
    const a = L("List", l.value, o.classes);
    return (d, u) => {
      var f;
      return c(), h("div", {
        class: m({
          "flex items-center": !0,
          "list--item": o.hover && !o.disabled && !o.divider,
          "h-[1px]": o.divider,
          [r(a).listItem]: !o.divider,
          [r(a).listItemSize]: !o.divider,
          [r(a).listItemTheme]: !o.disabled || !o.divider,
          [r(a).listItemHover]: o.hover && !o.disabled && !o.divider,
          [r(a).listItemDisabled]: o.disabled && !o.divider,
          [r(a).listItemDivider]: o.divider
        })
      }, [
        (f = r(e)) != null && f.before ? (c(), h("div", {
          key: 0,
          class: m([r(a).listItemBefore])
        }, [
          k(d.$slots, "before")
        ], 2)) : C("", !0),
        $("div", Kn, [
          k(d.$slots, "default")
        ]),
        r(e).after ? (c(), h("div", {
          key: 1,
          class: m([r(a).listItemAfter])
        }, [
          k(d.$slots, "after")
        ], 2)) : C("", !0)
      ], 2);
    };
  }
}, or = {
  __name: "LoaderProgress",
  props: {
    variant: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => {
      }
    },
    progress: {
      type: Number,
      default: 0
    },
    showProgress: {
      type: Boolean,
      default: !1
    },
    label: {
      type: String,
      default: ""
    },
    labelPosition: {
      type: String,
      default: "inside"
    }
  },
  setup(t) {
    const o = t, e = L("LoaderProgress", o.variant, o.classes);
    return (n, s) => (c(), h("div", {
      class: m(r(e).wrapper)
    }, [
      o.label ? (c(), h("div", {
        key: 0,
        class: m(r(e).outsideLabelWrapper)
      }, [
        $("span", {
          class: m(r(e).outsideLabelText)
        }, T(t.label), 3),
        $("span", {
          class: m(r(e).outsideLabelProgress)
        }, T(o.progress) + "%", 3)
      ], 2)) : C("", !0),
      $("div", {
        class: m([r(e).bar, r(e).size, r(e).barColor])
      }, [
        $("div", {
          class: m([r(e).progressBar, r(e).size, r(e).progressBarColor, r(e).insideLabelText]),
          style: ee({ width: o.progress + "%" })
        }, [
          o.progress > 0 && o.showProgress && !o.label ? (c(), h(W, { key: 0 }, [
            E(T(o.progress) + "% ", 1)
          ], 64)) : C("", !0)
        ], 6)
      ], 2)
    ], 2));
  }
}, Zn = ["for"], Jn = {
  key: 0,
  class: "mr-1"
}, Qn = { key: 0 }, es = {
  key: 1,
  class: "text-red-500"
}, ts = /* @__PURE__ */ $("path", {
  "fill-rule": "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z",
  "clip-rule": "evenodd"
}, null, -1), os = [
  ts
], Pe = {
  __name: "Label",
  props: {
    variant: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => {
      }
    },
    required: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    errors: {
      type: Boolean,
      default: !1
    },
    title: {
      type: String,
      default: null
    },
    id: {
      type: String,
      default: null
    },
    tooltip: {
      type: String,
      default: null
    },
    tooltipPosition: {
      type: String,
      default: "top"
    },
    tooltipIconSize: {
      type: Number,
      default: 4
    },
    tooltipHideArrow: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const o = t, e = G(), n = L("Label", o.variant, o.classes);
    return (s, l) => {
      var a;
      return c(), h("label", {
        for: o.id,
        class: m({
          [r(n).base]: !0,
          [r(n).theme]: !0,
          [r(n).disabled]: o.disabled,
          [r(n).errors]: o.errors,
          ...o.classes
        })
      }, [
        (a = r(e)) != null && a.icon ? (c(), h("span", Jn, [
          k(s.$slots, "icon")
        ])) : C("", !0),
        $("span", null, [
          k(s.$slots, "default", {}, () => [
            o.title ? (c(), h("span", Qn, T(o.title), 1)) : C("", !0)
          ])
        ]),
        o.required ? (c(), h("span", es, "*")) : C("", !0),
        o.tooltip || r(e)["tooltip-content"] ? (c(), V(In, {
          key: 2,
          placement: o.tooltipPosition
        }, {
          content: I(() => [
            $("span", null, [
              k(s.$slots, "tooltip-content", {}, () => [
                E(T(t.tooltip), 1)
              ])
            ])
          ]),
          default: I(() => [
            $("span", {
              class: m([r(n).icon, "ml-1 cursor-pointer flex items-center"])
            }, [
              k(s.$slots, "tooltip-icon", {}, () => [
                (c(), h("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 20 20",
                  fill: "currentColor",
                  class: m(r(n).iconSize)
                }, os, 2))
              ])
            ], 2)
          ]),
          _: 3
        }, 8, ["placement"])) : C("", !0)
      ], 10, Zn);
    };
  }
}, ke = (t, o) => t === o, ns = (t, o, e = void 0) => {
  if (o == null)
    return e;
  const n = (l) => String.prototype.split.call(o, l).filter(Boolean).reduce((a, d) => a != null ? a[d] : a, t), s = n(/[,[\]]+?/) || n(/[,[\].]+?/);
  return s === void 0 || s === t ? e : s;
};
const ss = ["id", "type", "checked", "value", "disabled"], rs = {
  __name: "Checkbox",
  props: {
    variant: {
      type: String,
      default: null
    },
    variantLabel: {
      type: String,
      default: null
    },
    variantTooltip: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => {
      }
    },
    required: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    errors: {
      type: Boolean,
      default: !1
    },
    label: {
      type: String,
      default: null
    },
    tooltip: {
      type: String,
      default: null
    },
    modelValue: {
      type: [String, Boolean],
      default: null
    },
    value: {
      type: [String, Boolean],
      default: null
    },
    trueValue: {
      type: [String, Boolean],
      default: !0
    },
    falseValue: {
      type: [String, Boolean],
      default: !1
    },
    radio: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: o }) {
    const e = t, n = G(), s = me(), l = L("Checkbox", e.variant, e.classes), a = (f) => {
      const b = e.modelValue;
      let p = d;
      p = ke(b, e.trueValue) ? e.falseValue : e.trueValue, d.value = p, o("change", f);
    }, d = D({
      get: () => e.modelValue,
      set: (f) => {
        o("update:modelValue", f);
      }
    }), u = D(() => !!ke(e.modelValue || e.value, e.trueValue));
    return (f, b) => {
      var p;
      return c(), h("div", {
        class: m(r(l).wrapper)
      }, [
        $("div", {
          class: m(r(l).inputWrapper)
        }, [
          $("input", {
            id: r(s),
            type: e.radio ? "radio" : "checkbox",
            class: m({
              [r(l).inputCheck]: !e.radio,
              [r(l).inputRadio]: e.radio,
              [r(l).inputDisabled]: e.disabled
            }),
            checked: u.value,
            value: e.modelValue,
            disabled: e.disabled,
            onChange: b[0] || (b[0] = (y) => a(y))
          }, null, 42, ss)
        ], 2),
        e.label || ((p = r(n)) == null ? void 0 : p.default) ? (c(), h("div", {
          key: 0,
          class: m(r(l).labelWrapper)
        }, [
          k(f.$slots, "default", {
            isChecked: u.value,
            props: e
          }, () => [
            z(Pe, {
              id: r(s),
              required: e.required,
              disabled: e.disabled,
              tooltip: e.tooltip,
              variant: e.variantLabel,
              variantTooltip: e.variantTooltip
            }, {
              default: I(() => [
                E(T(e.label), 1)
              ]),
              _: 1
            }, 8, ["id", "required", "disabled", "tooltip", "variant", "variantTooltip"])
          ], !0)
        ], 2)) : C("", !0)
      ], 2);
    };
  }
}, At = /* @__PURE__ */ be(rs, [["__scopeId", "data-v-64fca8fb"]]), ls = ["id", "checked", "value", "disabled"], as = {
  key: 2,
  class: "relative cursor-not-allowed"
}, nr = {
  __name: "Toggle",
  props: {
    variant: {
      type: String,
      default: null
    },
    variantLabel: {
      type: String,
      default: null
    },
    variantTooltip: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => {
      }
    },
    required: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    errors: {
      type: Boolean,
      default: !1
    },
    label: {
      type: String,
      default: null
    },
    tooltip: {
      type: String,
      default: null
    },
    modelValue: {
      type: [String, Boolean],
      default: null
    },
    value: {
      type: [String, Boolean],
      default: null
    },
    trueValue: {
      type: [String, Boolean],
      default: !0
    },
    falseValue: {
      type: [String, Boolean],
      default: !1
    },
    falseLabel: {
      type: [String, Boolean],
      default: !1
    },
    inset: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: o }) {
    const e = t;
    G();
    const n = me(), s = L("Toggle", e.variant, e.classes), l = (b) => {
      const p = e.modelValue;
      let y = u;
      y = ke(p, e.trueValue) ? e.falseValue : e.trueValue, u.value = y, o("change", b);
    }, a = (b) => {
      b.preventDefault(), d("toggle");
    }, d = (b) => {
      e.disabled || (b === "after" && e.falseLabel ? u.value = e.trueValue : b === "before" && e.falseLabel ? u.value = e.falseValue : u.value = ke(e.modelValue, e.trueValue) ? e.falseValue : e.trueValue);
    }, u = D({
      get: () => e.modelValue,
      set: (b) => {
        o("update:modelValue", b);
      }
    }), f = D(() => !!ke(e.modelValue, e.trueValue));
    return (b, p) => (c(), h("div", {
      class: m(r(s).wrapper)
    }, [
      e.falseLabel ? (c(), h("div", {
        key: 0,
        class: m(r(s).labelFalseWrapper)
      }, [
        z(Pe, {
          onClick: p[0] || (p[0] = (y) => d("before")),
          disabled: e.disabled,
          classes: {
            "cursor-pointer": !0,
            [r(s).switchFalseLabelColorChecked]: f.value
          }
        }, {
          default: I(() => [
            E(T(e.falseLabel), 1)
          ]),
          _: 1
        }, 8, ["disabled", "classes"])
      ], 2)) : C("", !0),
      e.disabled ? (c(), h("div", as, [
        $("div", {
          class: m(`${e.inset ? "w-12" : "w-10"} ${e.inset ? "h-6" : "h-4"} ${f.value ? r(s).switchDisabledColorChecked : r(s).switchDisabledColor} rounded-full shadow-inner`)
        }, null, 2),
        $("div", {
          class: m(`absolute w-6 h-6 bg-white border-2 ${f.value ? `${r(s).switchDisabledColorBorderChecked} translate-x-full` : "translate-x-0"} rounded-full ${e.inset ? "left-0 top-0" : "-left-1 -top-1"} transition`)
        }, null, 2)
      ])) : (c(), h("div", {
        key: 1,
        class: m(r(s).inputWrapper),
        onClick: a
      }, [
        $("input", {
          id: r(n),
          class: "sr-only",
          checked: f.value,
          value: e.modelValue,
          disabled: e.disabled,
          onChange: p[1] || (p[1] = (y) => l(y))
        }, null, 40, ls),
        $("div", null, [
          $("div", {
            class: m(`${e.inset ? "w-12" : "w-10"} ${e.inset ? "h-6" : "h-4"} ${f.value ? r(s).switchColorChecked : r(s).switchColor} rounded-full shadow-inner`),
            id: "switch-background"
          }, null, 2),
          $("div", {
            class: m(`absolute w-6 h-6 bg-white border-2 ${f.value ? `${r(s).switchColorBorderChecked} translate-x-full` : `${r(s).switchColorBorder} translate-x-0`} rounded-full ${e.inset ? "left-0 top-0" : "-left-1 -top-1"} transition`)
          }, null, 2)
        ])
      ], 2)),
      e.label ? (c(), h("div", {
        key: 3,
        class: m(r(s).labelWrapper),
        onClick: p[2] || (p[2] = (y) => d("after"))
      }, [
        z(Pe, {
          id: null,
          required: e.required,
          disabled: e.disabled,
          tooltip: e.tooltip,
          variant: e.variantLabel,
          variantTooltip: e.variantTooltip,
          classes: {
            "cursor-pointer": !0,
            [r(s).switchTrueLabelColorChecked]: f.value && e.falseLabel,
            [r(s).switchTrueLabelColor]: !f.value && e.falseLabel
          }
        }, {
          default: I(() => [
            E(T(e.label), 1)
          ]),
          _: 1
        }, 8, ["required", "disabled", "tooltip", "variant", "variantTooltip", "classes"])
      ], 2)) : C("", !0)
    ], 2));
  }
}, is = /* @__PURE__ */ $("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  class: "w-5 h-5"
}, [
  /* @__PURE__ */ $("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
], -1), ds = { key: 0 }, us = "input", sr = {
  __name: "InputText",
  props: {
    variant: {
      type: String,
      default: null
    },
    variantLabel: {
      type: String,
      default: null
    },
    variantTooltip: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => {
      }
    },
    required: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    label: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: "input"
    },
    type: {
      type: String,
      default: "text"
    },
    decimals: {
      type: Number,
      default: null
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    maxlength: {
      type: Number,
      default: null
    },
    modelValue: {
      type: [Number, String],
      default: null
    },
    value: {
      type: [Number, String],
      default: null
    },
    clearable: {
      type: Boolean,
      default: !1
    },
    min: {
      type: [String, Number],
      default: null
    },
    max: {
      type: [String, Number],
      default: null
    },
    errors: {
      type: Boolean,
      default: !1
    },
    pattern: {
      type: String,
      default: null
    },
    width: {
      type: [String, Number],
      default: null
    },
    characterCounter: {
      type: Boolean,
      default: !1
    },
    step: {
      type: [String, Number],
      default: null
    },
    customClasses: {
      type: String,
      default: null
    },
    customStyle: {
      type: String,
      default: null
    },
    formatter: {
      type: Function,
      default: null
    },
    selectAll: {
      type: Boolean,
      default: !1
    },
    tooltip: {
      type: String,
      default: null
    }
  },
  emits: ["keyup", "keydown", "enter", "focusin", "focusout", "blur", "cleared", "update:modelValue", "input"],
  setup(t, { emit: o }) {
    const e = t, n = G(), s = L("InputText", e.variant, e.classes), l = e.type === "number" ? "text" : e.type, a = me(), d = Q(null), u = (i) => {
      if (i == null || i === "")
        return null;
      if (e.type === "number" && !e.decimals)
        i = i.toString().replace(/\D/g, ""), i = Number(i);
      else if (e.type === "number" && e.decimals) {
        i = i.toString().replace(/[^0-9.-]/g, "");
        var S = i.split(".");
        if (S.length > 2)
          i = S[0] + "." + S.slice(1).join("");
        else if (S.length === 2 && i.endsWith("."))
          i = i;
        else {
          i = Number(i);
          var O = Math.pow(10, e.decimals);
          i = Math.round(i * O) / O;
        }
      }
      return typeof e.formatter == "function" && (i = e.formatter(i)), e.type === "number" && (e.max && i > e.max && (i = e.max), e.min && i < e.min && (i = e.min)), i;
    }, f = (i) => {
    }, b = (i) => {
      i.target.value = u(i.target.value), g.value = i.target.value, o("keyup", i), i.key === "Enter" && o("enter", i);
    }, p = (i) => {
      o("keydown", i);
    }, y = (i) => {
      e.selectAll && (d == null ? void 0 : d.value) && d.value.select(), o("focusin", i);
    }, w = (i) => {
      o("focusout", i);
    }, v = () => {
      g.value = null, o("cleared");
    }, x = (i) => {
      g.value = u(i.target.value), i.target.value = g.value, o("blur", i);
    }, _ = D(() => {
      if (e.customClasses)
        return e.customClasses;
      {
        let i = [s.input];
        return n != null && n.prepend && (i = i.concat([s.inputPrepend])), n != null && n.icon && (i = i.concat(["pl-9"])), e.clearable && (i = i.concat(["pr-8"])), e.readonly && (i = i.concat([s.readonly])), e.disabled && (i = i.concat([s.disabled])), e.errors && (i = i.concat([s.errors])), !e.errors && !e.disabled && (i = i.concat([s.inputTheme])), i;
      }
    }), g = D({
      get: () => u(e.modelValue !== null ? e.modelValue : e.value),
      set: (i) => {
        o("update:modelValue", i);
      }
    });
    return (i, S) => {
      var O, A;
      return c(), h("div", {
        class: m(r(s).root)
      }, [
        e.label ? (c(), V(Pe, {
          key: 0,
          id: r(a),
          title: e.label,
          required: e.required,
          error: e.errors,
          tooltip: e.tooltip,
          disabled: e.disabled,
          variant: e.variantLabel
        }, null, 8, ["id", "title", "required", "error", "tooltip", "disabled", "variant"])) : C("", !0),
        $("div", {
          class: m(["flex", { "mt-1": e.label }])
        }, [
          (O = r(n)) != null && O.prepend ? (c(), h("div", {
            key: 0,
            class: m(r(s).prepend)
          }, [
            k(i.$slots, "prepend")
          ], 2)) : C("", !0),
          $("div", {
            class: m(r(s).inputWrapper)
          }, [
            (A = r(n)) != null && A.icon ? (c(), h("div", {
              key: 0,
              class: m(r(s).icon)
            }, [
              k(i.$slots, "icon")
            ], 2)) : C("", !0),
            (c(), V(je(us), {
              ref_key: "inputTag",
              ref: d,
              id: r(a),
              type: r(l),
              name: `${e.name}-${r(a)}`,
              placeholder: e.placeholder,
              readonly: e.readonly,
              disabled: e.disabled,
              required: e.required,
              maxlength: e.maxlength,
              autocomplete: `new-${r(a)}`,
              autofill: `new-${r(a)}`,
              pattern: e.pattern,
              value: g.value,
              onInput: S[0] || (S[0] = (P) => f()),
              onKeyup: S[1] || (S[1] = (P) => b(P)),
              onKeydown: S[2] || (S[2] = (P) => p(P)),
              onFocusout: S[3] || (S[3] = (P) => w(P)),
              onFocus: S[4] || (S[4] = (P) => y(P)),
              onBlur: S[5] || (S[5] = (P) => x(P)),
              min: e.min,
              max: e.max,
              step: e.step,
              class: m(_.value),
              style: ee((e.width ? `width: ${e.width}px;` : "") + e.customStyle)
            }, null, 40, ["id", "type", "name", "placeholder", "readonly", "disabled", "required", "maxlength", "autocomplete", "autofill", "pattern", "value", "min", "max", "step", "class", "style"])),
            e.clearable && g.value && !e.readonly && !e.disabled ? (c(), h("div", {
              key: 1,
              class: m(r(s).clearable),
              onClick: v
            }, [
              k(i.$slots, "clearable", {}, () => [
                is
              ])
            ], 2)) : C("", !0)
          ], 2)
        ], 2),
        e.characterCounter ? (c(), h("div", {
          key: 1,
          class: m(r(s).counter)
        }, [
          k(i.$slots, "counter", {
            valueLength: g.value && g.value.length ? g.value.length : 0,
            maxlength: e.maxlength
          }, () => [
            E(T(g.value && g.value.length || 0), 1),
            e.maxlength ? (c(), h("span", ds, "/" + T(e.maxlength), 1)) : C("", !0)
          ])
        ], 2)) : C("", !0)
      ], 2);
    };
  }
}, cs = /* @__PURE__ */ $("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  class: "w-5 h-5"
}, [
  /* @__PURE__ */ $("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
], -1), ps = { key: 0 }, fs = "textarea", rr = {
  __name: "InputArea",
  props: {
    variant: {
      type: String,
      default: null
    },
    variantLabel: {
      type: String,
      default: null
    },
    variantTooltip: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => {
      }
    },
    required: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    label: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: "input"
    },
    type: {
      type: String,
      default: "text"
    },
    decimals: {
      type: Number,
      default: null
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    maxlength: {
      type: Number,
      default: null
    },
    modelValue: {
      type: [Number, String],
      default: null
    },
    value: {
      type: [Number, String],
      default: null
    },
    clearable: {
      type: Boolean,
      default: !1
    },
    min: {
      type: [String, Number],
      default: null
    },
    max: {
      type: [String, Number],
      default: null
    },
    errors: {
      type: Boolean,
      default: !1
    },
    pattern: {
      type: String,
      default: null
    },
    width: {
      type: [String, Number],
      default: null
    },
    characterCounter: {
      type: Boolean,
      default: !1
    },
    step: {
      type: [String, Number],
      default: null
    },
    customClasses: {
      type: String,
      default: null
    },
    customStyle: {
      type: String,
      default: null
    },
    noresize: {
      type: Boolean,
      default: !1
    },
    formatter: {
      type: Function,
      default: null
    },
    selectAll: {
      type: Boolean,
      default: !1
    },
    tooltip: {
      type: String,
      default: null
    }
  },
  emits: ["keyup", "keydown", "enter", "focusin", "focusout", "blur", "cleared", "update:modelValue", "input"],
  setup(t, { emit: o }) {
    const e = t;
    G();
    const n = L("InputArea", e.variant, e.classes), s = me(), l = Q(null), a = (_) => _ == null || _ === "" ? null : _, d = (_) => {
    }, u = (_) => {
      _.target.value = a(_.target.value), x.value = _.target.value, o("keyup", _), _.key === "Enter" && o("enter", _);
    }, f = (_) => {
      o("keydown", _);
    }, b = (_) => {
      e.selectAll && (l == null ? void 0 : l.value) && l.value.select(), o("focusin", _);
    }, p = (_) => {
      o("focusout", _);
    }, y = () => {
      x.value = null, o("cleared");
    }, w = (_) => {
      x.value = a(_.target.value), _.target.value = x.value, o("blur", _);
    }, v = D(() => {
      if (e.customClasses)
        return e.customClasses;
      {
        let _ = [n.input];
        return e.noresize && (_ = _.concat(["resize-none"])), e.clearable && (_ = _.concat(["pr-8"])), e.readonly && (_ = _.concat([n.readonly])), e.disabled && (_ = _.concat([n.disabled])), e.errors && (_ = _.concat([n.errors])), !e.errors && !e.disabled && (_ = _.concat([n.inputTheme])), _;
      }
    }), x = D({
      get: () => a(e.modelValue !== null ? e.modelValue : e.value),
      set: (_) => {
        o("update:modelValue", _);
      }
    });
    return (_, g) => (c(), h("div", {
      class: m(r(n).root)
    }, [
      e.label ? (c(), V(Pe, {
        key: 0,
        id: r(s),
        title: e.label,
        required: e.required,
        error: e.errors,
        tooltip: e.tooltip,
        disabled: e.disabled,
        variant: e.variantLabel
      }, null, 8, ["id", "title", "required", "error", "tooltip", "disabled", "variant"])) : C("", !0),
      $("div", {
        class: m(["flex", { "mt-1": e.label }])
      }, [
        $("div", {
          class: m(r(n).inputWrapper)
        }, [
          (c(), V(je(fs), {
            ref_key: "inputTag",
            ref: l,
            id: r(s),
            name: `${e.name}-${r(s)}`,
            placeholder: e.placeholder,
            readonly: e.readonly,
            disabled: e.disabled,
            required: e.required,
            maxlength: e.maxlength,
            autocomplete: `new-${r(s)}`,
            autofill: `new-${r(s)}`,
            pattern: e.pattern,
            value: x.value,
            onInput: g[0] || (g[0] = (i) => d()),
            onKeyup: g[1] || (g[1] = (i) => u(i)),
            onKeydown: g[2] || (g[2] = (i) => f(i)),
            onFocusout: g[3] || (g[3] = (i) => p(i)),
            onFocus: g[4] || (g[4] = (i) => b(i)),
            onBlur: g[5] || (g[5] = (i) => w(i)),
            min: e.min,
            max: e.max,
            step: e.step,
            class: m(v.value),
            style: ee((e.width ? `width: ${e.width}px;` : "") + e.customStyle)
          }, null, 40, ["id", "name", "placeholder", "readonly", "disabled", "required", "maxlength", "autocomplete", "autofill", "pattern", "value", "min", "max", "step", "class", "style"])),
          e.clearable && x.value && !e.readonly && !e.disabled ? (c(), h("div", {
            key: 0,
            class: m(r(n).clearable),
            onClick: y
          }, [
            k(_.$slots, "clearable", {}, () => [
              cs
            ])
          ], 2)) : C("", !0)
        ], 2)
      ], 2),
      e.characterCounter ? (c(), h("div", {
        key: 1,
        class: m(r(n).counter)
      }, [
        k(_.$slots, "counter", {
          valueLength: x.value && x.value.length ? x.value.length : 0,
          maxlength: e.maxlength
        }, () => [
          E(T(x.value && x.value.length || 0), 1),
          e.maxlength ? (c(), h("span", ps, "/" + T(e.maxlength), 1)) : C("", !0)
        ])
      ], 2)) : C("", !0)
    ], 2));
  }
}, hs = ["onClick"], lr = {
  __name: "Tabs",
  props: {
    variant: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => {
      }
    },
    modelValue: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "click:tab"],
  setup(t, { emit: o }) {
    const e = t, s = G().default, l = L("Tabs", e.variant, e.classes), a = (p, y = !0, w = []) => (p.forEach((v) => {
      if (v !== null) {
        if (typeof v != "object") {
          (typeof v == "string" || typeof v == "number") && w.push(E(String(v)));
          return;
        }
        if (Array.isArray(v)) {
          a(v, y, w);
          return;
        }
        if (v.type === W) {
          if (v.children === null)
            return;
          Array.isArray(v.children) && a(v.children, y, w);
        } else
          v.type !== so && (v.children && v.children.title && (v.slotContent = v.children.title()), w.push(v));
      }
    }), w), d = D(() => s ? a(s()).filter((p) => p.type.__GALAXY_TAB__) : []), u = D({
      get: () => e.modelValue,
      set: (p) => o("update:modelValue", p)
    }), f = (p) => {
      u.value = p;
    };
    function b(p, y) {
      var w, v;
      ((w = y.props) == null ? void 0 : w.disabled) === "" || ((v = y.props) == null ? void 0 : v.disabled) === !0 || f(p);
    }
    return M("IS_TABS", 1), M("IS_TABS_VARIANT", e.variant), M("TAB_ACTIVE", u), M("TAB_CHANGE", f), (p, y) => (c(), h("div", {
      class: m(r(l).wrapper)
    }, [
      $("div", {
        class: m(r(l).tabListWrapper)
      }, [
        $("ul", {
          class: m(r(l).tabList)
        }, [
          (c(!0), h(W, null, fe(d.value, (w, v) => {
            var x, _, g;
            return c(), h("li", {
              key: v,
              onClick: lt((i) => {
                var S;
                return b((S = w.props) == null ? void 0 : S.name, w);
              }, ["prevent"]),
              class: m({
                [r(l).tabItem]: !0,
                [r(l).tabItemDisabled]: ((x = w.props) == null ? void 0 : x.disabled) === "" || ((_ = w.props) == null ? void 0 : _.disabled) === !0,
                [r(l).tabItemSelected]: u.value === ((g = w.props) == null ? void 0 : g.name)
              })
            }, [
              $("div", {
                class: m(r(l).tabItemTitle)
              }, [
                w.slotContent ? (c(!0), h(W, { key: 0 }, fe(w.slotContent, (i, S) => (c(), V(je(i), { key: S }))), 128)) : (c(), h(W, { key: 1 }, [
                  E(T(w.props.title), 1)
                ], 64))
              ], 2)
            ], 10, hs);
          }), 128))
        ], 2)
      ], 2),
      $("div", st(p.$attrs, {
        class: r(l).tabContentWrapper
      }), [
        k(p.$slots, "default")
      ], 16)
    ], 2));
  }
}, ms = { class: "relative" }, gs = {
  __GALAXY_TAB__: !0
}, ar = Object.assign(gs, {
  __name: "Tab",
  props: {
    variant: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => {
      }
    },
    name: {
      type: String,
      required: !0
    },
    title: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    preload: {
      type: Boolean,
      default: !0
    }
  },
  setup(t) {
    const o = t;
    G();
    const e = j("IS_TABS_VARIANT", null), n = j("IS_TABS", 0);
    n || console.warn("[Galaxy Vue] <Tab> should only be used within <Tabs>");
    const s = Q(o.variant);
    n && e && !o.variant && (s.value = e);
    const l = L("Tabs", s.value, o.classes), a = j("TAB_ACTIVE", null);
    return (d, u) => (c(), h("div", ms, [
      o.preload === !0 ? We((c(), h("div", {
        key: 0,
        class: m(r(l).tabContent)
      }, [
        k(d.$slots, "default")
      ], 2)), [
        [He, r(a) === o.name]
      ]) : o.preload === !1 ? (c(), h(W, { key: 1 }, [
        r(a) === o.name ? (c(), h("div", {
          key: 0,
          class: m(r(l).tabContent)
        }, [
          k(d.$slots, "default")
        ], 2)) : C("", !0)
      ], 64)) : C("", !0)
    ]));
  }
});
const ys = { class: "flex justify-center items-center" }, vs = ["onClick"], bs = { class: "my-auto truncate flex items-center justify-center align-middle" }, ws = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-auto h-auto"
}, _s = /* @__PURE__ */ $("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
}, null, -1), xs = [
  _s
], $s = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-auto h-auto"
}, Ss = /* @__PURE__ */ $("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
}, null, -1), Cs = [
  Ss
], ks = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-auto h-auto"
}, Ts = /* @__PURE__ */ $("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
}, null, -1), Bs = [
  Ts
], As = {
  key: 1,
  style: { position: "relative", top: "0" }
}, Ps = { class: "table-row-loading" }, Os = {
  colspan: "100%",
  class: "border-none p-0 relative"
}, Ls = ["onClick"], Ds = { class: "flex items-center justify-center" }, Is = { key: 0 }, Ns = { key: 0 }, Rs = { key: 1 }, ir = {
  __name: "Table",
  props: {
    variant: {
      type: String,
      default: null
    },
    variantLoaderLinear: {
      type: String,
      default: null
    },
    variantCheckbox: {
      type: String,
      default: null
    },
    classes: {
      type: String,
      default: null
    },
    headers: {
      type: Array,
      default: () => []
    },
    rows: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: !1
    },
    noDataText: {
      type: String,
      default: "No results found"
    },
    loadingText: {
      type: String,
      default: "Loading... Please wait"
    },
    emptyCellText: {
      type: String,
      default: null
    },
    hideHeader: {
      type: Boolean,
      default: !1
    },
    select: {
      type: Boolean,
      default: !1
    },
    selectRow: {
      type: Boolean,
      default: !1
    },
    selectOne: {
      type: Boolean,
      default: !1
    },
    selectBorder: {
      type: Boolean,
      default: !1
    },
    rowCursor: {
      type: Boolean,
      default: !1
    },
    selectionField: {
      type: String,
      default: null
    }
  },
  emits: ["sort", "click-row", "selection"],
  setup(t, { emit: o }) {
    const e = t, n = L("Table", e.variant, e.classes), s = Q(null), l = ze({
      selection: [],
      selectAllOption: null,
      selectedAll: !1
    }), a = D(() => e.headers.filter((x) => !(x != null && x.hide))), d = D(() => e.loading ? e.loadingText : e.noDataText), u = (x, _, g = void 0) => ns(x, _, g), f = () => {
      l.selectedAll ? b() : p();
    }, b = () => {
      l.selection = [...Array(e.rows.length).keys()];
    }, p = () => {
      l.selection = [];
    }, y = (x, _, g) => {
      if (!e.selectRow || _ === "selectRow") {
        let i = [...l.selection];
        if (l.selectAllOption = null, !i.includes(x))
          e.selectOne === !0 ? i = [x] : i.push(x);
        else {
          const S = i.indexOf(x);
          S !== -1 && i.splice(S, 1);
        }
        l.selection = i;
      }
    }, w = (x, _, g) => {
      if (e.selectRow && y(x, "selectRow"), e.select) {
        if (g.target.nodeName === "INPUT" || g.target.nodeName === "TD" && g.target.cellIndex === 0)
          return;
        o("click-row", _);
      } else
        o("click-row", _);
    }, v = (x, _) => {
      if (x.sorting === !0) {
        let g = null;
        x.sorted === "ASC" ? g = "DESC" : x.sorted === "DESC" ? g = "ASC" : x.sorted ? g = null : x.sortDefault ? g = x.sortDefault : g = "ASC";
        let i = [];
        e.headers.forEach((S) => {
          S.value === x.value ? i.push({
            ...S,
            sorted: g
          }) : i.push({
            ...S,
            sorted: null
          });
        }), o("sort", x, g, [...i]);
      }
    };
    return Me(() => l.selection, (x) => {
      let _ = [];
      l.selection.length ? (x.forEach((g) => {
        const i = e.rows[g];
        i && (e.selectionField && i[e.selectionField] ? _.push(i[e.selectionField]) : _.push(e.rows[g]));
      }), l.selection.length === e.rows.length ? l.selectedAll = !0 : l.selectedAll = !1) : l.selectedAll = !1, o("selection", _, [...x]);
    }), (x, _) => (c(), h("div", {
      class: m(r(n).wrapper)
    }, [
      $("table", {
        class: m(r(n).table)
      }, [
        !e.hideHeader && a.value.length ? (c(), h("thead", {
          key: 0,
          class: m(r(n).thead)
        }, [
          $("tr", {
            class: m(r(n).theadRow)
          }, [
            t.select ? (c(), h("th", {
              key: 0,
              scope: "col",
              class: m(r(n).theadColumnSelectAll)
            }, [
              k(x.$slots, "select-all", {}, () => [
                $("div", ys, [
                  e.selectOne ? C("", !0) : (c(), V(At, {
                    key: 0,
                    modelValue: l.selectedAll,
                    "onUpdate:modelValue": _[0] || (_[0] = (g) => l.selectedAll = g),
                    onChange: f,
                    disabled: e.loading,
                    variantCheckbox: e.variantCheckbox
                  }, null, 8, ["modelValue", "disabled", "variantCheckbox"]))
                ])
              ])
            ], 2)) : C("", !0),
            (c(!0), h(W, null, fe(a.value, (g, i) => (c(), h("th", {
              scope: "col",
              key: i,
              class: m({
                [r(n).theadColumn]: !0,
                [r(n).theadColumnSorting]: g.sorting,
                [r(n).theadColumnSorted]: g.sorted,
                "!text-left": !g.align,
                "!text-right": g.align === "right",
                "!text-center": g.align === "center"
              }),
              style: ee(`${g.minWidth ? `min-width: ${g.minWidth}` : ""} ${g.width ? `width: ${g.width};` : ""}`),
              onClick: (S) => v(g)
            }, [
              k(x.$slots, `header.${g.value}`, { header: g }, () => [
                $("div", bs, [
                  $("div", {
                    class: m(["grow", r(n).theadColumnLabel])
                  }, T(g.label), 3),
                  g.sorting ? (c(), h("div", {
                    key: 0,
                    class: m(["sort-icon", {
                      [r(n).theadColumnSortIcon]: !0,
                      [r(n).theadColumnSortIconSorted]: g.sorted
                    }])
                  }, [
                    g.sorted === "ASC" ? (c(), h("svg", ws, xs)) : g.sorted === "DESC" ? (c(), h("svg", $s, Cs)) : (c(), h("svg", ks, Bs))
                  ], 2)) : C("", !0)
                ])
              ])
            ], 14, vs))), 128))
          ], 2)
        ], 2)) : C("", !0),
        e.loading ? (c(), h("thead", As, [
          $("tr", Ps, [
            $("th", Os, [
              z(Rt, {
                variantLoaderLinear: e.variantLoaderLinear
              }, null, 8, ["variantLoaderLinear"])
            ])
          ])
        ])) : C("", !0),
        e.rows && e.rows.length ? (c(), h("tbody", {
          key: 2,
          ref_key: "tablebody",
          ref: s,
          class: m(r(n).tbody)
        }, [
          (c(!0), h(W, null, fe(e.rows, (g, i) => (c(), h("tr", {
            key: i,
            class: m([
              r(n).tbodyRow,
              g.class ? g.class : "",
              l.selection.includes(i) ? r(n).tbodyRowSelected : "",
              e.selectRow || e.rowCursor ? "cursor-pointer" : ""
            ]),
            onClick: (S) => w(i, x.item, S)
          }, [
            t.select ? (c(), h("td", {
              key: 0,
              class: m(["relative", r(n).tbodyColumnSelect])
            }, [
              k(x.$slots, "column.select", {}, () => [
                e.selectBorder && l.selection.includes(i) ? (c(), h("div", {
                  key: 0,
                  class: m(["absolute inset-y-0 left-0 w-0.5", r(n).tbodyColumnSelectBorder])
                }, null, 2)) : C("", !0),
                $("div", Ds, [
                  z(At, {
                    value: l.selection.includes(i),
                    onChange: (S) => y(i, "selectRow"),
                    onClick: _[1] || (_[1] = lt(() => {
                    }, ["stop"])),
                    disabled: e.loading,
                    variantCheckbox: e.variantCheckbox
                  }, null, 8, ["value", "onChange", "disabled", "variantCheckbox"])
                ])
              ])
            ], 2)) : C("", !0),
            (c(!0), h(W, null, fe(a.value, (S) => (c(), h("td", {
              key: S.value,
              class: m([
                r(n).tbodyColumn,
                S.align ? "" : "text-left",
                S.align === "right" ? "text-right" : "",
                S.align === "center" ? "text-center" : "",
                g.class ? g.class : "",
                S.class ? S.class : ""
              ]),
              style: ee(`${S.minWidth ? `min-width: ${S.minWidth};` : ""} ${S.width ? `width: ${S.width};` : ""}`)
            }, [
              k(x.$slots, `column.${S.value}`, {
                column: g,
                index: i
              }, () => [
                u(g, S.value) !== null && u(g, S.value) !== "" && u(g, S.value) ? (c(), h("span", Is, [
                  typeof S.formatValue == "function" ? (c(), h("span", Ns, T(S.formatValue(u(g, S.value))), 1)) : (c(), h("span", Rs, T(u(g, S.value)), 1))
                ])) : S.hasOwnProperty("empty") ? (c(), h("span", {
                  key: 1,
                  class: m(r(n).emptyCellText)
                }, T(S.empty), 3)) : e.emptyCellText ? (c(), h("span", {
                  key: 2,
                  class: m(r(n).emptyCellText)
                }, T(e.emptyCellText), 3)) : C("", !0)
              ])
            ], 6))), 128))
          ], 10, Ls))), 128))
        ], 2)) : (c(), h("tbody", {
          key: 3,
          ref_key: "tablebody",
          ref: s
        }, [
          $("tr", null, [
            $("td", {
              colspan: "100%",
              class: m(r(n).noData)
            }, [
              k(x.$slots, "nodata", {}, () => [
                E(T(d.value), 1)
              ])
            ], 2)
          ])
        ], 512))
      ], 2)
    ], 2));
  }
};
const Es = ["data-backdrop-id"], Vs = {
  __name: "Backdrop",
  props: {
    variant: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => {
      }
    },
    id: {
      type: String,
      default: null
    },
    persist: {
      type: Boolean,
      default: !1
    },
    relative: {
      type: Boolean,
      default: !1
    },
    show: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["close"],
  setup(t, { emit: o }) {
    const e = t, n = L("Backdrop", e.variant, e.classes), s = () => {
      e.persist === !1 && o("close");
    };
    return (l, a) => (c(), V(Oe, {
      name: "fade",
      appear: ""
    }, {
      default: I(() => [
        e.show ? (c(), h("div", {
          key: 0,
          onClick: s,
          "data-backdrop-id": e.id,
          class: m({
            backdrop: !0,
            [r(n).base]: !0,
            [r(n).theme]: !0,
            "cursor-pointer": !e.persist,
            fixed: !e.relative,
            absolute: e.relative
          })
        }, null, 10, Es)) : C("", !0)
      ]),
      _: 1
    }));
  }
}, Qt = /* @__PURE__ */ be(Vs, [["__scopeId", "data-v-06f6fb7a"]]);
const zs = ["data-modal-id"], Ms = { class: "h-full w-full" }, Ws = {
  __name: "Modal",
  props: {
    variant: {
      type: String,
      default: null
    },
    variantBackdrop: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => {
      }
    },
    type: {
      type: String,
      default: "center"
    },
    show: {
      type: Boolean,
      default: !1
    },
    scroll: {
      type: Boolean,
      default: !1
    },
    scrolling: {
      type: Boolean,
      default: !1
    },
    maxWidth: {
      type: Number,
      default: 0
    },
    status: {
      type: String,
      default: null
    },
    persist: {
      type: Boolean,
      default: !1
    },
    relative: {
      type: Boolean,
      default: !1
    },
    offsetDirection: {
      type: String,
      default: void 0
    },
    offsetValue: {
      type: [String, Number],
      default: 0
    },
    offsetDiv: {
      type: String,
      default: null
    }
  },
  emits: ["close", "end"],
  setup(t, { emit: o }) {
    const e = t;
    G();
    const n = L("Modal", e.variant, e.classes), s = ze({
      relativeOffsetPx: null,
      localShowing: !1,
      id: me()
    }), l = () => {
      o("close");
    }, a = () => {
      if (s.relativeOffsetPx = null, e.offsetDiv) {
        let p = 0, y = document.getElementById(this.offsetDiv);
        y && (p = y.offsetWidth);
        let v = +(document.getElementById("app").offsetWidth - p);
        v && (s.relativeOffsetPx = v);
      }
    }, d = D(() => e.offsetValue || s.relativeOffsetPx ? `width: calc(100% - 2em ${e.offsetValue || s.relativeOffsetPx ? `- ${e.offsetValue || s.relativeOffsetPx}px` : ""});` : e.centerOverflow || e.type === "full" ? "width: calc(100%);" : "width: auto;"), u = D(() => {
      if (s.relativeOffsetPx)
        return this.type === "center" ? `left: calc(${s.relativeOffsetPx}px + 1em); right: 1em;` : "right: 1em;";
      if (e.offsetDirection && this.offsetValue > 0)
        return `${e.offsetDirection}: ${e.offsetValue}px; ${f(e.offsetDirection)}: 0;`;
    }), f = (p) => p === "right" ? "left" : "right";
    D(() => {
      let p = [];
      switch (e.type) {
        case "center":
          p = p.concat([
            "inset-0",
            "max-w-xl",
            "mx-auto",
            "flex",
            "items-center",
            "justify-center"
          ]);
          break;
        case "full":
          p = p.concat([
            "inset-0",
            "h-screen",
            "flex",
            "items-center",
            "justify-center"
          ]);
          break;
      }
      return e.relative ? p = p.concat(["absolute"]) : !e.relative && e.scroll ? p = p.concat(["relative"]) : p = p.concat(["fixed"]), e.scrolling || (p = p.concat(["overflow-hidden"])), p;
    });
    const b = () => {
      document.querySelectorAll(".backdrop").length === 1 && (document.body.style.overflow = "auto");
    };
    return Me(() => e.show, (p) => {
      p === !0 ? (s.localShowing = !0, document.body.style.overflow = "hidden") : (b(), setTimeout(() => {
        s.localShowing = !1, o("end");
      }, 300));
    }), ro(() => {
      a();
    }), rt(() => {
      b();
    }), (p, y) => We((c(), h("div", {
      class: m({
        [r(n).base]: !0,
        "overflow-y-scroll": e.scroll
      })
    }, [
      $("div", {
        class: m({
          [r(n).wrapper]: !0,
          "min-h-full": e.type !== "full",
          "h-full": e.type === "full"
        })
      }, [
        z(Oe, {
          name: "pop",
          appear: ""
        }, {
          default: I(() => [
            e.show ? (c(), h("div", {
              key: 0,
              "data-modal-id": s.id,
              class: m({
                [r(n).content]: !0,
                [r(n).contentTheme]: !0,
                containerClasses: !0,
                "h-screen": e.type === "full"
              }),
              style: ee(`${e.maxWidth ? `max-width:${e.maxWidth}px;` : ""} min-width: 300px; ${e.scroll ? "margin-top: 1em; margin-bottom: 1em;" : "max-height: calc(100vh);"} ${d.value} ${u.value};`)
            }, [
              $("div", Ms, [
                k(p.$slots, "default", {}, void 0, !0)
              ])
            ], 14, zs)) : C("", !0)
          ]),
          _: 3
        })
      ], 2),
      z(Qt, {
        show: e.show,
        persist: e.persist,
        relative: e.relative,
        variant: e.variantBackdrop,
        id: s.id,
        onClose: l
      }, null, 8, ["show", "persist", "relative", "variant", "id"])
    ], 2)), [
      [He, s.localShowing]
    ]);
  }
}, dr = /* @__PURE__ */ be(Ws, [["__scopeId", "data-v-dcbeca18"]]);
const Hs = {
  __name: "Drawer",
  props: {
    variant: {
      type: String,
      default: null
    },
    variantBackdrop: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => {
      }
    },
    position: {
      type: String,
      default: "right"
    },
    show: {
      type: Boolean,
      default: !1
    },
    scrolling: {
      type: Boolean,
      default: !1
    },
    persist: {
      type: Boolean,
      default: !1
    },
    relative: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["close"],
  setup(t, { emit: o }) {
    const e = t;
    G();
    const n = L("Drawer", e.variant, e.classes), s = ze({
      localShowing: !1,
      id: me()
    }), l = () => {
      o("close");
    }, a = D(() => {
      let u = [
        "block",
        "inset-y-0",
        "w-full",
        "sm:max-w-xl"
      ];
      switch (e.position) {
        case "right":
          u = u.concat(["right-0"]);
          break;
        case "left":
          u = u.concat(["left-0"]);
          break;
      }
      return e.scrolling ? u = u.concat(["overflow-y-auto"]) : u = u.concat(["overflow-y-hidden"]), u;
    }), d = () => {
      document.querySelectorAll(".backdrop").length === 1 && (document.body.style.overflow = "auto");
    };
    return Me(() => e.show, (u) => {
      u === !0 ? (s.localShowing = !0, document.body.style.overflow = "hidden") : (d(), s.localShowing = !1);
    }), rt(() => {
      d();
    }), (u, f) => (c(), h("div", {
      class: m(r(n).base)
    }, [
      z(Oe, {
        name: `slide-${t.position}`,
        appear: ""
      }, {
        default: I(() => [
          s.localShowing ? (c(), h("div", {
            key: 0,
            class: m([a.value, r(n).content, r(n).contentTheme]),
            style: ee(`${e.maxWidth ? `max-width: ${e.maxWidth}px;` : ""} min-width: 300px; height: 100%;`)
          }, [
            k(u.$slots, "default", {}, void 0, !0)
          ], 6)) : C("", !0)
        ]),
        _: 3
      }, 8, ["name"]),
      z(Qt, {
        show: e.show,
        persist: e.persist,
        relative: e.relative,
        variant: e.variantBackdrop,
        id: s.id,
        onClose: l
      }, null, 8, ["show", "persist", "relative", "variant", "id"])
    ], 2));
  }
}, ur = /* @__PURE__ */ be(Hs, [["__scopeId", "data-v-e8ebe9fa"]]);
export {
  Us as Avatar,
  Xs as AvatarGroup,
  Qt as Backdrop,
  Ys as Badge,
  _e as Button,
  Ks as ButtonGroup,
  Zs as Card,
  At as Checkbox,
  ur as Drawer,
  Js as Dropdown,
  Gs as Expandable,
  qs as ExpandableGroup,
  rr as InputArea,
  sr as InputText,
  Pe as Label,
  er as List,
  tr as ListItem,
  Rt as LoaderLinear,
  or as LoaderProgress,
  xo as LoaderSpinner,
  dr as Modal,
  Qs as Pagination,
  ar as Tab,
  ir as Table,
  lr as Tabs,
  nr as Toggle,
  In as Tooltip,
  Fs as setVariantClasses,
  L as useVariantClasses
};
