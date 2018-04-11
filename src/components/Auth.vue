<template>
    <div class="auth">
        <div class="login" v-if="showLogin">
            <h1>Login</h1>
            <form>
                <label for="email">Email</label>
                <input type="text" name="email" id="email" v-model="user.email">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" v-model="user.password">
            </form>
            <button v-on:click="login" class="btn btn-info">Login</button>
            <p>Not a user?
                <em @click="toggle" class="clickable">Register</em>
            </p>
        </div>
        <div class="register" v-if="!showLogin">
            <h1>Register</h1>
            <form>
                <label for="name">Name</label>
                <input type="text" name="name" id="name" v-model="user.name">
                <label for="email">Email</label>
                <input type="text" name="email" id="email" v-model="user.email">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" v-model="user.password">
            </form>
            <button @click="register" class="btn btn-success">Register</button>            
            <p>Already a user?
                <em @click="toggle" class="clickable">Login</em>
            </p>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'auth',
        data() {
            return {
                user: {},
                showLogin: true
            }
        },
        computed: {},
        methods: {
            //need some more methods here to login or register
            toggle() {
                this.showLogin = !this.showLogin
            },
            register(){
                this.$store.dispatch('register', this.user)
                this.user = {}
            },
            login(){
                this.$store.dispatch('login', this.user)
                this.user = {}
            }
        },
        components: {}
    }
</script>


<style scoped>
    
    .clickable:hover {
        cursor: pointer;
    }

    .auth {
        text-align: center;
    }
    h1, form, button {
        margin-bottom: 24px;
    }

</style>