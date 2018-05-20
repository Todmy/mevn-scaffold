const { Router } = require('express')

const router = Router()

router.route('/tasks')
  .get((req, res, next) => {
    return res.send(req.user)
  })

module.exports = router