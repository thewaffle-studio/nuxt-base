# Nuxt Base Layer

## Installation

Install dependencies.

```sh
pnpm add @nuxt/image @nuxt/ui tailwindcss @tailwindcss/vite tailwind-variants
```

Create `main.css` file at `assets/css/main.css`.

```
@import "tailwindcss";
@import "@nuxt/ui";
```

Add the repo to your `nuxt.config.ts` file as a layer.

```ts
// nuxt.config.ts
export default defineNuxtConfig({
   extends: ["github:thewaffle-studio/nuxt-base"],
});
```

Run install `pnpm install` to register the layer.

Run `pnpm dev` to start the development server.
