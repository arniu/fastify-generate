const path = require('path')
const decamelize = require('decamelize')

const PREFIX = 'fastify'
const SEPARATOR = '-'

/**
 * Normalize package name
 *
 * @param {string} name
 * @param {Object} options
 * @param {boolean} [options.plugin]
 * @return {string}
 */
module.exports = function normalizeName (name, options) {
  const packageName = decamelize(path.basename(name), SEPARATOR)

  if (options.plugin && !packageName.startsWith(PREFIX)) {
    return `${PREFIX}${SEPARATOR}${packageName}`
  }

  return packageName
}
