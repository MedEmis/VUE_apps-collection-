import { wordpressAPI } from './../../../API/axiosAPI';
export default {
	//=====NoticesPageActions start==================
	NoticesPageActions({ dispatch }) {
		dispatch("notificationsRequest")
	},
	async notificationsRequest({ state, commit }) {
		if (state.NoticesBlock.length) return
		try {
			commit('NoticesBlockOn')
			const response = await wordpressAPI.getNotifications();
			let data = []
			response.data.forEach(element => {
				data.push(element.acf)
			});
			commit('updateNotifications', data)
			setTimeout(() => {
				commit('NoticesBlockOff')
			}, 500);
		} catch (error) {
			console.log(error)
		}
	},
	//=====NoticesPageActions end==================





}