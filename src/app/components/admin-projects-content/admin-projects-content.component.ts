import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { ProjectService } from 'src/app/services/project.service';
import { UserApiResponse, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-projects-content',
  templateUrl: './admin-projects-content.component.html',
  styleUrls: ['./admin-projects-content.component.css']
})
export class AdminProjectsContentComponent implements OnInit{
  user: User | null;
  displayProjectComponent!: string;
  projectForm: FormGroup;
  teamMembersArray: User[] = [];
  projectManagersArray: User[] = [];

  constructor(private authService: AuthServiceService, private fb: FormBuilder, private projectService: ProjectService, private userService: UserService, private router: Router){
    this.user = authService.getUser();
    console.log(this.user?.role);

    this.displayProjectComponent = 'project-cards';

    this.getTeamMembers();
    this.getProjectManagers();

    this.projectForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      projectManager: ['', Validators.required],
      teamMembers: [[], Validators.required]
    });

  }

  ngOnInit(): void {}


  getTeamMembers() {
    this.userService.getUsers().subscribe((res: UserApiResponse) => {

      this.teamMembersArray = res.users.filter((user) => {
        return user.role == 'Team Member'
      });
    });
  }

  getProjectManagers() {
    this.userService.getUsers().subscribe((res: UserApiResponse) => {

      this.projectManagersArray = res.users.filter((user) => {
        return user.role == 'Project Manager'
      });
    });
  }

  changeProjectComponent(projectComponent: string): void{
    this.displayProjectComponent = projectComponent;
  }



  onAddFormSubmit() {
    if (this.projectForm.valid) {
      const projectData = this.projectForm.value;

      console.log("Project data: ", projectData);
      this.projectService.createProject(projectData).subscribe(
        (res) => {
          console.log("Project Creation Response: ", res);

          this.changeProjectComponent('project-cards');
        },
        (err) => {
          console.log("Project Creation Error: ", err);
        }
      );
    }
    else {
      //General error message in console when form is invalid
      console.error("Form data is invalid.");
    }
  }
}
