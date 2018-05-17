const { Router } = require('express')

const router = Router()

router.route('/tasks')
  .get((req, res, next) => res.send('hello tasks'))

module.exports = router