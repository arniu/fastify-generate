'use strict'

const t = require('tap')
const build = require('./build')

t.test('The Plugin works', t => {
  t.plan(2)

  const app = build.app(t)

  app.ready(err => {
    t.error(err)
    t.pass()
  })
})

// If you prefer async/await, use the following
//
t.test('The Plugin works', async t => {
  const app = build.app(t)

  await app.ready()

  t.pass()
})
