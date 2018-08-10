import { Module } from 'vuex';
import { RetrieveEmployeeState } from './state';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const retrieveEmployeeModule: Module<RetrieveEmployeeState, {}> = {
    namespaced: true,
    state: {
        employees: [],
        error: '',
    },
    actions: actions,
    mutations: mutations,
    getters: getters,
};

export default retrieveEmployeeModule;
