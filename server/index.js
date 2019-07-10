import bodyParser from 'koa-bodyparser'
// import mongoose from 'mongoose'
import session from 'koa-session'
// import dbConfig from './dbs/config'

import userInterface from './interface/user'
const Koa = require('koa')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const sessionConfig = {
  key: 'koa:sess', /**  cookie的key。 (默认是 koa:sess) */
  maxAge: 120000, /**  session 过期时间，以毫秒ms为单位计算 。 */
  autoCommit: true, /** 自动提交到响应头。(默认是 true) */
  overwrite: true, /** 是否允许重写 。(默认是 true) */
  httpOnly: true, /** 是否设置HttpOnly，如果在Cookie中设置了"HttpOnly"属性，那么通过程序(JS脚本、Applet等)将无法读取到Cookie信息，这样能有效的防止XSS攻击。  (默认 true) */
  signed: true, /** 是否签名。(默认是 true) */
  rolling: true, /** 是否每次响应时刷新Session的有效期。(默认是 false) */
  renew: false /** 是否在Session快过期时刷新Session的有效期。(默认是 false) */
}

const app = new Koa()
app.keys = ['memem']
app.use(session(sessionConfig, app))
// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')

app.use(bodyParser({
  extendTypes: ['json', 'form', 'text']
}))
// mongoose.connect(dbConfig.dbs, {
//   useNewUrlParser: true
// })

config.dev = !(app.env === 'production')

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.use(userInterface.routes()).use(userInterface.allowedMethods())
  app.use((ctx) => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
