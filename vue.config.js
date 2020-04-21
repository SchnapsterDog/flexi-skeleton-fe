const path = require('path')

module.exports = {
    chainWebpack: config => {
        const apiClient = process.env.VUE_APP_API_CLIENT // local or server
        config.resolve.alias.set(
            'api-client',
            path.resolve(__dirname, `src/services/${apiClient}`)
        )
    }
}