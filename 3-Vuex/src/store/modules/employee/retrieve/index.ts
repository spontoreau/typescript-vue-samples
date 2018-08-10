import { Module } from 'vuex';
import { RetrieveEmployeeState } from './state';
import actions from './actions';

const retrieveEmployeeModule: Module<RetrieveEmployeeState, {}> = {
    namespaced: true,
    state: {
        employees: [],
        error: '',
    },
    actions: actions,
};

export default retrieveEmployeeModule;
