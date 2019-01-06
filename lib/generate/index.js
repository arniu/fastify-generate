const fs = require('fs')
const path = require('path')
const generify = require('generify')

const normalizeName = require('../normalizeName')
const log = require('../log')

/**
 * @param {Object} options
 * @param {string[]} options._
 * @param {boolean} [options.plugin]
 * @param {string} options.fastify
 * @param {number} options.port
 */
module.exports = function generate (options) {
  const dest = path.resolve(process.cwd(), options._[0])

  if (fs.existsSync(dest)) {
    log.error(`${dest} already exists.`)
    return
  }

  const packageName = normalizeName(dest, options)

  const data = {
    port: options.port,
    fastify: options.fastify,
    packageName
  }

  const source = path.resolve(
    __dirname,
    '../../templates',
    options.plugin ? 'plugin' : 'app'
  )

  generify(
    source,
    dest,
    data,
    file => {
      log.debug(`  Writing ${file}`)
    },
    err => {
      if (err) {
        log.error(err)
      } else {
        log.info(`Generated ${packageName} at ${path.dirname(dest)}.`)
        log.info('Have a nice day!')
      }
    }
  )
}
