<template>

    <header>
        <nav>
            <div class="container">
                <div class="nav-wrapper">
                    <router-link to="/" class="brand-logo">Logo</router-link>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li>
                            <router-link to="/registration">Registration</router-link>
                        </li>
                        <li>
                            <router-link to="/employes">Employes</router-link>
                        </li>
                        <li v-if="!mySession">
                            <router-link to="/auth">Login</router-link>
                        </li>
                        <li v-else><a href="#" @click.prevent="logout">Logout</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

</template>

<script>
	import firebase from 'firebase'

	export default {
		name: "Header",
		computed: {
			mySession() {
				return this.$store.getters.session
			}
		},
		beforeCreate() {
			firebase.auth().onAuthStateChanged((user) => {
				this.$store.commit('setSession', user || false)
            })
        },
        methods: {
			async logout() {
				await this.$store.dispatch('logout')
                this.$router.push('/auth')
            }
        }
	}
</script>

<style scoped>

</style>
