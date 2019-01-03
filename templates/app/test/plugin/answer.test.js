'use strict'

const t = require('tap')
const build = require('../build')

const answer = require('../../plugin/answer')

t.test('answer works standalone', t => {
  t.plan(2)

  const app = build(t)
  app.register(answer)

  app.ready(err => {
    t.error(err)
    t.equal(app.answer(), 42)
  })
})

// If you prefer async/await, use the following
//
// t.test('support works standalone', async (t) => {
//   const fastify = Fastify()
//   fastify.register(Support)
//
//   await fastify.ready()
//   t.equal(fastify.someSupport(), 'hugs')
// })
