const { 
  route: authRoute,
} = require('./auth')
const { 
  route: tasksRoute,
  Model: Task,
} = require('./tasks')
const { 
  route: usersRoute,
  Model: User,
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