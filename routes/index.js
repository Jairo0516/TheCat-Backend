'use strict'
const express = require('express')
const asyncify = require('express-asyncify')
const routes = asyncify(express.Router())

const cat = require('./cat.routes')
routes.use('/gatos', cat)


module.exports = routes