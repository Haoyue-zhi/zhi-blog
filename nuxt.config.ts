export default defineNuxtConfig({
  modules: [
    "@vueuse/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "nuxt-icon",
    "nuxt-aos",
  ],
  app: {
    baseURL: "/zhi-blog/",
  },
  devtools: { enabled: false },
  devServer: {
    port: 3333,
  },
});
