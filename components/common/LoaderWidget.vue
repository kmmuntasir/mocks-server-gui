<template>
  <div v-if="loading" class="loaderOverlay">
    <b-alert id="loadingAlert" variant="info" :show="true">
      <div class="float-left">
        <b-spinner label="Spinning" small />
      </div>
      <div class="float-right ml-2">
        <h5 class="mb-0">
          Loading...
        </h5>
      </div>
    </b-alert>
  </div>
</template>

<script>

export default {
  name: 'LoaderWidget',
  computed: {
    loading () {
      return this.$store.state.loader.loading
    }
  }
}
</script>

<style scoped>
.loaderOverlay {
  position: fixed;
  background: rgba(255,255,255,0.5);
  height: 100%;
  width: 100%;
  z-index: 110;
}
#loadingAlert {
  position: fixed;
  top: 0;
  right: 0;
  margin-top: 60px;
  margin-right: 10px;
}
</style>
