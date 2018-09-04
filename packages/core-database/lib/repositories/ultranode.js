/**
 * Reponsitories Ultra Node
 * */

module.exports = class UltranodesReponsitories {
  /**
   * Create a new ultranode repository instance.
   * @param  {ConnectionInterface} connection
   */
  constructor (connection) {
    this.connection = connection
  }

  /**
   * Get all local ultranodes.
   * @return {Array}
   */
  getLocalUltranodes () {
    console.log('Ultranodes : ', this.connection.walletManager.getUltranodes())
    return this.connection.walletManager.getUltranodes()
  }

  /**
   * Find a ultranodes
   * @param  {String} id
   * @return {Object}
   */
  findById (id) {
    return this.getLocalUltranodes().find(a => (a.address === id || a.publicKey === id || a.username === id))
  }
}
