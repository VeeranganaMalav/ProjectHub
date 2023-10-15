import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/interfaces/project.interface';
import { User } from 'src/app/interfaces/user.interface';
import { AuthServiceService } from 'src/app/services/auth-service.service';
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

    user: User | null;

    constructor(private route: ActivatedRoute, private projectDetailsService: ProjectDetailsService, private userService: UserService, private authService: AuthServiceService, private router: Router){
      this.user = authService.getUser();

      console.log(this.user?.role);
    }

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

    goBack(userRole: string | undefined) : void {
      if(userRole === 'Admin'){
        this.router.navigate(['/admin-dashboard/projects'])
      }
      else if(userRole === 'Project Manager'){
        this.router.navigate(['/project-manager-dashboard/projects'])
      }
      else if(userRole === 'Team Member'){
        this.router.navigate(['/team-memeber-dashboard/projects'])
      }
      else{
        this.router.navigate(['/login'])
      }
    }
}
