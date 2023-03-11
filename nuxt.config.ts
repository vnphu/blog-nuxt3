// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  modules: ["@nuxt/content"],
  css: ["@/assets/styles/main.css"],
  components: {
    global: true,
    dirs: ["~/Components/Common"],
  },
  app: {
    head: {
      link: [
        {
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
          rel: "stylesheet",
          integrity:
            "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",
          crossorigin: "anonymous",
        },
        {
          href: "https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css",
          rel: "stylesheet",
        },
        { rel: "icon", type: "image/x-icon", href: "/favicon.svg" },
      ],
      title: "Web Nuxt TS",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "keywords",
          name: "keywords",
          content: "My website,Nuxt3, NuxtJs, SEO, Như Phú",
        },
        {
          hid: "description",
          name: "description",
          content: "This is a description of Phú Dev's website",
        },
        { name: "keywords", content: "Phú Dev's website, SEO, Nuxt.js" },
        { name: "author", content: "Your Name" },
        { name: "robots", content: "index, follow" },
        { property: "og:image", content: "/favicon.svg" },
        { property: "og:title", content: "Phú Dev's Website" },
        {
          property: "og:description",
          content: "This is a description of Phú Dev's website",
        },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Phú Dev's Website" },
        {
          name: "twitter:description",
          content: "This is a description of Phú Dev's website",
        },
      ],
    },
  },
  runtimeConfig: {
    apiSecret: "", // can be overridden by NUXT_API_SECRET environment variable
    public: {
      apiBase: process.env.API_BASE_URL, // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    },
  },
});
