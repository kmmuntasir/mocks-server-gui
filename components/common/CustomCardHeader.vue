<template>
  <div class="d-flex">
    <div>
      <h5 class="mb-0 text-left">
        {{ title }}
      </h5>
    </div>
    <div class="ml-auto d-flex">
      <b-button variant="danger" class="cardTitleBarButton mb-0 mr-1" title="Clear All">
        <BIconXCircleFill />
      </b-button>
      <b-button variant="info" class="cardTitleBarButton mb-0 mr-1" title="Fetch Latest Data">
        <BIconCloudDownload />
      </b-button>
      <b-input class="cardTitleBarSearchInput" size="sm" type="text" placeholder="Search..." />
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
