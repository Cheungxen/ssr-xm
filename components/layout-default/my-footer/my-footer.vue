<template>
  <div class="my-footer">
    <div class="supports">
      <div class="my-container">
        <div class="sup-header">
          <ul class="sup-header-list">
            <li class="list-item">
              <a href="/" class="link">
                <i class="fa fa-wrench" aria-hidden="true" />
                预约维修服务
              </a>
            </li>
            <li class="list-item">
              <a href="/" class="link">
                <i class="fa fa-repeat" aria-hidden="true" />
                7天无理由退货
              </a>
            </li>
            <li class="list-item">
              <a href="/" class="link">
                <i class="fa fa-repeat" aria-hidden="true" />
                15天免费换货
              </a>
            </li>
            <li class="list-item">
              <a href="/" class="link">
                <i class="fa fa-gift" aria-hidden="true" />
                满150元包邮
              </a>
            </li>
            <li class="list-item">
              <a href="/" class="link">
                <i class="fa fa-map-marker" aria-hidden="true" />
                520余家售后网点
              </a>
            </li>
          </ul>
        </div>
        <div class="sup-content">
          <dl class="col-links col-links-first">
            <dt>帮助中心</dt>
            <dd><a rel="nofollow" href="//www.mi.com/service/account/Account%20registration/" target="_blank">账户管理</a></dd>
            <dd><a rel="nofollow" href="//www.mi.com/service/buy/SalesTime/" target="_blank">购物指南</a></dd>
            <dd><a rel="nofollow" href="//www.mi.com/service/order/sendprogress/" target="_blank">订单操作</a></dd>
          </dl>
          <dl class="col-links ">
            <dt>服务支持</dt>
            <dd><a rel="nofollow" href="//www.mi.com/service/exchange" target="_blank">售后政策</a></dd>
            <dd><a rel="nofollow" href="//www.mi.com/service/" target="_blank">自助服务</a></dd>
            <dd><a rel="nofollow" href="//www.mi.com/c/service/download/" target="_blank">相关下载</a></dd>
          </dl>
          <dl class="col-links ">
            <dt>线下门店</dt>
            <dd><a rel="nofollow" href="//www.mi.com/c/xiaomizhijia/" target="_blank">小米之家</a></dd>
            <dd><a rel="nofollow" href="//www.mi.com/static/maintainlocation/" target="_blank">服务网点</a></dd>
            <dd><a rel="nofollow" href="//www.mi.com/static/familyLocation/" target="_blank">授权体验店</a></dd>
          </dl>
          <dl class="col-links ">
            <dt>关于小米</dt>
            <dd><a rel="nofollow" href="//www.mi.com/about/" target="_blank">了解小米</a></dd>
            <dd><a rel="nofollow" href="http://hr.xiaomi.com/" target="_blank">加入小米</a></dd>
            <dd><a rel="nofollow" href="//company.mi.com/zh-cn/ir/indexContent/index.html" target="_blank">投资者关系</a></dd>
          </dl>
          <dl class="col-links ">
            <dt>关注我们</dt>
            <dd><a rel="nofollow" href="https://weibo.com/xiaomishangcheng" target="_blank">新浪微博</a></dd>
            <dd><a rel="nofollow" href="#J_modalWeixin" data-toggle="modal">官方微信</a></dd>
            <dd><a rel="nofollow" href="//www.mi.com/about/contact/" target="_blank">联系我们</a></dd>
          </dl>
          <dl class="col-links ">
            <dt>特色服务</dt>
            <dd><a rel="nofollow" href="//order.mi.com/queue/f2code" target="_blank">F 码通道</a></dd>
            <dd><a rel="nofollow" href="//order.mi.com/giftcode/input/" target="_blank">礼物码</a></dd>
            <dd><a rel="nofollow" href="//order.mi.com/service/imei" target="_blank">防伪查询</a></dd>
          </dl>
          <div class="col-contact">
            <p class="phone">
              400-100-5678
            </p>
            <p class="day">
              周一至周日 8:00-18:00<br>（仅收市话费）
            </p>
            <a rel="nofollow" class="btn btn-line-primary btn-small" href="//support.kefu.mi.com/" target="_blank"><i class="fa fa-commenting" aria-hidden="true" /> 联系客服</a>
          </div>
        </div>
      </div>
    </div>
    <div class="infos" />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus">
.my-footer
  width 100%
  height 400px
  .supports
    background-color #fff
    .my-container
      .sup-header
        padding 27px 0
        border-bottom 1px solid #e0e0e0
        .sup-header-list
          list-style none
          margin 0 auto
          pdding 0
          display flex
          .list-item
            flex 1
            border-right 1px solid #e0e0e0
            .link
              font-size: 16px;
              line-height: 25px;
              text-align: center;
              display block
              color #616161
              transition all .3s
              &:hover
                color #ff6700
              .fa
                font-size 20px
                margin-right 5px
      .sup-content
        display flex
        justify-content space-between
        padding 40px 0
        .col-links
          margin 0
          padding 0
          list-style none
          margin-top
          dd, dt
            margin 0
            padding 0
          dt
            color #424242
            line-height 1.25
            margin-bottom 26px
          dd
            margin-top 10px
          a
            color: #757575
            font-size 12px
            &:hover
              color: #ff6700
        .col-contact
          width 250px
          text-align center
          .phone
            margin: 0 0 5px;
            font-size: 22px;
            line-height: 1;
            color: #ff6700;
          .day
            margin: 0 0 16px;
            font-size: 12px;
          .btn
            display inline-block
            width: 118px;
            height: 28px;
            font-size: 12px;
            line-height: 28px;
            color #ff6700
            border 1px solid #ff6700
            transition all .3s
            &:hover
              background-color #ff6700
              color #fefefe
  .infos
    background-color #f5f5f5
</style>
