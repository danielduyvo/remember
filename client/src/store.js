import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
Vue.use(axios);

export default new Vuex.Store({
  state: {
    cards: [],
    testCards: [],
    loggedin: false
  },
  getters: {},
  mutations: {
    getCards(state, cards) {
      state.cards = cards;
    },
    getTestCards(state, testCards) {
      state.testCards = testCards;
    },
    checkLogin(state, status) {
      if (status == 200) {
        state.loggedin = true;
      } else {
        state.loggedin = false;
      }
    }
  },
  actions: {
    getCards(context) {
      axios.get("/cards").then(response => {
        console.log(response);
        context.commit("getCards", response.data);
      });
    },
    getTestCards(context) {
      axios.get("/test").then(response => {
        console.log(response);
        context.commit("getTestCards", response.data);
      });
    },
    checkLogin(context) {
      axios.get("/cards").then(response => {
        console.log(response);
        context.commit("checkLogin", response.status);
      });
    }
  }
});
