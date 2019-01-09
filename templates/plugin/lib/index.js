const fp = require('fastify-plugin')

module.exports = fp(require('./plugin'), {
  // FIXME: fail to run test
  // fastify: '__fastify__',
  name: '__packageName__'
})
