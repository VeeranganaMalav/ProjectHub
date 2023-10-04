import { User } from "./user.interface";

export interface Team {
    id?: number; // Optional for team creation
    name: string;
    members: User[];
  }
  