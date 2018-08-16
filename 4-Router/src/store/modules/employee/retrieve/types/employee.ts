import { Team } from './team';

export interface Employee {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    hiredDate: string;
    picture: string;
    team: Team;
  }
