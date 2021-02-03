import * as axios from 'axios'

const axiosInstance = axios.create({
	// withCredentials: true,
	baseURL: "https://jsonplaceholder.typicode.com/",
	headers: {}
})
const wordpressInstance = axios.create({
	// withCredentials: true,
	baseURL: "https://headlesswordpress2021.000webhostapp.com/wp-json/",
	headers: {}
})

const URLstorage = {
	posts: "/posts"
}
const WPstorage = {
	usermeta: "wl/v1/usermeta",
	courses: "wp/v2/courses",
	articles: "wp/v2/articles",
	jobs: "wp/v2/jobs",
	projects: "wp/v2/projects",
	connections: "wp/v2/connections",
	notifications: "wp/v2/notifications",
	posts: "wp/v2/posts",
}

export const axiosAPI = {
	getPosts() { return axiosInstance.get(URLstorage.posts) },
	getPaginatedPosts(page, limit) { return axiosInstance.get(`${URLstorage.posts}?_page=${page}&_limit=${limit}`) },
}
export const wordpressAPI = {
	getUsermeta() { return wordpressInstance.get(WPstorage.usermeta) },
	getCourses() { return wordpressInstance.get(WPstorage.courses) },
	getArticles() { return wordpressInstance.get(WPstorage.articles) },
	getJobs() { return wordpressInstance.get(WPstorage.jobs) },
	getProjects() { return wordpressInstance.get(WPstorage.projects) },
	getConnections() { return wordpressInstance.get(WPstorage.connections) },
	getNotifications() { return wordpressInstance.get(WPstorage.notifications) },
	getPosts() { return wordpressInstance.get(WPstorage.posts) },
}


