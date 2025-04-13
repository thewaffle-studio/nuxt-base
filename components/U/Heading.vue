<script setup lang="ts">
type Props = {
   size?: "default" | "lg" | "xl";
};
const { size = "default" } = defineProps<Props>();

const tag = computed(() => {
   switch (size) {
      case "lg":
         return "h2";
      case "xl":
         return "h1";
      default:
         return "h3";
   }
});

const headingStyles = tv({
   base: "font-bold",
   variants: {
      size: {
         default: "text-2xl",
         lg: "text-3xl",
         xl: "text-4xl",
      },
   },
   defaultVariants: {
      size: "default",
   },
});
</script>

<template>
   <component :is="tag" :class="headingStyles({ size })">
      <slot />
   </component>
</template>
