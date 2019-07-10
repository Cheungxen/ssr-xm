import Router from 'koa-router'
// import User from '../dbs/module/user'

const router = new Router({ prefix: '/user' })

router.post('/signup', async (ctx) => {
  // const { phone } = ctx.request.body
  // const isDuplicated = await User.find({ phone })
  // if (isDuplicated.length) {
  //   ctx.body = {
  //     code: 1,
  //     msg: '手机号已被注册'
  //   }
  //   return false
  // } else {
  //   const newUser = await User.create({ phone, password: '' })
  //   if (newUser) {
  ctx.body = {
    code: 0,
    logCode: '1234',
    msg: '验证码已发送'
  }
  //   }
  // }
})

router.post('/verify', async (ctx) => {
  const { code } = ctx.request.body
  if (code !== '1234') {
    ctx.body = {
      statusCode: 1,
      msg: '验证码错误或者过期'
    }
  } else {
    ctx.body = {
      statusCode: 0,
      msg: ''
    }
  }
})

router.post('/veriPass', async (ctx) => {
  // const { pass, phone } = ctx.request.body
  // try {
  //   const res = await User.find({
  //     phone
  //   })
  //   if (res.length) {
  //     const res1 = await User.where({
  //       phone: phone
  //     }).updateOne({
  //       password: pass
  //     })
  //     if (res1) {
  ctx.body = {
    statusCode: 0,
    msg: ''
  }
  //     } else {
  //       ctx.body = {
  //         statusCode: -1,
  //         msg: '服务器出错'
  //       }
  //     }
  //   } else {
  //     ctx.body = {
  //       statusCode: -1,
  //       msg: '无此账户'
  //     }
  //   }
  // } catch (error) {
  //   console.log(error)
  // }
})

router.post('/signin', async (ctx) => {
  const { phone, pwd } = ctx.request.body
  const defaultUser = {
    phone: '13350425359',
    pwd: '12a1'
  }
  if (phone !== defaultUser.phone) {
    ctx.body = { code: -1, msg: '用户名不正确' }
    return false
  } else if (defaultUser.pwd !== pwd) {
    ctx.body = { code: -1, msg: '密码不正确' }
    return false
  } else {
    ctx.session.isLogged = true
    ctx.session.user = phone
    ctx.body = { code: 0, msg: '登录成功,即将跳转到主页' }
  }
})

router.get('/isLogged', async (ctx) => {
  if (ctx.session.isLogged === true) {
    ctx.body = {
      code: 0,
      msg: '',
      user: ctx.session.user
    }
  } else {
    ctx.body = {
      code: -1,
      msg: '未登录',
      user: ''
    }
  }
})

router.get('/exit', async (ctx) => {
  ctx.session = null
  ctx.body = {
    code: 0
  }
})

export default router
