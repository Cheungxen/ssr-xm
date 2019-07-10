<template>
  <section class="home">
    <div class="my-container">
      <div class="top-wrapper">
        <Menu />
        <Carousel />
      </div>
      <div class="bottom-wrapper">
        <ul class="links">
          <li v-for="(item, idx) in links" :key="idx" class="link-item">
            <nuxt-link to="/" class="link">
              <i :class="item.icon" class="icon" aria-hidden="true" />
              {{ item.txt }}
            </nuxt-link>
          </li>
        </ul>
        <ul class="recs">
          <li v-for="(item, idx) in recs" :key="idx" class="rec-item">
            <nuxt-link to="/mi9">
              <img :src="item" alt="" width="317" height="170">
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import allData from 'assets/data.json'
import Menu from './menu/menu'
import Carousel from './carousel/carousel'
// TODO: 从后端请求数据
export default {
  components: {
    Menu,
    Carousel
  },
  data() {
    return {
      recs: allData.sliderBottomImgs,
      links: [
        {
          icon: 'fa fa-mobile',
          txt: '选购手机'
        }, {
          icon: 'fa fa-gift',
          txt: '企业团购'
        }, {
          icon: 'fa fa-font',
          txt: 'F码通道'
        }, {
          icon: 'fa fa-mobile',
          txt: '米粉卡'
        }, {
          icon: 'fa fa-refresh',
          txt: '以旧换新'
        }, {
          icon: 'fa fa-credit-card',
          txt: '话费充值'
        }

      ]
    }
  }
}
</script>

<style lang="stylus">
.home
  margin-bottom 42px
  .my-container
    .top-wrapper
      position relative
      display flex
      width 100%
      height 460px
      margin-bottom 14px
    .bottom-wrapper
      width 100%
      height 170px
      display flex
      margin-bottom 26px
      .links
        overflow hidden
        width 235px
        height 100%
        background-color #5f5750
        margin 0 14px 0 0
        padding 0
        list-style none
        display flex
        flex-wrap wrap
        .link-item
          width 76px
          height 82px
          text-align center
          position relative
          &:before
            position absolute
            content ''
            width 0
            height 66px
            border-left 1px solid rgba(255,255,255,0.05)
            left -1px
            top 8px
          &:after
            position absolute
            content ''
            width 66px
            height 0
            border-bottom 1px solid rgba(255,255,255,0.05)
            left 5px
            top 0
          .link
            color rgba(255,255,255,0.7)
            font-size 12px
            display: block
            width: 100%
            height: 100%
            &:hover
              color #fefefe
            .icon
              padding-top 20px
              margin-bottom 4px
              font-size 24px
              display block
      .recs
        margin 0
        padding 0
        list-style none
        display flex
        .rec-item
          margin-right 14px
          &:last-child
            margin-right 0
</style>
