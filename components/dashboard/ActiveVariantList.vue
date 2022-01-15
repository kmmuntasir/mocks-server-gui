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
          title="Active Variants"
          :search="true"
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
import search from '../../helpers/search'
import routesVariants from '../../helpers/routesVariants'
import CustomCardHeader from '../common/CustomCardHeader'
import RootEvent from '../../constants/RootEvent'

export default {
  name: 'ActiveVariantList',
  components: {
    CustomCardHeader
  },
  data () {
    return {
      activeVariants: [],
      loading: true
    }
  },
  computed: {
    visibleVariants () {
      return search.getFilteredList(this.activeVariants)
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
  },
  methods: {
    fetchVariants () {
      this.loading = true
      this.activeVariants = search.makeFilterable(routesVariants.getActiveVariants())
      this.loading = false
    },
    searchVariants (searchText) {
      this.loading = true
      if (searchText === '') {
        this.activeVariants.forEach((variant) => {
          variant.show = true
        })
      } else {
        this.activeVariants.forEach((variant) => {
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
  height: calc((100vh / 2) - 100px) !important;
  overflow-y: scroll;
}

</style>
