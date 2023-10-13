import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Task, TaskPriority, TaskStatus } from 'src/app/interfaces/task.interface';
import { TaskApiResponse, TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-management',
  templateUrl: './task-management.component.html',
  styleUrls: ['./task-management.component.css']
})

export class TaskManagementComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService,  private router: Router) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((res: TaskApiResponse) => {
      console.log('All Tasks ', res);

      this.tasks = res.tasks;
    });
  }

  viewTaskDetails(taskId: string | undefined){
    this.router.navigate(['/tasks', taskId]);
  }
}
