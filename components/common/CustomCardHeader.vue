<template>
  <div class="d-flex">
    <div>
      <h5 class="mb-0 text-left">
        {{ title }}
      </h5>
    </div>
    <div class="ml-auto d-flex">
      <b-button
        v-if="reset"
        variant="danger"
        class="cardTitleBarButton mb-0"
        title="Clear All"
        @click="resetFunction"
      >
        <BIconXCircleFill />
      </b-button>
      <b-button
        v-if="refresh"
        variant="info"
        class="cardTitleBarButton mb-0 ml-1"
        title="Fetch Latest Data"
        @click="refreshFunction"
      >
        <BIconCloudDownload />
      </b-button>
      <b-button
        v-if="customButton"
        :variant="customButton.variant"
        class="cardTitleBarButton mb-0"
        :title="customButton.title"
        @click="customButtonFunction"
      >
        <BIconXCircleFill />
      </b-button>
      <b-input
        v-if="search"
        v-model="searchText"
        class="cardTitleBarSearchInput ml-1"
        size="sm"
        type="text"
        placeholder="Search..."
        @keyup="searchFunction"
      />
    </div>
  </div>
</template>

<script>
import { BIconCloudDownload, BIconXCircleFill } from 'bootstrap-vue'
export default {
  name: 'CustomCardHeader',
  components: {
    BIconCloudDownload,
    BIconXCircleFill
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    reset: {
      type: Boolean,
      default: false
    },
    refresh: {
      type: Boolean,
      default: false
    },
    customButton: {
      type: Object,
      default: null
    },
    search: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      searchText: ''
    }
  },
  methods: {
    resetFunction () {
      this.$emit('reset')
    },
    refreshFunction () {
      this.$emit('refresh')
    },
    customButtonFunction () {
      this.$emit('customButtonClicked')
    },
    searchFunction () {
      this.$emit('search', this.searchText)
    }
  }
}
</script>

<style scoped>
.cardTitleBarButton {
  font-size: 0.8rem;
  padding: 0.10rem 0.20rem;
}
.cardTitleBarSearchInput {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  height: 1.74em;
  width: 100px !important;
}
</style>
