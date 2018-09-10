const Koa = require('koa')
const app = new Koa()

app.use(async ctx => {
  ctx.body = 'Hello World'
  console.log(`Koa is running on localhost:${3001}`)
})

app.listen(3001)