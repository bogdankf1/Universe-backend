const { getStocksList } = require('../api/stocks')
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    greet: () => ({
      greeting: () => 'Greet'
    }),
    stocks: getStocksList
  }
}

module.exports.resolvers = resolvers