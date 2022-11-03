import { createStore } from 'vuex';

export default createStore({
	state() {
		return {
			none: true,

			sidenav: false,
			sidecontent: false,
		};
	},
	getters: {
		getSideNav(state) {
			return state.sidenav;
		},
		getSideContent(state) {
			return state.sidecontent;
		},
	},
	mutations: {
		setSideNav(state, payload) {
			state.sidenav = payload;
		},
		setSideContent(state, payload) {
			state.sidecontent = payload;
		},
	},
	actions: {},
	modules: {},
});
