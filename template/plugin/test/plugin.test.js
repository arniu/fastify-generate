const build = require('./build')

describe('example plugin', () => {
  const app = build()
  afterAll(app.close)

  it('it works', done => {
    app.ready(err => {
      expect(err).toBeFalsy()

      done()
    })
  })
})
