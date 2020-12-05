'use strict'
const mongoose = require('mongoose')
const Base = require('./baseSchema')
const Types = mongoose.Schema.Types

const Schema = new mongoose.Schema({
    name: {
        type: Types.String,
        require: [true, 'El nombre es requerido']
    },
    breed: {
        type: Types.String,
        require: [true, 'La raza es requerida']
    },
    age: {
        type: Types.Number,
        require: [true, 'La edad es requerida']
    },
    image: {
        type: Types.String,
        require: [true, 'La foto es requerida']
    },
    status: {
        type: Types.Boolean,
        default : true
    }
})

class Cat extends Base {
    constructor() {
        super()
        this.sort = { name: 1 }
        this.model = mongoose.model('Cat', Schema)
        this.fields = 'name breed age image'
    }
}

module.exports = new Cat()
