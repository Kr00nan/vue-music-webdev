<template>
    <div class="itunes">
        <div class="container">
            <h1>iTunes Search</h1>            
            <input type="text" name="artist" placeholder=" Artist Name" v-model="artist"/>
            <button v-on:click.prevent="getMusic" class="btn btn-info">Get Music</button>
            <button v-on:click="logout" class="btn btn-info">Logout</button>
            <div id="songs">
                <div v-for="song in itunes">
                    <song :songProp="song"></song>
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
    components: {
        Song
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