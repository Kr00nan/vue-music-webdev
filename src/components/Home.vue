<template>
  <div class="home">
    <!-- YOU WILL PROBABLY END UP WITH SOMETHING LIKE THIS -->
    <div class="row">
      <div class="col-1">
        <div id="mySidenav" class="sidenav">
          <!-- <a href="javascript:void(0)" class="closebtn" v-on:click="closeNav()">&times;</a> -->
          <img src="..\assets\Hamburger_icon.svg" class="closebtn" v-on:click="closeNav()" />
          <my-tunes></my-tunes>
        </div>   
        <!-- Use any element to open the sidenav -->
        <img src="..\assets\Hamburger_icon.svg" v-on:click="openNav()" />
      </div>
      <div class="col-6" id="main">
        <itunes></itunes>
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
    },
    methods: {
      openNav(){
        document.getElementById("mySidenav").style.width = "500px";
        document.getElementById("main").style.marginLeft = "500px";
      },
      closeNav(){
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
      }
    }
  }
</script>

<style scoped>

  img {
    cursor: pointer;
    padding-left: 24px;
  }

  .itunes{
    color: white;
    background: rgb(26, 118, 178);
    display: inline-block;
    min-height: 98vh;
    min-width: 100%;
  }

  .my-tunes{
    color: white;
    background: rgb(26, 118, 178);
    display: inline-block;
    min-height: 98vh;
    min-width: 100%;
  }

  /* The side navigation menu */
.sidenav {
    height: 100%; /* 100% Full-height */
    width: 0; /* 0 width - change this with JavaScript */
    position: fixed; /* Stay in place */
    z-index: 1; /* Stay on top */
    top: 0; /* Stay at the top */
    left: 0;
    background-color: rgb(199, 39, 39); /* Black*/
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 60px; /* Place content 60px from the top */
    transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
}

/* The navigation menu links */
.sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
    color: #f1f1f1;
}

/* Position and style the close button (top right corner) */
.sidenav .closebtn {
    position: absolute;
    top: 18px;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
}

/* Style page content - use this if you want to push the page content to the right when you open the side navigation */
#main {
    transition: margin-left .5s;
    padding: 20px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
    .sidenav a {font-size: 18px;}
}
</style>
