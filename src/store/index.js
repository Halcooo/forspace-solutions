import { createStore } from "vuex";

export default createStore({
  state: {
    test:false,
  },
  getters: {
    getTest(state){
      return state.test
    }
  },
  mutations: {
    setTestToTrue(state ,payload){
      state.test=payload
    }
  },
  actions: {},
  modules: {},
});
