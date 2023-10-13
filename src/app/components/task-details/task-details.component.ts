import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/interfaces/project.interface';
import { Task, TaskStatus } from 'src/app/interfaces/task.interface';
import { User } from 'src/app/interfaces/user.interface';
import { ProjectDetailsService, SingleProjectApiResponse } from 'src/app/services/project-details.service';
import { ProjectService } from 'src/app/services/project.service';
import { SingleTaskApiResponse, TaskDetailsService } from 'src/app/services/task-details.service';
import { SingleUserApiResponse, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  task!: Task;
  project!: Project;
  assignedTeamMembers: User[] = [];

  constructor(private route: ActivatedRoute, private taskDetailsService: TaskDetailsService, private userService: UserService, private projectDetailsService: ProjectDetailsService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const taskId = params['id'];

      this.taskDetailsService.getTaskDetails(taskId).subscribe((res: SingleTaskApiResponse) => {
        console.log('Single Task Response', res);

        this.task = res.task;

        // console.log(res.task.project);

        const projectId: string | undefined = res.task.project.toString();

        // Fetch project data
        this.projectDetailsService.getProjectDetails(projectId).subscribe((projectResponse: SingleProjectApiResponse) => {

          this.project = projectResponse.project;
        });



        // Fetch assigned team members data
        if (res.task?.assignedTeamMembers) {
          for (const memberId of res.task.assignedTeamMembers) {
            // console.log(res.task.assignedTeamMembers);

            const teamMemberId = memberId.toString();

            this.userService.getUserById(teamMemberId).subscribe((userResponse: SingleUserApiResponse) => {
              this.assignedTeamMembers?.push(userResponse.user);
            });
          }
        }
      })
    })
  }
}
