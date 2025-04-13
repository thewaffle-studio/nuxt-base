import { twMerge } from "tailwind-merge";
import type { DirectiveHook } from "vue";

type DirVNode = {
   ctx?: {
      attrs?: {
         class?: string;
      };
   };
};

export default defineNuxtPlugin((nuxtApp) => {
   const hook: DirectiveHook<HTMLElement> = (el, binding, vnode) => {
      const node = vnode as DirVNode;

      const elClass = el?.classList?.value ?? "";
      const vClass = node?.ctx?.attrs?.class ?? "";

      // no need to merge classes if both are empty
      if (elClass.length < 1 && vClass.length < 1) return;

      el.classList.value = twMerge(elClass, vClass);
   };

   nuxtApp.vueApp.directive("twMerge", {
      mounted: hook,
      beforeMount: hook,
   });
});
