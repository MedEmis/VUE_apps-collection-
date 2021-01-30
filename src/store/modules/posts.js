import axiosAPI from './../../API/axiosAPI';

export default {
	actions: {
		async paginatedRequest(ctx, [page, limit]) {
			ctx.commit('postFetchingOn')
			const response = await axiosAPI.getPaginatedPosts(page, limit);
			ctx.commit('postFetchingOff')
			ctx.commit('updatePaginatedPost', response)
		},
		async infiniteRequest(ctx, [page, limit]) {
			ctx.commit('postFetchingOn')
			const response = await axiosAPI.getPaginatedPosts(page, limit);
			ctx.commit('postFetchingOff')
			ctx.commit('updateInfinitePosts', response)
		},
	},
	mutations: {
		postFetchingOn(state) {
			state.isPostFetching = true
		},
		postFetchingOff(state) {
			state.isPostFetching = false
		},
		updatePaginatedPost(state, posts) {
			state.paginatedPost = [...posts.data]
		},
		updateInfinitePosts(state, posts) {
			state.infinitePosts = [...state.infinitePosts, ...posts.data]
		}
	},
	state: {
		paginatedPost: [],
		infinitePosts: [],
		isPostFetching: true
	},
	getters: {
		getPaginatedPost(state) {
			return state.paginatedPost
		},
		getInfinitePosts(state) {
			return state.infinitePosts
		},
		getIsPostFetching(state) {
			return state.isPostFetching
		}
	},
}