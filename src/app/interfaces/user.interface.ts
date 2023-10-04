export interface User {
    id?: number; // Optional for user creation
    name: string;
    email: string;
    profilePicture?: string;
    role: UserRole;
}

export enum UserRole {
    Admin = 'Admin',
    ProjectManager = 'Project Manager',
    TeamMember = 'Team Member',
}