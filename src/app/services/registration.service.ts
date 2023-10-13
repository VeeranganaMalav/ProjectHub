import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private registerApiUrl = 'http://localhost:8081/users/register';

  constructor(private http: HttpClient) {}

  register(user: User) {
    return this.http.post(`${this.registerApiUrl}`, user);
  }
}
