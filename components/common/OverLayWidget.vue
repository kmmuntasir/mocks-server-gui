<template>
  <div>
    <CustomToast />
    <Loader />
  </div>
</template>

<script>
import Loader from './LoaderWidget';
import CustomToast from './CustomToast';

export default {
  name: 'OverLayWidget',
  components: { CustomToast, Loader }
}
</script>

<style scoped>

</style>
