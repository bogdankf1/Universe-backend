const { gql } = require('apollo-server-koa')

const typeDefs = gql`
  type StockItem {
    index: {
      quote: {
        symbol: String,
        companyName: String,
        primaryExchange: String,
        sector: String,
        calculationPrice: String,
        open: Float,
        openTime: Int,
        close: Float,
        closeTime: Int,
        high: Float,
        low: Float,
        latestPrice: Float,
        latestSource: String,
        latestTime: String,
        latestUpdate: Int,
        latestVolume: Int,
        delayedPrice: Float,
        delayedPriceTime: Int,
        extendedPrice: Float,
        extendedChange: Float,
        extendedChangePercent: Float,
        extendedPriceTime: Int,
        previousClose: Float,
        change: Float,
        changePercent: Float,
        avgTotalVolume: Int,
        marketCap: Int,
        peRatio: Float,
        week52High: Float,
        week52Low: Float,
        ytdChange: Float
      }
    }
  }

  type Stocks {
    list: String
  }

  type Query {
    stocks(id: String): Stocks
  }
`

module.exports.typeDefs = typeDefs