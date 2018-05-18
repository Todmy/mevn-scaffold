const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: String,
  description: String,
  owner: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' 
  }
})

module.exports = mongoose.model('Tasks', schema)