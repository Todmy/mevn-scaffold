const { Router } = require('express')
const { logIn, signIn, logOut } = require('./controller')

const router = Router()

router.route('/auth/logout')
  .post(logOut)

router.route('/auth/login')
  .post(logIn)

router.route('/auth/signin')
  .post(signIn, logIn)

module.exports = router