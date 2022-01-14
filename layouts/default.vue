<template>
  <div>
    <AppHeader />
    <b-container fluid class="defaultLayoutContainer">
      <b-row>
        <b-col class="col-10">
          <Nuxt />
        </b-col>
        <b-col class="col-2">
          <RightSideBar />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AppHeader from '../components/common/AppHeader'
import RightSideBar from '../components/common/RightSideBar'
import Locale from '../constants/Locale'

export default {
  name: 'DefaultLayout',
  components: {
    AppHeader,
    RightSideBar
  },
  head () {
    return {
      title: Locale.BRAND_NAME
    }
  }
}
</script>

<style>
:root {
  --wrapperTopPadding: 56px;
  --layoutTopBottomPadding: 15px;
}

body {
  margin: 0;
  padding: 0;
  clear: both;
}
.defaultLayoutContainer {
  padding-top: var(--wrapperTopPadding);
  z-index: 100;
}
.defaultLayoutContainer > .row > .col {
  min-height: calc(100vh - var(--wrapperTopPadding));
  padding-top: var(--layoutTopBottomPadding);
  padding-bottom: var(--layoutTopBottomPadding);
}
.alert-content-p {
  line-height: 30px;
}
</style>
