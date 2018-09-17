const { gql } = require('apollo-server-koa')

const typeDefs = gql`
  type Greeting {
    greeting: String
  }

  type Stocks {
    list: Object
  }

  type Query {
    hello: String,
    greet: Greeting
  }
`

module.exports.typeDefs = typeDefs