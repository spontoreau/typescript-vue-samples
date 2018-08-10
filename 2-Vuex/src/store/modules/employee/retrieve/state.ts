import { Employee } from './types/employee';

export interface RetrieveEmployeeState {
    error: string;
    employees: Employee[];
}
