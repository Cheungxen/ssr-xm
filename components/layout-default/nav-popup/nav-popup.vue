<template>
  <transition name="pop">
    <div v-show="isShow" class="nav-popup" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
      <div class="my-container">
        <ul class="popup-list">
          <li v-for="(item, idx) in selectedItem.items" :key="idx" class="item" :class="idx===0?'first':''">
            <product :product="item" />
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
import Product from '../product/product.vue'
export default {
  components: {
    Product
  },
  props: {
    selectedItem: {
      type: Object,
      default() {
        return {}
      }
    },
    isShow: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
    }
  },
  methods: {
    onMouseEnter() {
      this.$emit('showpop')
    },
    onMouseLeave() {
      this.$emit('hidepop')
    }
  }
}
</script>

<style lang="stylus">
.nav-popup
  position absolute
  height 230px
  width 100%
  box-shadow 0 2px 2px 0 #dfdfdf
  background-color #fefefe
  overflow hidden
  z-index  100
  // background-color #ccc
  &:after
    content ''
    position absolute
    left 0
    top 0px
    display block
    height 0
    width 100%
    border-bottom 1px solid #e0e0e0
  .popup-list
    list-style none
    display flex
    margin 0
    padding 0
    .item
      flex 1
      position relative
      &:after
        content ''
        display block
        position absolute
        top 35px
        left 0
        width 0
        height 100px
        border-left 1px solid #e0e0e0
      &.first:after
        display none
  &.pop-enter, &.pop-leave-to
    height 0px
    transition all .2s ease-in
  &.pop-enter-to, &.pop-leave
    height 230px
    transition all .2s ease-in
</style>
