const { Router } = require('express')
const { routes } = require('./modules')

const router = Router()

router.use(routes)

module.exports = router