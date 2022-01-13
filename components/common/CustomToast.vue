<template>
  <div />
</template>

<script>
import SystemConstants from '../../constants/SystemConstants'

export default {
  name: 'CustomToast',
  computed: {
    visible () {
      return this.$store.state.toast.visible
    },
    message () {
      return this.$store.state.toast.message
    }
  },
  watch: {
    visible () {
      if (this.visible) {
        this.makeToast(
          this.message
        )
        this.$store.commit('toast/hide')
      }
    }
  },
  methods: {
    makeToast (message, append = false) {
      this.$bvToast.toast(message.text, {
        title: message.title,
        autoHideDelay: SystemConstants.TOAST_DURATION * 1000,
        noAutoHide: !message.autoHide,
        variant: message.variant,
        solid: true,
        appendToast: append
      })
    }
  }
}
</script>

<style scoped>

</style>
