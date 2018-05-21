const { InternalServerError, Unauthorized } = require('http-errors')
const passport = require('passport')
const { Model: User } = require('../users')

module.exports = {
  async signIn(req, res, next) {
    const { username, password, age } = req.body
    let user
    try {
      user = await User.create(req.body)
    } catch (err) {
      return next(new InternalServerError(err))
    }

    next()
  },

  logIn(req, res, next) {
    passport.authenticate('local', (err, user, info) => {
      if (err || !user) {
        return next(new Unauthorized(err || ''))
      }

      req.logIn(user, () => {})

      res.send(user)
    })(req, res, next)
  },

  logOut(req, res, next) {
    req.logout()
    res.send('logout')
  }
}
