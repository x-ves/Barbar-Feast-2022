module.exports = {
    chainWebpack: (config) => {
      config.plugins.delete("prefetch");
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