import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

Vue.use(Vuex);

const storeOptions: StoreOptions<{}> = {
  strict: process.env.NODE_ENV !== 'production',
  state: {},
  modules: {

  },
};

export default new Vuex.Store(storeOptions);
