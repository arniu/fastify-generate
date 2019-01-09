// https://www.fastify.io/docs/latest/Logging/
module.exports = function createLogger (env) {
  if (env !== 'production') {
    return {
      prettyPrint: true,
      level: 'debug'
    }
  }

  // for production
  return {
    level: 'info'
  }
}
