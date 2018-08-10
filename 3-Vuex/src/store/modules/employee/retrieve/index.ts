import { Module } from 'vuex';
import { RetrieveEmployeeState } from './state';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const retrieveEmployee: Module<RetrieveEmployeeState, {}> = {
    namespaced: true,
    state: {
        employees: [],
        error: '',
    },
    actions,
    mutations,
    getters,
};

export default retrieveEmployee;
