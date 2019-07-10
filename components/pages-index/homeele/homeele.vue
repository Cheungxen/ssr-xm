<template>
  <div class="my-container section-wrapper homeele-wrapper">
    <div class="section-header">
      <span class="section-title">{{ title }}</span>
      <ul class="section-nav">
        <li v-for="(item,idx) in nav" :key="idx" class="section-nav-item" @mouseenter="onMouseEnter(idx)">
          <a href="/">{{ item }}</a>
        </li>
      </ul>
    </div>
    <div class="section-content">
      <div class="ad">
        <a v-for="(item, idx) in data.ad" :key="idx" class="ad-link" href="/">
          <img width="234" height="300" :src="item" alt="">
        </a>
      </div>
      <div class="products">
        <ul class="product-list">
          <li v-for="(item, idx) in data.data" :key="idx" class="list-item">
            <Product :product="item" />
          </li>
        </ul>
        <div class="product-list-more">
          <a href="/" class="link">
            <span class="txt">浏览更多<small>热门</small></span>
            <i class="fa fa-arrow-circle-o-right" />
          </a>
        </div>
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
  props: {
    nav: {
      type: Array,
      default() {
        return []
      }
    },
    title: {
      type: String
    },
    data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      banner: allData[0].data[2]
    }
  },
  methods: {
    onMouseEnter(idx) {
      console.log(idx)
    }
  }
}
</script>

<style lang="stylus">
.homeele-wrapper
  .section-header
    margin: 0
    font-size: 22px
    font-weight: 200
    line-height: 58px
    color: #333
    display flex
    justify-content space-between
    .section-nav
      list-style none
      margin 0
      padding 0
      display flex
      font-size: 16px
      line-height: 58px
      .section-nav-item
        margin-left 30px
        a
          color: #424242
          &:hover
            color #ff6700
            border-bottom 2px solid #ff6700
  .section-content
    display flex
    .ad
      width 234px
      height 614px
      .ad-link
        display block
        width 100%
        height 300px
        margin-bottom 14px
    .products
      position relative
      .product-list
        .list-item:last-child
          height 143px !important
          .public-product
            padding 0 0 0 30px
            box-sizing border-box
            height 143px !important
            display flex
            flex-direction row-reverse
            .detail
              width 94px
            img
              width 80px
              height 80px
      .product-list-more
        position absolute
        bottom 14px
        right 0
        background-color #fefefe
        width 234px
        height 143px
        transition all .2s
        box-sizing border-box
        &:hover
          box-shadow 0 15px 30px rgba(0,0,0,0.1)
          transform translate3d(0,-2px,0)
        .link
          box-sizing border-box
          display flex
          width 100%
          height 100%
          padding 30px
          font-size: 18px
          color: #333333
          justify-content space-between
          align-items center
          .txt
            small
              display block
              color #757575
          .fa.fa-arrow-circle-o-right
            font-size 48px
            line-height 48px
            margin-right 15px
            color #ff6700
</style>
