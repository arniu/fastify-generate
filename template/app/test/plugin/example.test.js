const t = require('tap')
const build = require('../build')

const example = require('../../plugin/example')

t.test('it works standalone', t => {
  t.plan(2)

  const app = build(t)
  app.register(example)

  app.ready(err => {
    t.error(err)
    t.equal(app.example(), 42)
  })
})

// If you prefer async/await, use the following
//
// t.test('it works standalone', async t => {
//   const app = build(t)
//   app.register(example)
//
//   await app.ready()
//
//   t.equal(app.example(), 42)
// })
