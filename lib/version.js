const log = require('./log')
const pkg = require('../package')

module.exports = function version () {
  log.info(`v${pkg.version}`)
}
