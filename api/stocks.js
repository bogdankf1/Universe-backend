const request = require('request')
const { requestHandler } = require('../utils/utils.js')
const { apiDomain } = require('../constants/constants.js')

const getStocksList = async (ctx) => {
  const options = {
    url: `${apiDomain}/stock/market/batch?symbols=AAPL,BA,TSLA&types=quote`
  }
  const response = await request(options, requestHandler)
  ctx.body = response
}

module.exports.getStocksList = getStocksList