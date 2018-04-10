<template>
    <div class="my-tunes">
        <div class="container">
        <h1> List of MyTunes</h1>
        <div v-for="(song, index) in mytunes">
                <div class="card bg-light mb-3">
                    <div class="card-body">
                        <h6 class="float-right">Song # {{index + 1}}</h6>
                        <h5 class="card-title">{{ song.trackName }}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Artist: {{ song.artistName }}</h6>
                        <audio controls preload="auto" id="song.trackId">
                            <source :src=song.previewUrl>
                        </audio>
                        <button v-on:click="removeTrack(song._id)" class="btn float-right border">Remove</button>
                    </div>
                </div>
            </div>
        </div>        
    </div>
</template>

<script>
export default {
    name: 'My-Tunes',
    data () {
        return {
            
        }
    },
    mounted(){
        this.$store.dispatch('getMyTunes')
    },
    methods: {
        removeTrack(id){
            this.$store.dispatch('removeTrack', id);
        }
    },
    computed: {
        mytunes(){
            return this.$store.state.myTunes
        }
    }
}

</script>

<style>
    .card {
        color: black;
    }
</style>