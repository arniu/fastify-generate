#! /usr/bin/env node

const config = require('../config')

const app = require('fastify')(config.options)

app.register(require('../index'))
app.listen(config.port, err => {
  if (err) shutdown(err)
})

/**
 * Shutdown server
 *
 * @param {(string|Error)} [message]
 */
function shutdown (message) {
  if (message) {
    console.log(message)
  }

  if (message instanceof Error) {
    process.exitCode = 1
  }

  app.close(() => {
    console.log('shutdown')
  })
}

// Quit on unhandled rejection
process.on('unhandledRejection', shutdown)

// Quit on Ctrl-C when running docker in terminal
process.on('SIGINT', shutdown)

// Quit properly on docker stop
process.on('SIGTERM', shutdown)
