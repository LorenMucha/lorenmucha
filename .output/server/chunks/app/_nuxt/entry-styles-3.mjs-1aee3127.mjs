import { getWindow, getDocument } from 'ssr-window';
import { ref, onUpdated, provide, watch, nextTick as nextTick$1, h, computed } from 'vue';

const swiper_min = '@font-face{font-family:swiper-icons;font-style:normal;font-weight:400;src:url("data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA")}:root{--swiper-theme-color:#007aff}.swiper,swiper-container{display:block;list-style:none;margin-left:auto;margin-right:auto;overflow:hidden;padding:0;position:relative;z-index:1}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{box-sizing:content-box;display:flex;height:100%;position:relative;transition-property:transform;transition-timing-function:ease;transition-timing-function:var(--swiper-wrapper-transition-timing-function,initial);width:100%;z-index:1}.swiper-android .swiper-slide,.swiper-wrapper{transform:translateZ(0)}.swiper-horizontal{touch-action:pan-y}.swiper-vertical{touch-action:pan-x}.swiper-slide,swiper-slide{display:block;flex-shrink:0;height:100%;position:relative;transition-property:transform;width:100%}.swiper-slide-invisible-blank{visibility:hidden}.swiper-autoheight,.swiper-autoheight .swiper-slide{height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden .swiper-slide{backface-visibility:hidden;transform:translateZ(0)}.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d{perspective:1200px}.swiper-3d .swiper-cube-shadow,.swiper-3d .swiper-slide,.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top{transform-style:preserve-3d}.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top{height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%;z-index:10}.swiper-3d .swiper-slide-shadow{background:rgba(0,0,0,.15)}.swiper-3d .swiper-slide-shadow-left{background-image:linear-gradient(270deg,rgba(0,0,0,.5),transparent)}.swiper-3d .swiper-slide-shadow-right{background-image:linear-gradient(90deg,rgba(0,0,0,.5),transparent)}.swiper-3d .swiper-slide-shadow-top{background-image:linear-gradient(0deg,rgba(0,0,0,.5),transparent)}.swiper-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(180deg,rgba(0,0,0,.5),transparent)}.swiper-css-mode>.swiper-wrapper{-ms-overflow-style:none;overflow:auto;scrollbar-width:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-horizontal.swiper-css-mode>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-vertical.swiper-css-mode>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-css-mode.swiper-free-mode>.swiper-wrapper{scroll-snap-type:none}.swiper-css-mode.swiper-free-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:none}.swiper-centered>.swiper-wrapper:before{content:"";flex-shrink:0;order:9999}.swiper-centered>.swiper-wrapper>.swiper-slide{scroll-snap-align:center center;scroll-snap-stop:always}.swiper-centered.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{-webkit-margin-start:var(--swiper-centered-offset-before);margin-inline-start:var(--swiper-centered-offset-before)}.swiper-centered.swiper-horizontal>.swiper-wrapper:before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-centered.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{-webkit-margin-before:var(--swiper-centered-offset-before);margin-block-start:var(--swiper-centered-offset-before)}.swiper-centered.swiper-vertical>.swiper-wrapper:before{height:var(--swiper-centered-offset-after);min-width:1px;width:100%}.swiper-lazy-preloader{border:4px solid #007aff;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top:4px solid transparent;box-sizing:border-box;height:42px;left:50%;margin-left:-21px;margin-top:-21px;position:absolute;top:50%;transform-origin:50%;width:42px;z-index:10}.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader,.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader,swiper-container:not(.swiper-watch-progress) .swiper-lazy-preloader{animation:swiper-preloader-spin 1s linear infinite}.swiper-lazy-preloader-white{--swiper-preloader-color:#fff}.swiper-lazy-preloader-black{--swiper-preloader-color:#000}@keyframes swiper-preloader-spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}';
const a11y_min = ".swiper .swiper-notification,swiper-container .swiper-notification{left:0;opacity:0;pointer-events:none;position:absolute;top:0;z-index:-1000}";
const effectCards_min = ".swiper-cards{overflow:visible}.swiper-cards .swiper-slide{backface-visibility:hidden;overflow:hidden;transform-origin:center bottom}";
const effectCreative_min = ".swiper-creative .swiper-slide{backface-visibility:hidden;overflow:hidden;transition-property:transform,opacity,height}";
const effectCube_min = '.swiper-cube{overflow:visible}.swiper-cube .swiper-slide{backface-visibility:hidden;height:100%;pointer-events:none;transform-origin:0 0;visibility:hidden;width:100%;z-index:1}.swiper-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-cube.swiper-rtl .swiper-slide{transform-origin:100% 0}.swiper-cube .swiper-slide-active,.swiper-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-cube .swiper-slide-active,.swiper-cube .swiper-slide-next,.swiper-cube .swiper-slide-next+.swiper-slide,.swiper-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-cube .swiper-slide-shadow-bottom,.swiper-cube .swiper-slide-shadow-left,.swiper-cube .swiper-slide-shadow-right,.swiper-cube .swiper-slide-shadow-top{backface-visibility:hidden;z-index:0}.swiper-cube .swiper-cube-shadow{bottom:0;height:100%;left:0;opacity:.6;position:absolute;width:100%;z-index:0}.swiper-cube .swiper-cube-shadow:before{background:#000;bottom:0;content:"";filter:blur(50px);left:0;position:absolute;right:0;top:0}';
const effectFade_min = ".swiper-fade.swiper-free-mode .swiper-slide{transition-timing-function:ease-out}.swiper-fade .swiper-slide{pointer-events:none;transition-property:opacity}.swiper-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-fade .swiper-slide-active,.swiper-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}";
const effectFlip_min = ".swiper-flip{overflow:visible}.swiper-flip .swiper-slide{backface-visibility:hidden;pointer-events:none;z-index:1}.swiper-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-flip .swiper-slide-active,.swiper-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-flip .swiper-slide-shadow-bottom,.swiper-flip .swiper-slide-shadow-left,.swiper-flip .swiper-slide-shadow-right,.swiper-flip .swiper-slide-shadow-top{backface-visibility:hidden;z-index:0}";
const freeMode_min = ".swiper-free-mode>.swiper-wrapper{margin:0 auto;transition-timing-function:ease-out}";
const grid_min = ".swiper-grid>.swiper-wrapper{flex-wrap:wrap}.swiper-grid-column>.swiper-wrapper{flex-direction:column;flex-wrap:wrap}";
const navigation_min = ':root{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{align-items:center;color:var(--swiper-navigation-color,var(--swiper-theme-color));cursor:pointer;display:flex;height:44px;height:var(--swiper-navigation-size);justify-content:center;margin-top:-22px;margin-top:calc(0px - var(--swiper-navigation-size)/2);position:absolute;top:50%;top:var(--swiper-navigation-top-offset,50%);width:27px;width:calc(var(--swiper-navigation-size)/44*27);z-index:10}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{cursor:auto;opacity:.35;pointer-events:none}.swiper-button-next.swiper-button-hidden,.swiper-button-prev.swiper-button-hidden{cursor:auto;opacity:0;pointer-events:none}.swiper-navigation-disabled .swiper-button-next,.swiper-navigation-disabled .swiper-button-prev{display:none!important}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:44px;font-size:var(--swiper-navigation-size);font-variant:normal;letter-spacing:0;line-height:1;text-transform:none!important}.swiper-button-prev,.swiper-rtl .swiper-button-next{left:10px;left:var(--swiper-navigation-sides-offset,10px);right:auto}.swiper-button-prev:after,.swiper-rtl .swiper-button-next:after{content:"prev"}.swiper-button-next,.swiper-rtl .swiper-button-prev{left:auto;right:10px;right:var(--swiper-navigation-sides-offset,10px)}.swiper-button-next:after,.swiper-rtl .swiper-button-prev:after{content:"next"}.swiper-button-lock{display:none}';
const pagination_min = ".swiper-pagination{position:absolute;text-align:center;transform:translateZ(0);transition:opacity .3s;z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:8px;bottom:var(--swiper-pagination-bottom,8px);left:0;top:auto;top:var(--swiper-pagination-top,auto);width:100%}.swiper-pagination-bullets-dynamic{font-size:0;overflow:hidden}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{position:relative;transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{background:#000;background:var(--swiper-pagination-bullet-inactive-color,#000);border-radius:50%;border-radius:var(--swiper-pagination-bullet-border-radius,50%);display:inline-block;height:8px;height:var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,8px));opacity:.2;opacity:var(--swiper-pagination-bullet-inactive-opacity,.2);width:8px;width:var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,8px))}button.swiper-pagination-bullet{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;box-shadow:none;margin:0;padding:0}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{background:var(--swiper-pagination-color,var(--swiper-theme-color));opacity:1;opacity:var(--swiper-pagination-bullet-opacity,1)}.swiper-pagination-vertical.swiper-pagination-bullets,.swiper-vertical>.swiper-pagination-bullets{left:auto;left:var(--swiper-pagination-left,auto);right:8px;right:var(--swiper-pagination-right,8px);top:50%;transform:translate3d(0,-50%,0)}.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{display:block;margin:6px 0;margin:var(--swiper-pagination-bullet-vertical-gap,6px) 0}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:transform .2s,top .2s}.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px;margin:0 var(--swiper-pagination-bullet-horizontal-gap,4px)}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:transform .2s,left .2s}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,:host(.swiper-horizontal.swiper-rtl) .swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:transform .2s,right .2s}.swiper-pagination-fraction{color:inherit;color:var(--swiper-pagination-fraction-color,inherit)}.swiper-pagination-progressbar{background:rgba(0,0,0,.25);background:var(--swiper-pagination-progressbar-bg-color,rgba(0,0,0,.25));position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));height:100%;left:0;position:absolute;top:0;transform:scale(0);transform-origin:left top;width:100%}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{height:4px;height:var(--swiper-pagination-progressbar-size,4px);left:0;top:0;width:100%}.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-vertical>.swiper-pagination-progressbar{height:100%;left:0;top:0;width:4px;width:var(--swiper-pagination-progressbar-size,4px)}.swiper-pagination-lock{display:none}";
const scrollbar_min = ".swiper-scrollbar{background:rgba(0,0,0,.1);background:var(--swiper-scrollbar-bg-color,rgba(0,0,0,.1));border-radius:10px;border-radius:var(--swiper-scrollbar-border-radius,10px);position:relative;-ms-touch-action:none}.swiper-scrollbar-disabled>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-disabled{display:none!important}.swiper-horizontal>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-horizontal{bottom:4px;bottom:var(--swiper-scrollbar-bottom,4px);height:4px;height:var(--swiper-scrollbar-size,4px);left:1%;left:var(--swiper-scrollbar-sides-offset,1%);position:absolute;top:auto;top:var(--swiper-scrollbar-top,auto);width:98%;width:calc(100% - var(--swiper-scrollbar-sides-offset,1%)*2);z-index:50}.swiper-scrollbar.swiper-scrollbar-vertical,.swiper-vertical>.swiper-scrollbar{height:98%;height:calc(100% - var(--swiper-scrollbar-sides-offset,1%)*2);left:auto;left:var(--swiper-scrollbar-left,auto);position:absolute;right:4px;right:var(--swiper-scrollbar-right,4px);top:1%;top:var(--swiper-scrollbar-sides-offset,1%);width:4px;width:var(--swiper-scrollbar-size,4px);z-index:50}.swiper-scrollbar-drag{background:rgba(0,0,0,.5);background:var(--swiper-scrollbar-drag-bg-color,rgba(0,0,0,.5));border-radius:10px;border-radius:var(--swiper-scrollbar-border-radius,10px);height:100%;left:0;position:relative;top:0;width:100%}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}";
const virtual_min = '.swiper-virtual .swiper-slide{-webkit-backface-visibility:hidden;transform:translateZ(0)}.swiper-virtual.swiper-css-mode .swiper-wrapper:after{content:"";left:0;pointer-events:none;position:absolute;top:0}.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper:after{height:1px;width:var(--swiper-virtual-size)}.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper:after{height:var(--swiper-virtual-size);width:1px}';
const zoom_min = ".swiper-zoom-container{align-items:center;display:flex;height:100%;justify-content:center;text-align:center;width:100%}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-height:100%;max-width:100%;-o-object-fit:contain;object-fit:contain}.swiper-slide-zoomed{cursor:move;touch-action:none}";
function deleteProps(obj) {
  const object = obj;
  Object.keys(object).forEach((key) => {
    try {
      object[key] = null;
    } catch (e) {
    }
    try {
      delete object[key];
    } catch (e) {
    }
  });
}
function nextTick(callback, delay = 0) {
  return setTimeout(callback, delay);
}
function now() {
  return Date.now();
}
function getComputedStyle$1(el) {
  const window2 = getWindow();
  let style;
  if (window2.getComputedStyle) {
    style = window2.getComputedStyle(el, null);
  }
  if (!style && el.currentStyle) {
    style = el.currentStyle;
  }
  if (!style) {
    style = el.style;
  }
  return style;
}
function getTranslate(el, axis = "x") {
  const window2 = getWindow();
  let matrix;
  let curTransform;
  let transformMatrix;
  const curStyle = getComputedStyle$1(el);
  if (window2.WebKitCSSMatrix) {
    curTransform = curStyle.transform || curStyle.webkitTransform;
    if (curTransform.split(",").length > 6) {
      curTransform = curTransform.split(", ").map((a) => a.replace(",", ".")).join(", ");
    }
    transformMatrix = new window2.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
  } else {
    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
    matrix = transformMatrix.toString().split(",");
  }
  if (axis === "x") {
    if (window2.WebKitCSSMatrix)
      curTransform = transformMatrix.m41;
    else if (matrix.length === 16)
      curTransform = parseFloat(matrix[12]);
    else
      curTransform = parseFloat(matrix[4]);
  }
  if (axis === "y") {
    if (window2.WebKitCSSMatrix)
      curTransform = transformMatrix.m42;
    else if (matrix.length === 16)
      curTransform = parseFloat(matrix[13]);
    else
      curTransform = parseFloat(matrix[5]);
  }
  return curTransform || 0;
}
function isObject$1(o) {
  return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
}
function isNode(node) {
  return node && (node.nodeType === 1 || node.nodeType === 11);
}
function extend$1(...args) {
  const to = Object(args[0]);
  const noExtend = ["__proto__", "constructor", "prototype"];
  for (let i = 1; i < args.length; i += 1) {
    const nextSource = args[i];
    if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
      const keysArray = Object.keys(Object(nextSource)).filter((key) => noExtend.indexOf(key) < 0);
      for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        const nextKey = keysArray[nextIndex];
        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
        if (desc !== void 0 && desc.enumerable) {
          if (isObject$1(to[nextKey]) && isObject$1(nextSource[nextKey])) {
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend$1(to[nextKey], nextSource[nextKey]);
            }
          } else if (!isObject$1(to[nextKey]) && isObject$1(nextSource[nextKey])) {
            to[nextKey] = {};
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend$1(to[nextKey], nextSource[nextKey]);
            }
          } else {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
  }
  return to;
}
function setCSSProperty(el, varName, varValue) {
  el.style.setProperty(varName, varValue);
}
function animateCSSModeScroll({
  swiper,
  targetPosition,
  side
}) {
  const window2 = getWindow();
  const startPosition = -swiper.translate;
  let startTime = null;
  let time;
  const duration = swiper.params.speed;
  swiper.wrapperEl.style.scrollSnapType = "none";
  window2.cancelAnimationFrame(swiper.cssModeFrameID);
  const dir = targetPosition > startPosition ? "next" : "prev";
  const isOutOfBound = (current, target) => {
    return dir === "next" && current >= target || dir === "prev" && current <= target;
  };
  const animate = () => {
    time = (/* @__PURE__ */ new Date()).getTime();
    if (startTime === null) {
      startTime = time;
    }
    const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
    const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
    let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
    if (isOutOfBound(currentPosition, targetPosition)) {
      currentPosition = targetPosition;
    }
    swiper.wrapperEl.scrollTo({
      [side]: currentPosition
    });
    if (isOutOfBound(currentPosition, targetPosition)) {
      swiper.wrapperEl.style.overflow = "hidden";
      swiper.wrapperEl.style.scrollSnapType = "";
      setTimeout(() => {
        swiper.wrapperEl.style.overflow = "";
        swiper.wrapperEl.scrollTo({
          [side]: currentPosition
        });
      });
      window2.cancelAnimationFrame(swiper.cssModeFrameID);
      return;
    }
    swiper.cssModeFrameID = window2.requestAnimationFrame(animate);
  };
  animate();
}
function getSlideTransformEl(slideEl) {
  return slideEl.querySelector(".swiper-slide-transform") || slideEl.shadowEl && slideEl.shadowEl.querySelector(".swiper-slide-transform") || slideEl;
}
function elementChildren(element, selector = "") {
  return [...element.children].filter((el) => el.matches(selector));
}
function createElement(tag, classes2 = []) {
  const el = document.createElement(tag);
  el.classList.add(...Array.isArray(classes2) ? classes2 : [classes2]);
  return el;
}
function elementOffset(el) {
  const window2 = getWindow();
  const document2 = getDocument();
  const box = el.getBoundingClientRect();
  const body = document2.body;
  const clientTop = el.clientTop || body.clientTop || 0;
  const clientLeft = el.clientLeft || body.clientLeft || 0;
  const scrollTop = el === window2 ? window2.scrollY : el.scrollTop;
  const scrollLeft = el === window2 ? window2.scrollX : el.scrollLeft;
  return {
    top: box.top + scrollTop - clientTop,
    left: box.left + scrollLeft - clientLeft
  };
}
function elementPrevAll(el, selector) {
  const prevEls = [];
  while (el.previousElementSibling) {
    const prev = el.previousElementSibling;
    if (selector) {
      if (prev.matches(selector))
        prevEls.push(prev);
    } else
      prevEls.push(prev);
    el = prev;
  }
  return prevEls;
}
function elementNextAll(el, selector) {
  const nextEls = [];
  while (el.nextElementSibling) {
    const next = el.nextElementSibling;
    if (selector) {
      if (next.matches(selector))
        nextEls.push(next);
    } else
      nextEls.push(next);
    el = next;
  }
  return nextEls;
}
function elementStyle(el, prop) {
  const window2 = getWindow();
  return window2.getComputedStyle(el, null).getPropertyValue(prop);
}
function elementIndex(el) {
  let child = el;
  let i;
  if (child) {
    i = 0;
    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1)
        i += 1;
    }
    return i;
  }
  return void 0;
}
function elementParents(el, selector) {
  const parents = [];
  let parent = el.parentElement;
  while (parent) {
    if (selector) {
      if (parent.matches(selector))
        parents.push(parent);
    } else {
      parents.push(parent);
    }
    parent = parent.parentElement;
  }
  return parents;
}
function elementTransitionEnd(el, callback) {
  function fireCallBack(e) {
    if (e.target !== el)
      return;
    callback.call(el, e);
    el.removeEventListener("transitionend", fireCallBack);
  }
  if (callback) {
    el.addEventListener("transitionend", fireCallBack);
  }
}
function elementOuterSize(el, size, includeMargins) {
  const window2 = getWindow();
  if (includeMargins) {
    return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window2.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window2.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
  }
  return el.offsetWidth;
}
let support;
function calcSupport() {
  const window2 = getWindow();
  const document2 = getDocument();
  return {
    smoothScroll: document2.documentElement && document2.documentElement.style && "scrollBehavior" in document2.documentElement.style,
    touch: !!("ontouchstart" in window2 || window2.DocumentTouch && document2 instanceof window2.DocumentTouch)
  };
}
function getSupport() {
  if (!support) {
    support = calcSupport();
  }
  return support;
}
let deviceCached;
function calcDevice({
  userAgent
} = {}) {
  const support2 = getSupport();
  const window2 = getWindow();
  const platform = window2.navigator.platform;
  const ua = userAgent || window2.navigator.userAgent;
  const device = {
    ios: false,
    android: false
  };
  const screenWidth = window2.screen.width;
  const screenHeight = window2.screen.height;
  const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
  let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
  const windows = platform === "Win32";
  let macos = platform === "MacIntel";
  const iPadScreens = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
  if (!ipad && macos && support2.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
    ipad = ua.match(/(Version)\/([\d.]+)/);
    if (!ipad)
      ipad = [0, 1, "13_0_0"];
    macos = false;
  }
  if (android && !windows) {
    device.os = "android";
    device.android = true;
  }
  if (ipad || iphone || ipod) {
    device.os = "ios";
    device.ios = true;
  }
  return device;
}
function getDevice(overrides = {}) {
  if (!deviceCached) {
    deviceCached = calcDevice(overrides);
  }
  return deviceCached;
}
let browser;
function calcBrowser() {
  const window2 = getWindow();
  let needPerspectiveFix = false;
  function isSafari() {
    const ua = window2.navigator.userAgent.toLowerCase();
    return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
  }
  if (isSafari()) {
    const ua = String(window2.navigator.userAgent);
    if (ua.includes("Version/")) {
      const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num) => Number(num));
      needPerspectiveFix = major < 16 || major === 16 && minor < 2;
    }
  }
  return {
    isSafari: needPerspectiveFix || isSafari(),
    needPerspectiveFix,
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window2.navigator.userAgent)
  };
}
function getBrowser() {
  if (!browser) {
    browser = calcBrowser();
  }
  return browser;
}
function Resize({
  swiper,
  on,
  emit
}) {
  const window2 = getWindow();
  let observer = null;
  let animationFrame = null;
  const resizeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized)
      return;
    emit("beforeResize");
    emit("resize");
  };
  const createObserver = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized)
      return;
    observer = new ResizeObserver((entries) => {
      animationFrame = window2.requestAnimationFrame(() => {
        const {
          width,
          height
        } = swiper;
        let newWidth = width;
        let newHeight = height;
        entries.forEach(({
          contentBoxSize,
          contentRect,
          target
        }) => {
          if (target && target !== swiper.el)
            return;
          newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
          newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
        });
        if (newWidth !== width || newHeight !== height) {
          resizeHandler();
        }
      });
    });
    observer.observe(swiper.el);
  };
  const removeObserver = () => {
    if (animationFrame) {
      window2.cancelAnimationFrame(animationFrame);
    }
    if (observer && observer.unobserve && swiper.el) {
      observer.unobserve(swiper.el);
      observer = null;
    }
  };
  const orientationChangeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized)
      return;
    emit("orientationchange");
  };
  on("init", () => {
    if (swiper.params.resizeObserver && "undefined".ResizeObserver !== "undefined") {
      createObserver();
      return;
    }
    window2.addEventListener("resize", resizeHandler);
    window2.addEventListener("orientationchange", orientationChangeHandler);
  });
  on("destroy", () => {
    removeObserver();
    window2.removeEventListener("resize", resizeHandler);
    window2.removeEventListener("orientationchange", orientationChangeHandler);
  });
}
function Observer({
  swiper,
  extendParams,
  on,
  emit
}) {
  const observers = [];
  const window2 = getWindow();
  const attach = (target, options = {}) => {
    const ObserverFunc = window2.MutationObserver || window2.WebkitMutationObserver;
    const observer = new ObserverFunc((mutations) => {
      if (swiper.__preventObserver__)
        return;
      if (mutations.length === 1) {
        emit("observerUpdate", mutations[0]);
        return;
      }
      const observerUpdate = function observerUpdate2() {
        emit("observerUpdate", mutations[0]);
      };
      if (window2.requestAnimationFrame) {
        window2.requestAnimationFrame(observerUpdate);
      } else {
        window2.setTimeout(observerUpdate, 0);
      }
    });
    observer.observe(target, {
      attributes: typeof options.attributes === "undefined" ? true : options.attributes,
      childList: typeof options.childList === "undefined" ? true : options.childList,
      characterData: typeof options.characterData === "undefined" ? true : options.characterData
    });
    observers.push(observer);
  };
  const init = () => {
    if (!swiper.params.observer)
      return;
    if (swiper.params.observeParents) {
      const containerParents = elementParents(swiper.el);
      for (let i = 0; i < containerParents.length; i += 1) {
        attach(containerParents[i]);
      }
    }
    attach(swiper.el, {
      childList: swiper.params.observeSlideChildren
    });
    attach(swiper.wrapperEl, {
      attributes: false
    });
  };
  const destroy = () => {
    observers.forEach((observer) => {
      observer.disconnect();
    });
    observers.splice(0, observers.length);
  };
  extendParams({
    observer: false,
    observeParents: false,
    observeSlideChildren: false
  });
  on("init", init);
  on("destroy", destroy);
}
const eventsEmitter = {
  on(events2, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed)
      return self;
    if (typeof handler !== "function")
      return self;
    const method = priority ? "unshift" : "push";
    events2.split(" ").forEach((event) => {
      if (!self.eventsListeners[event])
        self.eventsListeners[event] = [];
      self.eventsListeners[event][method](handler);
    });
    return self;
  },
  once(events2, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed)
      return self;
    if (typeof handler !== "function")
      return self;
    function onceHandler(...args) {
      self.off(events2, onceHandler);
      if (onceHandler.__emitterProxy) {
        delete onceHandler.__emitterProxy;
      }
      handler.apply(self, args);
    }
    onceHandler.__emitterProxy = handler;
    return self.on(events2, onceHandler, priority);
  },
  onAny(handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed)
      return self;
    if (typeof handler !== "function")
      return self;
    const method = priority ? "unshift" : "push";
    if (self.eventsAnyListeners.indexOf(handler) < 0) {
      self.eventsAnyListeners[method](handler);
    }
    return self;
  },
  offAny(handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed)
      return self;
    if (!self.eventsAnyListeners)
      return self;
    const index = self.eventsAnyListeners.indexOf(handler);
    if (index >= 0) {
      self.eventsAnyListeners.splice(index, 1);
    }
    return self;
  },
  off(events2, handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed)
      return self;
    if (!self.eventsListeners)
      return self;
    events2.split(" ").forEach((event) => {
      if (typeof handler === "undefined") {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event]) {
        self.eventsListeners[event].forEach((eventHandler2, index) => {
          if (eventHandler2 === handler || eventHandler2.__emitterProxy && eventHandler2.__emitterProxy === handler) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  },
  emit(...args) {
    const self = this;
    if (!self.eventsListeners || self.destroyed)
      return self;
    if (!self.eventsListeners)
      return self;
    let events2;
    let data;
    let context;
    if (typeof args[0] === "string" || Array.isArray(args[0])) {
      events2 = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events2 = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }
    data.unshift(context);
    const eventsArray = Array.isArray(events2) ? events2 : events2.split(" ");
    eventsArray.forEach((event) => {
      if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
        self.eventsAnyListeners.forEach((eventHandler2) => {
          eventHandler2.apply(context, [event, ...data]);
        });
      }
      if (self.eventsListeners && self.eventsListeners[event]) {
        self.eventsListeners[event].forEach((eventHandler2) => {
          eventHandler2.apply(context, data);
        });
      }
    });
    return self;
  }
};
function updateSize() {
  const swiper = this;
  let width;
  let height;
  const el = swiper.el;
  if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) {
    width = swiper.params.width;
  } else {
    width = el.clientWidth;
  }
  if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) {
    height = swiper.params.height;
  } else {
    height = el.clientHeight;
  }
  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
    return;
  }
  width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10);
  height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10);
  if (Number.isNaN(width))
    width = 0;
  if (Number.isNaN(height))
    height = 0;
  Object.assign(swiper, {
    width,
    height,
    size: swiper.isHorizontal() ? width : height
  });
}
function updateSlides() {
  const swiper = this;
  function getDirectionLabel(property) {
    if (swiper.isHorizontal()) {
      return property;
    }
    return {
      "width": "height",
      "margin-top": "margin-left",
      "margin-bottom ": "margin-right",
      "margin-left": "margin-top",
      "margin-right": "margin-bottom",
      "padding-left": "padding-top",
      "padding-right": "padding-bottom",
      "marginRight": "marginBottom"
    }[property];
  }
  function getDirectionPropertyValue(node, label) {
    return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
  }
  const params = swiper.params;
  const {
    wrapperEl,
    slidesEl,
    size: swiperSize,
    rtlTranslate: rtl,
    wrongRTL
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  const slides = elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
  const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  let snapGrid = [];
  const slidesGrid = [];
  const slidesSizesGrid = [];
  let offsetBefore = params.slidesOffsetBefore;
  if (typeof offsetBefore === "function") {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }
  let offsetAfter = params.slidesOffsetAfter;
  if (typeof offsetAfter === "function") {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }
  const previousSnapGridLength = swiper.snapGrid.length;
  const previousSlidesGridLength = swiper.slidesGrid.length;
  let spaceBetween = params.spaceBetween;
  let slidePosition = -offsetBefore;
  let prevSlideSize = 0;
  let index = 0;
  if (typeof swiperSize === "undefined") {
    return;
  }
  if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
  } else if (typeof spaceBetween === "string") {
    spaceBetween = parseFloat(spaceBetween);
  }
  swiper.virtualSize = -spaceBetween;
  slides.forEach((slideEl) => {
    if (rtl) {
      slideEl.style.marginLeft = "";
    } else {
      slideEl.style.marginRight = "";
    }
    slideEl.style.marginBottom = "";
    slideEl.style.marginTop = "";
  });
  if (params.centeredSlides && params.cssMode) {
    setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
    setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
  }
  const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
  if (gridEnabled) {
    swiper.grid.initSlides(slidesLength);
  }
  let slideSize;
  const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key) => {
    return typeof params.breakpoints[key].slidesPerView !== "undefined";
  }).length > 0;
  for (let i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    let slide2;
    if (slides[i])
      slide2 = slides[i];
    if (gridEnabled) {
      swiper.grid.updateSlide(i, slide2, slidesLength, getDirectionLabel);
    }
    if (slides[i] && elementStyle(slide2, "display") === "none")
      continue;
    if (params.slidesPerView === "auto") {
      if (shouldResetSlideSize) {
        slides[i].style[getDirectionLabel("width")] = ``;
      }
      const slideStyles = getComputedStyle(slide2);
      const currentTransform = slide2.style.transform;
      const currentWebKitTransform = slide2.style.webkitTransform;
      if (currentTransform) {
        slide2.style.transform = "none";
      }
      if (currentWebKitTransform) {
        slide2.style.webkitTransform = "none";
      }
      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? elementOuterSize(slide2, "width", true) : elementOuterSize(slide2, "height", true);
      } else {
        const width = getDirectionPropertyValue(slideStyles, "width");
        const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
        const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
        const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
        const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
        const boxSizing = slideStyles.getPropertyValue("box-sizing");
        if (boxSizing && boxSizing === "border-box") {
          slideSize = width + marginLeft + marginRight;
        } else {
          const {
            clientWidth,
            offsetWidth
          } = slide2;
          slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
        }
      }
      if (currentTransform) {
        slide2.style.transform = currentTransform;
      }
      if (currentWebKitTransform) {
        slide2.style.webkitTransform = currentWebKitTransform;
      }
      if (params.roundLengths)
        slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths)
        slideSize = Math.floor(slideSize);
      if (slides[i]) {
        slides[i].style[getDirectionLabel("width")] = `${slideSize}px`;
      }
    }
    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }
    slidesSizesGrid.push(slideSize);
    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i !== 0)
        slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i === 0)
        slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1e3)
        slidePosition = 0;
      if (params.roundLengths)
        slidePosition = Math.floor(slidePosition);
      if (index % params.slidesPerGroup === 0)
        snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths)
        slidePosition = Math.floor(slidePosition);
      if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0)
        snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }
    swiper.virtualSize += slideSize + spaceBetween;
    prevSlideSize = slideSize;
    index += 1;
  }
  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
  if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) {
    wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (params.setWrapperSize) {
    wrapperEl.style[getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (gridEnabled) {
    swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
  }
  if (!params.centeredSlides) {
    const newSlidesGrid = [];
    for (let i = 0; i < snapGrid.length; i += 1) {
      let slidesGridItem = snapGrid[i];
      if (params.roundLengths)
        slidesGridItem = Math.floor(slidesGridItem);
      if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(slidesGridItem);
      }
    }
    snapGrid = newSlidesGrid;
    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }
  if (isVirtual && params.loop) {
    const size = slidesSizesGrid[0] + spaceBetween;
    if (params.slidesPerGroup > 1) {
      const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
      const groupSize = size * params.slidesPerGroup;
      for (let i = 0; i < groups; i += 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
      }
    }
    for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
      if (params.slidesPerGroup === 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + size);
      }
      slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
      swiper.virtualSize += size;
    }
  }
  if (snapGrid.length === 0)
    snapGrid = [0];
  if (spaceBetween !== 0) {
    const key = swiper.isHorizontal() && rtl ? "marginLeft" : getDirectionLabel("marginRight");
    slides.filter((_, slideIndex) => {
      if (!params.cssMode || params.loop)
        return true;
      if (slideIndex === slides.length - 1) {
        return false;
      }
      return true;
    }).forEach((slideEl) => {
      slideEl.style[key] = `${spaceBetween}px`;
    });
  }
  if (params.centeredSlides && params.centeredSlidesBounds) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach((slideSizeValue) => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    const maxSnap = allSlidesSize - swiperSize;
    snapGrid = snapGrid.map((snap) => {
      if (snap <= 0)
        return -offsetBefore;
      if (snap > maxSnap)
        return maxSnap + offsetAfter;
      return snap;
    });
  }
  if (params.centerInsufficientSlides) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach((slideSizeValue) => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    if (allSlidesSize < swiperSize) {
      const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
      snapGrid.forEach((snap, snapIndex) => {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach((snap, snapIndex) => {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }
  Object.assign(swiper, {
    slides,
    snapGrid,
    slidesGrid,
    slidesSizesGrid
  });
  if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
    setCSSProperty(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
    setCSSProperty(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
    const addToSnapGrid = -swiper.snapGrid[0];
    const addToSlidesGrid = -swiper.slidesGrid[0];
    swiper.snapGrid = swiper.snapGrid.map((v) => v + addToSnapGrid);
    swiper.slidesGrid = swiper.slidesGrid.map((v) => v + addToSlidesGrid);
  }
  if (slidesLength !== previousSlidesLength) {
    swiper.emit("slidesLengthChange");
  }
  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow)
      swiper.checkOverflow();
    swiper.emit("snapGridLengthChange");
  }
  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit("slidesGridLengthChange");
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
    const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
    const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
    if (slidesLength <= params.maxBackfaceHiddenSlides) {
      if (!hasClassBackfaceClassAdded)
        swiper.el.classList.add(backFaceHiddenClass);
    } else if (hasClassBackfaceClassAdded) {
      swiper.el.classList.remove(backFaceHiddenClass);
    }
  }
}
function updateAutoHeight(speed) {
  const swiper = this;
  const activeSlides = [];
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  let newHeight = 0;
  let i;
  if (typeof speed === "number") {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  }
  const getSlideByIndex = (index) => {
    if (isVirtual) {
      return swiper.slides[swiper.getSlideIndexByData(index)];
    }
    return swiper.slides[index];
  };
  if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) {
    if (swiper.params.centeredSlides) {
      (swiper.visibleSlides || []).forEach((slide2) => {
        activeSlides.push(slide2);
      });
    } else {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        const index = swiper.activeIndex + i;
        if (index > swiper.slides.length && !isVirtual)
          break;
        activeSlides.push(getSlideByIndex(index));
      }
    }
  } else {
    activeSlides.push(getSlideByIndex(swiper.activeIndex));
  }
  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== "undefined") {
      const height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  }
  if (newHeight || newHeight === 0)
    swiper.wrapperEl.style.height = `${newHeight}px`;
}
function updateSlidesOffset() {
  const swiper = this;
  const slides = swiper.slides;
  const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
  for (let i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
  }
}
function updateSlidesProgress(translate2 = this && this.translate || 0) {
  const swiper = this;
  const params = swiper.params;
  const {
    slides,
    rtlTranslate: rtl,
    snapGrid
  } = swiper;
  if (slides.length === 0)
    return;
  if (typeof slides[0].swiperSlideOffset === "undefined")
    swiper.updateSlidesOffset();
  let offsetCenter = -translate2;
  if (rtl)
    offsetCenter = translate2;
  slides.forEach((slideEl) => {
    slideEl.classList.remove(params.slideVisibleClass);
  });
  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];
  let spaceBetween = params.spaceBetween;
  if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size;
  } else if (typeof spaceBetween === "string") {
    spaceBetween = parseFloat(spaceBetween);
  }
  for (let i = 0; i < slides.length; i += 1) {
    const slide2 = slides[i];
    let slideOffset = slide2.swiperSlideOffset;
    if (params.cssMode && params.centeredSlides) {
      slideOffset -= slides[0].swiperSlideOffset;
    }
    const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + spaceBetween);
    const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + spaceBetween);
    const slideBefore = -(offsetCenter - slideOffset);
    const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
    const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
    if (isVisible) {
      swiper.visibleSlides.push(slide2);
      swiper.visibleSlidesIndexes.push(i);
      slides[i].classList.add(params.slideVisibleClass);
    }
    slide2.progress = rtl ? -slideProgress : slideProgress;
    slide2.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
  }
}
function updateProgress(translate2) {
  const swiper = this;
  if (typeof translate2 === "undefined") {
    const multiplier = swiper.rtlTranslate ? -1 : 1;
    translate2 = swiper && swiper.translate && swiper.translate * multiplier || 0;
  }
  const params = swiper.params;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  let {
    progress,
    isBeginning,
    isEnd,
    progressLoop
  } = swiper;
  const wasBeginning = isBeginning;
  const wasEnd = isEnd;
  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate2 - swiper.minTranslate()) / translatesDiff;
    const isBeginningRounded = Math.abs(translate2 - swiper.minTranslate()) < 1;
    const isEndRounded = Math.abs(translate2 - swiper.maxTranslate()) < 1;
    isBeginning = isBeginningRounded || progress <= 0;
    isEnd = isEndRounded || progress >= 1;
    if (isBeginningRounded)
      progress = 0;
    if (isEndRounded)
      progress = 1;
  }
  if (params.loop) {
    const firstSlideIndex = swiper.getSlideIndexByData(0);
    const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
    const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
    const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
    const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
    const translateAbs = Math.abs(translate2);
    if (translateAbs >= firstSlideTranslate) {
      progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
    } else {
      progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
    }
    if (progressLoop > 1)
      progressLoop -= 1;
  }
  Object.assign(swiper, {
    progress,
    progressLoop,
    isBeginning,
    isEnd
  });
  if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight)
    swiper.updateSlidesProgress(translate2);
  if (isBeginning && !wasBeginning) {
    swiper.emit("reachBeginning toEdge");
  }
  if (isEnd && !wasEnd) {
    swiper.emit("reachEnd toEdge");
  }
  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
    swiper.emit("fromEdge");
  }
  swiper.emit("progress", progress);
}
function updateSlidesClasses() {
  const swiper = this;
  const {
    slides,
    params,
    slidesEl,
    activeIndex
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const getFilteredSlide = (selector) => {
    return elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
  };
  slides.forEach((slideEl) => {
    slideEl.classList.remove(params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
  });
  let activeSlide;
  if (isVirtual) {
    if (params.loop) {
      let slideIndex = activeIndex - swiper.virtual.slidesBefore;
      if (slideIndex < 0)
        slideIndex = swiper.virtual.slides.length + slideIndex;
      if (slideIndex >= swiper.virtual.slides.length)
        slideIndex -= swiper.virtual.slides.length;
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
    } else {
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
    }
  } else {
    activeSlide = slides[activeIndex];
  }
  if (activeSlide) {
    activeSlide.classList.add(params.slideActiveClass);
    let nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
    if (params.loop && !nextSlide) {
      nextSlide = slides[0];
    }
    if (nextSlide) {
      nextSlide.classList.add(params.slideNextClass);
    }
    let prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
    if (params.loop && !prevSlide === 0) {
      prevSlide = slides[slides.length - 1];
    }
    if (prevSlide) {
      prevSlide.classList.add(params.slidePrevClass);
    }
  }
  swiper.emitSlidesClasses();
}
const processLazyPreloader = (swiper, imageEl) => {
  if (!swiper || swiper.destroyed || !swiper.params)
    return;
  const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
  const slideEl = imageEl.closest(slideSelector());
  if (slideEl) {
    const lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
    if (lazyEl)
      lazyEl.remove();
  }
};
const unlazy = (swiper, index) => {
  if (!swiper.slides[index])
    return;
  const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
  if (imageEl)
    imageEl.removeAttribute("loading");
};
const preload = (swiper) => {
  if (!swiper || swiper.destroyed || !swiper.params)
    return;
  let amount = swiper.params.lazyPreloadPrevNext;
  const len = swiper.slides.length;
  if (!len || !amount || amount < 0)
    return;
  amount = Math.min(amount, len);
  const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
  const activeIndex = swiper.activeIndex;
  if (swiper.params.grid && swiper.params.grid.rows > 1) {
    const activeColumn = activeIndex;
    const preloadColumns = [activeColumn - amount];
    preloadColumns.push(...Array.from({
      length: amount
    }).map((_, i) => {
      return activeColumn + slidesPerView + i;
    }));
    swiper.slides.forEach((slideEl, i) => {
      if (preloadColumns.includes(slideEl.column))
        unlazy(swiper, i);
    });
    return;
  }
  const slideIndexLastInView = activeIndex + slidesPerView - 1;
  if (swiper.params.rewind || swiper.params.loop) {
    for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
      const realIndex = (i % len + len) % len;
      if (realIndex < activeIndex || realIndex > slideIndexLastInView)
        unlazy(swiper, realIndex);
    }
  } else {
    for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) {
      if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) {
        unlazy(swiper, i);
      }
    }
  }
};
function getActiveIndexByTranslate(swiper) {
  const {
    slidesGrid,
    params
  } = swiper;
  const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  let activeIndex;
  for (let i = 0; i < slidesGrid.length; i += 1) {
    if (typeof slidesGrid[i + 1] !== "undefined") {
      if (translate2 >= slidesGrid[i] && translate2 < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
        activeIndex = i;
      } else if (translate2 >= slidesGrid[i] && translate2 < slidesGrid[i + 1]) {
        activeIndex = i + 1;
      }
    } else if (translate2 >= slidesGrid[i]) {
      activeIndex = i;
    }
  }
  if (params.normalizeSlideIndex) {
    if (activeIndex < 0 || typeof activeIndex === "undefined")
      activeIndex = 0;
  }
  return activeIndex;
}
function updateActiveIndex(newActiveIndex) {
  const swiper = this;
  const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  const {
    snapGrid,
    params,
    activeIndex: previousIndex,
    realIndex: previousRealIndex,
    snapIndex: previousSnapIndex
  } = swiper;
  let activeIndex = newActiveIndex;
  let snapIndex;
  const getVirtualRealIndex = (aIndex) => {
    let realIndex2 = aIndex - swiper.virtual.slidesBefore;
    if (realIndex2 < 0) {
      realIndex2 = swiper.virtual.slides.length + realIndex2;
    }
    if (realIndex2 >= swiper.virtual.slides.length) {
      realIndex2 -= swiper.virtual.slides.length;
    }
    return realIndex2;
  };
  if (typeof activeIndex === "undefined") {
    activeIndex = getActiveIndexByTranslate(swiper);
  }
  if (snapGrid.indexOf(translate2) >= 0) {
    snapIndex = snapGrid.indexOf(translate2);
  } else {
    const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
  }
  if (snapIndex >= snapGrid.length)
    snapIndex = snapGrid.length - 1;
  if (activeIndex === previousIndex) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit("snapIndexChange");
    }
    if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
      swiper.realIndex = getVirtualRealIndex(activeIndex);
    }
    return;
  }
  let realIndex;
  if (swiper.virtual && params.virtual.enabled && params.loop) {
    realIndex = getVirtualRealIndex(activeIndex);
  } else if (swiper.slides[activeIndex]) {
    realIndex = parseInt(swiper.slides[activeIndex].getAttribute("data-swiper-slide-index") || activeIndex, 10);
  } else {
    realIndex = activeIndex;
  }
  Object.assign(swiper, {
    previousSnapIndex,
    snapIndex,
    previousRealIndex,
    realIndex,
    previousIndex,
    activeIndex
  });
  if (swiper.initialized) {
    preload(swiper);
  }
  swiper.emit("activeIndexChange");
  swiper.emit("snapIndexChange");
  if (previousRealIndex !== realIndex) {
    swiper.emit("realIndexChange");
  }
  if (swiper.initialized || swiper.params.runCallbacksOnInit) {
    swiper.emit("slideChange");
  }
}
function updateClickedSlide(e) {
  const swiper = this;
  const params = swiper.params;
  const slide2 = e.closest(`.${params.slideClass}, swiper-slide`);
  let slideFound = false;
  let slideIndex;
  if (slide2) {
    for (let i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide2) {
        slideFound = true;
        slideIndex = i;
        break;
      }
    }
  }
  if (slide2 && slideFound) {
    swiper.clickedSlide = slide2;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt(slide2.getAttribute("data-swiper-slide-index"), 10);
    } else {
      swiper.clickedIndex = slideIndex;
    }
  } else {
    swiper.clickedSlide = void 0;
    swiper.clickedIndex = void 0;
    return;
  }
  if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}
const update = {
  updateSize,
  updateSlides,
  updateAutoHeight,
  updateSlidesOffset,
  updateSlidesProgress,
  updateProgress,
  updateSlidesClasses,
  updateActiveIndex,
  updateClickedSlide
};
function getSwiperTranslate(axis = this.isHorizontal() ? "x" : "y") {
  const swiper = this;
  const {
    params,
    rtlTranslate: rtl,
    translate: translate2,
    wrapperEl
  } = swiper;
  if (params.virtualTranslate) {
    return rtl ? -translate2 : translate2;
  }
  if (params.cssMode) {
    return translate2;
  }
  let currentTranslate = getTranslate(wrapperEl, axis);
  currentTranslate += swiper.cssOverflowAdjustment();
  if (rtl)
    currentTranslate = -currentTranslate;
  return currentTranslate || 0;
}
function setTranslate(translate2, byController) {
  const swiper = this;
  const {
    rtlTranslate: rtl,
    params,
    wrapperEl,
    progress
  } = swiper;
  let x = 0;
  let y = 0;
  const z = 0;
  if (swiper.isHorizontal()) {
    x = rtl ? -translate2 : translate2;
  } else {
    y = translate2;
  }
  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }
  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y;
  if (params.cssMode) {
    wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y;
  } else if (!params.virtualTranslate) {
    if (swiper.isHorizontal()) {
      x -= swiper.cssOverflowAdjustment();
    } else {
      y -= swiper.cssOverflowAdjustment();
    }
    wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
  }
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate2 - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== progress) {
    swiper.updateProgress(translate2);
  }
  swiper.emit("setTranslate", swiper.translate, byController);
}
function minTranslate() {
  return -this.snapGrid[0];
}
function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function translateTo(translate2 = 0, speed = this.params.speed, runCallbacks = true, translateBounds = true, internal) {
  const swiper = this;
  const {
    params,
    wrapperEl
  } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }
  const minTranslate2 = swiper.minTranslate();
  const maxTranslate2 = swiper.maxTranslate();
  let newTranslate;
  if (translateBounds && translate2 > minTranslate2)
    newTranslate = minTranslate2;
  else if (translateBounds && translate2 < maxTranslate2)
    newTranslate = maxTranslate2;
  else
    newTranslate = translate2;
  swiper.updateProgress(newTranslate);
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    if (speed === 0) {
      wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
    } else {
      if (!swiper.support.smoothScroll) {
        animateCSSModeScroll({
          swiper,
          targetPosition: -newTranslate,
          side: isH ? "left" : "top"
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? "left" : "top"]: -newTranslate,
        behavior: "smooth"
      });
    }
    return true;
  }
  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit("beforeTransitionStart", speed, internal);
      swiper.emit("transitionEnd");
    }
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit("beforeTransitionStart", speed, internal);
      swiper.emit("transitionStart");
    }
    if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onTranslateToWrapperTransitionEnd) {
        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd2(e) {
          if (!swiper || swiper.destroyed)
            return;
          if (e.target !== this)
            return;
          swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
          swiper.onTranslateToWrapperTransitionEnd = null;
          delete swiper.onTranslateToWrapperTransitionEnd;
          if (runCallbacks) {
            swiper.emit("transitionEnd");
          }
        };
      }
      swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
    }
  }
  return true;
}
const translate = {
  getTranslate: getSwiperTranslate,
  setTranslate,
  minTranslate,
  maxTranslate,
  translateTo
};
function setTransition(duration, byController) {
  const swiper = this;
  if (!swiper.params.cssMode) {
    swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
  }
  swiper.emit("setTransition", duration, byController);
}
function transitionEmit({
  swiper,
  runCallbacks,
  direction,
  step
}) {
  const {
    activeIndex,
    previousIndex
  } = swiper;
  let dir = direction;
  if (!dir) {
    if (activeIndex > previousIndex)
      dir = "next";
    else if (activeIndex < previousIndex)
      dir = "prev";
    else
      dir = "reset";
  }
  swiper.emit(`transition${step}`);
  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === "reset") {
      swiper.emit(`slideResetTransition${step}`);
      return;
    }
    swiper.emit(`slideChangeTransition${step}`);
    if (dir === "next") {
      swiper.emit(`slideNextTransition${step}`);
    } else {
      swiper.emit(`slidePrevTransition${step}`);
    }
  }
}
function transitionStart(runCallbacks = true, direction) {
  const swiper = this;
  const {
    params
  } = swiper;
  if (params.cssMode)
    return;
  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: "Start"
  });
}
function transitionEnd(runCallbacks = true, direction) {
  const swiper = this;
  const {
    params
  } = swiper;
  swiper.animating = false;
  if (params.cssMode)
    return;
  swiper.setTransition(0);
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: "End"
  });
}
const transition = {
  setTransition,
  transitionStart,
  transitionEnd
};
function slideTo(index = 0, speed = this.params.speed, runCallbacks = true, internal, initial) {
  if (typeof index === "string") {
    index = parseInt(index, 10);
  }
  const swiper = this;
  let slideIndex = index;
  if (slideIndex < 0)
    slideIndex = 0;
  const {
    params,
    snapGrid,
    slidesGrid,
    previousIndex,
    activeIndex,
    rtlTranslate: rtl,
    wrapperEl,
    enabled
  } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) {
    return false;
  }
  const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
  let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
  if (snapIndex >= snapGrid.length)
    snapIndex = snapGrid.length - 1;
  const translate2 = -snapGrid[snapIndex];
  if (params.normalizeSlideIndex) {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      const normalizedTranslate = -Math.floor(translate2 * 100);
      const normalizedGrid = Math.floor(slidesGrid[i] * 100);
      const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
      if (typeof slidesGrid[i + 1] !== "undefined") {
        if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
          slideIndex = i;
        } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
          slideIndex = i + 1;
        }
      } else if (normalizedTranslate >= normalizedGrid) {
        slideIndex = i;
      }
    }
  }
  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && (rtl ? translate2 > swiper.translate && translate2 > swiper.minTranslate() : translate2 < swiper.translate && translate2 < swiper.minTranslate())) {
      return false;
    }
    if (!swiper.allowSlidePrev && translate2 > swiper.translate && translate2 > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) {
        return false;
      }
    }
  }
  if (slideIndex !== (previousIndex || 0) && runCallbacks) {
    swiper.emit("beforeSlideChangeStart");
  }
  swiper.updateProgress(translate2);
  let direction;
  if (slideIndex > activeIndex)
    direction = "next";
  else if (slideIndex < activeIndex)
    direction = "prev";
  else
    direction = "reset";
  if (rtl && -translate2 === swiper.translate || !rtl && translate2 === swiper.translate) {
    swiper.updateActiveIndex(slideIndex);
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    swiper.updateSlidesClasses();
    if (params.effect !== "slide") {
      swiper.setTranslate(translate2);
    }
    if (direction !== "reset") {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }
    return false;
  }
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    const t = rtl ? translate2 : -translate2;
    if (speed === 0) {
      const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      if (isVirtual) {
        swiper.wrapperEl.style.scrollSnapType = "none";
        swiper._immediateVirtual = true;
      }
      if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
        swiper._cssModeVirtualInitialSet = true;
        requestAnimationFrame(() => {
          wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
        });
      } else {
        wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
      }
      if (isVirtual) {
        requestAnimationFrame(() => {
          swiper.wrapperEl.style.scrollSnapType = "";
          swiper._immediateVirtual = false;
        });
      }
    } else {
      if (!swiper.support.smoothScroll) {
        animateCSSModeScroll({
          swiper,
          targetPosition: t,
          side: isH ? "left" : "top"
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? "left" : "top"]: t,
        behavior: "smooth"
      });
    }
    return true;
  }
  swiper.setTransition(speed);
  swiper.setTranslate(translate2);
  swiper.updateActiveIndex(slideIndex);
  swiper.updateSlidesClasses();
  swiper.emit("beforeTransitionStart", speed, internal);
  swiper.transitionStart(runCallbacks, direction);
  if (speed === 0) {
    swiper.transitionEnd(runCallbacks, direction);
  } else if (!swiper.animating) {
    swiper.animating = true;
    if (!swiper.onSlideToWrapperTransitionEnd) {
      swiper.onSlideToWrapperTransitionEnd = function transitionEnd2(e) {
        if (!swiper || swiper.destroyed)
          return;
        if (e.target !== this)
          return;
        swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
        swiper.onSlideToWrapperTransitionEnd = null;
        delete swiper.onSlideToWrapperTransitionEnd;
        swiper.transitionEnd(runCallbacks, direction);
      };
    }
    swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
  }
  return true;
}
function slideToLoop(index = 0, speed = this.params.speed, runCallbacks = true, internal) {
  if (typeof index === "string") {
    const indexAsNumber = parseInt(index, 10);
    index = indexAsNumber;
  }
  const swiper = this;
  let newIndex = index;
  if (swiper.params.loop) {
    if (swiper.virtual && swiper.params.virtual.enabled) {
      newIndex = newIndex + swiper.virtual.slidesBefore;
    } else {
      newIndex = swiper.getSlideIndexByData(newIndex);
    }
  }
  return swiper.slideTo(newIndex, speed, runCallbacks, internal);
}
function slideNext(speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  const {
    enabled,
    params,
    animating
  } = swiper;
  if (!enabled)
    return swiper;
  let perGroup = params.slidesPerGroup;
  if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
    perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
  }
  const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding)
      return false;
    swiper.loopFix({
      direction: "next"
    });
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
  }
  if (params.rewind && swiper.isEnd) {
    return swiper.slideTo(0, speed, runCallbacks, internal);
  }
  return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}
function slidePrev(speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  const {
    params,
    snapGrid,
    slidesGrid,
    rtlTranslate,
    enabled,
    animating
  } = swiper;
  if (!enabled)
    return swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding)
      return false;
    swiper.loopFix({
      direction: "prev"
    });
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
  }
  const translate2 = rtlTranslate ? swiper.translate : -swiper.translate;
  function normalize(val) {
    if (val < 0)
      return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }
  const normalizedTranslate = normalize(translate2);
  const normalizedSnapGrid = snapGrid.map((val) => normalize(val));
  let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
  if (typeof prevSnap === "undefined" && params.cssMode) {
    let prevSnapIndex;
    snapGrid.forEach((snap, snapIndex) => {
      if (normalizedTranslate >= snap) {
        prevSnapIndex = snapIndex;
      }
    });
    if (typeof prevSnapIndex !== "undefined") {
      prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
    }
  }
  let prevIndex = 0;
  if (typeof prevSnap !== "undefined") {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0)
      prevIndex = swiper.activeIndex - 1;
    if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
      prevIndex = Math.max(prevIndex, 0);
    }
  }
  if (params.rewind && swiper.isBeginning) {
    const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
  }
  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}
function slideReset(speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}
function slideToClosest(speed = this.params.speed, runCallbacks = true, internal, threshold = 0.5) {
  const swiper = this;
  let index = swiper.activeIndex;
  const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
  const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
  const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  if (translate2 >= swiper.snapGrid[snapIndex]) {
    const currentSnap = swiper.snapGrid[snapIndex];
    const nextSnap = swiper.snapGrid[snapIndex + 1];
    if (translate2 - currentSnap > (nextSnap - currentSnap) * threshold) {
      index += swiper.params.slidesPerGroup;
    }
  } else {
    const prevSnap = swiper.snapGrid[snapIndex - 1];
    const currentSnap = swiper.snapGrid[snapIndex];
    if (translate2 - prevSnap <= (currentSnap - prevSnap) * threshold) {
      index -= swiper.params.slidesPerGroup;
    }
  }
  index = Math.max(index, 0);
  index = Math.min(index, swiper.slidesGrid.length - 1);
  return swiper.slideTo(index, speed, runCallbacks, internal);
}
function slideToClickedSlide() {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  let slideToIndex = swiper.clickedIndex;
  let realIndex;
  const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
  if (params.loop) {
    if (swiper.animating)
      return;
    realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
    if (params.centeredSlides) {
      if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
        swiper.loopFix();
        slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
        nextTick(() => {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
      swiper.loopFix();
      slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
      nextTick(() => {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}
const slide = {
  slideTo,
  slideToLoop,
  slideNext,
  slidePrev,
  slideReset,
  slideToClosest,
  slideToClickedSlide
};
function loopCreate(slideRealIndex) {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || swiper.virtual && swiper.params.virtual.enabled)
    return;
  const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
  slides.forEach((el, index) => {
    el.setAttribute("data-swiper-slide-index", index);
  });
  swiper.loopFix({
    slideRealIndex,
    direction: params.centeredSlides ? void 0 : "next"
  });
}
function loopFix({
  slideRealIndex,
  slideTo: slideTo2 = true,
  direction,
  setTranslate: setTranslate2,
  activeSlideIndex,
  byController,
  byMousewheel
} = {}) {
  const swiper = this;
  if (!swiper.params.loop)
    return;
  swiper.emit("beforeLoopFix");
  const {
    slides,
    allowSlidePrev,
    allowSlideNext,
    slidesEl,
    params
  } = swiper;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  if (swiper.virtual && params.virtual.enabled) {
    if (slideTo2) {
      if (!params.centeredSlides && swiper.snapIndex === 0) {
        swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
      } else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) {
        swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
      } else if (swiper.snapIndex === swiper.snapGrid.length - 1) {
        swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    swiper.emit("loopFix");
    return;
  }
  const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10));
  let loopedSlides = params.loopedSlides || slidesPerView;
  if (loopedSlides % params.slidesPerGroup !== 0) {
    loopedSlides += params.slidesPerGroup - loopedSlides % params.slidesPerGroup;
  }
  swiper.loopedSlides = loopedSlides;
  const prependSlidesIndexes = [];
  const appendSlidesIndexes = [];
  let activeIndex = swiper.activeIndex;
  if (typeof activeSlideIndex === "undefined") {
    activeSlideIndex = swiper.getSlideIndex(swiper.slides.filter((el) => el.classList.contains(params.slideActiveClass))[0]);
  } else {
    activeIndex = activeSlideIndex;
  }
  const isNext = direction === "next" || !direction;
  const isPrev = direction === "prev" || !direction;
  let slidesPrepended = 0;
  let slidesAppended = 0;
  if (activeSlideIndex < loopedSlides) {
    slidesPrepended = Math.max(loopedSlides - activeSlideIndex, params.slidesPerGroup);
    for (let i = 0; i < loopedSlides - activeSlideIndex; i += 1) {
      const index = i - Math.floor(i / slides.length) * slides.length;
      prependSlidesIndexes.push(slides.length - index - 1);
    }
  } else if (activeSlideIndex > swiper.slides.length - loopedSlides * 2) {
    slidesAppended = Math.max(activeSlideIndex - (swiper.slides.length - loopedSlides * 2), params.slidesPerGroup);
    for (let i = 0; i < slidesAppended; i += 1) {
      const index = i - Math.floor(i / slides.length) * slides.length;
      appendSlidesIndexes.push(index);
    }
  }
  if (isPrev) {
    prependSlidesIndexes.forEach((index) => {
      swiper.slides[index].swiperLoopMoveDOM = true;
      slidesEl.prepend(swiper.slides[index]);
      swiper.slides[index].swiperLoopMoveDOM = false;
    });
  }
  if (isNext) {
    appendSlidesIndexes.forEach((index) => {
      swiper.slides[index].swiperLoopMoveDOM = true;
      slidesEl.append(swiper.slides[index]);
      swiper.slides[index].swiperLoopMoveDOM = false;
    });
  }
  swiper.recalcSlides();
  if (params.slidesPerView === "auto") {
    swiper.updateSlides();
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  if (slideTo2) {
    if (prependSlidesIndexes.length > 0 && isPrev) {
      if (typeof slideRealIndex === "undefined") {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
        const diff = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff);
        } else {
          swiper.slideTo(activeIndex + slidesPrepended, 0, false, true);
          if (setTranslate2) {
            swiper.touches[swiper.isHorizontal() ? "startX" : "startY"] += diff;
          }
        }
      } else {
        if (setTranslate2) {
          swiper.slideToLoop(slideRealIndex, 0, false, true);
        }
      }
    } else if (appendSlidesIndexes.length > 0 && isNext) {
      if (typeof slideRealIndex === "undefined") {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
        const diff = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff);
        } else {
          swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
          if (setTranslate2) {
            swiper.touches[swiper.isHorizontal() ? "startX" : "startY"] += diff;
          }
        }
      } else {
        swiper.slideToLoop(slideRealIndex, 0, false, true);
      }
    }
  }
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.controller && swiper.controller.control && !byController) {
    const loopParams = {
      slideRealIndex,
      slideTo: false,
      direction,
      setTranslate: setTranslate2,
      activeSlideIndex,
      byController: true
    };
    if (Array.isArray(swiper.controller.control)) {
      swiper.controller.control.forEach((c) => {
        if (!c.destroyed && c.params.loop)
          c.loopFix(loopParams);
      });
    } else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) {
      swiper.controller.control.loopFix(loopParams);
    }
  }
  swiper.emit("loopFix");
}
function loopDestroy() {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || swiper.virtual && swiper.params.virtual.enabled)
    return;
  swiper.recalcSlides();
  const newSlidesOrder = [];
  swiper.slides.forEach((slideEl) => {
    const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
    newSlidesOrder[index] = slideEl;
  });
  swiper.slides.forEach((slideEl) => {
    slideEl.removeAttribute("data-swiper-slide-index");
  });
  newSlidesOrder.forEach((slideEl) => {
    slidesEl.append(slideEl);
  });
  swiper.recalcSlides();
  swiper.slideTo(swiper.realIndex, 0);
}
const loop = {
  loopCreate,
  loopFix,
  loopDestroy
};
function setGrabCursor(moving) {
  const swiper = this;
  if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode)
    return;
  const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  el.style.cursor = "move";
  el.style.cursor = moving ? "grabbing" : "grab";
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}
function unsetGrabCursor() {
  const swiper = this;
  if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
    return;
  }
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}
const grabCursor = {
  setGrabCursor,
  unsetGrabCursor
};
function closestElement(selector, base = this) {
  function __closestFrom(el) {
    if (!el || el === getDocument() || el === getWindow())
      return null;
    if (el.assignedSlot)
      el = el.assignedSlot;
    const found = el.closest(selector);
    if (!found && !el.getRootNode) {
      return null;
    }
    return found || __closestFrom(el.getRootNode().host);
  }
  return __closestFrom(base);
}
function onTouchStart(event) {
  const swiper = this;
  const document2 = getDocument();
  const window2 = getWindow();
  const data = swiper.touchEventsData;
  data.evCache.push(event);
  const {
    params,
    touches,
    enabled
  } = swiper;
  if (!enabled)
    return;
  if (!params.simulateTouch && event.pointerType === "mouse")
    return;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }
  if (!swiper.animating && params.cssMode && params.loop) {
    swiper.loopFix();
  }
  let e = event;
  if (e.originalEvent)
    e = e.originalEvent;
  let targetEl = e.target;
  if (params.touchEventsTarget === "wrapper") {
    if (!swiper.wrapperEl.contains(targetEl))
      return;
  }
  if ("which" in e && e.which === 3)
    return;
  if ("button" in e && e.button > 0)
    return;
  if (data.isTouched && data.isMoved)
    return;
  const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
  const eventPath = event.composedPath ? event.composedPath() : event.path;
  if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
    targetEl = eventPath[0];
  }
  const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
  const isTargetShadow = !!(e.target && e.target.shadowRoot);
  if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
    swiper.allowClick = true;
    return;
  }
  if (params.swipeHandler) {
    if (!targetEl.closest(params.swipeHandler))
      return;
  }
  touches.currentX = e.pageX;
  touches.currentY = e.pageY;
  const startX = touches.currentX;
  const startY = touches.currentY;
  const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
  const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window2.innerWidth - edgeSwipeThreshold)) {
    if (edgeSwipeDetection === "prevent") {
      event.preventDefault();
    } else {
      return;
    }
  }
  Object.assign(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: void 0,
    startMoving: void 0
  });
  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = now();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = void 0;
  if (params.threshold > 0)
    data.allowThresholdMove = false;
  let preventDefault = true;
  if (targetEl.matches(data.focusableElements)) {
    preventDefault = false;
    if (targetEl.nodeName === "SELECT") {
      data.isTouched = false;
    }
  }
  if (document2.activeElement && document2.activeElement.matches(data.focusableElements) && document2.activeElement !== targetEl) {
    document2.activeElement.blur();
  }
  const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
  if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) {
    e.preventDefault();
  }
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
    swiper.freeMode.onTouchStart();
  }
  swiper.emit("touchStart", e);
}
function onTouchMove(event) {
  const document2 = getDocument();
  const swiper = this;
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    enabled
  } = swiper;
  if (!enabled)
    return;
  if (!params.simulateTouch && event.pointerType === "mouse")
    return;
  let e = event;
  if (e.originalEvent)
    e = e.originalEvent;
  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit("touchMoveOpposite", e);
    }
    return;
  }
  const pointerIndex = data.evCache.findIndex((cachedEv) => cachedEv.pointerId === e.pointerId);
  if (pointerIndex >= 0)
    data.evCache[pointerIndex] = e;
  const targetTouch = data.evCache.length > 1 ? data.evCache[0] : e;
  const pageX = targetTouch.pageX;
  const pageY = targetTouch.pageY;
  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }
  if (!swiper.allowTouchMove) {
    if (!e.target.matches(data.focusableElements)) {
      swiper.allowClick = false;
    }
    if (data.isTouched) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        prevX: swiper.touches.currentX,
        prevY: swiper.touches.currentY,
        currentX: pageX,
        currentY: pageY
      });
      data.touchStartTime = now();
    }
    return;
  }
  if (params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
      return;
    }
  }
  if (document2.activeElement) {
    if (e.target === document2.activeElement && e.target.matches(data.focusableElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }
  if (data.allowTouchCallbacks) {
    swiper.emit("touchMove", e);
  }
  if (e.targetTouches && e.targetTouches.length > 1)
    return;
  touches.currentX = pageX;
  touches.currentY = pageY;
  const diffX = touches.currentX - touches.startX;
  const diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold)
    return;
  if (typeof data.isScrolling === "undefined") {
    let touchAngle;
    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data.isScrolling = false;
    } else {
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }
  if (data.isScrolling) {
    swiper.emit("touchMoveOpposite", e);
  }
  if (typeof data.startMoving === "undefined") {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }
  if (data.isScrolling || swiper.zoom && swiper.params.zoom && swiper.params.zoom.enabled && data.evCache.length > 1) {
    data.isTouched = false;
    return;
  }
  if (!data.startMoving) {
    return;
  }
  swiper.allowClick = false;
  if (!params.cssMode && e.cancelable) {
    e.preventDefault();
  }
  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }
  let diff = swiper.isHorizontal() ? diffX : diffY;
  let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
  if (params.oneWayMovement) {
    diff = Math.abs(diff) * (rtl ? 1 : -1);
    touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
  }
  touches.diff = diff;
  diff *= params.touchRatio;
  if (rtl) {
    diff = -diff;
    touchesDiff = -touchesDiff;
  }
  const prevTouchesDirection = swiper.touchesDirection;
  swiper.swipeDirection = diff > 0 ? "prev" : "next";
  swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
  const isLoop = swiper.params.loop && !params.cssMode;
  if (!data.isMoved) {
    if (isLoop) {
      swiper.loopFix({
        direction: swiper.swipeDirection
      });
    }
    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);
    if (swiper.animating) {
      const evt = new window.CustomEvent("transitionend", {
        bubbles: true,
        cancelable: true
      });
      swiper.wrapperEl.dispatchEvent(evt);
    }
    data.allowMomentumBounce = false;
    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }
    swiper.emit("sliderFirstMove", e);
  }
  let loopFixed;
  if (data.isMoved && prevTouchesDirection !== swiper.touchesDirection && isLoop && Math.abs(diff) >= 1) {
    swiper.loopFix({
      direction: swiper.swipeDirection,
      setTranslate: true
    });
    loopFixed = true;
  }
  swiper.emit("sliderMove", e);
  data.isMoved = true;
  data.currentTranslate = diff + data.startTranslate;
  let disableParentSwiper = true;
  let resistanceRatio = params.resistanceRatio;
  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }
  if (diff > 0) {
    if (isLoop && !loopFixed && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.size / 2 : swiper.minTranslate())) {
      swiper.loopFix({
        direction: "prev",
        setTranslate: true,
        activeSlideIndex: 0
      });
    }
    if (data.currentTranslate > swiper.minTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
      }
    }
  } else if (diff < 0) {
    if (isLoop && !loopFixed && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.size / 2 : swiper.maxTranslate())) {
      swiper.loopFix({
        direction: "next",
        setTranslate: true,
        activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
      });
    }
    if (data.currentTranslate < swiper.maxTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
      }
    }
  }
  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  }
  if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
    data.currentTranslate = data.startTranslate;
  }
  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }
  if (!params.followFinger || params.cssMode)
    return;
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode) {
    swiper.freeMode.onTouchMove();
  }
  swiper.updateProgress(data.currentTranslate);
  swiper.setTranslate(data.currentTranslate);
}
function onTouchEnd(event) {
  const swiper = this;
  const data = swiper.touchEventsData;
  const pointerIndex = data.evCache.findIndex((cachedEv) => cachedEv.pointerId === event.pointerId);
  if (pointerIndex >= 0) {
    data.evCache.splice(pointerIndex, 1);
  }
  if (["pointercancel", "pointerout", "pointerleave"].includes(event.type)) {
    const proceed = event.type === "pointercancel" && (swiper.browser.isSafari || swiper.browser.isWebView);
    if (!proceed) {
      return;
    }
  }
  const {
    params,
    touches,
    rtlTranslate: rtl,
    slidesGrid,
    enabled
  } = swiper;
  if (!enabled)
    return;
  if (!params.simulateTouch && event.pointerType === "mouse")
    return;
  let e = event;
  if (e.originalEvent)
    e = e.originalEvent;
  if (data.allowTouchCallbacks) {
    swiper.emit("touchEnd", e);
  }
  data.allowTouchCallbacks = false;
  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  }
  const touchEndTime = now();
  const timeDiff = touchEndTime - data.touchStartTime;
  if (swiper.allowClick) {
    const pathTree = e.path || e.composedPath && e.composedPath();
    swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
    swiper.emit("tap click", e);
    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
      swiper.emit("doubleTap doubleClick", e);
    }
  }
  data.lastClickTime = now();
  nextTick(() => {
    if (!swiper.destroyed)
      swiper.allowClick = true;
  });
  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;
  let currentPos;
  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }
  if (params.cssMode) {
    return;
  }
  if (params.freeMode && params.freeMode.enabled) {
    swiper.freeMode.onTouchEnd({
      currentPos
    });
    return;
  }
  let stopIndex = 0;
  let groupSize = swiper.slidesSizesGrid[0];
  for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
    const increment2 = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (typeof slidesGrid[i + increment2] !== "undefined") {
      if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment2]) {
        stopIndex = i;
        groupSize = slidesGrid[i + increment2] - slidesGrid[i];
      }
    } else if (currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  }
  let rewindFirstIndex = null;
  let rewindLastIndex = null;
  if (params.rewind) {
    if (swiper.isBeginning) {
      rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    } else if (swiper.isEnd) {
      rewindFirstIndex = 0;
    }
  }
  const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
  const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
  if (timeDiff > params.longSwipesMs) {
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (swiper.swipeDirection === "next") {
      if (ratio >= params.longSwipesRatio)
        swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);
      else
        swiper.slideTo(stopIndex);
    }
    if (swiper.swipeDirection === "prev") {
      if (ratio > 1 - params.longSwipesRatio) {
        swiper.slideTo(stopIndex + increment);
      } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
        swiper.slideTo(rewindLastIndex);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  } else {
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
    if (!isNavButtonTarget) {
      if (swiper.swipeDirection === "next") {
        swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
      }
      if (swiper.swipeDirection === "prev") {
        swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
      }
    } else if (e.target === swiper.navigation.nextEl) {
      swiper.slideTo(stopIndex + increment);
    } else {
      swiper.slideTo(stopIndex);
    }
  }
}
function onResize() {
  const swiper = this;
  const {
    params,
    el
  } = swiper;
  if (el && el.offsetWidth === 0)
    return;
  if (params.breakpoints) {
    swiper.setBreakpoint();
  }
  const {
    allowSlideNext,
    allowSlidePrev,
    snapGrid
  } = swiper;
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;
  swiper.updateSize();
  swiper.updateSlides();
  swiper.updateSlidesClasses();
  const isVirtualLoop = isVirtual && params.loop;
  if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) {
    swiper.slideTo(swiper.slides.length - 1, 0, false, true);
  } else {
    if (swiper.params.loop && !isVirtual) {
      swiper.slideToLoop(swiper.realIndex, 0, false, true);
    } else {
      swiper.slideTo(swiper.activeIndex, 0, false, true);
    }
  }
  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
    clearTimeout(swiper.autoplay.resizeTimeout);
    swiper.autoplay.resizeTimeout = setTimeout(() => {
      if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
        swiper.autoplay.resume();
      }
    }, 500);
  }
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}
function onClick(e) {
  const swiper = this;
  if (!swiper.enabled)
    return;
  if (!swiper.allowClick) {
    if (swiper.params.preventClicks)
      e.preventDefault();
    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}
function onScroll() {
  const swiper = this;
  const {
    wrapperEl,
    rtlTranslate,
    enabled
  } = swiper;
  if (!enabled)
    return;
  swiper.previousTranslate = swiper.translate;
  if (swiper.isHorizontal()) {
    swiper.translate = -wrapperEl.scrollLeft;
  } else {
    swiper.translate = -wrapperEl.scrollTop;
  }
  if (swiper.translate === 0)
    swiper.translate = 0;
  swiper.updateActiveIndex();
  swiper.updateSlidesClasses();
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== swiper.progress) {
    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
  }
  swiper.emit("setTranslate", swiper.translate, false);
}
function onLoad(e) {
  const swiper = this;
  processLazyPreloader(swiper, e.target);
  if (swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) {
    return;
  }
  swiper.update();
}
let dummyEventAttached = false;
function dummyEventListener() {
}
const events = (swiper, method) => {
  const document2 = getDocument();
  const {
    params,
    el,
    wrapperEl,
    device
  } = swiper;
  const capture = !!params.nested;
  const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
  const swiperMethod = method;
  el[domMethod]("pointerdown", swiper.onTouchStart, {
    passive: false
  });
  document2[domMethod]("pointermove", swiper.onTouchMove, {
    passive: false,
    capture
  });
  document2[domMethod]("pointerup", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("pointercancel", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("pointerout", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("pointerleave", swiper.onTouchEnd, {
    passive: true
  });
  if (params.preventClicks || params.preventClicksPropagation) {
    el[domMethod]("click", swiper.onClick, true);
  }
  if (params.cssMode) {
    wrapperEl[domMethod]("scroll", swiper.onScroll);
  }
  if (params.updateOnWindowResize) {
    swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true);
  } else {
    swiper[swiperMethod]("observerUpdate", onResize, true);
  }
  el[domMethod]("load", swiper.onLoad, {
    capture: true
  });
};
function attachEvents() {
  const swiper = this;
  const document2 = getDocument();
  const {
    params
  } = swiper;
  swiper.onTouchStart = onTouchStart.bind(swiper);
  swiper.onTouchMove = onTouchMove.bind(swiper);
  swiper.onTouchEnd = onTouchEnd.bind(swiper);
  if (params.cssMode) {
    swiper.onScroll = onScroll.bind(swiper);
  }
  swiper.onClick = onClick.bind(swiper);
  swiper.onLoad = onLoad.bind(swiper);
  if (!dummyEventAttached) {
    document2.addEventListener("touchstart", dummyEventListener);
    dummyEventAttached = true;
  }
  events(swiper, "on");
}
function detachEvents() {
  const swiper = this;
  events(swiper, "off");
}
const events$1 = {
  attachEvents,
  detachEvents
};
const isGridEnabled = (swiper, params) => {
  return swiper.grid && params.grid && params.grid.rows > 1;
};
function setBreakpoint() {
  const swiper = this;
  const {
    realIndex,
    initialized,
    params,
    el
  } = swiper;
  const breakpoints2 = params.breakpoints;
  if (!breakpoints2 || breakpoints2 && Object.keys(breakpoints2).length === 0)
    return;
  const breakpoint = swiper.getBreakpoint(breakpoints2, swiper.params.breakpointsBase, swiper.el);
  if (!breakpoint || swiper.currentBreakpoint === breakpoint)
    return;
  const breakpointOnlyParams = breakpoint in breakpoints2 ? breakpoints2[breakpoint] : void 0;
  const breakpointParams = breakpointOnlyParams || swiper.originalParams;
  const wasMultiRow = isGridEnabled(swiper, params);
  const isMultiRow = isGridEnabled(swiper, breakpointParams);
  const wasEnabled = params.enabled;
  if (wasMultiRow && !isMultiRow) {
    el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
    swiper.emitContainerClasses();
  } else if (!wasMultiRow && isMultiRow) {
    el.classList.add(`${params.containerModifierClass}grid`);
    if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") {
      el.classList.add(`${params.containerModifierClass}grid-column`);
    }
    swiper.emitContainerClasses();
  }
  ["navigation", "pagination", "scrollbar"].forEach((prop) => {
    if (typeof breakpointParams[prop] === "undefined")
      return;
    const wasModuleEnabled = params[prop] && params[prop].enabled;
    const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
    if (wasModuleEnabled && !isModuleEnabled) {
      swiper[prop].disable();
    }
    if (!wasModuleEnabled && isModuleEnabled) {
      swiper[prop].enable();
    }
  });
  const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
  const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
  if (directionChanged && initialized) {
    swiper.changeDirection();
  }
  extend$1(swiper.params, breakpointParams);
  const isEnabled = swiper.params.enabled;
  Object.assign(swiper, {
    allowTouchMove: swiper.params.allowTouchMove,
    allowSlideNext: swiper.params.allowSlideNext,
    allowSlidePrev: swiper.params.allowSlidePrev
  });
  if (wasEnabled && !isEnabled) {
    swiper.disable();
  } else if (!wasEnabled && isEnabled) {
    swiper.enable();
  }
  swiper.currentBreakpoint = breakpoint;
  swiper.emit("_beforeBreakpoint", breakpointParams);
  if (needsReLoop && initialized) {
    swiper.loopDestroy();
    swiper.loopCreate(realIndex);
    swiper.updateSlides();
  }
  swiper.emit("breakpoint", breakpointParams);
}
function getBreakpoint(breakpoints2, base = "window", containerEl) {
  if (!breakpoints2 || base === "container" && !containerEl)
    return void 0;
  let breakpoint = false;
  const window2 = getWindow();
  const currentHeight = base === "window" ? window2.innerHeight : containerEl.clientHeight;
  const points = Object.keys(breakpoints2).map((point) => {
    if (typeof point === "string" && point.indexOf("@") === 0) {
      const minRatio = parseFloat(point.substr(1));
      const value = currentHeight * minRatio;
      return {
        value,
        point
      };
    }
    return {
      value: point,
      point
    };
  });
  points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
  for (let i = 0; i < points.length; i += 1) {
    const {
      point,
      value
    } = points[i];
    if (base === "window") {
      if (window2.matchMedia(`(min-width: ${value}px)`).matches) {
        breakpoint = point;
      }
    } else if (value <= containerEl.clientWidth) {
      breakpoint = point;
    }
  }
  return breakpoint || "max";
}
const breakpoints = {
  setBreakpoint,
  getBreakpoint
};
function prepareClasses(entries, prefix) {
  const resultClasses = [];
  entries.forEach((item) => {
    if (typeof item === "object") {
      Object.keys(item).forEach((classNames) => {
        if (item[classNames]) {
          resultClasses.push(prefix + classNames);
        }
      });
    } else if (typeof item === "string") {
      resultClasses.push(prefix + item);
    }
  });
  return resultClasses;
}
function addClasses() {
  const swiper = this;
  const {
    classNames,
    params,
    rtl,
    el,
    device
  } = swiper;
  const suffixes = prepareClasses(["initialized", params.direction, {
    "free-mode": swiper.params.freeMode && params.freeMode.enabled
  }, {
    "autoheight": params.autoHeight
  }, {
    "rtl": rtl
  }, {
    "grid": params.grid && params.grid.rows > 1
  }, {
    "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
  }, {
    "android": device.android
  }, {
    "ios": device.ios
  }, {
    "css-mode": params.cssMode
  }, {
    "centered": params.cssMode && params.centeredSlides
  }, {
    "watch-progress": params.watchSlidesProgress
  }], params.containerModifierClass);
  classNames.push(...suffixes);
  el.classList.add(...classNames);
  swiper.emitContainerClasses();
}
function removeClasses() {
  const swiper = this;
  const {
    el,
    classNames
  } = swiper;
  el.classList.remove(...classNames);
  swiper.emitContainerClasses();
}
const classes = {
  addClasses,
  removeClasses
};
function checkOverflow() {
  const swiper = this;
  const {
    isLocked: wasLocked,
    params
  } = swiper;
  const {
    slidesOffsetBefore
  } = params;
  if (slidesOffsetBefore) {
    const lastSlideIndex = swiper.slides.length - 1;
    const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
    swiper.isLocked = swiper.size > lastSlideRightEdge;
  } else {
    swiper.isLocked = swiper.snapGrid.length === 1;
  }
  if (params.allowSlideNext === true) {
    swiper.allowSlideNext = !swiper.isLocked;
  }
  if (params.allowSlidePrev === true) {
    swiper.allowSlidePrev = !swiper.isLocked;
  }
  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
  }
  if (wasLocked !== swiper.isLocked) {
    swiper.emit(swiper.isLocked ? "lock" : "unlock");
  }
}
const checkOverflow$1 = {
  checkOverflow
};
const defaults = {
  init: true,
  direction: "horizontal",
  oneWayMovement: false,
  touchEventsTarget: "wrapper",
  initialSlide: 0,
  speed: 300,
  cssMode: false,
  updateOnWindowResize: true,
  resizeObserver: true,
  nested: false,
  createElements: false,
  enabled: true,
  focusableElements: "input, select, option, textarea, button, video, label",
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: false,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,
  // Autoheight
  autoHeight: false,
  // Set wrapper width
  setWrapperSize: false,
  // Virtual Translate
  virtualTranslate: false,
  // Effects
  effect: "slide",
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
  // Breakpoints
  breakpoints: void 0,
  breakpointsBase: "window",
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: false,
  centeredSlides: false,
  centeredSlidesBounds: false,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: true,
  // Round length
  roundLengths: false,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 5,
  touchMoveStopPropagation: false,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,
  // Unique Navigation Elements
  uniqueNavElements: true,
  // Resistance
  resistance: true,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: false,
  // Cursor
  grabCursor: false,
  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  // loop
  loop: false,
  loopedSlides: null,
  loopPreventsSliding: true,
  // rewind
  rewind: false,
  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: "swiper-no-swiping",
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: true,
  maxBackfaceHiddenSlides: 10,
  // NS
  containerModifierClass: "swiper-",
  // NEW
  slideClass: "swiper-slide",
  slideActiveClass: "swiper-slide-active",
  slideVisibleClass: "swiper-slide-visible",
  slideNextClass: "swiper-slide-next",
  slidePrevClass: "swiper-slide-prev",
  wrapperClass: "swiper-wrapper",
  lazyPreloaderClass: "swiper-lazy-preloader",
  lazyPreloadPrevNext: 0,
  // Callbacks
  runCallbacksOnInit: true,
  // Internals
  _emitClasses: false
};
function moduleExtendParams(params, allModulesParams) {
  return function extendParams(obj = {}) {
    const moduleParamName = Object.keys(obj)[0];
    const moduleParams = obj[moduleParamName];
    if (typeof moduleParams !== "object" || moduleParams === null) {
      extend$1(allModulesParams, obj);
      return;
    }
    if (["navigation", "pagination", "scrollbar"].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) {
      params[moduleParamName] = {
        auto: true
      };
    }
    if (!(moduleParamName in params && "enabled" in moduleParams)) {
      extend$1(allModulesParams, obj);
      return;
    }
    if (params[moduleParamName] === true) {
      params[moduleParamName] = {
        enabled: true
      };
    }
    if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) {
      params[moduleParamName].enabled = true;
    }
    if (!params[moduleParamName])
      params[moduleParamName] = {
        enabled: false
      };
    extend$1(allModulesParams, obj);
  };
}
const prototypes = {
  eventsEmitter,
  update,
  translate,
  transition,
  slide,
  loop,
  grabCursor,
  events: events$1,
  breakpoints,
  checkOverflow: checkOverflow$1,
  classes
};
const extendedDefaults = {};
let Swiper$1 = class Swiper {
  constructor(...args) {
    let el;
    let params;
    if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") {
      params = args[0];
    } else {
      [el, params] = args;
    }
    if (!params)
      params = {};
    params = extend$1({}, params);
    if (el && !params.el)
      params.el = el;
    const document2 = getDocument();
    if (params.el && typeof params.el === "string" && document2.querySelectorAll(params.el).length > 1) {
      const swipers = [];
      document2.querySelectorAll(params.el).forEach((containerEl) => {
        const newParams = extend$1({}, params, {
          el: containerEl
        });
        swipers.push(new Swiper(newParams));
      });
      return swipers;
    }
    const swiper = this;
    swiper.__swiper__ = true;
    swiper.support = getSupport();
    swiper.device = getDevice({
      userAgent: params.userAgent
    });
    swiper.browser = getBrowser();
    swiper.eventsListeners = {};
    swiper.eventsAnyListeners = [];
    swiper.modules = [...swiper.__modules__];
    if (params.modules && Array.isArray(params.modules)) {
      swiper.modules.push(...params.modules);
    }
    const allModulesParams = {};
    swiper.modules.forEach((mod) => {
      mod({
        params,
        swiper,
        extendParams: moduleExtendParams(params, allModulesParams),
        on: swiper.on.bind(swiper),
        once: swiper.once.bind(swiper),
        off: swiper.off.bind(swiper),
        emit: swiper.emit.bind(swiper)
      });
    });
    const swiperParams = extend$1({}, defaults, allModulesParams);
    swiper.params = extend$1({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = extend$1({}, swiper.params);
    swiper.passedParams = extend$1({}, params);
    if (swiper.params && swiper.params.on) {
      Object.keys(swiper.params.on).forEach((eventName) => {
        swiper.on(eventName, swiper.params.on[eventName]);
      });
    }
    if (swiper.params && swiper.params.onAny) {
      swiper.onAny(swiper.params.onAny);
    }
    Object.assign(swiper, {
      enabled: swiper.params.enabled,
      el,
      // Classes
      classNames: [],
      // Slides
      slides: [],
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal() {
        return swiper.params.direction === "horizontal";
      },
      isVertical() {
        return swiper.params.direction === "vertical";
      },
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: true,
      isEnd: false,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,
      cssOverflowAdjustment() {
        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
      },
      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      // Touch Events
      touchEventsData: {
        isTouched: void 0,
        isMoved: void 0,
        allowTouchCallbacks: void 0,
        touchStartTime: void 0,
        isScrolling: void 0,
        currentTranslate: void 0,
        startTranslate: void 0,
        allowThresholdMove: void 0,
        // Form elements to match
        focusableElements: swiper.params.focusableElements,
        // Last click time
        lastClickTime: 0,
        clickTimeout: void 0,
        // Velocities
        velocities: [],
        allowMomentumBounce: void 0,
        startMoving: void 0,
        evCache: []
      },
      // Clicks
      allowClick: true,
      // Touches
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    });
    swiper.emit("_swiper");
    if (swiper.params.init) {
      swiper.init();
    }
    return swiper;
  }
  getSlideIndex(slideEl) {
    const {
      slidesEl,
      params
    } = this;
    const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
    const firstSlideIndex = elementIndex(slides[0]);
    return elementIndex(slideEl) - firstSlideIndex;
  }
  getSlideIndexByData(index) {
    return this.getSlideIndex(this.slides.filter((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === index)[0]);
  }
  recalcSlides() {
    const swiper = this;
    const {
      slidesEl,
      params
    } = swiper;
    swiper.slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
  }
  enable() {
    const swiper = this;
    if (swiper.enabled)
      return;
    swiper.enabled = true;
    if (swiper.params.grabCursor) {
      swiper.setGrabCursor();
    }
    swiper.emit("enable");
  }
  disable() {
    const swiper = this;
    if (!swiper.enabled)
      return;
    swiper.enabled = false;
    if (swiper.params.grabCursor) {
      swiper.unsetGrabCursor();
    }
    swiper.emit("disable");
  }
  setProgress(progress, speed) {
    const swiper = this;
    progress = Math.min(Math.max(progress, 0), 1);
    const min = swiper.minTranslate();
    const max = swiper.maxTranslate();
    const current = (max - min) * progress + min;
    swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  emitContainerClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el)
      return;
    const cls = swiper.el.className.split(" ").filter((className) => {
      return className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
    });
    swiper.emit("_containerClasses", cls.join(" "));
  }
  getSlideClasses(slideEl) {
    const swiper = this;
    if (swiper.destroyed)
      return "";
    return slideEl.className.split(" ").filter((className) => {
      return className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0;
    }).join(" ");
  }
  emitSlidesClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el)
      return;
    const updates = [];
    swiper.slides.forEach((slideEl) => {
      const classNames = swiper.getSlideClasses(slideEl);
      updates.push({
        slideEl,
        classNames
      });
      swiper.emit("_slideClass", slideEl, classNames);
    });
    swiper.emit("_slideClasses", updates);
  }
  slidesPerViewDynamic(view = "current", exact = false) {
    const swiper = this;
    const {
      params,
      slides,
      slidesGrid,
      slidesSizesGrid,
      size: swiperSize,
      activeIndex
    } = swiper;
    let spv = 1;
    if (params.centeredSlides) {
      let slideSize = slides[activeIndex] ? slides[activeIndex].swiperSlideSize : 0;
      let breakLoop;
      for (let i = activeIndex + 1; i < slides.length; i += 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize)
            breakLoop = true;
        }
      }
      for (let i = activeIndex - 1; i >= 0; i -= 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize)
            breakLoop = true;
        }
      }
    } else {
      if (view === "current") {
        for (let i = activeIndex + 1; i < slides.length; i += 1) {
          const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      } else {
        for (let i = activeIndex - 1; i >= 0; i -= 1) {
          const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      }
    }
    return spv;
  }
  update() {
    const swiper = this;
    if (!swiper || swiper.destroyed)
      return;
    const {
      snapGrid,
      params
    } = swiper;
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }
    [...swiper.el.querySelectorAll('[loading="lazy"]')].forEach((imageEl) => {
      if (imageEl.complete) {
        processLazyPreloader(swiper, imageEl);
      }
    });
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();
    function setTranslate2() {
      const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
      const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    let translated;
    if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
      setTranslate2();
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
        const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
        translated = swiper.slideTo(slides.length - 1, 0, false, true);
      } else {
        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
      if (!translated) {
        setTranslate2();
      }
    }
    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
    swiper.emit("update");
  }
  changeDirection(newDirection, needUpdate = true) {
    const swiper = this;
    const currentDirection = swiper.params.direction;
    if (!newDirection) {
      newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
    }
    if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") {
      return swiper;
    }
    swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
    swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
    swiper.emitContainerClasses();
    swiper.params.direction = newDirection;
    swiper.slides.forEach((slideEl) => {
      if (newDirection === "vertical") {
        slideEl.style.width = "";
      } else {
        slideEl.style.height = "";
      }
    });
    swiper.emit("changeDirection");
    if (needUpdate)
      swiper.update();
    return swiper;
  }
  changeLanguageDirection(direction) {
    const swiper = this;
    if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr")
      return;
    swiper.rtl = direction === "rtl";
    swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
    if (swiper.rtl) {
      swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = "rtl";
    } else {
      swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = "ltr";
    }
    swiper.update();
  }
  mount(element) {
    const swiper = this;
    if (swiper.mounted)
      return true;
    let el = element || swiper.params.el;
    if (typeof el === "string") {
      el = document.querySelector(el);
    }
    if (!el) {
      return false;
    }
    el.swiper = swiper;
    if (el.shadowEl) {
      swiper.isElement = true;
    }
    const getWrapperSelector = () => {
      return `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
    };
    const getWrapper = () => {
      if (el && el.shadowRoot && el.shadowRoot.querySelector) {
        const res = el.shadowRoot.querySelector(getWrapperSelector());
        return res;
      }
      return elementChildren(el, getWrapperSelector())[0];
    };
    let wrapperEl = getWrapper();
    if (!wrapperEl && swiper.params.createElements) {
      wrapperEl = createElement("div", swiper.params.wrapperClass);
      el.append(wrapperEl);
      elementChildren(el, `.${swiper.params.slideClass}`).forEach((slideEl) => {
        wrapperEl.append(slideEl);
      });
    }
    Object.assign(swiper, {
      el,
      wrapperEl,
      slidesEl: swiper.isElement ? el : wrapperEl,
      mounted: true,
      // RTL
      rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
      rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
      wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
    });
    return true;
  }
  init(el) {
    const swiper = this;
    if (swiper.initialized)
      return swiper;
    const mounted = swiper.mount(el);
    if (mounted === false)
      return swiper;
    swiper.emit("beforeInit");
    if (swiper.params.breakpoints) {
      swiper.setBreakpoint();
    }
    swiper.addClasses();
    swiper.updateSize();
    swiper.updateSlides();
    if (swiper.params.watchOverflow) {
      swiper.checkOverflow();
    }
    if (swiper.params.grabCursor && swiper.enabled) {
      swiper.setGrabCursor();
    }
    if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
      swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
    } else {
      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
    }
    if (swiper.params.loop) {
      swiper.loopCreate();
    }
    swiper.attachEvents();
    [...swiper.el.querySelectorAll('[loading="lazy"]')].forEach((imageEl) => {
      if (imageEl.complete) {
        processLazyPreloader(swiper, imageEl);
      } else {
        imageEl.addEventListener("load", (e) => {
          processLazyPreloader(swiper, e.target);
        });
      }
    });
    preload(swiper);
    swiper.initialized = true;
    preload(swiper);
    swiper.emit("init");
    swiper.emit("afterInit");
    return swiper;
  }
  destroy(deleteInstance = true, cleanStyles = true) {
    const swiper = this;
    const {
      params,
      el,
      wrapperEl,
      slides
    } = swiper;
    if (typeof swiper.params === "undefined" || swiper.destroyed) {
      return null;
    }
    swiper.emit("beforeDestroy");
    swiper.initialized = false;
    swiper.detachEvents();
    if (params.loop) {
      swiper.loopDestroy();
    }
    if (cleanStyles) {
      swiper.removeClasses();
      el.removeAttribute("style");
      wrapperEl.removeAttribute("style");
      if (slides && slides.length) {
        slides.forEach((slideEl) => {
          slideEl.classList.remove(params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
          slideEl.removeAttribute("style");
          slideEl.removeAttribute("data-swiper-slide-index");
        });
      }
    }
    swiper.emit("destroy");
    Object.keys(swiper.eventsListeners).forEach((eventName) => {
      swiper.off(eventName);
    });
    if (deleteInstance !== false) {
      swiper.el.swiper = null;
      deleteProps(swiper);
    }
    swiper.destroyed = true;
    return null;
  }
  static extendDefaults(newDefaults) {
    extend$1(extendedDefaults, newDefaults);
  }
  static get extendedDefaults() {
    return extendedDefaults;
  }
  static get defaults() {
    return defaults;
  }
  static installModule(mod) {
    if (!Swiper.prototype.__modules__)
      Swiper.prototype.__modules__ = [];
    const modules = Swiper.prototype.__modules__;
    if (typeof mod === "function" && modules.indexOf(mod) < 0) {
      modules.push(mod);
    }
  }
  static use(module) {
    if (Array.isArray(module)) {
      module.forEach((m) => Swiper.installModule(m));
      return Swiper;
    }
    Swiper.installModule(module);
    return Swiper;
  }
};
Object.keys(prototypes).forEach((prototypeGroup) => {
  Object.keys(prototypes[prototypeGroup]).forEach((protoMethod) => {
    Swiper$1.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
  });
});
Swiper$1.use([Resize, Observer]);
function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
  if (swiper.params.createElements) {
    Object.keys(checkProps).forEach((key) => {
      if (!params[key] && params.auto === true) {
        let element = elementChildren(swiper.el, `.${checkProps[key]}`)[0];
        if (!element) {
          element = createElement("div", checkProps[key]);
          element.className = checkProps[key];
          swiper.el.append(element);
        }
        params[key] = element;
        originalParams[key] = element;
      }
    });
  }
  return params;
}
function Navigation({
  swiper,
  extendParams,
  on,
  emit
}) {
  extendParams({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: false,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled"
    }
  });
  swiper.navigation = {
    nextEl: null,
    prevEl: null
  };
  const makeElementsArray = (el) => {
    if (!Array.isArray(el))
      el = [el].filter((e) => !!e);
    return el;
  };
  function getEl(el) {
    let res;
    if (el && typeof el === "string" && swiper.isElement) {
      res = swiper.el.shadowRoot.querySelector(el);
      if (res)
        return res;
    }
    if (el) {
      if (typeof el === "string")
        res = [...document.querySelectorAll(el)];
      if (swiper.params.uniqueNavElements && typeof el === "string" && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) {
        res = swiper.el.querySelector(el);
      }
    }
    if (el && !res)
      return el;
    return res;
  }
  function toggleEl(el, disabled) {
    const params = swiper.params.navigation;
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      if (subEl) {
        subEl.classList[disabled ? "add" : "remove"](...params.disabledClass.split(" "));
        if (subEl.tagName === "BUTTON")
          subEl.disabled = disabled;
        if (swiper.params.watchOverflow && swiper.enabled) {
          subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
        }
      }
    });
  }
  function update2() {
    const {
      nextEl,
      prevEl
    } = swiper.navigation;
    if (swiper.params.loop) {
      toggleEl(prevEl, false);
      toggleEl(nextEl, false);
      return;
    }
    toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
    toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
  }
  function onPrevClick(e) {
    e.preventDefault();
    if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind)
      return;
    swiper.slidePrev();
    emit("navigationPrev");
  }
  function onNextClick(e) {
    e.preventDefault();
    if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind)
      return;
    swiper.slideNext();
    emit("navigationNext");
  }
  function init() {
    const params = swiper.params.navigation;
    swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
      nextEl: "swiper-button-next",
      prevEl: "swiper-button-prev"
    });
    if (!(params.nextEl || params.prevEl))
      return;
    let nextEl = getEl(params.nextEl);
    let prevEl = getEl(params.prevEl);
    Object.assign(swiper.navigation, {
      nextEl,
      prevEl
    });
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    const initButton = (el, dir) => {
      if (el) {
        el.addEventListener("click", dir === "next" ? onNextClick : onPrevClick);
      }
      if (!swiper.enabled && el) {
        el.classList.add(...params.lockClass.split(" "));
      }
    };
    nextEl.forEach((el) => initButton(el, "next"));
    prevEl.forEach((el) => initButton(el, "prev"));
  }
  function destroy() {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    const destroyButton = (el, dir) => {
      el.removeEventListener("click", dir === "next" ? onNextClick : onPrevClick);
      el.classList.remove(...swiper.params.navigation.disabledClass.split(" "));
    };
    nextEl.forEach((el) => destroyButton(el, "next"));
    prevEl.forEach((el) => destroyButton(el, "prev"));
  }
  on("init", () => {
    if (swiper.params.navigation.enabled === false) {
      disable();
    } else {
      init();
      update2();
    }
  });
  on("toEdge fromEdge lock unlock", () => {
    update2();
  });
  on("destroy", () => {
    destroy();
  });
  on("enable disable", () => {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    [...nextEl, ...prevEl].filter((el) => !!el).forEach((el) => el.classList[swiper.enabled ? "remove" : "add"](swiper.params.navigation.lockClass));
  });
  on("click", (_s, e) => {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    const targetEl = e.target;
    if (swiper.params.navigation.hideOnClick && !prevEl.includes(targetEl) && !nextEl.includes(targetEl)) {
      if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl)))
        return;
      let isHidden;
      if (nextEl.length) {
        isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass);
      } else if (prevEl.length) {
        isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
      }
      if (isHidden === true) {
        emit("navigationShow");
      } else {
        emit("navigationHide");
      }
      [...nextEl, ...prevEl].filter((el) => !!el).forEach((el) => el.classList.toggle(swiper.params.navigation.hiddenClass));
    }
  });
  const enable = () => {
    swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(" "));
    init();
    update2();
  };
  const disable = () => {
    swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(" "));
    destroy();
  };
  Object.assign(swiper.navigation, {
    enable,
    disable,
    update: update2,
    init,
    destroy
  });
}
function Scrollbar({
  swiper,
  extendParams,
  on,
  emit
}) {
  const document2 = getDocument();
  let isTouched = false;
  let timeout = null;
  let dragTimeout = null;
  let dragStartPos;
  let dragSize;
  let trackSize;
  let divider;
  extendParams({
    scrollbar: {
      el: null,
      dragSize: "auto",
      hide: false,
      draggable: false,
      snapOnRelease: true,
      lockClass: "swiper-scrollbar-lock",
      dragClass: "swiper-scrollbar-drag",
      scrollbarDisabledClass: "swiper-scrollbar-disabled",
      horizontalClass: `swiper-scrollbar-horizontal`,
      verticalClass: `swiper-scrollbar-vertical`
    }
  });
  swiper.scrollbar = {
    el: null,
    dragEl: null
  };
  function setTranslate2() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el)
      return;
    const {
      scrollbar,
      rtlTranslate: rtl
    } = swiper;
    const {
      dragEl,
      el
    } = scrollbar;
    const params = swiper.params.scrollbar;
    const progress = swiper.params.loop ? swiper.progressLoop : swiper.progress;
    let newSize = dragSize;
    let newPos = (trackSize - dragSize) * progress;
    if (rtl) {
      newPos = -newPos;
      if (newPos > 0) {
        newSize = dragSize - newPos;
        newPos = 0;
      } else if (-newPos + dragSize > trackSize) {
        newSize = trackSize + newPos;
      }
    } else if (newPos < 0) {
      newSize = dragSize + newPos;
      newPos = 0;
    } else if (newPos + dragSize > trackSize) {
      newSize = trackSize - newPos;
    }
    if (swiper.isHorizontal()) {
      dragEl.style.transform = `translate3d(${newPos}px, 0, 0)`;
      dragEl.style.width = `${newSize}px`;
    } else {
      dragEl.style.transform = `translate3d(0px, ${newPos}px, 0)`;
      dragEl.style.height = `${newSize}px`;
    }
    if (params.hide) {
      clearTimeout(timeout);
      el.style.opacity = 1;
      timeout = setTimeout(() => {
        el.style.opacity = 0;
        el.style.transitionDuration = "400ms";
      }, 1e3);
    }
  }
  function setTransition2(duration) {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el)
      return;
    swiper.scrollbar.dragEl.style.transitionDuration = `${duration}ms`;
  }
  function updateSize2() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el)
      return;
    const {
      scrollbar
    } = swiper;
    const {
      dragEl,
      el
    } = scrollbar;
    dragEl.style.width = "";
    dragEl.style.height = "";
    trackSize = swiper.isHorizontal() ? el.offsetWidth : el.offsetHeight;
    divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
    if (swiper.params.scrollbar.dragSize === "auto") {
      dragSize = trackSize * divider;
    } else {
      dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
    }
    if (swiper.isHorizontal()) {
      dragEl.style.width = `${dragSize}px`;
    } else {
      dragEl.style.height = `${dragSize}px`;
    }
    if (divider >= 1) {
      el.style.display = "none";
    } else {
      el.style.display = "";
    }
    if (swiper.params.scrollbar.hide) {
      el.style.opacity = 0;
    }
    if (swiper.params.watchOverflow && swiper.enabled) {
      scrollbar.el.classList[swiper.isLocked ? "add" : "remove"](swiper.params.scrollbar.lockClass);
    }
  }
  function getPointerPosition(e) {
    return swiper.isHorizontal() ? e.clientX : e.clientY;
  }
  function setDragPosition(e) {
    const {
      scrollbar,
      rtlTranslate: rtl
    } = swiper;
    const {
      el
    } = scrollbar;
    let positionRatio;
    positionRatio = (getPointerPosition(e) - elementOffset(el)[swiper.isHorizontal() ? "left" : "top"] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
    positionRatio = Math.max(Math.min(positionRatio, 1), 0);
    if (rtl) {
      positionRatio = 1 - positionRatio;
    }
    const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
    swiper.updateProgress(position);
    swiper.setTranslate(position);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  function onDragStart(e) {
    const params = swiper.params.scrollbar;
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el,
      dragEl
    } = scrollbar;
    isTouched = true;
    dragStartPos = e.target === dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? "left" : "top"] : null;
    e.preventDefault();
    e.stopPropagation();
    wrapperEl.style.transitionDuration = "100ms";
    dragEl.style.transitionDuration = "100ms";
    setDragPosition(e);
    clearTimeout(dragTimeout);
    el.style.transitionDuration = "0ms";
    if (params.hide) {
      el.style.opacity = 1;
    }
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style["scroll-snap-type"] = "none";
    }
    emit("scrollbarDragStart", e);
  }
  function onDragMove(e) {
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el,
      dragEl
    } = scrollbar;
    if (!isTouched)
      return;
    if (e.preventDefault)
      e.preventDefault();
    else
      e.returnValue = false;
    setDragPosition(e);
    wrapperEl.style.transitionDuration = "0ms";
    el.style.transitionDuration = "0ms";
    dragEl.style.transitionDuration = "0ms";
    emit("scrollbarDragMove", e);
  }
  function onDragEnd(e) {
    const params = swiper.params.scrollbar;
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el
    } = scrollbar;
    if (!isTouched)
      return;
    isTouched = false;
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style["scroll-snap-type"] = "";
      wrapperEl.style.transitionDuration = "";
    }
    if (params.hide) {
      clearTimeout(dragTimeout);
      dragTimeout = nextTick(() => {
        el.style.opacity = 0;
        el.style.transitionDuration = "400ms";
      }, 1e3);
    }
    emit("scrollbarDragEnd", e);
    if (params.snapOnRelease) {
      swiper.slideToClosest();
    }
  }
  function events2(method) {
    const {
      scrollbar,
      params
    } = swiper;
    const el = scrollbar.el;
    if (!el)
      return;
    const target = el;
    const activeListener = params.passiveListeners ? {
      passive: false,
      capture: false
    } : false;
    const passiveListener = params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    if (!target)
      return;
    const eventMethod = method === "on" ? "addEventListener" : "removeEventListener";
    target[eventMethod]("pointerdown", onDragStart, activeListener);
    document2[eventMethod]("pointermove", onDragMove, activeListener);
    document2[eventMethod]("pointerup", onDragEnd, passiveListener);
  }
  function enableDraggable() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el)
      return;
    events2("on");
  }
  function disableDraggable() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el)
      return;
    events2("off");
  }
  function init() {
    const {
      scrollbar,
      el: swiperEl
    } = swiper;
    swiper.params.scrollbar = createElementIfNotDefined(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
      el: "swiper-scrollbar"
    });
    const params = swiper.params.scrollbar;
    if (!params.el)
      return;
    let el;
    if (typeof params.el === "string" && swiper.isElement) {
      el = swiper.el.shadowRoot.querySelector(params.el);
    }
    if (!el && typeof params.el === "string") {
      el = document2.querySelectorAll(params.el);
    } else if (!el) {
      el = params.el;
    }
    if (swiper.params.uniqueNavElements && typeof params.el === "string" && el.length > 1 && swiperEl.querySelectorAll(params.el).length === 1) {
      el = swiperEl.querySelector(params.el);
    }
    if (el.length > 0)
      el = el[0];
    el.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    let dragEl;
    if (el) {
      dragEl = el.querySelector(`.${swiper.params.scrollbar.dragClass}`);
      if (!dragEl) {
        dragEl = createElement("div", swiper.params.scrollbar.dragClass);
        el.append(dragEl);
      }
    }
    Object.assign(scrollbar, {
      el,
      dragEl
    });
    if (params.draggable) {
      enableDraggable();
    }
    if (el) {
      el.classList[swiper.enabled ? "remove" : "add"](swiper.params.scrollbar.lockClass);
    }
  }
  function destroy() {
    const params = swiper.params.scrollbar;
    const el = swiper.scrollbar.el;
    if (el) {
      el.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    }
    disableDraggable();
  }
  on("init", () => {
    if (swiper.params.scrollbar.enabled === false) {
      disable();
    } else {
      init();
      updateSize2();
      setTranslate2();
    }
  });
  on("update resize observerUpdate lock unlock", () => {
    updateSize2();
  });
  on("setTranslate", () => {
    setTranslate2();
  });
  on("setTransition", (_s, duration) => {
    setTransition2(duration);
  });
  on("enable disable", () => {
    const {
      el
    } = swiper.scrollbar;
    if (el) {
      el.classList[swiper.enabled ? "remove" : "add"](swiper.params.scrollbar.lockClass);
    }
  });
  on("destroy", () => {
    destroy();
  });
  const enable = () => {
    swiper.el.classList.remove(swiper.params.scrollbar.scrollbarDisabledClass);
    if (swiper.scrollbar.el) {
      swiper.scrollbar.el.classList.remove(swiper.params.scrollbar.scrollbarDisabledClass);
    }
    init();
    updateSize2();
    setTranslate2();
  };
  const disable = () => {
    swiper.el.classList.add(swiper.params.scrollbar.scrollbarDisabledClass);
    if (swiper.scrollbar.el) {
      swiper.scrollbar.el.classList.add(swiper.params.scrollbar.scrollbarDisabledClass);
    }
    destroy();
  };
  Object.assign(swiper.scrollbar, {
    enable,
    disable,
    updateSize: updateSize2,
    setTranslate: setTranslate2,
    init,
    destroy
  });
}
function Autoplay({
  swiper,
  extendParams,
  on,
  emit,
  params
}) {
  swiper.autoplay = {
    running: false,
    paused: false,
    timeLeft: 0
  };
  extendParams({
    autoplay: {
      enabled: false,
      delay: 3e3,
      waitForTransition: true,
      disableOnInteraction: true,
      stopOnLastSlide: false,
      reverseDirection: false,
      pauseOnMouseEnter: false
    }
  });
  let timeout;
  let raf;
  let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3e3;
  let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3e3;
  let autoplayTimeLeft;
  let autoplayStartTime = (/* @__PURE__ */ new Date()).getTime;
  let wasPaused;
  let isTouched;
  let pausedByTouch;
  let touchStartTimeout;
  let slideChanged;
  let pausedByInteraction;
  function onTransitionEnd(e) {
    if (!swiper || swiper.destroyed || !swiper.wrapperEl)
      return;
    if (e.target !== swiper.wrapperEl)
      return;
    swiper.wrapperEl.removeEventListener("transitionend", onTransitionEnd);
    resume();
  }
  const calcTimeLeft = () => {
    if (swiper.destroyed || !swiper.autoplay.running)
      return;
    if (swiper.autoplay.paused) {
      wasPaused = true;
    } else if (wasPaused) {
      autoplayDelayCurrent = autoplayTimeLeft;
      wasPaused = false;
    }
    const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - (/* @__PURE__ */ new Date()).getTime();
    swiper.autoplay.timeLeft = timeLeft;
    emit("autoplayTimeLeft", timeLeft, timeLeft / autoplayDelayTotal);
    raf = requestAnimationFrame(() => {
      calcTimeLeft();
    });
  };
  const getSlideDelay = () => {
    let activeSlideEl;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      activeSlideEl = swiper.slides.filter((slideEl) => slideEl.classList.contains("swiper-slide-active"))[0];
    } else {
      activeSlideEl = swiper.slides[swiper.activeIndex];
    }
    if (!activeSlideEl)
      return void 0;
    const currentSlideDelay = parseInt(activeSlideEl.getAttribute("data-swiper-autoplay"), 10);
    return currentSlideDelay;
  };
  const run = (delayForce) => {
    if (swiper.destroyed || !swiper.autoplay.running)
      return;
    cancelAnimationFrame(raf);
    calcTimeLeft();
    let delay = typeof delayForce === "undefined" ? swiper.params.autoplay.delay : delayForce;
    autoplayDelayTotal = swiper.params.autoplay.delay;
    autoplayDelayCurrent = swiper.params.autoplay.delay;
    const currentSlideDelay = getSlideDelay();
    if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === "undefined") {
      delay = currentSlideDelay;
      autoplayDelayTotal = currentSlideDelay;
      autoplayDelayCurrent = currentSlideDelay;
    }
    autoplayTimeLeft = delay;
    const speed = swiper.params.speed;
    const proceed = () => {
      if (!swiper || swiper.destroyed)
        return;
      if (swiper.params.autoplay.reverseDirection) {
        if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
          swiper.slidePrev(speed, true, true);
          emit("autoplay");
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(swiper.slides.length - 1, speed, true, true);
          emit("autoplay");
        }
      } else {
        if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
          swiper.slideNext(speed, true, true);
          emit("autoplay");
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(0, speed, true, true);
          emit("autoplay");
        }
      }
      if (swiper.params.cssMode) {
        autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
        requestAnimationFrame(() => {
          run();
        });
      }
    };
    if (delay > 0) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        proceed();
      }, delay);
    } else {
      requestAnimationFrame(() => {
        proceed();
      });
    }
    return delay;
  };
  const start = () => {
    swiper.autoplay.running = true;
    run();
    emit("autoplayStart");
  };
  const stop = () => {
    swiper.autoplay.running = false;
    clearTimeout(timeout);
    cancelAnimationFrame(raf);
    emit("autoplayStop");
  };
  const pause = (internal, reset) => {
    if (swiper.destroyed || !swiper.autoplay.running)
      return;
    clearTimeout(timeout);
    if (!internal) {
      pausedByInteraction = true;
    }
    const proceed = () => {
      emit("autoplayPause");
      if (swiper.params.autoplay.waitForTransition) {
        swiper.wrapperEl.addEventListener("transitionend", onTransitionEnd);
      } else {
        resume();
      }
    };
    swiper.autoplay.paused = true;
    if (reset) {
      if (slideChanged) {
        autoplayTimeLeft = swiper.params.autoplay.delay;
      }
      slideChanged = false;
      proceed();
      return;
    }
    const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
    autoplayTimeLeft = delay - ((/* @__PURE__ */ new Date()).getTime() - autoplayStartTime);
    if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop)
      return;
    if (autoplayTimeLeft < 0)
      autoplayTimeLeft = 0;
    proceed();
  };
  const resume = () => {
    if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running)
      return;
    autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
    if (pausedByInteraction) {
      pausedByInteraction = false;
      run(autoplayTimeLeft);
    } else {
      run();
    }
    swiper.autoplay.paused = false;
    emit("autoplayResume");
  };
  const onVisibilityChange = () => {
    if (swiper.destroyed || !swiper.autoplay.running)
      return;
    const document2 = getDocument();
    if (document2.visibilityState === "hidden") {
      pausedByInteraction = true;
      pause(true);
    }
    if (document2.visibilityState === "visible") {
      resume();
    }
  };
  const onPointerEnter = (e) => {
    if (e.pointerType !== "mouse")
      return;
    pausedByInteraction = true;
    pause(true);
  };
  const onPointerLeave = (e) => {
    if (e.pointerType !== "mouse")
      return;
    if (swiper.autoplay.paused) {
      resume();
    }
  };
  const attachMouseEvents = () => {
    if (swiper.params.autoplay.pauseOnMouseEnter) {
      swiper.el.addEventListener("pointerenter", onPointerEnter);
      swiper.el.addEventListener("pointerleave", onPointerLeave);
    }
  };
  const detachMouseEvents = () => {
    swiper.el.removeEventListener("pointerenter", onPointerEnter);
    swiper.el.removeEventListener("pointerleave", onPointerLeave);
  };
  const attachDocumentEvents = () => {
    const document2 = getDocument();
    document2.addEventListener("visibilitychange", onVisibilityChange);
  };
  const detachDocumentEvents = () => {
    const document2 = getDocument();
    document2.removeEventListener("visibilitychange", onVisibilityChange);
  };
  on("init", () => {
    if (swiper.params.autoplay.enabled) {
      attachMouseEvents();
      attachDocumentEvents();
      autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
      start();
    }
  });
  on("destroy", () => {
    detachMouseEvents();
    detachDocumentEvents();
    if (swiper.autoplay.running) {
      stop();
    }
  });
  on("beforeTransitionStart", (_s, speed, internal) => {
    if (swiper.destroyed || !swiper.autoplay.running)
      return;
    if (internal || !swiper.params.autoplay.disableOnInteraction) {
      pause(true, true);
    } else {
      stop();
    }
  });
  on("sliderFirstMove", () => {
    if (swiper.destroyed || !swiper.autoplay.running)
      return;
    if (swiper.params.autoplay.disableOnInteraction) {
      stop();
      return;
    }
    isTouched = true;
    pausedByTouch = false;
    pausedByInteraction = false;
    touchStartTimeout = setTimeout(() => {
      pausedByInteraction = true;
      pausedByTouch = true;
      pause(true);
    }, 200);
  });
  on("touchEnd", () => {
    if (swiper.destroyed || !swiper.autoplay.running || !isTouched)
      return;
    clearTimeout(touchStartTimeout);
    clearTimeout(timeout);
    if (swiper.params.autoplay.disableOnInteraction) {
      pausedByTouch = false;
      isTouched = false;
      return;
    }
    if (pausedByTouch && swiper.params.cssMode)
      resume();
    pausedByTouch = false;
    isTouched = false;
  });
  on("slideChange", () => {
    if (swiper.destroyed || !swiper.autoplay.running)
      return;
    slideChanged = true;
  });
  Object.assign(swiper.autoplay, {
    start,
    stop,
    pause,
    resume
  });
}
function effectInit(params) {
  const {
    effect,
    swiper,
    on,
    setTranslate: setTranslate2,
    setTransition: setTransition2,
    overwriteParams,
    perspective,
    recreateShadows,
    getEffectParams
  } = params;
  on("beforeInit", () => {
    if (swiper.params.effect !== effect)
      return;
    swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
    if (perspective && perspective()) {
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
    }
    const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
    Object.assign(swiper.params, overwriteParamsResult);
    Object.assign(swiper.originalParams, overwriteParamsResult);
  });
  on("setTranslate", () => {
    if (swiper.params.effect !== effect)
      return;
    setTranslate2();
  });
  on("setTransition", (_s, duration) => {
    if (swiper.params.effect !== effect)
      return;
    setTransition2(duration);
  });
  on("transitionEnd", () => {
    if (swiper.params.effect !== effect)
      return;
    if (recreateShadows) {
      if (!getEffectParams || !getEffectParams().slideShadows)
        return;
      swiper.slides.forEach((slideEl) => {
        slideEl.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((shadowEl) => shadowEl.remove());
      });
      recreateShadows();
    }
  });
  let requireUpdateOnVirtual;
  on("virtualUpdate", () => {
    if (swiper.params.effect !== effect)
      return;
    if (!swiper.slides.length) {
      requireUpdateOnVirtual = true;
    }
    requestAnimationFrame(() => {
      if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
        setTranslate2();
        requireUpdateOnVirtual = false;
      }
    });
  });
}
function effectTarget(effectParams, slideEl) {
  const transformEl = getSlideTransformEl(slideEl);
  if (transformEl !== slideEl) {
    transformEl.style.backfaceVisibility = "hidden";
    transformEl.style["-webkit-backface-visibility"] = "hidden";
  }
  return transformEl;
}
function effectVirtualTransitionEnd({
  swiper,
  duration,
  transformElements,
  allSlides
}) {
  const {
    activeIndex
  } = swiper;
  const getSlide = (el) => {
    if (!el.parentElement) {
      const slide2 = swiper.slides.filter((slideEl) => slideEl.shadowEl && slideEl.shadowEl === el.parentNode)[0];
      return slide2;
    }
    return el.parentElement;
  };
  if (swiper.params.virtualTranslate && duration !== 0) {
    let eventTriggered = false;
    let transitionEndTarget;
    if (allSlides) {
      transitionEndTarget = transformElements;
    } else {
      transitionEndTarget = transformElements.filter((transformEl) => {
        const el = transformEl.classList.contains("swiper-slide-transform") ? getSlide(transformEl) : transformEl;
        return swiper.getSlideIndex(el) === activeIndex;
      });
    }
    transitionEndTarget.forEach((el) => {
      elementTransitionEnd(el, () => {
        if (eventTriggered)
          return;
        if (!swiper || swiper.destroyed)
          return;
        eventTriggered = true;
        swiper.animating = false;
        const evt = new window.CustomEvent("transitionend", {
          bubbles: true,
          cancelable: true
        });
        swiper.wrapperEl.dispatchEvent(evt);
      });
    });
  }
}
function createShadow(params, slideEl, side) {
  const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ""}`;
  const shadowContainer = getSlideTransformEl(slideEl);
  let shadowEl = shadowContainer.querySelector(`.${shadowClass}`);
  if (!shadowEl) {
    shadowEl = createElement("div", `swiper-slide-shadow${side ? `-${side}` : ""}`);
    shadowContainer.append(shadowEl);
  }
  return shadowEl;
}
function EffectCreative({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    creativeEffect: {
      limitProgress: 1,
      shadowPerProgress: false,
      progressMultiplier: 1,
      perspective: true,
      prev: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      },
      next: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      }
    }
  });
  const getTranslateValue = (value) => {
    if (typeof value === "string")
      return value;
    return `${value}px`;
  };
  const setTranslate2 = () => {
    const {
      slides,
      wrapperEl,
      slidesSizesGrid
    } = swiper;
    const params = swiper.params.creativeEffect;
    const {
      progressMultiplier: multiplier
    } = params;
    const isCenteredSlides = swiper.params.centeredSlides;
    if (isCenteredSlides) {
      const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
      wrapperEl.style.transform = `translateX(calc(50% - ${margin}px))`;
    }
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      const slideProgress = slideEl.progress;
      const progress = Math.min(Math.max(slideEl.progress, -params.limitProgress), params.limitProgress);
      let originalProgress = progress;
      if (!isCenteredSlides) {
        originalProgress = Math.min(Math.max(slideEl.originalProgress, -params.limitProgress), params.limitProgress);
      }
      const offset = slideEl.swiperSlideOffset;
      const t = [swiper.params.cssMode ? -offset - swiper.translate : -offset, 0, 0];
      const r = [0, 0, 0];
      let custom = false;
      if (!swiper.isHorizontal()) {
        t[1] = t[0];
        t[0] = 0;
      }
      let data = {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        scale: 1,
        opacity: 1
      };
      if (progress < 0) {
        data = params.next;
        custom = true;
      } else if (progress > 0) {
        data = params.prev;
        custom = true;
      }
      t.forEach((value, index) => {
        t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
      });
      r.forEach((value, index) => {
        r[index] = data.rotate[index] * Math.abs(progress * multiplier);
      });
      slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
      const translateString = t.join(", ");
      const rotateString = `rotateX(${r[0]}deg) rotateY(${r[1]}deg) rotateZ(${r[2]}deg)`;
      const scaleString = originalProgress < 0 ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})` : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
      const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
      const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`;
      if (custom && data.shadow || !custom) {
        let shadowEl = slideEl.querySelector(".swiper-slide-shadow");
        if (!shadowEl && data.shadow) {
          shadowEl = createShadow(params, slideEl);
        }
        if (shadowEl) {
          const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
          shadowEl.style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
        }
      }
      const targetEl = effectTarget(params, slideEl);
      targetEl.style.transform = transform;
      targetEl.style.opacity = opacityString;
      if (data.origin) {
        targetEl.style.transformOrigin = data.origin;
      }
    }
  };
  const setTransition2 = (duration) => {
    const transformElements = swiper.slides.map((slideEl) => getSlideTransformEl(slideEl));
    transformElements.forEach((el) => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll(".swiper-slide-shadow").forEach((shadowEl) => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    effectVirtualTransitionEnd({
      swiper,
      duration,
      transformElements,
      allSlides: true
    });
  };
  effectInit({
    effect: "creative",
    swiper,
    on,
    setTranslate: setTranslate2,
    setTransition: setTransition2,
    perspective: () => swiper.params.creativeEffect.perspective,
    overwriteParams: () => ({
      watchSlidesProgress: true,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}
function isObject(o) {
  return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
}
function extend(target, src) {
  const noExtend = ["__proto__", "constructor", "prototype"];
  Object.keys(src).filter((key) => noExtend.indexOf(key) < 0).forEach((key) => {
    if (typeof target[key] === "undefined")
      target[key] = src[key];
    else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
      if (src[key].__swiper__)
        target[key] = src[key];
      else
        extend(target[key], src[key]);
    } else {
      target[key] = src[key];
    }
  });
}
function needsNavigation(params = {}) {
  return params.navigation && typeof params.navigation.nextEl === "undefined" && typeof params.navigation.prevEl === "undefined";
}
function needsPagination(params = {}) {
  return params.pagination && typeof params.pagination.el === "undefined";
}
function needsScrollbar(params = {}) {
  return params.scrollbar && typeof params.scrollbar.el === "undefined";
}
function uniqueClasses(classNames = "") {
  const classes2 = classNames.split(" ").map((c) => c.trim()).filter((c) => !!c);
  const unique = [];
  classes2.forEach((c) => {
    if (unique.indexOf(c) < 0)
      unique.push(c);
  });
  return unique.join(" ");
}
function wrapperClass(className = "") {
  if (!className)
    return "swiper-wrapper";
  if (!className.includes("swiper-wrapper"))
    return `swiper-wrapper ${className}`;
  return className;
}
const paramsList = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopedSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  // modules
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control"
];
function getParams(obj = {}, splitEvents = true) {
  const params = {
    on: {}
  };
  const events2 = {};
  const passedParams = {};
  extend(params, Swiper$1.defaults);
  extend(params, Swiper$1.extendedDefaults);
  params._emitClasses = true;
  params.init = false;
  const rest = {};
  const allowedParams = paramsList.map((key) => key.replace(/_/, ""));
  const plainObj = Object.assign({}, obj);
  Object.keys(plainObj).forEach((key) => {
    if (typeof obj[key] === "undefined")
      return;
    if (allowedParams.indexOf(key) >= 0) {
      if (isObject(obj[key])) {
        params[key] = {};
        passedParams[key] = {};
        extend(params[key], obj[key]);
        extend(passedParams[key], obj[key]);
      } else {
        params[key] = obj[key];
        passedParams[key] = obj[key];
      }
    } else if (key.search(/on[A-Z]/) === 0 && typeof obj[key] === "function") {
      if (splitEvents) {
        events2[`${key[2].toLowerCase()}${key.substr(3)}`] = obj[key];
      } else {
        params.on[`${key[2].toLowerCase()}${key.substr(3)}`] = obj[key];
      }
    } else {
      rest[key] = obj[key];
    }
  });
  ["navigation", "pagination", "scrollbar"].forEach((key) => {
    if (params[key] === true)
      params[key] = {};
    if (params[key] === false)
      delete params[key];
  });
  return {
    params,
    passedParams,
    rest,
    events: events2
  };
}
function getChangedParams(swiperParams, oldParams, children, oldChildren, getKey) {
  const keys = [];
  if (!oldParams)
    return keys;
  const addKey = (key) => {
    if (keys.indexOf(key) < 0)
      keys.push(key);
  };
  if (children && oldChildren) {
    const oldChildrenKeys = oldChildren.map(getKey);
    const childrenKeys = children.map(getKey);
    if (oldChildrenKeys.join("") !== childrenKeys.join(""))
      addKey("children");
    if (oldChildren.length !== children.length)
      addKey("children");
  }
  const watchParams = paramsList.filter((key) => key[0] === "_").map((key) => key.replace(/_/, ""));
  watchParams.forEach((key) => {
    if (key in swiperParams && key in oldParams) {
      if (isObject(swiperParams[key]) && isObject(oldParams[key])) {
        const newKeys = Object.keys(swiperParams[key]);
        const oldKeys = Object.keys(oldParams[key]);
        if (newKeys.length !== oldKeys.length) {
          addKey(key);
        } else {
          newKeys.forEach((newKey) => {
            if (swiperParams[key][newKey] !== oldParams[key][newKey]) {
              addKey(key);
            }
          });
          oldKeys.forEach((oldKey) => {
            if (swiperParams[key][oldKey] !== oldParams[key][oldKey])
              addKey(key);
          });
        }
      } else if (swiperParams[key] !== oldParams[key]) {
        addKey(key);
      }
    }
  });
  return keys;
}
function getChildren(originalSlots, slidesRef, oldSlidesRef) {
  if (originalSlots === void 0) {
    originalSlots = {};
  }
  const slides = [];
  const slots = {
    "container-start": [],
    "container-end": [],
    "wrapper-start": [],
    "wrapper-end": []
  };
  const getSlidesFromElements = (els, slotName) => {
    if (!Array.isArray(els)) {
      return;
    }
    els.forEach((vnode) => {
      const isFragment = typeof vnode.type === "symbol";
      if (slotName === "default")
        slotName = "container-end";
      if (isFragment && vnode.children) {
        getSlidesFromElements(vnode.children, slotName);
      } else if (vnode.type && (vnode.type.name === "SwiperSlide" || vnode.type.name === "AsyncComponentWrapper")) {
        slides.push(vnode);
      } else if (slots[slotName]) {
        slots[slotName].push(vnode);
      }
    });
  };
  Object.keys(originalSlots).forEach((slotName) => {
    if (typeof originalSlots[slotName] !== "function")
      return;
    const els = originalSlots[slotName]();
    getSlidesFromElements(els, slotName);
  });
  oldSlidesRef.value = slidesRef.value;
  slidesRef.value = slides;
  return {
    slides,
    slots
  };
}
function updateSwiper({
  swiper,
  slides,
  passedParams,
  changedParams,
  nextEl,
  prevEl,
  scrollbarEl,
  paginationEl
}) {
  const updateParams = changedParams.filter((key) => key !== "children" && key !== "direction" && key !== "wrapperClass");
  const {
    params: currentParams,
    pagination,
    navigation,
    scrollbar,
    virtual,
    thumbs
  } = swiper;
  let needThumbsInit;
  let needControllerInit;
  let needPaginationInit;
  let needScrollbarInit;
  let needNavigationInit;
  let loopNeedDestroy;
  let loopNeedEnable;
  let loopNeedReloop;
  if (changedParams.includes("thumbs") && passedParams.thumbs && passedParams.thumbs.swiper && currentParams.thumbs && !currentParams.thumbs.swiper) {
    needThumbsInit = true;
  }
  if (changedParams.includes("controller") && passedParams.controller && passedParams.controller.control && currentParams.controller && !currentParams.controller.control) {
    needControllerInit = true;
  }
  if (changedParams.includes("pagination") && passedParams.pagination && (passedParams.pagination.el || paginationEl) && (currentParams.pagination || currentParams.pagination === false) && pagination && !pagination.el) {
    needPaginationInit = true;
  }
  if (changedParams.includes("scrollbar") && passedParams.scrollbar && (passedParams.scrollbar.el || scrollbarEl) && (currentParams.scrollbar || currentParams.scrollbar === false) && scrollbar && !scrollbar.el) {
    needScrollbarInit = true;
  }
  if (changedParams.includes("navigation") && passedParams.navigation && (passedParams.navigation.prevEl || prevEl) && (passedParams.navigation.nextEl || nextEl) && (currentParams.navigation || currentParams.navigation === false) && navigation && !navigation.prevEl && !navigation.nextEl) {
    needNavigationInit = true;
  }
  const destroyModule = (mod) => {
    if (!swiper[mod])
      return;
    swiper[mod].destroy();
    if (mod === "navigation") {
      if (swiper.isElement) {
        swiper[mod].prevEl.remove();
        swiper[mod].nextEl.remove();
      }
      currentParams[mod].prevEl = void 0;
      currentParams[mod].nextEl = void 0;
      swiper[mod].prevEl = void 0;
      swiper[mod].nextEl = void 0;
    } else {
      if (swiper.isElement) {
        swiper[mod].el.remove();
      }
      currentParams[mod].el = void 0;
      swiper[mod].el = void 0;
    }
  };
  if (changedParams.includes("loop") && swiper.isElement) {
    if (currentParams.loop && !passedParams.loop) {
      loopNeedDestroy = true;
    } else if (!currentParams.loop && passedParams.loop) {
      loopNeedEnable = true;
    } else {
      loopNeedReloop = true;
    }
  }
  updateParams.forEach((key) => {
    if (isObject(currentParams[key]) && isObject(passedParams[key])) {
      extend(currentParams[key], passedParams[key]);
      if ((key === "navigation" || key === "pagination" || key === "scrollbar") && "enabled" in passedParams[key] && !passedParams[key].enabled) {
        destroyModule(key);
      }
    } else {
      const newValue = passedParams[key];
      if ((newValue === true || newValue === false) && (key === "navigation" || key === "pagination" || key === "scrollbar")) {
        if (newValue === false) {
          destroyModule(key);
        }
      } else {
        currentParams[key] = passedParams[key];
      }
    }
  });
  if (updateParams.includes("controller") && !needControllerInit && swiper.controller && swiper.controller.control && currentParams.controller && currentParams.controller.control) {
    swiper.controller.control = currentParams.controller.control;
  }
  if (changedParams.includes("children") && slides && virtual && currentParams.virtual.enabled) {
    virtual.slides = slides;
    virtual.update(true);
  }
  if (changedParams.includes("children") && slides && currentParams.loop) {
    loopNeedReloop = true;
  }
  if (needThumbsInit) {
    const initialized = thumbs.init();
    if (initialized)
      thumbs.update(true);
  }
  if (needControllerInit) {
    swiper.controller.control = currentParams.controller.control;
  }
  if (needPaginationInit) {
    if (swiper.isElement && (!paginationEl || typeof paginationEl === "string")) {
      paginationEl = document.createElement("div");
      paginationEl.classList.add("swiper-pagination");
      swiper.el.shadowEl.appendChild(paginationEl);
    }
    if (paginationEl)
      currentParams.pagination.el = paginationEl;
    pagination.init();
    pagination.render();
    pagination.update();
  }
  if (needScrollbarInit) {
    if (swiper.isElement && (!scrollbarEl || typeof scrollbarEl === "string")) {
      scrollbarEl = document.createElement("div");
      scrollbarEl.classList.add("swiper-scrollbar");
      swiper.el.shadowEl.appendChild(scrollbarEl);
    }
    if (scrollbarEl)
      currentParams.scrollbar.el = scrollbarEl;
    scrollbar.init();
    scrollbar.updateSize();
    scrollbar.setTranslate();
  }
  if (needNavigationInit) {
    if (swiper.isElement) {
      if (!nextEl || typeof nextEl === "string") {
        nextEl = document.createElement("div");
        nextEl.classList.add("swiper-button-next");
        swiper.el.shadowEl.appendChild(nextEl);
      }
      if (!prevEl || typeof prevEl === "string") {
        prevEl = document.createElement("div");
        prevEl.classList.add("swiper-button-prev");
        swiper.el.shadowEl.appendChild(prevEl);
      }
    }
    if (nextEl)
      currentParams.navigation.nextEl = nextEl;
    if (prevEl)
      currentParams.navigation.prevEl = prevEl;
    navigation.init();
    navigation.update();
  }
  if (changedParams.includes("allowSlideNext")) {
    swiper.allowSlideNext = passedParams.allowSlideNext;
  }
  if (changedParams.includes("allowSlidePrev")) {
    swiper.allowSlidePrev = passedParams.allowSlidePrev;
  }
  if (changedParams.includes("direction")) {
    swiper.changeDirection(passedParams.direction, false);
  }
  if (loopNeedDestroy || loopNeedReloop) {
    swiper.loopDestroy();
  }
  if (loopNeedEnable || loopNeedReloop) {
    swiper.loopCreate();
  }
  swiper.update();
}
function renderVirtual(swiperRef, slides, virtualData) {
  if (!virtualData)
    return null;
  const getSlideIndex = (index) => {
    let slideIndex = index;
    if (index < 0) {
      slideIndex = slides.length + index;
    } else if (slideIndex >= slides.length) {
      slideIndex = slideIndex - slides.length;
    }
    return slideIndex;
  };
  const style = swiperRef.value.isHorizontal() ? {
    [swiperRef.value.rtlTranslate ? "right" : "left"]: `${virtualData.offset}px`
  } : {
    top: `${virtualData.offset}px`
  };
  const {
    from,
    to
  } = virtualData;
  const loopFrom = swiperRef.value.params.loop ? -slides.length : 0;
  const loopTo = swiperRef.value.params.loop ? slides.length * 2 : slides.length;
  const slidesToRender = [];
  for (let i = loopFrom; i < loopTo; i += 1) {
    if (i >= from && i <= to) {
      slidesToRender.push(slides[getSlideIndex(i)]);
    }
  }
  return slidesToRender.map((slide2) => {
    if (!slide2.props)
      slide2.props = {};
    if (!slide2.props.style)
      slide2.props.style = {};
    slide2.props.swiperRef = swiperRef;
    slide2.props.style = style;
    return h(slide2.type, {
      ...slide2.props
    }, slide2.children);
  });
}
const updateOnVirtualData = (swiper) => {
  if (!swiper || swiper.destroyed || !swiper.params.virtual || swiper.params.virtual && !swiper.params.virtual.enabled)
    return;
  swiper.updateSlides();
  swiper.updateProgress();
  swiper.updateSlidesClasses();
  if (swiper.parallax && swiper.params.parallax && swiper.params.parallax.enabled) {
    swiper.parallax.setTranslate();
  }
};
const Swiper2 = {
  name: "Swiper",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    wrapperTag: {
      type: String,
      default: "div"
    },
    modules: {
      type: Array,
      default: void 0
    },
    init: {
      type: Boolean,
      default: void 0
    },
    direction: {
      type: String,
      default: void 0
    },
    oneWayMovement: {
      type: Boolean,
      default: void 0
    },
    touchEventsTarget: {
      type: String,
      default: void 0
    },
    initialSlide: {
      type: Number,
      default: void 0
    },
    speed: {
      type: Number,
      default: void 0
    },
    cssMode: {
      type: Boolean,
      default: void 0
    },
    updateOnWindowResize: {
      type: Boolean,
      default: void 0
    },
    resizeObserver: {
      type: Boolean,
      default: void 0
    },
    nested: {
      type: Boolean,
      default: void 0
    },
    focusableElements: {
      type: String,
      default: void 0
    },
    width: {
      type: Number,
      default: void 0
    },
    height: {
      type: Number,
      default: void 0
    },
    preventInteractionOnTransition: {
      type: Boolean,
      default: void 0
    },
    userAgent: {
      type: String,
      default: void 0
    },
    url: {
      type: String,
      default: void 0
    },
    edgeSwipeDetection: {
      type: [Boolean, String],
      default: void 0
    },
    edgeSwipeThreshold: {
      type: Number,
      default: void 0
    },
    autoHeight: {
      type: Boolean,
      default: void 0
    },
    setWrapperSize: {
      type: Boolean,
      default: void 0
    },
    virtualTranslate: {
      type: Boolean,
      default: void 0
    },
    effect: {
      type: String,
      default: void 0
    },
    breakpoints: {
      type: Object,
      default: void 0
    },
    spaceBetween: {
      type: [Number, String],
      default: void 0
    },
    slidesPerView: {
      type: [Number, String],
      default: void 0
    },
    maxBackfaceHiddenSlides: {
      type: Number,
      default: void 0
    },
    slidesPerGroup: {
      type: Number,
      default: void 0
    },
    slidesPerGroupSkip: {
      type: Number,
      default: void 0
    },
    slidesPerGroupAuto: {
      type: Boolean,
      default: void 0
    },
    centeredSlides: {
      type: Boolean,
      default: void 0
    },
    centeredSlidesBounds: {
      type: Boolean,
      default: void 0
    },
    slidesOffsetBefore: {
      type: Number,
      default: void 0
    },
    slidesOffsetAfter: {
      type: Number,
      default: void 0
    },
    normalizeSlideIndex: {
      type: Boolean,
      default: void 0
    },
    centerInsufficientSlides: {
      type: Boolean,
      default: void 0
    },
    watchOverflow: {
      type: Boolean,
      default: void 0
    },
    roundLengths: {
      type: Boolean,
      default: void 0
    },
    touchRatio: {
      type: Number,
      default: void 0
    },
    touchAngle: {
      type: Number,
      default: void 0
    },
    simulateTouch: {
      type: Boolean,
      default: void 0
    },
    shortSwipes: {
      type: Boolean,
      default: void 0
    },
    longSwipes: {
      type: Boolean,
      default: void 0
    },
    longSwipesRatio: {
      type: Number,
      default: void 0
    },
    longSwipesMs: {
      type: Number,
      default: void 0
    },
    followFinger: {
      type: Boolean,
      default: void 0
    },
    allowTouchMove: {
      type: Boolean,
      default: void 0
    },
    threshold: {
      type: Number,
      default: void 0
    },
    touchMoveStopPropagation: {
      type: Boolean,
      default: void 0
    },
    touchStartPreventDefault: {
      type: Boolean,
      default: void 0
    },
    touchStartForcePreventDefault: {
      type: Boolean,
      default: void 0
    },
    touchReleaseOnEdges: {
      type: Boolean,
      default: void 0
    },
    uniqueNavElements: {
      type: Boolean,
      default: void 0
    },
    resistance: {
      type: Boolean,
      default: void 0
    },
    resistanceRatio: {
      type: Number,
      default: void 0
    },
    watchSlidesProgress: {
      type: Boolean,
      default: void 0
    },
    grabCursor: {
      type: Boolean,
      default: void 0
    },
    preventClicks: {
      type: Boolean,
      default: void 0
    },
    preventClicksPropagation: {
      type: Boolean,
      default: void 0
    },
    slideToClickedSlide: {
      type: Boolean,
      default: void 0
    },
    loop: {
      type: Boolean,
      default: void 0
    },
    loopedSlides: {
      type: Number,
      default: void 0
    },
    loopPreventsSliding: {
      type: Boolean,
      default: void 0
    },
    rewind: {
      type: Boolean,
      default: void 0
    },
    allowSlidePrev: {
      type: Boolean,
      default: void 0
    },
    allowSlideNext: {
      type: Boolean,
      default: void 0
    },
    swipeHandler: {
      type: Boolean,
      default: void 0
    },
    noSwiping: {
      type: Boolean,
      default: void 0
    },
    noSwipingClass: {
      type: String,
      default: void 0
    },
    noSwipingSelector: {
      type: String,
      default: void 0
    },
    passiveListeners: {
      type: Boolean,
      default: void 0
    },
    containerModifierClass: {
      type: String,
      default: void 0
    },
    slideClass: {
      type: String,
      default: void 0
    },
    slideActiveClass: {
      type: String,
      default: void 0
    },
    slideVisibleClass: {
      type: String,
      default: void 0
    },
    slideNextClass: {
      type: String,
      default: void 0
    },
    slidePrevClass: {
      type: String,
      default: void 0
    },
    wrapperClass: {
      type: String,
      default: void 0
    },
    lazyPreloaderClass: {
      type: String,
      default: void 0
    },
    lazyPreloadPrevNext: {
      type: Number,
      default: void 0
    },
    runCallbacksOnInit: {
      type: Boolean,
      default: void 0
    },
    observer: {
      type: Boolean,
      default: void 0
    },
    observeParents: {
      type: Boolean,
      default: void 0
    },
    observeSlideChildren: {
      type: Boolean,
      default: void 0
    },
    a11y: {
      type: [Boolean, Object],
      default: void 0
    },
    autoplay: {
      type: [Boolean, Object],
      default: void 0
    },
    controller: {
      type: Object,
      default: void 0
    },
    coverflowEffect: {
      type: Object,
      default: void 0
    },
    cubeEffect: {
      type: Object,
      default: void 0
    },
    fadeEffect: {
      type: Object,
      default: void 0
    },
    flipEffect: {
      type: Object,
      default: void 0
    },
    creativeEffect: {
      type: Object,
      default: void 0
    },
    cardsEffect: {
      type: Object,
      default: void 0
    },
    hashNavigation: {
      type: [Boolean, Object],
      default: void 0
    },
    history: {
      type: [Boolean, Object],
      default: void 0
    },
    keyboard: {
      type: [Boolean, Object],
      default: void 0
    },
    mousewheel: {
      type: [Boolean, Object],
      default: void 0
    },
    navigation: {
      type: [Boolean, Object],
      default: void 0
    },
    pagination: {
      type: [Boolean, Object],
      default: void 0
    },
    parallax: {
      type: [Boolean, Object],
      default: void 0
    },
    scrollbar: {
      type: [Boolean, Object],
      default: void 0
    },
    thumbs: {
      type: Object,
      default: void 0
    },
    virtual: {
      type: [Boolean, Object],
      default: void 0
    },
    zoom: {
      type: [Boolean, Object],
      default: void 0
    },
    grid: {
      type: [Object],
      default: void 0
    },
    freeMode: {
      type: [Boolean, Object],
      default: void 0
    },
    enabled: {
      type: Boolean,
      default: void 0
    }
  },
  emits: ["_beforeBreakpoint", "_containerClasses", "_slideClass", "_slideClasses", "_swiper", "_freeModeNoMomentumRelease", "activeIndexChange", "afterInit", "autoplay", "autoplayStart", "autoplayStop", "autoplayPause", "autoplayResume", "autoplayTimeLeft", "beforeDestroy", "beforeInit", "beforeLoopFix", "beforeResize", "beforeSlideChangeStart", "beforeTransitionStart", "breakpoint", "changeDirection", "click", "disable", "doubleTap", "doubleClick", "destroy", "enable", "fromEdge", "hashChange", "hashSet", "init", "keyPress", "lock", "loopFix", "momentumBounce", "navigationHide", "navigationShow", "navigationPrev", "navigationNext", "observerUpdate", "orientationchange", "paginationHide", "paginationRender", "paginationShow", "paginationUpdate", "progress", "reachBeginning", "reachEnd", "realIndexChange", "resize", "scroll", "scrollbarDragEnd", "scrollbarDragMove", "scrollbarDragStart", "setTransition", "setTranslate", "slideChange", "slideChangeTransitionEnd", "slideChangeTransitionStart", "slideNextTransitionEnd", "slideNextTransitionStart", "slidePrevTransitionEnd", "slidePrevTransitionStart", "slideResetTransitionStart", "slideResetTransitionEnd", "sliderMove", "sliderFirstMove", "slidesLengthChange", "slidesGridLengthChange", "snapGridLengthChange", "snapIndexChange", "swiper", "tap", "toEdge", "touchEnd", "touchMove", "touchMoveOpposite", "touchStart", "transitionEnd", "transitionStart", "unlock", "update", "virtualUpdate", "zoomChange"],
  setup(props, _ref) {
    let {
      slots: originalSlots,
      emit
    } = _ref;
    const {
      tag: Tag,
      wrapperTag: WrapperTag
    } = props;
    const containerClasses = ref("swiper");
    const virtualData = ref(null);
    const breakpointChanged = ref(false);
    const initializedRef = ref(false);
    const swiperElRef = ref(null);
    const swiperRef = ref(null);
    const oldPassedParamsRef = ref(null);
    const slidesRef = {
      value: []
    };
    const oldSlidesRef = {
      value: []
    };
    const nextElRef = ref(null);
    const prevElRef = ref(null);
    const paginationElRef = ref(null);
    const scrollbarElRef = ref(null);
    const {
      params: swiperParams,
      passedParams
    } = getParams(props, false);
    getChildren(originalSlots, slidesRef, oldSlidesRef);
    oldPassedParamsRef.value = passedParams;
    oldSlidesRef.value = slidesRef.value;
    const onBeforeBreakpoint = () => {
      getChildren(originalSlots, slidesRef, oldSlidesRef);
      breakpointChanged.value = true;
    };
    swiperParams.onAny = function(event) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      emit(event, ...args);
    };
    Object.assign(swiperParams.on, {
      _beforeBreakpoint: onBeforeBreakpoint,
      _containerClasses(swiper, classes2) {
        containerClasses.value = classes2;
      }
    });
    const passParams = {
      ...swiperParams
    };
    delete passParams.wrapperClass;
    swiperRef.value = new Swiper$1(passParams);
    if (swiperRef.value.virtual && swiperRef.value.params.virtual.enabled) {
      swiperRef.value.virtual.slides = slidesRef.value;
      const extendWith = {
        cache: false,
        slides: slidesRef.value,
        renderExternal: (data) => {
          virtualData.value = data;
        },
        renderExternalUpdate: false
      };
      extend(swiperRef.value.params.virtual, extendWith);
      extend(swiperRef.value.originalParams.virtual, extendWith);
    }
    onUpdated(() => {
      if (!initializedRef.value && swiperRef.value) {
        swiperRef.value.emitSlidesClasses();
        initializedRef.value = true;
      }
      const {
        passedParams: newPassedParams
      } = getParams(props, false);
      const changedParams = getChangedParams(newPassedParams, oldPassedParamsRef.value, slidesRef.value, oldSlidesRef.value, (c) => c.props && c.props.key);
      oldPassedParamsRef.value = newPassedParams;
      if ((changedParams.length || breakpointChanged.value) && swiperRef.value && !swiperRef.value.destroyed) {
        updateSwiper({
          swiper: swiperRef.value,
          slides: slidesRef.value,
          passedParams: newPassedParams,
          changedParams,
          nextEl: nextElRef.value,
          prevEl: prevElRef.value,
          scrollbarEl: scrollbarElRef.value,
          paginationEl: paginationElRef.value
        });
      }
      breakpointChanged.value = false;
    });
    provide("swiper", swiperRef);
    watch(virtualData, () => {
      nextTick$1(() => {
        updateOnVirtualData(swiperRef.value);
      });
    });
    function renderSlides(slides) {
      if (swiperParams.virtual) {
        return renderVirtual(swiperRef, slides, virtualData.value);
      }
      slides.forEach((slide2, index) => {
        if (!slide2.props)
          slide2.props = {};
        slide2.props.swiperRef = swiperRef;
        slide2.props.swiperSlideIndex = index;
      });
      return slides;
    }
    return () => {
      const {
        slides,
        slots
      } = getChildren(originalSlots, slidesRef, oldSlidesRef);
      return h(Tag, {
        ref: swiperElRef,
        class: uniqueClasses(containerClasses.value)
      }, [slots["container-start"], h(WrapperTag, {
        class: wrapperClass(swiperParams.wrapperClass)
      }, [slots["wrapper-start"], renderSlides(slides), slots["wrapper-end"]]), needsNavigation(props) && [h("div", {
        ref: prevElRef,
        class: "swiper-button-prev"
      }), h("div", {
        ref: nextElRef,
        class: "swiper-button-next"
      })], needsScrollbar(props) && h("div", {
        ref: scrollbarElRef,
        class: "swiper-scrollbar"
      }), needsPagination(props) && h("div", {
        ref: paginationElRef,
        class: "swiper-pagination"
      }), slots["container-end"]]);
    };
  }
};
const SwiperSlide = {
  name: "SwiperSlide",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    swiperRef: {
      type: Object,
      required: false
    },
    swiperSlideIndex: {
      type: Number,
      default: void 0,
      required: false
    },
    zoom: {
      type: Boolean,
      default: void 0,
      required: false
    },
    lazy: {
      type: Boolean,
      default: false,
      required: false
    },
    virtualIndex: {
      type: [String, Number],
      default: void 0
    }
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      swiperRef
    } = props;
    const slideElRef = ref(null);
    const slideClasses = ref("swiper-slide");
    const lazyLoaded = ref(false);
    onUpdated(() => {
      if (!slideElRef.value || !swiperRef || !swiperRef.value)
        return;
      if (typeof props.swiperSlideIndex !== "undefined") {
        slideElRef.value.swiperSlideIndex = props.swiperSlideIndex;
      }
      if (swiperRef.value.destroyed) {
        if (slideClasses.value !== "swiper-slide") {
          slideClasses.value = "swiper-slide";
        }
      }
    });
    const slideData = computed(() => ({
      isActive: slideClasses.value.indexOf("swiper-slide-active") >= 0,
      isVisible: slideClasses.value.indexOf("swiper-slide-visible") >= 0,
      isPrev: slideClasses.value.indexOf("swiper-slide-prev") >= 0,
      isNext: slideClasses.value.indexOf("swiper-slide-next") >= 0
    }));
    provide("swiperSlide", slideData);
    const onLoad2 = () => {
      lazyLoaded.value = true;
    };
    return () => {
      return h(props.tag, {
        class: uniqueClasses(`${slideClasses.value}`),
        ref: slideElRef,
        "data-swiper-slide-index": typeof props.virtualIndex === "undefined" && swiperRef && swiperRef.value && swiperRef.value.params.loop ? props.swiperSlideIndex : props.virtualIndex,
        onLoadCapture: onLoad2
      }, props.zoom ? h("div", {
        class: "swiper-zoom-container",
        "data-swiper-zoom": typeof props.zoom === "number" ? props.zoom : void 0
      }, [slots.default && slots.default(slideData.value), props.lazy && !lazyLoaded.value && h("div", {
        class: "swiper-lazy-preloader"
      })]) : [slots.default && slots.default(slideData.value), props.lazy && !lazyLoaded.value && h("div", {
        class: "swiper-lazy-preloader"
      })]);
    };
  }
};

export { Autoplay as A, EffectCreative as E, Navigation as N, Scrollbar as S, Swiper2 as a, SwiperSlide as b, a11y_min as c, effectCreative_min as d, effectCards_min as e, effectCube_min as f, effectFade_min as g, effectFlip_min as h, freeMode_min as i, grid_min as j, scrollbar_min as k, navigation_min as n, pagination_min as p, swiper_min as s, virtual_min as v, zoom_min as z };
//# sourceMappingURL=entry-styles-3.mjs-1aee3127.mjs.map
