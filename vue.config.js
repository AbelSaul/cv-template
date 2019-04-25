module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/cv-template/" : "/",
  chainWebpack: config => {
    config.module
      .rule("yaml")
      .test(/\.ya?ml$/)
      .use("js-yaml-loader")
      .loader("js-yaml-loader");
  }
};
