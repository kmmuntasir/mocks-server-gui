<template>
  <div>
    <AppHeader />
    <OverLayWidget />
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
import OverLayWidget from '../components/common/OverLayWidget';

export default {
  name: 'DefaultLayout',
  components: {
    AppHeader,
    OverLayWidget,
    RightSideBar
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
</style>
