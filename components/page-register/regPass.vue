<template>
  <div class="reg-pass">
    <p>您注册的手机号为<span class="phone">{{ phone }}</span></p>
    <p>请设置您的密码</p>
    <el-input v-model="pass" placeholder="请输入密码" show-password />
    <el-input v-model="vpass" placeholder="请输入确认密码" show-password />
    <el-button class="sub-button" @click="submit">
      提交
    </el-button>
    <div class="warning-msg">
      <span v-if="warningMsg" class="prompt">
        <i class="fa fa-info-circle" aria-hidden="true" />{{ warningMsg }}
      </span>
      <span v-else class="prompt-default">密码长度8-16位，数字、字母、字符至少包含两种</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    phone: {
      type: String
    }
  },
  data() {
    return {
      pass: '',
      vpass: '',
      warningMsg: ''
    }
  },
  methods: {
    submit() {
      const self = this
      const pattern = /(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*?]+)$)^[\w~!@#$%^&*?]{4}$/
      if (self.pass !== self.vpass) {
        self.warningMsg = '再次密码输入不一致'
      } else if (!pattern.test(self.pass)) {
        self.warningMsg = '密码长度8-16位，数字、字母、字符至少包含两种'
      } else {
        self.$axios.post('/user/veriPass', {
          pass: self.pass,
          phone: self.phone
        }).then(({ status, data: { statusCode, msg } }) => {
          if (status === 200 && statusCode === 0) {
            self.$emit('toJumpLog')
          } else {
            self.warningMsg = msg
          }
        })
      }
    }
  }
}
</script>

<style lang="stylus">
.reg-pass
  width 332px
  margin 0 auto
  padding: 30px 0
  position relative
  p
    color: #666
    margin 0 0 0px
    font-weight bold
    .phone
      color #ff6700
  .el-input
    margin-top 15px
    input
      border-radius 0
  .warning-msg
    position absolute
    bottom 80px
    .prompt-default
      display block
      color rgb(86, 86, 86)
    .prompt
      font-size: 14px;
      color #ff6700
      .fa.fa-info-circle
        margin-right 5px
  .sub-button
    display block
    width 100%
    border-radius 0
    background-color #ff6700
    color #fff
    border none
    margin-top 40px
</style>
