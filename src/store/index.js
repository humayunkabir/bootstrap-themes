import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    themes: null,
    error: null,
  },
  getters: {
    loading: ({ loading }) => loading,
    themes: ({ themes }) => themes,
    error: ({ error }) => error,
  },
  mutations: {
    GET_THEMES: (state) => {
      state.loading = true;
      axios
        .get(`${process.env.VUE_APP_API_URL}/today?limit=15`)
        .then((response) => {
          const processedData = response.data.data.map(theme => {
            console.log(theme);
            return theme;
          })
          state.themes = processedData;
          state.error = null;
        })
        .catch((error) => {
          state.themes = null;
          state.error = error;
        })
        .finally(() => {
          state.loading = false;
        });
    },
  },
  actions: {
    setThemes: ({ commit }) => {
      commit("GET_THEMES");
    },
  },
  modules: {},
});
