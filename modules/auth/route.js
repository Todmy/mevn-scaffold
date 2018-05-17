const { Router } = require('express')

const router = Router()

router.route('/auth')
  .get((req, res, next) => res.send('hello auth'))

module.exports = router