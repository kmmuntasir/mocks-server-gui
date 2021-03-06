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
          :custom-button=" customVariants.length === 0 ? null : {
            variant: 'primary',
            title: 'Save Active Variants as a Custom Mock',
            icon: icon,
          }"
          @search="searchVariants"
          @customButtonClicked="invokeAddCustomMockModal"
        />
      </template>
      <b-button
        v-for="activeVariant in visibleVariants"
        :key="activeVariant"
        class="text-left d-flex"
        variant="dark"
        block
        disabled
      >
        <p class="alert-content-p mb-0">
          {{ getRouteAndVariantFromRouteId(activeVariant).route }}
        </p>
        <b-button variant="primary" class="ml-auto" size="sm">
          {{ getRouteAndVariantFromRouteId(activeVariant).variant }}
        </b-button>
      </b-button>
    </b-card>
    <b-modal
      id="addCustomMockModal"
      title="Add Custom Mock"
      :ok-disabled="customMockName===''"
      @hidden="customMockName=''"
      @ok="addCustomMock"
    >
      <b-form-input
        v-model="customMockName"
        placeholder="Custom Mock Name"
        required
        @keyup.enter="addCustomMock"
      />
      <b-alert variant="danger" show class="mt-2">
        Please note that this custom mock will be saved only in your browser memory. It will not be saved in any
        database or file. So clearing your browser cache, or changing/ resetting the application settings will remove
        this custom mock.
      </b-alert>
    </b-modal>
    <BIconFolderPlus class="d-none" />
  </b-overlay>
</template>

<script>
import { BIconFolderPlus } from 'bootstrap-vue'
import search from '../../helpers/search'
import routesVariants from '../../helpers/routesVariants'
import CustomCardHeader from '../common/CustomCardHeader'
import RootEvent from '../../constants/RootEvent'
import customMock from '../../helpers/customMock'

export default {
  name: 'ActiveVariantList',
  components: {
    CustomCardHeader,
    BIconFolderPlus
  },
  data () {
    return {
      activeVariants: [],
      customVariants: [],
      loading: true,
      customMockName: '',
      icon: BIconFolderPlus,
      getRouteAndVariantFromRouteId: routesVariants.getRouteAndVariantFromRouteId
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
    this.$root.$on(RootEvent.FETCHED_CUSTOM_VARIANTS, () => {
      this.fetchVariants()
    })
    this.$root.$on(RootEvent.RESET_CUSTOM_VARIANTS, () => {
      this.fetchVariants()
    })
    this.$root.$on(RootEvent.APPLY_CUSTOM_MOCK, () => {
      this.fetchVariants()
    })
  },
  methods: {
    fetchVariants () {
      this.loading = true
      this.activeVariants = search.makeFilterable(routesVariants.getActiveVariants())
      this.fetchCustomVariants()
      this.loading = false
    },
    fetchCustomVariants () {
      this.loading = true
      this.customVariants = search.makeFilterable(routesVariants.getCustomVariants())
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
    invokeAddCustomMockModal () {
      this.$bvModal.show('addCustomMockModal')
    },
    addCustomMock () {
      if (this.customMockName) {
        const mock = {
          id: this.customMockName,
          routesVariants: this.visibleVariants
        }
        customMock.add(mock)
        this.$root.$emit(RootEvent.APPLY_CUSTOM_MOCK, mock)
        this.$bvModal.hide('addCustomMockModal')
      }
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
