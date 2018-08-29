const feeManager = require('../../managers/fee')
const { TRANSACTION_TYPES } = require('../../constants')
const TransactionBuilder = require('./transaction')
const { crypto } = require('../../crypto')

module.exports = class UltranodeRegistrationBuilder extends TransactionBuilder {
  /**
   * @constructor
   */
  constructor () {
    super()

    this.data.type = TRANSACTION_TYPES.ULTRANODE_REGISTRATION
    this.data.fee = feeManager.get(TRANSACTION_TYPES.ULTRANODE_REGISTRATION)
    this.data.amount = 0
    this.data.recipientId = null
    this.data.senderPublicKey = null
    this.data.asset = { ultranode: {} }
  }

  /**
   * Establish the ultranode username on the asset.
   * @param  {String} username
   * @return {UltranodeRegistrationBuilder}
   */
  usernameAsset (username) {
    this.data.asset.ultranode.username = username
    return this
  }

  /**
   * Overrides the inherited `sign` method to include the public key of the new delegate.
   * @param  {String}   passphrase
   * @return {UltranodeRegistrationBuilder}
   * TODO rename to `assetUltranode` and merge with username ?
   */
  sign (passphrase) {
    this.data.asset.ultranode.publicKey = crypto.getKeys(passphrase).publicKey
    super.sign(passphrase)
    return this
  }

  /**
   * Overrides the inherited method to return the additional required by this type of transaction.
   * @return {Object}
   */
  getStruct () {
    const struct = super.getStruct()
    struct.amount = this.data.amount
    struct.recipientId = this.data.recipientId
    struct.asset = this.data.asset
    return struct
  }
}
