'use strict'

const Joi = require('joi')
const pagination = require('./pagination')

/**
 * @type {Object}
 */
exports.index = {
  query: {...pagination, ...{ orderBy: Joi.string() }}
}

/**
 * @type {Object}
 */
exports.show = {
  params: {
    kdspHash: Joi.string()
  }
}
