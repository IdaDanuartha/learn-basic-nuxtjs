// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: "Nuxtjs 3 App",
      meta: [
        {name: "description", content: "This is a website that explain all of about nuxtjs"}
      ],
      link: [
        {rel: "shortcut icon", type: "image/x-icon", href: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/985px-Laravel.svg.png"}
      ]
    }
  },
  runtimeConfig: {
    apiKey: process.env.OMDB_API_KEY
  }
})
