export default {
  state: {
    currentSlide: 1,
  },
  getters: {
    getCurrentSlide(state) {
      return state.currentSlide;
    },
  },
  mutations: {
    setCurrentSlide(state, payload) {
      state.currentSlide = payload;
    },
  },
  actions:{}
};
