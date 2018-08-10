import { GetterTree } from 'vuex';
import { RetrieveEmployeeState } from './state';

const getters: GetterTree<RetrieveEmployeeState, {}> = {
    employees: (state) => {
        return state
                .employees
                .filter((employee) =>  contains(employee.email, state.filterValue)
                                    || contains(employee.firstName, state.filterValue)
                                    || contains(employee.lastName, state.filterValue)
                                    || contains(employee .phone, state.filterValue));
    },
};

const contains = (propertyValue: string, filterValue: string) => {
    return propertyValue.indexOf(filterValue) > -1;
};

export default getters;
