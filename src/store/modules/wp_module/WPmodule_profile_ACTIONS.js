import { wordpressAPI } from './../../../API/axiosAPI';
export default {
	//=====ProfilePageActions start==================
	ProfilePageActions({ dispatch }) {
		dispatch("UserProfileCardRequest")
		dispatch("AboutCardRequest")
		dispatch("CoursesRequest")
		dispatch("ProjectsRequest")
		dispatch("SkillsEndoresmentRequest")
		dispatch("EducationCardRequest")
		dispatch("VisitorsRequest")

	},
	async UserProfileCardRequest({ state, commit }) {
		if (Object.keys(state.UserProfileCard).length) return
		try {
			commit('UserProfileCardOn')
			const avatar = await wordpressAPI.getMedia(state.currentUser.avatar[0]);
			const avatarUrl = avatar.data.source_url;
			const imageBG = await wordpressAPI.getMedia(state.currentUser.imagebg[0]);
			const imageBGurl = imageBG.data.source_url;
			let currentUser = { ...state.currentUser, avatarUrl, imageBGurl }
			commit('updateUserProfileCard', currentUser)

			setTimeout(() => {
				commit('UserProfileCardOff')
			}, 250);
		} catch (error) {
			console.log(error)
		}
	},
	AboutCardRequest({ state, commit }) {
		if (Object.keys(state.AboutCard).length) return
		try {
			commit('AboutCardOn')
			commit('updateUserAbout', state.currentUser)
			commit('AboutCardOff')
		} catch (error) {
			console.log(error)
		}
	},
	async CoursesRequest({ state, commit }) {
		if (Object.keys(state.Courses).length) return
		try {
			commit('GalleryOn')
			const response = await wordpressAPI.getCourses();
			let data = []
			response.data.forEach(element => {
				data.push(element.acf)
			});
			commit('updateCourses', data)
			commit('GalleryOff')
		} catch (error) {
			console.log(error)
		}
	},

	async ProjectsRequest({ state, commit }) {
		if (Object.keys(state.Projects).length) return
		try {
			commit('ProjectsOn')
			const response = await wordpressAPI.getProjects();
			let data = []
			response.data.forEach(element => {
				data.push(element.acf)
			});
			commit('updateProjects', data)
			setTimeout(() => {
				commit('ProjectsOff')
			}, 250);

		} catch (error) {
			console.log(error)
		}
	},
	async SkillsEndoresmentRequest() {
		try {
			// commit('SkillsEndoresmentOn')
			// //logic empty
			// commit('updateSkills', data)
			// commit('SkillsEndoresmentOff')
		} catch (error) {
			console.log(error)
		}
	},
	async EducationCardRequest() {
		try {
			// commit('UserEducationOn')
			// //logic empty
			// commit('updateProjects', data)
			// commit('UserEducationOff')
		} catch (error) {
			console.log(error)
		}
	},
	async VisitorsRequest({ state, commit }) {
		if (state.Visitors.data && state.Visitors.data.length) return
		try {
			commit('VisitorsOn')
			let visitors = state.visitors
			let visitorsAvatars = []
			for (let i = 0; i < state.visitors.length; i++) {
				const url = state.visitors[i].user.avatar;
				visitorsAvatars.push(url[0])
			}
			let avatarUrls = []
			for (let i = 0; i < visitorsAvatars.length; i++) {
				const response = await wordpressAPI.getMedia(visitorsAvatars[i])
				avatarUrls.push(response.data.source_url)
			}
			for (let i = 0; i < state.visitors.length; i++) {
				visitors[i].user.avatar = avatarUrls[i]
			}
			commit('updateVisitors', visitors)
			commit('VisitorsOff')
		} catch (error) {
			console.log(error)
		}
	}
	//=====ProfilePageActions end==================
}