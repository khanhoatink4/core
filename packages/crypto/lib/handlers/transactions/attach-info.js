const Handler = require('./handler')

class AttachInfo extends Handler {
  /**
   * Check if the transaction can be applied to the wallet.
   * @param  {Wallet} wallet
   * @param  {Transaction} transaction
   * @return {Boolean}
   */
  canApply (wallet, transaction) {
    if (!super.canApply(wallet, transaction)) {
      return false
    }

    if (wallet.attachInfo) {
      return false
    }

    return wallet.verifySignatures(transaction, transaction.asset.attachInfo)
  }

  /**
   * Apply the transaction to the wallet.
   * @param  {Wallet} wallet
   * @param  {Transaction} transaction
   * @return {void}
   */
  apply (wallet, transaction) {
    wallet.attachInfo = transaction.asset.attachInfo
  }

  /**
   * Revert the transaction from the wallet.
   * @param  {Wallet} wallet
   * @param  {Transaction} transaction
   * @return {void}
   */
  revert (wallet, transaction) {
    wallet.attachInfo = null
  }
}

module.exports = new AttachInfo()
