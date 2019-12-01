import Vue from "vue";
import App from "./App.vue";
import axios from "axios";

Vue.prototype.$axios = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
