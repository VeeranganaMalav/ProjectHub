import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/interfaces/project.interface';
import { UserRole } from 'src/app/interfaces/user.interface';
import { Router } from '@angular/router';
import { ProjectApiResponse, ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-management',
  templateUrl: './project-management.component.html',
  styleUrls: ['./project-management.component.css']
})

export class ProjectManagementComponent implements OnInit{

  projects: Project[] = [];

  constructor(private projectService: ProjectService,  private router: Router) {}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe((res: ProjectApiResponse) => {
      console.log('All Projects ', res);

      this.projects = res.projects;
    });
  }

  viewProjectDetails(projectId: string | undefined){
    this.router.navigate(['/projects', projectId]);
  }

}
