import { createStore } from 'vuex'

export default createStore({
  state: {
    bookmarked: 10
  },
  getters: {
  },
  mutations: {
    increaseBookmark(state){
        state.bookmarked++;
    },
    decreseBookmark(state){
        state.bookmarked--;
    }
  },
  actions: {
  },
  modules: {
  }
})