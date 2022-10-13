import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NewsView from "../views/NewsView.vue";
import ProductsView from "../views/ProductsView.vue";
import ServicesView from "../views/ServicesView.vue";
import ForspacePreview from "../views/ForspacePreview.vue";
import ContactView from "../views/ContactView.vue";
import PromoView from "../views/PromoView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/news",
    name: "news",
    component: NewsView,
  },
  {
    path: "/products",
    name: "products",
    component: ProductsView,
  },
  {
    path: "/services",
    name: "services",
    component: ServicesView,
  },
  {
    path: "/forspace-preview",
    name: "forspace-preview",
    component: ForspacePreview,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/promo",
    name: "promo",
    component: PromoView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
