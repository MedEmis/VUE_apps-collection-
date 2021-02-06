export default {
	UserMetaOn(state) {
		state.UserMetaFetching = true//
	},
	UserMetaOff(state) {
		state.UserMetaFetching = false//
	},
	//==Profile===
	UserProfileCardOn(state) {
		state.UserProfileCardFetching = true//
	},
	UserProfileCardOff(state) {
		state.UserProfileCardFetching = false//
	},
	//=====
	AboutCardOn(state) {
		state.AboutCardFetching = true//
	},
	AboutCardOff(state) {
		state.AboutCardFetching = false//
	},
	//=====
	GalleryOn(state) {
		state.GalleryFetching = true//
	},
	GalleryOff(state) {
		state.GalleryFetching = false//
	},
	//=====
	ProjectsOn(state) {
		state.ProjectsFetching = true//
	},
	ProjectsOff(state) {
		state.ProjectsFetching = false//
	},
	//=====
	SkillsEndoresmentOn(state) {
		state.SkillsEndoresmentFetching = true
	},
	SkillsEndoresmentOff(state) {
		state.SkillsEndoresmentFetching = false
	},
	//=====
	UserEducationOn(state) {
		state.UserEducationFetching = true
	},
	UserEducationOff(state) {
		state.UserEducationFetching = false
	},
	//=====
	VisitorsOn(state) {
		state.VisitorsFetching = true
	},
	VisitorsOff(state) {
		state.VisitorsFetching = false
	},
	//==Feed===
	UserPostOn(state) {
		state.UserPostFetching = true
	},
	UserPostOff(state) {
		state.UserPostFetching = false
	},
	//=====
	MyGroupsOn(state) {
		state.MyGroupsFetching = true
	},
	MyGroupsOff(state) {
		state.MyGroupsFetching = false
	},
	//=====
	HashTagsOn(state) {
		state.HashTagsFetching = true
	},
	HashTagsOff(state) {
		state.HashTagsFetching = false
	},
	//=====
	UserProfileCardMidOn(state) {
		state.UserProfileCardMidFetching = true
	},
	UserProfileCardMidOff(state) {
		state.UserProfileCardMidFetching = false
	},
	//===NETWORK==
	NewConnectionsOn(state) {
		state.NewConnectionsFetching = true
	},
	NewConnectionsOff(state) {
		state.NewConnectionsFetching = false
	},
	//=====
	RecentConnectionsOn(state) {
		state.RecentConnectionsFetching = true
	},
	RecentConnectionsOff(state) {
		state.RecentConnectionsFetching = false
	},
	//===JOBS==
	JobSearchBlockOn(state) {
		state.JobSearchBlockFetching = true
	},
	JobSearchBlockOff(state) {
		state.JobSearchBlockFetching = false
	},
	//=====
	MySearchesOn(state) {
		state.MySearchesFetching = true
	},
	MySearchesOff(state) {
		state.MySearchesFetching = false
	},
	//=====
	TrackedJobOn(state) {
		state.TrackedJobFetching = true
	},
	TrackedJobOff(state) {
		state.TrackedJobFetching = false
	},
	//===CHAT==
	ChatListOn(state) {
		state.ChatListFetching = true
	},
	ChatListOff(state) {
		state.ChatListFetching = false
	},
	//=====
	ChatFormOn(state) {
		state.ChatFormFetching = true
	},
	ChatFormOff(state) {
		state.ChatFormFetching = false
	},
	//===NOTICES==
	NoticesBlockOn(state) {
		state.NoticesBlockFetching = true
	},
	NoticesBlockOff(state) {
		state.NoticesBlockFetching = false
	},
	//=====



}