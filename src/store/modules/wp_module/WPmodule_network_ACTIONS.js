import { wordpressAPI } from './../../../API/axiosAPI';
export default {
	//=====NetworkPageActions start==================
	NetworkPageActions({ dispatch }) {
		dispatch("connectionsRequest")
	},
	async connectionsRequest({ getters, commit }) {
		if (Object.keys(getters.getNewConnections).length) return
		try {
			commit('NewConnectionsOn')
			commit('RecentConnectionsOn')
			const response = await wordpressAPI.getConnections();
			let data = []
			response.data.forEach(element => {
				data.push(element.acf)
			});
			const newConnection = data.filter(item => item.status === "new")
			const recentConnection = data.filter(item => item.status === "recent")
			commit('updateNewConnections', newConnection)
			commit('updateRecentConnections', recentConnection)
			commit('RecentConnectionsOff')
			setTimeout(() => {
				commit('NewConnectionsOff')
			}, 500);
		} catch (error) {
			console.log(error)
		}
	},
	//=====NetworkPageActions end==================
}