import * as axios from 'axios'

const axiosInstance = axios.create({
	// withCredentials: true,
	baseURL: "https://jsonplaceholder.typicode.com/",
	headers: {}
})

const URLstorage = {
	posts: "/posts"
}

const axiosAPI = {
	getPosts() { return axiosInstance.get(URLstorage.posts) },
	getPaginatedPosts(page, limit) { return axiosInstance.get(`${URLstorage.posts}?_page=${page}&_limit=${limit}`) },
}

export default axiosAPI