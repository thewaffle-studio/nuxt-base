<script setup lang="ts">
type Props = {
   size?: "default" | "lg" | "xl";
};
const { size = "default" } = defineProps<Props>();

const tag = computed(() => {
   switch (size) {
      case "lg":
         return "h3";
      case "xl":
         return "h1";
      default:
         return "h6";
   }
});

const headingStyles = tv({
   base: "font-medium",
   variants: {
      size: {
         default: "text-base",
         lg: "text-lg",
         xl: "text-2xl",
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
