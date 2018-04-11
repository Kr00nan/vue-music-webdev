<template>
    <div class="my-tunes">
        <div class="container">
        <h1> List of MyTunes (sorted by likes)</h1>
        <div v-for="(song, index) in mytunes">
                <div class="card bg-light mb-3">
                    <div class="card-body">
                        <!-- <h6 class="float-right"> Song # {{index + 1}}</h6> -->
                        <h6 class="float-right">Likes: {{song.likes}} </h6>
                        <h5 class="card-title">{{ song.trackName }}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Artist: {{ song.artistName }}</h6>
                        <div>
                        <audio controls preload="auto" id="song.trackId">
                            <source :src=song.previewUrl>
                        </audio></div>
                        <button class="float-left" v-on:click="promoteTrack(song)">^</button>
                        <button class="float-left" v-on:click="demoteTrack(song)">v</button>
                        <!-- <span>{{song.likes}}</span> -->
                        <button v-on:click="removeTrack(song._id)" class="btn float-right">Remove</button>
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
        this.$store.dispatch('getMyTunes');
    },
    methods: {
        removeTrack(id){
            this.$store.dispatch('removeTrack', id);
        },
        promoteTrack(song){
            song.likes++;
            this.$store.dispatch('promoteTrack', song);
        },
        demoteTrack(song){
            song.likes--;
            this.$store.dispatch('demoteTrack', song);
        }
    },
    computed: {
        mytunes(){
            return this.$store.state.myTunes;
        }
    }
}

</script>

<style>
    .card {
        color: black;
    }
</style>