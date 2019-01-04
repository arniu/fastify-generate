const t = require('tap')

const parseArgs = require('../lib/parseArgs')

t.test('parse arguments', t => {
  t.plan(18)

  // parse alias
  t.match(parseArgs('-h'), { help: true })
  t.match(parseArgs('--help'), { help: true })

  t.match(parseArgs('-v'), { version: true })
  t.match(parseArgs('--version'), { version: true })

  t.match(parseArgs('-P'), { plugin: true })
  t.match(parseArgs('--plugin'), { plugin: true })

  t.match(parseArgs('-F 1.x'), { fastify: '1.x' })
  t.match(parseArgs('-F=1.x'), { fastify: '1.x' })
  t.match(parseArgs('--fastify 1.x'), { fastify: '1.x' })
  t.match(parseArgs('--fastify=1.x'), { fastify: '1.x' })

  t.match(parseArgs('-p 3030'), { port: 3030 })
  t.match(parseArgs('-p=3030'), { port: 3030 })
  t.match(parseArgs('--port 3030'), { port: 3030 })
  t.match(parseArgs('--port=3030'), { port: 3030 })

  // prepare for generating a fastify app
  t.equal(parseArgs('app')._.length, 1)
  t.equal(parseArgs('-p 3000 app')._.length, 1)

  // prepare for generating a fastify plugin
  t.equal(parseArgs('-P plugin')._.length, 1)
  t.equal(parseArgs('-P -F 2.x plugin')._.length, 1)
})
