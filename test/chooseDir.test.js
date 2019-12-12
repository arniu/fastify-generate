const fs = require('fs')

const chooseDir = require('../lib/chooseDir')

describe('chooseDir', () => {
  it('choose template dir to generate an app', done => {
    const dir = chooseDir({
      plugin: false
    })

    expect(dir).toMatch(/app$/)
    fs.stat(dir, (err, stat) => {
      expect(stat.isDirectory()).toBeTruthy()
      expect(err).toBeNull()

      done()
    })
  })

  it('choose template dir to generate a plugin', done => {
    const dir = chooseDir({
      plugin: true
    })

    expect(dir).toMatch(/plugin$/)
    fs.stat(dir, (err, stat) => {
      expect(stat.isDirectory()).toBeTruthy()
      expect(err).toBeNull()

      done()
    })
  })
})
