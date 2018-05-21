const { InternalServerError } = require('http-errors')
const Users = require('./model')

module.exports = {
  get(req, res, next) {
    Users.find(req.query, function(err, users) {
      if (err) {
        return next(new InternalServerError(err))
      }
      res.json(users)
    })  
  },
}