<template>
  <div class="page-register">
    <div class="wrapper">
      <div class="form-wrapper">
        <div class="form-header">
          <div class="logo">
            <img src="../static/icon/logo.png" alt="">
          </div>
          <h1>注册小米账号</h1>
        </div>
        <Signinphone v-if="isShowSign" @toVerify="toVerify" />
        <Verify v-if="isShowVerify" :phone="phone" @clickPre="onClickPre" @clickNext="onClickNext" />
        <RegPass v-if="isShowRegPass" :phone="phone" @toJumpLog="tolog" />
        <ShowLog v-if="isShowLog" />
      </div>
    </div>
    <div class="register-footer" />
  </div>
</template>

<script>
import Signinphone from '../components/page-register/signinphone'
import Verify from '../components/page-register/verify'
import RegPass from '../components/page-register/regPass'
import ShowLog from '../components/page-register/ShowLog'
export default {
  layout: 'blank',
  components: {
    Signinphone,
    Verify,
    RegPass,
    ShowLog
  },
  data() {
    return {
      isShowSign: true,
      isShowVerify: false,
      isShowRegPass: false,
      isShowLog: false,
      phone: ''
    }
  },
  methods: {
    toVerify(val) {
      this.phone = val
      this.isShowSign = false
      this.isShowVerify = true
    },
    onClickPre() {
      this.isShowVerify = false
      this.isShowSign = true
    },
    onClickNext() {
      this.isShowVerify = false
      this.isShowRegPass = true
    },
    tolog() {
      this.isShowRegPass = false
      this.isShowLog = true
    }
  }
}
</script>

<style lang="stylus">
.page-register
  background-color #f9f9f9
  position: absolute;
  height: 100%;
  width: 100%;
  .wrapper
    width 856px
    margin 0 auto
    padding-top 60px
    position relative
    .form-wrapper
      height 548px
      background-color #fff
      .form-header
        text-align center
        .logo
          margin-bottom 40px
        h1
          margin 0
          font-size: 30px;
          color #333
</style>
