import tailwindcss from "@tailwindcss/vite";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// To resolve correct path when being used as a layer
const currentDir = dirname(fileURLToPath(import.meta.url));
const resolvePath = (path: string) => resolve(currentDir, path);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   compatibilityDate: "2024-11-01",
   devtools: { enabled: true },
   $meta: {
      name: "nuxt-base", // layer name
   },
   vite: {
      plugins: [tailwindcss()],
   },
   modules: ["@nuxt/ui", "@nuxt/image"],
   plugins: [resolvePath("./plugins/directives/tailwind-merge.ts")],
   css: [resolvePath("./assets/css/main.css")],
});
