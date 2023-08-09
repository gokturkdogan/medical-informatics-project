import { createApp } from 'vue';
import App from './App.vue';
import store from './store/index.js';
import './assets/scss/main.scss';
import router from "./router";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faDumbbell, faEnvelope, faHouse, faHeart, faBriefcaseMedical, faWeightScale, faRulerVertical, faPercent, faCirclePlus, faCircleCheck, faClock, faCalendar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faServicestack, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import i18n from './i18n'; // i18n örneğini içe aktarın
library.add(faHouse, faServicestack, faDumbbell, faHeart, faLinkedin, faEnvelope, faGithub, faBriefcaseMedical, faWeightScale, faRulerVertical, faPercent, faCirclePlus, faCircleCheck, faClock, faCalendar, faLocationDot);

createApp(App)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(store)
  .use(i18n) // i18n örneğini kullanın
  .mount('#app');