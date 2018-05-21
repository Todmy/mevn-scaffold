const { HttpError } = require('http-errors')

function toJSON(err, options = {}) {
  const object = typeof err.toJSON === 'function'
    ? err.toJSON()
    : { message: err.message, stack: err.stack }

  if (!options.withStack) {
    object.stack = undefined
  }

  return object
}

function errorHandler(error, req, res, next) {
  console.error(error)

  res.status(error instanceof HttpError ? error.statusCode : 500)
    .send(toJSON(error, { withStack: req.app.get('env') === 'development' }))
}

function notAllowed(req, res, next) {
  res.status(405).send({
    status: 'notAllowed',
    message: `Cannot ${req.method} ${req.url}`
  })
}

module.exports = { errorHandler, notAllowed }
