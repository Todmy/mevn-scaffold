const express = require('express')
const { server, cors: corsConfig, expressSession: expressSessionConfig } = require('config')
const bodyParser = require('body-parser')
const routes = require('./routes')
const { errorHandler, notAllowed } = require('./modules/errors')
const passport = require('./passport')
const { Nuxt, Builder } = require('nuxt')
const nuxtConfig = require('./nuxt.config')

nuxtConfig.dev = process.env.NODE_ENV !== 'production'
const nuxt = new Nuxt(nuxtConfig)

require('./mongoose')

const app = express()

app.disable('x-powered-by')
app.enable('trust proxy')
app.use(require('cors')(corsConfig))
app.use(require('cookie-parser')())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ limit: server.jsonBodyLimit }))
app.use(require('express-session')(expressSessionConfig))

app.use(passport.initialize())
app.use(passport.session())

app.use(server.apiEndpoint, routes)

app.use(nuxt.render)

app.use(errorHandler)
app.all('*', notAllowed)

if (nuxtConfig.dev) {
  new Builder(nuxt).build()
  .then(listen)
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
} else {
  listen()
}

function listen() {
  app.listen(server.port, () => {
    console.log(`App successfully started on port ${server.port}`)
  })
}