const { route: authRoute } = require('./auth')
const { route: tasksRoute } = require('./tasks')
const { route: usersRoute } = require('./users')

module.exports = {
  routes: [
    authRoute,
    tasksRoute,
    usersRoute,
  ]
}