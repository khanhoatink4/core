'use strict'

const Boom = require('boom')
const { TRANSACTION_TYPES } = require('@arkecosystem/crypto').constants
const database = require('@arkecosystem/core-container').resolvePlugin('database')
const utils = require('../utils')
const schema = require('../schema/attach-info')

/**
 * @type {Object}
 */
exports.index = {
  /**
   * @param  {Hapi.Request} request
   * @param  {Hapi.Toolkit} h
   * @return {Hapi.Response}
   */
  async handler (request, h) {
    const transactions = await database.transactions.findAllByType(TRANSACTION_TYPES.ATTACH_INFO, {
      ...request.query,
      ...utils.paginate(request)
    })

    return utils.toPagination(request, transactions, 'transaction')
  },
  options: {
    validate: schema.index
  }
}

/**
 * @type {Object}
 */
exports.show = {
  /**
   * @param  {Hapi.Request} request
   * @param  {Hapi.Toolkit} h
   * @return {Hapi.Response}
   */
  async handler (request, h) {
    const transaction = await database.transactions.findByTypeAndId(TRANSACTION_TYPES.ATTACH_INFO, request.params.kdspHash)

    if (!transaction) {
      return Boom.notFound('Kdsp hash not found')
    }

    return utils.respondWithResource(request, transaction, 'transaction')
  },
  options: {
    validate: schema.show
  }
}
