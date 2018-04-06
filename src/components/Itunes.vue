<template>
    <div class="itunes">
        <div class="container">
            <form @submit.prevent="getMusic">
                <h1>iTunes Search</h1>
                <div class="form-group">
                    <input type="text" name="artist" placeholder="Artist Name" v-model="artist"/>
                    <button type="submit" class="btn btn-primary">Get Music</button>
                </div>
            </form>
            <div id="songs">
                <!-- This is where the search results will display -->
                <div v-for="song in itunes">
                    <div class="card bg-light mb-3">
                        <div class="card-body">
                            <div>
                                <img :src="song.artworkUrl100" alt="album artwork">
                            </div>
                            <h5 class="card-title">{{ song.trackName }}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Artist: {{ song.artistName }}</h6>
                            <audio controls preload="auto" id="song.trackId">
                                <source :src=song.previewUrl>
                            </audio>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Song from './Song'

export default {
    name: 'iTunes',
    data () {
        return {
            artist: ""
        }
    },
    mounted() {

    },
    methods: {
        getMusic(){
            this.$store.dispatch('getMusicByArtist', this.artist);
            this.artist="";
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

</style>