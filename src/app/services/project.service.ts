import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../interfaces/project.interface';

export interface ProjectApiResponse {
  projects: Project[];
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = 'http://localhost:8081/projects/';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<ProjectApiResponse> {
    return this.http.get<ProjectApiResponse>(this.apiUrl);
  }
}
