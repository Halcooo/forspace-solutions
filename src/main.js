import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import "bootstrap/dist/js/bootstrap.js";
import YouTube from "vue3-youtube";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"; //!!!!!!!!!!! important import only icons that will be used !!!!!!!!!!!!!!!!
import {
  faUserSecret,
  faPhone,
  faEnvelope,
  faHome,
  faGem,
  faChevronDown,
  faArrowUp,
  faArrowDown,
  faDesktop,
  faMobile,
  faServer,
  faRocket,
  faCheck,
  faMailBulk,
  faQuoteLeft,
  faPlay,
  faSearch,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faJava,
  faVuejs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faUserSecret,
  faLinkedin,
  faFacebook,
  faTwitter,
  faInstagram,
  faPhone,
  faEnvelope,
  faHome,
  faGem,
  faArrowUp,
  faChevronDown,
  faJava,
  faVuejs,
  faReact,
  faDesktop,
  faMobile,
  faServer,
  faRocket,
  faCheck,
  faMailBulk,
  faQuoteLeft,
  faPlay,

  faSearch,
  faChevronLeft
);

createApp(App)
  .use(i18n)
  .use(store)
  .use(router)
  .component("YouTube", YouTube)
  .component("font-awesome-icon", FontAwesomeIcon)

  .mount("#app");
import "bootstrap/dist/js/bootstrap.js";
