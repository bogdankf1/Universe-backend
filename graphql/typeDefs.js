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

  type CryptoCurrenciesItem {
    askPrice: Float,
    askSize: Float,
    bidPrice: Float,
    bidSize: Float,
    calculationPrice: String,
    change: Float,
    changePercent: Float,
    close: Float,
    closeTime: Float,
    companyName: String,
    high: Float,
    latestPrice: Float,
    latestSource: String,
    latestTime: String,
    latestUpdate: Float,
    latestVolume: Float,
    low: Float,
    open: Float,
    openTime: Float,
    previousClose: Float,
    primaryExchange: String,
    sector: String,
    symbol: String
  }

  type CryptoCurrenciesData {
    list: [CryptoCurrenciesItem]
  }

  type Query {
    stocks(id: String): Stocks
    symbols: SymbolsList
    stocksChart(id: String, range: String): StocksChart
    cryptoCurrencies: CryptoCurrenciesData
  }
`

module.exports.typeDefs = typeDefs