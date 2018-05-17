const express = require('express')
const { server, cors: corsConfig } = require('config')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./routes')
const { errorHandler, notAllowed } = require('./modules/errors')

const app = express()

app.disable('x-powered-by')
app.enable('trust proxy')
app.use(cors(corsConfig))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ limit: server.jsonBodyLimit }))
app.use(errorHandler)
app.all('*', notAllowed)

app.use(server.apiEndpoint, routes)

app.listen(server.port, () => {
  console.log(`App successfully started on port ${server.port}`)
})