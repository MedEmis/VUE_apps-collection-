//import { wordpressAPI } from './../../../API/axiosAPI';
export default {
	//=====ChatPageActions start==================
	ChatPageActions({ dispatch }) {
		dispatch("ChatListRequest")
		dispatch("ChatFormRequest")
	},
	async ChatListRequest({ state, commit }) {
		if (state.JobSearchBlock.length) return
		try {
			commit('ChatListOn')
			// const response = await wordpressAPI.getJobs();
			// let data = []
			// response.data.forEach(element => {
			// 	data.push(element.acf)
			// });
			// console.log("data", data)
			// commit('updateChatList', data)
			setTimeout(() => {
				commit('ChatListOff')
			}, 500);
		} catch (error) {
			console.log(error)
		}
	},
	async ChatFormRequest({ state, commit }) {
		if (state.JobSearchBlock.length) return
		try {
			commit('ChatFormOn')
			// const response = await wordpressAPI.getJobs();
			// let data = []
			// response.data.forEach(element => {
			// 	data.push(element.acf)
			// });
			// console.log("data", data)
			// commit('updateChatForm', data)
			setTimeout(() => {
				commit('ChatFormOff')
			}, 500);
		} catch (error) {
			console.log(error)
		}
	},
	//=====ChatPageActions end==================
}