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
            </div>
        </div>
    </div>
</template>

<script>
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
        getMusic(artist){
            this.$store.dispatch('getMusicByArtist', this.artist);
        }
    },
    computed: {
        iTunes(){
            return this.$store.state.itunes
        }
    }
}

</script>

<style>


</style>