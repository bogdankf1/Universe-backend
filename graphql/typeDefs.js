const { gql } = require('apollo-server-koa')

const typeDefs = gql`
  type Greeting {
    greeting: String
  }

  type Stocks {
    list: String
  }

  type Query {
    hello: String,
    greet: Greeting,
    stocks: Stocks
  }
`

module.exports.typeDefs = typeDefs