import { User } from "./user.interface";

export interface Project {
    id?: number; // Optional for project creation
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    projectManager: User;
    teamMembers?: User[];
}