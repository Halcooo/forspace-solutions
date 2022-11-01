import { createStore } from 'vuex';

export default createStore({
	state() {
		return {
			none: true,
			grid_a: false,
			grid_b: false,
			grid_c: false,
			grid_d: false,
			grid_e: false,
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
