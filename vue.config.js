module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
      proxy: {
          '/api': {
              target: 'http://localhost:8899',
              changeOrigin: true,
              ws: true,
              pathRewrite: {
                  '^/api': ''
              }
          }
      }
  }
}
