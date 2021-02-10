import { wordpressAPI } from './../../../API/axiosAPI';
export default {
	//=====JobsPageActions start==================
	JobsPageActions({ dispatch }) {
		dispatch("jobsRequest")
		dispatch("jobsSearchesRequest")
		dispatch("jobsTrackedRequest")
	},
	async jobsRequest({ commit, getters }) {
		if (Object.keys(getters.getJobSearchBlock).length) return
		try {
			commit('JobSearchBlockOn')
			const response = await wordpressAPI.getJobs();
			let data = []
			response.data.forEach(element => {
				data.push(element.acf)
			});
			console.log("data", data)
			commit('updateJobs', data)
			commit('JobSearchBlockOff')
		} catch (error) {
			console.log(error)
		}
	},
	async jobsSearchesRequest({ state, commit }) {
		if (state.MySearches.length) return
		try {
			commit('MySearchesOn')
			// const response = await wordpressAPI.getJobs();
			// let data = []
			// response.data.forEach(element => {
			// 	data.push(element.acf)
			// });
			// commit('updateMySearches', data)
			commit('MySearchesOff')
		} catch (error) {
			console.log(error)
		}
	},
	async jobsTrackedRequest({ state, commit }) {
		if (state.TrackedJob.length) return
		try {
			commit('TrackedJobOn')
			// const response = await wordpressAPI.getJobs();
			// let data = []
			// response.data.forEach(element => {
			// 	data.push(element.acf)
			// });
			// commit('updateTrackedJob', data)
			commit('TrackedJobOff')
		} catch (error) {
			console.log(error)
		}
	},
	//=====JobsPageActions end==================
}