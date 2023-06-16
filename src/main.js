import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index.js';
import './assets/scss/main.scss'
import router from "./router"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faDumbbell, faEnvelope, faHouse, faHeart, faBriefcaseMedical, faWeightScale, faRulerVertical, faPercent, faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { faServicestack, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
library.add(faHouse, faServicestack, faDumbbell, faHeart, faLinkedin, faEnvelope, faGithub, faBriefcaseMedical, faWeightScale, faRulerVertical, faPercent, faCirclePlus)

createApp(App).
  use(router).
  component('font-awesome-icon', FontAwesomeIcon).
  use(store).
  mount('#app')
  
