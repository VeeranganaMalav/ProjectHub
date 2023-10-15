import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-admin-project-details-content',
  templateUrl: './admin-project-details-content.component.html',
  styleUrls: ['./admin-project-details-content.component.css']
})
export class AdminProjectDetailsContentComponent {
  user: User | null;

  constructor(private authService: AuthServiceService){
    this.user = authService.getUser();

    console.log(this.user?.role);
  }
}
