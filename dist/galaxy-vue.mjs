import { reactive as We, readonly as mt, openBlock as i, createElementBlock as c, normalizeClass as m, unref as r, renderSlot as C, ref as U, inject as F, watch as je, createElementVNode as w, createCommentVNode as S, createTextVNode as z, toDisplayString as B, createVNode as V, Transition as ye, withCtx as D, withDirectives as He, vShow as Fe, pushScopeId as lt, popScopeId as at, provide as j, useSlots as G, computed as N, createBlock as M, resolveDynamicComponent as Ie, mergeProps as Ge, Fragment as L, onMounted as It, renderList as W, withModifiers as de, nextTick as Dt, defineComponent as qe, normalizeProps as Nt, guardReactiveProps as Rt, withScopeId as sn, resolveComponent as Qe, normalizeStyle as te, withKeys as rn, onBeforeUnmount as it, createSlots as et, Comment as ln } from "vue";
const an = {
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
}, tt = We(an);
function I(t, n, e = {}) {
  const o = tt[t];
  if (o)
    return n && o[n] ? mt({ ...o.default, ...o[n], ...e }) : mt({ ...o.default, ...e });
  console.warn(`[Galaxy Vue warn] No component "${t}" not found in variant list`);
}
function vr(t) {
  Object.assign(tt, Et(JSON.parse(JSON.stringify(tt)), t));
}
function Et(t, n) {
  for (const e in n) {
    const o = t[e], s = n[e];
    gt(o) && gt(s) ? t[e] = Et({ ...o }, s) : s !== void 0 && (t[e] = s);
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
    },
    fluid: {
      type: Boolean,
      default: !1
    },
    fadeIn: {
      type: Boolean,
      default: !1
    },
    fadeInOrder: {
      type: Number,
      default: 0
    }
  },
  emits: ["close"],
  setup(t, { emit: n }) {
    const e = t, o = I("Container", e.variant, e.classes);
    return (s, l) => (i(), c("div", {
      class: m({
        [r(o).base]: !0,
        [r(o).width]: !e.fluid,
        "w-full": e.fluid,
        "g-fade-in": e.fadeIn,
        "g-fade-in-first": e.fadeInOrder === 1,
        "g-fade-in-second": e.fadeInOrder === 2,
        "g-fade-in-third": e.fadeInOrder === 3,
        "g-fade-in-forth": e.fadeInOrder === 4
      })
    }, [
      C(s.$slots, "default")
    ], 2));
  }
}, ve = () => Math.random().toString(36).substr(2, 9);
const re = (t, n) => {
  const e = t.__vccOpts || t;
  for (const [o, s] of n)
    e[o] = s;
  return e;
}, zt = (t) => (lt("data-v-e3242f54"), t = t(), at(), t), dn = /* @__PURE__ */ zt(() => /* @__PURE__ */ w("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M8.25 4.5l7.5 7.5-7.5 7.5"
}, null, -1)), un = [
  dn
], cn = /* @__PURE__ */ zt(() => /* @__PURE__ */ w("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
}, null, -1)), pn = [
  cn
], fn = {
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
    const n = t, e = ve(), o = U(null), s = U(!1), l = I("Expandable", n.variant, n.classes), a = F("IS_EXPANDABLE_GROUP", 0), u = F("IS_ALWAYS_OPEN", 0), d = F("EXPAND_ACTIVE", null);
    a && je(d, (g, $) => {
      !u && g !== e && (s.value = !1);
    });
    const _ = () => {
      n.disabled || (s.value = !s.value, a && s.value === !0 && (d.value = e));
    }, v = (g) => {
      g.style.height = "0";
    }, h = (g) => {
      g.style.height = g.scrollHeight + "px";
    }, f = (g) => {
      g.style.height = g.scrollHeight + "px";
    }, y = (g) => {
      g.style.height = "0";
    };
    return (g, $) => (i(), c("div", {
      class: m(["expandable-wrapper relative", {
        [r(l).panelWrapperNotGrouped]: !r(a),
        [r(l).panelWrapperGrouped]: r(a)
      }])
    }, [
      w("div", {
        class: m({
          "expandable flex items-center justify-start": !0,
          [r(l).panel]: !0,
          [r(l).panelTheme]: !0,
          [r(l).panelActive]: s.value,
          [r(l).panelDisabled]: n.disabled
        }),
        onClick: _
      }, [
        t.arrowPosition === "start" && !n.arrowHide ? (i(), c("div", {
          key: 0,
          class: m({
            "mr-2": !0,
            [r(l).panelArrowWrapper]: !0,
            [r(l).panelArrowWrapperDisabled]: n.disabled
          })
        }, [
          C(g.$slots, "arrow-start", {}, () => [
            (i(), c("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              "stroke-width": "1.5",
              stroke: "currentColor",
              class: m([r(l).panelArrowSize, { "rotate-0": !s.value, "rotate-90": s.value }])
            }, un, 2))
          ], !0)
        ], 2)) : S("", !0),
        w("div", {
          class: m(["grow", {
            [r(l).panelTitle]: !0,
            [r(l).panelTitleDisabled]: n.disabled
          }])
        }, [
          C(g.$slots, "title", {}, () => [
            z(B(n.title), 1)
          ], !0)
        ], 2),
        t.arrowPosition === "end" && !n.arrowHide ? (i(), c("div", {
          key: 1,
          class: m({
            [r(l).panelArrowWrapper]: !0,
            [r(l).panelArrowWrapperDisabled]: n.disabled
          })
        }, [
          C(g.$slots, "arrow-end", {}, () => [
            (i(), c("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              "stroke-width": "1.5",
              stroke: "currentColor",
              class: m([r(l).panelArrowSize, { "rotate-0": !s.value, "rotate-180": s.value }])
            }, pn, 2))
          ], !0)
        ], 2)) : S("", !0)
      ], 2),
      V(ye, {
        name: "slide",
        onBeforeEnter: v,
        onEnter: h,
        onBeforeLeave: f,
        onLeave: y
      }, {
        default: D(() => [
          He(w("div", {
            ref_key: "content",
            ref: o,
            class: m(["overflow-hidden", r(l).panelContent])
          }, [
            C(g.$slots, "default", {}, void 0, !0)
          ], 2), [
            [Fe, s.value]
          ])
        ]),
        _: 3
      })
    ], 2));
  }
}, wr = /* @__PURE__ */ re(fn, [["__scopeId", "data-v-e3242f54"]]);
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
    const n = t, e = U(!1), o = I("Expandable", n.variant, n.classes);
    return j("IS_EXPANDABLE_GROUP", 1), j("IS_ALWAYS_OPEN", n.alwaysOpen), j("EXPAND_ACTIVE", e), (s, l) => (i(), c("div", {
      class: m(["expandable-group", [r(o).group, r(o).groupTheme]])
    }, [
      C(s.$slots, "default")
    ], 2));
  }
}, hn = { key: 1 }, mn = ["src"], gn = /* @__PURE__ */ w("path", {
  "fill-rule": "evenodd",
  d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
  "clip-rule": "evenodd"
}, null, -1), yn = [
  gn
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
    const n = t, e = G(), o = I("Avatar", n.variant, n.classes), s = F("IS_AVATAR_GROUPED", 0);
    return (l, a) => {
      var u;
      return i(), c("div", {
        class: m(r(o).wrapper)
      }, [
        w("div", {
          class: m([
            r(o).content,
            r(o).contentSize,
            r(o).contentTheme,
            {
              [r(o).contentGrouped]: r(s),
              [r(o).contentHover]: n.hover
            }
          ])
        }, [
          n.text || ((u = r(e)) == null ? void 0 : u.default) ? C(l.$slots, "default", { key: 0 }, () => [
            z(B(n.text), 1)
          ]) : n.img ? (i(), c("div", hn, [
            w("img", {
              src: n.img,
              alt: ""
            }, null, 8, mn)
          ])) : (i(), c("div", {
            key: 2,
            class: m(r(o).defaultPlaceholderWrapper)
          }, [
            (i(), c("svg", {
              class: m(r(o).defaultPlaceholderIcon),
              fill: "currentColor",
              viewBox: "0 0 20 20",
              xmlns: "http://www.w3.org/2000/svg"
            }, yn, 2))
          ], 2)),
          n.status !== null ? (i(), c("span", {
            key: 3,
            class: m([
              r(o).statusDotSizePosition,
              r(o).statusDotTheme,
              {
                [r(o).statusDotOnline]: n.status === "online",
                [r(o).statusDotBusy]: n.status === "busy",
                [r(o).statusDotAway]: n.status === "away",
                [r(o).statusDotOffline]: n.status !== "online" || n.status !== "busy" || n.status === "away"
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
    const n = t, e = I("AvatarGroup", n.variant, n.classes);
    return j("IS_AVATAR_GROUPED", 1), (o, s) => (i(), c("div", {
      class: m(r(e).content)
    }, [
      C(o.$slots, "default")
    ], 2));
  }
}, vn = /* @__PURE__ */ w("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M6 18L18 6M6 6l12 12"
}, null, -1), bn = [
  vn
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
  setup(t, { emit: n }) {
    const e = t, o = I("Badge", e.variant, e.classes), s = (l) => {
      n("remove", l);
    };
    return (l, a) => (i(), c("div", {
      class: m([r(o).base, r(o).theme, r(o).themeColor])
    }, [
      w("div", null, [
        C(l.$slots, "default", {}, () => [
          z(B(e.text), 1)
        ])
      ]),
      e.removable ? (i(), c("button", {
        key: 0,
        type: "button",
        class: m([r(o).removeButton, r(o).removeButtonTheme]),
        onClick: a[0] || (a[0] = (u) => s(u))
      }, [
        C(l.$slots, "remove-icon", {}, () => [
          (i(), c("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: m(r(o).removeIcon)
          }, bn, 2))
        ])
      ], 2)) : S("", !0)
    ], 2));
  }
}, wn = /* @__PURE__ */ w("path", {
  d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
  fill: "currentColor"
}, null, -1), _n = /* @__PURE__ */ w("path", {
  d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
  fill: "currentFill"
}, null, -1), xn = [
  wn,
  _n
], $n = {
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
    const n = t, e = I("LoaderSpinner", n.variant, n.classes);
    return (o, s) => (i(), c("svg", {
      "aria-hidden": "true",
      class: m([
        r(e).base,
        r(e).size,
        r(e).color,
        {
          [r(e).disabled]: n.disabled
        }
      ]),
      viewBox: "0 0 100 101",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, xn, 2));
  }
};
const kn = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-auto h-auto"
}, Sn = /* @__PURE__ */ w("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M4.5 15.75l7.5-7.5 7.5 7.5"
}, null, -1), Cn = [
  Sn
], Tn = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-auto h-auto"
}, Bn = /* @__PURE__ */ w("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
}, null, -1), An = [
  Bn
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
    const n = t, e = G(), o = F("IS_BUTTON_GROUP", 0), s = F("IS_BUTTON_GROUP_RESPONSIVE", 0), l = F("IS_DROPDOWN", 0), a = F("IS_DROPDOWN_OPEN", 0), u = F("IS_DROPDOWN_ARROW", 0), d = F("IS_BUTTON_GROUP_VARIANT", null), _ = U(n.variant);
    o && d && !n.variant && (_.value = d);
    const v = I("Button", _.value, n.classes), h = N(() => ({
      "btn relative inline-flex items-center justify-center": !0,
      "w-full h-full": n.responsive || s,
      [v.base]: !0,
      [v.baseSize]: !0,
      [v.baseSizeIconOnly]: !o && (n.circle && y.value || y.value),
      [v.normal]: !n.outlined && !n.ghost && !n.disabled,
      [v.outlined]: n.outlined && !n.disabled,
      [v.ghost]: n.ghost && !n.outlined && !n.disabled,
      [v.normalDisabled]: !n.outlined && !n.ghost && n.disabled,
      [v.outlinedDisabled]: n.outlined && !n.ghost && n.disabled,
      [v.ghostDisabled]: n.ghost && !n.outlined && n.disabled,
      [v.shadow]: !o && !n.outlined && !n.ghost,
      [v.disabled]: n.disabled,
      "rounded-full": n.circle,
      btn__loading: n.loading
    })), f = N(() => {
      let g = "";
      const $ = {
        disabled: !1,
        target: null,
        href: null,
        to: null
      };
      return n.disabled ? g = "button" : (n.to ? (g = "RouterLink", $.to = n.to) : (g = n.href && "a" || n.tag || "div", g === "a" && n.href && ($.href = n.href)), n.target && ($.target = n.target)), g === "button" && n.disabled && ($.disabled = !0), { tag: g, data: $ };
    }), y = N(() => !!(!e.default && e.icon));
    return (g, $) => (i(), M(Ie(f.value.tag), Ge(f.value.data, { class: h.value }), {
      default: D(() => {
        var x, b, k, p, T, A, R, O, q, Y;
        return [
          n.loading || ((x = r(e)) == null ? void 0 : x.icon) ? (i(), c("span", {
            key: 0,
            class: m({
              "flex items-center justify-center": !0,
              "mr-2": (b = r(e)) == null ? void 0 : b.default
            })
          }, [
            n.loading ? (i(), c("span", {
              key: 0,
              class: m({
                btn__loader: n.loading && !((k = r(e)) != null && k.default),
                "opacity-0": !n.loading
              })
            }, [
              C(g.$slots, "loader", {}, () => [
                V($n, {
                  disabled: n.disabled,
                  variant: n.variantLoader
                }, null, 8, ["disabled", "variant"])
              ])
            ], 2)) : S("", !0),
            ((p = r(e)) == null ? void 0 : p.icon) && !((T = r(e)) != null && T.default) || !n.loading && ((A = r(e)) == null ? void 0 : A.icon) && ((R = r(e)) == null ? void 0 : R.default) ? (i(), c("span", {
              key: 1,
              class: m({
                "opacity-0": n.loading,
                [r(v).iconSize]: !0
              })
            }, [
              C(g.$slots, "icon")
            ], 2)) : S("", !0)
          ], 2)) : S("", !0),
          (O = r(e)) != null && O.default ? (i(), c("span", {
            key: 1,
            class: m({
              "opacity-0": n.loading && !((q = r(e)) != null && q.default)
            })
          }, [
            C(g.$slots, "default")
          ], 2)) : S("", !0),
          ((Y = r(e)) == null ? void 0 : Y.default) && (r(e)["icon-after"] || r(l) && r(u)) ? (i(), c("span", {
            key: 2,
            class: m(["ml-2", r(v).iconSize])
          }, [
            C(g.$slots, "icon-after", {}, () => [
              r(l) && r(u) && r(a) ? (i(), c("svg", kn, Cn)) : r(l) && r(u) ? (i(), c("svg", Tn, An)) : S("", !0)
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
    const n = t, e = I("ButtonGroup", n.variant, n.classes);
    return j("IS_BUTTON_GROUP", 1), j("IS_BUTTON_GROUP_RESPONSIVE", n.responsive), j("IS_BUTTON_GROUP_VARIANT", n.variant), (o, s) => (i(), c("div", {
      class: m({
        relative: !0,
        "w-full h-full": n.responsive,
        [r(e).content]: !0
      })
    }, [
      C(o.$slots, "default")
    ], 2));
  }
};
const Pn = {
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
    const n = t, e = I("LoaderLinear", n.variant, n.classes);
    return (o, s) => (i(), c("div", {
      class: m([
        r(e).base,
        r(e).size,
        {
          [r(e).emptyColor]: !n.disabled,
          [r(e).disabledEmptyColor]: n.disabled
        }
      ])
    }, [
      w("div", {
        class: m(["loader-linear", {
          [r(e).fillColor]: !n.disabled,
          [r(e).disabledFillColor]: n.disabled
        }])
      }, null, 2)
    ], 2));
  }
}, Vt = /* @__PURE__ */ re(Pn, [["__scopeId", "data-v-ab2ac7d3"]]), Cr = {
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
    const n = t, e = G(), o = I("Card", n.variant, n.classes);
    return (s, l) => (i(), c("div", {
      class: m(r(o).wrapper)
    }, [
      n.detachedHeader && (n.title || r(e).header || r(e).actions) ? (i(), c("div", {
        key: 0,
        class: m(r(o).detachedHeaderWrapper)
      }, [
        w("div", {
          class: m(r(o).headerTitleWrapper)
        }, [
          r(e).header ? C(s.$slots, "header", { key: 1 }) : (i(), c(L, { key: 0 }, [
            w("h1", {
              class: m(r(o).headerTitle)
            }, B(n.title), 3),
            w("div", {
              class: m(r(o).headerSubtitle)
            }, B(n.subtitle), 3)
          ], 64))
        ], 2),
        r(e).actions ? (i(), c("div", {
          key: 0,
          class: m(r(o).headerActions)
        }, [
          C(s.$slots, "actions")
        ], 2)) : S("", !0)
      ], 2)) : S("", !0),
      w("div", {
        class: m([r(o).contentWrapper, r(o).contentTheme])
      }, [
        n.disabled ? (i(), c("div", {
          key: 0,
          class: m(r(o).contentDisabled)
        }, null, 2)) : S("", !0),
        !n.detachedHeader && (n.title || r(e).header || r(e).actions) ? (i(), c("div", {
          key: 1,
          class: m([r(o).headerWrapper, r(o).headerTheme, { [r(o).padding]: !n.removeHeaderPadding && !n.removePadding }])
        }, [
          w("div", {
            class: m(r(o).headerTitleWrapper)
          }, [
            r(e).header ? C(s.$slots, "header", { key: 1 }) : (i(), c(L, { key: 0 }, [
              w("h1", {
                class: m(r(o).headerTitle)
              }, B(n.title), 3),
              w("div", {
                class: m(r(o).headerSubtitle)
              }, B(n.subtitle), 3)
            ], 64))
          ], 2),
          r(e).actions ? (i(), c("div", {
            key: 0,
            class: m(r(o).headerActions)
          }, [
            C(s.$slots, "actions")
          ], 2)) : S("", !0)
        ], 2)) : S("", !0),
        n.loading ? (i(), M(Vt, {
          key: 2,
          classes: { base: "inline-block w-full overflow-hidden relative -mt-1 z-10" },
          variant: t.variantLoader
        }, null, 8, ["variant"])) : S("", !0),
        w("div", {
          class: m([r(o).body, { [r(o).padding]: !n.removeBodyPadding && !n.removePadding }])
        }, [
          C(s.$slots, "default")
        ], 2),
        r(e).footer ? (i(), c("div", {
          key: 3,
          class: m([r(o).footerTheme, { [r(o).padding]: !n.removeFooterPadding && !n.removePadding }])
        }, [
          C(s.$slots, "footer")
        ], 2)) : S("", !0)
      ], 2)
    ], 2));
  }
};
const dt = (t) => (lt("data-v-37ddb19f"), t = t(), at(), t), On = { class: "flex w-full" }, Ln = {
  key: 0,
  class: "p-4 space-y-2"
}, In = ["onClick"], Dn = ["src", "alt"], Nn = { class: "grow relative" }, Rn = { class: "overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96" }, En = ["src", "alt"], zn = {
  key: 0,
  class: "bg-gray-100 block absolute bottom-0 text-center w-full text-xs py-2"
}, Vn = {
  key: 0,
  class: "flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2"
}, Mn = ["aria-label", "onClick"], Wn = ["onClick"], jn = /* @__PURE__ */ dt(() => /* @__PURE__ */ w("span", { class: "inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none" }, [
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
], -1)), Hn = [
  jn
], Fn = ["onClick"], Gn = /* @__PURE__ */ dt(() => /* @__PURE__ */ w("span", { class: "inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none" }, [
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
], -1)), qn = [
  Gn
], Un = {
  key: 0,
  class: "mx-auto mt-4 hidden w-full max-w-2xl sm:block lg:max-w-none"
}, Xn = {
  class: "grid grid-cols-6 gap-4",
  "aria-orientation": "horizontal",
  role: "tablist"
}, Yn = ["onClick"], Kn = /* @__PURE__ */ dt(() => /* @__PURE__ */ w("span", { class: "sr-only" }, "Angled view", -1)), Zn = { class: "absolute inset-0 overflow-hidden rounded-md" }, Jn = ["src", "alt"], Qn = {
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
    const n = t;
    I("Carousel", n.variant, n.classes);
    const e = U(0), o = U(""), s = U(), l = () => {
      e.value !== n.images.length - 1 ? e.value++ : e.value = 0, o.value = "right", d();
    }, a = () => {
      e.value !== 0 ? e.value-- : e.value = n.images.length - 1, o.value = "left", d();
    }, u = (v) => {
      Dt(() => {
        e.value = v;
      }), d();
    }, d = () => {
      clearInterval(s.value), n.slide && _();
    }, _ = () => {
      s.value = setInterval(function() {
        l();
      }, n.slideInterval);
    };
    return It(() => {
      n.slide && _();
    }), (v, h) => (i(), c("div", null, [
      w("div", On, [
        n.thumbnails && n.thumbnailPosition === "left" ? (i(), c("div", Ln, [
          (i(!0), c(L, null, W(t.images, (f, y) => (i(), c("div", {
            class: m([y === e.value ? "opacity-100 ring-primary-500" : "ring-transparent opacity-60 border-2 border-transparent", "w-[60px] hover:opacity-100 cursor-pointer overflow-hidden rounded ring-2 ring-offset-2"]),
            key: y,
            onClick: de((g) => u(y), ["prevent"])
          }, [
            w("img", {
              src: f != null && f.thumbnail ? f.thumbnail : f.src,
              class: "block w-full h-full",
              alt: f.alt
            }, null, 8, Dn)
          ], 10, In))), 128))
        ])) : S("", !0),
        w("div", Nn, [
          w("div", Rn, [
            (i(!0), c(L, null, W(t.images, (f, y) => (i(), c("div", {
              class: m([y === e.value ? "z-30" : "z-0", "absolute inset-0 -translate-y-0"]),
              key: y
            }, [
              V(ye, {
                name: "fade",
                mode: "out-in",
                appear: ""
              }, {
                default: D(() => [
                  y === e.value ? (i(), c("img", {
                    key: 0,
                    src: f.src,
                    class: "block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2",
                    alt: f.alt
                  }, null, 8, En)) : S("", !0)
                ]),
                _: 2
              }, 1024),
              n.imageAlt && f.alt ? (i(), c("div", zn, B(f.alt), 1)) : S("", !0)
            ], 2))), 128))
          ]),
          n.indicators ? (i(), c("div", Vn, [
            (i(!0), c(L, null, W(t.images, (f, y) => (i(), c("button", {
              key: y,
              type: "button",
              class: m([y === e.value ? "bg-white" : "bg-white/50", "w-3 h-3 rounded-full bg-white"]),
              "aria-current": "false",
              "aria-label": "Slide " + y,
              onClick: de((g) => u(y), ["prevent"])
            }, null, 10, Mn))), 128))
          ])) : S("", !0),
          t.controls ? (i(), c("button", {
            key: 1,
            onClick: de(a, ["prevent"]),
            type: "button",
            class: "flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          }, Hn, 8, Wn)) : S("", !0),
          t.controls ? (i(), c("button", {
            key: 2,
            onClick: de(l, ["prevent"]),
            type: "button",
            class: "flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          }, qn, 8, Fn)) : S("", !0)
        ])
      ]),
      n.thumbnails && n.thumbnailPosition === "bottom" ? (i(), c("div", Un, [
        w("div", Xn, [
          (i(!0), c(L, null, W(t.images, (f, y) => (i(), c("button", {
            key: y,
            class: "relative flex h-16 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none",
            "aria-controls": "tabs-1-panel-1",
            role: "tab",
            type: "button",
            onClick: de((g) => u(y), ["prevent"])
          }, [
            Kn,
            w("span", Zn, [
              w("img", {
                src: f != null && f.thumbnail ? f.thumbnail : f.src,
                alt: f.alt,
                class: m([y === e.value ? "opacity-100" : "opacity-70", "h-full w-full object-cover object-center hover:opacity-100"])
              }, null, 10, Jn)
            ]),
            w("span", {
              class: m([y === e.value ? "ring-primary-500" : "ring-transparent", "pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2"]),
              "aria-hidden": "true"
            }, null, 2)
          ], 8, Yn))), 128))
        ])
      ])) : S("", !0)
    ]));
  }
}, Tr = /* @__PURE__ */ re(Qn, [["__scopeId", "data-v-37ddb19f"]]);
function ee(t) {
  return t.split("-")[1];
}
function ut(t) {
  return t === "y" ? "height" : "width";
}
function ne(t) {
  return t.split("-")[0];
}
function xe(t) {
  return ["top", "bottom"].includes(ne(t)) ? "x" : "y";
}
function yt(t, n, e) {
  let {
    reference: o,
    floating: s
  } = t;
  const l = o.x + o.width / 2 - s.width / 2, a = o.y + o.height / 2 - s.height / 2, u = xe(n), d = ut(u), _ = o[d] / 2 - s[d] / 2, v = ne(n), h = u === "x";
  let f;
  switch (v) {
    case "top":
      f = {
        x: l,
        y: o.y - s.height
      };
      break;
    case "bottom":
      f = {
        x: l,
        y: o.y + o.height
      };
      break;
    case "right":
      f = {
        x: o.x + o.width,
        y: a
      };
      break;
    case "left":
      f = {
        x: o.x - s.width,
        y: a
      };
      break;
    default:
      f = {
        x: o.x,
        y: o.y
      };
  }
  switch (ee(n)) {
    case "start":
      f[u] -= _ * (e && h ? -1 : 1);
      break;
    case "end":
      f[u] += _ * (e && h ? -1 : 1);
      break;
  }
  return f;
}
const eo = async (t, n, e) => {
  const {
    placement: o = "bottom",
    strategy: s = "absolute",
    middleware: l = [],
    platform: a
  } = e, u = l.filter(Boolean), d = await (a.isRTL == null ? void 0 : a.isRTL(n));
  let _ = await a.getElementRects({
    reference: t,
    floating: n,
    strategy: s
  }), {
    x: v,
    y: h
  } = yt(_, o, d), f = o, y = {}, g = 0;
  for (let $ = 0; $ < u.length; $++) {
    const {
      name: x,
      fn: b
    } = u[$], {
      x: k,
      y: p,
      data: T,
      reset: A
    } = await b({
      x: v,
      y: h,
      initialPlacement: o,
      placement: f,
      strategy: s,
      middlewareData: y,
      rects: _,
      platform: a,
      elements: {
        reference: t,
        floating: n
      }
    });
    if (v = k != null ? k : v, h = p != null ? p : h, y = {
      ...y,
      [x]: {
        ...y[x],
        ...T
      }
    }, A && g <= 50) {
      g++, typeof A == "object" && (A.placement && (f = A.placement), A.rects && (_ = A.rects === !0 ? await a.getElementRects({
        reference: t,
        floating: n,
        strategy: s
      }) : A.rects), {
        x: v,
        y: h
      } = yt(_, f, d)), $ = -1;
      continue;
    }
  }
  return {
    x: v,
    y: h,
    placement: f,
    strategy: s,
    middlewareData: y
  };
};
function be(t, n) {
  return typeof t == "function" ? t(n) : t;
}
function to(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Mt(t) {
  return typeof t != "number" ? to(t) : {
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
async function Ue(t, n) {
  var e;
  n === void 0 && (n = {});
  const {
    x: o,
    y: s,
    platform: l,
    rects: a,
    elements: u,
    strategy: d
  } = t, {
    boundary: _ = "clippingAncestors",
    rootBoundary: v = "viewport",
    elementContext: h = "floating",
    altBoundary: f = !1,
    padding: y = 0
  } = be(n, t), g = Mt(y), x = u[f ? h === "floating" ? "reference" : "floating" : h], b = ke(await l.getClippingRect({
    element: (e = await (l.isElement == null ? void 0 : l.isElement(x))) == null || e ? x : x.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(u.floating)),
    boundary: _,
    rootBoundary: v,
    strategy: d
  })), k = h === "floating" ? {
    ...a.floating,
    x: o,
    y: s
  } : a.reference, p = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(u.floating)), T = await (l.isElement == null ? void 0 : l.isElement(p)) ? await (l.getScale == null ? void 0 : l.getScale(p)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, A = ke(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: k,
    offsetParent: p,
    strategy: d
  }) : k);
  return {
    top: (b.top - A.top + g.top) / T.y,
    bottom: (A.bottom - b.bottom + g.bottom) / T.y,
    left: (b.left - A.left + g.left) / T.x,
    right: (A.right - b.right + g.right) / T.x
  };
}
const Ae = Math.min, me = Math.max;
function nt(t, n, e) {
  return me(t, Ae(n, e));
}
const no = (t) => ({
  name: "arrow",
  options: t,
  async fn(n) {
    const {
      x: e,
      y: o,
      placement: s,
      rects: l,
      platform: a,
      elements: u
    } = n, {
      element: d,
      padding: _ = 0
    } = be(t, n) || {};
    if (d == null)
      return {};
    const v = Mt(_), h = {
      x: e,
      y: o
    }, f = xe(s), y = ut(f), g = await a.getDimensions(d), $ = f === "y", x = $ ? "top" : "left", b = $ ? "bottom" : "right", k = $ ? "clientHeight" : "clientWidth", p = l.reference[y] + l.reference[f] - h[f] - l.floating[y], T = h[f] - l.reference[f], A = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(d));
    let R = A ? A[k] : 0;
    (!R || !await (a.isElement == null ? void 0 : a.isElement(A))) && (R = u.floating[k] || l.floating[y]);
    const O = p / 2 - T / 2, q = R / 2 - g[y] / 2 - 1, Y = Ae(v[x], q), J = Ae(v[b], q), E = Y, X = R - g[y] - J, H = R / 2 - g[y] / 2 + O, K = nt(E, H, X), le = ee(s) != null && H != K && l.reference[y] / 2 - (H < E ? Y : J) - g[y] / 2 < 0 ? H < E ? E - H : X - H : 0;
    return {
      [f]: h[f] - le,
      data: {
        [f]: K,
        centerOffset: H - K + le
      }
    };
  }
}), oo = ["top", "right", "bottom", "left"], vt = /* @__PURE__ */ oo.reduce((t, n) => t.concat(n, n + "-start", n + "-end"), []), so = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ee(t) {
  return t.replace(/left|right|bottom|top/g, (n) => so[n]);
}
function Wt(t, n, e) {
  e === void 0 && (e = !1);
  const o = ee(t), s = xe(t), l = ut(s);
  let a = s === "x" ? o === (e ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return n.reference[l] > n.floating[l] && (a = Ee(a)), {
    main: a,
    cross: Ee(a)
  };
}
const ro = {
  start: "end",
  end: "start"
};
function ze(t) {
  return t.replace(/start|end/g, (n) => ro[n]);
}
function lo(t, n, e) {
  return (t ? [...e.filter((s) => ee(s) === t), ...e.filter((s) => ee(s) !== t)] : e.filter((s) => ne(s) === s)).filter((s) => t ? ee(s) === t || (n ? ze(s) !== s : !1) : !0);
}
const ao = function(t) {
  return t === void 0 && (t = {}), {
    name: "autoPlacement",
    options: t,
    async fn(n) {
      var e, o, s;
      const {
        rects: l,
        middlewareData: a,
        placement: u,
        platform: d,
        elements: _
      } = n, {
        crossAxis: v = !1,
        alignment: h,
        allowedPlacements: f = vt,
        autoAlignment: y = !0,
        ...g
      } = be(t, n), $ = h !== void 0 || f === vt ? lo(h || null, y, f) : f, x = await Ue(n, g), b = ((e = a.autoPlacement) == null ? void 0 : e.index) || 0, k = $[b];
      if (k == null)
        return {};
      const {
        main: p,
        cross: T
      } = Wt(k, l, await (d.isRTL == null ? void 0 : d.isRTL(_.floating)));
      if (u !== k)
        return {
          reset: {
            placement: $[0]
          }
        };
      const A = [x[ne(k)], x[p], x[T]], R = [...((o = a.autoPlacement) == null ? void 0 : o.overflows) || [], {
        placement: k,
        overflows: A
      }], O = $[b + 1];
      if (O)
        return {
          data: {
            index: b + 1,
            overflows: R
          },
          reset: {
            placement: O
          }
        };
      const q = R.map((E) => {
        const X = ee(E.placement);
        return [E.placement, X && v ? E.overflows.slice(0, 2).reduce((H, K) => H + K, 0) : E.overflows[0], E.overflows];
      }).sort((E, X) => E[1] - X[1]), J = ((s = q.filter((E) => E[2].slice(
        0,
        ee(E[0]) ? 2 : 3
      ).every((X) => X <= 0))[0]) == null ? void 0 : s[0]) || q[0][0];
      return J !== u ? {
        data: {
          index: b + 1,
          overflows: R
        },
        reset: {
          placement: J
        }
      } : {};
    }
  };
};
function io(t) {
  const n = Ee(t);
  return [ze(t), n, ze(n)];
}
function uo(t, n, e) {
  const o = ["left", "right"], s = ["right", "left"], l = ["top", "bottom"], a = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return e ? n ? s : o : n ? o : s;
    case "left":
    case "right":
      return n ? l : a;
    default:
      return [];
  }
}
function co(t, n, e, o) {
  const s = ee(t);
  let l = uo(ne(t), e === "start", o);
  return s && (l = l.map((a) => a + "-" + s), n && (l = l.concat(l.map(ze)))), l;
}
const po = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(n) {
      var e;
      const {
        placement: o,
        middlewareData: s,
        rects: l,
        initialPlacement: a,
        platform: u,
        elements: d
      } = n, {
        mainAxis: _ = !0,
        crossAxis: v = !0,
        fallbackPlacements: h,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: y = "none",
        flipAlignment: g = !0,
        ...$
      } = be(t, n), x = ne(o), b = ne(a) === a, k = await (u.isRTL == null ? void 0 : u.isRTL(d.floating)), p = h || (b || !g ? [Ee(a)] : io(a));
      !h && y !== "none" && p.push(...co(a, g, y, k));
      const T = [a, ...p], A = await Ue(n, $), R = [];
      let O = ((e = s.flip) == null ? void 0 : e.overflows) || [];
      if (_ && R.push(A[x]), v) {
        const {
          main: E,
          cross: X
        } = Wt(o, l, k);
        R.push(A[E], A[X]);
      }
      if (O = [...O, {
        placement: o,
        overflows: R
      }], !R.every((E) => E <= 0)) {
        var q, Y;
        const E = (((q = s.flip) == null ? void 0 : q.index) || 0) + 1, X = T[E];
        if (X)
          return {
            data: {
              index: E,
              overflows: O
            },
            reset: {
              placement: X
            }
          };
        let H = (Y = O.filter((K) => K.overflows[0] <= 0).sort((K, fe) => K.overflows[1] - fe.overflows[1])[0]) == null ? void 0 : Y.placement;
        if (!H)
          switch (f) {
            case "bestFit": {
              var J;
              const K = (J = O.map((fe) => [fe.placement, fe.overflows.filter((le) => le > 0).reduce((le, on) => le + on, 0)]).sort((fe, le) => fe[1] - le[1])[0]) == null ? void 0 : J[0];
              K && (H = K);
              break;
            }
            case "initialPlacement":
              H = a;
              break;
          }
        if (o !== H)
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
async function fo(t, n) {
  const {
    placement: e,
    platform: o,
    elements: s
  } = t, l = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), a = ne(e), u = ee(e), d = xe(e) === "x", _ = ["left", "top"].includes(a) ? -1 : 1, v = l && d ? -1 : 1, h = be(n, t);
  let {
    mainAxis: f,
    crossAxis: y,
    alignmentAxis: g
  } = typeof h == "number" ? {
    mainAxis: h,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...h
  };
  return u && typeof g == "number" && (y = u === "end" ? g * -1 : g), d ? {
    x: y * v,
    y: f * _
  } : {
    x: f * _,
    y: y * v
  };
}
const ho = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(n) {
      const {
        x: e,
        y: o
      } = n, s = await fo(n, t);
      return {
        x: e + s.x,
        y: o + s.y,
        data: s
      };
    }
  };
};
function mo(t) {
  return t === "x" ? "y" : "x";
}
const go = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(n) {
      const {
        x: e,
        y: o,
        placement: s
      } = n, {
        mainAxis: l = !0,
        crossAxis: a = !1,
        limiter: u = {
          fn: (x) => {
            let {
              x: b,
              y: k
            } = x;
            return {
              x: b,
              y: k
            };
          }
        },
        ...d
      } = be(t, n), _ = {
        x: e,
        y: o
      }, v = await Ue(n, d), h = xe(ne(s)), f = mo(h);
      let y = _[h], g = _[f];
      if (l) {
        const x = h === "y" ? "top" : "left", b = h === "y" ? "bottom" : "right", k = y + v[x], p = y - v[b];
        y = nt(k, y, p);
      }
      if (a) {
        const x = f === "y" ? "top" : "left", b = f === "y" ? "bottom" : "right", k = g + v[x], p = g - v[b];
        g = nt(k, g, p);
      }
      const $ = u.fn({
        ...n,
        [h]: y,
        [f]: g
      });
      return {
        ...$,
        data: {
          x: $.x - e,
          y: $.y - o
        }
      };
    }
  };
}, yo = function(t) {
  return t === void 0 && (t = {}), {
    name: "size",
    options: t,
    async fn(n) {
      const {
        placement: e,
        rects: o,
        platform: s,
        elements: l
      } = n, {
        apply: a = () => {
        },
        ...u
      } = be(t, n), d = await Ue(n, u), _ = ne(e), v = ee(e), f = xe(e) === "x", {
        width: y,
        height: g
      } = o.floating;
      let $, x;
      _ === "top" || _ === "bottom" ? ($ = _, x = v === (await (s.isRTL == null ? void 0 : s.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (x = _, $ = v === "end" ? "top" : "bottom");
      const b = g - d[$], k = y - d[x], p = !n.middlewareData.shift;
      let T = b, A = k;
      if (f) {
        const O = y - d.left - d.right;
        A = v || p ? Ae(k, O) : O;
      } else {
        const O = g - d.top - d.bottom;
        T = v || p ? Ae(b, O) : O;
      }
      if (p && !v) {
        const O = me(d.left, 0), q = me(d.right, 0), Y = me(d.top, 0), J = me(d.bottom, 0);
        f ? A = y - 2 * (O !== 0 || q !== 0 ? O + q : me(d.left, d.right)) : T = g - 2 * (Y !== 0 || J !== 0 ? Y + J : me(d.top, d.bottom));
      }
      await a({
        ...n,
        availableWidth: A,
        availableHeight: T
      });
      const R = await s.getDimensions(l.floating);
      return y !== R.width || g !== R.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Z(t) {
  var n;
  return ((n = t.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function oe(t) {
  return Z(t).getComputedStyle(t);
}
const bt = Math.min, Se = Math.max, Ve = Math.round;
function jt(t) {
  const n = oe(t);
  let e = parseFloat(n.width), o = parseFloat(n.height);
  const s = t.offsetWidth, l = t.offsetHeight, a = Ve(e) !== s || Ve(o) !== l;
  return a && (e = s, o = l), {
    width: e,
    height: o,
    fallback: a
  };
}
function ue(t) {
  return Ft(t) ? (t.nodeName || "").toLowerCase() : "";
}
let De;
function Ht() {
  if (De)
    return De;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (De = t.brands.map((n) => n.brand + "/" + n.version).join(" "), De) : navigator.userAgent;
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
  const n = Z(t).ShadowRoot;
  return t instanceof n || t instanceof ShadowRoot;
}
function Xe(t) {
  const {
    overflow: n,
    overflowX: e,
    overflowY: o,
    display: s
  } = oe(t);
  return /auto|scroll|overlay|hidden|clip/.test(n + o + e) && !["inline", "contents"].includes(s);
}
function vo(t) {
  return ["table", "td", "th"].includes(ue(t));
}
function ct(t) {
  const n = /firefox/i.test(Ht()), e = oe(t), o = e.backdropFilter || e.WebkitBackdropFilter;
  return e.transform !== "none" || e.perspective !== "none" || (o ? o !== "none" : !1) || n && e.willChange === "filter" || n && (e.filter ? e.filter !== "none" : !1) || ["transform", "perspective"].some((s) => e.willChange.includes(s)) || ["paint", "layout", "strict", "content"].some((s) => {
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
  const n = qt(t);
  if (!se(n))
    return Ut;
  const e = n.getBoundingClientRect(), {
    width: o,
    height: s,
    fallback: l
  } = jt(n);
  let a = (l ? Ve(e.width) : e.width) / o, u = (l ? Ve(e.height) : e.height) / s;
  return (!a || !Number.isFinite(a)) && (a = 1), (!u || !Number.isFinite(u)) && (u = 1), {
    x: a,
    y: u
  };
}
function Pe(t, n, e, o) {
  var s, l;
  n === void 0 && (n = !1), e === void 0 && (e = !1);
  const a = t.getBoundingClientRect(), u = qt(t);
  let d = Ut;
  n && (o ? ce(o) && (d = we(o)) : d = we(t));
  const _ = u ? Z(u) : window, v = !Gt() && e;
  let h = (a.left + (v && ((s = _.visualViewport) == null ? void 0 : s.offsetLeft) || 0)) / d.x, f = (a.top + (v && ((l = _.visualViewport) == null ? void 0 : l.offsetTop) || 0)) / d.y, y = a.width / d.x, g = a.height / d.y;
  if (u) {
    const $ = Z(u), x = o && ce(o) ? Z(o) : o;
    let b = $.frameElement;
    for (; b && o && x !== $; ) {
      const k = we(b), p = b.getBoundingClientRect(), T = getComputedStyle(b);
      p.x += (b.clientLeft + parseFloat(T.paddingLeft)) * k.x, p.y += (b.clientTop + parseFloat(T.paddingTop)) * k.y, h *= k.x, f *= k.y, y *= k.x, g *= k.y, h += p.x, f += p.y, b = Z(b).frameElement;
    }
  }
  return {
    width: y,
    height: g,
    top: f,
    right: h + y,
    bottom: f + g,
    left: h,
    x: h,
    y: f
  };
}
function pe(t) {
  return ((Ft(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function Ye(t) {
  return ce(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function bo(t) {
  let {
    rect: n,
    offsetParent: e,
    strategy: o
  } = t;
  const s = se(e), l = pe(e);
  if (e === l)
    return n;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = {
    x: 1,
    y: 1
  };
  const d = {
    x: 0,
    y: 0
  };
  if ((s || !s && o !== "fixed") && ((ue(e) !== "body" || Xe(l)) && (a = Ye(e)), se(e))) {
    const _ = Pe(e);
    u = we(e), d.x = _.x + e.clientLeft, d.y = _.y + e.clientTop;
  }
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - a.scrollLeft * u.x + d.x,
    y: n.y * u.y - a.scrollTop * u.y + d.y
  };
}
function Xt(t) {
  return Pe(pe(t)).left + Ye(t).scrollLeft;
}
function wo(t) {
  const n = pe(t), e = Ye(t), o = t.ownerDocument.body, s = Se(n.scrollWidth, n.clientWidth, o.scrollWidth, o.clientWidth), l = Se(n.scrollHeight, n.clientHeight, o.scrollHeight, o.clientHeight);
  let a = -e.scrollLeft + Xt(t);
  const u = -e.scrollTop;
  return oe(o).direction === "rtl" && (a += Se(n.clientWidth, o.clientWidth) - s), {
    width: s,
    height: l,
    x: a,
    y: u
  };
}
function Oe(t) {
  if (ue(t) === "html")
    return t;
  const n = t.assignedSlot || t.parentNode || wt(t) && t.host || pe(t);
  return wt(n) ? n.host : n;
}
function Yt(t) {
  const n = Oe(t);
  return pt(n) ? n.ownerDocument.body : se(n) && Xe(n) ? n : Yt(n);
}
function Me(t, n) {
  var e;
  n === void 0 && (n = []);
  const o = Yt(t), s = o === ((e = t.ownerDocument) == null ? void 0 : e.body), l = Z(o);
  return s ? n.concat(l, l.visualViewport || [], Xe(o) ? o : []) : n.concat(o, Me(o));
}
function _o(t, n) {
  const e = Z(t), o = pe(t), s = e.visualViewport;
  let l = o.clientWidth, a = o.clientHeight, u = 0, d = 0;
  if (s) {
    l = s.width, a = s.height;
    const _ = Gt();
    (_ || !_ && n === "fixed") && (u = s.offsetLeft, d = s.offsetTop);
  }
  return {
    width: l,
    height: a,
    x: u,
    y: d
  };
}
function xo(t, n) {
  const e = Pe(t, !0, n === "fixed"), o = e.top + t.clientTop, s = e.left + t.clientLeft, l = se(t) ? we(t) : {
    x: 1,
    y: 1
  }, a = t.clientWidth * l.x, u = t.clientHeight * l.y, d = s * l.x, _ = o * l.y;
  return {
    width: a,
    height: u,
    x: d,
    y: _
  };
}
function _t(t, n, e) {
  return n === "viewport" ? ke(_o(t, e)) : ce(n) ? ke(xo(n, e)) : ke(wo(pe(t)));
}
function $o(t, n) {
  const e = n.get(t);
  if (e)
    return e;
  let o = Me(t).filter((u) => ce(u) && ue(u) !== "body"), s = null;
  const l = oe(t).position === "fixed";
  let a = l ? Oe(t) : t;
  for (; ce(a) && !pt(a); ) {
    const u = oe(a), d = ct(a);
    (l ? !d && !s : !d && u.position === "static" && !!s && ["absolute", "fixed"].includes(s.position)) ? o = o.filter((v) => v !== a) : s = u, a = Oe(a);
  }
  return n.set(t, o), o;
}
function ko(t) {
  let {
    element: n,
    boundary: e,
    rootBoundary: o,
    strategy: s
  } = t;
  const a = [...e === "clippingAncestors" ? $o(n, this._c) : [].concat(e), o], u = a[0], d = a.reduce((_, v) => {
    const h = _t(n, v, s);
    return _.top = Se(h.top, _.top), _.right = bt(h.right, _.right), _.bottom = bt(h.bottom, _.bottom), _.left = Se(h.left, _.left), _;
  }, _t(n, u, s));
  return {
    width: d.right - d.left,
    height: d.bottom - d.top,
    x: d.left,
    y: d.top
  };
}
function So(t) {
  return se(t) ? jt(t) : t.getBoundingClientRect();
}
function xt(t) {
  return !se(t) || oe(t).position === "fixed" ? null : t.offsetParent;
}
function Co(t) {
  let n = Oe(t);
  for (; se(n) && !pt(n); ) {
    if (ct(n))
      return n;
    n = Oe(n);
  }
  return null;
}
function $t(t) {
  const n = Z(t);
  let e = xt(t);
  for (; e && vo(e) && oe(e).position === "static"; )
    e = xt(e);
  return e && (ue(e) === "html" || ue(e) === "body" && oe(e).position === "static" && !ct(e)) ? n : e || Co(t) || n;
}
function To(t, n, e) {
  const o = se(n), s = pe(n), l = Pe(t, !0, e === "fixed", n);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = {
    x: 0,
    y: 0
  };
  if (o || !o && e !== "fixed")
    if ((ue(n) !== "body" || Xe(s)) && (a = Ye(n)), se(n)) {
      const d = Pe(n, !0);
      u.x = d.x + n.clientLeft, u.y = d.y + n.clientTop;
    } else
      s && (u.x = Xt(s));
  return {
    x: l.left + a.scrollLeft - u.x,
    y: l.top + a.scrollTop - u.y,
    width: l.width,
    height: l.height
  };
}
const Bo = {
  getClippingRect: ko,
  convertOffsetParentRelativeRectToViewportRelativeRect: bo,
  isElement: ce,
  getDimensions: So,
  getOffsetParent: $t,
  getDocumentElement: pe,
  getScale: we,
  async getElementRects(t) {
    let {
      reference: n,
      floating: e,
      strategy: o
    } = t;
    const s = this.getOffsetParent || $t, l = this.getDimensions;
    return {
      reference: To(n, await s(e), o),
      floating: {
        x: 0,
        y: 0,
        ...await l(e)
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => oe(t).direction === "rtl"
}, Ao = (t, n, e) => {
  const o = /* @__PURE__ */ new Map(), s = {
    platform: Bo,
    ...e
  }, l = {
    ...s.platform,
    _c: o
  };
  return eo(t, n, {
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
function ot(t, n) {
  let e = ge.themes[t] || {}, o;
  do
    o = e[n], typeof o > "u" ? e.$extend ? e = ge.themes[e.$extend] || {} : (e = null, o = ge[n]) : e = null;
  while (e);
  return o;
}
function Po(t) {
  const n = [t];
  let e = ge.themes[t] || {};
  do
    e.$extend && !e.$resetCss ? (n.push(e.$extend), e = ge.themes[e.$extend] || {}) : e = null;
  while (e);
  return n.map((o) => `v-popper--theme-${o}`);
}
function kt(t) {
  const n = [t];
  let e = ge.themes[t] || {};
  do
    e.$extend ? (n.push(e.$extend), e = ge.themes[e.$extend] || {}) : e = null;
  while (e);
  return n;
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
const Oo = ["auto", "top", "bottom", "left", "right"].reduce((t, n) => t.concat([
  n,
  `${n}-start`,
  `${n}-end`
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
function Tt(t, n) {
  const e = t.indexOf(n);
  e !== -1 && t.splice(e, 1);
}
function Ze() {
  return new Promise((t) => requestAnimationFrame(() => {
    requestAnimationFrame(t);
  }));
}
const Q = [];
let he = null;
const Bt = {};
function At(t) {
  let n = Bt[t];
  return n || (n = Bt[t] = []), n;
}
let st = function() {
};
typeof window < "u" && (st = window.Element);
function P(t) {
  return function(n) {
    return ot(n.theme, t);
  };
}
const Je = "__floating-vue__popper", Zt = () => qe({
  name: "VPopper",
  provide() {
    return {
      [Je]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [Je]: { default: null }
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
      default: P("disabled")
    },
    positioningDisabled: {
      type: Boolean,
      default: P("positioningDisabled")
    },
    placement: {
      type: String,
      default: P("placement"),
      validator: (t) => Oo.includes(t)
    },
    delay: {
      type: [String, Number, Object],
      default: P("delay")
    },
    distance: {
      type: [Number, String],
      default: P("distance")
    },
    skidding: {
      type: [Number, String],
      default: P("skidding")
    },
    triggers: {
      type: Array,
      default: P("triggers")
    },
    showTriggers: {
      type: [Array, Function],
      default: P("showTriggers")
    },
    hideTriggers: {
      type: [Array, Function],
      default: P("hideTriggers")
    },
    popperTriggers: {
      type: Array,
      default: P("popperTriggers")
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: P("popperShowTriggers")
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: P("popperHideTriggers")
    },
    container: {
      type: [String, Object, st, Boolean],
      default: P("container")
    },
    boundary: {
      type: [String, st],
      default: P("boundary")
    },
    strategy: {
      type: String,
      validator: (t) => ["absolute", "fixed"].includes(t),
      default: P("strategy")
    },
    autoHide: {
      type: [Boolean, Function],
      default: P("autoHide")
    },
    handleResize: {
      type: Boolean,
      default: P("handleResize")
    },
    instantMove: {
      type: Boolean,
      default: P("instantMove")
    },
    eagerMount: {
      type: Boolean,
      default: P("eagerMount")
    },
    popperClass: {
      type: [String, Array, Object],
      default: P("popperClass")
    },
    computeTransformOrigin: {
      type: Boolean,
      default: P("computeTransformOrigin")
    },
    autoMinSize: {
      type: Boolean,
      default: P("autoMinSize")
    },
    autoSize: {
      type: [Boolean, String],
      default: P("autoSize")
    },
    autoMaxSize: {
      type: Boolean,
      default: P("autoMaxSize")
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: P("autoBoundaryMaxSize")
    },
    preventOverflow: {
      type: Boolean,
      default: P("preventOverflow")
    },
    overflowPadding: {
      type: [Number, String],
      default: P("overflowPadding")
    },
    arrowPadding: {
      type: [Number, String],
      default: P("arrowPadding")
    },
    arrowOverflow: {
      type: Boolean,
      default: P("arrowOverflow")
    },
    flip: {
      type: Boolean,
      default: P("flip")
    },
    shift: {
      type: Boolean,
      default: P("shift")
    },
    shiftCrossAxis: {
      type: Boolean,
      default: P("shiftCrossAxis")
    },
    noAutoFocus: {
      type: Boolean,
      default: P("noAutoFocus")
    },
    disposeTimeout: {
      type: Number,
      default: P("disposeTimeout")
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
      return (t = this[Je]) == null ? void 0 : t.parentPopper;
    },
    hasPopperShowTriggerHover() {
      var t, n;
      return ((t = this.popperTriggers) == null ? void 0 : t.includes("hover")) || ((n = this.popperShowTriggers) == null ? void 0 : n.includes("hover"));
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
    ].reduce((t, n) => (t[n] = "$_refreshListeners", t), {}),
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
    ].reduce((t, n) => (t[n] = "$_computePosition", t), {})
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
    show({ event: t = null, skipDelay: n = !1, force: e = !1 } = {}) {
      var o, s;
      (o = this.parentPopper) != null && o.lockedChild && this.parentPopper.lockedChild !== this || (this.$_pendingHide = !1, (e || !this.disabled) && (((s = this.parentPopper) == null ? void 0 : s.lockedChild) === this && (this.parentPopper.lockedChild = null), this.$_scheduleShow(t, n), this.$emit("show"), this.$_showFrameLocked = !0, requestAnimationFrame(() => {
        this.$_showFrameLocked = !1;
      })), this.$emit("update:shown", !0));
    },
    hide({ event: t = null, skipDelay: n = !1 } = {}) {
      var e;
      if (!this.$_hideInProgress) {
        if (this.shownChildren.size > 0) {
          this.$_pendingHide = !0;
          return;
        }
        if (this.hasPopperShowTriggerHover && this.$_isAimingPopper()) {
          this.parentPopper && (this.parentPopper.lockedChild = this, clearTimeout(this.parentPopper.lockedChildTimer), this.parentPopper.lockedChildTimer = setTimeout(() => {
            this.parentPopper.lockedChild === this && (this.parentPopper.lockedChild.hide({ skipDelay: n }), this.parentPopper.lockedChild = null);
          }, 1e3));
          return;
        }
        ((e = this.parentPopper) == null ? void 0 : e.lockedChild) === this && (this.parentPopper.lockedChild = null), this.$_pendingHide = !1, this.$_scheduleHide(t, n), this.$emit("hide"), this.$emit("update:shown", !1);
      }
    },
    init() {
      var n;
      var t;
      this.$_isDisposed && (this.$_isDisposed = !1, this.isMounted = !1, this.$_events = [], this.$_preventShow = !1, this.$_referenceNode = (n = (t = this.referenceNode) == null ? void 0 : t.call(this)) != null ? n : this.$el, this.$_targetNodes = this.targetNodes().filter((e) => e.nodeType === e.ELEMENT_NODE), this.$_popperNode = this.popperNode(), this.$_innerNode = this.$_popperNode.querySelector(".v-popper__inner"), this.$_arrowNode = this.$_popperNode.querySelector(".v-popper__arrow-container"), this.$_swapTargetAttrs("title", "data-original-title"), this.$_detachPopperNode(), this.triggers.length && this.$_addEventListeners(), this.shown && this.show());
    },
    dispose() {
      this.$_isDisposed || (this.$_isDisposed = !0, this.$_removeEventListeners(), this.hide({ skipDelay: !0 }), this.$_detachPopperNode(), this.isMounted = !1, this.isShown = !1, this.$_updateParentShownChildren(!1), this.$_swapTargetAttrs("data-original-title", "title"), this.$emit("dispose"));
    },
    async onResize() {
      this.isShown && (await this.$_computePosition(), this.$emit("resize"));
    },
    async $_computePosition() {
      var o;
      if (this.$_isDisposed || this.positioningDisabled)
        return;
      const t = {
        strategy: this.strategy,
        middleware: []
      };
      (this.distance || this.skidding) && t.middleware.push(ho({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const n = this.placement.startsWith("auto");
      if (n ? t.middleware.push(ao({
        alignment: (o = this.placement.split("-")[1]) != null ? o : ""
      })) : t.placement = this.placement, this.preventOverflow && (this.shift && t.middleware.push(go({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !n && this.flip && t.middleware.push(po({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), t.middleware.push(no({
        element: this.$_arrowNode,
        padding: this.arrowPadding
      })), this.arrowOverflow && t.middleware.push({
        name: "arrowOverflow",
        fn: ({ placement: s, rects: l, middlewareData: a }) => {
          let u;
          const { centerOffset: d } = a.arrow;
          return s.startsWith("top") || s.startsWith("bottom") ? u = Math.abs(d) > l.reference.width / 2 : u = Math.abs(d) > l.reference.height / 2, {
            data: {
              overflow: u
            }
          };
        }
      }), this.autoMinSize || this.autoSize) {
        const s = this.autoSize ? this.autoSize : this.autoMinSize ? "min" : null;
        t.middleware.push({
          name: "autoSize",
          fn: ({ rects: l, placement: a, middlewareData: u }) => {
            var d;
            if ((d = u.autoSize) != null && d.skip)
              return {};
            let _, v;
            return a.startsWith("top") || a.startsWith("bottom") ? _ = l.reference.width : v = l.reference.height, this.$_innerNode.style[s === "min" ? "minWidth" : s === "max" ? "maxWidth" : "width"] = _ != null ? `${_}px` : null, this.$_innerNode.style[s === "min" ? "minHeight" : s === "max" ? "maxHeight" : "height"] = v != null ? `${v}px` : null, {
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
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, t.middleware.push(yo({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: s, availableHeight: l }) => {
          this.$_innerNode.style.maxWidth = s != null ? `${s}px` : null, this.$_innerNode.style.maxHeight = l != null ? `${l}px` : null;
        }
      })));
      const e = await Ao(this.$_referenceNode, this.$_popperNode, t);
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
    $_scheduleShow(t = null, n = !1) {
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), he && this.instantMove && he.instantMove && he !== this.parentPopper) {
        he.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      n ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(t = null, n = !1) {
      if (this.shownChildren.size > 0) {
        this.$_pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (he = this), n ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(t) {
      const n = this.delay;
      return parseInt(n && n[t] || n || 0);
    },
    async $_applyShow(t = !1) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = t, !this.isShown && (this.$_ensureTeleport(), await Ze(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...Me(this.$_referenceNode),
        ...Me(this.$_popperNode)
      ], "scroll", () => {
        this.$_computePosition();
      }));
    },
    async $_applyShowEffect() {
      if (this.$_hideInProgress)
        return;
      if (this.computeTransformOrigin) {
        const n = this.$_referenceNode.getBoundingClientRect(), e = this.$_popperNode.querySelector(".v-popper__wrapper"), o = e.parentNode.getBoundingClientRect(), s = n.x + n.width / 2 - (o.left + e.offsetLeft), l = n.y + n.height / 2 - (o.top + e.offsetTop);
        this.result.transformOrigin = `${s}px ${l}px`;
      }
      this.isShown = !0, this.$_applyAttrsToTarget({
        "aria-describedby": this.popperId,
        "data-popper-shown": ""
      });
      const t = this.showGroup;
      if (t) {
        let n;
        for (let e = 0; e < Q.length; e++)
          n = Q[e], n.showGroup !== t && (n.hide(), n.$emit("close-group"));
      }
      Q.push(this), document.body.classList.add("v-popper--some-open");
      for (const n of kt(this.theme))
        At(n).push(this), document.body.classList.add(`v-popper--some-open--${n}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await Ze(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
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
        const o = At(e);
        Tt(o, this), o.length === 0 && document.body.classList.remove(`v-popper--some-open--${e}`);
      }
      he === this && (he = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const n = this.disposeTimeout;
      n !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, n)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await Ze(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
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
      const n = (e) => {
        e.usedByTooltip || this.hide({ event: e });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, Ct, this.triggers, this.hideTriggers, n), this.$_registerTriggerListeners([this.$_popperNode], Ct, this.popperTriggers, this.popperHideTriggers, n);
    },
    $_registerEventListeners(t, n, e) {
      this.$_events.push({ targetNodes: t, eventType: n, handler: e }), t.forEach((o) => o.addEventListener(n, e, _e ? {
        passive: !0
      } : void 0));
    },
    $_registerTriggerListeners(t, n, e, o, s) {
      let l = e;
      o != null && (l = typeof o == "function" ? o(l) : o), l.forEach((a) => {
        const u = n[a];
        u && this.$_registerEventListeners(t, u, s);
      });
    },
    $_removeEventListeners(t) {
      const n = [];
      this.$_events.forEach((e) => {
        const { targetNodes: o, eventType: s, handler: l } = e;
        !t || t === s ? o.forEach((a) => a.removeEventListener(s, l)) : n.push(e);
      }), this.$_events = n;
    },
    $_refreshListeners() {
      this.$_isDisposed || (this.$_removeEventListeners(), this.$_addEventListeners());
    },
    $_handleGlobalClose(t, n = !1) {
      this.$_showFrameLocked || (this.hide({ event: t }), t.closePopover ? this.$emit("close-directive") : this.$emit("auto-hide"), n && (this.$_preventShow = !0, setTimeout(() => {
        this.$_preventShow = !1;
      }, 300)));
    },
    $_detachPopperNode() {
      this.$_popperNode.parentNode && this.$_popperNode.parentNode.removeChild(this.$_popperNode);
    },
    $_swapTargetAttrs(t, n) {
      for (const e of this.$_targetNodes) {
        const o = e.getAttribute(t);
        o && (e.removeAttribute(t), e.setAttribute(n, o));
      }
    },
    $_applyAttrsToTarget(t) {
      for (const n of this.$_targetNodes)
        for (const e in t) {
          const o = t[e];
          o == null ? n.removeAttribute(e) : n.setAttribute(e, o);
        }
    },
    $_updateParentShownChildren(t) {
      let n = this.parentPopper;
      for (; n; )
        t ? n.shownChildren.add(this.randomId) : (n.shownChildren.delete(this.randomId), n.$_pendingHide && n.hide()), n = n.parentPopper;
    },
    $_isAimingPopper() {
      const t = this.$_referenceNode.getBoundingClientRect();
      if (Ce >= t.left && Ce <= t.right && Te >= t.top && Te <= t.bottom) {
        const n = this.$_popperNode.getBoundingClientRect(), e = Ce - ae, o = Te - ie, s = n.left + n.width / 2 - ae + (n.top + n.height / 2) - ie + n.width + n.height, l = ae + e * s, a = ie + o * s;
        return Ne(ae, ie, l, a, n.left, n.top, n.left, n.bottom) || Ne(ae, ie, l, a, n.left, n.top, n.right, n.top) || Ne(ae, ie, l, a, n.right, n.top, n.right, n.bottom) || Ne(ae, ie, l, a, n.left, n.bottom, n.right, n.bottom);
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
} : !0), document.addEventListener("touchend", Io, _e ? {
  passive: !0,
  capture: !0
} : !0)) : (window.addEventListener("mousedown", Pt, !0), window.addEventListener("click", Lo, !0)), window.addEventListener("resize", Ro));
function Pt(t) {
  for (let n = 0; n < Q.length; n++) {
    const e = Q[n];
    try {
      const o = e.popperNode();
      e.$_mouseDownContains = o.contains(t.target);
    } catch {
    }
  }
}
function Lo(t) {
  Jt(t);
}
function Io(t) {
  Jt(t, !0);
}
function Jt(t, n = !1) {
  const e = {};
  for (let o = Q.length - 1; o >= 0; o--) {
    const s = Q[o];
    try {
      const l = s.$_containsGlobalTarget = Do(s, t);
      s.$_pendingHide = !1, requestAnimationFrame(() => {
        if (s.$_pendingHide = !1, !e[s.randomId] && Ot(s, l, t)) {
          if (s.$_handleGlobalClose(t, n), !t.closeAllPopover && t.closePopover && l) {
            let u = s.parentPopper;
            for (; u; )
              e[u.randomId] = !0, u = u.parentPopper;
            return;
          }
          let a = s.parentPopper;
          for (; a && Ot(a, a.$_containsGlobalTarget, t); )
            a.$_handleGlobalClose(t, n), a = a.parentPopper;
        }
      });
    } catch {
    }
  }
}
function Do(t, n) {
  const e = t.popperNode();
  return t.$_mouseDownContains || e.contains(n.target);
}
function Ot(t, n, e) {
  return e.closeAllPopover || e.closePopover && n || No(t, e) && !n;
}
function No(t, n) {
  if (typeof t.autoHide == "function") {
    const e = t.autoHide(n);
    return t.lastAutoHide = e, e;
  }
  return t.autoHide;
}
function Ro(t) {
  for (let n = 0; n < Q.length; n++)
    Q[n].$_computePosition(t);
}
let ae = 0, ie = 0, Ce = 0, Te = 0;
typeof window < "u" && window.addEventListener("mousemove", (t) => {
  ae = Ce, ie = Te, Ce = t.clientX, Te = t.clientY;
}, _e ? {
  passive: !0
} : void 0);
function Ne(t, n, e, o, s, l, a, u) {
  const d = ((a - s) * (n - l) - (u - l) * (t - s)) / ((u - l) * (e - t) - (a - s) * (o - n)), _ = ((e - t) * (n - l) - (o - n) * (t - s)) / ((u - l) * (e - t) - (a - s) * (o - n));
  return d >= 0 && d <= 1 && _ >= 0 && _ <= 1;
}
const Eo = {
  extends: Zt()
}, ft = (t, n) => {
  const e = t.__vccOpts || t;
  for (const [o, s] of n)
    e[o] = s;
  return e;
};
function zo(t, n, e, o, s, l) {
  return i(), c("div", {
    ref: "reference",
    class: m(["v-popper", {
      "v-popper--shown": t.slotData.isShown
    }])
  }, [
    C(t.$slots, "default", Nt(Rt(t.slotData)))
  ], 2);
}
const Vo = /* @__PURE__ */ ft(Eo, [["render", zo]]);
function Mo() {
  var t = window.navigator.userAgent, n = t.indexOf("MSIE ");
  if (n > 0)
    return parseInt(t.substring(n + 5, t.indexOf(".", n)), 10);
  var e = t.indexOf("Trident/");
  if (e > 0) {
    var o = t.indexOf("rv:");
    return parseInt(t.substring(o + 3, t.indexOf(".", o)), 10);
  }
  var s = t.indexOf("Edge/");
  return s > 0 ? parseInt(t.substring(s + 5, t.indexOf(".", s)), 10) : -1;
}
let Re;
function rt() {
  rt.init || (rt.init = !0, Re = Mo() !== -1);
}
var Ke = {
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
    rt(), Dt(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const t = document.createElement("object");
    this._resizeObject = t, t.setAttribute("aria-hidden", "true"), t.setAttribute("tabindex", -1), t.onload = this.addResizeHandlers, t.type = "text/html", Re && this.$el.appendChild(t), t.data = "about:blank", Re || this.$el.appendChild(t);
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
      this._resizeObject && this._resizeObject.onload && (!Re && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const Wo = /* @__PURE__ */ sn("data-v-b329ee4c");
lt("data-v-b329ee4c");
const jo = {
  class: "resize-observer",
  tabindex: "-1"
};
at();
const Ho = /* @__PURE__ */ Wo((t, n, e, o, s, l) => (i(), M("div", jo)));
Ke.render = Ho;
Ke.__scopeId = "data-v-b329ee4c";
Ke.__file = "src/components/ResizeObserver.vue";
const Qt = (t = "theme") => ({
  computed: {
    themeClass() {
      return Po(this[t]);
    }
  }
}), Fo = qe({
  name: "VPopperContent",
  components: {
    ResizeObserver: Ke
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
}), Go = ["id", "aria-hidden", "tabindex", "data-popper-placement"], qo = {
  ref: "inner",
  class: "v-popper__inner"
}, Uo = /* @__PURE__ */ w("div", { class: "v-popper__arrow-outer" }, null, -1), Xo = /* @__PURE__ */ w("div", { class: "v-popper__arrow-inner" }, null, -1), Yo = [
  Uo,
  Xo
];
function Ko(t, n, e, o, s, l) {
  const a = Qe("ResizeObserver");
  return i(), c("div", {
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
    style: te(t.result ? {
      position: t.result.strategy,
      transform: `translate3d(${Math.round(t.result.x)}px,${Math.round(t.result.y)}px,0)`
    } : void 0),
    "aria-hidden": t.shown ? "false" : "true",
    tabindex: t.autoHide ? 0 : void 0,
    "data-popper-placement": t.result ? t.result.placement : void 0,
    onKeyup: n[2] || (n[2] = rn((u) => t.autoHide && t.$emit("hide"), ["esc"]))
  }, [
    w("div", {
      class: "v-popper__backdrop",
      onClick: n[0] || (n[0] = (u) => t.autoHide && t.$emit("hide"))
    }),
    w("div", {
      class: "v-popper__wrapper",
      style: te(t.result ? {
        transformOrigin: t.result.transformOrigin
      } : void 0)
    }, [
      w("div", qo, [
        t.mounted ? (i(), c(L, { key: 0 }, [
          w("div", null, [
            C(t.$slots, "default")
          ]),
          t.handleResize ? (i(), M(a, {
            key: 0,
            onNotify: n[1] || (n[1] = (u) => t.$emit("resize", u))
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
      }, Yo, 4)
    ], 4)
  ], 46, Go);
}
const en = /* @__PURE__ */ ft(Fo, [["render", Ko]]), tn = {
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
}, Zo = qe({
  name: "VPopperWrapper",
  components: {
    Popper: Vo,
    PopperContent: en
  },
  mixins: [
    tn,
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
function Jo(t, n, e, o, s, l) {
  const a = Qe("PopperContent"), u = Qe("Popper");
  return i(), M(u, {
    ref: "popper",
    theme: t.finalTheme,
    "target-nodes": t.getTargetNodes,
    "popper-node": () => t.$refs.popperContent.$el,
    class: m([
      t.themeClass
    ])
  }, {
    default: D(({
      popperId: d,
      isShown: _,
      shouldMountContent: v,
      skipTransition: h,
      autoHide: f,
      show: y,
      hide: g,
      handleResize: $,
      onResize: x,
      classes: b,
      result: k
    }) => [
      C(t.$slots, "default", {
        shown: _,
        show: y,
        hide: g
      }),
      V(a, {
        ref: "popperContent",
        "popper-id": d,
        theme: t.finalTheme,
        shown: _,
        mounted: v,
        "skip-transition": h,
        "auto-hide": f,
        "handle-resize": $,
        classes: b,
        result: k,
        onHide: g,
        onResize: x
      }, {
        default: D(() => [
          C(t.$slots, "popper", {
            shown: _,
            hide: g
          })
        ]),
        _: 2
      }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 3
  }, 8, ["theme", "target-nodes", "popper-node", "class"]);
}
const ht = /* @__PURE__ */ ft(Zo, [["render", Jo]]), Qo = {
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
qe({
  name: "VTooltipDirective",
  components: {
    Popper: Zt(),
    PopperContent: en
  },
  mixins: [
    tn
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
        const n = ++this.$_fetchId, e = this.content(this);
        e.then ? e.then((o) => this.onResult(n, o)) : this.onResult(n, e);
      }
    },
    onResult(t, n) {
      t === this.$_fetchId && (this.$_loading = !1, this.asyncContent = n);
    },
    onShow() {
      this.$_isShown = !0, this.fetchContent();
    },
    onHide() {
      this.$_isShown = !1;
    }
  }
});
const ts = Qo, ns = es;
const os = ["data-slot"], Br = {
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
  emits: ["hidden", "shown"],
  setup(t, { emit: n }) {
    const e = t;
    G();
    const o = U(null), s = U(!1), l = I("Dropdown", e.variant, e.classes), a = (v) => {
      var f;
      const h = o.value;
      if (!!h) {
        if (["ArrowUp", "ArrowDown"].includes(v.key)) {
          v.preventDefault();
          const y = [...h.$refs.popperContent.$el.querySelectorAll(e.itemSelector)];
          if (!y.length)
            return;
          let g = y.indexOf(v.target);
          g = v.key === "ArrowDown" ? g + 1 : g - 1, (f = y[g]) == null || f.focus();
        }
        (v.key === "Enter" || v.key === " ") && v.target === h.$refs.popperContent.$el && (v.preventDefault(), h.hide());
      }
    }, u = (v) => {
      const h = o.value;
      if (!h || v.target.classList.contains("v-popper") || v.target.classList.contains("disabled"))
        return;
      let f = v.target, y = !0;
      for (; f; ) {
        if (f.getAttribute("data-slot") === "default")
          return;
        if (f.classList.contains("list--item")) {
          y = !1;
          break;
        }
        if (f = f.parentElement, f === null)
          break;
      }
      y || ![...h.$refs.popperContent.$el.querySelectorAll(e.itemSelector)].length || v.target.classList.contains("dropdown-stay") || (v.preventDefault(), h.hide());
    }, d = () => {
      document.addEventListener("keydown", a), document.addEventListener("click", u), n("shown", !0);
    }, _ = () => {
      document.removeEventListener("keydown", a), document.removeEventListener("click", u);
      const v = o.value;
      v == null || v.$refs.popper.$_targetNodes[0].focus(), n("hidden", !0);
    };
    return it(() => {
      document.removeEventListener("keydown", a), document.removeEventListener("click", u);
    }), j("IS_DROPDOWN", 1), j("IS_DROPDOWN_OPEN", s), j("IS_DROPDOWN_ARROW", e.arrow), (v, h) => (i(), M(r(ts), {
      ref_key: "popoverRef",
      ref: o,
      distance: e.distance,
      triggers: ["click"],
      theme: "dropdown-menu",
      placement: e.placement,
      "auto-hide": "",
      onShow: d,
      onHide: _,
      skidding: e.skidding,
      shown: s.value,
      "onUpdate:shown": h[1] || (h[1] = (f) => s.value = f),
      class: m(r(l).wrapper),
      "popper-class": [r(l).size, r(l).theme]
    }, et({ _: 2 }, [
      W(v.$slots, (f, y) => ({
        name: y,
        fn: D((g) => [
          y === "default" ? (i(), c("div", Ge({
            class: "inline-block relative",
            "data-slot": y,
            key: y
          }, g || {}, {
            onClick: h[0] || (h[0] = de(() => {
            }, ["prevent", "stop"]))
          }), [
            C(v.$slots, y)
          ], 16, os)) : (i(), M(ye, {
            name: "dropdown",
            appear: "",
            key: y
          }, {
            default: D(() => [
              He(w("div", null, [
                C(v.$slots, y, Nt(Rt(g || {})))
              ], 512), [
                [Fe, s.value]
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
    const n = t, e = I("Tooltip", n.variant, n.classes);
    return (o, s) => (i(), M(r(ns), {
      triggers: ["hover"],
      theme: "tooltip",
      placement: n.placement,
      "auto-hide": "",
      class: m(r(e).wrapper),
      "popper-class": [r(e).theme]
    }, {
      popper: D(() => [
        C(o.$slots, "content")
      ]),
      default: D(() => [
        C(o.$slots, "default")
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
  class: "flex justify-center space-x-2 items-center"
}, ps = {
  key: 2,
  class: "relative flex order-1 space-x-2 items-center"
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
  setup(t, { emit: n }) {
    const e = t, o = I("Pagination", e.variant, e.classes), s = N(() => e.totalItems === void 0 ? -1 : Math.ceil(e.totalItems / e.perPage)), l = N(() => e.page === 1), a = N(() => e.page === 1 ? 1 : e.perPage * (e.page - 1) + 1), u = N(() => {
      if (e.page === s.value)
        return e.totalItems;
      {
        let f = e.page * e.perPage;
        return e.currentCount && f > e.currentCount ? e.currentCount : f;
      }
    }), d = N(() => s.value === -1 ? !1 : s.value < 1 && !e.loading || s.value === 1 ? !0 : s.value > 1 ? e.page === s.value : !1), _ = (f) => {
      h(f.target.value), f.target === document.activeElement && f.target.blur();
    }, v = (f) => {
      n("change", {
        page: 1,
        perPage: Number(f.target.value)
      });
    }, h = (f) => {
      f < 1 || f === 1 ? f = 1 : s.value > 0 && Number(f) > s.value && (f = s.value), n("change", {
        page: Number(f),
        perPage: e.perPage
      });
    };
    return (f, y) => (i(), c("div", {
      class: m(["flex", {
        [r(o).baseText]: !0,
        "justify-between": !e.hideStats,
        "justify-center": e.hideStats
      }])
    }, [
      !e.hideStats && !e.loadMore ? (i(), c("div", rs, [
        w("select", {
          name: "currentPerPage",
          class: "flex w-16 py-2 pl-2 pr-2 text-sm font-medium text-gray-500 bg-white border-gray-200 rounded cursor-pointer hover:bg-blue-100 hover:border-blue-900 hover:text-blue-900 focus:outline-none focus:border-blue-900 focus:ring-0",
          value: e.perPage,
          onInput: y[0] || (y[0] = (g) => v(g))
        }, [
          (i(!0), c(L, null, W(e.perPageOptions, (g) => (i(), c("option", {
            key: g,
            value: g
          }, B(g), 9, as))), 128))
        ], 40, ls),
        w("label", is, [
          t.totalItems ? (i(), c(L, { key: 0 }, [
            z("Showing " + B(a.value) + " to " + B(u.value) + " of " + B(t.totalItems) + " " + B(t.itemName), 1)
          ], 64)) : e.loading ? (i(), c(L, { key: 1 }, [
            z("Loading...")
          ], 64)) : S("", !0)
        ])
      ])) : S("", !0),
      e.loadMore ? (i(), c("div", ds, [
        e.hideStats ? S("", !0) : (i(), c("div", us, [
          t.totalItems ? (i(), c(L, { key: 0 }, [
            z("Showing " + B(u.value) + " of " + B(t.totalItems) + " " + B(t.itemName), 1)
          ], 64)) : S("", !0)
        ])),
        t.nextPrevButtons ? (i(), c("div", cs, [
          V($e, {
            outlined: "",
            onClick: y[1] || (y[1] = (g) => l.value ? "" : h(e.page - 1)),
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
            onClick: y[2] || (y[2] = (g) => d.value ? "" : h(e.page + 1)),
            disabled: d.value,
            variant: t.variantButton
          }, {
            default: D(() => [
              z("Next")
            ]),
            _: 1
          }, 8, ["disabled", "variant"])
        ])) : (i(), M($e, {
          key: 2,
          outlined: "",
          onClick: y[3] || (y[3] = (g) => d.value ? "" : h(e.page + 1)),
          disabled: e.loading || d.value,
          loading: e.loading,
          variant: t.variantButton
        }, {
          default: D(() => [
            z(B(t.loadMoreButton), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading", "variant"]))
      ])) : (i(), c("div", ps, [
        w("div", null, [
          V($e, {
            ghost: "",
            circle: !t.nextPrevButtons,
            onClick: y[4] || (y[4] = (g) => l.value ? "" : h(e.page - 1)),
            disabled: l.value,
            variant: t.variantButton
          }, et({ _: 2 }, [
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
          t.pageInput ? (i(), c("input", {
            key: 0,
            type: "number",
            value: e.page,
            disabled: !e.totalItems && e.loading || s.value < 1 && !e.loading,
            onFocusin: y[5] || (y[5] = (g) => g.target.select()),
            onChange: _,
            max: s.value,
            classes: "text-center",
            style: { width: "55px" }
          }, null, 40, gs)) : (i(), c("span", {
            key: 1,
            class: m(r(o).currentPageText)
          }, B(e.page), 3)),
          e.totalItems ? (i(), c("span", ys, "of " + B(s.value), 1)) : S("", !0)
        ]),
        w("div", null, [
          V($e, {
            ghost: "",
            circle: !t.nextPrevButtons,
            onClick: y[6] || (y[6] = (g) => d.value ? "" : h(e.page + 1)),
            disabled: d.value,
            variant: t.variantButton
          }, et({ _: 2 }, [
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
    const n = t;
    G();
    const e = I("Gallery", n.variant, n.classes);
    return (o, s) => (i(), c("div", {
      class: m({
        gallery: !0,
        [r(e).wrapper]: !0,
        "gallery-fade-edges": n.edges
      })
    }, [
      w("div", {
        class: m({
          "gallery-strip": !0,
          "inline-block": !0,
          [r(e).itemList]: !0,
          "gallery-strip-animation": n.animation
        })
      }, [
        n.images.length > 0 ? (i(), c(L, { key: 0 }, [
          (i(!0), c(L, null, W(n.images, (l, a) => (i(), c("div", {
            class: m(["gallery-item", "inline-block", r(e).item]),
            key: a
          }, [
            w("img", {
              class: m(r(e).image),
              src: l
            }, null, 10, ws)
          ], 2))), 128)),
          n.animation && n.repeat > 1 ? (i(!0), c(L, { key: 0 }, W(Array.from({ length: n.repeat }), (l, a) => (i(), c(L, { key: a }, [
            (i(!0), c(L, null, W(n.images, (u, d) => (i(), c("div", {
              class: m(["gallery-item", "inline-block", r(e).item]),
              key: d
            }, [
              w("img", {
                class: m(r(e).image),
                src: u
              }, null, 10, _s)
            ], 2))), 128))
          ], 64))), 128)) : S("", !0)
        ], 64)) : (i(), c(L, { key: 1 }, [
          (i(!0), c(L, null, W(o.$slots, (l, a) => (i(), c("div", {
            class: m(["gallery-item", "inline-block", r(e).item]),
            key: a
          }, [
            C(o.$slots, a, {}, void 0, !0)
          ], 2))), 128)),
          n.animation && n.repeat > 1 ? (i(!0), c(L, { key: 0 }, W(Array.from({ length: n.repeat }), (l, a) => (i(), c(L, { key: a }, [
            (i(!0), c(L, null, W(o.$slots, (u, d) => (i(), c("div", {
              class: m(["gallery-item", "inline-block", r(e).item]),
              key: d
            }, [
              C(o.$slots, d, {}, void 0, !0)
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
    const n = t, e = I("List", n.variant, n.classes);
    return j("IS_LIST_GROUP", 1), j("IS_LIST_VARIANT", n.variant), (o, s) => (i(), c("div", {
      class: m({
        [r(e).listGroup]: !0,
        [r(e).listGroupColor]: !0,
        [r(e).listGroupText]: !0
      })
    }, [
      C(o.$slots, "default")
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
    preventMenuExit: {
      type: Boolean,
      default: !1
    },
    divider: {
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
      default: "div"
    }
  },
  setup(t) {
    const n = t, e = G(), o = F("IS_LIST_GROUP", 0), s = F("IS_LIST_VARIANT", null), l = U(n.variant);
    o && s && !n.variant && (l.value = s);
    const a = N(() => {
      let d = "";
      const _ = {
        target: null,
        href: null,
        to: null
      };
      return n.disabled ? d = "div" : (n.to ? (d = "RouterLink", _.to = n.to) : (d = n.href && "a" || n.tag || "div", d === "a" && n.href && (_.href = n.href)), n.target && (_.target = n.target)), { tag: d, data: _ };
    }), u = I("List", l.value, n.classes);
    return (d, _) => (i(), M(Ie(a.value.tag), Ge(a.value.data, {
      class: {
        "flex items-center": !0,
        "list--item": n.hover && !n.disabled && !n.divider && !n.preventMenuExit,
        "h-[1px]": n.divider,
        [r(u).listItem]: !n.divider,
        [r(u).listItemSize]: !n.divider,
        [r(u).listItemTheme]: !n.disabled || !n.divider,
        [r(u).listItemHover]: n.hover && !n.disabled && !n.divider,
        [r(u).listItemDisabled]: n.disabled && !n.divider,
        [r(u).listItemDivider]: n.divider
      }
    }), {
      default: D(() => {
        var v;
        return [
          (v = r(e)) != null && v.before ? (i(), c("div", {
            key: 0,
            class: m([r(u).listItemBefore])
          }, [
            C(d.$slots, "before")
          ], 2)) : S("", !0),
          w("div", $s, [
            C(d.$slots, "default")
          ]),
          r(e).after ? (i(), c("div", {
            key: 1,
            class: m([r(u).listItemAfter])
          }, [
            C(d.$slots, "after")
          ], 2)) : S("", !0)
        ];
      }),
      _: 3
    }, 16, ["class"]));
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
    const n = t, e = I("LoaderProgress", n.variant, n.classes);
    return (o, s) => (i(), c("div", {
      class: m(r(e).wrapper)
    }, [
      n.label ? (i(), c("div", {
        key: 0,
        class: m(r(e).outsideLabelWrapper)
      }, [
        w("span", {
          class: m(r(e).outsideLabelText)
        }, B(t.label), 3),
        w("span", {
          class: m(r(e).outsideLabelProgress)
        }, B(n.progress) + "%", 3)
      ], 2)) : S("", !0),
      w("div", {
        class: m([r(e).bar, r(e).size, r(e).barColor])
      }, [
        w("div", {
          class: m([r(e).progressBar, r(e).size, r(e).progressBarColor, r(e).insideLabelText]),
          style: te({ width: n.progress + "%" })
        }, [
          n.progress > 0 && n.showProgress && !n.label ? (i(), c(L, { key: 0 }, [
            z(B(n.progress) + "% ", 1)
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
  setup(t, { emit: n }) {
    const e = t, s = G().default, l = I("Tabs", e.variant, e.classes), a = (h, f = !0, y = []) => (h.forEach((g) => {
      if (g !== null) {
        if (typeof g != "object") {
          (typeof g == "string" || typeof g == "number") && y.push(z(String(g)));
          return;
        }
        if (Array.isArray(g)) {
          a(g, f, y);
          return;
        }
        if (g.type === L) {
          if (g.children === null)
            return;
          Array.isArray(g.children) && a(g.children, f, y);
        } else
          g.type !== ln && (g.children && g.children.title && (g.slotContent = g.children.title()), y.push(g));
      }
    }), y), u = N(() => s ? a(s()).filter((h) => h.type.__GALAXY_TAB__) : []), d = N({
      get: () => e.modelValue,
      set: (h) => n("update:modelValue", h)
    }), _ = (h) => {
      d.value = h;
    };
    function v(h, f) {
      var y, g;
      ((y = f.props) == null ? void 0 : y.disabled) === "" || ((g = f.props) == null ? void 0 : g.disabled) === !0 || _(h);
    }
    return j("IS_TABS", 1), j("IS_TABS_VARIANT", e.variant), j("TAB_ACTIVE", d), j("TAB_CHANGE", _), (h, f) => (i(), c("div", {
      class: m(r(l).wrapper)
    }, [
      w("div", {
        class: m(r(l).tabListWrapper)
      }, [
        w("ul", {
          class: m(r(l).tabList)
        }, [
          (i(!0), c(L, null, W(u.value, (y, g) => {
            var $, x, b;
            return i(), c("li", {
              key: g,
              onClick: de((k) => {
                var p;
                return v((p = y.props) == null ? void 0 : p.name, y);
              }, ["prevent"]),
              class: m({
                [r(l).tabItem]: !0,
                [r(l).tabItemDisabled]: (($ = y.props) == null ? void 0 : $.disabled) === "" || ((x = y.props) == null ? void 0 : x.disabled) === !0,
                [r(l).tabItemSelected]: d.value === ((b = y.props) == null ? void 0 : b.name)
              })
            }, [
              w("div", {
                class: m(r(l).tabItemTitle)
              }, [
                y.slotContent ? (i(!0), c(L, { key: 0 }, W(y.slotContent, (k, p) => (i(), M(Ie(k), { key: p }))), 128)) : (i(), c(L, { key: 1 }, [
                  z(B(y.props.title), 1)
                ], 64))
              ], 2)
            ], 10, ks);
          }), 128))
        ], 2)
      ], 2),
      w("div", Ge(h.$attrs, {
        class: r(l).tabContentWrapper
      }), [
        C(h.$slots, "default")
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
    const n = t;
    G();
    const e = F("IS_TABS_VARIANT", null), o = F("IS_TABS", 0);
    o || console.warn("[Galaxy Vue] <Tab> should only be used within <Tabs>");
    const s = U(n.variant);
    o && e && !n.variant && (s.value = e);
    const l = I("Tabs", s.value, n.classes), a = F("TAB_ACTIVE", null);
    return (u, d) => (i(), c("div", Ss, [
      V(ye, {
        name: n.transition,
        mode: "out-in"
      }, {
        default: D(() => [
          (i(), c("div", { key: r(a) }, [
            n.preload === !0 ? He((i(), c("div", {
              key: 0,
              class: m(r(l).tabContent)
            }, [
              C(u.$slots, "default", {}, void 0, !0)
            ], 2)), [
              [Fe, r(a) === n.name]
            ]) : n.preload === !1 ? (i(), c(L, { key: 1 }, [
              r(a) === n.name ? (i(), c("div", {
                key: 0,
                class: m(r(l).tabContent)
              }, [
                C(u.$slots, "default", {}, void 0, !0)
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
    const n = t, e = G(), o = I("Label", n.variant, n.classes);
    return (s, l) => {
      var a;
      return i(), c("label", {
        for: n.id,
        class: m({
          [r(o).base]: !0,
          [r(o).theme]: !0,
          [r(o).disabled]: n.disabled,
          [r(o).errors]: n.errors,
          ...n.classes
        })
      }, [
        (a = r(e)) != null && a.icon ? (i(), c("span", As, [
          C(s.$slots, "icon")
        ])) : S("", !0),
        w("span", null, [
          C(s.$slots, "default", {}, () => [
            n.title ? (i(), c("span", Ps, B(n.title), 1)) : S("", !0)
          ])
        ]),
        n.required ? (i(), c("span", Os, "*")) : S("", !0),
        n.tooltip || r(e)["tooltip-content"] ? (i(), M(ss, {
          key: 2,
          placement: n.tooltipPosition
        }, {
          content: D(() => [
            w("span", null, [
              C(s.$slots, "tooltip-content", {}, () => [
                z(B(t.tooltip), 1)
              ])
            ])
          ]),
          default: D(() => [
            w("span", {
              class: m([r(o).icon, "ml-1 cursor-pointer flex items-center"])
            }, [
              C(s.$slots, "tooltip-icon", {}, () => [
                (i(), c("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 20 20",
                  fill: "currentColor",
                  class: m(r(o).iconSize)
                }, Is, 2))
              ])
            ], 2)
          ]),
          _: 3
        }, 8, ["placement"])) : S("", !0)
      ], 10, Bs);
    };
  }
}, Be = (t, n) => t === n, Ds = (t, n, e = void 0) => {
  if (n == null)
    return e;
  const o = (l) => String.prototype.split.call(n, l).filter(Boolean).reduce((a, u) => a != null ? a[u] : a, t), s = o(/[,[\]]+?/) || o(/[,[\].]+?/);
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
  setup(t, { emit: n }) {
    const e = t, o = G(), s = ve(), l = I("Checkbox", e.variant, e.classes), a = (_) => {
      const v = e.modelValue;
      let h = u;
      h = Be(v, e.trueValue) ? e.falseValue : e.trueValue, u.value = h, n("change", _);
    }, u = N({
      get: () => e.modelValue,
      set: (_) => {
        n("update:modelValue", _);
      }
    }), d = N(() => !!Be(e.modelValue || e.value, e.trueValue));
    return (_, v) => {
      var h;
      return i(), c("div", {
        class: m(r(l).wrapper)
      }, [
        w("div", {
          class: m(r(l).inputWrapper)
        }, [
          w("input", {
            id: r(s),
            type: e.radio ? "radio" : "checkbox",
            class: m({
              [r(l).inputCheck]: !e.radio,
              [r(l).inputRadio]: e.radio,
              [r(l).inputDisabled]: e.disabled
            }),
            checked: d.value,
            value: e.modelValue,
            disabled: e.disabled,
            onChange: v[0] || (v[0] = (f) => a(f))
          }, null, 42, Ns)
        ], 2),
        e.label || ((h = r(o)) == null ? void 0 : h.default) ? (i(), c("div", {
          key: 0,
          class: m(r(l).labelWrapper)
        }, [
          C(_.$slots, "default", {
            isChecked: d.value,
            props: e
          }, () => [
            V(Le, {
              id: r(s),
              required: e.required,
              disabled: e.disabled,
              tooltip: e.tooltip,
              variant: e.variantLabel,
              variantTooltip: e.variantTooltip,
              errors: e.errors
            }, {
              default: D(() => [
                z(B(e.label), 1)
              ]),
              _: 1
            }, 8, ["id", "required", "disabled", "tooltip", "variant", "variantTooltip", "errors"])
          ], !0)
        ], 2)) : S("", !0)
      ], 2);
    };
  }
}, Lt = /* @__PURE__ */ re(Rs, [["__scopeId", "data-v-1aa62921"]]), Es = ["id", "checked", "value", "disabled"], zs = {
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
  setup(t, { emit: n }) {
    const e = t;
    G();
    const o = ve(), s = I("Toggle", e.variant, e.classes), l = (v) => {
      const h = e.modelValue;
      let f = d;
      f = Be(h, e.trueValue) ? e.falseValue : e.trueValue, d.value = f, n("change", v);
    }, a = (v) => {
      v.preventDefault(), u("toggle");
    }, u = (v) => {
      e.disabled || (v === "after" && e.falseLabel ? d.value = e.trueValue : v === "before" && e.falseLabel ? d.value = e.falseValue : d.value = Be(e.modelValue, e.trueValue) ? e.falseValue : e.trueValue);
    }, d = N({
      get: () => e.modelValue,
      set: (v) => {
        n("update:modelValue", v);
      }
    }), _ = N(() => !!Be(e.modelValue, e.trueValue));
    return (v, h) => (i(), c("div", {
      class: m(r(s).wrapper)
    }, [
      e.falseLabel ? (i(), c("div", {
        key: 0,
        class: m(r(s).labelFalseWrapper)
      }, [
        V(Le, {
          onClick: h[0] || (h[0] = (f) => u("before")),
          disabled: e.disabled,
          classes: {
            "cursor-pointer": !0,
            [r(s).switchFalseLabelColorChecked]: _.value
          }
        }, {
          default: D(() => [
            z(B(e.falseLabel), 1)
          ]),
          _: 1
        }, 8, ["disabled", "classes"])
      ], 2)) : S("", !0),
      e.disabled ? (i(), c("div", zs, [
        w("div", {
          class: m(`${e.inset ? "w-12" : "w-10"} ${e.inset ? "h-6" : "h-4"} ${_.value ? r(s).switchDisabledColorChecked : r(s).switchDisabledColor} rounded-full shadow-inner`)
        }, null, 2),
        w("div", {
          class: m(`absolute w-6 h-6 bg-white border-2 ${_.value ? `${r(s).switchDisabledColorBorderChecked} translate-x-full` : "translate-x-0"} rounded-full ${e.inset ? "left-0 top-0" : "-left-1 -top-1"} transition`)
        }, null, 2)
      ])) : (i(), c("div", {
        key: 1,
        class: m(r(s).inputWrapper),
        onClick: a
      }, [
        w("input", {
          id: r(o),
          class: "sr-only",
          checked: _.value,
          value: e.modelValue,
          disabled: e.disabled,
          onChange: h[1] || (h[1] = (f) => l(f))
        }, null, 40, Es),
        w("div", null, [
          w("div", {
            class: m(`${e.inset ? "w-12" : "w-10"} ${e.inset ? "h-6" : "h-4"} ${_.value ? r(s).switchColorChecked : r(s).switchColor} rounded-full shadow-inner`),
            id: "switch-background"
          }, null, 2),
          w("div", {
            class: m(`absolute w-6 h-6 bg-white border-2 ${_.value ? `${r(s).switchColorBorderChecked} translate-x-full` : `${r(s).switchColorBorder} translate-x-0`} rounded-full ${e.inset ? "left-0 top-0" : "-left-1 -top-1"} transition`)
          }, null, 2)
        ])
      ], 2)),
      e.label ? (i(), c("div", {
        key: 3,
        class: m(r(s).labelWrapper),
        onClick: h[2] || (h[2] = (f) => u("after"))
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
            [r(s).switchTrueLabelColorChecked]: _.value && e.falseLabel,
            [r(s).switchTrueLabelColor]: !_.value && e.falseLabel
          }
        }, {
          default: D(() => [
            z(B(e.label), 1)
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
  setup(t, { emit: n }) {
    const e = t, o = G(), s = I("InputText", e.variant, e.classes), l = e.type === "number" ? "text" : e.type, a = ve(), u = U(null), d = (p) => {
      if (p == null || p === "")
        return null;
      if (e.type === "number" && !e.decimals)
        p = p.toString().replace(/\D/g, ""), p = Number(p);
      else if (e.type === "number" && e.decimals) {
        p = p.toString().replace(/[^0-9.-]/g, "");
        var T = p.split(".");
        if (T.length > 2)
          p = T[0] + "." + T.slice(1).join("");
        else if (T.length === 2 && p.endsWith("."))
          p = p;
        else {
          p = Number(p);
          var A = Math.pow(10, e.decimals);
          p = Math.round(p * A) / A;
        }
      }
      return typeof e.formatter == "function" && (p = e.formatter(p)), e.type === "number" && (e.max && p > e.max && (p = e.max), e.min && p < e.min && (p = e.min)), p;
    }, _ = (p) => {
    }, v = (p) => {
      p.target.value = d(p.target.value), b.value = p.target.value, n("keyup", p), p.key === "Enter" && n("enter", p);
    }, h = (p) => {
      n("keydown", p);
    }, f = (p) => {
      e.selectAll && (u == null ? void 0 : u.value) && u.value.select(), n("focusin", p);
    }, y = (p) => {
      n("focusout", p);
    }, g = () => {
      b.value = null, n("cleared");
    }, $ = (p) => {
      b.value = d(p.target.value), p.target.value = b.value, n("blur", p);
    }, x = N(() => {
      if (e.customClasses)
        return e.customClasses;
      {
        let p = [s.input];
        return o != null && o.prepend && (p = p.concat([s.inputPrepend])), o != null && o.icon && (p = p.concat(["pl-9"])), e.clearable && (p = p.concat(["pr-8"])), e.readonly && (p = p.concat([s.readonly])), e.disabled && (p = p.concat([s.disabled])), e.errors && (p = p.concat([s.errors])), !e.errors && !e.disabled && (p = p.concat([s.inputTheme])), p;
      }
    }), b = N({
      get: () => d(e.modelValue !== null ? e.modelValue : e.value),
      set: (p) => {
        n("update:modelValue", p);
      }
    }), k = N(() => e.name === "input" ? e.name + "-" + a : e.name);
    return (p, T) => {
      var A, R;
      return i(), c("div", {
        class: m(r(s).root)
      }, [
        e.label ? (i(), M(Le, {
          key: 0,
          id: r(a),
          title: e.label,
          required: e.required,
          errors: e.errors,
          tooltip: e.tooltip,
          disabled: e.disabled,
          variant: e.variantLabel
        }, null, 8, ["id", "title", "required", "errors", "tooltip", "disabled", "variant"])) : S("", !0),
        w("div", {
          class: m(["flex", { "mt-1": e.label }])
        }, [
          (A = r(o)) != null && A.prepend ? (i(), c("div", {
            key: 0,
            class: m(r(s).prepend)
          }, [
            C(p.$slots, "prepend")
          ], 2)) : S("", !0),
          w("div", {
            class: m(r(s).inputWrapper)
          }, [
            (R = r(o)) != null && R.icon ? (i(), c("div", {
              key: 0,
              class: m(r(s).icon)
            }, [
              C(p.$slots, "icon")
            ], 2)) : S("", !0),
            (i(), M(Ie(Ws), {
              ref_key: "inputTag",
              ref: u,
              id: r(a),
              type: r(l),
              name: k.value,
              placeholder: e.placeholder,
              readonly: e.readonly,
              disabled: e.disabled,
              required: e.required,
              maxlength: e.maxlength,
              autocomplete: `new-${r(a)}`,
              autofill: `new-${r(a)}`,
              pattern: e.pattern,
              value: b.value,
              onInput: T[0] || (T[0] = (O) => _()),
              onKeyup: T[1] || (T[1] = (O) => v(O)),
              onKeydown: T[2] || (T[2] = (O) => h(O)),
              onFocusout: T[3] || (T[3] = (O) => y(O)),
              onFocus: T[4] || (T[4] = (O) => f(O)),
              onBlur: T[5] || (T[5] = (O) => $(O)),
              min: e.min,
              max: e.max,
              step: e.step,
              class: m(x.value),
              style: te((e.width ? `width: ${e.width}px;` : "") + e.customStyle)
            }, null, 40, ["id", "type", "name", "placeholder", "readonly", "disabled", "required", "maxlength", "autocomplete", "autofill", "pattern", "value", "min", "max", "step", "class", "style"])),
            e.clearable && b.value && !e.readonly && !e.disabled ? (i(), c("div", {
              key: 1,
              class: m(r(s).clearable),
              onClick: g
            }, [
              C(p.$slots, "clearable", {}, () => [
                Vs
              ])
            ], 2)) : S("", !0)
          ], 2)
        ], 2),
        e.characterCounter ? (i(), c("div", {
          key: 1,
          class: m(r(s).counter)
        }, [
          C(p.$slots, "counter", {
            valueLength: b.value && b.value.length ? b.value.length : 0,
            maxlength: e.maxlength
          }, () => [
            z(B(b.value && b.value.length || 0), 1),
            e.maxlength ? (i(), c("span", Ms, "/" + B(e.maxlength), 1)) : S("", !0)
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
    },
    rows: {
      type: Number,
      default: 4
    }
  },
  emits: ["keyup", "keydown", "enter", "focusin", "focusout", "blur", "cleared", "update:modelValue", "input"],
  setup(t, { emit: n }) {
    const e = t;
    G();
    const o = I("InputArea", e.variant, e.classes), s = ve(), l = U(null), a = (x) => x == null || x === "" ? null : x, u = (x) => {
    }, d = (x) => {
      x.target.value = a(x.target.value), $.value = x.target.value, n("keyup", x), x.key === "Enter" && n("enter", x);
    }, _ = (x) => {
      n("keydown", x);
    }, v = (x) => {
      e.selectAll && (l == null ? void 0 : l.value) && l.value.select(), n("focusin", x);
    }, h = (x) => {
      n("focusout", x);
    }, f = () => {
      $.value = null, n("cleared");
    }, y = (x) => {
      $.value = a(x.target.value), x.target.value = $.value, n("blur", x);
    }, g = N(() => {
      if (e.customClasses)
        return e.customClasses;
      {
        let x = [o.input];
        return e.noresize && (x = x.concat(["resize-none"])), e.clearable && (x = x.concat(["pr-8"])), e.readonly && (x = x.concat([o.readonly])), e.disabled && (x = x.concat([o.disabled])), e.errors && (x = x.concat([o.errors])), !e.errors && !e.disabled && (x = x.concat([o.inputTheme])), x;
      }
    }), $ = N({
      get: () => a(e.modelValue !== null ? e.modelValue : e.value),
      set: (x) => {
        n("update:modelValue", x);
      }
    });
    return (x, b) => (i(), c("div", {
      class: m(r(o).root)
    }, [
      e.label ? (i(), M(Le, {
        key: 0,
        id: r(s),
        title: e.label,
        required: e.required,
        errors: e.errors,
        tooltip: e.tooltip,
        disabled: e.disabled,
        variant: e.variantLabel
      }, null, 8, ["id", "title", "required", "errors", "tooltip", "disabled", "variant"])) : S("", !0),
      w("div", {
        class: m(["flex", { "mt-1": e.label }])
      }, [
        w("div", {
          class: m(r(o).inputWrapper)
        }, [
          (i(), M(Ie(Fs), {
            ref_key: "inputTag",
            ref: l,
            id: r(s),
            rows: e.rows,
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
            onInput: b[0] || (b[0] = (k) => u()),
            onKeyup: b[1] || (b[1] = (k) => d(k)),
            onKeydown: b[2] || (b[2] = (k) => _(k)),
            onFocusout: b[3] || (b[3] = (k) => h(k)),
            onFocus: b[4] || (b[4] = (k) => v(k)),
            onBlur: b[5] || (b[5] = (k) => y(k)),
            min: e.min,
            max: e.max,
            step: e.step,
            class: m(g.value),
            style: te((e.width ? `width: ${e.width}px;` : "") + e.customStyle)
          }, null, 40, ["id", "rows", "name", "placeholder", "readonly", "disabled", "required", "maxlength", "autocomplete", "autofill", "pattern", "value", "min", "max", "step", "class", "style"])),
          e.clearable && $.value && !e.readonly && !e.disabled ? (i(), c("div", {
            key: 0,
            class: m(r(o).clearable),
            onClick: f
          }, [
            C(x.$slots, "clearable", {}, () => [
              js
            ])
          ], 2)) : S("", !0)
        ], 2)
      ], 2),
      e.characterCounter ? (i(), c("div", {
        key: 1,
        class: m(r(o).counter)
      }, [
        C(x.$slots, "counter", {
          valueLength: $.value && $.value.length ? $.value.length : 0,
          maxlength: e.maxlength
        }, () => [
          z(B($.value && $.value.length || 0), 1),
          e.maxlength ? (i(), c("span", Hs, "/" + B(e.maxlength), 1)) : S("", !0)
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
}, null, -1), nr = [
  tr
], or = {
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
  setup(t, { emit: n }) {
    const e = t, o = I("Table", e.variant, e.classes), s = U(null), l = We({
      selection: [],
      selectAllOption: null,
      selectedAll: !1
    }), a = N(() => e.headers.filter(($) => !($ != null && $.hide))), u = N(() => e.loading ? e.loadingText : e.noDataText), d = ($, x, b = void 0) => Ds($, x, b), _ = () => {
      l.selectedAll ? v() : h();
    }, v = () => {
      l.selection = [...Array(e.rows.length).keys()];
    }, h = () => {
      l.selection = [];
    }, f = ($, x, b) => {
      if (!e.selectRow || x === "selectRow") {
        let k = [...l.selection];
        if (l.selectAllOption = null, !k.includes($))
          e.selectOne === !0 ? k = [$] : k.push($);
        else {
          const p = k.indexOf($);
          p !== -1 && k.splice(p, 1);
        }
        l.selection = k;
      }
    }, y = ($, x, b) => {
      if (e.selectRow && f($, "selectRow"), e.select) {
        if (b.target.nodeName === "INPUT" || b.target.nodeName === "TD" && b.target.cellIndex === 0)
          return;
        n("click-row", x);
      } else
        n("click-row", x);
    }, g = ($, x) => {
      if ($.sorting === !0) {
        let b = null;
        $.sorted === "ASC" ? b = "DESC" : $.sorted === "DESC" ? b = "ASC" : $.sorted ? b = null : $.sortDefault ? b = $.sortDefault : b = "ASC";
        let k = [];
        e.headers.forEach((p) => {
          p.value === $.value ? k.push({
            ...p,
            sorted: b
          }) : k.push({
            ...p,
            sorted: null
          });
        }), n("sort", $, b, [...k]);
      }
    };
    return je(() => l.selection, ($) => {
      let x = [];
      l.selection.length ? ($.forEach((b) => {
        const k = e.rows[b];
        k && (e.selectionField && k[e.selectionField] ? x.push(k[e.selectionField]) : x.push(e.rows[b]));
      }), l.selection.length === e.rows.length ? l.selectedAll = !0 : l.selectedAll = !1) : l.selectedAll = !1, n("selection", x, [...$]);
    }), ($, x) => (i(), c("div", {
      class: m(r(o).wrapper)
    }, [
      w("table", {
        class: m(r(o).table)
      }, [
        !e.hideHeader && a.value.length ? (i(), c("thead", {
          key: 0,
          class: m(r(o).thead)
        }, [
          w("tr", {
            class: m(r(o).theadRow)
          }, [
            t.select ? (i(), c("th", {
              key: 0,
              scope: "col",
              class: m(r(o).theadColumnSelectAll)
            }, [
              C($.$slots, "select-all", {}, () => [
                w("div", Gs, [
                  e.selectOne ? S("", !0) : (i(), M(Lt, {
                    key: 0,
                    modelValue: l.selectedAll,
                    "onUpdate:modelValue": x[0] || (x[0] = (b) => l.selectedAll = b),
                    onChange: _,
                    disabled: e.loading,
                    variantCheckbox: e.variantCheckbox
                  }, null, 8, ["modelValue", "disabled", "variantCheckbox"]))
                ])
              ])
            ], 2)) : S("", !0),
            (i(!0), c(L, null, W(a.value, (b, k) => (i(), c("th", {
              scope: "col",
              key: k,
              class: m({
                [r(o).theadColumn]: !0,
                [r(o).theadColumnSorting]: b.sorting,
                [r(o).theadColumnSorted]: b.sorted,
                "!text-left": !b.align,
                "!text-right": b.align === "right",
                "!text-center": b.align === "center"
              }),
              style: te(`${b.minWidth ? `min-width: ${b.minWidth}` : ""} ${b.width ? `width: ${b.width};` : ""}`),
              onClick: (p) => g(b)
            }, [
              C($.$slots, `header.${b.value}`, { header: b }, () => [
                w("div", Us, [
                  w("div", {
                    class: m(["grow", r(o).theadColumnLabel])
                  }, B(b.label), 3),
                  b.sorting ? (i(), c("div", {
                    key: 0,
                    class: m(["sort-icon", {
                      [r(o).theadColumnSortIcon]: !0,
                      [r(o).theadColumnSortIconSorted]: b.sorted
                    }])
                  }, [
                    b.sorted === "ASC" ? (i(), c("svg", Xs, Ks)) : b.sorted === "DESC" ? (i(), c("svg", Zs, Qs)) : (i(), c("svg", er, nr))
                  ], 2)) : S("", !0)
                ])
              ])
            ], 14, qs))), 128))
          ], 2)
        ], 2)) : S("", !0),
        e.loading ? (i(), c("thead", or, [
          w("tr", sr, [
            w("th", rr, [
              V(Vt, {
                variantLoaderLinear: e.variantLoaderLinear
              }, null, 8, ["variantLoaderLinear"])
            ])
          ])
        ])) : S("", !0),
        e.rows && e.rows.length ? (i(), c("tbody", {
          key: 2,
          ref_key: "tablebody",
          ref: s,
          class: m(r(o).tbody)
        }, [
          (i(!0), c(L, null, W(e.rows, (b, k) => (i(), c("tr", {
            key: k,
            class: m([
              r(o).tbodyRow,
              b.class ? b.class : "",
              l.selection.includes(k) ? r(o).tbodyRowSelected : "",
              e.selectRow || e.rowCursor ? "cursor-pointer" : ""
            ]),
            onClick: (p) => y(k, $.item, p)
          }, [
            t.select ? (i(), c("td", {
              key: 0,
              class: m(["relative", r(o).tbodyColumnSelect])
            }, [
              C($.$slots, "column.select", {}, () => [
                e.selectBorder && l.selection.includes(k) ? (i(), c("div", {
                  key: 0,
                  class: m(["absolute inset-y-0 left-0 w-0.5", r(o).tbodyColumnSelectBorder])
                }, null, 2)) : S("", !0),
                w("div", ar, [
                  V(Lt, {
                    value: l.selection.includes(k),
                    onChange: (p) => f(k, "selectRow"),
                    onClick: x[1] || (x[1] = de(() => {
                    }, ["stop"])),
                    disabled: e.loading,
                    variantCheckbox: e.variantCheckbox
                  }, null, 8, ["value", "onChange", "disabled", "variantCheckbox"])
                ])
              ])
            ], 2)) : S("", !0),
            (i(!0), c(L, null, W(a.value, (p) => (i(), c("td", {
              key: p.value,
              class: m([
                r(o).tbodyColumn,
                p.align ? "" : "text-left",
                p.align === "right" ? "text-right" : "",
                p.align === "center" ? "text-center" : "",
                b.class ? b.class : "",
                p.class ? p.class : ""
              ]),
              style: te(`${p.minWidth ? `min-width: ${p.minWidth};` : ""} ${p.width ? `width: ${p.width};` : ""}`)
            }, [
              C($.$slots, `column.${p.value}`, {
                column: b,
                index: k
              }, () => [
                d(b, p.value) !== null && d(b, p.value) !== "" && d(b, p.value) ? (i(), c("span", ir, [
                  typeof p.formatValue == "function" ? (i(), c("span", dr, B(p.formatValue(d(b, p.value))), 1)) : (i(), c("span", ur, B(d(b, p.value)), 1))
                ])) : p.hasOwnProperty("empty") ? (i(), c("span", {
                  key: 1,
                  class: m(r(o).emptyCellText)
                }, B(p.empty), 3)) : e.emptyCellText ? (i(), c("span", {
                  key: 2,
                  class: m(r(o).emptyCellText)
                }, B(e.emptyCellText), 3)) : S("", !0)
              ])
            ], 6))), 128))
          ], 10, lr))), 128))
        ], 2)) : (i(), c("tbody", {
          key: 3,
          ref_key: "tablebody",
          ref: s
        }, [
          w("tr", null, [
            w("td", {
              colspan: "100%",
              class: m(r(o).noData)
            }, [
              C($.$slots, "nodata", {}, () => [
                z(B(u.value), 1)
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
  setup(t, { emit: n }) {
    const e = t, o = I("Backdrop", e.variant, e.classes), s = () => {
      e.persist === !1 && n("close");
    };
    return (l, a) => (i(), M(ye, {
      name: "fade",
      appear: ""
    }, {
      default: D(() => [
        e.show ? (i(), c("div", {
          key: 0,
          onClick: s,
          "data-backdrop-id": e.id,
          class: m({
            backdrop: !0,
            [r(o).base]: !0,
            [r(o).theme]: !0,
            "cursor-pointer": !e.persist,
            fixed: !e.relative,
            absolute: e.relative
          })
        }, null, 10, cr)) : S("", !0)
      ]),
      _: 1
    }));
  }
}, nn = /* @__PURE__ */ re(pr, [["__scopeId", "data-v-06f6fb7a"]]);
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
  setup(t, { emit: n }) {
    const e = t;
    G();
    const o = I("Modal", e.variant, e.classes), s = We({
      relativeOffsetPx: null,
      localShowing: !1,
      id: ve()
    }), l = () => {
      n("close");
    }, a = () => {
      if (s.relativeOffsetPx = null, e.offsetDiv) {
        let h = 0, f = document.getElementById(e.offsetDiv);
        f && (h = f.offsetWidth);
        let y = document.getElementById("app");
        if (y) {
          let g = +(y.offsetWidth - h);
          g && (s.relativeOffsetPx = g);
        }
      }
    }, u = N(() => e.offset || s.relativeOffsetPx ? `width: calc(100% - 2em ${e.offset || s.relativeOffsetPx ? `- ${e.offset || s.relativeOffsetPx}px` : ""});` : e.centerOverflow || e.type === "full" ? "width: calc(100%);" : "width: auto;"), d = N(() => {
      if (s.relativeOffsetPx)
        return e.type === "center" ? `left: calc(${s.relativeOffsetPx}px + 1em); right: 1em;` : "right: 1em;";
      if (e.offsetDirection && e.offset > 0)
        return `${e.offsetDirection}: ${e.offset}px; ${_(e.offsetDirection)}: 0;`;
    }), _ = (h) => h === "right" ? "left" : "right";
    N(() => {
      let h = [];
      switch (e.type) {
        case "center":
          h = h.concat([
            "inset-0",
            "max-w-xl",
            "mx-auto",
            "flex",
            "items-center",
            "justify-center"
          ]);
          break;
        case "full":
          h = h.concat([
            "inset-0",
            "h-screen",
            "flex",
            "items-center",
            "justify-center"
          ]);
          break;
      }
      return e.relative ? h = h.concat(["absolute"]) : !e.relative && e.scroll ? h = h.concat(["relative"]) : h = h.concat(["fixed"]), e.scrolling || (h = h.concat(["overflow-hidden"])), h;
    });
    const v = () => {
      document.querySelectorAll(".backdrop").length === 1 && (document.body.style.overflow = "auto");
    };
    return je(() => e.show, (h) => {
      h === !0 ? (s.localShowing = !0, document.body.style.overflow = "hidden") : (v(), setTimeout(() => {
        s.localShowing = !1, n("end");
      }, 300));
    }), It(() => {
      a();
    }), it(() => {
      v();
    }), (h, f) => He((i(), c("div", {
      class: m({
        [r(o).base]: !0,
        "overflow-y-scroll": e.scroll,
        "p-4": e.type === "full"
      })
    }, [
      w("div", {
        class: m({
          [r(o).wrapper]: !0,
          "min-h-full": e.type !== "full",
          "h-full": e.type === "full"
        })
      }, [
        V(ye, {
          name: "pop",
          appear: ""
        }, {
          default: D(() => [
            e.show ? (i(), c("div", {
              key: 0,
              "data-modal-id": s.id,
              class: m({
                [r(o).content]: !0,
                [r(o).contentTheme]: !0,
                containerClasses: !0,
                "h-screen": e.type === "full"
              }),
              style: te(`${e.maxWidth ? `max-width:${e.maxWidth}px;` : ""} min-width: 300px; ${e.scroll ? "margin-top: 1em; margin-bottom: 1em;" : `max-height: calc(100vh - ${e.type === "full" ? "2em" : "0em"});`} ${u.value} ${d.value};`)
            }, [
              w("div", hr, [
                C(h.$slots, "default", {}, void 0, !0)
              ])
            ], 14, fr)) : S("", !0)
          ]),
          _: 3
        })
      ], 2),
      V(nn, {
        show: e.show,
        persist: e.persist,
        relative: e.relative,
        variant: e.variantBackdrop,
        id: s.id,
        onClose: l
      }, null, 8, ["show", "persist", "relative", "variant", "id"])
    ], 2)), [
      [Fe, s.localShowing]
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
  setup(t, { emit: n }) {
    const e = t;
    G();
    const o = I("Drawer", e.variant, e.classes), s = We({
      localShowing: !1,
      id: ve()
    }), l = () => {
      n("close");
    }, a = N(() => {
      let d = [
        "block",
        "inset-y-0",
        "w-full",
        "sm:max-w-xl"
      ];
      switch (e.position) {
        case "right":
          d = d.concat(["right-0"]);
          break;
        case "left":
          d = d.concat(["left-0"]);
          break;
      }
      return e.scrolling ? d = d.concat(["overflow-y-auto"]) : d = d.concat(["overflow-y-hidden"]), d;
    }), u = () => {
      document.querySelectorAll(".backdrop").length === 1 && (document.body.style.overflow = "auto");
    };
    return je(() => e.show, (d) => {
      d === !0 ? (s.localShowing = !0, document.body.style.overflow = "hidden") : (u(), s.localShowing = !1);
    }), it(() => {
      u();
    }), (d, _) => (i(), c("div", {
      class: m([r(o).base])
    }, [
      V(ye, {
        name: `slide-${t.position}`,
        appear: ""
      }, {
        default: D(() => [
          s.localShowing ? (i(), c("div", {
            key: 0,
            class: m([a.value, r(o).content, r(o).contentTheme, "p-4"]),
            style: te(`${e.maxWidth ? `max-width: ${e.maxWidth}px;` : ""} min-width: 300px; height: 100%;`)
          }, [
            C(d.$slots, "default", {}, void 0, !0)
          ], 6)) : S("", !0)
        ]),
        _: 3
      }, 8, ["name"]),
      V(nn, {
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
  nn as Backdrop,
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
  $n as LoaderSpinner,
  Mr as Modal,
  Ar as Pagination,
  Nr as Tab,
  Vr as Table,
  Dr as Tabs,
  Rr as Toggle,
  ss as Tooltip,
  vr as setVariantClasses,
  I as useVariantClasses
};
