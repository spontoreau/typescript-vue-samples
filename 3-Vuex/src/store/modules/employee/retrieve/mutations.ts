import { MutationTree } from 'vuex';
import { RetrieveEmployeeState } from './state';
import { Employee } from './types/employee';

const mutations: MutationTree<RetrieveEmployeeState> = {
    setEmployee: (state: RetrieveEmployeeState, employees: Employee[]) => {
        Object.assign(state.employees, employees);
    },
}

export default mutations;
