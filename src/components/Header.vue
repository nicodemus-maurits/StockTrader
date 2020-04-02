<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link class="navbar-brand" to="/">Stock Trader</router-link>
      </div>

      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <router-link
            to="/portfolio"
            active-class="active"
            tag="li"
            class="nav-item"
          >
            <a>Portfolio</a>
          </router-link>
          <router-link
            to="/stocks"
            active-class="active"
            tag="li"
            class="nav-item"
          >
            <a>Stocks</a>
          </router-link>
        </ul>
        <strong class="navbar-text navbar-right"
          >Funds: {{ funds | currency }}</strong
        >
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a href="#" @click="endDay">End Day</a>
          </li>
          <li
            class="dropdown"
            :class="{ open: isDropdownOpen }"
            @click="isDropdownOpen = !isDropdownOpen"
          >
            <a
              class="dropdown-toggle"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Save / Load
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li>
                <a href="#" @click="saveData">Save Data</a>
              </li>
              <li>
                <a href="#" @click="loadData">Load Data</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      isDropdownOpen: false
    };
  },
  computed: {
    ...mapGetters({
      funds: "funds",
      stockPortfolio: "stockPortfolio",
      stocks: "stocks"
    })
  },
  methods: {
    ...mapActions({
      randomizeStocks: "randomizeStocks",
      fetchData: "loadData"
    }),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        funds: this.funds,
        stockPortfolio: this.stockPortfolio,
        stocks: this.stocks
      };
      this.$http.put("data.json", data);
    },
    loadData() {
      this.fetchData();
    }
  }
};
</script>
