<template>
  <div v-if="product" href="/" class="public-product">
    <span class="flag" :class="product.flag.tag">{{ product.flag.txt }}</span>
    <a href="/" class="product-link">
      <img width="160" height="160" :src="product.img" alt="">
    </a>
    <div class="detail">
      <h3 class="title">
        <a href="/" class="title-link">{{ product.title }}</a>
      </h3>
      <p class="desc">
        {{ product.desc }}
      </p>
      <p class="price">
        {{ product.price }}元
        <span v-if="product.oldprice" class="old-price">{{ product.oldprice }}元</span>
      </p>
    </div>
    <div v-if="product.review" class="review">
      <p class="review-txt">
        {{ product.review[0].review }}
      </p>
      <p class="auth">
        来自于 {{ product.review[0].user }} 的评价
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="stylus">
.public-product
  box-sizing border-box
  width 234px
  height 300px
  padding 20px
  margin-left 14px
  margin-bottom 14px
  position relative
  display flex
  background-color #fefefe
  flex-direction column
  align-items center
  transition all .2s
  overflow hidden
  &:hover
    transform translate3d(0, -2px, 0)
    box-shadow 0 15px 30px rgba(0,0,0,0.1)
    .review
      bottom 0
  .product-link
    display block
    margin 0 auto 18px
  .detail
    text-align center
    width 100%
    .title
      font-size: 14px;
      font-weight: 400;
      white-space nowrap
      text-overflow ellipsis
      overflow hidden
      display block
      width 95%
      text-align center
      padding 0
      margin 0
      .title-link
        color: #333
    .desc
      margin: 0 10px 10px
      height: 18px
      font-size: 12px
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
      color: #b0b0b0
    .price
      color: #ff6700
      .old-price
        color #b0b0b0
        text-decoration:line-through
    p
      margin 0
      padding 0
  .flag
    display block
    position absolute
    line-height 20px
    font-size 12px
    top 0
    width 64px
    height 20px
    text-align center
    color #fefefe
    &.new
      background-color #83c44e
    &.saleoff
      background-color #e53935
  .review
    position absolute
    bottom -75px
    left 0
    width 100%
    height 75px
    background-color #ff6700
    font-size 12px
    padding 8px 30px
    box-sizing border-box
    transition all .2s
    p
      margin 0
      padding 0
    .review-txt
      color #fefefe
    .auth
      color rgba(255,255,255,0.6)
</style>
