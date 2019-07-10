<template>
  <div class="my-container vedio">
    <div class="section-header">
      <h1 class="section-title">
        视频
      </h1>
      <div class="mor">
        <a href="/" class="more">更多
          <i class="fa fa-chevron-right" />
        </a>
      </div>
    </div>
    <div class="section-content">
      <ul class="vedio-list">
        <li v-for="(item, idx) in data.data" :key="idx" class="list-item">
          <div class="img">
            <a class="link" href="/">
              <img :src="item.img" alt="" width="296" height="180">
              <i class="fa fa-play" aria-hidden="true" />
            </a>
          </div>
          <div class="detail">
            <p class="title">
              <a href="/">{{ item.title }}</a>
            </p>
            <p class="desc">
              {{ item.desc }}
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
.vedio
  .section-header
    display flex
    justify-content space-between
    .section-title
      margin 0
      font-size: 22px
      font-weight: 200
      line-height: 58px
      color: #333
    .mor
      .more
        font-size: 16px
        line-height: 58px
        color: #424242
        transition: all .2s
        .fa.fa-chevron-right
          display inline-block
          background-color #afafaf
          color #fefefb
          width: 12px
          height: 12px
          padding: 4px
          margin-left: 8px
          border-radius: 16px
          font-size: 12px
          line-height: 12px
          background: #b0b0b0
          color: #fff
          text-align center
          vertical-align 1px
          transition: all .2s
        &:hover
          color #fe6608
          .fa.fa-chevron-right
            color #fefefe
            background-color #fe6608
  .section-content
    .vedio-list
      margin 0
      padding 0
      list-style none
      display flex
      justify-content space-between
      .list-item
        width 296px
        height 285px
        background-color #fff
        margin-bottom 14px
        transition all .3s
        &:hover
          transform translate3d(0,-2px,0)
          box-shadow 0 15px 30px rgba(0,0,0,0.1)
        .img
          position relative
          margin-bottom 22px
          .link
            &:hover .fa.fa-play
              background-color #ff6700
              border-color #ff6700
            .fa.fa-play
              transition all .2s
              position absolute
              bottom 15px
              left 20px
              display block
              line-height 20px
              font-size 13px
              border 2px solid #fefefe
              border-radius 10px
              width 30px
              text-align center
              color #fefefe
        .detail
          p
            margin 0
            padding 0
            text-align center
          .desc
            font-size 12px
            color #b0b0b0
          .title
            margin-bottom 6px
            & a
              color #333
              transition all .3s
            & a:hover
              color #ff6700
</style>
