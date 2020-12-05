'use strict'
const StructureResponse = require('../utils/structure.response')
const axios = require('axios')

class Cat {

    async all() {
        const {data} = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&mime_types=&order=Random&size=small&page=1&sub_id=develop-js-160516`)
        return StructureResponse(false, "", data)
    }

    async allFavorite() {
        const {data} = await axios.get(`https://api.thecatapi.com/v1/favourites`, {
            headers: {
                "x-api-key": "f221c99b-304d-4404-b111-cbd3ddccf31a",
            }
        })
        return StructureResponse(false, "", data)
    }

    async store(id) {
        const {data} = await axios.post(`https://api.thecatapi.com/v1/favourites`, {
            "image_id": id,
            "sub_id": "develop-js-160516"
        },{
            headers: {
                "x-api-key": "f221c99b-304d-4404-b111-cbd3ddccf31a",
            }
        })
        return StructureResponse(false, "Se ha agregado como favorito, con exito", data)
    }
}

module.exports = new Cat()