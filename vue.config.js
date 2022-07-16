const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],

  devServer: {
    port: 53113,
    allowedHosts: 'all'
  }
})
