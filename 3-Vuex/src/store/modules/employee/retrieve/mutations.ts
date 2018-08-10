import { MutationTree } from 'vuex';
import { RetrieveEmployeeState } from './state';
import { Employee } from './types/employee';

const mutations: MutationTree<RetrieveEmployeeState> = {
    setEmployees: (state: RetrieveEmployeeState, employees: Employee[]) => {
        state.employees = employees;
    },
};

export default mutations;
