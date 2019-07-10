<template>
  <div class="mi9">
    <DetailHeader />
    <div class="header-img">
      <div class="img-txt">
        <h1 class="titel">
          小米9 战斗天使<br><span class="sub-title">好看又能打</span>
        </h1>
        <p class="price">
          <sup>¥</sup>2999<sub>起</sub>
        </p>
      </div>
      <el-carousel trigger="click" arrow="never">
        <el-carousel-item v-for="(item, idx) in imgs[0].imgs" :key="idx">
          <img :src="item" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="header-detail">
      <ul class="detail-list">
        <li class="bl bt transi-up">
          <span class="name move webfont ">骁龙855旗舰处理器</span>
          <span class="tips move webfont1">年度超旗舰处理器</span>
        </li>
        <li class="bt transi-up delay-03">
          <span class="name move webfont">索尼 4800 万像素三摄</span>
          <span class="tips move webfont1">DxOMark 拍照评分领先</span>
        </li>
        <li class="bt transi-up delay-05">
          <span class="name move webfont">支持超广角、微距拍摄</span>
          <span class="tips move webfont1">开启手机摄影非凡视野</span>
        </li>
        <li class="transi-up delay-08">
          <span class="name move webfont">小米首款20W无线闪充</span>
          <span class="tips move webfont1">速度堪比有线快充</span>
        </li>
        <li class="transi-up delay-10">
          <span class="name move webfont">全息幻彩玻璃机身</span>
          <span class="tips move webfont1">手心中的梦幻彩虹光</span>
        </li>
        <li class="transi-up delay-12">
          <span class="name move webfont delay-10">全曲面轻薄设计</span>
          <span class="tips move webfont1">怦然心动的好手感</span>
        </li>
        <li class="transi-up delay-15">
          <span class="name move webfont delay-10">第五代极速屏下指纹</span>
          <span class="tips move webfont1">快25% 解锁超灵敏</span>
        </li>
        <li class="transi-up delay-18">
          <span class="name move webfont delay-10">三星 AMOLED 屏幕</span>
          <span class="tips move webfont1">90.7% 超高屏占比</span>
        </li>
        <li class="transi-up delay-20">
          <span class="name move webfont delay-10">标配27W 有线快充 </span>
          <span class="tips move webfont1">充满只需 60 分钟</span>
        </li>
        <li class="transi-up delay-22">
          <span class="name move webfont delay-10">蓝宝石玻璃镜片 </span>
          <span class="tips move webfont1">超硬耐磨，长久保护</span>
        </li>
      </ul>
    </div>
    <div class="part3">
      <div class="txt">
        <h1>
          更强 骁龙855<br>
          更快 20W 无线闪充<br>
          两大科技全球首批量产
        </h1>
      </div>
      <img :src="imgs[1].img" alt="">
    </div>
    <div class="part4 part">
      <div class="txt">
        <div class="large-txt">
          <p class="large">
            快！骁龙855 处理器
          </p>
          <p class="large">
            游戏快 20%，运算快 45%，3 倍 AI 性能
          </p>
          <p class="large">
            高通骁龙 800 系史上最大升级
          </p>
        </div>
        <div class="small-txt">
          <p class="small">
            盘点智能手机历代经典机型，哪一代没有骁龙 800 系的强大引擎！骁龙855 不仅在性能上全面飞跃，
            更有再次突破的 7nm - 领先芯片工艺加持。这一切已被我们首次应用于小米9，让你快人一步领略科技魅力。
          </p>
        </div>
        <div class="img">
          <img :src="imgs[2].imgs[0]" alt="">
        </div>
        <div class="large-txt">
          <p class="large">
            快的不止骁龙855
          </p>
          <p class="large">
            还有两项 Turbo 技术带来的双重大提速
          </p>
        </div>
        <div class="small-txt">
          <p class="small">
            系统级优化是对性能的锦上添花，开发 MI Turbo 系统底层优化技术，连续使用 18 个月依然快速
            流畅*。以及 Game Turbo 游戏加速，调动深层性能带来超凡游戏表现。
          </p>
        </div>
        <div class="block-wrapper">
          <div class="block">
            <p class="small-bold">
              模拟使用 18 个月<br>降低卡顿 35%
            </p>
            <p class="small-gray">
              MI Turbo 防系统老化
            </p>
          </div>
          <div class="block">
            <p class="small-bold">
              游戏显示增强<br>游戏触控模式
            </p>
            <p class="small-gray">
              Game Turbo 游戏加速
            </p>
          </div>
        </div>
        <span class="very-small">
          * 通过小米实验室模拟18个月老化使用，实验证明 MI Turbo 可有效降低卡顿35%。以上数据均为我司实验室数据，
          实际情况会因测试软件版本、 具体测试环境、具体版本不同而略有差异。最终以实际使用时长为准。
        </span>
        <div class="img img-last">
          <img :src="imgs[2].imgs[1]" alt="">
        </div>
      </div>
    </div>
    <div class="part5 part">
      <div class="txt">
        <div class="large-txt">
          <p class="large">
            小米首款 20W 无线闪充<br>提速 37%，充电超级快！
          </p>
        </div>
        <div class="small-txt">
          <p class="small">
            ”放上去，就充电“ 很方便，漫长的充电等待却让人望而却步。小米9 创新提高功率，将以往数小时的时间，提速至 90 分钟充满，这个速度与小米8 的有线快充一致。有线充电同步提速，27W 功率 60 分钟充满*。
          </p>
        </div>
        <p class="very-small">
          *以上数据均为我司实验室数据，提速均相比于上一代产品，实际情况会因测试软件版本、具体测试环境、具体版本不同而略有差异。最终以实际使用时长为准。
        </p>
        <div class="img img1">
          <img :src="imgs[3].imgs[0]" alt="">
        </div>
        <div class="img img1 margin">
          <img :src="imgs[3].imgs[1]" alt="">
        </div>
        <div class="img img1 img-last">
          <img :src="imgs[3].imgs[2]" alt="">
        </div>
        <p class="very-small">
          *以上单品需单独购买。
        </p>
      </div>
    </div>
    <div class="part3">
      <div class="txt">
        <h1>
          索尼 48MP 超广角微距三摄<br>
          DxOMark 拍照评分领先<br>
          DxOMark 视频世界第一
        </h1>
      </div>
      <img :src="imgs[1].img" alt="">
    </div>
    <div class="part part6">
      <div class="txt">
        <div class="large-txt">
          <p class="large">
            索尼迄今为止像素最高手机相机传感器<br>
            4 倍超精细分辨率，细节放大依然清晰
          </p>
        </div>
        <div class="small-txt">
          <p class="small">
            想知道专业摄影师的诀窍？三颗必备镜头：标准、长焦、广角。双摄基础上增加一颗广角镜头，令拍摄视野直接翻倍。大风景、大合影，画面更震撼，还支持智能瘦脸、瘦身、瘦腿，它还能拍摄微距， 实现更多照片乐趣。全焦段覆盖，开启手机摄影非凡视野。
          </p>
        </div>
        <p class="small-bold">
          117°广角摄影，一张尽收壮丽山河
        </p>
        <div class="vedio">
          <video autoplay loop muted preload="auto" src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bb4348b89916bd399f63a543d6a63630.mp4" />
        </div>
      </div>
    </div>
    <div class="header-img part7">
      <div class="img-txt">
        <h1 class="titel">
          小米9 战斗天使<br><span class="sub-title">好看又能打</span>
        </h1>
      </div>
      <img src="https://i1.mifile.cn/f/i/2019/mi9/index/look.jpg?v=1" alt="">
    </div>
  </div>
</template>

<script>
import DetailHeader from '../components/public/detail-header'
export default {
  components: {
    DetailHeader
  },
  data() {
    return {
      imgs: [
        {
          title: 'header-img',
          imgs: [
            'https://i1.mifile.cn/f/i/2019/mi9/index/index1.jpg',
            'https://i1.mifile.cn/f/i/2019/mi9/index/index2.jpg?v=1',
            'https://i1.mifile.cn/f/i/2019/mi9/index/index3.jpg?v=1'
          ]
        },
        {
          title: 'part3',
          img: 'https://i1.mifile.cn/f/i/2019/mi9/index/cpu.jpg'
        },
        {
          titel: 'part4',
          imgs: [
            'https://i1.mifile.cn/f/i/2019/mi9/index/storage.jpg',
            'https://i1.mifile.cn/f/i/2019/mi9/index/play.jpg'
          ]
        },
        {
          title: 'part5',
          imgs: [
            'https://i1.mifile.cn/f/i/2019/mi9/index/noline.png?v=2',
            'https://i1.mifile.cn/f/i/2019/mi9/index/speed.png',
            'https://i1.mifile.cn/f/i/2019/mi9/index/charge.png'
          ]
        }
      ]
    }
  }
}
</script>

<style lang="stylus">
html
  font-size calc(100vw / 26)
*
  margin 0
  padding 0
.mi9
  .header-img
    position relative
    .img-txt
      position absolute
      width 100%
      top 0
      z-index 100
      padding-top .96rem
      font-size .52rem
      h1,p
        color #fff
        text-align center
      h1
        font-size .56rem
        line-height .74rem
        font-weight 600
        .sub-title
          font-size 1.36rem
          line-height 1.58rem
          font-weight 600
      p
        font-size 1em
        color #ecb41f
        margin-top .3rem
        sub,sup
          font-size .5em
        sub
          vertical-align text-bottom
    .el-carousel__container
      width 100%
      height 16.4rem
      img
        height 16.4rem
  .header-detail
    .detail-list
      display flex
      flex-wrap wrap
      list-style none
      padding .96rem 0 .25rem
      width 16.1rem
      margin 0 auto
      .transi-up
        width 3.22rem
        padding-bottom .63rem
        span
          display block
          font-size .24rem
          color #333
          line-height .34rem
          font-weight bold
        .tips
          color #848484
          font-size .18rem
          line-height .28rem
  .part3
    position relative
    .txt
      position absolute
      padding-top 1.7rem
      width 100%
      h1
        margin 0 auto
        width 12.28rem
        text-align left
        color #fff
        font-size .72rem
        line-height 1.1rem
        font-weight bold
    img
      display blcok
      width 100%
      height 6.5rem
  .part
    .txt
      width 12.32rem
      text-align left
      margin 0 auto
      padding-top 1.8rem
      .large-txt
        .large
          font-size .42rem
          line-height .66rem
          font-weight bold
          color #333
      .small-txt
        margin-top .11rem
        .small
          font-size .26rem
          line-height .46rem
          color #333
      .img
        margin-top .54rem
        margin-bottom .54rem
        img
          width 12.32rem
      .img.img-last
        margin-top .3rem
        margin-bottom 0
        transform translate3d(0, 6px, 0)
      .block-wrapper
        margin-top .75rem
        display flex
        .block
          width 3.63rem
          height 1.82rem
          border 1px solid #b2b2b2
          margin-right .41rem
          text-align center
          padding-top .35rem
          box-sizing border-box
      .small-bold
        font-size .28rem
        line-height .39rem
        font-weight bold
        color #333
      .small-gray
        font-size .2rem
        line-height .36rem
        color #6e6e6e
      .very-small
        margin-top .14rem
        font-size .14rem
        color rgba(141,141,141,0.7)
  .part5
    background-image linear-gradient(180deg, #e2e2e2, #f6f6f6)
    .txt
      .small
        line-height .46rm
      .img1
        img
          width 14.45rem
          transform translate3d(-50px,0,0)
      .img-l
        width 100%
        text-align center
        img
          width 10.61rem
      .very-small
        text-align center
        padding .28rem 0
  .part6
    .small-bold
      margin-top .38rem
    .vedio
      margin-top .58rem
      vedio
        width 100%
  .part7
    margin-top 1.3rem
    .img-txt
      h1
        font-size .43rem
        line-height .64rem
        .sub-title
          font-size 1.08rem
          line-height 1.3rem
    img
      width 100%
      height 9.92rem
</style>
