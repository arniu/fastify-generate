const t = require('tap')

const normalize = require('../lib/normalizeName')

t.test('normalize app name', t => {
  t.plan(4)

  const options = {
    plugin: false
  }

  t.equal(normalize('app', options), 'app')
  t.equal(normalize('~/app', options), 'app')
  t.equal(normalize('path/to/app', options), 'app')
  t.equal(normalize('awesomeApp', options), 'awesome-app')
})

t.test('normalize plugin name', t => {
  t.plan(4)

  const options = {
    plugin: true
  }

  t.equal(normalize('plugin', options), 'fastify-plugin')
  t.equal(normalize('~/plugin', options), 'fastify-plugin')
  t.equal(normalize('path/to/plugin', options), 'fastify-plugin')
  t.equal(normalize('awesomePlugin', options), 'fastify-awesome-plugin')
})
