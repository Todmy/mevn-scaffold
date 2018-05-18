const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  username: { 
    type: String,
    unique: true,
    required: true
  },
  age: Number,
  password: { 
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Users', schema)