import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { ProjectManagementComponent } from './components/project-management/project-management.component';
import { TaskManagementComponent } from './components/task-management/task-management.component';
import { TeamManagementComponent } from './components/team-management/team-management.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { ProjectManagerDashboardComponent } from './components/project-manager-dashboard/project-manager-dashboard.component';
import { TeamMemberDashboardComponent } from './components/team-member-dashboard/team-member-dashboard.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminHomeContentComponent } from './components/admin-home-content/admin-home-content.component';
import { AdminProjectsContentComponent } from './components/admin-projects-content/admin-projects-content.component';
import { AdminUsersContentComponent } from './components/admin-users-content/admin-users-content.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { AdminProjectDetailsContentComponent } from './components/admin-project-details-content/admin-project-details-content.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { EditProjectComponent } from './components/edit-project/edit-project.component';

@NgModule({
  declarations: [
    AppComponent,
    UserManagementComponent,
    ProjectManagementComponent,
    TaskManagementComponent,
    TeamManagementComponent,
    DashboardComponent,
    NotificationsComponent,
    ProjectDetailsComponent,
    TaskDetailsComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    ProjectManagerDashboardComponent,
    TeamMemberDashboardComponent,
    AdminDashboardComponent,
    AdminHomeContentComponent,
    AdminProjectsContentComponent,
    AdminUsersContentComponent,
    AdminSidebarComponent,
    AdminProjectDetailsContentComponent,
    AddProjectComponent,
    EditProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
