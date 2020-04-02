import Vue from "vue";

export const loadData = ({ commit }) => {
  Vue.http
    .get("data.json")
    .then(data => data.json())
    .then(data => {
      if (data) {
        const { funds, stockPortfolio, stocks } = data;
        const portfolio = {
          funds,
          stockPortfolio
        };
        commit("SET_STOCKS", stocks);
        commit("SET_PORTFOLIO", portfolio);
      }
    });
};
