'use strict'
const StructureResponse = require('../utils/structure.response')
const CatModel = require('../models/catSchema')
const axios = require('axios')

class Cat {
    async store(data) {
        const isExist = await CatModel.get({name: data.name})
        if (!isExist._id) {
            const cat = await CatModel.create(data)
            console.log(cat)
            return StructureResponse(false, "Datos almacenados correctamente.", cat)
        }
        return StructureResponse(true, "Error ya se encuentra registrado este nombre", {})
    }

    async all() {
        const cats = await CatModel.search({status: true})
        return StructureResponse(false, "", cats)
    }

    async show(id) {
        const cat = await CatModel.get({_id: id, status: true})
        if (cat._id) {
            return StructureResponse(false, "", cat)
        }
        return StructureResponse(true, "Los datos consultados no se encuentran almacenados.", {})
    }

    async update(data, id) {
        const cat = await CatModel.get({_id: id})
        if (cat._id) {
            const update = await CatModel.update(id, data)
            return StructureResponse(false, "Los datos se han actualizado correctamente.", update)
        }
        return StructureResponse(true, "Los datos no se han actualizado.", {})
    }

    async destroy(id) {
        const cat = await CatModel.get({_id: id})
        if (cat._id) {
            const update = await CatModel.update(id, {status: false})
            return StructureResponse(false, `Se ha eliminado ${cat.name}`, {})
        }
        return StructureResponse(true, "No se ha eliminado correctamente.", {})
    }

    async allBreeds() {
        const {data} = await axios.get('https://api.thecatapi.com/v1/breeds', {
            headers: {
                "x-api-key": "f221c99b-304d-4404-b111-cbd3ddccf31a",
            }
        })
        let names = []
        names.push(data.map((breed) => breed.name));
        return StructureResponse(false, "", {names: names[0]})
    }
}

module.exports = new Cat()