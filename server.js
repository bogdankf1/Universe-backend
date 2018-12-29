const Koa = require('koa')
const Router = require('koa-router')
const cors = require('koa2-cors')
const bodyParser = require('koa-bodyparser')
const { ApolloServer } = require('apollo-server-koa')
const { hostname, port } = require('./constants/constants.js')
const { getStocksList } = require('./api/stocks.js')
const { typeDefs } = require('./graphql/typeDefs.js')
const { resolvers } = require('./graphql/resolvers.js')

const app = new Koa()
const router = new Router()

router.get('/stocks/list', getStocksList)

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ ctx }) => ({ ctx })
})
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