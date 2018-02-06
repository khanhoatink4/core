const blockchain = require('app/core/blockchainManager').getInstance()
const config = require('app/core/config')

exports.status = {
  handler: (request, h) => {
    const lastBlock = blockchain.status.lastBlock

    return blockchain.networkInterface.getNetworkHeight().then((networkHeight) => {
      return {
        data: {
          loaded: blockchain.isSynced(lastBlock),
          now: lastBlock ? lastBlock.data.height : 0,
          blocksCount: networkHeight - lastBlock.data.height
        }
      }
    })
  }
}

exports.syncing = {
  handler: (request, h) => {
    const lastBlock = blockchain.status.lastBlock

    return blockchain.networkInterface.getNetworkHeight().then((networkHeight) => {
      return {
        data: {
          syncing: !blockchain.isSynced(lastBlock),
          blocks: networkHeight - lastBlock.data.height,
          height: lastBlock.data.height,
          id: lastBlock.data.id
        }
      }
    })
  }
}

exports.configuration = {
  handler: (request, h) => {
    return {
      data: {
        nethash: config.network.nethash,
        token: config.network.client.token,
        symbol: config.network.client.symbol,
        explorer: config.network.client.explorer,
        version: config.network.pubKeyHash
      }
    }
  }
}