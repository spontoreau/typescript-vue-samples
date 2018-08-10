import { Module } from 'vuex';
import { RetrieveEmployeeState } from './state';

const retrieveEmployeeModule: Module<RetrieveEmployeeState, {}> = {
    namespaced: true,
    state: {
        employees: [],
        error: '',
    },
};

export default retrieveEmployeeModule;
