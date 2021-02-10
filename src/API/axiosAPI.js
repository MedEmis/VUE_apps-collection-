import * as axios from 'axios'

const axiosInstance = axios.create({
	// withCredentials: true,
	baseURL: "https://jsonplaceholder.typicode.com/",
	headers: {}
})
const URLstorage = {
	posts: "/posts"
}
export const axiosAPI = {
	getPosts() { return axiosInstance.get(URLstorage.posts) },
	getPaginatedPosts(page, limit) { return axiosInstance.get(`${URLstorage.posts}?_page=${page}&_limit=${limit}`) },
}

///////////////////////////////////////////////////////////////////////////////////




///////////////////////////////////////////////////////////////////////////////////

const wordpressInstance = axios.create({
	// withCredentials: true,
	//baseURL: "http://http://h68139op.beget.tech/wp-json/",
	baseURL: "https://headlesswordpress2021.000webhostapp.com/wp-json/",

})
//const fetchBase = "http://http://http://h68139op.beget.tech/wp-json/"
const fetchBase = "https://headlesswordpress2021.000webhostapp.com/wp-json/"
const WPstorage = {
	authToken: "jwt-auth/v1/token",
	usermeta: "wl/v1/usermeta",
	courses: "wp/v2/courses",
	articles: "wp/v2/articles",
	jobs: "wp/v2/jobs",
	projects: "wp/v2/projects",
	connections: "wp/v2/connections",
	// notifications: "wp/v2/notifications",
	notifications: "acf/v3/notifications/",
	posts: "wp/v2/posts",
	media: "wp/v2/media",
}
export const wordpressAPI = {
	authToken(authData) {
		// 000webhost doesn't work with axios POST and PUT!!!
		return fetch(`${fetchBase}${WPstorage.authToken}/?username=${authData.username}&password=${authData.password}`, {
			method: 'POST',
		}).then(response => response.json()).then(data => data)
	},
	//GET=============
	getUsermeta() { return wordpressInstance.get(WPstorage.usermeta) },
	getCourses() { return wordpressInstance.get(WPstorage.courses) },
	getArticles() { return wordpressInstance.get(WPstorage.articles) },
	getJobs() { return wordpressInstance.get(WPstorage.jobs) },
	getProjects() { return wordpressInstance.get(WPstorage.projects) },
	getConnections() { return wordpressInstance.get(WPstorage.connections) },
	getNotifications() { return wordpressInstance.get(WPstorage.notifications) },
	getPosts() { return wordpressInstance.get(WPstorage.posts) },
	getMedia(id) { return wordpressInstance.get(WPstorage.media + "/" + id) },
	getGalery(type, id) { return wordpressInstance.get(`acf/v3/${type}/${id}/logogalery?type=photo_gallery`) },
	//SET==============
	// setNewPost(postBody) {
	// 	return fetch(`${fetchBase}${WPstorage.posts}`, {
	// 		method: 'POST',
	// 		headers: {
	// 			//'Content-Type': 'multipart/form-data',
	// 			'Content-Type': 'application/json',
	// 			'accept': 'application/json',
	// 			'Authorization': 'Bearer ' + localStorage.getItem("JWT")
	// 		},
	// 		body: JSON.stringify(postBody),
	// 	}).then(response => response.json()).then(data => data)
	// }
	setNewPost(postBody) {
		return fetch(`${fetchBase}${WPstorage.posts}`, {
			method: 'POST',
			headers: {
				'Authorization': `Bearer ${localStorage.getItem("JWT")}`
			},
			body: { postBody },
		}).then(response => response.json()).then(data => data)
		// return wordpressInstance.post(WPstorage.posts, postBody, {
		// 	headers: {
		// 		'Content-Type': 'multipart/form-data',
		// 		'accept': 'application/json',
		// 		"Access-Control-Allow-Origin": "*",
		// 		'Authorization': 'Bearer ' + localStorage.getItem("JWT")
		// 	}
		// })
	}
}


