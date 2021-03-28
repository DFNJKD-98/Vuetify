import Vue from "vue";
import VueRouter from "vue-router";

const index = () => import("../views/index.vue");
const bookMark = () => import("../views/bookMark/bookMark.vue");
const guide = () => import("@/views/guide.vue");
const bookMark2 = () => import("@/views/bookMark/bookMark2.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: index,
    children: [
      {
        path: "/bookMark",
        name: "bookMark",
        components: {
          default: bookMark,
          bookMark,
        },
      },
      {
        path: "/guide",
        name: "guide",
        components: {
          default: guide,
          guide,
        },
      },
      {
        path: "/bookMark2",
        name: "bookMark2",
        components: {
          default: bookMark2,
          bookMark2,
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
