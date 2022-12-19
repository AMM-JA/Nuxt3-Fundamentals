// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {// FOR ALL PAGE TRANSITION
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
  ],
  imports: {
    dirs: ["stores"],
  },
  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs",
  },
  routeRules: {
    "/spa": { ssr: false },
    "/static": { static: true },
    "/swr": { swr: true },
  },
});
