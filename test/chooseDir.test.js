const t = require('tap')

const chooseDir = require('../lib/chooseDir')

t.test('choose template dir', t => {
  t.plan(2)

  t.match(
    chooseDir({
      plugin: false
    }),
    /app$/
  )

  t.match(
    chooseDir({
      plugin: true
    }),
    /plugin$/
  )
})
