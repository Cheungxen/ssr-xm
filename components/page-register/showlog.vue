<template>
  <div class="showlog">
    <i class="fa fa-check-circle" aria-hidden="true" />
    <p>注册成功</p>
    <el-button @click="tolog">
      立即登录
    </el-button>
  </div>
</template>

<script>
export default {
  methods: {
    tolog() {
      window.location.href = '/signin'
    }
  }
}
</script>

<style lang="stylus">
.showlog
  width 332px
  margin 0 auto
  padding: 30px 0
  position relative
  text-align center
  .fa.fa-check-circle
    display block
    color #ff6700
    font-size 100px
  .el-button
    display block
    width 100%
    border-radius 0
  p
    color: #666
    margin 10px 0 20px
    font-size 20px
</style>
