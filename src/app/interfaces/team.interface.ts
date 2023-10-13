import { User } from "./user.interface";

export interface Team {
    _id?: string; // Optional for team creation
    name: string;
    members: User[];
  }
  