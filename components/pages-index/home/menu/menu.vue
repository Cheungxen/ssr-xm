<template>
  <div class="menu-wrapper">
    <ul class="menu-items">
      <li v-for="(item, idx) in menuData" :key="idx" class="menu-item" @mouseenter="onMouseEneter(idx)" @mouseleave="onMouseLeave">
        <nuxt-link class="menu-link" to="/">
          <span class="txt">{{ item.title }}</span>
          <i class="fa fa-chevron-right" aria-hidden="true" />
        </nuxt-link>
      </li>
    </ul>
    <ul v-show="isShow" class="menu-detail" @mouseenter="onEnter" @mouseleave="onLeave">
      <li v-for="(item, idx) in selectedItem.data" :key="idx" class="detail-item">
        <nuxt-link to="/" class="item">
          <img width="40" height="40" :src="item.img" alt="">
          <span class="title">{{ item.title }}</span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
// TODO: 从后端请求数据
import allData from 'assets/data.json'
export default {
  data() {
    return {
      menuData: allData.menuData,
      selectedItem: {},
      isShow: false,
      delayId: ''
    }
  },
  methods: {
    onMouseEneter(idx) {
      clearTimeout(this.delayId)
      this.selectedItem = this.menuData[idx]
      this.isShow = true
      // console.log('enter');
    },
    onMouseLeave() {
      this.delayId = setTimeout(() => {
        this.isShow = false
        // console.log('leave');
      }, 10)
    },
    onEnter() {
      clearTimeout(this.delayId)
      this.isShow = true
      // console.log('enter');
    },
    onLeave() {
      this.delayId = setTimeout(() => {
        this.isShow = false
        // console.log('leave');
      }, 10)
    }
  }
}
</script>

<style lang="stylus">
// TODO: 菜单弹出有问题,不能自适应宽度
.menu-wrapper
  z-index 50
  position absolute
  left 0
  top 0
  height 100%
  // width 100%
  display flex
  .menu-items
    min-width 235px
    margin 0
    padding 0
    list-style none
    padding 20px 0
    display flex
    flex-flow column
    height 100%
    // z-index 50
    box-sizing border-box
    background-color rgba(0,0,0,0.6)
    .menu-item
      height 42px
      padding 0 20px 0 25px
      &:hover
        background-color #ff6700
      .menu-link
        width 100%
        color #fefefe
        display flex
        justify-content space-between
        .fa-chevron-right
          color rgba(255,255,255,0.5)
      .menu-link .txt, .menu-link .fa-chevron-right
        display inline-block
        line-height 42px
  .menu-detail
    list-style none
    margin 0
    padding 0
    background-color #fff
    border 1px solid #dfdfdf
    // z-index 50
    box-shadow: 0 8px 16px rgba(0,0,0,0.18)
    writing-mode vertical-lr /**step:1*/
    .detail-item
      width 248px
      height 76px
      padding 18px 20px
      box-sizing border-box
      display inline-block /**step:2*/
      float left /**step:3*/
      .item
        display flex
        align-items center
        font-size 14px
        color #333
        writing-mode horizontal-tb /**step:4*/
        &:hover
          color #ff6700
        .title
          margin-left 12px
</style>
