const parseArgs = require('../lib/parseArgs')

describe('parseArgs', () => {
  it('should parse arguments', () => {
    // parse alias
    expect(parseArgs('-h')).toMatchObject({ help: true })
    expect(parseArgs('--help')).toMatchObject({ help: true })

    expect(parseArgs('-v')).toMatchObject({ version: true })
    expect(parseArgs('--version')).toMatchObject({ version: true })

    expect(parseArgs('-P')).toMatchObject({ plugin: true })
    expect(parseArgs('--plugin')).toMatchObject({ plugin: true })

    expect(parseArgs('-F 1.x')).toMatchObject({ fastify: '1.x' })
    expect(parseArgs('-F=1.x')).toMatchObject({ fastify: '1.x' })
    expect(parseArgs('--fastify 1.x')).toMatchObject({ fastify: '1.x' })
    expect(parseArgs('--fastify=1.x')).toMatchObject({ fastify: '1.x' })

    expect(parseArgs('-p 3030')).toMatchObject({ port: 3030 })
    expect(parseArgs('-p=3030')).toMatchObject({ port: 3030 })
    expect(parseArgs('--port 3030')).toMatchObject({ port: 3030 })
    expect(parseArgs('--port=3030')).toMatchObject({ port: 3030 })

    // prepare for generating a fastify app
    expect(parseArgs('app')._.length).toEqual(1)
    expect(parseArgs('-p 3000 app')._.length).toEqual(1)

    // prepare for generating a fastify plugin
    expect(parseArgs('-P plugin')._.length).toEqual(1)
    expect(parseArgs('-P -F 2.x plugin')._.length).toEqual(1)
  })
})
