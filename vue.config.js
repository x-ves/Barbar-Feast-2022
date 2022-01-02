module.exports = {
    chainWebpack: config => {
      config.plugins.delete("prefetch");
    },
    pluginOptions: {
      publicPath: "",
      i18n: {
        locale: "et",
        fallbackLocale: "en",
        localeDir: "locales",
        enableInSFC: false
      }
    },
    css: {
      loaderOptions: {
        sass: {
          prependData: `
          @import "@/scss/_variables.scss";
          `,
        },
      },
    },
  };