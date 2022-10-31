<template>
  <div id="app">
    <!-- <Authorization/> -->
    <MainPage/>
  </div>
</template>

<script>
import MainPage from './views/MainPage.vue'
// import Authorization from './views/Authorization.vue'

export default {
  name: 'App',
  components: {
    MainPage,
    // Authorization
  }
}
</script>

<style>
</style>
