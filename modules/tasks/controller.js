const Task = require('./model')

module.exports = {
  get(req, res, next) {
    Task.find(req.query, function(err, tasks) {
      res.json(tasks)
    })  
  },
  create(req, res, next) {
    const task = Object.assign({}, req.body, {
      owner: req.user._id
    })
    Task.create(task, function(err, task) {
      res.json(task)
    }) 
  },
  remove(req, res, next) {
    Task.remove(req.body, function(err, task) {
      res.json(task)
    })
  },
}