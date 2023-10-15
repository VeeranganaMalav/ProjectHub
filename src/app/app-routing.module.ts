import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { ProjectManagementComponent } from './components/project-management/project-management.component';
import { HomeComponent } from './components/home/home.component';
import { TaskManagementComponent } from './components/task-management/task-management.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ProjectManagerDashboardComponent } from './components/project-manager-dashboard/project-manager-dashboard.component';
import { TeamMemberDashboardComponent } from './components/team-member-dashboard/team-member-dashboard.component';
import { AdminProtectedService } from './services/admin-protected.service';
import { ProjectManagerProtectedService } from './services/project-manager-protected.service';
import { TeamMemberProtectedService } from './services/team-member-protected.service';
import { AdminProjectsContentComponent } from './components/admin-projects-content/admin-projects-content.component';
import { AdminHomeContentComponent } from './components/admin-home-content/admin-home-content.component';
import { AdminUsersContentComponent } from './components/admin-users-content/admin-users-content.component';
import { AdminProjectDetailsContentComponent } from './components/admin-project-details-content/admin-project-details-content.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // { path: 'projects', component: ProjectManagementComponent },
  // { path: 'projects/:id', component: ProjectDetailsComponent },
  { path: 'tasks', component: TaskManagementComponent },
  { path: 'tasks/:id', component: TaskDetailsComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [AdminProtectedService] },
  { path: 'admin-dashboard/home', component: AdminHomeContentComponent, canActivate: [AdminProtectedService] },
  { path: 'admin-dashboard/projects', component: AdminProjectsContentComponent, canActivate: [AdminProtectedService] },
  { path: 'admin-dashboard/projects/:id', component: AdminProjectDetailsContentComponent, canActivate: [AdminProtectedService] },
  { path: 'admin-dashboard/users', component: AdminUsersContentComponent, canActivate: [AdminProtectedService] },
  { path: 'project-manager-dashboard', component: ProjectManagerDashboardComponent, canActivate: [ProjectManagerProtectedService] },
  { path: 'team-member-dashboard', component: TeamMemberDashboardComponent, canActivate: [TeamMemberProtectedService] },
  { path: '**', redirectTo: '/home' }, // Redirect to 'projects' if the URL doesn't match any route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
