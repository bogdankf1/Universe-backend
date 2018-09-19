const fetch = require('node-fetch')
const { getStocksList } = require('../api/stocks')

const resolvers = {
  Query: {
    stocks: (_, { id }) => ({
      list: async () => {
        const response = await fetch(`https://api.iextrading.com/1.0/stock/market/batch?symbols=${id}&types=quote`)
        const jsonData = await response.json()
        // console.log(jsonData)
        return JSON.stringify(jsonData)
      }
    })
  }
}

module.exports.resolvers = resolvers