import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import HomeView from "../views/HomeView.vue";
import NewsView from "../views/NewsView.vue";
import ProductsView from "../views/ProductsView.vue";
import ServicesView from "../views/ServicesView.vue";
import ForspacePreview from "../views/ForspacePreview.vue";
import ContactView from "../views/ContactView.vue";
import PromoView from "../views/PromoView.vue";
import AboutView from "../views/AboutView.vue";
import TheSales from "../components/ProductsViews/TheSales.vue";
import ThePurchase from "../components/ProductsViews/ThePurchase.vue";
import TheProduction from "../components/ProductsViews/TheProduction.vue";
import TheWarehouse from "../components/ProductsViews/TheWarehouse.vue";
import TheFinance from "../components/ProductsViews/TheFinance.vue";
import TheHumanRescources from "../components/ProductsViews/TheHumanRescources.vue";
import TheDms from "../components/ProductsViews/TheDms.vue";

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
  },
  {
    path: "/products",
    name: "products",
    component: ProductsView,
    children: [
      {
        path: "/products/sales",
        name: "sales",
        component: TheSales,
        meta: { transition: "slide-left" },
      },
      {
        path: "/products/purchase",
        name: "purchase",
        component: ThePurchase,
      },
      {
        path: "/products/production",
        name: "production",
        component: TheProduction,
      },
      {
        path: "/products/warehouse",
        name: "pwarehouse",
        component: TheWarehouse,
      },
      {
        path: "/products/dms",
        name: "dms",
        component: TheDms,
      },
      {
        path: "/products/finance",
        name: "finance",
        component: TheFinance,
      },
      {
        path: "/products/human-resources",
        name: "human-rescources",
        component: TheHumanRescources,
      },
    ],
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
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
