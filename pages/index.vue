<template>
  <main class="index-main">
    <Home />
    <Banner :url="banner[0]" />
    <section class="mobile">
      <Mobile />
      <Banner :url="banner[1]" />
    </section>
    <section v-for="(item, idx) in mainSectionHeader" :key="idx" :class="item.class">
      <Homeele :title="item.title" :nav="item.nav" :data="item.data" />
      <Banner :url="banner[idx+2]" />
    </section>
    <section>
      <Hot :data="allData[3]" />
    </section>
    <section>
      <Content :data="allData[4]" />
    </section>
    <section>
      <Vedio :data="allData[5]" />
    </section>
  </main>
</template>

<script>
import allData from 'assets/data1.json'
import Banner from '../components/public/banner'
import Home from '../components/pages-index/home/home'
import Mobile from '../components/pages-index/mobile/mobile'
import Homeele from '../components/pages-index/homeele/homeele'
import Hot from '../components/pages-index/hot/hot'
import Content from '../components/pages-index/content/content'
import Vedio from '../components/pages-index/vedio/vedio'
export default {
  components: {
    Home,
    Mobile,
    Homeele,
    Banner,
    Hot,
    Content,
    Vedio
  },
  data() {
    return {
      allData: allData,
      banner: allData[0].data,
      mainSectionHeader: [
        {
          title: '家电',
          class: 'home-ele',
          nav: ['热门', '电视影音', '电脑', '家居'],
          data: allData[2]
        },
        {
          title: '智能',
          class: 'smart',
          nav: ['热门', '出行', '健康', '酷玩', '路由器'],
          data: allData[2]
        }
      ]
    }
  }
}
</script>

<style lang="stylus">
.index-main
  background-color #f5f5f5
  padding-bottom 46px
</style>
