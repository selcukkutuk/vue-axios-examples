import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

axiosInstance.interceptors.request.use(config => {
  config.headers["Authorization"] = "Bearer ey123";
  return config;
});

axiosInstance.interceptors.response.use(config => {
  if (config.status === 401) {
    alert("Oturum süreniz sona erdi");
  }
  return config;
});

Vue.prototype.$axios = axiosInstance;

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
