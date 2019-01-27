#! /usr/bin/env node

'use strict'

const main = require('../lib/main')

if (require.main === module) {
  main(process.argv.slice(2))
}
