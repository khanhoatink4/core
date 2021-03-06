const { TRANSACTION_TYPES } = require('../../../constants')
const engine = require('../../../engine')

module.exports = (transaction) => {
  const { error, value } = engine.validate(transaction, engine.joi.object({
    id: engine.joi.string().alphanum().required(),
    blockid: engine.joi.number(),
    type: engine.joi.number().valid(TRANSACTION_TYPES.ULTRANODE_REGISTRATION),
    timestamp: engine.joi.number().min(0).required(),
    amount: engine.joi.number().valid(0),
    fee: engine.joi.number().min(1).required(),
    senderId: engine.joi.arkAddress(),
    recipientId: engine.joi.empty(),
    senderPublicKey: engine.joi.arkPublicKey().required(),
    signature: engine.joi.string().alphanum().required(),
    signatures: engine.joi.array(),
    secondSignature: engine.joi.string().alphanum(),
    asset: engine.joi.object({
      ultranode: engine.joi.object({
        username: engine.joi.arkUsername().required(),
        publicKey: engine.joi.arkPublicKey()
      }).required()
    }).required(),
    confirmations: engine.joi.number().min(0)
  }), {
    allowUnknown: true
  })

  return {
    data: value,
    errors: error ? error.details : null,
    passes: !error,
    fails: error
  }
}
