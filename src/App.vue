<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import Home from './components/Home'

  export default {
    name: 'app',
    components: {
      Home
    },
    mounted(){
      this.$store.dispatch('authenticate')
    }
  }
</script>

<style>
  #app {
    font-family: 'Roboto', sans-serif;
    color: #3e4852;
    padding-top: 50px;
  }
  a {
    color: #3e4852;
    font-size: 1em;
    padding-right: 15px;
  }
  body {
    background-color: rgb(168, 179, 216);
    padding-left: 24px;
  }

</style>
