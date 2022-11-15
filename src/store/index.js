import { createStore } from "vuex";
import servicesModule from "./modules/services.js";

export default createStore({
  state: {
    none: true,
    sidenav: false,
    sidecontent: false,
    map: false,
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
  modules: { servicesModule },
});
