const { Router } = require('express')

const router = Router()

router.route('/users')
  .get((req, res, next) => res.send('hello users'))

module.exports = router