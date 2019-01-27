const help = require('./help')
const version = require('./version')
const generate = require('./generate')
const parseArgs = require('./parseArgs')
const log = require('./log')

module.exports = function main (args) {
  const options = parseArgs(args)

  if (options.help) {
    help()
  } else if (options.version) {
    version()
  } else if (options._.length) {
    generate(options)
  } else {
    help()
  }
}

// Handle errors centrally
// https://github.com/i0natan/nodebestpractices#2-error-handling-practices
process.on('uncaughtException', err => {
  process.exitCode = 1

  log.error(err)
})
