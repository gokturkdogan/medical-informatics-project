import { createApp } from 'vue'
import App from './App.vue'
import './assets/scss/main.scss'
import router from "./router"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faServicestack } from '@fortawesome/free-brands-svg-icons'
library.add(faHouse,faServicestack,faDumbbell,faHeart)

createApp(App).
  use(router).
  component('font-awesome-icon', FontAwesomeIcon).
  mount('#app')
