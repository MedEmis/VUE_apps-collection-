import fetchToggles from './WPmodule_fetch_MUTATORS'


export default {
	updatePosts(state, payload) {
		state.posts = [...payload]
	},
	updateJobs(state, payload) {
		state.jobs = [...payload]
	},


	updateConnections(state, payload) {
		state.connections = [...payload]
	},
	updateNotifications(state, payload) {
		state.notifications = [...payload]
	},




	////////////////////////////////////////////////////////////////////////////////////////



	updateUsermeta(state, payload) {
		state.usermeta = [...payload]
	},
	updateCurrentUser(state, payload) {
		state.currentUser = {
			...payload.filter(
				item =>
					item.user.iscurrent ? item.user.iscurrent[0] === "1" : null
			)[0].user
		}
	},
	setVisitors(state, payload) {
		state.visitors = [
			...payload.filter(
				item =>
					item.user.iscurrent &&
					item.user.nickname[0] !== "admin" &&
					item.user.iscurrent[0] === "0"
			)
		]
	},
	updateVisitors(state, payload) {
		state.Visitors = [...payload]
	},
	updateUserProfileCard(state, { adress, avatarUrl, imageBGurl, connections, description, nickname, position }) {
		state.UserProfileCard = {
			avatarUrl: avatarUrl,
			imageBGurl: imageBGurl,
			nickname: nickname[0],
			position: position[0],
			description: description[0],
			connections: connections[0],
			address: adress[0]
		}
	},
	updateSkills(state, payload) {
		state.SkillsEndoresment = { data: payload }
	},
	updateEducation(state, payload) {
		state.UserEducation = { data: payload }
	},
	updateUserAbout(state, { about }) {
		state.AboutCard = { about: about[0] }
	},
	updateCourses(state, payload) {
		state.Courses = { data: payload }
	},
	updateArticles(state, payload) {
		state.Articles = { data: payload }
	},
	updateProjects(state, payload) {
		state.Projects = { data: payload }
	},












	...fetchToggles

}