import { User } from "./user.interface";

export interface Task {
    id?: number; // Optional for task creation
    title: string;
    description: string;
    dueDate: Date;
    priority: TaskPriority;
    status: TaskStatus;
    assignedTeamMembers: User[];
    subTasks?: Task[];
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

157896342
