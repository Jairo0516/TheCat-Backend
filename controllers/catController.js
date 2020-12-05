'use strict'
const StructureResponse = require('../utils/structure.response')
const CatModel = require('../models/catSchema')

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
}

module.exports = new Cat()