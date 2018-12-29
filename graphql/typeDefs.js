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
  
  type NewsListItem {
    datetime: String,
    headline: String,
    image: String,
    related: String,
    source: String,
    summary: String,
    url: String
  }

  type NewsList {
    list: [NewsListItem]
  }

  type CompanyNewsList {
    list: [NewsListItem]
  }

  type IPOsList {
    list: IPOsListContent
  }

  type IPOsListContent {
    rawData: [IPORawDataListItem],
    viewData: [IPOViewDataListItem]
  }

  type IPOQuote {
    latestPrice: Float,
    changePercent: Float
  }

  type IPORawDataListItem {
    address: String,
    amount: Float,
    auditor: String,
    businessDescription: String,
    ceo: String,
    city: String,
    companyDescription: String,
    companyName: String,
    employees: Float,
    expectedDate: String,
    market: String,
    percentOffered: String,
    phone: String,
    priceHigh: Float,
    priceLow: Float,
    shareholderShares: Float,
    sharesOffered: Float,
    sharesOutstanding: Float,
    sharesOverAlloted: Float,
    state: String,
    stockholderEquity: Float,
    symbol: String,
    url: String,
    useOfProceeds: String,
    zip: String
  }

  type IPOViewDataListItem {
    Amount: String,
    Company: String,
    Expected: String,
    Float: String,
    Market: String,
    Percent: String,
    Price: String,
    Shares: String,
    Symbol: String,
    quote: IPOQuote
  }

  type Query {
    stocks(id: String): Stocks
    symbols: SymbolsList
    stocksChart(id: String, range: String): StocksChart
    cryptoCurrencies: CryptoCurrenciesData
    news: NewsList
    companyNews(id: String): CompanyNewsList,
    todayIPOs: IPOsList,
    upcomingIPOs: IPOsList
  }

  type UserLoginData {
    username: String,
    password: String,
    token: String
  }

  type UserRegisterData {
    username: String
  }

  type LoginUser {
    data: UserLoginData
  }

  type RegisterUser {
    data: UserRegisterData
  }

  type Mutation {
    login(username: String, password: String): LoginUser
    register(firstname: String, lastname: String, username: String, password: String): RegisterUser
  }
`

module.exports.typeDefs = typeDefs