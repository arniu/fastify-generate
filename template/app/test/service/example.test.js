const build = require('../build')

describe('example service', () => {
  const app = build()
  afterAll(app.close)

  it('default /example route', async () => {
    expect.assertions(1)

    const res = await app.inject('/example')
    expect(res.statusCode).toEqual(200)
  })
})
