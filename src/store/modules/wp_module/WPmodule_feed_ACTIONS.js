import { wordpressAPI } from './../../../API/axiosAPI';
export default {
	//=====FeedPageActions start==================
	FeedPageActions({ dispatch }) {
		dispatch("ArticlesRequest")
	},
	async ArticlesRequest({ state, commit }) {
		if (Object.keys(state.Articles).length) return
		try {
			commit('GalleryOn')
			const response = await wordpressAPI.getArticles();
			let data = []
			response.data.forEach(element => {
				data.push(element.acf)
			});
			commit('updateArticles', data)
			commit('GalleryOff')
		} catch (error) {
			console.log(error)
		}
	},
	//=====FeedPageActions end==================
}