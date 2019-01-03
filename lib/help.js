const log = require('./log')

const USAGE = 'fastify [options] [<path> | <name>]'

const DETAIL = `
Options:
    -h, --help          output usage information
    -v, --version       output the version number

For Generating:
    -P, --plugin        generate a fastify plugin
    -F, --fastify       specify fastify version
    -p, --port          specify the port to use
`

module.exports = function help () {
  log.info(USAGE)
  log.info(DETAIL)
}
