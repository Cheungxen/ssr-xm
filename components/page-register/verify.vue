<template>
  <div class="verify">
    <p>我们已经发送一条验证短信至<span class="phone"> {{ phone }}</span></p>
    <p>请输入短信中的验证码</p>
    <div class="vefity-input">
      <el-input v-model="verify" class="vphone" placeholder="请输入验证码" @focus="onFocus" />
      <el-button class="send-btn" :disabled="isDisabled">
        {{ statusMsg }}
      </el-button>
    </div>
    <div class="buttons">
      <el-button class="next-btn" @click="next">
        下一步
      </el-button>
      <el-button class="pre-btn" @click="pre">
        返回
      </el-button>
    </div>
    <div class="warning-msg">
      <span v-if="warningMsg" class="prompt">
        <i class="fa fa-info-circle" aria-hidden="true" />{{ warningMsg }}
      </span>
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
      isDisabled: true,
      verify: '',
      statusMsg: '重新发送',
      warningMsg: ''
    }
  },
  created() {
    // this.countDone()
    let count = 60
    const timeId = setInterval(() => {
      this.statusMsg = `重新发送(${count--})`
      if (count === 0) {
        clearInterval(timeId)
        this.isDisabled = false
        this.statusMsg = `重新发送`
      }
    }, 1000)
  },
  methods: {
    onFocus() {
      this.warningMsg = ''
    },
    next() {
      const self = this
      self.$axios.post('user/verify', {
        code: self.verify
      }).then(({ status, data }) => {
        if (status === 200 && data.statusCode === 0) {
          self.$emit('clickNext')
        } else {
          self.warningMsg = data.msg
          return false
        }
      })
    },
    pre() {
      this.$emit('clickPre')
    },
    countDone() {
      let count = 60
      const timeId = setInterval(() => {
        this.statusMsg = `重新发送(${count--})`
        if (count === 0) {
          clearInterval(timeId)
          this.isDisabled = false
          this.statusMsg = `重新发送`
        }
      }, 1000)
    }
  }
}
</script>

<style lang="stylus">
.verify
  width 332px
  margin 0 auto
  padding: 30px 0
  position relative
  p
    color: #666
    margin 0 0 10px
    .phone
      color #ff6700
  .vefity-input
    height 40px
    padding-bottom 30px
    width 100%
    .vphone
      width 210px
      display inline-block
      height 40px
      input
        border-radius 0
    .send-btn
      display inline-block
      min-width 76px
      padding 0 10px
      border-radius 0
      height 40px
      margin-left 8px
      span
        display inline-block
  .buttons
    font-size 0
    .next-btn, .pre-btn
      display block
      width 100%
      margin 0
      border-radius 0
      margin-bottom 10px
    .next-btn
      background-color #ff6700
      border none
      color #fff
      &:hover
        background-color #ff936a;
  .warning-msg
    position absolute
    left: 0;
    bottom: 133px;
    .prompt
      font-size: 10px;
      color #ff6700
      .fa.fa-info-circle
        margin-right 5px
</style>
