import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { A as Autoplay, E as EffectCreative, S as Scrollbar, N as Navigation, a as Swiper2, b as SwiperSlide } from './entry-styles-3.mjs-1aee3127.mjs';
import { useSSRContext, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
import 'ssr-window';

const _sfc_main$1 = {
  name: "PageSlider",
  props: { inputData: Object }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Swiper = Swiper2;
  const _component_SwiperSlide = SwiperSlide;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-60c72363>`);
  _push(ssrRenderComponent(_component_Swiper, {
    class: "mt-10",
    loop: true,
    navigation: true,
    modules: [
      "SwiperAutoplay" in _ctx ? _ctx.SwiperAutoplay : unref(Autoplay),
      "SwiperEffectCreative" in _ctx ? _ctx.SwiperEffectCreative : unref(EffectCreative),
      "SwiperScrollbar" in _ctx ? _ctx.SwiperScrollbar : unref(Scrollbar),
      "SwiperNavigation" in _ctx ? _ctx.SwiperNavigation : unref(Navigation)
    ],
    autoplay: {
      delay: 8e3,
      disableOnInteraction: true
    }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($props.inputData, (image, idx) => {
          _push2(ssrRenderComponent(_component_SwiperSlide, { key: idx }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="center" data-v-60c72363${_scopeId2}><div data-v-60c72363${_scopeId2}>${image.img}</div><p class="mt-5 text-base" data-v-60c72363${_scopeId2}>${ssrInterpolate(image.text)}</p></div>`);
              } else {
                return [
                  createVNode("div", { class: "center" }, [
                    createVNode("div", {
                      innerHTML: image.img
                    }, null, 8, ["innerHTML"]),
                    createVNode("p", { class: "mt-5 text-base" }, toDisplayString(image.text), 1)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($props.inputData, (image, idx) => {
            return openBlock(), createBlock(_component_SwiperSlide, { key: idx }, {
              default: withCtx(() => [
                createVNode("div", { class: "center" }, [
                  createVNode("div", {
                    innerHTML: image.img
                  }, null, 8, ["innerHTML"]),
                  createVNode("p", { class: "mt-5 text-base" }, toDisplayString(image.text), 1)
                ])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PageSwiper.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-60c72363"]]);
const _sfc_main = {
  name: "ClimbingDiary",
  components: { PageSwiper: __nuxt_component_0 },
  setup() {
    const slides = [
      {
        img: '<img class="mx-auto w-96 rounded-t-lg object-cover object-scale-down" src="/images/climbing_diary/barchart.png"/>',
        text: "Statistische Auswertung deiner Erfolge in Balken Diagramm"
      },
      {
        img: '<img class="mx-auto w-96 rounded-t-lg object-cover object-scale-down" src="/images/climbing_diary/tabelle.png"/>',
        text: "Statistische Auswertung deiner Erfolge in einer Tabellarischen Ansicht"
      },
      {
        img: '<img class="mx-auto w-96 rounded-t-lg object-cover object-scale-down" src="/images/climbing_diary/linechart.png"/>',
        text: "Statistische Auswertung deiner Erfolge in einer Linearen Ansicht"
      },
      { img: '<img class="mx-auto w-96 rounded-t-lg object-cover object-scale-down" src="/images/climbing_diary/routen.png"/>' },
      { img: '<img class="mx-auto w-96 rounded-t-lg object-cover object-scale-down" src="/images/climbing_diary/projects.png"/>' },
      { img: '<img class="mx-auto w-96 rounded-t-lg object-cover object-scale-down" src="/images/climbing_diary/filter.png"/>' }
    ];
    return { slides };
  }
};
const _imports_0 = "" + buildAssetsURL("climbing_diary_launcher.db66aebd.png");
const _imports_1 = "" + buildAssetsURL("google_play.2c96f7a8.png");
const _imports_2 = "" + buildAssetsURL("climbing.98efd560.png");
const _imports_3 = "" + buildAssetsURL("bouldering.c924e856.png");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PageSwiper = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><section class="bg-slate-100"><div class="section"><div class="inline-flex items-baseline"><h1>Climbing-Diary</h1><img class="h-12 w-12 ml-10"${ssrRenderAttr("src", _imports_0)}></div><div> Sch\xF6ne &amp; umfangreiche Tracking-App deiner Erfolge beim Klettern und Bouldern. </div><button class="btn" href="#" title="Google Play"><img class="h-24 w-48 object-cover"${ssrRenderAttr("src", _imports_1)}></button>`);
  _push(ssrRenderComponent(_component_PageSwiper, { "input-data": $setup.slides }, null, _parent));
  _push(`</div></section><section class="bg-orange-100"><div class="section container"><h2>Umfangreiche Funktionen</h2><div class="grid grid-cols-2"><div class="container"><img class="mx-auto h-24 rounded-lg object-cover"${ssrRenderAttr("src", _imports_2)}><p>Klettern</p></div><div class="container"><img class="mx-auto h-24 rounded-lg object-cover"${ssrRenderAttr("src", _imports_3)}><p>Bouldern</p></div></div></div></section><section class="bg-red-100"><div class="section"><h2>Deine Daten deine Kontrolle</h2></div>&gt; </section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ClimbingDiary.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ClimbingDiary = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ClimbingDiary as default };
//# sourceMappingURL=ClimbingDiary-ced45018.mjs.map
