import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Project } from '../schema/project';
import { ApiService } from './api.service';

const routes = {
    projects: '/projects',
    project: (id: number) =>  `/projects/${id}`
};

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
    constructor(
      private apiService: ApiService) {}

    getAll(): Observable<Array<Project>> {
        return this.apiService.get(routes.projects);
    }

    getSingle(id: number): Observable<Project> {
        return this.apiService.get(routes.project(id));
    }
}
