import { ActionTree } from 'vuex';
import { RetrieveEmployeeState } from './state';
import getAllEmployees from '@/store/modules/employee/retrieve/functions/getAllEmployees';

const actions: ActionTree<RetrieveEmployeeState, {}> = {
    retrieveAll: async ({ commit }) => {
        const employees = await getAllEmployees();
        commit('setEmployees', employees);
    },
};

export default actions;
