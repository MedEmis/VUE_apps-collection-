import actions from './WPmodule_ACTIONS';
import mutations from './WPmodule_MUTATORS';
import getters from './WPmodule_GETTERS';


export default {
	actions,
	mutations,
	getters,
	state: {
		//=====app_main_data==========
		currentUser: {},
		visitors: [],
		usermeta: [],
		posts: [],
		jobs: [],
		articles: [],
		projects: [],
		courses: [],
		connections: [],
		notifications: [],
		//-------end------------------
		//\\\\\\\\\\\\\\\\\\\\\\\\\\\\
		//=====components_data=========
		//###>PROFILE<----------------
		UserProfileCard: {},//done
		AboutCard: {},//done
		Courses: {},//done
		Projects: {},//done
		SkillsEndoresment: {},//--need API
		UserEducation: {},//--need API
		Visitors: {},//done
		//###>FEED<-------------------
		UserPost: {},//done
		UserProfileCardMid: {},//done
		Articles: {},//done
		HashTags: {},//--need API
		MyGroups: {},//--need API
		//###>NETWORK<----------------
		NewConnections: {},//done
		RecentConnections: {},//done
		//###>JOBS<-------------------
		JobSearchBlock: {},//done
		MySearches: {},//done
		TrackedJob: {},//--need API
		//###>CHAT<-------------------
		ChatList: {},//--need API
		ChatForm: {},//--need API
		//###>NOTICES<----------------
		NoticesBlock: {},//done
		//-------end------------------
		//\\\\\\\\\\\\\\\\\\\\\\\\\\\\
		//=====component_fetching======
		UserMetaFetching: true,
		UserProfileCardFetching: true,
		AboutCardFetching: true,
		GalleryFetching: true,
		ProjectsFetching: true,
		SkillsEndoresmentFetching: true,
		UserEducationFetching: true,
		VisitorsFetching: true,
		//###>FEED<-------------------
		HashTagsFetching: true,
		MyGroupsFetching: true,
		UserPostFetching: true,
		UserProfileCardMidFetching: true,
		//###>NETWORK<----------------
		NewConnectionsFetching: true,
		RecentConnectionsFetching: true,
		//###>JOBS<-------------------
		JobSearchBlockFetching: true,
		MySearchesFetching: true,
		TrackedJobFetching: true,
		//###>CHAT<-------------------
		ChatListFetching: true,
		ChatFormFetching: true,
		//###>NOTICES<----------------
		NoticesBlockFetching: true,
		//-------end------------------
	},

}