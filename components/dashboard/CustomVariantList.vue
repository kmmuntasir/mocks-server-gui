<template>
  <b-card
    border-variant="dark"
    header-tag="header"
    header-bg-variant="dark"
    header-text-variant="white"
  >
    <template #header>
      <CustomCardHeader title="Custom Variants" />
    </template>
    <b-button
      v-for="customVariant in customVariants"
      :key="customVariant"
      class="mb-1 mt-0 text-left p-0"
      variant="dark"
      block
      disabled
    >
      <p class="mb-0 p-2">
        {{ customVariant }}
      </p>
    </b-button>
  </b-card>
</template>

<script>
import customVariantApi from '../../network/apis/customVariantApi'
import CustomCardHeader from '../common/CustomCardHeader'

export default {
  name: 'CustomVariantList',
  components: {
    CustomCardHeader
  },
  data () {
    return {
      customVariants: []
    }
  },
  created () {
    this.fetchRoutes()
  },
  methods: {
    async fetchRoutes () {
      const response = await customVariantApi.fetchCustomVariantsList()
      if (response.success) {
        this.customVariants = response.data
      }
    }
  }
}
</script>

<style scoped>

div.card-body {
  padding: 5px;
  height: calc(100vh - 140px) !important;
  overflow-y: scroll;
}

</style>
