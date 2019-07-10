<template>
  <div class="log">
    <template v-if="user">
      <nuxt-link to="/signin">
        {{ user }}
      </nuxt-link><span class="seperator">|</span>
      <nuxt-link to="" @click.native="exit">
        退出
      </nuxt-link><span class="seperator">|</span>
      <nuxt-link to="/">
        消息通知
      </nuxt-link>
    </template>
    <template v-else>
      <nuxt-link to="/signin">
        登录
      </nuxt-link><span class="seperator">|</span>
      <a href="" @click.prevent="showAgree">注册</a><span class="seperator">|</span>
      <nuxt-link to="/">
        消息通知
      </nuxt-link>
    </template>
  </div>
</template>

<script>
import MessageBox from '../../page-register/messageBox'
export default {
  components: {
    MessageBox
  },
  data() {
    return {
      user: ''
    }
  },
  async created() {
    const { status, data: { code, msg, user } } = await this.$axios.get('/user/isLogged')
    if (status === 200 && code === 0) {
      this.user = user
    } else {
      this.user = ''
    }
  },
  methods: {
    showAgree() {
      const h = this.$createElement
      this.$msgbox({
        title: '协议声明',
        message: h('div', null, [
          h(MessageBox, {})
        ]),
        showCancelButton: true,
        confirmButtonText: '同意',
        cancelButtonText: '不同意'
      }).then((action) => {
        if (action) {
          window.location = '/register'
        }
      })
    },
    exit() {
      this.$axios.get('/user/exit').then(({ status, data: { code } }) => {
        if (status === 200 && code === 0) {
          window.location.href = '/'
        }
      })
    }
  }
}
</script>

<style>

</style>
