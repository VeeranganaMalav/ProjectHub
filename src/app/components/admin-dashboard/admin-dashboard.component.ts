import { Component } from '@angular/core';
import { AdminHomeContentComponent } from '../admin-home-content/admin-home-content.component';
import { AdminProjectsContentComponent } from '../admin-projects-content/admin-projects-content.component';
import { AdminUsersContentComponent } from '../admin-users-content/admin-users-content.component';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  selectedMenuItem: string;
  user: User | null;

  constructor(private authService: AuthServiceService) {
    // Set the default selectedMenuItem to 'home'
    this.selectedMenuItem = 'home';
    this.user = authService.getUser();
  }

  selectMenuItem(item: string) {
    this.selectedMenuItem = item;
  }


  // Define variables for content components
  homeContent = AdminHomeContentComponent;
  projectsContent = AdminProjectsContentComponent;
  usersContent = AdminUsersContentComponent;
}
