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
