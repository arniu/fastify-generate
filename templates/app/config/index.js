'use strict'

require('dotenv').load({
  path: process.env.ENV_FILE || '.env'
})

const createLogger = require('./logger')

module.exports = {
  env: process.env.NODE_ENV || 'development',

  host: process.env.HOST || 'localhost',
  port: process.env.PORT || '__port__',

  // Options for creating fastify server, see:
  //  https://www.fastify.io/docs/latest/Server/
  options: {
    http2: false,
    caseSensitive: true,
    ignoreTrailingSlash: true,

    logger: createLogger(this.env)
  }
}
