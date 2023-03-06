// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1.0",
      title: "NaCo's Profile",
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
      ],
      meta: [
        { name: "description", content: "Oranges Are Not the Only Fruit." },
        {
          name: "keywords",
          content: "NaCoLiu,NaCo,NaCo Desgin,LiuChen,Orange,NaCo's Profile",
        },
      ],
    },
  },
  imports: {
    dirs: ["./stores"],
  },
  pinia: {
    autoImports: ["defineStore", "acceptHMRUpdate"],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["~/assets/css/tailwind.css"],
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@pinia/nuxt"],
});
