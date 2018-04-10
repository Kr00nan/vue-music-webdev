<template>
    <div class="itunes">
        <div class="container">
            <h1>iTunes Search</h1>            
            <input type="text" name="artist" placeholder=" Artist Name" v-model="artist"/>
            <button v-on:click.prevent="getMusic" class="btn btn-info">Get Music</button>
            <button v-on:click="logout" class="btn btn-info">Logout</button>
            <div id="songs">
                <div v-for="song in itunes">
                    <div class="card bg-light mb-3">
                        <div class="card-body">
                            <div>
                                <img :src="song.artworkUrl100" alt="album artwork">
                            </div>
                            <h5 class="card-title">{{ song.trackName }}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Artist: {{ song.artistName }}</h6>
                            <audio controls id="song.trackId">
                                <source :src=song.previewUrl>
                            </audio>
                            <button v-on:click="addTrack(song)" class="btn float-right">Add track</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import Song from './Song'

export default {
    name: 'iTunes',
    data () {
        return {
            artist: "",
            showAdd: true
        }
    },
    mounted() {

    },
    methods: {      
        getMusic(){
            this.$store.dispatch('getMusicByArtist', this.artist);
            this.artist="";
        },
        addTrack(song){
            this.$store.dispatch('addToMyTunes', song);
        },
        logout() {
            this.$store.dispatch('logout');
        }
    },
    computed: {
        itunes(){
            return this.$store.state.itunes
        }
    },
    component: {
        
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