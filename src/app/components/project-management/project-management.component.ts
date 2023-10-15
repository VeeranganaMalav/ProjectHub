import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/interfaces/project.interface';
import { User, UserRole } from 'src/app/interfaces/user.interface';
import { Router } from '@angular/router';
import { ProjectApiResponse, ProjectService } from 'src/app/services/project.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-project-management',
  templateUrl: './project-management.component.html',
  styleUrls: ['./project-management.component.css']
})

export class ProjectManagementComponent implements OnInit{

  projects: Project[] = [];
  user: User | null;

  constructor(private authService: AuthServiceService, private projectService: ProjectService,  private router: Router){
    this.user = authService.getUser();

    console.log(this.user?.role);
  }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe((res: ProjectApiResponse) => {
      console.log('All Projects ', res);

      this.projects = res.projects;
    });
  }

  viewProjectDetails(projectId: string | undefined){
    if(this.user?.role === 'Admin'){
      this.router.navigate(['/admin-dashboard/projects', projectId]);
    }
    else if(this.user?.role === 'Project Manager'){
      this.router.navigate(['/project-manager-dashboard/projects', projectId]);
    }
    else if(this.user?.role === 'Team Member'){
      this.router.navigate(['/team-memeber-dashboard/projects', projectId]);
    }
    // this.router.navigate(['/projects', projectId]);
  }

}
