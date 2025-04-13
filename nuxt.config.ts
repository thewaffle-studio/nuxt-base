import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   compatibilityDate: "2024-11-01",
   devtools: { enabled: true },
   vite: {
      plugins: [tailwindcss()],
   },
   modules: ["@nuxt/ui", "@nuxt/image"],
   plugins: ["~/plugins/tailwind-merge.ts"],
   css: ["~/assets/css/main.css"],
});
