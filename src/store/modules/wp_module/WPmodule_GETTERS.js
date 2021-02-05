import fetchGetters from './WPmodule_fetch_GETTERS'



export default {
	getUsermeta(state) {
		return state.usermeta
	},
	getUserProfileCard(state) {
		return state.UserProfileCard
	},
	getAboutCard(state) {
		return state.AboutCard
	},
	getCourses(state) {
		return state.Courses.data
	},
	getProjects(state) {
		return state.Projects.data
	},
	getSkillsEndoresment(state) {
		return state.SkillsEndoresment
	},
	getUserEducation(state) {
		return state.SkillsEndoresment
	},
	getUserVisitors(state) {
		return state.Visitors
	},

	...fetchGetters
}