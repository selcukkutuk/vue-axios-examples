import Vue from "vue";
import VueRouter from "vue-router";
import AxiosGet from "@/views/AxiosGet.vue";
import AxiosGetAsyncAwait from "@/views/AxiosGetAsyncAwait.vue";
import AxiosPost from "@/views/AxiosPost.vue";
import AxiosPostAsyncAwait from "@/views/AxiosPostAsyncAwait.vue";
import AxiosGlobal from "@/views/AxiosGlobal.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/axios-get", component: AxiosGet },
  { path: "/axios-get-async-await", component: AxiosGetAsyncAwait },
  { path: "/axios-post", component: AxiosPost },
  { path: "/axios-post-async-await", component: AxiosPostAsyncAwait },
  { path: "/axios-global", component: AxiosGlobal },
  { path: "*", redirect: "/axios-get" }
];

const router = new VueRouter({
  routes
});

export default router;
