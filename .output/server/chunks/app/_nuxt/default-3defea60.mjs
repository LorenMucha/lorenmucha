import { h as defineStore } from '../server.mjs';
import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { s as siteMetaInfo, _ as _imports_0, a as _imports_1, b as _imports_2 } from './mail-dc6ef5b1.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import 'ufo';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'cookie-es';
import 'is-https';
import '@intlify/core-base';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'ohash';
import 'unstorage';
import 'unstorage/drivers/overlay';
import 'unstorage/drivers/memory';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'unified';
import 'mdast-util-to-string';
import 'micromark/lib/preprocess.js';
import 'micromark/lib/postprocess.js';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'remark-emoji';
import 'rehype-slug';
import 'remark-squeeze-paragraphs';
import 'rehype-external-links';
import 'remark-gfm';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'remark-mdc';
import 'remark-parse';
import 'remark-rehype';
import 'mdast-util-to-hast';
import 'detab';
import 'unist-builder';
import 'mdurl';
import 'slugify';
import 'unist-util-position';
import 'unist-util-visit';
import 'shiki-es';
import 'unenv/runtime/npm/consola';
import 'http-graceful-shutdown';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';

const useLanguageStore = defineStore("languages", {
  state: () => ({ language: "de" }),
  getters: {
    get: (state) => {
      return state.language;
    },
    opposite: (state) => {
      return state.language === "de" ? "gb" : "de";
    }
  },
  actions: {
    change() {
      this.language = this.opposite;
    }
  }
});
const _sfc_main$2 = {
  name: "AppHeader",
  setup() {
    const languages = useLanguageStore();
    return { languages };
  },
  data() {
    return {
      isActive: false,
      menuItems: [
        // TODO: translate
        { link: "/files/CV_DE.pdf", name: "header.cv", target: "_blank" },
        { link: "mailto:lorenmucha@gmail.com", name: "header.contact", target: "_blank" }
      ]
    };
  },
  computed: {
    flag() {
      return `fi fi-${this.languages.opposite}`;
    }
  },
  methods: {
    show_mobile_menu() {
      this.isActive = !this.isActive;
    },
    switch_language() {
      this.languages.change();
      this.$i18n.setLocale(this.languages.get);
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<nav${ssrRenderAttrs(mergeProps({ class: "bg-white shadow-lg fixed w-screen top-0 z-10" }, _attrs))}><div class="max-w-6xl mx-auto px-4"><div class="flex justify-between"><div><a class="flex items-center py-4 px-2"><span class="font-semibold md:text-lg text-gray-800">Loren Mucha</span></a></div><div class="flex space-x-7"><!--[-->`);
  ssrRenderList($data.menuItems, (value, key) => {
    _push(`<div class="hidden md:flex items-center space-x-1"><a${ssrRenderAttr("href", value.link)}${ssrRenderAttr("target", value.target)} class="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">${ssrInterpolate(_ctx.$t(value.name))}</a></div>`);
  });
  _push(`<!--]--><div class="hidden md:flex items-center"><button><span class="${ssrRenderClass($options.flag)}"></span></button></div></div><div class="md:hidden flex items-center"><button class="mobile-menu-button focus:outline-none"><i class="bx bx-menu text-3xl mt-1"></i></button></div><div class="md:hidden flex items-center"><button class="outline-none mobile-menu-button"><svg class="w-6 h-6 text-gray-500 hover:text-blue-500" x-show="!showMenu" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 6h16M4 12h16M4 18h16"></path></svg></button></div></div></div><div class="${ssrRenderClass([[$data.isActive ? "active" : "hidden"], "mobile-menu"])}"><ul><!--[-->`);
  ssrRenderList($data.menuItems, (value, key) => {
    _push(`<li><a${ssrRenderAttr("href", value.link)}${ssrRenderAttr("target", value.target)} class="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300">${ssrInterpolate(_ctx.$t(value.name))}</a></li>`);
  });
  _push(`<!--]--><li><a class="block text-sm px-2 py-4"><span class="${ssrRenderClass($options.flag)}"></span></a></li></ul></div></nav>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  name: "AppFooter",
  data: () => {
    return {
      siteMetadata: siteMetaInfo
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<footer${ssrRenderAttrs(_attrs)}><div class="flex flex-col items-center mt-16"><div class="flex mb-3 space-x-4 w-fit"><a class="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer"${ssrRenderAttr("href", _ctx.siteMetadata.github)}><span class="sr-only">github</span><img class="w-8 h-8"${ssrRenderAttr("src", _imports_0)}></a><a class="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer"${ssrRenderAttr("href", _ctx.siteMetadata.linkedin)}><span class="sr-only">Linkedin</span><img class="w-8 h-8"${ssrRenderAttr("src", _imports_1)}></a><a class="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer"${ssrRenderAttr("href", `mailto:${_ctx.siteMetadata.email}`)}><span class="sr-only">mail</span><img class="w-8 h-8"${ssrRenderAttr("src", _imports_2)}></a></div><div class="flex px-5 sm:mb-2 sm:space-x-2 space-x-0 text-sm text-gray-500 dark:text-gray-400"><div>Copyright \xA9 ${ssrInterpolate(( new Date()).getFullYear())}</div></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_app_header = __nuxt_component_0;
  const _component_app_footer = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_app_header, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_app_footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-3defea60.mjs.map
