import { Component } from '@angular/core';
import { AdminHomeContentComponent } from '../admin-home-content/admin-home-content.component';
import { AdminProjectsContentComponent } from '../admin-projects-content/admin-projects-content.component';
import { AdminUsersContentComponent } from '../admin-users-content/admin-users-content.component';
import { User } from 'src/app/interfaces/user.interface';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent {
  selectedMenuItem: string;
  user: User | null;
  accessToken!: string | null;

  constructor(private authService: AuthServiceService, private router: Router) {
    // Set the default selectedMenuItem to 'home'
    this.selectedMenuItem = 'home';
    this.user = authService.getUser();
  }

  selectMenuItem(item: string) {
    this.selectedMenuItem = item;
  }


  // Define variables for content components
  // homeContent = AdminHomeContentComponent;
  // projectsContent = AdminProjectsContentComponent;
  // usersContent = AdminUsersContentComponent;

  redirectTo(route: string){
    switch(route){
      case 'home':
        this.selectMenuItem('home');
        this.router.navigate(['/admin-dashboard/home']);
        break;
      case 'projects':
        this.selectMenuItem('projects');
        this.router.navigate(['/admin-dashboard/projects']);
        break;
      case 'users':
        this.selectMenuItem('users');
        this.router.navigate(['/admin-dashboard/users']);
        break;
      case 'teams':
        this.selectMenuItem('teams');
        this.router.navigate(['/admin-dashboard/teams']);
        break;
      case 'profile':
        this.selectMenuItem('profile');
        this.router.navigate(['/admin-dashboard/profile']);
        break;
      default:
        break;
    }
  }

  logoutAdmin(): void {
    this.accessToken = this.authService.getToken();

    this.authService.logout(this.accessToken);
  }
}
