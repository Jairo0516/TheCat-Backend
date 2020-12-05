'use strict'
const express = require('express')
const asyncify = require('express-asyncify')
const routes = asyncify(express.Router())
const CatController = require('../controllers/catController')
routes.get('/', async (request, response) => {
    const data = await CatController.all()
    response.json(data)
})
routes.get('/:id', async (request, response) => {
    const data = await CatController.show(request.params.id)
    response.json(data)
})
routes.post('/', async (request, response) => {
    const data = await CatController.store(request.body)
    response.json(data)
})
routes.put('/:id', async (request, response) => {
    const data = await CatController.update(request.body, request.params.id)
    response.json(data)
})
routes.delete('/:id', async (request, response) => {
    const data = await CatController.destroy(request.params.id)
    response.json(data)
})
module.exports = routes
