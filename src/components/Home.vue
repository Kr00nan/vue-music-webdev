<template>
  <div class="home">
    <!-- YOU WILL PROBABLY END UP WITH SOMETHING LIKE THIS -->
    <div class="row">
      <div class="col-6">
        <itunes></itunes>
      </div>
      <div class="col-6">
        <my-tunes></my-tunes>
      </div>
    </div>
  </div>
</template>

<script>
  import MyTunes from './MyTunes.vue'
  import Itunes from './Itunes.vue'
  export default {
    name: 'home',
    data () {
      return {
        
      }
    },
    components: {
      Itunes,
      MyTunes
    }
  }
</script>

<style>
  .my-tunes{
    background: green;
    display: inline-block;
    min-height: 98vh;
    min-width: 100%;
  }

  .itunes{
    background: red;
    display: inline-block;
    min-height: 98vh;
    min-width: 100%;
  }
</style>
