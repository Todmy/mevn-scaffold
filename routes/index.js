const { Router } = require('express')

const auth = require('./auth')
const tasks = require('./tasks')
const users = require('./users')

const router = Router()

router.use(auth)
router.use(tasks)
router.use(users)

module.exports = router