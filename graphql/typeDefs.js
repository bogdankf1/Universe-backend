const { gql } = require('apollo-server-koa')

const typeDefs = gql`
  type SymbolItem {
    symbol: String,
    name: String,
    date: String,
    isEnabled: Boolean,
    type: String,
    iexId: String
  }
  
  type SymbolsList {
    list: [SymbolItem]
  }

  type Stocks {
    list: String
  }

  type StocksChartItem {
    date: String,
    open: Float,
    high: Float,
    low: Float,
    close: Float,
    volume: Int,
    unadjustedClose: Float,
    unadjustedVolume: Int,
    change: Float,
    changePercent: Float,
    vwap: Float,
    label: String,
    changeOverTime: Float
  }

  type StocksChart {
    list: [StocksChartItem]
  }

  type Query {
    stocks(id: String): Stocks
    symbols: SymbolsList
    stocksChart(id: String, range: String): StocksChart
  }
`

module.exports.typeDefs = typeDefs