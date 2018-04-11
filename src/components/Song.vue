<template>
    <div class="song">
      <!-- <h3>{{artistNameProp}}</h3> -->
        <div class="card">
            <img class="card-img-top" :src=songProp.artworkUrl100 alt="album artwork">
                <div class="card-body">            
                <h5 class="card-title">{{songProp.trackName}}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Artist: {{songProp.artistName}}</h6>
                <audio controls preload="auto">
                    <source :src=songProp.previewUrl>
                </audio>
                <button v-on:click="addTrack(songProp)" class="btn float-right">Add track</button>
            </div>
        </div>
    </div>
  </template>
  
  <script>
export default {
    name: 'song',
    props: [
        "songProp"
    ],
    data () {
        return {
            
        }
    },
    methods: {
        addTrack(song){
            this.$store.dispatch('addToMyTunes', song);
        }
    },
    computed:{
        
    }
}

</script>

<style scoped>
    img {
        width: 100px;
        height: 100px;
    }
    .card {
        margin-top: 10px;
        color: black;
    }

</style>