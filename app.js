import Koa from 'koa';
import cors from 'koa2-cors';

const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const users = require('./src/routes/users');
const form = require('./src/routes/form');
const miniapp = require('./src/routes/miniapp')

app.use(cors());
// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  formLimit:"3mb",
  jsonLimit:"3mb",
  textLimit:"3mb",
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
// app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods());
app.use(form.routes(), form.allowedMethods());
app.use(miniapp.routes(), form.allowedMethods());

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});



module.exports = app
