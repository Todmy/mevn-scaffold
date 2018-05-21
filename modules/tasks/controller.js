const { InternalServerError } = require('http-errors')
const Task = require('./model')

module.exports = {
  get(req, res, next) {
    Task.find(req.query, function(err, tasks) {
      if (err) {
        return next(new InternalServerError(err))
      }
      res.json(tasks)
    })  
  },
  create(req, res, next) {
    const task = Object.assign({}, req.body, {
      owner: req.user._id
    })
    Task.create(task, function(err, task) {
      if (err) {
        return next(new InternalServerError(err))
      }
      res.json(task)
    }) 
  },
  remove(req, res, next) {
    Task.remove(req.query, function(err, task) {
      if (err) {
        return next(new InternalServerError(err))
      }
      // TODO: refactor to return removed object
      res.json(req.query)
    })
  },
}