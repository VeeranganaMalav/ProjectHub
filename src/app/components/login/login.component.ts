import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // This is the ngOnInit method required by the OnInit interface.
    // You can add any initialization logic here if needed.
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;

      console.log("Login Data: ", loginData);

      this.loginService.login(loginData).subscribe((res) => {
        console.log("Login Successfull !");
        console.log("Login Response: ", res);

        // Store the user in localStorage and token
        localStorage.setItem('user', JSON.stringify(res.user));
        localStorage.setItem('token', JSON.stringify(res.token));

        // Handle successful login based on user role.
        if (res.user.role === 'Admin') {
          this.router.navigate(['/admin-dashboard']);
        }
        else if (res.user.role === 'Project Manager') {
          this.router.navigate(['/project-manager-dashboard']);
        }
        else {
          this.router.navigate(['/team-member-dashboard']);
        }
      }, (err) => {
        console.log("Login Error: ", err);
      });
    }
    else{
      //General error message in console when form is invalid
      console.error("Form data is invalid.");
    }
  }
}
