const { Schema } = require('mongoose')

module.exports = new Schema({
  name: String,
  description: String,
  owner: { 
    type: Schema.Types.ObjectId, 
    ref: 'User' 
  }
})