'use strict'

/* istanbul ignore file */

require('dotenv').load({
  path: process.env.ENV_FILE || '.env'
})

module.exports = {
  env: process.env.NODE_ENV || 'development',

  host: process.env.HOST || 'localhost',
  port: process.env.PORT || '__port__',

  prefix: process.env.PREFIX || '',

  // Options for creating fastify server, see:
  //  https://www.fastify.io/docs/latest/Server/
  options: {
    http2: false,
    caseSensitive: true,
    ignoreTrailingSlash: true,

    logger:
      this.env === 'production'
        ? {
          level: 'info'
        }
        : {
          prettyPrint: true,
          level: 'debug'
        }
  }
}
