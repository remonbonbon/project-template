module.exports = {
  publicPath: '/',
  css: {
    loaderOptions: {
      sass: {
        // 共通で使用するSCSS
        data: `@import "@/scss/main.scss";`,
      },
    },
  },
};
