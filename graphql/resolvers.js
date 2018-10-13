const fetch = require('node-fetch')
const { getStocksList } = require('../api/stocks')
const { apiDomain } = require('../constants/constants')

const resolvers = {
  Query: {
    stocks: (_, { id }) => ({
      list: async () => {
        const response = await fetch(`${apiDomain}/stock/market/batch?symbols=${id}&types=quote`)
        const jsonData = await response.json()
        return JSON.stringify(jsonData)
      }
    }),
    stocksChart: (_, { id }) => ({
      list: async () => {
        const response = await fetch(`${apiDomain}/stock/${id}/chart/1y`)
        const jsonData = await response.json()
        return jsonData
      }
    }),
    symbols: () => ({
      list: async () => {
        const response = await fetch(`${apiDomain}/ref-data/symbols`)
        const jsonData = await response.json()
        return jsonData
      }
    })
  }
}

module.exports.resolvers = resolvers