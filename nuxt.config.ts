// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/zhi-blog/",
    // buildAssetsDir: "/zhi-blog/",
  },

  ssr: false,

  devtools: { enabled: false },

  modules: [
    "@vueuse/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "nuxt-icon",
    "nuxt-aos",
  ],

  devServer: {
    port: 3333,
  },
});
