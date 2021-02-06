import fetchToggles from './WPmodule_fetch_MUTATORS'

export default {
	updateUsermeta(state, payload) {
		state.usermeta = [...payload]
	},
	////////===PROFILE MUTATORS=====================
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
		state.Visitors.data = []
		for (let i = 0; i < payload.length; i++) {
			state.Visitors.data.push({
				avatar: payload[i].user.avatar,
				isonline: payload[i].user.isonline[0],
				nickname: payload[i].user.nickname[0],
				position: payload[i].user.position[0]
			})
		}
	},
	updateUserProfileCard(state, { adress, avatarUrl, imageBGurl, connections, description, nickname, position }) {
		state.currentUser.avatar = avatarUrl
		state.currentUser.imagebg = imageBGurl
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
	updateProjects(state, payload) {
		state.Projects = { data: payload }
	},
	////////===FEED MUTATORS=====================
	updatePosts(state, payload) {
		state.UserPost.data = [...payload]

	},
	updateUserProfileCardMid(state, { avatar, imagebg, description, nickname }) {
		state.UserProfileCardMid = {
			avatarUrl: avatar,
			imageBGurl: imagebg,
			nickname: nickname[0],
			description: description[0],
		}
	},
	updateArticles(state, payload) {
		state.Articles = { data: payload }
	},
	updateHashTags(state, payload) {
		state.HashTags = { data: payload }
	},
	updateGroups(state, payload) {
		state.MyGroups = { data: payload }
	},
	////////===NETWORK MUTATORS=====================

	updateNewConnections(state, payload) {
		state.NewConnections = { data: payload }
	},
	updateRecentConnections(state, payload) {
		state.RecentConnections = { data: payload }
	},
	////////===JOBS MUTATORS=====================
	updateJobs(state, payload) {
		state.JobSearchBlock = { data: [...payload] }
	},
	updateMySearches(state, payload) {
		state.MySearches = { data: [...payload] }
	},
	updateTrackedJob(state, payload) {
		state.TrackedJob = { data: [...payload] }
	},
	////////===CHAT MUTATORS=====================
	updateChatList(state, payload) {
		state.ChatList = { data: [...payload] }
	},
	updateChatForm(state, payload) {
		state.ChatForm = { data: [...payload] }
	},
	////////===NOTICES MUTATORS=====================
	updateNotifications(state, payload) {
		state.NoticesBlock = { data: [...payload] }
	},
	...fetchToggles
}