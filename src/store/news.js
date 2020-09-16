export default {
	state: {
		articles: []
	},
	actions: {

		async getNewsList({commit}) {

			try {
				const newsList = await fetch('http://newsapi.org/v2/top-headlines?country=ru&category=technology&apiKey=32e862a1436d479396c6e521a433f65c')
					.then(response => response.json())
					.then(data => data)

				return newsList.articles

				//commit("setNewsList", newsList.articles)
			}catch (e) {
				throw e
			}

		}
	},
	mutations: {

		setNewsList(state, news) {
			state.articles = news
		}
	},
	getters: {
		newsList: s => s.articles
	}
}