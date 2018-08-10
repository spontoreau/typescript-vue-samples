import { MutationTree } from 'vuex';
import { RetrieveEmployeeState } from './state';
import { Employee } from './types/employee';

const mutations: MutationTree<RetrieveEmployeeState> = {
    setEmployees: (state: RetrieveEmployeeState, employees: Employee[]) => {
        state.employees = employees;
    },
    setFilterValue: (state: RetrieveEmployeeState, filterValue: string) => {
        state.filterValue = filterValue;
    },
};

export default mutations;
