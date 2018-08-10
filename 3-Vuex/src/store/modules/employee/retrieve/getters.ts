import { GetterTree } from 'vuex';
import { RetrieveEmployeeState } from './state';

const getters: GetterTree<RetrieveEmployeeState, {}> = {
    employees: (state) => state.employees,
};

export default getters;
