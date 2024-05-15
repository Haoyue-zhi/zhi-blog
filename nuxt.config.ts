export default defineNuxtConfig({
  modules: [
    "@vueuse/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "nuxt-icon",
    "nuxt-aos",
    "@vueuse/motion/nuxt",
  ],
  app: {
    baseURL: "/zhi-blog",
    head: {
      title: "凪. Blog",
      link: [{ rel: "icon", type: "image/x-icon", href: "favicon.ico" }],
    },
  },
  devtools: { enabled: false },
  devServer: {
    port: 3333,
  },
});
