const chalk = require('chalk')

const decorates = {
  info: chalk.green,
  debug: chalk.gray,
  error: chalk.red
}

function create (level) {
  const decorate = decorates[level]
  return function (message) {
    console.log(decorate(message))
  }
}

module.exports = {
  info: create('info'),
  debug: create('debug'),
  error: create('error')
}
