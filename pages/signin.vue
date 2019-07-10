<template>
  <div class="page-signin">
    <div class="icon-section">
      <div class="my-container">
        <div class="logo">
          <a href="/">
            <img src="../static/icon/logo1.png" alt="">
          </a>
        </div>
      </div>
    </div>
    <div class="signin-section">
      <div class="my-container">
        <a href="/">
          <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f838fdcd77715410b441f2f56d8f10cd.jpg" alt="">
        </a>
        <div class="signin">
          <div class="switcher">
            <span>账号登录</span>
            <span>扫码登录</span>
          </div>
          <div class="form">
            <el-input
              v-model="username"
              placeholder="请输入账号"
              class="form-btn"
              @focus="onClick"
            />
            <el-input v-model="pass" class="form-btn" placeholder="请输入密码" show-password @focus="onClick" />
            <span v-if="prompt" class="prompt">{{ prompt }}</span>
            <el-button class="submit-btn form-btn" @click="submit">
              登录
            </el-button>
            <div class="more">
              <span>手机短信登录/注册</span>
              <span>立即注册|忘记密码</span>
            </div>
          </div>
          <div class="other">
            <div class="txt">
              <span class="line" />
              <span>其他方式登录</span>
              <span class="line" />
            </div>
            <div class="icons">
              <i class="fa fa-qq" aria-hidden="true" />
              <i class="fa fa-weibo" aria-hidden="true" />
              <i class="fa fa-weixin" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'blank',
  data() {
    return {
      username: '',
      pass:　'',
      prompt: ''
    }
  },
  methods: {
    onClick() {
      this.prompt = ''
    },
    submit() {
      if (!this.username) {
        this.prompt = '请输入用户名'
        return false
      } else if (!this.pass) {
        this.prompt = '请输入密码'
        return false
      } else {
        this.$axios.post('user/signin', {
          phone: this.username,
          pwd: this.pass
        }).then(({ status, data: { code, msg } }) => {
          if (status === 200 && code === 0) {
            window.alert(`${msg}`)
            window.location.href = '/'
          } else {
            this.prompt = msg
            return false
          }
        })
      }
    }
  }
}
</script>

<style lang="stylus">
.page-signin
  position relative
  .logo
    height 98px
    a
      line-height 98px
      display inline-blcok
      img
        vertical-align middle
  .signin-section
    height 588px
    .my-container
      position: relative;
      height 100%
      a
        display: block;
        position: absolute;
        left: -700px;
      .signin
        width 410px
        height 524px
        position absolute
        background-color #fff
        bottom 0
        right 0
        .switcher
          width 100%
          height 82px
          padding 27px 0 24px
          box-sizing border-box
          display flex
          span
            flex 1
            font-size 24px
            color #666
            text-align center
            &:last-child
              border-left 2px solid #e0e0e0;
            &:first-child
              color #ff6700
        .form
          padding 0 32px
          box-sizing border-box
          position relative
          .form-btn
            display block
            border-radius 0
            width 100%
            margin-bottom 14px
            input
              border-radius 0
              height 48px
            &.submit-btn
              background-color #ff6700
              height: 50px
              border none
              color #fff
              margin-top 24px
          .prompt
            color #ff6700
            display block
            margin-bottom 10px
            position absolute
            bottom 78px
            left 32px
            font-size 10px
          .more
            display flex
            justify-content space-between
            span:first-child
              color #ff6700
        .other
          position relative
          padding 0 32px
          text-align center
          top 140px
          .txt
            display flex
            align-items center
            color #bbb
            margin-bottom 7px
            .line
              flex 1
              border-bottom 1px solid #e0e0e0
          .icons
            .fa
              display inline-block
              width 30px
              height 30px
              border-radius 50%
              position relative
              margin 0 17px
              &:before
                position relative
                font-size 18px
                color #ffffff
                top 6px
              &.fa-qq
                background-color #0288d1
              &.fa-weibo
                background-color #d32f2f
              &.fa-weixin
                background-color #00d20d

</style>
