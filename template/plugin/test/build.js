const fp = require('fastify-plugin')

function withNothing () {
  const app = require('fastify')()
  app.close = app.close.bind(app)

  return app
}

function build () {
  const app = withNothing()

  // fastify-plugins ensures that all decorators
  // are exposed for testing purposes, this is
  // different from the production setup
  app.register(fp(require('..')), build.config())

  return app
}

// Config for testing the application
function config () {
  return {
    // Add config here
  }
}

build.withNothing = withNothing
build.config = config

module.exports = build
