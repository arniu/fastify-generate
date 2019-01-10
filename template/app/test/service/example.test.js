const t = require('tap')
const build = require('../build')

t.test('Get /example', t => {
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
// t.test('Get /example', async t => {
//   const app = build.app(t)
//
//   const res = await app.inject({
//     url: '/example'
//   })
//
//   t.equal(res.statusCode, 200)
// })
