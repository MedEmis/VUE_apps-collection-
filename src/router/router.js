
import Vue from 'vue';
import Router from 'vue-router';

import MultistepForm from '../components/MultistepForm/MultiStepForm.vue'

Vue.use(Router)


const router = new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{ path: '/', name: "authorization", redirect: '/authorization' },
		{ path: '/authorization', name: "authorization", component: MultistepForm },
		{
			path: '/axios', redirect: '/axios/lazyload', name: "axios", component: () => import('../components/Axios/Axios.vue'),
			children: [
				{ path: "lazyload", name: "lazyload", component: () => import('../components/Axios/AxiosLazy.vue') },
				{ path: "pagination", name: "pagination", component: () => import('../components/Axios/AxiosPagination.vue') },
			]
		},
		{//redirect: '/website/home',
			path: '/website', name: "website", redirect: '/website/profile', component: () => import('../components/Website/WebsiteBox.vue'),
			children: [
				{ path: "profile", name: "profile", component: () => import('../components/Website/Body/Profile/ProfileBody.vue') },
				{ path: "feed", name: "feed", component: () => import('../components/Website/Body/FEED/FeedBody.vue') },
				{ path: "network", name: "network", component: () => import('../components/Website/Body/NETWORK/NetworkBody.vue') },
				{ path: "jobs", name: "jobs", component: () => import('../components/Website/Body/JOBS/JobsBody.vue') },
				{ path: "chat", name: "chat", component: () => import('../components/Website/Body/CHAT/ChatBody.vue') },
				{ path: "notices", name: "notices", component: () => import('../components/Website/Body/NOTICES/NoticesBody.vue') },
			]
		},
	]
})

export default router