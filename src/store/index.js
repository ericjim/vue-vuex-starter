import Vue from 'vue';
import Vuex from 'vuex';
import counterModule from './counter';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    counterModule,
  },
  strict: debug,
});

