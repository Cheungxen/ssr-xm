<template>
  <div class="layout-default">
    <my-header />
    <my-nav />
    <nuxt />
    <my-footer />
  </div>
</template>

<script>
import myHeader from '../components/layout-default/my-header/my-header'
import myFooter from '../components/layout-default/my-footer/my-footer'
import myNav from '../components/layout-default/my-nav/my-nav'
export default {
  components: {
    myHeader,
    myFooter,
    myNav
  }
}
</script>

<style lang="stylus">
.layout-default
  position relative
</style>
