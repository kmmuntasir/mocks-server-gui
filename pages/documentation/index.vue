<template>
  <b-card
    border-variant="dark"
    header="All you need to know..."
    header-bg-variant="dark"
    header-text-variant="white"
    header-class="h4"
  >
    <!-- eslint-disable vue/no-v-html -->
    <div v-html="markDownHtml" />
    <!--eslint-enable-->
  </b-card>
</template>

<script>
import { marked } from 'marked'
import SettingsMiddleware from '../../middleware/SettingsMiddleware'
import MarkDownData from '../../README.md'

export default {
  name: 'DocPage',
  middleware: [SettingsMiddleware],
  data () {
    return {
      markDownHtml: ''
    }
  },
  created () {
    this.parseMarkDown()
  },
  methods: {
    parseMarkDown () {
      this.markDownHtml = marked(MarkDownData)
    }
  }
}
</script>

<style scoped>

div.card-body {
  height: calc(100vh - 144px) !important;
  overflow-y: scroll;
}

</style>
