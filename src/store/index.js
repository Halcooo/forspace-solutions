import { createStore } from "vuex";
import servicesModule from "./modules/services.js";
import mapModule from "./modules/map.js";

export default createStore({
  state: {
    none: true,
    sidenav: false,
    sidecontent: false,
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
  modules: { servicesModule, mapModule },
});
