<template>
  <div class="con my-container">
    <h1 class="section-title">
      内容
    </h1>
    <div class="section-content">
      <ul class="content-list">
        <li v-for="item in 4" :key="item" class="content-list-item">
          <div class="content-card-header">
            <span class="c-header">图书</span>
          </div>
          <div class="content-card-content">
            <el-carousel trigger="click" :autoplay="false" :loop="false">
              <el-carousel-item v-for="(item, idx) in cardData" :key="idx">
                <div v-show="idx!==cardData.length-1" class="detail">
                  <h1 class="pro-name">
                    <a href="/"> {{ item.title }} </a>
                  </h1>
                  <p class="desc">
                    <a href="/"> {{ item.desc }} </a>
                  </p>
                  <p class="price">
                    {{ item.price }}元
                  </p>
                </div>
                <div v-show="idx===cardData.length-1" class="detail-last">
                  <p class="desc">
                    {{ item.desc }}
                  </p>
                  <a href="/" class="btn-pro">{{ item.title }}</a>
                </div>
                <div class="figure">
                  <a href="/"> <img :src="item.img" alt=""> </a>
                </div>
              </el-carousel-item>
            </el-carousel>
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
  },
  computed: {
    cardData() {
      const temp = []
      this.data.data.map((item, idx) => {
        temp.push(item)
        if (idx === this.data.data.length - 1) {
          temp.push({
            title: '前往多看阅读',
            desc: '海量好书，享受精品阅读时光。漂亮的中文排版，千万读者选择！',
            img: '//s01.mifile.cn/i/index/more-duokan.jpg'
          })
        }
      })
      return temp
    }
  }
}
</script>

<style lang="stylus" scoped>
.con
  .section-title
    margin 0
    font-size: 22px
    font-weight: 200
    line-height: 58px
    color: #333
  .section-content
    .content-list
      list-style none
      display flex
      margin 0
      padding 0
      justify-content space-between
      .content-list-item
        width 296px
        height 420px
        margin-bottom: 14px
        background: #fff
        border-top 1px solid #ffac13
        transition all .2s
        &:hover
          transform translate3d(0,-2px,0)
          box-shadow 0 15px 30px rgba(0,0,0,0.1)
        .content-card-header
          box-sizing border-box
          height 80px
          padding 45px 0 18px
          text-align center
          font-size 16px
          color #ffac13
        .content-card-content
          height 340px
          .el-carousel
            height 100%
            .detail-last
              text-align center
              p, h1
                margin 0
                padding 0
              .desc
                max-width 200px
                margin 0 auto 10px
                font-size 12px
                color #b0b0b0
              .btn-pro
                border 1px solid #ffac13;
                background: #fff;
                width: 118px;
                height: 28px;
                vertical-align middle
                margin 0 auto 30px
                color: #ffac13;
                font-size: 12px;
                line-height: 28px;
                display inline-block
                &:hover
                  color: #fff;
                  background-color: #ff920f;
                  border-color: #ff920f;
            .detail
              text-align center
              p, h1
                margin 0
                padding 0
              .pro-name a
                color #333
                font-size: 20px
                font-weight: 400
                line-height: 1.25
              .desc
                max-width 200px
                margin 0 auto 10px
              .desc a
                font-size 12px
                color #b0b0b0
              .price
                margin-bottom 15px
            .figure
              text-align center
            >>>.el-carousel__button
              width 6px
              height 6px
              border-radius 50%
              background-color #b0b0b0
              box-sizing border-box
            >>>.el-carousel__indicators
              bottom 26px
              display flex
            >>>.el-carousel__indicator.is-active .el-carousel__button
              background-color #fff
              border 2px solid #ff6700
              width 10px
              height 10px
              transition all .1s
            >>>.el-carousel__indicator
              padding 0
              width 15px
              height 15px
              margin-right 5px
              display flex
              align-items center
            >>>.el-carousel__arrow.el-carousel__arrow--left
              left: 0px;
              border-radius: 1px;
              height: 48px;
              width: 20px;
            >>>.el-carousel__arrow.el-carousel__arrow--right
              right: 0px;
              border-radius: 1px;
              height: 48px;
              width: 20px;
</style>
