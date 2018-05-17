const express = require('express')
const { server } = require('config')
const routes = require('./routes')

const app = express()

app.use(server.apiEndpoint, routes)

app.listen(server.port, () => {
  console.log(`App successfully started on port ${server.port}`)
})