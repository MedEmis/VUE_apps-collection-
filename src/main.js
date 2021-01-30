import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import VueCompositionApi from "@vue/composition-api";
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import VueObserveVisibility from 'vue-observe-visibility'
import store from './store/vueXstore';
import router from './router/router';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './styles.scss'



Vue.use(VueObserveVisibility)
Vue.use(Vuelidate)
Vue.use(VueCompositionApi);
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.config.productionTip = false


new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')


