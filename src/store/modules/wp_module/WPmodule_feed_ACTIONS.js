import { wordpressAPI } from './../../../API/axiosAPI';
export default {
	//=====FeedPageActions start==================
	FeedPageActions({ dispatch }) {
		dispatch("postsRequest")
		dispatch("UserProfileCardMidRequest")
		dispatch("ArticlesRequest")
		dispatch("HashTagsRequest")
	},
	async postsRequest({ state, commit }) {
		if (state.posts.length) return
		try {
			commit('UserPostOn')
			const response = await wordpressAPI.getPosts();
			let data = []
			response.data.forEach(element => {
				data.push(element.acf)
			});
			commit('updatePosts', data)
			setTimeout(() => {
				commit('UserPostOff')
			}, 500);
		} catch (error) {
			console.log(error)
		}
	},
	async createPostRequest({ commit }, payload) {
		try {
			commit('UserPostOn')
			const response = await wordpressAPI.setNewPost(payload);
			console.log("async", response)
			if (response.status === 200) {

				//dispatch("postsRequest")
			}
			setTimeout(() => {
				commit('UserPostOff')
			}, 500);
		} catch (error) {
			console.log(error)
		}
	},
	UserProfileCardMidRequest({ state, commit }) {
		try {
			commit('UserProfileCardMidOn')
			commit('updateUserProfileCardMid', state.currentUser)
			commit('UserProfileCardMidOff')
		} catch (error) {
			console.log(error)
		}
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
	async HashTagsRequest({ state, commit }) {
		if (Object.keys(state.HashTags).length) return
		try {
			commit('HashTagsOn')
			// const response = await wordpressAPI.getArticles();
			// let data = []
			// response.data.forEach(element => {
			// 	data.push(element.acf)
			// });
			//commit('updateHashTags', data)
			commit('HashTagsOff')
		} catch (error) {
			console.log(error)
		}
	},
	async GroupsRequest({ state, commit }) {
		if (Object.keys(state.MyGroups).length) return
		try {
			commit('MyGroupsOn')
			// const response = await wordpressAPI.getArticles();
			// let data = []
			// response.data.forEach(element => {
			// 	data.push(element.acf)
			// });
			//commit('updateGroups', data)
			commit('MyGroupsOff')
		} catch (error) {
			console.log(error)
		}
	},
	//=====FeedPageActions end==================
}