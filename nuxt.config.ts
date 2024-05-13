// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
