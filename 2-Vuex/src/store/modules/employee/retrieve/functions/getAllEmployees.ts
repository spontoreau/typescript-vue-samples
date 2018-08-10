import { Employee } from '../types/employee';

export default async (): Promise<Employee> => {
    const response = await fetch(`${process.env.VUE_APP_API_URL}employee`);
    return await response.json();
};
