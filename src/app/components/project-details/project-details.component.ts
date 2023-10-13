import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/interfaces/project.interface';
import { User } from 'src/app/interfaces/user.interface';
import { ProjectDetailsService, SingleProjectApiResponse } from 'src/app/services/project-details.service';
import { SingleUserApiResponse, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})

export class ProjectDetailsComponent implements OnInit{
    project!: Project;
    projectManager!: User;
    teamMembers: User[] = [];

    constructor(private route: ActivatedRoute, private projectDetailsService: ProjectDetailsService, private userService: UserService){}

    ngOnInit(): void {
      this.route.params.subscribe((params) => {
        const projectId = params['id'];

        this.projectDetailsService.getProjectDetails(projectId).subscribe((res: SingleProjectApiResponse) => {
          console.log('Single Project Response', res);

          this.project = res.project;

          // console.log(res.project.projectManager);

          const projectManagerId : string | undefined = res.project.projectManager.toString();

          // Fetch project manager data
          this.userService.getUserById(projectManagerId).subscribe((userResponse: SingleUserApiResponse) => {

            this.projectManager = userResponse.user;
          });



          // Fetch team members data
          if(res.project?.teamMembers){
            for (const memberId of res.project.teamMembers) {
              // console.log(res.project.teamMembers);

              const teamMemberId = memberId.toString();

              this.userService.getUserById(teamMemberId).subscribe((userResponse: SingleUserApiResponse) => {
                this.teamMembers?.push(userResponse.user);
              });
            }
          }
        })
      })
    }
}
