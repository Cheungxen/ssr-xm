<template>
  <div class="hot my-container">
    <h1 class="section-title">
      热评产品
    </h1>
    <div class="section-content">
      <ul class="review-list">
        <li v-for="(item, idx) in data.data" :key="idx" class="review-list-item">
          <a class="card-header" href="/">
            <img :src="item.img" alt="" width="296" height="220">
          </a>
          <div class="card-content">
            <p class="review">
              <a href="/">{{ item.review }}</a>
            </p>
            <p class="auth">
              <small>来自于 {{ item.user }} 的评价</small>
            </p>
            <p class="detail">
              <a class="pro-name" href="/">{{ item.goods }}</a>
              <span class="sep">|</span>
              <span class="pro-price">{{ item.price }}元</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.hot
  .section-title
    margin 0
    font-size: 22px
    font-weight: 200
    line-height: 58px
    color: #333
  .section-content
    .review-list
      list-style none
      display flex
      margin 0
      padding 0
      justify-content space-between
      .review-list-item
        width 296px
        height 415px
        margin-bottom: 14px
        background: #ffffff
        overflow hidden
        transition all .2s
        &:hover
          transform translate3d(0, -2px, 0)
          box-shadow 0 15px 30px rgba(0,0,0,0.1)
        .card-header
          display: block
        .card-content
          padding 28px
          box-sizing border-box
          .review
            margin-bottom 15px
            height 72px
            line-height 24px
            overflow hidden
            text-overflow ellipsis
            a
              color: #333
          .auth
            color #b0b0b0
            font-size 12px
            margin 0 0 8px
          .detail
            margin 0
            .pro-name
              color #333
            .sep
              color #e0e0e0
              margin 0 .25em
            .pro-price
              color #ff6700
</style>
