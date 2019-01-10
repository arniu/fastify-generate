const fp = require('fastify-plugin')

// Build app for unit testing
function build (t) {
  const app = require('fastify')()

  // tear down our app after testing
  t.tearDown(app.close.bind(app))

  return app
}

// Build app for integration testing
build.app = function buildApp (t) {
  const app = build(t)

  // fastify-plugins ensures that all decorators
  // are exposed for testing purposes, this is
  // different from the production setup
  app.register(fp(require('..')), build.config())

  return app
}

// Config for testing the plugin
build.config = function config () {
  return {
    // Add config here
  }
}

module.exports = build
