'use strict'
const express = require('express')
const asyncify = require('express-asyncify')
const routes = asyncify(express.Router())

const cat = require('./cat.routes')
const images = require('./images.routes')
routes.use('/gatos', cat)
routes.use('/imagenes', images)


module.exports = routes