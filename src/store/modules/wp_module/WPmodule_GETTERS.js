import fetchGetters from './WPmodule_fetch_GETTERS'
export default {
	getUsermeta(state) {
		return state.usermeta
	},
	//PROFILE===================
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
	//FEED===================
	getUserPost(state) {
		return state.UserPost
	},
	getUserProfileCardMid(state) {
		return state.UserProfileCardMid
	},
	getArticles(state) {
		return state.Articles
	},
	getHashTags(state) {
		return state.HashTags
	},
	//NETWORK===================
	getNewConnections(state) {
		return state.NewConnections
	},
	getRecentConnections(state) {
		return state.RecentConnections
	},
	//JOBS===================
	getJobSearchBlock(state) {
		return state.JobSearchBlock
	},
	getMySearches(state) {
		return state.MySearches
	},
	getTrackedJob(state) {
		return state.TrackedJob
	},
	//CHAT===================
	getChatList(state) {
		return state.ChatList
	},
	getChatForm(state) {
		return state.ChatForm
	},
	//NOTICES===================
	getNoticesBlock(state) {
		return state.NoticesBlock
	},
	...fetchGetters
}