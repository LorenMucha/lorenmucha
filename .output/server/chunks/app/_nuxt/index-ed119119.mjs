import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import __nuxt_component_0$2 from './Icon-9f059384.mjs';
import { s as siteMetaInfo, p as projects, l as languages, f as frameWorks, t as tools, _ as _imports_0, a as _imports_1, b as _imports_2 } from './mail-dc6ef5b1.mjs';
import { useSSRContext, mergeProps, defineComponent, ref, createElementBlock } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'devalue';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'ufo';
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
import '../server.mjs';
import 'unctx';
import 'vue-router';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'cookie-es';
import 'is-https';
import '@intlify/core-base';
import './config-fbd68cd5.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';

const _imports_3 = "" + buildAssetsURL("author.349613fe.jpg");
const _sfc_main$3 = {
  data: () => {
    return {
      siteMetadata: siteMetaInfo
    };
  },
  methods: {
    scrollTo(id) {
      const element = document.getElementById(id);
      element.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Icon = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "section h-screen flex justify-center items-center mt-10" }, _attrs))} data-v-fb618825><div class="container grid md:grid-cols-3 grid-flow-col" data-v-fb618825><div class="col-span-2" data-v-fb618825><div class="pl-5 items-center" data-v-fb618825><p class="text-3xl text-gray-500" data-v-fb618825>${ssrInterpolate(_ctx.$t("header.greet"))} `);
  _push(ssrRenderComponent(_component_Icon, { name: "twemoji:clapping-hands" }, null, _parent));
  _push(`</p><h1 class="text-bold text-5xl" data-v-fb618825>${_ctx.$t("header.role")}</h1><div class="xl:mr-10 lg:mr-10 sm:mr-0" data-v-fb618825><hr class="my-1 h-1 bg-blue-500 rounded border-0 md:my-6 dark:bg-gray-700" data-v-fb618825><p class="mt-8 mb-4 dark:bg-gray-800 dark:text-blue-200 text-justify text-xl" data-v-fb618825>${_ctx.$t("header.about")}</p></div><div class="flex mb-3 space-x-4 w-fit" data-v-fb618825><a class="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer"${ssrRenderAttr("href", _ctx.siteMetadata.github)} data-v-fb618825><span class="sr-only" data-v-fb618825>github</span><img class="profile-icon"${ssrRenderAttr("src", _imports_0)} data-v-fb618825></a><a class="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer"${ssrRenderAttr("href", _ctx.siteMetadata.linkedin)} data-v-fb618825><span class="sr-only" data-v-fb618825>Linkedin</span><img class="profile-icon"${ssrRenderAttr("src", _imports_1)} data-v-fb618825></a><a class="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer"${ssrRenderAttr("href", `mailto:${_ctx.siteMetadata.email}`)} data-v-fb618825><span class="sr-only" data-v-fb618825>mail</span><img class="profile-icon"${ssrRenderAttr("src", _imports_2)} data-v-fb618825></a></div></div><div class="hidden rounded-md shadow-sm mt-5 sm:inline-flex space-x-4 px-4" role="group" data-v-fb618825><button data-v-fb618825> Projekte </button><button data-v-fb618825> Skills &amp; Tools </button></div></div><div data-v-fb618825><img${ssrRenderAttr("src", _imports_3)} loading="lazy" alt="me" class="shadow-xl md:h-60 md:w-60 h-40 w-40 rounded-full hidden sm:block object-cover" data-v-fb618825></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AuthorIntro.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-fb618825"]]);
const __nuxt_component_0 = /* @__PURE__ */ defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  // eslint-disable-next-line vue/require-prop-types
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _sfc_main$2 = {
  name: "Work",
  data() {
    return {
      id: "work",
      workList: projects
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: $data.id,
    ref: $data.id,
    class: "section"
  }, _attrs))}><div class="header"><div class="max-w-3xl mx-auto"><h2>${ssrInterpolate(_ctx.$t("work.header"))}</h2></div></div><div class="mx-auto content-center"><div class="grid grid-col-3 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 place-items-center">`);
  _push(ssrRenderComponent(_component_ClientOnly, { placeholder: "Loading..." }, {}, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Work.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  data() {
    return {
      id: "expertise",
      skillList: languages,
      frameWorks,
      languages,
      tools
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Icon = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: $data.id,
    class: "section sm:h-screen"
  }, _attrs))} data-v-1444f8e9><div class="header" data-v-1444f8e9><div class="max-w-3xl mx-auto py-5" data-v-1444f8e9><h2 data-v-1444f8e9> Skills &amp; Tools </h2></div><div class="container" data-v-1444f8e9><h3 data-v-1444f8e9>${ssrInterpolate(_ctx.$t("tools.languages"))}</h3><ul class="flex flex-wrap items-center justify-center skill-list load-hidden v-scroll-reveal" data-v-1444f8e9><!--[-->`);
  ssrRenderList($data.languages, (item, index2) => {
    _push(`<li class="p-4 rounded-lg flex items-end justify-center m-2"${ssrRenderAttr("title", item.title)} data-v-1444f8e9><div data-v-1444f8e9>`);
    _push(ssrRenderComponent(_component_Icon, {
      key: item.title,
      name: item.component,
      size: "3rem",
      class: "w-auto mx-auto h-auto block"
    }, null, _parent));
    _push(`<span class="font-bold block mt-3 mb-1" data-v-1444f8e9>${ssrInterpolate(item.title)}</span></div></li>`);
  });
  _push(`<!--]--></ul></div><div class="container" data-v-1444f8e9><h3 data-v-1444f8e9>Frameworks</h3><ul class="flex flex-wrap items-center justify-center skill-list load-hidden v-scroll-reveal" data-v-1444f8e9><!--[-->`);
  ssrRenderList($data.frameWorks, (item, index2) => {
    _push(`<li class="p-4 rounded-lg flex items-end justify-center m-2"${ssrRenderAttr("title", item.title)} data-v-1444f8e9><div data-v-1444f8e9>`);
    _push(ssrRenderComponent(_component_Icon, {
      key: item.title,
      name: item.component,
      size: "3rem",
      class: "w-auto mx-auto h-auto block"
    }, null, _parent));
    _push(`<span class="font-bold block mt-3 mb-1" data-v-1444f8e9>${ssrInterpolate(item.title)}</span></div></li>`);
  });
  _push(`<!--]--></ul></div><div class="container" data-v-1444f8e9><h3 data-v-1444f8e9>Tools</h3><ul class="flex flex-wrap items-center justify-center skill-list load-hidden v-scroll-reveal" data-v-1444f8e9><!--[-->`);
  ssrRenderList($data.tools, (item, index2) => {
    _push(`<li class="p-4 rounded-lg flex items-end justify-center m-2"${ssrRenderAttr("title", item.title)} data-v-1444f8e9><div data-v-1444f8e9>`);
    _push(ssrRenderComponent(_component_Icon, {
      key: item.title,
      name: item.component,
      size: "3rem",
      class: "w-auto mx-auto h-auto block"
    }, null, _parent));
    _push(`<span class="font-bold block mt-3 mb-1" data-v-1444f8e9>${ssrInterpolate(item.title)}</span></div></li>`);
  });
  _push(`<!--]--></ul></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Expertise.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-1444f8e9"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AuthorIntro = __nuxt_component_0$1;
  const _component_Work = __nuxt_component_1;
  const _component_Expertise = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "dark:bg-gray-900" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_AuthorIntro, null, null, _parent));
  _push(ssrRenderComponent(_component_Work, null, null, _parent));
  _push(ssrRenderComponent(_component_Expertise, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-ed119119.mjs.map
