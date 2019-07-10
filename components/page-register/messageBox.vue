<template>
  <div class="msgBox">
    <p class="agree-header">
      <a href="/">《小米商城用户协议》</a>、<a href="/">《账号协议》</a>、<a href="/">《隐私政策》</a>请您仔细阅读以上协议，其中有对您权利义务的特别约定等重要条款，同意后方可使用本软件
    </p>
    <div class="agree-content">
      <Agree />
    </div>
  </div>
</template>

<script>
import Agree from '../page-register/agreeAbout'
export default {
  components: {
    Agree
  }
}
</script>

<style lang="stylus">
.el-message-box
  width 660px
  border-radius 0
  padding-bottom: 0
  .el-message-box__header
    padding 0 20px
    background-color #f5f5f5
    .el-message-box__title
      display inline-block
      span
        display: inline-block;
        line-height: 60px;
        font-size: 18px;
        font-weight: 400;
        color: #424242;
    .el-message-box__headerbtn
      right: 20px;
      top 0
      .el-message-box__close.el-icon-close
        line-height: 60px;
        font-size: 24px;
        font-weight: 200;
        color #75829a
        &:hover
          color #ff6700
  .el-message-box__content
    padding 20px
  .el-message-box__btns
    height 80px
    padding 0
    background-color #f5f5f5
    text-align center
    line-height 80px
    button
      width 160px
      height 40px
      border-radius 0
      vertical-align middle
    .el-button--primary
      background-color #ff6700
      border none
.msgBox
  .agree-header
    margin 0
    padding 0 0 20px 20px
    a
      color #ff6700
  .agree-content
    padding 0 0 0 20px
    overflow-y scroll
    max-height 300px
</style>
