'use strict'
const mongoose = require('mongoose')
const { DATABASES } = require('./settings')

mongoose.connect(`mongodb://${DATABASES.default.HOST}/${DATABASES.default.NAME}`, { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true })
const db = mongoose.connection
db.on('error', (error) => {
    console.error(`MongoDB connection error:`, error.message)
    process.exit(0)
})

module.exports = db