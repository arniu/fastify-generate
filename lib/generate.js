const fs = require('fs')
const path = require('path')
const childProcess = require('child_process')
const generify = require('generify')

const chooseDir = require('./chooseDir')
const normalizeName = require('./normalizeName')
const log = require('./log')

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
    throw new Error(`${dest} already exists`)
  }

  const source = chooseDir(options)
  const packageName = normalizeName(dest, options)
  const data = {
    port: options.port,
    fastify: options.fastify,
    packageName
  }

  generify(
    source,
    dest,
    data,
    file => {
      log.debug(`  Writing ${file}`)
    },
    err => {
      if (err) {
        throw err
      }

      // Init git repo or npm will fail to install `husky`
      childProcess.execSync('git init', { cwd: dest })

      log.info(`Generated ${packageName} at ${path.dirname(dest)}.`)
      log.info('Have a nice day!')
    }
  )
}
