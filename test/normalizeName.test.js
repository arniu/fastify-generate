const normalizeName = require('../lib/normalizeName')

describe('normalizeName', () => {
  it('normalize app name', () => {
    const options = {
      plugin: false
    }

    expect(normalizeName('app', options)).toEqual('app')
    expect(normalizeName('~/app', options)).toEqual('app')
    expect(normalizeName('path/to/app', options)).toEqual('app')
    expect(normalizeName('awesomeApp', options)).toEqual('awesome-app')
  })

  it('normalize plugin name', () => {
    const options = {
      plugin: true
    }

    expect(normalizeName('plugin', options)).toEqual('fastify-plugin')
    expect(normalizeName('~/plugin', options)).toEqual('fastify-plugin')
    expect(normalizeName('path/to/plugin', options)).toEqual('fastify-plugin')
    expect(normalizeName('awesomePlugin', options)).toEqual(
      'fastify-awesome-plugin'
    )
  })
})
