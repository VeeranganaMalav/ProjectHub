import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../interfaces/task.interface';

export interface TaskApiResponse {
  tasks: Task[];
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:8081/tasks/';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<TaskApiResponse> {
    return this.http.get<TaskApiResponse>(this.apiUrl);
  }
}
