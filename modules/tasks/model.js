const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: { 
    type: String,
    unique: true,
    required: true
  },
  description: String,
  owner: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' 
  }
})

module.exports = mongoose.model('Tasks', schema)