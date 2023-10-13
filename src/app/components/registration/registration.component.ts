import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private registrationService: RegistrationService) {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required]],
      password: ['', Validators.required],
      role: ['', Validators.required],
      profilePicture: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // This is the ngOnInit method required by the OnInit interface.
    // You can add any initialization logic here if needed.
  }

  onSubmit(): void {
    if(this.registrationForm.valid){
      const registrationData = this.registrationForm.value;

      console.log("Registration Data: ", registrationData);
      this.registrationService.register(registrationData).subscribe((res) => {
        console.log("Registration Successfull !");

        this.router.navigate(['/login']);
      }, (err) => {
        console.log("Registration Error: ", err);
      });

    }
    else{
      //General error message in console when form is invalid
      console.error("Form data is invalid.");


      // Form is invalid, mark fields as touched to trigger error messages if necessary.

      // Object.values(this.registrationForm.controls).forEach((control) => {
      //   control.markAsTouched();
      // });
    }
  }
}
