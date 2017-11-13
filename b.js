'use strict'

const { createServer } = require('http')
const pump = require('pump')

const server = createServer(handler)

function handler (req, res) {
  setTimeout(() => {
    res.end('all good')
  }, 100)
}

server.listen(3001)
