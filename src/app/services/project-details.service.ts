import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project.interface';
import { Observable } from 'rxjs';

export interface SingleProjectApiResponse {
  project: Project;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectDetailsService {
  private apiUrl = 'http://localhost:8081/projects';

  constructor(private http: HttpClient) {}

  getProjectDetails(projectId: string | undefined): Observable<SingleProjectApiResponse> {
    return this.http.get<SingleProjectApiResponse>(`${this.apiUrl}/${projectId}`);
  }
}
