// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt"],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  app: {
    head: {
      title: "华夏历史时间线",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "上下五千年，纵横九万里，见证华夏文明的辉煌历程",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&family=Noto+Serif+SC:wght@400;700&display=swap",
        },
      ],
    },
  },

  css: ["~/assets/css/main.css"],

  compatibilityDate: "2024-12-05",
});
