import { createStore } from 'vuex';
import health from './modules/health';

export default createStore({
  modules: {
    health
  },
});