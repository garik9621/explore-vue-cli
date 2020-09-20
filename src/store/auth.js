import firebase from "firebase/app";

export default {
	state: {
		session: false
	},
	actions: {
		async login({commit, dispatch}, {email, password}){
			try {
				const response = await firebase.auth().signInWithEmailAndPassword(email, password)
			} catch (e) {
				commit("setError", e)
				throw e
			}
		},

		async logout() {
			try {
				await firebase.auth().signOut()
			} catch (e) {
				throw e
			}
		},

		async registration({commit, dispatch}, {email, password, name}) {
			try {
				const response = await firebase.auth().createUserWithEmailAndPassword(email, password)
				const uid = await dispatch('getUid')
				await firebase.database().ref(`/users/${uid}/info`).set({
					name
				})
			} catch (e) {
				commit("setError", e)
				throw e
			}
		},

		getUid() {
			const user = firebase.auth().currentUser
			return user ? user.uid : null
		}
	},
	mutations: {
		setSession(state, session) {
			state.session = session
		}
	},
	getters: {
		session: s => s.session
	}
}
