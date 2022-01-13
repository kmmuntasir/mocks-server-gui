<template>
  <header>
    <b-navbar fixed="top" toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand class="brandName">
        <span>
          Mocks-Server-GUI
        </span>
        <span class="pageName bg-info btn-sm ml-2">
          {{ $route.name }}
        </span>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" />
      <b-collapse id="nav-collapse" is-nav>
        <NavBar />
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
import NavBar from './NavBar'

export default {
  name: 'AppHeader',
  components: {
    NavBar
  }
}
</script>

<style scoped>
  .brandName {
    font-size: 1rem;
  }
  .pageName {
    text-transform: capitalize;
    font-style: italic;
  }
</style>
