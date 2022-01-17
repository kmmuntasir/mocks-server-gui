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
import search from '../../helpers/search'
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
      return search.getFilteredList(this.customVariants)
    }
  },
  created () {
    this.fetchVariants()
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
