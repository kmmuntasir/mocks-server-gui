<template>
  <b-overlay :show="loading">
    <b-card
      border-variant="dark"
      header-tag="header"
      header-bg-variant="dark"
      header-text-variant="white"
    >
      <template #header>
        <CustomCardHeader
          title="Custom Variants"
          :reset="true"
          :refresh="true"
          :search="true"
          @reset="resetVariants"
          @refresh="fetchVariants"
          @search="searchVariants"
        />
      </template>
      <b-button
        v-for="customVariant in visibleVariants"
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
  </b-overlay>
</template>

<script>
import customVariantApi from '../../network/apis/customVariantApi'
import CustomCardHeader from '../common/CustomCardHeader'
import RootEvent from '../../constants/RootEvent'

export default {
  name: 'CustomVariantList',
  components: {
    CustomCardHeader
  },
  data () {
    return {
      customVariants: [],
      loading: true
    }
  },
  computed: {
    visibleVariants () {
      const visibleList = []
      this.customVariants.forEach((variant) => {
        if (variant.show) {
          visibleList.push(variant.data)
        }
      })
      return visibleList
    }
  },
  created () {
    this.fetchVariants()
  },
  mounted () {
    this.$root.$on(RootEvent.UPDATE_MOCK, (mock) => {
      this.fetchVariants()
    })
    this.$root.$on(RootEvent.APPLY_VARIANT, (variant) => {
      this.fetchVariants()
    })
  },
  methods: {
    makeFilterable (variants) {
      return variants.map((variant) => {
        return {
          data: variant,
          show: true
        }
      })
    },
    async fetchVariants () {
      this.loading = true
      const response = await customVariantApi.fetchCustomVariantsList()
      if (response.success) {
        this.customVariants = this.makeFilterable(response.data)
      }
      this.loading = false
    },
    async resetVariants () {
      this.loading = true
      const response = await customVariantApi.resetCustomVariants()
      if (response.success) {
        this.customVariants = []
      }
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
  height: calc(100vh - 140px) !important;
  overflow-y: scroll;
}

</style>
