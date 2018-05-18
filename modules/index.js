const { 
  route: authRoute,
} = require('./auth')
const { 
  route: tasksRoute,
  Model: User,
} = require('./tasks')
const { 
  route: usersRoute,
  Model: Task,
} = require('./users')

module.exports = {
  routes: [
    authRoute,
    tasksRoute,
    usersRoute,
  ],
  models: {
    User,
    Task,
  }
}