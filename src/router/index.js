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
import AboutView from "../views/AboutView.vue";
import Appointment from "../views/Appointment.vue";
import TheSales from "../components/ProductsViews/TheSales.vue";
import ThePurchase from "../components/ProductsViews/ThePurchase.vue";
import TheProduction from "../components/ProductsViews/TheProduction.vue";
import TheWarehouse from "../components/ProductsViews/TheWarehouse.vue";
import TheFinance from "../components/ProductsViews/TheFinance.vue";
import TheHumanRescources from "../components/ProductsViews/TheHumanRescources.vue";
import TheDms from "../components/ProductsViews/TheDms.vue";

import Wms from "../components/ServicesView/Wms.vue";
import PaymentProvider from "../components/ServicesView/PaymentProvider.vue";

import ErpAllInOne from "../components/AboutView/News/ErpAllInOne";
import WhyCompaniesNeedDms from "../components/AboutView/News/WhyCompaniesNeedDms";
import WhyWebBased from "../components/AboutView/News/WhyWebBased";
import Entrepreneur from "../components/AboutView/News/Entrepreneur";
import SoftwareSolutions from "../components/AboutView/News/SoftwareSolutions";
import HowErp from "../components/AboutView/News/HowErp";
import DigitalTransformation from "../components/AboutView/News/DigitalTransformation";
import DigitalTransformationAdvantages from "../components/AboutView/News/DigitalTransformationAdvantages";
import WhatsAnApi from "../components/AboutView/News/WhatsAnApi";

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
    path: "/erp-all-in-one",
    name: "ErpAllInOne",
    component: ErpAllInOne,
  },
  {
    path: "/why-companies-need-dms",
    name: "WhyCompaniesNeedDms",
    component: WhyCompaniesNeedDms,
  },
  {
    path: "/why-web-based",
    name: "WhyWebBased",
    component: WhyWebBased,
  },
  {
    path: "/what-type-of-entrepreneur-are-you",
    name: "Entrepreneur",
    component: Entrepreneur,
  },
  {
    path: "/signs-your-business-needs-advanced-software-solution",
    name: "SoftwareSolutions",
    component: SoftwareSolutions,
  },
  {
    path: "/how-erp-can-help-small-business-to-grow",
    name: "HowErp",
    component: HowErp,
  },

  {
    path: "/how-digital-transformation-helps-accounting",
    name: "DigitalTransformation",
    component: DigitalTransformation,
  },
  {
    path: "/digital-transformation-advantages",
    name: "DigitalTransformationAdvantages",
    component: DigitalTransformationAdvantages,
  },
  {
    path: "/whats-an-api",
    name: "WhatsAnApi",
    component: WhatsAnApi,
  },

  {
    path: "/services",
    name: "services",
    component: ServicesView,
  },
  {
    path: "/appointment",
    name: "appointment",
    component: Appointment,
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
    component: Appointment,
  },

  {
    path: "/wms",
    name: "wms",
    component: Wms,
  },
  {
    path: "/payment-provider",
    name: "payment-provider",
    component: PaymentProvider,
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
