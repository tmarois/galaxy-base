import { reactive as Me, readonly as mt, openBlock as i, createElementBlock as d, normalizeClass as h, unref as r, renderSlot as C, ref as U, inject as F, watch as We, createElementVNode as w, createCommentVNode as S, createTextVNode as z, toDisplayString as T, createVNode as V, Transition as ye, withCtx as D, withDirectives as je, vShow as He, pushScopeId as rt, popScopeId as lt, provide as j, useSlots as G, computed as N, createBlock as W, resolveDynamicComponent as Fe, mergeProps as at, Fragment as O, onMounted as It, renderList as M, withModifiers as de, nextTick as Dt, defineComponent as Ge, normalizeProps as Nt, guardReactiveProps as Rt, withScopeId as so, resolveComponent as Je, normalizeStyle as te, withKeys as ro, onBeforeUnmount as it, createSlots as Qe, Comment as lo } from "vue";
const ao = {
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
      contentGrouped: "border-2 border-white",
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
      tabItem: "text-gray-500 rounded px-3 py-2 text-sm font-medium cursor-pointer transition-all duration-200",
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
      tabItem: "cursor-pointer border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap border-b-2 py-2.5 px-1 text-sm font-medium border-primary-600 transition-all duration-200",
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
  },
  Carousel: {
    default: {}
  },
  Container: {
    default: {
      base: "flex h-full flex-col mx-auto",
      width: "max-w-7xl"
    }
  },
  Gallery: {
    default: {
      wrapper: "relative overflow-hidden whitespace-nowrap",
      itemList: "",
      item: "h-[48px] mr-[60px]",
      image: "w-full h-full"
    }
  }
}, et = Me(ao);
function L(t, o, e = {}) {
  const n = et[t];
  if (n)
    return o && n[o] ? mt({ ...n.default, ...n[o], ...e }) : mt({ ...n.default, ...e });
  console.warn(`[Galaxy Vue warn] No component "${t}" not found in variant list`);
}
function vr(t) {
  Object.assign(et, Et(JSON.parse(JSON.stringify(et)), t));
}
function Et(t, o) {
  for (const e in o) {
    const n = t[e], s = o[e];
    gt(n) && gt(s) ? t[e] = Et({ ...n }, s) : s !== void 0 && (t[e] = s);
  }
  return t;
}
function gt(t) {
  return t && typeof t == "object" && !Array.isArray(t);
}
const br = {
  __name: "Container",
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
  emits: ["close"],
  setup(t, { emit: o }) {
    const e = t, n = L("Container", e.variant, e.classes);
    return (s, l) => (i(), d("div", {
      class: h([r(n).base, r(n).width])
    }, [
      C(s.$slots, "default")
    ], 2));
  }
}, ve = () => Math.random().toString(36).substr(2, 9);
const re = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [n, s] of o)
    e[n] = s;
  return e;
}, zt = (t) => (rt("data-v-e3242f54"), t = t(), lt(), t), io = /* @__PURE__ */ zt(() => /* @__PURE__ */ w("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M8.25 4.5l7.5 7.5-7.5 7.5"
}, null, -1)), uo = [
  io
], co = /* @__PURE__ */ zt(() => /* @__PURE__ */ w("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
}, null, -1)), po = [
  co
], fo = {
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
    const o = t, e = ve(), n = U(null), s = U(!1), l = L("Expandable", o.variant, o.classes), a = F("IS_EXPANDABLE_GROUP", 0), c = F("IS_ALWAYS_OPEN", 0), u = F("EXPAND_ACTIVE", null);
    a && We(u, (y, $) => {
      !c && y !== e && (s.value = !1);
    });
    const g = () => {
      o.disabled || (s.value = !s.value, a && s.value === !0 && (u.value = e));
    }, _ = (y) => {
      y.style.height = "0";
    }, m = (y) => {
      y.style.height = y.scrollHeight + "px";
    }, f = (y) => {
      y.style.height = y.scrollHeight + "px";
    }, v = (y) => {
      y.style.height = "0";
    };
    return (y, $) => (i(), d("div", {
      class: h(["expandable-wrapper relative", {
        [r(l).panelWrapperNotGrouped]: !r(a),
        [r(l).panelWrapperGrouped]: r(a)
      }])
    }, [
      w("div", {
        class: h({
          "expandable flex items-center justify-start": !0,
          [r(l).panel]: !0,
          [r(l).panelTheme]: !0,
          [r(l).panelActive]: s.value,
          [r(l).panelDisabled]: o.disabled
        }),
        onClick: g
      }, [
        t.arrowPosition === "start" && !o.arrowHide ? (i(), d("div", {
          key: 0,
          class: h({
            "mr-2": !0,
            [r(l).panelArrowWrapper]: !0,
            [r(l).panelArrowWrapperDisabled]: o.disabled
          })
        }, [
          C(y.$slots, "arrow-start", {}, () => [
            (i(), d("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              "stroke-width": "1.5",
              stroke: "currentColor",
              class: h([r(l).panelArrowSize, { "rotate-0": !s.value, "rotate-90": s.value }])
            }, uo, 2))
          ], !0)
        ], 2)) : S("", !0),
        w("div", {
          class: h(["grow", {
            [r(l).panelTitle]: !0,
            [r(l).panelTitleDisabled]: o.disabled
          }])
        }, [
          C(y.$slots, "title", {}, () => [
            z(T(o.title), 1)
          ], !0)
        ], 2),
        t.arrowPosition === "end" && !o.arrowHide ? (i(), d("div", {
          key: 1,
          class: h({
            [r(l).panelArrowWrapper]: !0,
            [r(l).panelArrowWrapperDisabled]: o.disabled
          })
        }, [
          C(y.$slots, "arrow-end", {}, () => [
            (i(), d("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              "stroke-width": "1.5",
              stroke: "currentColor",
              class: h([r(l).panelArrowSize, { "rotate-0": !s.value, "rotate-180": s.value }])
            }, po, 2))
          ], !0)
        ], 2)) : S("", !0)
      ], 2),
      V(ye, {
        name: "slide",
        onBeforeEnter: _,
        onEnter: m,
        onBeforeLeave: f,
        onLeave: v
      }, {
        default: D(() => [
          je(w("div", {
            ref_key: "content",
            ref: n,
            class: h(["overflow-hidden", r(l).panelContent])
          }, [
            C(y.$slots, "default", {}, void 0, !0)
          ], 2), [
            [He, s.value]
          ])
        ]),
        _: 3
      })
    ], 2));
  }
}, wr = /* @__PURE__ */ re(fo, [["__scopeId", "data-v-e3242f54"]]);
const _r = {
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
    const o = t, e = U(!1), n = L("Expandable", o.variant, o.classes);
    return j("IS_EXPANDABLE_GROUP", 1), j("IS_ALWAYS_OPEN", o.alwaysOpen), j("EXPAND_ACTIVE", e), (s, l) => (i(), d("div", {
      class: h(["expandable-group", [r(n).group, r(n).groupTheme]])
    }, [
      C(s.$slots, "default")
    ], 2));
  }
}, ho = { key: 1 }, mo = ["src"], go = /* @__PURE__ */ w("path", {
  "fill-rule": "evenodd",
  d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
  "clip-rule": "evenodd"
}, null, -1), yo = [
  go
], xr = {
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
    const o = t, e = G(), n = L("Avatar", o.variant, o.classes), s = F("IS_AVATAR_GROUPED", 0);
    return (l, a) => {
      var c;
      return i(), d("div", {
        class: h(r(n).wrapper)
      }, [
        w("div", {
          class: h([
            r(n).content,
            r(n).contentSize,
            r(n).contentTheme,
            {
              [r(n).contentGrouped]: r(s),
              [r(n).contentHover]: o.hover
            }
          ])
        }, [
          o.text || ((c = r(e)) == null ? void 0 : c.default) ? C(l.$slots, "default", { key: 0 }, () => [
            z(T(o.text), 1)
          ]) : o.img ? (i(), d("div", ho, [
            w("img", {
              src: o.img,
              alt: ""
            }, null, 8, mo)
          ])) : (i(), d("div", {
            key: 2,
            class: h(r(n).defaultPlaceholderWrapper)
          }, [
            (i(), d("svg", {
              class: h(r(n).defaultPlaceholderIcon),
              fill: "currentColor",
              viewBox: "0 0 20 20",
              xmlns: "http://www.w3.org/2000/svg"
            }, yo, 2))
          ], 2)),
          o.status !== null ? (i(), d("span", {
            key: 3,
            class: h([
              r(n).statusDotSizePosition,
              r(n).statusDotTheme,
              {
                [r(n).statusDotOnline]: o.status === "online",
                [r(n).statusDotBusy]: o.status === "busy",
                [r(n).statusDotAway]: o.status === "away",
                [r(n).statusDotOffline]: o.status !== "online" || o.status !== "busy" || o.status === "away"
              }
            ])
          }, null, 2)) : S("", !0)
        ], 2)
      ], 2);
    };
  }
}, $r = {
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
    return j("IS_AVATAR_GROUPED", 1), (n, s) => (i(), d("div", {
      class: h(r(e).content)
    }, [
      C(n.$slots, "default")
    ], 2));
  }
}, vo = /* @__PURE__ */ w("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M6 18L18 6M6 6l12 12"
}, null, -1), bo = [
  vo
], kr = {
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
    return (l, a) => (i(), d("div", {
      class: h([r(n).base, r(n).theme, r(n).themeColor])
    }, [
      w("div", null, [
        C(l.$slots, "default", {}, () => [
          z(T(e.text), 1)
        ])
      ]),
      e.removable ? (i(), d("button", {
        key: 0,
        type: "button",
        class: h([r(n).removeButton, r(n).removeButtonTheme]),
        onClick: a[0] || (a[0] = (c) => s(c))
      }, [
        C(l.$slots, "remove-icon", {}, () => [
          (i(), d("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: h(r(n).removeIcon)
          }, bo, 2))
        ])
      ], 2)) : S("", !0)
    ], 2));
  }
}, wo = /* @__PURE__ */ w("path", {
  d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
  fill: "currentColor"
}, null, -1), _o = /* @__PURE__ */ w("path", {
  d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
  fill: "currentFill"
}, null, -1), xo = [
  wo,
  _o
], $o = {
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
    return (n, s) => (i(), d("svg", {
      "aria-hidden": "true",
      class: h([
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
    }, xo, 2));
  }
};
const ko = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-auto h-auto"
}, So = /* @__PURE__ */ w("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M4.5 15.75l7.5-7.5 7.5 7.5"
}, null, -1), Co = [
  So
], To = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-auto h-auto"
}, Bo = /* @__PURE__ */ w("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
}, null, -1), Ao = [
  Bo
], $e = {
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
    const o = t, e = G(), n = F("IS_BUTTON_GROUP", 0), s = F("IS_BUTTON_GROUP_RESPONSIVE", 0), l = F("IS_DROPDOWN", 0), a = F("IS_DROPDOWN_OPEN", 0), c = F("IS_DROPDOWN_ARROW", 0), u = F("IS_BUTTON_GROUP_VARIANT", null), g = U(o.variant);
    n && u && !o.variant && (g.value = u);
    const _ = L("Button", g.value, o.classes), m = N(() => ({
      "btn relative inline-flex items-center justify-center": !0,
      "w-full h-full": o.responsive || s,
      [_.base]: !0,
      [_.baseSize]: !0,
      [_.baseSizeIconOnly]: !n && (o.circle && v.value || v.value),
      [_.normal]: !o.outlined && !o.ghost && !o.disabled,
      [_.outlined]: o.outlined && !o.disabled,
      [_.ghost]: o.ghost && !o.outlined && !o.disabled,
      [_.normalDisabled]: !o.outlined && !o.ghost && o.disabled,
      [_.outlinedDisabled]: o.outlined && !o.ghost && o.disabled,
      [_.ghostDisabled]: o.ghost && !o.outlined && o.disabled,
      [_.shadow]: !n && !o.outlined && !o.ghost,
      [_.disabled]: o.disabled,
      "rounded-full": o.circle,
      btn__loading: o.loading
    })), f = N(() => {
      let y = "";
      const $ = {
        disabled: !1,
        target: null,
        href: null,
        to: null
      };
      return o.disabled ? y = "button" : (o.to ? (y = "RouterLink", $.to = o.to) : (y = o.href && "a" || o.tag || "div", y === "a" && o.href && ($.href = o.href)), o.target && ($.target = o.target)), y === "button" && o.disabled && ($.disabled = !0), { tag: y, data: $ };
    }), v = N(() => !!(!e.default && e.icon));
    return (y, $) => (i(), W(Fe(f.value.tag), at(f.value.data, { class: m.value }), {
      default: D(() => {
        var x, b, p, k, I, A, P, R, q, Y;
        return [
          o.loading || ((x = r(e)) == null ? void 0 : x.icon) ? (i(), d("span", {
            key: 0,
            class: h({
              "flex items-center justify-center": !0,
              "mr-2": (b = r(e)) == null ? void 0 : b.default
            })
          }, [
            o.loading ? (i(), d("span", {
              key: 0,
              class: h({
                btn__loader: o.loading && !((p = r(e)) != null && p.default),
                "opacity-0": !o.loading
              })
            }, [
              C(y.$slots, "loader", {}, () => [
                V($o, {
                  disabled: o.disabled,
                  variant: o.variantLoader
                }, null, 8, ["disabled", "variant"])
              ])
            ], 2)) : S("", !0),
            ((k = r(e)) == null ? void 0 : k.icon) && !((I = r(e)) != null && I.default) || !o.loading && ((A = r(e)) == null ? void 0 : A.icon) && ((P = r(e)) == null ? void 0 : P.default) ? (i(), d("span", {
              key: 1,
              class: h({
                "opacity-0": o.loading,
                [r(_).iconSize]: !0
              })
            }, [
              C(y.$slots, "icon")
            ], 2)) : S("", !0)
          ], 2)) : S("", !0),
          (R = r(e)) != null && R.default ? (i(), d("span", {
            key: 1,
            class: h({
              "opacity-0": o.loading && !((q = r(e)) != null && q.default)
            })
          }, [
            C(y.$slots, "default")
          ], 2)) : S("", !0),
          ((Y = r(e)) == null ? void 0 : Y.default) && (r(e)["icon-after"] || r(l) && r(c)) ? (i(), d("span", {
            key: 2,
            class: h(["ml-2", r(_).iconSize])
          }, [
            C(y.$slots, "icon-after", {}, () => [
              r(l) && r(c) && r(a) ? (i(), d("svg", ko, Co)) : r(l) && r(c) ? (i(), d("svg", To, Ao)) : S("", !0)
            ])
          ], 2)) : S("", !0)
        ];
      }),
      _: 3
    }, 16, ["class"]));
  }
};
const Sr = {
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
    return j("IS_BUTTON_GROUP", 1), j("IS_BUTTON_GROUP_RESPONSIVE", o.responsive), j("IS_BUTTON_GROUP_VARIANT", o.variant), (n, s) => (i(), d("div", {
      class: h({
        relative: !0,
        "w-full h-full": o.responsive,
        [r(e).content]: !0
      })
    }, [
      C(n.$slots, "default")
    ], 2));
  }
};
const Po = {
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
    return (n, s) => (i(), d("div", {
      class: h([
        r(e).base,
        r(e).size,
        {
          [r(e).emptyColor]: !o.disabled,
          [r(e).disabledEmptyColor]: o.disabled
        }
      ])
    }, [
      w("div", {
        class: h(["loader-linear", {
          [r(e).fillColor]: !o.disabled,
          [r(e).disabledFillColor]: o.disabled
        }])
      }, null, 2)
    ], 2));
  }
}, Vt = /* @__PURE__ */ re(Po, [["__scopeId", "data-v-ab2ac7d3"]]), Cr = {
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
    return (s, l) => (i(), d("div", {
      class: h(r(n).wrapper)
    }, [
      o.detachedHeader && (o.title || r(e).header || r(e).actions) ? (i(), d("div", {
        key: 0,
        class: h(r(n).detachedHeaderWrapper)
      }, [
        w("div", {
          class: h(r(n).headerTitleWrapper)
        }, [
          r(e).header ? C(s.$slots, "header", { key: 1 }) : (i(), d(O, { key: 0 }, [
            w("h1", {
              class: h(r(n).headerTitle)
            }, T(o.title), 3),
            w("div", {
              class: h(r(n).headerSubtitle)
            }, T(o.subtitle), 3)
          ], 64))
        ], 2),
        r(e).actions ? (i(), d("div", {
          key: 0,
          class: h(r(n).headerActions)
        }, [
          C(s.$slots, "actions")
        ], 2)) : S("", !0)
      ], 2)) : S("", !0),
      w("div", {
        class: h([r(n).contentWrapper, r(n).contentTheme])
      }, [
        o.disabled ? (i(), d("div", {
          key: 0,
          class: h(r(n).contentDisabled)
        }, null, 2)) : S("", !0),
        !o.detachedHeader && (o.title || r(e).header || r(e).actions) ? (i(), d("div", {
          key: 1,
          class: h([r(n).headerWrapper, r(n).headerTheme, { [r(n).padding]: !o.removeHeaderPadding && !o.removePadding }])
        }, [
          w("div", {
            class: h(r(n).headerTitleWrapper)
          }, [
            r(e).header ? C(s.$slots, "header", { key: 1 }) : (i(), d(O, { key: 0 }, [
              w("h1", {
                class: h(r(n).headerTitle)
              }, T(o.title), 3),
              w("div", {
                class: h(r(n).headerSubtitle)
              }, T(o.subtitle), 3)
            ], 64))
          ], 2),
          r(e).actions ? (i(), d("div", {
            key: 0,
            class: h(r(n).headerActions)
          }, [
            C(s.$slots, "actions")
          ], 2)) : S("", !0)
        ], 2)) : S("", !0),
        o.loading ? (i(), W(Vt, {
          key: 2,
          classes: { base: "inline-block w-full overflow-hidden relative -mt-1 z-10" },
          variant: t.variantLoader
        }, null, 8, ["variant"])) : S("", !0),
        w("div", {
          class: h([r(n).body, { [r(n).padding]: !o.removeBodyPadding && !o.removePadding }])
        }, [
          C(s.$slots, "default")
        ], 2),
        r(e).footer ? (i(), d("div", {
          key: 3,
          class: h([r(n).footerTheme, { [r(n).padding]: !o.removeFooterPadding && !o.removePadding }])
        }, [
          C(s.$slots, "footer")
        ], 2)) : S("", !0)
      ], 2)
    ], 2));
  }
};
const dt = (t) => (rt("data-v-37ddb19f"), t = t(), lt(), t), Oo = { class: "flex w-full" }, Lo = {
  key: 0,
  class: "p-4 space-y-2"
}, Io = ["onClick"], Do = ["src", "alt"], No = { class: "grow relative" }, Ro = { class: "overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96" }, Eo = ["src", "alt"], zo = {
  key: 0,
  class: "bg-gray-100 block absolute bottom-0 text-center w-full text-xs py-2"
}, Vo = {
  key: 0,
  class: "flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2"
}, Mo = ["aria-label", "onClick"], Wo = ["onClick"], jo = /* @__PURE__ */ dt(() => /* @__PURE__ */ w("span", { class: "inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none" }, [
  /* @__PURE__ */ w("svg", {
    class: "w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    /* @__PURE__ */ w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M15 19l-7-7 7-7"
    })
  ]),
  /* @__PURE__ */ w("span", { class: "hidden" }, "Previous")
], -1)), Ho = [
  jo
], Fo = ["onClick"], Go = /* @__PURE__ */ dt(() => /* @__PURE__ */ w("span", { class: "inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none" }, [
  /* @__PURE__ */ w("svg", {
    class: "w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    /* @__PURE__ */ w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M9 5l7 7-7 7"
    })
  ]),
  /* @__PURE__ */ w("span", { class: "hidden" }, "Next")
], -1)), qo = [
  Go
], Uo = {
  key: 0,
  class: "mx-auto mt-4 hidden w-full max-w-2xl sm:block lg:max-w-none"
}, Xo = {
  class: "grid grid-cols-6 gap-4",
  "aria-orientation": "horizontal",
  role: "tablist"
}, Yo = ["onClick"], Ko = /* @__PURE__ */ dt(() => /* @__PURE__ */ w("span", { class: "sr-only" }, "Angled view", -1)), Zo = { class: "absolute inset-0 overflow-hidden rounded-md" }, Jo = ["src", "alt"], Qo = {
  __name: "Carousel",
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
    images: {
      type: Array,
      default: () => []
    },
    indicators: {
      type: Boolean,
      default: !1
    },
    controls: {
      type: Boolean,
      default: !1
    },
    slide: {
      type: Boolean,
      default: !1
    },
    slideInterval: {
      type: Number,
      default: 3e3
    },
    thumbnails: {
      type: Boolean,
      default: !1
    },
    thumbnailPosition: {
      type: String,
      default: "left"
    },
    imageAlt: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const o = t;
    L("Carousel", o.variant, o.classes);
    const e = U(0), n = U(""), s = U(), l = () => {
      e.value !== o.images.length - 1 ? e.value++ : e.value = 0, n.value = "right", u();
    }, a = () => {
      e.value !== 0 ? e.value-- : e.value = o.images.length - 1, n.value = "left", u();
    }, c = (_) => {
      Dt(() => {
        e.value = _;
      }), u();
    }, u = () => {
      clearInterval(s.value), o.slide && g();
    }, g = () => {
      s.value = setInterval(function() {
        l();
      }, o.slideInterval);
    };
    return It(() => {
      o.slide && g();
    }), (_, m) => (i(), d("div", null, [
      w("div", Oo, [
        o.thumbnails && o.thumbnailPosition === "left" ? (i(), d("div", Lo, [
          (i(!0), d(O, null, M(t.images, (f, v) => (i(), d("div", {
            class: h([v === e.value ? "opacity-100 ring-primary-500" : "ring-transparent opacity-60 border-2 border-transparent", "w-[60px] hover:opacity-100 cursor-pointer overflow-hidden rounded ring-2 ring-offset-2"]),
            key: v,
            onClick: de((y) => c(v), ["prevent"])
          }, [
            w("img", {
              src: f != null && f.thumbnail ? f.thumbnail : f.src,
              class: "block w-full h-full",
              alt: f.alt
            }, null, 8, Do)
          ], 10, Io))), 128))
        ])) : S("", !0),
        w("div", No, [
          w("div", Ro, [
            (i(!0), d(O, null, M(t.images, (f, v) => (i(), d("div", {
              class: h([v === e.value ? "z-30" : "z-0", "absolute inset-0 -translate-y-0"]),
              key: v
            }, [
              V(ye, {
                name: "fade",
                mode: "out-in",
                appear: ""
              }, {
                default: D(() => [
                  v === e.value ? (i(), d("img", {
                    key: 0,
                    src: f.src,
                    class: "block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2",
                    alt: f.alt
                  }, null, 8, Eo)) : S("", !0)
                ]),
                _: 2
              }, 1024),
              o.imageAlt && f.alt ? (i(), d("div", zo, T(f.alt), 1)) : S("", !0)
            ], 2))), 128))
          ]),
          o.indicators ? (i(), d("div", Vo, [
            (i(!0), d(O, null, M(t.images, (f, v) => (i(), d("button", {
              key: v,
              type: "button",
              class: h([v === e.value ? "bg-white" : "bg-white/50", "w-3 h-3 rounded-full bg-white"]),
              "aria-current": "false",
              "aria-label": "Slide " + v,
              onClick: de((y) => c(v), ["prevent"])
            }, null, 10, Mo))), 128))
          ])) : S("", !0),
          t.controls ? (i(), d("button", {
            key: 1,
            onClick: de(a, ["prevent"]),
            type: "button",
            class: "flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          }, Ho, 8, Wo)) : S("", !0),
          t.controls ? (i(), d("button", {
            key: 2,
            onClick: de(l, ["prevent"]),
            type: "button",
            class: "flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          }, qo, 8, Fo)) : S("", !0)
        ])
      ]),
      o.thumbnails && o.thumbnailPosition === "bottom" ? (i(), d("div", Uo, [
        w("div", Xo, [
          (i(!0), d(O, null, M(t.images, (f, v) => (i(), d("button", {
            key: v,
            class: "relative flex h-16 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none",
            "aria-controls": "tabs-1-panel-1",
            role: "tab",
            type: "button",
            onClick: de((y) => c(v), ["prevent"])
          }, [
            Ko,
            w("span", Zo, [
              w("img", {
                src: f != null && f.thumbnail ? f.thumbnail : f.src,
                alt: f.alt,
                class: h([v === e.value ? "opacity-100" : "opacity-70", "h-full w-full object-cover object-center hover:opacity-100"])
              }, null, 10, Jo)
            ]),
            w("span", {
              class: h([v === e.value ? "ring-primary-500" : "ring-transparent", "pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2"]),
              "aria-hidden": "true"
            }, null, 2)
          ], 8, Yo))), 128))
        ])
      ])) : S("", !0)
    ]));
  }
}, Tr = /* @__PURE__ */ re(Qo, [["__scopeId", "data-v-37ddb19f"]]);
function ee(t) {
  return t.split("-")[1];
}
function ut(t) {
  return t === "y" ? "height" : "width";
}
function oe(t) {
  return t.split("-")[0];
}
function xe(t) {
  return ["top", "bottom"].includes(oe(t)) ? "x" : "y";
}
function yt(t, o, e) {
  let {
    reference: n,
    floating: s
  } = t;
  const l = n.x + n.width / 2 - s.width / 2, a = n.y + n.height / 2 - s.height / 2, c = xe(o), u = ut(c), g = n[u] / 2 - s[u] / 2, _ = oe(o), m = c === "x";
  let f;
  switch (_) {
    case "top":
      f = {
        x: l,
        y: n.y - s.height
      };
      break;
    case "bottom":
      f = {
        x: l,
        y: n.y + n.height
      };
      break;
    case "right":
      f = {
        x: n.x + n.width,
        y: a
      };
      break;
    case "left":
      f = {
        x: n.x - s.width,
        y: a
      };
      break;
    default:
      f = {
        x: n.x,
        y: n.y
      };
  }
  switch (ee(o)) {
    case "start":
      f[c] -= g * (e && m ? -1 : 1);
      break;
    case "end":
      f[c] += g * (e && m ? -1 : 1);
      break;
  }
  return f;
}
const en = async (t, o, e) => {
  const {
    placement: n = "bottom",
    strategy: s = "absolute",
    middleware: l = [],
    platform: a
  } = e, c = l.filter(Boolean), u = await (a.isRTL == null ? void 0 : a.isRTL(o));
  let g = await a.getElementRects({
    reference: t,
    floating: o,
    strategy: s
  }), {
    x: _,
    y: m
  } = yt(g, n, u), f = n, v = {}, y = 0;
  for (let $ = 0; $ < c.length; $++) {
    const {
      name: x,
      fn: b
    } = c[$], {
      x: p,
      y: k,
      data: I,
      reset: A
    } = await b({
      x: _,
      y: m,
      initialPlacement: n,
      placement: f,
      strategy: s,
      middlewareData: v,
      rects: g,
      platform: a,
      elements: {
        reference: t,
        floating: o
      }
    });
    if (_ = p != null ? p : _, m = k != null ? k : m, v = {
      ...v,
      [x]: {
        ...v[x],
        ...I
      }
    }, A && y <= 50) {
      y++, typeof A == "object" && (A.placement && (f = A.placement), A.rects && (g = A.rects === !0 ? await a.getElementRects({
        reference: t,
        floating: o,
        strategy: s
      }) : A.rects), {
        x: _,
        y: m
      } = yt(g, f, u)), $ = -1;
      continue;
    }
  }
  return {
    x: _,
    y: m,
    placement: f,
    strategy: s,
    middlewareData: v
  };
};
function be(t, o) {
  return typeof t == "function" ? t(o) : t;
}
function tn(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Mt(t) {
  return typeof t != "number" ? tn(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function ke(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
async function qe(t, o) {
  var e;
  o === void 0 && (o = {});
  const {
    x: n,
    y: s,
    platform: l,
    rects: a,
    elements: c,
    strategy: u
  } = t, {
    boundary: g = "clippingAncestors",
    rootBoundary: _ = "viewport",
    elementContext: m = "floating",
    altBoundary: f = !1,
    padding: v = 0
  } = be(o, t), y = Mt(v), x = c[f ? m === "floating" ? "reference" : "floating" : m], b = ke(await l.getClippingRect({
    element: (e = await (l.isElement == null ? void 0 : l.isElement(x))) == null || e ? x : x.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(c.floating)),
    boundary: g,
    rootBoundary: _,
    strategy: u
  })), p = m === "floating" ? {
    ...a.floating,
    x: n,
    y: s
  } : a.reference, k = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(c.floating)), I = await (l.isElement == null ? void 0 : l.isElement(k)) ? await (l.getScale == null ? void 0 : l.getScale(k)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, A = ke(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: p,
    offsetParent: k,
    strategy: u
  }) : p);
  return {
    top: (b.top - A.top + y.top) / I.y,
    bottom: (A.bottom - b.bottom + y.bottom) / I.y,
    left: (b.left - A.left + y.left) / I.x,
    right: (A.right - b.right + y.right) / I.x
  };
}
const Ae = Math.min, me = Math.max;
function tt(t, o, e) {
  return me(t, Ae(o, e));
}
const on = (t) => ({
  name: "arrow",
  options: t,
  async fn(o) {
    const {
      x: e,
      y: n,
      placement: s,
      rects: l,
      platform: a,
      elements: c
    } = o, {
      element: u,
      padding: g = 0
    } = be(t, o) || {};
    if (u == null)
      return {};
    const _ = Mt(g), m = {
      x: e,
      y: n
    }, f = xe(s), v = ut(f), y = await a.getDimensions(u), $ = f === "y", x = $ ? "top" : "left", b = $ ? "bottom" : "right", p = $ ? "clientHeight" : "clientWidth", k = l.reference[v] + l.reference[f] - m[f] - l.floating[v], I = m[f] - l.reference[f], A = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
    let P = A ? A[p] : 0;
    (!P || !await (a.isElement == null ? void 0 : a.isElement(A))) && (P = c.floating[p] || l.floating[v]);
    const R = k / 2 - I / 2, q = P / 2 - y[v] / 2 - 1, Y = Ae(_[x], q), J = Ae(_[b], q), E = Y, X = P - y[v] - J, H = P / 2 - y[v] / 2 + R, K = tt(E, H, X), le = ee(s) != null && H != K && l.reference[v] / 2 - (H < E ? Y : J) - y[v] / 2 < 0 ? H < E ? E - H : X - H : 0;
    return {
      [f]: m[f] - le,
      data: {
        [f]: K,
        centerOffset: H - K + le
      }
    };
  }
}), nn = ["top", "right", "bottom", "left"], vt = /* @__PURE__ */ nn.reduce((t, o) => t.concat(o, o + "-start", o + "-end"), []), sn = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Re(t) {
  return t.replace(/left|right|bottom|top/g, (o) => sn[o]);
}
function Wt(t, o, e) {
  e === void 0 && (e = !1);
  const n = ee(t), s = xe(t), l = ut(s);
  let a = s === "x" ? n === (e ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return o.reference[l] > o.floating[l] && (a = Re(a)), {
    main: a,
    cross: Re(a)
  };
}
const rn = {
  start: "end",
  end: "start"
};
function Ee(t) {
  return t.replace(/start|end/g, (o) => rn[o]);
}
function ln(t, o, e) {
  return (t ? [...e.filter((s) => ee(s) === t), ...e.filter((s) => ee(s) !== t)] : e.filter((s) => oe(s) === s)).filter((s) => t ? ee(s) === t || (o ? Ee(s) !== s : !1) : !0);
}
const an = function(t) {
  return t === void 0 && (t = {}), {
    name: "autoPlacement",
    options: t,
    async fn(o) {
      var e, n, s;
      const {
        rects: l,
        middlewareData: a,
        placement: c,
        platform: u,
        elements: g
      } = o, {
        crossAxis: _ = !1,
        alignment: m,
        allowedPlacements: f = vt,
        autoAlignment: v = !0,
        ...y
      } = be(t, o), $ = m !== void 0 || f === vt ? ln(m || null, v, f) : f, x = await qe(o, y), b = ((e = a.autoPlacement) == null ? void 0 : e.index) || 0, p = $[b];
      if (p == null)
        return {};
      const {
        main: k,
        cross: I
      } = Wt(p, l, await (u.isRTL == null ? void 0 : u.isRTL(g.floating)));
      if (c !== p)
        return {
          reset: {
            placement: $[0]
          }
        };
      const A = [x[oe(p)], x[k], x[I]], P = [...((n = a.autoPlacement) == null ? void 0 : n.overflows) || [], {
        placement: p,
        overflows: A
      }], R = $[b + 1];
      if (R)
        return {
          data: {
            index: b + 1,
            overflows: P
          },
          reset: {
            placement: R
          }
        };
      const q = P.map((E) => {
        const X = ee(E.placement);
        return [E.placement, X && _ ? E.overflows.slice(0, 2).reduce((H, K) => H + K, 0) : E.overflows[0], E.overflows];
      }).sort((E, X) => E[1] - X[1]), J = ((s = q.filter((E) => E[2].slice(
        0,
        ee(E[0]) ? 2 : 3
      ).every((X) => X <= 0))[0]) == null ? void 0 : s[0]) || q[0][0];
      return J !== c ? {
        data: {
          index: b + 1,
          overflows: P
        },
        reset: {
          placement: J
        }
      } : {};
    }
  };
};
function dn(t) {
  const o = Re(t);
  return [Ee(t), o, Ee(o)];
}
function un(t, o, e) {
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
function cn(t, o, e, n) {
  const s = ee(t);
  let l = un(oe(t), e === "start", n);
  return s && (l = l.map((a) => a + "-" + s), o && (l = l.concat(l.map(Ee)))), l;
}
const pn = function(t) {
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
        platform: c,
        elements: u
      } = o, {
        mainAxis: g = !0,
        crossAxis: _ = !0,
        fallbackPlacements: m,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: y = !0,
        ...$
      } = be(t, o), x = oe(n), b = oe(a) === a, p = await (c.isRTL == null ? void 0 : c.isRTL(u.floating)), k = m || (b || !y ? [Re(a)] : dn(a));
      !m && v !== "none" && k.push(...cn(a, y, v, p));
      const I = [a, ...k], A = await qe(o, $), P = [];
      let R = ((e = s.flip) == null ? void 0 : e.overflows) || [];
      if (g && P.push(A[x]), _) {
        const {
          main: E,
          cross: X
        } = Wt(n, l, p);
        P.push(A[E], A[X]);
      }
      if (R = [...R, {
        placement: n,
        overflows: P
      }], !P.every((E) => E <= 0)) {
        var q, Y;
        const E = (((q = s.flip) == null ? void 0 : q.index) || 0) + 1, X = I[E];
        if (X)
          return {
            data: {
              index: E,
              overflows: R
            },
            reset: {
              placement: X
            }
          };
        let H = (Y = R.filter((K) => K.overflows[0] <= 0).sort((K, fe) => K.overflows[1] - fe.overflows[1])[0]) == null ? void 0 : Y.placement;
        if (!H)
          switch (f) {
            case "bestFit": {
              var J;
              const K = (J = R.map((fe) => [fe.placement, fe.overflows.filter((le) => le > 0).reduce((le, no) => le + no, 0)]).sort((fe, le) => fe[1] - le[1])[0]) == null ? void 0 : J[0];
              K && (H = K);
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
async function fn(t, o) {
  const {
    placement: e,
    platform: n,
    elements: s
  } = t, l = await (n.isRTL == null ? void 0 : n.isRTL(s.floating)), a = oe(e), c = ee(e), u = xe(e) === "x", g = ["left", "top"].includes(a) ? -1 : 1, _ = l && u ? -1 : 1, m = be(o, t);
  let {
    mainAxis: f,
    crossAxis: v,
    alignmentAxis: y
  } = typeof m == "number" ? {
    mainAxis: m,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...m
  };
  return c && typeof y == "number" && (v = c === "end" ? y * -1 : y), u ? {
    x: v * _,
    y: f * g
  } : {
    x: f * g,
    y: v * _
  };
}
const hn = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(o) {
      const {
        x: e,
        y: n
      } = o, s = await fn(o, t);
      return {
        x: e + s.x,
        y: n + s.y,
        data: s
      };
    }
  };
};
function mn(t) {
  return t === "x" ? "y" : "x";
}
const gn = function(t) {
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
        limiter: c = {
          fn: (x) => {
            let {
              x: b,
              y: p
            } = x;
            return {
              x: b,
              y: p
            };
          }
        },
        ...u
      } = be(t, o), g = {
        x: e,
        y: n
      }, _ = await qe(o, u), m = xe(oe(s)), f = mn(m);
      let v = g[m], y = g[f];
      if (l) {
        const x = m === "y" ? "top" : "left", b = m === "y" ? "bottom" : "right", p = v + _[x], k = v - _[b];
        v = tt(p, v, k);
      }
      if (a) {
        const x = f === "y" ? "top" : "left", b = f === "y" ? "bottom" : "right", p = y + _[x], k = y - _[b];
        y = tt(p, y, k);
      }
      const $ = c.fn({
        ...o,
        [m]: v,
        [f]: y
      });
      return {
        ...$,
        data: {
          x: $.x - e,
          y: $.y - n
        }
      };
    }
  };
}, yn = function(t) {
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
        ...c
      } = be(t, o), u = await qe(o, c), g = oe(e), _ = ee(e), f = xe(e) === "x", {
        width: v,
        height: y
      } = n.floating;
      let $, x;
      g === "top" || g === "bottom" ? ($ = g, x = _ === (await (s.isRTL == null ? void 0 : s.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (x = g, $ = _ === "end" ? "top" : "bottom");
      const b = y - u[$], p = v - u[x], k = !o.middlewareData.shift;
      let I = b, A = p;
      if (f) {
        const R = v - u.left - u.right;
        A = _ || k ? Ae(p, R) : R;
      } else {
        const R = y - u.top - u.bottom;
        I = _ || k ? Ae(b, R) : R;
      }
      if (k && !_) {
        const R = me(u.left, 0), q = me(u.right, 0), Y = me(u.top, 0), J = me(u.bottom, 0);
        f ? A = v - 2 * (R !== 0 || q !== 0 ? R + q : me(u.left, u.right)) : I = y - 2 * (Y !== 0 || J !== 0 ? Y + J : me(u.top, u.bottom));
      }
      await a({
        ...o,
        availableWidth: A,
        availableHeight: I
      });
      const P = await s.getDimensions(l.floating);
      return v !== P.width || y !== P.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Z(t) {
  var o;
  return ((o = t.ownerDocument) == null ? void 0 : o.defaultView) || window;
}
function ne(t) {
  return Z(t).getComputedStyle(t);
}
const bt = Math.min, Se = Math.max, ze = Math.round;
function jt(t) {
  const o = ne(t);
  let e = parseFloat(o.width), n = parseFloat(o.height);
  const s = t.offsetWidth, l = t.offsetHeight, a = ze(e) !== s || ze(n) !== l;
  return a && (e = s, n = l), {
    width: e,
    height: n,
    fallback: a
  };
}
function ue(t) {
  return Ft(t) ? (t.nodeName || "").toLowerCase() : "";
}
let Ie;
function Ht() {
  if (Ie)
    return Ie;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (Ie = t.brands.map((o) => o.brand + "/" + o.version).join(" "), Ie) : navigator.userAgent;
}
function se(t) {
  return t instanceof Z(t).HTMLElement;
}
function ce(t) {
  return t instanceof Z(t).Element;
}
function Ft(t) {
  return t instanceof Z(t).Node;
}
function wt(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const o = Z(t).ShadowRoot;
  return t instanceof o || t instanceof ShadowRoot;
}
function Ue(t) {
  const {
    overflow: o,
    overflowX: e,
    overflowY: n,
    display: s
  } = ne(t);
  return /auto|scroll|overlay|hidden|clip/.test(o + n + e) && !["inline", "contents"].includes(s);
}
function vn(t) {
  return ["table", "td", "th"].includes(ue(t));
}
function ct(t) {
  const o = /firefox/i.test(Ht()), e = ne(t), n = e.backdropFilter || e.WebkitBackdropFilter;
  return e.transform !== "none" || e.perspective !== "none" || (n ? n !== "none" : !1) || o && e.willChange === "filter" || o && (e.filter ? e.filter !== "none" : !1) || ["transform", "perspective"].some((s) => e.willChange.includes(s)) || ["paint", "layout", "strict", "content"].some((s) => {
    const l = e.contain;
    return l != null ? l.includes(s) : !1;
  });
}
function Gt() {
  return !/^((?!chrome|android).)*safari/i.test(Ht());
}
function pt(t) {
  return ["html", "body", "#document"].includes(ue(t));
}
function qt(t) {
  return ce(t) ? t : t.contextElement;
}
const Ut = {
  x: 1,
  y: 1
};
function we(t) {
  const o = qt(t);
  if (!se(o))
    return Ut;
  const e = o.getBoundingClientRect(), {
    width: n,
    height: s,
    fallback: l
  } = jt(o);
  let a = (l ? ze(e.width) : e.width) / n, c = (l ? ze(e.height) : e.height) / s;
  return (!a || !Number.isFinite(a)) && (a = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: a,
    y: c
  };
}
function Pe(t, o, e, n) {
  var s, l;
  o === void 0 && (o = !1), e === void 0 && (e = !1);
  const a = t.getBoundingClientRect(), c = qt(t);
  let u = Ut;
  o && (n ? ce(n) && (u = we(n)) : u = we(t));
  const g = c ? Z(c) : window, _ = !Gt() && e;
  let m = (a.left + (_ && ((s = g.visualViewport) == null ? void 0 : s.offsetLeft) || 0)) / u.x, f = (a.top + (_ && ((l = g.visualViewport) == null ? void 0 : l.offsetTop) || 0)) / u.y, v = a.width / u.x, y = a.height / u.y;
  if (c) {
    const $ = Z(c), x = n && ce(n) ? Z(n) : n;
    let b = $.frameElement;
    for (; b && n && x !== $; ) {
      const p = we(b), k = b.getBoundingClientRect(), I = getComputedStyle(b);
      k.x += (b.clientLeft + parseFloat(I.paddingLeft)) * p.x, k.y += (b.clientTop + parseFloat(I.paddingTop)) * p.y, m *= p.x, f *= p.y, v *= p.x, y *= p.y, m += k.x, f += k.y, b = Z(b).frameElement;
    }
  }
  return {
    width: v,
    height: y,
    top: f,
    right: m + v,
    bottom: f + y,
    left: m,
    x: m,
    y: f
  };
}
function pe(t) {
  return ((Ft(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function Xe(t) {
  return ce(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function bn(t) {
  let {
    rect: o,
    offsetParent: e,
    strategy: n
  } = t;
  const s = se(e), l = pe(e);
  if (e === l)
    return o;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 1,
    y: 1
  };
  const u = {
    x: 0,
    y: 0
  };
  if ((s || !s && n !== "fixed") && ((ue(e) !== "body" || Ue(l)) && (a = Xe(e)), se(e))) {
    const g = Pe(e);
    c = we(e), u.x = g.x + e.clientLeft, u.y = g.y + e.clientTop;
  }
  return {
    width: o.width * c.x,
    height: o.height * c.y,
    x: o.x * c.x - a.scrollLeft * c.x + u.x,
    y: o.y * c.y - a.scrollTop * c.y + u.y
  };
}
function Xt(t) {
  return Pe(pe(t)).left + Xe(t).scrollLeft;
}
function wn(t) {
  const o = pe(t), e = Xe(t), n = t.ownerDocument.body, s = Se(o.scrollWidth, o.clientWidth, n.scrollWidth, n.clientWidth), l = Se(o.scrollHeight, o.clientHeight, n.scrollHeight, n.clientHeight);
  let a = -e.scrollLeft + Xt(t);
  const c = -e.scrollTop;
  return ne(n).direction === "rtl" && (a += Se(o.clientWidth, n.clientWidth) - s), {
    width: s,
    height: l,
    x: a,
    y: c
  };
}
function Oe(t) {
  if (ue(t) === "html")
    return t;
  const o = t.assignedSlot || t.parentNode || wt(t) && t.host || pe(t);
  return wt(o) ? o.host : o;
}
function Yt(t) {
  const o = Oe(t);
  return pt(o) ? o.ownerDocument.body : se(o) && Ue(o) ? o : Yt(o);
}
function Ve(t, o) {
  var e;
  o === void 0 && (o = []);
  const n = Yt(t), s = n === ((e = t.ownerDocument) == null ? void 0 : e.body), l = Z(n);
  return s ? o.concat(l, l.visualViewport || [], Ue(n) ? n : []) : o.concat(n, Ve(n));
}
function _n(t, o) {
  const e = Z(t), n = pe(t), s = e.visualViewport;
  let l = n.clientWidth, a = n.clientHeight, c = 0, u = 0;
  if (s) {
    l = s.width, a = s.height;
    const g = Gt();
    (g || !g && o === "fixed") && (c = s.offsetLeft, u = s.offsetTop);
  }
  return {
    width: l,
    height: a,
    x: c,
    y: u
  };
}
function xn(t, o) {
  const e = Pe(t, !0, o === "fixed"), n = e.top + t.clientTop, s = e.left + t.clientLeft, l = se(t) ? we(t) : {
    x: 1,
    y: 1
  }, a = t.clientWidth * l.x, c = t.clientHeight * l.y, u = s * l.x, g = n * l.y;
  return {
    width: a,
    height: c,
    x: u,
    y: g
  };
}
function _t(t, o, e) {
  return o === "viewport" ? ke(_n(t, e)) : ce(o) ? ke(xn(o, e)) : ke(wn(pe(t)));
}
function $n(t, o) {
  const e = o.get(t);
  if (e)
    return e;
  let n = Ve(t).filter((c) => ce(c) && ue(c) !== "body"), s = null;
  const l = ne(t).position === "fixed";
  let a = l ? Oe(t) : t;
  for (; ce(a) && !pt(a); ) {
    const c = ne(a), u = ct(a);
    (l ? !u && !s : !u && c.position === "static" && !!s && ["absolute", "fixed"].includes(s.position)) ? n = n.filter((_) => _ !== a) : s = c, a = Oe(a);
  }
  return o.set(t, n), n;
}
function kn(t) {
  let {
    element: o,
    boundary: e,
    rootBoundary: n,
    strategy: s
  } = t;
  const a = [...e === "clippingAncestors" ? $n(o, this._c) : [].concat(e), n], c = a[0], u = a.reduce((g, _) => {
    const m = _t(o, _, s);
    return g.top = Se(m.top, g.top), g.right = bt(m.right, g.right), g.bottom = bt(m.bottom, g.bottom), g.left = Se(m.left, g.left), g;
  }, _t(o, c, s));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function Sn(t) {
  return se(t) ? jt(t) : t.getBoundingClientRect();
}
function xt(t) {
  return !se(t) || ne(t).position === "fixed" ? null : t.offsetParent;
}
function Cn(t) {
  let o = Oe(t);
  for (; se(o) && !pt(o); ) {
    if (ct(o))
      return o;
    o = Oe(o);
  }
  return null;
}
function $t(t) {
  const o = Z(t);
  let e = xt(t);
  for (; e && vn(e) && ne(e).position === "static"; )
    e = xt(e);
  return e && (ue(e) === "html" || ue(e) === "body" && ne(e).position === "static" && !ct(e)) ? o : e || Cn(t) || o;
}
function Tn(t, o, e) {
  const n = se(o), s = pe(o), l = Pe(t, !0, e === "fixed", o);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if (n || !n && e !== "fixed")
    if ((ue(o) !== "body" || Ue(s)) && (a = Xe(o)), se(o)) {
      const u = Pe(o, !0);
      c.x = u.x + o.clientLeft, c.y = u.y + o.clientTop;
    } else
      s && (c.x = Xt(s));
  return {
    x: l.left + a.scrollLeft - c.x,
    y: l.top + a.scrollTop - c.y,
    width: l.width,
    height: l.height
  };
}
const Bn = {
  getClippingRect: kn,
  convertOffsetParentRelativeRectToViewportRelativeRect: bn,
  isElement: ce,
  getDimensions: Sn,
  getOffsetParent: $t,
  getDocumentElement: pe,
  getScale: we,
  async getElementRects(t) {
    let {
      reference: o,
      floating: e,
      strategy: n
    } = t;
    const s = this.getOffsetParent || $t, l = this.getDimensions;
    return {
      reference: Tn(o, await s(e), n),
      floating: {
        x: 0,
        y: 0,
        ...await l(e)
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => ne(t).direction === "rtl"
}, An = (t, o, e) => {
  const n = /* @__PURE__ */ new Map(), s = {
    platform: Bn,
    ...e
  }, l = {
    ...s.platform,
    _c: n
  };
  return en(t, o, {
    ...s,
    platform: l
  });
}, ge = {
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
function ot(t, o) {
  let e = ge.themes[t] || {}, n;
  do
    n = e[o], typeof n > "u" ? e.$extend ? e = ge.themes[e.$extend] || {} : (e = null, n = ge[o]) : e = null;
  while (e);
  return n;
}
function Pn(t) {
  const o = [t];
  let e = ge.themes[t] || {};
  do
    e.$extend && !e.$resetCss ? (o.push(e.$extend), e = ge.themes[e.$extend] || {}) : e = null;
  while (e);
  return o.map((n) => `v-popper--theme-${n}`);
}
function kt(t) {
  const o = [t];
  let e = ge.themes[t] || {};
  do
    e.$extend ? (o.push(e.$extend), e = ge.themes[e.$extend] || {}) : e = null;
  while (e);
  return o;
}
let _e = !1;
if (typeof window < "u") {
  _e = !1;
  try {
    const t = Object.defineProperty({}, "passive", {
      get() {
        _e = !0;
      }
    });
    window.addEventListener("test", null, t);
  } catch {
  }
}
let Kt = !1;
typeof window < "u" && typeof navigator < "u" && (Kt = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const On = ["auto", "top", "bottom", "left", "right"].reduce((t, o) => t.concat([
  o,
  `${o}-start`,
  `${o}-end`
]), []), St = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart",
  pointer: "pointerdown"
}, Ct = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend",
  pointer: "pointerup"
};
function Tt(t, o) {
  const e = t.indexOf(o);
  e !== -1 && t.splice(e, 1);
}
function Ke() {
  return new Promise((t) => requestAnimationFrame(() => {
    requestAnimationFrame(t);
  }));
}
const Q = [];
let he = null;
const Bt = {};
function At(t) {
  let o = Bt[t];
  return o || (o = Bt[t] = []), o;
}
let nt = function() {
};
typeof window < "u" && (nt = window.Element);
function B(t) {
  return function(o) {
    return ot(o.theme, t);
  };
}
const Ze = "__floating-vue__popper", Zt = () => Ge({
  name: "VPopper",
  provide() {
    return {
      [Ze]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [Ze]: { default: null }
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
      validator: (t) => On.includes(t)
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
      type: [String, Object, nt, Boolean],
      default: B("container")
    },
    boundary: {
      type: [String, nt],
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
      return (t = this[Ze]) == null ? void 0 : t.parentPopper;
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
      (this.distance || this.skidding) && t.middleware.push(hn({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const o = this.placement.startsWith("auto");
      if (o ? t.middleware.push(an({
        alignment: (n = this.placement.split("-")[1]) != null ? n : ""
      })) : t.placement = this.placement, this.preventOverflow && (this.shift && t.middleware.push(gn({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !o && this.flip && t.middleware.push(pn({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), t.middleware.push(on({
        element: this.$_arrowNode,
        padding: this.arrowPadding
      })), this.arrowOverflow && t.middleware.push({
        name: "arrowOverflow",
        fn: ({ placement: s, rects: l, middlewareData: a }) => {
          let c;
          const { centerOffset: u } = a.arrow;
          return s.startsWith("top") || s.startsWith("bottom") ? c = Math.abs(u) > l.reference.width / 2 : c = Math.abs(u) > l.reference.height / 2, {
            data: {
              overflow: c
            }
          };
        }
      }), this.autoMinSize || this.autoSize) {
        const s = this.autoSize ? this.autoSize : this.autoMinSize ? "min" : null;
        t.middleware.push({
          name: "autoSize",
          fn: ({ rects: l, placement: a, middlewareData: c }) => {
            var u;
            if ((u = c.autoSize) != null && u.skip)
              return {};
            let g, _;
            return a.startsWith("top") || a.startsWith("bottom") ? g = l.reference.width : _ = l.reference.height, this.$_innerNode.style[s === "min" ? "minWidth" : s === "max" ? "maxWidth" : "width"] = g != null ? `${g}px` : null, this.$_innerNode.style[s === "min" ? "minHeight" : s === "max" ? "maxHeight" : "height"] = _ != null ? `${_}px` : null, {
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
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, t.middleware.push(yn({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: s, availableHeight: l }) => {
          this.$_innerNode.style.maxWidth = s != null ? `${s}px` : null, this.$_innerNode.style.maxHeight = l != null ? `${l}px` : null;
        }
      })));
      const e = await An(this.$_referenceNode, this.$_popperNode, t);
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
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), he && this.instantMove && he.instantMove && he !== this.parentPopper) {
        he.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      o ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(t = null, o = !1) {
      if (this.shownChildren.size > 0) {
        this.$_pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (he = this), o ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(t) {
      const o = this.delay;
      return parseInt(o && o[t] || o || 0);
    },
    async $_applyShow(t = !1) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = t, !this.isShown && (this.$_ensureTeleport(), await Ke(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
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
        for (let e = 0; e < Q.length; e++)
          o = Q[e], o.showGroup !== t && (o.hide(), o.$emit("close-group"));
      }
      Q.push(this), document.body.classList.add("v-popper--some-open");
      for (const o of kt(this.theme))
        At(o).push(this), document.body.classList.add(`v-popper--some-open--${o}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await Ke(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(t = !1) {
      if (this.shownChildren.size > 0) {
        this.$_pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = t, Tt(Q, this), Q.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const e of kt(this.theme)) {
        const n = At(e);
        Tt(n, this), n.length === 0 && document.body.classList.remove(`v-popper--some-open--${e}`);
      }
      he === this && (he = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const o = this.disposeTimeout;
      o !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, o)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await Ke(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
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
      this.$_registerTriggerListeners(this.$_targetNodes, St, this.triggers, this.showTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], St, this.popperTriggers, this.popperShowTriggers, t);
      const o = (e) => {
        e.usedByTooltip || this.hide({ event: e });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, Ct, this.triggers, this.hideTriggers, o), this.$_registerTriggerListeners([this.$_popperNode], Ct, this.popperTriggers, this.popperHideTriggers, o);
    },
    $_registerEventListeners(t, o, e) {
      this.$_events.push({ targetNodes: t, eventType: o, handler: e }), t.forEach((n) => n.addEventListener(o, e, _e ? {
        passive: !0
      } : void 0));
    },
    $_registerTriggerListeners(t, o, e, n, s) {
      let l = e;
      n != null && (l = typeof n == "function" ? n(l) : n), l.forEach((a) => {
        const c = o[a];
        c && this.$_registerEventListeners(t, c, s);
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
      if (Ce >= t.left && Ce <= t.right && Te >= t.top && Te <= t.bottom) {
        const o = this.$_popperNode.getBoundingClientRect(), e = Ce - ae, n = Te - ie, s = o.left + o.width / 2 - ae + (o.top + o.height / 2) - ie + o.width + o.height, l = ae + e * s, a = ie + n * s;
        return De(ae, ie, l, a, o.left, o.top, o.left, o.bottom) || De(ae, ie, l, a, o.left, o.top, o.right, o.top) || De(ae, ie, l, a, o.right, o.top, o.right, o.bottom) || De(ae, ie, l, a, o.left, o.bottom, o.right, o.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
typeof document < "u" && typeof window < "u" && (Kt ? (document.addEventListener("touchstart", Pt, _e ? {
  passive: !0,
  capture: !0
} : !0), document.addEventListener("touchend", In, _e ? {
  passive: !0,
  capture: !0
} : !0)) : (window.addEventListener("mousedown", Pt, !0), window.addEventListener("click", Ln, !0)), window.addEventListener("resize", Rn));
function Pt(t) {
  for (let o = 0; o < Q.length; o++) {
    const e = Q[o];
    try {
      const n = e.popperNode();
      e.$_mouseDownContains = n.contains(t.target);
    } catch {
    }
  }
}
function Ln(t) {
  Jt(t);
}
function In(t) {
  Jt(t, !0);
}
function Jt(t, o = !1) {
  const e = {};
  for (let n = Q.length - 1; n >= 0; n--) {
    const s = Q[n];
    try {
      const l = s.$_containsGlobalTarget = Dn(s, t);
      s.$_pendingHide = !1, requestAnimationFrame(() => {
        if (s.$_pendingHide = !1, !e[s.randomId] && Ot(s, l, t)) {
          if (s.$_handleGlobalClose(t, o), !t.closeAllPopover && t.closePopover && l) {
            let c = s.parentPopper;
            for (; c; )
              e[c.randomId] = !0, c = c.parentPopper;
            return;
          }
          let a = s.parentPopper;
          for (; a && Ot(a, a.$_containsGlobalTarget, t); )
            a.$_handleGlobalClose(t, o), a = a.parentPopper;
        }
      });
    } catch {
    }
  }
}
function Dn(t, o) {
  const e = t.popperNode();
  return t.$_mouseDownContains || e.contains(o.target);
}
function Ot(t, o, e) {
  return e.closeAllPopover || e.closePopover && o || Nn(t, e) && !o;
}
function Nn(t, o) {
  if (typeof t.autoHide == "function") {
    const e = t.autoHide(o);
    return t.lastAutoHide = e, e;
  }
  return t.autoHide;
}
function Rn(t) {
  for (let o = 0; o < Q.length; o++)
    Q[o].$_computePosition(t);
}
let ae = 0, ie = 0, Ce = 0, Te = 0;
typeof window < "u" && window.addEventListener("mousemove", (t) => {
  ae = Ce, ie = Te, Ce = t.clientX, Te = t.clientY;
}, _e ? {
  passive: !0
} : void 0);
function De(t, o, e, n, s, l, a, c) {
  const u = ((a - s) * (o - l) - (c - l) * (t - s)) / ((c - l) * (e - t) - (a - s) * (n - o)), g = ((e - t) * (o - l) - (n - o) * (t - s)) / ((c - l) * (e - t) - (a - s) * (n - o));
  return u >= 0 && u <= 1 && g >= 0 && g <= 1;
}
const En = {
  extends: Zt()
}, ft = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [n, s] of o)
    e[n] = s;
  return e;
};
function zn(t, o, e, n, s, l) {
  return i(), d("div", {
    ref: "reference",
    class: h(["v-popper", {
      "v-popper--shown": t.slotData.isShown
    }])
  }, [
    C(t.$slots, "default", Nt(Rt(t.slotData)))
  ], 2);
}
const Vn = /* @__PURE__ */ ft(En, [["render", zn]]);
function Mn() {
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
let Ne;
function st() {
  st.init || (st.init = !0, Ne = Mn() !== -1);
}
var Ye = {
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
    st(), Dt(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const t = document.createElement("object");
    this._resizeObject = t, t.setAttribute("aria-hidden", "true"), t.setAttribute("tabindex", -1), t.onload = this.addResizeHandlers, t.type = "text/html", Ne && this.$el.appendChild(t), t.data = "about:blank", Ne || this.$el.appendChild(t);
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
      this._resizeObject && this._resizeObject.onload && (!Ne && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const Wn = /* @__PURE__ */ so("data-v-b329ee4c");
rt("data-v-b329ee4c");
const jn = {
  class: "resize-observer",
  tabindex: "-1"
};
lt();
const Hn = /* @__PURE__ */ Wn((t, o, e, n, s, l) => (i(), W("div", jn)));
Ye.render = Hn;
Ye.__scopeId = "data-v-b329ee4c";
Ye.__file = "src/components/ResizeObserver.vue";
const Qt = (t = "theme") => ({
  computed: {
    themeClass() {
      return Pn(this[t]);
    }
  }
}), Fn = Ge({
  name: "VPopperContent",
  components: {
    ResizeObserver: Ye
  },
  mixins: [
    Qt()
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
}), Gn = ["id", "aria-hidden", "tabindex", "data-popper-placement"], qn = {
  ref: "inner",
  class: "v-popper__inner"
}, Un = /* @__PURE__ */ w("div", { class: "v-popper__arrow-outer" }, null, -1), Xn = /* @__PURE__ */ w("div", { class: "v-popper__arrow-inner" }, null, -1), Yn = [
  Un,
  Xn
];
function Kn(t, o, e, n, s, l) {
  const a = Je("ResizeObserver");
  return i(), d("div", {
    id: t.popperId,
    ref: "popover",
    class: h(["v-popper__popper", [
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
    style: te(t.result ? {
      position: t.result.strategy,
      transform: `translate3d(${Math.round(t.result.x)}px,${Math.round(t.result.y)}px,0)`
    } : void 0),
    "aria-hidden": t.shown ? "false" : "true",
    tabindex: t.autoHide ? 0 : void 0,
    "data-popper-placement": t.result ? t.result.placement : void 0,
    onKeyup: o[2] || (o[2] = ro((c) => t.autoHide && t.$emit("hide"), ["esc"]))
  }, [
    w("div", {
      class: "v-popper__backdrop",
      onClick: o[0] || (o[0] = (c) => t.autoHide && t.$emit("hide"))
    }),
    w("div", {
      class: "v-popper__wrapper",
      style: te(t.result ? {
        transformOrigin: t.result.transformOrigin
      } : void 0)
    }, [
      w("div", qn, [
        t.mounted ? (i(), d(O, { key: 0 }, [
          w("div", null, [
            C(t.$slots, "default")
          ]),
          t.handleResize ? (i(), W(a, {
            key: 0,
            onNotify: o[1] || (o[1] = (c) => t.$emit("resize", c))
          })) : S("", !0)
        ], 64)) : S("", !0)
      ], 512),
      w("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: te(t.result ? {
          left: t.toPx(t.result.arrow.x),
          top: t.toPx(t.result.arrow.y)
        } : void 0)
      }, Yn, 4)
    ], 4)
  ], 46, Gn);
}
const eo = /* @__PURE__ */ ft(Fn, [["render", Kn]]), to = {
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
}, Zn = Ge({
  name: "VPopperWrapper",
  components: {
    Popper: Vn,
    PopperContent: eo
  },
  mixins: [
    to,
    Qt("finalTheme")
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
function Jn(t, o, e, n, s, l) {
  const a = Je("PopperContent"), c = Je("Popper");
  return i(), W(c, {
    ref: "popper",
    theme: t.finalTheme,
    "target-nodes": t.getTargetNodes,
    "popper-node": () => t.$refs.popperContent.$el,
    class: h([
      t.themeClass
    ])
  }, {
    default: D(({
      popperId: u,
      isShown: g,
      shouldMountContent: _,
      skipTransition: m,
      autoHide: f,
      show: v,
      hide: y,
      handleResize: $,
      onResize: x,
      classes: b,
      result: p
    }) => [
      C(t.$slots, "default", {
        shown: g,
        show: v,
        hide: y
      }),
      V(a, {
        ref: "popperContent",
        "popper-id": u,
        theme: t.finalTheme,
        shown: g,
        mounted: _,
        "skip-transition": m,
        "auto-hide": f,
        "handle-resize": $,
        classes: b,
        result: p,
        onHide: y,
        onResize: x
      }, {
        default: D(() => [
          C(t.$slots, "popper", {
            shown: g,
            hide: y
          })
        ]),
        _: 2
      }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 3
  }, 8, ["theme", "target-nodes", "popper-node", "class"]);
}
const ht = /* @__PURE__ */ ft(Zn, [["render", Jn]]), Qn = {
  ...ht,
  name: "VDropdown",
  vPopperTheme: "dropdown"
};
({
  ...ht
});
const es = {
  ...ht,
  name: "VTooltip",
  vPopperTheme: "tooltip"
};
Ge({
  name: "VTooltipDirective",
  components: {
    Popper: Zt(),
    PopperContent: eo
  },
  mixins: [
    to
  ],
  inheritAttrs: !1,
  props: {
    theme: {
      type: String,
      default: "tooltip"
    },
    html: {
      type: Boolean,
      default: (t) => ot(t.theme, "html")
    },
    content: {
      type: [String, Number, Function],
      default: null
    },
    loadingContent: {
      type: String,
      default: (t) => ot(t.theme, "loadingContent")
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
const ts = Qn, os = es;
const ns = ["data-slot"], Br = {
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
    skidding: {
      type: Number,
      default: 0
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
    const e = U(null), n = U(!1), s = L("Dropdown", o.variant, o.classes), l = (g) => {
      var m;
      const _ = e.value;
      if (!!_) {
        if (["ArrowUp", "ArrowDown"].includes(g.key)) {
          g.preventDefault();
          const f = [..._.$refs.popperContent.$el.querySelectorAll(o.itemSelector)];
          if (!f.length)
            return;
          let v = f.indexOf(g.target);
          v = g.key === "ArrowDown" ? v + 1 : v - 1, (m = f[v]) == null || m.focus();
        }
        (g.key === "Enter" || g.key === " ") && g.target === _.$refs.popperContent.$el && (g.preventDefault(), _.hide());
      }
    }, a = (g) => {
      const _ = e.value;
      if (!_ || g.target.classList.contains("v-popper") || g.target.classList.contains("disabled"))
        return;
      let m = g.target, f = !0;
      for (; m; ) {
        if (m.getAttribute("data-slot") === "default")
          return;
        if (m.classList.contains("list--item")) {
          f = !1;
          break;
        }
        if (m = m.parentElement, m === null)
          break;
      }
      f || ![..._.$refs.popperContent.$el.querySelectorAll(o.itemSelector)].length || g.target.classList.contains("dropdown-stay") || (g.preventDefault(), _.hide());
    }, c = () => {
      document.addEventListener("keydown", l), document.addEventListener("click", a);
    }, u = () => {
      document.removeEventListener("keydown", l), document.removeEventListener("click", a);
      const g = e.value;
      g == null || g.$refs.popper.$_targetNodes[0].focus();
    };
    return it(() => {
      document.removeEventListener("keydown", l), document.removeEventListener("click", a);
    }), j("IS_DROPDOWN", 1), j("IS_DROPDOWN_OPEN", n), j("IS_DROPDOWN_ARROW", o.arrow), (g, _) => (i(), W(r(ts), {
      ref_key: "popoverRef",
      ref: e,
      distance: o.distance,
      triggers: ["click"],
      theme: "dropdown-menu",
      placement: o.placement,
      "auto-hide": "",
      onShow: c,
      onHide: u,
      skidding: o.skidding,
      shown: n.value,
      "onUpdate:shown": _[1] || (_[1] = (m) => n.value = m),
      class: h(r(s).wrapper),
      "popper-class": [r(s).size, r(s).theme]
    }, Qe({ _: 2 }, [
      M(g.$slots, (m, f) => ({
        name: f,
        fn: D((v) => [
          f === "default" ? (i(), d("div", at({
            class: "inline-block relative",
            "data-slot": f,
            key: f
          }, v || {}, {
            onClick: _[0] || (_[0] = de(() => {
            }, ["prevent", "stop"]))
          }), [
            C(g.$slots, f)
          ], 16, ns)) : (i(), W(ye, {
            name: "dropdown",
            appear: "",
            key: f
          }, {
            default: D(() => [
              je(w("div", null, [
                C(g.$slots, f, Nt(Rt(v || {})))
              ], 512), [
                [He, n.value]
              ])
            ]),
            _: 2
          }, 1024))
        ])
      }))
    ]), 1032, ["distance", "placement", "skidding", "shown", "class", "popper-class"]));
  }
};
const ss = {
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
    return (n, s) => (i(), W(r(os), {
      triggers: ["hover"],
      theme: "tooltip",
      placement: o.placement,
      "auto-hide": "",
      class: h(r(e).wrapper),
      "popper-class": [r(e).theme]
    }, {
      popper: D(() => [
        C(n.$slots, "content")
      ]),
      default: D(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["placement", "class", "popper-class"]));
  }
}, rs = {
  key: 0,
  class: "flex flex-row items-center"
}, ls = ["value"], as = ["value"], is = {
  for: "perPage",
  class: "mt-0 ml-4 text-left"
}, ds = {
  key: 1,
  class: "relative flex flex-col justify-center items-center w-full text-center"
}, us = {
  key: 0,
  class: "text-center mb-2"
}, cs = {
  key: 1,
  class: "flex justify-center space-x-2"
}, ps = {
  key: 2,
  class: "relative flex order-1 space-x-2"
}, fs = /* @__PURE__ */ w("span", null, "Previous", -1), hs = /* @__PURE__ */ w("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "w-auto h-auto",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ w("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M15 19l-7-7 7-7"
  })
], -1), ms = { class: "relative flex items-center space-x-2" }, gs = ["value", "disabled", "max"], ys = {
  key: 2,
  class: "text-gray-500"
}, vs = /* @__PURE__ */ w("span", null, "Next", -1), bs = /* @__PURE__ */ w("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "w-auto h-auto",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ w("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M9 5l7 7-7 7"
  })
], -1), Ar = {
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
    const e = t, n = L("Pagination", e.variant, e.classes), s = N(() => e.totalItems === void 0 ? -1 : Math.ceil(e.totalItems / e.perPage)), l = N(() => e.page === 1), a = N(() => e.page === 1 ? 1 : e.perPage * (e.page - 1) + 1), c = N(() => {
      if (e.page === s.value)
        return e.totalItems;
      {
        let f = e.page * e.perPage;
        return e.currentCount && f > e.currentCount ? e.currentCount : f;
      }
    }), u = N(() => s.value === -1 ? !1 : s.value < 1 && !e.loading || s.value === 1 ? !0 : s.value > 1 ? e.page === s.value : !1), g = (f) => {
      m(f.target.value), f.target === document.activeElement && f.target.blur();
    }, _ = (f) => {
      o("change", {
        page: 1,
        perPage: Number(f.target.value)
      });
    }, m = (f) => {
      f < 1 || f === 1 ? f = 1 : s.value > 0 && Number(f) > s.value && (f = s.value), o("change", {
        page: Number(f),
        perPage: e.perPage
      });
    };
    return (f, v) => (i(), d("div", {
      class: h(["flex", {
        [r(n).baseText]: !0,
        "justify-between": !e.hideStats,
        "justify-center": e.hideStats
      }])
    }, [
      !e.hideStats && !e.loadMore ? (i(), d("div", rs, [
        w("select", {
          name: "currentPerPage",
          class: "flex w-16 py-2 pl-2 pr-2 text-sm font-medium text-gray-500 bg-white border-gray-200 rounded cursor-pointer hover:bg-blue-100 hover:border-blue-900 hover:text-blue-900 focus:outline-none focus:border-blue-900 focus:ring-0",
          value: e.perPage,
          onInput: v[0] || (v[0] = (y) => _(y))
        }, [
          (i(!0), d(O, null, M(e.perPageOptions, (y) => (i(), d("option", {
            key: y,
            value: y
          }, T(y), 9, as))), 128))
        ], 40, ls),
        w("label", is, [
          t.totalItems ? (i(), d(O, { key: 0 }, [
            z("Showing " + T(a.value) + " to " + T(c.value) + " of " + T(t.totalItems) + " " + T(t.itemName), 1)
          ], 64)) : e.loading ? (i(), d(O, { key: 1 }, [
            z("Loading...")
          ], 64)) : S("", !0)
        ])
      ])) : S("", !0),
      e.loadMore ? (i(), d("div", ds, [
        e.hideStats ? S("", !0) : (i(), d("div", us, [
          t.totalItems ? (i(), d(O, { key: 0 }, [
            z("Showing " + T(c.value) + " of " + T(t.totalItems) + " " + T(t.itemName), 1)
          ], 64)) : S("", !0)
        ])),
        t.nextPrevButtons ? (i(), d("div", cs, [
          V($e, {
            outlined: "",
            onClick: v[1] || (v[1] = (y) => l.value ? "" : m(e.page - 1)),
            disabled: l.value,
            variant: t.variantButton
          }, {
            default: D(() => [
              z("Previous")
            ]),
            _: 1
          }, 8, ["disabled", "variant"]),
          V($e, {
            outlined: "",
            onClick: v[2] || (v[2] = (y) => u.value ? "" : m(e.page + 1)),
            disabled: u.value,
            variant: t.variantButton
          }, {
            default: D(() => [
              z("Next")
            ]),
            _: 1
          }, 8, ["disabled", "variant"])
        ])) : (i(), W($e, {
          key: 2,
          outlined: "",
          onClick: v[3] || (v[3] = (y) => u.value ? "" : m(e.page + 1)),
          disabled: e.loading || u.value,
          loading: e.loading,
          variant: t.variantButton
        }, {
          default: D(() => [
            z(T(t.loadMoreButton), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading", "variant"]))
      ])) : (i(), d("div", ps, [
        w("div", null, [
          V($e, {
            ghost: "",
            circle: !t.nextPrevButtons,
            onClick: v[4] || (v[4] = (y) => l.value ? "" : m(e.page - 1)),
            disabled: l.value,
            variant: t.variantButton
          }, Qe({ _: 2 }, [
            t.nextPrevButtons ? {
              name: "default",
              fn: D(() => [
                fs
              ]),
              key: "0"
            } : void 0,
            t.nextPrevButtons ? void 0 : {
              name: "icon",
              fn: D(() => [
                hs
              ]),
              key: "1"
            }
          ]), 1032, ["circle", "disabled", "variant"])
        ]),
        w("div", ms, [
          t.pageInput ? (i(), d("input", {
            key: 0,
            type: "number",
            value: e.page,
            disabled: !e.totalItems && e.loading || s.value < 1 && !e.loading,
            onFocusin: v[5] || (v[5] = (y) => y.target.select()),
            onChange: g,
            max: s.value,
            classes: "text-center",
            style: { width: "55px" }
          }, null, 40, gs)) : (i(), d("span", {
            key: 1,
            class: h(r(n).currentPageText)
          }, T(e.page), 3)),
          e.totalItems ? (i(), d("span", ys, "of " + T(s.value), 1)) : S("", !0)
        ]),
        w("div", null, [
          V($e, {
            ghost: "",
            circle: !t.nextPrevButtons,
            onClick: v[6] || (v[6] = (y) => u.value ? "" : m(e.page + 1)),
            disabled: u.value,
            variant: t.variantButton
          }, Qe({ _: 2 }, [
            t.nextPrevButtons ? {
              name: "default",
              fn: D(() => [
                vs
              ]),
              key: "0"
            } : void 0,
            t.nextPrevButtons ? void 0 : {
              name: "icon",
              fn: D(() => [
                bs
              ]),
              key: "1"
            }
          ]), 1032, ["circle", "disabled", "variant"])
        ])
      ]))
    ], 2));
  }
};
const ws = ["src"], _s = ["src"], xs = {
  __name: "Gallery",
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
    edges: {
      type: Boolean,
      default: !0
    },
    animation: {
      type: Boolean,
      default: !0
    },
    repeat: {
      type: Number,
      default: 2
    },
    images: {
      type: Array,
      default: () => []
    }
  },
  setup(t) {
    const o = t;
    G();
    const e = L("Gallery", o.variant, o.classes);
    return (n, s) => (i(), d("div", {
      class: h({
        gallery: !0,
        [r(e).wrapper]: !0,
        "gallery-fade-edges": o.edges
      })
    }, [
      w("div", {
        class: h({
          "gallery-strip": !0,
          "inline-block": !0,
          [r(e).itemList]: !0,
          "gallery-strip-animation": o.animation
        })
      }, [
        o.images.length > 0 ? (i(), d(O, { key: 0 }, [
          (i(!0), d(O, null, M(o.images, (l, a) => (i(), d("div", {
            class: h(["gallery-item", "inline-block", r(e).item]),
            key: a
          }, [
            w("img", {
              class: h(r(e).image),
              src: l
            }, null, 10, ws)
          ], 2))), 128)),
          o.animation && o.repeat > 1 ? (i(!0), d(O, { key: 0 }, M(Array.from({ length: o.repeat }), (l, a) => (i(), d(O, { key: a }, [
            (i(!0), d(O, null, M(o.images, (c, u) => (i(), d("div", {
              class: h(["gallery-item", "inline-block", r(e).item]),
              key: u
            }, [
              w("img", {
                class: h(r(e).image),
                src: c
              }, null, 10, _s)
            ], 2))), 128))
          ], 64))), 128)) : S("", !0)
        ], 64)) : (i(), d(O, { key: 1 }, [
          (i(!0), d(O, null, M(n.$slots, (l, a) => (i(), d("div", {
            class: h(["gallery-item", "inline-block", r(e).item]),
            key: a
          }, [
            C(n.$slots, a, {}, void 0, !0)
          ], 2))), 128)),
          o.animation && o.repeat > 1 ? (i(!0), d(O, { key: 0 }, M(Array.from({ length: o.repeat }), (l, a) => (i(), d(O, { key: a }, [
            (i(!0), d(O, null, M(n.$slots, (c, u) => (i(), d("div", {
              class: h(["gallery-item", "inline-block", r(e).item]),
              key: u
            }, [
              C(n.$slots, u, {}, void 0, !0)
            ], 2))), 128))
          ], 64))), 128)) : S("", !0)
        ], 64))
      ], 2)
    ], 2));
  }
}, Pr = /* @__PURE__ */ re(xs, [["__scopeId", "data-v-b5aad618"]]), Or = {
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
    return j("IS_LIST_GROUP", 1), j("IS_LIST_VARIANT", o.variant), (n, s) => (i(), d("div", {
      class: h({
        [r(e).listGroup]: !0,
        [r(e).listGroupColor]: !0,
        [r(e).listGroupText]: !0
      })
    }, [
      C(n.$slots, "default")
    ], 2));
  }
}, $s = { class: "grow w-full" }, Lr = {
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
    const o = t, e = G(), n = F("IS_LIST_GROUP", 0), s = F("IS_LIST_VARIANT", null), l = U(o.variant);
    n && s && !o.variant && (l.value = s);
    const a = L("List", l.value, o.classes);
    return (c, u) => {
      var g;
      return i(), d("div", {
        class: h({
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
        (g = r(e)) != null && g.before ? (i(), d("div", {
          key: 0,
          class: h([r(a).listItemBefore])
        }, [
          C(c.$slots, "before")
        ], 2)) : S("", !0),
        w("div", $s, [
          C(c.$slots, "default")
        ]),
        r(e).after ? (i(), d("div", {
          key: 1,
          class: h([r(a).listItemAfter])
        }, [
          C(c.$slots, "after")
        ], 2)) : S("", !0)
      ], 2);
    };
  }
}, Ir = {
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
    return (n, s) => (i(), d("div", {
      class: h(r(e).wrapper)
    }, [
      o.label ? (i(), d("div", {
        key: 0,
        class: h(r(e).outsideLabelWrapper)
      }, [
        w("span", {
          class: h(r(e).outsideLabelText)
        }, T(t.label), 3),
        w("span", {
          class: h(r(e).outsideLabelProgress)
        }, T(o.progress) + "%", 3)
      ], 2)) : S("", !0),
      w("div", {
        class: h([r(e).bar, r(e).size, r(e).barColor])
      }, [
        w("div", {
          class: h([r(e).progressBar, r(e).size, r(e).progressBarColor, r(e).insideLabelText]),
          style: te({ width: o.progress + "%" })
        }, [
          o.progress > 0 && o.showProgress && !o.label ? (i(), d(O, { key: 0 }, [
            z(T(o.progress) + "% ", 1)
          ], 64)) : S("", !0)
        ], 6)
      ], 2)
    ], 2));
  }
}, ks = ["onClick"], Dr = {
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
    const e = t, s = G().default, l = L("Tabs", e.variant, e.classes), a = (m, f = !0, v = []) => (m.forEach((y) => {
      if (y !== null) {
        if (typeof y != "object") {
          (typeof y == "string" || typeof y == "number") && v.push(z(String(y)));
          return;
        }
        if (Array.isArray(y)) {
          a(y, f, v);
          return;
        }
        if (y.type === O) {
          if (y.children === null)
            return;
          Array.isArray(y.children) && a(y.children, f, v);
        } else
          y.type !== lo && (y.children && y.children.title && (y.slotContent = y.children.title()), v.push(y));
      }
    }), v), c = N(() => s ? a(s()).filter((m) => m.type.__GALAXY_TAB__) : []), u = N({
      get: () => e.modelValue,
      set: (m) => o("update:modelValue", m)
    }), g = (m) => {
      u.value = m;
    };
    function _(m, f) {
      var v, y;
      ((v = f.props) == null ? void 0 : v.disabled) === "" || ((y = f.props) == null ? void 0 : y.disabled) === !0 || g(m);
    }
    return j("IS_TABS", 1), j("IS_TABS_VARIANT", e.variant), j("TAB_ACTIVE", u), j("TAB_CHANGE", g), (m, f) => (i(), d("div", {
      class: h(r(l).wrapper)
    }, [
      w("div", {
        class: h(r(l).tabListWrapper)
      }, [
        w("ul", {
          class: h(r(l).tabList)
        }, [
          (i(!0), d(O, null, M(c.value, (v, y) => {
            var $, x, b;
            return i(), d("li", {
              key: y,
              onClick: de((p) => {
                var k;
                return _((k = v.props) == null ? void 0 : k.name, v);
              }, ["prevent"]),
              class: h({
                [r(l).tabItem]: !0,
                [r(l).tabItemDisabled]: (($ = v.props) == null ? void 0 : $.disabled) === "" || ((x = v.props) == null ? void 0 : x.disabled) === !0,
                [r(l).tabItemSelected]: u.value === ((b = v.props) == null ? void 0 : b.name)
              })
            }, [
              w("div", {
                class: h(r(l).tabItemTitle)
              }, [
                v.slotContent ? (i(!0), d(O, { key: 0 }, M(v.slotContent, (p, k) => (i(), W(Fe(p), { key: k }))), 128)) : (i(), d(O, { key: 1 }, [
                  z(T(v.props.title), 1)
                ], 64))
              ], 2)
            ], 10, ks);
          }), 128))
        ], 2)
      ], 2),
      w("div", at(m.$attrs, {
        class: r(l).tabContentWrapper
      }), [
        C(m.$slots, "default")
      ], 16)
    ], 2));
  }
};
const Ss = { class: "relative overflow-hidden" }, Cs = {
  __GALAXY_TAB__: !0
}, Ts = Object.assign(Cs, {
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
    },
    transition: {
      type: String,
      default: "fade"
    }
  },
  setup(t) {
    const o = t;
    G();
    const e = F("IS_TABS_VARIANT", null), n = F("IS_TABS", 0);
    n || console.warn("[Galaxy Vue] <Tab> should only be used within <Tabs>");
    const s = U(o.variant);
    n && e && !o.variant && (s.value = e);
    const l = L("Tabs", s.value, o.classes), a = F("TAB_ACTIVE", null);
    return (c, u) => (i(), d("div", Ss, [
      V(ye, {
        name: o.transition,
        mode: "out-in"
      }, {
        default: D(() => [
          (i(), d("div", { key: r(a) }, [
            o.preload === !0 ? je((i(), d("div", {
              key: 0,
              class: h(r(l).tabContent)
            }, [
              C(c.$slots, "default", {}, void 0, !0)
            ], 2)), [
              [He, r(a) === o.name]
            ]) : o.preload === !1 ? (i(), d(O, { key: 1 }, [
              r(a) === o.name ? (i(), d("div", {
                key: 0,
                class: h(r(l).tabContent)
              }, [
                C(c.$slots, "default", {}, void 0, !0)
              ], 2)) : S("", !0)
            ], 64)) : S("", !0)
          ]))
        ]),
        _: 3
      }, 8, ["name"])
    ]));
  }
}), Nr = /* @__PURE__ */ re(Ts, [["__scopeId", "data-v-dc222194"]]), Bs = ["for"], As = {
  key: 0,
  class: "mr-1"
}, Ps = { key: 0 }, Os = {
  key: 1,
  class: "text-red-500"
}, Ls = /* @__PURE__ */ w("path", {
  "fill-rule": "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z",
  "clip-rule": "evenodd"
}, null, -1), Is = [
  Ls
], Le = {
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
      return i(), d("label", {
        for: o.id,
        class: h({
          [r(n).base]: !0,
          [r(n).theme]: !0,
          [r(n).disabled]: o.disabled,
          [r(n).errors]: o.errors,
          ...o.classes
        })
      }, [
        (a = r(e)) != null && a.icon ? (i(), d("span", As, [
          C(s.$slots, "icon")
        ])) : S("", !0),
        w("span", null, [
          C(s.$slots, "default", {}, () => [
            o.title ? (i(), d("span", Ps, T(o.title), 1)) : S("", !0)
          ])
        ]),
        o.required ? (i(), d("span", Os, "*")) : S("", !0),
        o.tooltip || r(e)["tooltip-content"] ? (i(), W(ss, {
          key: 2,
          placement: o.tooltipPosition
        }, {
          content: D(() => [
            w("span", null, [
              C(s.$slots, "tooltip-content", {}, () => [
                z(T(t.tooltip), 1)
              ])
            ])
          ]),
          default: D(() => [
            w("span", {
              class: h([r(n).icon, "ml-1 cursor-pointer flex items-center"])
            }, [
              C(s.$slots, "tooltip-icon", {}, () => [
                (i(), d("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 20 20",
                  fill: "currentColor",
                  class: h(r(n).iconSize)
                }, Is, 2))
              ])
            ], 2)
          ]),
          _: 3
        }, 8, ["placement"])) : S("", !0)
      ], 10, Bs);
    };
  }
}, Be = (t, o) => t === o, Ds = (t, o, e = void 0) => {
  if (o == null)
    return e;
  const n = (l) => String.prototype.split.call(o, l).filter(Boolean).reduce((a, c) => a != null ? a[c] : a, t), s = n(/[,[\]]+?/) || n(/[,[\].]+?/);
  return s === void 0 || s === t ? e : s;
};
const Ns = ["id", "type", "checked", "value", "disabled"], Rs = {
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
    const e = t, n = G(), s = ve(), l = L("Checkbox", e.variant, e.classes), a = (g) => {
      const _ = e.modelValue;
      let m = c;
      m = Be(_, e.trueValue) ? e.falseValue : e.trueValue, c.value = m, o("change", g);
    }, c = N({
      get: () => e.modelValue,
      set: (g) => {
        o("update:modelValue", g);
      }
    }), u = N(() => !!Be(e.modelValue || e.value, e.trueValue));
    return (g, _) => {
      var m;
      return i(), d("div", {
        class: h(r(l).wrapper)
      }, [
        w("div", {
          class: h(r(l).inputWrapper)
        }, [
          w("input", {
            id: r(s),
            type: e.radio ? "radio" : "checkbox",
            class: h({
              [r(l).inputCheck]: !e.radio,
              [r(l).inputRadio]: e.radio,
              [r(l).inputDisabled]: e.disabled
            }),
            checked: u.value,
            value: e.modelValue,
            disabled: e.disabled,
            onChange: _[0] || (_[0] = (f) => a(f))
          }, null, 42, Ns)
        ], 2),
        e.label || ((m = r(n)) == null ? void 0 : m.default) ? (i(), d("div", {
          key: 0,
          class: h(r(l).labelWrapper)
        }, [
          C(g.$slots, "default", {
            isChecked: u.value,
            props: e
          }, () => [
            V(Le, {
              id: r(s),
              required: e.required,
              disabled: e.disabled,
              tooltip: e.tooltip,
              variant: e.variantLabel,
              variantTooltip: e.variantTooltip
            }, {
              default: D(() => [
                z(T(e.label), 1)
              ]),
              _: 1
            }, 8, ["id", "required", "disabled", "tooltip", "variant", "variantTooltip"])
          ], !0)
        ], 2)) : S("", !0)
      ], 2);
    };
  }
}, Lt = /* @__PURE__ */ re(Rs, [["__scopeId", "data-v-64fca8fb"]]), Es = ["id", "checked", "value", "disabled"], zs = {
  key: 2,
  class: "relative cursor-not-allowed"
}, Rr = {
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
    const n = ve(), s = L("Toggle", e.variant, e.classes), l = (_) => {
      const m = e.modelValue;
      let f = u;
      f = Be(m, e.trueValue) ? e.falseValue : e.trueValue, u.value = f, o("change", _);
    }, a = (_) => {
      _.preventDefault(), c("toggle");
    }, c = (_) => {
      e.disabled || (_ === "after" && e.falseLabel ? u.value = e.trueValue : _ === "before" && e.falseLabel ? u.value = e.falseValue : u.value = Be(e.modelValue, e.trueValue) ? e.falseValue : e.trueValue);
    }, u = N({
      get: () => e.modelValue,
      set: (_) => {
        o("update:modelValue", _);
      }
    }), g = N(() => !!Be(e.modelValue, e.trueValue));
    return (_, m) => (i(), d("div", {
      class: h(r(s).wrapper)
    }, [
      e.falseLabel ? (i(), d("div", {
        key: 0,
        class: h(r(s).labelFalseWrapper)
      }, [
        V(Le, {
          onClick: m[0] || (m[0] = (f) => c("before")),
          disabled: e.disabled,
          classes: {
            "cursor-pointer": !0,
            [r(s).switchFalseLabelColorChecked]: g.value
          }
        }, {
          default: D(() => [
            z(T(e.falseLabel), 1)
          ]),
          _: 1
        }, 8, ["disabled", "classes"])
      ], 2)) : S("", !0),
      e.disabled ? (i(), d("div", zs, [
        w("div", {
          class: h(`${e.inset ? "w-12" : "w-10"} ${e.inset ? "h-6" : "h-4"} ${g.value ? r(s).switchDisabledColorChecked : r(s).switchDisabledColor} rounded-full shadow-inner`)
        }, null, 2),
        w("div", {
          class: h(`absolute w-6 h-6 bg-white border-2 ${g.value ? `${r(s).switchDisabledColorBorderChecked} translate-x-full` : "translate-x-0"} rounded-full ${e.inset ? "left-0 top-0" : "-left-1 -top-1"} transition`)
        }, null, 2)
      ])) : (i(), d("div", {
        key: 1,
        class: h(r(s).inputWrapper),
        onClick: a
      }, [
        w("input", {
          id: r(n),
          class: "sr-only",
          checked: g.value,
          value: e.modelValue,
          disabled: e.disabled,
          onChange: m[1] || (m[1] = (f) => l(f))
        }, null, 40, Es),
        w("div", null, [
          w("div", {
            class: h(`${e.inset ? "w-12" : "w-10"} ${e.inset ? "h-6" : "h-4"} ${g.value ? r(s).switchColorChecked : r(s).switchColor} rounded-full shadow-inner`),
            id: "switch-background"
          }, null, 2),
          w("div", {
            class: h(`absolute w-6 h-6 bg-white border-2 ${g.value ? `${r(s).switchColorBorderChecked} translate-x-full` : `${r(s).switchColorBorder} translate-x-0`} rounded-full ${e.inset ? "left-0 top-0" : "-left-1 -top-1"} transition`)
          }, null, 2)
        ])
      ], 2)),
      e.label ? (i(), d("div", {
        key: 3,
        class: h(r(s).labelWrapper),
        onClick: m[2] || (m[2] = (f) => c("after"))
      }, [
        V(Le, {
          id: null,
          required: e.required,
          disabled: e.disabled,
          tooltip: e.tooltip,
          variant: e.variantLabel,
          variantTooltip: e.variantTooltip,
          classes: {
            "cursor-pointer": !0,
            [r(s).switchTrueLabelColorChecked]: g.value && e.falseLabel,
            [r(s).switchTrueLabelColor]: !g.value && e.falseLabel
          }
        }, {
          default: D(() => [
            z(T(e.label), 1)
          ]),
          _: 1
        }, 8, ["required", "disabled", "tooltip", "variant", "variantTooltip", "classes"])
      ], 2)) : S("", !0)
    ], 2));
  }
}, Vs = /* @__PURE__ */ w("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  class: "w-5 h-5"
}, [
  /* @__PURE__ */ w("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
], -1), Ms = { key: 0 }, Ws = "input", Er = {
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
    const e = t, n = G(), s = L("InputText", e.variant, e.classes), l = e.type === "number" ? "text" : e.type, a = ve(), c = U(null), u = (p) => {
      if (p == null || p === "")
        return null;
      if (e.type === "number" && !e.decimals)
        p = p.toString().replace(/\D/g, ""), p = Number(p);
      else if (e.type === "number" && e.decimals) {
        p = p.toString().replace(/[^0-9.-]/g, "");
        var k = p.split(".");
        if (k.length > 2)
          p = k[0] + "." + k.slice(1).join("");
        else if (k.length === 2 && p.endsWith("."))
          p = p;
        else {
          p = Number(p);
          var I = Math.pow(10, e.decimals);
          p = Math.round(p * I) / I;
        }
      }
      return typeof e.formatter == "function" && (p = e.formatter(p)), e.type === "number" && (e.max && p > e.max && (p = e.max), e.min && p < e.min && (p = e.min)), p;
    }, g = (p) => {
    }, _ = (p) => {
      p.target.value = u(p.target.value), b.value = p.target.value, o("keyup", p), p.key === "Enter" && o("enter", p);
    }, m = (p) => {
      o("keydown", p);
    }, f = (p) => {
      e.selectAll && (c == null ? void 0 : c.value) && c.value.select(), o("focusin", p);
    }, v = (p) => {
      o("focusout", p);
    }, y = () => {
      b.value = null, o("cleared");
    }, $ = (p) => {
      b.value = u(p.target.value), p.target.value = b.value, o("blur", p);
    }, x = N(() => {
      if (e.customClasses)
        return e.customClasses;
      {
        let p = [s.input];
        return n != null && n.prepend && (p = p.concat([s.inputPrepend])), n != null && n.icon && (p = p.concat(["pl-9"])), e.clearable && (p = p.concat(["pr-8"])), e.readonly && (p = p.concat([s.readonly])), e.disabled && (p = p.concat([s.disabled])), e.errors && (p = p.concat([s.errors])), !e.errors && !e.disabled && (p = p.concat([s.inputTheme])), p;
      }
    }), b = N({
      get: () => u(e.modelValue !== null ? e.modelValue : e.value),
      set: (p) => {
        o("update:modelValue", p);
      }
    });
    return (p, k) => {
      var I, A;
      return i(), d("div", {
        class: h(r(s).root)
      }, [
        e.label ? (i(), W(Le, {
          key: 0,
          id: r(a),
          title: e.label,
          required: e.required,
          error: e.errors,
          tooltip: e.tooltip,
          disabled: e.disabled,
          variant: e.variantLabel
        }, null, 8, ["id", "title", "required", "error", "tooltip", "disabled", "variant"])) : S("", !0),
        w("div", {
          class: h(["flex", { "mt-1": e.label }])
        }, [
          (I = r(n)) != null && I.prepend ? (i(), d("div", {
            key: 0,
            class: h(r(s).prepend)
          }, [
            C(p.$slots, "prepend")
          ], 2)) : S("", !0),
          w("div", {
            class: h(r(s).inputWrapper)
          }, [
            (A = r(n)) != null && A.icon ? (i(), d("div", {
              key: 0,
              class: h(r(s).icon)
            }, [
              C(p.$slots, "icon")
            ], 2)) : S("", !0),
            (i(), W(Fe(Ws), {
              ref_key: "inputTag",
              ref: c,
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
              value: b.value,
              onInput: k[0] || (k[0] = (P) => g()),
              onKeyup: k[1] || (k[1] = (P) => _(P)),
              onKeydown: k[2] || (k[2] = (P) => m(P)),
              onFocusout: k[3] || (k[3] = (P) => v(P)),
              onFocus: k[4] || (k[4] = (P) => f(P)),
              onBlur: k[5] || (k[5] = (P) => $(P)),
              min: e.min,
              max: e.max,
              step: e.step,
              class: h(x.value),
              style: te((e.width ? `width: ${e.width}px;` : "") + e.customStyle)
            }, null, 40, ["id", "type", "name", "placeholder", "readonly", "disabled", "required", "maxlength", "autocomplete", "autofill", "pattern", "value", "min", "max", "step", "class", "style"])),
            e.clearable && b.value && !e.readonly && !e.disabled ? (i(), d("div", {
              key: 1,
              class: h(r(s).clearable),
              onClick: y
            }, [
              C(p.$slots, "clearable", {}, () => [
                Vs
              ])
            ], 2)) : S("", !0)
          ], 2)
        ], 2),
        e.characterCounter ? (i(), d("div", {
          key: 1,
          class: h(r(s).counter)
        }, [
          C(p.$slots, "counter", {
            valueLength: b.value && b.value.length ? b.value.length : 0,
            maxlength: e.maxlength
          }, () => [
            z(T(b.value && b.value.length || 0), 1),
            e.maxlength ? (i(), d("span", Ms, "/" + T(e.maxlength), 1)) : S("", !0)
          ])
        ], 2)) : S("", !0)
      ], 2);
    };
  }
}, js = /* @__PURE__ */ w("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  class: "w-5 h-5"
}, [
  /* @__PURE__ */ w("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
], -1), Hs = { key: 0 }, Fs = "textarea", zr = {
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
    const n = L("InputArea", e.variant, e.classes), s = ve(), l = U(null), a = (x) => x == null || x === "" ? null : x, c = (x) => {
    }, u = (x) => {
      x.target.value = a(x.target.value), $.value = x.target.value, o("keyup", x), x.key === "Enter" && o("enter", x);
    }, g = (x) => {
      o("keydown", x);
    }, _ = (x) => {
      e.selectAll && (l == null ? void 0 : l.value) && l.value.select(), o("focusin", x);
    }, m = (x) => {
      o("focusout", x);
    }, f = () => {
      $.value = null, o("cleared");
    }, v = (x) => {
      $.value = a(x.target.value), x.target.value = $.value, o("blur", x);
    }, y = N(() => {
      if (e.customClasses)
        return e.customClasses;
      {
        let x = [n.input];
        return e.noresize && (x = x.concat(["resize-none"])), e.clearable && (x = x.concat(["pr-8"])), e.readonly && (x = x.concat([n.readonly])), e.disabled && (x = x.concat([n.disabled])), e.errors && (x = x.concat([n.errors])), !e.errors && !e.disabled && (x = x.concat([n.inputTheme])), x;
      }
    }), $ = N({
      get: () => a(e.modelValue !== null ? e.modelValue : e.value),
      set: (x) => {
        o("update:modelValue", x);
      }
    });
    return (x, b) => (i(), d("div", {
      class: h(r(n).root)
    }, [
      e.label ? (i(), W(Le, {
        key: 0,
        id: r(s),
        title: e.label,
        required: e.required,
        error: e.errors,
        tooltip: e.tooltip,
        disabled: e.disabled,
        variant: e.variantLabel
      }, null, 8, ["id", "title", "required", "error", "tooltip", "disabled", "variant"])) : S("", !0),
      w("div", {
        class: h(["flex", { "mt-1": e.label }])
      }, [
        w("div", {
          class: h(r(n).inputWrapper)
        }, [
          (i(), W(Fe(Fs), {
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
            value: $.value,
            onInput: b[0] || (b[0] = (p) => c()),
            onKeyup: b[1] || (b[1] = (p) => u(p)),
            onKeydown: b[2] || (b[2] = (p) => g(p)),
            onFocusout: b[3] || (b[3] = (p) => m(p)),
            onFocus: b[4] || (b[4] = (p) => _(p)),
            onBlur: b[5] || (b[5] = (p) => v(p)),
            min: e.min,
            max: e.max,
            step: e.step,
            class: h(y.value),
            style: te((e.width ? `width: ${e.width}px;` : "") + e.customStyle)
          }, null, 40, ["id", "name", "placeholder", "readonly", "disabled", "required", "maxlength", "autocomplete", "autofill", "pattern", "value", "min", "max", "step", "class", "style"])),
          e.clearable && $.value && !e.readonly && !e.disabled ? (i(), d("div", {
            key: 0,
            class: h(r(n).clearable),
            onClick: f
          }, [
            C(x.$slots, "clearable", {}, () => [
              js
            ])
          ], 2)) : S("", !0)
        ], 2)
      ], 2),
      e.characterCounter ? (i(), d("div", {
        key: 1,
        class: h(r(n).counter)
      }, [
        C(x.$slots, "counter", {
          valueLength: $.value && $.value.length ? $.value.length : 0,
          maxlength: e.maxlength
        }, () => [
          z(T($.value && $.value.length || 0), 1),
          e.maxlength ? (i(), d("span", Hs, "/" + T(e.maxlength), 1)) : S("", !0)
        ])
      ], 2)) : S("", !0)
    ], 2));
  }
};
const Gs = { class: "flex justify-center items-center" }, qs = ["onClick"], Us = { class: "my-auto truncate flex items-center justify-center align-middle" }, Xs = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-auto h-auto"
}, Ys = /* @__PURE__ */ w("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
}, null, -1), Ks = [
  Ys
], Zs = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-auto h-auto"
}, Js = /* @__PURE__ */ w("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
}, null, -1), Qs = [
  Js
], er = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-auto h-auto"
}, tr = /* @__PURE__ */ w("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
}, null, -1), or = [
  tr
], nr = {
  key: 1,
  style: { position: "relative", top: "0" }
}, sr = { class: "table-row-loading" }, rr = {
  colspan: "100%",
  class: "border-none p-0 relative"
}, lr = ["onClick"], ar = { class: "flex items-center justify-center" }, ir = { key: 0 }, dr = { key: 0 }, ur = { key: 1 }, Vr = {
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
    const e = t, n = L("Table", e.variant, e.classes), s = U(null), l = Me({
      selection: [],
      selectAllOption: null,
      selectedAll: !1
    }), a = N(() => e.headers.filter(($) => !($ != null && $.hide))), c = N(() => e.loading ? e.loadingText : e.noDataText), u = ($, x, b = void 0) => Ds($, x, b), g = () => {
      l.selectedAll ? _() : m();
    }, _ = () => {
      l.selection = [...Array(e.rows.length).keys()];
    }, m = () => {
      l.selection = [];
    }, f = ($, x, b) => {
      if (!e.selectRow || x === "selectRow") {
        let p = [...l.selection];
        if (l.selectAllOption = null, !p.includes($))
          e.selectOne === !0 ? p = [$] : p.push($);
        else {
          const k = p.indexOf($);
          k !== -1 && p.splice(k, 1);
        }
        l.selection = p;
      }
    }, v = ($, x, b) => {
      if (e.selectRow && f($, "selectRow"), e.select) {
        if (b.target.nodeName === "INPUT" || b.target.nodeName === "TD" && b.target.cellIndex === 0)
          return;
        o("click-row", x);
      } else
        o("click-row", x);
    }, y = ($, x) => {
      if ($.sorting === !0) {
        let b = null;
        $.sorted === "ASC" ? b = "DESC" : $.sorted === "DESC" ? b = "ASC" : $.sorted ? b = null : $.sortDefault ? b = $.sortDefault : b = "ASC";
        let p = [];
        e.headers.forEach((k) => {
          k.value === $.value ? p.push({
            ...k,
            sorted: b
          }) : p.push({
            ...k,
            sorted: null
          });
        }), o("sort", $, b, [...p]);
      }
    };
    return We(() => l.selection, ($) => {
      let x = [];
      l.selection.length ? ($.forEach((b) => {
        const p = e.rows[b];
        p && (e.selectionField && p[e.selectionField] ? x.push(p[e.selectionField]) : x.push(e.rows[b]));
      }), l.selection.length === e.rows.length ? l.selectedAll = !0 : l.selectedAll = !1) : l.selectedAll = !1, o("selection", x, [...$]);
    }), ($, x) => (i(), d("div", {
      class: h(r(n).wrapper)
    }, [
      w("table", {
        class: h(r(n).table)
      }, [
        !e.hideHeader && a.value.length ? (i(), d("thead", {
          key: 0,
          class: h(r(n).thead)
        }, [
          w("tr", {
            class: h(r(n).theadRow)
          }, [
            t.select ? (i(), d("th", {
              key: 0,
              scope: "col",
              class: h(r(n).theadColumnSelectAll)
            }, [
              C($.$slots, "select-all", {}, () => [
                w("div", Gs, [
                  e.selectOne ? S("", !0) : (i(), W(Lt, {
                    key: 0,
                    modelValue: l.selectedAll,
                    "onUpdate:modelValue": x[0] || (x[0] = (b) => l.selectedAll = b),
                    onChange: g,
                    disabled: e.loading,
                    variantCheckbox: e.variantCheckbox
                  }, null, 8, ["modelValue", "disabled", "variantCheckbox"]))
                ])
              ])
            ], 2)) : S("", !0),
            (i(!0), d(O, null, M(a.value, (b, p) => (i(), d("th", {
              scope: "col",
              key: p,
              class: h({
                [r(n).theadColumn]: !0,
                [r(n).theadColumnSorting]: b.sorting,
                [r(n).theadColumnSorted]: b.sorted,
                "!text-left": !b.align,
                "!text-right": b.align === "right",
                "!text-center": b.align === "center"
              }),
              style: te(`${b.minWidth ? `min-width: ${b.minWidth}` : ""} ${b.width ? `width: ${b.width};` : ""}`),
              onClick: (k) => y(b)
            }, [
              C($.$slots, `header.${b.value}`, { header: b }, () => [
                w("div", Us, [
                  w("div", {
                    class: h(["grow", r(n).theadColumnLabel])
                  }, T(b.label), 3),
                  b.sorting ? (i(), d("div", {
                    key: 0,
                    class: h(["sort-icon", {
                      [r(n).theadColumnSortIcon]: !0,
                      [r(n).theadColumnSortIconSorted]: b.sorted
                    }])
                  }, [
                    b.sorted === "ASC" ? (i(), d("svg", Xs, Ks)) : b.sorted === "DESC" ? (i(), d("svg", Zs, Qs)) : (i(), d("svg", er, or))
                  ], 2)) : S("", !0)
                ])
              ])
            ], 14, qs))), 128))
          ], 2)
        ], 2)) : S("", !0),
        e.loading ? (i(), d("thead", nr, [
          w("tr", sr, [
            w("th", rr, [
              V(Vt, {
                variantLoaderLinear: e.variantLoaderLinear
              }, null, 8, ["variantLoaderLinear"])
            ])
          ])
        ])) : S("", !0),
        e.rows && e.rows.length ? (i(), d("tbody", {
          key: 2,
          ref_key: "tablebody",
          ref: s,
          class: h(r(n).tbody)
        }, [
          (i(!0), d(O, null, M(e.rows, (b, p) => (i(), d("tr", {
            key: p,
            class: h([
              r(n).tbodyRow,
              b.class ? b.class : "",
              l.selection.includes(p) ? r(n).tbodyRowSelected : "",
              e.selectRow || e.rowCursor ? "cursor-pointer" : ""
            ]),
            onClick: (k) => v(p, $.item, k)
          }, [
            t.select ? (i(), d("td", {
              key: 0,
              class: h(["relative", r(n).tbodyColumnSelect])
            }, [
              C($.$slots, "column.select", {}, () => [
                e.selectBorder && l.selection.includes(p) ? (i(), d("div", {
                  key: 0,
                  class: h(["absolute inset-y-0 left-0 w-0.5", r(n).tbodyColumnSelectBorder])
                }, null, 2)) : S("", !0),
                w("div", ar, [
                  V(Lt, {
                    value: l.selection.includes(p),
                    onChange: (k) => f(p, "selectRow"),
                    onClick: x[1] || (x[1] = de(() => {
                    }, ["stop"])),
                    disabled: e.loading,
                    variantCheckbox: e.variantCheckbox
                  }, null, 8, ["value", "onChange", "disabled", "variantCheckbox"])
                ])
              ])
            ], 2)) : S("", !0),
            (i(!0), d(O, null, M(a.value, (k) => (i(), d("td", {
              key: k.value,
              class: h([
                r(n).tbodyColumn,
                k.align ? "" : "text-left",
                k.align === "right" ? "text-right" : "",
                k.align === "center" ? "text-center" : "",
                b.class ? b.class : "",
                k.class ? k.class : ""
              ]),
              style: te(`${k.minWidth ? `min-width: ${k.minWidth};` : ""} ${k.width ? `width: ${k.width};` : ""}`)
            }, [
              C($.$slots, `column.${k.value}`, {
                column: b,
                index: p
              }, () => [
                u(b, k.value) !== null && u(b, k.value) !== "" && u(b, k.value) ? (i(), d("span", ir, [
                  typeof k.formatValue == "function" ? (i(), d("span", dr, T(k.formatValue(u(b, k.value))), 1)) : (i(), d("span", ur, T(u(b, k.value)), 1))
                ])) : k.hasOwnProperty("empty") ? (i(), d("span", {
                  key: 1,
                  class: h(r(n).emptyCellText)
                }, T(k.empty), 3)) : e.emptyCellText ? (i(), d("span", {
                  key: 2,
                  class: h(r(n).emptyCellText)
                }, T(e.emptyCellText), 3)) : S("", !0)
              ])
            ], 6))), 128))
          ], 10, lr))), 128))
        ], 2)) : (i(), d("tbody", {
          key: 3,
          ref_key: "tablebody",
          ref: s
        }, [
          w("tr", null, [
            w("td", {
              colspan: "100%",
              class: h(r(n).noData)
            }, [
              C($.$slots, "nodata", {}, () => [
                z(T(c.value), 1)
              ])
            ], 2)
          ])
        ], 512))
      ], 2)
    ], 2));
  }
};
const cr = ["data-backdrop-id"], pr = {
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
    return (l, a) => (i(), W(ye, {
      name: "fade",
      appear: ""
    }, {
      default: D(() => [
        e.show ? (i(), d("div", {
          key: 0,
          onClick: s,
          "data-backdrop-id": e.id,
          class: h({
            backdrop: !0,
            [r(n).base]: !0,
            [r(n).theme]: !0,
            "cursor-pointer": !e.persist,
            fixed: !e.relative,
            absolute: e.relative
          })
        }, null, 10, cr)) : S("", !0)
      ]),
      _: 1
    }));
  }
}, oo = /* @__PURE__ */ re(pr, [["__scopeId", "data-v-06f6fb7a"]]);
const fr = ["data-modal-id"], hr = { class: "h-full w-full" }, mr = {
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
    offset: {
      type: Number,
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
    const n = L("Modal", e.variant, e.classes), s = Me({
      relativeOffsetPx: null,
      localShowing: !1,
      id: ve()
    }), l = () => {
      o("close");
    }, a = () => {
      if (s.relativeOffsetPx = null, e.offsetDiv) {
        let m = 0, f = document.getElementById(e.offsetDiv);
        f && (m = f.offsetWidth);
        let v = document.getElementById("app");
        if (v) {
          let y = +(v.offsetWidth - m);
          y && (s.relativeOffsetPx = y);
        }
      }
    }, c = N(() => e.offset || s.relativeOffsetPx ? `width: calc(100% - 2em ${e.offset || s.relativeOffsetPx ? `- ${e.offset || s.relativeOffsetPx}px` : ""});` : e.centerOverflow || e.type === "full" ? "width: calc(100%);" : "width: auto;"), u = N(() => {
      if (s.relativeOffsetPx)
        return e.type === "center" ? `left: calc(${s.relativeOffsetPx}px + 1em); right: 1em;` : "right: 1em;";
      if (e.offsetDirection && e.offset > 0)
        return `${e.offsetDirection}: ${e.offset}px; ${g(e.offsetDirection)}: 0;`;
    }), g = (m) => m === "right" ? "left" : "right";
    N(() => {
      let m = [];
      switch (e.type) {
        case "center":
          m = m.concat([
            "inset-0",
            "max-w-xl",
            "mx-auto",
            "flex",
            "items-center",
            "justify-center"
          ]);
          break;
        case "full":
          m = m.concat([
            "inset-0",
            "h-screen",
            "flex",
            "items-center",
            "justify-center"
          ]);
          break;
      }
      return e.relative ? m = m.concat(["absolute"]) : !e.relative && e.scroll ? m = m.concat(["relative"]) : m = m.concat(["fixed"]), e.scrolling || (m = m.concat(["overflow-hidden"])), m;
    });
    const _ = () => {
      document.querySelectorAll(".backdrop").length === 1 && (document.body.style.overflow = "auto");
    };
    return We(() => e.show, (m) => {
      m === !0 ? (s.localShowing = !0, document.body.style.overflow = "hidden") : (_(), setTimeout(() => {
        s.localShowing = !1, o("end");
      }, 300));
    }), It(() => {
      a();
    }), it(() => {
      _();
    }), (m, f) => je((i(), d("div", {
      class: h({
        [r(n).base]: !0,
        "overflow-y-scroll": e.scroll,
        "p-4": e.type === "full"
      })
    }, [
      w("div", {
        class: h({
          [r(n).wrapper]: !0,
          "min-h-full": e.type !== "full",
          "h-full": e.type === "full"
        })
      }, [
        V(ye, {
          name: "pop",
          appear: ""
        }, {
          default: D(() => [
            e.show ? (i(), d("div", {
              key: 0,
              "data-modal-id": s.id,
              class: h({
                [r(n).content]: !0,
                [r(n).contentTheme]: !0,
                containerClasses: !0,
                "h-screen": e.type === "full"
              }),
              style: te(`${e.maxWidth ? `max-width:${e.maxWidth}px;` : ""} min-width: 300px; ${e.scroll ? "margin-top: 1em; margin-bottom: 1em;" : `max-height: calc(100vh - ${e.type === "full" ? "2em" : "0em"});`} ${c.value} ${u.value};`)
            }, [
              w("div", hr, [
                C(m.$slots, "default", {}, void 0, !0)
              ])
            ], 14, fr)) : S("", !0)
          ]),
          _: 3
        })
      ], 2),
      V(oo, {
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
}, Mr = /* @__PURE__ */ re(mr, [["__scopeId", "data-v-ff680da5"]]);
const gr = {
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
    },
    edges: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["close"],
  setup(t, { emit: o }) {
    const e = t;
    G();
    const n = L("Drawer", e.variant, e.classes), s = Me({
      localShowing: !1,
      id: ve()
    }), l = () => {
      o("close");
    }, a = N(() => {
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
    }), c = () => {
      document.querySelectorAll(".backdrop").length === 1 && (document.body.style.overflow = "auto");
    };
    return We(() => e.show, (u) => {
      u === !0 ? (s.localShowing = !0, document.body.style.overflow = "hidden") : (c(), s.localShowing = !1);
    }), it(() => {
      c();
    }), (u, g) => (i(), d("div", {
      class: h([r(n).base])
    }, [
      V(ye, {
        name: `slide-${t.position}`,
        appear: ""
      }, {
        default: D(() => [
          s.localShowing ? (i(), d("div", {
            key: 0,
            class: h([a.value, r(n).content, r(n).contentTheme, "p-4"]),
            style: te(`${e.maxWidth ? `max-width: ${e.maxWidth}px;` : ""} min-width: 300px; height: 100%;`)
          }, [
            C(u.$slots, "default", {}, void 0, !0)
          ], 6)) : S("", !0)
        ]),
        _: 3
      }, 8, ["name"]),
      V(oo, {
        show: e.show,
        persist: e.persist,
        relative: e.relative,
        variant: e.variantBackdrop,
        id: s.id,
        onClose: l
      }, null, 8, ["show", "persist", "relative", "variant", "id"])
    ], 2));
  }
}, Wr = /* @__PURE__ */ re(gr, [["__scopeId", "data-v-89b4dcdc"]]);
export {
  xr as Avatar,
  $r as AvatarGroup,
  oo as Backdrop,
  kr as Badge,
  $e as Button,
  Sr as ButtonGroup,
  Cr as Card,
  Tr as Carousel,
  Lt as Checkbox,
  br as Container,
  Wr as Drawer,
  Br as Dropdown,
  wr as Expandable,
  _r as ExpandableGroup,
  Pr as Gallery,
  zr as InputArea,
  Er as InputText,
  Le as Label,
  Or as List,
  Lr as ListItem,
  Vt as LoaderLinear,
  Ir as LoaderProgress,
  $o as LoaderSpinner,
  Mr as Modal,
  Ar as Pagination,
  Nr as Tab,
  Vr as Table,
  Dr as Tabs,
  Rr as Toggle,
  ss as Tooltip,
  vr as setVariantClasses,
  L as useVariantClasses
};
