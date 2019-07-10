<template>
  <el-carousel :interval="5000" arrow="always" class="carousel">
    <el-carousel-item v-for="(item, idx) in imgs" :key="idx">
      <img width="1226" height="460" :src="item" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
// TODO: 从后端请求数据
import allData from 'assets/data.json'
export default {
  data() {
    return {
      imgs: allData.slider
    }
  }
}
</script>

<style lang="stylus">
.carousel
  width 100%
  height 100%
  background-color #eee
  .el-carousel__container
    height 460px
    height 100%
    .el-carousel__item
      left: 2px
    .el-carousel__arrow
      font-size 45px
      background-color rgba(31,45,61,0)
      height: 69px
      width: 41px
      border-radius: 1px
      &:hover
        background-color rgba(31,45,61,.3)
        height: 69px
        width: 41px
        border-radius: 1px
      &.el-carousel__arrow--left
        left 235px
      &.el-carousel__arrow--right
        right: 0
  .el-carousel__indicators
    bottom 23px
    left 1128px
    .el-carousel__indicator
      padding: 2px 2px
      background-color rgba(255, 255, 255, 0.3)
      border-radius: 50%
      margin-right 10px
      &.is-active .el-carousel__button
        background-color rgba(255,255,255,0.7)
      .el-carousel__button
        width: 6px
        height: 6px
        border-radius: 3px
        background-color rgba(0, 0, 0, 0.4)
</style>
