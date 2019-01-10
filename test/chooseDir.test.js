const t = require('tap')
const fs = require('fs')

const chooseDir = require('../lib/chooseDir')

t.test('choose template dir to generate an app', t => {
  t.plan(3)

  const dir = chooseDir({
    plugin: false
  })

  t.match(dir, /app$/)
  fs.stat(dir, (err, stat) => {
    t.error(err)
    t.ok(stat.isDirectory())
  })
})

t.test('choose template dir to generate a plugin', t => {
  t.plan(3)

  const dir = chooseDir({
    plugin: true
  })

  t.match(dir, /plugin$/)
  fs.stat(dir, (err, stat) => {
    t.error(err)
    t.ok(stat.isDirectory())
  })
})
