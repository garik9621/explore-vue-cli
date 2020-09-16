import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import Vuelidate from 'vuelidate'
import store from './store'

import "../node_modules/materialize-css/dist/js/materialize.min.js"

import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false
Vue.use(Vuelidate)

firebase.initializeApp({
	apiKey: "AIzaSyCz8FdTQ-8DO0OJefMvW8QtmxBN414BGs8",
	authDomain: "project-for-fun-73b02.firebaseapp.com",
	databaseURL: "https://project-for-fun-73b02.firebaseio.com",
	projectId: "project-for-fun-73b02",
	storageBucket: "project-for-fun-73b02.appspot.com",
	messagingSenderId: "482630356300",
	appId: "1:482630356300:web:b2d3cc768fa7b1f42b93e9"
})

let app

firebase.auth().onAuthStateChanged(() => {

	if(!app) {
		app = new Vue({
			router,
			store,
			render: h => h(App),
		}).$mount('#app')
	}


})


