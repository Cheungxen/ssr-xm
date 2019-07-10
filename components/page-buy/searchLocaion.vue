<template>
  <div class="choose-region">
    <div class="search-box">
      <el-input
        v-model="input"
        placeholder="请输入街道、乡镇、小区或商圈名称"
        clearable
        @input="search"
      >
        <el-button slot="prepend" icon="el-icon-search" />
      </el-input>
    </div>
    <div class="choose-btn">
      <a href="">手动选择地址></a>
    </div>
    <ul class="addr-list">
      <li v-for="(item, idx) in resultList" :key="idx" class="item" @click="onClick(idx)">
        <p class="name">
          {{ item.name }}
        </p>
        <p class="addr">
          {{ item.address }}
        </p>
        <a href="" class="c-btn" @click.prevent="">选择</a>
      </li>
    </ul>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  props: {
    store: {
      type: Object
    }
  },
  data() {
    return {
      input: '',
      mapSearchObj: {},
      mapGeocoderobj: {},
      resultList: []
    }
  },
  methods: {
    onClick(idx) {
      const self = this
      const address = this.resultList[idx].location
      this.mapGeocoderobj.getAddress([address.lng, address.lat], function (status, result) {
        if (status === 'complete') {
          const tempObj = {
            province: result.regeocode.addressComponent.province,
            city: result.regeocode.addressComponent.city,
            district: result.regeocode.addressComponent.district,
            township: result.regeocode.addressComponent.township
          }
          self.store.dispatch('address/setLocation', tempObj)
        }
      })
      self.$msgbox.close()
    },
    search: _.debounce(async function () {
      const self = this
      self.mapSearchObj.search(self.input, function (status, result) {
        const list = result.poiList.pois.slice(0, 5)
        if (status === 'complete') {
          self.resultList = list
        }
      })
    }, 300)
  },
  created() {
    const self = this
    const mapObj = new self.$AMap.Map('icenter')
    mapObj.plugin(['AMap.PlaceSearch', 'AMap.Geocoder'], function () {
      self.mapSearchObj = new AMap.PlaceSearch({
      })
      self.mapGeocoderobj = new AMap.Geocoder()
    })
  }
}
</script>

<style lang="stylus">
.choose-region-modal
  width 660px
  // height 247px
  border 1px solid #ff6700
  .el-message-box__btns
    display none
  .el-message-box__content
    padding 30px
  .el-input__inner
    border none
    padding: 0
  .el-input-group__prepend
    background-color #fff
    padding 0 15px
    border none
    .el-icon-search
      font-size 20px
      font-weight bold
  .el-input-group__prepend,.el-input__inner
    border-radius 0
  .el-button.el-button--default,.el-input__inner
    height 44px
.choose-region
  .search-box
    border 1px solid #DCDFE6
  .choose-btn
    text-align right
    height 38px
    line-height 38px
    a
      color #b0b0b0
  .addr-list
    margin 0
    padding 0
    list-style none
    border-top 1px solid #d0d0d0
    .item
      font-size 12px
      border-bottom 1px solid #DCDFE6
      color #b0b0b0
      padding 5px 18px
      transition all .2s
      position relative
      overflow hidden
      cursor pointer
      &:hover
        background-color #DCDFE6
        .c-btn
          right 18px
          opacity 1
      p
        margin 0
        padding 0
      .name
        color #333
      .c-btn
        display block
        position absolute
        color #fff
        background-color #ff6700
        height 30px
        width 100px
        top 14px
        right -100px
        text-align center
        line-height 30px
        opacity 0
        transition all .2s
</style>
