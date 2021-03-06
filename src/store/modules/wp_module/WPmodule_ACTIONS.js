import { wordpressAPI } from './../../../API/axiosAPI';
import ProfilePageActions from './WPmodule_profile_ACTIONS'
import FeedPageActions from './WPmodule_feed_ACTIONS'
import NetworkPageActions from './WPmodule_network_ACTIONS'
import JobsPageActions from './WPmodule_jobs_ACTIONS'
import ChatPageActions from './WPmodule_chat_ACTIONS'
import NoticesPageActions from './WPmodule_notices_ACTIONS'

export default {
	async AuthorizationRequest({ commit }, authData) {
		try {
			commit('UserMetaOn')
			const response = await wordpressAPI.authToken(authData);
			localStorage.setItem("JWT", response.token)
			localStorage.setItem("user_nicename", response.user_nicename)
			commit('UserMetaOff')
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
			commit('UserMetaOff')
			if (!Object.keys(state.UserProfileCard).length) {
				dispatch("ProfilePageActions")
			}
		} catch (error) {
			console.log(error)
		}
	},
	...ProfilePageActions,
	...FeedPageActions,
	...NetworkPageActions,
	...JobsPageActions,
	...ChatPageActions,
	...NoticesPageActions



}