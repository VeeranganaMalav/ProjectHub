import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-admin-home-content',
  templateUrl: './admin-home-content.component.html',
  styleUrls: ['./admin-home-content.component.css']
})
export class AdminHomeContentComponent {
  user: User | null;

  constructor(private authService: AuthServiceService){
    this.user = authService.getUser();

    console.log(this.user?.role);
  }
}
