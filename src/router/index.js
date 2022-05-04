//Vue2系
//import Vue from "vue";

//import { createApp } from "vue";
// npmでVueRouterをインストール必要
import { createRouter, createWebHistory } from "vue-router";

// multi-wordでエラーは、app-test/package.jsonの"rules"に「"vue/multi-word-component-names": "off"を追加

//Vue2系
//Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "top",
    component: () => import("../views/top.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/about.vue"),
  },
  {
    path: "/work",
    name: "work",
    component: () => import("../views/work.vue"),
  },
  {
    path: "/skill",
    name: "skill",
    component: () => import("../views/skill.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
