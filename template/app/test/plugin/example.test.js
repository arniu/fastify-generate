const example = require('../../plugin/example')

const build = require('../build')

describe('example plugin', () => {
  const app = build.withNothing()
  afterAll(app.close)

  it('it works standalone', done => {
    app.register(example)

    app.ready(err => {
      expect(err).toBeFalsy()
      expect(app.answer()).toEqual(42)

      done()
    })
  })
})
