const request = require('request')
const { requestHandler } = require('../utils/utils.js')
const { apiDomain } = require('../constants/constants.js')

const getStocksList = async (ctx) => {
  const options = {
    url: `${apiDomain}/stock/market/batch?symbols=AAPL,BA,TSLA&types=quote`
  }
  const response = await request(options, requestHandler)
  ctx.body = JSON.stringify(response)
  return JSON.stringify(response)
}

module.exports.getStocksList = getStocksList