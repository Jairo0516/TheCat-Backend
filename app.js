'use strict'
require('./config/db')
const express = require('express')
const asyncify = require('express-asyncify')
const bodyParser = require('body-parser')
const http = require('http')
const cors = require('cors')
const app = asyncify(express())
const port = 4001
const routes = require('./routes/index')
const server = http.createServer(app)


app.use(cors())
app.use(bodyParser.json({extended: true, limit: '20mb'}))
app.use(bodyParser.urlencoded({extended: true, limit: '20mb'}))


app.use('/v1', routes)
server.listen(port, () => {
    console.log(`The Cat server listening on port ${port}`)
})



