import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome' //!!!!!!!!!!! important import only icons that will be used !!!!!!!!!!!!!!!!
// import { faUserSecret ,faPhone, faEnvelope ,faHome, faGem,faChevronDown,faArrowRightLong,faAddressBook,faLocationDot,faEnvelope,faPhone, faTimes } from '@fortawesome/free-solid-svg-icons'
// import {faFacebook, faInstagram, faLinkedin, faTwitter,faYoutube} from '@fortawesome/free-brands-svg-icons'

// library.add([faUserSecret,faLinkedin, faFacebook ,faTwitter ,faInstagram ,faPhone, faEnvelope, faHome, faGem,faChevronDown,faInstagram,faTimes,faLinkedin,faPhone,faYoutube,faEnvelope,faArrowRightLong,faAddressBook,faLocationDot]);





import { faChevronDown,faArrowRightLong,faAddressBook,faLocationDot,faEnvelope,faPhone, faTimes,faHome } from '@fortawesome/free-solid-svg-icons'
import {faInstagram, faLinkedin, faYoutube, faFacebook,faTwitter} from '@fortawesome/free-brands-svg-icons'
/* add icons to the library */
library.add([faChevronDown,faInstagram,faTimes,faLinkedin,faPhone,faYoutube,faEnvelope,faArrowRightLong,faAddressBook,faLocationDot,faFacebook,faTwitter
,faHome])



createApp(App).use(i18n).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount("#app");
import "bootstrap/dist/js/bootstrap.js"
