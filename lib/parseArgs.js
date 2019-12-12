const argsParser = require('yargs-parser')

const cliOptions = {
  number: ['port'],
  string: ['fastify'],
  boolean: ['plugin', 'version', 'help'],

  default: {
    fastify: '1.x',
    port: 3030
  },

  alias: {
    plugin: 'P',
    fastify: 'F',
    version: 'v',
    help: 'h',
    port: 'p'
  }
}

module.exports = function parseArgs (args) {
  const result = argsParser(args, cliOptions)

  // delete duplicated alias
  for (const key in cliOptions.alias) {
    const alias = cliOptions.alias[key]
    delete result[alias]
  }

  return result
}
