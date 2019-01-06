'use strict'

module.exports = function (fastify, opts, next) {
  fastify.get('/', function (request, reply) {
    reply.send('this is an example')
  })

  next()
}

// If you prefer async/await, use the following
//
// module.exports = async function (fastify, opts) {
//   fastify.get('/example', async function (request, reply) {
//     return 'this is an example'
//   })
// }

// Used by `fastify-autoload`
//
// Exposed all routes under `/example`
module.exports.autoPrefix = '/example'

// Used by `fastify-autoload`
//
// Override `prefix` passed by fastify
// module.exports.prefixOverride = '/example'
