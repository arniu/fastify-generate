const path = require('path')
const AutoLoad = require('fastify-autoload')

module.exports = function (fastify, opts, next) {
  // Place here your custom code!

  // Do not touch the following lines

  // This loads all plugins defined in plugin
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugin'),
    options: opts
  })

  // This loads all plugins defined in service
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'service'),
    options: opts
  })

  // Make sure to call next when done
  next()
}
