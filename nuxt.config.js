module.exports = {

    head: {
      meta : [
        { name : 'viewport', content: 'width=device-width, initial-scale=1.0' }
      ]
    },

    modules: [
        '@nuxtjs/axios',
    ],

    axios: {
        // proxyHeaders: false
    }
}