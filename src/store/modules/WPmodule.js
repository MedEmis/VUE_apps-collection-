import { wordpressAPI } from './../../API/axiosAPI';

export default {
	actions: {
		async postsRequest({ commit }) {
			commit('FetchingOn')
			const response = await wordpressAPI.getPosts();
			commit('FetchingOff')
			commit('updatePosts', response)
		},
		async jobsRequest({ commit }) {
			commit('FetchingOn')
			const response = await wordpressAPI.getJobs();
			commit('FetchingOff')
			commit('updateJobs', response)
		},
		async articlesRequest({ commit }) {
			commit('FetchingOn')
			const response = await wordpressAPI.getArticles();
			commit('FetchingOff')
			commit('updateArticles', response)
		},
		async projectsRequest({ commit }) {
			commit('FetchingOn')
			const response = await wordpressAPI.getProjects();
			commit('FetchingOff')
			commit('updateProjects', response)
		},
		async coursesRequest({ commit }) {
			commit('FetchingOn')
			const response = await wordpressAPI.getCourses();
			commit('FetchingOff')
			commit('updateCourses', response)
		},
		async connectionsRequest({ commit }) {
			commit('FetchingOn')
			const response = await wordpressAPI.getConnections();
			commit('FetchingOff')
			commit('updateConnections', response)
		},
		async notificationsRequest({ commit }) {
			commit('FetchingOn')
			const response = await wordpressAPI.getNotifications();
			commit('FetchingOff')
			commit('updateNotifications', response)
		},
		async UsermetaRequest({ commit }) {
			commit('FetchingOn')
			const response = await wordpressAPI.getUsermeta();
			commit('FetchingOff')
			commit('updateUsermeta', response)
		},
	},
	mutations: {
		FetchingOn(state) {
			state.isWPFetching = true
		},
		FetchingOff(state) {
			state.isWPFetching = false
		},
		updatePosts(state, posts) {
			state.posts = [...posts.data]
		},
		updateJobs(state, posts) {
			state.jobs = [...posts.data]
		},
		updateArticles(state, posts) {
			state.articles = [...posts.data]
		},
		updateProjects(state, posts) {
			state.projects = [...posts.data]
		},
		updateCourses(state, posts) {
			state.courses = [...posts.data]
		},
		updateConnections(state, posts) {
			state.connections = [...posts.data]
		},
		updateNotifications(state, posts) {
			state.notifications = [...posts.data]
		},
		updateUsermeta(state, posts) {
			state.usermeta = [...posts.data]
		},
	},
	state: {
		usermeta: [],
		posts: [],
		jobs: [],
		articles: [],
		projects: [],
		courses: [],
		connections: [],
		notifications: [],
		isWPFetching: true
	},
	getters: {
		getUsermeta(state) {
			return state.usermeta
		},
		getWPposts(state) {
			return state.posts
		},
		getWPjobs(state) {
			return state.jobs
		},
		getWParticles(state) {
			return state.articles
		},
		getWPprojects(state) {
			return state.projects
		},
		getWPcourses(state) {
			return state.courses
		},
		getWPconnections(state) {
			return state.connections
		},
		getWPnotifications(state) {
			return state.notifications
		},
		getWPfetching(state) {
			return state.isWPFetching
		},
	},
}