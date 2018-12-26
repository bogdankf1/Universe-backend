const fetch = require('node-fetch')
const { apiDomain } = require('../constants/constants')
const { loginData } = require('../constants/loginData')

const resolvers = {
  Query: {
    stocks: (_, { id }) => ({
      list: async () => {
        const response = await fetch(`${apiDomain}/stock/market/batch?symbols=${id}&types=quote`)
        const jsonData = await response.json()
        return JSON.stringify(jsonData)
      }
    }),
    stocksChart: (_, { id, range }) => ({
      list: async () => {
        const response = await fetch(`${apiDomain}/stock/${id}/chart/${range}`)
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
    }),
    cryptoCurrencies: () => ({
      list: async () => {
        const response = await fetch(`${apiDomain}/stock/market/crypto`)
        const jsonData = await response.json()
        return jsonData
      }
    }),
    news: () => ({
      list: async () => {
        const response = await fetch(`${apiDomain}/stock/market/news`)
        const jsonData = await response.json()
        return jsonData
      }
    }),
    companyNews: (_, { id }) => ({
      list: async () => {
        const response = await fetch(`${apiDomain}/stock/${id}/news`)
        const jsonData = await response.json()
        return jsonData
      }
    }),
    todayIPOs: () => ({
      list: async () => {
        const response = await fetch(`${apiDomain}/stock/market/today-ipos`)
        const jsonData = await response.json()
        return jsonData
      }
    }),
    upcomingIPOs: () => ({
      list: async () => {
        const response = await fetch(`${apiDomain}/stock/market/upcoming-ipos`)
        const jsonData = await response.json()
        return jsonData
      }
    })
  },
  Mutation: {
    login:  (_, { username, password }) => ({
      data: async () => {
        let loggedInUser

        loginData.forEach(user => {
          if (user.username === username && user.password === password) {
            loggedInUser = user
          }
        })

        return loggedInUser ? { ...loggedInUser } : null
      }
    })
  }
}

module.exports.resolvers = resolvers