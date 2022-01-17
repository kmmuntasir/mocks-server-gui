<template>
  <b-overlay :show="loading" class="mb-3">
    <b-card
      border-variant="dark"
      header-tag="header"
      header-bg-variant="dark"
      header-text-variant="white"
    >
      <template #header>
        <CustomCardHeader
          title="Custom Variants"
          :reset="customVariants.length > 0"
          :search="true"
          @reset="resetVariants"
          @search="searchVariants"
        />
      </template>
      <b-button
        v-for="customVariant in visibleVariants"
        :key="customVariant"
        class="text-left d-flex"
        variant="dark"
        block
        disabled
      >
        <p class="alert-content-p mb-0">
          {{ getRouteAndVariantFromRouteId(customVariant).route }}
        </p>
        <b-button variant="warning" class="ml-auto" size="sm">
          {{ getRouteAndVariantFromRouteId(customVariant).variant }}
        </b-button>
      </b-button>
    </b-card>
  </b-overlay>
</template>

<script>
import customVariantApi from '../../network/apis/customVariantApi'
import search from '../../helpers/search'
import CustomCardHeader from '../common/CustomCardHeader'
import RootEvent from '../../constants/RootEvent'
import routesVariants from '../../helpers/routesVariants'

export default {
  name: 'CustomVariantList',
  components: {
    CustomCardHeader
  },
  data () {
    return {
      customVariants: [],
      loading: true,
      getRouteAndVariantFromRouteId: routesVariants.getRouteAndVariantFromRouteId
    }
  },
  computed: {
    visibleVariants () {
      return search.getFilteredList(this.customVariants)
    }
  },
  mounted () {
    this.$root.$on(RootEvent.UPDATE_MOCK, () => {
      this.fetchVariants()
    })
    this.$root.$on(RootEvent.APPLY_VARIANT, () => {
      this.fetchVariants()
    })
    this.$root.$on(RootEvent.APPLY_CUSTOM_MOCK, () => {
      this.fetchVariants()
    })
  },
  methods: {
    async fetchVariants () {
      this.loading = true
      const response = await customVariantApi.fetchCustomVariantsList()
      if (response.success) {
        routesVariants.applyMultipleVariants(response.data)
        routesVariants.setCustomVariants(response.data)
        this.$root.$emit(RootEvent.FETCHED_CUSTOM_VARIANTS)
        this.customVariants = search.makeFilterable(response.data)
      }
      this.loading = false
    },
    async resetVariants () {
      this.loading = true
      const response = await customVariantApi.resetCustomVariants()
      if (response.success) {
        this.customVariants = []
      }
      this.$root.$emit(RootEvent.RESET_CUSTOM_VARIANTS)
      this.loading = false
    },
    searchVariants (searchText) {
      this.loading = true
      if (searchText === '') {
        this.customVariants.forEach((variant) => {
          variant.show = true
        })
      } else {
        this.customVariants.forEach((variant) => {
          variant.show = variant.data.includes(searchText)
        })
      }
      this.loading = false
    },
    handleLoader (loading) {
      this.loading = loading
    }
  }
}
</script>

<style scoped>

div.card-body {
  padding: 5px;
  height: calc((100vh / 2) - 108px) !important;
  overflow-y: scroll;
}

</style>
