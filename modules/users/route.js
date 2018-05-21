const { Router } = require('express')
const { get } = require('./controller')

const router = Router()

router.route('/users')
  .get(get)

module.exports = router