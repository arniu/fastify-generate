const chalk = require('chalk')

const decorates = {
  info: chalk.green,
  error: chalk.red,
  debug: x => x
}

function create (level) {
  const decorate = decorates[level]
  return function (message) {
    console.log(decorate(message))
  }
}

const log = create('info')
log.error = create('error')
log.debug = create('debug')
log.info = log

module.exports = log
