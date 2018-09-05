'use strict'
const container = require('@arkecosystem/core-container')
const { TRANSACTION_TYPES } = require('@arkecosystem/crypto').constants
const database = require('@arkecosystem/core-container').resolvePlugin('database')
const utils = require('../utils')
const schema = require('../schema/ultranode')
const { crypto } = require('@arkecosystem/crypto')
const config = container.resolvePlugin('config')
const { Transaction } = require('@arkecosystem/crypto').models
const Boom = require('boom')

/**
 * Danh Sach Ultra Node
 * @type {Object}
 */
exports.index = {
  /**
   * @param  {Hapi.Request} request
   * @param  {Hapi.Toolkit} h
   * @return {Hapi.Response}
   */
  async handler (request, h) {
    const transactions = await database.transactions.findAllByType(TRANSACTION_TYPES.ULTRANODE_REGISTRATION, utils.paginate(request))
    return utils.toPagination(request, transactions, 'ultranode')
  },
  options: {
    validate: schema.index
  }
}

exports.show = {
  /**
   * @param  {Hapi.Request} request
   * @param  {Hapi.Toolkit} h
   * @return {Hapi.Response}
   */
  async handler (request, h) {
    const transactions = await database.transactions.findAllByType(TRANSACTION_TYPES.ULTRANODE_REGISTRATION)
    let transactions_deserialize = transactions.rows.map(e => {
      let data = Transaction.deserialize(e.serialized.toString('hex'))
      data.address = crypto.getAddress(data.senderPublicKey, config.network.pubKeyHash)
      return data
    })
    let id = request.params.id
    let result = transactions_deserialize.filter(e => (e.address === id || e.senderPublicKey === id || e.asset.ultranode.username === id))
    if (!result[0]) {
      return Boom.notFound('Delegate not found')
    }

    return utils.respondWithResource(request, result[0], 'ultranode')
  },
  options: {
    validate: schema.show
  }
}
