import { Project } from "./project.interface";
import { User } from "./user.interface";

export interface Task {
    _id?: string; // Optional for task creation
    title: string;
    description: string;
    dueDate: Date;
    priority: TaskPriority;
    status: TaskStatus;
    assignedTeamMembers?: User[];
    subTasks?: string[];
    project: Project;
}

export enum TaskPriority {
    High = 'High',
    Medium = 'Medium',
    Low = 'Low',
}

export enum TaskStatus {
    Todo = 'To Do',
    InProgress = 'In Progress',
    Done = 'Done',
}