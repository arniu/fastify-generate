#! /usr/bin/env node

const help = require('../lib/help')
const version = require('../lib/version')
const generate = require('../lib/generate')
const parseArgs = require('../lib/parseArgs')
const log = require('../lib/log')

function main (args) {
  const options = parseArgs(args)

  if (options.help) {
    help()
  } else if (options.version) {
    version()
  } else if (options._.length === 1) {
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

if (require.main === module) {
  main(process.argv.slice(2))
}
