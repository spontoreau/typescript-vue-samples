import { Module } from 'vuex';
import { RetrieveEmployeeState } from './state';
import actions from './actions';
import mutations from './mutations';

const retrieveEmployeeModule: Module<RetrieveEmployeeState, {}> = {
    namespaced: true,
    state: {
        employees: [],
        error: '',
    },
    actions: actions,
    mutations: mutations,
};

export default retrieveEmployeeModule;
