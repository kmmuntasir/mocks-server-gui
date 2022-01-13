<template>
  <div />
</template>

<script>
import Routes from '~/constants/Routes'

export default {
  name: 'DefaultPage',
  head () {
    return {
      title: 'Welcome'
    }
  },
  created () {
    this.$router.push(Routes.dashboard)
  }
}
</script>

<style>

</style>
