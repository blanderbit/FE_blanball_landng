import Meta from "./plugins/meta";

require("dotenv").config({ path: "./stack.env" });

const globalVariables = {
  "process.env": process.env
};

export default defineNuxtConfig({
  loading: "~/components/loading.vue",
  css: ["~/assets/styles/base.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  vite: {
    define: globalVariables
  },
  plugins: [{ src: "~/plugins/aos", mode: "client" }],
  app: {
    head: {
      title: "Blanball",
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
      meta: Meta
    }
  },
  modules: [
    "@nuxtjs/robots",
    ["@funken-studio/sitemap-nuxt-3", { generateOnBuild: true }]
  ],

  pushAssets: (req, res, publicPath, preloadFiles) =>
    preloadFiles.filter(
      (f) => f.asType === "script" && f.file === "runtime.js"
    ),

  build: {
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        removeComments: true,
        preserveLineBreaks: false,
        collapseWhitespace: true
      }
    }
  },

  sitemap: {
    cacheTime: 1,
    hostname: process.env.HOST_NAME,
    defaults: {
      changefreq: "daily",
      priority: 1,
      lastmod: new Date().toISOString()
    }
  }
});
