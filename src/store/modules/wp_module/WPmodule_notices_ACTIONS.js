import { wordpressAPI } from './../../../API/axiosAPI';
export default {
	//=====NoticesPageActions start==================
	NoticesPageActions({ dispatch }) {
		dispatch("notificationsRequest")
	},
	async notificationsRequest({ getters, commit }) {
		if (Object.keys(getters.getNoticesBlock).length) return
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