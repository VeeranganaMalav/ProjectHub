import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface LogoutResponse {
  message: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private token: string | null = null;
  private user: User | null = null;
  private logoutApiUrl = "http://localhost:8081/users/logout";

  constructor(private router: Router, private http: HttpClient) {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      this.token = JSON.parse(storedToken);
    }

    const storedUser = localStorage.getItem('user');
    if(storedUser) {
      this.user = JSON.parse(storedUser);
    }
  }

  getUser(): User | null {
    const storedUser = localStorage.getItem('user');
    if(storedUser) {
      this.user = JSON.parse(storedUser);
      return this.user;
    }
    return null;
  }

  setToken(token: string): void {
    this.token = token;
    localStorage.setItem('token', JSON.stringify(token));
  }

  getToken(): string | null {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      this.token = JSON.parse(storedToken);
      return this.token;
    }
    return null;
  }

  clearToken(): void {
    this.token = null;
    this.user = null;
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  isAuthenticated(): boolean {
    return !!this.token && !!this.user;
  }

  logout(accessToken: string | null): void {
    this.http.post<LogoutResponse>(`${this.logoutApiUrl}`, accessToken);

    // Clear user-related data and navigate to the login page.
    this.clearToken();
    this.router.navigate(['/login']);

  }
  

  isAdmin(): boolean {
    // Check if the user has an "Admin" role based on the stored user in localStorage
    return this.isAuthenticated() && this.user?.role === "Admin";
  }

  isProjectManager(): boolean {
    // Check if the user has an "Project Manager" role based on the stored user in localStorage
    return this.isAuthenticated() && this.user?.role === "Project Manager";
  }

  isTeamMember(): boolean {
    // Check if the user has an "Team Member" role based on the stored user in localStorage
    return this.isAuthenticated() && this.user?.role === "Team Member";
  }
}
