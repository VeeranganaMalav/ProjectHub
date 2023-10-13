import { Project } from "./project.interface";
import { Task } from "./task.interface";
import { Team } from "./team.interface";

export interface User {
    _id?: string; // Optional for user creation
    name: string;
    email: string;
    password: string;
    profilePicture?: string;
    role: UserRole;
    projects?: Project[];
    tasks?: Task[];
    teams?: Team[];
}

export enum UserRole {
    Admin = 'Admin',
    ProjectManager = 'Project Manager',
    TeamMember = 'Team Member',
}