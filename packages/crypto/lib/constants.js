const configMainnet = require('./networks/ark/mainnet.json')
const configDevnet = require('./networks/ark/devnet.json')
const configTestnet = require('./networks/ark/testnet.json')

/**
 * The Arktoshi base.
 * @type {Number}
 */
exports.ARKTOSHI = Math.pow(10, 8)

/**
 * Available transaction types.
 * @type {Object}
 */
exports.TRANSACTION_TYPES = Object.freeze({
  TRANSFER: 0,
  SECOND_SIGNATURE: 1,
  DELEGATE_REGISTRATION: 2,
  VOTE: 3,
  MULTI_SIGNATURE: 4,
  IPFS: 5,
  TIMELOCK_TRANSFER: 6,
  MULTI_PAYMENT: 7,
  DELEGATE_RESIGNATION: 8,
  ULTRANODE_REGISTRATION: 9,
  ATTACH_INFO: 11
})

/**
 * Available network configurations.
 * @type {Object}
 */
exports.CONFIGURATIONS = Object.freeze({
  ARK: {
    MAINNET: configMainnet,
    DEVNET: configDevnet,
    TESTNET: configTestnet
  }
})
