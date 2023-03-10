// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    devProxy: {
      "/api": {
        target: process.env.VITE_API_HOST,
        changeOrigin: true,
      },
    },
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1.0",
      title: "NaCoLiu's Profile",
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
  css: ["~/assets/css/tailwind.css", "~/assets/css/main.scss"],
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@pinia/nuxt"],
});
