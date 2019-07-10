<template>
  <el-header id="topbar">
    <div class="my-container">
      <ul class="topbar-nav">
        <li v-for="(item, idx) in topBar" :key="item" class="nav-item">
          <nuxt-link class="nav-link" to="/">
            {{ item }}
          </nuxt-link>
          <span v-if="topBar.length-1 !== idx" class="seperator">|</span>
        </li>
      </ul>
      <div class="user">
        <User />
        <div class="cart">
          <nuxt-link to="/">
            购物车( 0 )
          </nuxt-link>
        </div>
      </div>
    </div>
  </el-header>
</template>

<script>
import User from './user'
export default {
  components: {
    User
  },
  data() {
    return {
      topBar: [
        '小米商城',
        'MIUI',
        'IoT',
        '云服务',
        '金融',
        '有品',
        '小爱开放平台',
        '企业团购',
        '资质证照',
        '协议规则',
        '下载app',
        'Select Region'
      ],
      isShowAgree: true
    }
  }
}
</script>

<style lang="stylus">
#topbar
  background-color #333333
  height 40px !important
  .my-container
    width 1228px
    display flex
    margin 0 auto
    .topbar-nav
      flex 1
      margin 0
      padding 0
      list-style none
      display flex
      .nav-item
        font-size 0
        .nav-link, .seperator
          color #b0b0b0
          font-size 12px
          line-height 40px
        .nav-link:hover
          color #fff
        .seperator
          color #3b423b
          display inline-block
          width 17px
          text-align center
    .user
      display flex
      line-height 40px
      font-size 12px
      .log
        margin-right 27px
      .cart
        width 120px
        text-align center
        background-color #424242
      a
        color #b0b0b0
        &:hover
          color #fff
      .seperator
        color #3b423b
        display inline-block
        width 12px
        text-align center
</style>
