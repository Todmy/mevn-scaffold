const { Router } = require('express')
const { create, remove, get } = require('./controller')

const router = Router()

router.route('/tasks')
  .get(get)
  .post(create)
  .delete(remove)

module.exports = router