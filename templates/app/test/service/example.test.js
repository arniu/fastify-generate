const t = require('tap')
const build = require('../build')

t.test('default root route', t => {
  t.plan(2)

  const app = build.app(t)

  app.inject(
    {
      url: '/example'
    },
    (err, res) => {
      t.error(err)
      t.equal(res.statusCode, 200)
    }
  )
})

// If you prefer async/await, use the following
//
// t.test('default root route', async t => {
//   const app = build.app(t)
//
//   const res = await app.inject({
//     url: '/example'
//   })
//
//   t.equal(res.statusCode, 200)
// })
