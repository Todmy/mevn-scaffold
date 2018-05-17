const { Schema } = require('mongoose')

module.exports = new Schema({
  username: String,
  age: Number,
  password: String
})