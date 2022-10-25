import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NewsView from "../views/NewsView.vue";
import ProductsView from "../views/ProductsView.vue";
import ServicesView from "../views/ServicesView.vue";
import ForspacePreview from "../views/ForspacePreview.vue";
import ContactView from "../views/ContactView.vue";
import PromoView from "../views/PromoView.vue";
import AboutView from "../views/AboutView.vue";
import TheSales from "../components/NewsView/TheSales.vue";
import ThePurchase from "../components/NewsView/ThePurchase.vue";

// import store from "@/store/index.js"; // to use store in router if needed

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/news",
    name: "news",
    component: NewsView,
    children: [
      {
        path: "/sales",
        name: "sales",
        component: TheSales,
      },
      {
        path: "/purchase",
        name: "purchase",
        component: ThePurchase,
      },
    ],
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
