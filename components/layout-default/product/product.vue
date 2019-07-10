<template>
  <div class="products-item">
    <div v-if="product.flags" class="flag">
      <span class="txt">{{ product.flags }}</span>
    </div>
    <div class="figure">
      <img height="110" width="160" :src="product.img" alt="">
    </div>
    <div class="desc">
      <a class="name">{{ product.title }}</a>
      <span class="price">{{ product.price }}</span>
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
.products-item
  position relative
  height 159px
  width 100%
  box-sizing border-box
  // background-color #eee
  padding 35px 12px 0
  text-align center
  display flex
  flex-flow column
  justify-content space-between
  align-items center

  .flag
    position absolute
    top 0
    color #ff6700
    border 1px solid #ff6700
    padding 0px 21px
    z-index 10

    .txt
      font-size 12px

  .desc
    position relative
    bottom 0
    font-size 12px
    span
      display block

    .name
      color #333

    .price
      color #ff6700
</style>
