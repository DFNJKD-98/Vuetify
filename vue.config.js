module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath: "./",
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8899",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
