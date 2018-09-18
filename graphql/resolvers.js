const { getStocksList } = require('../api/stocks')
const resolvers = {
  Query: {
    hello: () => 'Hello!',
    greet: () => ({
      greeting: () => 'Greet'
    }),
    stocks: async (parent, args, ctx, info) => await({
      list: async () => await getStocksList(ctx)
    })
  }
}

module.exports.resolvers = resolvers