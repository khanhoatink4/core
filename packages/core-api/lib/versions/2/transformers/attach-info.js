'use strict'

const formatTimestamp = require('./utils/format-timestamp')

/**
 * Turns a "attachInfo" object into a generic object.
 * @param  {Object} attachInfo
 * @return {Object}
 */
module.exports = (attachInfo) => {
  const data = {
    address: attachInfo.address,
    kdspHash: attachInfo.kdspHash,
    metadata: {
      fileName: attachInfo.fileName,
      sha1: attachInfo.sha1,
      size: attachInfo.size,
      hashData: attachInfo.hashData
    },
    timestamp: formatTimestamp(attachInfo.timestamp)
  }

  return data
}
