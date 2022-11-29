export default {
  state: {
    map: false,
  },
  getters: {
    getMapState(state) {
      return state.map;
    },
  },
  mutations: {
    setMapState(state, payload) {
      console.log("muta", payload);
      state.map = payload;
    },
  },
  actions: {},
};
