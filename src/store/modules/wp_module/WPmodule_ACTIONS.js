import { wordpressAPI } from './../../../API/axiosAPI';
import ProfilePageActions from './WPmodule_profile_ACTIONS'
import FeedPageActions from './WPmodule_feed_ACTIONS'
import JobsPageActions from './WPmodule_jobs_ACTIONS'
import NetworkPageActions from './WPmodule_network_ACTIONS'
import ChatPageActions from './WPmodule_chat_ACTIONS'
import NoticesPageActions from './WPmodule_notices_ACTIONS'



export default {
	async postsRequest({ state, commit }) {
		if (state.posts.length) return
		try {
			commit('FetchingOn')
			const response = await wordpressAPI.getPosts();
			let data = []
			response.data.forEach(element => {
				data.push(element.acf)
			});
			commit('FetchingOff')
			commit('updatePosts', data)
		} catch (error) {
			console.log(error)
		}
	},
	async jobsRequest({ state, commit }) {
		if (state.jobs.length) return
		try {
			commit('FetchingOn')
			const response = await wordpressAPI.getJobs();
			let data = []
			response.data.forEach(element => {
				data.push(element.acf)
			});
			commit('FetchingOff')
			commit('updateJobs', data)
		} catch (error) {
			console.log(error)
		}
	},


	async connectionsRequest({ state, commit }) {
		if (state.connections.length) return
		try {
			commit('FetchingOn')
			const response = await wordpressAPI.getConnections();
			let data = []
			response.data.forEach(element => {
				data.push(element.acf)
			});
			commit('FetchingOff')
			commit('updateConnections', data)
		} catch (error) {
			console.log(error)
		}
	},
	async notificationsRequest({ state, commit }) {
		if (state.notifications.length) return
		try {
			commit('FetchingOn')
			const response = await wordpressAPI.getNotifications();
			let data = []
			response.data.forEach(element => {
				data.push(element.acf)
			});
			commit('FetchingOff')
			commit('updateNotifications', data)
		} catch (error) {
			console.log(error)
		}
	},

	async UsermetaRequest({ state, commit, dispatch }) {
		if (state.usermeta.length) return
		try {
			commit('UserMetaOn')
			const response = await wordpressAPI.getUsermeta();
			commit('updateUsermeta', response.data)
			commit('setVisitors', response.data)
			commit('updateCurrentUser', response.data)
			dispatch("ProfilePageActions")
			commit('UserMetaOff')
		} catch (error) {
			console.log(error)
		}
	},
	...ProfilePageActions,
	...FeedPageActions,
	...JobsPageActions,
	...NetworkPageActions,
	...ChatPageActions,
	...NoticesPageActions



}