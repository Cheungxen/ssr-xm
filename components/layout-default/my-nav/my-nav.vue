<template>
  <div id="navbar">
    <div class="my-container navbar-container">
      <div class="logo">
        <nuxt-link to="/">
          <img src="../../../static/icon/logo.png" alt="">
        </nuxt-link>
      </div>
      <ul class="nav">
        <li v-for="(item, idx) in navData" :key="idx" class="nav-item" @mouseenter="onMouseEnter(idx)" @mouseleave="onMouseLeave">
          <nuxt-link to="/" class="nav-link">
            {{ item.title }}
          </nuxt-link>
        </li>
      </ul>
      <div class="search">
        <el-input v-model="searchText" placeholder="" class="input-with-select">
          <el-button slot="append" icon="el-icon-search" class="search-icon" />
          <div slot="append" class="search-default">
            <span>小米9</span>
            <span>小米9 SE</span>
          </div>
        </el-input>
      </div>
    </div>
    <nav-popup :selected-item="selectedItem" :is-show="isShowPop" @showpop="onShow" @hidepop="onHide" />
  </div>
</template>

<script>
// TODO: 从后端请求数据并加载
import allData from 'assets/data.json'
import navPopup from '../nav-popup/nav-popup'

export default {
  components: {
    navPopup
  },
  data() {
    return {
      navData: allData.navData,
      selectedItem: {},
      searchText: '',
      isShowPop: false,
      delayID: 0
    }
  },
  methods: {
    onMouseEnter(idx) {
      clearTimeout(this.delayID)
      if (this.navData.length - idx <= 2) {
        this.isShowPop = false
        this.selectedItem = this.navData[this.navData.length - 3]
      } else {
        this.isShowPop = true
        this.selectedItem = this.navData[idx]
      }
    },
    onMouseLeave() {
      this.delayID = setTimeout(() => {
        this.isShowPop = false
      }, 5)
    },
    onShow() {
      clearTimeout(this.delayID)
      this.isShowPop = true
    },
    onHide() {
     this.delayID = setTimeout(() => {
        this.isShowPop = false
      }, 5)
    }
  }
}
</script>

<style lang="stylus">
#navbar
  position relative
  background-color #fefefe
  .navbar-container
    height 100px
    display flex
    align-items center
    position relative
    .logo
      height 55px
      width 55px
    .nav
      list-style none
      display flex
      padding 12px 0 0 179px
      margin 0
      .nav-link
        display inline-block
        font-size 16px
        padding 22px 10px 42px 10px
        color #333
        &:hover
          color #ff6700
    .search
      position absolute
      right 0
      border 1px solid #e0e0e0
      text-align center
      transition all .3s
      &:hover
        border 1px solid #b0b0b0
        .el-input__inner
          border-right 1px solid #b0b0b0
      .el-input__inner, .el-input-group__append
        border-radius 0
        display inline-block
        height 51px
        border 0
      .el-input__inner
        width 243px
        border-right 1px solid #e0e0e0
      .el-input-group__append
        width 53px
        padding 0
        background-color #fff
        .el-button
          margin 0
          padding 0
          display inline-block
          width 100%
          height 100%
          line-height 51px
          font-size 24px
          transition background-color .3s
          border-radius 0
          &:hover
            background-color #ff6700
            color #fff
        .search-default
          position absolute
          right 63px
          top 16px
          span
            font-size 12px
            background-color #eee
            padding 2px 5px
            margin-left 5px
            transition all .3s
            &:hover
              background-color #ff6700
              color #fff
              cursor pointer
</style>
