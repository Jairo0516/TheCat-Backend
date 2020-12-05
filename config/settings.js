'use strict'
const DATABASES = {
  default: {
    NAME: process.env.NODE_ENV || 'TheCats',
    HOST: process.env.HOST || 'localhost'
  }
}

module.exports = { DATABASES }
