const build = require('../build')

describe('root', () => {
  const app = build()
  afterAll(app.close)

  it('default / route', async () => {
    expect.assertions(1)

    const res = await app.inject('/')
    expect(res.statusCode).toEqual(200)
  })
})
