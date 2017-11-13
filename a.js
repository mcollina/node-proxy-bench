'use strict'

const { Agent, get, createServer } = require('http')
const pump = require('pump')

const agent = new Agent({
  keepAlive: true
})
const server = createServer(handler)

function handler (req, res) {
  const options = {
    port: 3001,
    agent
  }
  get(options)
    .on('response', (ndRes) => {
      pump(ndRes, res)
    }).on('error', (err) => {
      console.log(err)
      res.writeHead(500)
      res.end('Something went wrong')
    })
}

server.listen(3000)
