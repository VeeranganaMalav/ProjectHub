import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginResponse {
  user: {
    role: 'Admin' | 'Project Manager' | 'Team Member';
  };
  message: string;
  token: string;
}


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginApiUrl = 'http://localhost:8081/users/login';

  constructor(private http: HttpClient) {}

  login(credentials: LoginCredentials): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.loginApiUrl}`, credentials);
  }
}
