import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';

export interface SingleUserApiResponse {
  user: User;
  message: string;
}

export interface UserApiResponse{
  users: User[];
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8081/users';

  constructor(private http: HttpClient) {}

  getUserById(userId: string | undefined): Observable<SingleUserApiResponse> {
    return this.http.get<SingleUserApiResponse>(`${this.apiUrl}/${userId}`);
  };


  getUsers(): Observable<UserApiResponse> {
    return this.http.get<UserApiResponse>(`${this.apiUrl}/`);
  }

}
