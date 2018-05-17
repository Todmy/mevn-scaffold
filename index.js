const express = require('express')
const { server } = require('config')

const app = express()

app.get('/', (req, res, next) => {
  res.send('hello world')
})

app.listen(server.port, () => {
  console.log(`App successfully started on port ${server.port}`)
})