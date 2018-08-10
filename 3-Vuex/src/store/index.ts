import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import retrieveEmployee from './modules/employee/retrieve';

Vue.use(Vuex);

const storeOptions: StoreOptions<{}> = {
  strict: process.env.NODE_ENV !== 'production',
  state: {},
  modules: {
    retrieveEmployee,
  },
};

export default new Vuex.Store(storeOptions);
