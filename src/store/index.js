import { createStore } from 'vuex';

export default createStore({
	state() {
		return {
			none: true,
			sidenav: false,
		};
	},
	getters: {
		getSideNav(state) {
			return state.sidenav;
		},
	},
	mutations: {
		setSideNav(state, payload) {
			state.sidenav = payload;
		},
	},
	actions: {},
	modules: {},
});
