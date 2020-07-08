import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Post from "../views/Post.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/compose",
    name: "Compose",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Compose.vue"),
  },
  {
    path: "/post/:postId",
    name: "Post",
    component: Post,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
