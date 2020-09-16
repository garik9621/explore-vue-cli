import Vue from 'vue'
import Router from "vue-router";

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			name: 'home',
			meta: {layout: 'main'},
			component: () => import('@/views/Home.vue')
		},
		{
			path: "/auth",
			name: 'auth',
			meta: {layout: 'empty'},
			component: () => import('@/views/Auth.vue')
		},
		{
			path: "/registration",
			name: 'registration',
			meta: {layout: 'empty'},
			component: () => import('@/views/Registration.vue')
		}
	]
})