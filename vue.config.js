//vue.config.js
module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Static Job";
      return args;
    });
  },
  // publicPath: process.env.NODE_ENV === 'production' ? '/splitter/' : '/'
};
