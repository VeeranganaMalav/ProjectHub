import { Task } from "./task.interface";
import { User } from "./user.interface";

export interface Project {
    _id?: string; // Optional for project creation
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    projectManager: User;
    teamMembers?: User[];
    tasks?: Task[];
}