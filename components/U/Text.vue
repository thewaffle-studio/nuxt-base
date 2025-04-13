<script setup lang="ts">
type Props = {
   as?: string;
   variant?: "default" | "subtle";
};
const { as = "p", variant = "default" } = defineProps<Props>();

const classes = tv({
   variants: {
      variant: {
         default: "text-base",
         subtle: "text-sm",
      },
   },
});
</script>

<template>
   <component :is="as" :class="classes({ variant })" v-tw-merge>
      <slot />
   </component>
</template>
