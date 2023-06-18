import { createStore } from 'vuex';
import global from './modules/global';
import health from './modules/health';
import training from './modules/training';

export default createStore({
  modules: {
    global,
    health,
    training
  },
});