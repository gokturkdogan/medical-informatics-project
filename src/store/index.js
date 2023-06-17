import { createStore } from 'vuex';
import global from './modules/global';
import health from './modules/health';

export default createStore({
  modules: {
    global,
    health
  },
});