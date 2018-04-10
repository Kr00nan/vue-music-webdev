<template>
  <div class="home">
    <!-- YOU WILL PROBABLY END UP WITH SOMETHING LIKE THIS -->
    <div class="row">
      <div class="col-1"></div>
      <div class="col-5">
        <itunes></itunes>
      </div>
      <div class="col-5">
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

  .itunes{
    color: white;
    background: rgb(120, 33, 192);
    display: inline-block;
    min-height: 98vh;
    min-width: 100%;
  }

  .my-tunes{
    color: white;
    background: rgb(18, 27, 163);
    display: inline-block;
    min-height: 98vh;
    min-width: 100%;
  }
</style>
