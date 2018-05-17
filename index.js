const express = require('express')
const { server, cors: corsConfig } = require('config')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./routes')
const { errorHandler, notAllowed } = require('./modules/errors')
require('./mongoose')

const app = express()

app.disable('x-powered-by')
app.enable('trust proxy')
app.use(cors(corsConfig))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ limit: server.jsonBodyLimit }))
app.use(errorHandler)

app.use(server.apiEndpoint, routes)

app.all('*', notAllowed)

app.listen(server.port, () => {
  console.log(`App successfully started on port ${server.port}`)
})