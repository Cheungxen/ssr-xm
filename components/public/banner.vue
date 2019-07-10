<template>
  <div class="my-banner">
    <div class="my-container">
      <img :src="url" alt="" width="1228" height="120">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String
    }
  }
}
</script>

<style lang="stylus">
.my-banner
  margin 28px 0 22px
</style>
