<template>
  <div class="detail-header">
    <div class="my-container">
      <ul class="pro-list">
        <li class="list-item first">
          小米9<span class="seprator">|</span>
        </li>
        <li class="list-item">
          小米9 SE<span class="seprator">|</span>
        </li>
        <li class="list-item">
          小米9 透明尊享版
        </li>
      </ul>
      <ul class="pro-detail-list">
        <li class="list-item">
          概述<span class="seprator">|</span>
        </li>
        <li class="list-item">
          参数<span class="seprator">|</span>
        </li>
        <li class="list-item">
          F码通道<span class="seprator">|</span>
        </li>
        <li class="list-item">
          用户评价
        </li>
        <li class="list-item button">
          <a href="/buypage">立即购买</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus">
.detail-header
  height 65px
  border-top 1px solid #e0e0e0
  .my-container
    display flex
    justify-content space-between
    align-items center
    height 100%
    ul
      list-style none
      margin 0
      padding 0
      display flex
      align-items center
      li
        font-size 12px
        color #616161
        .seprator
          padding 0 7px
          display inline
    .pro-list
      .list-item.first
        font-size 18px
        color #212121
        font-weight 400
        line-height 60px
        .seprator
          font-size 12px
          vertical-align middle
    .pro-detail-list
      .list-item
        line-height 14px
        font-size 14px
        .seprator
          color #eee
      .list-item.button
        margin-left 7px
        a
          display inline-block
          color #fff
          background-color #ff6700
          line-height 30px
          width 120px
          text-align center
          transition all .3s
          &:hover
            background-color #f25807

</style>
