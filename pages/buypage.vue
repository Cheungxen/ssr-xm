<template>
  <div class="page-buy">
    <detail-header />
    <div v-if="!isLogged" ref="signin-first" class="box-wrapper">
      <div class="signin-first" />
      <div class="txt">
        <span class="cont">
          为方便您购买，请提前登录
          <a href="/signin"> 立即登录</a>
          <i class="el-icon-close" @click="hide" />
        </span>
      </div>
    </div>
    <div class="content">
      <div class="my-container">
        <div class="align-left-wrapper">
          <img src="//i8.mifile.cn/a1/pms_1550642185.33171962.jpg" alt="" width="560px">
        </div>
        <div class="align-right-wrapper">
          <div class="detail">
            <h3 class="name">
              小米9
            </h3>
            <p class="desc">
              <span>6GB+128GB版本闪降200元，8GB+128GB/8GB+256GB赠价值149元无线充电宝或价值169元无线车充（二选一）」</span>
              全曲面轻薄设计，全息幻彩玻璃机身 / 骁龙855旗舰处理器 / 20W无线闪充，标配27W有线快充 / 索尼4800万超广角微距三摄 / 极速屏下指纹解锁 / 多功能NFC
            </p>
            <p class="seller">
              小米自营
            </p>
            <p class="price">
              <span>2799元</span>
              <del>2999元</del>
            </p>
          </div>
          <div class="youhui">
            <span>
              <span class="icon">赠品</span>
              <span class="txt">赠米粉卡</span>
            </span>
          </div>
          <div class="location-wrapper">
            <i class="el-icon-location-outline" />
            <Location />
            <nuxt-link to="" class="change-address" @click.native="open">
              修改
            </nuxt-link>
            <span class="have-product">有现货</span>
          </div>
          <!-- <button @click="add">{{$store.state.address.count}}</button> -->
          <div class="edition">
            <h2>选择版本</h2>
            <el-radio-group v-model="selected.edition">
              <el-radio v-for="(item, idx) in productData.edition" :key="idx" :label="idx">
                <span class="title"> {{ item.title }} </span>
                <span class="price"> {{ item.price }}元 </span>
              </el-radio>
            </el-radio-group>
          </div>
          <div class="edition">
            <h2>选择颜色</h2>
            <el-radio-group v-model="selected.color">
              <el-radio v-for="(item, idx) in productData.color" :key="idx" :label="idx">
                <span class="title"> {{ item.title }} </span>
              </el-radio>
            </el-radio-group>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DetailHeader from '../components/public/detail-header'
import Location from '../components/page-buy/location'
import SearchLocation from '../components/page-buy/searchLocaion'
export default {
  components: {
    DetailHeader,
    Location,
    SearchLocation
  },
  data() {
    return {
      isLogged: false,
      isShowSearchlocation: true,
      selected: {
        edition: 0,
        color: 0,
        baoxiu: []
      },
      productData: {
        edition: [
          {
            title: '6GB+128GB',
            desc: '',
            price: 2799
          },
          {
            title: '8GB+128GB',
            desc: '',
            price: 3299
          },
          {
            title: '8GB+256GB',
            desc: '',
            price: 3699
          }
        ],
        color: [
          {
            title: '全息幻彩紫',
            img: ''
          },
          {
            title: '全息幻彩蓝',
            img: ''
          },
          {
            title: '深空灰',
            img: ''
          }
        ],
        baoxiu: [
          {
            titel: '意外保障服务',
            desc: '手机意外碎屏/进水/碾压等损坏',
            price: 299
          },
          {
            titel: '碎屏保障服务',
            desc: '手机意外碎屏',
            price: 159
          }
        ]
      }
    }
  },
  methods: {
    add() {
        // this.$store.dispatch('add', 3)
    },
    hide() {
      this.$refs['signin-first'].style.display = 'none'
    },
    open() {
      const self = this
      const h = this.$createElement
      this.$msgbox({
        customClass: 'choose-region-modal',
        closeOnClickModal: true,
        lockScroll: false,
        center: false,
        message: h('div', null, [
          h(SearchLocation, {
            props: {
              store: self.$store // 渲染出的组件无法访问store，在这里直接传入
            }
          })
        ])
      }).then((action) => {
        console.log(action)
      })
    }
  }
}
</script>

<style lang="stylus">
.page-buy
  .detail-header
    position sticky
    top 0
    box-shadow 0 5px 5px rgba(0,0,0,0.07)
    background-color #fff
    z-index 10
    .list-item.button
      display none
  .box-wrapper
    position relative
    height 50px
    .signin-first
      width 100%
      position absolute
      left 0
      top 0
      height 50px
      background-color #f7f7f7
      z-index -1
    .txt
      text-align center
      line-height 50px
      width 100%
      .cont
        a
          margin-left 25px
          color #ff6700
        .el-icon-close
          margin-left 10px
          color #b5b5b5
          font-style 18px
          font-weight bold
          cursor pointer
  .content
    .my-container
      display flex
      .align-left-wrapper
        margin-right 46px
        img
          position sticky
          top 100px
      .align-right-wrapper
        padding-top 32px
        .detail
          border-bottom 1px solid #e0e0e0
          .name
            font-size 24px
            color #212121
            margin 0
          .desc
            margin 8px 0 0
            color #b0b0b0
            span
              color #ff6700
          .seller, .price
            color #ff6700
            margin 10px 0 0
          .price
            font-size 18px
            line-height 1
            padding 12px 0 20px
            margin 0
            del
              color #b0b0b0
              font-size 14px
              margin-left 5px
        .youhui
          padding      : 10px 0 15px
          border-bottom: 1px solid #e0e0e0
          .icon
            display         : inline-block
            background-color: #ff6700
            color           : #fefefe
            width           : 80px
            padding         : 2px 0
            text-align      : center
          .txt
            margin-left 5px
        .location-wrapper
          position        : relative
          padding         : 30px 40px 30px 50px
          background-color: #fafafa
          border          : 1px solid #e0e0e0
          box-sizing      : border-box
          margin: 40px 0
          .location
            display : inline-block
            span
              margin-right 14px
          .el-icon-location-outline
            position : absolute
            left     : 20px
            font-size: 20px
            color    : #999
          .have-product
            color #ff6700
            display block
          .change-address
            color #ff6700
        .edition
          margin-bottom 40px
          h2
            margin 0
          .el-radio-group
            .el-radio
              width 275px
              height 42px
              line-height 42px
              margin-right 6px
              margin-top 15px
              border 1px solid #e0e0e0
              padding 0 37px
              box-sizing border-box
              .el-radio__label
                display flex
                font-size 16px
                .title
                  flex 1
                  text-align center
                .price
                  flex 0 0 42px
              .el-radio__input
                display none

</style>
