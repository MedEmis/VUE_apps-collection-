import Vue from 'vue'
import Vuex from 'vuex'
import posts from "./modules/posts"
import WPmodule from "./modules/wp_module/WPmodule"


Vue.use(Vuex)

export default new Vuex.Store({

	modules: {
		//to decomposing logic of vuex store
		posts,
		WPmodule
	}
})