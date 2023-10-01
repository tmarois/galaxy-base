import { reactive as We, readonly as mt, openBlock as i, createElementBlock as c, normalizeClass as h, unref as r, renderSlot as C, ref as U, inject as F, watch as je, createElementVNode as _, createCommentVNode as S, createTextVNode as z, toDisplayString as B, createVNode as V, Transition as ye, withCtx as D, withDirectives as He, vShow as Fe, pushScopeId as lt, popScopeId as at, provide as j, useSlots as G, computed as N, createBlock as M, resolveDynamicComponent as Ie, mergeProps as Ge, Fragment as L, onMounted as It, renderList as W, withModifiers as de, nextTick as Dt, defineComponent as qe, normalizeProps as Nt, guardReactiveProps as Rt, withScopeId as sn, resolveComponent as Qe, normalizeStyle as te, withKeys as rn, onBeforeUnmount as it, createSlots as et, Comment as ln } from "vue";
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
function I(n, t, e = {}) {
  const o = tt[n];
  if (o)
    return t && o[t] ? mt({ ...o.default, ...o[t], ...e }) : mt({ ...o.default, ...e });
  console.warn(`[Galaxy Vue warn] No component "${n}" not found in variant list`);
}
function vr(n) {
  Object.assign(tt, Et(JSON.parse(JSON.stringify(tt)), n));
}
function Et(n, t) {
  for (const e in t) {
    const o = n[e], s = t[e];
    gt(o) && gt(s) ? n[e] = Et({ ...o }, s) : s !== void 0 && (n[e] = s);
  }
  return n;
}
function gt(n) {
  return n && typeof n == "object" && !Array.isArray(n);
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
  setup(n, { emit: t }) {
    const e = n, o = I("Container", e.variant, e.classes);
    return (s, l) => (i(), c("div", {
      class: h({
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
const re = (n, t) => {
  const e = n.__vccOpts || n;
  for (const [o, s] of t)
    e[o] = s;
  return e;
}, zt = (n) => (lt("data-v-e3242f54"), n = n(), at(), n), dn = /* @__PURE__ */ zt(() => /* @__PURE__ */ _("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M8.25 4.5l7.5 7.5-7.5 7.5"
}, null, -1)), un = [
  dn
], cn = /* @__PURE__ */ zt(() => /* @__PURE__ */ _("path", {
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
      validator: function(n) {
        return ["start", "end"].includes(n);
      }
    }
  },
  setup(n) {
    const t = n, e = ve(), o = U(null), s = U(!1), l = I("Expandable", t.variant, t.classes), a = F("IS_EXPANDABLE_GROUP", 0), u = F("IS_ALWAYS_OPEN", 0), d = F("EXPAND_ACTIVE", null);
    a && je(d, (y, $) => {
      !u && y !== e && (s.value = !1);
    });
    const g = () => {
      t.disabled || (s.value = !s.value, a && s.value === !0 && (d.value = e));
    }, w = (y) => {
      y.style.height = "0";
    }, m = (y) => {
      y.style.height = y.scrollHeight + "px";
    }, p = (y) => {
      y.style.height = y.scrollHeight + "px";
    }, v = (y) => {
      y.style.height = "0";
    };
    return (y, $) => (i(), c("div", {
      class: h(["expandable-wrapper relative", {
        [r(l).panelWrapperNotGrouped]: !r(a),
        [r(l).panelWrapperGrouped]: r(a)
      }])
    }, [
      _("div", {
        class: h({
          "expandable flex items-center justify-start": !0,
          [r(l).panel]: !0,
          [r(l).panelTheme]: !0,
          [r(l).panelActive]: s.value,
          [r(l).panelDisabled]: t.disabled
        }),
        onClick: g
      }, [
        n.arrowPosition === "start" && !t.arrowHide ? (i(), c("div", {
          key: 0,
          class: h({
            "mr-2": !0,
            [r(l).panelArrowWrapper]: !0,
            [r(l).panelArrowWrapperDisabled]: t.disabled
          })
        }, [
          C(y.$slots, "arrow-start", {}, () => [
            (i(), c("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              "stroke-width": "1.5",
              stroke: "currentColor",
              class: h([r(l).panelArrowSize, { "rotate-0": !s.value, "rotate-90": s.value }])
            }, un, 2))
          ], !0)
        ], 2)) : S("", !0),
        _("div", {
          class: h(["grow", {
            [r(l).panelTitle]: !0,
            [r(l).panelTitleDisabled]: t.disabled
          }])
        }, [
          C(y.$slots, "title", {}, () => [
            z(B(t.title), 1)
          ], !0)
        ], 2),
        n.arrowPosition === "end" && !t.arrowHide ? (i(), c("div", {
          key: 1,
          class: h({
            [r(l).panelArrowWrapper]: !0,
            [r(l).panelArrowWrapperDisabled]: t.disabled
          })
        }, [
          C(y.$slots, "arrow-end", {}, () => [
            (i(), c("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              "stroke-width": "1.5",
              stroke: "currentColor",
              class: h([r(l).panelArrowSize, { "rotate-0": !s.value, "rotate-180": s.value }])
            }, pn, 2))
          ], !0)
        ], 2)) : S("", !0)
      ], 2),
      V(ye, {
        name: "slide",
        onBeforeEnter: w,
        onEnter: m,
        onBeforeLeave: p,
        onLeave: v
      }, {
        default: D(() => [
          He(_("div", {
            ref_key: "content",
            ref: o,
            class: h(["overflow-hidden", r(l).panelContent])
          }, [
            C(y.$slots, "default", {}, void 0, !0)
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
  setup(n) {
    const t = n, e = U(!1), o = I("Expandable", t.variant, t.classes);
    return j("IS_EXPANDABLE_GROUP", 1), j("IS_ALWAYS_OPEN", t.alwaysOpen), j("EXPAND_ACTIVE", e), (s, l) => (i(), c("div", {
      class: h(["expandable-group", [r(o).group, r(o).groupTheme]])
    }, [
      C(s.$slots, "default")
    ], 2));
  }
}, hn = { key: 1 }, mn = ["src"], gn = /* @__PURE__ */ _("path", {
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
  setup(n) {
    const t = n, e = G(), o = I("Avatar", t.variant, t.classes), s = F("IS_AVATAR_GROUPED", 0);
    return (l, a) => {
      var u;
      return i(), c("div", {
        class: h(r(o).wrapper)
      }, [
        _("div", {
          class: h([
            r(o).content,
            r(o).contentSize,
            r(o).contentTheme,
            {
              [r(o).contentGrouped]: r(s),
              [r(o).contentHover]: t.hover
            }
          ])
        }, [
          t.text || ((u = r(e)) == null ? void 0 : u.default) ? C(l.$slots, "default", { key: 0 }, () => [
            z(B(t.text), 1)
          ]) : t.img ? (i(), c("div", hn, [
            _("img", {
              src: t.img,
              alt: ""
            }, null, 8, mn)
          ])) : (i(), c("div", {
            key: 2,
            class: h(r(o).defaultPlaceholderWrapper)
          }, [
            (i(), c("svg", {
              class: h(r(o).defaultPlaceholderIcon),
              fill: "currentColor",
              viewBox: "0 0 20 20",
              xmlns: "http://www.w3.org/2000/svg"
            }, yn, 2))
          ], 2)),
          t.status !== null ? (i(), c("span", {
            key: 3,
            class: h([
              r(o).statusDotSizePosition,
              r(o).statusDotTheme,
              {
                [r(o).statusDotOnline]: t.status === "online",
                [r(o).statusDotBusy]: t.status === "busy",
                [r(o).statusDotAway]: t.status === "away",
                [r(o).statusDotOffline]: t.status !== "online" || t.status !== "busy" || t.status === "away"
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
  setup(n) {
    const t = n, e = I("AvatarGroup", t.variant, t.classes);
    return j("IS_AVATAR_GROUPED", 1), (o, s) => (i(), c("div", {
      class: h(r(e).content)
    }, [
      C(o.$slots, "default")
    ], 2));
  }
}, vn = /* @__PURE__ */ _("path", {
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
  setup(n, { emit: t }) {
    const e = n, o = I("Badge", e.variant, e.classes), s = (l) => {
      t("remove", l);
    };
    return (l, a) => (i(), c("div", {
      class: h([r(o).base, r(o).theme, r(o).themeColor])
    }, [
      _("div", null, [
        C(l.$slots, "default", {}, () => [
          z(B(e.text), 1)
        ])
      ]),
      e.removable ? (i(), c("button", {
        key: 0,
        type: "button",
        class: h([r(o).removeButton, r(o).removeButtonTheme]),
        onClick: a[0] || (a[0] = (u) => s(u))
      }, [
        C(l.$slots, "remove-icon", {}, () => [
          (i(), c("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: h(r(o).removeIcon)
          }, bn, 2))
        ])
      ], 2)) : S("", !0)
    ], 2));
  }
}, wn = /* @__PURE__ */ _("path", {
  d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
  fill: "currentColor"
}, null, -1), _n = /* @__PURE__ */ _("path", {
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
  setup(n) {
    const t = n, e = I("LoaderSpinner", t.variant, t.classes);
    return (o, s) => (i(), c("svg", {
      "aria-hidden": "true",
      class: h([
        r(e).base,
        r(e).size,
        r(e).color,
        {
          [r(e).disabled]: t.disabled
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
}, Sn = /* @__PURE__ */ _("path", {
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
}, Bn = /* @__PURE__ */ _("path", {
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
  setup(n) {
    const t = n, e = G(), o = F("IS_BUTTON_GROUP", 0), s = F("IS_BUTTON_GROUP_RESPONSIVE", 0), l = F("IS_DROPDOWN", 0), a = F("IS_DROPDOWN_OPEN", 0), u = F("IS_DROPDOWN_ARROW", 0), d = F("IS_BUTTON_GROUP_VARIANT", null), g = U(t.variant);
    o && d && !t.variant && (g.value = d);
    const w = I("Button", g.value, t.classes), m = N(() => ({
      "btn relative inline-flex items-center justify-center": !0,
      "w-full h-full": t.responsive || s,
      [w.base]: !0,
      [w.baseSize]: !0,
      [w.baseSizeIconOnly]: !o && (t.circle && v.value || v.value),
      [w.normal]: !t.outlined && !t.ghost && !t.disabled,
      [w.outlined]: t.outlined && !t.disabled,
      [w.ghost]: t.ghost && !t.outlined && !t.disabled,
      [w.normalDisabled]: !t.outlined && !t.ghost && t.disabled,
      [w.outlinedDisabled]: t.outlined && !t.ghost && t.disabled,
      [w.ghostDisabled]: t.ghost && !t.outlined && t.disabled,
      [w.shadow]: !o && !t.outlined && !t.ghost,
      [w.disabled]: t.disabled,
      "rounded-full": t.circle,
      btn__loading: t.loading
    })), p = N(() => {
      let y = "";
      const $ = {
        disabled: !1,
        target: null,
        href: null,
        to: null
      };
      return t.disabled ? y = "button" : (t.to ? (y = "RouterLink", $.to = t.to) : (y = t.href && "a" || t.tag || "div", y === "a" && t.href && ($.href = t.href)), t.target && ($.target = t.target)), y === "button" && t.disabled && ($.disabled = !0), { tag: y, data: $ };
    }), v = N(() => !!(!e.default && e.icon));
    return (y, $) => (i(), M(Ie(p.value.tag), Ge(p.value.data, { class: m.value }), {
      default: D(() => {
        var x, b, k, f, T, A, R, O, q, Y;
        return [
          t.loading || ((x = r(e)) == null ? void 0 : x.icon) ? (i(), c("span", {
            key: 0,
            class: h({
              "flex items-center justify-center": !0,
              "mr-2": (b = r(e)) == null ? void 0 : b.default
            })
          }, [
            t.loading ? (i(), c("span", {
              key: 0,
              class: h({
                btn__loader: t.loading && !((k = r(e)) != null && k.default),
                "opacity-0": !t.loading
              })
            }, [
              C(y.$slots, "loader", {}, () => [
                V($n, {
                  disabled: t.disabled,
                  variant: t.variantLoader
                }, null, 8, ["disabled", "variant"])
              ])
            ], 2)) : S("", !0),
            ((f = r(e)) == null ? void 0 : f.icon) && !((T = r(e)) != null && T.default) || !t.loading && ((A = r(e)) == null ? void 0 : A.icon) && ((R = r(e)) == null ? void 0 : R.default) ? (i(), c("span", {
              key: 1,
              class: h({
                "opacity-0": t.loading,
                [r(w).iconSize]: !0
              })
            }, [
              C(y.$slots, "icon")
            ], 2)) : S("", !0)
          ], 2)) : S("", !0),
          (O = r(e)) != null && O.default ? (i(), c("span", {
            key: 1,
            class: h({
              "opacity-0": t.loading && !((q = r(e)) != null && q.default)
            })
          }, [
            C(y.$slots, "default")
          ], 2)) : S("", !0),
          ((Y = r(e)) == null ? void 0 : Y.default) && (r(e)["icon-after"] || r(l) && r(u)) ? (i(), c("span", {
            key: 2,
            class: h(["ml-2", r(w).iconSize])
          }, [
            C(y.$slots, "icon-after", {}, () => [
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
  setup(n) {
    const t = n, e = I("ButtonGroup", t.variant, t.classes);
    return j("IS_BUTTON_GROUP", 1), j("IS_BUTTON_GROUP_RESPONSIVE", t.responsive), j("IS_BUTTON_GROUP_VARIANT", t.variant), (o, s) => (i(), c("div", {
      class: h({
        relative: !0,
        "w-full h-full": t.responsive,
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
  setup(n) {
    const t = n, e = I("LoaderLinear", t.variant, t.classes);
    return (o, s) => (i(), c("div", {
      class: h([
        r(e).base,
        r(e).size,
        {
          [r(e).emptyColor]: !t.disabled,
          [r(e).disabledEmptyColor]: t.disabled
        }
      ])
    }, [
      _("div", {
        class: h(["loader-linear", {
          [r(e).fillColor]: !t.disabled,
          [r(e).disabledFillColor]: t.disabled
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
  setup(n) {
    const t = n, e = G(), o = I("Card", t.variant, t.classes);
    return (s, l) => (i(), c("div", {
      class: h(r(o).wrapper)
    }, [
      t.detachedHeader && (t.title || r(e).header || r(e).actions) ? (i(), c("div", {
        key: 0,
        class: h(r(o).detachedHeaderWrapper)
      }, [
        _("div", {
          class: h(r(o).headerTitleWrapper)
        }, [
          r(e).header ? C(s.$slots, "header", { key: 1 }) : (i(), c(L, { key: 0 }, [
            _("h1", {
              class: h(r(o).headerTitle)
            }, B(t.title), 3),
            _("div", {
              class: h(r(o).headerSubtitle)
            }, B(t.subtitle), 3)
          ], 64))
        ], 2),
        r(e).actions ? (i(), c("div", {
          key: 0,
          class: h(r(o).headerActions)
        }, [
          C(s.$slots, "actions")
        ], 2)) : S("", !0)
      ], 2)) : S("", !0),
      _("div", {
        class: h([r(o).contentWrapper, r(o).contentTheme])
      }, [
        t.disabled ? (i(), c("div", {
          key: 0,
          class: h(r(o).contentDisabled)
        }, null, 2)) : S("", !0),
        !t.detachedHeader && (t.title || r(e).header || r(e).actions) ? (i(), c("div", {
          key: 1,
          class: h([r(o).headerWrapper, r(o).headerTheme, { [r(o).padding]: !t.removeHeaderPadding && !t.removePadding }])
        }, [
          _("div", {
            class: h(r(o).headerTitleWrapper)
          }, [
            r(e).header ? C(s.$slots, "header", { key: 1 }) : (i(), c(L, { key: 0 }, [
              _("h1", {
                class: h(r(o).headerTitle)
              }, B(t.title), 3),
              _("div", {
                class: h(r(o).headerSubtitle)
              }, B(t.subtitle), 3)
            ], 64))
          ], 2),
          r(e).actions ? (i(), c("div", {
            key: 0,
            class: h(r(o).headerActions)
          }, [
            C(s.$slots, "actions")
          ], 2)) : S("", !0)
        ], 2)) : S("", !0),
        t.loading ? (i(), M(Vt, {
          key: 2,
          classes: { base: "inline-block w-full overflow-hidden relative -mt-1 z-10" },
          variant: n.variantLoader
        }, null, 8, ["variant"])) : S("", !0),
        _("div", {
          class: h([r(o).body, { [r(o).padding]: !t.removeBodyPadding && !t.removePadding }])
        }, [
          C(s.$slots, "default")
        ], 2),
        r(e).footer ? (i(), c("div", {
          key: 3,
          class: h([r(o).footerTheme, { [r(o).padding]: !t.removeFooterPadding && !t.removePadding }])
        }, [
          C(s.$slots, "footer")
        ], 2)) : S("", !0)
      ], 2)
    ], 2));
  }
};
const dt = (n) => (lt("data-v-37ddb19f"), n = n(), at(), n), On = { class: "flex w-full" }, Ln = {
  key: 0,
  class: "p-4 space-y-2"
}, In = ["onClick"], Dn = ["src", "alt"], Nn = { class: "grow relative" }, Rn = { class: "overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96" }, En = ["src", "alt"], zn = {
  key: 0,
  class: "bg-gray-100 block absolute bottom-0 text-center w-full text-xs py-2"
}, Vn = {
  key: 0,
  class: "flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2"
}, Mn = ["aria-label", "onClick"], Wn = ["onClick"], jn = /* @__PURE__ */ dt(() => /* @__PURE__ */ _("span", { class: "inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none" }, [
  /* @__PURE__ */ _("svg", {
    class: "w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    /* @__PURE__ */ _("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M15 19l-7-7 7-7"
    })
  ]),
  /* @__PURE__ */ _("span", { class: "hidden" }, "Previous")
], -1)), Hn = [
  jn
], Fn = ["onClick"], Gn = /* @__PURE__ */ dt(() => /* @__PURE__ */ _("span", { class: "inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none" }, [
  /* @__PURE__ */ _("svg", {
    class: "w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    /* @__PURE__ */ _("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M9 5l7 7-7 7"
    })
  ]),
  /* @__PURE__ */ _("span", { class: "hidden" }, "Next")
], -1)), qn = [
  Gn
], Un = {
  key: 0,
  class: "mx-auto mt-4 hidden w-full max-w-2xl sm:block lg:max-w-none"
}, Xn = {
  class: "grid grid-cols-6 gap-4",
  "aria-orientation": "horizontal",
  role: "tablist"
}, Yn = ["onClick"], Kn = /* @__PURE__ */ dt(() => /* @__PURE__ */ _("span", { class: "sr-only" }, "Angled view", -1)), Zn = { class: "absolute inset-0 overflow-hidden rounded-md" }, Jn = ["src", "alt"], Qn = {
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
  setup(n) {
    const t = n;
    I("Carousel", t.variant, t.classes);
    const e = U(0), o = U(""), s = U(), l = () => {
      e.value !== t.images.length - 1 ? e.value++ : e.value = 0, o.value = "right", d();
    }, a = () => {
      e.value !== 0 ? e.value-- : e.value = t.images.length - 1, o.value = "left", d();
    }, u = (w) => {
      Dt(() => {
        e.value = w;
      }), d();
    }, d = () => {
      clearInterval(s.value), t.slide && g();
    }, g = () => {
      s.value = setInterval(function() {
        l();
      }, t.slideInterval);
    };
    return It(() => {
      t.slide && g();
    }), (w, m) => (i(), c("div", null, [
      _("div", On, [
        t.thumbnails && t.thumbnailPosition === "left" ? (i(), c("div", Ln, [
          (i(!0), c(L, null, W(n.images, (p, v) => (i(), c("div", {
            class: h([v === e.value ? "opacity-100 ring-primary-500" : "ring-transparent opacity-60 border-2 border-transparent", "w-[60px] hover:opacity-100 cursor-pointer overflow-hidden rounded ring-2 ring-offset-2"]),
            key: v,
            onClick: de((y) => u(v), ["prevent"])
          }, [
            _("img", {
              src: p != null && p.thumbnail ? p.thumbnail : p.src,
              class: "block w-full h-full",
              alt: p.alt
            }, null, 8, Dn)
          ], 10, In))), 128))
        ])) : S("", !0),
        _("div", Nn, [
          _("div", Rn, [
            (i(!0), c(L, null, W(n.images, (p, v) => (i(), c("div", {
              class: h([v === e.value ? "z-30" : "z-0", "absolute inset-0 -translate-y-0"]),
              key: v
            }, [
              V(ye, {
                name: "fade",
                mode: "out-in",
                appear: ""
              }, {
                default: D(() => [
                  v === e.value ? (i(), c("img", {
                    key: 0,
                    src: p.src,
                    class: "block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2",
                    alt: p.alt
                  }, null, 8, En)) : S("", !0)
                ]),
                _: 2
              }, 1024),
              t.imageAlt && p.alt ? (i(), c("div", zn, B(p.alt), 1)) : S("", !0)
            ], 2))), 128))
          ]),
          t.indicators ? (i(), c("div", Vn, [
            (i(!0), c(L, null, W(n.images, (p, v) => (i(), c("button", {
              key: v,
              type: "button",
              class: h([v === e.value ? "bg-white" : "bg-white/50", "w-3 h-3 rounded-full bg-white"]),
              "aria-current": "false",
              "aria-label": "Slide " + v,
              onClick: de((y) => u(v), ["prevent"])
            }, null, 10, Mn))), 128))
          ])) : S("", !0),
          n.controls ? (i(), c("button", {
            key: 1,
            onClick: de(a, ["prevent"]),
            type: "button",
            class: "flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          }, Hn, 8, Wn)) : S("", !0),
          n.controls ? (i(), c("button", {
            key: 2,
            onClick: de(l, ["prevent"]),
            type: "button",
            class: "flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          }, qn, 8, Fn)) : S("", !0)
        ])
      ]),
      t.thumbnails && t.thumbnailPosition === "bottom" ? (i(), c("div", Un, [
        _("div", Xn, [
          (i(!0), c(L, null, W(n.images, (p, v) => (i(), c("button", {
            key: v,
            class: "relative flex h-16 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none",
            "aria-controls": "tabs-1-panel-1",
            role: "tab",
            type: "button",
            onClick: de((y) => u(v), ["prevent"])
          }, [
            Kn,
            _("span", Zn, [
              _("img", {
                src: p != null && p.thumbnail ? p.thumbnail : p.src,
                alt: p.alt,
                class: h([v === e.value ? "opacity-100" : "opacity-70", "h-full w-full object-cover object-center hover:opacity-100"])
              }, null, 10, Jn)
            ]),
            _("span", {
              class: h([v === e.value ? "ring-primary-500" : "ring-transparent", "pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2"]),
              "aria-hidden": "true"
            }, null, 2)
          ], 8, Yn))), 128))
        ])
      ])) : S("", !0)
    ]));
  }
}, Tr = /* @__PURE__ */ re(Qn, [["__scopeId", "data-v-37ddb19f"]]);
function ee(n) {
  return n.split("-")[1];
}
function ut(n) {
  return n === "y" ? "height" : "width";
}
function ne(n) {
  return n.split("-")[0];
}
function xe(n) {
  return ["top", "bottom"].includes(ne(n)) ? "x" : "y";
}
function yt(n, t, e) {
  let {
    reference: o,
    floating: s
  } = n;
  const l = o.x + o.width / 2 - s.width / 2, a = o.y + o.height / 2 - s.height / 2, u = xe(t), d = ut(u), g = o[d] / 2 - s[d] / 2, w = ne(t), m = u === "x";
  let p;
  switch (w) {
    case "top":
      p = {
        x: l,
        y: o.y - s.height
      };
      break;
    case "bottom":
      p = {
        x: l,
        y: o.y + o.height
      };
      break;
    case "right":
      p = {
        x: o.x + o.width,
        y: a
      };
      break;
    case "left":
      p = {
        x: o.x - s.width,
        y: a
      };
      break;
    default:
      p = {
        x: o.x,
        y: o.y
      };
  }
  switch (ee(t)) {
    case "start":
      p[u] -= g * (e && m ? -1 : 1);
      break;
    case "end":
      p[u] += g * (e && m ? -1 : 1);
      break;
  }
  return p;
}
const eo = async (n, t, e) => {
  const {
    placement: o = "bottom",
    strategy: s = "absolute",
    middleware: l = [],
    platform: a
  } = e, u = l.filter(Boolean), d = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let g = await a.getElementRects({
    reference: n,
    floating: t,
    strategy: s
  }), {
    x: w,
    y: m
  } = yt(g, o, d), p = o, v = {}, y = 0;
  for (let $ = 0; $ < u.length; $++) {
    const {
      name: x,
      fn: b
    } = u[$], {
      x: k,
      y: f,
      data: T,
      reset: A
    } = await b({
      x: w,
      y: m,
      initialPlacement: o,
      placement: p,
      strategy: s,
      middlewareData: v,
      rects: g,
      platform: a,
      elements: {
        reference: n,
        floating: t
      }
    });
    if (w = k != null ? k : w, m = f != null ? f : m, v = {
      ...v,
      [x]: {
        ...v[x],
        ...T
      }
    }, A && y <= 50) {
      y++, typeof A == "object" && (A.placement && (p = A.placement), A.rects && (g = A.rects === !0 ? await a.getElementRects({
        reference: n,
        floating: t,
        strategy: s
      }) : A.rects), {
        x: w,
        y: m
      } = yt(g, p, d)), $ = -1;
      continue;
    }
  }
  return {
    x: w,
    y: m,
    placement: p,
    strategy: s,
    middlewareData: v
  };
};
function be(n, t) {
  return typeof n == "function" ? n(t) : n;
}
function to(n) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...n
  };
}
function Mt(n) {
  return typeof n != "number" ? to(n) : {
    top: n,
    right: n,
    bottom: n,
    left: n
  };
}
function ke(n) {
  return {
    ...n,
    top: n.y,
    left: n.x,
    right: n.x + n.width,
    bottom: n.y + n.height
  };
}
async function Ue(n, t) {
  var e;
  t === void 0 && (t = {});
  const {
    x: o,
    y: s,
    platform: l,
    rects: a,
    elements: u,
    strategy: d
  } = n, {
    boundary: g = "clippingAncestors",
    rootBoundary: w = "viewport",
    elementContext: m = "floating",
    altBoundary: p = !1,
    padding: v = 0
  } = be(t, n), y = Mt(v), x = u[p ? m === "floating" ? "reference" : "floating" : m], b = ke(await l.getClippingRect({
    element: (e = await (l.isElement == null ? void 0 : l.isElement(x))) == null || e ? x : x.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(u.floating)),
    boundary: g,
    rootBoundary: w,
    strategy: d
  })), k = m === "floating" ? {
    ...a.floating,
    x: o,
    y: s
  } : a.reference, f = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(u.floating)), T = await (l.isElement == null ? void 0 : l.isElement(f)) ? await (l.getScale == null ? void 0 : l.getScale(f)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, A = ke(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: k,
    offsetParent: f,
    strategy: d
  }) : k);
  return {
    top: (b.top - A.top + y.top) / T.y,
    bottom: (A.bottom - b.bottom + y.bottom) / T.y,
    left: (b.left - A.left + y.left) / T.x,
    right: (A.right - b.right + y.right) / T.x
  };
}
const Ae = Math.min, me = Math.max;
function nt(n, t, e) {
  return me(n, Ae(t, e));
}
const no = (n) => ({
  name: "arrow",
  options: n,
  async fn(t) {
    const {
      x: e,
      y: o,
      placement: s,
      rects: l,
      platform: a,
      elements: u
    } = t, {
      element: d,
      padding: g = 0
    } = be(n, t) || {};
    if (d == null)
      return {};
    const w = Mt(g), m = {
      x: e,
      y: o
    }, p = xe(s), v = ut(p), y = await a.getDimensions(d), $ = p === "y", x = $ ? "top" : "left", b = $ ? "bottom" : "right", k = $ ? "clientHeight" : "clientWidth", f = l.reference[v] + l.reference[p] - m[p] - l.floating[v], T = m[p] - l.reference[p], A = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(d));
    let R = A ? A[k] : 0;
    (!R || !await (a.isElement == null ? void 0 : a.isElement(A))) && (R = u.floating[k] || l.floating[v]);
    const O = f / 2 - T / 2, q = R / 2 - y[v] / 2 - 1, Y = Ae(w[x], q), J = Ae(w[b], q), E = Y, X = R - y[v] - J, H = R / 2 - y[v] / 2 + O, K = nt(E, H, X), le = ee(s) != null && H != K && l.reference[v] / 2 - (H < E ? Y : J) - y[v] / 2 < 0 ? H < E ? E - H : X - H : 0;
    return {
      [p]: m[p] - le,
      data: {
        [p]: K,
        centerOffset: H - K + le
      }
    };
  }
}), oo = ["top", "right", "bottom", "left"], vt = /* @__PURE__ */ oo.reduce((n, t) => n.concat(t, t + "-start", t + "-end"), []), so = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ee(n) {
  return n.replace(/left|right|bottom|top/g, (t) => so[t]);
}
function Wt(n, t, e) {
  e === void 0 && (e = !1);
  const o = ee(n), s = xe(n), l = ut(s);
  let a = s === "x" ? o === (e ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[l] > t.floating[l] && (a = Ee(a)), {
    main: a,
    cross: Ee(a)
  };
}
const ro = {
  start: "end",
  end: "start"
};
function ze(n) {
  return n.replace(/start|end/g, (t) => ro[t]);
}
function lo(n, t, e) {
  return (n ? [...e.filter((s) => ee(s) === n), ...e.filter((s) => ee(s) !== n)] : e.filter((s) => ne(s) === s)).filter((s) => n ? ee(s) === n || (t ? ze(s) !== s : !1) : !0);
}
const ao = function(n) {
  return n === void 0 && (n = {}), {
    name: "autoPlacement",
    options: n,
    async fn(t) {
      var e, o, s;
      const {
        rects: l,
        middlewareData: a,
        placement: u,
        platform: d,
        elements: g
      } = t, {
        crossAxis: w = !1,
        alignment: m,
        allowedPlacements: p = vt,
        autoAlignment: v = !0,
        ...y
      } = be(n, t), $ = m !== void 0 || p === vt ? lo(m || null, v, p) : p, x = await Ue(t, y), b = ((e = a.autoPlacement) == null ? void 0 : e.index) || 0, k = $[b];
      if (k == null)
        return {};
      const {
        main: f,
        cross: T
      } = Wt(k, l, await (d.isRTL == null ? void 0 : d.isRTL(g.floating)));
      if (u !== k)
        return {
          reset: {
            placement: $[0]
          }
        };
      const A = [x[ne(k)], x[f], x[T]], R = [...((o = a.autoPlacement) == null ? void 0 : o.overflows) || [], {
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
        return [E.placement, X && w ? E.overflows.slice(0, 2).reduce((H, K) => H + K, 0) : E.overflows[0], E.overflows];
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
function io(n) {
  const t = Ee(n);
  return [ze(n), t, ze(t)];
}
function uo(n, t, e) {
  const o = ["left", "right"], s = ["right", "left"], l = ["top", "bottom"], a = ["bottom", "top"];
  switch (n) {
    case "top":
    case "bottom":
      return e ? t ? s : o : t ? o : s;
    case "left":
    case "right":
      return t ? l : a;
    default:
      return [];
  }
}
function co(n, t, e, o) {
  const s = ee(n);
  let l = uo(ne(n), e === "start", o);
  return s && (l = l.map((a) => a + "-" + s), t && (l = l.concat(l.map(ze)))), l;
}
const po = function(n) {
  return n === void 0 && (n = {}), {
    name: "flip",
    options: n,
    async fn(t) {
      var e;
      const {
        placement: o,
        middlewareData: s,
        rects: l,
        initialPlacement: a,
        platform: u,
        elements: d
      } = t, {
        mainAxis: g = !0,
        crossAxis: w = !0,
        fallbackPlacements: m,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: y = !0,
        ...$
      } = be(n, t), x = ne(o), b = ne(a) === a, k = await (u.isRTL == null ? void 0 : u.isRTL(d.floating)), f = m || (b || !y ? [Ee(a)] : io(a));
      !m && v !== "none" && f.push(...co(a, y, v, k));
      const T = [a, ...f], A = await Ue(t, $), R = [];
      let O = ((e = s.flip) == null ? void 0 : e.overflows) || [];
      if (g && R.push(A[x]), w) {
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
          switch (p) {
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
async function fo(n, t) {
  const {
    placement: e,
    platform: o,
    elements: s
  } = n, l = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), a = ne(e), u = ee(e), d = xe(e) === "x", g = ["left", "top"].includes(a) ? -1 : 1, w = l && d ? -1 : 1, m = be(t, n);
  let {
    mainAxis: p,
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
  return u && typeof y == "number" && (v = u === "end" ? y * -1 : y), d ? {
    x: v * w,
    y: p * g
  } : {
    x: p * g,
    y: v * w
  };
}
const ho = function(n) {
  return n === void 0 && (n = 0), {
    name: "offset",
    options: n,
    async fn(t) {
      const {
        x: e,
        y: o
      } = t, s = await fo(t, n);
      return {
        x: e + s.x,
        y: o + s.y,
        data: s
      };
    }
  };
};
function mo(n) {
  return n === "x" ? "y" : "x";
}
const go = function(n) {
  return n === void 0 && (n = {}), {
    name: "shift",
    options: n,
    async fn(t) {
      const {
        x: e,
        y: o,
        placement: s
      } = t, {
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
      } = be(n, t), g = {
        x: e,
        y: o
      }, w = await Ue(t, d), m = xe(ne(s)), p = mo(m);
      let v = g[m], y = g[p];
      if (l) {
        const x = m === "y" ? "top" : "left", b = m === "y" ? "bottom" : "right", k = v + w[x], f = v - w[b];
        v = nt(k, v, f);
      }
      if (a) {
        const x = p === "y" ? "top" : "left", b = p === "y" ? "bottom" : "right", k = y + w[x], f = y - w[b];
        y = nt(k, y, f);
      }
      const $ = u.fn({
        ...t,
        [m]: v,
        [p]: y
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
}, yo = function(n) {
  return n === void 0 && (n = {}), {
    name: "size",
    options: n,
    async fn(t) {
      const {
        placement: e,
        rects: o,
        platform: s,
        elements: l
      } = t, {
        apply: a = () => {
        },
        ...u
      } = be(n, t), d = await Ue(t, u), g = ne(e), w = ee(e), p = xe(e) === "x", {
        width: v,
        height: y
      } = o.floating;
      let $, x;
      g === "top" || g === "bottom" ? ($ = g, x = w === (await (s.isRTL == null ? void 0 : s.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (x = g, $ = w === "end" ? "top" : "bottom");
      const b = y - d[$], k = v - d[x], f = !t.middlewareData.shift;
      let T = b, A = k;
      if (p) {
        const O = v - d.left - d.right;
        A = w || f ? Ae(k, O) : O;
      } else {
        const O = y - d.top - d.bottom;
        T = w || f ? Ae(b, O) : O;
      }
      if (f && !w) {
        const O = me(d.left, 0), q = me(d.right, 0), Y = me(d.top, 0), J = me(d.bottom, 0);
        p ? A = v - 2 * (O !== 0 || q !== 0 ? O + q : me(d.left, d.right)) : T = y - 2 * (Y !== 0 || J !== 0 ? Y + J : me(d.top, d.bottom));
      }
      await a({
        ...t,
        availableWidth: A,
        availableHeight: T
      });
      const R = await s.getDimensions(l.floating);
      return v !== R.width || y !== R.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Z(n) {
  var t;
  return ((t = n.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function oe(n) {
  return Z(n).getComputedStyle(n);
}
const bt = Math.min, Se = Math.max, Ve = Math.round;
function jt(n) {
  const t = oe(n);
  let e = parseFloat(t.width), o = parseFloat(t.height);
  const s = n.offsetWidth, l = n.offsetHeight, a = Ve(e) !== s || Ve(o) !== l;
  return a && (e = s, o = l), {
    width: e,
    height: o,
    fallback: a
  };
}
function ue(n) {
  return Ft(n) ? (n.nodeName || "").toLowerCase() : "";
}
let De;
function Ht() {
  if (De)
    return De;
  const n = navigator.userAgentData;
  return n && Array.isArray(n.brands) ? (De = n.brands.map((t) => t.brand + "/" + t.version).join(" "), De) : navigator.userAgent;
}
function se(n) {
  return n instanceof Z(n).HTMLElement;
}
function ce(n) {
  return n instanceof Z(n).Element;
}
function Ft(n) {
  return n instanceof Z(n).Node;
}
function wt(n) {
  if (typeof ShadowRoot > "u")
    return !1;
  const t = Z(n).ShadowRoot;
  return n instanceof t || n instanceof ShadowRoot;
}
function Xe(n) {
  const {
    overflow: t,
    overflowX: e,
    overflowY: o,
    display: s
  } = oe(n);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + e) && !["inline", "contents"].includes(s);
}
function vo(n) {
  return ["table", "td", "th"].includes(ue(n));
}
function ct(n) {
  const t = /firefox/i.test(Ht()), e = oe(n), o = e.backdropFilter || e.WebkitBackdropFilter;
  return e.transform !== "none" || e.perspective !== "none" || (o ? o !== "none" : !1) || t && e.willChange === "filter" || t && (e.filter ? e.filter !== "none" : !1) || ["transform", "perspective"].some((s) => e.willChange.includes(s)) || ["paint", "layout", "strict", "content"].some((s) => {
    const l = e.contain;
    return l != null ? l.includes(s) : !1;
  });
}
function Gt() {
  return !/^((?!chrome|android).)*safari/i.test(Ht());
}
function pt(n) {
  return ["html", "body", "#document"].includes(ue(n));
}
function qt(n) {
  return ce(n) ? n : n.contextElement;
}
const Ut = {
  x: 1,
  y: 1
};
function we(n) {
  const t = qt(n);
  if (!se(t))
    return Ut;
  const e = t.getBoundingClientRect(), {
    width: o,
    height: s,
    fallback: l
  } = jt(t);
  let a = (l ? Ve(e.width) : e.width) / o, u = (l ? Ve(e.height) : e.height) / s;
  return (!a || !Number.isFinite(a)) && (a = 1), (!u || !Number.isFinite(u)) && (u = 1), {
    x: a,
    y: u
  };
}
function Pe(n, t, e, o) {
  var s, l;
  t === void 0 && (t = !1), e === void 0 && (e = !1);
  const a = n.getBoundingClientRect(), u = qt(n);
  let d = Ut;
  t && (o ? ce(o) && (d = we(o)) : d = we(n));
  const g = u ? Z(u) : window, w = !Gt() && e;
  let m = (a.left + (w && ((s = g.visualViewport) == null ? void 0 : s.offsetLeft) || 0)) / d.x, p = (a.top + (w && ((l = g.visualViewport) == null ? void 0 : l.offsetTop) || 0)) / d.y, v = a.width / d.x, y = a.height / d.y;
  if (u) {
    const $ = Z(u), x = o && ce(o) ? Z(o) : o;
    let b = $.frameElement;
    for (; b && o && x !== $; ) {
      const k = we(b), f = b.getBoundingClientRect(), T = getComputedStyle(b);
      f.x += (b.clientLeft + parseFloat(T.paddingLeft)) * k.x, f.y += (b.clientTop + parseFloat(T.paddingTop)) * k.y, m *= k.x, p *= k.y, v *= k.x, y *= k.y, m += f.x, p += f.y, b = Z(b).frameElement;
    }
  }
  return {
    width: v,
    height: y,
    top: p,
    right: m + v,
    bottom: p + y,
    left: m,
    x: m,
    y: p
  };
}
function pe(n) {
  return ((Ft(n) ? n.ownerDocument : n.document) || window.document).documentElement;
}
function Ye(n) {
  return ce(n) ? {
    scrollLeft: n.scrollLeft,
    scrollTop: n.scrollTop
  } : {
    scrollLeft: n.pageXOffset,
    scrollTop: n.pageYOffset
  };
}
function bo(n) {
  let {
    rect: t,
    offsetParent: e,
    strategy: o
  } = n;
  const s = se(e), l = pe(e);
  if (e === l)
    return t;
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
    const g = Pe(e);
    u = we(e), d.x = g.x + e.clientLeft, d.y = g.y + e.clientTop;
  }
  return {
    width: t.width * u.x,
    height: t.height * u.y,
    x: t.x * u.x - a.scrollLeft * u.x + d.x,
    y: t.y * u.y - a.scrollTop * u.y + d.y
  };
}
function Xt(n) {
  return Pe(pe(n)).left + Ye(n).scrollLeft;
}
function wo(n) {
  const t = pe(n), e = Ye(n), o = n.ownerDocument.body, s = Se(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), l = Se(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let a = -e.scrollLeft + Xt(n);
  const u = -e.scrollTop;
  return oe(o).direction === "rtl" && (a += Se(t.clientWidth, o.clientWidth) - s), {
    width: s,
    height: l,
    x: a,
    y: u
  };
}
function Oe(n) {
  if (ue(n) === "html")
    return n;
  const t = n.assignedSlot || n.parentNode || wt(n) && n.host || pe(n);
  return wt(t) ? t.host : t;
}
function Yt(n) {
  const t = Oe(n);
  return pt(t) ? t.ownerDocument.body : se(t) && Xe(t) ? t : Yt(t);
}
function Me(n, t) {
  var e;
  t === void 0 && (t = []);
  const o = Yt(n), s = o === ((e = n.ownerDocument) == null ? void 0 : e.body), l = Z(o);
  return s ? t.concat(l, l.visualViewport || [], Xe(o) ? o : []) : t.concat(o, Me(o));
}
function _o(n, t) {
  const e = Z(n), o = pe(n), s = e.visualViewport;
  let l = o.clientWidth, a = o.clientHeight, u = 0, d = 0;
  if (s) {
    l = s.width, a = s.height;
    const g = Gt();
    (g || !g && t === "fixed") && (u = s.offsetLeft, d = s.offsetTop);
  }
  return {
    width: l,
    height: a,
    x: u,
    y: d
  };
}
function xo(n, t) {
  const e = Pe(n, !0, t === "fixed"), o = e.top + n.clientTop, s = e.left + n.clientLeft, l = se(n) ? we(n) : {
    x: 1,
    y: 1
  }, a = n.clientWidth * l.x, u = n.clientHeight * l.y, d = s * l.x, g = o * l.y;
  return {
    width: a,
    height: u,
    x: d,
    y: g
  };
}
function _t(n, t, e) {
  return t === "viewport" ? ke(_o(n, e)) : ce(t) ? ke(xo(t, e)) : ke(wo(pe(n)));
}
function $o(n, t) {
  const e = t.get(n);
  if (e)
    return e;
  let o = Me(n).filter((u) => ce(u) && ue(u) !== "body"), s = null;
  const l = oe(n).position === "fixed";
  let a = l ? Oe(n) : n;
  for (; ce(a) && !pt(a); ) {
    const u = oe(a), d = ct(a);
    (l ? !d && !s : !d && u.position === "static" && !!s && ["absolute", "fixed"].includes(s.position)) ? o = o.filter((w) => w !== a) : s = u, a = Oe(a);
  }
  return t.set(n, o), o;
}
function ko(n) {
  let {
    element: t,
    boundary: e,
    rootBoundary: o,
    strategy: s
  } = n;
  const a = [...e === "clippingAncestors" ? $o(t, this._c) : [].concat(e), o], u = a[0], d = a.reduce((g, w) => {
    const m = _t(t, w, s);
    return g.top = Se(m.top, g.top), g.right = bt(m.right, g.right), g.bottom = bt(m.bottom, g.bottom), g.left = Se(m.left, g.left), g;
  }, _t(t, u, s));
  return {
    width: d.right - d.left,
    height: d.bottom - d.top,
    x: d.left,
    y: d.top
  };
}
function So(n) {
  return se(n) ? jt(n) : n.getBoundingClientRect();
}
function xt(n) {
  return !se(n) || oe(n).position === "fixed" ? null : n.offsetParent;
}
function Co(n) {
  let t = Oe(n);
  for (; se(t) && !pt(t); ) {
    if (ct(t))
      return t;
    t = Oe(t);
  }
  return null;
}
function $t(n) {
  const t = Z(n);
  let e = xt(n);
  for (; e && vo(e) && oe(e).position === "static"; )
    e = xt(e);
  return e && (ue(e) === "html" || ue(e) === "body" && oe(e).position === "static" && !ct(e)) ? t : e || Co(n) || t;
}
function To(n, t, e) {
  const o = se(t), s = pe(t), l = Pe(n, !0, e === "fixed", t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = {
    x: 0,
    y: 0
  };
  if (o || !o && e !== "fixed")
    if ((ue(t) !== "body" || Xe(s)) && (a = Ye(t)), se(t)) {
      const d = Pe(t, !0);
      u.x = d.x + t.clientLeft, u.y = d.y + t.clientTop;
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
  async getElementRects(n) {
    let {
      reference: t,
      floating: e,
      strategy: o
    } = n;
    const s = this.getOffsetParent || $t, l = this.getDimensions;
    return {
      reference: To(t, await s(e), o),
      floating: {
        x: 0,
        y: 0,
        ...await l(e)
      }
    };
  },
  getClientRects: (n) => Array.from(n.getClientRects()),
  isRTL: (n) => oe(n).direction === "rtl"
}, Ao = (n, t, e) => {
  const o = /* @__PURE__ */ new Map(), s = {
    platform: Bo,
    ...e
  }, l = {
    ...s.platform,
    _c: o
  };
  return eo(n, t, {
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
      hideTriggers: (n) => [...n, "click"],
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
function ot(n, t) {
  let e = ge.themes[n] || {}, o;
  do
    o = e[t], typeof o > "u" ? e.$extend ? e = ge.themes[e.$extend] || {} : (e = null, o = ge[t]) : e = null;
  while (e);
  return o;
}
function Po(n) {
  const t = [n];
  let e = ge.themes[n] || {};
  do
    e.$extend && !e.$resetCss ? (t.push(e.$extend), e = ge.themes[e.$extend] || {}) : e = null;
  while (e);
  return t.map((o) => `v-popper--theme-${o}`);
}
function kt(n) {
  const t = [n];
  let e = ge.themes[n] || {};
  do
    e.$extend ? (t.push(e.$extend), e = ge.themes[e.$extend] || {}) : e = null;
  while (e);
  return t;
}
let _e = !1;
if (typeof window < "u") {
  _e = !1;
  try {
    const n = Object.defineProperty({}, "passive", {
      get() {
        _e = !0;
      }
    });
    window.addEventListener("test", null, n);
  } catch {
  }
}
let Kt = !1;
typeof window < "u" && typeof navigator < "u" && (Kt = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const Oo = ["auto", "top", "bottom", "left", "right"].reduce((n, t) => n.concat([
  t,
  `${t}-start`,
  `${t}-end`
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
function Tt(n, t) {
  const e = n.indexOf(t);
  e !== -1 && n.splice(e, 1);
}
function Ze() {
  return new Promise((n) => requestAnimationFrame(() => {
    requestAnimationFrame(n);
  }));
}
const Q = [];
let he = null;
const Bt = {};
function At(n) {
  let t = Bt[n];
  return t || (t = Bt[n] = []), t;
}
let st = function() {
};
typeof window < "u" && (st = window.Element);
function P(n) {
  return function(t) {
    return ot(t.theme, n);
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
      validator: (n) => Oo.includes(n)
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
      validator: (n) => ["absolute", "fixed"].includes(n),
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
      var n;
      return (n = this[Je]) == null ? void 0 : n.parentPopper;
    },
    hasPopperShowTriggerHover() {
      var n, t;
      return ((n = this.popperTriggers) == null ? void 0 : n.includes("hover")) || ((t = this.popperShowTriggers) == null ? void 0 : t.includes("hover"));
    }
  },
  watch: {
    shown: "$_autoShowHide",
    disabled(n) {
      n ? this.dispose() : this.init();
    },
    async container() {
      this.isShown && (this.$_ensureTeleport(), await this.$_computePosition());
    },
    ...[
      "triggers",
      "positioningDisabled"
    ].reduce((n, t) => (n[t] = "$_refreshListeners", n), {}),
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
    ].reduce((n, t) => (n[t] = "$_computePosition", n), {})
  },
  created() {
    this.$_isDisposed = !0, this.randomId = `popper_${[Math.random(), Date.now()].map((n) => n.toString(36).substring(2, 10)).join("_")}`, this.autoMinSize && console.warn('[floating-vue] `autoMinSize` option is deprecated. Use `autoSize="min"` instead.'), this.autoMaxSize && console.warn("[floating-vue] `autoMaxSize` option is deprecated. Use `autoBoundaryMaxSize` instead.");
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
    show({ event: n = null, skipDelay: t = !1, force: e = !1 } = {}) {
      var o, s;
      (o = this.parentPopper) != null && o.lockedChild && this.parentPopper.lockedChild !== this || (this.$_pendingHide = !1, (e || !this.disabled) && (((s = this.parentPopper) == null ? void 0 : s.lockedChild) === this && (this.parentPopper.lockedChild = null), this.$_scheduleShow(n, t), this.$emit("show"), this.$_showFrameLocked = !0, requestAnimationFrame(() => {
        this.$_showFrameLocked = !1;
      })), this.$emit("update:shown", !0));
    },
    hide({ event: n = null, skipDelay: t = !1 } = {}) {
      var e;
      if (!this.$_hideInProgress) {
        if (this.shownChildren.size > 0) {
          this.$_pendingHide = !0;
          return;
        }
        if (this.hasPopperShowTriggerHover && this.$_isAimingPopper()) {
          this.parentPopper && (this.parentPopper.lockedChild = this, clearTimeout(this.parentPopper.lockedChildTimer), this.parentPopper.lockedChildTimer = setTimeout(() => {
            this.parentPopper.lockedChild === this && (this.parentPopper.lockedChild.hide({ skipDelay: t }), this.parentPopper.lockedChild = null);
          }, 1e3));
          return;
        }
        ((e = this.parentPopper) == null ? void 0 : e.lockedChild) === this && (this.parentPopper.lockedChild = null), this.$_pendingHide = !1, this.$_scheduleHide(n, t), this.$emit("hide"), this.$emit("update:shown", !1);
      }
    },
    init() {
      var t;
      var n;
      this.$_isDisposed && (this.$_isDisposed = !1, this.isMounted = !1, this.$_events = [], this.$_preventShow = !1, this.$_referenceNode = (t = (n = this.referenceNode) == null ? void 0 : n.call(this)) != null ? t : this.$el, this.$_targetNodes = this.targetNodes().filter((e) => e.nodeType === e.ELEMENT_NODE), this.$_popperNode = this.popperNode(), this.$_innerNode = this.$_popperNode.querySelector(".v-popper__inner"), this.$_arrowNode = this.$_popperNode.querySelector(".v-popper__arrow-container"), this.$_swapTargetAttrs("title", "data-original-title"), this.$_detachPopperNode(), this.triggers.length && this.$_addEventListeners(), this.shown && this.show());
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
      const n = {
        strategy: this.strategy,
        middleware: []
      };
      (this.distance || this.skidding) && n.middleware.push(ho({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t = this.placement.startsWith("auto");
      if (t ? n.middleware.push(ao({
        alignment: (o = this.placement.split("-")[1]) != null ? o : ""
      })) : n.placement = this.placement, this.preventOverflow && (this.shift && n.middleware.push(go({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && n.middleware.push(po({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), n.middleware.push(no({
        element: this.$_arrowNode,
        padding: this.arrowPadding
      })), this.arrowOverflow && n.middleware.push({
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
        n.middleware.push({
          name: "autoSize",
          fn: ({ rects: l, placement: a, middlewareData: u }) => {
            var d;
            if ((d = u.autoSize) != null && d.skip)
              return {};
            let g, w;
            return a.startsWith("top") || a.startsWith("bottom") ? g = l.reference.width : w = l.reference.height, this.$_innerNode.style[s === "min" ? "minWidth" : s === "max" ? "maxWidth" : "width"] = g != null ? `${g}px` : null, this.$_innerNode.style[s === "min" ? "minHeight" : s === "max" ? "maxHeight" : "height"] = w != null ? `${w}px` : null, {
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
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, n.middleware.push(yo({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: s, availableHeight: l }) => {
          this.$_innerNode.style.maxWidth = s != null ? `${s}px` : null, this.$_innerNode.style.maxHeight = l != null ? `${l}px` : null;
        }
      })));
      const e = await Ao(this.$_referenceNode, this.$_popperNode, n);
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
    $_scheduleShow(n = null, t = !1) {
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), he && this.instantMove && he.instantMove && he !== this.parentPopper) {
        he.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(n = null, t = !1) {
      if (this.shownChildren.size > 0) {
        this.$_pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (he = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(n) {
      const t = this.delay;
      return parseInt(t && t[n] || t || 0);
    },
    async $_applyShow(n = !1) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = n, !this.isShown && (this.$_ensureTeleport(), await Ze(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
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
        const t = this.$_referenceNode.getBoundingClientRect(), e = this.$_popperNode.querySelector(".v-popper__wrapper"), o = e.parentNode.getBoundingClientRect(), s = t.x + t.width / 2 - (o.left + e.offsetLeft), l = t.y + t.height / 2 - (o.top + e.offsetTop);
        this.result.transformOrigin = `${s}px ${l}px`;
      }
      this.isShown = !0, this.$_applyAttrsToTarget({
        "aria-describedby": this.popperId,
        "data-popper-shown": ""
      });
      const n = this.showGroup;
      if (n) {
        let t;
        for (let e = 0; e < Q.length; e++)
          t = Q[e], t.showGroup !== n && (t.hide(), t.$emit("close-group"));
      }
      Q.push(this), document.body.classList.add("v-popper--some-open");
      for (const t of kt(this.theme))
        At(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await Ze(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(n = !1) {
      if (this.shownChildren.size > 0) {
        this.$_pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = n, Tt(Q, this), Q.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const e of kt(this.theme)) {
        const o = At(e);
        Tt(o, this), o.length === 0 && document.body.classList.remove(`v-popper--some-open--${e}`);
      }
      he === this && (he = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = this.disposeTimeout;
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await Ze(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
    },
    $_autoShowHide() {
      this.shown ? this.show() : this.hide();
    },
    $_ensureTeleport() {
      if (this.$_isDisposed)
        return;
      let n = this.container;
      if (typeof n == "string" ? n = window.document.querySelector(n) : n === !1 && (n = this.$_targetNodes[0].parentNode), !n)
        throw new Error("No container for popover: " + this.container);
      n.appendChild(this.$_popperNode), this.isMounted = !0;
    },
    $_addEventListeners() {
      const n = (e) => {
        this.isShown && !this.$_hideInProgress || (e.usedByTooltip = !0, !this.$_preventShow && this.show({ event: e }));
      };
      this.$_registerTriggerListeners(this.$_targetNodes, St, this.triggers, this.showTriggers, n), this.$_registerTriggerListeners([this.$_popperNode], St, this.popperTriggers, this.popperShowTriggers, n);
      const t = (e) => {
        e.usedByTooltip || this.hide({ event: e });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, Ct, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], Ct, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(n, t, e) {
      this.$_events.push({ targetNodes: n, eventType: t, handler: e }), n.forEach((o) => o.addEventListener(t, e, _e ? {
        passive: !0
      } : void 0));
    },
    $_registerTriggerListeners(n, t, e, o, s) {
      let l = e;
      o != null && (l = typeof o == "function" ? o(l) : o), l.forEach((a) => {
        const u = t[a];
        u && this.$_registerEventListeners(n, u, s);
      });
    },
    $_removeEventListeners(n) {
      const t = [];
      this.$_events.forEach((e) => {
        const { targetNodes: o, eventType: s, handler: l } = e;
        !n || n === s ? o.forEach((a) => a.removeEventListener(s, l)) : t.push(e);
      }), this.$_events = t;
    },
    $_refreshListeners() {
      this.$_isDisposed || (this.$_removeEventListeners(), this.$_addEventListeners());
    },
    $_handleGlobalClose(n, t = !1) {
      this.$_showFrameLocked || (this.hide({ event: n }), n.closePopover ? this.$emit("close-directive") : this.$emit("auto-hide"), t && (this.$_preventShow = !0, setTimeout(() => {
        this.$_preventShow = !1;
      }, 300)));
    },
    $_detachPopperNode() {
      this.$_popperNode.parentNode && this.$_popperNode.parentNode.removeChild(this.$_popperNode);
    },
    $_swapTargetAttrs(n, t) {
      for (const e of this.$_targetNodes) {
        const o = e.getAttribute(n);
        o && (e.removeAttribute(n), e.setAttribute(t, o));
      }
    },
    $_applyAttrsToTarget(n) {
      for (const t of this.$_targetNodes)
        for (const e in n) {
          const o = n[e];
          o == null ? t.removeAttribute(e) : t.setAttribute(e, o);
        }
    },
    $_updateParentShownChildren(n) {
      let t = this.parentPopper;
      for (; t; )
        n ? t.shownChildren.add(this.randomId) : (t.shownChildren.delete(this.randomId), t.$_pendingHide && t.hide()), t = t.parentPopper;
    },
    $_isAimingPopper() {
      const n = this.$_referenceNode.getBoundingClientRect();
      if (Ce >= n.left && Ce <= n.right && Te >= n.top && Te <= n.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), e = Ce - ae, o = Te - ie, s = t.left + t.width / 2 - ae + (t.top + t.height / 2) - ie + t.width + t.height, l = ae + e * s, a = ie + o * s;
        return Ne(ae, ie, l, a, t.left, t.top, t.left, t.bottom) || Ne(ae, ie, l, a, t.left, t.top, t.right, t.top) || Ne(ae, ie, l, a, t.right, t.top, t.right, t.bottom) || Ne(ae, ie, l, a, t.left, t.bottom, t.right, t.bottom);
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
function Pt(n) {
  for (let t = 0; t < Q.length; t++) {
    const e = Q[t];
    try {
      const o = e.popperNode();
      e.$_mouseDownContains = o.contains(n.target);
    } catch {
    }
  }
}
function Lo(n) {
  Jt(n);
}
function Io(n) {
  Jt(n, !0);
}
function Jt(n, t = !1) {
  const e = {};
  for (let o = Q.length - 1; o >= 0; o--) {
    const s = Q[o];
    try {
      const l = s.$_containsGlobalTarget = Do(s, n);
      s.$_pendingHide = !1, requestAnimationFrame(() => {
        if (s.$_pendingHide = !1, !e[s.randomId] && Ot(s, l, n)) {
          if (s.$_handleGlobalClose(n, t), !n.closeAllPopover && n.closePopover && l) {
            let u = s.parentPopper;
            for (; u; )
              e[u.randomId] = !0, u = u.parentPopper;
            return;
          }
          let a = s.parentPopper;
          for (; a && Ot(a, a.$_containsGlobalTarget, n); )
            a.$_handleGlobalClose(n, t), a = a.parentPopper;
        }
      });
    } catch {
    }
  }
}
function Do(n, t) {
  const e = n.popperNode();
  return n.$_mouseDownContains || e.contains(t.target);
}
function Ot(n, t, e) {
  return e.closeAllPopover || e.closePopover && t || No(n, e) && !t;
}
function No(n, t) {
  if (typeof n.autoHide == "function") {
    const e = n.autoHide(t);
    return n.lastAutoHide = e, e;
  }
  return n.autoHide;
}
function Ro(n) {
  for (let t = 0; t < Q.length; t++)
    Q[t].$_computePosition(n);
}
let ae = 0, ie = 0, Ce = 0, Te = 0;
typeof window < "u" && window.addEventListener("mousemove", (n) => {
  ae = Ce, ie = Te, Ce = n.clientX, Te = n.clientY;
}, _e ? {
  passive: !0
} : void 0);
function Ne(n, t, e, o, s, l, a, u) {
  const d = ((a - s) * (t - l) - (u - l) * (n - s)) / ((u - l) * (e - n) - (a - s) * (o - t)), g = ((e - n) * (t - l) - (o - t) * (n - s)) / ((u - l) * (e - n) - (a - s) * (o - t));
  return d >= 0 && d <= 1 && g >= 0 && g <= 1;
}
const Eo = {
  extends: Zt()
}, ft = (n, t) => {
  const e = n.__vccOpts || n;
  for (const [o, s] of t)
    e[o] = s;
  return e;
};
function zo(n, t, e, o, s, l) {
  return i(), c("div", {
    ref: "reference",
    class: h(["v-popper", {
      "v-popper--shown": n.slotData.isShown
    }])
  }, [
    C(n.$slots, "default", Nt(Rt(n.slotData)))
  ], 2);
}
const Vo = /* @__PURE__ */ ft(Eo, [["render", zo]]);
function Mo() {
  var n = window.navigator.userAgent, t = n.indexOf("MSIE ");
  if (t > 0)
    return parseInt(n.substring(t + 5, n.indexOf(".", t)), 10);
  var e = n.indexOf("Trident/");
  if (e > 0) {
    var o = n.indexOf("rv:");
    return parseInt(n.substring(o + 3, n.indexOf(".", o)), 10);
  }
  var s = n.indexOf("Edge/");
  return s > 0 ? parseInt(n.substring(s + 5, n.indexOf(".", s)), 10) : -1;
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
    const n = document.createElement("object");
    this._resizeObject = n, n.setAttribute("aria-hidden", "true"), n.setAttribute("tabindex", -1), n.onload = this.addResizeHandlers, n.type = "text/html", Re && this.$el.appendChild(n), n.data = "about:blank", Re || this.$el.appendChild(n);
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
const Ho = /* @__PURE__ */ Wo((n, t, e, o, s, l) => (i(), M("div", jo)));
Ke.render = Ho;
Ke.__scopeId = "data-v-b329ee4c";
Ke.__file = "src/components/ResizeObserver.vue";
const Qt = (n = "theme") => ({
  computed: {
    themeClass() {
      return Po(this[n]);
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
    toPx(n) {
      return n != null && !isNaN(n) ? `${n}px` : null;
    }
  }
}), Go = ["id", "aria-hidden", "tabindex", "data-popper-placement"], qo = {
  ref: "inner",
  class: "v-popper__inner"
}, Uo = /* @__PURE__ */ _("div", { class: "v-popper__arrow-outer" }, null, -1), Xo = /* @__PURE__ */ _("div", { class: "v-popper__arrow-inner" }, null, -1), Yo = [
  Uo,
  Xo
];
function Ko(n, t, e, o, s, l) {
  const a = Qe("ResizeObserver");
  return i(), c("div", {
    id: n.popperId,
    ref: "popover",
    class: h(["v-popper__popper", [
      n.themeClass,
      n.classes.popperClass,
      {
        "v-popper__popper--shown": n.shown,
        "v-popper__popper--hidden": !n.shown,
        "v-popper__popper--show-from": n.classes.showFrom,
        "v-popper__popper--show-to": n.classes.showTo,
        "v-popper__popper--hide-from": n.classes.hideFrom,
        "v-popper__popper--hide-to": n.classes.hideTo,
        "v-popper__popper--skip-transition": n.skipTransition,
        "v-popper__popper--arrow-overflow": n.result && n.result.arrow.overflow,
        "v-popper__popper--no-positioning": !n.result
      }
    ]]),
    style: te(n.result ? {
      position: n.result.strategy,
      transform: `translate3d(${Math.round(n.result.x)}px,${Math.round(n.result.y)}px,0)`
    } : void 0),
    "aria-hidden": n.shown ? "false" : "true",
    tabindex: n.autoHide ? 0 : void 0,
    "data-popper-placement": n.result ? n.result.placement : void 0,
    onKeyup: t[2] || (t[2] = rn((u) => n.autoHide && n.$emit("hide"), ["esc"]))
  }, [
    _("div", {
      class: "v-popper__backdrop",
      onClick: t[0] || (t[0] = (u) => n.autoHide && n.$emit("hide"))
    }),
    _("div", {
      class: "v-popper__wrapper",
      style: te(n.result ? {
        transformOrigin: n.result.transformOrigin
      } : void 0)
    }, [
      _("div", qo, [
        n.mounted ? (i(), c(L, { key: 0 }, [
          _("div", null, [
            C(n.$slots, "default")
          ]),
          n.handleResize ? (i(), M(a, {
            key: 0,
            onNotify: t[1] || (t[1] = (u) => n.$emit("resize", u))
          })) : S("", !0)
        ], 64)) : S("", !0)
      ], 512),
      _("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: te(n.result ? {
          left: n.toPx(n.result.arrow.x),
          top: n.toPx(n.result.arrow.y)
        } : void 0)
      }, Yo, 4)
    ], 4)
  ], 46, Go);
}
const en = /* @__PURE__ */ ft(Fo, [["render", Ko]]), tn = {
  methods: {
    show(...n) {
      return this.$refs.popper.show(...n);
    },
    hide(...n) {
      return this.$refs.popper.hide(...n);
    },
    dispose(...n) {
      return this.$refs.popper.dispose(...n);
    },
    onResize(...n) {
      return this.$refs.popper.onResize(...n);
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
      var n;
      return (n = this.theme) != null ? n : this.$options.vPopperTheme;
    }
  },
  methods: {
    getTargetNodes() {
      return Array.from(this.$el.children).filter((n) => n !== this.$refs.popperContent.$el);
    }
  }
});
function Jo(n, t, e, o, s, l) {
  const a = Qe("PopperContent"), u = Qe("Popper");
  return i(), M(u, {
    ref: "popper",
    theme: n.finalTheme,
    "target-nodes": n.getTargetNodes,
    "popper-node": () => n.$refs.popperContent.$el,
    class: h([
      n.themeClass
    ])
  }, {
    default: D(({
      popperId: d,
      isShown: g,
      shouldMountContent: w,
      skipTransition: m,
      autoHide: p,
      show: v,
      hide: y,
      handleResize: $,
      onResize: x,
      classes: b,
      result: k
    }) => [
      C(n.$slots, "default", {
        shown: g,
        show: v,
        hide: y
      }),
      V(a, {
        ref: "popperContent",
        "popper-id": d,
        theme: n.finalTheme,
        shown: g,
        mounted: w,
        "skip-transition": m,
        "auto-hide": p,
        "handle-resize": $,
        classes: b,
        result: k,
        onHide: y,
        onResize: x
      }, {
        default: D(() => [
          C(n.$slots, "popper", {
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
      default: (n) => ot(n.theme, "html")
    },
    content: {
      type: [String, Number, Function],
      default: null
    },
    loadingContent: {
      type: String,
      default: (n) => ot(n.theme, "loadingContent")
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
    fetchContent(n) {
      if (typeof this.content == "function" && this.$_isShown && (n || !this.$_loading && this.asyncContent == null)) {
        this.asyncContent = null, this.$_loading = !0;
        const t = ++this.$_fetchId, e = this.content(this);
        e.then ? e.then((o) => this.onResult(t, o)) : this.onResult(t, e);
      }
    },
    onResult(n, t) {
      n === this.$_fetchId && (this.$_loading = !1, this.asyncContent = t);
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
  setup(n) {
    const t = n;
    G();
    const e = U(null), o = U(!1), s = I("Dropdown", t.variant, t.classes), l = (g) => {
      var m;
      const w = e.value;
      if (!!w) {
        if (["ArrowUp", "ArrowDown"].includes(g.key)) {
          g.preventDefault();
          const p = [...w.$refs.popperContent.$el.querySelectorAll(t.itemSelector)];
          if (!p.length)
            return;
          let v = p.indexOf(g.target);
          v = g.key === "ArrowDown" ? v + 1 : v - 1, (m = p[v]) == null || m.focus();
        }
        (g.key === "Enter" || g.key === " ") && g.target === w.$refs.popperContent.$el && (g.preventDefault(), w.hide());
      }
    }, a = (g) => {
      const w = e.value;
      if (!w || g.target.classList.contains("v-popper") || g.target.classList.contains("disabled"))
        return;
      let m = g.target, p = !0;
      for (; m; ) {
        if (m.getAttribute("data-slot") === "default")
          return;
        if (m.classList.contains("list--item")) {
          p = !1;
          break;
        }
        if (m = m.parentElement, m === null)
          break;
      }
      p || ![...w.$refs.popperContent.$el.querySelectorAll(t.itemSelector)].length || g.target.classList.contains("dropdown-stay") || (g.preventDefault(), w.hide());
    }, u = () => {
      document.addEventListener("keydown", l), document.addEventListener("click", a);
    }, d = () => {
      document.removeEventListener("keydown", l), document.removeEventListener("click", a);
      const g = e.value;
      g == null || g.$refs.popper.$_targetNodes[0].focus();
    };
    return it(() => {
      document.removeEventListener("keydown", l), document.removeEventListener("click", a);
    }), j("IS_DROPDOWN", 1), j("IS_DROPDOWN_OPEN", o), j("IS_DROPDOWN_ARROW", t.arrow), (g, w) => (i(), M(r(ts), {
      ref_key: "popoverRef",
      ref: e,
      distance: t.distance,
      triggers: ["click"],
      theme: "dropdown-menu",
      placement: t.placement,
      "auto-hide": "",
      onShow: u,
      onHide: d,
      skidding: t.skidding,
      shown: o.value,
      "onUpdate:shown": w[1] || (w[1] = (m) => o.value = m),
      class: h(r(s).wrapper),
      "popper-class": [r(s).size, r(s).theme]
    }, et({ _: 2 }, [
      W(g.$slots, (m, p) => ({
        name: p,
        fn: D((v) => [
          p === "default" ? (i(), c("div", Ge({
            class: "inline-block relative",
            "data-slot": p,
            key: p
          }, v || {}, {
            onClick: w[0] || (w[0] = de(() => {
            }, ["prevent", "stop"]))
          }), [
            C(g.$slots, p)
          ], 16, os)) : (i(), M(ye, {
            name: "dropdown",
            appear: "",
            key: p
          }, {
            default: D(() => [
              He(_("div", null, [
                C(g.$slots, p, Nt(Rt(v || {})))
              ], 512), [
                [Fe, o.value]
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
  setup(n) {
    const t = n, e = I("Tooltip", t.variant, t.classes);
    return (o, s) => (i(), M(r(ns), {
      triggers: ["hover"],
      theme: "tooltip",
      placement: t.placement,
      "auto-hide": "",
      class: h(r(e).wrapper),
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
}, fs = /* @__PURE__ */ _("span", null, "Previous", -1), hs = /* @__PURE__ */ _("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "w-auto h-auto",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ _("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M15 19l-7-7 7-7"
  })
], -1), ms = { class: "relative flex items-center space-x-2" }, gs = ["value", "disabled", "max"], ys = {
  key: 2,
  class: "text-gray-500"
}, vs = /* @__PURE__ */ _("span", null, "Next", -1), bs = /* @__PURE__ */ _("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "w-auto h-auto",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ _("path", {
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
  setup(n, { emit: t }) {
    const e = n, o = I("Pagination", e.variant, e.classes), s = N(() => e.totalItems === void 0 ? -1 : Math.ceil(e.totalItems / e.perPage)), l = N(() => e.page === 1), a = N(() => e.page === 1 ? 1 : e.perPage * (e.page - 1) + 1), u = N(() => {
      if (e.page === s.value)
        return e.totalItems;
      {
        let p = e.page * e.perPage;
        return e.currentCount && p > e.currentCount ? e.currentCount : p;
      }
    }), d = N(() => s.value === -1 ? !1 : s.value < 1 && !e.loading || s.value === 1 ? !0 : s.value > 1 ? e.page === s.value : !1), g = (p) => {
      m(p.target.value), p.target === document.activeElement && p.target.blur();
    }, w = (p) => {
      t("change", {
        page: 1,
        perPage: Number(p.target.value)
      });
    }, m = (p) => {
      p < 1 || p === 1 ? p = 1 : s.value > 0 && Number(p) > s.value && (p = s.value), t("change", {
        page: Number(p),
        perPage: e.perPage
      });
    };
    return (p, v) => (i(), c("div", {
      class: h(["flex", {
        [r(o).baseText]: !0,
        "justify-between": !e.hideStats,
        "justify-center": e.hideStats
      }])
    }, [
      !e.hideStats && !e.loadMore ? (i(), c("div", rs, [
        _("select", {
          name: "currentPerPage",
          class: "flex w-16 py-2 pl-2 pr-2 text-sm font-medium text-gray-500 bg-white border-gray-200 rounded cursor-pointer hover:bg-blue-100 hover:border-blue-900 hover:text-blue-900 focus:outline-none focus:border-blue-900 focus:ring-0",
          value: e.perPage,
          onInput: v[0] || (v[0] = (y) => w(y))
        }, [
          (i(!0), c(L, null, W(e.perPageOptions, (y) => (i(), c("option", {
            key: y,
            value: y
          }, B(y), 9, as))), 128))
        ], 40, ls),
        _("label", is, [
          n.totalItems ? (i(), c(L, { key: 0 }, [
            z("Showing " + B(a.value) + " to " + B(u.value) + " of " + B(n.totalItems) + " " + B(n.itemName), 1)
          ], 64)) : e.loading ? (i(), c(L, { key: 1 }, [
            z("Loading...")
          ], 64)) : S("", !0)
        ])
      ])) : S("", !0),
      e.loadMore ? (i(), c("div", ds, [
        e.hideStats ? S("", !0) : (i(), c("div", us, [
          n.totalItems ? (i(), c(L, { key: 0 }, [
            z("Showing " + B(u.value) + " of " + B(n.totalItems) + " " + B(n.itemName), 1)
          ], 64)) : S("", !0)
        ])),
        n.nextPrevButtons ? (i(), c("div", cs, [
          V($e, {
            outlined: "",
            onClick: v[1] || (v[1] = (y) => l.value ? "" : m(e.page - 1)),
            disabled: l.value,
            variant: n.variantButton
          }, {
            default: D(() => [
              z("Previous")
            ]),
            _: 1
          }, 8, ["disabled", "variant"]),
          V($e, {
            outlined: "",
            onClick: v[2] || (v[2] = (y) => d.value ? "" : m(e.page + 1)),
            disabled: d.value,
            variant: n.variantButton
          }, {
            default: D(() => [
              z("Next")
            ]),
            _: 1
          }, 8, ["disabled", "variant"])
        ])) : (i(), M($e, {
          key: 2,
          outlined: "",
          onClick: v[3] || (v[3] = (y) => d.value ? "" : m(e.page + 1)),
          disabled: e.loading || d.value,
          loading: e.loading,
          variant: n.variantButton
        }, {
          default: D(() => [
            z(B(n.loadMoreButton), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading", "variant"]))
      ])) : (i(), c("div", ps, [
        _("div", null, [
          V($e, {
            ghost: "",
            circle: !n.nextPrevButtons,
            onClick: v[4] || (v[4] = (y) => l.value ? "" : m(e.page - 1)),
            disabled: l.value,
            variant: n.variantButton
          }, et({ _: 2 }, [
            n.nextPrevButtons ? {
              name: "default",
              fn: D(() => [
                fs
              ]),
              key: "0"
            } : void 0,
            n.nextPrevButtons ? void 0 : {
              name: "icon",
              fn: D(() => [
                hs
              ]),
              key: "1"
            }
          ]), 1032, ["circle", "disabled", "variant"])
        ]),
        _("div", ms, [
          n.pageInput ? (i(), c("input", {
            key: 0,
            type: "number",
            value: e.page,
            disabled: !e.totalItems && e.loading || s.value < 1 && !e.loading,
            onFocusin: v[5] || (v[5] = (y) => y.target.select()),
            onChange: g,
            max: s.value,
            classes: "text-center",
            style: { width: "55px" }
          }, null, 40, gs)) : (i(), c("span", {
            key: 1,
            class: h(r(o).currentPageText)
          }, B(e.page), 3)),
          e.totalItems ? (i(), c("span", ys, "of " + B(s.value), 1)) : S("", !0)
        ]),
        _("div", null, [
          V($e, {
            ghost: "",
            circle: !n.nextPrevButtons,
            onClick: v[6] || (v[6] = (y) => d.value ? "" : m(e.page + 1)),
            disabled: d.value,
            variant: n.variantButton
          }, et({ _: 2 }, [
            n.nextPrevButtons ? {
              name: "default",
              fn: D(() => [
                vs
              ]),
              key: "0"
            } : void 0,
            n.nextPrevButtons ? void 0 : {
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
  setup(n) {
    const t = n;
    G();
    const e = I("Gallery", t.variant, t.classes);
    return (o, s) => (i(), c("div", {
      class: h({
        gallery: !0,
        [r(e).wrapper]: !0,
        "gallery-fade-edges": t.edges
      })
    }, [
      _("div", {
        class: h({
          "gallery-strip": !0,
          "inline-block": !0,
          [r(e).itemList]: !0,
          "gallery-strip-animation": t.animation
        })
      }, [
        t.images.length > 0 ? (i(), c(L, { key: 0 }, [
          (i(!0), c(L, null, W(t.images, (l, a) => (i(), c("div", {
            class: h(["gallery-item", "inline-block", r(e).item]),
            key: a
          }, [
            _("img", {
              class: h(r(e).image),
              src: l
            }, null, 10, ws)
          ], 2))), 128)),
          t.animation && t.repeat > 1 ? (i(!0), c(L, { key: 0 }, W(Array.from({ length: t.repeat }), (l, a) => (i(), c(L, { key: a }, [
            (i(!0), c(L, null, W(t.images, (u, d) => (i(), c("div", {
              class: h(["gallery-item", "inline-block", r(e).item]),
              key: d
            }, [
              _("img", {
                class: h(r(e).image),
                src: u
              }, null, 10, _s)
            ], 2))), 128))
          ], 64))), 128)) : S("", !0)
        ], 64)) : (i(), c(L, { key: 1 }, [
          (i(!0), c(L, null, W(o.$slots, (l, a) => (i(), c("div", {
            class: h(["gallery-item", "inline-block", r(e).item]),
            key: a
          }, [
            C(o.$slots, a, {}, void 0, !0)
          ], 2))), 128)),
          t.animation && t.repeat > 1 ? (i(!0), c(L, { key: 0 }, W(Array.from({ length: t.repeat }), (l, a) => (i(), c(L, { key: a }, [
            (i(!0), c(L, null, W(o.$slots, (u, d) => (i(), c("div", {
              class: h(["gallery-item", "inline-block", r(e).item]),
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
  setup(n) {
    const t = n, e = I("List", t.variant, t.classes);
    return j("IS_LIST_GROUP", 1), j("IS_LIST_VARIANT", t.variant), (o, s) => (i(), c("div", {
      class: h({
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
  setup(n) {
    const t = n, e = G(), o = F("IS_LIST_GROUP", 0), s = F("IS_LIST_VARIANT", null), l = U(t.variant);
    o && s && !t.variant && (l.value = s);
    const a = N(() => {
      let d = "";
      const g = {
        target: null,
        href: null,
        to: null
      };
      return t.disabled ? d = "div" : (t.to ? (d = "RouterLink", g.to = t.to) : (d = t.href && "a" || t.tag || "div", d === "a" && t.href && (g.href = t.href)), t.target && (g.target = t.target)), { tag: d, data: g };
    }), u = I("List", l.value, t.classes);
    return (d, g) => (i(), M(Ie(a.value.tag), Ge(a.value.data, {
      class: {
        "flex items-center": !0,
        "list--item": t.hover && !t.disabled && !t.divider && !t.preventMenuExit,
        "h-[1px]": t.divider,
        [r(u).listItem]: !t.divider,
        [r(u).listItemSize]: !t.divider,
        [r(u).listItemTheme]: !t.disabled || !t.divider,
        [r(u).listItemHover]: t.hover && !t.disabled && !t.divider,
        [r(u).listItemDisabled]: t.disabled && !t.divider,
        [r(u).listItemDivider]: t.divider
      }
    }), {
      default: D(() => {
        var w;
        return [
          (w = r(e)) != null && w.before ? (i(), c("div", {
            key: 0,
            class: h([r(u).listItemBefore])
          }, [
            C(d.$slots, "before")
          ], 2)) : S("", !0),
          _("div", $s, [
            C(d.$slots, "default")
          ]),
          r(e).after ? (i(), c("div", {
            key: 1,
            class: h([r(u).listItemAfter])
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
  setup(n) {
    const t = n, e = I("LoaderProgress", t.variant, t.classes);
    return (o, s) => (i(), c("div", {
      class: h(r(e).wrapper)
    }, [
      t.label ? (i(), c("div", {
        key: 0,
        class: h(r(e).outsideLabelWrapper)
      }, [
        _("span", {
          class: h(r(e).outsideLabelText)
        }, B(n.label), 3),
        _("span", {
          class: h(r(e).outsideLabelProgress)
        }, B(t.progress) + "%", 3)
      ], 2)) : S("", !0),
      _("div", {
        class: h([r(e).bar, r(e).size, r(e).barColor])
      }, [
        _("div", {
          class: h([r(e).progressBar, r(e).size, r(e).progressBarColor, r(e).insideLabelText]),
          style: te({ width: t.progress + "%" })
        }, [
          t.progress > 0 && t.showProgress && !t.label ? (i(), c(L, { key: 0 }, [
            z(B(t.progress) + "% ", 1)
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
  setup(n, { emit: t }) {
    const e = n, s = G().default, l = I("Tabs", e.variant, e.classes), a = (m, p = !0, v = []) => (m.forEach((y) => {
      if (y !== null) {
        if (typeof y != "object") {
          (typeof y == "string" || typeof y == "number") && v.push(z(String(y)));
          return;
        }
        if (Array.isArray(y)) {
          a(y, p, v);
          return;
        }
        if (y.type === L) {
          if (y.children === null)
            return;
          Array.isArray(y.children) && a(y.children, p, v);
        } else
          y.type !== ln && (y.children && y.children.title && (y.slotContent = y.children.title()), v.push(y));
      }
    }), v), u = N(() => s ? a(s()).filter((m) => m.type.__GALAXY_TAB__) : []), d = N({
      get: () => e.modelValue,
      set: (m) => t("update:modelValue", m)
    }), g = (m) => {
      d.value = m;
    };
    function w(m, p) {
      var v, y;
      ((v = p.props) == null ? void 0 : v.disabled) === "" || ((y = p.props) == null ? void 0 : y.disabled) === !0 || g(m);
    }
    return j("IS_TABS", 1), j("IS_TABS_VARIANT", e.variant), j("TAB_ACTIVE", d), j("TAB_CHANGE", g), (m, p) => (i(), c("div", {
      class: h(r(l).wrapper)
    }, [
      _("div", {
        class: h(r(l).tabListWrapper)
      }, [
        _("ul", {
          class: h(r(l).tabList)
        }, [
          (i(!0), c(L, null, W(u.value, (v, y) => {
            var $, x, b;
            return i(), c("li", {
              key: y,
              onClick: de((k) => {
                var f;
                return w((f = v.props) == null ? void 0 : f.name, v);
              }, ["prevent"]),
              class: h({
                [r(l).tabItem]: !0,
                [r(l).tabItemDisabled]: (($ = v.props) == null ? void 0 : $.disabled) === "" || ((x = v.props) == null ? void 0 : x.disabled) === !0,
                [r(l).tabItemSelected]: d.value === ((b = v.props) == null ? void 0 : b.name)
              })
            }, [
              _("div", {
                class: h(r(l).tabItemTitle)
              }, [
                v.slotContent ? (i(!0), c(L, { key: 0 }, W(v.slotContent, (k, f) => (i(), M(Ie(k), { key: f }))), 128)) : (i(), c(L, { key: 1 }, [
                  z(B(v.props.title), 1)
                ], 64))
              ], 2)
            ], 10, ks);
          }), 128))
        ], 2)
      ], 2),
      _("div", Ge(m.$attrs, {
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
  setup(n) {
    const t = n;
    G();
    const e = F("IS_TABS_VARIANT", null), o = F("IS_TABS", 0);
    o || console.warn("[Galaxy Vue] <Tab> should only be used within <Tabs>");
    const s = U(t.variant);
    o && e && !t.variant && (s.value = e);
    const l = I("Tabs", s.value, t.classes), a = F("TAB_ACTIVE", null);
    return (u, d) => (i(), c("div", Ss, [
      V(ye, {
        name: t.transition,
        mode: "out-in"
      }, {
        default: D(() => [
          (i(), c("div", { key: r(a) }, [
            t.preload === !0 ? He((i(), c("div", {
              key: 0,
              class: h(r(l).tabContent)
            }, [
              C(u.$slots, "default", {}, void 0, !0)
            ], 2)), [
              [Fe, r(a) === t.name]
            ]) : t.preload === !1 ? (i(), c(L, { key: 1 }, [
              r(a) === t.name ? (i(), c("div", {
                key: 0,
                class: h(r(l).tabContent)
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
}, Ls = /* @__PURE__ */ _("path", {
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
  setup(n) {
    const t = n, e = G(), o = I("Label", t.variant, t.classes);
    return (s, l) => {
      var a;
      return i(), c("label", {
        for: t.id,
        class: h({
          [r(o).base]: !0,
          [r(o).theme]: !0,
          [r(o).disabled]: t.disabled,
          [r(o).errors]: t.errors,
          ...t.classes
        })
      }, [
        (a = r(e)) != null && a.icon ? (i(), c("span", As, [
          C(s.$slots, "icon")
        ])) : S("", !0),
        _("span", null, [
          C(s.$slots, "default", {}, () => [
            t.title ? (i(), c("span", Ps, B(t.title), 1)) : S("", !0)
          ])
        ]),
        t.required ? (i(), c("span", Os, "*")) : S("", !0),
        t.tooltip || r(e)["tooltip-content"] ? (i(), M(ss, {
          key: 2,
          placement: t.tooltipPosition
        }, {
          content: D(() => [
            _("span", null, [
              C(s.$slots, "tooltip-content", {}, () => [
                z(B(n.tooltip), 1)
              ])
            ])
          ]),
          default: D(() => [
            _("span", {
              class: h([r(o).icon, "ml-1 cursor-pointer flex items-center"])
            }, [
              C(s.$slots, "tooltip-icon", {}, () => [
                (i(), c("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 20 20",
                  fill: "currentColor",
                  class: h(r(o).iconSize)
                }, Is, 2))
              ])
            ], 2)
          ]),
          _: 3
        }, 8, ["placement"])) : S("", !0)
      ], 10, Bs);
    };
  }
}, Be = (n, t) => n === t, Ds = (n, t, e = void 0) => {
  if (t == null)
    return e;
  const o = (l) => String.prototype.split.call(t, l).filter(Boolean).reduce((a, u) => a != null ? a[u] : a, n), s = o(/[,[\]]+?/) || o(/[,[\].]+?/);
  return s === void 0 || s === n ? e : s;
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
  setup(n, { emit: t }) {
    const e = n, o = G(), s = ve(), l = I("Checkbox", e.variant, e.classes), a = (g) => {
      const w = e.modelValue;
      let m = u;
      m = Be(w, e.trueValue) ? e.falseValue : e.trueValue, u.value = m, t("change", g);
    }, u = N({
      get: () => e.modelValue,
      set: (g) => {
        t("update:modelValue", g);
      }
    }), d = N(() => !!Be(e.modelValue || e.value, e.trueValue));
    return (g, w) => {
      var m;
      return i(), c("div", {
        class: h(r(l).wrapper)
      }, [
        _("div", {
          class: h(r(l).inputWrapper)
        }, [
          _("input", {
            id: r(s),
            type: e.radio ? "radio" : "checkbox",
            class: h({
              [r(l).inputCheck]: !e.radio,
              [r(l).inputRadio]: e.radio,
              [r(l).inputDisabled]: e.disabled
            }),
            checked: d.value,
            value: e.modelValue,
            disabled: e.disabled,
            onChange: w[0] || (w[0] = (p) => a(p))
          }, null, 42, Ns)
        ], 2),
        e.label || ((m = r(o)) == null ? void 0 : m.default) ? (i(), c("div", {
          key: 0,
          class: h(r(l).labelWrapper)
        }, [
          C(g.$slots, "default", {
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
  setup(n, { emit: t }) {
    const e = n;
    G();
    const o = ve(), s = I("Toggle", e.variant, e.classes), l = (w) => {
      const m = e.modelValue;
      let p = d;
      p = Be(m, e.trueValue) ? e.falseValue : e.trueValue, d.value = p, t("change", w);
    }, a = (w) => {
      w.preventDefault(), u("toggle");
    }, u = (w) => {
      e.disabled || (w === "after" && e.falseLabel ? d.value = e.trueValue : w === "before" && e.falseLabel ? d.value = e.falseValue : d.value = Be(e.modelValue, e.trueValue) ? e.falseValue : e.trueValue);
    }, d = N({
      get: () => e.modelValue,
      set: (w) => {
        t("update:modelValue", w);
      }
    }), g = N(() => !!Be(e.modelValue, e.trueValue));
    return (w, m) => (i(), c("div", {
      class: h(r(s).wrapper)
    }, [
      e.falseLabel ? (i(), c("div", {
        key: 0,
        class: h(r(s).labelFalseWrapper)
      }, [
        V(Le, {
          onClick: m[0] || (m[0] = (p) => u("before")),
          disabled: e.disabled,
          classes: {
            "cursor-pointer": !0,
            [r(s).switchFalseLabelColorChecked]: g.value
          }
        }, {
          default: D(() => [
            z(B(e.falseLabel), 1)
          ]),
          _: 1
        }, 8, ["disabled", "classes"])
      ], 2)) : S("", !0),
      e.disabled ? (i(), c("div", zs, [
        _("div", {
          class: h(`${e.inset ? "w-12" : "w-10"} ${e.inset ? "h-6" : "h-4"} ${g.value ? r(s).switchDisabledColorChecked : r(s).switchDisabledColor} rounded-full shadow-inner`)
        }, null, 2),
        _("div", {
          class: h(`absolute w-6 h-6 bg-white border-2 ${g.value ? `${r(s).switchDisabledColorBorderChecked} translate-x-full` : "translate-x-0"} rounded-full ${e.inset ? "left-0 top-0" : "-left-1 -top-1"} transition`)
        }, null, 2)
      ])) : (i(), c("div", {
        key: 1,
        class: h(r(s).inputWrapper),
        onClick: a
      }, [
        _("input", {
          id: r(o),
          class: "sr-only",
          checked: g.value,
          value: e.modelValue,
          disabled: e.disabled,
          onChange: m[1] || (m[1] = (p) => l(p))
        }, null, 40, Es),
        _("div", null, [
          _("div", {
            class: h(`${e.inset ? "w-12" : "w-10"} ${e.inset ? "h-6" : "h-4"} ${g.value ? r(s).switchColorChecked : r(s).switchColor} rounded-full shadow-inner`),
            id: "switch-background"
          }, null, 2),
          _("div", {
            class: h(`absolute w-6 h-6 bg-white border-2 ${g.value ? `${r(s).switchColorBorderChecked} translate-x-full` : `${r(s).switchColorBorder} translate-x-0`} rounded-full ${e.inset ? "left-0 top-0" : "-left-1 -top-1"} transition`)
          }, null, 2)
        ])
      ], 2)),
      e.label ? (i(), c("div", {
        key: 3,
        class: h(r(s).labelWrapper),
        onClick: m[2] || (m[2] = (p) => u("after"))
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
            z(B(e.label), 1)
          ]),
          _: 1
        }, 8, ["required", "disabled", "tooltip", "variant", "variantTooltip", "classes"])
      ], 2)) : S("", !0)
    ], 2));
  }
}, Vs = /* @__PURE__ */ _("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  class: "w-5 h-5"
}, [
  /* @__PURE__ */ _("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
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
  setup(n, { emit: t }) {
    const e = n, o = G(), s = I("InputText", e.variant, e.classes), l = e.type === "number" ? "text" : e.type, a = ve(), u = U(null), d = (f) => {
      if (f == null || f === "")
        return null;
      if (e.type === "number" && !e.decimals)
        f = f.toString().replace(/\D/g, ""), f = Number(f);
      else if (e.type === "number" && e.decimals) {
        f = f.toString().replace(/[^0-9.-]/g, "");
        var T = f.split(".");
        if (T.length > 2)
          f = T[0] + "." + T.slice(1).join("");
        else if (T.length === 2 && f.endsWith("."))
          f = f;
        else {
          f = Number(f);
          var A = Math.pow(10, e.decimals);
          f = Math.round(f * A) / A;
        }
      }
      return typeof e.formatter == "function" && (f = e.formatter(f)), e.type === "number" && (e.max && f > e.max && (f = e.max), e.min && f < e.min && (f = e.min)), f;
    }, g = (f) => {
    }, w = (f) => {
      f.target.value = d(f.target.value), b.value = f.target.value, t("keyup", f), f.key === "Enter" && t("enter", f);
    }, m = (f) => {
      t("keydown", f);
    }, p = (f) => {
      e.selectAll && (u == null ? void 0 : u.value) && u.value.select(), t("focusin", f);
    }, v = (f) => {
      t("focusout", f);
    }, y = () => {
      b.value = null, t("cleared");
    }, $ = (f) => {
      b.value = d(f.target.value), f.target.value = b.value, t("blur", f);
    }, x = N(() => {
      if (e.customClasses)
        return e.customClasses;
      {
        let f = [s.input];
        return o != null && o.prepend && (f = f.concat([s.inputPrepend])), o != null && o.icon && (f = f.concat(["pl-9"])), e.clearable && (f = f.concat(["pr-8"])), e.readonly && (f = f.concat([s.readonly])), e.disabled && (f = f.concat([s.disabled])), e.errors && (f = f.concat([s.errors])), !e.errors && !e.disabled && (f = f.concat([s.inputTheme])), f;
      }
    }), b = N({
      get: () => d(e.modelValue !== null ? e.modelValue : e.value),
      set: (f) => {
        t("update:modelValue", f);
      }
    }), k = N(() => e.name === "input" ? e.name + "-" + a : e.name);
    return (f, T) => {
      var A, R;
      return i(), c("div", {
        class: h(r(s).root)
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
        _("div", {
          class: h(["flex", { "mt-1": e.label }])
        }, [
          (A = r(o)) != null && A.prepend ? (i(), c("div", {
            key: 0,
            class: h(r(s).prepend)
          }, [
            C(f.$slots, "prepend")
          ], 2)) : S("", !0),
          _("div", {
            class: h(r(s).inputWrapper)
          }, [
            (R = r(o)) != null && R.icon ? (i(), c("div", {
              key: 0,
              class: h(r(s).icon)
            }, [
              C(f.$slots, "icon")
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
              onInput: T[0] || (T[0] = (O) => g()),
              onKeyup: T[1] || (T[1] = (O) => w(O)),
              onKeydown: T[2] || (T[2] = (O) => m(O)),
              onFocusout: T[3] || (T[3] = (O) => v(O)),
              onFocus: T[4] || (T[4] = (O) => p(O)),
              onBlur: T[5] || (T[5] = (O) => $(O)),
              min: e.min,
              max: e.max,
              step: e.step,
              class: h(x.value),
              style: te((e.width ? `width: ${e.width}px;` : "") + e.customStyle)
            }, null, 40, ["id", "type", "name", "placeholder", "readonly", "disabled", "required", "maxlength", "autocomplete", "autofill", "pattern", "value", "min", "max", "step", "class", "style"])),
            e.clearable && b.value && !e.readonly && !e.disabled ? (i(), c("div", {
              key: 1,
              class: h(r(s).clearable),
              onClick: y
            }, [
              C(f.$slots, "clearable", {}, () => [
                Vs
              ])
            ], 2)) : S("", !0)
          ], 2)
        ], 2),
        e.characterCounter ? (i(), c("div", {
          key: 1,
          class: h(r(s).counter)
        }, [
          C(f.$slots, "counter", {
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
}, js = /* @__PURE__ */ _("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  class: "w-5 h-5"
}, [
  /* @__PURE__ */ _("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
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
  setup(n, { emit: t }) {
    const e = n;
    G();
    const o = I("InputArea", e.variant, e.classes), s = ve(), l = U(null), a = (x) => x == null || x === "" ? null : x, u = (x) => {
    }, d = (x) => {
      x.target.value = a(x.target.value), $.value = x.target.value, t("keyup", x), x.key === "Enter" && t("enter", x);
    }, g = (x) => {
      t("keydown", x);
    }, w = (x) => {
      e.selectAll && (l == null ? void 0 : l.value) && l.value.select(), t("focusin", x);
    }, m = (x) => {
      t("focusout", x);
    }, p = () => {
      $.value = null, t("cleared");
    }, v = (x) => {
      $.value = a(x.target.value), x.target.value = $.value, t("blur", x);
    }, y = N(() => {
      if (e.customClasses)
        return e.customClasses;
      {
        let x = [o.input];
        return e.noresize && (x = x.concat(["resize-none"])), e.clearable && (x = x.concat(["pr-8"])), e.readonly && (x = x.concat([o.readonly])), e.disabled && (x = x.concat([o.disabled])), e.errors && (x = x.concat([o.errors])), !e.errors && !e.disabled && (x = x.concat([o.inputTheme])), x;
      }
    }), $ = N({
      get: () => a(e.modelValue !== null ? e.modelValue : e.value),
      set: (x) => {
        t("update:modelValue", x);
      }
    });
    return (x, b) => (i(), c("div", {
      class: h(r(o).root)
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
      _("div", {
        class: h(["flex", { "mt-1": e.label }])
      }, [
        _("div", {
          class: h(r(o).inputWrapper)
        }, [
          (i(), M(Ie(Fs), {
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
            onInput: b[0] || (b[0] = (k) => u()),
            onKeyup: b[1] || (b[1] = (k) => d(k)),
            onKeydown: b[2] || (b[2] = (k) => g(k)),
            onFocusout: b[3] || (b[3] = (k) => m(k)),
            onFocus: b[4] || (b[4] = (k) => w(k)),
            onBlur: b[5] || (b[5] = (k) => v(k)),
            min: e.min,
            max: e.max,
            step: e.step,
            class: h(y.value),
            style: te((e.width ? `width: ${e.width}px;` : "") + e.customStyle)
          }, null, 40, ["id", "name", "placeholder", "readonly", "disabled", "required", "maxlength", "autocomplete", "autofill", "pattern", "value", "min", "max", "step", "class", "style"])),
          e.clearable && $.value && !e.readonly && !e.disabled ? (i(), c("div", {
            key: 0,
            class: h(r(o).clearable),
            onClick: p
          }, [
            C(x.$slots, "clearable", {}, () => [
              js
            ])
          ], 2)) : S("", !0)
        ], 2)
      ], 2),
      e.characterCounter ? (i(), c("div", {
        key: 1,
        class: h(r(o).counter)
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
}, Ys = /* @__PURE__ */ _("path", {
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
}, Js = /* @__PURE__ */ _("path", {
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
}, tr = /* @__PURE__ */ _("path", {
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
  setup(n, { emit: t }) {
    const e = n, o = I("Table", e.variant, e.classes), s = U(null), l = We({
      selection: [],
      selectAllOption: null,
      selectedAll: !1
    }), a = N(() => e.headers.filter(($) => !($ != null && $.hide))), u = N(() => e.loading ? e.loadingText : e.noDataText), d = ($, x, b = void 0) => Ds($, x, b), g = () => {
      l.selectedAll ? w() : m();
    }, w = () => {
      l.selection = [...Array(e.rows.length).keys()];
    }, m = () => {
      l.selection = [];
    }, p = ($, x, b) => {
      if (!e.selectRow || x === "selectRow") {
        let k = [...l.selection];
        if (l.selectAllOption = null, !k.includes($))
          e.selectOne === !0 ? k = [$] : k.push($);
        else {
          const f = k.indexOf($);
          f !== -1 && k.splice(f, 1);
        }
        l.selection = k;
      }
    }, v = ($, x, b) => {
      if (e.selectRow && p($, "selectRow"), e.select) {
        if (b.target.nodeName === "INPUT" || b.target.nodeName === "TD" && b.target.cellIndex === 0)
          return;
        t("click-row", x);
      } else
        t("click-row", x);
    }, y = ($, x) => {
      if ($.sorting === !0) {
        let b = null;
        $.sorted === "ASC" ? b = "DESC" : $.sorted === "DESC" ? b = "ASC" : $.sorted ? b = null : $.sortDefault ? b = $.sortDefault : b = "ASC";
        let k = [];
        e.headers.forEach((f) => {
          f.value === $.value ? k.push({
            ...f,
            sorted: b
          }) : k.push({
            ...f,
            sorted: null
          });
        }), t("sort", $, b, [...k]);
      }
    };
    return je(() => l.selection, ($) => {
      let x = [];
      l.selection.length ? ($.forEach((b) => {
        const k = e.rows[b];
        k && (e.selectionField && k[e.selectionField] ? x.push(k[e.selectionField]) : x.push(e.rows[b]));
      }), l.selection.length === e.rows.length ? l.selectedAll = !0 : l.selectedAll = !1) : l.selectedAll = !1, t("selection", x, [...$]);
    }), ($, x) => (i(), c("div", {
      class: h(r(o).wrapper)
    }, [
      _("table", {
        class: h(r(o).table)
      }, [
        !e.hideHeader && a.value.length ? (i(), c("thead", {
          key: 0,
          class: h(r(o).thead)
        }, [
          _("tr", {
            class: h(r(o).theadRow)
          }, [
            n.select ? (i(), c("th", {
              key: 0,
              scope: "col",
              class: h(r(o).theadColumnSelectAll)
            }, [
              C($.$slots, "select-all", {}, () => [
                _("div", Gs, [
                  e.selectOne ? S("", !0) : (i(), M(Lt, {
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
            (i(!0), c(L, null, W(a.value, (b, k) => (i(), c("th", {
              scope: "col",
              key: k,
              class: h({
                [r(o).theadColumn]: !0,
                [r(o).theadColumnSorting]: b.sorting,
                [r(o).theadColumnSorted]: b.sorted,
                "!text-left": !b.align,
                "!text-right": b.align === "right",
                "!text-center": b.align === "center"
              }),
              style: te(`${b.minWidth ? `min-width: ${b.minWidth}` : ""} ${b.width ? `width: ${b.width};` : ""}`),
              onClick: (f) => y(b)
            }, [
              C($.$slots, `header.${b.value}`, { header: b }, () => [
                _("div", Us, [
                  _("div", {
                    class: h(["grow", r(o).theadColumnLabel])
                  }, B(b.label), 3),
                  b.sorting ? (i(), c("div", {
                    key: 0,
                    class: h(["sort-icon", {
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
          _("tr", sr, [
            _("th", rr, [
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
          class: h(r(o).tbody)
        }, [
          (i(!0), c(L, null, W(e.rows, (b, k) => (i(), c("tr", {
            key: k,
            class: h([
              r(o).tbodyRow,
              b.class ? b.class : "",
              l.selection.includes(k) ? r(o).tbodyRowSelected : "",
              e.selectRow || e.rowCursor ? "cursor-pointer" : ""
            ]),
            onClick: (f) => v(k, $.item, f)
          }, [
            n.select ? (i(), c("td", {
              key: 0,
              class: h(["relative", r(o).tbodyColumnSelect])
            }, [
              C($.$slots, "column.select", {}, () => [
                e.selectBorder && l.selection.includes(k) ? (i(), c("div", {
                  key: 0,
                  class: h(["absolute inset-y-0 left-0 w-0.5", r(o).tbodyColumnSelectBorder])
                }, null, 2)) : S("", !0),
                _("div", ar, [
                  V(Lt, {
                    value: l.selection.includes(k),
                    onChange: (f) => p(k, "selectRow"),
                    onClick: x[1] || (x[1] = de(() => {
                    }, ["stop"])),
                    disabled: e.loading,
                    variantCheckbox: e.variantCheckbox
                  }, null, 8, ["value", "onChange", "disabled", "variantCheckbox"])
                ])
              ])
            ], 2)) : S("", !0),
            (i(!0), c(L, null, W(a.value, (f) => (i(), c("td", {
              key: f.value,
              class: h([
                r(o).tbodyColumn,
                f.align ? "" : "text-left",
                f.align === "right" ? "text-right" : "",
                f.align === "center" ? "text-center" : "",
                b.class ? b.class : "",
                f.class ? f.class : ""
              ]),
              style: te(`${f.minWidth ? `min-width: ${f.minWidth};` : ""} ${f.width ? `width: ${f.width};` : ""}`)
            }, [
              C($.$slots, `column.${f.value}`, {
                column: b,
                index: k
              }, () => [
                d(b, f.value) !== null && d(b, f.value) !== "" && d(b, f.value) ? (i(), c("span", ir, [
                  typeof f.formatValue == "function" ? (i(), c("span", dr, B(f.formatValue(d(b, f.value))), 1)) : (i(), c("span", ur, B(d(b, f.value)), 1))
                ])) : f.hasOwnProperty("empty") ? (i(), c("span", {
                  key: 1,
                  class: h(r(o).emptyCellText)
                }, B(f.empty), 3)) : e.emptyCellText ? (i(), c("span", {
                  key: 2,
                  class: h(r(o).emptyCellText)
                }, B(e.emptyCellText), 3)) : S("", !0)
              ])
            ], 6))), 128))
          ], 10, lr))), 128))
        ], 2)) : (i(), c("tbody", {
          key: 3,
          ref_key: "tablebody",
          ref: s
        }, [
          _("tr", null, [
            _("td", {
              colspan: "100%",
              class: h(r(o).noData)
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
  setup(n, { emit: t }) {
    const e = n, o = I("Backdrop", e.variant, e.classes), s = () => {
      e.persist === !1 && t("close");
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
          class: h({
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
  setup(n, { emit: t }) {
    const e = n;
    G();
    const o = I("Modal", e.variant, e.classes), s = We({
      relativeOffsetPx: null,
      localShowing: !1,
      id: ve()
    }), l = () => {
      t("close");
    }, a = () => {
      if (s.relativeOffsetPx = null, e.offsetDiv) {
        let m = 0, p = document.getElementById(e.offsetDiv);
        p && (m = p.offsetWidth);
        let v = document.getElementById("app");
        if (v) {
          let y = +(v.offsetWidth - m);
          y && (s.relativeOffsetPx = y);
        }
      }
    }, u = N(() => e.offset || s.relativeOffsetPx ? `width: calc(100% - 2em ${e.offset || s.relativeOffsetPx ? `- ${e.offset || s.relativeOffsetPx}px` : ""});` : e.centerOverflow || e.type === "full" ? "width: calc(100%);" : "width: auto;"), d = N(() => {
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
    const w = () => {
      document.querySelectorAll(".backdrop").length === 1 && (document.body.style.overflow = "auto");
    };
    return je(() => e.show, (m) => {
      m === !0 ? (s.localShowing = !0, document.body.style.overflow = "hidden") : (w(), setTimeout(() => {
        s.localShowing = !1, t("end");
      }, 300));
    }), It(() => {
      a();
    }), it(() => {
      w();
    }), (m, p) => He((i(), c("div", {
      class: h({
        [r(o).base]: !0,
        "overflow-y-scroll": e.scroll,
        "p-4": e.type === "full"
      })
    }, [
      _("div", {
        class: h({
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
              class: h({
                [r(o).content]: !0,
                [r(o).contentTheme]: !0,
                containerClasses: !0,
                "h-screen": e.type === "full"
              }),
              style: te(`${e.maxWidth ? `max-width:${e.maxWidth}px;` : ""} min-width: 300px; ${e.scroll ? "margin-top: 1em; margin-bottom: 1em;" : `max-height: calc(100vh - ${e.type === "full" ? "2em" : "0em"});`} ${u.value} ${d.value};`)
            }, [
              _("div", hr, [
                C(m.$slots, "default", {}, void 0, !0)
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
  setup(n, { emit: t }) {
    const e = n;
    G();
    const o = I("Drawer", e.variant, e.classes), s = We({
      localShowing: !1,
      id: ve()
    }), l = () => {
      t("close");
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
    }), (d, g) => (i(), c("div", {
      class: h([r(o).base])
    }, [
      V(ye, {
        name: `slide-${n.position}`,
        appear: ""
      }, {
        default: D(() => [
          s.localShowing ? (i(), c("div", {
            key: 0,
            class: h([a.value, r(o).content, r(o).contentTheme, "p-4"]),
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
