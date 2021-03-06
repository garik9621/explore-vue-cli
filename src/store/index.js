import Vue from "vue";
import Vuex from 'vuex'

import auth from "@/store/auth";
import news from "@/store/news";

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		error: null
	},

	actions: {

	},

	mutations: {
		setError(state, error) {
			state.error = error
		},

		clearError(state) {
			state.error = null
		}
	},
	getters: {
		error: s => s.error
	},

	modules: {
		auth,
		news
	}
})