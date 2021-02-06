export default {
	getUserMetaFetching(state) {//
		return state.UserMetaFetching
	},
	getUserProfileCardFetching(state) {
		return state.UserProfileCardFetching
	},
	getAboutCardFetching(state) {
		return state.AboutCardFetching
	},
	getGalleryFetching(state) {
		return state.GalleryFetching
	},
	getProjectsFetching(state) {
		return state.ProjectsFetching
	},
	getSkillsEndoresmentFetching(state) {
		return state.SkillsEndoresmentFetching
	},
	getUserEducationFetching(state) {
		return state.UserEducationFetching
	},
	getVisitorsFetching(state) {
		return state.VisitorsFetching
	},
	//###>FEED<-------------------
	getHashTagsFetching(state) {
		return state.HashTagsFetching
	},
	getMyGroupsFetching(state) {
		return state.MyGroupsFetching
	},
	getUserPostFetching(state) {
		return state.UserPostFetching
	},
	getUserProfileCardMidFetching(state) {
		return state.UserProfileCardMidFetching
	},
	//###>NETWORK<----------------
	getNewConnectionsFetching(state) {
		return state.NewConnectionsFetching
	},
	getRecentConnectionsFetching(state) {
		return state.RecentConnectionsFetching
	},
	//###>JOBS<-------------------
	getJobSearchBlockFetching(state) {
		return state.JobSearchBlockFetching
	},
	getMySearchesFetching(state) {
		return state.MySearchesFetching
	},
	getTrackedJobFetching(state) {
		return state.TrackedJobFetching
	},
	//###>CHAT<-------------------
	getChatListFetching(state) {
		return state.ChatListFetching
	},
	getChatFormFetching(state) {
		return state.ChatFormFetching
	},
	//###>NOTICES<----------------
	getNoticesBlockFetching(state) {
		return state.NoticesBlockFetching
	},
	//-------end------------------
}