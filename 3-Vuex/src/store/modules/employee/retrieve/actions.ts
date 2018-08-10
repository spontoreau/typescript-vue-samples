import { ActionTree } from 'vuex';
import { RetrieveEmployeeState } from './state';
import retrieveAllEmployess from './functions/retrieveAllEmployess';

const actions: ActionTree<RetrieveEmployeeState, {}> = {
    retrieveAll: async ({ commit }) => {
        const employees = await retrieveAllEmployess();
        commit('setEmployees', employees);
    },
};

export default actions;
