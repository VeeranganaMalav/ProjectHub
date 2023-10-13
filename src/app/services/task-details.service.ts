import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task.interface';
import { Observable } from 'rxjs';

export interface SingleTaskApiResponse {
  task: Task;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class TaskDetailsService {
  private apiUrl = 'http://localhost:8081/tasks';

  constructor(private http: HttpClient) {}

  getTaskDetails(taskId: string | undefined): Observable<SingleTaskApiResponse> {
    return this.http.get<SingleTaskApiResponse>(`${this.apiUrl}/${taskId}`);
  }
}
