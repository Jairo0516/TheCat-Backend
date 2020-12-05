'use strict'
const express = require('express')
const asyncify = require('express-asyncify')
const routes = asyncify(express.Router())
const ImagesController = require('../controllers/imagesController')
routes.get('/', async (request, response) => {
    //: Debe retornar una lista de 10 imágenes públicas
    // aleatorias del API.
    const data = await ImagesController.all()
    response.json(data)
})
routes.get('/favoritos', async (request, response) => {
    //Debe retornar la lista de imágenes marcadas
    // como favoritas.
    const data = await ImagesController.allFavorite()
    response.json(data)
})
routes.post('/favoritos', async (request, response) => {
    //Debe permitir marcar una de las imágenes
    // como favorita enviando el id de la imagen en el body.
    const data = await ImagesController.store(request.body.id)
    response.json(data)
})
module.exports = routes
