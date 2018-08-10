import { Employee } from './types/employee';

export interface RetrieveEmployeeState {
    filterValue: string;
    error: string;
    employees: Employee[];
}
