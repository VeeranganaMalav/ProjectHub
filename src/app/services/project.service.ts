import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../interfaces/project.interface';
import { AuthServiceService } from './auth-service.service';

export interface ProjectApiResponse {
  projects: Project[];
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = 'http://localhost:8081/projects/';

  constructor(private http: HttpClient, private authService: AuthServiceService) { }

  getProjects(): Observable<ProjectApiResponse> {
    return this.http.get<ProjectApiResponse>(this.apiUrl);
  }

  createProject(projectObj: Project): Observable<Project>{
    // Define custom headers
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authService.getToken()}`,
      'Content-Type': 'application/json'
    });

    return this.http.post<Project>(`${this.apiUrl}create`, projectObj, {
      headers: headers
    });
  }
}
