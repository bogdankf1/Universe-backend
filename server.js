const Koa = require('koa')
const Router = require('koa-router')
const cors = require('koa2-cors')
const bodyParser = require('koa-bodyparser')
const { ApolloServer, gql } = require('apollo-server-koa')
const { hostname, port } = require('./constants/constants.js')
const { getStocksList } = require('./api/stocks.js')

const app = new Koa()
const router = new Router()

const typeDefs = gql`
  type Greeting {
    greeting: String
  }

  type Query {
    hello: Greeting
  }
`

const resolvers = {
  Query: {
    hello: {
      greeting: () => 'Hello world!'
    }
  },
}

router.get('/stocks/list', getStocksList)

const server = new ApolloServer({ typeDefs, resolvers })
server.applyMiddleware({ app })

app.use(cors())
app.use(bodyParser())
app.use(router.routes())

const run = async () => {
  app.listen(port, () => {
    console.log(`Koa server listening on http://${hostname}:${port}${server.graphqlPath}`)
  })
}

run()