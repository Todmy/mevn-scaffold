const mongoose = require('mongoose')
const { mongodb } = require('config')

let isConnectedBefore = false

mongoose.connection.on('connected', () => {
  isConnectedBefore = true
  console.log(`Connected to database: ${mongodb.uri}`)
})

mongoose.connection.on('disconnected', () => {
  console.log(`${isConnectedBefore ? 'Lost' : 'No'} database connection: ${mongodb.uri}`)

  if (isConnectedBefore) {
    mongoose.connect(mongodb.uri, mongodb.options)
  }
})

mongoose.connection.on('reconnected', () => {
  console.log(`Reconnected to: ${mongodb.uri}`)
})

mongoose.connection.on('error', error => {
  console.log(`Unable to connect to database: ${error}`)
})

mongoose.connect(mongodb.uri, mongodb.options)
