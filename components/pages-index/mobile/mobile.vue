<template>
  <div class="my-container section-wrapper mobile-wrapper">
    <div class="section-header">
      <span class="section-title">手机</span>
      <a href="/" class="more">查看全部
        <i class="fa fa-chevron-right" />
      </a>
    </div>
    <div class="section-content">
      <div class="ad">
        <a class="ad-link" href="/">
          <img width="234" height="614" :src="mobileData.ad" alt="">
        </a>
      </div>
      <div class="products">
        <ul class="product-list">
          <li v-for="(item, idx) in mobileData.data" :key="idx" class="list-item">
            <Product :product="item" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import allData from 'assets/data1.json'
import Product from '../../public/product'
export default {
  components: {
    Product
  },
  data() {
    return {
      mobileData: allData[1]
    }
  }
}
</script>

<style lang="stylus">
.section-wrapper
  padding 22px 0 22px 0
  .section-header
    margin: 0
    font-size: 22px
    font-weight: 200
    line-height: 58px
    color: #333
    display flex
    justify-content space-between
    .more
      font-size: 16px
      line-height: 58px
      color: #424242
      transition: all .2s
      .fa.fa-chevron-right
        display inline-block
        background-color #afafaf
        color #fefefb
        width: 12px
        height: 12px
        padding: 4px
        margin-left: 8px
        border-radius: 16px
        font-size: 12px
        line-height: 12px
        background: #b0b0b0
        color: #fff
        text-align center
        vertical-align 1px
        transition: all .2s
      &:hover
        color #fe6608
        .fa.fa-chevron-right
          color #fefefe
          background-color #fe6608
  .section-content
    display flex
    .ad
      width 234px
      height 614px
      .ad-link
        display block
        width 100%
        height 100%
        transition all .2s
        &:hover
          box-shadow 0 15px 30px rgba(0,0,0,0.1)
          transform translate3d(0,-2px,0)
    .products
      .product-list
        display flex
        margin 0
        padding 0
        list-style none
        flex-wrap wrap
</style>
