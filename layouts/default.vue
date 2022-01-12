<template>
  <div>
    <header>
      <b-navbar fixed="top" toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand class="brandName">
          <span>
            Mocks-Server-GUI
          </span>
          <span class="pageName bg-info btn-sm ml-2">
            Dashboard
          </span>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse" />
        <b-collapse id="nav-collapse" is-nav>
          <NavBar />
        </b-collapse>
      </b-navbar>
    </header>
    <b-container fluid class="defaultLayoutContainer">
      <b-row>
        <b-col class="col-3">
          <RouteList />
        </b-col>
        <b-col class="col-7">
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
import NavBar from '../components/NavBar'
import RouteList from '../components/RouteList'
import RightSideBar from '../components/RightSideBar'

export default {
  name: 'DefaultLayout',
  components: {
    NavBar,
    RouteList,
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
