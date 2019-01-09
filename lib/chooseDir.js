const path = require('path')

/**
 * Choose template app
 *
 * @param {Object} options
 * @param {boolean} [options.plugin]
 * @return {string}
 */
module.exports = function chooseDir (options) {
  const dir = options.plugin ? 'plugin' : 'app'
  return path.resolve(__dirname, '../templates', dir)
}
