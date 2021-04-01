import axios from "axios";

export default {
  state: {
    loading: false,
    themes: null,
    error: null,
    dayLimit: 0,
  },
  getters: {
    loading: ({ loading }) => loading,
    themes: ({ themes }) => themes,
    dayLimit: ({ dayLimit }) => dayLimit,
    error: ({ error }) => error,
  },
  mutations: {
    setThemes: (state) => {
      state.loading = true;
      axios
        .get(`${process.env.VUE_APP_API_URL}/today?limit=${state.dayLimit}`)
        .then((response) => {
          const processedData = response.data.data.map((theme) => {
            const purchasesCounts = {};
            const keys = Object.keys(theme.purchases).filter(
              (key) => theme.purchases[key] !== "-"
            );
            let total = 0;
            keys.forEach((key, index) => {
              if (index < keys.length - 1) {
                const purchases =
                  theme.purchases[key] - theme.purchases[keys[index + 1]];
                purchasesCounts[key] = purchases;
                total += purchases;
              }
            });
            theme.purchases = purchasesCounts;
            theme.total = total;
            return theme;
          });
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
    getThemes: ({ commit, state }, payload) => {
      state.dayLimit = payload?.limit || 7;
      commit("setThemes");
    },
  },
};
